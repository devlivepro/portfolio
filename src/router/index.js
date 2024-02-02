import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dev from '../views/Dev.vue'; // Importez la nouvelle page
import Project from '../views/Project.vue'; // Importez la nouvelle page
import Contact from '../views/Contact.vue'; // Importez la nouvelle page

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
      path: '/dev', // Nouvelle route
      name: 'dev',
      component: Dev // Associez la route au composant de la nouvelle page
    },
    {
      path: '/project', // Nouvelle route
      name: 'project',
      component: Project // Associez la route au composant de la nouvelle page
    },
    {
      path: '/contact', // Nouvelle route
      name: 'contact',
      component: Contact // Associez la route au composant de la nouvelle page
    }
  ]
})

export default router
