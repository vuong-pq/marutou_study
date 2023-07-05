<script setup lang="ts">
// data and rules form will pass to child here
// mỗi lần sang đây thì api sẽ trả về data, mk lấy company name để check
import router from '@/router'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { LIST_POWER_COMPANIES } from '@/constants'
import { reactive, ref } from 'vue'

const ruleFormRef = ref<FormInstance>()
const currentCompanyName = ref<string>('北海道')

const transformData = (originData: any) => {
  const targetData: { [key: string]: any } = {}

  for (let key in originData) {
    const [tabName, fieldName] = key.split('_')

    if (!targetData[tabName]) {
      targetData[tabName] = {
        [key]: originData[key]
      }
    } else {
      targetData[tabName][key] = originData[key]
    }
  }

  return targetData
}
// label input do mình tự đặt=> tạo một array label cho từng tab rồi add thêm thuộc tính label vào data list trả về.
//xem css thằng co2 ở cuối form kiểu gì
//check rules obj by constant companies or by field of data after loop object keys

const originData = ref<any>({
  tab1_name: 'tab1_name',
  tab1_name_field1: '冬季ピーク',
  tab1_name_field2: '夏季ピーク',
  tab1_name_field3: 'その他季ピーク',
  tab1_name_field4: 'オフピーク',
  tab1_name_field5: '夜間',
  tab2_name: 'tab2_name',
  tab2_name_field1: '日中時間（平日土の昼間）',
  tab2_name_field2: '夜間・日祝時間（平日土の夜間＆日祝日の全日）',
  tab2_name_field3: '平日昼間',
  tab2_name_field4: '休日夜間',
  tab2_name_field5: 'ウィークエンド時間（土日祝の昼間）',
  tab3_name: 'tab3_name',
  tab3_name_field1: '10 A',
  tab3_name_field2: '20 A',
  tab3_name_field3: '30 A',
  tab3_name_field4: '40 A',
  tab3_name_field5: '50 A',
  tab3_name_field6: '60 A',
  tab4_name: 'tab4_name',
  tab4_name_field1: '第１料金',
  tab4_name_field2: '第２料金',
  tab4_name_field3: '第３料金',
  tab5_name: 'tab5_name',
  tab5_name_field1: '燃料費調整単価',
  tab5_name_field2: '再生可能エネルギー発電促進賦課金単価',
  tab5_name_field3: '太陽光発電促進賦課金単価',
  tab5_name_field4: '補助金',
  tab5_name_field5: 'CO2排出係数'
})

const targetData = ref<any>(transformData(originData.value))
const labelsForm: any = {
  tab1: {
    tab1_name_field1: '夏季ピーク',
    tab1_name_field2: '冬季ピーク',
    tab1_name_field3: 'その他季ピーク',
    tab1_name_field4: 'オフピーク',
    tab1_name_field5: '夜間'
  },
  tab2: {
    tab2_name_field1: '日中時間（平日土の昼間）',
    tab2_name_field2: '夜間・日祝時間（平日土の夜間＆日祝日の全日）',
    tab2_name_field3: '平日昼間',
    tab2_name_field4: '休日夜間',
    tab2_name_field5: 'ウィークエンド時間（土日祝の昼間）'
  },
  tab3: {
    tab3_name_field1: '10 A',
    tab3_name_field2: '20 A',
    tab3_name_field3: '30 A',
    tab3_name_field4: '40 A',
    tab3_name_field5: '50 A',
    tab3_name_field6: '60 A'
  },
  tab4: {
    tab4_name_field1: '第１料金',
    tab4_name_field2: '第２料金',
    tab4_name_field3: '第３料金'
  },
  tab5: {
    tab5_name_field1: '燃料費調整単価',
    tab5_name_field2: '再生可能エネルギー発電促進賦課金単価',
    tab5_name_field3: '太陽光発電促進賦課金単価',
    tab5_name_field4: '補助金',
    tab5_name_field5: 'CO2排出係数'
  }
}

const checkRequired1 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('This field is required'))
  } else {
    callback()
  }
}

const getRuleByCompany = () => {
  let ruleObject = {}
  switch (currentCompanyName.value) {
    case LIST_POWER_COMPANIES[0]: {
      ruleObject = {
        tab1_name_field1: [
          { validator: checkRequired1, trigger: 'blur' },
          {
            required: true,
            message: 'This field is required',
            trigger: 'change'
          }
        ],
        tab1_name_field2: [{ validator: checkRequired1, trigger: 'blur' }],
        tab1_name_field3: [{ validator: checkRequired1, trigger: 'blur' }],
        tab1_name_field4: [{ validator: checkRequired1, trigger: 'blur' }],
        tab1_name_field5: [{ validator: checkRequired1, trigger: 'blur' }]
      }
    }
  }
  return ruleObject
}

const rulesObject: { [key: string]: any } = getRuleByCompany()

Object.keys(targetData.value.tab2).forEach((key) => {
  rulesObject[key] = [{ required: true, message: 'This field is required', trigger: 'change' }]
})
Object.keys(targetData.value.tab3).forEach((key) => {
  rulesObject[key] = [{ required: true, message: 'This field is required', trigger: 'change' }]
})
Object.keys(targetData.value.tab4).forEach((key) => {
  rulesObject[key] = [{ required: true, message: 'This field is required', trigger: 'change' }]
})
Object.keys(targetData.value.tab5).forEach((key) => {
  rulesObject[key] = [{ required: true, message: 'This field is required', trigger: 'change' }]
})
const rules = reactive<FormRules<any>>({
  ...rulesObject
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', originData.value)
      router.go(-1)
    } else {
      return false
    }
  })
}
</script>

<template>
  <div class="power-company-detail">
    <div class="form-wrapper">
      <el-form ref="ruleFormRef" :model="originData" :rules="rules" class="detail-form">
        <div class="form-items">
          <div class="content underline">
            <div class="header">
              <div class="header1">旧プラン</div>
              <div class="header2">ドリーム８</div>
            </div>

            <div v-for="(key, index) in Object.keys(targetData.tab1)" :key="index">
              <div class="form-item" v-if="key !== 'tab1_name'">
                <div class="label">{{ labelsForm.tab1[key] }}</div>

                <el-form-item :prop="key">
                  <el-input v-model="originData[key]" />
                </el-form-item>
              </div>
            </div>
          </div>

          <div class="content underline">
            <div class="header">
              <div class="header1">旧プラン</div>
              <div class="header2">エネとくスマートプラン</div>
            </div>

            <div v-for="(key, index) in Object.keys(targetData.tab2)" :key="index">
              <div class="form-item" v-if="key !== 'tab2_name'">
                <div class="label">{{ labelsForm.tab2[key] }}</div>

                <el-form-item :prop="key">
                  <el-input v-model="originData[key]" />
                </el-form-item>
              </div>
            </div>
          </div>

          <div class="content-wrapper">
            <div class="header">従量電灯</div>

            <div class="content">
              <div class="header">
                <div class="header1">（１）契約電流</div>
              </div>

              <div v-for="(key, index) in Object.keys(targetData.tab3)" :key="index">
                <div class="form-item" v-if="key !== 'tab3_name'">
                  <div class="label">{{ labelsForm.tab3[key] }}</div>

                  <el-form-item :prop="key">
                    <el-input v-model="originData[key]" />
                  </el-form-item>
                </div>
              </div>
            </div>

            <div class="content">
              <div class="header">
                <div class="header1">（２）従量電灯</div>
              </div>

              <div v-for="(key, index) in Object.keys(targetData.tab4)" :key="index">
                <div class="form-item" v-if="key !== 'tab4_name'">
                  <div class="label">{{ labelsForm.tab4[key] }}</div>

                  <el-form-item :prop="key">
                    <el-input v-model="originData[key]" />
                  </el-form-item>
                </div>
              </div>
            </div>

            <div class="content">
              <div class="header">
                <div class="header1">（３）その他</div>
              </div>

              <div v-for="(key, index) in Object.keys(targetData.tab5)" :key="index">
                <div class="form-item" v-if="key !== 'tab5_name'">
                  <div class="label">{{ labelsForm.tab5[key] }}</div>

                  <el-form-item :prop="key">
                    <el-input v-model="originData[key]" />
                  </el-form-item>
                </div>
              </div>
            </div>
          </div>
        </div>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.power-company-detail {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .form-wrapper {
    border-radius: 20px;
    padding: 24px;
    text-align: center;
    max-height: calc(100vh - 200px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #888;
    }

    &::-webkit-scrollbar-corner {
      background-color: #f1f1f1;
    }

    .detail-form {
      --item-gap: 8px;
      --min-width-label: 350px;
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      border-radius: inherit;
      gap: var(--item-gap);

      .content-wrapper {
        margin-top: 12px;

        .form-item .label {
          padding-left: 50px;
        }
      }

      .content {
        border-radius: inherit;
        padding: inherit;
        position: relative;
        padding: 12px;
        width: max-content;
      }

      .header {
        display: flex;
        .header1 {
          min-width: var(--min-width-label);
          text-align: left;
        }
      }

      .form-item {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        :deep(.el-form-item) {
          margin-bottom: 0 !important;
        }

        .label {
          text-align: left;
          min-width: var(--min-width-label);
        }
      }
      .content.underline::before {
        content: '';
        width: 98%;
        position: absolute;
        bottom: calc(var(--item-gap) / -2);
        height: 1px;
        background-color: #000;
        left: 6px;
      }

      :deep(.el-form-item) {
        align-items: center;
      }

      :deep(.el-input__wrapper) {
        height: 40px;
        width: 400px;
        border-radius: unset;
        border: 1px solid #000;
      }

      :deep(.el-form-item.asterisk-left .el-form-item__content) {
        margin-left: 0 !important;
        justify-content: center;
        button {
          background: #0077b6;
          width: 200px;
          border: 1px solid #0077b6;
          border-radius: 40px;
          font-size: 16px;
          transition: 0.3s;

          &:hover {
            letter-spacing: 2px;
          }

          &:active {
            opacity: 0.5;
          }
        }
      }
    }
    .header {
      font-weight: bold;
      font-size: 24px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  .go-to-next {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;

    .el-button {
      background-color: #fff;
      border: 1px solid var(--button-background);
      color: var(--button-background);

      &:active {
        opacity: 0.6;
      }
    }
  }
}
</style>
