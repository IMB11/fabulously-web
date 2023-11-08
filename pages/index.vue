<script setup lang="ts">
import { Card, Button, DownloadIcon, Modal } from "omorphia";

useSeoMeta({
  title: "Fabulously Optimized",
  ogTitle: "Fabulously Optimized",
  description: `Fabulosuly Optimized is a high-performance Minecraft modpack that massively increases the peformance of the game whilst providing feature parity with Optifine using Sodium and Iris.`,
  ogDescription: `Fabulosuly Optimized is a high-performance Minecraft modpack that massively increases the peformance of the game whilst providing feature parity with Optifine using Sodium and Iris.`,
  ogImage: "/icon.png",
  twitterCard: "summary",
  twitterImage: "/icon.png",
  themeColor: "#d19321",
});

interface FeatureItem {
  title: string;
  image: string;
  description: string;
}

// Todo, turn feature cards into this array.
const features: FeatureItem[] = [
  {
    title: "Optifine Parity",
    image: "/features/optifine-parity.webp",
    description:
      "Fabulously Optimized is fully feature compatible with Optifine, including shaders, connected textures and zoom. You can even get your own free cape!",
  },
  {
    title: "High Performance",
    image: "/features/high-performance.webp",
    description:
      "Fabulously Optimized is built with performance in mind. We use the latest and greatest mods to make sure you get the best performance possible.",
  },
  {
    title: "Easy to Install",
    image: "/features/easy-to-install.webp",
    description:
      "Fabulously Optimized is easy to install. Available through the CurseForge launcher, Modrinth App, Prism, or MultiMC, you can install the modpack in a few clicks.",
  },
  {
    title: "Crowd Translated",
    image: "/features/crowd-translated.webp",
    description:
      "Fabulously Optimized is translated in over 20 languages thanks to the community, including French, Spanish, German, Russian, and more.",
  },
  {
    title: "Open Development",
    image: "/features/open-development.webp",
    description:
      "Fabulously Optimized is open-source and so are most of its mods. We collaborate with mod developers to create a better user experience for everyone.",
  },
  {
    title: "Helpful Community",
    image: "/features/helpful-community.webp",
    description:
      "Fabulously Optimized has a helpful community of players and developers that can help you with any issues you may have.",
  },
];
</script>

<template>
  <Modal class="download_modal" header="Download" ref="download_modal"
    ><DownloadSection
  /></Modal>
  <div class="columned-hero">
    <div class="column">
      <h1>
        <span class="supercharge__gradient">Supercharge</span> your Minecraft
        gameplay.
      </h1>
      <p class="subtitle">
        Fabulosuly Optimized is a high-performance Minecraft modpack that
        massively increases the peformance of the game whilst providing feature
        parity with Optifine using Sodium and Iris.
      </p>
      <br />
      <div class="buttons">
        <Button color="primary" @click="$refs.download_modal.show()"
          ><DownloadIcon /> Download</Button
        >
        <Button
          color="green"
          @click="
            navigateTo(`https://modrinth.com/modpack/fabulously-optimized`, {
              external: true,
              open: {
                target: '_blank',
              },
            })
          "
          >View on Modrinth</Button
        >
      </div>
    </div>
    <div class="column graph__container">
      <!-- <img class="dramatic-screenshot" src="/dramatic-screenshot.webp" /> -->
      <div class="graph">
        <div class="item">
          <p class="pretitle">FO</p>
          <div class="bar" style="background-color: #f5a50f !important">
            <p>259fps</p>
          </div>
        </div>
        <div class="item">
          <p class="pretitle">Optifine</p>
          <div class="bar"><p>56fps</p></div>
        </div>
        <div class="item">
          <p class="pretitle">Vanilla</p>
          <div class="bar"><p>49fps</p></div>
        </div>
      </div>
      <br />
      <div>
        <h3>
          Fabulously Optimized is
          <span class="smaller__gradient">4x quicker</span> than Optifine.<br />
        </h3>
      </div>
      <small
        >AMD Ryzen 5 2600 (12) @ 3.400GH and NVIDIA GeForce GTX 1060 3GB running
        Minecraft 1.20.1, Optifine for 1.20.2, Fabric Loader with Fabulously
        Optimized 5.5.0-beta.1. RD:8, Singleplayer, PLd</small
      >
    </div>
  </div>
  <div v-for="feature in features" class="feature-hero">
    <img
      v-if="features.indexOf(feature) % 2 === 1"
      :src="feature.image"
      class="dramatic-screenshot"
    />
    <div v-if="features.indexOf(feature) % 2 === 1">
      <h1>{{ feature.title }}</h1>
      <p>{{ feature.description }}</p>
    </div>
    <div v-if="features.indexOf(feature) % 2 === 0">
      <h1>{{ feature.title }}</h1>
      <p>{{ feature.description }}</p>
    </div>
    <img
      v-if="features.indexOf(feature) % 2 === 0"
      :src="feature.image"
      class="dramatic-screenshot"
    />
  </div>
  <div class="download-hero">
    <DownloadIcon />
    <h1>Download Now</h1>
    <p class="subtitle">
      Fabulously Optimized is available on the Modrinth App, CurseForge
      Launcher, MultiMC, and Prism.
    </p>
    <DownloadSection class="download-card-fix" />
  </div>
</template>

<style scoped lang="scss">
.download-hero {
  margin-top: 15rem;

  // Center everything.
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: var(--gap-xl);

  // Make icon big.
  svg {
    width: 5rem;
    height: 5rem;
  }
}

.download-card-fix {
  border-radius: var(--gap-xl) !important;
}

h3 {
  color: white !important;
}

.feature-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: var(--gap-xl);
  align-items: center;
  margin-top: var(--gap-xl);
  margin-bottom: var(--gap-xl);

  img {
    width: 85%;
    height: 85%;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;

    border-radius: var(--gap-xl);

    // Drop Shadow
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
}

.columned-hero {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: var(--gap-xl);
  align-items: center;
  margin-bottom: 8.75rem;
}

// On mobile, hide graph
@media (max-width: 999px) {
  .columned-hero {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-bottom: 0 !important;
  }

  .graph__container {
    display: none !important;
  }

  .feature-hero {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .feature-hero > img {
    display: none !important;
  }
}

.column {
  display: block;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-base);
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
}
</style>
