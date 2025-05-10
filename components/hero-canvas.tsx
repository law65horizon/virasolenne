"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function BookModel({ position, rotation, onClick, bookData }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Load texture with proper error handling
  const texture = useTexture("/placeholder-cover.jpg");
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    
    // Slow rotation when hovered
    if (hovered) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
    >
      <boxGeometry args={[1, 1.5, 0.2]} />
      <meshStandardMaterial 
        map={texture} 
        metalness={0.1}
        roughness={0.8}
      />
    </mesh>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;
  
  // Create particles geometry
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 20;
    positions[i3 + 1] = (Math.random() - 0.5) * 20;
    positions[i3 + 2] = (Math.random() - 0.5) * 20;
  }
  
  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry" {...particlesGeometry} />
      <pointsMaterial 
        size={0.05} 
        color="#ffffff" 
        transparent 
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  
  // Mock book data
  const books = [
    { id: 1, title: "The Awakening", position: [-3, 0, 0], rotation: [0, 0.5, 0] },
    { id: 2, title: "The Shadow's Rise", position: [0, 0, 2], rotation: [0, -0.3, 0] },
    { id: 3, title: "The Crystal Crown", position: [3, 0, 0], rotation: [0, 0.2, 0] },
  ];

  return (
    <>
      <div className="w-full container_mxd h-full absolute">
        <Canvas shadows>
          <color attach="background" args={['#030712']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
          
          <fog attach="fog" args={['#030712', 5, 20]} />
          
          <ParticleField />
          
          {books.map((book) => (
            <BookModel 
              key={book.id}
              position={book.position}
              rotation={book.rotation}
              onClick={() => setSelectedBook(book)}
              bookData={book}
            />
          ))}
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      {selectedBook && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 bg-background/80 backdrop-blur-md rounded-lg p-6 max-w-md shadow-xl"
        >
          <button 
            onClick={() => setSelectedBook(null)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
          >
            &times;
          </button>
          <h3 className="text-xl font-serif font-bold mb-2">{selectedBook.title}</h3>
          <p className="text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium rounded-md px-4 py-2 bg-primary text-white hover:bg-primary/90"
          >
            View Details
          </motion.button>
        </motion.div>
      )}
    </>
  );
}