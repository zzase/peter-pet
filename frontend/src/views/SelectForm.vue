<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="flex-container">
            <div class="select-header">
              <br><br>
            <h1><b> Create Your NFT</b></h1><br><br>
            <h4><b> 강아지 분양은 선 동물등록! 후 분양!</b></h4><br><br>
            <h5><br>
            1. 2021년 2월 21일부로 동물보호법에 따라 동물판매는 동물등록을 거친 후에만<br> 가능하도록 되어 있습니다.
            피터펫에서 DID동물등록증을 발급 받은 후,<br> NFT를 통한 안심 분양 서비스를 활용해보세요.<br>
            <br>
            2. 반려견의 사진, 동영상 등을 NFT에 담아 개인 소장할 수 있습니다. <br>반려견과의 소중한 추억을 담아보세요!</h5>
          
            <div class="select-headerImg">
              <img src="@/assets/img/nft/picture-nft.png">
            </div>
            <div class="select-headerImg2">
              <img src="@/assets/img/nft/picture-nft2.png">
            </div>
              </div>

        <div class="message-n">
          <h4>생성할 NFT의 종류를 선택해주세요</h4>
        </div>
        <div class="sale-nft">
          <img src="@/assets/img/nft/sale-nft.png">
          <br><br><br>
          <span>Peter-Pet에서 발급받은 DID동물등록증을 통해 <br>분양견의 정보를 담는 NFT를 생성합니다</span>
        </div>

            <div class="to-saleform">
            <md-button
                          href="#/nft/form"
                          class="md-info md-lg"
                          style="font-size: 30px;"
                          ><b>분양 &nbsp;NFT&nbsp; 만들기</b></md-button
                        >
            </div>

        <div class="my-nft">
          <img src="@/assets/img/nft/my-nft.png">
          <br><br><br>
          <span> 내 반려견과 관련된 추억을 <br>담을 수 있는 개인 소장용 NFT입니다 </span>
        </div>

        <div class="to-myform">
            <md-button
                          href="#/nft/form/personal"
                          class="md-info md-lg"
                          style="font-size: 30px;"
                          ><b>MY&nbsp;NFT&nbsp; 만들기</b></md-button
                        >
            </div>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
};
</script>

<style>
.flex-container{ 
  display: inline-block;
  max-width: 1800px;
  height: 500px;
}
.section1{
  background-color: coral;
}
.select-header {
  margin-top: -70px;
  background-color: rgba(199, 231, 233, 0.452);
  position: absolute;
  left: 0px;
  max-width: 1779px;
  height: 500px;
  text-align: center;
  right: 0px;
}
.select-headerImg {
  position: absolute;
  top: -30px;
}
.select-headerImg2 {
  position: absolute;
  left: 1300px;
  bottom: 0px;

}
.message-n {
  position: absolute;
  top: 550px;
  left: 715px;
}
.sale-nft {
  position: relative;
  left: 520px;
  top: 250px;
  margin-bottom: 300px;
  margin-top: 300px;
  width: 350px;
  height: 400px;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 1em;
  text-align: center;
}
.to-saleform {
  position: relative;
  left: 610px;
  margin-top: -20px;
}
.my-nft {
  position: absolute;
  left: 930px;
  top: 320px;
  margin-bottom: 100px;
  margin-top: 300px;
  width: 350px;
  height: 400px;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 1em;
  text-align: center;
}
.to-myform {
  position: relative;
  left: 1020px;
  margin-top: -60px;
}

</style>
