<script setup lang="ts">
import { ROUTER_NAME } from '@/constants'
import router from '@/router'

const RedirectToEdit = () => {
  console.log('clicked')
  router.push({ name: ROUTER_NAME.USER_EDIT })
}
</script>

<template>
  <div class="block-element">
    <div class="wrapper">
      <div class="input-search">
        <div class="title">ユーザーID</div>
        <el-input />
      </div>
      <el-button class="btn" @click="RedirectToEdit">検索</el-button>
    </div>
    <!-- <div class="bottom-content">
      <div class="update-pass">
        <div style="font-weight: 700; font-size: 20px">Update PassWord</div>
        <div class="form-element">
          <el-form ref="ruleFormRef" label-width="200px" class="demo-ruleForm">
            <el-form-item label="Company Name: " prop="email">
              <el-input type="text" />
            </el-form-item>
            <el-form-item label="User Id: " prop="id">
              <el-input type="text" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
              <el-button type="default">Update</el-button>
              <el-button type="default">Cancel</el-button>
              <!- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> --
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.block-element {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .wrapper {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
    align-items: center;
    .input-search {
      display: flex;
      align-items: center;

      .title {
        min-width: 100px;
      }
    }

    :deep(.el-button) {
      width: 200px;
      background-color: var(--button-background);
      color: var(--button-color);

      span {
        letter-spacing: 2px;
      }

      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>
