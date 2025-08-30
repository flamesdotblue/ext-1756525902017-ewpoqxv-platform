import React from 'react';
import { Gift, PenLine, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const perks = [
  {
    icon: Gift,
    title: 'Gift Wrap',
    desc: 'Eco-friendly kraft wrap with twine and pressed fern. Ready to give, no plastic.',
  },
  {
    icon: PenLine,
    title: 'Personal Note',
    desc: 'Add a handwritten card with your message at checkout for a personal touch.',
  },
  {
    icon: Package,
    title: 'Curated Bundles',
    desc: 'Build a trio inspired by your favorite park systems and save 10%.',
  },
];

const GiftOptions = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {perks.map((perk, idx) => (
        <motion.div
          key={perk.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6"
        >
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-100/60" />
          <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-amber-100/60" />
          <div className="relative">
            <div className="h-11 w-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-sm">
              <perk.icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{perk.title}</h3>
            <p className="mt-2 text-neutral-700 text-sm">{perk.desc}</p>
            <button className="mt-4 inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Learn more</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GiftOptions;
