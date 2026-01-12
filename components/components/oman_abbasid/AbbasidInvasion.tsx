import React, { useState } from 'react';
import { Skull, RefreshCw, Map, User } from 'lucide-react';

const AbbasidInvasion: React.FC = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
      setStep(prev => prev < 3 ? prev + 1 : 0);
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
         <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-slate-800 mb-2">حملة محمد بن نور (الشكل 7)</h2>
            <p className="text-slate-500">تتبع مسار الحملة العباسية التي أدت لنهاية الإمامة الثانية</p>
        </div>

        {/* Character Profile: Al-Ahif bin Hamham (Page 85) */}
        <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500 flex items-start gap-4">
            <div className="bg-yellow-500/20 p-3 rounded-full">
                <User size={32} className="text-yellow-400" />
            </div>
            <div>
                <h3 className="font-bold text-lg mb-1 text-yellow-400">شخصية عمانية: الأهيف بن حمحام الهنائي</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                    قائد عسكري برز زمن الإمام عزان بن تميم. له الفضل في تجميع صفوف العمانيين بعد استشهاد الإمام لمحاربة جيش محمد بن نور وإخراجه من نزوى.
                </p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
            
            {/* Controls Side */}
            <div className="md:w-1/3 space-y-4">
                <div className="bg-red-50 p-6 rounded-2xl border-r-4 border-red-500 h-full">
                     <h3 className="font-bold text-red-900 mb-4 text-lg">خطوات الحملة (عام 280هـ):</h3>
                     <ul className="space-y-4 relative border-r-2 border-red-200 pr-4">
                         <li className={`transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}`}>
                             <span className="block font-bold text-red-800 text-sm">1. الانطلاق من البحرين</span>
                             <span className="text-xs text-red-600">أرسل المعتضد جيشاً بقيادة محمد بن نور.</span>
                         </li>
                         <li className={`transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}`}>
                             <span className="block font-bold text-red-800 text-sm">2. الوصول إلى جلفار وتوام</span>
                             <span className="text-xs text-red-600">السيطرة على الساحل الشمالي.</span>
                         </li>
                         <li className={`transition-all duration-500 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}`}>
                             <span className="block font-bold text-red-800 text-sm">3. الزحف نحو نزوى</span>
                             <span className="text-xs text-red-600">ارتكب الجرائم، فلقبه العمانيون <span className="font-black">"محمد بن بور"</span> (من البوار والهلاك).</span>
                         </li>
                     </ul>

                     <button onClick={nextStep} className="mt-8 w-full bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-700 flex items-center justify-center gap-2 shadow-lg">
                         {step >= 3 ? <><RefreshCw size={18}/> إعادة المحاكاة</> : <><Map size={18}/> الخطوة التالية</>}
                     </button>
                 </div>
            </div>

            {/* Map Side */}
            <div className="md:w-2/3">
                <div className="relative w-full bg-slate-100 rounded-2xl overflow-hidden border-4 border-slate-300 shadow-xl">
                    <img 
                        src="map_bin_nur.png"
                        onError={(e) => {e.currentTarget.src = "https://placehold.co/800x500/f1f5f9/dc2626?text=Map+Bin+Nur+Figure+7";}}
                        alt="Map of Abbasid Invasion"
                        className="w-full h-auto block"
                    />
                    <svg viewBox="0 0 600 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                         <defs><marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#DC2626" /></marker></defs>
                         <circle cx="100" cy="80" r="6" fill="#1F2937" opacity={step >= 1 ? 1 : 0} className="transition-opacity" />
                         {step >= 1 && <text x="90" y="70" fontSize="12" fontWeight="bold" fill="#1F2937">البحرين</text>}
                         <circle cx="350" cy="150" r="6" fill="#1F2937" opacity={step >= 2 ? 1 : 0} className="transition-opacity" />
                         <circle cx="340" cy="180" r="6" fill="#1F2937" opacity={step >= 2 ? 1 : 0} className="transition-opacity" />
                         <circle cx="380" cy="250" r="8" fill="#DC2626" opacity={step >= 3 ? 1 : 0} className="animate-pulse transition-opacity" />
                         {step >= 3 && <text x="390" y="255" fontSize="14" fontWeight="bold" fill="#DC2626" className="bg-white/50">نزوى</text>}
                         {step >= 1 && <path d="M100,80 Q250,100 350,150" fill="none" stroke="#DC2626" strokeWidth="4" strokeDasharray="10 5" markerEnd="url(#arrowHead)" className="animate-[draw_1s_linear_forwards]" strokeDashoffset="300"/>}
                         {step >= 2 && <path d="M350,150 L340,180" fill="none" stroke="#DC2626" strokeWidth="4" strokeDasharray="5 5" className="animate-[draw_0.5s_linear_forwards]" strokeDashoffset="50"/>}
                         {step >= 3 && <path d="M340,180 Q360,220 380,250" fill="none" stroke="#DC2626" strokeWidth="4" strokeDasharray="5 5" markerEnd="url(#arrowHead)" className="animate-[draw_1s_linear_forwards]" strokeDashoffset="100"/>}
                         {step >= 3 && <text x="360" y="230" fontSize="30" className="animate-bounce">💥</text>}
                    </svg>
                </div>
            </div>
        </div>
        
        <style>{`
            @keyframes draw { to { stroke-dashoffset: 0; } }
        `}</style>
    </div>
  );
};

export default AbbasidInvasion;