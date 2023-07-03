<script setup lang="ts">
import router from '@/router'

const handleClickElectricEquiment = () => {
  router.push('/user-setting/electric-equipment')
}

const handleClickGas = () => {
  router.push('/user-setting/list-gas')
}
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">ユーザー設定</div>
  <div class="view-layout">
    <div class="mode-container">
      <el-button class="button-mode" @click="handleClickElectricEquiment"
        >電気機器の初期費用
      </el-button>
      <el-button class="button-mode" @click="handleClickGas">ガス機器の初期費用 </el-button>
    </div>
  </div>
  <RouterView />
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
    font-size: 16px;
    font-weight: bold;
    min-height: 50px;
  }
}

.p5-left-right {
  padding: 0 5px;
}
</style>
