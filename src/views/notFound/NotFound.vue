<script setup lang="ts">
import { SadIcon } from '@/assets/icons'
import { ref, reactive } from 'vue'

const sampleArray = new Array(10000).fill(0).map((item, index) => {
  return {
    name: 'name' + index,
    field1: 'field1',
    field2: 'field2',
    field3: 'field3',
    field4: 'field4'
  }
})

let listDemo = ref<any>([...sampleArray])

const sortTypes = {
  NONE: 'NONE',
  ASC: 'ASC',
  DESC: 'DESC'
}

interface KeySort {
  key: string
  type: string
}

const listColumnsHeader = ref<KeySort[]>(
  Object.keys(listDemo.value[0]).map((key) => {
    return {
      key: key,
      type: sortTypes.NONE
    }
  })
)

let listKeysSort = reactive<KeySort[]>([])

const clickSort = (sortItem: KeySort) => {
  let currentType = sortTypes.NONE
  switch (sortItem.type) {
    case sortTypes.NONE: {
      currentType = sortTypes.ASC
      break
    }
    case sortTypes.ASC: {
      currentType = sortTypes.DESC
      break
    }
    default: {
      currentType = sortTypes.NONE
    }
  }
  sortItem.type = currentType
  const itemFound = listKeysSort.find((item) => item.key === sortItem.key)
  if (sortItem.type === sortTypes.NONE) {
    if (itemFound) {
      const indexFound = listKeysSort.indexOf(itemFound)
      if (indexFound) {
        listKeysSort.splice(indexFound, 1)
      }
    }
  } else {
    if (!itemFound) {
      listKeysSort.push({ ...sortItem })
    } else {
      itemFound.type = sortItem.type
    }
  }
  if (!listKeysSort?.length) {
    listDemo.value = [...sampleArray]
  } else {
    listDemo.value.sort(multiKeySort([...listKeysSort]))
  }
}

const resetSort = () => {
  listKeysSort = []
}

const multiKeySort = (keys: KeySort[]) => {
  return function (a: { [key: string]: any }, b: { [key: string]: any }) {
    for (let i = 0; i < keys.length; i++) {
      const key: { [key: string]: any } = keys[i]
      if (key.type === sortTypes.ASC) {
        return a[key.key] < b[key.key] ? -1 : 1
      } else if (key.type === sortTypes.DESC) {
        return a[key.key] < b[key.key] ? 1 : -1
      }
    }
    return 0
  }
}
</script>

<template>
  <div class="not-found">
    <h1>Not Found</h1>

    <p class="text">
      Oops, we couldn't find that page<span class="icon"><SadIcon /></span>. Try going
      <RouterLink class="link" to="/">Home</RouterLink>
    </p>
  </div>

  <div class="list-demo">
    <h1>list data demo</h1>
    <div>Number item: {{ listDemo.length }}</div>
    <div>list keys sort: {{ listKeysSort.map((item) => item.key) }}</div>

    <div class="sort-filter">
      <div class="filter">filter</div>
    </div>

    <el-button @click="resetSort">reset Sort</el-button>

    <div class="wrapper">
      <div class="item">
        <div class="field" v-for="item in listColumnsHeader" :key="item.key">
          <el-button @click="() => clickSort(item)">{{ item.type }}</el-button>
        </div>
      </div>

      <div class="item" v-for="item in listDemo" :key="item.name">
        <div class="field" v-for="field in Object.keys(item)" :key="field">
          {{ item[field as keyof typeof item] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  padding: 12px;

  .text {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    font-size: 24px;
    display: inline-block;
    display: flex;
    align-items: center;
    width: 30px;
  }

  .link {
    font-size: 24px;
  }
}

.list-demo {
  width: fit-content;

  .sort-filter {
    display: flex;
    gap: 50px;
  }

  .wrapper {
    margin-top: 50px;
    max-height: 500px;
    overflow-y: auto;
  }

  .item {
    display: flex;
    gap: 50px;
  }

  .field {
    width: 100px;
  }
}
</style>
