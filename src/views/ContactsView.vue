<script setup lang="ts">
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseFooterVue from '@/components/BaseFooter.vue';
</script>

<template>
  <BaseNavigation />
  <BaseContainer class="contactsview">
    <h2>Контакты</h2>
    <b>Адрес:</b>
    <p>г. Иркутск, ул. Лапина 44</p>
    <b>Телефон:</b>
    <p>8 800 000 00 00</p>
  </BaseContainer>
  <BaseFooterVue />
</template>

<style lang="scss"></style>
