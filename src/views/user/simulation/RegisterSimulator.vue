<script setup lang="ts">
import { useStore } from '@/stores/perist'
import GasComponent from './GasComponent.vue'
import ElectricsComponents from './ElectricsComponent.vue'
import { ref, reactive } from 'vue'
const { someState } = useStore()
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'

const dataDefault = ref({
  input: '',
  company: ''
})
const options = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Option1',
    label: 'オプション1'
  },
  {
    value: 'Option2',
    label: 'オプション2'
  },
  {
    value: 'Option3',
    label: 'オプション3'
  },
  {
    value: 'Option4',
    label: 'オプション4'
  }
]
const options1 = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Option1',
    label: '10A'
  },
  {
    value: 'Option2',
    label: '20A'
  },
  {
    value: 'Option3',
    label: '30A'
  },
  {
    value: 'Option4',
    label: '50A'
  },
  {
    value: 'Option5',
    label: '60A'
  }
]

const ruleFormRef = ref<FormInstance>()
const validateInput = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the id again'))
  } else {
    callback()
  }
}

const validateInputElec1 = (rule: any, value: any, callback: any) => {
  if (someState.input7 || someState.input8) {
    callback()
  } else {
    if (value === '') {
      callback(new Error('Please input the id again'))
    } else {
      callback()
    }
  }
}

const validateInputElec2 = (rule: any, value: any, callback: any) => {
  if (someState.input5 || someState.input6) {
    callback()
  } else {
    if (value === '') {
      callback(new Error('Please input the id again'))
    } else {
      callback()
    }
  }
}

const rules = reactive<FormRules<typeof someState>>({
  input1: [{ validator: validateInput, trigger: 'none' }],
  input2: [{ validator: validateInput, trigger: 'none' }],
  input3: [{ validator: validateInput, trigger: 'none' }],
  input4: [{ validator: validateInput, trigger: 'none' }],
  input5: [{ validator: validateInputElec1, trigger: 'none' }],
  input6: [{ validator: validateInputElec1, trigger: 'none' }],
  input7: [{ validator: validateInputElec2, trigger: 'none' }],
  input8: [{ validator: validateInputElec2, trigger: 'none' }],
  input9: [{ validator: validateInput, trigger: 'none' }],
  input10: [{ validator: validateInput, trigger: 'none' }],
  input11: [{ validator: validateInput, trigger: 'none' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      handleSimulator()
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const handleSimulator = () => {
  window.open('./abc.pdf')
}
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">シミュレーション情報登録</div>
  <div class="title-header-user ml-130 font-weight-bold">〇〇〇〇〇販売店</div>
  <el-form ref="ruleFormRef" :model="someState" :rules="rules" class="view-form">
    <div class="view-layout">
      <div class="toolbar">
        <div class="toolbar-container">
          <div class="content-simulator">
            <div class="padding-left-right-40">
              <div class="d-flex mt-10">
                <span class="w-300">お客様氏名</span>
                <el-form-item prop="input1" class="w-100-percent">
                  <el-input
                    v-model="someState.input1"
                    class="input-company w-100-percent"
                    placeholder="入ってください"
                  />
                </el-form-item>
              </div>
              <div class="font-weight-bold">電気料金</div>
              <div class="d-flex mt-10">
                <span class="w-300 font-weight-bold">会社名</span>
                <el-form-item prop="input2" class="w-100-percent">
                  <el-select
                    v-model="someState.input2"
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
                </el-form-item>
              </div>
              <div class="d-flex mt-10">
                <span class="w-300">契約アンペア</span>
                <el-form-item prop="input3" class="w-100-percent">
                  <el-select
                    v-model="someState.input3"
                    class="m-2"
                    placeholder="Select"
                    size="large"
                  >
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <div class="electrics-basic">
              <div class="price mt-20">
                <div class="price-element">
                  <span> 電気基本料金</span>
                </div>
                <div class="price-element-right">
                  <el-form-item prop="input4">
                    <el-input v-model="someState.input4" class="w-200" />
                  </el-form-item>
                  <span class="w-160"> kWh @**円/kWh </span>
                  <div></div>
                </div>
              </div>
              <!-- <div class="flex-space-between mt-20">
                <span class="w-30-percent">電気基本料金</span>
                <el-form-item prop="input4" class="w-55-percent input-item text-right">
                  <el-input v-model="someState.input4" class="w-200" placeholder="入ってください" />
                </el-form-item>
                <span class="w-15-percent">円</span>
              </div> -->
            </div>
            <ElectricsComponents />
            <GasComponent />
          </div>
        </div>
        <div class="text-center">
          <el-button @click="submitForm(ruleFormRef)" class="button-simulator"
            >シミュレーション開始
          </el-button>
        </div>
      </div>
    </div>
  </el-form>
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
  font-size: 20px;
}

.toolbar-container {
  padding-top: 30px;
  .title-toolbar {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .title-type {
    font-size: 20px;
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
