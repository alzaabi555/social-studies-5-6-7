import React, { useState } from 'react';
import { ArrowUp, Sun, Snowflake, Wind, Waves, Moon } from 'lucide-react';

const SectionFactors: React.FC = () => {
  const [altitude, setAltitude] = useState(0); 
  const [latitude, setLatitude] = useState(0); 
  
  // New Interactive States
  const [isDay, setIsDay] = useState(true); // For Sea Breeze/Land Breeze
  const [windSpeed, setWindSpeed] = useState(30); // For Wind Direction/Speed

  const currentTempAltitude = 30 - (altitude / 100) * 15;
  const currentPressure = 1013 - (altitude / 100) * 200;
  const currentTempLatitude = 35 - (latitude / 100) * 45;

  return (
    <div className="p-6 space-y-12 animate-fade-in">
      <div className="text-center max-w-2xl mx-auto mb-8">
         <h2 className="text-3xl font-black text-slate-800 mb-3">ما الذي يغير الطقس؟</h2>
         <p className="text-slate-600 text-lg">الطقس لا يحدث بالصدفة، هناك 4 عوامل رئيسية تتحكم في مناخ أي منطقة في العالم.</p>
      </div>

      {/* 1. Altitude Section */}
      <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 transition-all hover:shadow-2xl">
        <div className="bg-gradient-to-r from-sky-600 to-blue-800 p-6 text-white">
            <h3 className="text-2xl font-bold flex items-center gap-3">
                <ArrowUp className="w-8 h-8" />
                1. الارتفاع عن سطح البحر
            </h3>
        </div>
        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <div className="bg-sky-50 p-4 rounded-xl text-sky-900 leading-relaxed text-lg border border-sky-100">
                    <p className="font-bold mb-2">القاعدة العلمية:</p>
                    "كلما ارتفعنا عن سطح البحر 150 متراً، تنخفض درجة الحرارة درجة مئوية واحدة."
                </div>
                
                {/* Control */}
                <div>
                   <label className="text-sm font-bold text-slate-500 mb-2 block">جرب بنفسك: حرك المتسلق للأعلى</label>
                   <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={altitude} 
                    onChange={(e) => setAltitude(Number(e.target.value))}
                    className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                   />
                   <div className="flex justify-between text-xs text-slate-400 mt-1 font-bold">
                       <span>سطح البحر 🏖️</span>
                       <span>قمة الجبل 🏔️</span>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border-2 border-orange-100 p-3 rounded-lg text-center shadow-sm">
                        <div className="text-gray-400 text-xs font-bold uppercase">الحرارة</div>
                        <div className="text-3xl font-bold text-orange-500">{currentTempAltitude.toFixed(1)}°</div>
                    </div>
                    <div className="bg-white border-2 border-blue-100 p-3 rounded-lg text-center shadow-sm">
                        <div className="text-gray-400 text-xs font-bold uppercase">الضغط</div>
                        <div className="text-3xl font-bold text-blue-500">{Math.round(currentPressure)} <span className="text-sm">mb</span></div>
                    </div>
                </div>
            </div>

            {/* Graphic */}
            <div className="relative h-80 w-full bg-gradient-to-b from-sky-300 to-sky-100 rounded-2xl overflow-hidden shadow-inner border-2 border-sky-200">
                 {/* Air particles visualization */}
                 <div className="absolute inset-0 pointer-events-none">
                     {Array.from({ length: 20 }).map((_, i) => (
                         <div key={i} className="absolute bg-white/40 rounded-full w-2 h-2 animate-pulse" 
                              style={{ 
                                  bottom: `${Math.random() * 50}%`,
                                  left: `${Math.random() * 100}%`,
                                  animationDelay: `${Math.random() * 2}s`
                              }} 
                         />
                     ))}
                     {Array.from({ length: 5 }).map((_, i) => (
                         <div key={i + 20} className="absolute bg-white/40 rounded-full w-2 h-2" 
                              style={{ 
                                  bottom: `${50 + Math.random() * 50}%`,
                                  left: `${Math.random() * 100}%` 
                              }} 
                         />
                     ))}
                 </div>
                 
                 <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
                    <path d="M-10,100 L40,20 L110,100 Z" fill="#5D4037" /> {/* Mountain */}
                    <path d="M25,50 L40,20 L55,50 Z" fill="#FFFFFF" opacity="0.9" /> {/* Snow Cap */}
                 </svg>

                 {/* Hiker */}
                 <div 
                    className="absolute w-8 h-12 flex flex-col items-center transition-all duration-300 ease-out"
                    style={{ bottom: `${altitude * 0.7}%`, left: `${20 + altitude * 0.35}%` }}
                 >
                     <div className="text-2xl drop-shadow-md">🧍</div>
                     <div className="bg-black/60 text-white text-[10px] px-1 rounded backdrop-blur-sm whitespace-nowrap">
                         {altitude > 80 ? "الجو بارد! 🥶" : "الجو معتدل 🙂"}
                     </div>
                 </div>
            </div>
        </div>
      </section>

      {/* 2. Latitude Section */}
      <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 transition-all hover:shadow-2xl">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white">
            <h3 className="text-2xl font-bold flex items-center gap-3">
                <Sun className="w-8 h-8" />
                2. الموقع بالنسبة لدوائر العرض
            </h3>
        </div>
        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
             {/* Graphic */}
             <div className="relative h-64 w-64 md:h-80 md:w-80 mx-auto bg-sky-950 rounded-full shadow-2xl overflow-hidden border-4 border-slate-300 ring-4 ring-slate-100">
                 {/* Earth Texture - Using local image */}
                 <div className="absolute inset-0 bg-[url('/earth_texture.jpg')] opacity-40 bg-cover mix-blend-overlay"></div>
                 
                 {/* Latitude Lines */}
                 <div className="absolute top-1/2 w-full h-[2px] bg-red-500 shadow-[0_0_10px_red]"></div> {/* Equator */}
                 <div className="absolute top-[25%] w-full h-[1px] bg-white/30 border-t border-dashed"></div>
                 <div className="absolute top-[75%] w-full h-[1px] bg-white/30 border-t border-dashed"></div>

                 {/* Sun Rays Simulation */}
                 <div 
                    className="absolute right-0 h-2 bg-yellow-400 shadow-[0_0_15px_yellow] transition-all duration-500"
                    style={{ 
                        top: `${50 - (latitude / 2.2)}%`, 
                        width: '40%',
                        transformOrigin: 'right center',
                        transform: `rotate(${latitude * 0.5}deg)`
                    }}
                 >
                     <span className="absolute -left-16 -top-3 text-yellow-200 text-xs font-bold whitespace-nowrap bg-black/50 px-1 rounded">
                         أشعة الشمس
                     </span>
                 </div>
             </div>

             <div className="space-y-6">
                 <div className="bg-orange-50 p-4 rounded-xl text-orange-900 leading-relaxed text-lg border border-orange-100">
                    <p className="font-bold mb-2">القاعدة العلمية:</p>
                    "كلما اقتربنا من خط الاستواء زادت الحرارة، وكلما ابتعدنا باتجاه القطبين انخفضت."
                </div>
                
                <div>
                   <label className="text-sm font-bold text-slate-500 mb-2 block">سافر من خط الاستواء للقطب:</label>
                   <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={latitude} 
                    onChange={(e) => setLatitude(Number(e.target.value))}
                    className="w-full h-4 bg-gradient-to-r from-red-400 via-orange-300 to-blue-400 rounded-lg appearance-none cursor-pointer"
                   />
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                    {currentTempLatitude > 20 ? <Sun className="text-orange-500 w-10 h-10 animate-spin-slow"/> : <Snowflake className="text-blue-500 w-10 h-10 animate-bounce"/>}
                    <div>
                        <span className="block text-xs text-slate-500 font-bold">الحرارة المتوقعة</span>
                        <span className="text-3xl font-bold text-slate-800">{currentTempLatitude.toFixed(1)}°C</span>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* 3 & 4 Interactive Cards */}
      <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 3: Water Proximity (Interactive Day/Night) */}
          <div className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden flex flex-col">
              <div className={`h-48 overflow-hidden relative transition-colors duration-1000 ${isDay ? 'bg-sky-200' : 'bg-slate-900'}`}>
                   <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                       {/* Celestial Body */}
                       <g transform={isDay ? "translate(350, 50)" : "translate(50, 50)"} className="transition-transform duration-1000 ease-in-out">
                            {isDay ? <circle r="30" fill="#FDE047" /> : <circle r="25" fill="#E2E8F0" />}
                       </g>
                       
                       {/* Ocean */}
                       <path d="M0,120 Q100,100 200,120 T400,120 V200 H0 Z" fill={isDay ? "#0EA5E9" : "#1E3A8A"} className="transition-colors duration-1000"/>
                       
                       {/* Beach/Land */}
                       <path d="M0,160 Q200,140 400,160 V200 H0 Z" fill={isDay ? "#FDE68A" : "#78716C"} className="transition-colors duration-1000"/>
                       
                       {/* Umbrella */}
                       <g transform="translate(100, 150) rotate(-10)">
                           <rect x="0" y="0" width="5" height="40" fill="#78350F" />
                           <path d="M-20,0 Q2, -20 25, 0 Z" fill="#EF4444" />
                       </g>

                       {/* Air Flow Arrows (Convection) */}
                       {isDay ? (
                           <>
                             {/* Day: Sea Breeze (Sea -> Land) */}
                             <path d="M250,140 L150,160" stroke="white" strokeWidth="4" strokeDasharray="10 5" className="animate-[dash_1s_linear_infinite]" />
                             <polygon points="150,160 160,155 160,165" fill="white" />
                             <text x="200" y="130" fill="white" fontSize="12" fontWeight="bold">نسيم البحر (بارد)</text>
                           </>
                       ) : (
                           <>
                             {/* Night: Land Breeze (Land -> Sea) */}
                             <path d="M150,160 L250,140" stroke="white" strokeWidth="4" strokeDasharray="10 5" className="animate-[dash_1s_linear_infinite]" />
                             <polygon points="250,140 240,135 240,145" fill="white" />
                             <text x="120" y="190" fill="white" fontSize="12" fontWeight="bold">نسيم البر (بارد)</text>
                           </>
                       )}
                   </svg>
                   
                   {/* Toggle Control */}
                   <button 
                     onClick={() => setIsDay(!isDay)}
                     className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/50 p-2 rounded-full text-white hover:bg-white/40 transition-all z-20"
                   >
                       {isDay ? <Moon size={24} /> : <Sun size={24} />}
                   </button>
              </div>

              <div className="p-6 border-t-4 border-teal-500 flex-1">
                <div className="flex items-center gap-3 mb-4 text-teal-700">
                    <Waves size={32} />
                    <h3 className="text-xl font-bold">3. القرب من المسطحات المائية</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {isDay 
                     ? "في النهار: اليابسة تسخن بسرعة، فيرتفع هواؤها الساخن، ويأتي هواء بارد من البحر (نسيم البحر) ليلطف الجو."
                     : "في الليل: اليابسة تبرد بسرعة، بينما البحر يحتفظ بالدفء، فيهب الهواء من اليابسة نحو البحر."
                    }
                </p>
                <div className="bg-teal-50 p-3 rounded-lg text-sm text-teal-800 font-medium">
                    انقر الأيقونة بالأعلى للتبديل بين الليل والنهار 👆
                </div>
              </div>
          </div>

          {/* Card 4: Wind Direction (Interactive Slider) */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 overflow-hidden relative">
                   <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                       <rect width="400" height="200" fill="#F1F5F9" />
                       <rect y="180" width="400" height="20" fill="#CBD5E1" />

                       {/* Interactive Tree - Using SVG Transform for better compatibility */}
                       {/* Center of tree base is at 200, 180. We rotate around that point. */}
                       <g transform={`translate(200, 180) rotate(${windSpeed * 0.4})`}>
                           {/* Draw tree relative to 0,0 (base) */}
                           <path d="M0,0 Q10,-50 30,-80" stroke="#78350F" strokeWidth="8" fill="none" />
                           <circle cx="30" cy="-80" r="35" fill="#16A34A" opacity="0.8" />
                           <circle cx="10" cy="-70" r="30" fill="#15803D" opacity="0.8" />
                           {/* Leaves flying if windy */}
                           {windSpeed > 50 && (
                               <circle cx="60" cy="-90" r="4" fill="#16A34A" className="animate-ping" />
                           )}
                       </g>

                       {/* Wind Lines (Speed increases with windSpeed) */}
                       <g opacity={windSpeed / 100}>
                           <path d="M50,80 H150" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" className="animate-[dash_0.5s_linear_infinite]" style={{ animationDuration: `${200/windSpeed}s` }} />
                           <path d="M40,100 H120" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" className="animate-[dash_0.7s_linear_infinite]" style={{ animationDuration: `${300/windSpeed}s` }} />
                       </g>
                   </svg>
              </div>

              <div className="p-6 border-t-4 border-gray-500 flex-1">
                <div className="flex items-center gap-3 mb-4 text-gray-700">
                    <Wind size={32} />
                    <h3 className="text-xl font-bold">4. سرعة واتجاه الرياح</h3>
                </div>
                
                <div className="mb-4">
                    <label className="text-xs font-bold text-slate-500 mb-1 block">تحكم في سرعة الرياح:</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={windSpeed} 
                        onChange={(e) => setWindSpeed(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gray-600"
                    />
                </div>

                <p className="text-slate-600 mb-2 leading-relaxed text-sm">
                    الرياح تنقل صفات المنطقة القادمة منها. كلما زادت السرعة، زاد تأثيرها في خفض أو رفع الحرارة.
                </p>
              </div>
          </div>
      </div>
      
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionFactors;