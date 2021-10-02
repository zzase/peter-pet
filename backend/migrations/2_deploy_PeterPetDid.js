const fs = require('fs');
const PeterPetDid = artifacts.require("PeterPetDid");

module.exports = function (deployer) {
  deployer.deploy(PeterPetDid)
  .then(()=>{
      //console.log(PeterPetDid);
       // console.log(PeterPetDid._json.abi);
       /*

      if(PeterPetDid._json){
          
          fs.writeFile('../contractABI/PeterPetDidABI.json',JSON.stringify(PeterPetDid._json.abi),
          (err) => {
              if(err) {
                console.log('e')
                throw err;
              
              } 
              console.log("success input PeterPetDid_ABI");
          })

          fs.writeFile('../contractABI/PeterPetDidCA.json',JSON.stringify(PeterPetDid._json.address),
          (err) => {
              if(err) throw err;
              console.log("success input PeterPetDid_CA");
          })
      }*/
  })
};
