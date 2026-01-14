import React, { useState } from 'react';
import { Users, AlertTriangle, Plane, UserCheck, Map, BarChart2, ArrowUpDown, Info } from 'lucide-react';

const GenderStructure: React.FC = () => {
  const [activeFactor, setActiveFactor] = useState<number | null>(null);
  const [showMapInfo, setShowMapInfo] = useState(false);
  const [showChartAnalysis, setShowChartAnalysis] = useState(false);

  // Data for Page 28 Activity
  const initialData = [
      { country: 'الكويت', m: 59.4, f: 40.6 },
      { country: 'قطر', m: 71.7, f: 28.3 },
      { country: 'عمان', m: 61.0, f: 39.0 },
      { country: 'السعودية', m: 56.8, f: 43.2 },
      { country: 'البحرين', m: 61.5, f: 38.5 },
      { country: 'الإمارات', m: 69.7, f: 30.3 }
  ];

  const [chartData, setChartData] = useState(initialData);
  const [sortType, setSortType] = useState<'default' | 'male' | 'female'>('default');

  const sortData = (type: 'male' | 'female') => {
      const sorted = [...chartData].sort((a, b) => {
          return type === 'male' ? b.m - a.m : b.f - a.f;
      });
      setChartData(sorted);
      setSortType(type);
  };

  return (
    <div className="p-6 animate-fade-in space-y-12">
        
        {/* Header */}
        <div className="text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-3">أولاً: البنية النوعية</h2>
            <p className="text-xl text-slate-600">يقصد بها تصنيف السكان حسب النوع إلى (ذكور وإناث).</p>
            <div className="mt-6 bg-slate-100 inline-block px-8 py-3 rounded-full text-slate-800 font-serif text-lg border border-slate-200">
                قال تعالى: ﴿يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ﴾
            </div>
        </div>

        {/* Factors Affecting Gender Ratio (Page 26) */}
        <div className="grid md:grid-cols-3 gap-6">
            <div 
                onClick={() => setActiveFactor(1)}
                className={`cursor-pointer p-6 rounded-3xl border-2 transition-all hover:scale-105 ${activeFactor === 1 ? 'bg-red-50 border-red-500 shadow-lg' : 'bg-white border-slate-200'}`}
            >
                <div className="flex items-center gap-3 mb-4 text-red-600">
                    <AlertTriangle size={32}/>
                    <h3 className="font-black text-2xl">الحروب</h3>
                </div>
                {activeFactor === 1 ? (
                    <p className="text-lg text-red-900 animate-fade-in leading-relaxed font-medium">تؤدي الحروب لزيادة نسبة الإناث، لأن أغلب المشاركين والضحايا في الحروب من الذكور.</p>
                ) : (
                    <p className="text-sm text-slate-400 font-bold">اضغط للتفاصيل</p>
                )}
            </div>

            <div 
                onClick={() => setActiveFactor(2)}
                className={`cursor-pointer p-6 rounded-3xl border-2 transition-all hover:scale-105 ${activeFactor === 2 ? 'bg-blue-50 border-blue-500 shadow-lg' : 'bg-white border-slate-200'}`}
            >
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                    <Plane size={32}/>
                    <h3 className="font-black text-2xl">الهجرة</h3>
                </div>
                {activeFactor === 2 ? (
                    <p className="text-lg text-blue-900 animate-fade-in leading-relaxed font-medium">تزيد نسبة الذكور في الدول المستقبلة للعمالة (مثل دول الخليج)، لأن أغلب المهاجرين للعمل هم من الذكور.</p>
                ) : (
                    <p className="text-sm text-slate-400 font-bold">اضغط للتفاصيل</p>
                )}
            </div>

            <div 
                onClick={() => setActiveFactor(3)}
                className={`cursor-pointer p-6 rounded-3xl border-2 transition-all hover:scale-105 ${activeFactor === 3 ? 'bg-orange-50 border-orange-500 shadow-lg' : 'bg-white border-slate-200'}`}
            >
                <div className="flex items-center gap-3 mb-4 text-orange-600">
                    <UserCheck size={32}/>
                    <h3 className="font-black text-2xl">دقة البيانات</h3>
                </div>
                {activeFactor === 3 ? (
                    <p className="text-lg text-orange-900 animate-fade-in leading-relaxed font-medium">قد يحدث نقص في تسجيل عدد الإناث في بعض المجتمعات، أو أخطاء في التبليغ عن نوع المولود.</p>
                ) : (
                    <p className="text-sm text-slate-400 font-bold">اضغط للتفاصيل</p>
                )}
            </div>
        </div>

        {/* Map Analysis (Page 27) */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl text-slate-800 flex items-center gap-3">
                    <Map size={28}/> حلل الخريطة (صفحة 27)
                </h3>
                <button 
                    onClick={() => setShowMapInfo(!showMapInfo)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-base font-bold hover:bg-indigo-700 transition-colors"
                >
                    {showMapInfo ? 'إخفاء التحليل' : 'تحليل البيانات'}
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="relative w-72 h-80 bg-slate-100 rounded-2xl border-2 border-slate-300 flex items-center justify-center shadow-inner">
                    <span className="text-slate-400 text-sm font-bold absolute top-4">خريطة سلطنة عمان</span>
                    <div className="absolute top-[50%] left-[30%] w-28 h-28 bg-orange-200 rounded-full opacity-50 animate-pulse"></div>
                    <div className="relative z-10 text-center">
                        <div className="font-black text-xl text-slate-800 mb-2">محافظة الوسطى</div>
                        <div className="text-sm mt-1 bg-white px-3 py-1 rounded-lg shadow text-blue-700 font-black border border-blue-100">ذكور: 73%</div>
                        <div className="text-sm mt-1 bg-white px-3 py-1 rounded-lg shadow text-pink-600 font-black border border-pink-100">إناث: 27%</div>
                    </div>
                </div>

                <div className="flex-1 space-y-6">
                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                        توضح الخريطة نسبة الذكور والإناث في محافظات السلطنة لعام 2023م.
                    </p>
                    {showMapInfo && (
                        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200 animate-slide-up shadow-sm">
                            <h4 className="font-bold text-indigo-900 mb-3 text-lg">لماذا تنخفض نسبة الإناث في محافظة الوسطى؟</h4>
                            <div className="bg-white p-4 rounded-xl text-base text-slate-800 font-medium leading-relaxed shadow-sm border border-indigo-100">
                                السبب: طبيعة المنطقة الاقتصادية (مناطق نفطية وصناعية) التي تجذب الأيدي العاملة الوافدة (معظمهم ذكور) للعمل فيها دون أسرهم.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Analyze Graph Activity (Page 28) */}
        <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600"><BarChart2 size={32} /></div>
                    <div>
                        <h3 className="text-2xl font-black text-slate-800">حلل: التوزيع النسبي للسكان (2021)</h3>
                        <p className="text-sm text-slate-500 font-bold">لدول مجلس التعاون الخليجي</p>
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <button 
                        onClick={() => sortData('male')}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${sortType === 'male' ? 'bg-teal-600 text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                        <ArrowUpDown size={16}/> رتب حسب الذكور
                    </button>
                    <button 
                        onClick={() => sortData('female')}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${sortType === 'female' ? 'bg-amber-600 text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                        <ArrowUpDown size={16}/> رتب حسب الإناث
                    </button>
                </div>
            </div>

            {/* The Chart */}
            <div className="overflow-x-auto pb-6">
                <div className="min-w-[700px] h-[350px] flex items-end justify-around px-6 gap-6 bg-slate-50 rounded-2xl border border-slate-200 relative pt-12">
                    
                    {/* Y-Axis Grid Lines */}
                    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between px-6 py-10 opacity-20">
                        <div className="w-full border-t border-slate-400"></div>
                        <div className="w-full border-t border-slate-400"></div>
                        <div className="w-full border-t border-slate-400"></div>
                        <div className="w-full border-t border-slate-400"></div>
                        <div className="w-full border-t border-slate-400"></div>
                    </div>

                    {chartData.map((data) => (
                        <div key={data.country} className="flex flex-col items-center gap-3 group w-20 z-10 h-full justify-end">
                            <div className="w-full flex gap-1 items-end justify-center h-[85%]">
                                {/* Female Bar (Beige/Gold) */}
                                <div style={{ height: `${data.f}%` }} className="w-8 bg-[#E5E7EB] border border-slate-300 rounded-t-md relative group-hover:bg-amber-200 transition-all duration-500">
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow">{data.f}%</span>
                                </div>
                                {/* Male Bar (Teal/Blue) */}
                                <div style={{ height: `${data.m}%` }} className="w-8 bg-[#2DD4BF] rounded-t-md relative group-hover:bg-teal-500 transition-all duration-500 shadow-sm">
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-teal-900 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow">{data.m}%</span>
                                </div>
                            </div>
                            <span className="text-sm font-bold text-slate-700 mt-2">{data.country}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-4 text-sm font-bold bg-slate-50 p-3 rounded-xl w-fit mx-auto border border-slate-100">
                <div className="flex items-center gap-2"><div className="w-5 h-5 bg-[#2DD4BF] rounded shadow-sm"></div> ذكور</div>
                <div className="flex items-center gap-2"><div className="w-5 h-5 bg-[#E5E7EB] border border-slate-300 rounded shadow-sm"></div> إناث</div>
            </div>

            {/* Questions & Analysis */}
            <div className="mt-10 space-y-6">
                <div className={`p-6 rounded-2xl border transition-all ${sortType !== 'default' ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200'}`}>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-3">
                        {sortType !== 'default' ? <CheckCircleIcon/> : <InfoIcon/>}
                        سؤال 1: رتب نسب الذكور والإناث في دول المجلس من الأعلى للأقل.
                    </h4>
                    {sortType === 'default' ? (
                        <p className="text-sm text-slate-500 font-medium">استخدم أزرار الترتيب في الأعلى للإجابة على هذا السؤال.</p>
                    ) : (
                        <div className="text-base font-bold text-slate-700 animate-fade-in bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            الترتيب الحالي ({sortType === 'male' ? 'حسب الذكور' : 'حسب الإناث'}): <br/>
                            <span className="text-green-700 mt-2 block text-lg leading-relaxed">
                                {chartData.map(c => c.country).join(' ← ')}
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200">
                    <button 
                        onClick={() => setShowChartAnalysis(!showChartAnalysis)}
                        className="w-full flex justify-between items-center text-orange-900 font-bold text-lg"
                    >
                        <span>سؤال 2: علل وجود فارق كبير بين نسب الذكور والإناث في قطر والإمارات؟</span>
                        <span>{showChartAnalysis ? '▲' : '▼'}</span>
                    </button>
                    
                    {showChartAnalysis && (
                        <div className="mt-4 text-base text-orange-900 leading-relaxed border-t border-orange-200 pt-4 animate-slide-up font-medium">
                            <strong>السبب:</strong> يرجع ذلك لاستقبال هذه الدول أعداداً كبيرة من <strong>العمالة الوافدة</strong> (خاصة في مشاريع الإنشاءات والتنمية)، وغالبية هذه العمالة من <strong>الذكور</strong> الذين يأتون للعمل بدون عائلاتهم.
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

// Simple Icons Components
const CheckCircleIcon = () => <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>;
const InfoIcon = () => <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default GenderStructure;