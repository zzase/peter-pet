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
            
            <b-button href="#/mypage/nftpage1" variant="rose">상세보기</b-button>
            </b-card>
        </div>
        

        <div class="myOwn-nft">
            <h3>소장 NFT</h3>
        </div>

        <div v-if="normalNfts.length === 0" class="nft-card2">
            <h2>아직 NFT를 만들지 않았어요!</h2>
            <b-button variant="default" href="/#/nft/form/personal">소장용 NFT 만들기</b-button>
        </div>

        <div v-else class="nft-card2" v-for="(nft,index) in normalNfts" :key="nft" :index="index">
            <b-card
            :title= nft.name
            :img-src= nft.img
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; max-height: 80rem;"
            class="mb-2">
            
            <b-button href="#/mypage/nftpage1" variant="rose">상세보기</b-button>
            </b-card>
        </div>

</v-app>

</template>

<script>
export default {
    data() {
        return {
            certiNfts : [],
            normalNfts : []   
        };
    },
    methods : {
        getCertiNfts : async function(address){
            await this.$http
            .get(`http://localhost:3000/api/nft/certi/list/owner/${address}`, {})
            .then((res) => {
                console.log(res.data.items.length);
                if(res.data.msg){
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

        getNormalNfts : async function(address){
            await this.$http
            .get(`http://localhost:3000/api/nft/normal/list/owner/${address}`, {})
            .then((res) => {
                console.log(res.data.items.length);
                if(res.data.msg){
                  for(var i=0; i<res.data.items.length; i++){
                      this.$http.get(res.data.items[i].tokenUri,{})
                      .then((res) => {
                          this.normalNfts.push({
                              name : res.data.name,
                              kind : res.data.kind,
                              desc : res.data.desc,
                              img : res.data.img
                          });
                      })
                  }
                  console.log(this.normalNfts);
                }
                else {
                    alert(res.data);
                }
                
            });
        }
        
    },
    created() {
        this.getCertiNfts(this.$store.state.user.address);
        this.getNormalNfts(this.$store.state.user.address);
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
