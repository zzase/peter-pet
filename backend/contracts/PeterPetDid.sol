// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

import "./Ownable.sol";

contract PeterPetDID is Ownable {
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
        PeterPet peterPet;
    }

    PeterPet[] peterPets;
    Did[] dids;

    uint index;
    string didPre = "did:peterpet:";

    mapping(string => PeterPet) didToPetMapper;
    mapping(address => PeterPet[]) addressToPetMapper;


    function makeDid(string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) public {
       
        
    } 

    function addPet(string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) internal onlyOwner {
        peterPets.push(PeterPet(_name,_birth,_breedOfDog, _gender, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes));
        
    }

    function updateDid() public {

    }

    function getPetInfoByDid() public {
        
    }

    function getPetInfoByAddress(address owner) public {
        
    }
}