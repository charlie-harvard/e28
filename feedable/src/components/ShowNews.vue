<template>
  <div class="subCompoent">
    <router-link exact :to='{ name: "home"}'>Back to Home</router-link>
      <div v-if="article">
      <h2 v-if="article">{{article.title}}</h2>
      <p>{{ article.publishedAt }}</p>
      <p v-if="article.author">{{ article.author }}<br>
      {{ article.source.name }}</p>
      <p><img :src="article.urlToImage" style="width:30%"/></p>
      <p>{{ article.content }}</p>
      <p><a target="_blank" :href="article.url">Read more...</a></p>
    </div>
  </div>
</template>

<script>
import * as app from './../app.js';

export default {
  name: "ShowNews",
  props:['id'],
  data: function() {
    return {
      article: null,
    };
  },

  methods: {
    getCachedArticle: function(){
      let cacheId = this.id;
      let cachedArticles = JSON.parse(app.library.articlesCache);
      for (let i=0; i<cachedArticles.length; i++){
        if(cachedArticles[i].cacheId == cacheId){
          return cachedArticles[i];
        }
      }
      return null;
    }
  },
  mounted(){
    app.library.articlesCache = localStorage.getItem("articlesCache");
    this.article = this.getCachedArticle();
  }
};
</script>
