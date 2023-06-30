<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import NestedMenu from './NestedMenu.vue'

const { logout } = useAuthStore()
const dataNestedMenu: any = {
  name: 'Admin menu',
  data: [
    {
      name: 'User registration/Edit',
      child: {
        name: '',
        data: [
          {
            name: 'New user registration',
            to: '/admin/user-register'
          },
          {
            name: 'User search',
            to: '/admin'
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
            child: {
              name: '',
              data: [
                {
                  name: 'List of power companies',
                  to: '/admin/user-register'
                },
                {
                  name: 'Electrical equipment list',
                  to: '/admin/user-register'
                },
                {
                  name: 'List of gas appliances',
                  to: '/admin/user-register'
                }
              ]
            }
          },
          {
            name: 'Electrical equipment list',
            to: '/admin/user-register'
          },
          {
            name: 'List of gas appliances',
            to: '/admin/user-register'
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
      <el-button @click="logout">Logout</el-button>
    </div>
    <div class="view">
      <div class="menu-admin">
        <NestedMenu :data="dataNestedMenu" />
      </div>
      <div class="content">
        <div class="breadcrumb">{{ $router.currentRoute.value.name }}</div>
        <RouterView />
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

    .content {
      flex-grow: 1;

      .breadcrumb {
        height: 48px;
        display: flex;
        align-items: center;
        padding: 12px;
      }
    }
  }
}
</style>
