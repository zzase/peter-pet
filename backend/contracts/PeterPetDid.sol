// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;
pragma experimental ABIEncoderV2;

import "./Ownable.sol";
import "./String.sol";

contract PeterPetDID is Ownable, StringFormat {
    struct PeterPet {
        string imgHash; // img IPFS 값
        string name; // 이름
        string breedOfDog; // 견종
        string gender; //성별
        string birth; //생년월일
        string adoptionDate; // 입양일    
        bool isNeutering; // 중성화 여부
        string furColor; //모색
        string vaccinationHistory; //접종내역
        string notes; //특이사항
    }

    struct Did {
        string did; // did 번호
    }

    PeterPet[] public peterPets;
    Did[] public dids;

    uint index;
    string didPre = "did:peterpet:";

    mapping(string => PeterPet) didToPetMapper;
    mapping(address => Did[]) addressToDidMapper;
    mapping(string => address) wenddyFinder;

    constructor() public {
        //addressToPetMapper[msg.sender] = peterPets;
    }

    /*
     * makeDid() 
     * - did 만드는 함수, did = did:peterpet: (계정주소 + 펫 인덱스 + 난수)의 해시값 
     */
    function _makeDid(uint _index) private view returns (string memory) {
        string memory didiHash = toString(keccak256(abi.encodePacked(msg.sender,_index))) ;
        string memory didSub = subString(didiHash,bytes(didiHash).length-10,bytes(didiHash).length);
        return string(abi.encodePacked(didPre,didSub));
    }

    /*
     * addPet() 
     * - 입력받은 반려견 정보를 peterPets 배열에 push 
     */
    function _addPet(string memory _imgHash, string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) private {
        peterPets.push(PeterPet(_imgHash, _name,_breedOfDog, _gender,_birth, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes));
    }

    /*
     * addDid() 
     * - addPet()과 makeDid()를 호출하여 반려견 정보를 담은 did를 만들고 did와 반려견정보를 매핑
     */
    function addDid(string memory _imgHash, string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes) public {
        _addPet(_imgHash, _name, _birth, _breedOfDog, _gender, _adoptionDate, _isNeutering, _furColor, _vaccinationHistory, _notes);
        index = peterPets.length - 1;
        dids.push(Did(_makeDid(index)));
        addressToDidMapper[msg.sender].push(dids[index]);
        if(_checkLength(peterPets.length,dids.length)){
            didToPetMapper[dids[index].did] = peterPets[index];
            wenddyFinder[dids[index].did] = msg.sender;
        }
    }

    /*
     * updateDid() 
     * - did를 통해 기존 반려견 정보 수정  
     */
    function updateDid( string memory _did,string memory _imgHash, string memory _name, string memory _birth, string memory _breedOfDog, string memory _gender, string memory _adoptionDate, 
    bool _isNeutering, string memory _furColor, string memory _vaccinationHistory, string memory _notes ) public {
        require(msg.sender == wenddyFinder[_did]);
        didToPetMapper[_did].imgHash = _imgHash;
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

    function getDid(uint _index) public view returns(Did memory) {
        return dids[_index];
    }

    function getWenddyByDid(string memory _did) public view returns (address) {
        return wenddyFinder[_did];
    }
    
    function getDidsByWenddy(address _wenddy) public view returns (Did[] memory){
        return addressToDidMapper[_wenddy];
    }
    
    function getCountDidByWenddy(address _wenddy) public view returns (uint) {
        return addressToDidMapper[_wenddy].length;
    }
    
    function getDidByWenddy(address _wenddy, uint _index) public view returns (Did memory){
        return addressToDidMapper[_wenddy][_index];
    }

    /*
     * getPetInfoByDid() 
     * - pet 정보를 did를 통해 가져옴 
     */
     function getPetImgByDid(string memory _did) public view returns(string memory _imgHash) {
        _imgHash = didToPetMapper[_did].imgHash; 
     }

     function getPetNameByDid(string memory _did) public view returns(string memory _name) {
        _name = didToPetMapper[_did].name; 
     }

     function getPetBirthByDid(string memory _did) public view returns(string memory _birth) {
        _birth = didToPetMapper[_did].birth; 
     }

     function getPetBreedByDid(string memory _did) public view returns(string memory _breedOfDog) {
        _breedOfDog = didToPetMapper[_did].breedOfDog; 
     }

     function getPetGenderByDid(string memory _did) public view returns(string memory _gender) {
        _gender = didToPetMapper[_did].gender; 
     }

     function getPetAdoptionDateByDid(string memory _did) public view returns(string memory _adoptionDate) {
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
    function _checkLength(uint _peterPetsLength, uint _didsLength) private pure returns (bool) {
        if(_peterPetsLength == _didsLength) return true;
        else return false;
    }
}