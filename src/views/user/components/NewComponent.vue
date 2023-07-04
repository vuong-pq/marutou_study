<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    mode: boolean
  }>(),
  {
    mode: true
  }
)
const dataDefault = ref({
  a: '',
  b: ''
})
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">
    {{ props.mode ? 'ガス機器登録' : '電気機器編集' }}
  </div>
  <div class="view-layout">
    <div class="view-form">
      <div class="d-flex mt-50">
        <span class="w-300 font-weight-bold">{{ props.mode ? 'ガス機器名' : '電気機器名' }} </span>
        <el-input v-model="dataDefault.a"></el-input>
      </div>
      <div class="d-flex mt-50">
        <span class="w-300 font-weight-bold">電気機器名</span>
        <el-input v-model="dataDefault.b">初期費用 </el-input>
      </div>
      <div class="flex-center text-center mt-200">
        <el-button class="btn-addition" @click="router.go(-1)">保存</el-button>
        <el-button class="btn-addition" @click="router.go(-1)">キャンセル</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-layout {
  flex: 1;
  font-size: 20px;
}

.view-form {
  font-size: 20px;
  .flex-center {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .btn-addition {
    background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
    border: solid 1px #000;
    min-width: 200px;
    height: 40px;
    font-size: 20px;
  }
}
.list-container {
  min-width: 600px;
  min-height: 400px;
  border: 1px solid #000;
  padding: 10px;
  .item-company {
    font-weight: bold;
    text-decoration: none;
    color: #000;
  }
}
</style>
