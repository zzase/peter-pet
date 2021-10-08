<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <div class="flex-container1">

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
    display: inline-block;
    width: 1550px;
    height: 600px;
    padding: 20px 20px;
    margin: 0;
    box-sizing: border-box;
    background-color: rgb(228, 210, 163);
}

.nft-img {
    position:relative;
    margin-left: 140px;
    max-width: 550px;
    border: 1px solid black;
    height: 600px;
    box-sizing:border-box;
}
.col-5 {
    position: absolute;
    height: 600px;
    background-color: rgba(240, 240, 240, 0.712);
    box-sizing: border-box;
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
    box-sizing: border-box;
}
.nft-contents p {
    font-size: 20px;
}
</style>
