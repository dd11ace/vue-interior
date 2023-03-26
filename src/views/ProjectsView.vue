<script setup>
import BaseContainer from '@/components/BaseContainer.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import BaseNavigation from '@/components/BaseNavigation.vue';

let images = [
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
    img_url: 'src/assets/img/projects_imgs/10.jpg',
  },
];
</script>

<template>
  <BaseNavigation />
  <section class="projectsview">
    <BaseContainer>
      <h2>Наши проекты</h2>
      <div class="projectsview__images-container">
        <ul class="projectsview__images-list">
          <li
            class="projectsview__images-list-item"
            v-for="image in images"
            :key="image.id"
          >
            <el-image :src="image.img_url" lazy />
          </li>
        </ul>
      </div>
    </BaseContainer>
    <BaseFooter />
  </section>
</template>

<style lang="scss">
.projectsview {
  position: relative;

  &__images-list {
    list-style: none;
  }

  &__images-list-item:last-child {
    margin-bottom: -16px;
    padding-bottom: 160px;
  }
}
</style>
