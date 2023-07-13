<script setup lang="ts">
import router from '@/router'
// import type { ElTable } from 'element-plus/lib/components/index.js'
import { ref } from 'vue'
import { useCompanyStore } from '@/stores/company'
import type { PowerCompany } from '@/constants/types'
import { ROUTER_NAME } from '@/constants'
import { PowerPolesIcon } from '@/assets/icons'

// const singleTableRef = ref<InstanceType<typeof ElTable>>()

const store = useCompanyStore()

// list will be took from api => after update in update screen then call api and return to this page => re get data from api set to list
const powerCompanies = ref<PowerCompany[]>([
  {
    name: 'company1',
    title: '北海道',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  },
  {
    name: 'company2',
    title: '東北',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  },
  {
    name: 'company3',
    title: '東京',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  },
  {
    name: 'company4',
    title: '中部',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  },
  {
    name: 'company5',
    title: '北陸',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  },
  {
    name: 'company6',
    title: '関西',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  },
  {
    name: 'company7',
    title: '四国',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  },
  {
    name: 'company8',
    title: '中国',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  },
  {
    name: 'company9',
    title: '九州',
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  }
])

const clickCompany = (company: PowerCompany) => {
  store.setPowerCompanyDetailData({ ...company })
  router.push({
    name: ROUTER_NAME.POWER_COMPANY_DETAIL,
    params: {}
  })
}
</script>

<template>
  <div class="list-power-companies">
    <div class="data">
      <div
        class="company"
        v-for="(company, index) in powerCompanies"
        :key="index"
        @click="() => clickCompany(company)"
      >
        <div class="icon"><PowerPolesIcon /></div>

        <div class="title">{{ company.title }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-power-companies {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .data {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

    .company {
      height: 60px;
      background: var(--gradient-bg-btn);
      border-radius: 12px;
      border: 1px solid #868686;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s;
      font-size: 24px;
      gap: 12px;
      padding: 0 50px 0 30px;
      min-width: 210px;

      .icon {
        display: flex;
        align-items: center;
        font-size: 40px;
      }

      .title {
        min-width: 60px;
      }

      &:active {
        opacity: 0.7;
      }

      &:hover {
        opacity: 0.8;
        outline: 1px solid #868686;
      }
    }
  }
}
</style>
