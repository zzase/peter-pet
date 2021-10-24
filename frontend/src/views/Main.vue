<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="
              md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100
            "
          >
            <h1 class="title"></h1>
            <h4></h4>
            <br />
            <br /><br /><br /><br /><br /><br />
            <md-button @click="regBtn()" class="md-success md-lg">
              <b>반려견 등록하기</b></md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="
                md-layout-item md-size-66 md-xsmall-size-100
                mx-auto
                text-center
              "
            >
              <br /><br />
              <h1>01</h1>
              <br /><br /><br />
              <h2 class="title text-center">피터펫의 DID동물등록증이란?</h2>
              <br />
              <p style="font-size: 20px">
                DID 동물등록증은 블록체인 분산 신원증명 기술을 활용해 기존의
                동물등록 기능뿐만 아니라 그 정보를 타 기능과 연계시키는 것이
                가능합니다. 피터펫은 DID에 담긴 동물등록증을 통해 실종 반려견의
                추적 및 현황관리와 분양,소장용 NFT 생성 서비스를 제공하여
                반려견의 안전한 분양과 반려견과의 추억을 저장 할 수 있습니다.
                또한 반려동물의 DID 동물등록증을 간편하게 인식할 수 있는 QR코드
                목걸이를 제공하여 언제 어디서든 반려견과 보호자의 정보를 조회가
                가능합니다.
              </p>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>assignment</md-icon>
                  </div>
                  <h4 class="info-title">동물등록증 발급</h4>
                  <p>
                    반려견 정보와 보호자 분의 정보를 입력하여 동물등록증을
                    발급받으실 수 있습니다. 피터펫의 DID 동물등록증은 발급 후,
                    바로 마이페이지에서 확인 가능합니다.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">개인정보 보호</h4>
                  <p>
                    발급받으신 DID 동물등록증에 담긴 개인 정보는 암호화되어
                    저장되며 서비스 이용 시, 필요한 정보만 선택하여 전달할 수
                    있습니다.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>outbox</md-icon>
                  </div>
                  <h4 class="info-title">연계 서비스</h4>
                  <p>
                    네버랜드에서는 동물등록증을 NFT화하여 강아지를 분양할 수
                    있습니다. 내가 분양하고자 하는 강아지만의 다양하고 특별한
                    추억이 담긴 NFT를 만들어주세요.
                  </p>
                </div>
              </div>
            </div>
            <p></p>
          </div>
          <div class="container">
            <div class="neverland-img">
              <img
                alt="brand"
                src="@/assets/img/Neverland/NeverlandBackground.jpg"
              />
            </div>
            <div class="neverland-link1">
              <img
                onclick="javascript:location.href='#/mall';"
                src="@/assets/img/Neverland/menu1.png"
                style="cursor: pointer"
              />
            </div>
            <div class="neverland-link2">
              <img
                onclick="javascript:location.href='#/select/form';"
                src="@/assets/img/Neverland/menu3.png"
                style="cursor: pointer; /margin-top: 500px"
              />
            </div>
            <div class="neverland-link3">
              <img
                onclick="javascript:location.href='#/mypage';"
                src="@/assets/img/Neverland/menu2.png"
                style="cursor: pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Main/peterpet.jpg"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg"),
    },
  },
  data() {
    return { name: null, email: null, message: null };
  },
  methods: {
    regBtn: function () {
      if (this.$store.state.isLogin) {
        window.location.href = "#/regist";
      } else {
        alert("상단 메뉴의 'login'버튼을 이용해 로그인을 먼저 진행해주세요!");
      }
    },
  },
  computed: {
    headerStyle() {
      return { backgroundImage: `url(${this.header})` };
    },
  },
};
</script>

<style lang="scss" scoped="scoped">
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.neverland-link1 {
  position: absolute;
  width: 65%;
  height: 65%;
  bottom: -240px;
  left: -300px;
}
.neverland-link2 {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 530px;
  bottom: -900px;
  left: 300px;
}
.neverland-link3 {
  position: absolute;
  top: 580px;
  bottom: -590px;
  right: -240px;
}
.neverland-img {
  position: relative;
  margin-top: 100px;
  margin-left: -195px;
  width: 1500px;
}
</style>