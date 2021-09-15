<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <vue-metamask userMessage="msg" @onComplete="onComplete"></vue-metamask>
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
import VueMetamask from 'vue-metamask';
import Caver from 'caver-js';

const config = {
  rpcURL : 'https://api.baobab.klaytn.net:8651'
}

const cav = new Caver(config.rpcURL);

const peterPetDidContract = new cav.klay.Contract(DEPLOYED_ABI,DEPLOYED_ADDRESS);

export default {
  components: {
    VueMetamask,
  },
  data(){
    return {
      msg: "This is demo net work"
    }
  },
  methods: {
    onComplete(data){
      console.log('data:', data);
      //console.log(peterPetDidContract);
    }
  }
}
</script>

