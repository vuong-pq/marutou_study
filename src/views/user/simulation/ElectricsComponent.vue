<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

type DataElec = {
  input1: Number | null
  input2: any | null
}
const datas = reactive<DataElec[]>({
  input1: '',
  input2: '',
  input3: '',
  input4: '',
  input5: '',
  input6: ''
})

let disabledMode1 = computed(() => {
  if (datas.input1 || datas.input2) {
    return true
  }
  return false
})

let disabledMode2 = computed(() => {
  if (datas.input3 || datas.input4) {
    return true
  }
  return false
})
</script>

<template>
  <div class="electrics-content">
    <div class="electrics-bg-content">
      <div class="font-weight-bold">時間帯別電気使用量</div>
      <div class="flex-space-between">
        <span class="w-30-percent">昼間</span>
        <div class="w-55-percent text-right">
          <el-input
            v-model="datas.input1"
            :disabled="disabledMode2"
            class="w-200"
            placeholder="入ってください"
          />
        </div>
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-30-percent">夜間時間 </span>
        <div class="w-55-percent text-right">
          <el-input
            v-model="datas.input2"
            class="w-200"
            :disabled="disabledMode2"
            placeholder="入ってください"
          />
        </div>
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
    </div>
    <div class="electrics-bg-content mt-20">
      <div class="font-weight-bold">時間帯別電気使用量</div>
      <div class="flex-space-between">
        <span class="w-30-percent">日中時間 （平日土の昼間）</span>
        <div class="w-55-percent text-right">
          <el-input
            v-model="datas.input3"
            class="w-200"
            :disabled="disabledMode1"
            placeholder="入ってください"
          />
        </div>
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-30-percent">夜間・祝日時間 （平日土の夜間＆日祝日の前日）</span>
        <div class="w-55-percent text-right">
          <el-input
            v-model="datas.input4"
            class="w-200"
            :disabled="disabledMode1"
            placeholder="入ってください"
          />
        </div>
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-30-percent">調整単価・補助金・再エネ賦課金</span>
        <span class="w-55-percent text-right pr-20">************</span>
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.electrics-bg-content {
  background-color: #d6dce5;
  border-radius: 5px;
  padding: 5px 20px;
}
.electrics-content {
  margin-top: 20px;
  border-radius: 5px;
}
</style>
