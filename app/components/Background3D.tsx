'use client';

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import styles from './Background3D.module.css'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  
  const particleCount = 5000
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50 // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50 // z
    }
    return positions
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.05
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <Points ref={ref}>
      <PointMaterial
        transparent
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={getColors()}
          itemSize={3}
          args={[getColors(), 3]}
        />
      </bufferGeometry>
    </Points>
  )
}

function getColors() {
  const colors = new Float32Array(5000 * 3)
  const color = new THREE.Color()
  const gradientColors = [
    '#ee7752',
    '#e73c7e',
    '#23a6d5',
    '#23d5ab'
  ]

  for (let i = 0; i < 5000; i++) {
    const colorIndex = Math.floor(Math.random() * gradientColors.length)
    color.set(gradientColors[colorIndex])
    color.toArray(colors, i * 3)
  }

  return colors
}

export default function Background3D() {
  return (
    <div className={styles.background3d}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
} 