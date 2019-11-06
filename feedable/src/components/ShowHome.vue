<template>
  <div class="subCompoent">
    <h2>Home</h2>
    <h3>Latest Feeds</h3>
    <p>List of new feeds</p>

    <hr />

    <h3>My Feeds</h3>

    <input
      type="text"
      placehoder="RSS Feed"
      v-model.number="newRssUrl"
      v-on:keyup.enter="addNewRss"
      placeholder="Add a new RSS feed URL"
      size="80"
      style="padding:5px"
    />

    <button class="defaultBtn" v-on:click="addNewRss">Add</button>

    <ul>
      <li v-for="myFeed in myRssUrls" :key="myFeed">{{myFeed}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowHome",
  props: {},
  data: function() {
    return {
      newRssUrl: "",
      myRssUrls: []
    };
  },
  methods: {
    addNewRss: function() {
      if (this.newRssUrl.trim() != "" && this.validateUrl(this.newRssUrl.trim())) {
        this.myRssUrls.push(this.newRssUrl.trim());
        this.newRssUrl = "";
      }
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


<style scoped>
  /* Style the submit button */
  .defaultBtn {
    background-color: #333333;
    color: white;
    padding: 7px 20px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .defaultBtn:hover {
    background-color: #6b6d75;
  }
</style>