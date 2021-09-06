// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

contract PeterPetDID {
    struct peterPet {
        string name;
    }

    struct DID {
        string name;
    }

    mapping(string => peterPet) didToPetMapper;
    mapping(address => peterPet[]) addressToPetMapper;

    function makeDid() public {
        
    } 

    function addPet() public {

    }

    function updateDid() public {

    }

    function getPetInfoByDid() public {

    }
}