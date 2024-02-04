import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dev from '../views/Dev.vue'; // Importez la nouvelle page
import Project from '../views/Project.vue'; // Importez la nouvelle page
import Contact from '../views/Contact.vue'; // Importez la nouvelle page
import Page404 from '../views/Page404.vue'; // Ajoutez l'import pour la page 404

const routes = [
  { path: '/', component: HomeView },
  // Ajoutez d'autres routes au besoin
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dev',
      name: 'dev',
      component: Dev
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:catchAll(.*)',
      name: 'Page404',
      component: Page404
    }
  ]
})

export default router
