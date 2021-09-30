<template>
<div class="account-content">
    <div class="welcome">
                  <h4 ><h1 class="wenddyName">{{name}}</h1> 웬디님</h4>
                  <br><h4>환영합니다</h4>
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
                        <div>
                          <p class="accountNumber"> {{ address }} </p>
                        </div>
                        <div class="klay">
                          <h6>나의 잔액</h6>
                        </div>
                        <div>
                          <p class="myKlay"> {{ balance }} klay</p>
                        </div>

                        <div class="btn1">        
              <md-button
                          id="login"
                          href="#/mypage"
                          class="md-info"
                          >
                          <b>마이 페이지</b></md-button >
               </div>
               <div class="btn2">
                <md-button
                          id="mainpage"
                          href="#/"
                          class="default"
                          >
                          <b>메인 페이지</b></md-button >
               </div>
        </div>

</template>
<script>
 export default {
   data(){
     return {
       name : null,
       address : null,
       balance : null,
     }
   },
   methods: {
     getBalance: function(address) {
       this.$http.get(`http://localhost:3000/api/user/get/balance/${address}`,{
       })
       .then((res) => {
         console.log(res.data);
         this.balance = res.data.balance
       })
     }
   },
   created() {
     this.name = this.$store.state.user.id;
     this.address = this.$store.state.user.address;
     this.getBalance(this.$store.state.user.address);
   }
 }
</script>

<style>  
p {
  color:rgb(88, 88, 88);
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
  position: absolute;
  display: inline-block;
  top: 10%;;
  left: 15%;
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
  bottom: 55%;
  width: 29%;
  height: 13%;
  border: 2px solid rgba(228, 226, 226, 0.801);
  left: 50%;
  border-radius: 2em;
  
}
.accountbox1 {
  z-index: 1;
  position:absolute;
  display: inline-block;
  width: 29%;
  height: 13%;
  left: 20%;
  bottom: 55%;
  border:2px solid rgba(228, 226, 226, 0.801);
  border-radius: 2em;
  
  
}
.line {
  position: absolute;
  display: inline-block;
  width: 60%;
  height: 0.5%;
  background-color: rgba(240, 240, 240, 0.74);
  left: 20%;
  bottom: 70%;
}

.welcome {
  position: absolute;
  display: inline-block;
  bottom: 73%;
  left: 20%;
}
.sample {
  position:absolute;
  display: inline-block;
  width: 60%;
  height: 10%;
  background-color: rgba(240, 240, 240, 0.74);
  bottom: 40%;
  left: 20%;
}
.account-number {
  position: absolute;
  display: inline-block;
  bottom: 62%;
  left: 32.5%;
}
.klay {
  position: absolute;
  display: inline-block;
  bottom: 62%;
  left: 62%;
}
p {
  font-size: 17px;
}
.wenddyName {
  font-weight: bold;
  color: blueviolet;
  display: inline;
}
.accountNumber {
  position: absolute;
  display: inline-block;
  bottom: 45%;
  left: 22%;
  color: rgb(23, 127, 117);
  font-weight: bold;
}
.myKlay {
  position: absolute;
  display: inline-block;
  bottom: 45%;
  left: 52%;
  color: rgb(23, 127, 117);
  font-weight: bold;
}
</style>