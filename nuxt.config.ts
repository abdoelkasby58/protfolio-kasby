export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Abdelrahman Elkasby — Frontend Developer',
      meta: [
        { name: 'description', content: 'Frontend Developer specializing in immersive web experiences, 3D animations, and modern UI/UX.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap' },
        // إضافة الأيقونة هنا بالمسار الصحيح لـ Nuxt
        { rel: 'icon', type: 'image/webp', href: '/_nuxt/assets/imgs/ae.webp' }
      ]
    }
  },
  vite: {
    optimizeDeps: { include: ['three', 'gsap'] }
  }
})