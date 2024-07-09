// Three Fiber
import * as THREE from "three";
import vertex from "./shaders/vertex";
import fragment from "./shaders/fragment";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SphereEffect() {
  const shaderRef = useRef<THREE.ShaderMaterial>(null!);
  const uniforms = useRef({
    uTime: { value: 0 },
    uFrequency: { value: 50 },
    uPrimaryColor: { value: new THREE.Color("#DCB53F") },
  });

  useFrame((state, delta) => {
    if (!shaderRef.current) return;
    shaderRef.current.uniforms.uTime.value += delta * 0.5;
  });

  return (
    <mesh>
      <sphereGeometry args={[2.5, 40, 40]} />
      <shaderMaterial
        wireframe
        fog
        ref={shaderRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
