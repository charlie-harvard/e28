<template>
  <div class="subCompoent">
    <h2>News from <u>{{ this.domain }}</u></h2>
    <router-link :to="{name: 'channels'}">Back to Channels</router-link>
    <div v-if="articles">
      <news-list :articles="articles"></news-list>
    </div>
    <div v-else>
      <p>Couldn't load news from {{ this.domain }.}</p>
    </div>
  </div>
</template>

<script>
import * as app from './../app.js';
import NewsList  from './NewsList.vue'

export default {
  name: "Channel",
  components: { NewsList },
  data: function() {
    return {
      articles: [],
    };
  },
  props: ['domain'],
  methods: {
    getChannel: function(){
      app.axios
      .get(app.config.newsChannelApi + this.domain)
      .then(response => {
        this.articles = response.data.articles;
      });
    },
  },
  mounted(){
    this.getChannel();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  width: 300px;
}

li {
  padding: 5px 5px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
}
</style>