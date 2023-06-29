<script lang="ts" setup>
import { reactive, ref } from 'vue'
import FormItemComponent from './FormItemComponent.vue'
import LABEL from '@/constants/label'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import type { FormItem } from '@/constants/types'
import type { FormActions } from '@/constants/types'

const props = withDefaults(
  defineProps<{
    fData?: {
      [key: string]: any
    }
    fItems: FormItem[][]
    fSize?: string
    fRules?: FormRules
    fActions?: FormActions
    isFilterHeader?: boolean
  }>(),
  {
    isFilterHeader: false
  }
)

const formSize = ref(props.fSize || 'default')
const formRef = ref<FormInstance>()

const formData: { [key: string]: any } = reactive(props.fData || {})

const { cancel, reset, submit } = props.fActions || {}

const visibleSubmitBtn = typeof submit?.visible === 'boolean' ? submit?.visible : true
const visibleSubBtn = cancel?.visible || reset?.visible
const lblSubBtn = cancel?.visible
  ? cancel.label || LABEL.COMMON.FORM.CANCEL
  : reset?.visible
  ? reset.label || LABEL.COMMON.FORM.RESET
  : ''

const updateVal = (key: string | number, newVal: any) => {
  formData[key] = newVal
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return

  await formEl.validate((valid, fields) => {
    const { onSuccess, onError } = submit || {}

    if (valid) {
      if (onSuccess) {
        onSuccess(formData)
      }
    } else {
      if (onError) {
        onError(fields)
      }
    }
  })
}

const subAction = (formEl: FormInstance | undefined) => {
  if (cancel?.visible && typeof cancel.onCancel === 'function') {
    return cancel.onCancel()
  } else {
    resetForm(formEl)
  }
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

defineExpose({
  submitForm: () => submitForm(formRef.value),
  resetForm: () => resetForm(formRef.value)
})
</script>

<template>
  <el-form
    ref="formRef"
    :model="formData"
    :rules="fRules"
    label-width="120px"
    class="demo-formData"
    :size="formSize"
    status-icon
  >
    <el-row v-for="(rowItems, index) in fItems" :key="index" class="form-row">
      <el-col v-for="item in rowItems" :key="item.key" :span="24 /   rowItems.length">
        <FormItemComponent
          :f-item="item"
          :f-model="formData[item?.key || '']"
          :updateVal="updateVal"
          :isFilterHeader="isFilterHeader"
        />
      </el-col>
    </el-row>

    <el-form-item v-if="visibleSubmitBtn || visibleSubBtn">
      <el-button v-if="visibleSubmitBtn" type="primary" @click="submitForm(formRef)">
        {{ fActions?.submit?.label || LABEL.COMMON.FORM.SUBMIT }}
      </el-button>

      <el-button v-if="visibleSubBtn" @click="subAction(formRef)">
        {{ lblSubBtn }}
      </el-button>
    </el-form-item>
  </el-form>
</template>
