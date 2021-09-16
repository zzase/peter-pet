<template>
  <div class="wrapper">
      <parallax class="section page-header" :style="headerStyle">
     </parallax>
   <div class="main main-raised">
      <div class="section">
         <img id ="white" src="@/assets/img/Regist/white.jpg">
            <div class="my-box0">
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
.my-box0 {
  position: absolute;
  width: 50%;
  height: 35%;
  background-color:blanchedalmond;
  top: 18%;
  left: 20%;

}

</style>
