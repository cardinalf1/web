import React from 'react';

const Identity = ({ config }) => {
  const data = config?.identity || {};

  return (
    <section id="IDENTITY" className="py-32 px-8 md:px-12 bg-void border-b border-structure/20 text-signal relative">
      <div className="absolute top-0 right-12 w-px h-full bg-structure/10"></div>
      <div className="absolute top-12 left-0 w-8 h-px bg-signal"></div>
      
      <div className="mb-24 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-structure/20 pb-12">
        <div className="max-w-3xl">
          <div className="text-xs font-code tracking-[0.3em] text-gray-500 mb-6">{data.sectionSubtitle}</div>
          <h2 className="text-6xl md:text-[80px] lg:text-[100px] font-inter font-bold tracking-[-0.04em] text-[#777777] mb-2 leading-[0.9]">
            {data.headlinePrefix}
            <span className="text-signal">{data.headlineHighlight}</span>
          </h2>
          <div className="text-sm font-code text-signal opacity-70 tracking-widest uppercase mt-6">{data.footerText}</div>
        </div>
        {data.metadata && (
          <div className="border border-structure/50 px-5 py-4 bg-void/30 backdrop-blur-sm text-[10px] md:text-xs font-code text-gray-400 tracking-[0.2em] uppercase max-w-md h-fit relative">
            <div className="absolute top-0 left-0 w-2 h-[2px] bg-signal"></div>
            <div className="absolute bottom-0 right-0 w-2 h-[2px] bg-signal"></div>
            {data.metadata}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {data.pillars?.map((pillar, idx) => (
          <div key={idx} className="group flex flex-col relative border-t border-structure/20 pt-8 hover:border-signal/30 transition-colors duration-500">
            {/* Top edge telemetry accent */}
            <div className="absolute top-0 left-0 w-4 h-[2px] bg-structure group-hover:bg-signal transition-colors duration-300"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-code text-structure group-hover:text-signal transition-colors duration-300">{pillar.number}</span>
              <h3 className="text-xl md:text-2xl font-inter font-bold tracking-tight text-signal uppercase">{pillar.title}</h3>
            </div>
            
            {pillar.quote ? (
              <div className="pl-6 border-l border-signal bg-signal/5 p-6 backdrop-blur-sm shadow-[inset_2px_0_0_#ffffff] flex flex-col justify-center flex-grow">
                <p className="font-body text-signal leading-relaxed text-sm md:text-base italic mb-4">{pillar.quote}</p>
                <p className="font-code text-gray-400 leading-relaxed text-xs uppercase tracking-wider">{pillar.subQuote}</p>
              </div>
            ) : (
              <div className="pl-6 border-l border-structure/30 group-hover:border-signal/50 transition-colors duration-500 flex flex-col gap-4">
                {pillar.paragraphs?.map((p, i) => (
                  <p key={i} className="font-inter font-normal text-gray-400 leading-relaxed text-sm md:text-base" dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Identity;
