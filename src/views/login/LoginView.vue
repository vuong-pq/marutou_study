<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const { login, state } = useAuthStore()
</script>

<template>
  <div class="view-layout">
    <div class="login-screen">
      <div class="login-form">
        <div class="login-title">ログイン</div>
        <!-- <FormComponent :f-items="formItems" :f-rules="formRules" :f-actions="formActions" /> -->
        <el-form-item>
          <div class="d-flex">
            <span class="label-login"><span class="required">*</span>ID</span
            ><el-input class="input-login" />
          </div>
          <div class="d-flex">
            <span class="label-login">
              <span class="required">*</span>
              パスワード</span
            >
            <el-input class="input-login" />
          </div>
          <el-button type="primary" @click="login">ログイン</el-button>
        </el-form-item>
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
  margin-left: 150px;
  margin-top: 10px;
}
</style>
