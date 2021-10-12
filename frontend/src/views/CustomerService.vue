<template>
  <div class="wrapper">
   <parallax class="section page-header" :style="headerStyle">
            <h1 style="text-align: center; color: white;">도움이 필요하신가요?<br><br>
            <b>Peter-Pet</b> &nbsp; Customer Service<br><br>
            평일: 10:00-18:00<br>
            점심: 12:30- 13:30</h1>
   </parallax>
    <div class="main main-raised">
         
      <div class="section">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/CS/cs-back.jpg")
    },
    
  },
  data() {
    return {
      
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>


</style>
