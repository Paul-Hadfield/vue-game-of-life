<template>
  <div v-if="this.gameGrid" class="grid">
    <div v-for="(cell, index) in this.gameGrid" :key="index">{{index+1}}</div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: ["gameGrid"]
};
</script>

<style scoped>
</style>


