<script setup>
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseFooterVue from '@/components/BaseFooter.vue';
</script>

<template>
  <BaseNavigation />
  <BaseContainer class="homeview" tag="header">
    <div class="homeview__bg-img"></div>
    <section class="homeview__container">
      <h1 class="homeview__title">
        Мы делаем интерьер <br />
        Современным и Мималистичным
      </h1>
      <p>Дизайн интерьера</p>
      <div class="homeview__links">
        <RouterLink class="homeview__link" to="/contacts">
          <el-button class="homeview__link-btn" type="primary"
            >Заказать</el-button
          >
        </RouterLink>
        <RouterLink class="homeview__link" to="/projects">
          <el-button class="homeview__link-btn" plain>Проекты</el-button>
        </RouterLink>
      </div>
    </section>
  </BaseContainer>
  <BaseFooterVue />
</template>

<style lang="scss">
.homeview {
  display: flex;
  position: relative;

  &__container {
    margin-top: 250px;
    margin-left: 100px;
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

    &-btn {
      text-transform: uppercase;
    }
  }

  &__bg-img {
    display: block;
    width: 520px;
    height: 780px;
    position: absolute;
    top: 20px;
    right: 70px;
    background-image: url(@/assets/img/home-background.jpg);
    background-repeat: no-repeat;
    background-size: 520px 780px;
  }
}
</style>
