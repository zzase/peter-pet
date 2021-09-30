<template>
        <div class="contents">
          <div class="page-head">
          <h2><b>MY 동물등록증</b></h2></div>
<div class="carousel">    
<!-- <carousel :autoplay="true" :nav="false" :dots="false" class="marginTop50">
  <ul id="carousel-1">
  <li v-for="DID in DIDs" v-bind:key="DID">
    {{ DID.id }}
  </li>
  </ul>

</carousel> -->

<!-- DID Card Slide -->
<carousel :autoplay="true" :nav="false" :dots="false" class="marginTop50">
 <b-card 
        v-for="DID in accordionDIDs" :key="DID.accld"
        title= "name"
        header-tag="header" 
        footer-tag="footer"
        @click="modal = true">
      <template #header> {{ DID.name }}
      </template>
      <br>
      <b-card-text>동물등록증을 보려면 클릭하세요!</b-card-text>
      <b-button href="#" variant="default" onclick="javascript:location.href='#/mypage/page2';">실종 신고</b-button>
      <template #footer>
        <em>Peter-Pet</em>
      </template>
    </b-card>
</carousel> 

<div class="page1-line">
</div>
<div class="page1-line2">
</div>
</div>         

        <!-- pop-up DID CARD -->
       <div class="black-bg" v-if="modal == true">
           <div class="white-bg">

          <div id="app1">
              <div class="card">
              <img id ="card" src="@/assets/img/Regist/card.png" @click="modal = false" style="cursor:pointer;"> 
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
       </div>
   </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name:"Accordion",

  data (){
    return {
      accordionDIDs: [
        {id:1, name:'did1'},
        {id:2, name:'did2'},
        {id:3, name:'did3'},
        {id:4, name:'did4'}
      ],

      modal : false,
      counter: 0,

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
  components: {
    carousel 
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
  margin-left: -13.5%;
  margin-top: 22.4%;
}
.number {
  position: absolute;
  margin-left: -15%;
  margin-top: 42.2%;
}
.imghash{
  position: absolute;
  margin-left: -12.5%;
  margin-top: 33%;
}
.birth {
  position: absolute;
  margin-left: -15%;
  margin-top: 17.8%;
}
.gender {
  position: absolute;
  margin-left: -13.5%;
  margin-top: 13.8%;
}
.breedOfDog {
  position: absolute;
  margin-left: -36%;
  margin-top: 40%;
}
.furColor {
  position: absolute;
  margin-left: -36%;
  margin-top: 35.8%;
}
.adoptionDate {
  position: absolute;
  margin-left: -36%;
  margin-top: 32%;
}
.isNeutering {
  position: absolute;
  margin-left: -38%;
  margin-top: 27.2%;
}
.vaccinationHistory {
  position: absolute;
  margin-left: -37.5%;
  margin-top: 22.5%;
}
.notes {
  position: absolute;
  margin-left: -36.7%;
  margin-top: 15.2%;
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
.app1 {
  position: absolute;
  top: 10%;
}
.did-card1 {
  width: 50%;
  text-align: center;
  position: absolute;
  left: 7%;
  top: 60%;
}
.did-card2 {
  width: 50%;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 33.5%;
}
.did-card3 {
  width: 50%;
  text-align: center;
  position: absolute;
  left: 60%;
  top: 60%;
}
.Image {
  height: 50%;
}
.carousel {
  text-align: center;
  z-index: 1;
  position: relative;
  margin-top: 4%;
  margin-left: -29%;
}
.page1-line{
  position: absolute;
  width: 76%;
  height: 100%;
  background-color: rgba(143, 155, 173, 0.397);
  top: 14%;
}
.bar {
 margin-left: -60%;
  font-size: 20px;
  font-family: 'Righteous', cursive;
  color:rgb(125, 120, 150)
}
.page1-line2 {
  position: absolute;
  width: 76%;
  height: 1%;
  background-color: rgba(147, 161, 170, 0.171);
  margin-top: 5%;
}
.page-head {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color:rgba(75, 77, 85, 0.801);
  position: absolute;
  left: 10%;
  top: -4%;
}
</style>
