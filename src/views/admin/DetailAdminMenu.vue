<script setup lang="ts">
import { RouterLink } from 'vue-router'
import * as Icons from '@/assets/icons'
import type { MenuDetailAdmin } from '@/constants/types'
import { defineAsyncComponent } from 'vue'

defineProps<{
  dataMenu: MenuDetailAdmin[]
}>()

const getCurrentComponent = (componentName?: string) => {
  return defineAsyncComponent(() => import(`../../assets/icons/${componentName}.vue`))
}
</script>

<template>
  <div class="menu-container">
    <div class="wrapper">
      <RouterLink v-for="item in dataMenu" :key="item.name" class="menu-item" :to="item.to">
        <div class="icon">
          <component :is="getCurrentComponent(item.icon)" />
        </div>
        <div class="name">{{ item.name }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  width: 100%;

  .wrapper {
    display: flex;
    gap: 24px;
    align-items: center;
    height: 100%;
    justify-content: center;
  }

  .menu-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    height: max-content;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 224px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      background-color: unset;
    }

    .icon {
      font-size: 5rem;
      svg {
        fill: aquamarine;
      }
      path {
        stroke: green !important;
      }
    }
  }
}
</style>
