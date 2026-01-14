import React, { useState } from 'react';
import { BarChart2, Info, Search } from 'lucide-react';

const OmanGrowthAnalysis: React.FC = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [activePoint, setActivePoint] = useState<number | null>(null);

  // Approximate data points based on the graph in Page 38
  const data = [
      { year: 2006, val: 2 },
      { year: 2007, val: 6 },
      { year: 2008, val: 4 },
      { year: 2009, val: 10 }, // Spike 1
      { year: 2010, val: 3 }, // Dip
      { year: 2011, val: 18 }, // Highest Peak
      { year: 2012, val: 9 },
      { year: 2013, val: 6 },
      { year: 2014, val: 4 },
      { year: 2015, val: 5 },
      { year: 2016, val: 3 },
      { year: 2017, val: 2 },
      { year: 2018, val: 1 },
      { year: 2019, val: -1 }, // Dip below 0? visual approx
      { year: 2020, val: -3 }, // Lowest
      { year: 2021, val: 2 },
      { year: 2022, val: 8 }
  ];

  return (
    <div className="p-6 animate-fade-in space-y-10">
        <div className="text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-3">حلل: النمو السكاني في عمان</h2>
            <p className="text-xl text-slate-600">ادرس الشكل البياني ثم أجب عن الأسئلة (نشاط صفحة 38)</p>
        </div>

        {/* Interactive Line Chart */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 overflow-hidden">
            <div className="h-80 relative flex items-end justify-between px-4 pb-8 border-b-2 border-l-2 border-slate-300">
                {/* Y-Axis Label */}
                <div className="absolute -left-12 top-1/2 -rotate-90 text-sm font-bold text-slate-500 w-32 text-center bg-white p-1">نسبة النمو السكاني</div>

                {/* Data Points & Line */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full px-4 pb-8 pointer-events-none" preserveAspectRatio="none">
                    <polyline 
                        points={data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - ((d.val + 5) * 4)}`).join(' ')} // Scaling val range approx -5 to 20
                        fill="none" 
                        stroke="#10B981" 
                        strokeWidth="1.5" 
                    />
                </svg>

                {data.map((d, i) => (
                    <div 
                        key={d.year} 
                        className="relative group flex flex-col items-center justify-end h-full w-full"
                        onMouseEnter={() => setActivePoint(d.year)}
                        onMouseLeave={() => setActivePoint(null)}
                    >
                        {/* The Dot */}
                        <div 
                            className={`w-4 h-4 rounded-full border-2 border-white shadow-md z-10 transition-all cursor-pointer ${activePoint === d.year ? 'bg-orange-500 scale-150 ring-4 ring-orange-200' : 'bg-green-600'}`}
                            style={{ marginBottom: `${((d.val + 5) * 4)}%` }} // Position relative to height
                        ></div>
                        
                        {/* Tooltip */}
                        {activePoint === d.year && (
                            <div className="absolute bottom-24 bg-slate-800 text-white text-sm font-bold px-3 py-2 rounded-lg mb-2 whitespace-nowrap z-20 shadow-xl">
                                {d.year}: {d.val}%
                            </div>
                        )}

                        {/* X-Axis Label */}
                        <span className="text-[10px] md:text-xs font-bold text-slate-500 mt-3 rotate-45 md:rotate-0 origin-top-left">{d.year}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Questions Section */}
        <div className="space-y-6">
            
            {/* Q1: Describe */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-3 text-xl"><Search size={24} className="text-slate-600"/> 1. صِف النمو السكاني في سلطنة عمان (2006-2022)؟</h4>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    يتميز بالتذبذب (ارتفاع وانخفاض). شهد ارتفاعاً كبيراً في 2011 وانخفاضاً ملحوظاً في 2020.
                </p>
            </div>

            {/* Q2: Highest & Lowest */}
            <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-green-900 text-xl">2. ما السنة التي شهدت أعلى نمو وأقل نمو؟</h4>
                    <button onClick={() => setShowAnswer1(!showAnswer1)} className="text-sm bg-white px-4 py-2 rounded-lg border border-green-300 text-green-700 font-bold hover:bg-green-100 transition-colors">
                        {showAnswer1 ? "إخفاء" : "إظهار الإجابة"}
                    </button>
                </div>
                {showAnswer1 && (
                    <div className="mt-4 grid grid-cols-2 gap-6 animate-fade-in">
                        <div className="bg-white p-4 rounded-xl text-center shadow border border-green-100">
                            <span className="block text-sm text-slate-500 font-bold mb-1">أعلى نمو 📈</span>
                            <span className="font-black text-3xl text-green-600">2011</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow border border-red-100">
                            <span className="block text-sm text-slate-500 font-bold mb-1">أقل نمو 📉</span>
                            <span className="font-black text-3xl text-red-600">2020</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Q3: Prediction */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-blue-900 text-xl">3. ما توقعك للنمو مستقبلاً؟ ولماذا؟</h4>
                    <button onClick={() => setShowAnswer2(!showAnswer2)} className="text-sm bg-white px-4 py-2 rounded-lg border border-blue-300 text-blue-700 font-bold hover:bg-blue-100 transition-colors">
                        {showAnswer2 ? "إخفاء" : "إظهار الإجابة"}
                    </button>
                </div>
                {showAnswer2 && (
                    <p className="mt-4 text-lg text-blue-900 animate-fade-in bg-white p-5 rounded-xl border border-blue-100 leading-relaxed font-medium">
                        يتوقع أن يستقر أو يرتفع تدريجياً بسبب التحسن الصحي وعودة الأنشطة الاقتصادية بعد الجائحة، مع استمرار سياسات تنظيم سوق العمل.
                    </p>
                )}
            </div>

        </div>
    </div>
  );
};

export default OmanGrowthAnalysis;