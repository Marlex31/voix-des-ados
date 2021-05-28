import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'La voix des ados',
    component: () => import('../views/Home.vue')
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
    path: '/14',
    name: 'Récette de clafoutis aux cerises',
    component: () => import('../views/Recette.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/0',
    name: 'Horoscope',
    component: () => import('../views/Horoscope.vue')
  },
  {
    path: '/21',
    name: 'Obscurités diacriques',
    component: () => import('../views/Linguistique.vue')
  },
  {
    path: '/18',
    name: 'Meteo',
    component: () => import('../views/Meteo.vue')
  }
  ,
  {
    path: '/1',
    name: 'Tenues emblématiques de célébrités',
    component: () => import('../views/Modelling.vue')
  }
  ,
  {
    path: '/5',
    name: 'Revue du Samsung Galaxy S21',
    component: () => import('../views/Review.vue')
  }
  ,
  {
    path: '/:pathMatch(.*)',
    name: 'Page non trouvée',
    component: () => import('../views/404.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = to.name
})

export default router
