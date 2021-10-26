<template>
  <div class="container">
    <div class="contents">
      <div class="v-application--wrap">
        <div class="page-head">
          <h2 data-v-clf1971a class="title-text-center">MY 동물등록증</h2>
        </div>
        <div v-if="accordionDIDs.length === 0" class="go-register" >
          <h3>등록된 동물등록증이 없습니다</h3>
          <img src="@/assets/img/MyPage/register.png"><br>
          <div class="register-b">
          <b-button variant="default" href="/#/regist">동물등록 하러 가기</b-button>
          </div>
        </div>

          
        <div class="spinner-div" v-if="isLoading">
          <Spinner></Spinner>
        </div>

        <div class="m-5">
          <carousel-3d
            :autoplay="false"
            :autoplay-timeout="1000"
            :display="5"
            :controlsVisible="true"
            :border="0"
            :width="585"
            :height="370"
            :space="500"
            :clickable="true"
            v-if="accordionDIDs.length"
          >
            <slide
              v-for="(did, index) in accordionDIDs"
              :index="index"
              :key="index"
            >
              <b-card
                id="b-did-card"
                @click="clickCard(did.did)"
                header-tag="header"
                footer-tag="footer"
              >
                <template #header> {{ did.did }} </template>
                <br />
                <b-card-body style="text-align: center">
                  <b-card-title>{{ did.name }}</b-card-title
                  ><br />
                  <img
                    style="width: 200px; height: 150px"
                    src="@/assets/img/Board/card-back.png"
                  />
                  <br />
                  <b-button
                    href="#"
                    variant="default"
                    @click="missingReport(`${did.did}`)"
                    >실종 신고</b-button
                  >
                </b-card-body>
              </b-card>
            </slide>
          </carousel-3d>
        </div>

        <!-- pop-up DID CARD -->
        <div class="black-bg" v-if="modal == true">
          <div class="white-bg">
            <Card v-bind:peterpet="peterpet" />
          </div>
        </div>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Card from "./Card.vue";
import Spinner from "./Spinner.vue";

export default {
  name: "Accordion",

  data() {
    return {
      loaded: false,

      accordionDIDs: [],

      modal: false,
      counter: 0,

      peterpet: {},
      isLoading: true,
    };
  },
  mounted() {
    if (this.getDids() !== null) {
      this.loaded = true;
    }
  },
  methods: {
    toast(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`실종신고가 완료되었습니다.`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append,
      });
    },
    getDids: function (address) {
      this.$http
        .get(`http://210.114.18.112:3000/api/pet/dids/owner/${address}`, {})
        .then((res) => {
          console.log(res.data);
          
          for (var i = 0; i < res.data.length; i++) {
            if(`${res.data.dids[i]}`.length > 1){
              this.accordionDIDs.push({
              id: i + 1,
              did: `${res.data.dids[i]}`,
              name: res.data.names[i],
            });
          }
          this.isLoading = false;
            }
        });
    },
    getInfo: function (did) {
      this.$http
        .get(`http://210.114.18.112:3000/api/pet/info/did/${did}`, {})
        .then((res) => {
          console.log(res.data);
          this.peterpet = res.data.peterpet;
        });
    },
    clickCard: function (did) {
      this.modal = true;
      this.getInfo(did);
    },
    missingReport: function (did) {
      this.$router
        .push({ name: "Page 2", query: { did: did } })
        .catch(() => {});
    },
  },
  created() {
    this.getDids(this.$store.state.user.address);
  },
  components: {
    Card,
    Carousel3d,
    Slide,
    Spinner,
  },

  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
    formattedDids() {
      return this.accordionDIDs.reduce((c, n, i) => {
        if (i % 2 === 0) c.push([]);
        c[c.length - 1].push(n);
        return c;
      }, []);
    },
  },
};
</script>

<style>
.b-did-card {
  margin-top: 50px;
}
.carousel-3d-slide {
  margin-right: 100px;
  width: 268px;
  margin-top: 50px;
  margin: 50px 50px 0 0;
  background: rgba(128, 128, 128, 0);
}
.a-card {
  position: relative;
  margin-top: 10%;
  margin-bottom: 30%;
  margin-left: -90px;
}
#dids {
  margin-left: 0px;
}
.md-layout-item {
  position: relative;
  top: 10%;
  width: 100%;
}

.contents {
  position: relative;
  top: 10%;
}
.name {
  z-index: 1;
  left: 360px;
  position: relative;
  bottom: 328px;
}
.number {
  position: relative;
  top: -551px;
  left: 365px;
}

.imghash {
  position: relative;
  left: 275px;
  top: -165px;
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
  position: relative;
  left: 380px;
  bottom: 78px;
}
.gender {
  position: relative;
  left: 360px;
  bottom: 67px;
}
.breedOfDog {
  position: relative;
  left: 747px;
  top: -456px;
}
.furColor {
  position: relative;
  left: 747px;
  top: -445px;
}
.adoptionDate {
  position: relative;
  left: 750px;
  top: -435px;
}
.isNeutering {
  position: relative;
  bottom: 415px;
  left: 795px;
}
.vaccinationHistory {
  position: relative;
  bottom: 395px;
  left: 775px;
}
.notes {
  position: relative;
  bottom: 344px;
  left: 770px;
}
.issueyear {
  position: relative;
  bottom: 266px;
  left: 505px;
}
.issuemonth {
  position: relative;
  bottom: 312px;
  left: 610px;
}
.issuedate {
  position: relative;
  bottom: 358px;
  left: 698px;
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
.card-on {
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

.bar {
  margin-left: -60%;
  font-size: 20px;
  font-family: "Righteous", cursive;
  color: rgb(125, 120, 150);
}

.page-head {
  position: absolute;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: rgba(75, 77, 85, 0.801);
  position: absolute;
  left: 42%;
  font-family: "Black Han Sans", sans-serif;
}
.b-card2 {
  display: inline-flex;
}

.container-fluid {
  left: 30%;
}
.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #2caae1;
}
.go-register {
  margin-top: 200px;
  margin-left: 390px;
}
.register-b {
  position: absolute;
  margin-top: -100px;
  margin-left: 90px;
}
</style>