<template>
        <div class="contents">
          <div class="v-application--wrap">
          <div class="page-head">
          <h2 data-v-clf1971a class="title-text-center">MY 동물등록증</h2></div>
      <div class="carousel"> 
           
      <carousel v-if="loaded" :autoplay="true" :nav="false" :dots="true" class="container-fluidcontainer-fluid">
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

        <!-- pop-up DID CARD -->
       <div class="black-bg" v-if="modal == true">
           <div class="white-bg">
          <Card v-bind:peterpet="peterpet" />
           </div>
       </div>
       <br><br>
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
      loaded : false,
      
      accordionDIDs: [],

      modal : false,
      counter: 0,

      peterpet: { }
    }
  },
  mounted() {
    if(this.getDids() !== null) {
    this.loaded = true;
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

<style>
.a-card {
  position: relative;
  margin-top: 10%;
  margin-bottom: 30%;
}
#dids {
  margin-left: 0px;
}
.md-layout-item {
  position:relative;
  top: 10%;
  width: 100%;
}

.contents {
  position: relative;
  top:10%;
}
.name {
  z-index: 1;
  left: 28%;
  position:absolute;
  bottom: -18%;
}
.number {
  position: absolute;
  top: 12.5%;
  left: 29%;
}

.imghash {
  position: relative;
  left: 22%;
  top: 29%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin-top: -36%;
  
}
.imghash img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.birth {
  position: absolute;
  left: 29.5%;
  bottom: -37.8%;
}
.gender {
  position: absolute;
  left: 28%;
  bottom: -56.5%;
}
.breedOfDog {
  position: absolute;
  left: 56.5%;
  top: 23.3%;
}
.furColor {
  position: absolute;
  left: 56.5%;
  top: 42.5%;
}
.adoptionDate {
  position: absolute;
  left: 56.5%;
  top: 60.3%;
}
.isNeutering {
  position: absolute;
  bottom: 3.5%;
  left: 59.5%;
}
.vaccinationHistory {
  position: absolute;
  bottom: -18%;
  left: 58%;
}
.notes {
  position: absolute;
  bottom: -50%;
  left: 58%;
}
.issueyear {
  position: absolute;
  bottom: -92%;
  left: 39%;
}
.issuemonth {
  position: absolute;
  bottom: -92%;
  left: 46.5%;
}
.issuedate {
  position: absolute;
  bottom: -92%;
  left: 53%;
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
.owl-theme .owl-dots .owl-dot.active span, 
  .owl-theme .owl-dots .owl-dot:hover span {
      background: #2caae1;
  }

</style>