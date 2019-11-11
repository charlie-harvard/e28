<template>
  <div class="subCompoent">
    <h2>Latest News</h2>
    <ul>
      <li v-for="article in articles.slice(0, 5)" :key="article.url">
        <div v-if="article.cacheId"> <router-link exact :to='{ name: "news", params: { id: article.cacheId }}'>
            <strong>{{ article.title }}</strong>
          </router-link>
        </div>
        <br />
        {{ article.author }}
        <br />
        {{ article.source.name }}
        <br />
        {{ convertTime(article.publishedAt) }}
      </li>
    </ul>

    <h3>My Saved Channels</h3>
  </div>
</template>

<script>
import * as app from "./../app.js";

export default {
  name: "ShowHome",
  props: {},
  data: function() {
    return {
      articles: []
    };
  },
  methods: {
    addChannel: function() {},
    convertTime: function(utcDate) {
      var localDate = new Date(utcDate);
      return localDate.toString();
    },
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
    }
  },
  mounted() {
    app.axios
      .get(app.config.newsHeadlinesApi)
      .then(response => {
        this.articles = this.assignArticleIds(response.data.articles);
        localStorage.setItem("articlesCache", JSON.stringify(this.articles));
      });
  }
};
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

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 5px 10px;
  background-color: #eeeeee;
  border: 1px solid #cccccc;
}
</style>