<template>
<v-app id="page2">
   <div class="report-box">
   </div>
   
   <div class="report-box2">
   </div>
   <div class="report-method">
   <img id="method" src="@/assets/img/Board/report.png"></div>
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

 <div class="black-bg1" v-if="modal == true">
   <div class="white-bg1">
    
     <h4>개인정보 제3자 제공 동의</h4><br>
     <p>(주)피터펫은 회원님들의 개인정보를 안전하게 취급하는데 최선을 다합니다.<br><br></p>
     
        <p>제공되는 개인정보 항목<br><br></p>
        <div class="report-line1">
        </div>

        <li>전체 선택</li> 
        <div class="checkBtn1">
        <input type="checkbox" name="checkBox" v-model="agree.check1" @change="checkAll"></div>
       <li>이용약관 동의[필수]</li> 
        <div class="checkBtn2">
        <input type="checkbox" name="checkBox" v-model="agree.check2"></div>
        <li>보호자 이름[필수]</li>
        <div class="checkBtn3">
        <input type="checkbox" name="checkBox" v-model="agree.check3"></div>
         <li>보호자 연락처[필수]</li>
        <div class="checkBtn4">
        <input type="checkbox" name="checkBox" v-model="agree.check4"></div>


        <div class="report-line2"><br>
           
        </div>
        <p>위의 정보는 실종된 반려견을 발견한 목격자가 보호자님께<br>
        제보하기 위한 용도로만 제공됩니다.</p><br>
      </div>
        <div class="report-close">
        <b-button @click="modal = false">닫기</b-button>
        </div>
        <div class="report-agree">
          <b-button @click="missingReport()">동의</b-button>
          <!-- <b-modal id="modal-1" title="Peter-Pet 실종신고">
            <p class="my-4">실종신고가 완료되었습니다!</p>
          </b-modal> -->
        </div>

      
 </div>

 <div class="btn3">        
              <md-button
                    id="login"
                    href="#/mypage"
                    class="md-default"
              >
              <b>마이 페이지</b></md-button >
</div>

</v-app>
</template>

<script>

export default {
  data (){
    return {
    
    agree  :{
      check1 : false,
      check2 : false,
      check3 : false,
      check4 : false,
    },
    modal : false,
    counter: 0,
    }
  },
  components: {
    
  
  },
      methods: {
        checkAll : function () {
          this.agree.check2 = !this.agree.check2;
          this.agree.check3 = !this.agree.check3;
          this.agree.check4 = !this.agree.check4;
        },
      toast(toaster, append = false) {
        this.counter++
        this.$bvToast.toast(`실종신고가 완료되었습니다.`, {
          title: `Toaster ${toaster}`,
          toaster: toaster,
          solid: true,
          appendToast: append
        })
      },

      missingReport: function() {
        if(this.agree.check1&this.agree.check2&this.agree.check3&this.agree.check4){
          this.$http.post('http://210.114.18.112:3000/api/pet/report/missing',
          {address : this.$store.state.user.address, did : this.$route.query.did, id : this.$store.state.user.id },
          {"Content-Type":"application-json"})
          .then((res)=>{
            console.log('res.data : ' + res.data);
            if(res.data.checkUpdate){
              alert(res.data.msg);
              this.$router.push({name:'Page 3'});
            }
            else {
              alert("실종신고 실패");
            }
          })
          .catch((err)=>{
            console.error(err);
          })
        }
        else {
          alert("정보제공 동의서에 체크 해주시기 바랍니다.");
        }
      },

      selectAll: function() {
          const checkboxes
                = document.getElementsByName('infoAgree');

          checkboxes.forEach((checkbox) => {
            checkbox.checked = selectAll.checked;
          })
      },
  
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
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
  height: 65%;
  background-color: darkslategrey;
  border-radius: 10px;
  top: 25%;
  left: 15%;
}
.report-box2 {
  position: absolute;
  width: 60%;
  height: 75%;
  background-color: white;
  border-radius: 10px;
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
  top: 61%;
  left: 31%;
  text-align: center;
  color: rgb(33, 46, 46);
}
.black-bg1 {
  z-index: 2;
  left: 43%;
  width: 30%;
  height: 78%;
  top: 10%;
  background: rgba(161, 161, 161, 0.37);
  border-radius: 8px;
  position: fixed; padding: 10px;
  margin:auto;
}
.white-bg1 {
  z-index: 1;
  text-align: center;
  width: 100%; background: white;
  height: 100%;
  border: 1px solid rgba(85, 85, 85, 0.432);
  border-radius: 8px;
  padding: 10px;
  margin:auto;
}
.close {
  margin:auto;
  
}
.agreement {
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
  top: 12%;
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
  position: absolute;
  width: 28%;
  height: 28%;
  left: 36%;
  top: 18%;
}
.report-agree {
  position: absolute;
  left: 39%;
  bottom: 8%;
}
.report-close {
  position: absolute;
  left: 52%;
  bottom: 8%;
}
.btn3 {
  position: absolute;
  left: 45%;
  top: 95%;
}
</style>
