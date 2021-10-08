<template>
    <v-app id="page3">
        <div class="mySale-nft">
            <h3>분양 NFT</h3>
        </div>

            <div class="nft-card1">
            <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#/mypage/nftpage1" variant="primary">Go somewhere</b-button>
            </b-card>
            </div>
        

        <div class="myOwn-nft">
            <h3>소장 NFT</h3>
        </div>

        <div class="nft-card2">
            <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
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
}

</style>
