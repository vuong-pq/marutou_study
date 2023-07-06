<script setup lang="ts">
import router from '@/router'
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'

const dataDefault = ref({
  a: '電気機器名',
  b: '機器効率',
  c: '初期費用'
})

const props = withDefaults(
  defineProps<{
    mode: boolean
  }>(),
  {
    mode: true
  }
)

interface EditForm {
  name: string
  effective: string
  price: string
}
const ruleForm = reactive<EditForm>({
  name: '電気機器名',
  effective: '機器効率',
  price: '初期費用'
})

const ruleFormRef = ref<FormInstance>()
const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the id again'))
  } else if (value !== ruleForm.name) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}
const validateEffective = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof ruleForm>>({
  name: [{ validator: validateName, trigger: 'blur' }],
  effective: [{ validator: validateEffective, trigger: 'blur' }],
  price: [{ validator: validateEffective, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.validate((valid) => {
    if (valid) {
      router.go(-1)
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">
    {{ props.mode ? 'ガス機器登録' : '電気機器登録' }}
  </div>
  <div class="view-layout">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="view-form">
      <div class="d-flex mt-50">
        <span class="w-200 font-weight-bold">{{ props.mode ? 'ガス機器名' : '電気機器名' }}</span>
        <el-form-item prop="name">
          <el-input class="input" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </div>
      <div class="d-flex mt-50">
        <span class="w-200 font-weight-bold">機器効率</span>
        <el-form-item prop="effective">
          <el-input class="input" v-model="ruleForm.effective"> </el-input>
        </el-form-item>
      </div>
      <div class="d-flex mt-50">
        <span class="w-200 font-weight-bold">初期費用</span>
        <el-form-item prop="price">
          <el-input class="input" v-model="ruleForm.price"> </el-input>
        </el-form-item>
      </div>

      <div class="flex-center text-center mt-200">
        <el-button class="btn-addition" @click="submitForm(ruleFormRef)">登録</el-button>
        <el-button class="btn-addition" @click="router.go(-1)">キャンセル</el-button>
      </div>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.view-layout {
  flex: 1;
  font-size: 20px;
}

.view-form {
  font-size: 20px;
  .input {
    :deep(.el-input__wrapper) {
      min-width: 300px !important;
      min-height: 40px;
    }
  }

  .flex-center {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .btn-addition {
    background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
    border: solid 1px #000;
    min-width: 200px;
    height: 40px;
    font-size: 20px;
  }
}
</style>
