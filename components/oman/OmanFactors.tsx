import React, { useState } from 'react';
import { Globe2, Mountain, Sun, Wind, MapPin } from 'lucide-react';

const OmanFactors: React.FC = () => {
  const [activeFactor, setActiveFactor] = useState<'astro' | 'relief'>('astro');
  const [month, setMonth] = useState(6); // 1 = Jan, 6 = June
  
  // Calculations for Sun Position
  // Month 6 (June) -> Sun is directly overhead (90deg) at Tropic of Cancer (Muscat)
  // Month 12/1 (Dec/Jan) -> Sun is tilted away (~45deg)
  const sunAngle = month === 6 ? 90 : month === 12 || month === 1 ? 45 : 70;
  const temp = month === 6 ? 45 : month === 12 || month === 1 ? 25 : 35;
  const sunColor = month === 6 ? "text-red-600" : "text-orange-400";
  
  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">محاكي العوامل المؤثرة 🌍</h2>
            <p className="text-slate-500">استكشف لماذا يختلف مناخ عمان من منطقة لأخرى ومن فصل لآخر</p>
        </div>
        
        {/* Toggle Tabs */}
        <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-md mx-auto mb-8">
            <button 
                onClick={() => setActiveFactor('astro')}
                className={`flex-1 py-2 px-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${activeFactor === 'astro' ? 'bg-white shadow text-red-700' : 'text-slate-500'}`}
            >
                <Globe2 size={18} /> الموقع الفلكي
            </button>
            <button 
                onClick={() => setActiveFactor('relief')}
                className={`flex-1 py-2 px-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${activeFactor === 'relief' ? 'bg-white shadow text-stone-700' : 'text-slate-500'}`}
            >
                <Mountain size={18} /> التضاريس
            </button>
        </div>

        {activeFactor === 'astro' ? (
            <div className="bg-white rounded-3xl p-6 border border-red-100 shadow-xl">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    1. الموقع الفلكي (دائرة العرض)
                </h3>
                <p className="text-slate-600 mb-6 text-sm">
                    يمر <strong>مدار السرطان</strong> عبر مدينة مسقط. حرك الشريط الزمني لترى كيف تؤثر حركة الشمس الظاهرية على درجة الحرارة.
                </p>

                <div className="relative h-64 bg-sky-100 rounded-2xl overflow-hidden border-2 border-slate-200 mb-6">
                    {/* Sky */}
                    <div className={`absolute inset-0 transition-colors duration-1000 ${month === 6 ? 'bg-sky-200' : 'bg-sky-100'}`}></div>
                    
                    {/* Sun Position Animation */}
                    <div 
                        className="absolute bottom-0 left-1/2 w-1 h-1 origin-bottom transition-all duration-1000"
                        style={{ transform: `rotate(${sunAngle - 90}deg)` }} // 0deg is horizontal right. -90 is up.
                    >
                         <div className="absolute bottom-0 h-[300px] w-0.5 bg-yellow-400/50 border-r border-dashed border-yellow-600 origin-bottom"></div>
                         <div className={`absolute -top-[300px] -left-6 ${sunColor}`}>
                             <Sun size={52} className={month === 6 ? "animate-spin-slow" : ""} />
                         </div>
                    </div>

                    {/* Ground / Muscat */}
                    <div className="absolute bottom-0 w-full h-16 bg-[#E6D5B8] border-t-4 border-[#C2B280] flex items-end justify-center pb-2">
                         <div className="flex flex-col items-center">
                             <MapPin className="text-red-600 mb-1 animate-bounce" />
                             <span className="font-bold text-slate-700 text-xs">مسقط (مدار السرطان)</span>
                         </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                        <span>يناير (شتاء)</span>
                        <span>يونيو (صيف)</span>
                        <span>ديسمبر (شتاء)</span>
                    </div>
                    <input 
                        type="range" min="1" max="12" step="1"
                        value={month}
                        onChange={(e) => setMonth(Number(e.target.value))}
                        className="w-full h-3 bg-gradient-to-r from-blue-300 via-red-400 to-blue-300 rounded-lg appearance-none cursor-pointer"
                    />
                    
                    <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
                         <div className="text-center">
                             <span className="block text-xs text-slate-500 font-bold">زاوية الشمس</span>
                             <span className="text-xl font-bold text-slate-800">{sunAngle}°</span>
                         </div>
                         <div className="text-center">
                             <span className="block text-xs text-slate-500 font-bold">درجة الحرارة</span>
                             <span className={`text-2xl font-black ${temp > 40 ? 'text-red-600' : 'text-blue-600'}`}>{temp}°C</span>
                         </div>
                         <div className="text-xs font-bold text-slate-500 max-w-[120px] text-center">
                             {month === 6 ? "الشمس عمودية تماماً = حرارة قصوى" : "الشمس مائلة = حرارة أقل"}
                         </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-xl">
                <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    2. التضاريس (عامل الارتفاع)
                </h3>
                <p className="text-slate-600 mb-6 text-sm">
                    رغم الحرارة الشديدة، لماذا تتميز الجبال (مثل <strong>الجبل الأخضر</strong>) بمناخ معتدل؟
                </p>

                <div className="relative h-64 bg-sky-100 rounded-2xl overflow-hidden border-2 border-stone-200 mb-6">
                    {/* Mountain */}
                    <path d="M0,250 L100,250 L200,50 L300,250 L400,250" fill="#78716C" stroke="#5D4037" strokeWidth="2" />
                    <path d="M180,90 L200,50 L220,90 Z" fill="white" opacity="0.8" /> {/* Snow/Cold peak */}
                    
                    {/* Measurement Points */}
                    <div className="absolute bottom-4 left-10 flex flex-col items-center">
                        <span className="text-xs bg-white/80 px-2 rounded mb-1">السهل الساحلي</span>
                        <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-orange-800 mt-1">35°C</span>
                    </div>

                    <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <span className="text-xs bg-white/80 px-2 rounded mb-1">قمة الجبل الأخضر</span>
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-blue-800 mt-1">20°C</span>
                    </div>

                    {/* Wind Effect */}
                    <div className="absolute top-1/2 left-10">
                         <Wind className="text-slate-400 animate-[dash_2s_linear_infinite]" size={40} />
                    </div>
                </div>

                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm text-stone-800 leading-relaxed">
                    <strong>القاعدة:</strong> تنخفض درجة الحرارة بمعدل درجة واحدة مئوية كلما ارتفعنا 150 متراً.
                    لذلك يُعد الجبل الأخضر مصيفاً رائعاً وموطناً لمحاصيل لا تنمو في السهل (مثل الرمان والجوز).
                </div>
            </div>
        )}
    </div>
  );
};

export default OmanFactors;