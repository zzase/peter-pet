<template>
<div class="container">
    <v-app id="page3">
        <div class="mySale-nft">
            <br>
            <h4>분양 NFT</h4>
        </div>
        <div v-if="certiNfts.length === 0" class="nft-card1">
            <h2>아직 NFT를 만들지 않았어요!</h2>
            <b-button variant="default" href="/#/nft/form">분양용 NFT 만들기</b-button>
        </div>

        <div class="m-5" >
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
                v-if="certiNfts.length"
                >
                
                <slide v-for="(nft,index) in certiNfts" :key="index" :index="index">
                    <b-card
                    :title= nft.name
                    :img-src= nft.repreImg
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem; max-height: 80rem; text-align: center;"
                    class="mb-2">
                    <br>
                    <b-button v-on:click="goDetailCertiNft(certiNftTokenIds[index])" variant="outline-primary">상세보기</b-button>&nbsp;
                    <b-button  variant="outline-secondary">삭제</b-button>
                    
                    </b-card>
                </slide>
                </carousel-3d>
        </div>
        

        <div class="myOwn-nft">
            <br>
            <h4>소장 NFT</h4>
        </div>

        <div v-if="personalNfts.length === 0" class="nft-card2">
            <h2>아직 NFT를 만들지 않았어요!</h2>
            <b-button variant="default" href="/#/nft/form/personal">소장용 NFT 만들기</b-button>
        </div>
        <br><br><br><br>
        <div class="m-5" >
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
                v-if="certiNfts.length"
                >
                <slide v-for="(nft,index) in personalNfts" :key="nft" :index="index">
                    <b-card
                    :title= nft.name
                    :img-src= nft.img
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem; max-height: 80rem; text-align: center;"
                    class="mb-2">
                    
                    <b-button v-on:click="goDetailPersonalNft(personalNftTokenIds[index])" variant="outline-primary">상세보기</b-button>&nbsp;
                    <b-button  variant="outline-secondary">삭제</b-button>
                    </b-card>
                </slide>
            </carousel-3d>
        </div>

</v-app>
</div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Card from './Card.vue';
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
    components: {
        Carousel3d,
        Slide,
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
    display:flex;
    flex-direction: row;
}
.myOwn-nft {
    background-color:darkslategray;
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
.card-img-top img{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;

    
}

</style>
