<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <section class="homeview">
    <div>
      <Navigation />
      <h1>
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
    <img class="homeview__img" src="@/assets/img/homeview-bg.jpg" alt="bg" />
  </section>
</template>

<style lang="scss">
.homeview {
  &__links {
    margin-top: 30px;
  }

  &__link {
    text-decoration: none;
    margin-right: 20px;
  }

  &__img {
    position: absolute;
    width: 400px;
    height: 600px;
  }
}
</style>
