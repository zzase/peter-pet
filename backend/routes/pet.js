import {contract,CA} from '../kas/peterpetDid.js';
import {connection} from '../mysql/connector';

const wallet = require('../kas/wallet');

var express = require('express');
var router = express.Router();

//const pets = require('../test/pet.json');

/* GET home page. */

router.get('/dids/owner/:address', async function(req, res, next) {
  console.log('get all dids api call');
  const address = req.params.address;
  if(address === "undefined") res.status(400).send('address 정보가 올바르지 않습니다');
  else {
    try{
      const dids = await contract.methods.getDidsByWenddy(address).call();
      const length = await contract.methods.getCountDidByWenddy(address).call();
      const names = [];
      for(var i =0; i<length; i++){
        names.push(await contract.methods.getPetNameByDid(`${dids[i]}`).call());
      }
      if(dids === undefined){
        res.status(400).send(`${address}로 등록된 did가 없습니다`);
      }
      else {
        res.status(200).send({address : address, dids: dids, names:names, length:length});
      }
    }catch(err){
      res.status(400).send({msg : err})
    }
  }
});

router.get('/noqr', async function(req, res, next) {
  console.log('get noQR did list api call');

  connection.query(`SELECT d.did as did , d.u_id as id, u.address as address ,d.issueDate as issueDate , d.url as url FROM did d, user u 
  WHERE d.u_id = u.u_id and d.isQR = FALSE 
  ORDER BY d.issueDate;`
  ,function(err,rows){
    if(rows === undefined){
      res.status(400).send({msg : "잘못된 요청"})
    }
    else {
      for(var i=0; i< Object.keys(rows).length; i++){
        var date = new Date(rows[i].issueDate);
        rows[i].issueDate = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`
      }
      res.status(200).send({rows:rows});
    }
  })
});

router.get('/missing', async function(req, res, next) {
  console.log('get missing did list api call');

  connection.query(`SELECT did, u_id as id, missingDate from missing`
  ,async function(err,rows){
    if(rows === undefined){
      res.status(400).send({msg : "잘못된 요청"})
    }
    else {
      for(var i=0; i< Object.keys(rows).length; i++){
        var date = new Date(rows[i].missingDate);
        rows[i].missingDate = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`
        rows[i].name = await contract.methods.getPetNameByDid(rows[i].did).call();
      }
      res.status(200).send({rows:rows});
    }
  })
});

router.get('/info/did/:did', async function(req, res, next) {
  console.log('get all pet Info api call');
  const did = req.params.did;
  if(did === undefined) res.status(404).send('did 정보가 올바르지 않습니다');
  else {
    try{
      const peterpet = await contract.methods.getAllInfoByDid(did).call();
    
      if(peterpet === undefined){
        res.status(404).send(`${did}로 등록된 peterpet정보를 찾을수 없습니다.`);
      }
      else {
        connection.query(`SELECT issueDate FROM did WHERE did="${did}"`,async function(err,rows){
          if(err){
            res.status(404).send(`${did}로 등록된 peterpet정보를 찾을수 없습니다.`);
          }
          else {
            const issueDate = new Date(rows[0].issueDate);
            res.status(200).send({ 
              peterpet: {
                did : did,
                imgHash : peterpet.imgHash,
                name : peterpet.name,
                birth : peterpet.birth,
                breedOfDog : peterpet.breedOfDog,
                adoptionDate : peterpet.adoptionDate,
                isNeutering : peterpet.isNeutering,
                furColor : peterpet.furColor,
                vaccinationHistory : peterpet.vaccinationHistory,
                notes : peterpet.notes,
                missing : peterpet.missing,
                gender : peterpet.gender,
                paNftId : peterpet.paNftId,
                issueDate : {
                  year : issueDate.getFullYear(),
                  month : issueDate.getMonth() +1,
                  date : issueDate.getDate()
                },
                imgLink : `https://ipfs.io/ipfs/${peterpet.imgHash}`
            }
        });
        }
      })
    }
    }catch(err){
      console.log(err)
    }
    
  }
});

router.get('/name/:did', async function(req, res, next) {
  console.log('get pet Name api call');
  const did = req.params.did;
  if(did === undefined) res.status(404).send('did 정보가 올바르지 않습니다');
  else {
    try{
      const name = await contract.methods.getPetNameByDid(did).call();
    
      if(name === undefined){
        res.status(404).send(`${did}로 등록된 peterpet 이름을 찾을수 없습니다.`);
      }
      else {
        connection.query(`SELECT * FROM did WHERE did="${did}"`,async function(err,rows){
          if(err){
            res.status(404).send(`${did}로 등록된 peterpet정보를 찾을수 없습니다.`);
          }
          else {
            res.status(200).send({ 
              peterpet: {
                did : did,
                name : name,
            }
        });
        }
      })
    }
    }catch(err){
      console.log(err)
    }
    
  }
});

router.post('/regist',async function(req,res,next){
  try{
    console.log("post api 호출됨");
    //console.log(contract);
    const peterpet = req.body.peterpet;
    const address = req.body.address;
    const id = req.body.id;

    console.log(peterpet);
    console.log('address : ' + address);
   
    
    // const result = await contract.methods.addDid(peterpet.imgHash, peterpet.name, peterpet.birth, peterpet.breedOfDog, peterpet.gender, peterpet.adoptionDate,
    //   peterpet.isNeutering, peterpet.furColor, peterpet.vaccinationHistory, peterpet.notes).send({ from: address, gas: 5000000 });
    
    const addDidData = await contract.methods.addDid(peterpet.imgHash, peterpet.name, peterpet.birth, peterpet.breedOfDog, peterpet.gender, peterpet.adoptionDate,
    peterpet.isNeutering, peterpet.furColor, peterpet.vaccinationHistory, peterpet.notes,peterpet.paNftId).encodeABI();

    console.log("addDidData : " + addDidData);

    const txHash = await wallet.feeDelegated(address, CA, addDidData);

    console.log("delegated Tx Hash : " + txHash);
    
    console.log('----------------------------------------------------');

    setTimeout(async ()=> {
      try{
        const lastDid = await contract.methods.getLastDidByWenddy(address).call();
        console.log('lastDid : ' + lastDid);

        let date = new Date();
        let today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        connection.query(`INSERT INTO did(did,t_id,u_id,url,issueDate,isQR) VALUES("${lastDid}", 0, "${id}","http://localhost:8080/#/pet/own/${lastDid}","${today}",false)`,function(err,rows2){
          if(err){
            res.status(404).send({err:err , checkReg : false});
          }
          else {
            res.status(200).send({user : {id : id, address : address}, did : lastDid , txHash:txHash, checkReg:true});
          }
        });
      }catch(err){
        console.log(err)
      }

    },2000);

  }catch(err){
    console.log(err)
  }
  
})

router.post('/tinkerbell',async function(req,res,next) {
  console.log('팅커벨 선택 api 호출');
  const tinkerbellType = req.body.tinkerbellType;
  const address = req.body.address;
  try{
    const lastDid = await contract.methods.getLastDidByWenddy(address).call();
  
    console.log('lastDid : ' + lastDid);
    if(lastDid === undefined){
      res.status(404).send({msg : "Last DID is undefined"})
    }
    else{
      connection.query(`SELECT did FROM did WHERE did="${lastDid}"`,async function(err,rows){
        let checkUpdate = false;
        let msg = '';
        if(rows[0] === undefined) {
          res.send({did : lastDid, checkUpdate : checkUpdate, msg : '존재하지 않는 DID'});  
        }
  
        else {
          connection.query(`update did set t_id = ${tinkerbellType} where did = "${lastDid}"`,async function(err,rows){
            if(err) {
              console.error(err);
              checkUpdate = false;
              msg = 'db 오류발생'
              res.status(404).send({msg:msg , error:err});
            }
            else {
              checkUpdate = true;
              const name = await contract.methods.getPetNameByDid(`${lastDid}`).call();
              const imgHash = await contract.methods.getPetImgByDid(`${lastDid}`).call();
              console.log(name);
  
              if(tinkerbellType === 1){
                msg = '입력하신 주소로 외장칩이 발송되었습니다';
              }
  
              else {
                msg = '가까운 동물병원으로 가셔서 발급된 QR코드나 DID를 알려주세요!'
              }
              res.status(200).send({peterpet : {name : name, did : lastDid, imgLink:`https://ipfs.io/ipfs/${imgHash}`, url : `"http://localhost:8080/#/pet/own/${lastDid}"`}, checkUpdate:checkUpdate, tinkerbellType : tinkerbellType, msg : msg});
            } 
          }); 
        }
      })
    }
  }catch{ 
  }
})


router.post('/report/missing',async function(req,res,next) {
  console.log('실종신고 api 호출');
  const did = req.body.did;
  const address = req.body.address;
  const id = req.body.id;

  let date = new Date();
  let today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  
  connection.query(`SELECT did FROM did WHERE did="${did}"`,async function(err,rows){
    let checkUpdate = false;
    let msg = '';

    
    if(rows[0] === undefined) {
      msg = '존재하지 않는 DID'
      res.status(404).send({did : did, checkUpdate : checkUpdate, msg : msg});  
    }
    else {
      try{
        connection.query(`insert into missing(did,u_id,missingDate) values ('${did}','${id}','${today}');`,async function(err,rows2){
          if(err){
            res.status(404).send({err:err , checkUpdate : checkUpdate});
          }
          else {
            checkUpdate = true;
            msg = `${did} 실종신고 완료`
            const result = await contract.methods.updateMissingStatus(did,true).send({ from: address, gas: 5000000 });
            res.status(200).send({did : did , result:result, checkUpdate:checkUpdate, msg:msg}) 
          }
        });
      }catch(error){
        checkUpdate = false;
        res.status(400).send({ checkUpdate:checkUpdate,msg:"잔액부족"});
      }
    }
  })
})

router.delete('/report/missing/cancel',async function(req,res,next) {
  console.log('실종신고 취소 api 호출');
  const did = req.body.did;
  const address = req.body.address;

  connection.query(`SELECT did FROM missing WHERE did="${did}"`,async function(err,rows){
    let checkUpdate = false;
    let msg = '';

    
    if(rows[0] === undefined) {
      msg = '존재하지 않는 DID'
      res.status(404).send({did : did, checkUpdate : checkUpdate, msg : msg});  
    }
    else {
      try{
        connection.query(`DELETE from missing WHERE did = '${did}'`,async function(err,rows2){
          if(err){
            res.status(404).send({err:err , checkUpdate : checkUpdate});
          }
          else {
            checkUpdate = true;
            msg = `${did} 실종신고 취소`
            const result = await contract.methods.updateMissingStatus(did,false).send({ from: address, gas: 5000000 });
            res.status(200).send({did : did , result:result, checkUpdate:checkUpdate, msg:msg}) 
          }
        });
      }catch(error){
        checkUpdate = false;
        res.status(400).send({ checkUpdate:checkUpdate,msg:"잔액부족"});
      }
    }
  })
})

router.put('/make/qr',async function(req,res,next){
  console.log('isQR True api')
  const did = req.body.did;
  console.log(did);
  var msg = ''
  var checkUpdate = false
  var status = 400
  connection.query(`update did set isQR = TRUE where did = "${did}"`,async function(err,rows){
    if(err) {
      msg = '존재하지 않는 DID'
      checkUpdate = false
      status = 400  
    }
    else {
      msg = 'QR코드를 출력합니다'
      checkUpdate = true
      status = 200
    }
    res.status(status).send({did : did, msg : msg, checkUpdate:checkUpdate});
  })
})

module.exports = router;
