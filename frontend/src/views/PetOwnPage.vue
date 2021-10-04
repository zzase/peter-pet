<template>
<b-container>
    <b-layout align-center row wrap>
        <b-flex xs12>
          <div class="wrapper">
          <div class="main main-raised">
   
            <div class="wenddy-info">
            </div>
            <div class="DID-page1">
              <div class="Img">
                <img  v-bind:src="peterpet.imgLink" width="250px" height="250px" alt="" />
              </div>
            </div>
              <div class="DID-page2">
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
            <div v-if="this.peterpet.missing">
            <div class="page-content4">
              <h6># {{ peterpet.missing }}</h6></div>
          <div class="page-content3">
            <h6>보호자님이 애타게 기다리고 있습니다<br>
          아래의 번호로 연락주시면 감사하겠습니다</h6>
          </div>
              <div class="page-content2">
                <p>보호자 이름 : {{ wenddy.name }}</p>
                <p>보호자 연락처 : {{ wenddy.phoneNumber }}</p>
              </div>
              </div>
            </div>
            </div>
        </b-flex>
    </b-layout>
</b-container>
</template>

<script>

export default {
 data (){
    return {
    
      peterpet: { },
      wenddy: { },
      props: {
        img: {
        type: String,
        default: require("@/assets/img/faces/christian.jpg")
    }
      }
    }
  },
  methods : {
    getPetInfo: function(did) {
       this.$http.get(`http://localhost:3000/api/pet/get/all/petInfos/${did}`,{
       })
       .then((res) => {
         console.log(res.data);
         this.peterpet = res.data.peterpet;
       })
     },
    getWenddyInfo: function(did) {
      this.$http.get(`http://localhost:3000/api/user/wenddy/info/${did}`,{
      })
      .then((res)=>{
        console.log(res.data.wenddy);
        this.wenddy = res.data.wenddy
      })
    }
  },
  created() {
    this.getPetInfo(this.$route.params.did);
    this.getWenddyInfo(this.$route.params.did);
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
  margin-top: 7%;
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
.page-content2 {
  display: inline-block;
  position: absolute;
  left: 13%;
  bottom: -34%;
}
.page-content3 {
  display: inline-block;
  text-align: center;
  position: absolute;
  left: 8%;
  bottom: -50%;
  color:rgb(170, 170, 170);

}
.page-logo {
  display: inline-block;
  position: absolute;
  width:23%;
  height: 23%;
  bottom: 21%;
  left: 36%;
}
.page-content4 {
  display: inline-block;
  color: rgb(0, 0, 0);
  z-index: 2;
  position: absolute;
  margin-top: -17.5%;
  left: 30%;
}
.Img {
  display:inline-block;
  z-index: 1;
  left: 40%;
  top: 33%;
}

</style>
