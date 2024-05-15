import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projetos/creatic-agency',
      name: 'creatic-agency',
      component: () => import('../views/CreaticProjectView.vue')
    },
    {
      path: '/projetos/recipe-app',
      name: 'recipe-app',
      component: () => import('../views/RecipeProjectView.vue')
    },
    {
      path: '/projetos/lemes-advocacia',
      name: 'lemes-advocacia',
      component: () => import('../views/LemesProjectView.vue')
    },
    {
      path: '/projetos/golden-seren-midia',
      name: 'golden-seren-midia',
      component: () => import('../views/GoldenProjectView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: () => import('../views/PageNotFoundView.vue')
    }
  ]
})

export default router
