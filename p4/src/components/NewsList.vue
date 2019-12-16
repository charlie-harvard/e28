<template>
  <div class="subComponent">
    <ul>
      <li class="newsItem" v-for="article in articles.slice(0, 5)" :key="article.url">
        <a class="txtlink" href="#" @click="openNews(article)">
          <strong>{{ article.title }}</strong>
        </a>
        <p>
          <span v-if="article.author">
            {{ article.author }}
            <br />
          </span>
          <span v-if="article.source.name">{{ article.source.name }}</span>
        </p>
        <p>{{ article.description }}</p>
      </li>
    </ul>

    <!-- Modal -->
    <div id="newsModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content" style="overflow: auto;">
        <span class="close" @click="closeNews">&times;</span>
        <br />
        <div v-if="currentArticle">
          <h3>{{ currentArticle.title }}</h3>
          <p>
            {{ convertTime(currentArticle.publishedAt) }}
            <br />
            {{ currentArticle.author }}
            <br />
            {{ currentArticle.source.name }}
            <span v-if="currentArticle && !isMyChannel">
              <button @click="addToMyChannels(currentArticle)">
                <strong>+</strong> Add to My Channels
              </button>
            </span>
          </p>
          <p>
            <img
              v-if="currentArticle.urlToImage"
              :src="currentArticle.urlToImage"
              style="width: 50%; float: left; margin: 0px 15px 15px 0px;"
            />
            {{ currentArticle.content }}
            <a target="_blank" :href="currentArticle.url">Read more ...</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as app from "./../app.js";

export default {
  name: "NewsList",
  props: ["articles"],
  data: function() {
    return {
      currentArticle: null,
      myChannels: []
    };
  },
  methods: {
    addToMyChannels: function(article) {
      let domain = this.getSourceDomain(article.url);
      let newChannel = {
        id: article.source.id,
        name: article.source.name,
        domain: domain
      };
      this.myChannels.push(newChannel);
      this.myChannels = this.uniqueChannel(this.myChannels);

      if (!this.myChannels || this.myChannels.length == 0) {
        this.myChannels = [{ id: "", name: "", domain: "" }];
      }

      let myChannels = { myChannels: this.myChannels };
      app.axios.put(app.config.updateMyChannels, myChannels);
      this.$store.commit('updateNewChannelCount', 1);
    },
    getSourceDomain: function(url) {
      let domain = "";
      if (url) {
        let urlParts = url
          .replace("http://", "")
          .replace("https://", "")
          .replace("www.", "")
          .replace("news.", "")
          .replace("feedproxy.", "")
          .split(/[/?#]/);
        domain = urlParts[0];
      }
      return domain;
    },
    uniqueChannel: function(channels) {
      let domians = [];
      let currentDomain = "";
      let newChannels = [];
      for (let i = 0; i < channels.length; i++) {
        currentDomain = channels[i].domain;
        if (!domians.includes(currentDomain)) {
          domians.push(currentDomain);
          newChannels.push(channels[i]);
        }
      }
      return newChannels;
    },
    getMyChannels: function() {
      app.axios.get(app.config.myChannels).then(response => {
        this.myChannels = response.data.myChannels;
      });
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
    closeNews: function() {
      let modal = document.getElementById("newsModal");
      modal.style.display = "none";
      this.currentArticle = null;
    }
  },
  computed: {
    isMyChannel: function() {
      let domain = this.getSourceDomain(this.currentArticle.url);
      for (let i = 0; i < this.myChannels.length; i++) {
        if (this.myChannels[i].domain == domain) {
          return true;
        }
      }
      return false;
    }
  },
  mounted() {
    this.getMyChannels();

    let modal = document.getElementById("newsModal");
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
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

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 65px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #eeeeee;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 75%;
}

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

.txtlink {
  color: #2f2fd8;
  text-decoration: none;
  margin-left: 0px;
  font-size: 16px;
}
</style>