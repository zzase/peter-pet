<template>
  <div class="wrapper">
   <div class="main main-raised">
      <div class="section">
      <md-field class="md-form-group" slot="inputs">
        <div class="contents">
          <div class="card">
          <img id ="card" src="@/assets/img/Regist/card.png">
          </div>
            <div class="name">
              <p> name {{ name }} </p>
            </div>
            <div class="number">
              <p> number {{ registerNumber }} </p>
            </div>
             <div class="imghash">
              <p> imghash {{ imgHash }} </p>
            </div>
            <div class="birth">
              <p> birth {{ birth }} </p>
            </div>
            <div class="gender">
              <p> gender {{ gender }} </p>
            </div>
            <div class="breedOfDog">
              <p> breedOfDog {{ breedOfDog }} </p>
            </div>
            <div class="furColor">
              <p> furColor {{ furColor }} </p>
            </div>
            <div class="adoptionDate">
              <p> adoptionDate {{ adoptionDate }} </p>
            </div>
             <div class="isNeutering">
              <p> isNeutering {{ isNeutering }} </p>
            </div>
            <div class="vaccinationHistory">
              <p> vaccinationHistory {{ vaccinationHistory }} </p>
            </div>
            <div class="notes">
              <p> notes {{ notes }} </p>
            </div>
         </div>
              
          <!-- <div class ="card_contents">
            <input type="text" v-model="peterpet.name">
            <input type="text" v-model="peterpet.imgHash">
            <input type="text" v-model="peterpet.breedOfDog">
            <input type="text" v-model="peterpet.gender">
            <input type="text" v-model="peterpet.birth">
            <input type="text" v-model="peterpet.adoptionDate">
            <input type="text" v-model="peterpet.isNeutering">
            <input type="text" v-model="peterpet.furColor">
            <input type="text" v-model="peterpet.vaccinationHistory">
            <input type="text" v-model="peterpet.notes">
          </div> -->
      </md-field>
       </div>
   </div>
</div>
</template>


<script>


export default {
  components: {
   
  },
  bodyClass: "login-page",
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
  left: 17%;
  top: 50%;
}
.number {
  position: absolute;
  left: 19%;
  top: 6%;
}
.imghash{
  position: absolute;
  left: 15%;
  top: 27%;
}
.birth {
  position: absolute;
  left: 19.5%;
  top: 60%;
}
.gender {
  position: absolute;
  left: 17%;
  top: 69%;
}
.breedOfDog {
  position: absolute;
  left: 61%;
  top: 11%;
}
.furColor {
  position: absolute;
  left: 61%;
  top:20.5%;
}
.adoptionDate {
  position: absolute;
  left: 61%;
  top: 29%;
}
.isNeutering {
  position: absolute;
  left: 65.5%;
  top: 39.5%;
}
.vaccinationHistory {
  position: absolute;
  left: 64%;
  top: 50%;
}
.notes {
  position: absolute;
  left: 63%;
  top: 66%;
}
p {
  font-size: 20px;
}
.card {
  border: 2px solid rgb(214, 214, 214);

}

</style>
