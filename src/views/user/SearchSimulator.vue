<script setup lang="ts">
import router from '@/router'
import { ref, computed, reactive } from 'vue'
import { getListSimulator } from '@/services/simulator'
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js'
import { FORMAT } from '@/constants'
import { isEmpty, formatDate } from '@/constants/utils'

interface DataEx {
  tableData: any
  from: any
  to: any
  showSearch: boolean
}

const dataDefault = reactive<DataEx>({
  from: null,
  to: null,
  showSearch: false,
  tableData: []
})

const pageSize = ref(10)
const currentPage = ref(1)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const getCurrentPageData = (tableData: any) => {
  return tableData.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value
  )
}

let currentPageData = computed(() => {
  return getCurrentPageData(dataDefault.tableData)
})

const handleCurrentChange = (val: number) => {
  currentPage.value = val
}

const handleSearch = async () => {
  const params = {
    from: null,
    to: null
  }
  if (!isEmpty(dataDefault.from)) {
    params.from = formatDate(dataDefault.from, FORMAT.YYYY_MM_DD)
  }
  if (!isEmpty(dataDefault.to)) {
    params.to = formatDate(dataDefault.to, FORMAT.YYYY_MM_DD)
  }
  const response: { [key: string]: any } = await getListSimulator(params)
  dataDefault.showSearch = true

  console.log(formatDate(response?.simulationHistorys?.data[0].created_at, FORMAT.YYYY_MM_DD_JP))
  dataDefault.tableData = response.simulationHistorys.data
  dataDefault.tableData.forEach((element: any) => {
    element.date_time_create = formatDate(element.created_at, FORMAT.YYYY_MM_DD_JP)
  })
}
const handleClickOpen = (val: any) => {
  window.open(val)
}

const ruleFormRef = ref<FormInstance>()
const validateFrom = (rule: any, value: any, callback: any) => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  if (isEmpty(value)) {
    callback(new Error('Please input the from again'))
  } else if (value.getTime() > date.getTime()) {
    callback(new Error('date cannot be greater than current date'))
  } else {
    callback()
  }
}
const validateTo = (rule: any, value: any, callback: any) => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  if (!isEmpty(value) && value.getTime() > date.getTime()) {
    callback(new Error('date cannot be greater than current date'))
  } else if (!isEmpty(dataDefault.from)) {
    if (!isEmpty(value) && value.getTime() <= dataDefault.from.getTime()) {
      callback(new Error(' date to cannot be less than from '))
    } else {
      callback()
    }
  } else {
    callback()
  }
}

const rules = reactive<FormRules<typeof dataDefault>>({
  from: [{ validator: validateFrom, trigger: 'none' }],
  to: [{ validator: validateTo, trigger: 'none' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.validate((valid) => {
    if (valid) {
      handleSearch()
      console.log('submit!')
    } else {
      return false
    }
  })
}
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">シミュレーション情報登録</div>
  <div class="view-layout">
    <div class="view-search mt-10">
      <el-form ref="ruleFormRef" :model="dataDefault" :rules="rules" class="flex-space-between">
        <span class="w-20-percent">出力日付</span>
        <div class="d-flex">
          <el-form-item prop="from">
            <el-date-picker v-model="dataDefault.from" type="date" />
          </el-form-item>
          <span class="p5-left-right">~</span>
          <el-form-item prop="to">
            <el-date-picker v-model="dataDefault.to" type="date" />
          </el-form-item>
        </div>
        <div>
          <el-button class="btn-search" @click="submitForm(ruleFormRef)">検索 </el-button>
        </div>
      </el-form>
      <div class="content-search">
        <hr />
        <div class="header-table">
          <div class="w-15-percent font-weight-bold">ID</div>
          <div class="w-30-percent font-weight-bold">出力日付</div>
          <div class="w-30-percent font-weight-bold">お客様名</div>
          <div class="w-25-percent"></div>
        </div>
        <hr />
        <div class="content-table" v-if="dataDefault.showSearch">
          <div class="d-flex mt-10" v-for="data in currentPageData">
            <div class="w-15-percent font-weight-bold">{{ data.id }}</div>
            <div class="w-30-percent font-weight-bold">{{ data.date_time_create }}</div>
            <div class="w-30-percent font-weight-bold">{{ data.customer_name }}</div>
            <div class="w-25-percent">
              <el-button class="btn-browse" @click="handleClickOpen(data.result_pdf_url)"
                >閲覧
              </el-button>
            </div>
          </div>
        </div>
        <div class="content-table text-center" v-else>データなし.</div>
        <hr />
        <div class="pagination">
          <el-pagination
            v-model:current-page="currentPageData"
            v-model:page-size="pageSize"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next"
            :total="dataDefault.tableData.length"
            @current-change="handleCurrentChange"
          />
        </div>
        <div class="text-center m-top-bottom50">
          <el-button class="font-weight-bold btn-back" @click="router.go(-1)">戻る </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-search {
  width: 65vw;
  font-size: 20px;
}

.p5-left-right {
  padding: 0 5px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}
.btn-search {
  background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
  border: solid 1px #000;
  min-width: 80px;
  margin-left: 100px;
  font-size: 20px;
}
.btn-browse {
  background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
  border: solid 1px #000;
  min-width: 80px;
}

.btn-back {
  background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
  border: solid 1px #000;
  min-width: 100px;
  height: 40px;
  font-size: 20px;
}

.m-top-bottom50 {
  margin: 50px 0;
}
.content-search {
  margin-left: 20%;
  margin-top: 40px;
  .header-table {
    padding: 5px 40px;
    display: flex;
  }
  .content-table {
    min-height: 200px;
    padding: 5px 40px;
  }
}
</style>
