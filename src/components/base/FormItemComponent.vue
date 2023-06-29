<script setup lang="ts">
import { computed, reactive, watch, onMounted } from 'vue'
import { FORM_ITEM_ELEMENT, FORM_ITEM_TYPE, SPECIAL_FORM_TYPE } from '@/constants'
import type { FormItem } from '@/constants/types'

const props = defineProps<{
  fItem: FormItem
  fModel: any
  isFilterHeader: boolean
  updateVal: (key: string | number, newVal: any) => void
}>()

const {
  key,
  label,
  type,
  options,
  placeholder,
  activeLbl,
  inactiveLbl,
  rangeSeparator = '~',
  startPlaceholder = '',
  endPlaceholder = '',
  listinput
} = props.fItem || {}
const fModel: any = computed({
  get() {
    return props.fModel
  },
  set(newValue) {
    if (key) {
      props.updateVal(key, newValue)
    }
  }
})

let requestValue = reactive({
  input1: props.fItem.listinput ? props.fItem.listinput[0].value : '',
  input2: props.fItem.listinput ? props.fItem.listinput[1].value : ''
})

watch(requestValue, (newVal) => {
  console.log(key)
  if (key) {
    props.updateVal(key, requestValue)
  }
})

const getTypeInput = () => {
  switch (type) {
    case FORM_ITEM_TYPE.DATE_PICKER:
      return 'date'

    case FORM_ITEM_TYPE.DATE_RANGE:
      return 'daterange'

    case FORM_ITEM_TYPE.INPUT_PASSWORD:
      return 'password'

    default:
      return 'text'
  }
}

const querySearchAutocomplete = (queryString: string, callback: any) => {
  const results =
    queryString && Array.isArray(options) ? options.filter(createFilter(queryString)) : options
  // call callback function to return suggestions
  callback(results)
}

const createFilter = (queryString: string) => {
  return (option: any) => {
    return option?.label?.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}
</script>

<template>
  <el-form-item :prop="key" :label="label" :class="`${isFilterHeader ? 'filter-header' : ''}`">
    <component
      v-if="!SPECIAL_FORM_TYPE.includes(type || '') && type !== FORM_ITEM_TYPE.DOUBLE_INPUT"
      v-model="fModel"
      :is="FORM_ITEM_ELEMENT[type || '']"
      :placeholder="placeholder"
      value-key="label"
      :fetch-suggestions="
        type === FORM_ITEM_TYPE.AUTOCOMPLETE ? querySearchAutocomplete : undefined
      "
      :clearable="type === FORM_ITEM_TYPE.AUTOCOMPLETE"
      :type="getTypeInput()"
      :range-separator="rangeSeparator"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :active-text="activeLbl"
      :inactive-text="inactiveLbl"
      style="width: 100%"
    />

    <el-select
      v-else-if="type === FORM_ITEM_TYPE.SELECT"
      v-model="fModel"
      :placeholder="placeholder"
      :prop="key"
      style="width: 100%"
    >
      <el-option
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>

    <el-checkbox-group
      v-else-if="type === FORM_ITEM_TYPE.CHECKBOX"
      v-model="fModel"
      :placeholder="placeholder"
      :prop="key"
    >
      <el-checkbox
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-checkbox-group>

    <el-radio-group
      v-else-if="type === FORM_ITEM_TYPE.RADIO"
      v-model="fModel"
      :placeholder="placeholder"
      :prop="key"
    >
      <el-radio v-for="option in options" :key="option.value" :label="option.value" size="large">{{
        option.label
      }}</el-radio>
    </el-radio-group>

    <el-row v-else-if="type === FORM_ITEM_TYPE.DOUBLE_INPUT && listinput?.length">
      <el-col :span="11">
        <el-input
          v-model="requestValue.input1"
          :placeholder="listinput[0]?.placeholder"
          :key="listinput[0]?.key"
        />
      </el-col>
      <el-col :span="2" class="text-center"> ~ </el-col>
      <el-col :span="11">
        <el-input
          v-model="requestValue.input2"
          :placeholder="listinput[1]?.placeholder"
          :key="listinput[1]?.key"
        />
      </el-col>
    </el-row>
  </el-form-item>
</template>

<style lang="scss" scoped>
.filter-header {
  margin-bottom: 8px;
}
.text-center {
  text-align: center;
}
</style>
