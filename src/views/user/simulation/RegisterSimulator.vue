<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import GasComponent from './GasComponent.vue'
import ElectricsComponents from './ElectricsComponent.vue'
import { ref } from 'vue'
const { logout, state } = useAuthStore()
const dataDefault = ref({
  input: '',
  company: ''
})
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]

const handleSimulator = () => {
  window.open('./open.pdf')
}
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">シミュレーション情報登録</div>
  <div class="title-header-user ml-130 font-weight-bold">〇〇〇〇〇販売店</div>
  <div class="view-layout">
    <div class="toolbar">
      <div class="toolbar-container">
        <div class="content-simulator">
          <div class="padding-left-right-40">
            <div class="d-flex mt-10">
              <span class="w-200">お客様氏名</span>
              <el-input
                v-model="dataDefault.input"
                class="input-company"
                placeholder="Please input"
              />
            </div>
            <div class="d-flex mt-10">
              <span class="w-200 font-weight-bold">会社名</span>
              <el-select
                v-model="dataDefault.company"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="font-weight-bold">電気料金</div>
            <div class="d-flex">
              <span class="w-200">契約アンペア</span>
              <el-select
                v-model="dataDefault.company"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="electrics-basic">
            <div class="flex-space-between mt-20">
              <span class="w-30-percent">電気基本料金</span>
              <div class="w-55-percent text-right">
                <el-input v-model="dataDefault.input" class="w-200" placeholder="Please input" />
              </div>
              <span class="w-15-percent">円</span>
            </div>
          </div>
          <ElectricsComponents />
          <GasComponent />
        </div>
      </div>
      <div class="text-center">
        <el-button @click="handleSimulator" class="button-simulator"
          >シミュレーション開始
        </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.electrics-basic {
  margin-top: 20px;
  background-color: #d6dce5;
  border-radius: 5px;
  padding: 5px 20px;
  min-height: 80px;
}
.toolbar {
  width: 65vw;
  font-size: 20px;
}
.button-simulator {
  margin: 50px;
  min-width: 250px;
  height: 50px;
  background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
  border: solid 1px #000;
  color: #000;
}

.toolbar-container {
  padding-top: 30px;
  .title-toolbar {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .title-type {
    font-size: 16px;
    font-weight: 700;
  }
  .content-simulator {
    padding: 5px 20px;
    .padding-left-right-40 {
      padding: 0 40px;
    }
    .input-company {
      width: 80%;
    }
    .input-company :deep(.el-input__wrapper) {
      min-height: 40px;
    }
  }
  .electrics-content {
    margin-top: 20px;
  }
}
</style>
