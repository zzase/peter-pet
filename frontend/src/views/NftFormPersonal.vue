<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="md-layout">
          <div class="d-container1">
            <form @submit.prevent="addNft">
            <div class="header1">
              <br>
              <h1>MY NFT</h1>
            </div>

            <!-- img -->
            <br /><br /><br /><br /><br /><br />
            <div class="create-box">
              <h2>새 NFT만들기</h2>
              <div class="file_info">Image, Video, Audio or 3D Model</div>
              <br />
              <div class="file_info_detail">
                File types supported: JPG,PNG,GIF,MP4,MP3,WAV, Max size: 100MB
              </div>
              <div class="file_info_detail">
                Safari 외 브라우저에서는 동영상 'Hevc' 코덱을 지원하지 않아<br />
                해당 코덱의 영상 파일 첨부 시 동영상 재생이 원활하지 않을 수
                있습니다.
                <br /><br />
                *파일은 최대 3개까지 업로드할 수 있습니다
              </div>
              <br />
              <br />
              <br />

              <div class="row flex-row flex-nowrap">
                <div class="Imageupload">
                  <UploadImages
                    name="UploadImages"
                    ref="fileInput"
                    @changed="handleImages"
                    :max="3"
                    uploadMsg="upload product images"
                    clearAll="clear All"
                  ></UploadImages>
                </div>
              </div>
            </div>

            <!-- nft이름 -->
            <div class="nft-name1">
              <label class="nft-n1"> *NFT 이름 </label>
              <b-form-input
                v-model="metadata.name"
                placeholder="NFT내용을 입력해주세요"
              ></b-form-input>
            </div>
            <!-- NFT-description -->
            <div class="description-nft">
              <label class="description-n"> *NFT에 들어갈 내용란입니다 </label>
              <b-form-textarea
                id="textarea-rows"
                v-model="metadata.desc"
                placeholder="Description"
                rows="8"
              ></b-form-textarea>
            </div>

            <div class="create-complete1">
              <md-button
                id="create-complete1"
                class="md-success md-lg"
                type="submit"
                style="font-size: 27px"
                ><b>Create</b></md-button
              >
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImages from "vue-upload-drop-images";
import axios from "axios";
export default {
  data() {
    return{
      id : null,
      metadata : {
        name : null,
        img : null,
        desc : null
      }
    }
  },
  components: {
    UploadImages,
  },
  methods: {
    handleImages(files) {
      console.log(files);

      let fd = new FormData();
      fd.append("file", files[0]);
      axios
        .post("https://metadata-api.klaytnapi.com/v1/metadata/asset", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-chain-id": "1001",
            Authorization:
              "Basic S0FTS1ZMNThRUUtaWFE2NUVQUEJERjJOOnJFRW9MdUJvUjVHdXBsU08tSlpMZXZ1X2xYOC1OeGc3dHhESmVBZDM=",
          },
        })
        .then((res) => {
          this.metadata.img = res.data.uri;
        });
    },

    addNft: async function () {
      const address = this.$store.state.user.address;
      const id = this.id;

      const metadata = this.metadata;
      if(metadata.img === null){
        metadata.img = 'https://metadata-store.klaytnapi.com/6ffb8132-6f33-26a2-7a24-cc256fc0158e/3e5c6265-089f-c4c0-1fc1-cf3fe9d2629f.gif'
      }
      
      console.log({address : address, id: id, metadata : metadata});

      try{
        await this.$http.post("http://210.114.18.112:3000/api/nft/make/personalNFT",{
          address : address,
          id : id,
          metadata : metadata
        },
        {"Content-Type": "application-json"})
        .then((res)=>{
          if(res.data.id){
            window.location.href = `#/nft/personal/complete?tokenId=${res.data.id}`
          }
          else {
            alert(res.data.id);
          }
        })
      }catch(err){
        alert("이미 존재하는 NFT ID입니다");
      }
    },

    getNftListLength: async function(address){
      try{
        await this.$http.get(`http://210.114.18.112:3000/api/nft/personal/list/owner/${address}`,{})
        .then((res)=>{
          this.id = `${res.data.items.length+1}${this.$store.state.user.address.substring(2,10)}${res.data.items.length+1}`;
          console.log(this.id);
        })
      }catch(err){
        this.id = 0;
      }
    }

  },

  created() {
    this.getNftListLength(this.$store.state.user.address);
  }
};
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
  height: 100px;
  width: 1300px;
  margin-left: 150px;
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
  position: absolute;
  width: 60%;
  margin-left: 330px;
  margin-top: 230px;
}
.nft-p1 {
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