<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { reactive, ref } from 'vue'

type Data = {
  price: Number | null
  m3: any | null
}

const datas = reactive<Data[]>([
  {
    price: 0,
    m3: 0
  },
  {
    price: 5,
    m3: 1
  },
  {
    price: 10,
    m3: 2
  }
])
const handleAdd = () => {
  datas.push({
    price: null,
    m3: null
  })
}
const handleDelete = () => {
  if (datas.length > 1) {
    datas.pop()
  }
  console.log(datas)
}
</script>

<template>
  <div class="gas-content">
    <div class="gas-bg-content">
      <div class="title-type">Standard charge</div>
      <div class="flex-space-between mt-10">
        <span class="w-300">Electricity basic charge</span>
        <el-input placeholder="Please input" />
        <span class="w-180">kWh @**円/kWh</span>
      </div>
      <br />
      <hr />
      <div>unit price</div>

      <div v-for="(data, index) in datas" class="price mt-10">
        <div class="price-element">
          <span class="w-90">{{ index === 0 ? 0 : datas[index - 1].price }} .0~ </span>
          <el-input type="number" v-model="data.price" class="w-60-percent" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input v-model="data.m3" class="w-60-percent" />
          <span> 円/m3 </span>
        </div>
      </div>

      <!--<div class="price">
        <div class="price-element">
          <span class="w-90"> 0.0~ </span>
          <el-input class="w-60-percent" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-60-percent" />
          <span> 円/m3 </span>
        </div>
      </div>
    
      <div class="price mt-10">
        <div class="price-element">
          <span class="w-90"> 5.0~ </span>
          <el-input class="w-60-percent" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-60-percent" />
          <span> 円/m3 </span>
        </div>
      </div>
      <div class="price mt-10">
        <div class="price-element">
          <span class="w-90"> 10.0~ </span>
          <el-input class="w-60-percent" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-60-percent" />
          <span> 円/m3 </span>
        </div>
      </div>
      <div class="price mt-10">
        <div class="price-element">
          <span class="w-90"> 15.0~ </span>
          <el-input class="w-60-percent" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-60-percent" />
          <span> 円/m3 </span>
        </div>
      </div>
      <div class="price mt-10">
        <div class="price-element">
          <span class="w-90"> 20.0~ </span>
          <el-input class="w-60-percent" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-60-percent" />
          <span> 円/m3 </span>
        </div>
      </div> -->
      <div class="price mt-10">
        <div class="price-element">
          <span> {{ datas[datas.length - 1].price }}.0~ that's all</span>
        </div>
        <div class="price-element">
          <el-input class="w-60-percent" />
          <span> 円/m3 </span>
          <el-button :disabled="datas.length <= 1" type="primary" @click="handleDelete"
            >delete</el-button
          >
        </div>
      </div>
      <div class="mt-10 text-center">
        <el-button class="w-180" type="primary" @click="handleAdd">ADD</el-button>
      </div>
    </div>
    <div class="gas-bg-content mt-10">
      <div class="mt-10 title-type">New price menu</div>
      <div class="d-flex-gap20 mt-10">
        <span class="w-20-percent">gas basic charge</span>
        <el-input class="w-65-percent" placeholder="Please input" />
      </div>
      <div class="d-flex-gap20 mt-10">
        <span class="w-20-percent">Plan usage fee</span>
        <el-input class="w-65-percent" placeholder="Please input" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-type {
  font-size: 16px;
  font-weight: 700;
}
.gas-bg-content {
  background-color: #d6dce5;
  border-radius: 5px;
  padding: 5px;
}

.gas-content {
  margin-top: 20px;
  border: solid 1px #000;
  padding: 20px;
  width: 100%;
  border-radius: 5px;

  .price {
    display: flex;
    justify-content: space-around;
  }
  .price-element {
    display: flex;
    gap: 20px;
    width: 48%;
  }
}
</style>
