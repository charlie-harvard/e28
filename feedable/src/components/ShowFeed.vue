<template>
  <div class="subCompoent">
    <h2>Feed</h2>
    <p>{{ rssUrl }}</p>
    <button v-on:click="fetchRssFeed">Get</button>
  </div>
</template>

<script>
export default {
  name: "ShowFeed",
  props: {},
  data: function() {
    return {
      rssUrl: "https://www.engadget.com/rss.xml",
      title: "",
      link: "",
      description: ""
    };
  },
  methods: {
    fetchRssFeed: function() {
     
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
