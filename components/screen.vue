<script lang="ts" setup></script>

<template>
  <div class="screen">
    <slot />
  </div>
</template>

<style scoped>
.screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
</style>
