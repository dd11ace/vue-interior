<script setup lang="ts">
import BaseContainer from '@/components/BaseContainer.vue';
import BaseNavigation from '@/components/BaseNavigation.vue';
</script>

<template>
  <BaseContainer class="homeview" tag="section">
    <BaseNavigation />
    <div class="homeview__bg-img"></div>
    <header class="homeview__header">
      <h1 class="homeview__title">
        Мы делаем интерьер <br />
        Современным и Мималистичным
      </h1>
      <p>Дизайн интерьера</p>
      <div class="homeview__links">
        <RouterLink class="homeview__link" to="/contacts">
          <el-button type="primary">Заказать</el-button>
        </RouterLink>
        <RouterLink class="homeview__link" to="/projects">
          <el-button plain>Проекты</el-button>
        </RouterLink>
      </div>
    </header>
  </BaseContainer>
</template>

<style lang="scss">
.homeview {
  position: relative;

  &__header {
    margin-top: 250px;
    margin-left: 120px;
  }

  &__title {
    font-size: 30px;
  }

  &__links {
    margin-top: 30px;
  }

  &__link {
    text-decoration: none;
    margin-right: 20px;
  }

  &__bg-img {
    display: block;
    width: 520px;
    height: 780px;
    position: absolute;
    top: 90px;
    right: 60px;
    background-image: url(@/assets/img/home-background.jpg);
    background-repeat: no-repeat;
    background-size: 520px 780px;
  }
}
</style>
