<template>
  <div id="app">
    <Grid :gameGrid="grid" :key="restartKey" />
    <Options
      @restartClicked="handleRestartClicked"
      @typeChanged="handleTypeChanged"
      :pattern="pattern"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import GameEngine from './gameengine';
import Grid from './grid.vue';
import Options from './options.vue';

export type Cell = {
  x: number;
  y: number;
  live: boolean;
};

export default defineComponent({
  name: 'app',
  components: { Grid, Options },
  data() {
    return {
      grid: [] as Cell[],
      restartKey: 0,
      pattern: 'blinker',
      timer: null as ReturnType<typeof setInterval> | null,
    };
  },
  created() {
    if (!this.grid.length) {
      this.resetGrid();
    }
    this.timer = setInterval(() => {
      this.grid = GameEngine.nextGeneration(this.grid);
    }, 1000);
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    resetGrid() {
      this.grid = this.populateGrid(this.pattern);
      this.restartKey += 1;
    },
    handleRestartClicked() {
      this.resetGrid();
    },
    handleTypeChanged(pattern: string) {
      this.pattern = pattern;
      this.resetGrid();
    },
    populateGrid(pattern: string): Cell[] {
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
});
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
