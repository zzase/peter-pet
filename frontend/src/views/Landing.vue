<template>
<div class="wrapper">
  
<div class="main main-raised">
  
  <div class="wenddy-info">
  </div>
  <div class="DID-page1">
    
  </div>
    <div class="DID-page2">
    </div>
    <div clss="Img-hash">
     <p> img {{ peterpet.imgHash }}</p>
    </div>
    <div class="page-logo">
    <img src="@/assets/img/Main/logo.png"></div>
  <div class="page-content1">
    <p>이름 : {{ peterpet.name }}</p>
    <p>견종 : {{ peterpet.breedOfDog }} </p>
    <p>나이 : {{ peterpet.birth }} </p>
    <p>상태 :  </p>
  </div>
  <div class="page-line1">
  </div>
  <div class="page-line2">
  </div>
  <div class="page-content4">
    <h6># 실종</h6></div>
<div class="page-content3">
  <h6>보호자님이 애타게 기다리고 있습니다<br>
아래의 번호로 연락주시면 감사하겠습니다</h6>
</div>
    <div class="page-content2">
      <p>보호자 이름 : {{ wenddy.name }}</p>
      <p>보호자 연락처 : {{ wenddy.phoneNumber }}</p>
      <p>피터펫 연락처 : 02-000-0000</p>
    </div>
  </div>
  

  </div>
</template>

<script>

export default {
 data (){
    return {
    
      peterpet: {
         name: null,
         imgHash: "hash",
         breedOfDog: null,
         gender: null,
         birth: null,
         adoptionDate: null,
         isNeutering: null,
         furColor: null,
         vaccinationHistory: null,
         notes: null
      },
      wenddy: {
        name: null,
        phoneNumber: null,

      },
      props: {
        img: {
        type: String,
        default: require("@/assets/img/faces/christian.jpg")
    }
      }
    }
  }
};

</script>

<style>

.DID-page1 {
  position: relative;
  margin-top: -3%;
  width: 345px;
  height: 510px;
  background-color: rgb(128, 194, 199);
}
.DID-page2 {
  position: absolute;
  width: 345px;
  height: 300px;
  background-color: white;
  margin-top: -65%;
  border-radius: 2em;
}
.page-content1 {
  z-index: 5;
  position: absolute;
  top: 67%;
  left: 10%;
}
.phone-num {
  position: absolute;
  top: 70%;
}
.page-line1 {
  z-index: 4;
  position: absolute;
  width: 330px;
  height: 0.3px;
  background-color: rgb(224, 224, 224);
  top:65%;
  left:2%;
}
.page-line2 {
  position: absolute;
  width: 320px;
  height: 150px;
  background-color: rgba(228, 228, 228, 0.589);
  border-radius: 3em;
  margin-top: 10%;
  left: 3%;
}
.wenddy-info {
  z-index: 3;
  position: absolute;
  width: 80px;
  height: 25px;
  background-color: rgba(241, 170, 112, 0.705);
  border-radius: 3em;
  top:87.5%;
  left: 25%;
}
.Img-hash {
  z-index: 1;
  position: absolute;
  top: 50%;
}
.page-content2 {
  position: absolute;
  left: 13%;
  bottom: -35%;
}
.page-content3 {
  text-align: center;
  position: absolute;
  left: 8%;
  bottom: -6%;
  color:rgb(170, 170, 170);

}
.page-logo {
  position: absolute;
  width:23%;
  height: 23%;
  bottom: 21%;
  left: 36%;
}
.page-content4 {
  color: rgb(0, 0, 0);
  z-index: 2;
  position: absolute;
  margin-top: -22.5%;
  left: 30%;
  
}
</style>
