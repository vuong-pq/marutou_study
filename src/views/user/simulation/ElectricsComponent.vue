<script setup lang="ts"></script>

<template>
  <div class="electrics-content">
    <div class="electrics-bg-content">
      <div class="flex-space-between">
        <span class="w-20-percent">Electricity basic charge</span>
        <el-input class="w-65-percent" placeholder="Please input" />
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-20-percent">Electricity usage by time of day</span>
        <el-input class="w-65-percent" placeholder="Please input" />
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-20-percent">night time</span>
        <el-input class="w-65-percent" placeholder="Please input" />
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-20-percent">home time</span>
        <el-input class="w-65-percent" placeholder="Please input" />
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
      <div class="flex-space-between mt-10">
        <span class="w-20-percent">Adjusted Unit Price/Subsidy</span>
        <span class="w-65-percent text-center">123235346</span>
        <span class="w-15-percent">kWh @**円/kWh</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.electrics-bg-content {
  background-color: #d6dce5;
  border-radius: 5px;
  padding: 5px;
}
.electrics-content {
  margin-top: 20px;
  border: solid 1px #000;
  padding: 20px;
  border-radius: 5px;
}
</style>
