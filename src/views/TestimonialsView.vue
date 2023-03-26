<script setup>
import BaseContainer from '@/components/BaseContainer.vue';
import BaseCard from '@/components/BaseCard.vue';
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseFooter from '@/components/BaseFooter.vue';

let testimonials = [
  {
    name: 'Пользователь',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas at numquam non doloremque nulla quaerat vitae accusantium, distinctio enim repellendus praesentium harum rem a. Itaque ut corrupti ducimus tenetur.',
    id: '1',
  },
  {
    name: 'Пользователь',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas at numquam non doloremque nulla quaerat vitae accusantium, distinctio enim repellendus praesentium harum rem a. Itaque ut corrupti ducimus tenetur.',
    id: '2',
  },
  {
    name: 'Пользователь',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas at numquam non doloremque nulla quaerat vitae accusantium, distinctio enim repellendus praesentium harum rem a. Itaque ut corrupti ducimus tenetur.',
    id: '3',
  },
  {
    name: 'Пользователь',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas at numquam non doloremque nulla quaerat vitae accusantium, distinctio enim repellendus praesentium harum rem a. Itaque ut corrupti ducimus tenetur.',
    id: '4',
  },
  {
    name: 'Пользователь',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas at numquam non doloremque nulla quaerat vitae accusantium, distinctio enim repellendus praesentium harum rem a. Itaque ut corrupti ducimus tenetur.',
    id: '5',
  },
];
</script>

<template>
  <BaseNavigation />
  <BaseContainer tag="section">
    <h2>Отзывы наших клиентов</h2>
    <div class="testimonialsview">
      <BaseCard
        class="testimonialsview__card"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <b class="testimonialsview__title">
          {{ testimonial.name }}
        </b>
        <p class="testimonialsview__text">
          {{ testimonial.text }}
        </p>
      </BaseCard>
    </div>
  </BaseContainer>
  <BaseFooter />
</template>

<style lang="scss">
.testimonialsview {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__card {
    width: 540px;
  }

  &__text {
    text-align: center;
    line-height: 1.5em;
  }
}
</style>
