<template>
  <section class="projects" id="projects">
    <div class="section-header">
      <div>
        <p class="section-label reveal">// Selected Work</p>
        <h2 class="section-title reveal">Projects</h2>
        <span class="section-count reveal">2024 — 2026</span>
      </div>
      <div class="section-actions reveal">
        <NuxtLink to="/projects" class="btn btn-glow"> All Projects </NuxtLink>
      </div>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in projects.slice(0, 3)"
        :key="project.name"
        class="project-card"
      >
        <div class="project-visual">
          <img :src="project.image" :alt="project.name" class="project-image" />
        </div>

        <div class="project-info">
          <div class="project-tags">
  <span
    v-for="tag in project.tags"
    :key="tag.name"
    class="tag"
    :style="{
      color: tag.color,
      borderColor: tag.color
    }"
  >
    {{ tag.name }}
  </span>
</div>

          <h3 class="project-name">
            {{ project.name }}
          </h3>

          <p class="project-desc">
            {{ project.desc }}
          </p>

          <NuxtLink :to="`/projects/${project.slug}`" class="project-link">
            View Details →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import projects from '~/data/projects'
</script>
