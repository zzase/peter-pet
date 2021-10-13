<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle"> </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="my-box1"></div>
        <div class="md-layout">
          <div class="content">
            <!-- <h4>두남이의 Peter-Pet 등록이 완료되었습니다!</h4> -->
            <img
              id="check"
              alt="brand"
              src="@/assets/img/Regist/complete.png"
            />

          <b-card
            :title= nft.name
            :img-src= nft.img
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; max-height: 80rem;"
            class="mb-2">
            
            <b-button v-on:click="goDetailPersonalNft($route.query.tokenId)" variant="rose">상세보기</b-button>
            
            </b-card>
          <div class="mypage">
            <md-button id="mypage" href="#/mypage" class="md-success">
              <b>마이 페이지</b></md-button
            >
          </div>
          <div class="mainpage">
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
export default {
  components: {},
  bodyClass: "login-page",
  data() {
    return {
        nft : null
    };
  },
  methods : {
      getNft :async function(tokenId)  {
        try{
          await this.$http.get(`http://localhost:3000/api/nft/personal/info/token/${tokenId}`,{})
          .then((res)=> {
            if(res.data.msg){
              this.$http.get(res.data.tokenUri)
              .then((res)=> {
                this.nft = res.data;
              })
            }
          })
        }catch(err){
          this.$router.go();
        }
                
      },
      goDetailPersonalNft : function(tokenId) {
            window.location.href = `#/nft/detail/personal?tokenId=${tokenId}`
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
    }
};
</script>

<style lang="css">

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
  transform: translate(50,50);
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

.content {
  font-family: Georgia, "Times New Roman", Times, serif;
  position: relative;
  display: inline-block;
  left: 350px;
  top: -200px;
  margin: auto;
}
.check {
  margin-left: 100px;
}
.hat {
  z-index: 3;
  left: 485px;
  top: 650px;
  z-index: 1;
  position: absolute;
  width: 300px;
  height: 300px;
  margin: auto;
}
.my-box2 {
  position: relative;
  display: inline-block;
  left: -370px;
  top: 120px;
  width: 30%;
  height: 0.3%;
  font-size: 19px;
  color:rgb(125, 125, 133);
  margin: auto;
}
.query {
  position: relative;
  top: 20px;
  left: -100px;
  font-size: 20px;
  color:rgb(125, 125, 133);

}
.query-line {
  position: relative;
  width: 750px;
  height: 2px;
  top: 0px;
  left: 450px;
  background-color: rgba(235, 235, 235, 0.897);
}
.my-box3 {
  position: relative;
  display: inline-block;
  width: 870px;
  height: 380px;
  border-radius: 3em;
  top: -335px;
  left: 350px;
  border: 2px solid rgba(221, 219, 219, 0.897);
  margin: auto;
}
.con {
  position: absolute;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-top: 10%;
  margin-left: 40%;
  margin: auto;
}
.check {
  margin-left: 40%;
  margin-top: 20%;
}
.my-box4 {
  position: relative;
  display: inline-block;
  width: 30%;
  height: 0.3%;
  left: 200px;
  top: 400px;
  background-color: rgba(12, 255, 4, 0.897);
}
.my-box5 {
  position: relative;
  display: inline-block;
  width: 50%;
  height: 0.2%;
  left: 25%;
  top: 38%;
  background-color: rgba(248, 129, 17, 0.788);
}
.mypage {
  z-index: 2;
  position: relative;
  display: inline-block;
  top: 1000px;
  left: 750px;
}
.mainpage {
  position: relative;
  display: inline-block;
  top: 1000px;
  left: 900px;
}
</style>
