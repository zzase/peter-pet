<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 3"
                  :key="n"
                  :to="{ path: '/page' + n }"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-fade-transition mode="out-in">
                <router-view></router-view>
              </v-fade-transition>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//1. vue, 및 vue-router 를 import 후 Vue.use(VueRouter) 합니다.
import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "./components/Page1";

Vue.use(VueRouter);

//2.Route 에서 사용 할 Component 정의
let component2 = {
  template: `<div class="title">Page 2</div>`,
};

//3. Route 를 정의 합니다. 
const routes = [
  {
    path: "/page1",
    name: "Page 1",
    component: Page1,
  },
  {
    path: "/page2",
    name: "Page 2",
    component: component2,
  },
  { path: "*", redirect: "/page1" },
];

//4. 정의한 routes로 Router instance를 생성 합니다.
let router = new VueRouter({
  routes
  });

//5. 생성한 Router를 생성한 app에 주입 합니다.
export default {
  name: "App",
  router,
  components: {},
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
};
</script>