export function useThreeScene() {
  let renderer, scene, camera, animId
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0

  const init = async (canvas) => {
    const THREE = await import('three')

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000)
    camera.position.z = 90

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x02010a, 1)

    // ── Stars ──────────────────────────────────────────────
    const starsGeo = new THREE.BufferGeometry()
    const N = 7000
    const pos = new Float32Array(N * 3)
    const col = new Float32Array(N * 3)
    const sz = new Float32Array(N)
    const starPalette = [[1,1,1],[0.7,0.85,1],[1,0.9,0.7],[0.85,0.7,1],[0.7,1,1]]
    for (let i = 0; i < N; i++) {
      pos[i*3] = (Math.random()-0.5)*2400
      pos[i*3+1] = (Math.random()-0.5)*2400
      pos[i*3+2] = (Math.random()-0.5)*2400
      const c = starPalette[Math.floor(Math.random()*starPalette.length)]
      col[i*3]=c[0]; col[i*3+1]=c[1]; col[i*3+2]=c[2]
      sz[i] = Math.random()*2.2+0.3
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    starsGeo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    starsGeo.setAttribute('size', new THREE.BufferAttribute(sz, 1))

    const starMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float size; attribute vec3 color; varying vec3 vCol;
        uniform float time;
        void main() {
          vCol = color;
          float tw = sin(time*1.2 + position.x*0.008 + position.z*0.005)*0.4+0.6;
          gl_PointSize = size * tw;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec3 vCol;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = 1.0 - smoothstep(0.15, 0.5, d);
          gl_FragColor = vec4(vCol, a);
        }`,
      transparent: true, vertexColors: true, depthWrite: false,
      blending: THREE.AdditiveBlending
    })
    const stars = new THREE.Points(starsGeo, starMat)
    scene.add(stars)

    // ── Nebula clouds ─────────────────────────────────────
    const makeNebula = (hex, cx, cy, cz, r, n) => {
      const g = new THREE.BufferGeometry()
      const p = new Float32Array(n*3)
      for (let i=0;i<n;i++) {
        const theta=Math.random()*Math.PI*2, phi=Math.acos(2*Math.random()-1)
        const rad = Math.random()*r
        p[i*3]=cx+rad*Math.sin(phi)*Math.cos(theta)
        p[i*3+1]=cy+rad*Math.sin(phi)*Math.sin(theta)
        p[i*3+2]=cz+rad*Math.cos(phi)
      }
      g.setAttribute('position', new THREE.BufferAttribute(p,3))
      return new THREE.Points(g, new THREE.PointsMaterial({
        color: new THREE.Color(hex), size: 3.5,
        transparent: true, opacity: 0.07,
        blending: THREE.AdditiveBlending, depthWrite: false
      }))
    }
    const nebula = new THREE.Group()
    nebula.add(makeNebula('#7b2fff', -40, 25, -70, 70, 2500))
    nebula.add(makeNebula('#ff2d8a',  50,-15,-100, 90, 3500))
    nebula.add(makeNebula('#00f0ff', -55,-35, -60, 55, 1800))
    nebula.add(makeNebula('#ff6b2b',  15, 50,-120, 80, 3000))
    scene.add(nebula)

    // ── Floating torus rings ──────────────────────────────
    const rings = new THREE.Group()
    const ringCfg = [
      {r:18, t:0.1, hex:'#7b2fff', x:22, y:8, z:-28, rx:0.5,ry:0,rz:0.4},
      {r:9,  t:0.07,hex:'#00f0ff', x:-28,y:-12,z:-18, rx:1.3,ry:0.6,rz:0},
      {r:26, t:0.13,hex:'#ff2d8a', x:2,  y:18,z:-50, rx:0.4,ry:1.0,rz:0.6},
      {r:7,  t:0.05,hex:'#ff6b2b', x:38, y:-22,z:-35, rx:0.9,ry:0.3,rz:1.2},
    ]
    ringCfg.forEach(c => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(c.r, c.t, 16, 120),
        new THREE.MeshBasicMaterial({color: new THREE.Color(c.hex), transparent:true, opacity:0.55, blending:THREE.AdditiveBlending, depthWrite:false})
      )
      m.position.set(c.x,c.y,c.z)
      m.rotation.set(c.rx,c.ry,c.rz)
      m.userData = { rs:(Math.random()-0.5)*0.004, fo:Math.random()*Math.PI*2 }
      rings.add(m)
    })
    scene.add(rings)

    // ── Animated orb ─────────────────────────────────────
    const orbMat = new THREE.ShaderMaterial({
      uniforms: { time:{value:0}, cA:{value:new THREE.Color('#7b2fff')}, cB:{value:new THREE.Color('#ff2d8a')}, cC:{value:new THREE.Color('#00f0ff')} },
      vertexShader: `varying vec3 vN; varying vec3 vP; uniform float time;
        void main() {
          vN=normalize(normalMatrix*normal); vP=position;
          float d=sin(position.x*.9+time)*cos(position.y*.9+time)*sin(position.z*.9+time)*.7;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position+normal*d,1.);
        }`,
      fragmentShader: `varying vec3 vN; varying vec3 vP; uniform float time; uniform vec3 cA,cB,cC;
        void main() {
          float f=pow(1.-abs(dot(vN,vec3(0,0,1))),3.);
          float t=sin(vP.y*.35+time*.4)*.5+.5;
          float t2=cos(vP.x*.35+time*.25)*.5+.5;
          vec3 c=mix(mix(cA,cB,t),cC,t2*.5);
          gl_FragColor=vec4(c*(.25+f*1.3),.9);
        }`,
      transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide
    })
    const orb = new THREE.Mesh(new THREE.SphereGeometry(10,64,64), orbMat)
    orb.position.set(38, 5, -25)
    scene.add(orb)

    // ── Loop ─────────────────────────────────────────────
    let t = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.007
      starMat.uniforms.time.value = t
      orbMat.uniforms.time.value = t
      stars.rotation.y = t * 0.015
      nebula.rotation.y = t * 0.008
      rings.children.forEach(r => {
        r.rotation.y += r.userData.rs
        r.rotation.z += r.userData.rs * 0.6
        r.position.y += Math.sin(t + r.userData.fo) * 0.018
      })
      orb.rotation.y = t * 0.25
      orb.position.y = Math.sin(t * 0.4) * 4
      targetX += (mouseX * 6 - targetX) * 0.04
      targetY += (-mouseY * 6 - targetY) * 0.04
      camera.position.x += (targetX - camera.position.x) * 0.06
      camera.position.y += (targetY - camera.position.y) * 0.06
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }
    animate()

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
    window.addEventListener('mousemove', e => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    })
  }

  const destroy = () => {
    if (animId) cancelAnimationFrame(animId)
    if (renderer) renderer.dispose()
  }

  return { init, destroy }
}
