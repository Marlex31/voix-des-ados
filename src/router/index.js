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
    path: '/3',
    name: 'L\'histoire du Dream SMP',
    component: () => import('../views/Minecraft.vue')
  }
  ,
  {
    path: '/4',
    name: 'L\'impact de la technologie sur la vie quotidienne',
    component: () => import('../views/Impact.vue')
  }
  ,
  {
    path: '/6',
    name: 'Histoire d\'Internet',
    component: () => import('../views/Internet.vue')
  }
  ,
  {
    path: '/7',
    name: 'Arsene Lupin',
    component: () => import('../views/Lupin.vue')
  }
  ,
  {
    path: '/11',
    name: 'Alizée',
    component: () => import('../views/Artiste.vue')
  }
  ,
  {
    path: '/24',
    name: 'Gymnastique',
    component: () => import('../views/Gymnastique.vue')
  }
  ,
  {
    path: '/15',
    name: 'La pollution',
    component: () => import('../views/Pollution.vue')
  }
  ,
  {
    path: '/27',
    name: 'L\'évolution de la musique',
    component: () => import('../views/Music.vue')
  }
  ,
  {
    path: '/25',
    name: 'Coupe du monde 2018',
    component: () => import('../views/Coupe.vue')
  },
  {
    path: '/20',
    name: 'Emmanuel Macron',
    component: () => import('../views/Macron.vue')
  }
  ,
  {
    path: '/22',
    name: 'Lionel Messi',
    component: () => import('../views/Messi.vue')
  }
  ,
  {
    path: '/28',
    name: 'La France pendant les deux guerres mondiales',
    component: () => import('../views/Wars.vue')
  }
  ,
  {
    path: '/23',
    name: 'Flash Interview avec Kylian Mbappé',
    component: () => import('../views/Interview.vue')
  }
  ,
  {
    path: '/19',
    name: 'La santé par le sport',
    component: () => import('../views/Health.vue')
  }
  ,
  {
    path: '/2',
    name: 'Fashion Week Paris',
    component: () => import('../views/Fashion.vue')
  }
  ,
  {
    path: '/13',
    name: 'Millefeuille à la vanille et au praliné',
    component: () => import('../views/Millefeuille.vue')
  }
  ,
  {
    path: '/9',
    name: 'Fête nationale française',
    component: () => import('../views/Holiday.vue')
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
