<template>
  <div class="subCompoent">
    <h2>My Channels</h2>

    <ul v-if="myChannels">
      <li v-for="channel in myChannels" :key="channel.domain">
        <p>
          {{ channel.name }}
          <br>
          {{ channel.domain }}
        </p>
      </li>
    </ul>
    <p v-else>You currently don't have any saved channels.</p>
  </div>
</template>

<script>
//import * as app from './../app.js';

export default {
  name: "MyChannels",
  data: function() {
    return {
      myChannels: null,
    };
  },
  methods: {
    getMyChannels: function(){
      if(localStorage.getItem("myChannels")){
        let cachedMyChannels = localStorage.getItem("myChannels");
        this.myChannels = JSON.parse(cachedMyChannels);
      }
    }
  },
  mounted(){
    this.getMyChannels();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  width: 300px;
}

li {
  padding: 5px 5px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
}
</style>