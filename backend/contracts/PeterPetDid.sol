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
        
    }

    function getPetInfoByAddress(address owner) public {
        
    }

    function checkLength(uint _peterPetsLength, uint _didsLength) public pure returns (bool) {
        if(_peterPetsLength == _didsLength) return true;
        else return false;
    }

    function toString(address account) public pure returns(string memory) {
        return toString(abi.encodePacked(account));
    }

    function toString(uint256 value) public pure returns(string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes32 value) public pure returns(string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes memory data) public pure returns(string memory) {
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(2 + data.length * 2);
        str[0] = "0";
        str[1] = "x";
        for (uint i = 0; i < data.length; i++) {
            str[2+i*2] = alphabet[uint(uint8(data[i] >> 4))];
            str[3+i*2] = alphabet[uint(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }
}