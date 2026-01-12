import React, { useState } from 'react';
import { Activity, Mountain, AlertTriangle, Flame, Layers } from 'lucide-react';

const InternalProcesses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'slow' | 'rapid'>('slow');
  const [isErupting, setIsErupting] = useState(false);
  const [quakeIntensity, setQuakeIntensity] = useState(0);

  const triggerQuake = () => {
      setQuakeIntensity(1);
      setTimeout(() => setQuakeIntensity(0), 1000);
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
      
      {/* Tabs */}
      <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-md mx-auto">
          <button 
            onClick={() => setActiveTab('slow')}
            className={`flex-1 py-2 px-4 rounded-full font-bold transition-all ${activeTab === 'slow' ? 'bg-white shadow text-indigo-700' : 'text-slate-500'}`}
          >
              عمليات بطيئة
          </button>
          <button 
            onClick={() => setActiveTab('rapid')}
            className={`flex-1 py-2 px-4 rounded-full font-bold transition-all ${activeTab === 'rapid' ? 'bg-white shadow text-red-700' : 'text-slate-500'}`}
          >
              عمليات سريعة
          </button>
      </div>

      {activeTab === 'slow' ? (
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
              {/* Folding (Jebel Akhdar) */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                      <Mountain /> الالتواءات (Folding)
                  </h3>
                  <div className="h-48 bg-sky-50 rounded-xl relative overflow-hidden flex items-end justify-center pb-4 border border-slate-200">
                      {/* Interactive Fold */}
                      <div className="w-64 h-32 bg-[#8D6E63] rounded-t-[100%] border-t-[6px] border-[#5D4037] shadow-xl transform scale-y-100 hover:scale-y-125 transition-transform duration-1000 origin-bottom cursor-pointer group relative overflow-hidden">
                           {/* Layers inside fold */}
                           <div className="absolute top-2 w-full h-20 border-t-4 border-[#A1887F] rounded-t-[100%]"></div>
                           <div className="absolute top-6 w-full h-20 border-t-4 border-[#D7CCC8] rounded-t-[100%]"></div>
                           
                           <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 px-2 rounded">
                               طية محدبة (Anticline)
                           </div>
                      </div>
                  </div>
                  <div className="mt-4 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                      <p className="text-slate-600 text-sm">
                          <strong>مثال محلي:</strong> <span className="text-indigo-700 font-bold">الجبل الأخضر</span> هو عبارة عن طية محدبة ضخمة تكونت نتيجة ضغط الصفائح التكتونية على الصخور الرسوبية.
                      </p>
                  </div>
              </div>

              {/* Faulting (Jebel Qamar) */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                      <Layers /> الانكسارات (Faulting)
                  </h3>
                  <div className="h-48 bg-sky-50 rounded-xl relative overflow-hidden flex items-center justify-center p-8 group border border-slate-200">
                       <div className="flex gap-1 w-full max-w-[200px]">
                           <div className="flex-1 h-32 bg-[#795548] border-2 border-[#3E2723] transition-transform duration-1000 group-hover:-translate-y-4 relative">
                               <span className="absolute top-1 left-1 text-[8px] text-white">كتلة مرتفعة</span>
                           </div>
                           <div className="flex-1 h-32 bg-[#795548] border-2 border-[#3E2723] transition-transform duration-1000 group-hover:translate-y-4 relative">
                               <span className="absolute bottom-1 right-1 text-[8px] text-white">كتلة منخفضة</span>
                           </div>
                       </div>
                  </div>
                   <div className="mt-4 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                      <p className="text-slate-600 text-sm">
                          <strong>مثال محلي:</strong> <span className="text-indigo-700 font-bold">جبل القمر</span> في محافظة ظفار، حيث تظهر صدوع وانكسارات واضحة (مثل صدع شعت).
                      </p>
                  </div>
              </div>
          </div>
      ) : (
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
              {/* Volcano */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-100">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                      <Flame /> البراكين (خروج الماجما)
                  </h3>
                  <div className="relative h-48 bg-stone-100 rounded-xl overflow-hidden flex justify-center items-end border border-stone-200">
                      {/* Volcano Shape */}
                      <path d="M50,192 L150,50 L250,192 Z" fill="#4E342E" />
                      
                      {/* Internal Channel */}
                      <rect x="145" y="50" width="10" height="150" fill="#B71C1C" opacity={isErupting ? 1 : 0} className="transition-opacity" />

                      <div className="w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-[#5D4037] border-r-[60px] border-r-transparent relative">
                           {/* Eruption Animation */}
                           {isErupting && (
                               <>
                                <div className="absolute -top-12 -left-4 w-8 h-24 bg-red-500 rounded-full blur-md animate-pulse"></div>
                                <div className="absolute -top-16 -left-8 w-16 h-16 bg-gray-500 rounded-full blur-lg animate-ping opacity-50"></div>
                                {/* Particles */}
                                {Array.from({length: 5}).map((_,i) => (
                                    <div key={i} className="absolute w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ top: -20, left: Math.random()*20 - 10, animationDelay: `${i*0.1}s` }}></div>
                                ))}
                               </>
                           )}
                      </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
                      <span>تحت الأرض: ماجما</span>
                      <span>فوق السطح: لافا</span>
                  </div>

                  <button 
                    onClick={() => setIsErupting(!isErupting)}
                    className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors ${isErupting ? 'animate-pulse' : ''}`}
                  >
                      {isErupting ? "إيقاف الثوران" : "تفجير البركان 🌋"}
                  </button>
              </div>

              {/* Earthquake */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-100">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                      <Activity /> الزلازل (جهاز السيزموجراف)
                  </h3>
                  
                  {/* Seismograph Viz */}
                  <div className={`h-48 bg-slate-50 rounded-xl overflow-hidden relative border-2 border-slate-200 flex items-center justify-center ${quakeIntensity > 0 ? 'animate-shake' : ''}`}>
                      <div className="absolute left-0 w-full h-[1px] bg-slate-300"></div>
                      
                      {/* Drum Paper Animation */}
                      <div className="absolute inset-0 overflow-hidden">
                          <svg className="h-full w-[200%] absolute right-0" preserveAspectRatio="none">
                              <defs>
                                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="1"/>
                                  </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#grid)" />
                              
                              <polyline 
                                points={quakeIntensity > 0 
                                    ? "0,100 50,100 60,80 70,120 80,60 90,140 100,100 150,100 160,50 170,150 180,100 400,100"
                                    : "0,100 800,100"}
                                fill="none" 
                                stroke={quakeIntensity > 0 ? "#EF4444" : "#94A3B8"} 
                                strokeWidth="2"
                                className="transition-all duration-100"
                              />
                          </svg>
                      </div>

                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded shadow text-xs font-mono border border-slate-200">
                          القوة (ريختر): {quakeIntensity > 0 ? (Math.random() * 5 + 3).toFixed(1) : "0.0"}
                      </div>
                  </div>
                  
                  <button 
                    onClick={triggerQuake}
                    className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition-colors"
                  >
                      رصد هزة أرضية 📉
                  </button>
              </div>
          </div>
      )}
      
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3 mt-8">
          <AlertTriangle className="text-amber-600 flex-shrink-0" />
          <div className="text-sm text-amber-900">
              <strong>معلومة إضافية:</strong> توجد في عمان صخور <strong>الأفيوليت (Ophiolite)</strong>، وهي صخور قشرة محيطية رفعت إلى اليابسة بفعل عمليات الدفع التكتوني (عمليات داخلية)، وتعتبر عمان من أفضل الأماكن في العالم لدراستها.
          </div>
      </div>
      
       <style>{`
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        .animate-shake {
          animation: shake 0.5s;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default InternalProcesses;