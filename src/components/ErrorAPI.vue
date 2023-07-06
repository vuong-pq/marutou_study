<script setup lang="ts">
import { MODAL_TYPE } from '@/constants'
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'

const modalStore = useModalStore()
const { closeModal } = modalStore
const { modalData } = storeToRefs(modalStore)

const onOk = () => {
  if (modalData.value?.onOk && typeof modalData.value?.onOk === 'function') {
    modalData.value.onOk()
  }
  closeModal()
}
</script>

<template>
  <div class="popup-wrapper" v-if="modalData.open">
    <div class="popup-overlay" id="popup-overlay" @click="closeModal" />

    <div class="popup">
      <div
        class="header-popup no-select"
        :class="{
          error: modalData.type === MODAL_TYPE.ERROR,
          info: modalData.type === MODAL_TYPE.INFO
        }"
      >
        {{ modalData.title || 'Error' }}
      </div>

      <div class="content-popup">{{ modalData.content }}</div>

      <div class="text-center">
        <el-button
          class="btn"
          :class="{
            error: modalData.type === MODAL_TYPE.ERROR,
            info: modalData.type === MODAL_TYPE.INFO
          }"
          type="primary"
          @click.prevent="onOk"
          >{{ modalData?.btnText || 'OK' }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.no-select {
  user-select: none; // prevent highlight text
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; /* Đảm bảo popup hiển thị trên các phần tử khác */
  background-color: rgba($color: #000000, $alpha: 0.3);
  animation: opacityFadeIn forwards 0.5s ease-in-out;
}

.popup {
  --error-background-color: #9d0208;
  --info-background-color: #00296b;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff; /* Màu nền của popup */
  z-index: 10000; /* Đảm bảo popup hiển thị trên overlay */
  width: 500px;
  min-height: 200px;
  border-radius: 10px;
  animation: fadeIn forwards 0.5s ease-in-out;

  .header-popup {
    min-height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px 10px 0px 0px;

    &.error {
      background-color: var(--error-background-color);
    }

    &.info {
      background-color: var(--info-background-color);
    }
  }

  .content-popup {
    min-height: 100px;
    padding: 10px;
  }

  .btn {
    width: fit-content;
    border: none;
    outline: none;
    transition: opacity 0.3s;

    &.error {
      background-color: var(--error-background-color);
    }

    &.info {
      background-color: var(--info-background-color);
    }

    &:hover {
      opacity: 0.8;
    }
  }
}

@keyframes fadeIn {
  from {
    transform: translate(-50%, calc(-50% + 50px));
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}

@keyframes opacityFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
