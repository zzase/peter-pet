<template>
  <div class="wrapper">
    <parallax class="section page" :style="headerStyle"></parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="md-layout">
          <div class="d-container">
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
              <div class="file_info_detail">
                File types supported: JPG,PNG,GIF,MP4,MP3,WAV, Max size: 100MB
              </div>
              <div class="file_info_detail">
                Safari 외 브라우저에서는 동영상 'Hevc' 코덱을 지원하지 않아<br />
                해당 코덱의 영상 파일 첨부 시 동영상 재생이 원활하지 않을 수
                있습니다.
              </div>
            </div>

            <!-- <div class="container-fluidcontainer-fluid">
              <div class="row flex-row flex-nowrap"> -->
            <div class="Imageupload">
              <ImageUpload></ImageUpload>
            </div>
            <!-- </div>
            </div> -->
            <br />
            <br />
            <br />
            <br />

            <div class="dropdown">
              <label class="drop"> 동물등록증을 선택해주세요* </label><br />
              <dropdown
                :options="arrayOfObjects"
                :selected="object"
                v-on:updateOption="methodToRunOnSelect"
              ></dropdown>

              <!-- <select v-model="this.value" class="custom-select" v-bind:id="input_id"
                            v-on:input="updateValue($event.target.value)" > <option v-for="(item, index) in
                            items" :value="index"{{ item }}</option> </select> -->
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
                placeholder="textarea"
                rows="8"
              ></b-form-textarea>
            </div>
            <!-- 혈통증명서 -->
            <label class="cert"> 혈통증명서 첨부* </label>
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
                <b>Create &nbsp;&nbsp; NFT</b>
              </md-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dropdown from "vue-dropdowns";
import ImageUpload from "./components/ImageUpload.vue";

export default {
  data() {
    return {
      arrayOfObjects: ["did1", "did2", "did3", "did4", "did5"],
      object: {},
    };
  },
  props: ["value", "items", "input_id"],

  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    },
  },
  components: {
    dropdown: dropdown,
    ImageUpload,
  },
};
</script>

<style>
.body {
  height: 100%;
  margin: 0;
}
.d-container {
  position: relative;
  left: 47%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  margin-top: 610px;
  background-color: white;
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
.Imageupload {
  width: 250px;
  margin: 20px auto;
}
.file_info {
  font-size: 1.8rem;
}
.create-box {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.dropdown {
  z-index: 1;
  position: absolute;
  margin-top: 50px;
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
  width: 60%;
  margin-left: 330px;
}
.health-r {
  float: left;
}
.description-dog {
  position: relative;
  width: 60%;
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
  margin-left: -2250px;
  margin-top: 70px;
}
.create-complete {
  position: relative;
  margin-right: 0;
  margin-top: 200px;
}
</style>