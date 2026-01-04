import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = ({ color = "#ffffff", size = 1, speed = 1, distort = 0.5 }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.rotation.x = Math.cos(t / 4) / 8;
    mesh.current.rotation.y = Math.sin(t / 4) / 8;
    mesh.current.rotation.z = Math.sin(t / 4) / 8;
    mesh.current.position.y = Math.sin(t / 2) / 10;
  });

  return (
    <Float speed={2 * speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[size, 100, 200]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2 * speed}
          roughness={0.1}
          metalness={0.8}
          opacity={0.4}
          transparent
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const BeachBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      {/* Literal Beach Image Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/beach-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transform: `scale(1.1) translate(${mousePos.x}px, ${mousePos.y}px)`,
        transition: 'transform 0.2s ease-out'
      }} />
      
      {/* Soft Overlay for Readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%), rgba(255, 255, 255, 0.2)',
      }} />

      {/* 3D Floating "Pearls" */}
      {/* <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ position: 'absolute', top: 0, left: 0 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#fff4e6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#e0f2f1" />
        <spotLight position={[0, 10, 0]} intensity={1.5} penumbra={1} color="#ffffff" />
        
        <group position={[4, 3, -3]}>
          <AnimatedSphere color="#ffffff" size={1.0} speed={0.4} distort={0.2} />
        </group>
        <group position={[-5, -2, -2]}>
          <AnimatedSphere color="#fce4ec" size={0.7} speed={0.5} distort={0.3} />
        </group>
        <group position={[3, -4, -4]}>
          <AnimatedSphere color="#e0f2f1" size={1.2} speed={0.3} distort={0.1} />
        </group>
        <group position={[-3, 4, -5]}>
          <AnimatedSphere color="#fff9c4" size={0.8} speed={0.4} distort={0.4} />
        </group>
        <group position={[6, -1, -6]}>
          <AnimatedSphere color="#f3e5f5" size={0.5} speed={0.6} distort={0.5} />
        </group>
        <group position={[-7, 2, -4]}>
          <AnimatedSphere color="#e1f5fe" size={0.9} speed={0.3} distort={0.2} />
        </group>
      </Canvas> */}
    </div>
  );
};

export default BeachBackground;


