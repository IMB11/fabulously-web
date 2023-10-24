<script setup lang="ts">
import {
  Card,
  Avatar,
  Button,
  MoonIcon,
  SunIcon,
  HomeIcon,
  DashboardIcon,
  ArchiveIcon,
  SendIcon,
  DownloadIcon,
} from "omorphia";

const colorMode = useColorMode();

const theme = computed({
  get() {
    return colorMode.value !== "dark";
  },
  set(newValue) {
    colorMode.value = newValue ? "light" : "dark";
  },
});
</script>

<template>
  <Card class="nav">
    <NuxtLink class="side__link side__profile" to="/">
      <Avatar src="/icon.png"></Avatar>
      <h2 class="username">Fabulously Optimized</h2>
    </NuxtLink>
    <div class="side no__mobile">
      <NuxtLink to="/" class="side__link">Home</NuxtLink>
      <NuxtLink to="/changelog" class="side__link">Changelog</NuxtLink>
      <NuxtLink to="/github" class="side__link">GitHub</NuxtLink>
      <NuxtLink to="/wiki" class="side__link">Wiki</NuxtLink>
    </div>
    <div class="side__buttons no__mobile">
      <Button iconOnly class="button__rounded_icon" @click="theme = !theme"
        ><MoonIcon v-if="!theme" /><SunIcon v-else
      /></Button>
    </div>
  </Card>

  <!-- Responsive version of the navbar for only mobile. -->
  <Card class="nav nav-body">
    <div class="side">
      <NuxtLink to="/" class="side__link">Home</NuxtLink>
      <NuxtLink to="/changelog" class="side__link">Changelog</NuxtLink>
      <NuxtLink to="/github" class="side__link">GitHub</NuxtLink>
      <NuxtLink to="/wiki" class="side__link">Wiki</NuxtLink>
    </div>
  </Card>
</template>

<style scoped lang="css">
/* Make responsive navbar work. */
@media only screen and (min-width: 736px) {
  .nav-body {
    display: none;
  }
}

/* Hide no__mobile */
@media only screen and (max-width: 735px) {
  .no__mobile {
    display: none !important;
  }
}

.button__rounded_icon {
  border-radius: 50%;
  box-shadow: none;
  background-color: transparent;
  transition: color 100ms ease-in-out;
}

.side__buttons {
  margin-top: auto;
  margin-bottom: auto;
}

.button__rounded_icon:hover {
  color: var(--color-brand);
}

.nav-body {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.nav {
  padding: var(--gap-md);
  margin: auto;
  width: 85%;
  margin-top: var(--gap-lg) !important;
  background-color: var(--color-raised-bg);
  box-shadow: var(--shadow-raised-lg);
  display: flex;
}

.username {
  text-align: center;
  vertical-align: middle;
}

@media only screen and (min-width: 736px) and (max-width: 800px) {
  .username {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  .side {
    left: 0 !important;
    position: inherit !important;
  }
}

.side {
  position: relative;
  display: flex;
  margin: auto;
  margin-left: auto;
  left: calc(var(--gap-xl) * -4);
  flex-direction: row;
  gap: var(--gap-xl);
}

.side__profile {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
}

.side__link {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
  color: var(--color-base);
}

.side__link:hover > *,
.side__link:hover {
  color: var(--color-brand);
  transition: color 100ms ease-in-out;
}

.side__link > .username {
  margin: auto;
}
</style>
