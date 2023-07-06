<script lang="ts" setup>
import HeaderComponents from './views/user/components/HeaderComponents.vue'
import ErrorAPI from '@/components/ErrorAPI.vue'
import router from '@/router'
import { ROUTER_PATH } from '@/constants'
</script>

<template>
  <el-container class="layout-container">
    <HeaderComponents v-if="router.currentRoute.value.path !== ROUTER_PATH.LOGIN" />
    <el-main>
      <RouterView />
    </el-main>

    <ErrorAPI />
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  min-height: 100vh;

  :deep(.el-main) {
    padding: 0;
  }
}

.el-container {
  flex-direction: column !important;

  .el-main {
    display: flex;
    flex-direction: column;
  }
}

.el-main {
  display: flex;
  flex-direction: column;
}
</style>
