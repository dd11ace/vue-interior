<script setup lang="ts">
import BaseContainer from './BaseContainer.vue';
</script>

<template>
  <footer class="basefooter">
    <BaseContainer class="basefooter__container">
      <div class="basefooter__adress">
        <h4>Адрес:</h4>
        <p>г. Иркутск, ул. Лапина д. 44</p>
      </div>
      <div class="basefooter__phone">
        <h4>Телефон:</h4>
        <p>8 800 000 00 00</p>
      </div>
    </BaseContainer>
  </footer>
</template>

<style lang="scss">
.basefooter {
  position: absolute;
  bottom: 0;
  margin-top: auto;
  width: 100%;
  min-height: 2.5rem;
  color: var(--el-color-info-light-9);
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: var(--el-text-color-primary);

  &__container {
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
}
</style>
