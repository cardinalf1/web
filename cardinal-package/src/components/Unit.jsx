import React from 'react';

const Unit = ({ config }) => {
  const data = config?.unit || {};

  return (
    <section id="UNIT" className="py-32 px-8 md:px-12 bg-void border-b border-structure/20 text-signal relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="text-xs font-code tracking-[0.3em] text-gray-500 mb-6">[ PERSONNEL_MANIFEST ]</div>
          <h2 className="text-[11vw] sm:text-6xl md:text-[80px] lg:text-[100px] font-inter font-bold tracking-[-0.04em] text-[#777777] mb-2 leading-[0.9]">
            {data.headlinePrefix}
            <br />
            <span className="text-signal">{data.headlineHighlight}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-structure/30 border border-structure/30 p-px">
          {data.members?.map((member, idx) => (
            <div key={idx} className="bg-void group relative overflow-hidden h-[400px] flex flex-col justify-end p-6 hover:bg-structure/20 transition-colors duration-500 cursor-pointer">
              <div className="absolute inset-0 z-0">
                {member.image ? (
                  <img src={`${import.meta.env.BASE_URL}${member.image.startsWith('/') ? member.image.slice(1) : member.image}`} alt={member.name} className="w-full h-full object-cover opacity-95 group-hover:opacity-80 transition-all duration-700 grayscale-0 group-hover:grayscale" />
                ) : (
                  <div className={`w-full h-full opacity-40 group-hover:opacity-80 transition-opacity duration-700 mix-blend-screen 
                    bg-gradient-to-br from-void via-[#1a1a1a] to-[#333333]`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent"></div>
              </div>
              <div className="absolute top-6 right-6 text-[10px] font-code text-gray-600 font-bold opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                0{idx + 1}
              </div>
              <div className="relative z-10 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="text-[10px] font-code text-signal mb-1 tracking-[0.2em] uppercase">{member.role}</div>
                <h3 className="text-2xl lg:text-xl xl:text-2xl font-inter font-bold text-signal mb-4 leading-none tracking-tight">
                  {member.name.split(' ')[0]}<br/>{member.name.split(' ').slice(1).join(' ')}
                </h3>
                <div className="h-auto md:h-0 group-hover:h-12 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <div className="text-[10px] font-code text-gray-400 border-l-2 border-signal pl-3 uppercase tracking-wider leading-relaxed">
                    {member.spec}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unit;
