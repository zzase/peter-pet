<template>
  <div class="wrapper">
    <parallax class="section page" ></parallax>

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
                  *파일은 최대 3개까지 업로드할 수 있으며 첫번째 파일이 대표 이미지가 됩니다. <br/>
                  
                </div>
                <br/>
                <br />
                <br />
                <div class="row flex-row flex-nowrap">
                  <div class="UploadImages">
                    <UploadImages
                      name="UploadImages"
                      ref="fileInput"
                      @changed="handleImages"
                      :max="3"
                      uploadMsg="웬디님이 분양할 피터펫 이미지들을 업로드 하세요!"
                      clearAll="clear All"
                    ></UploadImages>
                  </div>
                </div>
                *기존에 등록된 이미지를 대표 이미지로 하고 싶으신 경우 체크해주세요 <input type="checkbox" id="checkbox" v-model="checked">
              </div>
              
              <br />
              <br />
              <br />
              <br />

               <label class="choose-d"> 동물등록증을 선택해주세요* </label><br />
            <div class="choose-did">
              <b-form-select v-model="metadata.did" :options="options">
                <template #first>
                  <b-form-select-option :value="null" disabled :v-onclick="setName(`${metadata.did}`)"
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>

            </div>
              <div class="nft-name">
                <label class="nft-n"> NFT 이름* </label><br />
                <b-form-input
                  v-model="metadata.name"
                  placeholder="NFT Name"
                  readonly
                ></b-form-input>
              </div>
            <br />
         

            <br/><br/>

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
            </div><br>
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
            </div><br>
            <!-- 혈통증명서 -->

              <label class="cert"> 혈통증명서 첨부 </label>
              <div class="certification">
                <!--<b-form-file multiple="multiple" @changed="addCerti">
                  <template slot="file-name" slot-scope="{ names }">
                    <b-badge variant="dark">{{ names[0] }}</b-badge>
                    <b-badge
                      v-if="names.length > 1"
                      variant="dark"
                      class="ml-1"
                    >
                      +
                      {{ names.length - 1 }}
                      More files
                    </b-badge>
                  </template>
                </b-form-file>-->
                <div class="UploadImages">
                    <UploadImages
                      name="UploadImages"
                      ref="fileInput"
                      @changed="addCerti"
                      :max="3"
                      uploadMsg="피터펫의 혈통증명서를 업로드 하세요!"
                      clearAll="clear All"
                    ></UploadImages>
                  </div>
              </div>

              <!-- create complete button -->
              <div class="create-completeb">
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
import UploadImages from "vue-upload-drop-images";

import axios from "axios";

export default {
  data() {
    return {
      inputData: {
        registryDID: null,
      },
      name: "select-did",
      input: "text",
      checked : false,
      options: [],
      metadata: {
        name: null,
        did: null,
        history: null,
        desc: null,
        certi: 'X',
        repreImg: null,
        addImgs: [],
      },
      isLoading: false,
    };
  },
  props: ["value", "items", "input_id"],

  methods: {
    getDids: function (address) {
      if (address === undefined) {
        this.isLoading = ture;
      } else {
        this.isLoading = false;
        this.$http
          .get(`http://210.114.18.112:3000/api/pet/dids/owner/${address}`, {})
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

    addNft: async function () {
      const address = this.$store.state.user.address;
      const id = this.metadata.did[0].slice(-10,23);

      this.getRepreImg(this.metadata.did);

      this.metadata.did = this.metadata.did[0];
      const metadata = this.metadata;
      
      console.log({address : address, id: id, metadata : metadata});

      try{
        await this.$http.post("http://210.114.18.112:3000/api/nft/make/certiNFT",{
          address : address,
          id : id,
          metadata : metadata
        },
        {"Content-Type": "application-json"})
        .then((res)=>{
          if(res.data.id){
            window.location.href = `#/nft/complete?tokenId=${res.data.id}`
          }
          else {
            alert(res.data.id);
          }
        })
      }catch(err){
        alert("해당 DID의 NFT가 이미 존재합니다.");
      }
      
    },

    getRepreImg : function(did) {
      if(this.checked){
        this.$http.get(`http://210.114.18.112:3000/api/pet/info/did/${did}`)
        .then((res)=>{
          this.metadata.repreImg = res.data.peterpet.imgLink;
        })
      }
      else {
        this.metadata.repreImg = this.metadata.addImgs[0];
      }
    },

    handleImages(files) {
      console.log(files);
      let index = 0;
      if(files[0]===undefined){
        console.log("clear all");
        index=0;
        this.metadata.addImgs.splice(0,this.metadata.addImgs.length);
      } 
      else{

        let fd = new FormData();
        
        if(this.metadata.addImgs.length>0) {
          index = this.metadata.addImgs.length
        }
        fd.append("file", files[index]);

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
          this.metadata.addImgs.push(res.data.uri);
          for(var i=0; i<this.metadata.addImgs.length; i++){
            console.log(this.metadata.addImgs[i]);
          }
        });
      }
    },

    addCerti(files) {
      console.log(files);

      let fd = new FormData();
      fd.append("file", files[0]);
      if(files[0]===undefined){
        console.log("clear all");
        this.metadata.certi = 'X';
      } 
      else{
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
          this.metadata.certi = res.data.uri
          console.log(this.metadata.certi);
        });
      }
    },
    setName: function(did){
      console.log('call setName')
      this.$http.get(`http://210.114.18.112:3000/api/pet/name/${did}`, {})
      .then((res)=> {
        if(res.data.peterpet){
          this.metadata.name = `${res.data.peterpet.name} 분양 NFT`;
        }
        else {
          this.metadata.name = '생성불가';
        }
      })
    }
  },
  components: {
    UploadImages,
  },
  created() {
    const address = this.$store.state.user.address;

    this.getDids(address);
  },
};
</script>

<style>
@media screen and (min-width: 1280px) {
  .custom-file-input {
    margin-left: -480px;
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
    max-height: 2700px;
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
    margin: 0px auto;
    display: inline-flexbox;
  }
  .UploadImages {
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
    margin-top: 290px;
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
  .create-completeb {
    width: 300px;
    height: 300px;
    position: relative;
    margin-left: 650px;
    top: 40px;
  }
}
</style>