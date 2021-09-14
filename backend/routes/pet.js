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
    var peterpet =req.body.peterpet;
    console.log("post data : " + peterpet.name);

    res.redirect('/#/result')

  }catch(err){
    console.log(err)
  }
})


module.exports = router;
