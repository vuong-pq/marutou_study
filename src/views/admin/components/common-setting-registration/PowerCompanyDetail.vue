<script setup lang="ts">
import router from '@/router'
import { useCompanyStore } from '@/stores/company'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const store = useCompanyStore()
const ruleFormRef = ref<FormInstance>()
const { powerCompanyDetailData } = storeToRefs(store)

defineProps<{
  setActiveComponent: (componentName: string) => void
}>()

const validateField1 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const validateField2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== powerCompanyDetailData.value.field1) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}
const validateField3 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== powerCompanyDetailData.value.field3) {
    callback(new Error("Two inputs don't matchsdsdsd!"))
  } else {
    callback()
  }
}

const validateField4 = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('Please input the age'))
  } else callback()
}

const rules = reactive<FormRules<typeof powerCompanyDetailData>>({
  field1: [{ validator: validateField1, trigger: 'blur' }],
  field2: [{ validator: validateField2, trigger: 'blur' }],
  field3: [{ validator: validateField3, trigger: 'blur' }],
  field4: [{ validator: validateField4, trigger: 'blur' }]
})

const labels = {
  lessThan90: '昼間　～90kWh',
  lessThan210: '昼間　～210kWh',
  greaterThan210: '昼間　210kWh ～',
  daytimeHours: '昼間時間',
  daytimeHoursWeekend: '日中時間（平日土の昼間）',
  nightTime: '夜間・日祝時間（平日土の夜間＆日祝日の全日）'
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', powerCompanyDetailData.value)
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
      <el-form ref="ruleFormRef" :model="powerCompanyDetailData" :rules="rules" class="detail-form">
        <div class="content">
          <div class="header">
            <div class="header1">旧プラン</div>
            <div class="header2">ドリーム８</div>
          </div>
          <div class="form-item">
            <div class="label">{{ labels.lessThan90 }}</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">{{ labels.lessThan210 }}</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">{{ labels.greaterThan210 }}</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">{{ labels.daytimeHours }}</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>
        </div>

        <div class="content">
          <div class="header">
            <div class="header1">新プラン</div>
            <div class="header2">エネとくスマートプラン</div>
          </div>
          <div class="form-item">
            <div class="label">{{ labels.daytimeHoursWeekend }}</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">{{ labels.nightTime }}</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>
        </div>

        <div class="content">
          <div class="header">
            <div class="header1">（１）契約電流</div>
          </div>
          <div class="form-item">
            <div class="label">10A</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">15A</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">20A</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">30A</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">40A</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">50A</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">60A</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>
        </div>

        <div class="content">
          <div class="header">
            <div class="header1">（２）従量電灯</div>
          </div>
          <div class="form-item">
            <div class="label">第１料金</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">第２料金</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">第３料金</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>
        </div>

        <div class="content">
          <div class="header">
            <div class="header1">（３）その他</div>
          </div>
          <div class="form-item">
            <div class="label">燃料費調整単価</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">再生エネルギー発電促進賦課金単価</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>
        </div>

        <div class="content">
          <div class="header"></div>
          <div class="form-item">
            <div class="label">太陽光発電促進賦課金単価</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>
        </div>

        <div class="content">
          <div class="header"></div>
          <div class="form-item">
            <div class="label">補助金</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
          </div>

          <div class="form-item">
            <div class="label">ＣＯ２排出係数</div>

            <el-form-item prop="field1">
              <el-input v-model="powerCompanyDetailData.field1" />
            </el-form-item>
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
      .content:nth-child(1)::before {
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
