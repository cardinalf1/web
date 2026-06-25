import React from 'react';
import CarCanvas from './CarCanvas';

const Hero = ({ config }) => {
  const heroData = config?.hero || {};
  const carModel = config?.systems?.cars?.[0]?.modelPath || "/F1Car.fbx";

  return (
    <section id="HERO" className="relative w-full h-screen bg-void text-signal overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-lighten pointer-events-none">
        <CarCanvas modelPath={carModel} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center mix-blend-screen pointer-events-auto w-full max-w-7xl px-4 mt-8 pb-16">
        <h1 className="font-inter font-bold text-[80px] md:text-[140px] lg:text-[180px] leading-[0.85] tracking-[-0.04em] text-[#777777] mb-6 pointer-events-none select-none">
          {heroData.headlinePrefix}
          <br />
          <span className="text-signal">{heroData.headlineHighlight}</span>
        </h1>
        <div className="font-code text-xs md:text-sm tracking-[0.4em] text-gray-500 uppercase mt-4 mb-8">
          {heroData.subtitle}
        </div>
        <a href={heroData.ctaLink || "#"} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-structure/50 text-[10px] tracking-[0.2em] font-code text-gray-400 hover:border-signal hover:text-signal hover:bg-white/5 transition-all duration-300 group relative overflow-hidden bg-void/30 backdrop-blur-md">
          <span className="relative z-10">{heroData.ctaText}</span>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-structure/20 bg-black/80 backdrop-blur-md py-4 px-6 md:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        {heroData.status && (
          <div className="flex items-start gap-2.5 max-w-2xl">
            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-signal animate-pulse mt-1.5 shadow-[0_0_8px_#ffffff]"></div>
            <div>
              <span className="font-code text-[9px] text-gray-500 tracking-[0.25em] uppercase block mb-0.5">CURRENT_STATUS</span>
              <span className="font-code text-[10px] text-signal/95 tracking-wide uppercase leading-relaxed">{heroData.status}</span>
            </div>
          </div>
        )}
        {heroData.accolades && (
          <div className="flex items-start gap-2.5 max-w-xl lg:border-l lg:border-structure/30 lg:pl-6">
            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-signal mt-1.5 shadow-[0_0_8px_#ffffff]"></div>
            <div>
              <span className="font-code text-[9px] text-gray-500 tracking-[0.25em] uppercase block mb-0.5">ACCOLADES // RECOGNITION</span>
              <span className="font-code text-[10px] text-signal/95 tracking-wide uppercase leading-relaxed">{heroData.accolades}</span>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-24 left-6 w-16 h-16 border-t border-l border-white/20"></div>
      <div className="absolute top-24 right-6 w-16 h-16 border-t border-r border-white/20"></div>
      <div className="absolute bottom-24 left-6 w-16 h-16 border-b border-l border-white/20"></div>
      <div className="absolute bottom-24 right-6 w-16 h-16 border-b border-r border-white/20"></div>
    </section>
  );
};

export default Hero;
