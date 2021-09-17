var express = require('express');
var router = express.Router();
const wallet = require('../kas/wallet');
const bcrypt = require('bcryptjs');

import {connection} from '../mysql/connector';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',async function(req,res,next) {
  const user = {
    'id' : req.body.user.id,
    'password' : req.body.user.password
  };
  connection.query(`SELECT u_id, password FROM user WHERE u_id=${user.id}`,function(err,row){
    if(row[0] == undefined) { // 매칭되는 아이디가 없을 경우
      //1.kas 계정 생성
      const account = await wallet.createAccount();
      console.log(account);

      //2.입력한 id,password, kas address, public key 로 새 user 생성
      const newUser = {
        'id': user.id,
        'password': user.password,
        'address': account.address,
        'publicKey': account.publicKey,
      }

      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(newUser.password,salt);

      connection.query(`INSERT INTO user VALUES(${newUser.id}, ${encryptedPassword}, ${newUser.address}, ${newUser.publicKey})`,newUser,function(err,row2){
        if(err) throw err;
      });
      //3.생성된 user 정보로 로그인
    }

    if(row[0] !== undefined && row[0] === user.id) { //매칭되는 아이디가 있을 경우
      bcrypt.compare(user.password, row[0].password, function (err,res2) {
        if(res2){ //로그인 성공

        }
        else { //비밀번호가 틀림

        }
      })
    }
  })
})

module.exports = router;
 