import React, { useState } from 'react';
import { Pyramid, ArrowRightLeft, Info, Search } from 'lucide-react';

const PopPyramid: React.FC = () => {
  const [year, setYear] = useState<1993 | 2022>(2022);
  const [compareReveal, setCompareReveal] = useState(false);

  return (
    <div className="p-6 animate-fade-in space-y-12">
        <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-slate-800 mb-3">الهرم السكاني (صفحة 31-33)</h2>
            <p className="text-xl text-slate-600">تمثيل بياني يوضح توزيع السكان حسب العمر والنوع</p>
        </div>

        {/* Pyramid Components Explanation (Page 31) */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-indigo-100 mb-8">
            <h3 className="font-bold text-2xl text-indigo-900 mb-6 flex items-center gap-2"><Info size={28}/> مكونات الهرم:</h3>
            <div className="relative h-80 w-full max-w-lg mx-auto flex flex-col shadow-sm">
                {/* Top */}
                <div className="flex-1 bg-orange-200 clip-path-triangle-top flex items-center justify-center text-sm font-bold text-orange-900 border-b border-white pt-4">
                    القمة (كبار السن)
                </div>
                {/* Middle */}
                <div className="flex-[2] bg-blue-200 flex items-center justify-center text-sm font-bold text-blue-900 border-b border-white">
                    الوسط (متوسطو السن - القوى العاملة)
                </div>
                {/* Base */}
                <div className="flex-[2] bg-green-200 flex items-center justify-center text-sm font-bold text-green-900 pb-2">
                    القاعدة (صغار السن)
                </div>
                
                {/* Labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-500 py-4 font-bold">
                    <span>إناث 🚺</span>
                    <span>ذكور 🚹</span>
                </div>
                
                {/* Side lines */}
                <div className="absolute right-[-20px] top-0 h-full flex flex-col justify-between text-xs text-slate-400 py-8">
                    <span>65+</span>
                    <span>15-64</span>
                    <span>0-14</span>
                </div>
            </div>
        </div>

        {/* Comparison Activity (Page 33 - A vs B) */}
        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-300 shadow-md">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Search size={32}/></div>
                <h3 className="text-2xl font-black text-slate-800">قارن (صفحة 33): الهرم (أ) والهرم (ب)</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-8">
                {/* Pyramid A */}
                <div className="flex flex-col items-center">
                    <div className="w-full h-48 bg-gradient-to-t from-red-400 to-red-100 clip-path-triangle mb-4 relative shadow-lg">
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-sm bg-black/20 px-2 rounded">قاعدة عريضة جداً</span>
                    </div>
                    <span className="font-black text-red-900 bg-red-100 px-6 py-2 rounded-full text-lg">الهرم (أ)</span>
                </div>

                {/* Pyramid B */}
                <div className="flex flex-col items-center">
                    <div className="w-full h-48 bg-gradient-to-t from-blue-400 to-blue-100 clip-path-beehive mb-4 relative shadow-lg">
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-sm bg-black/20 px-2 rounded">قاعدة أضيق</span>
                    </div>
                    <span className="font-black text-blue-900 bg-blue-100 px-6 py-2 rounded-full text-lg">الهرم (ب)</span>
                </div>
            </div>

            <div className="text-center">
                <button 
                    onClick={() => setCompareReveal(!compareReveal)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105 text-lg"
                >
                    {compareReveal ? "إخفاء المقارنة" : "كشف أوجه المقارنة"}
                </button>

                {compareReveal && (
                    <div className="mt-8 bg-white p-6 rounded-2xl border border-purple-200 animate-slide-up text-right shadow-sm">
                        <div className="grid grid-cols-3 gap-4 text-base text-slate-800">
                            <div className="font-black bg-slate-100 p-3 rounded-lg text-center">وجه المقارنة</div>
                            <div className="font-black bg-red-50 text-red-900 p-3 rounded-lg text-center">الهرم (أ)</div>
                            <div className="font-black bg-blue-50 text-blue-900 p-3 rounded-lg text-center">الهرم (ب)</div>

                            <div className="p-3 border-b font-bold">شكل الهرم</div>
                            <div className="p-3 border-b">مثلثي (قاعدة عريضة)</div>
                            <div className="p-3 border-b">يشبه خلية النحل (قاعدة أضيق)</div>

                            <div className="p-3 font-bold">الفئة الأكثر ارتفاعاً</div>
                            <div className="p-3">صغار السن (أطفال)</div>
                            <div className="p-3">متوسطو السن (شباب)</div>
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Comparison 1993 vs 2022 (Page 32) */}
        <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h3 className="font-black text-2xl text-slate-800">تطور الهرم السكاني العماني</h3>
                <div className="bg-slate-100 p-1.5 rounded-xl border border-slate-300 flex">
                    <button 
                        onClick={() => setYear(1993)}
                        className={`px-6 py-2 rounded-lg text-base font-bold transition-colors ${year === 1993 ? 'bg-indigo-600 text-white shadow' : 'text-slate-500'}`}
                    >
                        1993م
                    </button>
                    <button 
                        onClick={() => setYear(2022)}
                        className={`px-6 py-2 rounded-lg text-base font-bold transition-colors ${year === 2022 ? 'bg-indigo-600 text-white shadow' : 'text-slate-500'}`}
                    >
                        2022م
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center">
                {/* Simulated Pyramid Shape */}
                <div className="relative w-full max-w-md h-72 flex items-end justify-center gap-1 transition-all duration-700 mb-6">
                    {year === 1993 ? (
                        // 1993 Shape: Very Wide Base
                        <div className="w-full h-full bg-gradient-to-t from-indigo-500 via-indigo-400 to-indigo-100 clip-path-pyramid-wide opacity-80 shadow-lg"></div>
                    ) : (
                        // 2022 Shape: Narrower Base, Wider Middle
                        <div className="w-full h-full bg-gradient-to-t from-indigo-600 via-indigo-500 to-indigo-200 clip-path-pyramid-narrow opacity-90 shadow-lg"></div>
                    )}
                    
                    {/* Overlay Text */}
                    <div className="absolute bottom-6 text-white font-black text-shadow-lg text-center text-lg bg-black/10 px-4 py-1 rounded-full backdrop-blur-sm">
                        {year === 1993 ? "قاعدة عريضة جداً" : "قاعدة أضيق (انخفاض المواليد)"}
                    </div>
                </div>

                <div className="w-full bg-slate-50 p-6 rounded-2xl border-l-8 border-indigo-500 text-base text-slate-700 leading-loose shadow-sm">
                    {year === 1993 ? (
                        <p><strong>📊 تحليل 1993:</strong> قاعدة عريضة تدل على ارتفاع نسبة صغار السن (المواليد)، مما يعني نمواً سكانياً سريعاً وحاجة ماسة لخدمات التعليم والصحة.</p>
                    ) : (
                        <p><strong>📈 تحليل 2022:</strong> ضاقت القاعدة قليلاً، مما يدل على انخفاض نسبة المواليد. وزادت نسبة "متوسطي السن" (القوى العاملة)، وهذا ما يسمى <span className="text-indigo-700 font-black">بالهبة الديموغرافية</span>.</p>
                    )}
                </div>
            </div>
        </div>

        <style>{`
            .clip-path-pyramid-wide { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
            .clip-path-pyramid-narrow { clip-path: polygon(50% 0%, 20% 100%, 80% 100%); }
            .clip-path-triangle { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
            .clip-path-beehive { clip-path: polygon(40% 0%, 60% 0%, 100% 60%, 80% 100%, 20% 100%, 0% 60%); }
            /* Simplified clip-paths for visual representation */
        `}</style>
    </div>
  );
};

export default PopPyramid;