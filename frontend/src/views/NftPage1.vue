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
                    </div>

                    <div class="nft-num">
                        <h4 style="color:white; margin-top: 40px; margin-left: 50px;">NFT NUMBER: </h4>
                    </div>
                    <div class="nft-contents">
                       <p> 이름 : </p>
                       <br>
                       <p> 동물등록증 : </p>
                       <br>
                       <p> 건강이력 : </p>
                       <br>
                       <br>
                       <p> 성격 및 특징 : </p>
                       <br>
                       <br>
                       <br>
                       <p> 혈통증명서 : </p>
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
            
            
            
        };
    },

    methods: {
        
    },
    components: {
    },


}

</script>

<style>
@media screen and (min-width:1177px) {
.flex-container1 {
    display: inline-block;
    width: 1550px;
    height: 660px;
    padding: 40px 40px;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid rgb(216, 216, 216);
}
.nft-img {
    position:relative;
    max-width: 700px;
    border: 1px solid black;
    height: 560px;
    box-sizing:border-box;
}
.col-5 {
    position: absolute;
    height: 600px;
    background-color: rgba(240, 240, 240, 0.712);
    box-sizing: border-box;
}
.nft-num {
    display: inline-block;
    position: absolute;
    width: 720px;
    height: 100px;
    right: 190px;
    top: 210px;
    margin-bottom: 50px;
    box-sizing:border-box;
    background-color: rgba(12, 161, 161, 0.596);
}
.nft-contents {
    position: absolute;
    margin-left: 775px;
    bottom: 160px;
}
.nft-contents p {
    font-size: 19px;
}
}
</style>
