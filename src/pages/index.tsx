import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { MotorcycleModel } from '../components/MotorcycleModel'
import { OrbitControls } from '@react-three/drei'

export default function Home() {
  return (
    <>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [3, 3, -1] }}>
        <OrbitControls />
        <Suspense fallback={null}>
          <MotorcycleModel />
        </Suspense>
      </Canvas>
    </>
  );
}
