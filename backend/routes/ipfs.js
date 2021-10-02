const ipfsClient = require("ipfs-http-client");
const fs = require("fs");
const multer = require("multer");
const express = require("express");
require("dotenv").config();

const router = express.Router();
const upload = multer({ dest: "files/" }); // 이미지 저장 위치

// IPFS 네트워트 연결

const ipfs = ipfsClient("ipfs.infura.io", "5001", { protocol: "https" });

// 네트워크에 이미지 업로드
router.post("/addFile", upload.single("imagesFile"), (req, res) => {
  try {
    console.log("addFile API req::", req.file);
    // 로컬에서 파일 읽어오기
    let testFile = fs.readFileSync(req.file.path);

    let testBuffer = new Buffer.from(testFile);

    // ipfs 이미지 업로드 함수
    ipfs.add(testBuffer, (err, file) => {
      console.log("ipfs add::", file);
      fs.unlinkSync(req.file.path);
      if (err) {
        return res.status(200).json({ result: 400, message: "IPFS_ADD_ERROR" });
      }
      const validCID = file[0].hash;
      console.log("validCID::", validCID);
      ipfs.get(validCID, (err, files) => {
        files.forEach((file) => {
          console.log("ipfs file path::", file.path);
          const data = {
            src: file.content.toString("base64"),
            hash: file.path,
          };
          return res.status(200).json({ result: 200, message: "OK", data });
        });
      });
    });
  } catch (e) {
    return res.status(400).json({ result: 400, message: "IPFS_ADD_ERROR" });
  }
});

// IPFS에 업로드한 이미지 불러오는 함수
router.get("/getFile/:CID", (req, res) => {
  try {
    console.log("getFile API req::", req.params);
    const cid = req.params.CID;
    ipfs.get(cid, (err, files) => {
      if (err) {
        return res.status(200).json({ result: 400, message: "IPFS_GET_ERROR" });
      }
      files.forEach((file) => {
        console.log("ipfs file path::", file.path, file.content);
        const data = {
          src: file.content.toString("base64"),
          hash: file.path,
        };
        return res.status(200).json({ result: 200, message: "OK", data });
      });
    });
  } catch (e) {
    return res.status(400).json({ result: 400, message: "IPFS_GET_ERROR" });
  }
});

module.exports = router;
