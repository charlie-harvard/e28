<template>
  <div class="subCompoent">
    <h2>Feed</h2>
    <button v-on:click="fetchRssFeed">Get</button>
    
  </div>
</template>

<script>
import { engadgetRss } from './../data/EngadgetRss.js';

export default {
  name: "ShowFeed",
  props: {},
  data: function() {
    return {
      rssUrl: "https://www.engadget.com/rss.xml", 
      rss: engadgetRss,
      title: "",
      link: "",
      description: ""
    };
  },
  methods: {
    fetchRssFeed: function() {
      /*
      var _this = this;
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
          if (request.readyState === 4) {
              _this.title = request.responseText;  
        }
      }
      request.open('GET', _this.rssUrl, true);
      request.send();
      */
    },

    parseRss: function(){

    },

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
