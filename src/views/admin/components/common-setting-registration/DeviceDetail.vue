<script setup lang="ts">
import DeviceForm from './DeviceForm.vue'

const props = defineProps<{
  isNewForm: boolean
  isElectricEquipment: boolean
}>()
</script>

<template>
  <div class="electrical-equipment-detail">
    <DeviceForm :isNewForm="props.isNewForm" :isElectricEquipment="props.isElectricEquipment" />
  </div>
</template>

<style lang="scss" scoped>
.electrical-equipment-detail {
  display: flex;
  align-items: center;
  justify-content: center;
  background: aliceblue;
  height: max-content;
  min-width: min(60%, 800px);
  min-height: 80%;
  border-radius: 12px;
}
</style>
