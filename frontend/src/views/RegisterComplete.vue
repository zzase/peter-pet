<template>
  <div class="wrapper">
      <parallax class="section page-header" :style="headerStyle">
     </parallax>
   <div class="main main-raised">
      <div class="section">
         <img id ="white" src="@/assets/img/Regist/white.jpg">
            <div class="my-box1">
            </div>
               <div class="md-layout">
                  <div class="content">
                     <h4>두남이의 Peter-Pet 등록이 완료되었습니다!</h4>
                        <img id="check" alt="brand" src="@/assets/img/Regist/check.png">
                 </div>
                   <div class="hat">
                    <img :src="img1" alt="brand"/>
                  </div>
                    <div class ="my-box2">
                  </div>
                    <div class="link">
                      <img
                        id="dog"
                        :src="img"
                        alt="Circle Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                       <div class="my-box3">
                        </div>
                       <div class="my-box4">
                       </div>
                      <div class="my-box5">
                    </div>
                 <md-button
                  href="#/mypage"
                  class="md-success md-lg"
                  >
                  <b>마이 페이지</b></md-button >
            </div>
       </div>
   </div>
</div>
</template>


<script>


export default {
  components: {
   
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null
    };
  },
  props: {
    img1: {
      type: String,
      default: require("@/assets/img/Regist/hat.png")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/dunami.jpg")
    },
    header: {
      type: String,
      default: require("@/assets/img/Regist/back.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css">
.white {
  z-index: 4;
}
.link {
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 200px;
  top: 31.5%;
  margin: auto;
  left: 44.5%;
}
.md-layout-item {
  position:relative;
  width: 100%;
}
.my-box1 {
  position: absolute;
  display: inline-block;
  width: 93%;
  height: 3%;
  left: 3.5%;
  padding-right: 50px;
  background-color:rgba(247, 247, 247, 0.911);
  margin: auto;
}

.content {
  font-family: Georgia, 'Times New Roman', Times, serif;
  position: absolute;
  display: inline-block;
  left: 37.5%;
  top: 15%;
  margin: auto;
}
.check {

  margin-left: 100px;
}
.hat {
  z-index: 3;
  left: 39%;
  top: 27%;
  z-index: 1;
  position: absolute;
  width: 400px;
  height: 400px;
  margin: auto;
}
.my-box2 {
  position: absolute;
  display: inline-block;
  left: 30%;
  top: 25%;
  width: 40%;
  height: 33%;
  
  background-color: rgb(236, 235, 175);
  border-radius: 3em;
  box-shadow: 5px 5px 5px 5px rgba(228, 227, 227, 0.603);
  margin: auto;
}
.my-box3 {
  position: absolute;
  display: inline-block;
  width: 27%;
  height: 18%;
  border-radius: 3em;
  top: 37%;
  left: 36.5%;
  background-color: rgb(207, 190, 92);
  margin: auto;
}
.con {
  position: absolute;
  font-family: Georgia, 'Times New Roman', Times, serif ;
  margin-top: 10%;
  margin-left: 40%;
  margin: auto;
}
.check {
  margin-left: 40%;
  margin-top: 20%;
}
.my-box4 {
  position:absolute;
  display: inline-block;
  width: 50%;
  height: 20%;
  left: 25%;
  top: 65%;
  background-color: rgba(243, 243, 243, 0.788);
}
.my-box5 {
  position:absolute;
  display: inline-block;
  width: 50%;
  height: 0.5%;
  left: 25%;
  top: 62%;
  background-color: rgba(243, 243, 243, 0.788);
}




</style>
