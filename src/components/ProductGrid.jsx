import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'yosemite',
    name: 'Yosemite Valley',
    notes: ['Granite Mist', 'Sugar Pine', 'Wild Strawberry'],
    price: 28,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1800&auto=format&fit=crop',
  },
  {
    id: 'zion',
    name: 'Zion Canyon',
    notes: ['Desert Sage', 'Citrus Zest', 'Juniper'],
    price: 28,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1800&auto=format&fit=crop',
  },
  {
    id: 'olympic',
    name: 'Olympic Rainforest',
    notes: ['Moss', 'Cedar', 'Pacific Fir'],
    price: 28,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1800&auto=format&fit=crop',
  },
  {
    id: 'acadia',
    name: 'Acadia Coast',
    notes: ['Sea Spray', 'Blueberry', 'Balsam'],
    price: 28,
    image: 'https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905?q=80&w=1800&auto=format&fit=crop',
  },
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-xs uppercase tracking-wide text-white/90 bg-black/40 px-2 py-1 rounded-full">National Park</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="mt-1 text-sm text-neutral-600">{product.notes.join(' • ')}</p>
          </div>
          <div className="font-medium">${product.price}</div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            {product.notes.map((n, i) => (
              <span key={i} className="inline-flex items-center justify-center h-8 px-3 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-700 shadow-sm">{n}</span>
            ))}
          </div>
          <button className="ml-3 inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-black whitespace-nowrap">Add to Cart</button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;
