<template>
  <div>
    <AppCursor />
    <div class="noise-overlay"></div>
    <canvas id="three-canvas" ref="canvasRef"></canvas>

    <div class="page-wrapper" style="padding-top: 80px;">
      <AppNav />

      <section v-if="project" class="project-details">

        <!-- Back link -->
        <NuxtLink to="/projects" class="back-link">
          <span class="back-arrow">←</span>
          <span>All Projects</span>
        </NuxtLink>

        <!-- Hero image -->
        <div class="details-hero">
          <img :src="project.image" :alt="project.name" class="details-hero-img" />
          <div class="details-hero-overlay"></div>
        </div>

        <!-- Content -->
        <div class="details-content">

          <!-- Tags -->
          <div class="details-tags">
            <span v-for="tag in project.tags" :key="tag.name" class="tag" :style="{ color: tag.color, borderColor: tag.color }">
              {{ tag.name }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="details-title">{{ project.name }}</h1>

          <!-- Divider -->
          <div class="details-divider"></div>

          <!-- Description -->
          <p class="details-desc">{{ project.details }}</p>

          <!-- Action Buttons -->
          <div class="details-actions">
            <a :href="project.link" target="_blank" rel="noopener" class="btn btn-glow">
              <Icon name="mdi:github" />
              GitHub
            </a>
            <a :href="project.liveLink" target="_blank" rel="noopener" class="btn btn-outline">
              <Icon name="mdi:open-in-new" />
              live view
            </a>

          </div>

        </div>
      </section>

      <!-- 404 fallback -->
      <section v-else class="project-not-found">
        <p class="section-label">// 404</p>
        <h2 class="section-title">Project Not Found</h2>
        <NuxtLink to="/projects" class="btn btn-glow" style="margin-top:2rem; display:inline-flex;">
          ← Back to Projects
        </NuxtLink>
      </section>

      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useThreeScene } from '~/composables/useThreeScene'
import { useGSAPAnimations } from '~/composables/useGSAPAnimations'
import projects from '~/data/projects'

const canvasRef = ref(null)
const { init, destroy } = useThreeScene()
const { initAnimations, initCursor } = useGSAPAnimations()

const route = useRoute()
const project = computed(() =>
  projects.find(item => item.slug === route.params.slug)
)

onMounted(async () => {
  if (canvasRef.value) await init(canvasRef.value)
  await initAnimations()
  initCursor()
})

onBeforeUnmount(() => destroy())
</script>

<style scoped>
/* ── Back link ──────────────────────────────── */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--star-dim);
  text-decoration: none;
  margin: 6vh 7vw 0;
  transition: color 0.3s, gap 0.3s;
  cursor: none;
}
.back-link:hover {
  color: var(--nebula-cyan);
  gap: 1rem;
}
.back-arrow {
  font-size: 1.1rem;
}

/* ── Hero image ─────────────────────────────── */
.details-hero {
  position: relative;
  margin: 3rem 7vw 0;
  border-radius: 24px;
  overflow: hidden;
  height: clamp(280px, 50vw, 560px);
  border: 1px solid var(--border);
}
.details-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.details-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(2, 1, 10, 0.85) 100%
  );
}

/* ── Content area ───────────────────────────── */
.details-content {
  padding: 3rem 7vw 10vh;
  max-width: 860px;
}

/* Tags */
.details-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.8rem;
}

/* Title */
.details-title {
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin-bottom: 2rem;
}

/* Divider */
.details-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    var(--nebula-purple),
    var(--nebula-cyan),
    transparent
  );
  margin-bottom: 2rem;
  border-radius: 999px;
}

/* Description */
.details-desc {
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 2.1;
  color: var(--star-dim);
  margin-bottom: 3rem;
}

/* Action buttons */
.details-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.btn-live {
  border-color: rgba(0, 240, 255, 0.35);
  color: var(--nebula-cyan);
}
.btn-live:hover {
  border-color: var(--nebula-cyan);
  background: rgba(0, 240, 255, 0.06);
}

.btn-disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
  border-color: var(--border);
  color: var(--star-faint);
}

/* ── Not found ──────────────────────────────── */
.project-not-found {
  padding: 20vh 7vw;
}

/* ── Responsive ─────────────────────────────── */
@media (max-width: 768px) {
  .details-hero {
    margin: 2rem 4vw 0;
    border-radius: 16px;
  }
  .details-content {
    padding: 2rem 4vw 8vh;
  }
  .back-link {
    margin: 4vh 4vw 0;
  }
  .details-actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>