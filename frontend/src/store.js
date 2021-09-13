import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    stat: {
        peterpet:null
    },
    getters:{
        peterpet:(state) => {return state.peterpet;}
    },
    mutations: {
        setPeterpet(state,peterpet) {state.peterpet = peterpet;}
    }
});