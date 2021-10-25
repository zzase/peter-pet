<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle"> </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="my-box1"></div>
        <div class="md-layout">
          <div class="Spinner" v-if="isLoading">
            <div class="spinner-div">
              <Spinner></Spinner>
            </div>
          </div>
          <div class="complete-content" v-else>
            <!-- <h4>두남이의 Peter-Pet 등록이 완료되었습니다!</h4> -->
            <div class="complete-m">
              <img class="check" alt="brand" src="@/assets/img/nft/nft-c.png" />
            </div>

            <b-card
              :title="nft.name"
              :img-src="nft.repreImg"
              img-alt="Image"
              img-top
              tag="article"
              style="
                width: 300px;
                height: 450px;
                overflow: hidden;
                text-align: center;
              "
              class="nft-complete1"
            >
              <b-button
                v-on:click="goDetailCertiNft($route.query.tokenId)"
                variant="rose"
                >상세보기</b-button
              >
            </b-card>
            <div class="mypage-1">
              <md-button id="mypage" href="#/mypage" class="md-success">
                <b>마이 페이지</b></md-button
              >
            </div>
            <div class="mainpage-2">
              <md-button id="mainpage" href="#/" class="md-default">
                <b>메인 페이지</b></md-button
              >
            </div>
            <br /><br />
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
      isLoading: true,
      nft: null,
    };
  },
  methods: {
    getNft: async function (tokenId) {
      try {
        await this.$http
          .get(`http://210.114.18.112:3000/api/nft/certi/info/token/${tokenId}`, {})
          .then((res) => {
            if (res.data.msg) {
              this.$http.get(res.data.tokenUri).then((res) => {
                this.nft = res.data;
                this.isLoading = false;
              });
            }
          });
      } catch (err) {
        this.$router.go();
      }
    },
    goDetailCertiNft: function (tokenId) {
      window.location.href = `#/nft/detail?tokenId=${tokenId}`;
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
  margin-left: 500px;
}
.md-layout-item {
  position: relative;
  width: 100%;
}
.my-box1 {
  position: relative;
  display: inline-block;
  max-width: 1700px;
  height: 250px;
  margin-top: 10px;
  margin-left: 40px;
  padding-right: 50px;
  border-radius: 1em;
  background-color: rgba(235, 235, 235, 0.897);
}

.complete-content {
  font-family: Georgia, "Times New Roman", Times, serif;
  position: relative;
  display: inline-block;
  left: -40px;
  top: -100px;
  margin: auto;
}
.complete-m {
  position: relative;
  left: -200px;
  top: -100px;
  width: 500px;
  height: 500px;
}

.mypage-1 {
  z-index: 2;
  position: absolute;
  display: inline-block;
  top: 980px;
  left: 108px;
}
.mainpage-2 {
  position: absolute;
  display: inline-block;
  top: 980px;
  left: 245px;
}
</style>
