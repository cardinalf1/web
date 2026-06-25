import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Center } from '@react-three/drei';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const CarModel = ({ modelPath }) => {
  const [model, setModel] = React.useState(null);
  const groupRef = useRef();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(modelPath, (fbx) => {
      setModel(fbx);
    });
  }, [modelPath]);

  const material = useMemo(() => new THREE.MeshBasicMaterial({
    color: "#FFFFFF",
    wireframe: true,
    transparent: true,
    opacity: 0.15
  }), []);

  const clonedModel = useMemo(() => {
    if (!model) return null;
    const clone = model.clone(true);
    clone.traverse((o) => {
      if (o.isMesh) {
        o.material = material;
      }
    });
    return clone;
  }, [model, material]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  if (!clonedModel) return null;

  return (
    <group ref={groupRef} rotation={[0, -Math.PI / 4, 0]}>
      <Center>
        <primitive object={clonedModel} scale={0.025} />
      </Center>
    </group>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Three.js Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-red-500 font-mono text-xs p-4">
          [SYSTEM_FAILURE]: {this.state.error.message}
        </div>
      );
    }
    return this.props.children;
  }
}

const CarCanvas = ({ modelPath, interactive = false }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <ErrorBoundary>
        <Canvas>
          <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={40} />
          <OrbitControls 
            enableZoom={interactive} 
            enablePan={interactive} 
            enableRotate={interactive}
            autoRotate={false} 
            minPolarAngle={interactive ? 0 : Math.PI / 3} 
            maxPolarAngle={interactive ? Math.PI : Math.PI / 2} 
          />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <React.Suspense fallback={null}>
            {modelPath && <CarModel modelPath={modelPath} />}
          </React.Suspense>
          <Environment preset="city" />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default CarCanvas;
