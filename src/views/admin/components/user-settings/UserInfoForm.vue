<script setup lang="ts">
import router from '@/router'
import type { FormInstance } from 'element-plus/lib/components/index.js'
import { ref, computed, watch } from 'vue'
import { useUserAdminStore } from '@/stores/user_admin'
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modal'
import CustomCheckbox from '@/components/CustomCheckbox.vue'
import CustomGroupCheckboxes from '@/components/CustomGroupCheckboxes.vue'
import { LIST_CHECKBOXES_COMPANY, MODAL_TYPE, ROUTER_NAME } from '@/constants'

const modalStore = useModalStore()
const userAdminStore = useUserAdminStore()
const { openModal } = modalStore

const { userAdminData } = storeToRefs(userAdminStore)
const ruleFormRef = ref<FormInstance>()
const showNewPassField = ref<boolean>(false)

const props = defineProps<{
  isModeEdit?: boolean
  isModeDelete?: boolean
  isAdminMode?: boolean
}>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value && showNewPassField.value) {
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

const rules = computed(() => ({
  dealer: [{ validator: validateName, trigger: 'blur' }],
  userId: [{ validator: validateId, trigger: 'blur' }],
  pass: [{ validator: checkAge, trigger: 'blur' }]
}))

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', formEl)
      if (userAdminData.value.isBan) {
        openModal({
          open: true,
          type: MODAL_TYPE.WARNING,
          title: 'Warning',
          content: 'このユーザーは一時的に使用できません。',
          okText: 'Yes',
          cancelText: 'No',
          onOk: () => {
            console.log('call api edit')
          },
          onCancel: () => {
            userAdminData.value.isBan = false
          }
        })
      }
      //show popup then go back
      // router.go(-1)
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

const addNewPass = (isShowPassField: boolean) => {
  if (isShowPassField) {
    openModal({
      open: true,
      type: MODAL_TYPE.INFO,
      title: 'Confirm',
      content: 'Are you sure to add new password?',
      okText: 'Yes',
      cancelText: 'No',
      onCancel: () => {
        showNewPassField.value = false
      }
    })
  }
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
      <div class="content-register" :class="{ 'change-padding': props.isModeEdit }">
        <div class="user-registration-form">
          <el-form
            ref="ruleFormRef"
            :model="userAdminData"
            :rules="rules"
            label-width="170px"
            class="demo-ruleForm"
          >
            <el-form-item label="販売店名" prop="dealer" v-if="!props.isAdminMode">
              <el-input v-model="userAdminData.dealer" type="text" />
            </el-form-item>

            <el-form-item
              label="電力会社"
              prop="company"
              v-if="!props.isAdminMode && !props.isModeEdit && !props.isModeDelete"
            >
              <CustomGroupCheckboxes
                v-model:dataVModal="userAdminData.company"
                :data="LIST_CHECKBOXES_COMPANY"
                :config="{ class: 'checkbox-item' }"
              />
            </el-form-item>

            <el-form-item
              :label="props.isAdminMode ? 'AdminユーザーID' : 'ユーザーID'"
              prop="userId"
            >
              <el-input v-model="userAdminData.userId" type="text" />
            </el-form-item>

            <div class="form-item" :class="{ 'change-width': props.isModeEdit }">
              <el-form-item
                class="new-pass-input"
                label="パスワード"
                prop="pass"
                v-if="!props.isModeDelete"
              >
                <el-input v-model="userAdminData.pass" type="text" :disabled="!showNewPassField" />
              </el-form-item>

              <CustomCheckbox
                v-if="props.isModeEdit"
                v-model:isShowValue="showNewPassField"
                :actionChange="addNewPass"
                :config="{ label: 'add new pass' }"
              />
            </div>

            <el-form-item v-if="props.isModeEdit" prop="isBan">
              <CustomCheckbox
                v-model:isShowValue="userAdminData.isBan"
                :config="{ label: '使用不可' }"
              />
            </el-form-item>

            <el-form-item v-if="props.isModeDelete" label="削除理由" prop="deleteMess">
              <el-input
                class="custom-scroll-bar"
                v-model="userAdminData.deleteMess"
                :rows="6"
                resize="none"
                type="textarea"
                placeholder="Please input"
              />
            </el-form-item>

            <el-form-item>
              <el-button
                v-if="!props.isModeEdit && !props.isModeDelete"
                type="default"
                class="custom-button-type"
                :class="{ 'change-margin': props.isModeEdit }"
                @click="submitForm(ruleFormRef)"
                >登録</el-button
              >

              <div v-if="props.isModeEdit" class="edit-actions">
                <el-button class="custom-button-type change-margin" @click="submitForm(ruleFormRef)"
                  >保存</el-button
                >
                <el-button class="custom-button-type" @click="deleteUser">削除</el-button>
              </div>

              <div v-if="props.isModeDelete" class="edit-actions">
                <el-button class="custom-button-type" @click="submitDelete()">キャンセル</el-button>
                <el-button class="custom-button-type" @click="cancelDelete">削除</el-button>
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

:deep(.el-checkbox-group) {
  display: flex;
  flex-direction: column;
}

:deep(.el-input__wrapper) {
  border-radius: unset;
  border: 1px solid #000;
  height: 48px;
  width: 400px;
}

:deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
  color: #000;
  font-size: 20px;
}

:deep(.el-checkbox__input) {
  font-size: 20px;
  & + .el-checkbox__label {
    color: #000;
    font-size: 20px;
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
    padding: 20px 100px;
    background: aliceblue;
    border-radius: 12px;

    &.change-padding {
      padding: 20px 258px 20px 100px;
    }

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
    display: flex;
    align-items: center;

    &:has(.el-textarea) {
      align-items: flex-start;
    }

    &:has(.el-checkbox-group) {
      align-items: flex-start;
    }
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

  :deep(.el-form-item__content:has(.el-button.change-margin)) {
    margin-left: 160px !important;
  }

  .edit-actions {
    display: flex;
    gap: 24px;
  }

  .form-item {
    display: flex;
    align-items: center;
    gap: 20px;

    &.change-width {
      width: calc(100% + 164px);
    }

    .new-pass-input {
      flex-grow: 1;
    }

    .new-pass-checkbox {
      margin-bottom: 18px;
      position: relative;

      .checkbox-square {
        position: absolute;
        left: -4px;
        top: 50%;
        transform: translate(0, -50%);
        width: 24px;
        height: 24px;
        background: #fff;
        border: 1px solid #000;
        border-radius: 3px;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;

        .icon {
          width: 16px;
          height: 16px;
        }

        &.active {
          background: #ccc;
        }
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
</style>
