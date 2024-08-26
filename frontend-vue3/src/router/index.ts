import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GuideView from '@/views/GuideView.vue'
import PublicationsView from "@/views/PublicationsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView
    },
    {
      path: '/publications',
      name: 'publications',
      component: PublicationsView
    }
  ]
})

export default router
