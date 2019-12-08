<template>
  <div class="subCompoent">
    <h2>Latest News</h2>

    <news-list :articles="articles"></news-list>
  </div>
</template>

<script>
import * as app from "./../../app.js";
import NewsList from "../NewsList.vue";

export default {
  name: "Home",
  components: { NewsList },
  props: {},
  data: function() {
    return {
      articles: []
    };
  },
  methods: {},
  mounted() {
    app.axios.get(app.config.newsHeadlinesApi).then(response => {
      this.articles = response.data.articles;
    });
  }
};
</script>