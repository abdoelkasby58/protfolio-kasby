<template>
  <section class="skills" id="skills">
    <div class="section-header">
      <div>
        <p class="section-label reveal">// Tech Stack</p>
        <h2 class="section-title reveal">My Arsenal</h2>
      </div>
      <span class="section-count reveal">{{ skills.length }} Technologies</span>
    </div>

    <div class="skills-grid">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="skill-item"
        :style="`--skill-color: ${skill.color}`"
      >
        <Icon :icon="skill.icon" class="skill-icon" />

        <span class="skill-name">{{ skill.name }}</span>

        <div class="skill-percent">{{ skill.level }}%</div>

        <div class="skill-level">
          <div
            class="skill-level-fill"
            :style="{ width: skill.level + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const skills = [
  { name: "HTML5", icon: "logos:html-5", color: "#E34F26", level: 95 },
  { name: "CSS3", icon: "logos:css-3", color: "#1572B6", level: 90 },
  { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E", level: 78 },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    color: "#06B6D4",
    level: 80,
  },
  { name: "Bootstrap", icon: "logos:bootstrap", color: "#7952B3", level: 66 },
  { name: "Vue.js", icon: "logos:vue", color: "#42B883", level: 79 },
  { name: "Nuxt.js", icon: "logos:nuxt-icon", color: "#00DC82", level: 65 },

  { name: "GSAP", icon: "simple-icons:greensock", color: "#88CE02", level: 69 },
  { name: "Git", icon: "logos:git-icon", color: "#F05032", level: 70 },
  { name: "GitHub", icon: "mdi:github", color: "#ffffff", level: 75 },
  { name: "Performance", icon: "mdi:speedometer", color: "#00E5FF", level: 74 },
  {
    name: "Design Systems",
    icon: "mdi:view-dashboard-outline",
    color: "#FF6B6B",
    level: 80,
  },

  {
    name: "Responsive Design",
    icon: "mdi:responsive",
    color: "#A855F7",
    level: 83,
  },
];
</script>
