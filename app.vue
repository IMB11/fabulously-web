<script setup lang="ts">
import "omorphia/dist/style.css";
import "./app.scss";
//#endregion
</script>

<template>
  <Navbar />
  <div class="page">
    <NuxtPage />
  </div>
</template>

<style>
:root {
  --color-brand: #d19321 !important;
}

.page {
  padding: 5rem;
}

html {
  background-color: var(--color-bg);
  color: var(--color-base);
}

@media (max-width: 999px) {
  .page {
    padding: 2.5rem;
  }
}
</style>
