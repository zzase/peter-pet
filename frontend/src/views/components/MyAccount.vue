<template>
<div class="account-content">
      <div class="welcome" style= "margin-left: 8%; margin-top: 4%; color: white;">
            <h1><b>{{name}} 웬디님 ,</b></h1>
            <br><h3><b>환영합니다!</b></h3>
      </div>  
       <div class="line" style="width: 100%; height: 200px; background-color: #C5DFC1;
                                margin-top: -13%;">
        </div>
                       
        <div class="account-number" style="margin-left: 6%; margin-top:5%; border: 2px solid rgba(214, 214, 214, 0.74); color: #585A59;
                                            border-radius: 2em; width: 43%; height: 140px; text-align:center; box-shadow: 3px 3px 3px 3px rgba(214, 214, 214, 0.4);">
        <br><h5>
          <div class="icon icon-info">
            <md-icon>account_balance_wallet</md-icon>계좌
            </div>
            <br> {{ address }} </h5>
        </div>
        <div class="myKlay" style="margin-left: 52%; margin-top:-10%; border: 2px solid rgba(214, 214, 214, 0.74);
                                  border-radius: 2em; width: 43%; height: 140px; text-align:center;  color: #585A59; box-shadow: 3px 3px 3px 3px rgba(214, 214, 214, 0.4)">
        <br><h5>
          <div class="icon icon-info"><md-icon>paid</md-icon>잔액
          </div>
          <br> {{ balance }} klay</h5>
        </div>
        <div class="sample" style= "margin-left: 6%; margin-top: 5%; background-color: rgba(226, 235, 240, 0.671); color: #585A59;
                                    border-radius: 2em; width: 89%; height: 130px; text-indent: 30px;">
            <br><h5><md-icon>pets</md-icon>&nbsp;&nbsp;&nbsp;&nbsp;내 반려견 </h5>
            <br>
        <div >
            <h5 style="display:inline" v-for="(pet,index) in pets" :key="index">{{pet.name}}  </h5>
        </div>
      </div>
        <br><br><br><br>
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
       this.$http.get(`http://210.114.18.112:3000/api/wenddy/balance/address/${address}`,{
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
       this.$http.get(`http://210.114.18.112:3000/api/pet/dids/owner/${address}`,{
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
@media (max-width:1100px){
.account-content {
  position: relative;
}

.my-account {
  display: inline-block;
  position: absolute;
  bottom: 50%;
  width: 29%;
  height: 15%;
  left: 50%;
  border-radius: 2em;
  border: 2px solid rgba(226, 235, 240, 0.671);
  
}
.accountbox1 {
  z-index: 1;
  position:absolute;
  display: inline-block;
  width: 29%;
  height: 15%;
  left: 20%;
  bottom: 50%;
  border-radius: 2em;
  border: 2px solid rgba(224, 245, 255, 0.705);
}
.line {
  position: absolute;
  display: inline-block;
  width: 60%;
  height: 0.5%;
  background-color: rgba(214, 214, 214, 0.74);
  left: 20%;
  bottom: 70%;
}

.welcome {
  position: absolute;
  bottom: 80%;
  margin-left: 20%;
}
.sample {
  position:absolute;
  display: inline-block;
  width: 60%;
  height: 15%;
  background-color: rgba(240, 240, 240, 0.74);
  bottom: 32%;
  left: 20%;
}
.account-number {
  position: absolute;
  display: inline-block;
  bottom: 60%;
  left: 33%;
  box-shadow: 5px 5px 5px 5px rgba(201, 199, 199, 0.514) ;
}
.klay {
  position: absolute;
  display: inline-block;
  bottom: 60%;
  left: 61%;
}
p {
  font-size: 17px;
}
.wenddyName {
  font-weight: bold;
  color: rgb(117, 25, 126);
  display: inline;
}
.accountNumber {
  position: absolute;
  display: inline-block;
  bottom: 53%;
  left: 22%;
  font-weight: bold;
}
.myKlay {
  position: absolute;
  display: inline-block;
  bottom: 53%;;
  left: 60.5%;
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
}
</style>