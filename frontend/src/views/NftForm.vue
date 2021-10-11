<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"></parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="md-layout">
          <div class="d-container">
             <form @submit.prevent="addNft">
            <div class="header">
              <h1 style="color: navygray; margin-top: 25px">분양 NFT</h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
                  <ImageUpload></ImageUpload>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br /><br />
            <br />
            <br />
            <div class="nft-name">
              <label class="nft-n"> NFT 이름* </label><br />
              <b-form-input
                v-model="metadata.name"
                placeholder="NFT Name"
              ></b-form-input>
            </div>

            <br />
          <label class="choose-d"> 동물등록증을 선택해주세요* </label><br />
            <div class="choose-did">
              <b-form-select v-model="metadata.did" :options="options">
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </div>
            <div class="mt-3">
              Selected: <strong>{{ metadata.did }}</strong>
            </div>
            <br />
            <br />
            <br />
            <br />
            <!-- 건강 및 질병기록 -->
            <div class="health-record">
              <label class="health-r">
                분양견의 건강 이력에 대해 기입해주세요*
              </label>
              <b-form-textarea
                v-model="metadata.history"
                id="textarea-rows"
                placeholder="textarea"
                rows="8"
              ></b-form-textarea>
            </div>
            <!-- 강아지 성격 및 정보 -->
            <div class="description-dog">
              <label class="description-d">
                분양견의 성격과 특징에 대해 기입해주세요*
              </label>
              <b-form-textarea
                id="textarea-rows"
                v-model="metadata.desc"
                placeholder="textarea"
                rows="8"
              ></b-form-textarea>
            </div>
            <!-- 혈통증명서 -->

           <label class="cert">
                혈통증명서 첨부
              </label>
            <div class="certification">
              <b-form-file multiple="multiple">
                <template slot="file-name" slot-scope="{ names }">
                  <b-badge variant="dark">{{ names[0] }}</b-badge>
                  <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                    +
                    {{ names.length - 1 }}
                    More files
                  </b-badge>
                </template>
              </b-form-file>
            </div>

            <!-- create complete button -->
            <div class="create-complete">
              <md-button
                id="create-complete"
                class="md-success md-lg"
                type="submit"
                style="font-size: 27px"
              >
                <b>Create</b>
              </md-button>
              
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUpload from "./components/ImageUpload.vue";

export default {
  data() {
    return {
      inputData: {
        registryDID: null,
      },
      name: "select-did",
      input: "text",
      options: [],
      metadata: {
        name: null,
        did: null,
        history: null,
        desc: null,
        cert1: null,
        repreImg: null,
        addImgs : []
      },
      isLoading: false,
    };
  },
  props: ["value", "items", "input_id"],

  methods: {
    getDids: function(address) {
      if (address === undefined) {
        this.isLoading = ture;
      } else {
        this.isLoading = false;
        this.$http
          .get(`http://localhost:3000/api/pet/get/all/dids/${address}`, {})
          .then((res) => {
            console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
              this.options.push({
                text: res.data.dids[i],
                value: res.data.dids[i],
              });
            }
          });
      }
    },
    addNft: function() {
        alert(this.metadata.did);
    },
  },
  components: {
    ImageUpload,
  },
  created() {
    const address = this.$store.state.user.address;

    this.getDids(address);
  },
};
</script>

<style>
@media screen and (min-width:1280px) {
.custom-file-input{
  margin-left: -480px
}

.custom-select {
  width: 100%;
}
.choose-d {
  margin-left: -730px;
  }
.choose-did {
  width: 60%;
  margin-left: 330px;
  border: 0.8px solid rgba(182, 182, 182, 0.637);
  border-radius: 0.3em;
}
.body {
  height: 100%;
  margin: 0;
}
.d-container {
  position: relative;
  display: inline-block;
  width: 1580px;
  max-height: 2600px;
  top: 50px;
  text-align: center;
  padding: 70px 0px;
  margin-bottom: 50px;
}
.header {
  position: relative;
  margin-top: 50px;
  height: 100px;
  width: 1300px;
  text-align: center;
  display: inline-block;
  background-color: rgba(221, 221, 221, 0.377);
}
.con-img-upload {
  flex-direction: row;
  display: flex;
  margin:0px auto;
  display: inline-flexbox;
}
.Imageupload {
  width: 250px;
  margin: 20px auto;
  flex-direction: row;
  display: flex;
}
.file_info {
  font-size: 1.8rem;
}
.create-box {
  margin-top: 50px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.nft-name {
  position: absolute;
  top: 900px;
  width: 940px;
  margin-top: 110px;
  margin-left: 330px;
}
.nft-p {
  float: left;
}
.nft-price {
 position: absolute;
 width: 940px;
 margin-top: -60px;
 margin-left: 330px;

}
.nft-n {
  float: left;

}
.dropdown {
  z-index: 1;
  position: absolute;
  margin-top: 70px;
  margin-left: 100px;
  width: 1000px;
}
.drop {
  margin-left: -320px;
}
.btn-group {
  width: 500px;
}
.dropdown-toggle {
  width: 500px;
}
.health-record {
  position: absolute;
  width: 940px;
  margin-left: 330px;
}
.health-r {
  float: left;
}
.description-dog {
  position: relative;
  width: 940px;
  margin-left: 330px;
  margin-top: 300px;
}
.description-d {
  color: black;
  float: left;
}
.certification {
  border: 0.5px solid rgb(216, 216, 216);
  width: 60%;
  margin-top: 100px;
  margin-left: 330px;
  float: left;
}
.cert {
  margin-left: -2080px;
  margin-top: 70px;
}
.create-complete {
  position: relative;
  margin-right: 0;
  margin-top: 200px;
}
}
</style>