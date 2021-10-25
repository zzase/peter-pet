```jsx
<template>
  <div class="container">
    <v-app id="page3">
      <div class="mySale-nft">
        <br />
        <h4>분양 NFT</h4>
      </div>
      <div v-if="certiNfts.length === 0" class="m-50">
        <h4>아직 NFT를 만들지 않았어요!</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b-button variant="default" href="/#/nft/form"
          >분양용 NFT 만들기</b-button
        >
      </div>

      <div class="m-5">
        <carousel-3d
          :autoplay="false"
          :autoplay-timeout="1000"
          :display="5"
          :controlsVisible="true"
          :border="0"
          :width="585"
          :height="470"
          :space="500"
          :clickable="true"
          v-if="certiNfts.length && certiLoading"
        >
          <slide v-for="(nft, index) in certiNfts" :index="index" :key="index">
            <b-card
              :title="nft.name"
              :img-src="nft.repreImg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; max-height: 80rem; text-align: center;"
              class="mb-2"
            >
              <br />
              <b-button
                v-on:click="goDetailCertiNft(certiNfts[index].tokenId)"
                variant="outline-primary"
                >상세보기</b-button
              >&nbsp;
              <b-button @click="showModal('certi',certiNfts[index].tokenId)" variant="outline-secondary">삭제</b-button>
            </b-card>
          </slide>
        </carousel-3d>
      </div>

      <div class="myOwn-nft">
        <br />
        <h4>소장 NFT</h4>
      </div>

      <div v-if="personalNfts.length === 0" class="m-51">
        <h4>아직 NFT를 만들지 않았어요!</h4>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b-button variant="default" href="/#/nft/form/personal"
          >소장용 NFT 만들기</b-button
        >
      </div>
      <br /><br /><br /><br />
      <div class="m-5">
        <carousel-3d
          :autoplay="false"
          :autoplay-timeout="1000"
          :display="5"
          :controlsVisible="true"
          :border="0"
          :width="585"
          :height="470"
          :space="500"
          :clickable="true"
          v-if="personalNfts.length && personalLoading"
        >
          <slide
            v-for="(nft, index) in personalNfts"
            :key="index"
            :index="index"
          >
            <b-card
              :title="nft.name"
              :img-src="nft.img"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; max-height: 80rem; text-align: center;"
              class="mb-2"
            > <br />
              <b-button
                v-on:click="goDetailPersonalNft(personalNfts[index].tokenId)"
                variant="outline-primary"
                >상세보기</b-button
              >&nbsp;
              <b-button @click="showModal('personal',personalNfts[index].tokenId)" variant="outline-secondary">삭제</b-button>
            </b-card>
          </slide>
        </carousel-3d>
      </div>
    </v-app>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Card from "./Card.vue";
import Vue from "vue";

export default {
  data() {
    return {
      certiNfts: [],
      certiNftTokenIds: [],
      certiLoading: false, //slide function applied after data loading
      personalNfts: [],
      personalNftTokenIds: [],
      personalLoading: false,

      deleteConfirm : false
    };
  },
  components: {
    Carousel3d,
    Slide,
  },
  methods: {
    goDetailCertiNft: function(tokenId) {
      
      window.location.href = `#/nft/detail?tokenId=${tokenId}`;
    },
    goDetailPersonalNft: function(tokenId) {
      window.location.href = `#/nft/detail/personal?tokenId=${tokenId}`;
    },
    getCertiNfts: async function(address) {
      const certiOfOwner = await this.$http.get(
        `http://210.114.18.112:3000/api/nft/certi/list/owner/${address}`,
        {}
      );

      if (certiOfOwner.data.msg) {
        for (var i = 0; i < certiOfOwner.data.items.length; i++) {
          //console.log("indexcount", i);
          const targetItems = certiOfOwner.data.items[i];

          //this.certiNftTokenIds.push(targetItems.tokenId);

          let tokenId = targetItems.tokenId;
          const certiInfos = await this.$http.get(targetItems.tokenUri, {});
          this.certiNfts.push({
            tokenId : tokenId,
            name: certiInfos.data.name,
            did: certiInfos.data.did,
            kind: certiInfos.data.kind,
            desc: certiInfos.data.desc,
            history: certiInfos.data.history,
            repreImg: certiInfos.data.repreImg,
            addImgs: certiInfos.data.addImgs,
            certi: certiInfos.data.certi,
          });
        }
        this.certiLoading = true;
      }
    },

    getPersonalNfts: async function(address) {
      const personalOfOwner = await this.$http.get(
        `http://210.114.18.112:3000/api/nft/personal/list/owner/${address}`,
        {}
      );

      if (personalOfOwner.data.msg) {
        for (var i = 0; i < personalOfOwner.data.items.length; i++) {
          //console.log("indexcount", i);
          const targetItems = personalOfOwner.data.items[i];

          //this.personalNftTokenIds.push(targetItems.tokenId);
          let tokenId = targetItems.tokenId;
          const personalInfos = await this.$http.get(targetItems.tokenUri, {});
          this.personalNfts.push({
            tokenId : tokenId,
            name: personalInfos.data.name,
            kind: personalInfos.data.kind,
            desc: personalInfos.data.desc,
            img: personalInfos.data.img,
          });
        }
        this.personalLoading = true;
      }

    },

    showModal(type, tokenId) {
        this.deleteConfirm = false
        this.$bvModal.msgBoxConfirm('정말로 해당 NFT를 삭제하시겠습니까?', {
          title: 'NFT 소각',
          size: 'md',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.deleteConfirm = value
            console.log('this.deleteConfirm : ' + this.deleteConfirm)
            if(this.deleteConfirm){
              //console.log("check");
              this.$http.delete(`http://210.114.18.112:3000/api/nft/${type}/token/${tokenId}`,
              {
                data: {
                  address : this.$store.state.user.address
                }
              },{"Content-Type": "application-json"})
              .then((res) => {
                if(res.data.submitted){
                  alert(`${tokenId} 소각 완료`);
                  this.$router.push({name:'Page 4'});
                }
                else{
                  alert(res.data.msg);
                }
              })
            }
            else{
              this.deleteConfirm = ''
            }
          })
          .catch(err => {
            // An error occurred
          })
      }
  },
  created() {
    this.getCertiNfts(this.$store.state.user.address);
    this.getPersonalNfts(this.$store.state.user.address);
  },
};
</script>

<style>
.mySale-nft {
  background-color: darkslategray;
  border-radius: 4em;
  position: absolute;
  width: 170px;
  height: 70px;
  text-align: center;
  left: 30px;
  margin-top: 5px;
  color: white;
}
.nft-card1 {
  margin-top: 100px;
  position: absolute;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: row;
}
.myOwn-nft {
  background-color: darkslategray;
  position: absolute;
  width: 170px;
  height: 70px;
  top: 1000px;
  margin-top: -300px;
  margin-bottom: 200px;
  text-align: center;
  left: 30px;
  color: white;
  border-radius: 4em;
}
.card-img-top {
  position: relative;
  width: 200px;
  height: 400px;
  overflow: hidden;
}
.card-img-top img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.m-50 {
  margin-top: 250px;
  margin-left: 420px;
}
.m-51 {
  margin-top: 500px;
  margin-left: 420px;
}
</style>
```