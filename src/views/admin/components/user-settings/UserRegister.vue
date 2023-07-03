<script setup lang="ts">
import { reactive } from 'vue'
import DetailAdminMenu from '@/views/admin/DetailAdminMenu.vue'
import { MENU_ITEMS_PATH, MENU_ITEMS_NAME } from '@/constants'
import type { MenuDetailAdmin } from '@/constants/types'

const dataMenu = reactive<MenuDetailAdmin[]>([
  {
    to: MENU_ITEMS_PATH.NEW_USER_REGISTRATION,
    icon: 'UserRegistrationIcon',
    name: MENU_ITEMS_NAME.NEW_USER_REGISTRATION
  },
  {
    to: MENU_ITEMS_PATH.USER_SEARCH,
    icon: 'CommonSettingIcon',
    name: MENU_ITEMS_NAME.USER_SEARCH
  }
])
</script>

<template>
  <DetailAdminMenu :dataMenu="dataMenu" />
</template>

<style lang="scss" scoped></style>
