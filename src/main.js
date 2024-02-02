import './assets/css/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'; // Assurez-vous que le chemin est correct
import NavBar from './components/NavBar.vue'; // Assurez-vous que le chemin est correct
import Footer from './components/Footer.vue'; // Assurez-vous que le chemin est correct
import HomeView from './views/HomeView.vue'; // Assurez-vous que le chemin est correct
import Dev from './views/Dev.vue'; // Assurez-vous que le chemin est correct
import Project from './views/Project.vue'; // Assurez-vous que le chemin est correct
import Contact from './views/Contact.vue'; // Assurez-vous que le chemin est correct

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Header', Header); // Enregistrez le composant Footer
app.component('NavBar', NavBar); // Enregistrez le composant Footer
app.component('Footer', Footer); // Enregistrez le composant Footer

app.mount('#app')
