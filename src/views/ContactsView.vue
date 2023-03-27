<script setup>
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import Map from '@/components/Map.vue';
</script>

<template>
  <BaseNavigation />
  <BaseContainer tag="section">
    <h1>Контакты</h1>
    <div class="contacts-view">
      <div class="contacts-view__info">
        <b>Адрес:</b>
        <p>г. Иркутск, ул. Лапина д. 44</p>
        <b>Телефон:</b>
        <p>8 800 000 00 00</p>
      </div>
      <div>
        <Map />
      </div>
    </div>
  </BaseContainer>
  <BaseFooter />
</template>

<style lang="scss">
.contacts-view {
  display: flex;
  justify-content: space-around;
  margin-top: 90px;

  &__info {
    position: relative;
    top: 160px;
  }
}
</style>
