<template>
  <div>
    <main class="projectcont">
      <!-- Projet 1 -->
      <article>
        <h2 class="align">CV</h2>
        <h5 class="align">Création le 10 janvier 2024</h5>
        <h5 class="align">Visual Studio Code, css.</h5>
        <img
          class="imageproject"
          src="@/assets/images/cv.png"
          alt="Mes projets en images"
          @click="openModal('modal1')"
        />
      </article>

      <!-- Projet 2 -->
      <article>
        <h2 class="align">Cahier des charges</h2>
        <h5 class="align">Création le 17 janvier 2024</h5>
        <h5 class="align">Microsft Office Word.</h5>
        <img
          class="imageproject"
          src="@/assets/images/cdc.png"
          alt="Mes projets en images"
          @click="openModal('modal2')"
        />
      </article>

      <!-- Projet 3 -->
      <article>
        <h2 class="align">Dynamiser un espace commentaire</h2>
        <h5 class="align">Création le 30 janvier 2024</h5>
        <h5 class="align">Visual Studio Code, css, javascript.</h5>
        <img
          class="imageproject"
          src="@/assets/images/cm.png"
          alt="Mes projets en images"
          @click="openModal('modal3')"
        />
      </article>

      <!-- Composant Modal 1 -->
      <Modal ref="modal1">
        <h2>{{ modalTitle }}</h2>
        <a href="https://github.com/devlivepro/cv-dev" target="_blank">
          <h5>
            <p class="download_github">Télécharger le projet</p>
          </h5>
        </a>
      </Modal>

      <!-- Composant Modal 2 -->
      <Modal ref="modal2">
        <h2>{{ modalTitle }}</h2>
        <a href="./src/assets/downloads/cahierdescharges.pdf" target="_blank">
          <h5>
            <p class="download_github">Télécharger le projet</p>
          </h5>
        </a>
      </Modal>

      <!-- Composant Modal 3 -->
      <Modal ref="modal3">
        <h2>{{ modalTitle }}</h2>
        <a href="https://github.com/devlivepro/Dynamiser_un_espace_commentaire" target="_blank">
          <h5>
            <p class="download_github">Télécharger le projet</p>
          </h5>
        </a>
        
      </Modal>
    </main>
  </div>
</template>

<script>
import Modal from "@/components/Modale.vue";

export default {
  name: "Project",
  components: {
    Modal,
  },
  data() {
    return {
      modalTitle: "",
    };
  },
  methods: {
    openModal(modalId) {
      switch (modalId) {
        case "modal1":
          this.modalTitle =
            "CV en HTML et CSS utilisant de la sémantique respectants les normes W3C et avec des mises en formes utilisant flex.";
          this.modalImage = "@/assets/images/cv.png";
          break;
        // Ajoutez d'autres cas au besoin
        case "modal2":
          this.modalTitle = "Un cahier des charges (CdC) est un document essentiel en informatique, utilisé pour définir de manière détaillée les besoins, les spécifications et les attentes d'un projet. Il sert de base de référence pour les développeurs, les concepteurs et les parties prenantes tout au long du cycle de développement d'un site web, d'une application ou d'un système informatique.";
          this.modalImage = "@/assets/images/cdc.png";
          break;
        case "modal3":
          this.modalTitle = "Formulaire d'ajout de commentaire dynamique, en javascript utilisant un framework CSS tailwindcss pour les mises en formes.";
          this.modalImage = "@/assets/images/cm.png";
          break;
      }

      // Ouvrir la modal
      this.$refs[modalId].openModal();
    },
  },
};
</script>
