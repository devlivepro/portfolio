<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Mon Portfolio</p>
      <p>Contactez-moi : david.saadoun@hotmail.com</p>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps(['msg']);

const styles = `
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

</script>

