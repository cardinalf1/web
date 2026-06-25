import React, { useState } from 'react';
import CarCanvas from './CarCanvas';

const Systems = ({ config }) => {
  const data = config?.systems || {};
  const cars = data.cars || [];
  const [activeCarIdx, setActiveCarIdx] = useState(cars.length > 0 ? cars.length - 1 : 0);

  const activeCar = cars[activeCarIdx] || { specs: [], modelPath: "" };

  return (
    <section id="SYSTEMS" className="min-h-screen bg-[#111111] text-signal relative overflow-hidden flex flex-col pt-32 pb-16">
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-full md:w-[70%] h-[70vh] pointer-events-auto relative">
          <CarCanvas modelPath={activeCar.modelPath} interactive={true} />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_80%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col flex-grow pointer-events-none">
        <div className="mb-12">
          <div className="text-xs font-code tracking-[0.3em] text-gray-400 mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-signal"></span>
            {data.sectionSubtitle}
          </div>
          <h2 className="text-5xl md:text-[80px] lg:text-[100px] font-inter font-bold tracking-[-0.04em] text-[#555555] mb-2 leading-[0.9]">
            {data.headlinePrefix}
            <span className="text-signal">{data.headlineHighlight}</span>
          </h2>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-8 border-b border-structure/30 pb-2 overflow-x-auto no-scrollbar pointer-events-auto">
          {cars.map((car, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCarIdx(idx)}
              className={`px-4 py-2 font-code text-xs tracking-widest whitespace-nowrap transition-colors duration-300 ${activeCarIdx === idx ? 'text-signal border-b border-signal' : 'text-gray-500 hover:text-gray-300'}`}
            >
              {car.tabName}
            </button>
          ))}
        </div>

        <div className="flex-grow flex flex-col justify-end mt-auto pointer-events-none pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-structure/30 border border-structure/30 backdrop-blur-md overflow-hidden pointer-events-auto">
            {activeCar.specs.map((spec, idx) => (
              <div key={idx} className="bg-black/60 p-6 hover:bg-white/5 transition-colors group">
                <div className="text-[10px] font-code text-gray-500 tracking-[0.2em] mb-3 group-hover:text-signal transition-colors">{spec.label}</div>
                <div className="text-base md:text-lg font-code font-bold text-signal tracking-wide group-hover:translate-x-2 transition-transform duration-300">{spec.val}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-end">
            <div className="flex flex-col gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-px bg-white/${30 - i*10}`} style={{ width: `${100 - i*20}px` }}></div>
              ))}
            </div>
            <div className="text-[10px] font-code text-gray-600 tracking-[0.2em] text-right max-w-[200px]">
              DATA RENDERED IS CONFIDENTIAL. UNAUTHORIZED DISTRIBUTION PROHIBITED.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Systems;
