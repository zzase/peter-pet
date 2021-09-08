// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

import "./Ownable.sol";
import "./String.sol";

contract PeterPetDID is Ownable, ToString {
    struct PeterPet {
        string name;
        string birth;
        string breedOfDog;
        string gender;
        string adoptionDate;
        bool isNeutering;
        string furColor;
        string vaccinationHistory;
        string notes;
    }

    struct Did {
        string did;
    }

    PeterPet[] peterPets;
    Did[] dids;

    uint index;
    string didPre = "did:peterpet:";

    mapping(string => PeterPet) didToPetMapper;
    mapping(address => PeterPet[]) addressToPetMapper;

    

    function makeDid(uint _index) public view returns (string memory) {
        return string(abi.encodePacked(didPre,toString(keccak256(abi.encodePacked(msg.sender,_index))))) ;
    }

    function addDid(string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) internal onlyOwner {
        addPet(_name, _birth, _breedOfDog, _gender, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes);
        index = peterPets.length - 1;
        dids.push(Did(makeDid(index)));
        if(checkLength(peterPets.length,dids.length)){
            didToPetMapper[dids[index].did] = peterPets[index];
        }
    } 

    function addPet(string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) public {
        peterPets.push(PeterPet(_name,_birth,_breedOfDog, _gender, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes));
    }

    function updateDid() public {

    }

    function getPetInfoByDid(string memory _did) public view returns(string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) {
        _name = didToPetMapper[_did].name;
        _birth = didToPetMapper[_did].birth;
        _breedOfDog = didToPetMapper[_did].breedOfDog;
        _gender = didToPetMapper[_did].gender;
        _adoptionDate = didToPetMapper[_did].adoptionDate;
        _isNeutering = didToPetMapper[_did].isNeutering;
        _furColor = didToPetMapper[_did].furColor;
        _vaccinationHistory = didToPetMapper[_did].vaccinationHistory;
        _notes = didToPetMapper[_did].notes;
    }

    // function getPetInfoByAddress(address _owner, uint _index) public view returns (string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    // bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) {
        
    //     _name = addressToPetMapper[_owner][_index].name;
    //     _birth = addressToPetMapper[_owner][_index].birth;
    //     _breedOfDog = addressToPetMapper[_owner][_index].breedOfDog;
    //     _gender = addressToPetMapper[_owner][_index].gender;
    //     _adoptionDate = addressToPetMapper[_owner][_index].adoptionDate;
    //     _isNeutering = addressToPetMapper[_owner][_index].isNeutering;
    //     _furColor = addressToPetMapper[_owner][_index].furColor;
    //     _vaccinationHistory = addressToPetMapper[_owner][_index].vaccinationHistory;
    //     _notes = addressToPetMapper[_owner][_index].notes;
    // }

    function checkLength(uint _peterPetsLength, uint _didsLength) public pure returns (bool) {
        if(_peterPetsLength == _didsLength) return true;
        else return false;
    }
}