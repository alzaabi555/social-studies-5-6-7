import React, { useState } from 'react';
import { Wind, Waves, Play, RotateCcw, Droplets, Mountain } from 'lucide-react';

type ErosionType = 'wind' | 'soil_exp' | 'waves' | 'river';

const ErosionSim: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ErosionType>('wind');
  const [progress, setProgress] = useState(0); 
  const [isAnimating, setIsAnimating] = useState(false);

  // Soil Experiment States
  const [soilType, setSoilType] = useState<'dry' | 'wet'>('dry');

  const startSimulation = () => {
    if (isAnimating || progress >= 100) return;
    setIsAnimating(true);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnimating(false);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  };

  const reset = () => {
    setProgress(0);
    setIsAnimating(false);
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
         {/* Tabs */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-100 p-2 rounded-2xl max-w-3xl mx-auto mb-8">
            <button onClick={() => { setActiveTab('wind'); reset(); }} className={`py-2 rounded-xl text-xs md:text-sm font-bold ${activeTab === 'wind' ? 'bg-white shadow text-orange-700' : 'text-slate-500'}`}>
                <Wind className="inline-block ml-1" size={14}/> نحت الرياح
            </button>
            <button onClick={() => { setActiveTab('soil_exp'); reset(); }} className={`py-2 rounded-xl text-xs md:text-sm font-bold ${activeTab === 'soil_exp' ? 'bg-white shadow text-green-700' : 'text-slate-500'}`}>
                <Mountain className="inline-block ml-1" size={14}/> تجربة التربة
            </button>
            <button onClick={() => { setActiveTab('waves'); reset(); }} className={`py-2 rounded-xl text-xs md:text-sm font-bold ${activeTab === 'waves' ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}>
                <Waves className="inline-block ml-1" size={14}/> نحت الأمواج
            </button>
            <button onClick={() => { setActiveTab('river'); reset(); }} className={`py-2 rounded-xl text-xs md:text-sm font-bold ${activeTab === 'river' ? 'bg-white shadow text-cyan-700' : 'text-slate-500'}`}>
                <Droplets className="inline-block ml-1" size={14}/> الشلالات
            </button>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
            
            {/* 1. Wind Erosion (Mushroom Rock) */}
            {activeTab === 'wind' && (
                <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100 relative overflow-hidden flex flex-col items-center">
                    <h3 className="text-2xl font-black text-orange-800 mb-2">الموائد الصخرية</h3>
                    <p className="text-orange-900/70 mb-6 text-center max-w-lg">
                         تقوم الرياح المحملة بالرمال بنحت الأجزاء السفلية اللينة من الصخور أكثر من العلوية.
                    </p>
                    
                    <div className="relative w-full h-64 flex justify-center items-end">
                        {/* Wind Animation */}
                        {isAnimating && (
                             <div className="absolute inset-0 pointer-events-none z-20">
                                 {Array.from({length: 15}).map((_, i) => (
                                     <div key={i} className="absolute h-0.5 bg-orange-400 rounded-full animate-[wind_0.5s_linear_infinite]" 
                                          style={{ top: `${40 + Math.random() * 40}%`, left: '0', width: '50px', animationDelay: `${Math.random()}s` }}></div>
                                 ))}
                             </div>
                        )}
                        
                        <svg viewBox="0 0 200 200" className="h-full z-10">
                            {/* Rock Morphing */}
                            <path 
                                d={progress < 100 
                                    ? `M60,200 L60,${80 + (progress/2)} L140,${80 + (progress/2)} L140,200 Z` // Shrinking base
                                    : "M80,200 L90,120 L110,120 L120,200 Z" // Final Stem
                                }
                                fill="#92400E" 
                                className="transition-all duration-100"
                            />
                            <path d="M40,80 Q100,20 160,80 Z" fill="#B45309" stroke="#78350F" strokeWidth="2" /> {/* Top Cap */}
                        </svg>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <button onClick={startSimulation} className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold">ابدأ النحت 💨</button>
                        <button onClick={reset} className="bg-white text-orange-600 border border-orange-200 px-4 py-2 rounded-lg"><RotateCcw/></button>
                    </div>
                </div>
            )}

            {/* 2. Soil Experiment (Activity Page 58) */}
            {activeTab === 'soil_exp' && (
                <div className="bg-green-50 rounded-3xl p-6 border border-green-100 flex flex-col items-center">
                    <h3 className="text-2xl font-black text-green-800 mb-2">نشاط: أثر الماء والغطاء النباتي</h3>
                    <p className="text-green-900/70 mb-6 text-center">
                        هل تؤثر رطوبة التربة على سرعة تعريتها بالرياح؟ (كما ورد في الكتاب ص 58)
                    </p>

                    <div className="flex gap-4 mb-6">
                        <button onClick={() => setSoilType('dry')} className={`px-4 py-2 rounded-lg font-bold ${soilType === 'dry' ? 'bg-amber-400 text-white' : 'bg-white'}`}>تربة مفككة (جافة)</button>
                        <button onClick={() => setSoilType('wet')} className={`px-4 py-2 rounded-lg font-bold ${soilType === 'wet' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>تربة رطبة / بها نبات</button>
                    </div>

                    <div className="relative w-full h-64 bg-sky-100 rounded-xl overflow-hidden border-b-8 border-[#8D6E63] flex items-end justify-center">
                         {/* Fan */}
                         <div className={`absolute top-10 left-10 w-24 h-24 ${isAnimating ? 'animate-spin' : ''}`}>
                             <div className="absolute inset-0 border-4 border-slate-400 rounded-full border-t-transparent"></div>
                             <Wind className="w-full h-full text-slate-500" />
                         </div>
                         {/* Wind Lines */}
                         {isAnimating && <div className="absolute top-20 left-36 w-48 h-10 bg-gradient-to-r from-white/50 to-transparent animate-pulse"></div>}

                         {/* Soil Pile */}
                         <div className={`relative transition-all duration-1000 ${isAnimating && soilType === 'dry' ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
                             <svg viewBox="0 0 200 100" className="w-64 h-32">
                                 <path d="M20,100 Q100,0 180,100 Z" fill={soilType === 'dry' ? "#D7CCC8" : "#5D4037"} />
                                 {soilType === 'wet' && (
                                     <g transform="translate(100,20)">
                                         <path d="M0,0 L0,-20" stroke="green" strokeWidth="2"/>
                                         <circle cx="0" cy="-25" r="5" fill="green"/>
                                     </g>
                                 )}
                             </svg>
                         </div>
                    </div>

                    <div className="mt-6">
                        <button onClick={() => setIsAnimating(true)} className="bg-slate-700 text-white px-8 py-3 rounded-full font-bold shadow-lg">
                           تشغيل المروحة 🌬️
                        </button>
                    </div>
                    
                    {isAnimating && (
                        <div className="mt-4 bg-white p-3 rounded-lg shadow text-center font-bold animate-fade-in">
                            {soilType === 'dry' 
                                ? "النتيجة: التربة المفككة تطايرت بسرعة!" 
                                : "النتيجة: الماء والنبات ساعدا على تماسك التربة ومقاومة الرياح."}
                        </div>
                    )}
                </div>
            )}

            {/* 3. Waves (Sea Arch) */}
            {activeTab === 'waves' && (
                 <div className="bg-sky-50 rounded-3xl p-6 border border-sky-100 flex flex-col items-center">
                    <h3 className="text-2xl font-black text-sky-800 mb-2">الأقواس البحرية</h3>
                    <p className="text-sky-900/70 mb-6 text-center">
                        نحت الأمواج المستمر للصخور الساحلية يكون الكهوف ثم الأقواس.
                    </p>
                    <div className="relative w-full h-64 bg-sky-200 rounded-xl overflow-hidden border-b-8 border-sky-600">
                         {/* Cliff */}
                         <svg viewBox="0 0 400 200" className="absolute bottom-0 w-full h-full">
                             <defs>
                                 <mask id="hole">
                                     <rect width="400" height="200" fill="white"/>
                                     <circle cx="200" cy="150" r={progress * 0.6} fill="black" />
                                 </mask>
                             </defs>
                             <path d="M0,200 L50,50 Q200,20 350,50 L400,200 Z" fill="#78716C" mask="url(#hole)"/>
                         </svg>
                         {/* Waves */}
                         {isAnimating && (
                             <div className="absolute bottom-0 w-full h-20 bg-sky-500/50 animate-[wave_1s_infinite]"></div>
                         )}
                    </div>
                    <button onClick={startSimulation} className="mt-6 bg-sky-600 text-white px-6 py-2 rounded-lg font-bold">بدء نحت الأمواج 🌊</button>
                 </div>
            )}

            {/* 4. Rivers (Waterfalls) */}
            {activeTab === 'river' && (
                 <div className="bg-cyan-50 rounded-3xl p-6 border border-cyan-100 flex flex-col items-center">
                    <h3 className="text-2xl font-black text-cyan-800 mb-2">الشلالات</h3>
                    <p className="text-cyan-900/70 mb-6 text-center">
                        تتكون عندما تجري المياه فوق طبقة صخرية صلبة تليها طبقة لينة، فتنحت اللينة أسرع.
                    </p>
                    <div className="relative w-full h-64 bg-white rounded-xl overflow-hidden shadow-inner">
                         <svg viewBox="0 0 400 200" className="w-full h-full">
                             {/* Hard Rock (Top) */}
                             <rect x="0" y="50" width="200" height="30" fill="#475569" stroke="black" />
                             <text x="10" y="70" fill="white" fontSize="10">صخور صلبة</text>
                             
                             {/* Soft Rock (Bottom) - Eroding */}
                             <path 
                                d={progress < 50 
                                    ? "M0,80 H200 V200 H0 Z" 
                                    : `M0,80 H${200 - (progress-50)} Q${200 - (progress-50)},150 200,200 H0 Z`
                                } 
                                fill="#D7CCC8" 
                             />
                             <text x="10" y="120" fontSize="10">صخور لينة (تتآكل)</text>

                             {/* Water */}
                             <path 
                                d={`M0,50 H200 L${progress < 50 ? 210 : 200 - (progress-50)},200`} 
                                stroke="#06B6D4" 
                                strokeWidth="5" 
                                fill="none"
                                className={isAnimating ? "animate-pulse" : ""}
                             />
                             {/* Splash */}
                             {isAnimating && <circle cx={progress < 50 ? 210 : 200 - (progress-50)} cy="200" r="10" fill="#06B6D4" className="animate-ping" />}
                         </svg>
                    </div>
                    <button onClick={startSimulation} className="mt-6 bg-cyan-600 text-white px-6 py-2 rounded-lg font-bold">بدء جريان النهر 💧</button>
                 </div>
            )}
        </div>

        <style>{`
          @keyframes wind { from { transform: translateX(0); opacity: 0; } 50% { opacity: 1; } to { transform: translateX(100px); opacity: 0; } }
          @keyframes wave { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        `}</style>
    </div>
  );
};

export default ErosionSim;