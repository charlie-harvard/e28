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
        <li>
          <input class="searchInput" type="text" size="30" v-model="inputKeywords" placeholder="Search by Keywords">
            <router-link class="defaultBtn" 
              :to='{ name: "search", params: {keywords: keywordsEncoded}}' 
              v-if="keywordsEncoded" tag="button"> Search
            </router-link>
        <li/>
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
      links: ["home"],
      inputKeywords: null,
    };
  },
  computed: {
    keywordsEncoded: function(){
      if(this.inputKeywords){
        return encodeURI(this.inputKeywords.trim());
      } else {
        return '';
      }
    }
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
  background-color: #333333;
}


/* Style the submit button */
.defaultBtn {
  background-color: #000000;
  color: white;
  padding: 0px 15px 0px 15px; 
  height: 50px; 
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
}

.defaultBtn:hover {
  background-color: rgb(162, 157, 157);
}

.searchInput {
  padding: 0px 0px 0px 5px; 
  height: 50px; 
  border-width: 0px; 
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
}

</style>
