import ApiCaller from "./apiCaller";

class Kip17 extends ApiCaller {
    constructor() {
        super('https://kip17-api.klaytnapi.com');
    }

    async makeCertiNft(address,id,uri) {
        const options = {
            method: 'POST',
            url : '/v1/contract/0xdf47abaec9b9c628c6190b3dcd289b499dcba8b5/token',
            body : {
                to : address,
                id : id,
                uri : uri
            },
            json : true
        };

        const res = await this.call(options);
        console.log(res);
    }

}

const kip17 = new Kip17();

module.exports = kip17;