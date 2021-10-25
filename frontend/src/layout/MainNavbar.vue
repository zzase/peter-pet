<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <!-- <h3 class="md-title">Vue Material Kit</h3> -->

        <a class="navbar-brand" href="#/">
          <span>
            <img alt="brand" src="@/assets/img/Main/logo.png" />
          </span>
        </a>
      </div>
      <div class="navbar">
        <div class="md-toolbar-section-end">
          <md-button
            class="md-just-icon md-simple md-toolbar-toggle"
            :class="{ toggled: toggledClass }"
            @click="toggleNavbarMobile()"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </md-button>

          <div class="md-collapse">
            <div class="md-collapse-wrapper">
              <mobile-menu nav-mobile-section-start="false">
                <!-- Here you can add your items from the section-start of your toolbar -->
              </mobile-menu>
              <md-list>
                <li class="md-list-item" v-if="!showDownload">
                  <a
                    href="javascript:void(0)"
                    class="
                      md-list-item-router md-list-item-container md-button-clean
                      dropdown
                    "
                  >
                    <div class="md-list-item-content"></div>
                  </a>
                </li>

                <md-list-item
                  a
                  href="#/about"
                  @click="scrollToElement()"
                  v-if="showDownload"
                >
                  <p style="font-size: 19px; color: black">회사 소개</p>
                  <md-tooltip md-direction="bottom">Peter Pet ?</md-tooltip>
                </md-list-item>

                <md-list-item @click="scrollToElement()" v-if="showDownload">
                  <button class="Animal_regist" @click="regBtn()">
                    동물등록
                  </button>
                  <md-tooltip md-direction="bottom"
                    >Animal registration</md-tooltip
                  >
                </md-list-item>

                <md-list-item @click="scrollToElement()" v-if="showDownload">
                  <button class="Animal_regist" @click="nftBtn()">
                    NFT 생성
                  </button>
                  <md-tooltip md-direction="bottom">Create NFT</md-tooltip>
                </md-list-item>

                <md-list-item
                  href="#/neverland"
                  @click="scrollToElement()"
                  v-if="showDownload"
                >
                  <p style="font-size: 19px; color: purple">네버랜드</p>
                  <md-tooltip md-direction="bottom">NAVERLAND</md-tooltip>
                </md-list-item>

                <md-list-item
                  href="#/customer/service"
                  @click="scrollToElement()"
                  v-if="showDownload"
                >
                  <p style="font-size: 19px; color: black">고객센터</p>
                  <md-tooltip md-direction="bottom"
                    >Customer Service</md-tooltip
                  >
                </md-list-item>

                <li class="md-list-item" v-else>
                  <a
                    href="javascript:void(0)"
                    class="
                      md-list-item-router md-list-item-container md-button-clean
                      dropdown
                    "
                  >
                    <div class="md-list-item-content">
                      <drop-down direction="down">
                        <md-button
                          slot="title"
                          class="
                            md-button md-button-link md-white md-simple
                            dropdown-toggle
                          "
                          data-toggle="dropdown"
                        >
                          <i class="material-icons">view_carousel</i>
                          <p>Examples</p>
                        </md-button>
                        <ul class="dropdown-menu dropdown-with-icons">
                          <li>
                            <a href="#/landing">
                              <i class="material-icons">view_day</i>
                              <p>Landing Page</p>
                            </a>
                          </li>
                          <li>
                            <a href="#/login">
                              <i class="material-icons">fingerprint</i>
                              <p>Login Page</p>
                            </a>
                          </li>
                          <li>
                            <a href="#/profile">
                              <i class="material-icons">account_circle</i>
                              <p>Profile Page</p>
                            </a>
                          </li>
                        </ul>
                      </drop-down>
                    </div>
                  </a>
                </li>
                <div class="login-mypage">
                  <div v-if="this.$store.state.isLogin">
                    &nbsp;&nbsp;&nbsp;
                    <b-button pill variant="outline-primary" @click="myPage()"
                      >MyPage</b-button
                    >
                    &nbsp;
                    <b-button pill variant="outline-primary" @click="logout()"
                      >로그아웃</b-button
                    >
                  </div>

                  <div v-else>
                    <b-button
                      pill
                      variant="outline-primary"
                      v-b-modal.modal-center
                      :id="login"
                      :ref="login"
                      >login</b-button
                    >
                  </div>

                  <b-modal
                    hide-footer
                    id="modal-center"
                    ref="loginModal"
                    centered
                    title=""
                  >
                    <div class="spinner-div" v-if="isLoading">
                      <Spinner></Spinner>
                    </div>
                    <form @submit.prevent="login">
                      <login-card header-color="green">
                        <br />

                        <h3 slot="title" class="card-title">Login</h3>

                        <p slot="description" class="description">
                          아이디 입력시 아이디가 없으면 자동 회원가입이 돼요!
                        </p>
                        <md-field class="md-form-group" slot="inputs">
                          <md-icon>face</md-icon>
                          <label>ID</label>
                          <md-input v-model="user.id"></md-input>
                        </md-field>
                        <md-field class="md-form-group" slot="inputs">
                          <md-icon>lock_outline</md-icon>
                          <label>Password</label>
                          <md-input
                            type="password"
                            v-model="user.password"
                          ></md-input>
                        </md-field>
                        <md-button
                          slot="footer"
                          class="md-simple md-success md-lg"
                          @click="$bvModal.hide('modal-center')"
                        >
                          닫기
                        </md-button>
                        <md-button
                          type="submit"
                          slot="footer"
                          class="md-simple md-success md-lg"
                        >
                          로그인
                        </md-button>
                      </login-card>
                    </form>
                  </b-modal>
                </div>
                <div class="text-center" id="address" ref="address"></div>
                <li></li>
              </md-list>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </md-toolbar>
</template>



<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";

import { LoginCard } from "@/components";
import Spinner from "././../views/components/Spinner.vue";

const Key = {
  auth: {
    accessType: "keystore",
    keystore: "",
    password: "",
  },
};
export default {
  components: {
    MobileMenu,
    LoginCard,
    Spinner,
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      user: {
        id: null,
        password: null,
      },
      isLoading: false,
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
  },
  methods: {
    regBtn: function () {
      if (this.$store.state.isLogin) {
        window.location.href = "#/regist";
      } else {
        alert("상단 메뉴의 'login'버튼을 이용해 로그인을 먼저 진행해주세요!");
      }
    },
    nftBtn: function () {
      if (this.$store.state.isLogin) {
        window.location.href = "#/select/form";
      } else {
        alert("상단 메뉴의 'login'버튼을 이용해 로그인을 먼저 진행해주세요!");
      }
    },
    myPage: function () {
      window.location.href = "#/myPage";
    },
    logout: function () {
      this.$store.commit("logout");
      this.$router.push({ name: "main" }).catch(() => {});
    },
    login: function () {
      this.isLoading = true;
      this.$http
        .post(
          "http://210.114.18.112:3000/api/wenddy/login",
          { user: this.user },
          { "Content-Type": "application-json" }
        )
        .then((res) => {
          console.log("res.data : " + res.data);
          if (res.data.loginCheck) {
            this.$store.commit("loginSuccess");
            this.$store.commit("setUser", res.data.user);

            if (this.$store.state.user.auth === "manager") {
              this.$router.push({ name: "manager" }).catch(() => {});
            } else {
              this.$router.push({ name: "main" }).catch(() => {});
            }
          } else {
            this.$store.commit("loginError");
          }
          // alert(res.data.msg);
          setTimeout(() => {
            this.$bvModal.hide("modal-center");
            this.isLoading = false;
          }, 2000);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll / 500) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style>
@media screen and (min-width: 1000px) {
  .md-toolbar-section-start {
    margin-top: 20px;
    margin-left: -400px;
  }
  .navbar {
    margin-left: 220px;
  }
  .md-toolbar-row {
    margin-left: 550px;
  }
  .Animal_regist {
    font-size: 19px;
    color: black;
  }
}
</style>