import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

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
      component: (): ProjectsView => import('../views/ProjectsView.vue'),
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: (): TestimonialsView =>
        import('../views/TestimonialsView.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: (): ContactsView => import('../views/ContactsView.vue'),
    },
  ],
});

export default router;
