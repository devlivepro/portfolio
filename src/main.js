import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Footer from './components/Footer.vue'; // Assurez-vous que le chemin est correct

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Footer', Footer); // Enregistrez le composant Footer

app.mount('#app')
