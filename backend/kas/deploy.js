const CaverExtKas = require('caver-js-ext-kas')

const chainId = 1001
const accessKeyId = 'KASKVL58QQKZXQ65EPPBDF2N'
const secretAccessKey = 'rEEoLuBoR5GuplSO-JZLevu_lX8-Nxg7txDJeAd3'

const caver = new CaverExtKas(chainId,accessKeyId,secretAccessKey);

const abi = [
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
				"type": "uint256"
			},
			{
				"name": "adoptionDate",
				"type": "uint256"
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
			}
		],
		"payable": false,
		"stateMutability": "view",
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
				"type": "uint256"
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
				"type": "uint256"
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
		"name": "getPetBirthByDid",
		"outputs": [
			{
				"name": "_birth",
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
		"name": "getPetAdoptionDateByDid",
		"outputs": [
			{
				"name": "_adoptionDate",
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
				"type": "uint256"
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
				"type": "uint256"
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
	}
]

const byteCode = '0x608060405234801561001057600080fd5b5061051f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063693ec85e1461003b578063e942b5161461016f575b600080fd5b6100f46004803603602081101561005157600080fd5b810190808035906020019064010000000081111561006e57600080fd5b82018360208201111561008057600080fd5b803590602001918460018302840111640100000000831117156100a257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610134578082015181840152602081019050610119565b50505050905090810190601f1680156101615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102bf6004803603604081101561018557600080fd5b81019080803590602001906401000000008111156101a257600080fd5b8201836020820111156101b457600080fd5b803590602001918460018302840111640100000000831117156101d657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561023957600080fd5b82018360208201111561024b57600080fd5b8035906020019184600183028401116401000000008311171561026d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103cc565b005b60606000826040518082805190602001908083835b602083106102f957805182526020820191506020810190506020830392506102d6565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103c05780601f10610395576101008083540402835291602001916103c0565b820191906000526020600020905b8154815290600101906020018083116103a357829003601f168201915b50505050509050919050565b806000836040518082805190602001908083835b6020831061040357805182526020820191506020810190506020830392506103e0565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020908051906020019061044992919061044e565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061048f57805160ff19168380011785556104bd565b828001600101855582156104bd579182015b828111156104bc5782518255916020019190600101906104a1565b5b5090506104ca91906104ce565b5090565b6104f091905b808211156104ec5760008160009055506001016104d4565b5090565b9056fea165627a7a723058203ffebc792829e0434ecc495da1b53d24399cd7fff506a4fd03589861843e14990029'

const contract = new caver.contract(abi);

export {byteCode, contract};
//module.export = {byteCode,contract};