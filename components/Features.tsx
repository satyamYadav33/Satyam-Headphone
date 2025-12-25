
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-darkBg border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-neonBlue/10 to-transparent rounded-full flex items-center justify-center">
               <div className="w-3/4 h-3/4 border border-neonBlue/20 rounded-full animate-ping opacity-20 absolute"></div>
               <div className="w-2/3 h-2/3 border border-neonBlue/30 rounded-full animate-pulse absolute"></div>
               <img src="https://picsum.photos/seed/soundwave/600/600" alt="Sound tech" className="w-3/4 h-3/4 object-cover rounded-full z-20 grayscale brightness-50" />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">
              Advanced <br /> <span className="text-neonBlue">Engineering</span>
            </h2>
            <div className="grid gap-8">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-neonBlue transition-colors">
                    <svg className="w-8 h-8 text-neonBlue group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-neonBlue transition-colors uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-white/40 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
