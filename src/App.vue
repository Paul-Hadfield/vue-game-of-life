<template>
  <Grid :gameGrid="this.grid"/>
</template>
<script>
import GameEngine from "../gameengine";
import Grid from "./grid.vue";
export default {
  name: "app",
  components: { Grid },
  created() {
    if (this.grid == null) {
      this.grid = GameEngine.setupBlinker();
    }
    this.timer = setInterval(() => {
      this.grid = this.grid.map(cell =>
        GameEngine.determineNewState(cell, this.grid)
      );
    }, 1000);
  },
  beforeDestroy() {
    console.log("destroy");
    clearInterval(this.timer);
  },
  data() {
    return {
      grid: null,
      data: {}
    };
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
