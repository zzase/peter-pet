<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <p style="margin-left: 450px; font-size: 60px;"> Welcome to Peter-Pet Mall </p>
               <div class="ad">
               <img style= "width: 1500px;" src="@/assets/img/Mall/ad.png">
               </div>

               <section class="serv_list">
                 <div class="item-container">
                   <div class="i-title">
                     <h1> Item List </h1>
                     <ul>
                       <li><a href="">A</a></li>
                       <li><a href="">B</a></li>
                       <li><a href="">C</a></li>
                       <li><a href="">D</a></li>
                     </ul>
                   </div>
                   <div class="item_list">
                     <div class="i-card">
                       <div class="i-img">
                         <img src="@/assets/img/Mall/necklace1.png">
                       </div>
                       <div class="i-text">
                         <h2>Necklace1</h2>
                         <p>welcome to peter-pet mall. this is necklace1 </p>
                         <button><i class="fas fa-check"></i> Buy </button>
                       </div>
                     </div>
                     <div class="i-card">
                       <div class="i-img">
                         <img src="@/assets/img/Mall/necklace1.png">
                       </div>
                       <div class="i-text">
                         <h2>Necklace1</h2>
                         <p>welcome to peter-pet mall. this is necklace1 </p>
                         <button><i class="fas fa-check"></i> Buy </button>
                       </div>
                     </div>
                     <div class="i-card">
                       <div class="i-img">
                         <img src="@/assets/img/Mall/necklace1.png">
                       </div>
                       <div class="i-text">
                         <h2>Necklace1</h2>
                         <p>welcome to peter-pet mall. this is necklace1 </p>
                         <button><i class="fas fa-check"></i> Buy </button>
                       </div>
                     </div>
                     <div class="i-card">
                       <div class="i-img">
                         <img src="@/assets/img/Mall/necklace1.png">
                       </div>
                       <div class="i-text">
                         <h2>Necklace1</h2>
                         <p>welcome to peter-pet mall. this is necklace1 </p>
                         <button><i class="fas fa-check"></i> Buy </button>
                       </div>
                     </div>
                     <div class="i-card">
                       <div class="i-img">
                         <img src="@/assets/img/Mall/necklace1.png">
                       </div>
                       <div class="i-text">
                         <h2>Necklace1</h2>
                         <p>welcome to peter-pet mall. this is necklace1 </p>
                         <button><i class="fas fa-check"></i> Buy </button>
                       </div>
                     </div>
                     <div class="i-card">
                       <div class="i-img">
                         <img src="@/assets/img/Mall/necklace1.png">
                       </div>
                       <div class="i-text">
                         <h2>Necklace1</h2>
                         <p>welcome to peter-pet mall. this is necklace1 </p>
                         <button><i class="fas fa-check"></i> Buy </button>
                       </div>
                     </div>
                     <div class="i-card">
                       <div class="i-img">
                         <img src="@/assets/img/Mall/necklace1.png">
                       </div>
                       <div class="i-text">
                         <h2>Necklace1</h2>
                         <p>welcome to peter-pet mall. this is necklace1 </p>
                         <button><i class="fas fa-check"></i> Buy </button>
                       </div>
                     </div>
                     <div class="i-card">
                       <div class="i-img">
                         <img src="@/assets/img/Mall/necklace1.png">
                       </div>
                       <div class="i-text">
                         <h2>Necklace1</h2>
                         <p>welcome to peter-pet mall. this is necklace1 </p>
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
    font-size: 14px;
    opacity: .8;
  }
  .serv_list .item-container .item_list .i-card .i-text button {
    background: black;
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