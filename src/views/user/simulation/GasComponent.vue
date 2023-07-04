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
      <div class="font-weight-bold">標準料金</div>
      <div class="flex-space-between mt-10">
        <span class="w-30-percent">ガス基本料金</span>
        <div class="w-55-percent text-right">
          <el-input class="w-200" placeholder="入ってください" />
        </div>
        <span class="w-15-percent">円</span>
      </div>
      <br />
      <hr />
      <div>従量単価</div>

      <div v-for="(data, index) in datas" :key="index" class="price mt-10">
        <div class="price-element">
          <span class="w-300">{{ index === 0 ? 0 : datas[index - 1].price }} .0~ </span>
          <el-input type="number" v-model="data.price" class="w-200" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <span style="width: 160px"> </span>
          <el-input v-model="data.m3" class="w-200" />
          <span> 円/m3 </span>
        </div>
      </div>

      <!--<div class="price">
        <div class="price-element">
          <span class="w-90"> 0.0~ </span>
          <el-input class="w-200" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-200" />
          <span> 円/m3 </span>
        </div>
      </div>
    
      <div class="price mt-10">
        <div class="price-element">
          <span class="w-90"> 5.0~ </span>
          <el-input class="w-200" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-200" />
          <span> 円/m3 </span>
        </div>
      </div>
      <div class="price mt-10">
        <div class="price-element">
          <span class="w-90"> 10.0~ </span>
          <el-input class="w-200" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-200" />
          <span> 円/m3 </span>
        </div>
      </div>
      <div class="price mt-10">
        <div class="price-element">
          <span class="w-90"> 15.0~ </span>
          <el-input class="w-200" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-200" />
          <span> 円/m3 </span>
        </div>
      </div>
      <div class="price mt-10">
        <div class="price-element">
          <span class="w-90"> 20.0~ </span>
          <el-input class="w-200" />
          <span> m3 </span>
        </div>
        <div class="price-element">
          <el-input class="w-200" />
          <span> 円/m3 </span>
        </div>
      </div> -->
      <div class="price mt-10">
        <div class="price-element">
          <span> {{ datas[datas.length - 1].price }}.0 m3以上</span>
        </div>
        <div class="price-element">
          <span style="width: 160px"> </span>
          <el-input class="w-200" />
          <span> 円/m3 </span>
          <el-button :disabled="datas.length <= 1" class="btn-gas" @click="handleDelete"
            >削除
          </el-button>
        </div>
      </div>
      <div class="mt-10 text-center mb-10">
        <el-button class="w-180 btn-gas" @click="handleAdd">料金段階追加 </el-button>
      </div>
    </div>
    <div class="gas-bg-content mt-10">
      <div class="mt-10 title-type">新・料金メニュー</div>
      <div class="d-flex-gap20 mt-10">
        <span class="w-30-percent">ガス基本料金</span>
        <div class="w-55-percent text-right">
          <el-input class="w-200" placeholder="入ってください" />
        </div>
        <span class="w-15-percent">円</span>
      </div>
      <div class="d-flex-gap20 mt-10 mb-10">
        <span class="w-30-percent">プラン利用料</span>
        <div class="w-55-percent text-right">
          <el-input class="w-200" placeholder="入ってください" />
        </div>
        <span class="w-15-percent">円</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-type {
  font-size: 20px;
  font-weight: 700;
}
.gas-bg-content {
  background-color: #d6dce5;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 20px;
}

.gas-content {
  margin-top: 20px;
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
  .btn-gas {
    background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
    border: solid 1px #000;
    font-size: 20px;
  }
}
</style>
