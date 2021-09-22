import {abi,byteCode, caver, contract} from '../kas/kascon.js';
import {connection} from '../mysql/connector';

var express = require('express');
var router = express.Router();

const deployedCa = '0x1aE5814180778e51644273ba2881aaa77Aa62093';
const didContract = new caver.contract(abi,deployedCa);
//const pets = require('../test/pet.json');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const did = await didContract.methods.getDid(2).call();
  const peterPetName = await didContract.methods.getPetNameByDid(`${did}`).call();
  console.log(`name:${peterPetName}`);
  console.log(`did=${did}`);
  return res.json({pname:peterPetName});
});

router.post('/regist',async function(req,res,next){
  try{
    console.log("post api 호출됨");
    //console.log(didContract);
    const peterpet = req.body.peterpet;
    const address = req.body.address;
    const id = req.body.id;

    console.log(peterpet);
    console.log('address : ' + address);
    //const deployed = await contract.deploy({ data: byteCode }).send({ from: '0x3414834c8811a4041dC9644899c15A637290A3A6', gas: 10000000 });
     
    //console.log(`Deployed contract address: ${deployed.options.address}`);
    
    const result = await didContract.methods.addDid("peterpet.imgHash", peterpet.name, peterpet.birth, peterpet.breedOfDog, peterpet.gender, peterpet.adoptionDate,
      peterpet.isNeutering, peterpet.furColor, peterpet.vaccinationHistory, peterpet.notes).send({ from: address, gas: 5000000 });
    
    console.log('----------------------------------------------------');

    const count = await didContract.methods.getCountDidByWenddy(address).call();
    const lastIndex = count - 1;
    const lastDid = await didContract.methods.getDidByWenddy(address,lastIndex).call();
    console.log('lastDid : ' + lastDid);
    connection.query(`INSERT INTO did(did,t_id,u_id) VALUES("${lastDid}", 0, "${id}")`,function(err,rows2){
      if(err) throw err;
    });
    console.log(result);

    res.send({user : {id : id, address : address}, did : lastDid, result : result});

  }catch(err){
    console.log(err)
  }
})

module.exports = router;
