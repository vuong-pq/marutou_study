<script setup lang="ts">
import router from '@/router'
import type { ElTable } from 'element-plus/lib/components/index.js'
import { ref } from 'vue'
import { useCompanyStore } from '@/stores/company'
import type { PowerCompany, PowerCompanyCol } from '@/constants/types'

const singleTableRef = ref<InstanceType<typeof ElTable>>()

const store = useCompanyStore()

// list will be took from api => after update in update screen then call api and return to this page => re get data from api set to list
const powerCompanies = ref<PowerCompany[]>(
  new Array(9).fill(0).map((item, index) => {
    return {
      id: index + 1 + '',
      name: 'company' + index,
      field1: 'field1',
      field2: 'field2',
      field3: 'field3',
      field4: 'field4'
    }
  })
)

const rowClick = (dataRow: PowerCompany) => {
  const companyName = dataRow.name
  router.push({
    name: 'power-company-detail',
    params: { companyName }
  })
  store.setPowerCompanyDetailData(dataRow)
}

const tableCols: PowerCompanyCol[] = [
  {
    prop: 'id',
    label: 'Id'
  },
  {
    prop: 'name',
    label: 'Name'
  },
  {
    prop: 'field1',
    label: 'Field1'
  },
  {
    prop: 'field2',
    label: 'Field2'
  },
  {
    prop: 'field3',
    label: 'Field3'
  },
  {
    prop: 'field4',
    label: 'Field4'
  }
]
</script>

<template>
  <div class="list-power-companies">
    <div class="header">List power companies</div>

    <div class="data">
      <el-table
        ref="singleTableRef"
        :data="powerCompanies"
        highlight-current-row
        @row-click="rowClick"
        row-class-name="row-table"
      >
        <el-table-column
          v-for="(col, index) in tableCols"
          :key="index"
          :width="col?.width"
          :prop="col.prop"
          :label="col.label"
          :class-name="col?.className"
        />
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-power-companies {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  :deep(.el-table th.el-table__cell) {
    background-color: #ccd6db;
  }

  .power-company-table {
    width: fit-content;
  }

  .data {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :deep(.el-table__row).row-table {
    cursor: pointer;
    height: 56px;
  }
}
</style>
