<script setup lang="ts">
import { ref } from 'vue'
import DevicesList from './DevicesList.vue'
import type { Device } from '@/constants/types'

const devicesList = ref<Device[]>([
  {
    name: '電気給湯器',
    title: 'device-gas1'
  },
  {
    name: '電気******',
    title: 'device-gas2'
  },
  {
    name: '電気****',
    title: 'device-gas3'
  }
])
</script>

<template>
  <div class="electrical-equipment-list">
    <DevicesList :devicesList="devicesList" :isElectricEquipment="false" />
  </div>
</template>

<style lang="scss" scoped>
.electrical-equipment-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  .data {
    border: 1px solid #000;
    padding: 24px;
    min-width: 400px;
    min-height: 300px;

    .header {
      font-weight: bold;
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  .submit {
    width: 240px;
    padding: 12px;
    height: 48px;
    background-color: var(--button-background);
    color: var(--button-color);

    span {
      letter-spacing: 2px;
    }

    &:active {
      opacity: 0.7;
    }
  }
}
</style>
