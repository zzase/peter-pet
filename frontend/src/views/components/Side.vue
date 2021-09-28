<template>
<v-app id="inspire">
  <div class='Side'>

    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.index"
          :to="{ path: item.url }"
          link1
        >
      
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
      </div>
    <div class="v-card">
        <v-card
          height="600"
          width="1320"
          class="mx-auto"
        >
          <v-col>
                  <v-sheet min-height="70vh" rounded="lg">
                    <v-fade-transition mode="out-in">
                      <router-view></router-view>
                    </v-fade-transition>
                  </v-sheet>
                </v-col>
        </v-card>
    </div>
</v-app>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import MyAccount from "./MyAccount.vue";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

Vue.use(VueRouter);

const routes = [
  {
    path: "/mypage",
    name: "mypage",
    component: MyAccount,
  },
  {
    path: "/mypage/page1",
    name: "Page 1",
    component: Page1,
  },
  {
    path: "/mypage/page2",
    name: "Page 2",
    component: Page2,
  },
  {
    path: "/mypage/page3",
    name: "Page 3",
    component: Page3,
  },
  
];

//4. 정의한 routes로 Router instance를 생성 합니다.
let router = new VueRouter({
  routes
  });

  export default {
    router,
    components: {},
    data () {
      return {
        items: [
          { title: 'My 동물등록증', icon: 'mdi-view-dashboard', url: '/mypage/page1' },
          { title: 'My 실종게시글 관리', icon: 'mdi-image', url: '/mypage/page2' },
          { title: 'My NFT', icon: 'mdi-help-box', url: '/mypage/page3' },
        ],
        right: null,
      }
    },
  }
</script>

<style>
.Side {
  position: absolute;
  left: -25%;
}
.v-card {
  position: relative;
  left: -11.1%;
}
.v-application-wrap {
    min-height: 50%;;
    max-width: 50%;
    position: relative;
}

</style>