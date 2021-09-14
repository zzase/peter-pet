import {byteCode, contract} from '../kas/deploy.js'

var express = require('express');
var router = express.Router();

//const pets = require('../test/pet.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Get: " + req.peterpet);
  return res.json({peterpet:req.peterpet});
});

router.post('/',function(req,res,next){
  try{
    console.log("호출됨");
    const deployed = await contract.deploy({ data: byteCode }).send({ from: '0x3414834c8811a4041dC9644899c15A637290A3A6', gas: 10000000 });
    console.log('deployed ca : ' + deployed.options.address );

    res.redirect('/#/result');
  }catch(err){
    console.log(err)
  }
})


module.exports = router;
