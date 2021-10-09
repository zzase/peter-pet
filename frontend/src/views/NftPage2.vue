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
                       <p> &nbsp;&nbsp; 이름 : </p>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp;동물등록증 : </p>
                       <hr width="670px;">
                       <p> &nbsp;&nbsp;내용 : </p>
                       <br><br>
                       <br><br>
                       <br><br>
                       <br><br>
                       <br>
                       <hr width="670px;">
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
