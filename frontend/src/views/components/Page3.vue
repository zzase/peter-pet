<template>
    <v-app id="page3">
        <div class="mySale-nft">
            <h3>분양 NFT</h3>
        </div>

            <div class="nft-card1">
            <b-card
            title="Nft Name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            분양용 NFT입니다
            </b-card-text>
            <b-button href="#/mypage/nftpage1" variant="rose">NFT page</b-button>
            </b-card>
            </div>
        

        <div class="myOwn-nft">
            <h3>소장 NFT</h3>
        </div>

        <div class="nft-card2">
            <b-card
            title="Nft Name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            소장용 NFT입니다
            </b-card-text>

            <b-button href="#/mypage/nftpage2" variant="rose">NFT page</b-button>
            </b-card>
            </div>

</v-app>

</template>

<script>

</script>

<style>
.mySale-nft {
    position: absolute;
    width: 1000px;
    height: 600px;
}
.nft-card1 {
    margin-top: 100px;
    position: absolute;
    height: 300px;
    text-align: center;
}
.myOwn-nft {
    position: relative;
    width: 1000px;
    height: 800px;
    top: 500px;
    margin-bottom: 200px;

}
.nft-card2 {
    margin-top: 600px;
    position:absolute;
    height: 300px;
    text-align: center;
}

</style>
