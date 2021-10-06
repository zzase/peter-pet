const metadata = require('../kas/metadata');

var express = require('express');
var router = express.Router();

router.post('/make/asset',async function(req,res,next) {
    console.log('asset 메타데이터 api 호출');
    const file = req.body.file;
    try{
        const uri = await metadata.asset(file);
        res.status(200).send({uri : uri});
    }catch(err){
        res.status(400).send("실패");
    }
  })


router.post('/make/certiMetaData',async function(req,res,next) {
    console.log('증명용 nft 메타데이터 api 호출');
    const data = req.body.metadata;

    try{
        const result = await metadata.certiNFTUri(data.name,data.did,data.history,data.desc,data.certi,data.repreImg,data.addImgs,data.price);
        if(result.uri){
            res.status(200).send({uri : result.uri});
        }
        else {
            res.status(400).send(result);
        }
    }catch(err){
        res.status(400).send("실패");
    }
  })

  router.post('/make/normalMetaData',async function(req,res,next) {
    console.log('기념용 nft 메타데이터 api 호출');
    const data = req.body.metadata;

    try{
        const result = await metadata.normalNFTUri(data.name, data.img, data.desc);
        if(result.uri){
            res.status(200).send({uri : result.uri});
        }
        else {
            res.status(400).send(result);
        }
    }catch(err){
        res.status(400).send("실패");
    }
  })


module.exports = router;