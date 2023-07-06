<script setup lang="ts">
import { CommonSettingIcon } from '@/assets/icons'

import { Tickets, FolderOpened } from '@element-plus/icons-vue'

import router from '@/router'

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
  <div class="view-layout">
    <div class="toolbar">
      <div class="toolbar-container">
        <!-- <el-button class="button-toolbar" @click="handleClickUserSetting">ユーザー設定</el-button> -->
        <div class="bg-btn-user" @click="handleClickUserSetting">
          <CommonSettingIcon class="icon-item" />
          <span class="button-toolbar">ユーザー設定</span>
        </div>
        <div class="bg-btn-user" @click="handleClickSimulator">
          <el-icon class="icon-item"><FolderOpened color="red" /></el-icon>
          <span class="button-toolbar">シミュレーション</span>
        </div>
        <div class="bg-btn-user" @click="handleClickSearch">
          <el-icon class="icon-item"><Tickets color="blue" /></el-icon>
          <span class="button-toolbar">出力履歴</span>
        </div>
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
    font-size: 20px;
    font-weight: bold;
    min-height: 40px;
  }
  .bg-btn-user {
    background-color: #cad6ee;
    border-radius: 5px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .icon-item {
    font-size: 5rem;
    display: flex;
    min-width: 100px;
    align-items: center;
    svg {
      fill: aquamarine;
    }
    path {
      stroke: green !important;
    }
  }
}
</style>
