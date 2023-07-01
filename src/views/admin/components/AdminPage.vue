<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { UserRegistrationIcon, CommonSettingIcon } from '@/assets/icons'
import { ROUTER_PATH } from '@/constants'
</script>

<template>
  <div class="toolbar-container">
    <div class="wrapper">
      <RouterLink class="menu-item" :to="ROUTER_PATH.SETTING_USER">
        <div class="icon"><UserRegistrationIcon /></div>
        <div class="name">User register/edit</div>
      </RouterLink>

      <RouterLink class="menu-item" :to="ROUTER_PATH.COMMON_SETTING">
        <div class="icon"><CommonSettingIcon /></div>
        <div class="name">Common setting registration</div>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar-container {
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
