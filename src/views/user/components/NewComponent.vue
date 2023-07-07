<script setup lang="ts">
import router from '@/router'
import { ref, reactive } from 'vue'

import { ElMessageBox } from 'element-plus/lib/components/index.js'

const props = withDefaults(
  defineProps<{
    mode: boolean
  }>(),
  {
    mode: true
  }
)
const dataDefault = ref({
  a: '',
  b: ''
})

const options = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Option1',
    label: 'オプション1'
  },
  {
    value: 'Option2',
    label: 'オプション2'
  },
  {
    value: 'Option3',
    label: 'オプション3'
  },
  {
    value: 'Option4',
    label: 'オプション4'
  }
]

const handleDelete = () => {
  ElMessageBox.confirm('You sure Delete!', 'Confirm', { confirmButtonText: 'Delete' })
    .then(({ value }) => {
      router.go(-1)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled'
      })
    })
}

interface NewForm {
  name: string
  price: string
}
const ruleForm = reactive<NewForm>({
  name: '',
  price: ''
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
const validatePrice = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof ruleForm>>({
  name: [{ validator: validateName, trigger: 'blur' }],
  price: [{ validator: validatePrice, trigger: 'blur' }]
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
    {{ props.mode ? 'ガス機器登録' : '電気機器編集' }}
  </div>
  <div class="view-layout">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="view-form">
      <div class="d-flex mt-50">
        <span class="w-300 font-weight-bold">{{ props.mode ? 'ガス機器名' : '電気機器名' }} </span>
        <!-- <el-input v-model="dataDefault.a"></el-input> -->
        <el-form-item prop="name" class="w-100-percent">
          <el-select
            v-model="ruleForm.name"
            class="m-2 w-100-percent input"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </div>
      <div class="d-flex mt-50">
        <span class="w-300 font-weight-bold">電気機器名</span>
        <el-form-item prop="price" class="w-100-percent">
          <el-input class="input" v-model="ruleForm.price">初期費用 </el-input>
        </el-form-item>
      </div>
      <div class="flex-center text-center mt-200">
        <el-button class="btn-addition" @click="submitForm(ruleFormRef)">保存</el-button>
        <el-button class="btn-addition" @click="handleDelete">削除</el-button>
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
  .flex-center {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .input {
    :deep(.el-input__wrapper) {
      height: 40px;
    }
  }
  .btn-addition {
    background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
    border: solid 1px #000;
    min-width: 200px;
    height: 40px;
    font-size: 20px;
  }
}
.list-container {
  min-width: 600px;
  min-height: 400px;
  border: 1px solid #000;
  padding: 10px;
  .item-company {
    font-weight: bold;
    text-decoration: none;
    color: #000;
  }
}
</style>
