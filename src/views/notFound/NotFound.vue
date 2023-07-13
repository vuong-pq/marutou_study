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

.list-demo {
  width: fit-content;

  .list-filter {
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 0 10px #ccc;
    max-height: 200px;
    overflow-y: auto;

    :deep(.el-checkbox-group) {
      display: flex;
      flex-direction: column;
    }
  }

  .sort-filter {
    display: flex;
    gap: 50px;
  }

  .wrapper {
    margin-top: 50px;
    max-height: 650px;
    overflow-y: auto;
  }

  .item {
    display: flex;
    gap: 50px;

    &:first-child .field {
      border-bottom: 1px solid #000;
    }
  }

  .field {
    width: 200px;
    display: flex;
    gap: 12px;
  }
}
</style>
