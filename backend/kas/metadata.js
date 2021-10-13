import ApiCaller from "./apiCaller";
const fs = require("fs");

class Metadata extends ApiCaller {
    constructor() {
        super('https://metadata-api.klaytnapi.com');
    }

    async asset(file) {
        const form = new FormData();
        form.append('file',file)
        console.log(form);
        const options = {
            method : 'POST',
            headers : {
                'Content-Type' : 'multipart/form-data'
            },
            url : '/v1/metadata/asset',
            data : form
        };
        const res = await this.call(options);
        console.log(res);

        return res.uri;
    }
    async certiNFTUri(name,did,history,desc,certi,repreImg,addImgs) {
        const options = {
            method : 'POST',
            url : '/v1/metadata',
            body : {
                metadata : {
                    kind : "분양용 NFT", 
                    name : name,
                    did : did,
                    history : history,
                    desc : desc,
                    certi : certi,
                    repreImg : repreImg,
                    addImgs : addImgs,
                },
            },
            json : true
        };
        const res = await this.call(options);
        console.log(res);

        return res;
    }

    async personalNFTUri(name,img,desc) {
        const options = {
            method : 'POST',
            url : '/v1/metadata',
            body : {
                metadata : {
                    kind : "기념용 NFT",
                    name : name,
                    img : img,
                    desc : desc
                },
            },
            json : true
        };
        const res = await this.call(options);
        console.log(res);

        return res;
    }


}

const metadata = new Metadata();

module.exports = metadata;