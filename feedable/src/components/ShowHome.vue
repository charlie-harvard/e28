<template>
  <div class="subCompoent">
    <h2>Home</h2>
    <h3>Latest News</h3>
    <ul>
      <li v-for="article in articles.slice(0, 5)" :key="article.url">
        <strong>{{ article.title }}</strong> <router-link exact :to='{ name: "feed" }'>Read</router-link>
        <br>
        {{ article.author }}
        <br>
        {{ article.source.name }}
        <br>
        {{ convertTime(article.publishedAt) }}

        
      </li>
    </ul>

    <hr />

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
    convertTime: function(utcDate){
      var localDate = new Date(utcDate);
      return localDate.toString();
    },
  },
  mounted() {
    app.axios.get(app.config.newsHeadlinesApi).then(response => {
      console.log(response.data);
      this.articles = response.data.articles;
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
  background-color: #EEEEEE;
  border: 1px solid #CCCCCC;
}
</style>