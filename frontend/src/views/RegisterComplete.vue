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
                     <!-- <h4>두남이의 Peter-Pet 등록이 완료되었습니다!</h4> -->
                        <img id="check" alt="brand" src="@/assets/img/Regist/complete.jpg">
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
                      <div class="mypage">
                        <md-button
                          id="mypage"
                          href="#/mypage"
                          class="md-success"
                          >
                          <b>마이 페이지</b></md-button >
                          </div>
                      <div class="mainpage">
                        <md-button
                          id="mainpage"
                          href="#/"
                          class="md-default"
                          >
                          <b>메인 페이지</b></md-button >
                          </div>
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
  top: 49%;
  margin: auto;
  left: 28%;
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
  left: 33%;
  top: 15%;
  margin: auto;
}
.check {

  margin-left: 100px;
}
.hat {
  z-index: 3;
  left: 22%;
  top: 44%;
  z-index: 1;
  position: absolute;
  width: 400px;
  height: 400px;
  margin: auto;
}
.my-box2 {
  position: absolute;
  display: inline-block;
  left: 43%;
  top: 53%;
  width: 30%;
  height: 0.3%;
  background-color: rgba(243, 243, 243, 0.788);
  margin: auto;
}
.my-box3 {
  position: absolute;
  display: inline-block;
  width: 15%;
  height: 18%;
  border-radius: 3em;
  top: 44%;
  left: 26%;
  border: 2px solid rgba(214, 214, 214, 0.616);
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
  height: 0.3%;
  left: 25%;
  top: 63%;
  background-color: rgba(243, 243, 243, 0.788);
}
.my-box5 {
  position:absolute;
  display: inline-block;
  width: 50%;
  height: 0.2%;
  left: 25%;
  top: 43%;
  background-color: rgba(167, 164, 164, 0.788);
}
.mypage {
  position: absolute;
  display: inline-block;
  top: 65%;
  left: 52%;
}
.mainpage {
  position: absolute;
  display: inline-block;
  top: 65%;
  left: 43%;
}





</style>
