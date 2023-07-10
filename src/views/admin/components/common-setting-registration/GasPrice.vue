<script setup lang="ts">
import type { FormInstance } from 'element-plus/lib/components/index.js'
import { isNumber } from '@/constants/utils'
import { ref, computed } from 'vue'

const gasForm = ref<any>({
  garBasicCharge: 20,
  dataDemo: [
    {
      name: 0,
      value: 0
    }
  ],
  lastValue: 0
})

const checkValidateItems = ref<boolean>(true)
const ruleFormRef = ref<FormInstance>()

const objectRules: any = {}
gasForm.value.dataDemo.forEach((item: any) => {
  if (item.name !== null && item.name !== undefined) {
    objectRules[item.name] = [
      { required: true, message: 'Please input activity form', trigger: 'blur' }
    ]
  }
})

const addItem = () => {
  gasForm.value.dataDemo.push({
    name: gasForm.value.dataDemo[gasForm.value.dataDemo.length - 1].name,
    value: 0
  })
}

const deleteItem = () => {
  const cloneArr = [...gasForm.value.dataDemo]
  gasForm.value.dataDemo = cloneArr.slice(0, -1)
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const allowAddItem = computed(() => {
  //check all number format
  if (!checkValidateItems.value) return true
  if (gasForm.value.lastValue < 0) return true
  if (gasForm.value.dataDemo[gasForm.value.dataDemo.length - 1].value <= 0) return true
  if (gasForm.value.dataDemo.length <= 1) {
    if (gasForm.value.dataDemo[0].name <= 0) return true
  } else {
    if (
      gasForm.value.dataDemo[gasForm.value.dataDemo.length - 1].name <=
      gasForm.value.dataDemo[gasForm.value.dataDemo.length - 2].name
    )
      return true
  }
  return false
})

const validateGasBasic = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
    checkValidateItems.value = false
  } else if (!isNumber(value)) {
    checkValidateItems.value = false
    callback('value must be a number')
  } else {
    checkValidateItems.value = true
    callback()
  }
}
</script>

<template>
  <div class="gas-price">
    <div class="wrapper">
      <div class="header">標準料金</div>

      <div class="content">
        <el-form ref="ruleFormRef" :model="gasForm" label-width="120px" class="gas-price-form">
          <div class="item">
            <div class="item-row item-row-first">
              <div class="left">
                <div class="first-item-title">ガス基本料金</div>
              </div>

              <div class="right">
                <div class="input">
                  <el-form-item
                    prop="garBasicCharge"
                    :rules="[
                      {
                        required: true,
                        message: 'Please input activity form',
                        trigger: ['blur', 'change']
                      },
                      { validator: validateGasBasic, trigger: ['blur', 'change'] }
                    ]"
                  >
                    <el-input v-model="gasForm.garBasicCharge" type="text" />
                  </el-form-item>
                </div>

                <div class="unit">円/m3</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="item-header">従量単価</div>

            <div class="item-row" v-for="(item, index) in gasForm.dataDemo" :key="index">
              <div class="left">
                <div class="input">
                  <el-form-item
                    :label="`${
                      gasForm.dataDemo[index - 1] ? gasForm.dataDemo[index - 1].name : '0.0'
                    } ~ `"
                    :prop="'dataDemo.' + index + '.name'"
                    :rules="[
                      {
                        required: true,
                        message: 'domain can not be null',
                        trigger: ['blur', 'change']
                      },
                      { validator: validateGasBasic, trigger: ['blur', 'change'] }
                    ]"
                  >
                    <el-input
                      v-model="item.name"
                      type="text"
                      :disabled="index !== gasForm.dataDemo.length - 1"
                    />
                  </el-form-item>
                </div>

                <div class="unit">m3</div>
              </div>

              <div class="right">
                <div class="input">
                  <el-form-item
                    :prop="'dataDemo.' + index + '.value'"
                    :rules="[
                      {
                        required: true,
                        message: 'domain can not be null',
                        trigger: 'blur'
                      },
                      { validator: validateGasBasic, trigger: ['blur', 'change'] }
                    ]"
                  >
                    <el-input
                      v-model="item.value"
                      type="text"
                      :disabled="index !== gasForm.dataDemo.length - 1"
                    />
                  </el-form-item>
                </div>

                <div class="unit">円/m3</div>
              </div>
            </div>

            <div class="last-item">
              <div class="item-row">
                <div class="left">
                  <div class="last-item-title">
                    {{
                      `${Number(gasForm.dataDemo[gasForm.dataDemo.length - 1].name).toFixed(
                        1
                      )} m3以上   -->`
                    }}
                  </div>
                </div>

                <div class="right">
                  <div class="input">
                    <el-form-item
                      prop="lastValue"
                      :rules="[{ validator: validateGasBasic, trigger: ['blur', 'change'] }]"
                    >
                      <el-input v-model="gasForm.lastValue" type="text" />
                    </el-form-item>
                  </div>
                  <div class="unit">円/m3</div>
                </div>
              </div>

              <el-button
                class="del-btn"
                @click="deleteItem"
                :disabled="gasForm.dataDemo.length <= 1"
                >削除</el-button
              >
            </div>
          </div>

          <div class="item add-item">
            <el-button type="primary" @click="addItem" :disabled="allowAddItem"
              >料金段階追加</el-button
            >
          </div>

          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gas-price {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .last-item {
    display: flex;
    gap: 12px;
    position: relative;

    .del-btn {
      position: absolute;
      right: -100px;
    }

    .item-row {
      width: 100%;
      justify-content: space-between;
    }
  }
  .item-row-first {
    width: 100%;
    justify-content: space-between;
  }

  .item-row {
    display: flex;
    gap: 12px;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    gap: 8px;

    .unit {
      margin-bottom: 18px;
    }
  }

  :deep(.el-form-item__label) {
    padding-right: 20px;
  }

  .header,
  .first-item-title,
  .item-header {
    font-size: 20px;
    width: 150px;
  }

  .last-item-title,
  .first-item-title {
    text-align: right;
    padding-right: 20px;
  }
  .last-item-title {
    width: 200px;
    text-align: left;
    padding-left: 60px;
  }

  .item.add-item {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  :deep(.el-form-item:last-child .el-form-item__content) {
    justify-content: center;
    margin-left: 0 !important;

    button {
      width: 200px;
      height: 48px;
      margin-top: 60px;

      span {
        font-size: 20px;
      }
    }
  }

  :deep(.el-input__wrapper) {
    height: 48px;
    border: 1px solid #000;
    border-radius: unset;
  }
}
</style>
