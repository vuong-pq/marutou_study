<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import router from '@/router'

const { logout } = useAuthStore()

const clickUserSetting = () => {
  router.push('/user-setting')
}
</script>

<template>
  <div class="view-layout">
    <div class="toolbar">
      <!-- <div class="toolbar-header">
        <el-button @click="logout">Logout</el-button>
      </div> -->
      <div class="toolbar-container">
        <el-button class="button-toolbar" type="primary" @click="logout">User Setting</el-button>
        <el-button class="button-toolbar" type="primary" @click="clickUserSetting"
          >Simulator</el-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  background-color: white;
  border-radius: 5px;
  width: 50vw;
  height: 50vh;
  position: relative;
  border: 1px solid #000;
}
.toolbar-header {
  position: absolute;
  top: 20px;
  right: 8px;
}
.toolbar-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  .button-toolbar {
    width: 400px;
    margin: 0px;
  }
}
</style>
