<template>
  <button @click="() => start()" class="restart">Restart</button>
</template>

<script lang="ts" setup>
import { useBoardStore } from "~/composables/game/useBoardStore";
const { start } = useBoardStore();
</script>

<style scoped>
.restart {
  padding: 0.5rem;
  border-radius: 10px;
}
</style>
