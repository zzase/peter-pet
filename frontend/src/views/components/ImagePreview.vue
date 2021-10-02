<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>

    <input
      ref="fileInput"
      type="file"
      @input="pickFile"
      accept="image/jpeg, image/png, image/gif, image/jpg"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { previewImage: null };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },

    imageFileLoad(e) {
      this.previewImage = e.target.result;
    },
    setImageHash(res) {
      console.log(res);
      this.$emit("ipfsAdded", res.data.data.hash);
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = this.imageFileLoad;

        let fd = new FormData();
        fd.append("imagesFile", file[0]);
        axios
          .post("/api/ipfs/addFile", fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(this.setImageHash);

        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
};
</script>

<style scoped="scoped" lang="scss">
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
  background-image: url("/assets/img/Regist/picture.jpg");
  background-color: rgb(223, 223, 223);
  margin-left: -25px;
}
</style>