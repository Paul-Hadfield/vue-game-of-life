<template>
  <div class="cell" :style="cellStyle" />
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'GameCell',
  props: {
    isLive: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  computed: {
    cellStyle(): Record<string, string> {
      return { backgroundColor: this.isLive ? 'black' : 'white' };
    },
  },
});
</script>
<style>
.cell {
  border: solid 1px #ccc;
  vertical-align: middle;
  text-align: center;
}
</style>
