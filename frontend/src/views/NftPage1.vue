<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <div class="flex-container1">
                   <!-- img  -->
                    <div class="nft-img">
                        <h1>img</h1>
                        this is nft img space
                    </div>

                    <div class="nft-num">
                        <h4 style="color:white; margin-top: 40px; margin-left: 50px;">NFT NUMBER: </h4>
                    </div>
                    <div class="nft-contents">
                       <hr width="670px;">
                       <p> &nbsp;&nbsp; 이름 : {{ metadata.name }}</p>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp;동물등록증 : {{ metadata.did }}</p>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp;건강이력 : {{ metadata.history }}</p>
                       <br>
                       <br>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp;성격 및 특징 : {{ metadata.desc }}</p>
                       <br>
                       <br>
                       <br>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp;혈통증명서 : {{ metadata.cert }}</p>
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


export default{

    data() {
        return {
        metadata: {
        name: null,
        did: null,
        history: null,
        desc: null,
        cert1: null,
        repreImg: null,
        addImgs : []
      },
            
        };
    },

    methods: {
        getDids: function(address) {
      if (address === undefined) {
        this.isLoading = ture;
      } else {
        this.isLoading = false;
        this.$http
          .get(`http://localhost:3000/api/pet/get/all/dids/${address}`, {})
          .then((res) => {
            console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
              this.options.push({
                text: res.data.dids[i],
                value: res.data.dids[i],
              });
            }
          });
      }
    },
    created() {
    const address = this.$store.state.user.address;

    this.getDids(address);
  },
        
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
    border: 1px solid black;
    height: 630px;
    box-sizing:border-box;
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
</style>
