<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"> </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="md-layout">
          <div class="d-container1">
            <div class="header1">
              <h1>this is NFT page</h1>
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
                v-model="text"
                placeholder="NFT내용을 입력해주세요"
              ></b-form-input>
            </div>
            <!-- nft price -->
            <div class="nft-price1">
              <label class="nft-p1"> *분양가 </label><br />
              <b-form-input
                v-model="text"
                placeholder="NFT Price"
              ></b-form-input>
            </div>
            <!-- NFT-description -->
            <div class="description-nft">
              <label class="description-n"> *NFT에 들어갈 내용란입니다 </label>
              <b-form-textarea
                id="textarea-rows"
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
          console.log(res.data.uri);
        });
    },
  },
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