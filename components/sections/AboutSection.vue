<template>
  <section class="about" id="about">
    <div class="about-left">
      <p class="about-label reveal">// About Me</p>
      <h2 class="about-title reveal">
        Passionate About Building Modern Web Experiences
      </h2>
      <p class="about-text reveal">
        I'm Abdelrahman Elkasby, a Frontend Developer based in Mansoura. My
        journey in web development began in 2025, driven by a passion for
        turning ideas into beautiful and interactive digital experiences. Since
        then, I've focused on mastering modern frontend technologies and
        building responsive, high-performance websites. During my 3-month
        internship at Neop, I gained hands-on experience working on projects and
        strengthening my problem-solving and teamwork skills. Alongside my
        studies at Mansoura University, I currently work on online projects and
        continue learning every day. I'm looking for new internship
        opportunities where I can contribute, gain valuable industry experience,
        and take the next step in my professional journey
      </p>
      <a
        href="#contact"
        class="btn btn-glow reveal-left"
        style="align-self: flex-start; display: inline-flex"
      >
        Let's Build Together →
      </a>
        <div class="about-card-grid">
        <div v-for="stat in stats" :key="stat.label" class="reveal-left">
          <div class="about-stat-num">
            {{ stat.value }}<span v-if="stat.suffix">{{ stat.suffix }}</span>
          </div>
          <div class="about-stat-label">{{ stat.label }}</div>
        </div>
        <div class="about-divider"></div>
      </div>
    </div>

    <div class="about-card reveal-left">
    <div class="about-card-inner">
     
  <img
    src="assets\imgs\abdoelkasby.webp"
    alt="Abdelrahman Elkasby"
    class="about-card-image"
  />

      <div class="about-card-content">
  <span>Vue & Nuxt Specialist</span>
</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "1", suffix: "+", label: "Years Experience" },
  { value: "8", suffix: "+", label: "Projects Shipped" },
 
  { value: "∞", suffix: "", label: "Lines of Code" },
];
</script>
