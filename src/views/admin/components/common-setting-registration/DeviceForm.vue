<script setup lang="ts">
import router from '@/router'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { ref, reactive } from 'vue'
import { useDeviceStore } from '@/stores/device'
import { storeToRefs } from 'pinia'

defineProps<{
  isNewForm: boolean
  isElectricEquipment: boolean
}>()

const store = useDeviceStore()

const { deviceData } = storeToRefs(store)

const ruleFormRef = ref<FormInstance>()

const validateField1 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof deviceData>>({
  name: [{ validator: validateField1, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  //add new item to list
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', deviceData.value)
      router.go(-1)
    } else {
      return false
    }
  })
}

const cancelForm = () => {
  console.log('cancel form')
  router.go(-1)
}
</script>

<template>
  <div class="device-form">
    <div class="form-wrapper">
      <el-form ref="ruleFormRef" :model="deviceData" :rules="rules" class="detail-form">
        <el-form-item :label="isElectricEquipment ? '電気機器名' : 'ガス機器名'" prop="name">
          <el-input v-model="deviceData.name" />
        </el-form-item>

        <el-form-item label="機器効率" prop="name">
          <el-input v-model="deviceData.name" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">{{
            !isNewForm ? '保存' : '登録'
          }}</el-button>
          <el-button @click="cancelForm" class="btn-cancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.device-form {
  :deep(.el-button) {
    width: 200px;
    height: 40px;
    background-color: var(--button-background);
    color: var(--button-color);

    span {
      letter-spacing: 2px;
    }

    &:active {
      opacity: 0.7;
    }

    &.btn-cancel {
      background-color: #fff;
      border: 1px solid var(--button-background);
      color: var(--button-background);

      &:active {
        opacity: 0.6;
      }
    }
  }

  padding: 175px;
  background: aliceblue;
  border-radius: 12px;

  :deep(.el-input__wrapper) {
    height: 40px;
    border-radius: unset;
    border: 1px solid #000;
  }

  :deep(.el-form-item__label) {
    min-width: 120px;
    text-align: left;
    display: inline-block;
  }

  :deep(.el-form-item:nth-child(2)) {
    margin-bottom: 32px;
  }
}
</style>
