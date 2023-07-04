<script setup lang="ts">
import { ROUTER_NAME } from '@/constants'
import type { Device } from '@/constants/types'
import router from '@/router'
import { useDeviceStore } from '@/stores/device'

const store = useDeviceStore()

const props = defineProps<{
  devicesList: Device[]
  isElectricEquipment: boolean
}>()

const submit = () => {
  console.log('submitted')
  store.setDeviceData({ name: '', title: '' })
  router.push({
    name: props.isElectricEquipment
      ? ROUTER_NAME.DEVICE_DETAIL_ELECTRIC_NEW
      : ROUTER_NAME.DEVICE_DETAIL_GAS_APP_NEW,
    params: {}
  })
}

const rowClick = (device: Device) => {
  store.setDeviceData(device)
  const deviceDetail = device.title
  router.push({
    name: props.isElectricEquipment
      ? ROUTER_NAME.DEVICE_DETAIL_ELECTRIC
      : ROUTER_NAME.DEVICE_DETAIL_GAS_APP,
    params: { deviceDetail }
  })
}
</script>

<template>
  <div class="devices-list">
    <div class="data">
      <div class="header">IHコンロ</div>
      <div class="body">
        <el-table
          table-layout="fixed"
          ref="singleTableRef"
          :data="props.devicesList"
          highlight-current-row
          style="width: 100%"
          @row-click="rowClick"
          :show-header="false"
          class="devices-list-table"
          row-class-name="device-row"
        >
          <el-table-column type="index" width="100" />
          <el-table-column property="name" />
        </el-table>
      </div>
    </div>
    <el-button class="submit" @click="submit">追加</el-button>
  </div>
</template>

<style lang="scss" scoped>
.devices-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;

  .devices-list-table {
    display: flex;
    flex-direction: column;
    max-height: 600px;
  }

  :deep(.el-table tr.device-row) {
    height: 60px;
    cursor: pointer;

    &:nth-child(odd) {
      background-color: #ebf1ff;
    }
  }

  .data {
    padding: 24px;
    min-width: 80%;
    flex-grow: 1;
    overflow: hidden;
    .header {
      font-weight: bold;
      margin-bottom: 12px;
      font-size: 20px;
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 24px;
      height: 100%;

      .item-device {
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: aquamarine;
        }
      }
    }
  }

  .submit {
    width: 240px;
    padding: 12px;
    height: 48px;
    margin-bottom: 24px;
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
