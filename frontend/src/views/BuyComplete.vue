<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle"> </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="my-box1"></div>
        <div class="container">
        <div class="md-layout">
          <div class="content">
            <!-- <h4>두남이의 Peter-Pet 등록이 완료되었습니다!</h4> -->
            <img
              id="check"
              alt="brand"
              src="@/assets/img/Regist/complete.png"
            />
          </div>
          <div class="hat">
            <img :src="img1" alt="brand" />
          </div>

          <div class="my-box2">
            <label><b>이름 : </b></label>
            <label>{{ peterpet.name }}</label>
            <br />
            <br />
            <label><b>등록번호 : </b></label>
            <label>{{ $route.query.result.did }}</label>
            <br />
            <br />
            <label><b>분양 영수증 : </b></label>
            <h7>{{$route.query.result.transactionHash}}</h7>
            <br />
            <br />
          </div>
          <div class="query-line"></div>
          <div class="query">
            <label><b>{{ peterpet.name }}를 잘 부탁해요!</b></label>
          </div>
          <div class="complete-img">
            <img
              id="dog"
              :src="peterpet.imgLink"
              alt="Circle Image"
              class="img-raised rounded-circle img-fluid"
            />
          </div>
          <div class="my-box3"></div>
          <div class="my-box4"></div>
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
      peterpet : null
    };
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
  methods : {
    getInfo: function (did) {
      this.$http
        .get(`http://210.114.18.112:3000/api/pet/info/did/${did}`, {})
        .then((res) => {
          console.log(res.data);
          this.peterpet = res.data.peterpet;
        });
    },
  },
  created(){
    const did = this.$route.query.result.did;
    console.log(did);
    this.getInfo(did);
  }
};
</script>

<style lang="css">

.complete-img {
  z-index: 2;
  position: absolute;
  width: 180px;
  height: 180px;
  overflow: hidden;
  margin-top: 285px;
  margin-left: 1090px;
  left: -850px;
  border-radius: 50px;
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
  left: 150px;
  top: -200px;
  margin: auto;
}
.check {
  margin-left: 100px;
}
.hat {
  z-index: 3;
  left: 180px;
  top: 340px;
  z-index: 1;
  position: absolute;
  width: 300px;
  height: 300px;
  margin: auto;
}
.my-box2 {
  position: relative;
  display: inline-block;
  left: -320px;
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
  left: 340px;
  font-size: 20px;
  color:rgb(125, 125, 133);

}
.query-line {
  position: relative;
  width: 750px;
  height: 2px;
  top: 0px;
  left: 140px;
  background-color: rgba(235, 235, 235, 0.897);
}
.my-box3 {
  position: relative;
  display: inline-block;
  width: 870px;
  height: 380px;
  border-radius: 3em;
  top: -335px;
  left: 0px;
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
