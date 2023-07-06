<script setup lang="ts">
import { ref } from 'vue'
const showPopup = ref(true)
function closePopup() {
  showPopup.value = false
}

function preventEventPropagation(event: any) {
  // Ngăn chặn sự kiện click lan ra các phần tử bên dưới
  event.stopPropagation()
}
</script>

<template>
  <div class="popup-overlay" v-if="showPopup" id="popup-overlay" @click="closePopup()">
    <div class="popup" @click="(event) => preventEventPropagation(event)">
      <div class="header-popup">TITLE</div>
      <div class="content-popup">Content</div>
      <div class="text-center">
        <el-button type="primary" @click="closePopup()">Close</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; /* Đảm bảo popup hiển thị trên các phần tử khác */
}

.popup {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff; /* Màu nền của popup */
  z-index: 10000; /* Đảm bảo popup hiển thị trên overlay */
  width: 500px;
  min-height: 200px;
  border: 1px solid #000;
  border-radius: 10px;
  .header-popup {
    background-color: red;
    min-height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px 10px 0px 0px;
  }
  .content-popup {
    min-height: 100px;
    padding: 10px;
  }
}
</style>
