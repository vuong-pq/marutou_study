<script setup lang="ts">
import { CheckedIcon } from '@/assets/icons'
import { computed } from 'vue'

const props = defineProps<{
  isShowValue: any
  actionChange?: (event: boolean) => void
  config: { class?: string; label: string }
}>()

const emit = defineEmits(['update:isShowValue'])

const updateShowPass = computed({
  get() {
    return props.isShowValue
  },
  set(value: boolean) {
    emit('update:isShowValue', value)
  }
})

const actionChangeCheckbox = (isShowValue: boolean) => {
  if (props.actionChange && typeof props.actionChange === 'function') {
    props.actionChange(isShowValue)
  }
}

const changeChecked = () => {
  actionChangeCheckbox(!updateShowPass.value)
  updateShowPass.value = !updateShowPass.value
}
</script>

<template>
  <div class="custom-checkbox">
    <div class="checkbox-square" :class="{ active: props.isShowValue }" @click="changeChecked">
      <CheckedIcon class="icon" v-if="props.isShowValue" />
    </div>

    <el-checkbox
      v-model="updateShowPass"
      :class="props.config?.class || ''"
      :label="props.config.label"
      @change="actionChangeCheckbox($event)"
    />
  </div>
</template>

<style lang="scss" scoped>
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
    cursor: pointer;
    transition: 0.3s;

    .icon {
      width: 16px;
      height: 16px;
    }

    &.active {
      background: #b0c4e7;
    }
  }
}
</style>
