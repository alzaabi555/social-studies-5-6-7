import React, { useState } from 'react';
import { Baby, Minus, Calculator, HeartPulse, GraduationCap, Stethoscope, AlertTriangle, Car, MessageCircle, Info } from 'lucide-react';

const NaturalIncrease: React.FC = () => {
  // Calculator State
  const [births, setBirths] = useState<number>(0);
  const [deaths, setDeaths] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  // Apply Activity State (Page 40)
  const [applyStep, setApplyStep] = useState(0);

  // Discussion State
  const [showDiscuss, setShowDiscuss] = useState(false);

  const calculate = () => {
      setResult(births - deaths);
  };

  return (
    <div className="p-6 animate-fade-in space-y-12">
        
        {/* Definition Section (Page 39) */}
        <div className="text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-4">أولاً: الزيادة الطبيعية</h2>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-100 max-w-3xl mx-auto">
                <p className="text-xl text-slate-700 font-medium mb-6 leading-relaxed">
                    "هي الفرق بين عدد المواليد وعدد الوفيات في مجتمع معين خلال فترة زمنية محددة."
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-indigo-50 p-6 rounded-2xl text-indigo-900 font-black font-mono text-2xl dir-ltr shadow-inner">
                    <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-indigo-100">( المواليد )</span>
                    <Minus size={32} className="text-indigo-400" />
                    <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-indigo-100">( الوفيات )</span>
                    <span className="text-indigo-400">=</span>
                    <span className="text-green-600">الزيادة الطبيعية</span>
                </div>
            </div>
        </div>

        {/* Factors Affecting (Page 39 Diagram) */}
        <div>
            <h3 className="text-2xl font-black text-slate-800 mb-6 text-center">العوامل المؤثرة في الزيادة الطبيعية</h3>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-green-500 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><GraduationCap size={28}/></div>
                    <h4 className="font-bold text-lg text-slate-800">المستوى التعليمي</h4>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-blue-500 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600"><Stethoscope size={28}/></div>
                    <h4 className="font-bold text-lg text-slate-800">الأوضاع الصحية</h4>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-red-500 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600"><Car size={28}/></div>
                    <h4 className="font-bold text-lg text-slate-800">الحوادث المرورية</h4>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-orange-500 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600"><AlertTriangle size={28}/></div>
                    <h4 className="font-bold text-lg text-slate-800">الكوارث الطبيعية</h4>
                </div>
            </div>
        </div>

        {/* --- MISSING PARTS RESTORED --- */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* 1. Knowledge Window (Covid-19) - Page 39 */}
            <div className="bg-[#D1C4E9] rounded-tr-3xl rounded-bl-3xl rounded-br-lg rounded-tl-lg p-6 relative mt-6 shadow-lg border-2 border-[#B39DDB]">
                <div className="absolute -top-5 right-6 bg-[#9575CD] text-white px-6 py-2 rounded-full font-bold text-lg shadow-md flex items-center gap-2">
                    <Info size={20} /> نافذة المعرفة
                </div>
                <p className="mt-4 text-[#4A148C] text-xl font-bold leading-relaxed text-right">
                    ارتفعَ عددُ الوَفَياتِ في العالمِ عامَ 2020م نتيجةً لانتشارِ جائحةِ كورونا (كوفيد – 19).
                </p>
            </div>

            {/* 2. Discuss Activity - Page 39 */}
            <div className="bg-[#E8F5E9] rounded-2xl p-0 overflow-hidden shadow-lg border border-[#C8E6C9] mt-6">
                <div className="bg-[#1B5E20] text-white p-4 flex justify-between items-center">
                    <h3 className="text-xl font-black flex items-center gap-2">
                        <MessageCircle size={24} /> نـاقـش
                    </h3>
                    <div className="text-3xl">👥</div>
                </div>
                <div className="p-6">
                    <h4 className="text-xl font-bold text-[#1B5E20] mb-4 text-center">
                        أسبابَ ارتفاعِ عددِ المواليدِ في المُجتمعاتِ الزِّراعيَّةِ.
                    </h4>
                    
                    {!showDiscuss ? (
                        <button 
                            onClick={() => setShowDiscuss(true)}
                            className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold py-3 rounded-xl transition-colors shadow-md"
                        >
                            إظهار الإجابة المقترحة
                        </button>
                    ) : (
                        <div className="bg-white p-4 rounded-xl border border-[#A5D6A7] animate-slide-up">
                            <ul className="list-disc list-inside text-lg text-[#2E7D32] space-y-2 font-medium">
                                <li>الحاجة للأيدي العاملة في الزراعة.</li>
                                <li>الزواج المبكر الشائع في الأرياف.</li>
                                <li>العادات والتقاليد التي تفتخر بكثرة الأبناء (العزوة).</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </div>
        {/* --- END OF MISSING PARTS --- */}

        {/* Apply Activity (Page 40 Table) */}
        <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3 relative z-10"><Calculator size={32} /> نشاط طَبّق (صفحة 40)</h3>
            <p className="mb-8 opacity-90 text-lg font-medium relative z-10">من خلال بيانات الجدول، احسب الزيادة الطبيعية للسكان في سلطنة عمان:</p>
            
            <div className="bg-white/10 rounded-2xl p-6 overflow-x-auto border border-white/20 relative z-10 backdrop-blur-sm">
                <table className="w-full text-center border-collapse min-w-[500px]">
                    <thead>
                        <tr className="border-b-2 border-white/20 text-lg">
                            <th className="p-4 font-black">السنة</th>
                            <th className="p-4 font-black">عدد المواليد</th>
                            <th className="p-4 font-black">عدد الوفيات</th>
                            <th className="p-4 bg-white/20 rounded-t-xl font-black text-yellow-300">الزيادة الطبيعية (الناتج)</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        <tr className="border-b border-white/10">
                            <td className="p-4 font-bold">2010م</td>
                            <td className="p-4 text-green-300 font-mono font-bold">64,730</td>
                            <td className="p-4 text-red-300 font-mono font-bold">7,414</td>
                            <td className="p-4">
                                {applyStep >= 1 ? <span className="font-black text-yellow-300 animate-fade-in font-mono text-2xl">57,316</span> : <button onClick={() => setApplyStep(1)} className="bg-white text-indigo-700 px-6 py-2 rounded-lg text-sm font-black shadow-lg hover:scale-105 transition-transform">احسب</button>}
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold">2020م</td>
                            <td className="p-4 text-green-300 font-mono font-bold">82,224</td>
                            <td className="p-4 text-red-300 font-mono font-bold">12,649</td>
                            <td className="p-4">
                                {applyStep >= 2 ? <span className="font-black text-yellow-300 animate-fade-in font-mono text-2xl">69,575</span> : <button onClick={() => setApplyStep(2)} disabled={applyStep < 1} className="bg-white text-indigo-700 px-6 py-2 rounded-lg text-sm font-black shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100">احسب</button>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Analyze Deaths Chart (Page 40 Figure) */}
        <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-xl">
            <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                <HeartPulse className="text-red-500" size={32}/> حلل: عدد الوفيات في سلطنة عمان (2015-2022)
            </h3>
            
            <div className="h-80 flex items-end justify-between gap-3 px-4 pb-8 border-b-2 border-l-2 border-slate-300 bg-slate-50 rounded-xl relative mb-8">
                {[8, 8.5, 9, 9, 8.8, 10.5, 12.6, 10].map((val, i) => { // Approximate relative heights
                    const year = 2015 + i;
                    const isCovid = year === 2020 || year === 2021;
                    return (
                        <div key={year} className="w-full flex flex-col justify-end items-center group relative h-full">
                            <div 
                                className={`w-full mx-1 rounded-t-lg transition-all duration-500 hover:opacity-80 shadow-md ${isCovid ? 'bg-red-600' : 'bg-green-600'}`}
                                style={{ height: `${val * 6}%` }}
                            >
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white px-2 py-1 rounded shadow-lg whitespace-nowrap">{isCovid ? 'ارتفاع ملحوظ' : 'مستقر'}</span>
                            </div>
                            <span className={`text-xs md:text-sm mt-3 font-bold ${isCovid ? 'text-red-700' : 'text-slate-600'}`}>{year}</span>
                        </div>
                    );
                })}
                {/* Dotted Line for Avg */}
                <div className="absolute top-[45%] left-0 w-full h-[2px] border-t-2 border-dashed border-slate-400 opacity-50"></div>
                <span className="absolute top-[42%] right-2 text-xs font-bold text-slate-400 bg-white px-1">المعدل الطبيعي</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-red-100 w-8 h-8 flex items-center justify-center rounded-full text-red-700 font-bold">1</div>
                        <h4 className="font-bold text-red-900 text-lg">ماذا تلاحظ في عدد الوفيات من 2017 إلى 2019؟</h4>
                    </div>
                    <p className="text-base text-red-800 font-medium pr-11">كان العدد مستقراً نسبياً (حوالي 8-9 آلاف حالة وفاة سنوياً).</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-red-100 w-8 h-8 flex items-center justify-center rounded-full text-red-700 font-bold">2</div>
                        <h4 className="font-bold text-red-900 text-lg">ما التغير الذي حدث بعد عام 2019م؟ فسّر ذلك.</h4>
                    </div>
                    <div className="text-base text-red-800 font-medium pr-11">
                        <p className="mb-2">ارتفع عدد الوفيات بشكل ملحوظ جداً في عامي 2020 و 2021.</p>
                        <p className="bg-white p-2 rounded-lg inline-block border border-red-100 text-sm">
                            <strong>السبب:</strong> انتشار جائحة كورونا (كوفيد-19) عالمياً ومحلياً.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default NaturalIncrease;