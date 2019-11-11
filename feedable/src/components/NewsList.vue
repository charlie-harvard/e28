<template>
  <div class="subCompoent">
    <ul>
      <li v-for="article in articles.slice(0, 5)" :key="article.url">
        <div v-if="article.cacheId">
          <router-link exact :to='{ name: "news", params: { id: article.cacheId }}'>
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
  </div>
</template>

<script>
//import * as app from "./../app.js";

export default {
  name: "NewsList",
  props: ["articles"],
  data: function() {
    return {};
  },
  methods: {
    convertTime: function(utcDate) {
      var localDate = new Date(utcDate);
      return localDate.toString();
    }
  }
};
</script>


<style scoped>
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