<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import router from '@/router'
// import HeaderComponentsVue from './components/HeaderComponents.vue'

const { logout } = useAuthStore()

const handleClickUserSetting = () => {
  router.push('/user-setting')
}

const handleClickSearch = () => {
  router.push('/search-simulator')
}

const handleClickSimulator = () => {
  router.push('/simulator')
}
</script>

<template>
  <!-- <HeaderComponentsVue /> -->
  <div class="view-layout">
    <div class="toolbar">
      <div class="toolbar-container">
        <el-button class="button-toolbar" @click="handleClickUserSetting">ユーザー設定</el-button>
        <el-button class="button-toolbar" @click="handleClickSimulator">シミュレーション</el-button>
        <el-button class="button-toolbar" @click="handleClickSearch">出力履歴</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-layout {
  flex: 1;
}
// .toolbar {
//   background-color: white;
//   border-radius: 5px;
//   width: 50vw;
//   height: 50vh;
//   position: relative;
//   border: 1px solid #000;
// }
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
  gap: 35px;
  .button-toolbar {
    width: 400px;
    margin: 0px;
    background-color: #cad6ee;
    font-size: 16px;
    font-weight: bold;
    min-height: 40px;
  }
}
</style>
