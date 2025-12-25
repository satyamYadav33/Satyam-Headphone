
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-darkBg overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-8 uppercase">
            Crafted in <span className="text-neonBlue">India</span><br />
            For Global Lovers.
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8">
            Satyam Headphones was born out of a desire to bridge the gap between premium audio engineering and accessibility. Based in Ludhiana, we combine local craftsmanship with cutting-edge technology to create soundscapes that inspire.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-black text-accentGold">2021</h3>
              <p className="text-sm text-white/40 uppercase tracking-widest">Founded</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-accentGold">1M+</h3>
              <p className="text-sm text-white/40 uppercase tracking-widest">Listeners</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10">
            <img src="https://picsum.photos/seed/factory/800/600" alt="Factory process" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-neonBlue/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accentGold/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
