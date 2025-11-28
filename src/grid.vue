<template>
  <div v-if="this.gameGrid" class="grid" :style="gridStyle">
    <Cell v-for="(cell, index) in this.gameGrid" :key="index" :isLive="cell.live" />
  </div>
</template>

<script>
import Cell from './cell.vue';

export default {
  name: 'GameGrid',
  components: { Cell },
  props: ['gameGrid'],
  computed: {
    gridDimensions() {
      return this.gameGrid.reduce(
        (acc, cell) => ({
          rows: Math.max(acc.rows, cell.y),
          cols: Math.max(acc.cols, cell.x),
        }),
        { rows: 0, cols: 0 },
      );
    },
    gridStyle() {
      const { rows, cols } = this.gridDimensions;
      const viewportWidth = window.innerWidth - 100;
      const viewportHeight = window.innerHeight;

      const cellSize = Math.floor(
        Math.min(
          ...[
            (viewportWidth * 0.8) / cols,
            (viewportHeight * 0.8) / rows,
            200,
          ],
        ),
      );

      return {
        width: `${cols * cellSize}px`,
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      };
    },
  },
};
</script>

<style scoped>
.grid {
  margin: 50px auto;
  border: solid 2px;
  display: grid;
  grid-gap: 0px;
  width: 250px;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(5, 50px);
}
</style>
