
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import HeadphoneModel from './HeadphoneModel';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-[#0a0a1a]">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          <HeadphoneModel />
          
          <ContactShadows opacity={0.4} scale={10} blur={2} far={10} resolution={256} color="#000000" />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate speed={2} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-neonBlue font-semibold tracking-[0.4em] uppercase mb-4 text-sm"
        >
          Experience The Future of Sound
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-6xl md:text-9xl font-black text-white leading-tight uppercase tracking-tighter"
        >
          Satyam <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-accentGold text-neon">Headphones</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a href="#products" className="bg-neonBlue text-black font-black px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform neon-glow">
            EXPLORE PRODUCTS
          </a>
          <button className="border border-white/20 text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-white/5 transition-colors">
            WATCH FILM
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Scroll to Discover</span>
        <div className="w-[2px] h-10 bg-gradient-to-b from-neonBlue to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
