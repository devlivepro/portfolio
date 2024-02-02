<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue"; // Assurez-vous que le chemin est correct
import NavBar from "@/components/NavBar.vue"; // Assurez-vous que le chemin est correct
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="app">
    <!-- Barre de Navigation -->
    <Header />

    <NavBar />
    
    <!-- Contenu de la page -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Composant Footer -->
    <Footer />
  </div>
</template>
