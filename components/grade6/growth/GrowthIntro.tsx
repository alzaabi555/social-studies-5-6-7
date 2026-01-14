import React from 'react';
import { Target, Globe, TrendingUp } from 'lucide-react';

const GrowthIntro: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-10">
        
        {/* Objectives (Page 37) */}
        <div className="bg-blue-50 border-r-8 border-blue-600 p-8 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-black text-blue-900 mb-6 flex items-center gap-3">
                <Target size={32}/> أتعلم في هذا الدرس:
            </h3>
            <ul className="grid gap-4 text-blue-900 font-bold text-xl leading-relaxed">
                <li className="flex items-center gap-3"><span className="text-blue-500 text-2xl">•</span> مفهوم النمو السكاني.</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 text-2xl">•</span> العوامل المؤثرة في النمو السكاني.</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 text-2xl">•</span> آثار النمو السكاني.</li>
            </ul>
        </div>

        {/* Global Growth Concept (Page 37 Visuals) */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-green-400 to-blue-500"></div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8">التغيرات السكانية على كوكب الأرض</h2>
            
            <div className="flex justify-center items-center gap-12 mb-10">
                <div className="relative w-48 h-48 animate-pulse">
                    <Globe size={192} className="text-green-200" />
                    {/* Few people */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl">👤</span>
                    </div>
                    <p className="mt-4 text-lg font-black text-slate-600 bg-slate-100 py-1 rounded-lg">في الماضي</p>
                </div>
                
                <div className="text-5xl text-slate-300">➜</div>

                <div className="relative w-48 h-48">
                    <Globe size={192} className="text-blue-200" />
                    {/* Many people */}
                    <div className="absolute inset-0 grid grid-cols-3 place-items-center p-4">
                        <span className="text-3xl">👤</span><span className="text-3xl">👤</span><span className="text-3xl">👤</span>
                        <span className="text-3xl">👤</span><span className="text-3xl">👤</span><span className="text-3xl">👤</span>
                        <span className="text-3xl">👤</span><span className="text-3xl">👤</span><span className="text-3xl">👤</span>
                    </div>
                    <p className="mt-4 text-lg font-black text-slate-600 bg-slate-100 py-1 rounded-lg">في الحاضر</p>
                </div>
            </div>

            <div className="bg-indigo-50 p-8 rounded-3xl border-2 border-indigo-100 max-w-3xl mx-auto shadow-md">
                <h3 className="font-black text-indigo-900 text-2xl mb-4 flex items-center justify-center gap-3">
                    <TrendingUp size={32} /> مفهوم النمو السكاني
                </h3>
                <p className="text-indigo-800 leading-loose font-medium text-xl">
                    "هو <span className="bg-white px-3 py-1 rounded-lg text-indigo-700 font-black shadow-sm">مقدار الزيادة</span> في عدد السكان في <span className="bg-white px-3 py-1 rounded-lg text-indigo-700 font-black shadow-sm">منطقة معينة</span> وخلال <span className="bg-white px-3 py-1 rounded-lg text-indigo-700 font-black shadow-sm">مدة زمنية محددة</span>."
                </p>
            </div>
        </div>

        {/* Global Growth Graph (Page 38 - Figure 4) */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-black text-slate-800 mb-6 text-center">النمو السكاني لدول العالم (الشكل 4)</h3>
            <div className="relative h-80 w-full bg-slate-50 rounded-2xl border border-slate-200 flex items-end px-6 pb-10 overflow-hidden">
                {/* SVG Curve simulating exponential growth */}
                <svg viewBox="0 0 100 50" className="w-full h-full absolute bottom-0 left-0" preserveAspectRatio="none">
                    <path d="M0,50 Q40,45 60,30 T100,5" fill="none" stroke="#3B82F6" strokeWidth="1" />
                    <area />
                    <path d="M0,50 Q40,45 60,30 T100,5 V50 H0 Z" fill="url(#grad1)" opacity="0.3" />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"#ffffff", stopOpacity:0}} />
                        </linearGradient>
                    </defs>
                </svg>
                
                {/* Axes Labels */}
                <div className="absolute left-4 top-4 text-sm font-bold text-slate-500 bg-white/80 px-2 py-1 rounded">بالمليار</div>
                <div className="absolute bottom-4 right-4 text-sm font-bold text-slate-500 bg-white/80 px-2 py-1 rounded">السنوات</div>
                
                {/* Points */}
                <div className="absolute bottom-[10%] left-[10%] w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                <span className="absolute bottom-[2%] left-[8%] text-xs font-bold text-slate-600">1950</span>

                <div className="absolute bottom-[30%] left-[40%] w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                <span className="absolute bottom-[2%] left-[38%] text-xs font-bold text-slate-600">2000</span>

                <div className="absolute bottom-[80%] left-[80%] w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
                <div className="absolute bottom-[80%] left-[80%] w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                <span className="absolute bottom-[2%] left-[76%] text-xs font-bold text-slate-600">2050 (توقعات)</span>
            </div>
            <p className="text-center text-lg font-medium text-slate-600 mt-6 bg-blue-50 p-4 rounded-xl inline-block w-full">
                شهدت دول العالم خلال السنوات الأخيرة نمواً متزايداً في أعداد السكان.
            </p>
        </div>
    </div>
  );
};

export default GrowthIntro;