<template>
  <div class="subCompoent">
    <h2>Search & Browse</h2>
  
    <p><input type="text" size="50" v-model="keywords" placeholder="Search Keywords" style="padding: 5px;">
    <button class="defaultBtn" @click="searchByKeywords">Search</button></p>

    <news-list :articles="articles"></news-list>
  </div>
</template>

<script>
import * as app from "./../app.js";
import NewsList  from './NewsList.vue'

export default {
  name: 'ShowSearch',
  components: { NewsList },
  props: {
  },
  data: function(){
    return {
      keywords: null,
      articles: [],
    }
  },
  methods:{
    searchByKeywords: function(){
      this.keywords = encodeURI(this.keywords);
      app.axios
      .get(app.config.searchNewsApi + this.keywords)
      .then(response => {
        this.articles = response.data.articles;      
      });
    },
  }
}
</script>

<style scoped>
/* Style the submit button */
.defaultBtn {
  background-color: #333333;
  color: white;
  padding: 7px 20px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.defaultBtn:hover {
  background-color: #6b6d75;
}
</style>
