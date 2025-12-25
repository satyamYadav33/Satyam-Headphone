
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Center } from '@react-three/drei';
import HeadphoneModel from './HeadphoneModel';

const ProductCard: React.FC<{ product: Product; onSelect: (p: Product) => void }> = ({ product, onSelect }) => {
  return (
    <motion.div
      layoutId={product.id}
      whileHover={{ y: -10 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-6 group cursor-pointer hover:border-neonBlue/50 transition-all"
      onClick={() => onSelect(product)}
    >
      <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-black flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-black to-neonBlue/20"></div>
        <div className="w-full h-full p-4">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            <ambientLight intensity={1} />
            <HeadphoneModel color={product.color} autoRotate={false} />
            <Environment preset="warehouse" />
          </Canvas>
        </div>
        <div className="absolute bottom-4 right-4 bg-neonBlue text-black px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase">
          View 3D
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <div>
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{product.category}</span>
          <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-neonBlue transition-colors">{product.name}</h3>
        </div>
        <span className="text-accentGold font-black text-xl">{product.price}</span>
      </div>
      <p className="text-white/40 text-sm line-clamp-2">{product.description}</p>
    </motion.div>
  );
};

const ProductModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
    >
      <div className="w-full max-w-6xl bg-darkBg border border-white/10 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="flex-1 h-[400px] md:h-auto bg-black relative">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} />
            <HeadphoneModel color={product.color} autoRotate />
            <Environment preset="city" />
            <OrbitControls enableZoom={true} />
          </Canvas>
          <div className="absolute top-8 left-8 text-white/30 text-xs font-bold uppercase tracking-[0.3em]">360° Interaction Enabled</div>
        </div>

        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <button 
            onClick={onClose}
            className="self-end mb-4 text-white/40 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <span className="text-neonBlue font-bold text-sm tracking-widest uppercase mb-2">{product.tagline}</span>
          <h2 className="text-5xl font-black uppercase mb-6 leading-none">{product.name}</h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">{product.description}</p>
          
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="p-4 border border-white/10 rounded-2xl">
              <span className="block text-white/30 text-[10px] uppercase font-bold mb-1">Driver Size</span>
              <span className="font-bold text-lg">{product.specs.driver}</span>
            </div>
            <div className="p-4 border border-white/10 rounded-2xl">
              <span className="block text-white/30 text-[10px] uppercase font-bold mb-1">Battery Life</span>
              <span className="font-bold text-lg">{product.specs.battery}</span>
            </div>
            <div className="p-4 border border-white/10 rounded-2xl">
              <span className="block text-white/30 text-[10px] uppercase font-bold mb-1">Noise Cancel</span>
              <span className="font-bold text-lg">{product.specs.anc ? 'Hybrid ANC' : 'Passive'}</span>
            </div>
            <div className="p-4 border border-white/10 rounded-2xl">
              <span className="block text-white/30 text-[10px] uppercase font-bold mb-1">Waterproof</span>
              <span className="font-bold text-lg">{product.specs.waterproof}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-4xl font-black text-accentGold">{product.price}</span>
            <button className="flex-1 bg-white text-black font-black py-5 rounded-full hover:bg-neonBlue transition-colors uppercase tracking-widest">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
            The <span className="text-neonBlue">Satyam</span> Collection
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">Precision-tuned sound for every listener. From studio-grade over-ears to sweatproof buds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
