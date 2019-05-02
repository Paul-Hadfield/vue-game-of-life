<template>
  <div v-if="this.gameGrid" class="grid">
    <div v-for="(cell, index) in this.gameGrid" :key="index" :style="cellStyle(cell.live)"></div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: ["gameGrid"],
  methods: {
    cellStyle(isLive) {
      return { backgroundColor: isLive ? "black" : "white" };
    }
  }
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


