
import React, { Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const LoadingScreen: React.FC = () => (
  <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center">
    <div className="w-16 h-16 border-4 border-neonBlue border-t-transparent rounded-full animate-spin neon-glow mb-4"></div>
    <span className="font-heading font-black text-2xl uppercase tracking-widest animate-pulse">Satyam</span>
  </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="antialiased selection:bg-neonBlue selection:text-black">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingScreen />}>
          <Hero />
          <About />
          <Products />
          <Features />
          <Gallery />
          <Testimonials />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
