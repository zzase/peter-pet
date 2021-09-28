<template>
<v-app id="page2">
   <div class="report-box">
   </div>
   <div class="report-method">
   <img src="@/assets/img/Board/report.png">
   </div>
   <div class="report-box2">
   </div>
   <div class="questionmark">
   <img id="question" src="@/assets/img/Board/questionmark.png"></div>
      <div class="report-text1">
        <h4>반려견이 실종되었다면<br>
            바로 실종신고 버튼을 눌러주세요!</h4>
      </div>
      <div class="report-text2">
        <h6>실종신고 시, 반려동물의 DID 동물등록증에 실종상태가 즉시 업데이트 됩니다.<br>
            목격자는 반려견 외장칩 목걸이의 QR코드를 통해 위와 같이 반려견에<br>
            대한 정보와 보호자님의 연락처를 조회할 수 있습니다.</h6>
      </div>
      <div class="agreement">
      <b-button @click="modal = true">실종신고>></b-button>
      </div>

 <div class="black-bg" v-if="modal == true">
   <div class="white-bg">
    
     <h4>개인정보 제3자 제공 동의</h4><br>
     <p>(주)피터펫은 회원님들의 개인정보를 안전하게 취급하는데 최선을 다합니다.<br><br></p>
     
        <p>제공되는 개인정보 항목<br><br></p>
        <div class="report-line1">
        </div>
       <li>이용약관 동의[필수]</li>
        <div class="checkBtn1">
        <input type="checkbox" name="chk"></div>
       <li>보호자 이름[필수]</li>
        <div class="checkBtn2">
        <input type="checkbox" name="chk"></div>
        <li>보호자 연락처[필수]</li>
        <div class="checkBtn3">
        <input type="checkbox" name="chk"></div>
         <li>보호자 주소[선택]</li>
        <div class="checkBtn4">
        <input type="checkbox" name="chk"></div>
        <div class="report-line2">
        </div>
        <p>위의 정보는 실종된 반려견을 발견한 목격자가 보호자님께<br>
        제보하기 위한 용도로만 제공됩니다.</p><br>

        <md-button @click="modal = false">동의</md-button>

      </div>
 </div>

</v-app>
</template>

<script>

export default {
  data (){
    return {
     modal : false,
    counter: 0,
    }
  },
  components: {
    
  
  },

      methods: {
      toast(toaster, append = false) {
        this.counter++
        this.$bvToast.toast(`실종신고가 완료되었습니다.`, {
          title: `Toaster ${toaster}`,
          toaster: toaster,
          solid: true,
          appendToast: append
        })
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

<style>
body{
  margin: 0
}
div {
  box-sizing: border-box;
}
.report-box {
  position:relative;
  width: 70%;
  height: 60%;
  background-color: darkslategrey;
  top: 25%;
  left: 15%;
}
.report-box2 {
  position: absolute;
  width: 60%;
  height: 75%;
  background-color: white;
  border: 1px solid darkslategray;
  top: 5%;
  left: 20%;
}
.report-text1 {
  position: absolute;
  top: 12%;
  left: 37.5%;
  text-align: center;
  color:rgb(33, 46, 46);
}
.report-text2 {
  position:absolute;
  top: 58%;
  left: 31%;
  text-align: center;
  color: rgb(33, 46, 46);
}
.black-bg {
  left: 43%;
  width: 30%;
  height: 72%;
  top: 10%;
  background: rgba(161, 161, 161, 0.37);
  border-radius: 8px;
  position: fixed; padding: 20px;
  margin:auto;
}
.white-bg {
  text-align: center;
  width: 100%; background: white;
  height: 100%;
  border: 1px solid rgba(85, 85, 85, 0.432);
  border-radius: 8px;
  padding: 20px;
  margin:auto;
}
.close {
  margin:auto;
  
}
.agreement {
    z-index: 2;
     position:absolute;
    display: inline-block;
    top: 70%;
    left: 46%;
}
.checkBtn1 {
  position: relative;
  bottom: 5%;
  left: 21%;
}
.checkBtn2 {
  position: relative;
  bottom: 4.7%;
  left: 21%;
}
.checkBtn3 {
  position: relative;
  bottom: 4.7%;
  left: 21%;
}
.checkBtn4 {
  position: relative;
  bottom: 4.5%;
  left: 21%;
}
.report-line1 {
  position: relative;
  top: -5%;
  background-color: rgba(167, 167, 167, 0.452);
  width: 100%;
  height: 0.2%;
}
.report-line2 {
  position: relative;
  top: 13%;
  background-color: rgba(167, 167, 167, 0.452);
  width: 100%;
  height: 0.2%;
}
.questionmark {
  position: absolute;
  width: 10%;
  height: 10%;
  left: 46%;
  top: 1%;
}
.report-method {
  z-index: 1;
  position: absolute;
  width: 28%;
  height: 28%;
  left: 36%;
  top: 18%;
}
</style>
