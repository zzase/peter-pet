var express = require('express');
var router = express.Router();
const wallet = require('../kas/wallet');
const bcrypt = require('bcryptjs');
const node = require('../kas/node')


import {connection} from '../mysql/connector';

/* GET users listing. */
router.get('/get/balance/:address',async function(req, res, next) {
  const address = req.params.address;
  try{
    const balance = await node.getBalance(address);
    res.json({balance:balance});
  }catch{
    res.status(404).send('올바르지 않은 주소');
  }
});

router.get('/wenddy/info/:did', async function(req,res,next){
  const did = req.params.did;
  connection.query(`select g.name as name, g.phone as phone from government g , user u , did d where d.u_id = u.u_id and g.u_id=u.u_id and d.did ='${did}';`
  ,async function(err,rows){
    if(rows[0] === undefined || err){
      res.status(404).send({msg : "해당 did의 보호자 정보를 호출할 수 없습니다"});
    }
    else {
      const wenddy = {
        'name' : rows[0].name,
        'phone' : rows[0].phone
      }

      res.status(200).send({wenddy : wenddy});
    }
  })
})

router.get('/wenddy/check/:uid', async function(req,res,nex){
  const uid = req.params.uid;
  connection.query(`select * from government g ,user u where g.u_id  = u.u_id and g.u_id = '${uid}';`,(err,rows)=>{
    let isReg = false;

    if(err){
      console.log('check wenddy api error')
      res.status(400).send({msg: '잘못된 정보 입력'});
    }

    if(rows[0] === undefined){
      console.log(rows[0]);
      isReg = false;
      res.status(200).send({isReg : isReg});
    }

    else {
      isReg = true;
      const wenddy = {
        name : rows[0].name,
        jumin : rows[0].jumin
      }
      res.status(200).send({wenddy: wenddy, isReg : isReg});
    }
  })
})

router.post('/regist',async function(req,res,next) {
  console.log('등록 api 호출');
  const wenddy = {
    'name' : req.body.wenddy.name,
    'phone' : req.body.wenddy.phone,
    'email' : req.body.wenddy.email,
    'homeAddress' : req.body.wenddy.homeAddress,
    'jumin' : req.body.wenddy.jumin,
    'id' : req.body.wenddy.id
  };
  connection.query(`SELECT u_id FROM user WHERE u_id="${wenddy.id}"`,async function(err,rows){
    var checkReg = false;

    if(rows[0] === undefined) {
      res.send({wenddy : wenddy, checkReg : checkReg, msg : '존재하지 않는 아이디'});  
    }
    else {
      connection.query(`insert into government(name,phone,email,home_address,jumin,u_id) values ('${wenddy.name}','${wenddy.phone}','${wenddy.email}','${wenddy.homeAddress}','${wenddy.jumin}', '${wenddy.id}');`,function(err,rows){
       
        if(err) {
          console.error(err);
          checkReg = false;
        }
        else {
          checkReg = true;
        } 
        res.send({wenddy : wenddy, checkReg : checkReg, msg : '정부 등록 성공'});
      });
    
    }
  })
})

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

      const masterAccount = '0x3414834c8811a4041dC9644899c15A637290A3A6';

      //2.입력한 id,password, kas address, public key 로 새 user 생성
      const newUser = {
        'id': user.id,
        'password': user.password,
        'address': account.address,
        'publicKey': account.publicKey,
      }

      const memo = `"${newUser.id}" 웬디님 신규 회원가입 기념 1 KLAY 충전`

      const remitTx = await wallet.remitPaidByKas(masterAccount, "1" ,newUser.address , memo);
      
      console.log(newUser);

      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(newUser.password,salt);

      connection.query(`INSERT INTO user(u_id,password,address,publickey) VALUES("${newUser.id}", "${encryptedPassword}", "${newUser.address}", "${newUser.publicKey}")`,newUser,function(err,rows2){
        if(err) throw err;
      });

      console.log('회원가입 성공');
      res.send({user : newUser, loginCheck:true, remitTx:remitTx});
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
 