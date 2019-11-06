<template>
  <div id="app">
    <img id="logo" alt="ZipFoods Logo" src="./assets/images/zipfoods-logo.png">
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
