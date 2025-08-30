import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import GiftOptions from './components/GiftOptions';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <section id="scents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Explore Our National Park Collection</h2>
            <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Each candle is hand-poured in small batches with clean-burning soy wax and fragrance notes inspired by the wild places we love.</p>
          </div>
          <ProductGrid />
        </section>
        <section id="gifting" className="bg-white/70 backdrop-blur border-t border-neutral-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Gifting Made Thoughtful</h2>
              <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Elevate your present with nature-forward packaging, personalized notes, and curated bundles.</p>
            </div>
            <GiftOptions />
          </div>
        </section>
        <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-green-50 to-amber-50 border border-emerald-100 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-semibold">Crafted by Hand. Inspired by the Wild.</h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">We’re a small studio dedicated to creating transportive, memory-rich scents that honor America’s National Parks. From trail-side pine to canyon sage and alpine wildflower, we blend premium fragrance oils with natural soy wax for a clean burn and true-to-nature aroma.</p>
            <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Clean-burning soy wax</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500"/>Phthalate-free fragrance oils</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-500"/>Small-batch, hand-poured</li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">© {new Date().getFullYear()} Trail & Ember Co. All rights reserved.</p>
          <div className="text-sm text-neutral-600">Crafted with care on the West Coast • Leave No Trace</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
