<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

import BreadCrumb from './components/BreadCrumb.vue'
const { logout } = useAuthStore()
</script>

<template>
  <div class="admin-view">
    <div class="toolbar-header">
      <div class="company-name">Gas Delivery: #0123</div>
      <div @click="logout" class="logout-btn">Logout</div>
    </div>

    <div class="view">
      <div class="view-content">
        <BreadCrumb />

        <div class="screen-title">管理者メニュー</div>

        <div class="content">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .toolbar-header {
    background: #003049;
    display: flex;
    justify-content: flex-end;
    padding: 12px;
    gap: 12px;

    .company-id,
    .company-name,
    .logout-btn {
      color: #fff;
      font-size: 16px;
    }
    .logout-btn {
      border: 1px solid #fff;
      font-weight: bold;
      letter-spacing: 1px;
      padding: 0 8px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        letter-spacing: 2px;
      }
    }
  }
  .data {
    height: 500px;
    overflow-y: scroll;
    .item {
      display: flex;
      gap: 12px;
    }
  }
  .filter {
    display: flex;
    gap: 12px;
  }
  .view {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    // .menu-admin {
    //   background: #003049;
    // }
    .view-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .screen-title {
      height: 48px;
      padding: 24px;
      font-weight: bold;
      font-size: 20px;
      display: flex;
      align-items: center;
    }

    .content {
      flex-grow: 1;
      display: flex;
    }
  }
}
</style>
