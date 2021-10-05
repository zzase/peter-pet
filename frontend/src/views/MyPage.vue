<template>
  <div class="wrapper">
     <parallax class="section page-header" :style="headerStyle">
     </parallax>
       <div class="main main-raised">
           <div class="section">
                <div class="my-page">
                  <img src="@/assets/img/MyPage/mypage.jpg">
                </div>
                  <div class="side-menu">
                  <Side></Side>
                  </div>
                  <div class="account-contents">
                  <MyAccount></MyAccount>
                 </div>
           </div>
      </div>
  </div>
</template>

<script>
import Side from './components/Side.vue';
import MyAccount from './components/MyAccount.vue'

export default {
  bodyClass: "login-page",
  props: {

  },
  components: {
    Side,
  },

  data() {
    return {
     
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


<style >
@media (max-width:400px){
  
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

.account-contents {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  left: 20%;
}
.side-menu {
  position: relative;
  display: inline-flex;
  margin-top: 20%;
  left: -20%;
}
.my-page {
  position: absolute;
  display: inline-flex;
}

}
</style>
