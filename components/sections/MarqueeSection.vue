<template>
  <div class="marquee-section">
    <div class="marquee-track">
      <template v-for="_ in 2" :key="_">
        <span class="marquee-item solid">Vue</span><span class="marquee-sep">✦</span>
        <span class="marquee-item">Nuxt</span><span class="marquee-sep">✦</span>
        <span class="marquee-item solid">html/css</span><span class="marquee-sep">✦</span>
        <span class="marquee-item">javascript</span><span class="marquee-sep">✦</span>
        <span class="marquee-item solid">gsap</span><span class="marquee-sep">✦</span>
        <span class="marquee-item">Tailwind CSS</span><span class="marquee-sep">✦</span>
        <span class="marquee-item solid">Node.js</span><span class="marquee-sep">✦</span>
        <span class="marquee-item">three.js</span><span class="marquee-sep">✦</span>
      </template>
    </div>
  </div>
</template>