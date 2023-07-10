<script setup lang="ts">
import router from '@/router'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { reactive, ref } from 'vue'
import { useUserAdminStore } from '@/stores/user_admin'
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modal'
import { MODAL_TYPE, ROUTER_NAME } from '@/constants'

const modalStore = useModalStore()
const userAdminStore = useUserAdminStore()
const { openModal } = modalStore

const { userAdminData } = storeToRefs(userAdminStore)
const ruleFormRef = ref<FormInstance>()
const showNewPassField = ref<Boolean>(false)

const listCompanies = reactive<any>([
  {
    label: 'Company 1',
    value: 'company 1'
  },
  {
    label: 'Company 2',
    value: 'company 2'
  }
])

const props = defineProps<{
  isModeEdit?: boolean
  isModeDelete?: boolean
  isAdminMode?: boolean
}>()

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
      console.log('submit!', formEl)
      //show popup then go back
      router.go(-1)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const deleteUser = () => {
  //set store
  router.push({ name: props.isAdminMode ? ROUTER_NAME.USER_ADMIN_DELETE : ROUTER_NAME.USER_DELETE })
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

const cancelDelete = () => {
  router.go(-1)
}

const submitDelete = () => {
  router.push({ name: props.isAdminMode ? ROUTER_NAME.USER_ADMIN_LIST : ROUTER_NAME.USER_LIST })
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
            label-width="180px"
            class="demo-ruleForm"
          >
            <el-form-item label="販売店名" prop="company" v-if="!props.isAdminMode">
              <el-input v-model="userAdminData.company" type="text" />
            </el-form-item>
            <el-form-item
              label="電力会社"
              v-if="!props.isModeEdit && !props.isModeDelete && !props.isAdminMode"
            >
              <el-select v-model="userAdminData.company" placeholder="Select company name">
                <el-option
                  v-for="company in listCompanies"
                  :key="company.name"
                  :label="company.label"
                  :value="company.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item
              :label="props.isAdminMode ? 'AdminユーザーID' : 'ユーザーID'"
              prop="userId"
            >
              <el-input v-model="userAdminData.userId" type="text" />
            </el-form-item>
            <el-form-item
              class="new-pass"
              :class="{ active: showNewPassField || (!props.isModeDelete && !props.isModeEdit) }"
              label="パスワード"
              prop="pass"
            >
              <el-input v-model="userAdminData.pass" type="text" />
            </el-form-item>
            <el-form-item v-if="props.isModeDelete" label="削除理由" prop="deleteMess">
              <el-input
                class="custom-scroll-bar"
                v-model="userAdminData.deleteMess"
                :rows="4"
                resize="none"
                type="textarea"
                placeholder="Please input"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                v-if="!props.isModeEdit && !props.isModeDelete"
                type="default"
                @click="submitForm(ruleFormRef)"
                >登録</el-button
              >
              <div v-if="props.isModeEdit" class="edit-actions">
                <el-button class="btn btn-update" @click="submitForm(ruleFormRef)">保存</el-button>
                <el-button
                  class="btn btn-new-pass"
                  :class="{ disabled: showNewPassField }"
                  @click="addNewPass"
                  :disabled="showNewPassField"
                  >Add new password</el-button
                >
                <el-button class="btn btn-delete" @click="deleteUser">削除</el-button>
              </div>
              <div v-if="props.isModeDelete" class="edit-actions">
                <el-button class="btn btn-update" @click="submitDelete()">キャンセル</el-button>
                <el-button class="btn btn-delete" @click="cancelDelete">削除</el-button>
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

    &:has(.el-textarea) {
      align-items: flex-start;
    }
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

:deep(.el-textarea__inner) {
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }

  &::-webkit-scrollbar-corner {
    background-color: #f1f1f1;
  }
}
@keyframes changeMaxHeight {
  to {
    max-height: 300px;
    overflow: unset;
  }
}
</style>
