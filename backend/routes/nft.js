import {contract,CA} from '../kas/peterpetDid.js';
import {connection} from '../mysql/connector';

const metadata = require('../kas/metadata');
const kip17 = require('../kas/kip17');

var express = require('express');
var router = express.Router();

router.get('/certi/list/owner/:address', async function(req,res,next){
    console.log('Get List Certi NFT By Address API call');
    const address = req.params.address;
    const nftCA = '0xdf47abaec9b9c628c6190b3dcd289b499dcba8b5';

    try{
        const result = await kip17.getNftsByAdress(nftCA,address);
        if(result.items){
            res.status(200).send({msg : true, items : result.items});
        }
        else {
            res.status(400).send({msg : false, result : result});
        }
    }catch(err){
        res.status(400).send({msg : "Get List of Certi NFT By Address API call Fail"});
    }
    
})

router.get('/certi/list/all', async function(req,res,next){
    console.log('Get All List Certi NFT API Call');
    const nftCA = '0xdf47abaec9b9c628c6190b3dcd289b499dcba8b5';
    const nfts = [];
    connection.query(`SELECT address FROM user`,async function(err,rows){
        if(rows[0]===undefined){
            res.status(400).send({msg:"sql 오류"})
        }
        else{
            try{
                for(var i=0; i<rows.length; i++){
                    const result = await kip17.getNftsByAdress(nftCA,rows[i].address);
                    for(var j=0; j<result.items.length; j ++){
                        nfts.push(result.items[j]);
                    }
                }
                res.status(200).send({msg:true, items : nfts});
            }catch(err){
                res.status(400).send({msg : "Get All List of Certi NFT API call Fail"});
            }
        }
    })
})

router.get('/personal/list/owner/:address', async function(req,res,next){
    console.log('Get List of personal NFT By Address API call');
    const address = req.params.address;
    const nftCA = '0x504e0749223ea5d8b5cfa167813b0ccab9d254df';

    try{
        const result = await kip17.getNftsByAdress(nftCA,address);
        if(result.items){
            res.status(200).send({msg : true, items : result.items});
        }
        else {
            res.status(400).send({msg : false, result : result});
        }
    }catch(err){
        res.status(404).send({msg : "Get List of personal NFT By Address API call Fail"});
    }
    
})

router.get('/certi/info/token/:tokenId', async function(req,res,next){
    console.log('Get Certi NFT Info By TokenID API call');
    const tokenId = req.params.tokenId;
    const nftCA = '0xdf47abaec9b9c628c6190b3dcd289b499dcba8b5';
    
    try{
        const result = await kip17.getNftInfoByTokenId(nftCA,tokenId);
        if(result.tokenUri){
            res.status(200).send({msg:true, tokenId : result.tokenId, tokenUri : result.tokenUri});
        }
        else{
            res.status(400).send({msg:false,result:result});
        }
    }catch(err){
        res.status(404).send({msg : "Get Certi NFT Info By TokenID API call Fail"});
    }
})

router.get('/personal/info/token/:tokenId', async function(req,res,next){
    console.log('Get personal NFT Info By TokenID API call');
    const tokenId = req.params.tokenId;
    const nftCA = '0x504e0749223ea5d8b5cfa167813b0ccab9d254df';
    
    try{
        const result = await kip17.getNftInfoByTokenId(nftCA,tokenId);
        if(result.tokenUri){
            res.status(200).send({msg:true, tokenId : result.tokenId, tokenUri : result.tokenUri});
        }
        else{
            res.status(400).send({msg:false,result:result});
        }
    }catch(err){
        res.status(404).send({msg : "Get personal NFT Info By TokenID API call Fail"});
    }
})


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
        const result = await metadata.certiNFTUri(data.name,data.did,data.history,data.desc,data.certi,data.repreImg,data.addImgs);
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

  router.post('/make/personalMetaData',async function(req,res,next) {
    console.log('기념용 nft 메타데이터 api 호출');
    const data = req.body.metadata;

    try{
        const result = await metadata.personalNFTUri(data.name, data.img, data.desc);
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

  router.post('/make/certiNFT',async function(req,res,next) {
    const nftCA = '0xdf47abaec9b9c628c6190b3dcd289b499dcba8b5'
    console.log('Make Certi-NFT api 호출');
    const address = req.body.address; //address = this.$store.state.user.address
    const id = req.body.id; // id = did 맨 끝 10자리 
    const data = req.body.metadata;

    let uri = ''

    try{
        const result = await metadata.certiNFTUri(data.name,data.did,data.history,data.desc,data.certi,data.repreImg,data.addImgs);
        if(result.uri){
            uri = result.uri
            try{
                const nft = await kip17.makeNft(address,id,uri,nftCA);
                if(nft.transactionHash){
                    try{
                        const mappingNFT = await contract.methods.mappingNFT(`did:peterpet:${id}`,`0x${id}`).send({ from: address, gas: 5000000 });
                        console.log(mappingNFT);
                        res.status(200).send({id:`0x${id}`, transactionHash : nft.transactionHash});
                    }catch(err){
                        res.status(400).send({msg : '잔액부족'})
                    }
                }
                else {
                    if(nft.code === 1100050){
                        res.status(400).send({msg : nft.message});
                    }
                    else {
                        res.status(401).send({msg : nft.message});
                    }
                }
            }catch(err){
                res.status(400).send({msg : "Make Certi-NFT Fail"});
            }
        }
        else {
            res.status(400).send({msg : "Make Certi-NFT-Uri Fail"});
        }
    }catch(err){
        res.status(400).send({msg : "Make Certi-NFT-Uri Fail"});
    }
  })

  router.post('/make/personalNFT',async function(req,res,next) {
    const nftCA = '0x504e0749223ea5d8b5cfa167813b0ccab9d254df'
    console.log('Make personal-NFT api 호출');
    const address = req.body.address; //address = this.$store.state.user.address
    const id = req.body.id; // address + index
    const data = req.body.metadata;

    let uri = ''

    try{
        const result = await metadata.personalNFTUri(data.name, data.img, data.desc);
        if(result.uri){
            uri = result.uri
            try{
                const nft = await kip17.makeNft(address,id,uri,nftCA);
                if(nft.transactionHash){
                    res.status(200).send({id:`0x${id}`, transactionHash : nft.transactionHash});
                }
                else {
                    if(nft.code === 1100050){
                        res.status(400).send(nft.message);
                    }
                    else {
                        res.status(401).send(nft.message);
                    }
                }
            }catch(err){
                res.status(400).send({msg : "Make Certi-NFT Fail"});
            }
        }
        else {
            res.status(400).send(result);
        }
    }catch(err){
        res.status(400).send({msg : "Make Certi-NFT-Uri Fail"});
    }
  })

  router.delete('/certi/token/:tokenId',async function(req,res,next) {
      console.log('DELETE CERTI NFT API CALL')
      const nftCA = '0xdf47abaec9b9c628c6190b3dcd289b499dcba8b5';
      const tokenId = req.params.tokenId;
      const address = req.body.address;

      try{
          const result = await kip17.deleteNft(nftCA,tokenId,address);
          if(result.transactionHash){
            res.status(200).send({submitted : true, transactionHash : result.transactionHash});
        }
        else {
            if(result.code === 1100050){
                res.status(400).send({submitted : false, msg : result.message});
            }
            else {
                res.status(401).send({submitted : false, msg : result.message});
            }
        }
      }catch(err){
        res.status(400).send({submitted : false, msg : 'api 호출 오류'});
      }
  })

  router.delete('/personal/token/:tokenId',async function(req,res,next) {
    console.log('DELETE PERSONAL NFT API CALL')
    console.log(req.body);
    const nftCA = '0x504e0749223ea5d8b5cfa167813b0ccab9d254df';
    const tokenId = req.params.tokenId;
    const address = req.body.address;

    try{
        const result = await kip17.deleteNft(nftCA,tokenId,address);
        if(result.transactionHash){
          res.status(200).send({submitted : true, transactionHash : result.transactionHash});
      }
      else {
          if(result.code === 1100050){
              res.status(400).send({submitted : false, msg : result.message});
          }
          else {
              res.status(401).send({submitted : false, msg : result.message});
          }
      }
    }catch(err){
      res.status(400).send({submitted : false, msg : 'api 호출 오류'});
    }
})


module.exports = router;