<template>
  <div id="app">
    <img id="logo" alt="ZipFoods Logo" src="./assets/images/zipfoods-logo.png">
    
    <show-catagories></show-catagories>
    <show-home></show-home>
    <show-products></show-products>
  </div>
</template>

<script>
import ShowCatagories from './components/ShowCatagories.vue'
import ShowHome from './components/ShowHome.vue'
import ShowProducts from './components/ShowProducts.vue'

export default {
  name: 'app',
  components: {
    ShowCatagories, ShowHome, ShowProducts
  }
}
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
