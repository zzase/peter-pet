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
                  <div>
                  <Side></Side>
                  <div class="welcome">
                  <h4>00님<br><br>환영합니다</h4>
                  </div>
                    <div class="my-account">
                    </div>
                      <div class="line">
                      </div>
                        <div class="accountbox1">
                        </div>
                        <div class="accountbox2">
                        </div>
                        <div class="sample">
                        </div>
                        <div class="account-number">
                          <h6>내 계좌</h6>
                        </div>
                        <div class="klay">
                          <h6>나의 잔액</h6>
                        </div>
                        <div class="accountNumber">
                        <p style="color: darkgray"> accountNumber {{ accountNumber }} </p>
                      </div>
                      <div class="myKlay">
                        <p style="color: darkgray"> myKlay {{ myKlay }} </p>
                      </div>
                       
                  </div>
                  <!-- <div class="text">
                  <h4>My Account</h4>
                  </div>
                  <div class="account">
                  </div>
                  <br><br><br><br><br><br> -->
                  <!-- <div class="registercard">
                    <Card></Card>
                  </div> -->
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
.my-page {
  position: relative;
  width: 90%;
  height: 20%;
  left: -25%;
  top: 30%;
}
.board {
  position: absolute;
}

.text {
  position: relative;
  margin-top: 50px;
  left: -5%;
}
.registercard{
  position: relative;
  top: 10%;
  width: 40%;
  height:40%;
  left: -6%;
}
.my-account {
  display: inline-block;
  position: absolute;
  bottom: 44%;
  width: 25%;
  height: 13%;
  border: 2px solid rgba(240, 240, 240, 0.801);
  left: 28%;
  border-radius: 2em;
  
}
.accountbox1 {
  z-index: 1;
  position:absolute;
  display: inline-block;
  width: 25%;
  height: 13%;
  left: 0%;
  bottom: 44%;
  border:2px solid rgba(240, 240, 240, 0.801);
  border-radius: 2em;
  
  
}
.line {
  position: absolute;
  display: inline-block;
  width: 55%;
  height: 0.5%;
  background-color: rgba(240, 240, 240, 0.74);
  left: -1%;
  bottom: 60%;
}

.welcome {
  position: absolute;
  display: inline-block;
  bottom: 63%;
  left: 0.2%;
}
.sample {
  position:absolute;
  display: inline-block;
  width: 55%;
  height: 20%;
  background-color: rgba(240, 240, 240, 0.74);
  bottom: 18%;
  left: -1%;
}
.account-number {
  position: absolute;
  display: inline-block;
  bottom: 52%;
  left: 2%;
}
.klay {
  position: absolute;
  display: inline-block;
  bottom: 52%;
  left: 30%;
}
p {
  font-size: 20px;
}
.accountNumber {
  position: absolute;
  display: inline-block;
  bottom: 46%;
  left: 2%;
}
.myKlay {
  position: absolute;
  display: inline-block;
  bottom: 46%;
  left: 30%;
}
</style>
