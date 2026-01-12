import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, Minimize2, Maximize2, RefreshCw, Info } from 'lucide-react';

type MovementType = 'divergent' | 'convergent' | 'transform';

const PlateTectonics: React.FC = () => {
  const [movement, setMovement] = useState<MovementType | null>(null);
  const [step, setStep] = useState(0); // 0: Start, 1: Moving, 2: Final Result

  const reset = (type: MovementType) => {
    setMovement(null);
    setStep(0);
    setTimeout(() => {
        setMovement(type);
        setStep(1); // Start Animation
    }, 50);
  };

  useEffect(() => {
    if (step === 1) {
        const timer = setTimeout(() => setStep(2), 2000); // Animation duration
        return () => clearTimeout(timer);
    }
  }, [step]);

  const renderSimulation = () => {
    switch(movement) {
        case 'convergent': // تقارب -> التواءات (Folding)
            return (
                <div className="relative w-full h-80 bg-sky-100 rounded-2xl overflow-hidden border-4 border-slate-300 flex flex-col items-center justify-end">
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-xl shadow-lg border border-indigo-100 z-20 text-right max-w-xs">
                       <h4 className="font-bold text-indigo-800 text-sm mb-1">العملية: تقارب (ضغط)</h4>
                       <p className="text-xs text-slate-600 leading-relaxed">
                           عندما تضغط الصفائح على <strong>طبقات صخرية لينة</strong>، فإنها تنثني للأعلى مكونة <strong>التواءات (جبال)</strong>.
                           <br/><span className="text-indigo-600 font-bold">مثال: الجبل الأخضر في عمان.</span>
                       </p>
                    </div>

                    {/* Sky/Background */}
                    <div className="absolute inset-0 z-0"></div>

                    {/* Ground Layers - Using SVG for bending effect */}
                    <svg viewBox="0 0 600 300" className="absolute bottom-0 w-full h-64 z-10 transition-all duration-1000">
                        <defs>
                            <pattern id="soil" patternUnits="userSpaceOnUse" width="20" height="20">
                                <circle cx="2" cy="2" r="1" fill="#5D4037" opacity="0.3"/>
                            </pattern>
                        </defs>

                        {/* Left Plate Block */}
                        <g style={{ transform: step >= 1 ? 'translateX(60px)' : 'translateX(0)', transition: 'transform 2s ease-in-out' }}>
                            <path d="M-100,300 L200,300 L200,150 L-100,150 Z" fill="#8D6E63" stroke="#5D4037" />
                            <rect x="-100" y="150" width="300" height="20" fill="#A1887F" /> {/* Layer 1 */}
                            <rect x="-100" y="170" width="300" height="20" fill="#D7CCC8" /> {/* Layer 2 */}
                        </g>

                        {/* Right Plate Block */}
                        <g style={{ transform: step >= 1 ? 'translateX(-60px)' : 'translateX(0)', transition: 'transform 2s ease-in-out' }}>
                            <path d="M400,300 L700,300 L700,150 L400,150 Z" fill="#8D6E63" stroke="#5D4037" />
                            <rect x="400" y="150" width="300" height="20" fill="#A1887F" />
                            <rect x="400" y="170" width="300" height="20" fill="#D7CCC8" />
                        </g>

                        {/* Middle Folding Section */}
                        {/* We use a path that morphs from flat to curved */}
                        <g transform="translate(200, 150)">
                            {/* The "Soft" Rock Layer that folds */}
                            <path 
                                d={step >= 1 
                                    ? "M0,150 L200,150 L200,0 Q100,-100 0,0 Z"  // Folded Shape
                                    : "M0,150 L200,150 L200,0 L0,0 Z"            // Flat Shape
                                }
                                fill="#8D6E63" 
                                stroke="none"
                                className="transition-all duration-[2000ms] ease-in-out"
                            />
                            
                            {/* Layer Lines demonstrating folding (Anticline) */}
                            <path 
                                d={step >= 1 ? "M0,0 Q100,-100 200,0" : "M0,0 L200,0"} 
                                stroke="#5D4037" strokeWidth="4" fill="none"
                                className="transition-all duration-[2000ms] ease-in-out"
                            />
                            <path 
                                d={step >= 1 ? "M0,20 Q100,-80 200,20" : "M0,20 L200,20"} 
                                stroke="#A1887F" strokeWidth="15" fill="none"
                                className="transition-all duration-[2000ms] ease-in-out"
                            />
                            <path 
                                d={step >= 1 ? "M0,40 Q100,-60 200,40" : "M0,40 L200,40"} 
                                stroke="#D7CCC8" strokeWidth="15" fill="none"
                                className="transition-all duration-[2000ms] ease-in-out"
                            />
                        </g>

                        {/* Force Arrows */}
                        <g opacity={step === 1 ? 1 : 0} className="transition-opacity duration-500">
                             <path d="M100,100 L180,100" stroke="#FFC107" strokeWidth="10" markerEnd="url(#arrow)" />
                             <path d="M500,100 L420,100" stroke="#FFC107" strokeWidth="10" markerEnd="url(#arrow)" />
                        </g>
                    </svg>

                     {/* Label for Result */}
                     <div className={`absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/80 px-4 py-2 rounded-full shadow-xl transition-all duration-1000 ${step === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                         <span className="font-bold text-indigo-900">جبال التوائية (Folding) 🏔️</span>
                     </div>
                </div>
            );

        case 'divergent': // تباعد -> خروج الماجما
            return (
                <div className="relative w-full h-80 bg-sky-100 rounded-2xl overflow-hidden border-4 border-slate-300 flex flex-col items-center justify-end">
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-xl shadow-lg border border-orange-100 z-20 text-right max-w-xs">
                       <h4 className="font-bold text-orange-800 text-sm mb-1">العملية: تباعد (شد)</h4>
                       <p className="text-xs text-slate-600 leading-relaxed">
                           تبتعد الصفائح عن بعضها، مما يسمح <strong>للصهارة (الماجما)</strong> بالخروج لتكوين قشرة جديدة أو براكين.
                       </p>
                    </div>

                    <svg viewBox="0 0 600 300" className="absolute bottom-0 w-full h-64 z-10">
                         {/* Magma Chamber underneath */}
                         <rect x="0" y="250" width="600" height="50" fill="#B71C1C" />
                         
                         {/* Left Plate Moving Left */}
                         <g style={{ transform: step >= 1 ? 'translateX(-50px)' : 'translateX(0)', transition: 'transform 2s ease-in-out' }}>
                             <rect x="0" y="100" width="300" height="150" fill="#795548" stroke="#3E2723" strokeWidth="2"/>
                             <rect x="0" y="100" width="300" height="20" fill="#8D6E63"/> {/* Surface */}
                         </g>

                         {/* Right Plate Moving Right */}
                         <g style={{ transform: step >= 1 ? 'translateX(50px)' : 'translateX(0)', transition: 'transform 2s ease-in-out' }}>
                             <rect x="300" y="100" width="300" height="150" fill="#795548" stroke="#3E2723" strokeWidth="2"/>
                             <rect x="300" y="100" width="300" height="20" fill="#8D6E63"/>
                         </g>

                         {/* Magma Rising */}
                         <path 
                            d={step >= 1 ? "M280,300 L320,300 L310,120 L290,120 Z" : "M300,300 L300,300 L300,250 L300,250 Z"} 
                            fill="#FF5722"
                            className="transition-all duration-[2s] ease-out"
                         />
                         
                         {/* Eruption Particles */}
                         {step === 2 && (
                             <g className="animate-bounce">
                                 <circle cx="300" cy="110" r="5" fill="#FF5722" />
                                 <circle cx="290" cy="100" r="3" fill="#FF5722" />
                                 <circle cx="310" cy="105" r="4" fill="#FF5722" />
                             </g>
                         )}

                         {/* Force Arrows */}
                         <g opacity={step === 1 ? 1 : 0} className="transition-opacity duration-500">
                             <path d="M200,80 L120,80" stroke="#EF6C00" strokeWidth="8" markerEnd="url(#arrow)" />
                             <path d="M400,80 L480,80" stroke="#EF6C00" strokeWidth="8" markerEnd="url(#arrow)" />
                         </g>
                    </svg>
                </div>
            );

        case 'transform': // انزلاق -> زلازل (صدوع)
             return (
                <div className="relative w-full h-80 bg-stone-100 rounded-2xl overflow-hidden border-4 border-slate-300 flex flex-col items-center justify-center">
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-xl shadow-lg border border-yellow-100 z-20 text-right max-w-xs">
                       <h4 className="font-bold text-yellow-800 text-sm mb-1">العملية: انزلاق (إزاحة)</h4>
                       <p className="text-xs text-slate-600 leading-relaxed">
                           تتحرك الصفائح محاذية لبعضها (احتكاك)، مما يسبب <strong>انكسارات</strong> مفاجئة تؤدي لحدوث <strong>الزلازل</strong>.
                       </p>
                    </div>

                    {/* Top View of Fault Line */}
                    <div className="relative w-64 h-64 shadow-2xl rounded-lg overflow-hidden border-2 border-stone-400 bg-[#C8E6C9] transform rotate-x-60">
                         {/* Fault Line */}
                         <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-black/30 z-10 border-r border-dashed border-black/50"></div>

                         {/* Left Land Mass (Down) */}
                         <div 
                            className="absolute inset-y-0 left-0 w-1/2 bg-[url('/soil_pattern.png')] bg-amber-100 border-r border-stone-500"
                            style={{ transform: step >= 1 ? 'translateY(40px)' : 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                         >
                            <div className="absolute top-10 right-0 w-full h-6 bg-slate-400 border-y-2 border-white border-dashed flex items-center justify-center text-[8px] text-white">طريق</div>
                         </div>

                         {/* Right Land Mass (Up) */}
                         <div 
                            className="absolute inset-y-0 right-0 w-1/2 bg-[url('/soil_pattern.png')] bg-amber-100 border-l border-stone-500"
                            style={{ transform: step >= 1 ? 'translateY(-40px)' : 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                         >
                            <div className="absolute top-10 left-0 w-full h-6 bg-slate-400 border-y-2 border-white border-dashed flex items-center justify-center text-[8px] text-white">طريق</div>
                         </div>
                         
                         {/* Quake Effect */}
                         {step >= 1 && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                <div className="w-20 h-20 bg-red-500 rounded-full animate-ping opacity-50"></div>
                            </div>
                         )}
                    </div>
                    
                     {/* Arrows indicating shear stress */}
                    <div className="absolute flex gap-32 pointer-events-none">
                         <div className={`text-4xl font-bold text-yellow-600 ${step===1 ? 'translate-y-4' : ''} transition-transform`}>↓</div>
                         <div className={`text-4xl font-bold text-yellow-600 ${step===1 ? '-translate-y-4' : ''} transition-transform`}>↑</div>
                    </div>
                </div>
            );
            
        default:
            return (
                <div className="w-full h-80 bg-slate-50 rounded-2xl flex flex-col items-center justify-center border-4 border-dashed border-slate-200">
                    <Info size={48} className="text-slate-300 mb-4" />
                    <p className="text-slate-500 font-bold text-lg">اضغط على أحد الأزرار بالأسفل لبدء المحاكاة</p>
                </div>
            );
    }
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
       <div className="text-center">
        <h2 className="text-3xl font-black text-slate-800 mb-2">مختبر حركة الصفائح (محاكاة)</h2>
        <p className="text-slate-500">لاحظ كيف تشكل الحركات المختلفة تضاريس سطح الأرض</p>
      </div>

      <div className="max-w-3xl mx-auto shadow-2xl rounded-2xl relative bg-white">
           {renderSimulation()}
           
           {/* SVG Marker Definition */}
           <svg className="absolute w-0 h-0">
               <defs>
                   <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                       <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
                   </marker>
               </defs>
           </svg>
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <button 
            onClick={() => reset('convergent')}
            className={`p-4 rounded-xl border-2 transition-all hover:scale-105 flex flex-col items-center gap-2 ${movement === 'convergent' ? 'bg-indigo-100 border-indigo-500 text-indigo-900 ring-2 ring-indigo-200' : 'bg-white border-slate-200 text-slate-600'}`}
          >
              <Minimize2 size={28} />
              <div className="text-center">
                <span className="block font-bold text-lg">تقارب (التواء)</span>
                <span className="text-xs opacity-75">تكوّن الجبال</span>
              </div>
          </button>

          <button 
            onClick={() => reset('divergent')}
            className={`p-4 rounded-xl border-2 transition-all hover:scale-105 flex flex-col items-center gap-2 ${movement === 'divergent' ? 'bg-orange-100 border-orange-500 text-orange-900 ring-2 ring-orange-200' : 'bg-white border-slate-200 text-slate-600'}`}
          >
              <Maximize2 size={28} />
              <div className="text-center">
                <span className="block font-bold text-lg">تباعد</span>
                <span className="text-xs opacity-75">خروج الماجما</span>
              </div>
          </button>

          <button 
            onClick={() => reset('transform')}
            className={`p-4 rounded-xl border-2 transition-all hover:scale-105 flex flex-col items-center gap-2 ${movement === 'transform' ? 'bg-yellow-100 border-yellow-500 text-yellow-900 ring-2 ring-yellow-200' : 'bg-white border-slate-200 text-slate-600'}`}
          >
              <ArrowLeftRight size={28} className="rotate-90" />
              <div className="text-center">
                <span className="block font-bold text-lg">إزاحة (انزلاق)</span>
                <span className="text-xs opacity-75">حدوث زلازل</span>
              </div>
          </button>
      </div>

      {movement && (
           <div className="flex justify-center mt-4">
               <button 
                onClick={() => reset(movement)}
                className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-2 rounded-full font-bold transition-colors"
               >
                   <RefreshCw size={18} />
                   إعادة المشهد
               </button>
           </div>
      )}
    </div>
  );
};

export default PlateTectonics;