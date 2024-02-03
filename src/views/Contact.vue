<template>
  <div>
    <main class="custom-column_about">
      <form @submit.prevent="envoyerEmail" class="space-y-4">
        <div class="flex space-x-4">
          <div class="flex-1">
            <label for="nom" class="block text-sm font-medium text-gray-700"
              >Nom :</label
            >
            <input
              v-model="nom"
              type="text"
              id="nom"
              name="nom"
              required
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div class="flex-1">
            <label for="prenom" class="block text-sm font-medium text-gray-700"
              >Prénom :</label
            >
            <input
              v-model="prenom"
              type="text"
              id="prenom"
              name="prenom"
              required
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>
        <label for="objet" class="block text-sm font-medium text-gray-700"
          >Objet :</label
        >
        <input
          v-model="objet"
          type="text"
          id="objet"
          name="objet"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
        <label for="message" class="block text-sm font-medium text-gray-700"
          >Message :</label
        >
        <textarea
          v-model="message"
          id="message"
          name="message"
          required
          class="mt-1 p-2 w-full border rounded-md"
        ></textarea>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Envoyer
        </button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      nom: "",
      prenom: "",
      objet: "",
      message: "",
    };
  },
  methods: {
    envoyerEmail() {
      const data = {
        nom: this.nom,
        prenom: this.prenom,
        objet: this.objet,
        message: this.message,
        emailDestination: process.env.VUE_APP_EMAIL_DESTINATION,
      };

      // Réinitialiser les champs du formulaire après l'envoi
      this.nom = "";
      this.prenom = "";
      this.objet = "";
      this.message = "";
    },
  },
};
</script>
