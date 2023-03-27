<script setup>
import BaseContainer from './BaseContainer.vue';
</script>

<template>
  <footer class="base-footer">
    <BaseContainer class="base-footer__container">
      <div>
        <b>Адрес:</b>
        <p>г. Иркутск, ул. Лапина д. 44</p>
      </div>
      <div>
        <b>Телефон:</b>
        <p>8 800 000 00 00</p>
      </div>
    </BaseContainer>
  </footer>
</template>

<style lang="scss">
.base-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: var(--el-color-info-light-9);
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: var(--el-text-color-primary);

  &__container {
    display: flex;
    justify-content: space-around;
  }
}
</style>
