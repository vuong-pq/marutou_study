<script lang="ts" setup>
// import { storeToRefs } from 'pinia'
// import { useAuthStore } from './stores/auth'
// import LABEL from '@/constants/label'
// import { ROUTER_PATH } from '@/constants'
// import { useRoute } from 'vue-router'
// import { computed } from 'vue'

// import SalesComponent from './views/sales/SalesComponent.vue'
// import AdminView from './views/admin/AdminView.vue'

// const { loggedIn, state } = storeToRefs(useAuthStore())
// const route = useRoute()
// const currentRouteName = computed(() => route.path)
</script>

<template>
  <el-container class="layout-container">
    <!-- <div v-if="loggedIn">
      <div
        v-if="
          String(state.roleUser) === LABEL.COMMON.NUMBER.ONE &&
          currentRouteName === ROUTER_PATH.MAIN
        "
      >
        <SalesComponent />
      </div>
      <div
        v-if="
          String(state.roleUser) === LABEL.COMMON.NUMBER.TWO &&
          currentRouteName === ROUTER_PATH.MAIN
        "
      >
        <AdminView />
      </div>
    </div> -->
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  min-width: 100vw;
  min-height: 100vh;
  // background-color: black;

  :deep(.el-main) {
    padding: 0;
  }
}
</style>
