<template>
  <div>
    <!-- Cursor -->
    <div class="cursor"></div>
    <div class="cursor-ring"></div>
    <!-- Noise -->
    <div class="noise-overlay"></div>
    <!-- Canvas -->
    <canvas id="three-canvas" ref="canvasRef"></canvas>

    <!-- Nav -->
    <nav>
      <a href="#" class="nav-logo">AE<span>.</span></a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact" class="nav-cta">Hire Me</a></li>
      </ul>
    </nav>

    <div class="page-wrapper">

      <!-- ── HERO ───────────────────────────── -->
      <section class="hero" id="hero">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span class="badge-text">Available for freelance & full-time</span>
        </div>

        <h1 class="hero-title">
          <span class="line"><span class="word">Abdelrahman</span></span>
          <span class="line"><span class="word highlight">Elkasby</span></span>
          <span class="line"><span class="word" style="font-size:0.45em; letter-spacing:0.05em; -webkit-text-fill-color: var(--star-dim);">Frontend Developer</span></span>
        </h1>

        <p class="hero-desc">
          I build immersive web experiences where design meets engineering.<br>
          Specializing in modern UI, 3D animations & high-performance interfaces.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-glow">View My Work →</a>
          <a href="#contact" class="btn btn-outline">Get In Touch</a>
        </div>

        <div class="hero-scroll">
          <span>Scroll</span>
          <div class="scroll-bar"></div>
        </div>
      </section>

      <!-- ── MARQUEE ────────────────────────── -->
      <div class="marquee-section">
        <div class="marquee-track">
          <span class="marquee-item solid">React</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">Vue / Nuxt</span><span class="marquee-sep">✦</span>
          <span class="marquee-item solid">Three.js</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">GSAP</span><span class="marquee-sep">✦</span>
          <span class="marquee-item solid">TypeScript</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">Tailwind CSS</span><span class="marquee-sep">✦</span>
          <span class="marquee-item solid">Node.js</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">UI/UX Design</span><span class="marquee-sep">✦</span>
          <!-- duplicate -->
          <span class="marquee-item solid">React</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">Vue / Nuxt</span><span class="marquee-sep">✦</span>
          <span class="marquee-item solid">Three.js</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">GSAP</span><span class="marquee-sep">✦</span>
          <span class="marquee-item solid">TypeScript</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">Tailwind CSS</span><span class="marquee-sep">✦</span>
          <span class="marquee-item solid">Node.js</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">UI/UX Design</span><span class="marquee-sep">✦</span>
        </div>
      </div>

      <!-- ── ABOUT ──────────────────────────── -->
      <section class="about" id="about">
        <div class="about-left">
          <p class="about-label reveal">// About Me</p>
          <h2 class="about-title reveal">Building The<br>Web Of<br>Tomorrow</h2>
          <p class="about-text reveal">
            I'm Abdelrahman Elkasby, a passionate Frontend Developer who turns creative visions into pixel-perfect, interactive realities. I obsess over details — from micro-animations to performance optimization.
          </p>
          <p class="about-text reveal">
            With a deep love for the intersection of art and code, I craft digital experiences that feel alive. Every project is a chance to push the boundaries of what the web can do.
          </p>
          <a href="#contact" class="btn btn-glow reveal" style="align-self: flex-start; display: inline-flex;">Let's Build Together →</a>
        </div>
        <div class="about-card reveal-left">
          <div class="about-card-grid">
            <div>
              <div class="about-stat-num">3<span>+</span></div>
              <div class="about-stat-label">Years Experience</div>
            </div>
            <div>
              <div class="about-stat-num">20<span>+</span></div>
              <div class="about-stat-label">Projects Shipped</div>
            </div>
            <div class="about-divider"></div>
            <div>
              <div class="about-stat-num">15<span>+</span></div>
              <div class="about-stat-label">Happy Clients</div>
            </div>
            <div>
              <div class="about-stat-num">∞</div>
              <div class="about-stat-label">Lines of Code</div>
            </div>
            <div class="about-divider"></div>
            <p class="about-quote">
              Clean code is not written by following a set of rules. You know it when you see it.
            </p>
          </div>
        </div>
      </section>

      <!-- ── SKILLS ─────────────────────────── -->
      <section class="skills" id="skills">
        <div class="section-header">
          <div>
            <p class="section-label reveal">// Tech Stack</p>
            <h2 class="section-title reveal">My Arsenal</h2>
          </div>
          <span class="section-count reveal">12 Technologies</span>
        </div>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name"
               class="skill-item"
               :style="`--skill-color: ${skill.color}`">
            <span class="skill-icon">{{ skill.icon }}</span>
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-level">
              <div class="skill-level-fill" :data-level="skill.level"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── PROJECTS ───────────────────────── -->
      <section class="projects" id="projects">
        <div class="section-header">
          <div>
            <p class="section-label reveal">// Selected Work</p>
            <h2 class="section-title reveal">Projects</h2>
          </div>
          <span class="section-count reveal">2024 — 2025</span>
        </div>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.name" class="project-card">
            <div class="project-visual">
              <div :class="`project-bg ${project.bgClass}`"></div>
              <div class="project-glyph" :style="`color:${project.color}`">{{ project.glyph }}</div>
            </div>
            <div class="project-info">
              <div class="project-tags">
                <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
              </div>
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-desc">{{ project.desc }}</p>
              <a :href="project.link" class="project-link">View Project <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <!-- ── CONTACT ────────────────────────── -->
      <section class="contact" id="contact">
        <div class="contact-left">
          <p class="section-label reveal">// Contact</p>
          <h2 class="section-title reveal">Let's Work<br>Together</h2>
          <p class="reveal">
            Have a project in mind or just want to say hi?<br>
            I'm always open to new opportunities and collaborations.
          </p>
          <div class="contact-links">
            <a href="mailto:abdelrahman@email.com" class="contact-link reveal">
              <div class="contact-link-left">
                <span class="contact-link-icon">✉️</span>
                <div>
                  <div class="contact-link-label">Email</div>
                  <div class="contact-link-value">abdelrahman@email.com</div>
                </div>
              </div>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a href="https://github.com/abdelrahmanelkasby" target="_blank" class="contact-link reveal">
              <div class="contact-link-left">
                <span class="contact-link-icon">⌨️</span>
                <div>
                  <div class="contact-link-label">GitHub</div>
                  <div class="contact-link-value">github.com/abdelrahmanelkasby</div>
                </div>
              </div>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a href="https://linkedin.com/in/abdelrahmanelkasby" target="_blank" class="contact-link reveal">
              <div class="contact-link-left">
                <span class="contact-link-icon">💼</span>
                <div>
                  <div class="contact-link-label">LinkedIn</div>
                  <div class="contact-link-value">Abdelrahman Elkasby</div>
                </div>
              </div>
              <span class="contact-link-arrow">↗</span>
            </a>
          </div>
        </div>

        <div class="contact-form reveal-left">
          <div class="form-field">
            <input type="text" placeholder=" " id="fname" />
            <label for="fname">Your Name</label>
          </div>
          <div class="form-field">
            <input type="email" placeholder=" " id="femail" />
            <label for="femail">Email Address</label>
          </div>
          <div class="form-field">
            <textarea placeholder=" " id="fmsg"></textarea>
            <label for="fmsg">Your Message</label>
          </div>
          <div class="form-submit">
            <button class="btn btn-glow" style="width:100%; justify-content:center; border:none; cursor:none;">
              Send Message →
            </button>
          </div>
        </div>
      </section>

      <!-- ── FOOTER ─────────────────────────── -->
      <footer>
        <span>© 2025 Abdelrahman Elkasby. Built with Nuxt 3 + Three.js + GSAP</span>
        <span>Designed & Coded with ♥</span>
      </footer>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useThreeScene } from '~/composables/useThreeScene'
import { useGSAPAnimations } from '~/composables/useGSAPAnimations'

const canvasRef = ref(null)
const { init, destroy } = useThreeScene()
const { initAnimations, initCursor } = useGSAPAnimations()

const skills = [
  { name:'HTML5',      icon:'🌐', level:95, color:'#ff6b2b' },
  { name:'CSS3',       icon:'🎨', level:92, color:'#7b2fff' },
  { name:'JavaScript', icon:'⚡', level:90, color:'#f7df1e' },
  { name:'TypeScript', icon:'🔷', level:82, color:'#3178c6' },
  { name:'React',      icon:'⚛️', level:88, color:'#61dafb' },
  { name:'Vue / Nuxt', icon:'💚', level:85, color:'#42b883' },
  { name:'Three.js',   icon:'🌌', level:75, color:'#00f0ff' },
  { name:'GSAP',       icon:'🎭', level:78, color:'#88ce02' },
  { name:'Tailwind',   icon:'💨', level:90, color:'#38bdf8' },
  { name:'Figma',      icon:'🖌️', level:80, color:'#ff2d8a' },
  { name:'Git',        icon:'🌿', level:85, color:'#f05032' },
  { name:'Node.js',    icon:'🟩', level:70, color:'#68a063' },
]

const projects = [
  {
    name: 'Cosmos 3D',
    desc: 'An immersive space exploration platform built with Nuxt 3, Three.js, and GSAP. Features real-time 3D particle systems, shader animations, and smooth scroll-driven interactions.',
    tags: ['Nuxt 3', 'Three.js', 'GSAP', 'GLSL'],
    glyph: '🌌', color: '#7b2fff', bgClass: 'p-bg-1',
    link: 'https://github.com/abdelrahmanelkasby'
  },
  {
    name: 'E-Commerce UI',
    desc: 'High-performance e-commerce frontend with animated product cards, cart interactions, and seamless checkout flow.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    glyph: '🛍️', color: '#ff2d8a', bgClass: 'p-bg-2',
    link: 'https://github.com/abdelrahmanelkasby'
  },
  {
    name: 'Dashboard SaaS',
    desc: 'Data-rich analytics dashboard with real-time charts, dark mode, and fully responsive layout built for scale.',
    tags: ['Vue 3', 'D3.js', 'Pinia'],
    glyph: '📊', color: '#00f0ff', bgClass: 'p-bg-3',
    link: 'https://github.com/abdelrahmanelkasby'
  },
]

onMounted(async () => {
  if (canvasRef.value) await init(canvasRef.value)
  await initAnimations()
  initCursor()
})

onBeforeUnmount(() => destroy())
</script>
