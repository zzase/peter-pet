<template>
        <div class="contents">
          <div class="register-card">
            <div
            class="md-layout-item md-size-100 mx-auto"
          >
            <login-card header-color="green">
              <h2 slot="title" class="card-title">My Peter-Pet Card</h2>
            </login-card>
            </div>
          </div>
          
          <div id="app1">
            <div v-if="isStatusOn">
              <div class="card">
              <img id ="card" src="@/assets/img/Regist/card.png">
              </div>
                <div class="name">
                  <p> name {{ peterpet.name }} </p>
                </div>
                <div class="number">
                  <p> number {{ peterpet.registerNumber }} </p>
                </div>
                <div class="imghash">
                  <p> imghash {{ peterpet.imgHash }} </p>
                </div>
                <div class="birth">
                  <p> birth {{ peterpet.birth }} </p>
                </div>
                <div class="gender">
                  <p> gender {{ peterpet.gender }} </p>
                </div>
                <div class="breedOfDog">
                  <p> breedOfDog {{ peterpet.breedOfDog }} </p>
                </div>
                <div class="furColor">
                  <p> furColor {{ peterpet.furColor }} </p>
                </div>
                <div class="adoptionDate">
                  <p> adoptionDate {{ peterpet.adoptionDate }} </p>
                </div>
                <div class="isNeutering">
                  <p> isNeutering {{ peterpet.isNeutering }} </p>
                </div>
                <div class="vaccinationHistory">
                  <p> vaccinationHistory {{ peterpet.vaccinationHistory }} </p>
                </div>
                <div class="notes">
                  <p> notes {{ peterpet.notes }} </p>
                </div>
             </div>
          </div>

              <div class="card-on">
              <img src="@/assets/img/Board/my-card1.png" @click="toggleOnOff" style="cursor:pointer;"></div>
                <div class="agree">
             <img src="@/assets/img/Board/my-card2.png" @click="modal = true" style="cursor:pointer;"> </div>
              <div class="go-to-mypage">
             <img onclick="javascript:location.href='#/mypage';" src="@/assets/img/Board/my-card3.png" 
              style="cursor:pointer;"/></div>
        </div>
</template>

<script>
import { LoginCard } from "@/components";


export default {
  data (){
    return {
      isStatusOn: false,

      peterpet: {
         name: null,
         imgHash: "hash",
         breedOfDog: null,
         gender: null,
         birth: null,
         adoptionDate: null,
         isNeutering: null,
         furColor: null,
         vaccinationHistory: null,
         notes: null
      }
    }
  },
  methods: {
    toggleOnOff: function(){
      this.isStatusOn = !this.isStatusOn;
    }
  },
  components: {
    LoginCard
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

<style lang="css">
.white {
  z-index: 4;
}
.link {
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 200px;
  top: 49%;
  margin: auto;
  left: 28%;
}
.md-layout-item {
  position:relative;
  top: 10%;
  width: 100%;
}
.my-box0 {
  position: absolute;
  width: 50%;
  height: 35%;
  background-color:blanchedalmond;
  top: 8%;
  left: 25%;
}
.contents {
  position: relative;
  left: 30%;
  top:10%;
}
.name {
  position:absolute;
  margin-left: -13%;
  top: 50%;
}
.number {
  position: absolute;
  margin-left: -14%;
  top: 6%;
}
.imghash{
  position: absolute;
  margin-left: -10%;
  top: 27%;
}
.birth {
  position: absolute;
  margin-left: -14.5%;
  top: 60%;
}
.gender {
  position: absolute;
  margin-left: -13%;
  top: 69%;
}
.breedOfDog {
  position: absolute;
  margin-left: -35%;
  top: 11%;
}
.furColor {
  position: absolute;
  margin-left: -35%;
  top:20.5%;
}
.adoptionDate {
  position: absolute;
  margin-left: -35%;
  top: 29%;
}
.isNeutering {
  position: absolute;
  margin-left: -37.5%;
  top: 39.5%;
}
.vaccinationHistory {
  position: absolute;
  margin-left: -37%;
  top: 50%;
}
.notes {
  position: absolute;
  margin-left: -36%;
  top: 66%;
}
p {
  font-size: 20px;
}
.card {
  position: absolute;
  margin-top: 14%;
  width: 50%;
  height: 50%;
  left: -5.5%;
  border: 2px solid rgb(214, 214, 214);
  box-shadow: 5px 5px 5px rgba(175, 175, 175, 0.671);
}
.register-card {
  position: absolute;
  left: -11%;
  width: 70%;
  margin-top: 3%;
}
.agree {
  position: absolute;
  margin-top: 17%;
  
}
.card-on{
  z-index: 1;
  width: 40%;
  height: 40%;
  position: absolute;
  margin-top: 3%;
}
.go-to-mypage {
  position: absolute;
  margin-top: 10.5%;
  left: 0.5%;
}
</style>
