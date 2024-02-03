<template>
  <div>
    <main class="custom-column_about">
      <form ref="form" @submit.prevent="sendEmail" class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="user_name">Name:</label>
      <input type="text" v-model="name" name="user_name" class="w-full p-2 border border-gray-300 rounded-md mb-3" />

      <label class="block text-gray-700 text-sm font-bold mb-2" for="user_email">Email:</label>
      <input type="email" v-model="email" name="user_email" class="w-full p-2 border border-gray-300 rounded-md mb-3" />

      <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message:</label>
      <textarea v-model="message" name="message" class="w-full p-2 border border-gray-300 rounded-md mb-3"></textarea>

      <div v-if="formNotFilled" class="text-red-500 mb-3">Veuillez remplir tous les champs.</div>
      <div v-if="successMessage" class="text-green-500 mb-3">{{ successMessage }}</div>

      <input type="submit" value="Send" class="w-full p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600" />
    </form>
    </main>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      formNotFilled: false,
      successMessage: "",
    };
  },
  methods: {
    sendEmail() {
      if (!this.name || !this.email || !this.message) {
        this.formNotFilled = true;
        this.successMessage = ""; // Réinitialiser le message de succès s'il y en avait un
        return;
      }

      emailjs
        .sendForm(
          "service_uufh5ph",
          "template_m811jk9",
          this.$refs.form,
          "wTZCIoV3dYBw4wBOj"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.formNotFilled = false;
            this.successMessage = "E-mail envoyé avec succès";

            // Réinitialiser les champs du formulaire après l'envoi
            this.name = "";
            this.email = "";
            this.message = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
