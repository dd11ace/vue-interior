import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ContactsView from '@/views/ContactsView.vue';
import TestimonialsView from '@/views/TestimonialsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  linkActiveClass: 'active-link',

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: TestimonialsView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
  ],
});

export default router;
