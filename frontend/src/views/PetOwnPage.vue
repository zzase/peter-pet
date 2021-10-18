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
              <p>나이 : {{ age }}살 </p>
              <p>상태 :  </p>
            </div>
            <div class="page-line1">
            </div>
            <div class="page-line2">
            </div>

            <div v-if="this.peterpet.missing">
            <div class="page-content4">
              <h6># 실종</h6></div>
          <div class="page-content3">
            <h6>보호자님이 애타게 기다리고 있습니다<br>
          아래의 번호로 연락주시면 감사하겠습니다</h6>
          </div>
              <div class="page-content2">
                <p>보호자 이름 : {{ wenddy.name }}</p>
                <p>보호자 연락처 : {{ wenddy.phone }}</p>
              </div>
              </div>
            <div v-else>
              <div class="page-content5">
             <p> #Happy</p>
              </div>
              <div class="page-content2">
                <img src="@/assets/img/DID/nice.png">
                <h6>오늘도 {{ peterpet.name }}와 행복한 하루 되세요!</h6><br>
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
      age : null,
      today : null,
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
       this.$http.get(`http://172.30.1.38:3000/api/pet/info/did/${did}`,{
       })
       .then((res) => {
         console.log(res.data);
         this.peterpet = res.data.peterpet;
         let dt = new Date();
         let birth = new Date(`${this.peterpet.birth}`);
         console.log('birth : ' + birth);
         this.age = (dt.getFullYear() - birth.getFullYear()) + 1
         console.log(this.peterpet.imgLink)
       })
     },
    getWenddyInfo: function(did) {
      this.$http.get(`http://172.30.1.38:3000/api/wenddy/info/did/${did}`,{
      })
      .then((res)=>{
        console.log(res.data.wenddy);
        this.wenddy = res.data.wenddy
      })
    },

  },
  created() {
    this.getPetInfo(this.$route.params.did);
    this.getWenddyInfo(this.$route.params.did);
  }
};

</script>

<style>
.page-content5 {
  position:absolute;
  bottom: 4%;
  left: 27%;
}
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
  top:88.5%;
  left: 23%;
}
.page-content2 {
  display: inline-block;
  position: absolute;
  left: 13%;
  bottom: -29%;
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
  bottom: 20%;
  left: 36%;
}
.page-content4 {
  display: inline-block;
  color: rgb(0, 0, 0);
  z-index: 2;
  position: absolute;
  margin-top: -16%;
  left: 26%;
}
.Img {
  position: relative;
  display:inline-block;
  z-index: 1;
  left: 21%;
  top: 15%;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
.Img img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
