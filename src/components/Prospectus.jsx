import React from 'react';

const Prospectus = ({ config }) => {
  const ctaLink = config?.hero?.ctaLink || "#";
  const ctaText = config?.hero?.ctaText || "[ INITIATE_PARTNERSHIP ]";

  return (
    <section id="PROSPECTUS" className="py-32 px-8 md:px-12 bg-void border-b border-structure/20 text-signal relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full mb-16 text-center">
          <div className="text-xs font-code tracking-[0.3em] text-gray-500 mb-6">[ PARTNERSHIP // COLLABORATION ]</div>
          <h2 className="text-[11vw] sm:text-5xl md:text-[80px] lg:text-[100px] font-inter font-bold tracking-[-0.04em] text-[#777777] mb-2 leading-[0.9]">
            INVESTMENT_
            <br />
            <span className="text-signal">PROSPECTUS</span>
          </h2>
          <div className="mt-8 mb-4 inline-block px-6 py-3 border border-signal bg-signal/10 text-signal font-code text-[11px] md:text-sm tracking-[0.2em] uppercase font-bold backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            [STATUS: NATIONAL LEVEL INVESTMENT ROUND OPEN]
          </div>
          <p className="text-sm font-code text-gray-500 tracking-wider uppercase mt-4">
            Scroll, zoom, or download the prospectus below to explore our team roadmap and partnership opportunities.
          </p>
        </div>

        <div className="w-full max-w-5xl bg-void/50 border border-structure/30 rounded-xl overflow-hidden shadow-2xl p-4 flex flex-col gap-6">
          <div className="relative w-full h-[380px] sm:h-[500px] md:h-[650px] bg-black/40 rounded-lg overflow-hidden border border-structure/20">
            <object
              data={`${import.meta.env.BASE_URL}prospectus.pdf`}
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src={`${import.meta.env.BASE_URL}prospectus.pdf`}
                className="w-full h-full"
                title="Investment Prospectus"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-sm text-gray-400 mb-4">This browser does not support inline PDF viewing.</p>
                  <a
                    href={`${import.meta.env.BASE_URL}prospectus.pdf`}
                    download
                    className="px-6 py-3 rounded-full border border-structure/50 text-[10px] tracking-[0.2em] font-code text-gray-400 hover:border-signal hover:text-signal hover:bg-white/5 transition-all duration-300"
                  >
                    [ DOWNLOAD_PROSPECTUS ]
                  </a>
                </div>
              </iframe>
            </object>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center px-2 py-2">
            <div className="text-xs font-code text-gray-600">
              CARDINAL_PROSPECTUS_2026.PDF
            </div>
            <a
              href={`${import.meta.env.BASE_URL}prospectus.pdf`}
              download
              className="px-6 py-2.5 rounded-full border border-structure/50 text-[10px] tracking-[0.2em] font-code text-gray-400 hover:border-signal hover:text-signal hover:bg-white/5 transition-all duration-300"
            >
              [ DOWNLOAD_PDF ]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prospectus;
