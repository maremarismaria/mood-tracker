<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1><span class="handwritten">Mood</span> <span>Tracker</span></h1>
    <nav>
      <button class="dropbtn" aria-label="Menu">&#9776;</button>
      <div class="dropdown-content">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@import "@/App.css";
</style>
