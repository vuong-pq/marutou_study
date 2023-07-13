<script setup lang="ts">
import { reactive } from 'vue'
import DetailAdminMenu from '@/views/admin/DetailAdminMenu.vue'
import { MENU_ITEMS_PATH, MENU_ITEMS_NAME } from '@/constants'
import type { MenuDetailAdmin } from '@/constants/types'

const props = defineProps<{
  isAdminMode: boolean
}>()

const dataMenu = reactive<MenuDetailAdmin[]>([
  {
    to: props?.isAdminMode
      ? MENU_ITEMS_PATH.ADMIN_USER_REGISTER
      : MENU_ITEMS_PATH.NEW_USER_REGISTRATION,
    icon: props?.isAdminMode ? 'UserAdminAdd' : 'UserRegistrationIcon',
    name: props?.isAdminMode
      ? MENU_ITEMS_NAME.ADMIN_USER_REGISTER
      : MENU_ITEMS_NAME.NEW_USER_REGISTRATION
  },
  {
    to: props?.isAdminMode ? MENU_ITEMS_PATH.USER_ADMIN_SEARCH : MENU_ITEMS_PATH.USER_SEARCH,
    icon: props?.isAdminMode ? 'UserAdminSearchIcon' : 'UserSearchIcon',
    name: props?.isAdminMode ? MENU_ITEMS_NAME.USER_ADMIN_SEARCH : MENU_ITEMS_NAME.USER_SEARCH
  }
])
</script>

<template>
  <DetailAdminMenu :dataMenu="dataMenu" customClass="setting-user" />
</template>

<style lang="scss">
.setting-user.menu-container {
  .menu-item {
    min-width: 400px !important;
  }
}
</style>
