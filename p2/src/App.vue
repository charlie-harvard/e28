<template>
  <div id="app">
    <h1>Slot Machine</h1>
    <ReelWheel row="1" :getimgfunc="getItemImgByRowCol"></ReelWheel>
    <br />
    <ReelWheel row="2" :getimgfunc="getItemImgByRowCol"></ReelWheel>
    <br />
    <ReelWheel row="3" :getimgfunc="getItemImgByRowCol"></ReelWheel>
    <br />
    <p>Your Balance: {{ balance }}</p>
    <p>
      <button @click="play">Bet 1 point, Spin!</button> 
      <span v-if="isWin">You Won! {{ this.wonPoints  }} Points</span>
    </p>
  </div>
</template>

<script>
import ReelWheel from "./components/ReelWheel.vue";

export default {
  name: "app",
  components: {
    ReelWheel
  },
  data: function() {
    return {
      reelItems: [
        {
          id: "0",
          img: require("./assets/banana.png")
        },
        {
          id: "1",
          img: require("./assets/star.png")
        },
        {
          id: "2",
          img: require("./assets/cherry.png")
        },
        {
          id: "3",
          img: require("./assets/question.png")
        }
      ],
      reel1: [0, 1, 2, 3],
      reel2: [2, 3, 0, 1],
      reel3: [3, 0, 1, 2],
      isWin: false,
      wonPoints: 0,
      balance: 50,
      bet: 1
    };
  },
  methods: {
    play: function() {
      this.reel1 = this.computeNewItemIds(this.reel1);
      this.reel2 = this.computeNewItemIds(this.reel2);
      this.reel3 = this.computeNewItemIds(this.reel3);
      this.checkIsWin();
    },

    checkIsWin: function() {
      if (this.reel1[1] == this.reel2[1] && this.reel2[1] == this.reel3[1]) {
        this.isWin = true;

        switch (this.reel1[1]) {
          case 0:
            this.wonPoints = 10;
            break;
          case 1:
            this.wonPoints = 15;
            break;
          case 2:
            this.wonPoints = 20;
            break;
          case 3:
            this.wonPoints = 25;
            break;
        }
        this.balance = this.balance + this.wonPoints;
      } else {
        this.isWin = false;
        this.wonPoints = 0;
        this.balance = this.balance - 1;
      }
    },

    computeNewItemIds: function(real) {
      let numImgs = 4;
      let realNew = [];
      let randNum = Math.round(Math.random() * (numImgs - 1)) + 1;
      for (let i = 0; i < numImgs; i++) {
        let newImgId = real[i] + randNum;
        if (newImgId >= numImgs) {
          newImgId = newImgId - numImgs;
        }
        realNew.push(newImgId);
      }
      real = [];
      real = realNew;
      return real;
    },

    getItemImgByRowCol: function(row, col) {
      let currentReel = this.reel1;
      switch (col) {
        case 1:
          currentReel = this.reel1;
          break;
        case 2:
          currentReel = this.reel2;
          break;
        case 3:
          currentReel = this.reel3;
          break;
      }

      let id = currentReel[row];

      for (let i = 0; i < this.reelItems.length; i++) {
        if (this.reelItems[i].id == id) {
          return this.reelItems[i].img;
        }
      }
      return null;
    }
  }
};
</script>

<style>
</style>
