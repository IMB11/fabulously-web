<script setup lang="ts">
import {
  Toggle,
  Card,
  renderHighlightedString,
  Button,
  DownloadIcon,
  CalendarIcon,
  Badge,
} from "omorphia";

const showStable = ref(true);
const latestVersion: Ref<any> = ref({ notLoaded: true });
const latestPreReleaseVersion: Ref<any> = ref({ notLoaded: true });

const downloadURL = computed(() => {
  return showStable.value
    ? latestVersion.value.url
    : latestPreReleaseVersion.value.url;
});

const changelog = computed(() => {
  if (
    latestVersion.value.notLoaded ||
    latestPreReleaseVersion.value.notLoaded
  ) {
    return "Loading...";
  }

  return showStable.value
    ? latestVersion.value.changelog
    : latestPreReleaseVersion.value.changelog;
});

const title = computed(() => {
  if (
    latestVersion.value.notLoaded ||
    latestPreReleaseVersion.value.notLoaded
  ) {
    return "Loading...";
  }

  return showStable.value
    ? `Fabulously Optimized v${latestVersion.value.tag}`
    : `Fabulously Optimized v${latestPreReleaseVersion.value.tag}`;
});

const date = computed(() => {
  if (
    latestVersion.value.notLoaded ||
    latestPreReleaseVersion.value.notLoaded
  ) {
    return "Loading...";
  }

  // Format releaseDate to be more readable.
  const date = new Date(
    showStable.value
      ? latestVersion.value.releaseDate
      : latestPreReleaseVersion.value.releaseDate
  ).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return date;
});

const versionID = computed(() => {
  if (
    latestVersion.value.notLoaded ||
    latestPreReleaseVersion.value.notLoaded
  ) {
    return "Loading...";
  }

  return showStable.value
    ? latestVersion.value.id
    : latestPreReleaseVersion.value.id;
});

onBeforeMount(async () => {
  // Make a web request to https://fabulously-meta.mineblock11.dev/ to get the latest version of the modpack.
  // /v1/modpackVersions
  const versions = await (
    await fetch("https://fabulously-meta.mineblock11.dev/v1/modpackVersions")
  ).json();

  if (!versions) {
    throw new Error(
      "The Fabulously Optimized API is down and therefore the website is temporarily unavailable."
    );
  }

  latestVersion.value = versions.latest;
  latestPreReleaseVersion.value = versions.latestPreRelease;
});
</script>

<template>
  <Card class="download-card">
    <!-- Title should contain a toggle that switches between prerelease and stable. -->
    <h2 class="title">
      <span class="version">
        {{ title }}
      </span>
    </h2>

    <div class="subrow">
      <Badge color="orange" v-if="!showStable" type="Pre-Release" />
      <span><CalendarIcon /> {{ date }}</span>
    </div>
    <h3>Changelog</h3>
    <span class="markdown" v-html="renderHighlightedString(changelog)"></span>

    <hr class="card-divider" />
    <div class="buttons">
      <Button
        color="green"
        @click="
          navigateTo(
            `https://modrinth.com/modpack/fabulously-optimized/version/${versionID}`,
            {
              external: true,
              open: {
                target: '_blank',
              },
            }
          )
        "
      >
        <DownloadIcon /> Modrinth
      </Button>
      <Button
        color="black"
        @click="
          navigateTo(downloadURL, {
            external: true,
            open: {
              target: '_blank',
            },
          })
        "
      >
        <DownloadIcon /> GitHub
      </Button>
      <div class="toggle-pair">
        <p>Pre-Release</p>
        <Toggle v-model="showStable" />
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.toggle-pair {
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;

  gap: var(--gap-sm);

  * {
    margin-top: auto;
    margin-bottom: auto;
  }
}

.subrow {
  display: flex;
  flex-direction: row;
  gap: var(--gap-sm);
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: var(--gap-sm);

  .button {
    margin: auto;
  }
}

.card-divider {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.markdown {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.15;
    font-weight: revert;
    font-size: revert;
    margin: revert;
  }
  ul,
  ol {
    list-style: revert;
    margin: revert;
    padding: revert;
  }
  blockquote {
    margin: revert;
  }
}
</style>
