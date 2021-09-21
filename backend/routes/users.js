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
  console.log('login api 호출');
  const user = {
    'id' : req.body.user.id,
    'password' : req.body.user.password,
    'address' : ''
  };
  console.log(user);
  connection.query(`SELECT u_id, password FROM user WHERE u_id="${user.id}"`,async function(err,rows){
    console.log(rows);
    if(rows[0] === undefined) { // 매칭되는 아이디가 없을 경우
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
      
      console.log(newUser);

      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(newUser.password,salt);

      connection.query(`INSERT INTO user(u_id,password,address,publickey) VALUES("${newUser.id}", "${encryptedPassword}", "${newUser.address}", "${newUser.publicKey}")`,newUser,function(err,rows2){
        if(err) throw err;
      });

      console.log('회원가입 성공');
      res.send({user : newUser});
      //3.생성된 user 정보로 로그인
    }

    else if(rows[0] !== undefined && rows[0].u_id === user.id) { //매칭되는 아이디가 있을 경우
      bcrypt.compare(user.password, rows[0].password, function (err,res2) {
        //console.log("login success");
        if(res2){ //로그인 성공
          console.log('res2:'+res2);
          console.log("login success");
          connection.query(`SELECT address FROM user WHERE u_id = "${rows[0].u_id}"`,async function(err, rows3){
            user.address = rows3[0].address; 
            res.send({user : user, loginCheck:true });
          })
        }
        else { //비밀번호가 틀림
          console.log("비밀번호 틀림");
          res.send({loginCheck:false})
          //alert("비밀번호가 틀립니다");
        }
      })
    }
  })
})

module.exports = router;
 