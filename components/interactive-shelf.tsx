"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Book } from "@/types";

// Book component for the 3D shelf
const Book3D = ({ 
  book, 
  position, 
  rotation = [0, 0, 0], 
  color,
  onSelect
}: { 
  book: Book;
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  onSelect: (book: Book) => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    if (hovered) {
      meshRef.current.rotation.y += 0.02;
    }
  });
  
  return (
    <group 
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => onSelect(book)}
    >
      <mesh 
        ref={meshRef}
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[1, 1.5, 0.2]} />
        <meshStandardMaterial 
          color={color}
          roughness={0.7}
          metalness={0.3}
          emissive={hovered ? color : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
    </group>
  );
};

// Shelf component
const Shelf = ({ books, onSelectBook }: { books: Book[], onSelectBook: (book: Book) => void }) => {
  const bookColors = [
    "#1E3A29", // Forest green
    "#8B4513", // Mahogany
    "#483D8B", // Dark slate blue
    "#654321", // Dark brown
    "#2F4F4F", // Dark slate gray
  ];
  
  return (
    <group position={[0, 0, 0]}>
      {/* Shelf base */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[10, 0.2, 3]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>
      
      {/* Books */}
      {books.map((book, index) => (
        <Book3D
          key={book.id}
          book={book}
          position={[(index - Math.floor(books.length / 2)) * 1.5, 0.5, 0]}
          color={bookColors[index % bookColors.length]}
          onSelect={onSelectBook}
        />
      ))}
      
      {/* Back of shelf */}
      <mesh position={[0, 0, -1.5]} receiveShadow>
        <boxGeometry args={[10, 2, 0.1]} />
        <meshStandardMaterial color="#5D4037" roughness={0.8} />
      </mesh>
    </group>
  );
};

// Main component
export default function InteractiveShelf({ books }: { books: Book[] }) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  
  return (
    <div className="h-[500px] md:h-[600px] w-full relative">
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
        <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={50} />
        
        <Shelf books={books} onSelectBook={setSelectedBook} />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
      
      {/* Book Details Modal */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center p-4 bg-black/50 z-10"
            onClick={() => setSelectedBook(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="bg-card max-w-md rounded-xl overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={selectedBook.coverImage} 
                  alt={selectedBook.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-serif font-bold text-2xl mb-1">{selectedBook.title}</h3>
                  {selectedBook.series && (
                    <p className="text-white/70">
                      {selectedBook.series} #{selectedBook.seriesNumber}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <p className="mb-4">{selectedBook.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Published: </span>
                    <span>{new Date(selectedBook.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>
                
                <h4 className="font-medium mb-2">Buy the Book:</h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedBook.buyLinks.amazon && (
                    <Button asChild variant="outline" size="sm">
                      <a href={selectedBook.buyLinks.amazon} target="_blank" rel="noopener noreferrer" className="gap-1">
                        Amazon
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                  
                  {selectedBook.buyLinks.barnes && (
                    <Button asChild variant="outline" size="sm">
                      <a href={selectedBook.buyLinks.barnes} target="_blank" rel="noopener noreferrer" className="gap-1">
                        Barnes & Noble
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                  
                  {selectedBook.buyLinks.bookshop && (
                    <Button asChild variant="outline" size="sm">
                      <a href={selectedBook.buyLinks.bookshop} target="_blank" rel="noopener noreferrer" className="gap-1">
                        Bookshop
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <p className="text-muted-foreground bg-background/80 mx-auto inline-block px-3 py-1 rounded-full text-sm">
          Click on a book to view details, or drag to rotate the shelf
        </p>
      </div>
    </div>
  );
}