<script setup lang="ts">
import { ref } from 'vue'
const dataDefault = ref({
  input: '',
  company: ''
})
</script>

<template>
  <div class="electrics-content">
    <div class="electrics-bg-content">
      <div class="font-weight-bold">時間帯別電気使用量</div>
      <div class="flex-space-between">
        <span class="w-30-percent">日中時間 （平日土の昼間）</span>
        <div class="w-55-percent text-right">
          <el-input v-model="dataDefault.input" class="w-200" placeholder="入ってください" />
        </div>
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-30-percent">夜間・祝日時間 （平日土の夜間＆日祝日の前日）</span>
        <div class="w-55-percent text-right">
          <el-input v-model="dataDefault.input" class="w-200" placeholder="入ってください" />
        </div>
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <!-- <div class="flex-space-between mt-10">
        <span class="w-30-percent">night time</span>
        <el-input class="w-55-percent" placeholder="入ってください"  />
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-30-percent">home time</span>
        <el-input class="w-55-percent" placeholder="入ってください"  />
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div> -->
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
