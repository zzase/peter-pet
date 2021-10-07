<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <div class="d-container1">
                   <div class="header1">
           <h1> this is NFT page</h1>
                   </div>
          <!-- nft이름 -->
           <div class="nft-name">
             <label class="nft-n"> NFT 이름* </label>
            <b-form-input v-model="text" placeholder="NFT내용을 입력해주세요"></b-form-input>
          </div>
          <!-- NFT-description -->
           <div class="description-nft">
                <label class="description-n"> 분양견의 성격과 특징에 대해 기입해주세요* </label>
            <b-form-textarea
                id="textarea-rows"
                placeholder="Tall textarea"
                rows="8"
            ></b-form-textarea>
            </div>
            <!-- img -->

            <div class="create-complete1">
            <md-button
                          id="create-complete1"
                          class="md-success md-lg"
                          type="submit"
                          style="font-size: 27px;"
                          ><b>Create &nbsp;&nbsp; NFT</b></md-button
                        >
            </div>

           </div>
           </div>
       </div>
    </div>
  </div>
</template>

<script>

</script>

<style> 
.d-container1 {
    position: relative;
    left: 47%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    margin-top: 50px;
    height: 1000px;
}
.header1 {
    position: relative;
    margin-top: 350px;
}

.nft-name {
  position: absolute;
  width: 60%;
  margin-left: 330px;
  margin-top: 100px;
}
.nft-n {
  float: left;
}
.description-nft {
  position: absolute;
  width: 60%;
  margin-left: 330px;
  margin-top: 500px;
}
.description-n {
  float: left;
}
.create-complete1 {
   position: relative;
   margin-right: 0px;
   margin-top: 800px;
}
</style>