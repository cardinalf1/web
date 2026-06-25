import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StemRacing from './components/StemRacing';
import Identity from './components/Identity';
import Systems from './components/Systems';
import Unit from './components/Unit';
import Footer from './components/Footer';
import Prospectus from './components/Prospectus';
import Partners from './components/Partners';


function App() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'config.json?t=' + new Date().getTime())
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setConfig(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load config:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen bg-void flex items-center justify-center text-signal font-code">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-structure border-t-signal rounded-full animate-spin"></div>
          <div className="tracking-[0.3em] text-xs">INITIALIZING SYSTEM...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen bg-void flex items-center justify-center text-red-500 font-code">
        <div className="text-center">
          <div className="text-xl mb-2">[ ERROR ]</div>
          <div className="text-xs tracking-widest">Failed to load configuration data.</div>
          <div className="text-xs mt-4 text-structure">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-void min-h-screen overflow-x-hidden w-full relative">
      <Header config={config} />
      <Hero config={config} />
      <StemRacing config={config} />
      <Identity config={config} />
      <Systems config={config} />
      <Unit config={config} />
      <Prospectus config={config} />
      <Partners config={config} />
      <Footer config={config} />
    </div>
  );
}

export default App;
