<script setup lang="ts">
import { reactive } from 'vue'
import DetailAdminMenu from '@/views/admin/DetailAdminMenu.vue'
import type { MenuDetailAdmin } from '@/constants/types'
import { MENU_ITEMS_PATH, MENU_ITEMS_NAME } from '@/constants'

const dataMenu = reactive<MenuDetailAdmin[]>([
  {
    to: MENU_ITEMS_PATH.LIST_POWER_COMPANIES,
    icon: 'ListCompaniesIcon',
    name: MENU_ITEMS_NAME.LIST_POWER_COMPANIES
  },
  {
    to: MENU_ITEMS_PATH.GAS_PRICE,
    icon: 'GasIcon',
    name: MENU_ITEMS_NAME.GAS_PRICE
  },
  {
    to: MENU_ITEMS_PATH.ELECTRICAL_EQUIPMENT,
    icon: 'ElectronicDevicesIcon',
    name: MENU_ITEMS_NAME.ELECTRICAL_EQUIPMENT
  },
  {
    to: MENU_ITEMS_PATH.GAS_APPLIANCES,
    icon: 'GasAppliancesIcon',
    name: MENU_ITEMS_NAME.GAS_APPLIANCES
  }
])
</script>

<template>
  <DetailAdminMenu :dataMenu="dataMenu" customClass="common-setting-registration" />
</template>

<style lang="scss">
.common-setting-registration.menu-container {
  .menu-item {
    min-width: 350px !important;
  }
}
</style>
