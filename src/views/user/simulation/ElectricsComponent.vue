<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useStore } from '@/stores/perist'
const { someState } = useStore()

let disabledMode1 = computed(() => {
  if (someState.input5 || someState.input6) {
    return true
  }
  return false
})

let disabledMode2 = computed(() => {
  if (someState.input7 || someState.input8) {
    return true
  }
  return false
})
</script>

<template>
  <div class="electrics-content">
    <div class="electrics-bg-content">
      <div class="font-weight-bold">時間帯別電気使用量</div>
      <div class="price">
        <div class="price-element">
          <span> 昼間</span>
        </div>
        <div class="price-element-right">
          <el-form-item prop="input5">
            <el-input
              v-model="someState.input5"
              :disabled="disabledMode2"
              placeholder="入ってください"
              class="w-200"
            />
          </el-form-item>
          <span class="w-160"> kWh @**円/kWh </span>
          <div></div>
        </div>
      </div>
      <div class="price mt-10">
        <div class="price-element">
          <span> 夜間時間</span>
        </div>
        <div class="price-element-right">
          <el-form-item prop="input6">
            <el-input
              v-model="someState.input6"
              :disabled="disabledMode2"
              placeholder="入ってください"
              class="w-200"
            />
          </el-form-item>
          <span class="w-160"> kWh @**円/kWh </span>
          <div></div>
        </div>
      </div>
    </div>
    <div class="electrics-bg-content mt-20">
      <div class="font-weight-bold">時間帯別電気使用量</div>
      <div class="price mt-10">
        <div class="price-element">
          <span> 日中時間</span>
        </div>
        <div class="price-element-right">
          <el-form-item prop="input7">
            <el-input
              v-model="someState.input7"
              :disabled="disabledMode1"
              placeholder="入ってください"
              class="w-200"
            />
          </el-form-item>
          <span class="w-160"> kWh @**円/kWh </span>
          <div></div>
        </div>
      </div>
      <div class="price mt-10">
        <div class="price-element">
          <span> 夜間・祝日時間 （平日土の夜間＆日祝日の前日）</span>
        </div>
        <div class="price-element-right">
          <el-form-item prop="input8">
            <el-input
              v-model="someState.input8"
              :disabled="disabledMode1"
              placeholder="入ってください"
              class="w-200"
            />
          </el-form-item>
          <span class="w-160"> kWh @**円/kWh </span>
          <div></div>
        </div>
      </div>

      <div class="price mt-10">
        <div class="price-element">
          <span> 調整単価・補助金・再エネ賦課金</span>
        </div>
        <div class="price-element-right">
          <span class="text-right w-200">************</span>
          <span class="w-160"> kWh @**円/kWh </span>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.price {
  display: flex;
  justify-content: space-between;
}
.price-element {
  // display: flex;
  // gap: 20px;
  width: 48%;
}
.price-element-right {
  display: flex;
  justify-content: right;
  gap: 20px;
  width: 48%;
}
.w-160 {
  width: 160px !important;
}
.input-item :deep(.el-form-item__content) {
  display: block !important;
}
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
