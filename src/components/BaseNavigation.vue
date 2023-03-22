<script setup lang="ts">
import BaseContainer from './BaseContainer.vue';

const links = [
  {
    name: 'Главная',
    url: '/',
    id: 'main',
  },
  {
    name: 'Проекты',
    url: '/projects',
    id: 'projects',
  },
  {
    name: 'Отзывы',
    url: '/testimonials',
    id: 'testimonials',
  },
  {
    name: 'Контакты',
    url: '/contacts',
    id: 'contacts',
  },
];
</script>

<template>
  <BaseContainer>
    <nav class="navigation">
      <RouterLink class="navigation__logo" to="/">LOGO</RouterLink>

      <ul class="navigation__list">
        <li class="navigation__list-item" v-for="link in links" :key="link.id">
          <el-link>
            <RouterLink class="navigation__list-link" :to="link.url">
              {{ link.name }}
            </RouterLink>
          </el-link>
        </li>
      </ul>

      <RouterLink class="navigation__list-link" to="/contacts">
        <el-button class="navigation__buy-btn" type="primary">
          Заказать
        </el-button>
      </RouterLink>
    </nav>
  </BaseContainer>
</template>

<style lang="scss">
.navigation {
  display: flex;
  align-items: center;
  margin-top: 30px;

  &__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 auto;
    padding-left: 0;
    text-transform: uppercase;
  }

  &__list-item {
    padding: 20px;
  }

  &__list-link {
    text-decoration: none;
    color: var(--el-text-color-primary);
  }

  &__buy-btn {
    border-radius: 20px;
    text-transform: uppercase;
  }
}
.active-link {
  color: var(--el-color-primary);
}
</style>
