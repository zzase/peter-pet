<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <div class="flex-container1">
                   <!-- img  -->
                    <div class="nft-img">
                      <div class="main-img">
                        <!-- <h3>대표 이미지</h3> -->
                        <img id="main" :src="nft.repreImg">
                      </div>
                      <br><br>
                      <hr width="700px;">
                        <!-- <h3>추가 이미지</h3> -->
                        <div class="sub-img">
                        <div v-for="(img,index) in nft.addImgs" :key="img" :index="index" >
                          <img :src="img" width="100" height="100">
                        </div>
                        </div>
                    </div>

                    <div class="nft-num">
                        <h4 style="color:white; margin-top: 40px; margin-left: 50px;">{{nft.name}} </h4>
                    </div>
                    <div class="nft-contents">
                       <hr width="670px;">
                       <p> &nbsp;&nbsp; TOKEN ID : {{ $route.query.tokenId }}</p>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp; 등록번호 : {{ nft.did }}</p>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp; 건강이력 : {{ nft.history }}</p>
                       <br>
                       <br>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp; 성격 및 특징 : {{ nft.desc }}</p>
                       <br>
                       <br>
                       <br>
                       <hr width="670px;">
                       <div v-if="nft.certi ==='X'">
                         <p> &nbsp;&nbsp; 혈통증명서 없음</p>  
                       </div>
                       <div v-else>
                         <b-button pill variant="outline-secondary" @click="showCerti"> 혈통증명서 보기</b-button>
                       </div>
                       
                       <Modal v-if="isCerti" @close="isCerti = false">
                        <h3 slot="header"> 혈통증명서 </h3>
                        <div slot="body">
                          <img :src="nft.certi">
                        </div>
                        <div slot="footer">
                          <b-button pill variant="outline-secondary" @click="closeCerti">닫기</b-button>
                        </div>
                      </Modal>
                       <br>
                       <br>
                    </div>
               </div>
        </div>
       </div>
     </div>
</div>
</template>
            


<script>
import Modal from '../components/Modal.vue';

export default{
  components: {Modal},
    data() {
      return {
        nft: null,
        isCerti : false
      }
    },

    methods: {
      showCerti : function() {
        this.isCerti = true;
      },
      closeCerti : function(){
        this.isCerti = false;
      },
      getNft : function(tokenId)  {
        this.$http.get(`http://210.114.18.112:3000/api/nft/certi/info/token/${tokenId}`,{})
        .then((res)=> {
          if(res.data.msg){
            this.$http.get(res.data.tokenUri)
            .then((res)=> {
              this.nft = res.data;
            })
          }
        })        
      }
  },
  created() {
    const tokenId = this.$route.query.tokenId;

    this.getNft(tokenId);
  },
}

</script>

<style>
.flex-container1 {
    position: relative;
    display: inline-block;
    width: 1550px;
    height: 750px;
    padding: 40px 40px;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid rgb(236, 236, 236);
}
.nft-img {
    position:relative;
    max-width: 700px;
    border: 1px solid rgba(235, 235, 235, 0.719);
    height: 630px;
    box-sizing:border-box;
    border-radius: 2em;
}
.nft-num {
    display: inline-block;
    position: relative;
    width: 720px;
    height: 100px;
    left: 755px;
    top: -620px;
    margin-bottom: 50px;
    box-sizing:border-box;
    background-color: rgba(12, 161, 161, 0.596);
}
.nft-contents {
    position: relative;
    margin: auto;
    bottom: 620px;
    margin-left: 780px;
}
.nft-contents hr {
    color: rgb(172, 172, 172);
}
.nft-contents p {
    font-size: 18px;
}
.main-img{
  position: relative;
  left: 150px;
  top: 30px;
  width: 400px;
  height: 400px;
  overflow: hidden;
}
.main-img img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sub-img {
  position: relative;
  top: 15px;
  left: 100px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.main-img img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>
