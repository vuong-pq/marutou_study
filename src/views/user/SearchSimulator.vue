<script setup lang="ts">
import router from '@/router'
import { ref, computed } from 'vue'
const dataDefault = ref({
  from: '',
  to: '',
  showSearch: false
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
const tableData = ref<any>(
  new Array(60).fill(0).map((item, index) => {
    return {
      registered_date: '1/Jan/2022 12:00:00',
      registered_na: 'Preparer ' + index,
      updated_date: '1/Jan/2022 12:00:00',
      updated_na: 'Preparer ' + index,
      request_header: '202201-INVREQ-0000' + index,
      request_detail: '001',
      company_na: 'Company A',
      target_month: '202201',
      invoice: 'INV0001',
      description: 'Invoice AAA',
      preparer: 'PIC ' + index,
      status: 'InvoiceStatus1',
      due_date: '1/Jan/2022'
    }
  })
)
let currentPageData = computed(() => {
  return getCurrentPageData(tableData.value)
})

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
}
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">シミュレーション情報登録</div>
  <div class="view-layout">
    <div class="view-search mt-10">
      <div class="flex-space-between">
        <span class="w-20-percent">出力日付</span>
        <div class="d-flex">
          <el-date-picker v-model="dataDefault.from" type="date" />
          <span class="p5-left-right">~</span>
          <el-date-picker v-model="dataDefault.to" type="date" />
        </div>
        <div>
          <el-button class="btn-search" @click="dataDefault.showSearch = true">検索 </el-button>
        </div>
      </div>
      <div class="content-search">
        <hr />
        <div class="header-table">
          <div class="w-35-percent font-weight-bold">出力日付</div>
          <div class="w-35-percent font-weight-bold">お客様名</div>
          <div class="w-30-percent"></div>
        </div>
        <hr />
        <div class="content-table" v-show="dataDefault.showSearch">
          <div class="d-flex mt-10">
            <div class="w-35-percent font-weight-bold">2023年6月2日</div>
            <div class="w-35-percent font-weight-bold">Company ABC</div>
            <div class="w-30-percent">
              <el-button class="btn-browse">閲覧 </el-button>
            </div>
          </div>
          <div class="d-flex mt-10">
            <div class="w-35-percent font-weight-bold">2023年6月2日</div>
            <div class="w-35-percent font-weight-bold">Company ABC</div>
            <div class="w-30-percent">
              <el-button class="btn-browse">閲覧 </el-button>
            </div>
          </div>
          <div class="d-flex mt-10">
            <div class="w-35-percent font-weight-bold">2023年6月2日</div>
            <div class="w-35-percent font-weight-bold">Company ABC</div>
            <div class="w-30-percent">
              <el-button class="btn-browse">閲覧 </el-button>
            </div>
          </div>
          <div class="d-flex mt-10 mb-10">
            <div class="w-35-percent font-weight-bold">2023年6月2日</div>
            <div class="w-35-percent font-weight-bold">Company ABC</div>
            <div class="w-30-percent">
              <el-button class="btn-browse">閲覧 </el-button>
            </div>
          </div>
        </div>
        <div class="content-table text-center" v-show="!dataDefault.showSearch">データなし.</div>
        <hr />
        <div class="pagination">
          <el-pagination
            v-model:current-page="currentPageData"
            v-model:page-size="pageSize"
            :page-sizes="[10, 30, 50]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next"
            :total="tableData.length"
            @size-change="handleSizeChange"
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
  width: 50vw;
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
