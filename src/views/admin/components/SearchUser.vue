<script setup lang="ts"></script>

<template>
  <div class="block-element">
    <div class="top-content">
      <div class="input-search">User ID</div>
      <el-input />
      <el-button> Search</el-button>
    </div>
    <div class="bottom-content">
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
              <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-element {
  display: block;
  width: 100%;
  height: 100%;
}
.top-content {
  display: flex;
  margin: 20px 10px;
  .input-search {
    min-width: 150px;
  }
}
.bottom-content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  .update-pass {
    margin-top: 100px;
    background-color: #d6dce5;
    padding: 12px;
    border: 1px solid #000;
    border-radius: 24px;
    .form-element {
      min-height: 500px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    :deep(.el-form-item) {
      margin-bottom: 25px;
    }
    :deep(.el-input__wrapper) {
      min-width: 600px !important;
    }
  }
}
</style>
