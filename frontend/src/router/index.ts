import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: ()=>import('@/views/Search.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: ()=>import('@/views/Team.vue')
  },
  {
    path: '/publications',
    name: 'Publications',
    component: ()=>import('@/views/Publications.vue')
  },
  {
    path: '/guide',
    name: 'Guide',
    component: ()=>import('@/views/Guide.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
