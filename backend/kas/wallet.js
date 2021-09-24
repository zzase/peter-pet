import ApiCaller from "./apiCaller";
const caver = require('caver-js');

class Wallet extends ApiCaller {
    constructor() {
        super('https://wallet-api.klaytnapi.com');
    }

    async createAccount() {
        const options = {
            method: 'POST',
            url: '/v2/account',
            json: true,
        };

        return await this.call(options);
    }

    async remitPaidByKas(from, value, to, memo) {
        const peb = caver.utils.convertToPeb(value,'KLAY');
        const hexpeb = caver.utils.numberToHex(peb);

        const options = {
            method : 'POST',
            url : '/v2/tx/fd/value',
            body : {
                from : from,
                value : hexpeb,
                to : to,
                memo : memo,
                nonce : 0,
                gas : 0,
                submit : true
            },
            json : true
        };
        const res = await this.call(options);
        console.log(res);

        return res.transactionHash;
    }

    async feeDelegated(from, to, input) {
        const feePayer = "0x9d5EC3b8e4E8199266dB0E1aFB8d40134a3e19D3";
        const options = {
            method: 'POST',
            url: '/v2/tx/fd-user/contract/execute',
            body : {
                from: from,
                value: "0x0",
                to: to,
                input: input,
                nonce: 0, //nonce 자동선택
                gas: 0, // 기본값 사용
                submit: true,
                feePayer: feePayer
              },
            json: true,
        };

        const res = await this.call(options);
        console.log(res);

        return res.transactionHash;
    }

    async feeGlobalDelegated(from, to, input) {
        const options = {
            method: 'POST',
            url: '/v2/tx/fd/contract/execute',
            body : {
                from: from,
                value: "0x0",
                to: to,
                input: input,
                nonce: 0, //nonce 자동선택
                gas: 0, // 기본값 사용
                submit: true
              },
            json: true,
        };

        const res = await this.call(options);
        console.log(res);

        return res.transactionHash;
    }
}

const wallet = new Wallet();

module.exports = wallet;