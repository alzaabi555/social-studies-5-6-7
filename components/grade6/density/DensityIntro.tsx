import React, { useState } from 'react';
import { Target, PieChart, Building, Mountain, Users, Globe, Search, ArrowDown } from 'lucide-react';

const DensityIntro: React.FC = () => {
  const [cityView, setCityView] = useState<'A' | 'B' | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="p-6 animate-fade-in space-y-10">
        
        {/* Objectives */}
        <div className="bg-rose-50 border-r-8 border-rose-600 p-8 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-black text-rose-900 mb-6 flex items-center gap-3">
                <Target size={32}/> أتعلم في هذا الدرس:
            </h3>
            <ul className="grid gap-4 text-rose-900 font-bold text-xl leading-relaxed">
                <li className="flex items-center gap-3"><span className="text-rose-500 text-2xl">•</span> التوزيع الجغرافي لسكان العالم.</li>
                <li className="flex items-center gap-3"><span className="text-rose-500 text-2xl">•</span> مفهوم الكثافة السكانية وكيفية حسابها.</li>
                <li className="flex items-center gap-3"><span className="text-rose-500 text-2xl">•</span> العوامل المؤثرة في توزيع السكان.</li>
            </ul>
        </div>

        {/* City Comparison (Page 43) */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-slate-800 mb-2">ما الفرق بين المدينتين؟</h2>
                <p className="text-xl text-slate-500">تأمل الصورتين ثم اختر إحداهما لمعرفة التفاصيل</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* City A (Low Density) */}
                <div 
                    onClick={() => setCityView('A')}
                    className={`cursor-pointer rounded-2xl overflow-hidden border-4 transition-all duration-300 relative group ${cityView === 'A' ? 'border-green-500 scale-105 shadow-2xl' : 'border-slate-200 hover:border-green-300'}`}
                >
                    <div className="bg-green-100 h-48 flex items-center justify-center relative">
                        <Mountain size={64} className="text-green-600" />
                        <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-green-800">المدينة (أ)</div>
                    </div>
                    <div className="p-4 bg-white text-center">
                        <h3 className="font-bold text-lg text-slate-800">بيئة جبلية / ريفية</h3>
                        {cityView === 'A' && <p className="text-green-700 mt-2 font-medium animate-fade-in">عدد سكان قليل، مساحات واسعة، هدوء.</p>}
                    </div>
                </div>

                {/* City B (High Density) */}
                <div 
                    onClick={() => setCityView('B')}
                    className={`cursor-pointer rounded-2xl overflow-hidden border-4 transition-all duration-300 relative group ${cityView === 'B' ? 'border-blue-500 scale-105 shadow-2xl' : 'border-slate-200 hover:border-blue-300'}`}
                >
                    <div className="bg-blue-100 h-48 flex items-center justify-center relative">
                        <Building size={64} className="text-blue-600" />
                        <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-blue-800">المدينة (ب)</div>
                    </div>
                    <div className="p-4 bg-white text-center">
                        <h3 className="font-bold text-lg text-slate-800">بيئة حضرية مزدحمة</h3>
                        {cityView === 'B' && <p className="text-blue-700 mt-2 font-medium animate-fade-in">عدد سكان كبير، مباني شاهقة، ازدحام.</p>}
                    </div>
                </div>
            </div>
        </div>

        {/* Global Distribution Pie Chart (Page 44) */}
        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-200">
            <h2 className="text-3xl font-black text-slate-800 mb-6 text-center flex items-center justify-center gap-3">
                <Globe className="text-indigo-600"/> التوزيع الجغرافي لسكان العالم (الشكل 6)
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-10 justify-center mb-8">
                {/* CSS Conic Gradient Pie Chart */}
                <div className="relative w-72 h-72 rounded-full shadow-xl border-4 border-white"
                     style={{
                         background: `conic-gradient(
                             #DC2626 0% 60.67%, 
                             #D97706 60.67% 71.49%, 
                             #16A34A 71.49% 79.24%, 
                             #2563EB 79.24% 84.89%, 
                             #9333EA 84.89% 99%,
                             #64748B 99% 100%
                         )`
                     }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white w-28 h-28 rounded-full shadow-inner flex items-center justify-center text-center p-2">
                            <span className="text-sm font-bold text-slate-500">توزيع السكان حسب القارات</span>
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-600 rounded"></div> <span className="font-bold text-slate-700">آسيا (60.67%)</span></div>
                    <div className="flex items-center gap-2"><div className="w-4 h-4 bg-amber-600 rounded"></div> <span className="font-bold text-slate-700">أفريقيا (10.82%)</span></div>
                    <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-600 rounded"></div> <span className="font-bold text-slate-700">أوروبا (7.75%)</span></div>
                    <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-600 rounded"></div> <span className="font-bold text-slate-700">أمريكا اللاتينية</span></div>
                    <div className="flex items-center gap-2"><div className="w-4 h-4 bg-purple-600 rounded"></div> <span className="font-bold text-slate-700">أمريكا الشمالية</span></div>
                </div>
            </div>

            {/* Analysis Activity (Page 44 Q2) - ADDED */}
            <div className="bg-indigo-100 p-6 rounded-2xl border border-indigo-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-black text-indigo-900 text-xl flex items-center gap-2">
                        <Search size={24}/> نشاط: حلل الرسم البياني (صفحة 44)
                    </h3>
                    <button 
                        onClick={() => setShowAnalysis(!showAnalysis)}
                        className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-bold text-sm shadow hover:bg-indigo-50 transition-colors flex items-center gap-2"
                    >
                        {showAnalysis ? "إخفاء الإجابة" : "إظهار الإجابة"} <ArrowDown size={16} className={showAnalysis ? "rotate-180" : ""} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="bg-white/60 p-4 rounded-xl">
                        <p className="font-bold text-slate-700 mb-2">1. أيهما أكثر تركزاً للسكان: النصف الشمالي أم الجنوبي؟</p>
                        {showAnalysis ? (
                            <p className="text-indigo-700 font-bold animate-fade-in">النصف الشمالي من الكرة الأرضية (لوجود معظم اليابس فيه).</p>
                        ) : (
                            <div className="h-6 bg-slate-200 rounded animate-pulse w-1/2"></div>
                        )}
                    </div>

                    <div className="bg-white/60 p-4 rounded-xl">
                        <p className="font-bold text-slate-700 mb-2">2. استخرج: أكثر ثلاث قارات يتركز فيها السكان؟</p>
                        {showAnalysis ? (
                            <div className="flex gap-4 animate-fade-in font-bold text-indigo-800">
                                <span>1. آسيا</span>
                                <span>2. أفريقيا</span>
                                <span>3. أوروبا</span>
                            </div>
                        ) : (
                            <div className="h-6 bg-slate-200 rounded animate-pulse w-3/4"></div>
                        )}
                    </div>

                    <div className="bg-white/60 p-4 rounded-xl">
                        <p className="font-bold text-slate-700 mb-2">3. ما القارة الأقل سكاناً في العالم؟</p>
                        {showAnalysis ? (
                            <p className="text-indigo-700 font-bold animate-fade-in">القارة القطبية الجنوبية (أنتاركتيكا) / وأوقيانوسيا (أستراليا) بالنسبة للمأهولة.</p>
                        ) : (
                            <div className="h-6 bg-slate-200 rounded animate-pulse w-1/3"></div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default DensityIntro;