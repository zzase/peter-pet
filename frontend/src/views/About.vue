<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle">
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
            <img src="@/assets/img/About/about-text.png">
                                            <h2 style="font-size: 26px; color: darkgray;"><br><br>Peter-Pet</h2>
              <hr width="550px">
              <br />
              <img src="@/assets/img/About/about-peterpet.png">
              <br /> <br /> <br />
             
              <p style="font-size: 20px;"> <b>어렸을 적 읽었던 동화 피터팬을 기억하시나요? <br><br><br>
              순수함을 간직한 채 네버랜드에서 살아가는 피터팬처럼 <br>
              Peter-Pet은 '우리 주위의 순수한 반려견들을 지켜주자'는 의미에서 시작되었습니다.<br></b></p>
              <br /><br /><br />
              
              <img src="@/assets/img/About/about-wenddy.png">
              <br /><br /><br />
              <p style="font-size: 20px;"><b>피터팬의 친구 웬디처럼<br> 반려견과의 소중한 삶을 옆에서 지켜주세요 <br><br></b></p>
              <p style="font-size: 23px; color: rgb(218, 138, 114)"><b>여러분이 바로 Peter-Pet의 "웬디"입니다!</b></p>
              <br /><br /><br />
              <hr width="550px">

            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-medium-size-33 md-small-size-33">
                <h1 align="center">01</h1>
                <br /><br />
                <div class="text-center">
                  <div class="icon icon-info">
                    <img
                      :src="img4"
                      alt="Thumbnail Image"
                      class="img-raised Rounded Raised img"
                    />
                  </div>
                  <br />
                  <br />
                  <h4 class="info-title">피터펫의 동물등록증</h4>
                  <br />
                  <p style="font-size: 17px;">
                   블록체인 기반 분산 신원증명 기술인 DID를 통해 동물등록증을 발급함으로써<br>
                   실종 신고 서비스 및 반려동물 정보가 필요한 타 서비스와의 연계가 가능합니다.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            <div class="part2">
              <div class="md-medium-size-33 md-small-size-33">
                <h1 align="center">02</h1>
                <br /><br />
                <div class="text-center">
                  <img src="@/assets/img/About/qr-necklace.png">
                   <img src="@/assets/img/About/description.png"
                        style="margin-top: -180px; margin-bottom: -150px;">
                </div>
               
                 <h4 class="info-title">피터펫 반려견 목걸이</h4>
                  <br />
                  <p style="font-size: 17px;"> 
                    피터펫은 신고서비스와 연계하여 조회할 수 있는 DID 페이지를 반려견 목걸이의 QR코드를 통해 제공합니다.<br>
                    목걸이 뒷면의 바코드는 스캔 시, 해당 반려견의 동물등록번호 조회가 가능합니다. <br>
                    QR 및 바코드 목걸이를 통해 보다 간편하게 반려동물 정보조회를 하실 수 있습니다.
                  </p>
                  <br /> <br /> <br /> <br /><br /> <br /> <br />
              </div>
            </div>
            <div class="part3">
              <div class="md-medium-size-33 md-small-size-33">
                <h1 align="center">03</h1>
                <br /><br />
                <br /><br /><br /><br />
                <div class="text-center">
                  <div class="icon icon-info">
                    <img
                      :src="img5"
                      alt="Thumbnail Image"
                      class="img-raised Rounded Raised img"
                      style="margin-top: -70px;"
                    />
                  </div>
                  <br />
                  <br />
                  <h4 class="info-title">피터펫의 실종신고 서비스</h4>
                  <br />
                  <p style="font-size: 17px;"> 
                    반려견을 잃어버렸을 경우, 신고 접수와 동시에 반려동물에 대한 실종 상태가 업데이트되며, <br>
                    반려견 목걸이의 QR코드를 통해 모든 사람들이 해당 반려견의 DID동물등록증과 보호자님의 정보를 조회할 수 있습니다.<br>
                    따라서 목격자는 보호자님께 즉각적으로 신고가 가능합니다.

                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div class="part4">
              <div class="md-medium-size-33 md-small-size-33">
               <br /><br /> <br /><br />
                <h1 align="center">04</h1>
                <br /><br />
                <div class="text-center">
                  <div class="icon icon-info">
                    <img
                      :src="img6"
                      alt="Thumbnail Image"
                      class="img-raised Rounded Raised img"
                    />
                  </div>
                  <br />
                  <br />
                  <h4 class="info-title">피터펫 NFT</h4>
                  <br />
                  <p style="font-size: 17px;">
                    피터펫은 분양과 개인 소장용 NFT 생성 서비스를 제공합니다.<br>
                    DID 동물등록증을 NFT화하여 분양사기를 방지하고, <br>소장용 NFT를
                    만들어 반려견과의 추억을 저장 할 수 있습니다.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div class="part5">
              <div class="md-medium-size-33 md-small-size-33">
                <br /><br /><br /><br />
                <h1 align="center">05</h1>
                <br /><br />
                <div class="text-center">
                  <div class="icon icon-info">
                    <img
                      :src="img9"
                      alt="Thumbnail Image"
                      class="Rounded Raised img2"
                    />
                  </div>
                  <br />
                  <br />
                  <h4 class="info-title">Peter-Pet API 제공</h4>
                  <br />
                  <p style="font-size: 17px;">
                   협력업체에 API를 제공함으로써 이용자들에게 보다 편리한 반려동물 연계 서비스를 제공합니다.
                  </p>

                  <div class="box">
                    <div class="md-layout">
                      <div
                        class="
                          md-layout-item md-size-66 md-xsmall-size-100
                          mx-auto
                          text-center
                        "
                      ></div>
                    </div>
                    <div class="features text-center">
                      <div class="md-layout">
                        <div
                          class="
                            md-layout-item md-medium-size-33 md-small-size-100
                          "
                        >
                          <div class="info">
                            <div class="icon icon-info">
                              <div class="icon icon-info">
                                <img
                                  :src="img10"
                                  alt="Thumbnail Image"
                                  class="Rounded Raised img"
                                />
                              </div>
                            </div>
                            <h4 class="info-title">보호자 API</h4>
                            <p>
                              PETERPET은 회원가입시 보호자 정보를 저장하지
                              않습니다. 따라서 해당 API는 보호자가 정부에게 직접
                              개인정보 제공 동의시 해당 API를 사용할 수
                              있습니다. 해당 API는 PETERPET에 등록된 ID로
                              정부로부터 개인정보를 얻어옵니다.
                            </p>
                          </div>
                        </div>
                        <div
                          class="
                            md-layout-item md-medium-size-33 md-small-size-100
                          "
                        >
                          <div class="info">
                            <div class="icon icon-success">
                              <div class="icon icon-info">
                                <img
                                  :src="img11"
                                  alt="Thumbnail Image"
                                  class="Rounded Raised img"
                                />
                              </div>
                            </div>
                            <h4 class="info-title">반려견 API</h4>
                            <p>
                              PETERPET은 등록된 DID를 QR코드, 바코드 등의 형태로
                              저장하여 회원들에게 제공합니다. 후에 다 반려견
                              서비스에서 해당 QR코드 및 바코드를 이용해 동물
                              정보를 쉽게 조회할 수 있도록 API를 제공합니다.
                            </p>
                            <br />
                          </div>
                        </div>
                        <div
                          class="
                            md-layout-item md-medium-size-33 md-small-size-100
                          "
                        >
                          <div class="info">
                            <div class="icon icon-success">
                              <div class="icon icon-info">
                                <img
                                  :src="img12"
                                  alt="Thumbnail Image"
                                  class="Rounded Raised img"
                                />
                              </div>
                            </div>
                            <h4 class="info-title">NFT API</h4>
                            <p>
                              PETERPET은 등록된 DID를 QR코드, 바코드 등의 형태로
                              저장하여 회원들에게 제공합니다. 후에 다 반려견
                              서비스에서 해당 QR코드 및 바코드를 이용해 동물
                              정보를 쉽게 조회할 수 있도록 API를 제공합니다.
                            </p>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="post-button">
                      <b-button variant="outline-primary" style="width: 500px; height: 80px; font-size: 20px;" @click="goip()"
                        >Peter-Pet API</b-button
                      >
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <h4 class="card-title">
                      오세원
                      <br />
                      <br />
                      <small class="card-description text-muted"
                        >Leader & Backend</small
                      >
                    </h4>
                    <br />
                    <br />

                    <md-card-content>
                      <p class="card-description"></p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <h4 class="card-title">
                      차세훈
                      <br />
                      <br />
                      <small class="card-description text-muted"
                        >Development Leader & Smart Contract</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description"></p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <h4 class="card-title">
                      강민송
                      <br />
                      <br />
                      <small class="card-description text-muted"
                        >Poject Manager & FrontEnd</small
                      >
                    </h4>
                    <br />

                    <md-card-content>
                      <p class="card-description"></p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto"
            ></div>
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
      default: require("@/assets/img/dog.jpeg"),
    },
    img4: {
      type: String,
      default: require("@/assets/img/registex.jpg"),
    },
    img5: {
      type: String,
      default: require("@/assets/img/findex.jpg"),
    },
    img6: {
      type: String,
      default: require("@/assets/img/nftex.jpg"),
    },
    img7: {
      type: String,
      default: require("@/assets/img/mac.jpg"),
    },
    img8: {
      type: String,
      default: require("@/assets/img/peter.jpg"),
    },
    img9: {
      type: String,
      default: require("@/assets/img/open.jpg"),
    },
    img10: {
      type: String,
      default: require("@/assets/img/man.jpg"),
    },
    img11: {
      type: String,
      default: require("@/assets/img/pet.jpg"),
    },
    img12: {
      type: String,
      default: require("@/assets/img/nftimg.jpg"),
    },
  },
  data() {
    return { name: null, email: null, message: null };
  },
  computed: {
    headerStyle() {
      return { backgroundImage: `url(${this.header})` };
    },
  },
  methods: {
    goip: function () {
      window.open("https://documenter.getpostman.com/view/11494205/UV5XhxQc");
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

.img {
  max-width: 50%;

  text-align: center;
}
.img2 {
  max-width: 80%;
}
.box {
  margin-top: -200px;
}
.post-button {
  position: center;
}
.part2 {
  margin-left: -120px;
}
.part3 {
  margin-left: 35px;
}
.part4 {
  margin-left: 235px;
}
.part5 {
  margin-left: -130px;
}
</style>