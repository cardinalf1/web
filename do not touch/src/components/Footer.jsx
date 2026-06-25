import React, { useState, useEffect } from 'react';

const Footer = ({ config }) => {
  const data = config?.footer || {};
  const [copiedId, setCopiedId] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleCopy = (e, email, id) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  useEffect(() => {
    if (!isContactOpen) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.contact-menu-container')) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isContactOpen]);

  return (
    <footer id="FOOTER" className="bg-void text-signal py-12 px-8 border-t border-structure/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-rajdhani font-normal tracking-[0.3em]">{config?.website?.logoAlt || "CARDINAL"}</div>
          <div className="text-xs font-code text-gray-500">{data.systemId}</div>
        </div>
        <div className="flex gap-6 items-center">
          {data.links?.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs font-code text-gray-400 hover:text-signal transition-colors tracking-widest">
              {link.label}
            </a>
          ))}
          
          {/* Custom Contact Click Menu */}
          <div className="relative py-2 contact-menu-container">
            <button 
              onClick={() => setIsContactOpen(!isContactOpen)}
              className={`text-xs font-code tracking-widest uppercase focus:outline-none transition-colors duration-300 ${isContactOpen ? "text-signal" : "text-gray-400 hover:text-signal"}`}
            >
              {isContactOpen ? "[ CLOSE_CONTACT ]" : "[ CONTACT ]"}
            </button>
            <div 
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 flex flex-col bg-void border border-structure/50 p-4 rounded shadow-[0_-10px_35px_rgba(0,0,0,0.95)] min-w-[360px] z-50 text-left transition-all duration-300 origin-bottom ${
                isContactOpen 
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
                  : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              {/* Telemetry border accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40"></div>

              <div className="text-[9px] font-code text-gray-500 tracking-[0.2em] mb-4 uppercase border-b border-structure/30 pb-2">
                // CONTACT_ROUTING_CHANNELS
              </div>

              {/* Raghav / Enterprise */}
              <div className="group/item flex flex-col gap-1 hover:bg-white/5 p-2 rounded transition-colors relative border border-transparent hover:border-structure/30">
                <div className="flex justify-between items-center gap-4">
                  <a 
                    href="mailto:raghav.bahadur.2022044@ishahomeschool.org" 
                    className="flex flex-col gap-0.5 flex-grow focus:outline-none overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-code text-signal font-bold tracking-wider">// RAGHAV BAHADUR</span>
                      <span className="text-[8px] font-code text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded bg-green-500/5 animate-pulse uppercase tracking-widest font-semibold">ACTIVE</span>
                    </div>
                    <span className="text-[11px] font-code text-gray-400 group-hover/item:text-signal transition-colors truncate">
                      raghav.bahadur.2022044@ishahomeschool.org
                    </span>
                  </a>
                  <button 
                    onClick={(e) => handleCopy(e, "raghav.bahadur.2022044@ishahomeschool.org", "raghav")}
                    className="text-[9px] font-code px-2 py-1 bg-structure/20 border border-structure hover:border-signal text-gray-400 hover:text-signal transition-all duration-300 rounded uppercase tracking-wider select-none flex-shrink-0"
                    style={{ minWidth: '60px' }}
                    title="Copy email"
                  >
                    {copiedId === "raghav" ? "COPIED" : "COPY"}
                  </button>
                </div>
                <span className="text-[8px] font-code text-gray-500 uppercase tracking-widest mt-1 leading-normal">
                  *RECOMMENDED - ACCESSIBLE FROM SCHOOL
                </span>
              </div>

              <div className="h-px bg-structure/30 my-3"></div>

              {/* Rudra / Operations */}
              <div className="group/item flex flex-col gap-1 hover:bg-white/5 p-2 rounded transition-colors relative border border-transparent hover:border-structure/30">
                <div className="flex justify-between items-center gap-4">
                  <a 
                    href="mailto:rudra.bharadava.2025044@ishahomeschool.org" 
                    className="flex flex-col gap-0.5 flex-grow focus:outline-none overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-code text-signal font-bold tracking-wider">// RUDRA BHARADAVA</span>
                      <span className="text-[8px] font-code text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded bg-green-500/5 animate-pulse uppercase tracking-widest font-semibold">ACTIVE</span>
                    </div>
                    <span className="text-[11px] font-code text-gray-400 group-hover/item:text-signal transition-colors truncate">
                      rudra.bharadava.2025044@ishahomeschool.org
                    </span>
                  </a>
                  <button 
                    onClick={(e) => handleCopy(e, "rudra.bharadava.2025044@ishahomeschool.org", "rudra")}
                    className="text-[9px] font-code px-2 py-1 bg-structure/20 border border-structure hover:border-signal text-gray-400 hover:text-signal transition-all duration-300 rounded uppercase tracking-wider select-none flex-shrink-0"
                    style={{ minWidth: '60px' }}
                    title="Copy email"
                  >
                    {copiedId === "rudra" ? "COPIED" : "COPY"}
                  </button>
                </div>
                <span className="text-[8px] font-code text-gray-500 uppercase tracking-widest mt-1 leading-normal">
                  *RECOMMENDED - ACCESSIBLE FROM SCHOOL
                </span>
              </div>

              <div className="h-px bg-structure/30 my-3"></div>

              {/* General HQ */}
              <div className="group/item flex flex-col gap-1 hover:bg-white/5 p-2 rounded transition-colors relative border border-transparent hover:border-structure/30">
                <div className="flex justify-between items-center gap-4">
                  <a 
                    href="mailto:contact@cardinalsystems.org" 
                    className="flex flex-col gap-0.5 flex-grow focus:outline-none overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-code text-gray-400 font-bold tracking-wider">// GENERAL HQ</span>
                      <span className="text-[8px] font-code text-yellow-500/70 border border-yellow-500/20 px-1.5 py-0.5 rounded bg-yellow-500/5 uppercase tracking-widest font-semibold">STANDARD</span>
                    </div>
                    <span className="text-[11px] font-code text-gray-400 group-hover/item:text-signal transition-colors truncate">
                      contact@cardinalsystems.org
                    </span>
                  </a>
                  <button 
                    onClick={(e) => handleCopy(e, "contact@cardinalsystems.org", "hq")}
                    className="text-[9px] font-code px-2 py-1 bg-structure/20 border border-structure hover:border-signal text-gray-400 hover:text-signal transition-all duration-300 rounded uppercase tracking-wider select-none flex-shrink-0"
                    style={{ minWidth: '60px' }}
                    title="Copy email"
                  >
                    {copiedId === "hq" ? "COPIED" : "COPY"}
                  </button>
                </div>
                <span className="text-[8px] font-code text-gray-500 uppercase tracking-widest mt-1 leading-normal">
                  GENERAL INQUIRIES & FORMAL CHANNELS
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs font-code text-gray-600 text-right">
          <div>&copy; {data.copyright}</div>
          <div>{data.location}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
