import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">Trail & Ember</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#scents" className="text-neutral-700 hover:text-neutral-900 transition-colors">Scents</a>
          <a href="#gifting" className="text-neutral-700 hover:text-neutral-900 transition-colors">Gifting</a>
          <a href="#about" className="text-neutral-700 hover:text-neutral-900 transition-colors">Our Story</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Sign In</button>
          <button className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-black">Cart (0)</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
