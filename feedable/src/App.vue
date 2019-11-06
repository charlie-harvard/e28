<template>
  <div id="app">
    <nav>
      <ul>        
        <li style="height:50px">
          <img alt="Feedable logo" src="./assets/logo.png" style="width:50px;height:50px;margin-left:5px"/>
        </li>
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
body {
  margin: 0px;
}

.subCompoent {
  margin: 15px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  text-transform: uppercase;
}

li a:hover {
  background-color: #6b6d75;
}
</style>
