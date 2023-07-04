<script setup lang="ts">
import ListComponent from '@/views/user/components/ListComponent.vue'
</script>

<template>
  <ListComponent :mode="true" />
</template>

<style lang="scss" scoped>
.view-layout {
  flex: 1;
  font-size: 20px;
}

.mode-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  .button-mode {
    width: 400px;
    margin: 0px;
    background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
    border: solid 1px #000;
    font-size: 20px;
    font-weight: bold;
    min-height: 50px;
  }
}

.p5-left-right {
  padding: 0 5px;
}
</style>
