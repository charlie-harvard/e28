<template>
  <div class="subCompoent">
    <p v-if="(newChannelCount > 0)">You have {{ newChannelCount }} newly saved channel(s).</p>
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
  },
  computed: {
    newChannelCount: function() {
        return this.$store.state.newChannelCount;
    }
  }
};
</script>