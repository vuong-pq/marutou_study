<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from './stores/auth'
import LABEL from '@/constants/label'
// import { ROUTER_PATH } from '@/constants'
// import { useRoute } from 'vue-router'
// import { computed } from 'vue'

// import SalesComponent from './views/user/SalesComponent.vue'
// import AdminView from './views/admin/AdminView.vue'

const { loggedIn, state } = storeToRefs(useAuthStore())
const { logout } = useAuthStore()

// const route = useRoute()
// const currentRouteName = computed(() => route.path)
</script>

<template>
  <el-container class="layout-container">
    <div
      v-if="loggedIn && String(state.roleUser) === LABEL.COMMON.NUMBER.ONE"
      style="
        display: flex;
        justify-content: space-between;
        background-color: #7b7b70;
        min-height: 50px;
        align-items: center;
      "
    >
      <div>Tên màn hình</div>
      <div style="padding-right: 20px">
        Tài khoản KH &nabla;&nbsp;&nbsp;&nbsp; <el-button @click="logout">Logout</el-button>
      </div>
    </div>
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
.el-container {
  flex-direction: column !important;
}
</style>
