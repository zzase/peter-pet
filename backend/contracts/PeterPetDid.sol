// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

import "./Ownable.sol";
import "./String.sol";

contract PeterPetDID is Ownable, StringFormat {
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

    PeterPet[] peterPets;
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
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) public onlyOwner {
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

    function updateDid(string memory _did, string memory _name, uint _birth, string memory _breedOfDog, string memory _gender, uint _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes ) public {
        didToPetMapper[_did].name = _name;
        didToPetMapper[_did].birth = _birth;
        didToPetMapper[_did].breedOfDog = _breedOfDog;
        didToPetMapper[_did].gender = _gender;
        didToPetMapper[_did].adoptionDate = _adoptionDate;
        didToPetMapper[_did].isNeutering = _isNeutering;
        didToPetMapper[_did].furColor = _furColor;
        didToPetMapper[_did].vaccinationHistory = _vaccinationHistory;
        didToPetMapper[_did].notes = _notes;
    }
     function getPetNameByDid(string memory _did) public view returns(string memory _name) {
        _name = didToPetMapper[_did].name; 
     }

     function getPetBirthByDid(string memory _did) public view returns(uint _birth) {
        _birth = didToPetMapper[_did].birth; 
     }

     function getPetBreedByDid(string memory _did) public view returns(string memory _breedOfDog) {
        _breedOfDog = didToPetMapper[_did].breedOfDog; 
     }

     function getPetGenderByDid(string memory _did) public view returns(string memory _gender) {
        _gender = didToPetMapper[_did].gender; 
     }

     function getPetAdoptionDateByDid(string memory _did) public view returns(uint _adoptionDate) {
        _adoptionDate = didToPetMapper[_did].adoptionDate; 
     }

     function getPetIsNeuteringByDid(string memory _did) public view returns(bool _isNeutering) {
        _isNeutering = didToPetMapper[_did].isNeutering; 
     }

     function getPetFurColorByDid(string memory _did) public view returns(string memory _furColor) {
        _furColor = didToPetMapper[_did].furColor; 
     }

     function getPetHistoryByDid(string memory _did) public view returns(string memory _vaccinationHistory) {
        _vaccinationHistory = didToPetMapper[_did].vaccinationHistory; 
     }

     function getPetNoteByDid(string memory _did) public view returns(string memory _notes) {
        _notes = didToPetMapper[_did].notes; 
     }
     
    function checkLength(uint _peterPetsLength, uint _didsLength) private pure returns (bool) {
        if(_peterPetsLength == _didsLength) return true;
        else return false;
    }
}