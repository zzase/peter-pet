<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <div class="d-container1">
                   <div class="header1">
           <h1> this is NFT page</h1>
                   </div>

          <!-- img -->
          <br><br><br><br><br><br>

          <!-- nft이름 -->
           <div class="nft-name1">
             <label class="nft-n1"> NFT 이름* </label>
            <b-form-input v-model="text" placeholder="NFT내용을 입력해주세요"></b-form-input>
          </div>
          <!-- nft price -->
          <div class="nft-price1">
              <label class="nft-p1"> 분양가* </label><br />
            <b-form-input v-model="text" placeholder="NFT Price"></b-form-input>
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
  display: inline-block;
  width: 1580px;
  max-height: 2600px;
  top: 50px;
  text-align: center;
  padding: 70px 0px;
  margin-bottom: 50px;
}
.header1 {
    position: relative;
    background-color: rgba(221, 221, 221, 0.377);
}

.nft-name1 {
  position: absolute;
  width: 60%;
  margin-left: 330px;
  margin-top: 130px;
}
.nft-n1 {
  float: left;
}
.nft-price1 {
  position:absolute;
  width: 60%;
   margin-left: 330px;
  margin-top: 230px;
} 
.nft-p1{
  float: left;
}
.description-nft {
  position: absolute;
  width: 60%;
  margin-left: 330px;
  margin-top: 350px;
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