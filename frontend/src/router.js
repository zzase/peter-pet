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
import NftForm from "./views/NftForm.vue";
import NftFormPersonal from "./views/NftFormPersonal.vue";
import SelectForm from "./views/SelectForm.vue";
import NftPage1 from "./views/NftPage1.vue";
import NftPage2 from "./views/NftPage2.vue";
import Manager from "./views/Manager.vue"
import PetMall from "./views/PetMall.vue";
import CustomerService from "./views/CustomerService.vue";

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
      path: "/select/form",
      name: "selectForm",
      components: { default: SelectForm, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/nft/form",
      name: "nftForm",
      components: { default: NftForm, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/nft/form/personal",
      name: "nftFormPersonal",
      components: { default: NftFormPersonal, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/mall",
      name: "petmall",
      components: { default: PetMall, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/customer/service",
      name: "customerService",
      components: { default: CustomerService, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/nft/detail",
      name: "certiNftDetail",
      components: { default: NftPage1, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/nft/detail/personal",
      name: "personalNftDetail",
      components: { default: NftPage2, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
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
    },
    {
      path: "/manager",
      name: "manager",
      components: { default: Manager, header: MainNavbar, footer: MainFooter },
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
