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
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content"></div>
                </a>
              </li>

              <md-list-item a href="#" target="_blank" v-if="showDownload">
                <p>About</p>
                <md-tooltip md-direction="bottom">Peter Pet ?</md-tooltip>
              </md-list-item>

              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement()"
                v-if="showDownload"
              >
                <p>Animal registration</p>
                <md-tooltip md-direction="bottom">Animal registration</md-tooltip>
              </md-list-item>

              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement()"
                v-if="showDownload"
              >
                <p>External Device/Recognition ID</p>
                <md-tooltip md-direction="bottom">Tinkerbell</md-tooltip>
              </md-list-item>

              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement()"
                v-if="showDownload"
              >
                <p>NAVERLAND</p>
                <md-tooltip md-direction="bottom">NAVERLAND</md-tooltip>
              </md-list-item>

              <li class="md-list-item" v-else>
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
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
              <div>
                  <b-button v-b-modal.modal-center id="login">login</b-button>

                  <b-modal hide-footer id="modal-center"  centered title="Login with Key Store">
                    
                    <div class="form-group">
                      <label for="keystore"> KeyStore </label> <br>
                      <input type="file" id="keystore" v-on:change="handleImport">
                    </div>

                    <div class="form-group">
                      <label for="input-password"> 비밀번호 </label>
                      <input type="password" class="form-control" id="input-password" @change="handlePassword()">
                      <p class="help-block" id="message" ref="message"></p>
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
                      <button type="button" class="btn btn-primary" id="submit" @click="handleLogin()">제출</button>
                    </div>
                  </b-modal>

                  <button type="button"
                          class="btn btn-info pull-right"
                          id="logout"
                          style="display: none;"
                          @click="handleLogout()">로그아웃
                  </button>

                </div>
              <li>
              </li>
            </md-list>
          </div>
        </div>
      </div>
      <div>      
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
const Key = {
  auth : {
    accessType: 'keystore',
    keystore: '',
    password: ''
  },
}
export default {
  components: {
    MobileMenu,
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
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
  },
  methods: {
    handleImport : async function()  {
      const fileReader = new FileReader();
      fileReader.readAsText(event.target.files[0]); //선택한 파일 읽기
      fileReader.onload = (event) => {
        try{
          if(!this.checkValidKeystore(event.target.result)){
            this.$refs.message.textContent='유효하지 않은 keystore 파일입니다.'
            return;
          }
          Key.auth.keystore = event.target.result;
          this.$refs.message.textContent='keystore 통과. 비밀번호를 입력하세요'
           document.querySelector('#input-password').focus();
        }catch (event) {
         this.$refs.message.textContent='유효하지 않은 keystore 파일입니다.'
         return;
        }
      }

    },

    handlePassword : async (event) => {
      Key.auth.password = event.target.value;
    },

    checkValidKeystore(keystore) {
      const parsedKeystore = JSON.parse(keystore);
      const isValidKeystore = parsedKeystore.version && parsedKeystore.id && parsedKeystore.address && parsedKeystore.keyring;

      return isValidKeystore;
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
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
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
