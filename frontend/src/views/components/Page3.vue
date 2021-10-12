<template>
    <v-app id="page3">
        <div class="mySale-nft">
            <h3>분양 NFT</h3>
        </div>
        <div v-if="certiNfts.length === 0" class="nft-card1">
            <h2>아직 NFT를 만들지 않았어요!</h2>
            <b-button variant="default" href="/#/nft/form">분양용 NFT 만들기</b-button>
        </div>

        <div v-else class="nft-card1" v-for="(nft,index) in certiNfts" :key="nft" :index="index">
            <b-card
            :title= nft.name
            :img-src= nft.repreImg
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; max-height: 80rem;"
            class="mb-2">
            
            <b-button v-on:click="goDetailCertiNft(certiNftTokenIds[index])" variant="rose">상세보기</b-button>
            
            </b-card>
        </div>
        

        <div class="myOwn-nft">
            <h3>소장 NFT</h3>
        </div>

        <div v-if="personalNfts.length === 0" class="nft-card2">
            <h2>아직 NFT를 만들지 않았어요!</h2>
            <b-button variant="default" href="/#/nft/form/personal">소장용 NFT 만들기</b-button>
        </div>

        <div v-else class="nft-card2" v-for="(nft,index) in personalNfts" :key="nft" :index="index">
            <b-card
            :title= nft.name
            :img-src= nft.img
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; max-height: 80rem;"
            class="mb-2">
            
            <b-button v-on:click="goDetailPersonalNft(personalNftTokenIds[index])" variant="rose">상세보기</b-button>
            </b-card>
        </div>

</v-app>

</template>

<script>
import Vue from 'vue';
export default {
    data() {
        return {
            certiNfts : [],
            certiNftTokenIds : [],
            personalNfts : [],
            personalNftTokenIds : []   
        };
    },
    methods : {
        goDetailCertiNft : function(tokenId) {
            //this.$router.push({
              //  name: "certiNftDetail",
                //query: {
                //tokenId: tokenId,
                //},
            //}).catch(() => {});
            window.location.href = `#/nft/detail?tokenId=${tokenId}`
        },
         goDetailPersonalNft : function(tokenId) {
            window.location.href = `#/nft/detail/personal?tokenId=${tokenId}`
        },
        getCertiNfts : async function(address){
            await this.$http
            .get(`http://localhost:3000/api/nft/certi/list/owner/${address}`, {})
            .then((res) => {
                console.log(res.data.items.length);
                if(res.data.msg){
                  for(var i=0; i<res.data.items.length; i++){
                      this.certiNftTokenIds.push(res.data.items[i].tokenId);
                  }
                  for(var i=0; i<res.data.items.length; i++){
                      this.$http.get(res.data.items[i].tokenUri,{})
                      .then((res) => {
                          this.certiNfts.push({
                              name : res.data.name,
                              did : res.data.did,
                              kind : res.data.kind,
                              desc : res.data.desc,
                              history : res.data.history,
                              repreImg : res.data.repreImg,
                              addImgs : res.data.addImgs,
                              certi : res.data.certi,
                          });
                      })
                  }
                  console.log(this.certiNfts);
                }
                else {
                    alert(res.data);
                }
                
            });
        },

        getPersonalNfts : async function(address){
            await this.$http
            .get(`http://localhost:3000/api/nft/personal/list/owner/${address}`, {})
            .then((res) => {
                console.log(res.data.items.length);
                if(res.data.msg){
                    for(var i=0; i<res.data.items.length; i++){
                      this.personalNftTokenIds.push(res.data.items[i].tokenId);
                  }
                  for(var i=0; i<res.data.items.length; i++){
                      this.$http.get(res.data.items[i].tokenUri,{})
                      .then((res) => {
                          this.personalNfts.push({
                              name : res.data.name,
                              kind : res.data.kind,
                              desc : res.data.desc,
                              img : res.data.img
                          });
                      })
                  }
                  console.log(this.personalNfts);
                }
                else {
                    alert(res.data);
                }
                
            });
        }
        
    },
    created() {
        this.getCertiNfts(this.$store.state.user.address);
        this.getPersonalNfts(this.$store.state.user.address);
    }
}
</script>

<style>
.mySale-nft {
    position: absolute;
    width: 1000px;
    height: 600px;
}
.nft-card1 {
    margin-top: 100px;
    position: absolute;
    height: 300px;
    text-align: center;
}
.myOwn-nft {
    position: relative;
    width: 1000px;
    height: 800px;
    top: 500px;
    margin-bottom: 200px;

}
.nft-card2 {
    margin-top: 600px;
    position:absolute;
    height: 300px;
    text-align: center;
}

</style>
