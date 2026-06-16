import React from 'react';
import { motion } from 'framer-motion';

const HeroCTA = () => {
  return (
    <section className="bg-[#f2eee3] h-[95vh] flex flex-col items-center justify-center px-4 py-20 text-center select-none">

      {/* Top Label */}
      <div className="flex items-center gap-2 mb-8 animate-bounce">
        <span className="text-zinc-400 text-sm">↓</span>
        <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase border border-zinc-300 px-3 py-1 rounded-full">
          [ Seriously ]
        </span>
        <span className="text-zinc-400 text-sm">↓</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-9xl md:text-[13rem] font-black tracking-tighter text-black leading-[0.85] flex flex-col items-center">
        <span>LET'S CUT</span>
        <span className="flex items-center gap-4">
          THE BS.
          <span className="text-7xl md:text-[9rem]">💩</span>
        </span>
      </h1>

      {/* Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        {/* Secondary Button */}
        <button className="bg-[#ddd8cc] hover:bg-[#cec7b7] text-black font-bold py-4 px-8 rounded-xl flex items-center gap-2 transition-all group">
          <span className="text-xs uppercase tracking-widest">Talk to us</span>
          <span className="group-hover:translate-x-1 transition-transform">➜</span>
        </button>

        {/* Primary Action Button */}
        <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-4 px-8 rounded-xl flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all group">
          <span className="text-xs uppercase tracking-widest">Book a call</span>
          <span className="group-hover:translate-x-1 transition-transform">➜</span>
        </button>
      </div>

    </section>
  );
};

export default HeroCTA;