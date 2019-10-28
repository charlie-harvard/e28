<template>
  <div>
    <img class="real-icon" :src="getImg(1)" />
    <img class="real-icon" :src="getImg(2)" />
    <img class="real-icon" :src="getImg(3)" />
  </div>
</template>

<script>
export default {
  name: "ReelWheel",
  data: function() {
    return {
      deleted: false
    };
  },
  props: ["row", "getimgfunc"],
  methods: {
    getImg: function(col) {
      let src = this.getimgfunc(this.row, col);
      return src;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.real-icon {
  width: 48px;
  height: 48px;
}
</style>
