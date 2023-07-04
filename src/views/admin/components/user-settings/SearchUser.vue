<script setup lang="ts">
import { ROUTER_NAME } from '@/constants'
import router from '@/router'

const RedirectToEdit = () => {
  console.log('clicked')
  router.push({ name: ROUTER_NAME.USER_EDIT })
}
</script>

<template>
  <div class="block-element">
    <div class="wrapper">
      <div class="input-search">
        <div class="title">ユーザーID</div>
        <el-input />
      </div>
      <el-button class="btn" @click="RedirectToEdit">検索</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-element {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .wrapper {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
    align-items: center;
    .input-search {
      display: flex;
      align-items: center;

      .title {
        min-width: 100px;
      }
    }

    :deep(.el-button) {
      width: 200px;
      background-color: var(--button-background);
      color: var(--button-color);

      span {
        letter-spacing: 2px;
      }

      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>
