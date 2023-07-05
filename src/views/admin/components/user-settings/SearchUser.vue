<script setup lang="ts">
import { ROUTER_NAME } from '@/constants'
import router from '@/router'
import { reactive, ref } from 'vue'
import { useUserAdminStore } from '@/stores/user_admin'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { storeToRefs } from 'pinia'

const userAdminStore = useUserAdminStore()
const { userAdminData } = storeToRefs(userAdminStore)
const { setUserAdminData } = userAdminStore

const ruleFormRef = ref<FormInstance>()

const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('This field is required'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof userAdminData>>({
  userId: [{ validator: validateName, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      setUserAdminData({ userId: userAdminData.value.userId })
      router.push({ name: ROUTER_NAME.USER_EDIT })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <div class="block-element">
    <el-form
      ref="ruleFormRef"
      :model="userAdminData"
      :rules="rules"
      label-width="120px"
      class="user-search-form"
    >
      <el-form-item label="ユーザーID" prop="userId">
        <el-input v-model="userAdminData.userId" type="text" />
      </el-form-item>
      <el-form-item>
        <el-button class="btn" @click.enter="submitForm(ruleFormRef)">検索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.block-element {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 200px 150px;
  background: aliceblue;
  border-radius: 12px;
  .user-search-form {
    display: flex;
    gap: 60px;
    flex-direction: column;
    align-items: center;
  }

  :deep(.el-input__wrapper) {
    height: 48px;
    border: 1px solid #000;
    border-radius: unset;
  }

  :deep(.el-form-item) {
    align-items: center;
  }
  :deep(.el-form-item__content:last-child) {
    margin-left: 0 !important;
  }

  :deep(.el-form-item__label) {
    display: inline-block;
    text-align: left;
    font-size: 20px;
  }
  :deep(.el-button) {
    width: 250px;
    height: 48px;
    font-size: 20px;
    background-color: var(--button-background);
    color: var(--button-color);

    span {
      letter-spacing: 2px;
    }

    &:active {
      opacity: 0.7;
    }
  }
}
</style>
