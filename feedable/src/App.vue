<template>
  <div id="app">
    <nav>
      <ul>        
        <li style="height:50px">
          <img alt="Feedable logo" src="./assets/logo.png" style="width:50px;height:50px;margin-left:5px"/>
        </li>
        <li v-for="link in links" :key="link">
          <router-link exact :to="{ name:link }">{{ link }}</router-link>
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
      links: ["home", "browse"],
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

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

nav li {
  float: left;
}

nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  text-transform: uppercase;
}

nav li a:hover {
  background-color: #6b6d75;
}

.router-link-active {
  background-color: #6b6d75;
}
</style>
