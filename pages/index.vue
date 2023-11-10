<script setup lang="ts">
import {
  Card,
  Button,
  DownloadIcon,
  Modal,
  ClientIcon,
  HeartIcon,
  StarIcon,
  SettingsIcon,
  PaintBrushIcon,
  LanguagesIcon,
} from "omorphia";

useSeoMeta({
  title: "Fabulously Optimized",
  ogTitle: "Fabulously Optimized",
  description: `A simple Minecraft modpack focusing on performance and graphics enhancements.`,
  ogDescription: `A simple Minecraft modpack focusing on performance and graphics enhancements.`,
  ogImage: "/icon.png",
  twitterCard: "summary",
  twitterImage: "/icon.png",
  themeColor: "#d19321",
});

interface FeatureItem {
  id: string;
  icon: any;
}

const features: FeatureItem[] = [
  {
    id: "performance",
    icon: StarIcon,
  },
  {
    id: "optifine-parity",
    icon: ClientIcon,
  },
  {
    id: "feels-familiar",
    icon: SettingsIcon,
  },
  {
    id: "works-anywhere",
    icon: SettingsIcon,
  },
  {
    id: "up-to-date",
    icon: LanguagesIcon,
  },
  {
    id: "built-on-fabric",
    icon: PaintBrushIcon,
  },
  {
    id: "open-development",
    icon: PaintBrushIcon,
  },
  {
    id: "helpful-community",
    icon: HeartIcon,
  },
];
</script>

<template>
  <!-- <Modal class="download_modal" header="Download" ref="download_modal"
    ><DownloadSection
  /></Modal> -->
  <div class="columned-hero">
    <div class="column">
      <h1>
        <span class="supercharge__gradient">{{
          $t("content.home.columned-hero.supercharge")
        }}</span>
        &nbsp;
        {{ $t("content.home.columned-hero.title") }}
      </h1>
      <p class="subtitle">{{ $t("content.home.columned-hero.subtitle") }}}</p>
      <br />
      <div class="buttons">
        <!-- <Button color="primary" @click="$refs.download_modal.show()"
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
        > -->
        <Button
          color="green"
          @click="navigateTo(`/modrinth`, { external: true })"
          ><DownloadIcon />Modrinth</Button
        >
        <Button
          color="orange"
          @click="navigateTo(`/curseforge`, { external: true })"
          ><DownloadIcon />CurseForge</Button
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
          <p class="pretitle">{{ $t("content.home.graph.vanilla") }}</p>
          <div class="bar"><p>49fps</p></div>
        </div>
      </div>
      <br />
      <div>
        <h3>
          Fabulously Optimized {{ $t("content.home.graph.title.is") }}
          <span class="smaller__gradient"
            >4x {{ $t("content.home.graph.title.quicker") }}</span
          >
          {{ $t("content.home.graph.title.than") }} Optifine.<br />
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
      :src="`/features/${feature.id}.webp`"
      class="dramatic-screenshot"
    />
    <div>
      <h1>
        <component class="feature-icon" :is="feature.icon"></component
        ><span>{{ $t(`feature.${feature.id}.title`) }}</span>
      </h1>
      <p>{{ $t(`feature.${feature.id}.desc`) }}</p>
    </div>
    <img
      v-if="features.indexOf(feature) % 2 === 0"
      :src="`/features/${feature.id}.webp`"
      class="dramatic-screenshot"
    />
  </div>
  <div class="download-hero">
    <DownloadIcon />
    <h1>{{ $t("content.home.download.title") }}</h1>
    <p class="subtitle">
      {{ $t("content.home.download.subtitle") }}
    </p>
    <div class="buttons">
      <Button
        :large="true"
        color="green"
        @click="navigateTo(`/modrinth`, { external: true })"
        >Modrinth</Button
      >
      <Button
        :large="true"
        color="orange"
        @click="navigateTo(`/curseforge`, { external: true })"
        >CurseForge</Button
      >
    </div>
    <!-- <DownloadSection class="download-card-fix" /> -->
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

  div {
    .feature-icon {
      width: 2.5rem;
      height: 2.5rem;
    }

    h1 {
      display: flex;
      gap: var(--gap-md);
      span {
        margin-top: auto;
        margin-bottom: auto;
      }
    }
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
