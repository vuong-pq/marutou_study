<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { reactive, ref } from 'vue'

const ruleFormRef = ref<FormInstance>()

withDefaults(
  defineProps<{
    isModeEdit: boolean
  }>(),
  {
    isModeEdit: false
  }
)

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
            <el-form-item label="販売店名" prop="email">
              <el-input v-model="ruleForm.email" type="text" />
            </el-form-item>
            <el-form-item label="ユーザーID" prop="id">
              <el-input v-model="ruleForm.id" type="text" />
            </el-form-item>
            <el-form-item label="パスワード" prop="password">
              <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
              <el-button v-if="!isModeEdit" type="default" @click="submitForm(ruleFormRef)"
                >登録</el-button
              >
              <div v-else class="edit-actions">
                <el-button class="btn btn-update">保存</el-button>
                <el-button class="btn btn-delete">削除</el-button>
              </div>
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
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: var(--item-gap);

  .content-register {
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
    margin-bottom: 40px;
    display: flex;
    align-items: center;
  }
  :deep(.el-input__wrapper) {
    min-width: 600px !important;
    height: 40px;
  }

  :deep(.el-form-item__content:has(.el-button)) {
    margin-left: 120px !important;
    margin-top: 24px;
    display: flex;
    justify-content: center;

    .el-button {
      width: 200px;
      height: 40px;
      transition: 0.3s;
      background-color: var(--button-background);
      cursor: pointer;
      color: var(--button-color);

      span {
        letter-spacing: 2px;
      }

      &:active {
        opacity: 0.7;
      }
    }
  }

  .edit-actions {
    display: flex;
    gap: 24px;

    .el-button.btn-delete {
      background-color: #fff;
      border: 1px solid var(--button-background);
      color: var(--button-background);

      &:active {
        opacity: 0.6;
      }
    }
  }
}
</style>
