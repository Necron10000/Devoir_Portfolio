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


    // Route 404 générique pour Projets et Contact
    {
      path: '/projets', // Route pour Projets
      redirect: '/404' // Redirection vers la page d'erreur 404
    },
    {
      path: '/contact', // Route pour Contact
      redirect: '/404' // Redirection vers la page d'erreur 404
    },


    // Route 404 générique
    {
      path: '/404',
      name: 'Error404',
      component: () => import('../views/Error404.vue')
    },


    // Redirection de toutes les autres routes non définies vers la page d'erreur 404
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ],

  
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else {
      return { x: 0, y: 0, behavior: 'smooth' };
    }
  },
});

export default router