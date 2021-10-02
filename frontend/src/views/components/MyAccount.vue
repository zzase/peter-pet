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
                          <h5>내 반려견들 : </h5>
                          <br>
                          <div >
                            <h3 style="display:inline" v-for="pet in pets" :key="pet">{{pet.name}}  </h3>
                          </div>
                        </div>
                        <div class="account-number">
                          <h6>내 계좌</h6>
                        </div>
                        <div class="klay">
                          <h6>나의 잔액</h6>
                        </div>
                        <div class="accountNumber">
                        <p> {{ address }} </p>
                      </div>
                      <div class="myKlay">
                        <p> {{ balance }} klay</p>
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
       pets : []
     }
   },
   methods: {
     getBalance: function(address) {
       this.$http.get(`http://localhost:3000/api/user/get/balance/${address}`,{
       })
       .then((res) => {
         console.log(res.data);
         this.balance = res.data.balance;
         for(var i=0; i<res.data.length; i++) {
           this.pets.push({name : res.data.names[i]});
         }
       })
     },
     getDidInfo: function(address) {
       this.$http.get(`http://localhost:3000/api/pet/get/all/dids/${address}`,{
       })
       .then((res) => {
         console.log(res.data);
         for(var i=0; i<res.data.length; i++) {
           this.pets.push({name : res.data.names[i]});
         }
       })
     }
   },
   created() {
     this.name = this.$store.state.user.id;
     this.address = this.$store.state.user.address;
     this.getBalance(this.$store.state.user.address);
     this.getDidInfo(this.$store.state.user.address);
   }
 }
</script>

<style>  
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
  bottom: 44%;
  width: 29%;
  height: 15%;
  border: 2px solid rgba(240, 240, 240, 0.801);
  left: 50%;
  border-radius: 2em;
  
}
.accountbox1 {
  z-index: 1;
  position:absolute;
  display: inline-block;
  width: 29%;
  height: 15%;
  left: 20%;
  bottom: 44%;
  border:2px solid rgba(240, 240, 240, 0.801);
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
  height: 15%;
  background-color: rgba(240, 240, 240, 0.74);
  bottom: 18%;
  left: 20%;
}
.account-number {
  position: absolute;
  display: inline-block;
  bottom: 52%;
  left: 22%;
}
.klay {
  position: absolute;
  display: inline-block;
  bottom: 52%;
  left: 52%;
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
.btn1 {
  position: absolute;
  display:inline-block;
  top: 62%;
  left: 39%;
}
.btn2 {
  position: absolute;
  display: inline-block;
  top: 62%;
  left: 49%;
}
</style>