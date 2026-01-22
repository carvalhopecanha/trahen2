// src/components/CapBone/index.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

function CapBoneModel() {
  // Carrega o modelo .glb
  const { scene } = useGLTF('../../assets/3d/baseball_cap.glb');
  
  // Ajuste de escala (experimente valores entre 0.5 e 2)
  scene.scale.set(1.2, 1.2, 1.2);
  
  // Opcional: rotacione se o boné estiver deitado
  // scene.rotation.x = Math.PI / 2;

  return <primitive object={scene} />;
}

export default CapBoneModel;