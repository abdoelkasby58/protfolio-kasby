<template>
  <nav
    class="fixed top-0 left-0 right-0 z-[100] px-[7vw] py-[1.8rem] flex justify-between items-center"
  >
    <!-- Logo -->
    <a href="#" class="nav-logo">AE<span class="text-nebula-cyan">.</span></a>

    <!-- Desktop Navigation -->
    <ul class="nav-links hidden md:flex gap-[2.5rem] list-none">
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#skills" class="nav-link">Skills</a></li>
      <li><a href="#projects" class="nav-link">Projects</a></li>
      <li><a href="#contact" class="nav-link">contact</a></li>
      <li>
        <a
          href="https://github.com/abdoelkasby58/CV-ATS/blob/main/Abdelrahiman_Elkasby_CV_ATS.pdf"
          aria-label="Download CV"
          class="nav-cta"
        >
          My CV
        </a>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="md:hidden relative z-[102] w-10 h-10 flex flex-col justify-center gap-1.5"
      :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
    >
      <Icon
        :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
        :width="28"
        :height="28"
        class="text-star"
      />
    </button>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0 -translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 -translate-x-full"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden fixed inset-0 z-[101] bg-void/95 backdrop-blur-sm"
        @click="isMenuOpen = false"
      >
        <div
          class="absolute top-20 left-0 right-0 flex flex-col px-[7vw] py-8 gap-4"
          @click.stop
        >
          <a
            href="#about"
            class="text-xl font-bold text-star uppercase py-3 hover:text-nebula-cyan transition-colors"
            @click="isMenuOpen = false"
          >
            About
          </a>
          <a
            href="#skills"
            class="text-xl font-bold text-star uppercase py-3 hover:text-nebula-cyan transition-colors"
            @click="isMenuOpen = false"
          >
            Skills
          </a>
          <a
            href="#projects"
            class="text-xl font-bold text-star uppercase py-3 hover:text-nebula-cyan transition-colors"
            @click="isMenuOpen = false"
          >
            Projects
          </a>
          <a
            href="#contact"
            class="text-xl font-bold text-star uppercase py-3 hover:text-nebula-cyan transition-colors"
            @click="isMenuOpen = false"
          >
            contact
          </a>

          <a
            class="px-[1.5rem] py-3 border border-nebula-cyan text-nebula-cyan font-bold uppercase inline-block mt-4 hover:bg-nebula-cyan hover:text-void transition-all w-fit"
            href="https://github.com/abdoelkasby58/CV-ATS/blob/main/Abdelrahiman_Elkasby_CV_ATS.pdf"
            aria-label="Download CV"
          >
            my cv
          </a> 
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";

 const isMenuOpen = ref(false);
</script>

<style scoped>
.nav-logo {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: var(--star);
  text-transform: uppercase;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--star-dim);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--nebula-cyan);
}

.nav-cta {
  padding: 0.6rem 1.5rem;
  border: 1px solid var(--nebula-cyan);
  color: var(--nebula-cyan) !important;
  transition:
    background 0.3s,
    color 0.3s !important;
}

.nav-cta:hover {
  background: var(--nebula-cyan) !important;
  color: var(--void) !important;
}
</style>
