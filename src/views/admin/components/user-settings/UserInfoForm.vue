<script setup lang="ts">
import router from '@/router'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { reactive, ref } from 'vue'
import { useUserAdminStore } from '@/stores/user_admin'
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modal'
import { MODAL_TYPE } from '@/constants'

const modalStore = useModalStore()
const { openModal } = modalStore

const { userAdminData } = storeToRefs(useUserAdminStore())

const ruleFormRef = ref<FormInstance>()
const showNewPassField = ref<Boolean>(false)

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
    callback(new Error('Please input the age'))
  } else {
    callback()
  }
}

const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const validateId = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof userAdminData>>({
  name: [{ validator: validateName, trigger: 'blur' }],
  userId: [{ validator: validateId, trigger: 'blur' }],
  pass: [{ validator: checkAge, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      //show popup then go back
      router.go(-1)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const cancelForm = () => {
  router.go(-1)
}

const addNewPass = () => {
  openModal({
    open: true,
    type: MODAL_TYPE.INFO,
    title: 'Confirm',
    content: 'Are you sure to add new password?',
    okText: 'Yes',
    cancelText: 'No',
    onOk: () => {
      showNewPassField.value = true
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
            :model="userAdminData"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="販売店名" prop="name">
              <el-input v-model="userAdminData.name" type="text" />
            </el-form-item>
            <el-form-item label="ユーザーID" prop="userId">
              <el-input v-model="userAdminData.userId" type="text" />
            </el-form-item>
            <el-form-item
              class="new-pass"
              :class="{ active: showNewPassField }"
              label="パスワード"
              prop="pass"
            >
              <el-input v-model="userAdminData.pass" type="text" />
            </el-form-item>
            <el-form-item>
              <el-button v-if="!isModeEdit" type="default" @click="submitForm(ruleFormRef)"
                >登録</el-button
              >
              <div v-else class="edit-actions">
                <el-button class="btn btn-update" @click="submitForm(ruleFormRef)">保存</el-button>
                <el-button
                  class="btn btn-new-pass"
                  :class="{ disabled: showNewPassField }"
                  @click="addNewPass"
                  :disabled="showNewPassField"
                  >Add new password</el-button
                >
                <el-button class="btn btn-delete" @click="cancelForm">削除</el-button>
              </div>
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

.new-pass {
  max-height: 0;
  overflow: hidden;

  &.active {
    animation: changeMaxHeight 1s forwards ease-in;
  }
}

.btn-new-pass.disabled {
  pointer-events: none;
  opacity: 0.7;
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
    padding: 12px;
    min-height: 500px;
    display: flex;
    align-items: center;
    padding: 150px 100px;
    background: aliceblue;
    border-radius: 12px;

    :deep(.el-form-item__label) {
      text-align: left;
      display: inline-block;
      font-size: 20px;
    }
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
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  :deep(.el-input__wrapper) {
    min-width: 600px !important;
    height: 40px;
  }

  :deep(.el-form-item__content:has(.el-button)) {
    margin-left: 0 !important;
    margin-top: 24px;
    display: flex;
    justify-content: center;

    .el-button {
      width: 250px;
      height: 48px;
      transition: 0.3s;
      background-color: var(--button-background);
      cursor: pointer;
      font-size: 20px;
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

@keyframes changeMaxHeight {
  to {
    max-height: 300px;
    overflow: unset;
  }
}
</style>
