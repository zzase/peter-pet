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
            <h1 class="title">I'm your wenddy!</h1>
            <h1 class="title">I'm your pet!</h1>
            <h1 class="title">I'm your Peter-pet!</h1>
            <h1 class="title">We are friend!!</h1>

            <br />
            <br />
            <br />
            <br />
            <br />

            <!-- <md-button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        class="md-success md-lg" target="_blank" ><i class="fas fa-play"></i> Watch
                        video</md-button > -->
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
              <h2 class="title text-center">What to do?</h2>
              <h5 class="description">
                Peter-pet은 국가동물등록 정식대행기관으로써 신원 증명 블록체인
                DID를 활용해 동물등록을 하고 실종 반려견 찾기,분양 및 개인소장용
                NFT 생성 제공하여 분양사기를 방지하고, 개인의 반려견과의 추억을
                저장 할 수 있는 서비스를 제공합니다.
              </h5>
              <br />
              <div class="icon icon-danger">
                <img
                  :src="img7"
                  alt="Thumbnail Image"
                  class="img-raised Rounded Raised"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div class="md-layout">
            <div
              class="
                md-layout-item md-size-66 md-xsmall-size-100
                mx-auto
                text-center
              "
            >
              <h2 class="title text-center">What is Peterpet?</h2>

              <br />
              <div class="icon icon-danger">
                <img
                  :src="img8"
                  alt="Thumbnail Image"
                  class="img-raised Rounded Raised"
                />
              </div>
              <br />
              <h5 class="description">
                Peterpet이란 월트 디즈니 애니메이션 피터팬을 인용한
                단어로,피터펫은 피터팬처럼 순수하게 웬디(견주)를 지키는
                반려견을,웬디는 피터팬의 보호자이자 영원한 친구를,팅커벨은 항상
                피터팬을 쫒아다니는 요정으로 QR,내장칩으로 의미를 두어 견주와
                반려견의 거리감을 줄이고 영원히 함께하는 인생의 동반자라는
                네이밍하게 되었습니다.
              </h5>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-medium-size-33 md-small-size-33">
                <h2 class="text-center title">Peter-Pet</h2>
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
                  <h4 class="info-title">동물등록</h4>
                  <br />
                  <p>
                    동물등록증을 블록체인 기반 DID로 발급함으로써 등록절차를
                    간소화시키고 실종 신고 서비스와 연계를 가능합니다.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>

              <div class="md-medium-size-33 md-small-size-33">
                <h1 align="center">02</h1>
                <br /><br />
                <div class="text-center">
                  <div class="icon icon-info">
                    <img
                      :src="img5"
                      alt="Thumbnail Image"
                      class="img-raised Rounded Raised img"
                    />
                  </div>
                  <br />
                  <br />
                  <h4 class="info-title">실종신고</h4>
                  <br />
                  <p>
                    반려견을 잃어버렸을 경우, 신고 접수와 동시에 DID동물등록증을
                    서비스 유저들이 모두 열람할 수 있게함으로써 실종 정보 및
                    정황을 공유가 가능합니다.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>

              <div class="md-medium-size-33 md-small-size-33">
                <h1 align="center">03</h1>
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
                  <h4 class="info-title">NFT</h4>
                  <br />
                  <p>
                    DID 동물등록증을 NFT화하여 분양사기를 방지하고, 소장용 NFT를
                    만들어 반려견과의 추억을 저장 할 수 있습니다.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>

              <div class="md-medium-size-33 md-small-size-33">
                <h1 align="center">04</h1>
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
                  <p>
                    저희 사이트를 통해 동물등록을 한 웬디님들(견주님들)이 타
                    반려견 관련 서비스 이용의 편리함을 위해 해당 이용 기관들에
                    저희 PETERPET API를 제공합니다.
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
                      <b-button variant="outline-primary" @click="goip()"
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
</style>