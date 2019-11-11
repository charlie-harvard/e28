<template>
  <div class="subCompoent">
    <h2>Feed</h2>
    <button v-on:click="fetchNewsFeed">Get</button>
    
  </div>
</template>

<script>
import * as app from './../app.js';

export default {
  name: "ShowFeed",
  props: {},
  data: function() {
    return {
      rssUrl: "",
      rss: null,
      title: "",
      link: "",
      description: ""
    };
  },
  methods: {
    fetchNewsFeed: function() {
      app.axios
        .get(
          app.config.newsTopHits
        )
        .then(response => {
          console.log(response);
          console.log(response.data);
        });
    },

    parseFeed: function() {},

    validateUrl: function(str) {
      //https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      );
      return !!pattern.test(str);
    }
  }
};
</script>
