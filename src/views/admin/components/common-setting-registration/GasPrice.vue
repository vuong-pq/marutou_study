<script setup lang="ts">
import { isNumber } from '@/constants/utils'
import type { FormInstance } from 'element-plus/lib/components/index.js'
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

const ruleFormRef = ref<FormInstance>()
const nameItemRefs = ref<any[]>([])
const valueItemRefs = ref<any[]>([])
const garBasicChargeRef = ref<any>(null)
const lastValueRef = ref<any>(null)

const getItemRef = (index: number, suffix: string) => {
  return (el: any) => {
    if (suffix === 'name') {
      nameItemRefs.value[index] = el
    } else {
      valueItemRefs.value[index] = el
    }
  }
}

const clearValidation = (suffix: string, index?: number) => {
  if (index != null) {
    const itemRef = suffix === 'name' ? nameItemRefs.value[index] : valueItemRefs.value[index]
    if (itemRef) {
      itemRef.clearValidate()
    }
  } else {
    if (suffix === 'garBasicCharge') {
      garBasicChargeRef.value.clearValidate()
    } else {
      lastValueRef.value.clearValidate()
    }
  }
}

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

const getIndexField = (field: string) => {
  const regex = /\.(0|[1-9]\d*)\./
  const match = field.match(regex)
  if (match) {
    return Number(match[1])
  }
  return -1
}

const getSuffix = (text: string) => {
  if (!text) return
  const regex = /[^.]+$/
  const result = text.match(regex)
  return result && result[0]
}

const validateGasBasic = (rule: any, value: any, callback: any) => {
  const indexItem = getIndexField(rule.field)
  if (indexItem !== -1) {
    const suffix = getSuffix(rule.field)
    if (indexItem === 0) {
      if (Number(value) <= 0) {
        return callback(new Error('invalid value'))
      }
    } else {
      if (suffix) {
        if (suffix === 'name') {
          if (
            Number(gasForm.value.dataDemo[indexItem][suffix]) <=
            Number(gasForm.value.dataDemo[indexItem - 1][suffix])
          ) {
            return callback(new Error('invalid value'))
          }
        } else {
          if (Number(gasForm.value.dataDemo[indexItem][suffix]) <= 0) {
            return callback(new Error('invalid value'))
          }
        }
      }
    }
    if (suffix === 'value' && !Number.isInteger(Number(value))) {
      return callback(new Error('value must be integer'))
    }
  } else {
    if (Number(value) <= 0 && rule.field === 'garBasicCharge') {
      return callback(new Error('invalid value'))
    }
    if (!Number.isInteger(Number(value))) {
      return callback(new Error('value must be integer'))
    }
  }
  return callback()
}

const rules = computed(() => {
  const listData = [...gasForm.value.dataDemo]
  const rulesObject: { [key: string]: any } = {}
  listData.forEach((item, index) => {
    rulesObject['dataDemo.' + index + '.name'] = [
      { validator: validateGasBasic, trigger: ['none'] }
    ]
    rulesObject['dataDemo.' + index + '.value'] = [
      { validator: validateGasBasic, trigger: ['none'] }
    ]
  })
  return {
    ...rulesObject,
    garBasicCharge: [{ validator: validateGasBasic, trigger: ['none'] }],
    lastValue: [{ validator: validateGasBasic, trigger: ['none'] }]
  }
})

const isValidNumber = (number: number) => {
  return number && isNumber(number) && Number(number) > 0
}

const checkValidValue = (item: any, suffix: string, index?: number) => {
  if (index != null) {
    clearValidation(suffix, index)
    if (index === 0 && !isValidNumber(item[suffix])) {
      item[suffix] = 0
    }
    if (index > 0) {
      const befVal = gasForm.value.dataDemo[index - 1][suffix]
      if (!isNumber(item[suffix]) || Number(item[suffix]) < Number(befVal)) {
        item[suffix] = befVal
      }
    }
  } else {
    clearValidation(suffix)
    if (!isValidNumber(item[suffix])) {
      item[suffix] = 0
    }
  }
}
</script>

<template>
  <div class="gas-price custom-scroll-bar">
    <div class="wrapper">
      <div class="header">標準料金</div>

      <div class="content">
        <el-form
          ref="ruleFormRef"
          :rules="rules"
          :model="gasForm"
          label-width="120px"
          class="gas-price-form"
          :validate-on-rule-change="false"
        >
          <div class="item">
            <div class="item-row item-row-first">
              <div class="left">
                <div class="first-item-title">ガス基本料金</div>
              </div>

              <div class="right">
                <div class="input">
                  <el-form-item prop="garBasicCharge" ref="garBasicChargeRef">
                    <el-input
                      v-model="gasForm.garBasicCharge"
                      type="text"
                      @blur="checkValidValue(gasForm, 'garBasicCharge')"
                    />
                  </el-form-item>
                </div>

                <div class="unit">円</div>
              </div>
            </div>
          </div>

          <div class="item item-content">
            <div class="item-header">従量単価</div>
            <div class="item-row-wrapper">
              <div class="item-row" v-for="(item, index) in gasForm.dataDemo" :key="index">
                <div class="left">
                  <div class="input">
                    <el-form-item
                      :label="`${
                        gasForm.dataDemo[index - 1]
                          ? Number(gasForm.dataDemo[index - 1].name).toFixed(1)
                          : '0.0'
                      } ~ `"
                      :prop="'dataDemo.' + index + '.name'"
                      :ref="getItemRef(index, 'name')"
                    >
                      <el-input
                        v-model="item.name"
                        type="text"
                        @blur="checkValidValue(item, 'name', index)"
                      />
                    </el-form-item>
                  </div>

                  <div class="unit">m3</div>
                </div>

                <div class="right">
                  <div class="input">
                    <el-form-item
                      :prop="'dataDemo.' + index + '.value'"
                      :ref="getItemRef(index, 'value')"
                    >
                      <el-input
                        v-model="item.value"
                        type="text"
                        @blur="checkValidValue(item, 'value', index)"
                      />
                    </el-form-item>
                  </div>

                  <div class="unit">円/m3</div>
                </div>
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
                    <el-form-item prop="lastValue" ref="lastValueRef">
                      <el-input
                        v-model="gasForm.lastValue"
                        type="text"
                        @blur="checkValidValue(gasForm, 'lastValue')"
                      />
                    </el-form-item>
                  </div>

                  <div class="unit">円/m3</div>
                </div>
              </div>

              <el-button
                class="del-btn custom-button-type"
                @click="deleteItem"
                :disabled="gasForm.dataDemo.length <= 1"
                >削除</el-button
              >
            </div>
          </div>

          <div class="item add-item">
            <el-button class="custom-button-type" type="primary" @click="addItem"
              >料金段階追加</el-button
            >
          </div>

          <el-form-item>
            <el-button class="custom-button-type" type="primary" @click="submitForm(ruleFormRef)"
              >保存</el-button
            >
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

  &-form {
    height: 100%;
  }

  .last-item {
    display: flex;
    gap: 12px;
    position: relative;

    .del-btn {
      position: absolute;
      right: -100px;

      &.is-disabled {
        opacity: 0.6;
        cursor: not-allowed !important;
        background: var(--gradient-bg-btn);
      }
    }

    .item-row {
      width: 100%;
      justify-content: space-between;
    }
  }
  .item-row-first {
    width: 100%;
    justify-content: space-between;
    position: relative;
    align-items: center;

    .left {
      margin-bottom: 18px;
    }

    &::before {
      content: '';
      width: 94%;
      height: 1px;
      background-color: #000;
      position: absolute;
      bottom: 0;
      left: 3%;
    }
  }

  .item-row {
    display: flex;
    gap: 12px;
    min-width: 600px;
    justify-content: space-between;

    .solid-line {
      width: 100%;
      height: 1px;
      background-color: #000;
    }

    .right {
      min-width: 200px;
    }
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
  }

  .item-header {
    margin-top: 16px;
  }

  .wrapper {
    .header {
      font-weight: bold;
      margin-bottom: 18px;
    }
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
    margin-left: 0 !important;
    display: flex;
    justify-content: center;

    button {
      width: 200px;
      height: 48px;
      margin-top: 60px;

      span {
        font-size: 20px;
      }
    }
  }
  :deep(.el-form-item .el-form-item__content) {
    width: 150px;
  }

  :deep(.el-input__wrapper) {
    border: 1px solid #000;
    border-radius: unset;
    width: 100px;
  }
}
</style>
