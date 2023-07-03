<script setup lang="ts">
import { ref } from 'vue'
const dataDefault = ref({
  from: '',
  to: ''
})
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">シミュレーション情報登録</div>
  <div class="view-layout">
    <div class="view-search">
      <div class="flex-space-between">
        <span class="w-20-percent">出力日付</span>
        <div class="d-flex">
          <el-date-picker v-model="dataDefault.from" type="date" />
          <span class="p5-left-right">~</span>
          <el-date-picker v-model="dataDefault.to" type="date" />
        </div>
        <div><el-button class="btn-search">検索 </el-button></div>
      </div>
      <div class="content-search">
        <hr />
        <div class="header-table">
          <div class="w-35-percent font-weight-bold">出力日付</div>
          <div class="w-35-percent font-weight-bold">お客様名</div>
          <div class="w-30-percent"></div>
        </div>
        <hr />
        <div class="content-table">
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
        <hr />
        <div class="text-center font-weight-bold mt-10">1 2 3 次ページ＞</div>
        <div class="text-center m-top-bottom50">
          <el-button class="font-weight-bold btn-back">閲覧 </el-button>
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

.btn-search {
  background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
  border: solid 1px #000;
  min-width: 80px;
  margin-left: 100px;
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
}

.m-top-bottom50 {
  margin: 50px 0;
}
.content-search {
  margin-left: 20%;
  margin-top: 30px;
  .header-table {
    padding: 5px 40px;
    display: flex;
  }
  .content-table {
    padding: 5px 40px;
  }
}
</style>
