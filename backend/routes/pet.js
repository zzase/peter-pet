import {contract,CA} from '../kas/peterpetDid.js';
import {connection} from '../mysql/connector';

const wallet = require('../kas/wallet');

var express = require('express');
var router = express.Router();

//const pets = require('../test/pet.json');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const did = await contract.methods.getDid(2).call();
  const peterPetName = await contract.methods.getPetNameByDid(`${did}`).call();
  console.log(`name:${peterPetName}`);
  console.log(`did=${did}`);
  return res.json({pname:peterPetName});
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

    const addDidData = await contract.methods.addDid("peterpet.imgHash", peterpet.name, peterpet.birth, peterpet.breedOfDog, peterpet.gender, peterpet.adoptionDate,
    peterpet.isNeutering, peterpet.furColor, peterpet.vaccinationHistory, peterpet.notes).encodeABI();

    console.log("addDidData : " + addDidData);

    const txHash = await wallet.feeDelegated(address, CA, addDidData);

    console.log("delegated Tx Hash : " + txHash);
    
    console.log('----------------------------------------------------');

    setTimeout(async ()=> {
      const count = await contract.methods.getCountDidByWenddy(address).call();
      const lastIndex = count - 1;
      if(lastIndex < 0) lastIndex = 0;
      const lastDid = await contract.methods.getDidByWenddy(address,lastIndex).call();
      console.log('lastDid : ' + lastDid);
      connection.query(`INSERT INTO did(did,t_id,u_id) VALUES("${lastDid}", 0, "${id}")`,function(err,rows2){
        if(err) throw err;
      });

      res.send({user : {id : id, address : address}, did : lastDid , txHash:txHash});

    },2000);

  }catch(err){
    console.log(err)
  }
  
})

router.post('/tinkerbell',async function(req,res,next) {
  console.log('팅커벨 선택 api 호출');
  const tinkerbellType = req.body.tinkerbellType;
  const address = req.body.address;
  
  const count = await contract.methods.getCountDidByWenddy(address).call();
  const lastIndex = count - 1;
  if(lastIndex < 0) lastIndex = 0;
  const lastDid = await contract.methods.getDidByWenddy(address,lastIndex).call();
  console.log('lastDid : ' + lastDid);

  connection.query(`SELECT did FROM did WHERE did="${lastDid}"`,async function(err,rows){
    let checkUpdate = false;
    let msg = '';
    if(rows[0] === undefined) {
      res.send({did : lastDid, checkUpdate : checkUpdate, msg : '존재하지 않는 DID'});  
    }

    else {
      connection.query(`update did set t_id = ${tinkerbellType} where did = "${lastDid}"`,function(err,rows){
        if(err) {
          console.error(err);
          checkUpdate = false;
          msg = 'db 오류발생'
        }
        else {
          checkUpdate = true;
          if(tinkerbellType === 1){
            msg = '입력하신 주소로 외장칩이 발송되었습니다';
          }

          else {
            msg = '가까운 동물병원으로 가셔서 발급된 QR코드나 DID를 알려주세요!'
          }
        } 
        res.send({did : lastDid, checkUpdate:checkUpdate, tinkerbellType : tinkerbellType, msg : msg});
      });
    
    }
  })
})

module.exports = router;
