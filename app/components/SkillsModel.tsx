'use client';

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import styles from './SkillsModel.module.css'

interface Skill {
  name: string
  position: [number, number, number]
  color: string
}

function SkillText({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (!ref.current) return
    // Add subtle floating animation
    ref.current.position.y += Math.sin(state.clock.elapsedTime + index) * 0.001
    // Add rotation based on mouse position
    ref.current.rotation.x = state.mouse.y * 0.1
    ref.current.rotation.y = state.mouse.x * 0.1
  })

  return (
    <Float
      speed={1.5} // Animation speed
      rotationIntensity={0.5} // XYZ rotation intensity
      floatIntensity={0.5} // Up/down float intensity
      position={skill.position}
    >
      <Text
        ref={ref}
        fontSize={0.5}
        color={skill.color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="rgba(0,0,0,0.5)"
      >
        {skill.name}
      </Text>
    </Float>
  )
}

function SkillsField() {
  const groupRef = useRef<THREE.Group>(null!)
  
  const skills: Skill[] = [
    { name: 'React', position: [-2, 2, 0], color: '#61dafb' },
    { name: 'TypeScript', position: [2, -1, 1], color: '#3178c6' },
    { name: 'Next.js', position: [-1, -2, -1], color: '#ffffff' },
    { name: 'Three.js', position: [2, 1, -2], color: '#ff0000' },
    { name: 'Node.js', position: [-2, -1, 2], color: '#68a063' },
    { name: 'CSS3', position: [1, 2, -1], color: '#264de4' },
    { name: 'MongoDB', position: [-1, 1, 2], color: '#47a248' },
    { name: 'Docker', position: [2, -2, 0], color: '#2496ed' },
  ]

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return
    // Rotate the entire field based on mouse movement
    groupRef.current.rotation.y = mouse.x * 0.5 + clock.elapsedTime * 0.1
    groupRef.current.rotation.x = mouse.y * 0.3
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
      {skills.map((skill, index) => (
        <SkillText key={skill.name} skill={skill} index={index} />
      ))}
    </group>
  )
}

export default function SkillsModel() {
  return (
    <div className={styles.skillsModel}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 75 }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        <SkillsField />
      </Canvas>
    </div>
  )
} 