var express = require('express');
var router = express.Router();

const pets = require('../test/pet.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({peterpet:req.body.peterpet});
});

router.post('/post',function(req,res,next){
  try{
    console.log("호출됨");
  var peterpet =req.body.peterpet;
  console.log("post data : " + peterpet.name);
  //this.$route.push({name:'/pet',params:{peterpet:peterpet}});
  //this.$router.push('/pet',{peterpet:peterpet});
  //res.redirect('/#/pet');
  //res.renderVue('../../frontend/src/views/result.vue',peterpet);
  }catch(err){
    console.log(err)
  }
})


module.exports = router;
