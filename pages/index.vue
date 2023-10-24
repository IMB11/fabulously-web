<script setup></script>

<template>
  <div class="columned-hero">
    <div class="column">
      <h1>
        <span class="supercharge__gradient">Supercharge</span> your Minecraft
        gameplay.
      </h1>
      <p class="subtitle">
        Fabulosuly Optimized is a high-performance Minecraft modpack that
        massively increases the peformance of the game whilst providing parity
        to Optifine using Sodium and Iris.
      </p>
    </div>
    <div class="column chart__container">
      <!-- <img class="dramatic-screenshot" src="/dramatic-screenshot.webp" /> -->
      <div class="chart">
        <div class="item">
          <p class="pretitle">FO</p>
          <div class="bar"><p>259fps</p></div>
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
      <small
        >AMD Ryzen 5 2600 (12) @ 3.400GH and NVIDIA GeForce GTX 1060 3GB running
        Minecraft 1.20.1, Optifine for 1.20.2, Fabric Loader with Fabulously
        Optimized 5.5.0-beta.1</small
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.dramatic-screenshot {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
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

        background-color: #f5a50f;
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
  filter: drop-shadow(2px 2px 0px rgb(126, 121, 49));
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
  font-size: 3cap;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-right: 0.5rem;
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
