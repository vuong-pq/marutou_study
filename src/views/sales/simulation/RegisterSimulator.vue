<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import GasComponent from './GasComponent.vue'
import ElectricsComponents from './ElectricsComponent.vue'
const { logout, state } = useAuthStore()

const handleSimulator = () => {
  window.open('./open.pdf')
}
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-header">
      <el-button @click="logout">Logout</el-button>
    </div>
    <div class="toolbar-container">
      <div class="title-toolbar">Register simulator</div>
      <div class="content-simulator">
        <span class="company-simulator"> COMPANY NAME</span>
        <div class="flex-space-between mt-10">
          <span class="w-300">Customer</span>
          <el-input placeholder="Please input" />
        </div>
        <ElectricsComponents />
        <GasComponent />
      </div>
    </div>
    <div class="text-center">
      <el-button @click="handleSimulator" type="primary" class="button-simulator"
        >Create Simulator
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  background-color: white;
  border-radius: 5px;
  width: 50vw;
  min-height: 100vh;
  position: relative;
}
.toolbar-header {
  position: absolute;
  top: 20px;
  right: 8px;
}
.button-simulator {
  margin: 15px;
  min-width: 150px;
  height: 35px;
}

.toolbar-container {
  padding-top: 30px;
  .title-toolbar {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .title-type {
    font-size: 16px;
    font-weight: 700;
  }
  .content-simulator {
    padding: 5px 20px;
    .company-simulator {
      font-size: 20px;
      border: solid 1px #000;
      font-weight: 700;
      padding: 2px 5px;
    }
  }
  .electrics-content {
    margin-top: 20px;
    border: solid 1px #000;
    padding: 20px;
  }
}
</style>
