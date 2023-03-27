<script setup>
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseFooterVue from '@/components/BaseFooter.vue';
</script>

<template>
  <BaseNavigation />
  <header class="home-view">
    <BaseContainer class="home-view__container">
      <div class="home-view__bg-img"></div>
      <div class="home-view__info">
        <h1 class="home-view__title">
          Мы делаем интерьер <br />
          Современным и Минималистичным
        </h1>
        <p>Дизайн интерьера</p>
        <div class="home-view__links">
          <RouterLink class="home-view__link" to="/contacts">
            <ElButton class="home-view__link-btn" type="primary">
              Заказать
            </ElButton>
          </RouterLink>
          <RouterLink class="home-view__link" to="/projects">
            <ElButton class="home-view__link-btn" plain> Проекты </ElButton>
          </RouterLink>
        </div>
      </div>
    </BaseContainer>
    <BaseFooterVue />
  </header>
</template>

<style lang="scss">
.home-view {
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
