<script setup lang="ts">
import router from '@/router'
import DeviceForm from './DeviceForm.vue'
import { ROUTER_NAME } from '@/constants'
import { useDeviceStore } from '@/stores/device'
import { storeToRefs } from 'pinia'

const store = useDeviceStore()

const { isElectricalComponent } = storeToRefs(store)

defineProps<{
  isNewForm: boolean
}>()

console.log('curr', router.currentRoute.value.path)
console.log('curr', ROUTER_NAME.ELECTRIC_EQUIPMENT)
</script>

<template>
  <div class="electrical-equipment-detail">
    <DeviceForm :isNewForm="isNewForm" :isElectricEquipment="isElectricalComponent" />
  </div>
</template>

<style lang="scss" scoped>
.electrical-equipment-detail {
  display: flex;
  align-items: center;
}
</style>
