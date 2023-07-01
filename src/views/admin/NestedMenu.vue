<script lang="ts" setup>
import NestedMenu from './NestedMenu.vue'
import { ArrowDownIcon } from '@/assets/icons'
const props = defineProps<{
  data: any
}>()
const toggleMenuItems = (event: any) => {
  const icon = event.currentTarget
  if (icon?.parentNode) {
    const childEl = icon.parentNode.querySelector('.child')
    if (childEl) {
      childEl.classList.toggle('active')
      icon.classList.toggle('active')
    }
  }
}
</script>
<template>
  <div class="menu-items">
    <div v-if="props?.data?.name" class="menu-item menu-header">
      {{ props.data.name }}
    </div>
    <template v-for="item in props.data.data" :key="item.name">
      <RouterLink v-if="item?.to" :to="item.to" class="list-item menu-item">
        <div v-if="item?.name" class="menu-name">{{ item.name }}</div>
        <template v-if="item.child">
          <NestedMenu :data="item.child" class="child" />
        </template>
      </RouterLink>
      <div v-else class="list-item">
        <div class="menu-item menu-name menu-icon" @click.prevent="toggleMenuItems($event)">
          <div class="title">{{ item.name }}</div>
          <div class="icon"><ArrowDownIcon /></div>
        </div>
        <template v-if="item.child">
          <NestedMenu :data="item.child" class="child" />
        </template>
      </div>
    </template>
  </div>
</template>
<style scoped lang="scss">
.menu-name {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: max-content;

  .child {
    width: 100%;
  }
  .menu-header {
    border-bottom: 1px solid #fff;
  }
  .menu-item {
    padding: 12px;
    text-decoration: unset;
    color: #fff;
    &hover {
      background-color: #0077b6;
    }
  }

  .menu-icon {
    display: flex;
    gap: 12px;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s ease-in-out;
      font-size: 12px;

      svg {
        fill: #fff;
      }
    }
    &.active {
      .icon {
        transform: rotate(180deg);
      }
    }
  }
}
.list-item {
  overflow: hidden;

  .child {
    transition: 0.5s ease-out;
    max-height: 0;
    overflow: hidden;

    & > a {
      padding-left: 20px;
    }
    &.active {
      transition: 0.5s ease-in;
      max-height: 500px;

      :deep(.router-link-active.router-link-exact-active) {
        background-color: #457b9d;
      }
    }
  }
}
</style>
