<template>
        <div class="contents">
          <div class="v-application--wrap">
          <div class="page-head">
          <h2 data-v-clf1971a class="title-text-center">MY 동물등록증</h2></div>
      <div class="carousel">    
      <carousel :autoplay="true" :nav="true" :dots="true" class="container-fluidcontainer-fluid">
  
     <div class="row flex-row flex-nowrap">
      <div class="b-card2" v-for="did in accordionDIDs" :key="did.accld">
        <b-card @click="clickCard(did.did)"  
            header-tag="header" 
            footer-tag="footer"
            >
      <template #header> {{ did.did }}
      </template>
      <br>
      <b-card-body>
        <b-card-title>{{did.name}}</b-card-title><br>
        <img src="@/assets/img/Board/card-back.png">
        <b-card-text>동물등록증을 보려면 클릭하세요!</b-card-text>
      <b-button href="#" variant="default" @click="missingReport(`${did.did}`)">실종 신고</b-button>
      </b-card-body>
      <template #footer>
        <em>Peter-Pet</em>
      </template>
    </b-card>
      </div>
      </div>
</carousel> 

<div class="page1-line">
</div>
<div class="page1-line2">
</div>
</div> 
        </div>

        <!-- pop-up DID CARD -->
       <div class="black-bg" v-if="modal == true">
           <div class="white-bg">
          <Card v-bind:peterpet="peterpet" />
           </div>
       </div>
   </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import Card from './Card.vue'

export default {
  name:"Accordion",

  data (){
    return {
      accordionDIDs: [],

      modal : false,
      counter: 0,

      peterpet: { }
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
      },
      getDids: function(address) {
       this.$http.get(`http://localhost:3000/api/pet/get/all/dids/${address}`,{
       })
       .then((res) => {
         console.log(res.data);
         for(var i=0; i<res.data.length; i++){
           this.accordionDIDs.push({id:i+1, did:`${res.data.dids[i]}` ,name:res.data.names[i]});
         }
       })
     },
     getInfo: function(did) {
       this.$http.get(`http://localhost:3000/api/pet/get/all/petInfos/${did}`,{
       })
       .then((res) => {
         console.log(res.data);
         this.peterpet = res.data.peterpet;
       })
     },
     clickCard : function(did) {
       this.modal = true;
       this.getInfo(did);
     },
     missingReport : function(did) {
       this.$router.push({name :"Page 2", query : {did:did}}).catch(()=>{});
     }
  },
  created() {
    this.getDids(this.$store.state.user.address);
  },
  components: {
    carousel,
    Card
  },
  
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    formattedDids (){
          return this.accordionDIDs.reduce((c, n, i) => {
              if (i % 2 === 0) c.push([]);
              c[c.length - 1].push(n);
              return c;
          }, []);
      }
  }
};
</script>

<style lang="css">
#dids {
  margin-left: 0px;
}

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
  top:10%;
}
.name {
  left: 3.3%;
  position:absolute;
  top: 81%;
}
.number {
  position: absolute;
  bottom: 32.5%;
  left: 4%;
}
.imghash{
  position: absolute;
  left: 2.5%;
  top: 72.2%;
}
.birth {
  position: absolute;
  left: 4.5%;
  top: 84.7%;
}
.gender {
  position: absolute;
  left: 3.5%;
  top: 88.2%;
}
.breedOfDog {
  position: absolute;
  left: 25.2%;
  top: 66.2%;
}
.furColor {
  position: absolute;
  left: 25.2%;
  top: 69.8%;
}
.adoptionDate {
  position: absolute;
  left: 25.2%;
  top: 73%;
}
.isNeutering {
  position: absolute;
  top: 77%;
  left: 27.5%;
}
.vaccinationHistory {
  position: absolute;
  top: 81.1%;
  left: 26.5%;
}
.notes {
  position: absolute;
  top: 87%;
  left: 26.3%;
}
p {
  font-size: 20px;
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

.Image {
  height: 50%;
}
.carousel {
  text-align: center;
  z-index: 1;
  position: absolute;
  margin-top: 10%;
  margin-left: -3%;
  width: 100%;

}
.page1-line{
  position: absolute;
  width: 100%;
  height: 110%;
  background-color: rgba(143, 162, 173, 0.397);
  margin-top: -34%;
  left: 3%;
  border-radius: 1.5em;
}
.bar {
 margin-left: -60%;
  font-size: 20px;
  font-family: 'Righteous', cursive;
  color:rgb(125, 120, 150)
}
.page1-line2 {
  position: absolute;
  width: 100%;
  height: 1%;
  background-color: rgba(147, 161, 170, 0.171);
  margin-top: 5%;
  margin-left: 3%;
}
.page-head {
  position:absolute;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color:rgba(75, 77, 85, 0.801);
  position: absolute;
  left: 42%;
  font-family: 'Black Han Sans', sans-serif;
}
.b-card2 {
  display: inline-flex;
}
  
.container-fluid{
  left: 30%;
}
</style>