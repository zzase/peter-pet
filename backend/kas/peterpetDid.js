const CaverExtKas = require('caver-js-ext-kas')

const chainId = 1001
const accessKeyId = 'KASKVL58QQKZXQ65EPPBDF2N'
const secretAccessKey = 'rEEoLuBoR5GuplSO-JZLevu_lX8-Nxg7txDJeAd3'

const caver = new CaverExtKas(chainId,accessKeyId,secretAccessKey);

const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_imgHash",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_birth",
				"type": "string"
			},
			{
				"name": "_breedOfDog",
				"type": "string"
			},
			{
				"name": "_gender",
				"type": "string"
			},
			{
				"name": "_adoptionDate",
				"type": "string"
			},
			{
				"name": "_isNeutering",
				"type": "bool"
			},
			{
				"name": "_furColor",
				"type": "string"
			},
			{
				"name": "_vaccinationHistory",
				"type": "string"
			},
			{
				"name": "_notes",
				"type": "string"
			}
		],
		"name": "addDid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			},
			{
				"name": "_imgHash",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_birth",
				"type": "string"
			},
			{
				"name": "_breedOfDog",
				"type": "string"
			},
			{
				"name": "_gender",
				"type": "string"
			},
			{
				"name": "_adoptionDate",
				"type": "string"
			},
			{
				"name": "_isNeutering",
				"type": "bool"
			},
			{
				"name": "_furColor",
				"type": "string"
			},
			{
				"name": "_vaccinationHistory",
				"type": "string"
			},
			{
				"name": "_notes",
				"type": "string"
			}
		],
		"name": "updateDid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			},
			{
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "updateMissingStatus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dids",
		"outputs": [
			{
				"name": "did",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getAllInfoByDid",
		"outputs": [
			{
				"components": [
					{
						"name": "imgHash",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "breedOfDog",
						"type": "string"
					},
					{
						"name": "gender",
						"type": "string"
					},
					{
						"name": "birth",
						"type": "string"
					},
					{
						"name": "adoptionDate",
						"type": "string"
					},
					{
						"name": "isNeutering",
						"type": "bool"
					},
					{
						"name": "furColor",
						"type": "string"
					},
					{
						"name": "vaccinationHistory",
						"type": "string"
					},
					{
						"name": "notes",
						"type": "string"
					},
					{
						"name": "misiing",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_wenddy",
				"type": "address"
			}
		],
		"name": "getCountDidByWenddy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getDid",
		"outputs": [
			{
				"components": [
					{
						"name": "did",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_wenddy",
				"type": "address"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getDidByWenddy",
		"outputs": [
			{
				"components": [
					{
						"name": "did",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_wenddy",
				"type": "address"
			}
		],
		"name": "getDidsByWenddy",
		"outputs": [
			{
				"components": [
					{
						"name": "did",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_wenddy",
				"type": "address"
			}
		],
		"name": "getLastDidByWenddy",
		"outputs": [
			{
				"components": [
					{
						"name": "did",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetAdoptionDateByDid",
		"outputs": [
			{
				"name": "_adoptionDate",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetBirthByDid",
		"outputs": [
			{
				"name": "_birth",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetBreedByDid",
		"outputs": [
			{
				"name": "_breedOfDog",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetFurColorByDid",
		"outputs": [
			{
				"name": "_furColor",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetGenderByDid",
		"outputs": [
			{
				"name": "_gender",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetHistoryByDid",
		"outputs": [
			{
				"name": "_vaccinationHistory",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetImgByDid",
		"outputs": [
			{
				"name": "_imgHash",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetIsNeuteringByDid",
		"outputs": [
			{
				"name": "_isNeutering",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetNameByDid",
		"outputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getPetNoteByDid",
		"outputs": [
			{
				"name": "_notes",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "string"
			}
		],
		"name": "getWenddyByDid",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "peterPets",
		"outputs": [
			{
				"name": "imgHash",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "breedOfDog",
				"type": "string"
			},
			{
				"name": "gender",
				"type": "string"
			},
			{
				"name": "birth",
				"type": "string"
			},
			{
				"name": "adoptionDate",
				"type": "string"
			},
			{
				"name": "isNeutering",
				"type": "bool"
			},
			{
				"name": "furColor",
				"type": "string"
			},
			{
				"name": "vaccinationHistory",
				"type": "string"
			},
			{
				"name": "notes",
				"type": "string"
			},
			{
				"name": "misiing",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "str",
				"type": "string"
			},
			{
				"name": "startIndex",
				"type": "uint256"
			},
			{
				"name": "endIndex",
				"type": "uint256"
			}
		],
		"name": "subString",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
];
const CA = '0x6C5D5A2244b0B5517537Ffb563083a0ada7f0024';
const contract = new caver.contract(ABI,CA);

export {contract,CA};
//module.export = {byteCode,contract};