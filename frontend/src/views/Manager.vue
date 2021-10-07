<template>
    <div class="wrapper">
        <parallax class="section">
            <div class="container">
                <br><br>
                <vue-good-table 
                :columns="columns" :rows="rows"
                :search-options="{
                enabled: true,
                trigger: 'enter'}"
                @on-row-click="makeQR"/>
            </div>
        </parallax>
    </div>
</template>
<script>

export default {
  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: '등록번호',
          field: 'did',
        },
        {
          label: '웬디',
          field: 'id',
        },
        {
          label: '발급날짜',
          field: 'issueDate',
        },
        {
          label: 'URL',
          field: 'url',
        },
      ],
      rows: [],
    };
  },
  methods : {
      getNoQrDids : function() {
       this.$http
        .get(`http://localhost:3000/api/pet/noQR`)
        .then((res) => {
          if (res.data.rows) {
            console.log(res.data.rows)
            this.rows = res.data.rows
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },

    makeQR : function(params) {
        alert(params.row.url);
    }
  },
  created () {
      this.getNoQrDids();
  }
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