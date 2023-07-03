<script setup lang="ts">
import { reactive } from 'vue'
import DetailAdminMenu from '@/views/admin/DetailAdminMenu.vue'
import type { MenuDetailAdmin } from '@/constants/types'

const dataMenu = reactive<MenuDetailAdmin[]>([
  {
    to: '/admin/setting-user/user-register',
    icon: 'UserRegistrationIcon',
    name: 'New user registration'
  },
  {
    to: '/admin/setting-user/search',
    icon: 'CommonSettingIcon',
    name: 'User search'
  }
])
</script>

<template>
  <DetailAdminMenu :dataMenu="dataMenu" />
</template>

<style lang="scss" scoped></style>
