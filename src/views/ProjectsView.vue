<script setup>
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseFooter from '@/components/BaseFooter.vue';

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
    </BaseContainer>
    <div class="projectsview__carousel">
      <BaseContainer>
        <el-carousel height="650px" interval="5000" trigger="click">
          <el-carousel-item v-for="image in images" :key="image.id">
            <div class="projectsview__carousel-item">
              <el-image :src="image.img_url" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </BaseContainer>
    </div>
    <BaseFooter />
  </section>
</template>

<style lang="scss">
.projectsview {
  position: relative;
  min-height: 100vh;

  &__carousel {
    padding-top: 50px;
    padding-bottom: 210px;
  }

  &__carousel-item {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
  }
}
</style>
