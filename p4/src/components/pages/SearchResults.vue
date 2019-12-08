<template>
  <div class="subCompoent">
    <p v-if="(newChannelCount > 0)">You have {{ newChannelCount }} newly saved channel(s).</p>
    <h2 v-if="searchingKeywords">Results for "{{ searchingKeywords }}"</h2>
    <p v-if="recentSearches">
      <strong>Recent Searches: </strong>
      <span
        v-for="searched in recentSearches.slice(0, 5)"
        :key="searched.timestamp"
      >{{ searched.keywords }} | </span>
    </p>
    <news-list :articles="articles"></news-list>
  </div>
</template>

<script>
import * as app from "./../../app.js";
import NewsList from "../NewsList.vue";

export default {
  name: "SearchResults",
  components: { NewsList },
  props: ["keywords"],
  data: function() {
    return {
      searchingKeywords: "",
      articles: [],
      recentSearches: null
    };
  },
  methods: {
    searchByKeywords: function() {
      let keywords_encoded = this.keywords;
      this.searchingKeywords = decodeURI(keywords_encoded);
      this.saveSearchHistory();

      // Search on NewsAPI
      app.axios
        .get(app.config.searchNewsApi + keywords_encoded)
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    saveSearchHistory: function() {
      let recentSearch = JSON.parse(
        localStorage.getItem("recentSearch") || "[]"
      );
      recentSearch.push({
        keywords: this.searchingKeywords,
        timestamp: Date.now()
      });
      this.recentSearches = recentSearch.reverse();
      localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
    }
  },
  mounted() {
    this.searchByKeywords();
  },
  computed: {
    newChannelCount: function() {
        return this.$store.state.newChannelCount;
    }
  },
  watch: {
    keywords: function() {
      this.searchByKeywords();
    }
  }
};
</script>