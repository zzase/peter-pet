<template>
  <div class="wrapper">
     <parallax class="section page-header" :style="headerStyle">
     </parallax>
       <div class="main main-raised">
           <div class="section">
              <div class="contents">
                <div class="mypage">
                  <img src="@/assets/img/MyPage/mypage.jpg">
                </div>
                  <div class="Side">
                  <Side></Side>
                  </div>
                  <div class="text">
                  <h4>My Account</h4>
                  </div>
                  <div class="account">
                  </div>
                  <br><br><br><br><br><br>
                  <div class="registercard">
                    <Card></Card>
                  </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Side from './components/Side.vue';
import Card from './components/Card.vue'


export default {
  bodyClass: "login-page",
  props: {

  },
  components: {
    Side,
    Card
  
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
.mypage {
  position: relative;
  width: 90%;
  height: 20%;
  left: -25%;
  top: 30%;
}
.board {
  position: absolute;
}
.Side {
  position: absolute;
  left: -25%;
}
.text {
  position: relative;
  margin-top: 50px;
  left: -5%;
}
.account {
  position: relative;
  width: 1120px;
  height: 200px;
  left: -5%;
  border: 2px solid rgba(223, 223, 223, 0.849);
  border-radius: 2em;
}
.registercard{
  position: relative;
  top: 10%;
  width: 40%;
  height:40%;
  left: -6%;
  
}



</style>
