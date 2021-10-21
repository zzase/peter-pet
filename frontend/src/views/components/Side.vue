<template>
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
<div class="b-card1">
     <b-card>
     <router-view></router-view>
     </b-card>
  </div>
</div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import MyAccount from "./MyAccount.vue";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

Vue.use(VueRouter);

const routes = [
  {
    path: "/mypage",
    name: "mypage",
    component: MyAccount,
  },
  {
    path: "/mypage/cards",
    name: "Page 1",
    component: Page1,
  },
  {
    path: "/mypage/report",
    name: "Page 2",
    component: Page2,
  },
  {
    path: "/mypage/missing",
    name: "Page 3",
    component: Page3,
  },
  {
    path: "/mypage/nfts",
    name: "Page 4",
    component: Page4,
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
          { title: 'My 동물등록증', icon: 'mdi-clipboard-multiple', url: '/mypage/cards' },
          { title: 'My 실종현황 관리', icon: 'mdi-file-search-outline', url: '/mypage/missing' },
          { title: 'My NFT', icon: 'mdi-database', url: '/mypage/nfts' },
        ],
        right: null,
      }
    },
  }
</script>

<style>
@media (max-width:1251px ){

.Side {
  position: relative;
  left: -20%;
}

.b-card1 {
  position: absolute;
  width: 10%;
  top: -20%;
  height: 800px;
}
.card-body {
  position: absolute;
  top: -20%;
}
.welcome {
  margin-left: 30%;
}
}
</style>