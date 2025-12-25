
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-black font-bold">S</span>
              </div>
              <span className="font-heading font-black text-2xl uppercase tracking-tighter">Satyam</span>
            </div>
            <p className="text-white/40 leading-relaxed mb-6">
              Ludhiana's premier audio label. Crafting immersive sonic experiences since 2021.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Youtube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neonBlue hover:text-black transition-colors">
                   <span className="sr-only">{social}</span>
                   <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-neonBlue">Navigation</h4>
            <ul className="space-y-4 text-white/40 font-semibold">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Story</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-neonBlue">Help</h4>
            <ul className="space-y-4 text-white/40 font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-neonBlue">Contact</h4>
            <p className="text-white/40 mb-2">info@satyamheadphones.com</p>
            <p className="text-white/40 mb-6">+91 98765 43210</p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-30">Newsletter</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-black/50 border border-white/10 rounded-lg px-4 py-2 w-full text-sm outline-none focus:border-neonBlue" />
                <button className="bg-neonBlue text-black px-4 py-2 rounded-lg font-bold">JOIN</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-white/20 text-sm font-semibold">© 2025 Satyam Headphones. Made in Ludhiana, India.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
