export function useGSAPAnimations() {

  const initAnimations = async () => {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    // اقتل كل الـ ScrollTrigger القديمة عشان متتراكمش
    ScrollTrigger.getAll().forEach(t => t.kill())

    // Hero entrance — بس لو على الـ home page
    const heroBadge = document.querySelector('.hero-badge')
    if (heroBadge) {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.to('.hero-badge',        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        .to('.hero-title .word',  { opacity: 1, y: 0, duration: 1.1, stagger: 0.07, ease: 'power4.out' }, '-=0.5')
        .to('.hero-desc',         { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.7')
        .to('.hero-actions',      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('.hero-scroll',       { opacity: 1, duration: 0.8 }, '-=0.3')

      // Hero parallax
      gsap.to('.hero-title', {
        y: '-12vh', ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    // Generic scroll reveals
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          delay: el.dataset.delay || 0,
          scrollTrigger: { trigger: el, start: 'top 82%' }
        }
      )
    })

    gsap.utils.toArray('.reveal-left').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' }
        }
      )
    })

    // Skills bars
    gsap.utils.toArray('.skill-item').forEach((el, i) => {
      const fill = el.querySelector('.skill-level-fill')
      const level = fill ? fill.dataset.level : null
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, delay: i * 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: el.parentElement, start: 'top 80%' },
          onStart: () => { if (fill && level) fill.style.width = level + '%' }
        }
      )
    })

    // Project cards
    gsap.utils.toArray('.project-card').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, delay: i * 0.15, ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        }
      )
    })
  }

  const initCursor = () => {
    if (typeof window === 'undefined') return
    const dot  = document.querySelector('.cursor')
    const ring = document.querySelector('.cursor-ring')
    if (!dot || !ring) return

    let rx = 0, ry = 0

    document.addEventListener('mousemove', e => {
      dot.style.left = e.clientX - 5 + 'px'
      dot.style.top  = e.clientY - 5 + 'px'
    })

    const trail = () => {
      const dr = dot.getBoundingClientRect()
      rx += (dr.left + 5 - rx) * 0.13
      ry += (dr.top  + 5 - ry) * 0.13
      ring.style.left = rx - 19 + 'px'
      ring.style.top  = ry - 19 + 'px'
      requestAnimationFrame(trail)
    }
    trail()

    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover], input, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover') })
        el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover') })
      })
    }
    addHover()

    // بعد كل route change نعيد ربط الـ hover للعناصر الجديدة
    if (typeof window !== 'undefined') {
      window.__cursorRebind = addHover
    }
  }

  return { initAnimations, initCursor }
}