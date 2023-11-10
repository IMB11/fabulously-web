<script setup lang="ts">
import { Avatar } from "omorphia";
</script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        {{ $t("footer.legal_notice") }}
      </p>
      <div class="image">
        <Avatar src="/icon.png"></Avatar>
        <h2 class="username">Fabulously Optimized</h2>
      </div>
      <div class="link-rows">
        <div class="link-row">
          <h4>{{ $t("footer.header.contribute") }}</h4>
          <NuxtLink to="/github">GitHub</NuxtLink>
          <NuxtLink to="/translate">{{
            $t("footer.links.translate")
          }}</NuxtLink>
        </div>
        <div class="link-row">
          <h4>{{ $t("footer.header.discuss") }}</h4>
          <NuxtLink to="/discord">Discord</NuxtLink>
          <NuxtLink to="/mastodon">Mastodon</NuxtLink>
          <NuxtLink to="/wiki">{{ $t("navbar.links.wiki") }}</NuxtLink>
        </div>
        <div class="link-row">
          <h4>{{ $t("footer.header.download") }}</h4>
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

    a {
      color: var(--color-brand);
    }
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
