<script setup lang="ts">
import router from '@/router'
import { useCompanyStore } from '@/stores/company'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const store = useCompanyStore()
const ruleFormRef = ref<FormInstance>()
const { powerCompanyDetailData } = storeToRefs(store)

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

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', ruleFormRef.value)
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
      <div class="header">Power Company Detail</div>

      <el-form
        ref="ruleFormRef"
        :model="powerCompanyDetailData"
        :rules="rules"
        label-width="120px"
        class="detail-form"
      >
        <div class="content1 content">
          <div class="header-content">header content 1</div>

          <div class="input">
            <el-form-item label="Id" prop="id">
              <el-input v-model="powerCompanyDetailData.id" />
            </el-form-item>
            KG
          </div>

          <div class="input">
            <el-form-item label="Name" prop="name">
              <el-input v-model="powerCompanyDetailData.name" />
            </el-form-item>
            KG
          </div>
        </div>

        <div class="content2 content">
          <div class="header-content">header content 2</div>

          <div class="content-items">
            <div class="left">
              <div class="form-item">
                <div class="title">Title1 --></div>

                <div class="input">
                  <el-form-item prop="field1">
                    <el-input v-model.number="powerCompanyDetailData.field1" />
                  </el-form-item>
                  KG
                </div>
              </div>

              <div class="form-item-wrapper">
                <div class="form-item">
                  <div class="title">Title1</div>

                  <div class="input">
                    <el-form-item prop="field2">
                      <el-input v-model.number="powerCompanyDetailData.field2" />
                    </el-form-item>
                    Title 2
                  </div>
                </div>

                <div class="form-item">
                  <div class="input">
                    <el-form-item prop="field2">
                      <el-input v-model.number="powerCompanyDetailData.field2" />
                    </el-form-item>
                    KG
                  </div>
                </div>
              </div>

              <div class="form-item">
                <div class="title">Title1 --></div>

                <div class="input">
                  <el-form-item prop="field2">
                    <el-input v-model.number="powerCompanyDetailData.field2" />
                  </el-form-item>
                  KG
                </div>
              </div>
            </div>

            <div class="right">
              <div class="input">
                <el-form-item prop="field1">
                  <el-input v-model.number="powerCompanyDetailData.field1" />
                </el-form-item>
                KG
              </div>

              <div class="input">
                <el-form-item prop="field2">
                  <el-input v-model.number="powerCompanyDetailData.field2" />
                </el-form-item>
                KG
              </div>

              <div class="input">
                <el-form-item prop="field2">
                  <el-input v-model.number="powerCompanyDetailData.field2" />
                </el-form-item>
                KG
              </div>
            </div>
          </div>
        </div>

        <div class="content3 content">
          <div class="header-content">header content 2</div>

          <div class="content-items">
            <div class="left">
              <div class="form-item">
                <div class="title">Title1 --></div>

                <div class="input">
                  <el-form-item prop="field3">
                    <el-input v-model.number="powerCompanyDetailData.field1" />
                  </el-form-item>
                  KG
                </div>
              </div>

              <div class="form-item">
                <div class="title">Title1</div>

                <div class="input">
                  <el-form-item prop="field4">
                    <el-input v-model.number="powerCompanyDetailData.field2" />
                  </el-form-item>
                  KG
                </div>
              </div>
            </div>

            <div class="right">
              <div class="input">
                <el-form-item prop="field3">
                  <el-input v-model.number="powerCompanyDetailData.field1" />
                </el-form-item>
                KG
              </div>

              <div class="input">
                <el-form-item prop="field4">
                  <el-input v-model.number="powerCompanyDetailData.field2" />
                </el-form-item>
                KG
              </div>

              <div class="input">
                <el-form-item prop="field4">
                  <el-input v-model.number="powerCompanyDetailData.field2" />
                </el-form-item>
                KG
              </div>
            </div>
          </div>
        </div>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.power-company-detail {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .form-wrapper {
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 24px;
    text-align: center;

    .detail-form {
      --item-gap: 8px;
      margin-top: 24px;
      min-width: 800px;
      display: flex;
      flex-direction: column;
      border-radius: inherit;
      gap: var(--item-gap);

      .content {
        background-color: #d6dce5;
        border-radius: inherit;
        padding: inherit;
        position: relative;
        padding: 12px;

        .title {
          min-width: 100px;
        }
        .header-content {
          text-align: left;
        }

        :deep(.el-form-item__content) {
          flex-wrap: unset;
          gap: 12px;
          margin-left: 0 !important;
          justify-content: space-between;
        }
      }

      .input {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 18px;

        :deep(.el-form-item) {
          margin-bottom: 0 !important;
        }
      }

      .content-items {
        display: flex;
        gap: 12px;
        justify-content: space-between;

        .left {
          flex-grow: 1;
        }

        .form-item-wrapper {
          display: flex;
          gap: 12px;
        }
        .form-item {
          display: flex;
          align-items: center;
          justify-content: space-between;

          :deep(.el-form-item) {
            margin-bottom: 0 !important;
          }
        }
      }
      .content:not(:nth-child(3))::before {
        content: '';
        width: 98%;
        position: absolute;
        bottom: calc(var(--item-gap) / -2);
        height: 1px;
        background-color: #ccc;
        left: 6px;
      }

      :deep(.el-form-item) {
        align-items: center;
      }

      :deep(.el-input__wrapper) {
        height: 48px;
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
}
</style>
