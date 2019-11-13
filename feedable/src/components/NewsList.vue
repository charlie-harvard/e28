<template>
  <div class="subCompoent">
    <ul>
      <li v-for="article in articles.slice(0, 5)" :key="article.url">
        <a href="#" @click="openNews(article)">
          <strong>{{ article.title }}</strong>
        </a>
        <p>
          {{ article.author }}
          <br />
          {{ article.source.name }}
        </p>
        <p>{{ article.description }}</p>
      </li>
    </ul>

    <!-- Modal -->
    <div id="newsModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="closeNews">&times;</span>
        <div v-if="currentArticle">
          <h3>{{ currentArticle.title }}</h3>
          <p>
            {{ convertTime(currentArticle.publishedAt) }}<br>
            {{ currentArticle.author }}<br>
            {{ currentArticle.source.name }}
            <a href="#">Add {{ currentArticle.source.id }} to Favorites</a>
          </p>
          <p>
            <img :src="currentArticle.urlToImage" style="width: 50%;">
            <br><br>
            {{ currentArticle.content }}
          </p>

          <p><a target="_blank" :href="currentArticle.url">Read more...</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props: ["articles"],
  data: function() {
    return {
      currentArticle: null
    };
  },
  methods: {
    convertTime: function(utcDate) {
      var localDate = new Date(utcDate);
      return localDate.toString();
    },
    openNews: function(article) {
      this.currentArticle = article;
      let modal = document.getElementById("newsModal");
      modal.style.display = "block";      
    },
    closeNews: function(){
      let modal = document.getElementById("newsModal");
      modal.style.display = "none";
      this.currentArticle = null;
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