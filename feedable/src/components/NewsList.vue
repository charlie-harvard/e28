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
      <div class="modal-content" style="overflow: auto;">
        <span class="close" @click="closeNews">&times;</span><br>
        <div v-if="currentArticle">
          <h3>{{ currentArticle.title }}</h3>
          <p>
            {{ convertTime(currentArticle.publishedAt) }}<br>
            {{ currentArticle.author }}<br>
            {{ currentArticle.source.name }}
            <a href="#">Add {{ currentArticle.source.id }} to Favorites</a>
          </p>
          <p>
            <img :src="currentArticle.urlToImage" style="width: 50%; float: left; margin: 0px 15px 15px 0px;">
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

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 65px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #eeeeee;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 75%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>