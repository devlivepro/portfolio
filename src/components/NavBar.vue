<template>
  <nav>
    <ul class="nav-links">
      <li>
        <a href="/"
          ><img class="logo" src="@/assets/images/logo.png" alt="Logo"
        /></a>
      </li>
      <li>
        <router-link to="/" exact class="nav-link"><a href="/">Présentation</a></router-link>
      </li>
      <li>
        <router-link to="/project" exact class="nav-link"><a href="project">Mes Projets</a></router-link>
      </li>
      <li>
        <router-link to="/contact" exact class="nav-link"><a href="contact">Contacter</a></router-link>
      </li>
    </ul>
  </nav>
</template>
