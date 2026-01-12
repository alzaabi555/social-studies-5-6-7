import React, { useState } from 'react';
import { ThermometerSun, Snowflake, CloudRain, Hammer, FlaskConical, Sprout, PaintBucket } from 'lucide-react';

type WeatheringType = 'temp' | 'frost' | 'bio' | 'oxidation' | 'carbonation';

const WeatheringSim: React.FC = () => {
  const [activeType, setActiveType] = useState<WeatheringType>('temp');
  
  // States for simulations
  const [step, setStep] = useState(0); 

  const reset = (type: WeatheringType) => {
    setActiveType(type);
    setStep(0);
  };

  const nextStep = () => {
      setStep(prev => (prev < 4 ? prev + 1 : 0));
  };

  const renderSimulation = () => {
      switch(activeType) {
          case 'temp': // تباين درجات الحرارة
              return (
                  <div className="relative h-64 bg-slate-100 rounded-2xl overflow-hidden border-2 border-slate-300 flex items-center justify-center">
                      <div className={`absolute inset-0 transition-colors duration-1000 ${step % 2 === 0 ? 'bg-orange-100' : 'bg-slate-800'}`}></div>
                      
                      {/* Sun/Moon */}
                      <div className="absolute top-4 right-4 text-4xl animate-pulse">
                          {step % 2 === 0 ? '☀️' : '🌙'}
                      </div>

                      {/* Rock - Onion Skin Exfoliation */}
                      <svg viewBox="0 0 200 200" className="w-64 h-64 relative z-10">
                          <path d="M50,150 Q100,50 150,150 Z" fill="#795548" />
                          {/* Layers peeling off */}
                          <path 
                            d="M45,155 Q100,40 155,155" 
                            fill="none" 
                            stroke="#A1887F" 
                            strokeWidth="4"
                            className={`transition-all duration-500 ${step > 1 ? 'opacity-100 translate-y-2' : 'opacity-0'}`}
                          />
                          <path 
                            d="M40,160 Q100,30 160,160" 
                            fill="none" 
                            stroke="#8D6E63" 
                            strokeWidth="4"
                            className={`transition-all duration-500 ${step > 3 ? 'opacity-100 translate-y-4' : 'opacity-0'}`}
                          />
                          {/* Cracks */}
                          {step > 2 && <path d="M100,100 L100,120" stroke="black" strokeWidth="2" />}
                      </svg>
                      
                      <div className="absolute bottom-4 bg-white/90 px-4 py-2 rounded-xl text-center shadow">
                          <p className="text-xs font-bold text-slate-600">
                              {step === 0 ? "نهار: تمدد الصخر بالحرارة" : 
                               step === 1 ? "ليل: انكماش الصخر بالبرودة" :
                               "تكرار العملية يفتت القشرة الخارجية (تقشر)"}
                          </p>
                      </div>
                  </div>
              );

          case 'frost': // توتد الصقيع
              return (
                <div className="relative h-64 bg-slate-200 rounded-2xl overflow-hidden border-2 border-slate-300 flex items-center justify-center">
                    {/* Rock with crack */}
                    <svg viewBox="0 0 300 200" className="w-full h-full">
                        <path d="M50,180 L80,50 L220,50 L250,180 Z" fill="#94A3B8" />
                        
                        {/* The Crack */}
                        <path 
                            d={step > 2 ? "M140,50 L145,120 L155,120 L160,50" : "M148,50 L150,100 L152,50"} 
                            fill={step === 1 ? "#3B82F6" : step >= 2 ? "#93C5FD" : "none"} // Blue (Water) -> Light Blue (Ice)
                            stroke="black"
                            strokeWidth="1"
                            className="transition-all duration-1000"
                        />
                        
                        {/* Broken Pieces */}
                        {step >= 3 && (
                            <g>
                                <path d="M40,180 L70,140 L90,180 Z" fill="#94A3B8" className="animate-bounce" />
                                <text x="20" y="190" fontSize="10">ركام السفوح</text>
                            </g>
                        )}
                    </svg>

                    <div className="absolute bottom-4 bg-white/90 px-4 py-2 rounded-xl text-center shadow">
                          <p className="text-xs font-bold text-slate-600">
                              {step === 0 ? "شقوق في الصخر" : 
                               step === 1 ? "دخول مياه الأمطار" :
                               step === 2 ? "تجمد الماء ليلاً وزيادة حجمه" :
                               "تكسر الصخر وتكون ركام السفوح"}
                          </p>
                      </div>
                </div>
              );

          case 'bio': // الكائنات الحية
             return (
                <div className="relative h-64 bg-stone-100 rounded-2xl overflow-hidden border-2 border-stone-300 flex items-center justify-center">
                    <svg viewBox="0 0 300 200" className="w-full h-full">
                         {/* Ground */}
                         <rect y="100" width="300" height="100" fill="#E7E5E4" />
                         {/* Rock */}
                         <path d="M100,180 L120,110 L180,110 L200,180 Z" fill="#A8A29E" />
                         
                         {/* Plant */}
                         <g className={`transition-all duration-1000 ${step > 0 ? 'opacity-100' : 'opacity-0'}`}>
                             <line x1="150" y1="110" x2="150" y2="60" stroke="#16A34A" strokeWidth="4" />
                             <circle cx="150" cy="50" r="20" fill="#22C55E" />
                         </g>

                         {/* Roots Breaking Rock */}
                         {step >= 2 && (
                             <g>
                                 <path d="M150,110 Q140,140 120,160" stroke="#78350F" strokeWidth={step >= 3 ? "6" : "2"} fill="none" className="transition-all duration-1000"/>
                                 <path d="M150,110 Q160,140 180,160" stroke="#78350F" strokeWidth={step >= 3 ? "6" : "2"} fill="none" className="transition-all duration-1000"/>
                                 {/* Crack appearing */}
                                 {step >= 3 && <path d="M150,110 L150,170" stroke="black" strokeWidth="2" strokeDasharray="4 2" />}
                             </g>
                         )}
                    </svg>
                    <div className="absolute bottom-4 bg-white/90 px-4 py-2 rounded-xl text-center shadow">
                          <p className="text-xs font-bold text-slate-600">
                              {step === 0 ? "صخرة في التربة" : 
                               step === 1 ? "نمو النبات" :
                               step === 2 ? "امتداد الجذور في الشقوق" :
                               "نمو الجذور يضغط على الصخر ويكسره"}
                          </p>
                      </div>
                </div>
             );

          case 'oxidation': // الأكسدة
             return (
                <div className="relative h-64 bg-slate-50 rounded-2xl overflow-hidden border-2 border-slate-300 flex items-center justify-center">
                    <svg viewBox="0 0 300 200" className="w-full h-full">
                        {/* Rock */}
                        <path 
                            d="M100,150 Q150,50 200,150 Z" 
                            fill={step >= 2 ? "#B91C1C" : "#475569"} 
                            className="transition-colors duration-2000"
                        />
                        
                        {/* Oxygen/Water Molecules */}
                        {step === 1 && (
                            <g className="animate-pulse">
                                <circle cx="120" cy="80" r="5" fill="#3B82F6" />
                                <circle cx="160" cy="90" r="5" fill="#3B82F6" />
                                <text x="130" y="70" fontSize="12">O2 + H2O</text>
                            </g>
                        )}
                        
                        {/* Rust Spots */}
                        {step >= 2 && (
                            <g>
                                <circle cx="140" cy="120" r="10" fill="#7F1D1D" opacity="0.6" />
                                <circle cx="170" cy="130" r="8" fill="#7F1D1D" opacity="0.6" />
                            </g>
                        )}
                    </svg>
                    <div className="absolute bottom-4 bg-white/90 px-4 py-2 rounded-xl text-center shadow">
                          <p className="text-xs font-bold text-slate-600">
                              {step === 0 ? "صخر يحتوي على معادن (حديد)" : 
                               step === 1 ? "تفاعل مع الأكسجين والماء" :
                               "عملية الأكسدة (الصدأ) تضعف الصخر وتغير لونه"}
                          </p>
                      </div>
                </div>
             );

          case 'carbonation': // الكربنة
             return (
                <div className="relative h-64 bg-[#3E2723] rounded-2xl overflow-hidden border-2 border-[#271c19] flex items-center justify-center">
                    <svg viewBox="0 0 300 200" className="w-full h-full">
                        <rect width="300" height="200" fill="#5D4037" />
                        
                        {/* Rain */}
                        <g opacity={step === 1 ? 1 : 0}>
                            <line x1="100" y1="0" x2="100" y2="50" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 4" className="animate-rain" />
                            <text x="110" y="30" fontSize="10" fill="white">CO2 + ماء</text>
                        </g>

                        {/* Cave forming */}
                        <path 
                            d={`M100,100 Q150,${step >= 2 ? 50 : 100} 200,100 Q150,${step >= 2 ? 150 : 100} 100,100`} 
                            fill="#261E1B" 
                            className="transition-all duration-1000"
                        />
                        
                        {/* Stalactites */}
                        {step >= 3 && (
                            <path d="M150,55 L155,80 L160,55" fill="#D7CCC8" />
                        )}
                    </svg>
                    <div className="absolute bottom-4 bg-white/90 px-4 py-2 rounded-xl text-center shadow">
                          <p className="text-xs font-bold text-slate-600">
                              {step === 0 ? "صخور جيرية" : 
                               step === 1 ? "أمطار محملة بثاني أكسيد الكربون" :
                               step === 2 ? "ذوبان الصخر وتكون تجاويف" :
                               "تكون الكهوف (مثال: كهف الهوتة)"}
                          </p>
                      </div>
                </div>
             );
      }
  };

  return (
    <div className="p-4 md:p-6 animate-fade-in space-y-6">
        <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-slate-800">مختبر التجوية (تفتيت الصخور)</h3>
            <p className="text-slate-500 text-sm">اختر نوع التجوية ثم اضغط على زر "الخطوة التالية" لمشاهدة العملية</p>
        </div>

        {/* Selection Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
            <button 
                onClick={() => reset('temp')}
                className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeType === 'temp' ? 'bg-amber-100 text-amber-800 ring-2 ring-amber-300' : 'bg-white text-slate-600 border'}`}
            >
                <ThermometerSun size={16}/> تباين الحرارة
            </button>
            <button 
                onClick={() => reset('frost')}
                className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeType === 'frost' ? 'bg-blue-100 text-blue-800 ring-2 ring-blue-300' : 'bg-white text-slate-600 border'}`}
            >
                <Snowflake size={16}/> توتد الصقيع
            </button>
            <button 
                onClick={() => reset('bio')}
                className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeType === 'bio' ? 'bg-green-100 text-green-800 ring-2 ring-green-300' : 'bg-white text-slate-600 border'}`}
            >
                <Sprout size={16}/> الكائنات الحية
            </button>
            <button 
                onClick={() => reset('oxidation')}
                className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeType === 'oxidation' ? 'bg-red-100 text-red-800 ring-2 ring-red-300' : 'bg-white text-slate-600 border'}`}
            >
                <PaintBucket size={16}/> الأكسدة
            </button>
            <button 
                onClick={() => reset('carbonation')}
                className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeType === 'carbonation' ? 'bg-stone-200 text-stone-800 ring-2 ring-stone-400' : 'bg-white text-slate-600 border'}`}
            >
                <FlaskConical size={16}/> الكربنة (الإذابة)
            </button>
        </div>

        {/* Simulation Area */}
        <div className="max-w-2xl mx-auto bg-white p-4 rounded-3xl shadow-xl border border-slate-100">
            {renderSimulation()}
            
            <div className="mt-4 flex justify-center">
                <button 
                    onClick={nextStep}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded-full font-bold shadow-lg transition-transform active:scale-95 flex items-center gap-2"
                >
                    <Hammer size={18} />
                    {step >= 3 ? "إعادة" : "الخطوة التالية"}
                </button>
            </div>
        </div>

        {/* Info Box */}
        <div className="max-w-3xl mx-auto bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-sm text-yellow-900 leading-relaxed">
            <strong>معلومة إثرائية:</strong> 
            {activeType === 'temp' && " تكثر التجوية الميكانيكية بتباين الحرارة في المناطق الصحراوية الحارة."}
            {activeType === 'frost' && " توتد الصقيع هو السبب الرئيسي لتكون ركام السفوح في المناطق الباردة والجبلية."}
            {activeType === 'bio' && " تساهم جذور الأشجار وحتى الحيوانات الحفارة (كالديدان) في تفتيت الصخور ميكانيكياً."}
            {activeType === 'oxidation' && " الصخور التي تحتوي على الحديد تصدأ وتتحول للون الأحمر، وهذا دليل على التجوية الكيميائية."}
            {activeType === 'carbonation' && " كهف الهوتة في عمان هو مثال حي على التجوية الكيميائية (الإذابة) لصخور الحجر الجيري."}
        </div>
    </div>
  );
};

export default WeatheringSim;