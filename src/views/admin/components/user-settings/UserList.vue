<script setup lang="ts">
import { ROUTER_NAME } from '@/constants'
import type { UserAdmin } from '@/constants/types'
import router from '@/router'
import { useUserAdminStore } from '@/stores/user_admin'
import { storeToRefs } from 'pinia'
import { ref, onMounted, computed } from 'vue'
// import { getUser } from '@/services/user'

const pageSize = ref(10)
const currentPage = ref(1)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)
// const dataApi = ref<any>()

const userAdminStore = useUserAdminStore()
const { userAdminData } = storeToRefs(userAdminStore)

const props = defineProps<{
  isAdminMode: boolean
}>()

// userAdminData to call api => set to listUser data
const listUser = ref<UserAdmin[]>(
  new Array(20).fill(0).map((item, index) => {
    return {
      userId: 'user id' + index,
      company: [],
      availability: index % 2 === 0 ? true : false
    }
  })
)

const getCurrentPageData = (listUser: any) => {
  return listUser.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value
  )
}

const currentPageData = computed(() => {
  return getCurrentPageData(listUser.value)
})
// const currentPageData = ref<number>(1)

const handleCurrentChange = async (val: number) => {
  // call api with the current page
  // currentPage.value = val
  // const params = { page: val }
  // // await getListUser(params)
}

const goBack = () => {
  console.log('submitted')
  router.go(-1)
}

const rowClick = (user: UserAdmin) => {
  // userAdminStore.setUserAdminData(user)
  console.log('row clicked', userAdminData)
  router.push({
    name: props.isAdminMode ? ROUTER_NAME.USER_ADMIN_EDIT : ROUTER_NAME.USER_EDIT
  })
}

// const getListUser = async (params?: any) => {
//   try {
//     const res: any = await getUser(params)
//     dataApi.value = [...res.users.data]
//     currentPageData.value = res.users.current_page
//   } catch (error) {
//     console.error(error)
//   }
// }
onMounted(async () => {
  // await getListUser()
})
</script>

<template>
  <div class="user-list">
    <div class="data">
      <div class="body">
        <el-table
          v-loading="!currentPageData?.length"
          element-loading-background="rgba(122, 122, 122, 0.4)"
          table-layout="fixed"
          ref="singleTableRef"
          :data="currentPageData"
          highlight-current-row
          @row-click="rowClick"
          class="user-list-table"
          row-class-name="user-row"
        >
          <el-table-column prop="user_id" label="ユーザーID" />
          <el-table-column prop="company" label="販売店様名" v-if="!props.isAdminMode" />
          <el-table-column label="使用可否">
            <template #default="scope">
              <div v-if="scope.row.availability" class="user-status">使用不可</div>
            </template>
          </el-table-column>
        </el-table>
        <!-- <el-table
          v-loading="!listUser?.length"
          element-loading-background="rgba(122, 122, 122, 0.4)"
          table-layout="fixed"
          ref="singleTableRef"
          :data="currentPageData"
          highlight-current-row
          @row-click="rowClick"
          class="user-list-table"
          row-class-name="user-row"
        >
          <el-table-column prop="userId" label="ユーザーID" />
          <el-table-column prop="company" label="販売店様名" v-if="!props.isAdminMode" />
          <el-table-column prop="availability" label="使用可否" />
        </el-table> -->
        <div class="pagination">
          <el-pagination
            v-model:current-page="currentPageData"
            v-model:page-size="pageSize"
            :page-sizes="[10, 30, 50]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next"
            :total="20"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <el-button class="submit" @click="goBack">戻る</el-button>
  </div>
</template>

<style lang="scss" scoped>
.user-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;

  :deep(td.el-table__cell) {
    border-bottom: unset !important;
  }

  :deep(th.el-table__cell) {
    border-bottom: 1px solid #000 !important;
    border-top: 1px solid #000 !important;
    color: #000;
    font-size: 20px;
    height: 60px;

    .cell {
      font-weight: bold;
    }
  }

  .user-list-table {
    display: flex;
    flex-direction: column;
    max-height: 600px;
    border-bottom: 1px solid #000;

    .user-status {
      color: red;
      font-weight: bold;
      width: fit-content;
      padding: 1px 12px;
      border-radius: 4px;
      border: 1px solid red;
      cursor: default;
    }
  }

  :deep(.el-table tr.user-row) {
    height: 60px;
    cursor: pointer;

    &:nth-child(odd) {
      background-color: #ebf1ff;
    }
  }

  .data {
    padding: 24px;
    min-width: 80%;
    flex-grow: 1;
    overflow: hidden;
    .header {
      font-weight: bold;
      margin-bottom: 12px;
      font-size: 20px;
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 24px;
      height: 100%;

      .item-device {
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: aquamarine;
        }
      }
    }
  }

  .submit {
    width: 240px;
    padding: 12px;
    height: 48px;
    margin-bottom: 24px;
    background-color: var(--button-background);
    color: var(--button-color);

    span {
      letter-spacing: 2px;
    }

    &:active {
      opacity: 0.7;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
