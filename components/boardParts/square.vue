<script setup>
const { index, square } = defineProps(["square", "index"]);
const emit = defineEmits(["play"]);
</script>

<template>
  <div @click="() => emit('play', index)" class="square">
    {{ square }}
  </div>
</template>

<style>
.square {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
