/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: tvdn164 (https://sketchfab.com/tvdn164)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/crafting-table-7e4df51960cc4204be1e1d1cb7b17ad0
title: Crafting_table
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function CraftTableHome(props) {
  const { nodes, materials } = useGLTF('/craftTable.gltf')

  const tableRef = useRef()

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime()

    tableRef.current.rotation.z = elapsedTime / 5;
  })


  return (
    <group {...props} dispose={null}>
      <group ref={tableRef} rotation={[-Math.PI / 3, -0.1, 0.7]} scale={1.7} position={[-5,0.5,-1]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.m_2_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.m_2_1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.m_2_2} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.m_2_3} />
      </group>
    </group>
  )
}

useGLTF.preload('/craftTable.gltf')
