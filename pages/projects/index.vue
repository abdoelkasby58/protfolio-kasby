<template>
  <div>
   
    <AppCursor />
    <div class="noise-overlay"></div>
    <canvas id="three-canvas" ref="canvasRef"></canvas>

    <div class="page-wrapper" style="padding-top: 80px">
      <AppNav />

      <section class="projects" id="projects">
        <div class="section-header">
          <div>
            <p class="section-label reveal">// Selected Work</p>
            <h2 class="section-title reveal">Projects</h2>
            <span class="section-count reveal">2024 — 2026</span>
          </div>
          <div class="section-actions reveal">
            <NuxtLink to="/" class="btn btn-glow">← Back Home</NuxtLink>
          </div>
        </div>

        <div class="projects-grid">
          <div
            v-for="project in projects"
            :key="project.slug"
            class="project-card"
          >
            <div class="project-visual">
              <img
                :src="project.image"
                :alt="project.name"
                class="project-image"
              />
            </div>

            <div class="project-info">
              <div class="project-tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag.name"
                  :style="{
                    color: tag.color,
                    borderColor: tag.color,
                  }"
                  class="tag"
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

      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useThreeScene } from "~/composables/useThreeScene";
import { useGSAPAnimations } from "~/composables/useGSAPAnimations";
import projects from "~/data/projects";


const canvasRef = ref(null);
const { init, destroy } = useThreeScene();
const { initAnimations, initCursor } = useGSAPAnimations();

onMounted(async () => {
  if (canvasRef.value) await init(canvasRef.value);
  await initAnimations();
  initCursor();
});

onBeforeUnmount(() => destroy());
</script>
