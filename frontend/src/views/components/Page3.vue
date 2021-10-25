<template>
<v-app id="page4">
    <br><br>
    <h3 style="text-align: center;">실종현황</h3>
    <div class="container">
                <br><br>
                <vue-good-table 
                :columns="columns" :rows="rows"
                :search-options="{
                enabled: true,
                trigger: 'enter'}"
                @on-row-click="missingReportCancel"
                />
    </div>
</v-app>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';
export default {
    components: {
     VueGoodTable,
    },
    
    data(){
    return {
      columns: [
        {
          label: '신고자',
          field: 'id',
        },
        {
          label: '실종된 반려견',
          field: 'name',
        },
        {
          label: '등록번호',
          field: 'did',
        },
        {
          label: '신고날짜',
          field: 'missingDate',
        },
      ],
      rows: [],
      deleteConfirm : false
      };
    },
    methods : {
      getMissingPets: function () {
      this.$http
        .get(`http://210.114.18.112:3000/api/pet/missing`)
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
    missingReportCancel: function (params) {
      const did = `${params.row.did}`;
      const address = this.$store.state.user.address;
       this.deleteConfirm = false
        this.$bvModal.msgBoxConfirm(`[${params.row.name}]의 실종신고를 취소하시겠습니까?`, {
          title: '실종신고 취소',
          size: 'md',
          buttonSize: 'sm',
          okVariant: 'success',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.deleteConfirm = value
            if(this.deleteConfirm){
              //console.log("check");
              this.$http.delete(`http://210.114.18.112:3000/api/pet/report/missing/cancel`,
                {
                  data : {
                    did : did,
                    address : address
                  }
                },{"Content-Type": "application-json"})
                .then((res)=>{
                  if(res.data.checkUpdate){
                    this.$router.push({name:'Page 1'}).catch(() => {});
                  }
                  else{
                    alert(res.data.msg);
                  }
                })
            }
            else{
              this.deleteConfirm = false
            }
          })
          .catch(err => {
            // An error occurred
          })
    },
  },
  created(){
    this.getMissingPets();
  }
}
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