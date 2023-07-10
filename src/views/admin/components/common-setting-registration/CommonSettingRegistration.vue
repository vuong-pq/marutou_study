<script setup lang="ts">
import { reactive } from 'vue'
import DetailAdminMenu from '@/views/admin/DetailAdminMenu.vue'
import type { MenuDetailAdmin } from '@/constants/types'
import { MENU_ITEMS_PATH, MENU_ITEMS_NAME } from '@/constants'

const dataMenu = reactive<MenuDetailAdmin[]>([
  {
    to: MENU_ITEMS_PATH.LIST_POWER_COMPANIES,
    icon: 'UserRegistrationIcon',
    name: MENU_ITEMS_NAME.LIST_POWER_COMPANIES
  },
  {
    to: MENU_ITEMS_PATH.GAS_PRICE,
    icon: 'UserRegistrationIcon',
    name: MENU_ITEMS_NAME.GAS_PRICE
  },
  {
    to: MENU_ITEMS_PATH.ELECTRICAL_EQUIPMENT,
    icon: 'CommonSettingIcon',
    name: MENU_ITEMS_NAME.ELECTRICAL_EQUIPMENT
  },
  {
    to: MENU_ITEMS_PATH.GAS_APPLIANCES,
    icon: 'CommonSettingIcon',
    name: MENU_ITEMS_NAME.GAS_APPLIANCES
  }
])
</script>

<template>
  <DetailAdminMenu :dataMenu="dataMenu" />
</template>

<style lang="scss" scoped></style>
