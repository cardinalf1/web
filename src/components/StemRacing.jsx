import React from 'react';

const StemRacing = ({ config }) => {
  const data = config?.stemRacing || {};

  return (
    <section id="STEM_RACING" className="py-32 px-8 md:px-12 bg-black border-b border-structure/20 text-signal relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 right-12 w-px h-full bg-structure/10 z-20 pointer-events-none"></div>
      <div className="absolute inset-0 z-0">
        <img src={`${import.meta.env.BASE_URL}mapupscaled-_FGaNilo.png`} alt="Global Ecosystem Map" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="text-xs font-code tracking-[0.3em] text-gray-500 mb-6">{data.sectionSubtitle}</div>
          <h2 className="text-[11vw] sm:text-6xl md:text-[80px] lg:text-[100px] font-inter font-bold tracking-[-0.04em] text-[#777777] mb-2 leading-[0.9]">
            {data.headlinePrefix}
            <br className="hidden md:block" />
            <span className="text-signal">{data.headlineHighlight}</span>
          </h2>
          <div className="text-sm font-code text-signal opacity-70 tracking-widest uppercase mt-6">{data.footerText}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-12 group justify-center">
            <div className="pl-8 border-l border-structure/30 group-hover:border-signal/50 transition-colors duration-500 flex flex-col gap-6 backdrop-blur-sm bg-void/30 p-4 rounded-r-lg">
              {data.paragraphs?.map((p, idx) => (
                <p key={idx} className="font-inter font-normal text-gray-300 leading-relaxed text-sm md:text-lg text-justify">{p}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start lg:items-end gap-6 w-full">
            {data.stats?.map((stat, idx) => (
              <div key={idx} className="border border-structure/30 bg-void/50 backdrop-blur-md p-6 rounded-xl w-full max-w-sm hover:border-signal/50 transition-colors shadow-2xl">
                <div className="text-[10px] font-code text-gray-500 tracking-[0.2em] mb-2">{stat.label}</div>
                <div className="text-3xl md:text-4xl font-code font-bold text-signal">{stat.value}</div>
                <div className="text-sm font-inter text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemRacing;
