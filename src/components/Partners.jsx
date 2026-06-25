import React from 'react';

const Partners = ({ config }) => {
  const partnersList = [
    {
      name: "Ansys",
      url: "https://www.ansys.com",
      logoType: "image",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/1/14/Ansys_logo_%282019%29.svg",
      heightClass: "h-8 md:h-12",
      useInvert: true
    },
    {
      name: "WinDNA",
      url: "https://www.windna.in",
      logoType: "image",
      logoSrc: `${import.meta.env.BASE_URL}logo-Windna-R.png`,
      heightClass: "h-10 md:h-16",
      useInvert: true
    },
    {
      name: "Save Soil",
      url: "https://www.savesoil.org",
      logoType: "image",
      logoSrc: `${import.meta.env.BASE_URL}savesoil.webp`,
      heightClass: "h-12 md:h-20",
      useInvert: false
    },
    {
      name: "Miracle of Mind",
      url: "https://isha.sadhguru.org/",
      logoType: "image",
      logoSrc: `${import.meta.env.BASE_URL}MiracleofMind_Logo-Primary-CMYK.pdf_1.svg`,
      heightClass: "h-8 md:h-12",
      useInvert: true
    }
  ];

  const heroData = config?.hero || {};
  const ctaText = heroData.ctaText || "[ INITIATE_PARTNERSHIP ]";
  const ctaLink = heroData.ctaLink || "https://forms.gle/XmwxVcuLbaCed3tG7";

  return (
    <section id="PARTNERS" className="py-24 px-8 md:px-12 bg-black border-b border-structure/20 text-signal relative">
      <div className="absolute top-0 right-12 w-px h-full bg-structure/10 z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="w-full mb-16 text-center">
          <div className="text-xs font-code tracking-[0.3em] text-gray-500 mb-6">[ TRUST // ALLIANCE ]</div>
          <h2 className="text-[11vw] sm:text-5xl md:text-[80px] lg:text-[100px] font-inter font-bold tracking-[-0.04em] text-[#777777] mb-2 leading-[0.9] uppercase">
            OUR_
            <span className="text-signal">PARTNERS</span>
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center mt-6">
          {partnersList.map((partner, idx) => (
            <a 
              key={idx} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center p-4 hover:scale-105 transition-all duration-300"
              title={`Visit ${partner.name}`}
            >
              <img 
                src={partner.logoSrc} 
                alt={`${partner.name} logo`} 
                className={`${partner.heightClass} object-contain ${partner.useInvert ? 'filter brightness-0 invert opacity-40 hover:opacity-100' : 'filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100'} transition-all duration-300`} 
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center w-full">
          <a 
            href={ctaLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-12 py-5 rounded-full border border-structure/50 text-sm md:text-base tracking-[0.3em] font-code text-signal hover:border-signal hover:bg-white/10 transition-all duration-500 group relative overflow-hidden bg-void/40 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">{ctaText}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
