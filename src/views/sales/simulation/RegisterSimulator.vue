<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const { logout } = useAuthStore()
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-header">
      <el-button @click="logout">Logout</el-button>
    </div>
    <div class="toolbar-container">Register</div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  background-color: white;
  border-radius: 5px;
  width: 50vw;
  height: 50vh;
  position: relative;
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
