<template>
  <div>
    <div
      :class="[
        'fixed bottom-5 right-5 cursor-pointer transition-all duration-300 flex items-center justify-center rounded-full z-[1111]',
        showScroll
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5 pointer-events-none',
      ]"
      @click="ScrollToTop"
    >
      <div
        class="bg-[var(--cosmic)] hover:bg-[var(--deep)] text-[var(--nebula-cyan)] hover:text-[var(--star)] p-2 text-2xl md:text-4xl rounded-full border border-[var(--border)] shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(123,47,255,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm"
      >
        <Icon icon="material-symbols:keyboard-arrow-up-rounded" />
      </div>
    </div>
    <!-- Global UI -->
    <AppCursor />
    <div class="noise-overlay"></div>
    <canvas id="three-canvas" ref="canvasRef"></canvas>

    <!-- Page sections -->
    <div class="page-wrapper">
      <AppNav />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import { useThreeScene } from "~/composables/useThreeScene";
import { useGSAPAnimations } from "~/composables/useGSAPAnimations";
import { Icon } from "@iconify/vue";
const canvasRef = ref(null);
const { init, destroy } = useThreeScene();
const { initAnimations, initCursor } = useGSAPAnimations();

onMounted(async () => {
  if (canvasRef.value) await init(canvasRef.value);
  await initAnimations();
  initCursor();
});

onBeforeUnmount(() => destroy());
const showScroll = ref(false);
const handleScroll = () => {
  showScroll.value = window.scrollY > 300;
};
const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
