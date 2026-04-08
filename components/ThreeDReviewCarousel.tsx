// components/ThreeDReviewCarousel.tsx
"use client"
import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

interface Review {
  text: string
  author: string
  role: string
  rating: number
  company: string
}

interface ThreeDReviewCarouselProps {
  reviews: Review[]
}

const ThreeDReviewCarousel = ({ reviews }: ThreeDReviewCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    scene.fog = new THREE.Fog(0x000000, 10, 30)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000)
    camera.position.set(0, 2, 12)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    containerRef.current.appendChild(renderer.domElement)

    // Controls for auto-rotation
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.5
    controls.enableZoom = false
    controls.enablePan = false
    controls.maxPolarAngle = Math.PI / 2
    controls.minPolarAngle = 0

    // Lighting
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404060)
    scene.add(ambientLight)

    // Main directional light (golden)
    const dirLight = new THREE.DirectionalLight(0xD4AF37, 1)
    dirLight.position.set(2, 5, 3)
    dirLight.castShadow = true
    dirLight.receiveShadow = true
    dirLight.shadow.mapSize.width = 1024
    dirLight.shadow.mapSize.height = 1024
    const d = 10
    dirLight.shadow.camera.left = -d
    dirLight.shadow.camera.right = d
    dirLight.shadow.camera.top = d
    dirLight.shadow.camera.bottom = -d
    dirLight.shadow.camera.near = 1
    dirLight.shadow.camera.far = 15
    scene.add(dirLight)

    // Fill lights
    const fillLight1 = new THREE.PointLight(0x4466AA, 0.5)
    fillLight1.position.set(-3, 1, 2)
    scene.add(fillLight1)

    const fillLight2 = new THREE.PointLight(0xAA4466, 0.5)
    fillLight2.position.set(3, 0, 2)
    scene.add(fillLight2)

    // Create floating particles
    const particleCount = 1500
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      // Position in a sphere
      const r = 8 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5
      particlePositions[i * 3 + 2] = r * Math.cos(phi)

      // Golden colors
      const goldHue = 0.12 + Math.random() * 0.1
      const color = new THREE.Color().setHSL(goldHue, 0.9, 0.5 + Math.random() * 0.3)
      particleColors[i * 3] = color.r
      particleColors[i * 3 + 1] = color.g
      particleColors[i * 3 + 2] = color.b
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Create a glowing center sphere
    const coreGeometry = new THREE.SphereGeometry(0.5, 32, 32)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      emissive: 0x553300,
      roughness: 0.2,
      metalness: 0.8
    })
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial)
    coreSphere.castShadow = true
    coreSphere.receiveShadow = true
    scene.add(coreSphere)

    // Create floating review cards
    const cards: THREE.Mesh[] = []
    const cardCount = Math.min(reviews.length, 8)
    const radius = 4.5

    reviews.slice(0, cardCount).forEach((review, index) => {
      // Create a canvas for each review
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 512
      const ctx = canvas.getContext('2d')!

      // Background with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#1a1a1a')
      gradient.addColorStop(1, '#2a2a2a')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Golden border
      ctx.strokeStyle = '#D4AF37'
      ctx.lineWidth = 8
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40)

      // Draw rating stars
      ctx.fillStyle = '#D4AF37'
      ctx.font = '30px Arial'
      for (let i = 0; i < review.rating; i++) {
        ctx.fillText('★', 50 + i * 40, 100)
      }

      // Draw review text (truncated)
      ctx.fillStyle = '#FFFFFF'
      ctx.font = 'bold 28px Arial'
      ctx.fillText('"', 50, 180)
      
      ctx.font = '24px Arial'
      let shortText = review.text.length > 100 ? review.text.substring(0, 100) + '...' : review.text
      const words = shortText.split(' ')
      let line = ''
      let y = 230
      
      words.forEach(word => {
        const testLine = line + word + ' '
        const metrics = ctx.measureText(testLine)
        if (metrics.width > 400 && line.length > 0) {
          ctx.fillText(line, 50, y)
          line = word + ' '
          y += 35
        } else {
          line = testLine
        }
      })
      ctx.fillText(line, 50, y)

      // Draw author
      ctx.font = 'bold 28px Arial'
      ctx.fillStyle = '#D4AF37'
      ctx.fillText(review.author, 50, y + 60)
      
      ctx.font = '20px Arial'
      ctx.fillStyle = '#999999'
      ctx.fillText(review.role, 50, y + 95)

      const texture = new THREE.CanvasTexture(canvas)

      // Card geometry
      const geometry = new THREE.BoxGeometry(2.2, 2.2, 0.2)
      const materials = [
        new THREE.MeshStandardMaterial({ color: 0x333333 }), // right
        new THREE.MeshStandardMaterial({ color: 0x333333 }), // left
        new THREE.MeshStandardMaterial({ color: 0x333333 }), // top
        new THREE.MeshStandardMaterial({ color: 0x333333 }), // bottom
        new THREE.MeshStandardMaterial({ map: texture }), // front
        new THREE.MeshStandardMaterial({ color: 0x333333 }) // back
      ]
      
      const card = new THREE.Mesh(geometry, materials)
      
      // Position in a 3D ring
      const angle = (index / cardCount) * Math.PI * 2
      card.position.x = Math.cos(angle) * radius
      card.position.z = Math.sin(angle) * radius
      card.position.y = Math.sin(angle * 2) * 1.5
      
      // Rotate to face center
      card.lookAt(0, card.position.y * 0.5, 0)
      
      card.castShadow = true
      card.receiveShadow = true
      
      scene.add(card)
      cards.push(card)
    })

    // Create floating rings
    const ringGeometry = new THREE.TorusGeometry(3, 0.05, 16, 100)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      emissive: 0x332200,
      transparent: true,
      opacity: 0.2
    })
    
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial)
    ring1.rotation.x = Math.PI / 2
    ring1.rotation.z = 0.3
    scene.add(ring1)

    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial)
    ring2.scale.set(1.5, 1.5, 1.5)
    ring2.rotation.x = Math.PI / 2
    ring2.rotation.z = -0.3
    scene.add(ring2)

    // Animation
    let clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const delta = clock.getDelta()
      const elapsedTime = performance.now() / 1000

      // Rotate particles
      particles.rotation.y = elapsedTime * 0.02
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1

      // Rotate rings
      ring1.rotation.z += 0.002
      ring2.rotation.z -= 0.0015

      // Animate cards
      cards.forEach((card, index) => {
        card.rotation.y += 0.005
        card.position.y += Math.sin(elapsedTime * 2 + index) * 0.003
      })

      // Pulse the core sphere
      coreSphere.scale.setScalar(1 + Math.sin(elapsedTime * 3) * 0.05)

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      scene.clear()
    }
  }, [reviews])

  return <div ref={containerRef} className="w-full h-full" />
}

export default ThreeDReviewCarousel