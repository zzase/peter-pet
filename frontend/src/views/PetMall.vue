<template>
  <div class="wrapper">
    <parallax class="section page"> </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="md-layout">
          <h2 style="margin-left: 700px"><b>Peter-Pet 분양</b></h2>
          <hr width="1570px;" />
          <br /><br /><br />
          <div class="market-tab">
            <b-tabs content-class="mt-3" fill>
              <b-tab title="전체보기" active>
                <section class="serv_list">
                  <div class="item-container">
                    <!-- <div class="i-title">
                     <h1> Item List </h1>
                     <ul>
                       <li><a href="">외장칩 목걸이</a></li>
                       <li><a href="">장난감</a></li>
                       <li><a href="">간식</a></li>
                       <li><a href="">패션</a></li>
                     </ul>
                   </div> -->
                    <div class="item_list">
                      <div
                        class="i-card"
                        v-for="(nft, index) in certiNfts"
                        :index="index"
                        :key="index"
                      >
                        <div class="i-img">
                          <img v-bind:src="nft.repreImg" />
                        </div>
                        <div class="i-text">
                          <h5>{{ nft.name }}</h5>
                          <p>{{ nft.tokenId }}</p>
                          <button @click="showModal(nft.tokenId,nft.name)">
                            <i class="fas fa-check"></i> Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <p>I'm the first tab</p></b-tab
              >

              <b-tab title="견종별 모아보기"><p>I'm the second tab</p></b-tab>
              <b-tab title="유기견 입양"
                ><p>I'm the tab with the very, very long title</p></b-tab
              >
            </b-tabs>
          </div>
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

      buyConfirm : false
    };
  },
  methods: {
    buyBtn: function () {
      if (this.$store.state.isLogin) {
        window.location.href = "/#/";
      } else {
        alert("상단 메뉴의 'login'버튼을 이용해 로그인을 먼저 진행해주세요!");
      }
    },
    getCertiNfts: async function () {
      const certiOfOwner = await this.$http.get(
        `http://210.114.18.112:3000/api/nft/certi/list/all`,
        {}
      );
      if (certiOfOwner.data.msg) {
        for (var i = 0; i < certiOfOwner.data.items.length; i++) {
          const targetItems = certiOfOwner.data.items[i];
          let tokenId = targetItems.tokenId;

          const certiInfos = await this.$http.get(targetItems.tokenUri, {});
          this.certiNfts.push({
            tokenId: tokenId,
            name: certiInfos.data.name,
            repreImg: certiInfos.data.repreImg,
          });
        }
      }
    },
    showModal(tokenId, tokenName) {
        this.buyConfirm = false
        this.$bvModal.msgBoxConfirm(`[ ${tokenName} ]를 구매하여 분양을 진행합니다`, {
          title: 'NFT 구매 및 분양',
          size: 'lg',
          buttonSize: 'md',
          okVariant: 'success',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.buyConfirm = value
            if(this.buyConfirm){
              console.log('confirm : ' + this.buyConfirm);
              const did = 'did:peterpet:' + tokenId.substring(2);
              const to = this.$store.state.user.address;
              this.$http.post(`http://210.114.18.112:3000/api/pet/buy/did/${did}/token/${tokenId}`,
              {
                to : to
              },{"Content-Type": "application-json"})
              .then((res) => {
                if(res.data.checkUpdate){
                  const result = res.data;
                  this.$router.push({
                    name : "buyComplete",
                    query : {result : result}
                  })
                }
                else{
                  alert(res.data.msg);
                }
              })
            }
            else{
              this.buyConfirm = false
            }
          })
          .catch(err => {
            // An error occurred
          })
      }
  },
  created() {
    this.getCertiNfts(this.$store.state.user.address);
  },
};
</script>

<style>
.market-tab {
  width: 1570px;
}
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
  display: inline;
  margin-right: 30px;
}
.serv_list .item-container .i-tittle ul li a {
  text-decoration: none;
  color: #444;
}
.serv_list .item-container .item_list {
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
.serv_list .item-container .item_list .i-card .i-text p {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  opacity: 0.8;
}
.serv_list .item-container .item_list .i-card .i-text button {
  background: rgb(0, 0, 0);
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 10px;
  transition: 0.5s ease;
}
.serv_list .item-container .item_list .i-card .i-text button:hover {
  transition: 0.5s ease;
  border: 2px solid black;
  background: transparent;
  color: black;
}
</style>