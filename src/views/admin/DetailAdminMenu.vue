<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { MenuDetailAdmin } from '@/constants/types'
import { defineAsyncComponent } from 'vue'

defineProps<{
  dataMenu: MenuDetailAdmin[]
  customClass?: string
}>()

const getCurrentComponent = (componentName?: string) => {
  return defineAsyncComponent(() => import(`../../assets/icons/${componentName}.vue`))
}
</script>

<template>
  <div class="menu-container" :class="customClass">
    <div class="wrapper">
      <RouterLink
        v-for="item in dataMenu"
        :key="item.name"
        class="menu-item custom-button-type"
        :to="item.to"
      >
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
    flex-direction: column;
  }

  .menu-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    height: max-content;
    padding: 12px;
    display: flex;
    gap: 12px;
    align-items: center;
    min-width: 500px;
    cursor: pointer;
    text-decoration: none;
    font-size: 28px;

    &:hover {
      opacity: 0.7;
      background-color: unset;
    }

    .icon {
      font-size: 5rem;
      display: flex;
      min-width: 100px;
      align-items: center;
    }
  }
}
</style>
