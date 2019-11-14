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
            <span v-if="currentArticle">
              <button @click="addToMyChannels(currentArticle)">
                <strong>+</strong> Add to My Channels
              </button>
            </span>
          </p>
          <p>
            <img v-if="currentArticle.urlToImage" :src="currentArticle.urlToImage" style="width: 50%; float: left; margin: 0px 15px 15px 0px;">
            {{ currentArticle.content }} <a target="_blank" :href="currentArticle.url">Read more ...</a>
          </p>
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
    addToMyChannels: function(article) {
      let domain = this.getSourceDomain(article.url);
      let newChannel = {'id': article.source.id, 'name': article.source.name, 'domain': domain};
      
      let myChannels = [];
      if(localStorage.getItem('myChannels')){
        myChannels = JSON.parse(localStorage.getItem('myChannels'));
        myChannels.push(newChannel);
        myChannels = this.uniqueChannel(myChannels);
        localStorage.setItem('myChannels', JSON.stringify(myChannels));
      } else {
        myChannels.push(newChannel);
        localStorage.setItem('myChannels', JSON.stringify(myChannels));
      }
    },
    getSourceDomain: function(url){
      let domain = '';
      if(url){
        let urlParts = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/);
        domain = urlParts[0];
      }
      return domain;
    },
    uniqueChannel: function(channels){
      let domians = [];
      let currentDomain = '';
      let newChannels = [];
      for(let i=0; i<channels.length; i++){
        currentDomain = channels[i].domain;
        if(!domians.includes(currentDomain)){
          domians.push(currentDomain);
          newChannels.push(channels[i]);
        }
      }
      return newChannels;
    },
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