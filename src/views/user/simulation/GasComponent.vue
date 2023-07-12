<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useStore } from '@/stores/perist'

const { someState } = useStore()

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
    price: datas[datas.length - 1].price,
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
      <div class="price mt-10">
        <div class="price-element">
          <span> ガス基本料金</span>
        </div>
        <div class="price-element-right">
          <el-form-item prop="input9">
            <el-input v-model="someState.input9" placeholder="入ってください" class="w-200" />
          </el-form-item>
          <span class="w-160"> 円 </span>
          <div></div>
        </div>
      </div>
      <br />
      <hr />
      <div>従量単価</div>

      <div v-for="(data, index) in datas" :key="index" class="price mt-10">
        <div class="price-element">
          <span class="w-300">{{ index === 0 ? 0 : datas[index - 1].price }} .0~ </span>
          <el-form-item>
            <el-input
              :disabled="!(index === datas.length - 1)"
              type="number"
              v-model="data.price"
              class="w-200"
            />
          </el-form-item>
          <span> m3 </span>
        </div>
        <div class="price-element-right">
          <el-form-item>
            <el-input v-model="data.m3" :disabled="!(index === datas.length - 1)" class="w-200" />
          </el-form-item>
          <span class="w-70"> 円/m3 </span>
          <span class="w-90"></span>
        </div>
      </div>

      <div class="price mt-10">
        <div class="price-element">
          <span> {{ datas[datas.length - 1].price }}.0 m3以上</span>
        </div>
        <div class="price-element-right">
          <el-form-item>
            <el-input class="w-200" />
          </el-form-item>
          <span class="w-70"> 円/m3 </span>
          <el-button :disabled="datas.length <= 1" class="btn-gas w-90" @click="handleDelete"
            >削除
          </el-button>
        </div>
      </div>
      <div class="mt-10 text-center mb-10">
        <el-button class="w-190btn-gas" @click="handleAdd">料金段階追加 </el-button>
      </div>
    </div>
    <div class="gas-bg-content mt-10">
      <div class="mt-10 title-type">新・料金メニュー</div>
      <div class="price mt-10">
        <div class="price-element">
          <span> ガス基本料金</span>
        </div>
        <div class="price-element-right">
          <el-form-item prop="input10">
            <el-input v-model="someState.input10" placeholder="入ってください" class="w-200" />
          </el-form-item>
          <span class="w-160"> 円 </span>
          <div></div>
        </div>
      </div>
      <div class="price mt-10 mb-10">
        <div class="price-element">
          <span> プラン利用料</span>
        </div>
        <div class="price-element-right">
          <el-form-item prop="input11">
            <el-input v-model="someState.input11" placeholder="入ってください" class="w-200" />
          </el-form-item>
          <span class="w-160"> 円 </span>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-item :deep(.el-form-item__content) {
  display: block !important;
}
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

  .w-160 {
    width: 160px !important;
  }

  .price {
    display: flex;
    justify-content: space-between;
  }
  .price-element {
    display: flex;
    gap: 20px;
    width: 48%;
  }
  .price-element-right {
    display: flex;
    justify-content: right;
    gap: 20px;
    width: 48%;
  }
  .w-70 {
    width: 70px !important;
  }
  .w-90 {
    width: 90px !important;
  }
  .btn-gas {
    background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
    border: solid 1px #000;
    font-size: 20px;
  }
}
</style>
