<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { reactive, ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import { MODAL_TYPE } from '@/constants'

const modalStore = useModalStore()
const { openModal } = modalStore
const { login, state } = useAuthStore()

interface UserLogin {
  email: string
  password: string
}
const ruleForm = reactive<UserLogin>({
  email: '',
  password: ''
})

const ruleFormRef = ref<FormInstance>()
const validateId = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the id again'))
  } else if (value !== state.email) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof state>>({
  email: [{ validator: validateId, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.validate((valid) => {
    if (valid) {
      const params = {
        email: state.email,
        password: state.password
      }
      login(params)
      console.log('submit!')
    } else {
      console.log('error submit!')
      openModal({
        open: true,
        title: 'Login error',
        type: MODAL_TYPE.ERROR,
        content: 'error submit!',
        okText: 'Close'
      })
      return false
    }
  })
}
</script>

<template>
  <div class="view-layout">
    <div class="login-screen">
      <div class="login-form">
        <div class="login-title">ログイン</div>

        <el-form ref="ruleFormRef" :model="state" :rules="rules" class="detail-form">
          <div class="d-flex">
            <span class="label-login"><span class="required">*</span>ID</span>

            <el-form-item prop="email">
              <el-input class="input-login" name="userName" v-model="state.email" type="text" />
            </el-form-item>
          </div>

          <div class="d-flex mt-10">
            <span class="label-login">
              <span class="required">*</span>
              パスワード</span
            >
            <el-form-item prop="password">
              <el-input
                class="input-login"
                name="password"
                v-model="state.password"
                type="password"
              />
            </el-form-item>
          </div>

          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">ログイン</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-layout {
  margin: auto;
  font-size: 20px;
}

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
  .label-login {
    min-width: 150px;
    font-size: 20px;
    text-align: right;
    margin-right: 15px;
  }
  .input-login {
    min-width: 300px;
    :deep(.el-input__wrapper) {
      min-height: 40px;
    }
  }
  .required {
    color: red;
    margin-right: 5px;
  }
}
.login-form .el-form {
  width: 450px;
}
.el-form-item:deep(.el-form-item__content) {
  flex-direction: column;
  gap: 30px;
}

.el-button {
  min-width: 200px !important;
  height: 40px;
  margin-left: 200px;
  margin-top: 10px;
}
</style>
