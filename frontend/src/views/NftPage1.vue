<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <div clss="nftpage-container">
               <div class="col-4">
                   <h1>img</h1>
               </div>
                <div class="col-5">
                    <div class="nft-num">
                        <h4 style="color:white; margin-top: 40px; margin-left: 50px;">NFT NUMBER: </h4>
                    </div>
                 <div class="nft-contents">
                     <table>
                         <tr>
                            <td> 동물등록증 : </td>
                            <td> 건강이력 : </td>
                            <td> 성격 및 특징 : </td>
                            <td> 혈통증명서 : </td>
                         </tr>
                         <tr>
                             <td> did:1234 </td>
                             <td> healthy </td>
                             <td> happy </td>
                             <td> certification </td>
                         </tr>
                     </table>
                 </div>
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
.nftpage-container {
    z-index: 1;
    position: relative;
    left: 200px;
    top: 20px;
    width: 1300px;
    height: 1700px;
    background-color:burlywood;
}
.col-4 {
    position:absolute;
    margin-left: 140px;
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
