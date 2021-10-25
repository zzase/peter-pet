<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle"> </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="my-box1"></div>
        <div class="md-layout">
          <div class="Spinner" v-if="loading">
            <div class="spinner-div">
              <Spinner></Spinner>
            </div>
          </div>
          <div class="content" v-else>
            <!-- <h4>두남이의 Peter-Pet 등록이 완료되었습니다!</h4> -->
            <div class="complete-m1">
              <img id="check" alt="brand" src="@/assets/img/nft/nft-c.png" />
            </div>
            <div class="nftcard2">
              <b-card
                id="personal-nft"
                :title="nft.name"
                :img-src="nft.img"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 300px; max-height: 500px; text-align: center"
                class="mb-2"
              >
                <b-button
                  v-on:click="goDetailPersonalNft($route.query.tokenId)"
                  variant="rose"
                  >상세보기</b-button
                >
              </b-card>
            </div>

            <div class="mypage2">
              <md-button id="mypage" href="#/mypage" class="md-success">
                <b>마이 페이지</b></md-button
              >
            </div>
            <div class="mainpage2">
              <md-button id="mainpage" href="#/" class="md-default">
                <b>메인 페이지</b></md-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Spinner from "./components/Spinner.vue";

export default {
  components: {
    Spinner,
  },
  bodyClass: "login-page",
  data() {
    return {
      loading: true,
      nft: null,
    };
  },
  methods: {
    getNft: async function (tokenId) {
      try {
        await this.$http
          .get(
            `http://210.114.18.112:3000/api/nft/personal/info/token/${tokenId}`,
            {}
          )
          .then((res) => {
            if (res.data.msg) {
              this.$http.get(res.data.tokenUri).then((res) => {
                this.nft = res.data;
                this.loading = false;
              });
            }
          });
      } catch (err) {
        this.$router.go();
      }
    },
    goDetailPersonalNft: function (tokenId) {
      window.location.href = `#/nft/detail/personal?tokenId=${tokenId}`;
    },
  },
  props: {
    img1: {
      type: String,
      default: require("@/assets/img/Regist/hat.png"),
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/dunami.jpg"),
    },
    header: {
      type: String,
      default: require("@/assets/img/Regist/back.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  created() {
    this.getNft(this.$route.query.tokenId);
  },
};
</script>

<style lang="css">
.Spinner {
  text-align: center;
  margin-left: 750px;
}
.complete-img {
  z-index: 2;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin-top: -225px;
  left: -650px;
}
.complete-img img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.md-layout-item {
  position: relative;
  width: 100%;
}
.my-box1 {
  position: relative;
  display: inline-block;
  width: 1700px;
  height: 250px;
  margin-top: 10px;
  margin-left: 40px;
  padding-right: 50px;
  border-radius: 1em;
  background-color: rgba(235, 235, 235, 0.897);
}
.mypage2 {
  z-index: 2;
  position: relative;
  display: inline-block;
  top: 150px;
  left: -200px;
}
.mainpage2 {
  position: relative;
  display: inline-block;
  top: 150px;
  left: -180px;
}
.personal-nft img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.complete-m1 {
  position: relative;
  left: -360px;
}
.nftcard2 {
  position: relative;
  left: -330px;
}
</style>

