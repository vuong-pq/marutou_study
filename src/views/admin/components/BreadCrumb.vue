<script setup lang="ts">
import router from '@/router'
import { computed } from 'vue'
import { ArrowRightIcon } from '@/assets/icons'
import { useAuthStore } from '@/stores/auth'
import { PATH_NAME, PATH_NAME_JP, ROUTER_PATH, SCREEN_NAME } from '@/constants'
import { useCompanyStore } from '@/stores/company'
import { storeToRefs } from 'pinia'

const { powerCompanyDetailData } = storeToRefs(useCompanyStore())
const { state } = useAuthStore()

const props = defineProps<{
  currentScreenName: string
}>()

const emit = defineEmits(['update:currentScreenName'])

const currentScreenNameValue = computed({
  get() {
    return props.currentScreenName
  },
  set(newValue) {
    emit('update:currentScreenName', newValue)
  }
})

const arrayBreadcrumbs = computed(() => {
  const currentPath = router.currentRoute.value.path
  const pathArray = currentPath.split('/')
  pathArray.shift()
  const routeArr: any = []

  pathArray.forEach((path) => {
    const pathKeys = Object.keys(PATH_NAME)
    pathKeys.forEach((key) => {
      if (PATH_NAME[key as keyof typeof PATH_NAME] === path) {
        let title = PATH_NAME_JP[key as keyof typeof PATH_NAME_JP]
          ? PATH_NAME_JP[key as keyof typeof PATH_NAME_JP]
          : path
        let value = SCREEN_NAME[key as keyof typeof SCREEN_NAME]
        //check if path name is device detail/new
        if (path === PATH_NAME.DEVICE_DETAIL) {
          if (currentPath.includes(ROUTER_PATH.ELECTRIC_EQUIPMENT)) {
            title = PATH_NAME_JP.DEVICE_DETAIL_ELECTRIC
            value = SCREEN_NAME.DEVICE_DETAIL_ELECTRIC
          } else {
            title = PATH_NAME_JP.DEVICE_DETAIL_GAS_APP
            value = SCREEN_NAME.DEVICE_DETAIL_GAS_APP
          }
        }
        if (path === PATH_NAME.DEVICE_NEW) {
          if (currentPath.includes(ROUTER_PATH.ELECTRIC_EQUIPMENT)) {
            title = PATH_NAME_JP.DEVICE_DETAIL_ELECTRIC_NEW
            value = SCREEN_NAME.DEVICE_DETAIL_ELECTRIC_NEW
          } else {
            title = PATH_NAME_JP.DEVICE_DETAIL_GAS_APP_NEW
            value = SCREEN_NAME.DEVICE_DETAIL_GAS_APP_NEW
          }
        }
        if (path === PATH_NAME.POWER_COMPANY_DETAIL) {
          value = powerCompanyDetailData.value.title
        }
        // check if router is register/search/edit/list/delete of admin or user
        if (path === PATH_NAME.REGISTER) {
          if (currentPath.includes(ROUTER_PATH.USER_REGISTER)) {
            title = PATH_NAME_JP.USER_REGISTER
            value = SCREEN_NAME.USER_REGISTER
          } else {
            title = PATH_NAME_JP.USER_ADMIN_SEARCH
            value = SCREEN_NAME.USER_ADMIN_REGISTER
          }
        }
        if (path === PATH_NAME.SEARCH) {
          if (currentPath.includes(ROUTER_PATH.USER_SEARCH)) {
            title = PATH_NAME_JP.USER_SEARCH
            value = SCREEN_NAME.USER_SEARCH
          } else {
            title = PATH_NAME_JP.USER_ADMIN_SEARCH
            value = SCREEN_NAME.USER_ADMIN_SEARCH
          }
        }
        if (path === PATH_NAME.EDIT) {
          if (currentPath.includes(ROUTER_PATH.USER_EDIT)) {
            title = PATH_NAME_JP.USER_EDIT
            value = SCREEN_NAME.USER_EDIT
          } else {
            title = PATH_NAME_JP.USER_ADMIN_EDIT
            value = SCREEN_NAME.USER_ADMIN_EDIT
          }
        }
        if (path === PATH_NAME.LIST) {
          if (currentPath.includes(ROUTER_PATH.USER_LIST)) {
            title = PATH_NAME_JP.USER_LIST
            value = SCREEN_NAME.USER_LIST
          } else {
            title = PATH_NAME_JP.USER_ADMIN_LIST
            value = SCREEN_NAME.USER_ADMIN_LIST
          }
        }
        if (path === PATH_NAME.DELETE) {
          if (currentPath.includes(ROUTER_PATH.USER_DELETE)) {
            title = PATH_NAME_JP.USER_DELETE
            value = SCREEN_NAME.USER_DELETE
          } else {
            title = PATH_NAME_JP.USER_ADMIN_DELETE
            value = SCREEN_NAME.USER_ADMIN_DELETE
          }
        }
        routeArr.push({
          name: path,
          title: title
        })
        currentScreenNameValue.value = value
      }
    })
  })
  if (String(state.roleUser) === '1') {
    routeArr.unshift({ name: '/', title: 'ホームページ' })
  }

  return routeArr
})

const getToPath = (item: string) => {
  const arrayPath = [...arrayBreadcrumbs.value]
  const pathArray = arrayPath.map((item) => item.name)
  const indexItem = pathArray.indexOf(item)
  if (String(state.roleUser) === '1') {
    router.push('/' + pathArray.slice(1, indexItem + 1).join('/'))
  } else {
    router.push('/' + pathArray.slice(0, indexItem + 1).join('/'))
  }
}
</script>

<template>
  <div class="breadcrumb">
    <span
      class="item-breadcrumb"
      :class="{ active: idx === arrayBreadcrumbs.length - 1 }"
      v-for="(item, idx) in arrayBreadcrumbs"
      :key="idx"
    >
      <span @click="() => getToPath(item.name)">{{ item.title }}</span>
      <span class="icon" v-if="idx != arrayBreadcrumbs.length - 1"> <ArrowRightIcon /> </span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb {
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 4px;
  background-color: #ebf1ff;

  .item-breadcrumb {
    cursor: pointer;
    display: flex;
    gap: 4px;
    .icon {
      font-size: 18px;
      display: flex;
      align-items: center;
    }

    &:hover {
      color: #416def;
    }
    &.active {
      cursor: unset;
      color: #416def !important;
    }
  }
}
</style>
