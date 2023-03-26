<script setup>
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseFooterVue from '@/components/BaseFooter.vue';
</script>

<template>
  <BaseNavigation />
  <header class="homeview">
    <BaseContainer class="homeview__container">
      <div class="homeview__bg-img"></div>
      <div class="homeview__info">
        <h1 class="homeview__title">
          Мы делаем интерьер <br />
          Современным и Минималистичным
        </h1>
        <p>Дизайн интерьера</p>
        <div class="homeview__links">
          <RouterLink class="homeview__link" to="/contacts">
            <el-button class="homeview__link-btn" type="primary">
              Заказать
            </el-button>
          </RouterLink>
          <RouterLink class="homeview__link" to="/projects">
            <el-button class="homeview__link-btn" plain> Проекты </el-button>
          </RouterLink>
        </div>
      </div>
    </BaseContainer>
    <BaseFooterVue />
  </header>
</template>

<style lang="scss">
.homeview {
  position: relative;
  min-height: 100vh;

  &__container {
    display: flex;
    position: relative;
  }

  &__info {
    position: relative;
    top: 220px;
    left: 120px;
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
    position: absolute;
    top: 20px;
    right: 70px;
    width: 520px;
    height: 780px;
    background-image: url(@/assets/img/home-background.jpg);
    background-repeat: no-repeat;
    background-size: 520px 780px;
  }
}
</style>
