<script setup lang="ts">
import "omorphia/dist/style.css";
import "./app.scss";

useHeadSafe({
  // favicon
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/icon.png",
    },
  ],
});

//#endregion
</script>

<template>
  <!-- Prevent scaling issues on larger monitors. -->
  <div class="max-width-wrapper">
    <Navbar />
    <div class="page">
      <NuxtPage />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style>
.max-width-wrapper {
  max-width: 1920px;
  /* align center */
  margin-left: auto;
  margin-right: auto;
}

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
