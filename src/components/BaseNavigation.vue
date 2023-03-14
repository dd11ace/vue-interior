<template>
  <nav class="navigation">
    <RouterLink class="navigation__logo" to="/">LOGO</RouterLink>
    <ul class="navigation__list">
      <li class="navigation__list-item">
        <RouterLink class="navigation__list-link" to="/">Главная</RouterLink>
      </li>
      <li class="navigation__list-item">
        <RouterLink class="navigation__list-link" to="/projects"
          >Проекты</RouterLink
        >
      </li>
      <li class="navigation__list-item">
        <RouterLink class="navigation__list-link" to="/contacts"
          >Контакты</RouterLink
        >
      </li>
    </ul>
  </nav>
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

    &-item {
      padding: 20px;
    }

    &-link {
      text-decoration: none;
      color: #000;
    }
  }
}
.active-link {
  color: var(--main-color);
}
</style>
