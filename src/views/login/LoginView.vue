<script setup lang="ts">
import FormComponent from '@/components/base/FormComponent.vue'
import { FORM_ITEM_TYPE } from '@/constants'
import { useAuthStore } from '@/stores/auth'
import type { FormActions, FormItem } from '@/constants/types'
import type { FormRules } from 'element-plus/lib/components/index.js'

const { login, state } = useAuthStore()

const formItems: FormItem[][] = [
  [
    {
      key: 'username',
      label: 'ID',
      type: FORM_ITEM_TYPE.INPUT
    }
  ],
  [
    {
      key: 'password',
      label: 'Password',
      type: FORM_ITEM_TYPE.INPUT_PASSWORD
    }
  ]
]

const formRules: FormRules = {
  username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input password', trigger: 'blur' }]
}

const formActions: FormActions = {
  submit: {
    visible: true,
    label: 'Login',
    onSuccess: login
  }
}
</script>

<template>
  <div class="view-layout">
    <div class="login-screen">
      <div class="login-form">
        <div class="login-title">Login</div>
        <FormComponent :f-items="formItems" :f-rules="formRules" :f-actions="formActions" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-screen {
  background-color: white;
  border-radius: 5px;
  width: 50vw;
  height: 50vh;
  position: relative;
  border: 1px solid #000;
}
.login-title {
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  top: 8px;
  left: 20px;
}
.login-form {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form .el-form {
  width: 450px;
}

:deep(.el-form-item--default .el-form-item__content) {
  justify-content: center !important;
  .el-button {
    min-width: 120px !important;
  }
}
</style>
