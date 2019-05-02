<template>
  <div v-if="this.gameGrid" class="grid">
    <Cell v-for="(cell, index) in this.gameGrid" :key="index" :isLive="cell.live"/>
  </div>
</template>

<script>
import Cell from "./cell.vue";
export default {
  name: "Grid",
  components: { Cell },
  props: ["gameGrid"]
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


