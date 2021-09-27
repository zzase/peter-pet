<template>
  <div class="wrapper">
     <parallax class="section page-header" :style="headerStyle">
     </parallax>
       <div class="main main-raised">
           <div class="section">
              <div class="contents">
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
  </div>
</template>

<script>
import Side from './components/Side.vue';
import Card from './components/Card.vue';


export default {
  bodyClass: "login-page",
  props: {

  },
  components: {
    Side,
    // Card
  
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
  left: -35%;
}

}
</style>
