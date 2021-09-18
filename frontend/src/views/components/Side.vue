<template>
<v-app id="inspire">
  <v-card
    height="600"
    width="256"
    class="mx-auto"
  >
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
          :key="item.title"
          :to="{ path: '/page1' }"
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
       <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-fade-transition mode="out-in">
                <router-view></router-view>
              </v-fade-transition>
            </v-sheet>
          </v-col>
    </v-navigation-drawer>
  </v-card>
</v-app>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "./Page1";

Vue.use(VueRouter);
const routes = [
  {
    path: "/page1",
    name: "Page 1",
    component: Page1,
  },
  
];

//4. 정의한 routes로 Router instance를 생성 합니다.
let router = new VueRouter({
  routes
  });
  export default {
    data () {
      return {
        items: [
          { title: 'My 동물등록증', icon: 'mdi-view-dashboard', index: 1 },
          { title: 'My 실종게시글 관리', icon: 'mdi-image', index: 2 },
          { title: 'My NFT', icon: 'mdi-help-box', index:3 },
        ],
        right: null,
      }
    },
  }
</script>

