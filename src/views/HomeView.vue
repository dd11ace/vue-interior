<script setup lang="ts">
import BaseContainer from '@/components/BaseContainer.vue';
import BaseNavigation from '@/components/BaseNavigation.vue';
</script>

<template>
  <BaseContainer tag="section">
    <BaseNavigation />
    <header class="homeview">
      <img
        class="homeview__img"
        src="@/assets/img/home-background.jpg"
        alt="Фон"
      />
      <div class="homeview__container">
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
      </div>
    </header>
  </BaseContainer>
</template>

<style lang="scss">
.homeview {
  position: relative;

  &__container {
    position: relative;
    top: 200px;
    left: 115px;
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

  &__img {
    position: absolute;
    top: 0;
    left: 50%;
    width: 500px;
    height: 750px;
  }
}
</style>
