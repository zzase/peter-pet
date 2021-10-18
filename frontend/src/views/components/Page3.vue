<template>
    <v-app id="page3">
        <div class="mySale-nft">
            <br>
            <h3>분양 NFT</h3>
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
                
                <slide v-for="(nft,index) in certiNfts" :key="nft" :index="index">
                    <b-card
                    :title= nft.name
                    :img-src= nft.repreImg
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem; max-height: 80rem; text-align: center;"
                    class="mb-2">
                    <br>
                    <b-button v-on:click="goDetailCertiNft(certiNfts[index].tokenId)" variant="outline-primary">상세보기</b-button>&nbsp;
                    <b-button  variant="outline-secondary" @click="showModal(certiNfts[index].tokenId,'certi')">삭제</b-button>
                    
                    </b-card>
                </slide>
                </carousel-3d>
        </div>
        

        <div class="myOwn-nft">
            <br>
            <h3>소장 NFT</h3>
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
                    
                    <b-button v-on:click="goDetailPersonalNft(personalNfts[index].tokenId)" variant="outline-primary">상세보기</b-button>&nbsp;
                    <b-button  variant="outline-secondary" @click="showModal(personalNfts[index].tokenId,'personal')">삭제</b-button>
                    </b-card>

                    
                </slide>
            </carousel-3d>

                
        </div>

</v-app>

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
            personalNftTokenIds : [],

            isDelete : false,
            deleteTokenId : null,
            deleteTokenType : ''
        };
    },
    components: {
        Carousel3d,
        Slide,
    },
    methods : {
        showModal : function(tokenId,tokenType) {
            this.deleteTokenId = tokenId
            this.deleteTokenType = tokenType
            this.isDelete = false
            this.$bvModal.msgBoxConfirm('정말로 해당 NFT를 영구적으로 삭제하시겠습니까?', {
                title: '삭제 확인',
                size: 'md',
                buttonSize: 'sm',
                okVariant: 'danger',
                okTitle: '네',
                cancelTitle: '아니요',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
            })
          .then(value => {
            this.isDelete = value
            
            if(this.isDelete){
                //alert('isDelete : ' + this.isDelete+'tokenId : '+this.deleteTokenId);
                const tokenId = this.deleteTokenId;
                
                const address = this.$store.state.user.address;
                const type = this.deleteTokenType;
                console.log(type);
                this.$http.delete(`http://localhost:3000/api/nft/${type}/token/${tokenId}`,
                    {
                    data : {
                        address : address}
                    },
                    { "Content-Type": "application-json" })
                .then((res)=>{
                    if(res.data.submitted){
                        alert(`${tokenId} 소각 완료`);
                        window.location.href = '#/mypage'
                        //this.$router.go();
                    }
                    else {
                        alert(res.data.msg);
                    }
                })
            }
          })
          .catch(err => {
            // An error occurred
          })
        },
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
            .then((result) => {
                console.log(result.data.items.length);
                if(result.data.msg){
                  for(var i=0; i<result.data.items.length; i++){
                      this.$http.get(result.data.items[i].tokenUri,{})
                      .then((res) => {
                          this.certiNfts.push({
                              tokenId : '0x'+ res.data.did.slice(-10,23),
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
                    // for(var i=0; i<res.data.items.length; i++){
                    //   this.personalNftTokenIds.push(res.data.items[i].tokenId);
                    // }
                  for(var i=0; i<res.data.items.length; i++){
                      let tokenId = res.data.items[i].tokenId
                      this.$http.get(res.data.items[i].tokenUri,{})
                      .then((res) => {
                          this.personalNfts.push({
                              tokenId : tokenId,
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
    background-color: rgb(231, 229, 117);
    border-radius: 4em;
    position: absolute;
    width: 170px;
    height: 80px;
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
    background-color:rgb(76, 177, 218);
    position: absolute;
    width: 170px;
    height: 80px;
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
