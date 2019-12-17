<template>
  <div id="app">
    <nav>
      <ul>        
        <li style="height:50px;">
          <img id="siteLogo" alt="Feedable logo" src="./assets/logo.png"/>
        </li>
        <li v-for="link in links" :key="link">
          <router-link exact :to="{ name:link }">{{ link }}</router-link>
        </li>
        <li>
          <input class="searchInput" type="text" size="30" 
            v-model="inputKeywords" 
            placeholder="Search by Keywords">
            <span v-if="keywordsEncoded && $v.keywordsEncoded.minLength">
              <router-link class="defaultBtn" 
                :to='{ name: "search", params: {keywords: keywordsEncoded}}' tag="button"> 
                Search <span v-if='!$v.keywordsEncoded.minLength'>(at least 2 chars)</span>
              </router-link>
            </span>
            <span v-else>
              <!-- Fake Button, used when router link button is not ready -->
              <button class="defaultBtn">Search <span v-if='!$v.keywordsEncoded.minLength'>(at least 2 chars)</span></button>
            </span>
        <li/>
      </ul>
    </nav>
    
    <router-view></router-view>
    <p class="creditFooter">Powered by <a style="color:#6b6d75;" href="https://newsapi.org/" target="_blank">NewsAPI.org</a></p>
  </div>
</template>

<script>
import { minLength } from 'vuelidate/lib/validators'

export default {
  name: "app",
  components: {},
  data: function() {
    return {
      links: ["home", "channels"],
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
  },
  validations:{
    keywordsEncoded: {
      minLength: minLength(2)
    }
  }
};
</script>

<style>
body {
  margin: 0px;
}

.creditFooter{
  color: #6b6d75;
  margin-left: 15px;
}

.subCompoent {
  margin: 15px;
}

#siteLogo {
  width:50px;
  height:50px;
  margin-left:5px;
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
  text-transform: capitalize;
}

nav li a:hover {
  background-color: #6b6d75;
}

.router-link-active {
  background-color: #6b6d75;
}

/* Style the submit button */
.defaultBtn {
  background-color: #333333;
  color: white;
  padding: 0px 15px 0px 15px; 
  height: 50px; 
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
}

.defaultBtn:hover {
  background-color: #6b6d75;
}

.searchInput {
  padding: 0px 0px 0px 5px;
  background-color: #eeeeee;
  height: 50px; 
  border-width: 0px; 
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
}

</style>
