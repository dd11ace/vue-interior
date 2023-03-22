<script setup lang="ts">
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
  <section class="projectview">
    <BaseNavigation />
    <BaseContainer>
      <h2 class="projectsview__title">Наши проекты</h2>
      <div class="projectsview__images-container">
        <el-image
          class="projectsview__images"
          v-for="image in images"
          :key="image.id"
          :src="image.img_url"
        />
      </div>
    </BaseContainer>
    <BaseFooter />
  </section>
</template>

<style lang="scss">
.projectsview {
  position: relative;

  &__images {
    width: 40%;
    min-height: 200px;
    margin-bottom: 10px;
  }
}
</style>
