<template>
<v-app id="page2">
    this is page 2
</v-app>
</template>

<script>
export default {
  data (){
    return {
     
    }

  },
  components: {
  
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

<style>

</style>
