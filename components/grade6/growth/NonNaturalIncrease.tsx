import React, { useState } from 'react';
import { Plane, ArrowRightLeft, Heart, Search, Users, Bus } from 'lucide-react';

const NonNaturalIncrease: React.FC = () => {
  const [migrationStep, setMigrationStep] = useState(0);

  return (
    <div className="p-6 animate-fade-in space-y-10">
        
        <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-slate-800 mb-3">ثانياً: الزيادة غير الطبيعية (الهجرة)</h2>
            <p className="text-xl text-slate-500">العامل الثاني المؤثر في تغير عدد السكان</p>
        </div>

        {/* Migration Simulation */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="relative h-72 bg-slate-100 overflow-hidden border-b-4 border-slate-200">
                {/* Background Map / Lands */}
                <div className="absolute inset-0 grid grid-cols-2">
                    <div className="bg-amber-100 flex items-center justify-center border-r-4 border-dashed border-slate-300">
                        <span className="text-amber-800 font-black text-2xl bg-white/50 px-4 py-2 rounded-xl">مكان (أ)</span>
                    </div>
                    <div className="bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-800 font-black text-2xl bg-white/50 px-4 py-2 rounded-xl">مكان (ب)</span>
                    </div>
                </div>

                {/* Moving Vehicle */}
                <div 
                    className={`absolute top-1/2 -translate-y-1/2 transition-all duration-[2000ms] ease-in-out flex flex-col items-center z-10`}
                    style={{ 
                        left: migrationStep === 0 ? '20%' : '70%',
                        opacity: migrationStep === 0 ? 1 : 1 
                    }}
                >
                    <div className="text-6xl transform scale-x-[-1] drop-shadow-xl">{migrationStep === 0 ? <Users className="text-slate-700 w-16 h-16"/> : "🚌"}</div>
                    <div className="bg-white px-3 py-1 rounded-lg text-xs font-black shadow-lg mt-2 text-slate-700">مهاجرون</div>
                </div>

                {/* Arrow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-2 bg-slate-400 opacity-40 rounded-full"></div>
            </div>

            <div className="p-8 text-center bg-slate-50">
                <h3 className="font-black text-indigo-900 text-2xl mb-4">تعريف الهجرة</h3>
                <p className="text-slate-700 mb-8 text-xl font-medium leading-relaxed max-w-2xl mx-auto bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    "هي <span className="text-indigo-600 font-bold">انتقال الأفراد</span> من مكان إلى آخر، وتُعد سبباً رئيساً لتغير النمو السكاني في المجتمع."
                </p>
                
                <button 
                    onClick={() => setMigrationStep(prev => prev === 0 ? 1 : 0)}
                    className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-transform active:scale-95 flex items-center gap-3 mx-auto text-lg"
                >
                    <ArrowRightLeft size={24} />
                    {migrationStep === 0 ? "ابدأ الهجرة" : "إعادة المشهد"}
                </button>
            </div>
        </div>

        {/* Life Expectancy Activity (Page 41 Table) */}
        <div className="bg-teal-50 border-2 border-teal-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8 border-b border-teal-200 pb-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-700"><Heart size={32} /></div>
                <div>
                    <h3 className="text-2xl font-black text-teal-900">نشاط قارن: أمد الحياة</h3>
                    <p className="text-base text-teal-800 font-medium mt-1">
                        <strong>أمد الحياة:</strong> هو عدد السنوات المتوقع أن يعيشها الفرد.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-8 border-red-400 hover:-translate-y-1 transition-transform">
                    <h4 className="font-black text-slate-800 mb-4 text-xl flex justify-between items-center">
                        المجتمعات النامية (الفقيرة)
                        <span className="text-red-500 text-sm bg-red-50 px-2 py-1 rounded">📉</span>
                    </h4>
                    <ul className="space-y-4 text-base text-slate-700">
                        <li className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                            <span>مستوى أمد الحياة:</span> 
                            <span className="font-black text-red-600 bg-white px-2 py-1 rounded shadow-sm border">منخفض</span>
                        </li>
                        <li className="pt-2 border-t border-slate-100 leading-relaxed">
                            <strong>الأسباب:</strong> ضعف الرعاية الصحية، سوء التغذية، انتشار الأمراض، والحروب.
                        </li>
                    </ul>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-8 border-green-400 hover:-translate-y-1 transition-transform">
                    <h4 className="font-black text-slate-800 mb-4 text-xl flex justify-between items-center">
                        المجتمعات المتقدمة (الغنية)
                        <span className="text-green-500 text-sm bg-green-50 px-2 py-1 rounded">📈</span>
                    </h4>
                    <ul className="space-y-4 text-base text-slate-700">
                        <li className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                            <span>مستوى أمد الحياة:</span> 
                            <span className="font-black text-green-600 bg-white px-2 py-1 rounded shadow-sm border">مرتفع</span>
                        </li>
                        <li className="pt-2 border-t border-slate-100 leading-relaxed">
                            <strong>الأسباب:</strong> تقدم الخدمات الصحية، جودة الغذاء، الاستقرار، والوعي الصحي.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Search Activity */}
        <div className="bg-slate-800 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-6 border-4 border-slate-700">
            <div className="bg-slate-700 p-4 rounded-full shadow-inner"><Search size={40} className="text-yellow-400"/></div>
            <div className="text-center md:text-right">
                <h4 className="font-black text-yellow-400 mb-2 text-2xl">ابحث (صفحة 41)</h4>
                <p className="text-lg text-slate-200 font-medium leading-relaxed">
                    ابحث ومجموعتك عن أنواع الهجرة (داخلية/خارجية) وأسبابها (اقتصادية/اجتماعية) واعرضها في الصف.
                </p>
            </div>
        </div>

    </div>
  );
};

export default NonNaturalIncrease;