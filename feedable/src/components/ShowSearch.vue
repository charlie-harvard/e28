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
    assignArticleIds: function(articles) {
      for (let i = 0; i < articles.length; i++) {
        if(articles[i].url){
          articles[i].cacheId = this.stringToHash(articles[i].url);
        } else {
          articles[i].cacheId = this.stringToHash(articles[i].title);
        }
      }
      return articles;
    },
    stringToHash: function(str) {
      //http://mediocredeveloper.com/wp/?p=55
      var hash = 0;
      if (str.length == 0) return hash;
      for (let i = 0; i < str.length; i++) {
   
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
      }

      return hash;
    },
    searchByKeywords: function(){
      console.log(app.config.searchNewsApi + this.keywords);
      app.axios
      .get(app.config.searchNewsApi + this.keywords)
      .then(response => {
        this.articles = this.assignArticleIds(response.data.articles);
        if(localStorage.getItem("articlesCache")){          
          let tempCached = localStorage.getItem("articlesCache");
          let lastCachedArticles = JSON.parse(tempCached);
          let newCachedArticles = lastCachedArticles.concat(this.articles);
          
          localStorage.setItem("articlesCache", JSON.stringify(newCachedArticles));
        } else {
          localStorage.setItem("articlesCache", JSON.stringify(this.articles));
        }
      });
    }
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
