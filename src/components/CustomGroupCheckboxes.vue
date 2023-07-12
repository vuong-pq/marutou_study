<script setup lang="ts">
import { CheckedIcon } from '@/assets/icons'
import { computed } from 'vue'

const props = defineProps<{
  dataVModal: any
  data: any
  config?: { class: string }
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

const checkActiveCheckbox = (item: string) => {
  return updateDataVModel.value.includes(item)
}

const changeChecked = (item: string) => {
  if (checkActiveCheckbox(item)) {
    const indexFound = updateDataVModel.value.indexOf(item)
    updateDataVModel.value.splice(indexFound, 1)
  } else {
    updateDataVModel.value.push(item)
  }
}
</script>

<template>
  <el-checkbox-group v-model="updateDataVModel" class="custom-checkbox-group">
    <div class="custom-checkbox" v-for="item in props.data" :key="item">
      <div
        class="checkbox-square"
        :class="{ active: checkActiveCheckbox(item) }"
        @click="changeChecked(item)"
      >
        <CheckedIcon class="icon" v-if="checkActiveCheckbox(item)" />
      </div>

      <el-checkbox :class="props?.config?.class || ''" :label="item" />
    </div>
  </el-checkbox-group>
</template>

<style lang="scss" scoped>
.custom-checkbox-group {
  padding-left: 5px;

  .custom-checkbox {
    position: relative;

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
      }

      &.active {
        background: #b0c4e7;
      }
    }
  }
}
</style>
