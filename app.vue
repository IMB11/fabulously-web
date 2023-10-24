<script setup lang="ts">
import "omorphia/dist/style.css";
import "./app.scss";
//#endregion
</script>

<template>
  <Navbar />
  <div></div>
</template>

<style>
:root {
  --color-brand: #d19321 !important;
}

html {
  background-color: var(--color-bg);
  color: var(--color-base);
}

@media (max-width: 735px) {
  .padded-mobile {
    padding-bottom: 5em;
  }
}
</style>
