<script setup>
import BaseContainer from '@/components/BaseContainer.vue';
import BaseCard from '@/components/BaseCard.vue';
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseFooter from '@/components/BaseFooter.vue';

const testimonials = [
  {
    name: 'Александр',
    text: 'Делали ремонт в 2022 году. Дизайнер от студии был с нами везде, во всех магазинах и помогал выбирать, всегда был на объекте. Дизайн получился удобным, практичным и красивым.',
    id: '1',
  },
  {
    name: 'Анатолий',
    text: 'Никогда бы не подумала, что ремонт может настолько приятным и легким. Купили дом без отделки, знакомые посоветовали эту компанию – здесь высококачественные и грамотные специалисты.',
    id: '2',
  },
  {
    name: 'Игорь',
    text: 'Купили однушку и стояла непростая задача – сделать комфортную маленькую кухню, зону отдыха и спальню. Результат удивил – все продумано до самых меленьких деталей. Мы голову ломали, как лучше сделать, а дизайнеры сразу предложили несколько вариантов!',
    id: '3',
  },
  {
    name: 'Ира',
    text: 'Дизайн здесь имеют поразительное качество и выветренность, которую оценят любители комфорта. Также имеется возможность делать перепланировки с учетом госстандартов. Кроме того, предоставляют 2-3 варианта дизайна.',
    id: '4',
  },
  {
    name: 'Ольга',
    text: 'Огромное спасибо за воплощение красивого интерьера!',
    id: '5',
  },
];
</script>

<template>
  <BaseNavigation />
  <BaseContainer tag="section">
    <h1>Отзывы наших клиентов</h1>
    <div class="testimonialsview">
      <BaseCard
        class="testimonialsview__card"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <b>
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
