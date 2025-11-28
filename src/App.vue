<template>
  <div id="app">
    <Grid :gameGrid="this.grid" :key="restartKey" />
    <Options
      @restartClicked="handleRestartClicked"
      @typeChanged="handleTypeChanged"
      :pattern="pattern"
    />
  </div>
</template>
<script>
import GameEngine from '../gameengine';
import Grid from './grid.vue';
import Options from './options.vue';

export default {
  name: 'app',
  components: { Grid, Options },
  created() {
    console.log('Created');

    if (this.grid == null) {
      this.resetGrid();
    }
    this.timer = setInterval(() => {
      this.grid = this.grid.map((cell) => GameEngine.determineNewState(cell, this.grid));
    }, 1000);
  },
  beforeUnmount() {
    console.log('destroy');
    clearInterval(this.timer);
  },
  data() {
    return {
      grid: null,
      restartKey: 0,
      pattern: 'blinker',
    };
  },
  methods: {
    resetGrid() {
      this.grid = this.populateGrid(this.pattern);
      this.restartKey += 1;
    },
    handleRestartClicked() {
      this.resetGrid();
    },
    handleTypeChanged(pattern) {
      this.pattern = pattern;
      this.resetGrid();
    },
    populateGrid(pattern) {
      switch (pattern) {
        case 'blinker':
          return GameEngine.setupBlinker();
        case 'toad':
          return GameEngine.setupToad();
        case 'beacon':
          return GameEngine.setupBeacon();
        case 'pulsar':
          return GameEngine.setupPulsar();
        case 'acorn':
          return GameEngine.setupAcorn();
        case 'diehard':
          return GameEngine.setupDiehard();
        default:
          return GameEngine.setupRandom();
      }
    },
  },
};
</script>
<style>
#app,
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr 200px;
  text-align: center;
}
</style>
