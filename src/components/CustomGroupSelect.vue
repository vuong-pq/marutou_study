<script setup lang="ts">
import { CheckedIcon, RadioCheckedIcon } from '@/assets/icons'
import { computed } from 'vue'

const props = defineProps<{
  dataVModal: any
  data: any
  config?: { class: string }
  type: string
}>()

const emit = defineEmits(['update:dataVModal'])

const updateDataVModel = computed({
  get() {
    return props.dataVModal
  },
  set(value: any) {
    emit('update:dataVModal', value)
  }
})
const checkActive = (item: string) => {
  if (props.type === 'checkbox') {
    return updateDataVModel.value.includes(item)
  } else {
    return updateDataVModel.value === item
  }
}

const changeChecked = (item: string) => {
  if (checkActive(item)) {
    const indexFound = updateDataVModel.value.indexOf(item)
    updateDataVModel.value.splice(indexFound, 1)
  } else {
    if (props.type === 'checkbox') {
      updateDataVModel.value.push(item)
    } else {
      updateDataVModel.value = item
    }
  }
}
</script>

<template>
  <component
    :is="props.type === 'checkbox' ? 'el-checkbox-group' : 'el-radio-group'"
    v-model="updateDataVModel"
    class="custom-checkbox-group"
    :class="props?.config?.class || ''"
  >
    <div class="custom-checkbox" v-for="item in props.data" :key="item">
      <div
        class="checkbox-square"
        :class="[
          props.type === 'checkbox' && checkActive(item) ? 'active-checkbox' : 'active-radio'
        ]"
        @click="changeChecked(item)"
      >
        <CheckedIcon class="icon" v-if="props.type === 'checkbox' && checkActive(item)" />
        <div class="icon icon-radio" v-if="props.type === 'radio' && checkActive(item)" />
      </div>

      <component :is="props.type === 'checkbox' ? 'el-checkbox' : 'el-radio'" :label="item" />
    </div>
  </component>
</template>

<style lang="scss" scoped>
.custom-checkbox-group {
  padding-left: 5px;

  .custom-checkbox {
    position: relative;
    display: flex;

    .checkbox-square {
      position: absolute;
      left: -6px;
      top: 50%;
      transform: translate(0, -50%);
      width: 24px;
      height: 24px;
      background: #fff;
      border: 2px solid #5e5c5c;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      cursor: pointer;

      .icon {
        width: 16px;
        height: 16px;
        &.icon-radio {
          background: #b0c4e7;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #fff;
        }
      }

      &.active-checkbox {
        background: #b0c4e7;
      }
      &.active-radio {
        border-radius: 50%;
      }
    }
  }
}
</style>
