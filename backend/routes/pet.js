import Caver from 'caver-js-ext-kas/node_modules/caver-js';
import {abi,byteCode, caver, contract} from '../kas/deploy.js'

var express = require('express');
var router = express.Router();

const deployedCa = '0x2aA55a1fA8f14a332E120210B16f8cCe2B5f9559';
const didContract = new caver.contract(abi,deployedCa);
//const pets = require('../test/pet.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  //const peterPetName = await didContract.methods.getPetNameByDid(didContract.methods.dids(1))
  return res.json({peterpet:"test get method"});
});

router.post('/',async function(req,res,next){
  try{
    console.log("post api 호출됨");
    const peterpet = req.body.peterpet;
    // const deployed = await contract.deploy({ data: byteCode }).send({ from: '0x3414834c8811a4041dC9644899c15A637290A3A6', gas: 10000000 });
     
    //console.log(`Deployed contract address: ${deployedCa}`);
    
    const result = await didContract.methods.addDid(peterpet.imgHash, peterpet.name, peterpet.birth, peterpet.breedOfDog, peterpet.gender, peterpet.adoptionDate,
      peterpet.isNeutering, peterpet.furColor, peterpet.vaccinationHistory, peterpet.notes).send({ from: '0x3414834c8811a4041dC9644899c15A637290A3A6', gas: 5000000 });
    console.log(result);
      if(didContract.methods.dids){
        console.log(`made did = ${didContract.methods.dids}`);
        console.log(`${didContract.methods.dids(0)}`);
    }
    res.redirect('/#/result');
  }catch(err){
    console.log(err)
  }
})

module.exports = router;
