import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="relative h-[72vh] sm:h-[80vh] w-full overflow-hidden rounded-b-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
          alt="Sunrise over pine forest and mountains"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 translate-y-1/4 pointer-events-none">
          <div className="mx-auto h-24 w-[90%] rounded-full blur-3xl bg-emerald-400/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Hand-poured candles inspired by America’s National Parks</h1>
            <p className="mt-4 text-neutral-200 text-lg">Transportive scents that bring the trail home—clean-burning soy wax, premium notes, and gift-ready packaging.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#scents" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100">Shop Scents</a>
              <a href="#gifting" className="inline-flex items-center rounded-full border border-white/70 text-white px-5 py-3 text-sm font-medium hover:bg-white/10">Gifting Options</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
