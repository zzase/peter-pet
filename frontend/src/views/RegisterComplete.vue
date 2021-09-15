<template>
  <div class="wrapper">
      <parallax class="section page-header" :style="headerStyle">
   </parallax>
   <div class="main main-raised">
     <div class="section">
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
.main {
  height: 1100px;
}
.section {
  padding: 100%;
}
.link {
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 200px;
  top: 43%;
  bottom: 75%;
  left: 45.7%;
}
.md-layout-item {
  position:relative;
}
.my-box1 {
  position: absolute;
  display: inline-block;
  width: 93%;
  height: 5%;
  margin-left: 60px;
  padding-right: 50px;
  background-color:rgba(247, 247, 247, 0.911)
}

.content {
  font-family: Georgia, 'Times New Roman', Times, serif;
  position: absolute;
  display: inline-block;
  margin-top: 50px;
  margin-left: 580px;
  padding-bottom: 500px;
}
.check {

  margin-left: 100px;
}
.hat {
  z-index: 1;
  position: absolute;
  width: 400px;
  height: 400px;
  margin-left: 609px;
  margin-top: 230px;
}
.my-box2 {
  position: absolute;
  display: inline-block;
  margin-top: 10%;
  margin-left: 23%;
  width: 800px;
  height: 650px;
  margin-bottom: 100px;
  background-color: rgb(236, 235, 175);
  border-radius: 3em;
  box-shadow: 5px 5px 5px 5px rgba(228, 227, 227, 0.603);
}
.my-box3 {
  position: absolute;
  display: inline-block;
  width: 500px;
  height: 200px;
  border-radius: 3em;
  margin-left: 670px;
  margin-top: 550px;
  background-color: rgb(207, 190, 92);
}
.con {
  position: relative;
  font-family: Georgia, 'Times New Roman', Times, serif ;
  position: relative;
  margin-top: 10%;
  margin-left: 40%;
}
.check {
  margin-left: 40%;
  margin-top: 20%;
}



</style>
