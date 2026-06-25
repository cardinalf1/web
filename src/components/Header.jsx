import React, { useState, useEffect } from 'react';

const Header = ({ config }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={`fixed left-0 w-full z-50 flex justify-center pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? "top-6 px-4" : "top-0 px-0"}`}>
        <header className={`pointer-events-auto flex items-center h-16 text-xs uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isScrolled ? "w-full max-w-4xl rounded-full px-6 md:px-8 bg-void/50 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" : "w-full max-w-full rounded-none px-6 bg-transparent border-b border-structure/50"}`}>
          <div className="flex-shrink-0 w-1/2 md:w-1/3 flex items-center text-signal font-rajdhani font-normal tracking-[0.3em] text-xl">
            {config?.website?.logoAlt || "CARDINAL"}
          </div>
          <nav className="hidden md:flex gap-8 justify-center w-1/3">
            {["MISSION", "MACHINE", "UNIT", "UPLINK"].map(u => (
              <button key={u} onClick={() => scrollTo(u === "MISSION" ? "IDENTITY" : u === "MACHINE" ? "SYSTEMS" : u === "UNIT" ? "UNIT" : "FOOTER")} className="font-code hover:text-signal transition-colors duration-300 tracking-widest">
                {u}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4 justify-end w-1/2 md:w-1/3 font-code opacity-70 tracking-widest">
            <span className="hidden sm:inline-block">STATUS: {config?.website?.status || "ONLINE"}</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-signal animate-pulse shadow-[0_0_8px_#ffffff]"></span>
            {/* Hamburger Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden ml-2 flex flex-col gap-1.5 focus:outline-none p-2">
              <span className={`w-5 h-px bg-signal transition-transform duration-300 ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}></span>
              <span className={`w-5 h-px bg-signal transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-5 h-px bg-signal transition-transform duration-300 ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-void/95 backdrop-blur-2xl z-40 transition-opacity duration-500 md:hidden flex flex-col items-center justify-center ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col gap-12 items-center">
          {["MISSION", "MACHINE", "UNIT", "UPLINK"].map((u, i) => (
            <button 
              key={u} 
              onClick={() => scrollTo(u === "MISSION" ? "IDENTITY" : u === "MACHINE" ? "SYSTEMS" : u === "UNIT" ? "UNIT" : "FOOTER")} 
              className={`font-code text-xl sm:text-2xl tracking-[0.4em] text-signal transition-all duration-500`}
              style={{ 
                transitionDelay: isMenuOpen ? `${i * 100 + 100}ms` : '0ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMenuOpen ? 1 : 0
              }}
            >
              {u}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
