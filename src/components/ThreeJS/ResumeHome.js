/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Arte Hexe (https://sketchfab.com/illusive_skarwing)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/tablet-folder-43976803a2b141c6b467408bda6f2ef7
title: Tablet folder
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function ResumeHome(props) {
  const { nodes, materials } = useGLTF('/resume.gltf')
  const resumeRef = useRef()

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime()

    
    resumeRef.current.rotation.x = elapsedTime / 5;
  })


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 2.5]}>
        <group rotation={[Math.PI / 2, 2.4, -1.45]}>
          <group ref={resumeRef} position={[0, 0.5, -5]} scale={0.1}>
            <group position={[-13.59, 0.56, -1.1]}>
              <mesh geometry={nodes.StackOfPaper_blinn2_0.geometry} material={materials.blinn2} />
            </group>
            <group position={[0, 0, -1.48]}>
              <mesh geometry={nodes.Pen_blinn2_0.geometry} material={materials.blinn2} />
            </group>
            <group position={[0, 0, -1.48]}>
              <mesh geometry={nodes.Tablet_blinn2_0.geometry} material={materials.blinn2} />
            </group>
            <group position={[0, 0, -1.48]}>
              <mesh geometry={nodes.Paper_blinn2_0.geometry} material={materials.blinn2} />
            </group>
            <group position={[0, 0, -1.48]}>
              <mesh geometry={nodes.Pin_blinn2_0.geometry} material={materials.blinn2} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/resume.gltf')
