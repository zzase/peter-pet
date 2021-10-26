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
import CertiNft from "./views/CertiNft.vue";
import PersonalNft from "./views/PersonalNft.vue";
import Manager from "./views/Manager.vue"
import PetMall from "./views/PetMall.vue";
import CustomerService from "./views/CustomerService.vue";
import NftComplete from "./views/NftComplete.vue";
import PersonalNftComplete from "./views/PersonalNftComplete.vue";
import About from "./views/About.vue";
import BuyComplete from "./views/BuyComplete.vue"

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
      path: "/about",
      name: "about",
      components: { default: About, header: MainNavbar, footer: MainFooter  },
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
      },
    },
    {
      path: "/nft/complete",
      name: "nftComplete",
      components: { default: NftComplete, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
    },
    {
      path: "/nft/personal/complete",
      name: "personalNftComplete",
      components: { default: PersonalNftComplete, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
    },
    {
      path: "/nft/buy/complete",
      name: "buyComplete",
      components: { default: BuyComplete, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
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
      components: { default: CertiNft, header: MainNavbar, footer: MainFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/nft/detail/personal",
      name: "personalNftDetail",
      components: { default: PersonalNft, header: MainNavbar, footer: MainFooter  },
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
