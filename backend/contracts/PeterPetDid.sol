// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

import "./Ownable.sol";
import "./String.sol";

contract PeterPetDID is Ownable, StringFormat {
    struct PeterPet {
        string name; // 이름
        string breedOfDog; // 견종
        string gender; //성별
        uint birth; //생년월일
        uint adoptionDate; // 입양일
        bool isNeutering; // 중성화 여부
        string furColor; //모색
        string vaccinationHistory; //특이사항
        string notes; //접종내역
    }

    struct Did {
        string did; // did 번호
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

    /*
     * makeDid() 
     * - did 만드는 함수, did = did:peterpet: (계정주소 + 펫 인덱스 + 난수)의 해시값 
     */
    function makeDid(uint _index) private view returns (string memory) {
        string memory didiHash = toString(keccak256(abi.encodePacked(msg.sender,_index))) ;
        string memory didSub = subString(didiHash,bytes(didiHash).length-10,bytes(didiHash).length);
        return string(abi.encodePacked(didPre,didSub));
    }

    /*
     * addPet() 
     * - 입력받은 반려견 정보를 peterPets 배열에 push 
     */
    function addPet(string memory _name, uint _birth, string memory _breedOfDog, string memory _gender, uint _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) private {
        peterPets.push(PeterPet(_name,_breedOfDog, _gender,_birth, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes));
    }

    /*
     * addDid() 
     * - addPet()과 makeDid()를 호출하여 반려견 정보를 담은 did를 만들고 did와 반려견정보를 매핑
     */
    function addDid(string memory _name, uint _birth, string memory _breedOfDog, string memory _gender, uint _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) public onlyOwner {
        addPet(_name, _birth, _breedOfDog, _gender, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes);
        index = peterPets.length - 1;
        dids.push(Did(makeDid(index)));
        if(checkLength(peterPets.length,dids.length)){
            didToPetMapper[dids[index].did] = peterPets[index];
        }
    } 

    /*
     * updateDid() 
     * - did를 통해 기존 반려견 정보 수정  
     */
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

    /*
     * getPetInfoByDid() 
     * - pet 정보를 did를 통해 가져옴 
     */
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
     * checkLength() 
     * - 등록된 pet과 did의 수가 일치하는지 확인
     */
    function checkLength(uint _peterPetsLength, uint _didsLength) private pure returns (bool) {
        if(_peterPetsLength == _didsLength) return true;
        else return false;
    }

    function makeNonce () private pure returns (uint){

    }
}