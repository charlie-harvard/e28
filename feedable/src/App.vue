<template>
  <div id="app">
    <img alt="Feedable logo" src="./assets/logo.png" style="width:256px;height:256px" />

    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link :to="paths[link]">{{ link }}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      links: ["home", "browse", "feed"],
      paths: {
        home: "/",
        browse: "/browse",
        feed: "/feed"
      }
    };
  }
};
</script>

<style>
</style>
