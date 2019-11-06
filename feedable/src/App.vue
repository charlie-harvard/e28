<template>
  <div id="app">
    <HelloWorld msg="Welcome to Feedable App"/>
    <img alt="Vue logo" src="./assets/logo.png" style="width:256px;height:256px">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
