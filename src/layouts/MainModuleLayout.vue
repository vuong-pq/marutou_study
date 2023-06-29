<template>
  <div class="main-module-layout">
    <div class="header">
      <div class="title">
        <slot name="title" />
      </div>

      <div class="form">
        <slot name="form" />
      </div>
    </div>

    <div class="actions">
      <slot name="actions" />
    </div>

    <div class="data">
      <slot name="data" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-module-layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    align-items: flex-start;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      height: 100%;
      text-transform: uppercase;
      font-weight: 600;
      border-right: 1px solid rgba(0, 0, 0, 0.06);
      font-size: 1.875rem;
      color: rgba(0, 0, 0, 0.85);
      flex-grow: 1;
      min-width: max-content;
    }

    .form {
      padding: 1rem;
      height: 100%;
      overflow: hidden;
    }
  }

  .data {
    flex-grow: 1;
  }
}
</style>
