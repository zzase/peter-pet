// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

import "./PeterPetDID.sol";

contract PeterPetInfo is PeterPetDID {

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


     /*
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

    function getPetInfoByAddress(address _owner, uint _index) public view returns (string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) {
        
        _name = addressToPetMapper[_owner][_index].name;
        _birth = addressToPetMapper[_owner][_index].birth;
        _breedOfDog = addressToPetMapper[_owner][_index].breedOfDog;
        _gender = addressToPetMapper[_owner][_index].gender;
        _adoptionDate = addressToPetMapper[_owner][_index].adoptionDate;
        _isNeutering = addressToPetMapper[_owner][_index].isNeutering;
        _furColor = addressToPetMapper[_owner][_index].furColor;
        _vaccinationHistory = addressToPetMapper[_owner][_index].vaccinationHistory;
        _notes = addressToPetMapper[_owner][_index].notes;
    }
    */
}