<script setup lang="ts">
import { MENU_ITEMS_PATH, MENU_ITEMS_NAME } from '@/constants'
import { reactive } from 'vue'
import DetailAdminMenu from '../DetailAdminMenu.vue'
import type { MenuDetailAdmin } from '@/constants/types'

const dataMenu = reactive<MenuDetailAdmin[]>([
  {
    to: MENU_ITEMS_PATH.USER_SETTINGS,
    icon: 'UserSetting',
    name: MENU_ITEMS_NAME.USER_SETTINGS
  },
  {
    to: MENU_ITEMS_PATH.SETTING_ADMIN_USER,
    icon: 'UserAdminSetting',
    name: MENU_ITEMS_NAME.SETTING_ADMIN_USER
  },
  {
    to: MENU_ITEMS_PATH.COMMON_SETTINGS,
    icon: 'CommonSettingIcon',
    name: MENU_ITEMS_NAME.COMMON_SETTINGS
  }
])
</script>

<template>
  <DetailAdminMenu :dataMenu="dataMenu" />
</template>

<style lang="scss" scoped></style>
