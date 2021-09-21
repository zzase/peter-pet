import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user : {
            id : null,
            password : null,
            address : null
        },
        isLogin : false,
        isLoginError: false
    },
    getters:{
        peterpet:(state) => {return state.peterpet;},
        user:(state) => {return state.user;}
    },
    mutations: { 
        //로그인이 성공했을 때
        loginSuccess(state){
            state.isLogin = true
            state.isLoginError = false
        },
        //로그인이 실패했을 때
        loginError(state){
            state.isLoginError = true
            state.isLogin = false
        },
        //setPeterpet(state,peterpet) {state.peterpet = peterpet;}
        setUser(state,user) {
            state.user.id = user.id;
            state.user.password = user.password;
            state.user.address = user.address;
        }
    },

    actions: {
        // 로그인 시도
        login({state,commit}, signInObj) {
            console.log(signInObj);
        }
    }
});