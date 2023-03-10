/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Bandit.545 (https://sketchfab.com/Bandit.545)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ktm-1290-super-duke-low-poly-and-stylized-f6f6dd2cfe5a4c50aa7863aed8d74a47
title: KTM 1290 Super Duke (Low Poly and Stylized)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MotorcycleModel(props) {
  const { nodes, materials } = useGLTF(
    "/models/ktm_1290_super_duke_low_poly_and_stylized.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Outline}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Toon_SuperDuke}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/ktm_1290_super_duke_low_poly_and_stylized.glb");
