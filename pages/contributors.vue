<script setup lang="ts">
useSeoMeta({
  title: "Fabulously Optimized - Contributors",
  ogTitle: "Fabulously Optimized - Contributors",
  description: `Fabulously Optimized, a simple Minecraft modpack focusing on performance and graphics enhancements, would not have been possible without the help from these people.`,
  ogDescription: `Fabulously Optimized, a simple Minecraft modpack focusing on performance and graphics enhancements, would not have been possible without the help from these people.`,
  ogImage: "/icon.png",
  twitterCard: "summary",
  twitterImage: "/icon.png",
  themeColor: "#d19321",
});

const contributors = await(
  await fetch(`https://fabulously-meta.mineblock11.dev/v1/contributors`)
).json();
</script>

<template>
  <div class="centered-hero">
    <h1>{{ $t("content.contributors.columned-hero.title") }}</h1>
    <p class="subtitle">
      {{ $t("content.contributors.columned-hero.subtitle") }}
    </p>
    <h2>{{ $t("content.contributors.org") }}</h2>
    <div class="contributor-cards">
      <a
        :href="`https://github.com/${contributor}`"
        v-for="contributor in contributors.organizationMembers"
        class="contributor-card"
        target="_blank"
      >
        <NuxtImg :src="`https://github.com/${contributor}.png`" />
        <p>{{ contributor }}</p>
      </a>
    </div>
    <h2>{{ $t("content.contributors") }}</h2>
    <div class="contributor-cards">
      <a
        :href="`https://github.com/${contributor}`"
        v-for="contributor in contributors.contributors.filter(
          (_contributor: any) => !_contributor.includes('[bot]')
        )"
        class="contributor-card"
        target="_blank"
      >
        <NuxtImg :src="`https://github.com/${contributor}.png`" />
        <p>{{ contributor }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contributor-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.centered-hero {
  h1 {
    margin-bottom: 0 !important;
  }
}

.contributor-card {
  text-decoration: none !important;
  transition: transform 0.2s ease-in-out;
}

.contributor-card > img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.contributor-card > p {
  // resize text to fit within the 100px boundary
  font-size: 0.8rem;

  text-align: center;
  color: var(--color-contrast);
}

.contributor-card:hover {
  transform: scale(1.1);
}
</style>
