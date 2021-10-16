<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
             <hr width="1570px;">
             <br><br><br>
               <p style="margin-left: 450px; font-size: 60px; color: navy;"><b> Tinkerbell for Your Dog </b> </p>
               <img style="width: 250px; height: 200px;" src="@/assets/img/Mall/tinkerbell-necklace.png">
               <div class="ad">
               <img style= "width: 1500px;" src="@/assets/img/Mall/ad.png">
               </div>

               <section class="serv_list">
                 <div class="item-container">
                   <hr width="1150px;">
                   <div class="i-title">
                     <h1> Item List </h1>
                     <ul>
                       <li><a href="">외장칩 목걸이</a></li>
                       <li><a href="">장난감</a></li>
                       <li><a href="">간식</a></li>
                       <li><a href="">패션</a></li>
                     </ul>
                   </div>
                   <div class="item_list">
         
                     <div class="i-card" v-for="(nft, index) in certiNfts" :index="index" :key="index">
                       <div class="i-img">
                         <img v-bind:src="nft.repreImgs">
                       </div>
                       <div class="i-text">
                         <h5>{{ nft.name }}</h5>
                         <p>welcome to peter-pet mall. </p>
                         <button><i class="fas fa-check"></i> Buy </button>
                       </div>
                     </div>
             
                     
                    
            
                   </div>
               </div>
               </section>
            </div>
         </div>
       </div>
     </div>
               
</template>

<script> 
export default {
  data() {
    return {
      certiNfts: [],
      certiNftTokenIds: []
    }
  },
  methods: {
    getCertiNfts: async function(address) {
      const certiOfOwner = await this.$http.get(
        `http://localhost:3000/api/nft/certi/list/owner/${address}`,
        {}
      );
       if (certiOfOwner.data.msg) {
        for (var i = 0; i < certiOfOwner.data.items.length; i++) {
          console.log("indexcount", i);
          const targetItems = certiOfOwner.data.items[i];

          this.certiNftTokenIds.push(targetItems.tokenId);

          const certiInfos = await this.$http.get(targetItems.tokenUri, {});
          this.certiNfts.push({
            name: certiInfos.data.name,
            repreImg: certiInfos.data.repreImg
           });
         }
       }
    },
    created() {
      this.getCertiNfts(this.$store.state.user.address);
    }
  }
}
</script>

<style>
  .ad {
      margin-top: 60px;
      margin-left: 40px;
  }
  .serv_list {
    margin-top: -200px;
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .serv_list .item-container {
    max-width: 1100px;
    margin: 230px;
  }
  .serv_list .item-container .i-tittle ul {
    padding-left: 0;
    list-style: none;
  }
  .serv_list .item-container .i-tittle ul li {
    display:inline;
    margin-right: 30px;
  }
  .serv_list .item-container .i-tittle ul li a{
    text-decoration: none;
    color: #444;
  }
  .serv_list .item-container .item_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .serv_list .item-container .item_list .i-card {
    text-align: center;
    border: 1px solid #eee;
    border-radius: 5px;
    height: 350px;
    width: 250px;
    padding: 5px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
  .serv_list .item-container .item_list .i-card img {
    width: 250px;
    height: 200px;
  }
  .serv_list .item-container .item_list .i-card .i-text p{
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    opacity: .8;
  }
  .serv_list .item-container .item_list .i-card .i-text button {
    background: rgb(0, 0, 0);
    color:white;
    border: 2px solid white;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 10px;
    transition: .5s ease;
  }
 .serv_list .item-container .item_list .i-card .i-text button:hover {
   transition: .5s ease;
   border: 2px solid black;
   background: transparent;
   color: black;
 }
</style>