<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import NestedMenu from './NestedMenu.vue'
import type { MenuNested } from '@/constants/types'

import BreadCrumb from './components/BreadCrumb.vue'
const { logout } = useAuthStore()

const dataNestedMenu: MenuNested = {
  name: 'Admin menu',
  data: [
    {
      name: 'User registration/Edit',
      child: {
        name: '',
        data: [
          {
            name: 'New user registration',
            to: '/admin/setting-user/user-register'
          },
          {
            name: 'User search',
            to: '/admin/setting-user/search'
          }
        ]
      }
    },
    {
      name: 'Common setting registration',
      child: {
        name: '',
        data: [
          {
            name: 'List of power companies',
            to: '/admin/common-setting/power-companies'
          },
          {
            name: 'Electrical equipment list',
            to: '/admin/setting-user/user-register'
          },
          {
            name: 'List of gas appliances',
            to: '/admin/setting-user/user-register'
          }
        ]
      }
    }
  ]
}
</script>

<template>
  <div class="admin-view">
    <div class="toolbar-header">
      <div class="company-name">Gas Delivery: #0123</div>
      <div @click="logout" class="logout-btn">Logout</div>
    </div>

    <div class="view">
      <div class="menu-admin">
        <NestedMenu :data="dataNestedMenu" />
      </div>

      <div class="view-content">
        <BreadCrumb />

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
    .menu-admin {
      background: #003049;
    }
    .view-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .content {
      flex-grow: 1;
      display: flex;
    }
  }
}
</style>
