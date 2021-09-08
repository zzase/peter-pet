// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

import "./Ownable.sol";
import "./String.sol";

contract PeterPetDID is Ownable, ToString {
    struct PeterPet {
        string name;
        string breedOfDog;
        string gender;
        uint birth;
        uint adoptionDate;
        bool isNeutering;
        string furColor;
        string vaccinationHistory;
        string notes;
    }

    struct Did {
        string did;
    }

    PeterPet[] public peterPets;
    Did[] public dids;

    uint index;
    string didPre = "did:peterpet:";

    mapping(string => PeterPet) didToPetMapper;
    mapping(address => PeterPet[]) addressToPetMapper;

    constructor() public {
        addressToPetMapper[msg.sender] = peterPets;
    }

    function makeDid(uint _index) private view returns (string memory) {
        return string(abi.encodePacked(didPre,toString(keccak256(abi.encodePacked(msg.sender,_index))))) ;
    }

    function addDid(string memory _name, uint _birth, string memory _breedOfDog, string memory _gender, uint _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) internal onlyOwner {
        addPet(_name, _birth, _breedOfDog, _gender, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes);
        index = peterPets.length - 1;
        dids.push(Did(makeDid(index)));
        if(checkLength(peterPets.length,dids.length)){
            didToPetMapper[dids[index].did] = peterPets[index];
        }
    } 

    function addPet(string memory _name, uint _birth, string memory _breedOfDog, string memory _gender, uint _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) private {
        peterPets.push(PeterPet(_name,_breedOfDog, _gender,_birth, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes));
    }

    function updateDid() public {

    }

    function checkLength(uint _peterPetsLength, uint _didsLength) private pure returns (bool) {
        if(_peterPetsLength == _didsLength) return true;
        else return false;
    }

    
}