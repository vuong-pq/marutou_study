<script setup lang="ts">
import { SadIcon } from '@/assets/icons'
</script>

<template>
  <div class="not-found">
    <h1>Not Found</h1>

    <p class="text">
      Oops, we couldn't find that page<span class="icon"><SadIcon /></span>. Try going
      <RouterLink class="link" to="/">Home</RouterLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  padding: 12px;

  .text {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    font-size: 24px;
    display: inline-block;
    display: flex;
    align-items: center;
    width: 30px;
  }

  .link {
    font-size: 24px;
  }
}
</style>
