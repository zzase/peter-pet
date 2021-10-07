<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <div class="col-4">
                   <h1>img</h1>
               </div>
                <div class="col-5">
                    <div class="nft-num">
                        <h4 style="color:white; margin-top: 40px; margin-left: 50px;">NFT NUMBER: </h4>
                    </div>
                 <div class="nft-contents">
                     <p> 동물등록증 : </p>
                     <br>
                     <p> 건강이력 : </p>
                     <br>
                     <p> 성격 및 특징 : </p>
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
.col-4 {
    margin-left: 140px;
    border: 1px solid black;
    height: 600px;
}
.col-5 {
    height: 600px;
    background-color: rgba(233, 233, 233, 0.712);
}
.nft-num {
    position: absolute;
    width: 705px;
    height: 100px;
    right: 270px;
    top: 170px;
    margin-bottom: 50px;
    background-color: rgba(12, 161, 161, 0.596);
}
.nft-contents {
    margin-top: 150px;
    margin-left: 50px;
}
.nft-contents p {
    font-size: 20px;
}
</style>
