<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { reactive, ref } from 'vue'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(Number(value))) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        return
      }
    }
  }, 0)
}

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.email !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('email', () => null)
    }
    return
  }
}

const validateId = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.email) {
    callback(new Error("Two inputs don't match!"))
  } else {
    return
  }
}
interface User {
  email: string
  id: string
  password: string
}
const ruleForm = reactive<User>({
  email: '',
  id: '',
  password: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  email: [{ validator: validateEmail, trigger: 'blur' }],
  id: [{ validator: validateId, trigger: 'blur' }],
  password: [{ validator: checkAge, trigger: 'blur' }]
})

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

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.resetFields()
// }
</script>

<template>
  <div class="register">
    <div class="new-user-registration">
      <div class="content-register">
        <div class="user-registration-form">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="200px"
            class="demo-ruleForm"
          >
            <el-form-item label="Company Name: " prop="email">
              <el-input v-model="ruleForm.email" type="text" />
            </el-form-item>
            <el-form-item label="User Id: " prop="id">
              <el-input v-model="ruleForm.id" type="text" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
              <el-button type="default" @click="submitForm(ruleFormRef)">Register</el-button>
              <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.new-user-registration {
  --item-gap: 8px;
  width: max-content;
  height: max-content;
  border: 1px solid #000;
  border-radius: 24px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: var(--item-gap);

  .content-register {
    background-color: #d6dce5;
    border-radius: inherit;
    padding: inherit;
    position: relative;
    // flex: 1;
    padding: 12px;
    min-height: 500px;
    display: flex;
    align-items: center;
  }
  .content-register:not(:last-child)::before {
    content: '';
    width: 96%;
    position: absolute;
    bottom: calc(var(--item-gap) / -2);
    height: 1px;
    background-color: #000;
  }
  :deep(.el-form-item) {
    margin-bottom: 25px;
  }
  :deep(.el-input__wrapper) {
    min-width: 600px !important;
  }
}
</style>
