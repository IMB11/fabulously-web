<script setup>
import { Card, Button } from "omorphia";
</script>

<template>
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
    </div>
    <div class="column chart__container">
      <!-- <img class="dramatic-screenshot" src="/dramatic-screenshot.webp" /> -->
      <div class="chart">
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
  <h1>Features</h1>
  <div class="feature-grid">
    <Card>
      <h2>Optifine Parity</h2>
      <p>
        Fabulously Optimized is fully feature compatible with Optifine,
        including shaders, connected textures and zoom. You can even get your
        own free cape!
      </p>
      <a
        href="https://fabulously-optimized.gitbook.io/modpack/readme/give-up-optifine"
        target="_blank"
        ><Button>Read More</Button></a
      >
    </Card>
    <Card>
      <h2>High Performance</h2>
      <p>
        Fabulously Optimized is built with performance in mind. We use the
        latest and greatest mods to make sure you get the best performance
        possible.
      </p>
      <a
        href="https://fabulously-optimized.gitbook.io/modpack/readme/performance"
        target="_blank"
        ><Button>Read More</Button></a
      >
    </Card>
    <Card>
      <h2>Easy to Install</h2>
      <p>
        Fabulously Optimized is easy to install. Available through the
        CurseForge launcher, Modrinth App, Prism, or MultiMC, you can install
        the modpack in a few clicks.
      </p>
      <a
        href="https://fabulously-optimized.gitbook.io/modpack/readme/install-instructions"
        target="_blank"
        ><Button>Read More</Button></a
      >
    </Card>
    <Card>
      <h2>Crowd Translated</h2>
      <p>
        Fabulously Optimized is translated in over 20 languages thanks to the
        community, including French, Spanish, German, Russian, and more.
      </p>
      <a
        href="https://fabulously-optimized.gitbook.io/modpack/readme/language-support"
        target="_blank"
        ><Button>Read More</Button></a
      >
    </Card>
    <Card>
      <h2>Open Development</h2>
      <p>
        Fabulously Optimized is open-source and so are most of its mods. We
        collaborate with mod developers to create a better user experience for
        everyone.
      </p>
      <a
        href="https://github.com/Fabulously-Optimized/fabulously-optimized"
        target="_blank"
        ><Button>Read More</Button></a
      >
    </Card>
    <Card>
      <h2>Helpful Community</h2>
      <p>
        Fabulously Optimized has a helpful community of players and developers
        that can help you with any issues you may have.
      </p>
      <a href="/discord" target="_blank"><Button>Read More</Button></a>
    </Card>
  </div>
</template>

<style scoped lang="scss">
h3 {
  color: white !important;
}

.dramatic-screenshot {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.feature-grid {
  // Grid of cards.
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  gap: var(--gap-md);
  align-items: center;
  justify-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  // Make cards have same height
  .card {
    height: 100%;

    // Ensure all headers end at the same height in the card.
    h2 {
      margin-bottom: 0;
    }

    // Ensure all paragraphs start at the same height in the card.
    p {
      margin-top: var(--gap-sm);
      margin-bottom: calc(var(--gap-xl) * 1.5);
    }

    // Align button (a) to bottom of card.
    a {
      position: absolute;
      text-decoration: none;
      bottom: var(--gap-xl);
    }
  }
}

// Make column 1 take up 2/3 and column 2 take up 1/3
.columned-hero {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: var(--gap-xl);
  align-items: center;
}

// On mobile, hide graph
@media (max-width: 999px) {
  .columned-hero {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .chart__container {
    display: none !important;
  }
}

.column {
  display: block;
}

// Make a container for the chart that holds a title that is centered, and the chart itself.
.chart__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-md);
  width: 100%;
  height: 100%;

  // title
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-base);
  }

  .chart {
    display: flex;
    flex-direction: row;
    gap: var(--gap-md);
    width: 100%;

    .item {
      display: block;
      width: 100%;
      counter-reset: bars;

      // Title on top of the bars.
      .pretitle {
        position: relative;
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--color-base);
      }

      .bar::before {
        counter-increment: bars;
      }

      .bar {
        // Center the FPS number inside the bar.
        display: flex;
        justify-content: center;
        align-items: center;

        // Add dropshadow to text.
        p {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.75));
        }
      }
    }

    // Make the 1st bar significantly bigger than the other ones.
    .item:nth-child(1) > .bar {
      height: calc(100%) !important;
      margin-top: -0.75rem !important;
    }

    .item:nth-child(1) > .pretitle {
      top: -0.5rem !important;
    }

    @for $i from 1 through 3 {
      .item:nth-child(#{$i}) > .pretitle {
        display: relative;

        // Offset pretitle onto the bar top.
        // add 0.5rem padding
        top: calc((40px * #{$i} * 2) - 0.5rem);
      }

      .item:nth-child(#{$i}) > .bar {
        width: 100%;

        height: calc(100% + (-40px * #{$i} * 2));

        // offset height from top;
        margin-top: calc((40px * #{$i} * 2));

        background-color: rgb(44, 183, 218);
        border-radius: 0.5rem;
      }
    }
  }
}

.supercharge__gradient {
  background: linear-gradient(
    90deg,
    #f5a50f 0%,
    #d19321 25%,
    #fceb01 50%,
    #d19321 75%,
    #e6f148 100%
  );
  // animate gradient
  background-size: 200% auto;
  animation: gradient 3s ease-in-out infinite;

  // slight shadow to make it pop out
  filter: drop-shadow(2px 2px 0px rgb(5, 5, 5));
  // solid shadow though
  // animation keyframes
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 1.5em;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-right: 0.5rem;
}

.smaller__gradient {
  // Blue gradient.
  background: linear-gradient(
    90deg,
    #f5a50f 0%,
    #d19321 25%,
    #fceb01 50%,
    #d19321 75%,
    #e6f148 100%
  );
  // animate gradient
  background-size: 200% auto;
  animation: gradient 3s ease-in-out infinite;

  // slight shadow to make it pop out
  filter: drop-shadow(2px 2px 0px rgb(0, 0, 0));
  // solid shadow though
  // animation keyframes
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 1.25em;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-right: 0.5rem;
}

// Make gradient text smaller on mobile.
@media (max-width: 999px) {
  .supercharge__gradient {
    font-size: 1.1em;
  }
}

// .columned-hero {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%;
//   gap: var(--gap-xl);
//   align-items: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
// }

// .columned-hero > .column {
//   display: block;
// }

.subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-base);
}
</style>
