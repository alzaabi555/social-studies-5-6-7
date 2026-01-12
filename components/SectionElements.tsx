import React, { useState, useEffect } from 'react';
import { WEATHER_ELEMENTS_DATA } from '../constants';
import { WeatherElement } from '../types';
import { Info, Settings, Lightbulb, PlayCircle, RefreshCw, ThermometerSun, CloudRain, Wind } from 'lucide-react';

const SectionElements: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<WeatherElement>(WEATHER_ELEMENTS_DATA[0]);
  
  // Interactive Lab State
  const [labValue, setLabValue] = useState(50); // General value 0-100
  const [isActive, setIsActive] = useState(false); // For toggle states like Rain

  // Reset lab when element changes
  useEffect(() => {
      setLabValue(50);
      setIsActive(false);
  }, [selectedElement.id]);

  // Helper to render specific SVG based on element ID and State
  const renderElementIllustration = (id: string) => {
      switch(id) {
          case 'temp':
              // Lab Value = Temperature Level (0 = Cold Blue, 100 = Hot Red)
              const tempColor = labValue > 60 ? "#EF4444" : labValue > 30 ? "#F59E0B" : "#3B82F6";
              const bgOpacity = 0.1 + (labValue / 200);
              
              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill={tempColor} fillOpacity={bgOpacity} className="transition-all duration-500" />
                      <circle cx="350" cy="50" r="40" fill={tempColor} opacity="0.2" className="transition-all duration-500" />
                      
                      {/* Interactive Thermometer */}
                      <g transform="translate(190, 20)">
                          <rect x="0" y="0" width="20" height="140" rx="10" fill="white" stroke="#CBD5E1" strokeWidth="2" />
                          <circle cx="10" cy="140" r="20" fill={tempColor} className="transition-colors duration-500" />
                          {/* Mercury Level */}
                          <rect 
                            x="5" 
                            y={Math.max(0, 140 - (labValue * 1.2))} 
                            width="10" 
                            height={labValue * 1.2} 
                            fill={tempColor} 
                            className="transition-all duration-300 ease-out"
                          />
                          {/* Marks */}
                          <line x1="20" y1="40" x2="25" y2="40" stroke="#64748B" strokeWidth="2" />
                          <line x1="20" y1="70" x2="25" y2="70" stroke="#64748B" strokeWidth="2" />
                          <line x1="20" y1="100" x2="25" y2="100" stroke="#64748B" strokeWidth="2" />
                      </g>
                      
                      <text x="30" y="100" fill={tempColor} fontSize="24" fontWeight="bold" className="transition-colors duration-500">
                          {labValue}°C
                      </text>
                  </svg>
              );

          case 'pressure':
              // Lab Value = Pressure Piston Depth
              const pistonY = 20 + (labValue * 0.8); // Moves down as value increases
              const particleSpacing = 100 - (labValue * 0.8); // Less spacing = higher pressure
              const particleColor = labValue > 70 ? "#EF4444" : "#1E3A8A"; // Red when high pressure (hot)

              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill="#BFDBFE" />
                      
                      {/* Particles inside */}
                      <g className="transition-all duration-300">
                          {Array.from({length: 12}).map((_, i) => (
                              <circle 
                                key={i} 
                                cx={50 + (i * 30)} 
                                cy={180 - (Math.random() * particleSpacing)} 
                                r="5" 
                                fill={particleColor}
                                className="transition-all duration-300"
                              />
                          ))}
                      </g>

                      {/* Piston Head */}
                      <rect x="0" y={pistonY} width="400" height="20" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" className="transition-all duration-300" />
                      {/* Piston Rods */}
                      <rect x="100" y="0" width="10" height={pistonY} fill="#94A3B8" />
                      <rect x="300" y="0" width="10" height={pistonY} fill="#94A3B8" />
                      
                      <text x="20" y="180" fill="#1E3A8A" fontSize="14" fontWeight="bold">
                          {labValue > 70 ? "ضغط مرتفع (High)" : "ضغط منخفض (Low)"}
                      </text>
                  </svg>
              );

          case 'wind':
              // Lab Value = Wind Speed (Animation Duration)
              const speedDuration = Math.max(0.1, 2 - (labValue / 50)); 
              
              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill="#E2E8F0" />
                      
                      {/* Anemometer Cups */}
                      <g transform="translate(200, 100)">
                          {/* IMPORTANT: transform-box: fill-box and transform-origin: center are needed for CSS rotations on SVG elements in some browsers */}
                          <g style={{ animation: `spin ${speedDuration}s linear infinite`, transformBox: 'fill-box', transformOrigin: 'center' }}>
                              <line x1="0" y1="0" x2="60" y2="0" stroke="#475569" strokeWidth="4" />
                              <line x1="0" y1="0" x2="-60" y2="0" stroke="#475569" strokeWidth="4" />
                              <line x1="0" y1="0" x2="0" y2="60" stroke="#475569" strokeWidth="4" />
                              <line x1="0" y1="0" x2="0" y2="-60" stroke="#475569" strokeWidth="4" />
                              
                              <circle cx="60" cy="0" r="15" fill="#EF4444" />
                              <circle cx="-60" cy="0" r="15" fill="#3B82F6" />
                              <circle cx="0" cy="60" r="15" fill="#3B82F6" />
                              <circle cx="0" cy="-60" r="15" fill="#3B82F6" />
                          </g>
                          <circle cx="0" cy="0" r="5" fill="#1E293B" />
                          <rect x="-2" y="0" width="4" height="100" fill="#475569" />
                      </g>

                      {/* Wind Lines */}
                      {labValue > 10 && (
                          <path d="M50,50 H350" stroke="#94A3B8" strokeWidth="2" strokeDasharray="10 20" style={{ animation: `dash ${speedDuration}s linear infinite` }} />
                      )}
                  </svg>
              );

          case 'humidity':
              return (
                   <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill="#E0F2FE" />
                      {/* Water droplets - Scale based on Lab Value */}
                      {/* Added transformBox/Origin for better scaling stability */}
                      <g 
                        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                        transform={`scale(${0.5 + labValue/100}) translate(${200 - (labValue)}, ${100 - (labValue/2)})`} 
                        className="transition-transform duration-500 origin-center"
                      >
                          <path d="M100,100 Q100,80 110,80 Q120,80 120,100 Q120,120 110,120 Q100,120 100,100" fill="#38BDF8" />
                          <path d="M150,80 Q150,60 160,60 Q170,60 170,80 Q170,100 160,100 Q150,100 150,80" fill="#38BDF8" />
                      </g>
                      <text x="20" y="180" fill="#0369A1" fontSize="14">حرك المؤشر لزيادة بخار الماء</text>
                  </svg>
              );

          case 'precipitation':
              // isActive = Raining or not
              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill={isActive ? "#334155" : "#94A3B8"} className="transition-colors duration-1000" />
                      
                      {/* Cloud */}
                      <path d="M100,60 Q130,20 180,60 T280,60 T350,60" fill="none" stroke="white" strokeWidth="40" strokeLinecap="round" />
                      
                      {/* Rain Drops */}
                      {isActive && (
                          <g className="animate-rain">
                              {Array.from({length: 10}).map((_, i) => (
                                  <line key={i} x1={120 + i*20} y1="80" x2={110 + i*20} y2="100" stroke="#60A5FA" strokeWidth="2" 
                                        style={{ animation: `fall ${0.5 + Math.random()}s linear infinite` }} />
                              ))}
                          </g>
                      )}
                  </svg>
              );

          default:
              return <div className="bg-slate-200 w-full h-full"></div>;
      }
  };

  const renderControls = () => {
      if (selectedElement.id === 'precipitation') {
          return (
              <button 
                onClick={() => setIsActive(!isActive)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold shadow-md transition-all ${isActive ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border border-indigo-200'}`}
              >
                  <CloudRain size={20} />
                  {isActive ? 'إيقاف المطر' : 'جعلها تمطر'}
              </button>
          );
      }
      
      let label = "";
      let icon = <Settings size={18} />;
      
      if (selectedElement.id === 'temp') { label = "تحكم في الحرارة"; icon = <ThermometerSun size={18}/>; }
      else if (selectedElement.id === 'pressure') { label = "اضغط المكبس"; icon = <RefreshCw size={18}/>; }
      else if (selectedElement.id === 'wind') { label = "سرعة الرياح"; icon = <Wind size={18}/>; }
      else if (selectedElement.id === 'humidity') { label = "كمية البخار"; icon = <Settings size={18}/>; }

      return (
          <div className="flex items-center gap-4 w-full max-w-sm">
              <span className="text-slate-500 font-bold text-sm whitespace-nowrap flex items-center gap-2">
                  {icon} {label}
              </span>
              <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={labValue} 
                  onChange={(e) => setLabValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
          </div>
      );
  };

  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-slate-800">عناصر الطقس وأدوات القياس</h2>
        <p className="text-slate-500 mt-2">كيف يقيس علماء الأرصاد الجوية حالة الجو؟</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Navigation / List */}
        <div className="lg:w-1/4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
          {WEATHER_ELEMENTS_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedElement(item)}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 min-w-[200px] lg:w-full text-right ${
                selectedElement.id === item.id 
                ? 'bg-sky-600 text-white shadow-lg transform scale-105' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              <div className={`p-2 rounded-full ${selectedElement.id === item.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                {React.cloneElement(item.icon as React.ReactElement, { 
                    className: selectedElement.id === item.id ? 'text-white' : 'text-slate-500' 
                })}
              </div>
              <div>
                  <span className="block font-bold text-lg">{item.name}</span>
                  <span className="text-xs opacity-80 font-light hidden lg:block">{item.instrument}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Detail Content */}
        <div className="lg:w-3/4 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col animate-slide-up">
            
            {/* Header Image Area with Safe SVG Illustration */}
            <div className="relative h-64 md:h-80 bg-slate-100 overflow-hidden group flex flex-col">
               <div className="flex-1 relative">
                   {renderElementIllustration(selectedElement.id)}
               </div>
               
               {/* Interactive Lab Bar */}
               <div className="h-16 bg-white/90 backdrop-blur border-t border-slate-200 flex items-center justify-between px-6 z-20 relative">
                    {renderControls()}
                    <span className="text-xs text-sky-600 bg-sky-50 px-2 py-1 rounded border border-sky-100 font-bold">مختبر تفاعلي 🧪</span>
               </div>

               <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/60 to-transparent p-6 pointer-events-none z-10">
                   <h3 className="text-3xl font-black text-white mb-1">{selectedElement.name}</h3>
                   <p className="text-slate-200 text-sm max-w-2xl opacity-90">{selectedElement.definition}</p>
               </div>
            </div>

            {/* Info Body */}
            <div className="p-8 grid md:grid-cols-2 gap-8">
                
                {/* Left Column: Stats & Instrument */}
                <div className="space-y-6">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-3">أداة القياس</h4>
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm border">
                                {selectedElement.icon}
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-800">{selectedElement.instrument}</p>
                                <p className="text-sm text-slate-500 font-mono mt-1">وحدة القياس: {selectedElement.unit}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100">
                         <h4 className="flex items-center gap-2 font-bold text-sky-800 mb-2">
                             <Settings size={18}/> كيف يحدث؟ (الآلية)
                         </h4>
                         <p className="text-sky-900 leading-relaxed text-sm">
                             {selectedElement.mechanism}
                         </p>
                    </div>
                </div>

                {/* Right Column: Importance & Facts */}
                <div className="space-y-6">
                    <div>
                        <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 border-b pb-2">
                            <Info size={18} className="text-indigo-500"/> لماذا نهتم به؟
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                            {selectedElement.importance}
                        </p>
                    </div>

                    <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Lightbulb size={100} className="text-amber-500"/>
                        </div>
                        <h4 className="relative z-10 flex items-center gap-2 font-bold text-amber-800 mb-2">
                             <Lightbulb size={18}/> هل تعلم؟
                        </h4>
                        <p className="relative z-10 text-amber-900 leading-relaxed text-sm italic">
                             "{selectedElement.realWorldExample}"
                        </p>
                    </div>
                </div>

            </div>
        </div>

      </div>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fall { from { transform: translateY(0); opacity: 1; } to { transform: translateY(20px); opacity: 0; } }
      `}</style>
    </div>
  );
};

export default SectionElements;