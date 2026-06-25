import React from 'react';
import CarCanvas from './CarCanvas';

const Hero = ({ config }) => {
  const heroData = config?.hero || {};
  
  const rawModelPath = config?.systems?.cars?.[1]?.modelPath || "nationals.fbx";
  const carModel = rawModelPath.startsWith('/')
    ? `${import.meta.env.BASE_URL}${rawModelPath.slice(1)}`
    : `${import.meta.env.BASE_URL}${rawModelPath}`;

  return (
    <section id="HERO" className="relative w-full h-screen bg-void text-signal overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-lighten pointer-events-none">
        <CarCanvas modelPath={carModel} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center mix-blend-screen pointer-events-auto w-full max-w-7xl px-4 mt-8 pb-16">
        <h1 className="font-inter font-bold text-[15vw] sm:text-[80px] md:text-[140px] lg:text-[180px] leading-[0.85] tracking-[-0.04em] text-[#777777] mb-6 pointer-events-none select-none">
          {heroData.headlinePrefix}
          <br />
          <span className="text-signal">{heroData.headlineHighlight}</span>
        </h1>
        <div className="font-code text-xs md:text-sm tracking-[0.4em] text-gray-500 uppercase mt-4">
          {heroData.subtitle}
        </div>
      </div>

      <div className="absolute top-24 left-6 w-16 h-16 border-t border-l border-white/20"></div>
      <div className="absolute top-24 right-6 w-16 h-16 border-t border-r border-white/20"></div>
      <div className="absolute bottom-24 left-6 w-16 h-16 border-b border-l border-white/20"></div>
      <div className="absolute bottom-24 right-6 w-16 h-16 border-b border-r border-white/20"></div>
    </section>
  );
};

export default Hero;
