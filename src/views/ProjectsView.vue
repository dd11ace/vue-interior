<script setup lang="ts">
import BaseContainer from '@/components/BaseContainer.vue';
import BaseNavigation from '@/components/BaseNavigation.vue';

const projects = [
  {
    id: '1',
    img_url: 'src/assets/img/projects_imgs/1.jpg',
  },
  {
    id: '2',
    img_url: 'src/assets/img/projects_imgs/2.jpg',
  },
  {
    id: '3',
    img_url: 'src/assets/img/projects_imgs/3.jpg',
  },
  {
    id: '4',
    img_url: 'src/assets/img/projects_imgs/4.jpg',
  },
  {
    id: '5',
    img_url: 'src/assets/img/projects_imgs/5.jpg',
  },
  {
    id: '6',
    img_url: 'src/assets/img/projects_imgs/6.jpg',
  },
  {
    id: '7',
    img_url: 'src/assets/img/projects_imgs/7.jpg',
  },
  {
    id: '8',
    img_url: 'src/assets/img/projects_imgs/8.jpg',
  },
  {
    id: '9',
    img_url: 'src/assets/img/projects_imgs/9.jpg',
  },
  {
    id: '10',
    img_url: 'src/assets/img/projects_imgs/1.jpg',
  },
];
</script>

<template>
  <BaseNavigation />
  <BaseContainer class="projectsview">
    <h2 class="projectsview__title">Наши проекты</h2>
    <section>
      <ul class="projectsview__list">
        <li
          class="projectsview__list-item"
          v-for="project in projects"
          :key="project.id"
        >
          <el-image
            class="projectsview__img"
            :src="project.img_url"
            :alt="project.id"
            :zoom-rate="1.2"
            fit="cover"
          />
        </li>
      </ul>
    </section>
  </BaseContainer>
</template>

<style lang="scss">
.projectsview {
  &__list {
    display: flex;
    // flex-wrap: wrap;
    list-style: none;
  }

  &__list-item {
    width: 500px;
    height: inherit;
  }
}
</style>
