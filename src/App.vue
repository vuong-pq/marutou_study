<script lang="ts" setup>
import HeaderComponents from './views/user/components/HeaderComponents.vue'
</script>

<template>
  <el-container class="layout-container">
    <HeaderComponents />
    <el-main>
      <RouterView />
    </el-main>
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
