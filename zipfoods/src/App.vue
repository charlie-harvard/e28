<template>
  <div id="app">
    <img id="logo" alt="ZipFoods Logo" src="./assets/images/zipfoods-logo.png">
    <p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>
    
    <show-catagories></show-catagories>
    
    <show-featured :category='"snacks"'></show-featured>
    
    <show-products></show-products>
  </div>
</template>

<script>
import ShowCatagories from './components/ShowCatagories.vue'
import ShowFeatured from './components/ShowFeatured.vue'
import ShowProducts from './components/ShowProducts.vue'



export default {
  name: 'app',
  components: {
    ShowCatagories, ShowFeatured, ShowProducts
  }
}
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
