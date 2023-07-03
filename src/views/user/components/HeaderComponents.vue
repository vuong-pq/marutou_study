<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import LABEL from '@/constants/label'
import BreadCrumb from '@/views/admin/components/BreadCrumb.vue'
const { loggedIn, state } = storeToRefs(useAuthStore())
const { logout } = useAuthStore()
</script>

<template>
  <div
    v-if="loggedIn && String(state.roleUser) === LABEL.COMMON.NUMBER.ONE"
    style="
      display: flex;
      justify-content: end;
      background-color: #44546a;
      min-height: 50px;
      align-items: center;
      color: white;
    "
  >
    <div style="padding-right: 20px">
      Tài khoản KH &nabla;&nbsp;&nbsp;&nbsp; <el-button @click="logout">Logout</el-button>
    </div>
  </div>
  <BreadCrumb v-if="loggedIn && String(state.roleUser) === LABEL.COMMON.NUMBER.ONE" />
</template>

<style lang="scss" scoped></style>
