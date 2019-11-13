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
      links: ["home", "search"],
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


/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 65px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #eeeeee;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 75%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
