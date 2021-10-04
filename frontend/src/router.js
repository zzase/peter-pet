import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import PetOwn from "./views/PetOwnPage.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Regist from "./views/Regist.vue";
import Main from "./views/Main.vue";

import Neverland from "./views/Neverland.vue";
import RegisterComplete from "./views/RegisterComplete.vue"
import MyPage from "./views/MyPage.vue"
import MyPageVuetify from "./views/MyPageVuetify.vue"

import Test from "./views/Test.vue";
import result from "./views/result.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      components: { default: Main, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/result",
      name: "result",
      components: { default: result, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/test",
      name: "test",
      components: { default: Test, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    
    {
      path: "/regist",
      name: "regist",
      components: { default: Regist, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/complete",
      name: "complete",
      components: { default: RegisterComplete, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/neverland",
      name: "neverland",
      components: { default: Neverland, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/mypage",
      name: "mypage",
      components: { default: MyPage, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/pet/own/:did",
      name: "petOwn",
      components: { default: PetOwn,  },
      props: {
        
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
