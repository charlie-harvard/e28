<template>
  <div class="subCompoent">
    <h2>My Channels</h2>

    <ul v-if="myChannels">
      <li v-for="channel in myChannels" :key="channel.domain">
        <p>
          {{ channel.name }} 
          <br>
          Read more at <router-link class="domainLink" :to="{name: 'channel', params:{domain: channel.domain}}">{{ channel.domain }}</router-link>
          <br>
        </p>
        <p><button class="removeButton" @click="removeChannel(channel)">Remove this channel</button></p>
      </li>
    </ul>
    <p v-else>You currently don't have any saved channels.</p>
  </div>
</template>

<script>
import * as app from './../app.js';

export default {
  name: "MyChannels",
  data: function() {
    return {
      myChannels: [],
    };
  },
  methods: {
    getMyChannels: function(){
      app.axios
      .get(app.config.myChannels)
      .then(response => {
        this.myChannels = response.data;
      });
    },
    removeChannel: function(channel){
      let newMyChannels = [];
      for(let i=0; i<this.myChannels.length; i++){
        if(this.myChannels[i].domain != channel.domain){
          newMyChannels.push(this.myChannels[i]);
        }
      }
      this.myChannels = this.uniqueChannel(newMyChannels);
      this.updateMyChannels(newMyChannels);
      localStorage.setItem('myChannels', JSON.stringify(newMyChannels));
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
    updateMyChannels: function(channels){
      app.axios
      .put(app.config.updateMyChannels, channels);
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

.domainLink {
    color: #230885;
    text-decoration: underline;
    margin-left: 0px;
    font-size: 18px;
}

.removeButton {
  font-size: 12px;
  border-radius: 3px;
  background-color: #e7e7e7; 
  color: black;
}
</style>