<template>
  <div class="subCompoent">
    <h2 v-if="searchingKeywords">Results for "{{ searchingKeywords }}"</h2>
    <news-list :articles="articles"></news-list>
  </div>
</template>

<script>
import * as app from "./../app.js";
import NewsList  from './NewsList.vue'

export default {
  name: 'ShowSearch',
  components: { NewsList },
  props: ['keywords'],
  data: function(){
    return {
      searchingKeywords: '',
      articles: [],
    }
  },
  methods:{
    searchByKeywords: function(){
      let keywords_encoded = this.keywords;
      app.axios
      .get(app.config.searchNewsApi + keywords_encoded)
      .then(response => {
        this.articles = response.data.articles;
        this.searchingKeywords = decodeURI(keywords_encoded);
      });
    },
  },
  mounted(){
    this.searchByKeywords();
  },
  updated() {
    this.searchByKeywords();
  }
}
</script>

<style scoped>

</style>
