<template>
  
<div class="did-cards">
      <div class="did-card1">
        <b-card
    title="DID 동물등록증"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      name {{ peterpet.name }}
    </b-card-text>

    <b-button href="#" variant="default">실종신고</b-button>
  </b-card>
</div>

      <div class="did-card2">
        <b-card
    title="DID 동물등록증"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      name {{ peterpet.name }}
    </b-card-text>

    <b-button href="#" variant="default">실종신고</b-button>
  </b-card>
</div>

<div class="did-card3">
        <b-card
    title="DID 동물등록증"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  > 
    <b-card-text>
      name {{ peterpet.name }}
    </b-card-text>
    <b-button href="#" variant="default">실종신고</b-button>
  </b-card>
</div>
</div>


</template>


<style>

.did-card1 {
  width: 50%;
  text-align: center;
  position: absolute;
  left: 20%;
}
.did-card2 {
  width: 50%;
  text-align: center;
  position: absolute;
  top: 70%;
  left: 41%;
}
.did-card3 {
  width: 50%;
  text-align: center;
  position: absolute;
  left: 62%;
}

</style>
