<script setup lang="ts">
import { Avatar } from "omorphia";
</script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Fabulously Optimized is not affiliated with Mojang Studios, Microsoft or
        Modrinth.
      </p>
      <div class="image">
        <Avatar src="/icon.png"></Avatar>
        <h2 class="username">Fabulously Optimized</h2>
      </div>
      <div class="link-rows">
        <div class="link-row">
          <h4>Contribute</h4>
          <NuxtLink to="/github">GitHub</NuxtLink>
          <NuxtLink to="/translate">Translate</NuxtLink>
        </div>
        <div class="link-row">
          <h4>Discuss</h4>
          <NuxtLink to="/discord">Discord</NuxtLink>
          <NuxtLink to="/mastodon">Mastodon</NuxtLink>
          <NuxtLink to="/wiki">Wiki</NuxtLink>
        </div>
        <div class="link-row">
          <h4>Download</h4>
          <NuxtLink to="/modrinth">Modrinth</NuxtLink>
          <NuxtLink to="/curseforge">CurseForge</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  text-align: center;
  background-color: var(--color-raised-bg);
  color: var(--color-base);
  padding: 3rem;
  margin-top: 5rem;
  margin-bottom: 0rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.link-rows {
  display: flex;
  flex-direction: row;
  gap: var(--gap-xl);
  justify-content: space-evenly;
  margin-top: var(--gap-xl);

  // Align all link rows together.
  .link-row {
    display: flex;
    flex-direction: column;
  }
}

.image {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);

  .username {
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
