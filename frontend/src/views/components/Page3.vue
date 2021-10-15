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
          label: '신고자 ID',
          field: 'id',
        },
        {
          label: '신고날짜',
          field: 'missingDate',
        },
        {
          label: '반려견DID',
          field: 'did',
        },
        {
          label: '상태',
          field: '',
        },
      ],
      rows: [],

      did: '',

      };
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