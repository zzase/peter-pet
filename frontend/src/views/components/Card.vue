       <template> 
          <div id="app1">
              <div class="dog-card">
              <img id ="regist-card" src="@/assets/img/Regist/card.png" @click="modal = false" style="cursor:pointer;"> 
              </div>
              <div class="number">
                <p>{{ this.peterpet.did }}</p>
              </div>
                <div class="name">
                  <p> {{ this.peterpet.name }} </p>
                </div>
                <div class="number">
                  <p> {{ this.peterpet.registerNumber }} </p>
                </div>
                <div class="imghash">
                  <p> {{ this.peterpet.imgHash }} </p>
                </div>
                <div class="birth">
                  <p> {{ this.peterpet.birth }} </p>
                </div>
                <div class="gender">
                  <p> {{ this.peterpet.gender }} </p>
                </div>
                <div class="breedOfDog">
                  <p> {{ this.peterpet.breedOfDog }} </p>
                </div>
                <div class="furColor">
                  <p>{{ this.peterpet.furColor }} </p>
                </div>
                <div class="adoptionDate">
                  <p> {{ this.peterpet.adoptionDate }} </p>
                </div>
                <div class="isNeutering">
                  <p> {{ this.peterpet.isNeutering }} </p>
                </div>
                <div class="vaccinationHistory">
                  <p> {{ this.peterpet.vaccinationHistory }} </p>
                </div>
                <div class="notes">
                  <p> {{ this.peterpet.notes }} </p>
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
  ]
}
</script>

<style> 

.dog-card {
  margin-left: 17%;
  margin-bottom: 10%;
}
p {
  font-size: 20px;
}
</style>

             