<script setup lang="ts">
import router from '@/router'
const props = withDefaults(
  defineProps<{
    mode: boolean
  }>(),
  {
    mode: true
  }
)

const companies = [
  {
    name: 'ガスコンロ',
    id: 1
  },
  {
    name: 'ガス給湯器',
    id: 2
  },
  {
    name: 'ガス******',
    id: 3
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  },
  {
    name: 'ガス****',
    id: 4
  }
]

const clickNewBtn = () => {
  router.push(
    props.mode ? '/user-setting/electric-equipment/new-electric' : '/user-setting/list-gas/new-gas'
  )
}
</script>

<template>
  <div class="title-header-user ml-80 mt-10 font-weight-bold">
    {{ props.mode ? '電気機器一覧' : 'ガス機器一覧' }}
  </div>
  <div class="view-layout">
    <div class="view-list">
      <div class="list-container">
        <div
          class="mt-10"
          :class="index % 2 === 0 ? 'bg-line' : ''"
          v-for="(company, index) in companies"
        >
          <a
            class="item-company"
            :href="
              props.mode
                ? '/user-setting/electric-equipment/edit-electric'
                : '/user-setting/list-gas/edit-gas'
            "
            >{{ company.name }}</a
          >
        </div>
      </div>
      <div class="text-center mt-50">
        <el-button class="btn-addition" @click="clickNewBtn">追加 </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-line {
  background-color: #b6c8e8;
  padding: 5px 10px;
}
.view-layout {
  flex: 1;
  font-size: 20px;
}

.view-list {
  font-size: 20px;
  .btn-addition {
    background-image: linear-gradient(#e6ebf7, #b6c8e8, #e6ebf7);
    border: solid 1px #000;
    min-width: 100px;
    height: 40px;
  }
}
.list-container {
  min-width: 600px;
  min-height: 400px;
  max-height: 700px;
  max-width: 600px;
  overflow: auto;
  border: 1px solid #000;

  .item-company {
    font-weight: bold;
    text-decoration: none;
    color: #000;
  }
}
</style>
