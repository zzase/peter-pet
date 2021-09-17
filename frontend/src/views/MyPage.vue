<template>
  <div class="wrapper">
     <parallax class="section page-header" :style="headerStyle">
     </parallax>
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
          </div>
        </div>
      </div>
    
    <div class="main main-raised">
      <div class="section">
        <div class="contents">
          <div class="mypage">
            <img src="@/assets/img/MyPage/mypage.jpg">
          </div>
          <div class="Side">
           <Side></Side>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Side from './components/Side.vue';

export default {
  bodyClass: "landing-page",
  props: {

  },
  components: {
    Side
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
.my-box {
  position: relative;
  width: 50%;
  height: 30%;
  top: 30%;
  left: 30%;
  background-color: rgba(58, 86, 207, 0.815);
}
.mypage {
  position: relative;
  width: 90%;
  height: 20%;
  left: 5%;
}
.account {
  position: relative;
  width: 60%;
  height: 30%;
  background-color: blanchedalmond;
  top: 30%;
  left: 30%;
}
.Side {
  position: relative;
  left: -37.8%;
}


</style>
