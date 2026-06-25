import React, { useRef } from 'react';

const Identity = ({ config }) => {
  const data = config?.identity || {};
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      id="IDENTITY" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-32 px-8 md:px-12 bg-void border-b border-structure/20 text-signal relative overflow-hidden"
    >
      {/* Huge Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] z-0">
        <div className="text-[30vw] font-rajdhani font-black tracking-[-0.05em] text-white whitespace-nowrap select-none translate-y-12">
          CARDINAL
        </div>
      </div>

      {/* Interactive Background Grid of Cardinals */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-80 transition-opacity duration-300"
        style={{
          maskImage: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
        }}
      >
        <div className="w-full h-full flex flex-wrap justify-center content-start overflow-hidden">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="text-[12px] md:text-sm font-rajdhani font-bold tracking-[0.4em] text-signal opacity-50 m-3 select-none">
              CARDINAL
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="absolute top-0 right-12 w-px h-full bg-structure/10 z-0"></div>
      <div className="absolute top-12 left-0 w-8 h-px bg-signal z-0"></div>
      
      <div className="mb-10 max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 pb-12 relative z-10">
        <div className="max-w-4xl relative z-10 flex flex-col items-center text-center">
          <div className="text-xs font-code tracking-[0.3em] text-gray-500 mb-6">{data.sectionSubtitle}</div>
          <h2 className="text-[11vw] sm:text-6xl md:text-[80px] lg:text-[100px] font-inter font-bold tracking-[-0.04em] text-[#777777] mb-2 leading-[0.9]">
            {data.headlinePrefix}
            <br />
            <span className="text-signal">{data.headlineHighlight}</span>
          </h2>
          <div className="text-sm font-code text-signal opacity-70 tracking-widest uppercase mt-6">{data.footerText}</div>
        </div>

        {/* Modular Accolades Graphics Centerpiece - Inspired exactly by reference design, borderless */}
        {data.accoladesList && data.accoladesList.length > 0 && (
          <div className="w-full max-w-5xl px-0 sm:px-4 mb-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-end justify-center">
              
              {/* Left Side: Giant "1" Watermark Statement */}
              <div className="flex-shrink-0 flex items-end select-none pointer-events-none relative">
                <span className="font-inter font-black text-[#2d2d2d] text-[260px] sm:text-[420px] md:text-[580px] lg:text-[700px] leading-[0.7] tracking-tighter flex items-end">
                  1
                  <span className="font-inter font-bold text-[#2d2d2d] text-[55px] sm:text-[90px] md:text-[120px] lg:text-[150px] leading-none mb-[0.06em] -ml-[0.05em] tracking-wider">
                    st
                  </span>
                </span>
              </div>
              
              {/* Right Side: Statement, Accolades List, Event details */}
              <div className="flex-grow flex flex-col items-end text-right pl-0 md:pl-10 py-4 w-full">
                {/* Statement - Left Aligned */}
                <div className="w-full flex justify-start text-left mb-2">
                  <h3 className="font-inter font-black text-5xl sm:text-6xl md:text-[68px] lg:text-[80px] xl:text-[92px] text-[#777777] leading-[0.85] tracking-tighter normal-case">
                    <span className="whitespace-nowrap">We are good</span><br />
                    <span className="whitespace-nowrap">at what we</span><br />
                    <span>do.</span>
                  </h3>
                </div>
                
                {/* Accolades details - right aligned container */}
                <div className="flex flex-col items-end w-fit">
                  <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[23px] text-white font-extrabold tracking-tight leading-none uppercase self-end text-right">
                    Overall Champions
                  </p>
                  <p className="font-code text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-2 mb-1.5 self-end text-right">
                    & Winners of the
                  </p>
                  <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[23px] text-white font-extrabold tracking-tight leading-none uppercase self-end text-right">
                    Sustainability Award
                  </p>
                  
                  {/* Divider line */}
                  <div className="w-full border-t border-white/20 my-3.5"></div>
                  
                  {/* Bottom details */}
                  <span className="font-code text-[10px] sm:text-xs md:text-[13px] text-white font-bold tracking-[0.15em] uppercase self-start text-left">
                    STEM Racing India
                  </span>
                  <span className="font-code text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-1.5 self-start text-left">
                    National Qualifiers
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Aesthetic Grid for About & Metadata */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
           {/* About Section */}
           {data.about && (
             <div className="border border-structure/30 bg-void/60 backdrop-blur-md p-6 sm:p-8 md:p-10 relative group hover:border-signal/50 transition-all duration-500 shadow-2xl">
               <div className="absolute top-0 left-0 w-8 h-[2px] bg-signal"></div>
               <div className="text-[10px] font-code text-signal tracking-[0.3em] uppercase mb-8 opacity-60 flex items-center gap-3">
                 <span className="w-4 h-px bg-signal"></span>
                 CORE_DIRECTIVE
               </div>
               <div className="flex flex-col gap-6">
                 {data.about.map((p, i) => (
                   <p key={i} className="font-inter text-gray-400 text-sm md:text-base leading-relaxed text-left">
                     {p}
                   </p>
                 ))}
               </div>
             </div>
           )}

           {/* Metadata Section */}
           {data.metadata && (
             <div className="border border-structure/30 bg-void/60 backdrop-blur-md p-6 sm:p-8 md:p-10 relative group hover:border-signal/50 transition-all duration-500 flex flex-col justify-between shadow-2xl overflow-hidden min-h-[300px]">
                <div className="absolute top-0 right-0 w-8 h-[2px] bg-signal"></div>
                <div className="text-[10px] font-code text-signal tracking-[0.3em] uppercase mb-8 opacity-60 flex flex-row-reverse items-center justify-start gap-3">
                  <span className="w-4 h-px bg-signal"></span>
                  SYSTEM_METADATA
                </div>

                <div className="flex-grow flex flex-col justify-center relative z-10">
                  <div className="flex flex-col gap-5 border-r border-structure/30 pr-6 items-end text-right">
                    {data.metadata.split(' | ').map((line, i) => {
                      const [key, val] = line.split(': ');
                      return (
                        <div key={i} className="flex flex-col items-end">
                          <span className="font-code text-[10px] text-gray-500 tracking-[0.2em] mb-1">{key}</span>
                          <span className="font-code text-sm md:text-base text-signal tracking-[0.1em]">{val}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
             </div>
           )}
        </div>
      </div>

      {/* Status */}
      {data.status && (
        <div className="max-w-5xl mx-auto mb-10 relative z-10 text-center">
          <div className="flex flex-col items-center gap-4 p-6 sm:p-8 border border-structure/30 bg-structure/5 backdrop-blur-md relative group hover:border-signal/50 transition-colors duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-signal transition-all duration-300 group-hover:w-16"></div>
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-signal animate-pulse shadow-[0_0_12px_#ffffff]"></div>
            <div>
              <span className="font-inter text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase block mb-3">CURRENT_STATUS</span>
              <span className="font-inter text-sm md:text-lg font-medium text-signal/95 tracking-wide leading-relaxed block">{data.status}</span>
            </div>
          </div>
        </div>
      )}

      {/* Centering Spacer */}
      <div className="h-4"></div>

      {/* CTA to Prospectus */}
      <div className="relative z-10 w-full flex justify-center mt-6">
        <a 
          href="#PROSPECTUS" 
          className="px-12 py-5 rounded-full border border-structure/50 text-sm md:text-base tracking-[0.3em] font-code text-signal hover:border-signal hover:bg-white/10 transition-all duration-500 group relative overflow-hidden bg-void/40 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          <span className="relative z-10">[ VIEW_PROSPECTUS ]</span>
        </a>
      </div>
    </section>
  );
};

export default Identity;
