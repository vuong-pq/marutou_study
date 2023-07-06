<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import LABEL from '@/constants/label'
import { SwitchButton } from '@element-plus/icons-vue'
import { getSessionStorageByItem } from '@/constants/utils'
import lodash from 'lodash'
import { ref } from 'vue'

import BreadCrumb from '@/views/admin/components/BreadCrumb.vue'

const { isEmpty } = lodash
const currentScreenName = ref<string>('')

const token = ref(getSessionStorageByItem('USER_LOGIN'))

const { state } = storeToRefs(useAuthStore())

const { logout } = useAuthStore()
</script>

<template>
  <div
    v-if="!isEmpty(token) && String(state.roleUser) === LABEL.COMMON.NUMBER.ONE"
    style="
      display: flex;
      justify-content: end;
      background-color: #44546a;
      min-height: 50px;
      align-items: center;
      color: white;
    "
  >
    <div style="padding-right: 20px">
      ユーザー1 &nabla;&nbsp;&nbsp;&nbsp;
      <el-button @click="logout"
        >ログアウト
        <el-icon style="margin-left: 10px"><SwitchButton color="red" size="20" /></el-icon
      ></el-button>
    </div>
  </div>
  <BreadCrumb
    v-model:currentScreenName="currentScreenName"
    v-if="!isEmpty(token) && String(state.roleUser) === LABEL.COMMON.NUMBER.ONE"
  />
</template>

<style lang="scss" scoped></style>
