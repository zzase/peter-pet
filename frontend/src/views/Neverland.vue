<template>
  <div class="wrapper">
   <parallax class="section page-header" :style="headerStyle">
            
   </parallax>
    <div class="main main-raised">
         
      <div class="section">
        <div class="box">
       <img alt="brand" src="@/assets/img/Neverland/NeverlandBackground.jpg">
        </div>
        <div class="neverland-link1-1"><img onclick="javascript:location.href='#/regist';" src="@/assets/img/Neverland/menu1.png" 
        style="cursor:pointer;"/></div>
         <div class="neverland-link2-1"><img onclick="javascript:location.href='#/select/form';" src="@/assets/img/Neverland/menu2.png" 
        style="cursor:pointer;"/></div>
         <div class="neverland-link3-1"><img onclick="javascript:location.href='#/mypage';" src="@/assets/img/Neverland/menu3.png" 
        style="cursor:pointer;"/></div>

       <div id="testImg">
         <!-- <img src="@/assets/img/Neverland/NeverlandBackground.jpg" width="700" height="350" alt="testimg"/> -->
         
       </div>
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Neverland/night.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
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

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.testImg {
  position:relative;
  width: 700px;
  height: 350px;
}
.button.btn1 {
  position: absolute;
  top: 170px;
  left: 35px
}
.box {
  position:relative;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
}
a {
  display: none;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.5);
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.btn-like {
  display: block;
  border: 1px solid #FFF;
  padding: 5px;
  color: #FFF;
}
.col-md-6:hover a{
  display: flex;
}
.neverland-link1-1 {
  position:absolute;
  width:65%;
  height:65%;
  bottom: -170px;
  left: -10px;
}
.neverland-link2-1 {
  position:absolute;
  width: 90%;
  height: 90%;
  top: 590px;
  bottom: 100px;
  left: 1100px;
}
.neverland-link3-1 {
  position:absolute;
  top: 510px;
  bottom: 300px;
  right: 570px;
}


</style>
