<script lang="ts" setup>
import { useBoardStore } from "~/composables/game/useBoardStore";
const { squares, play } = useBoardStore();
</script>

<template>
  <div class="board">
    <template v-for="(square, index) in squares" :key="index">
      <BoardPartsSquare :square="square" :index="index" @play="play" />
    </template>
  </div>
</template>

<style scoped>
.board {
  min-width: 200px;
  width: 30%;
  aspect-ratio: 1/1;
  border: 1px black solid;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
