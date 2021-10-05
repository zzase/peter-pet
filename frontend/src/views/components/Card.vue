       <template> 
          <div class= "a-card">
              <div class="dog-card" style="margin-top: 7%;">
              <img id ="regist-card"
                   src="@/assets/img/Regist/card.png" 
                   @click="modal = false" 
                   style="cursor:pointer;
                          margin-left: 17%;
                          margin-bottom: -1%;
                          border: 1px solid rgba(175, 175, 175, 0.671)"> 
              </div>
              <div class="number" >
                <p style="font-size: 18px;">{{ this.peterpet.did }}</p>
              </div>
                <div class="name">
                  <p style="font-size: 18px;"> {{ this.peterpet.name }} </p>
                </div>
                <div class="number">
                  <p style="font-size: 18px;"> {{ this.peterpet.registerNumber }} </p>
                </div>
                <div class="imghash">
                  <img  v-bind:src="this.peterpet.imgLink" width="300px" height="300px" alt="" />
                </div>
                <div class="birth">
                  <p style="font-size: 18px;"> {{ this.peterpet.birth }} </p>
                </div>
                <div class="gender">
                  <p style="font-size: 18px;"> {{ this.peterpet.gender }} </p>
                </div>
                <div class="breedOfDog">
                  <p style="font-size: 18px;"> {{ this.peterpet.breedOfDog }} </p>
                </div>
                <div class="furColor">
                  <p style="font-size: 18px;">{{ this.peterpet.furColor }} </p>
                </div>
                <div class="adoptionDate">
                  <p style="font-size: 18px;"> {{ this.peterpet.adoptionDate }} </p>
                </div>
                <div class="isNeutering">
                  <p style="font-size: 18px;"> {{ this.peterpet.isNeutering }} </p>
                </div>
                <div class="vaccinationHistory">
                  <p style="font-size: 18px;"> {{ this.peterpet.vaccinationHistory }} </p>
                </div>
                <div class="notes">
                  <p style="font-size: 18px;"> {{ this.peterpet.notes }} </p>
                </div>
                <div class="issueyear">
                  <p style="font-size: 20px;"> {{ this.peterpet.issueDate.year }} </p>
                </div>
                <div class="issuemonth">
                  <p style="font-size: 20px;"> {{ this.peterpet.issueDate.month }} </p>
                </div>
                <div  class="issuedate">
                  <p style="font-size: 20px;"> {{ this.peterpet.issueDate.date }} </p>
                </div>
             </div>
             </template>


<script>
export default {
  data() {
    return {
      modal: false
    }
  },
  name: "Card",
  props: [
  "peterpet"
  ],
};
</script>

<style> 
@media (max-width:470px) {
.app1 {
  position: relative;
}
.name {
  left: 28%;
  position:absolute;
  top: 1%;
}
.number {
  position: absolute;
  bottom: 38.3%;
  left: 29%;
}
.imghash{
  position: absolute;
  left: 27%;
  top: 68%;
}
.birth {
  position: absolute;
  left: 29.5%;
  top: 82.2%;
}
.gender {
  position: absolute;
  left: 28%;
  top: 86.2%;
}
.breedOfDog {
  position: absolute;
  left: 56%;
  top: 60.7%;
}
.furColor {
  position: absolute;
  left: 56%;
  top: 64.9%;
}
.adoptionDate {
  position: absolute;
  left: 56%;
  top: 68.7%;
}
.isNeutering {
  position: absolute;
  top: 73.3%;
  left: 59%;
}
.vaccinationHistory {
  position: absolute;
  top: 78.1%;
  left: 58%;
}
.notes {
  position: absolute;
  top: 85%;
  left: 57.5%;
}
.card {
  z-index: 1;
  position: absolute;
  width: 80%;
  height: 100%;
  left: 17%;
  margin-top: -9%;
  border: 2px solid rgb(214, 214, 214);
  box-shadow: 5px 5px 5px rgba(175, 175, 175, 0.671);
}
.dog-card {
  margin-left: 17%;
  margin-bottom: 7%;
}
p {
  font-size: 20px;
}
}
</style>

             