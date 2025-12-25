
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://picsum.photos/seed/audio1/800/1000',
  'https://picsum.photos/seed/audio2/800/600',
  'https://picsum.photos/seed/audio3/800/800',
  'https://picsum.photos/seed/audio4/800/1200',
  'https://picsum.photos/seed/audio5/800/700',
  'https://picsum.photos/seed/audio6/800/900',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">In The <span className="text-neonBlue">Wild</span></h2>
          <p className="text-white/40">Our community, our sound, our passion.</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-3xl overflow-hidden border border-white/5"
            >
              <img src={src} alt={`Lifestyle ${i}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-neonBlue font-bold uppercase tracking-widest text-sm">#SatyamSound</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
