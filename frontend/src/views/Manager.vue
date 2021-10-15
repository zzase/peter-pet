<template>
  <div class="wrapper">
    <parallax class="section">
      <div class="container">
        <br /><br />
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :search-options="{
            enabled: true,
            trigger: 'enter',
          }"
          @on-row-click="makeQR"
        />

        <Modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">생성된 QR코드</h3>
          <div slot="body">
            <vue-qr :text="text" :qId="qId"></vue-qr>
            <h4>-------------------------------------</h4>
            <barcode v-bind:value="did" :width="1">
              Show this if the rendering fails.
            </barcode>
          </div>
          <div slot="footer">
            <b-button pill variant="outline-secondary" @click="close"
              >닫기</b-button
            >
            <b-button pill variant="success" @click="printQR">QR 출력</b-button>
          </div>
        </Modal>
      </div>
    </parallax>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import VueQr from "vue-qr";
import VueBarcode from "vue-barcode";

export default {
  components: { Modal, VueQr, barcode: VueBarcode },
  name: "my-component",
  data() {
    return {
      columns: [
        {
          label: "등록번호",
          field: "did",
        },
        {
          label: "웬디",
          field: "id",
        },
        {
          label: "발급날짜",
          field: "issueDate",
        },
        {
          label: "URL",
          field: "url",
        },
      ],
      rows: [],

      //qr config
      qId: "",
      text: "",

      did: "",

      showModal: false,
    };
  },
  methods: {
    close: function () {
      this.showModal = false;
    },

    printQR: function () {
      this.$http
        .put(`${BACKEND_SERVER_URI}api/pet/make/qr`, { did: this.qId })
        .then((res) => {
          console.log(res.data);
          alert(res.data.msg);
          this.showModal = false;
          this.$router.go();
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getNoQrDids: function () {
      this.$http
        .get(`http://localhost:3000/api/pet/noqr`)
        .then((res) => {
          if (res.data.rows) {
            console.log(res.data.rows);
            this.rows = res.data.rows;
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },

    makeQR: function (params) {
      this.text = `${FRONTEND_SERVER_URI}pet/own/${params.row.did}`;
      this.did = `${params.row.did}`;
      this.qId = params.row.did;
      this.showModal = true;
    },
  },
  created() {
    this.getNoQrDids();
  },
};
</script>

<style lang="scss" scoped="scoped">
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>