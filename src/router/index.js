import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/recette',
    name: 'Recette',
    component: () => import('../views/Recette.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/horoscope',
    name: 'Horoscope',
    component: () => import('../views/Horoscope.vue')
  },
  {
    path: '/meteo',
    name: 'Meteo',
    component: () => import('../views/Meteo.vue')
  }
  ,
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('../views/404.vue')

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
