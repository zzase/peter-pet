import {abi,byteCode, caver, contract} from '../kas/kascon.js'

var express = require('express');
var router = express.Router();

//const deployedCa = '0x1edcca9e753ea5e548551cbab78fb71ab79274bd';
const didContract = new caver.contract(abi,'0x20dc921Eccf3F344D33713B00f128718f4f6431a');
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
    console.log(peterpet);
    console.log('address : ' + address);
    //const deployed = await contract.deploy({ data: byteCode }).send({ from: '0x3414834c8811a4041dC9644899c15A637290A3A6', gas: 10000000 });
     
    //console.log(`Deployed contract address: ${deployed.options.address}`);
    
    const result = await didContract.methods.addDid("peterpet.imgHash", peterpet.name, peterpet.birth, peterpet.breedOfDog, peterpet.gender, peterpet.adoptionDate,
      peterpet.isNeutering, peterpet.furColor, peterpet.vaccinationHistory, peterpet.notes).send({ from: address, gas: 5000000 });
    
    console.log('----------------------------------------------------');
    console.log(result);
    if(didContract.methods.dids){
        console.log(`${didContract.methods.getDid(0).call()}`);
      }
    //res.redirect('/#/result');
  }catch(err){
    console.log(err)
  }
})

module.exports = router;
