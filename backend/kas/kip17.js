import ApiCaller from "./apiCaller";

class Kip17 extends ApiCaller {
    constructor() {
        super('https://kip17-api.klaytnapi.com');
    }

    async makeNft(address,id,uri,ca) {
        const options = {
            method: 'POST',
            url : `/v1/contract/${ca}/token`,
            body : {
                to : address,
                id : `0x${id}`,
                uri : uri
            },
            json : true
        };

        const res = await this.call(options);
        console.log(res);
        return res;
    }

    async transferNft(tokenId,owner,to,ca) {
        const options = {
            method: 'POST',
            url : `/v1/contract/${ca}/token/${tokenId}`,
            body : {
                sender : owner,
                owner : owner,
                to : to
            },
            json : true
        };

        const res = await this.call(options);
        console.log(res);
        return res;
    }

    async getNftsByAdress(ca,address) {
        const options = {
            method: 'GET',
            url : `/v1/contract/${ca}/owner/${address}`,
            json : true
        };

        const res = await this.call(options);
        console.log(res);
        return res;
    }

    async getNftInfoByTokenId(ca,tokenId) {
        const options = {
            method: 'GET',
            url : `/v1/contract/${ca}/token/${tokenId}`,
            json : true
        };

        const res = await this.call(options);
        console.log(res);
        return res;
    }

    async deleteNft(ca,tokenId,address) {
        const options = {
            method: 'DELETE',
            url : `/v1/contract/${ca}/token/${tokenId}`,
            body : {
                from : address
            },
            json : true
        };

        const res = await this.call(options);
        console.log(res);
        return res;
    }

}

const kip17 = new Kip17();

module.exports = kip17;