const fs = require('fs');
const PeterPetDid = artifacts.require("PeterPetDid");

module.exports = function (deployer) {
  deployer.deploy(PeterPetDid)
  .then(()=>{
      if(PeterPetDid._json){
          fs.writeFile('../contractABI/PeterPetDidABI',JSON.stringify(PeterPetDid._json.abi),
          (err) => {
              if(err) throw err;
              console.log("success input PeterPetDid_ABI");
          })

          fs.writeFile('../contractABI/PeterPetDidCA',JSON.stringify(PeterPetDid._json.address),
          (err) => {
              if(err) throw err;
              console.log("success input PeterPetDid_CA");
          })
      }
  })
};
