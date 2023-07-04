<script setup lang="ts">
import router from '@/router'
import { computed } from 'vue'
import { ArrowRightIcon } from '@/assets/icons'
import { useAuthStore } from '@/stores/auth'
import { PATH_NAME, PATH_NAME_JP, SCREEN_NAME } from '@/constants'

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
  console.log('check value: ', router.currentRoute.value.params)
  const currentPath = router.currentRoute.value.path
  const pathArray = currentPath.split('/')
  pathArray.shift()
  if (String(state.roleUser) === '1') {
    pathArray.unshift('/')
  }
  const routeArr: any = []
  pathArray.forEach((path) => {
    const pathKeys = Object.keys(PATH_NAME)
    pathKeys.forEach((key) => {
      if (PATH_NAME[key as keyof typeof PATH_NAME] === path) {
        let title = PATH_NAME_JP[key as keyof typeof PATH_NAME_JP]
          ? PATH_NAME_JP[key as keyof typeof PATH_NAME_JP]
          : path
        //check if path name is device detail/new
        if (path === PATH_NAME.DEVICE_DETAIL) {
          if (currentPath.includes(PATH_NAME.ELECTRIC_EQUIPMENT)) {
            title = PATH_NAME_JP.DEVICE_DETAIL_ELECTRIC
          } else {
            title = PATH_NAME_JP.DEVICE_DETAIL_GAS_APP
          }
          console.log('device detail')
        }
        if (path === PATH_NAME.DEVICE_NEW) {
          if (currentPath.includes(PATH_NAME.ELECTRIC_EQUIPMENT)) {
            title = PATH_NAME_JP.DEVICE_DETAIL_ELECTRIC_NEW
          } else {
            title = PATH_NAME_JP.DEVICE_DETAIL_GAS_APP_NEW
          }
          console.log('device new')
        }
        if (path === PATH_NAME.POWER_COMPANY_DETAIL) {
          console.log('company detail')
        }
        routeArr.push({
          name: path,
          title: title
        })
        currentScreenNameValue.value = SCREEN_NAME[key as keyof typeof SCREEN_NAME]
      }
    })
  })
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
