<template>
    <v-app id="page3">
    <div class="report">
    <img id ="report" src="@/assets/img/Board/missingReport.png">
 </div>
 <!-- <div class="reportbtn">
     <md-button
         id="login"
         href="#/mypage"
         class="md-success"
         >
         <b></b></md-button >
 </div> -->
 <div class="agreement">
      <b-button @click="modal = true">실종신고>></b-button>
 </div>
 <div class="black-bg" v-if="modal == true">
   <div class="white-bg">
     <h4>Message</h4>
     <p>신고가 완료되었습니다!</p>
    
     <md-button @click="modal = false">닫기</md-button>
      </div>
 </div>
</v-app>

</template>

<script>


export default {

    name: 'Page3',

    data (){
      return {
        modal : false,
        counter: 0,
      }
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
    }
}
</script>

<style>
body{
  margin: 0
}
div {
  box-sizing: border-box;
}
.black-bg {
  left: 43%;
  width: 30%;
  height: 25%;
  background: rgba(129, 129, 129, 0.37);
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
.reportbtn {
    z-index: 1;
    position:absolute;
    display: inline-block;
    top: 17%;
    left: 45%;
}
.agreement {
    z-index: 2;
     position:absolute;
    display: inline-block;
    top: 54%;
    left: 47%;
}
</style>
