<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <img
      alt="Mood Tracker logo"
      class="logo"
      src="@/assets/logo.png"
      width="125"
      height="125"
    />
    <p class="bold">Page not found 🧐</p>
    <p>The requested page could not be found.</p>
    <RouterLink to="/">Go Back</RouterLink>
  </main>
</template>

<style scoped>
main {
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--small);
  margin: 0 auto;
}

img {
  margin-bottom: 2em;
}

p {
  text-align: center;
  margin-bottom: 1em;
  line-height: 1.5em;
}

p.bold {
  font-weight: bold;
}

a {
  color: #f4900c;
}
</style>
