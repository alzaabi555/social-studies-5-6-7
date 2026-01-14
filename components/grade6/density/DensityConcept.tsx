import React, { useState } from 'react';
import { Calculator, Users, Map, ArrowRight } from 'lucide-react';

const DensityConcept: React.FC = () => {
  const [pop, setPop] = useState<number>(1000);
  const [area, setArea] = useState<number>(100);
  const [density, setDensity] = useState<number>(10);

  const handleCalculate = () => {
      if (area > 0) setDensity(parseFloat((pop / area).toFixed(1)));
  };

  // Generate visual dots based on density (capped for performance)
  const dotsCount = Math.min(Math.floor(density * 5), 200); 

  return (
    <div className="p-6 animate-fade-in space-y-10">
        
        {/* Definition Box */}
        <div className="bg-slate-800 text-white p-8 rounded-3xl shadow-xl text-center">
            <h2 className="text-3xl font-black mb-4">ما هي الكثافة السكانية؟</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-slate-300">
                "هي عدد السكان في الكيلومتر المربع الواحد من الأرض."
            </p>
            <div className="mt-6 inline-block bg-white/10 px-6 py-3 rounded-xl border border-white/20">
                <span className="font-mono text-xl font-bold text-yellow-400">الكثافة = عدد السكان ÷ المساحة الكلية</span>
            </div>
        </div>

        {/* Interactive Calculator */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-100 flex flex-col md:flex-row gap-8">
            
            {/* Input Side */}
            <div className="flex-1 space-y-6">
                <h3 className="font-black text-indigo-900 text-2xl mb-4 flex items-center gap-2">
                    <Calculator /> مختبر الكثافة
                </h3>
                
                <div>
                    <label className="block text-slate-600 font-bold mb-2 flex justify-between">
                        <span>عدد السكان (نسمة)</span>
                        <span className="text-indigo-600">{pop}</span>
                    </label>
                    <input 
                        type="range" min="100" max="5000" step="100"
                        value={pop} 
                        onChange={(e) => { setPop(Number(e.target.value)); handleCalculate(); }}
                        className="w-full h-3 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                </div>

                <div>
                    <label className="block text-slate-600 font-bold mb-2 flex justify-between">
                        <span>المساحة (كم²)</span>
                        <span className="text-green-600">{area}</span>
                    </label>
                    <input 
                        type="range" min="10" max="500" step="10"
                        value={area} 
                        onChange={(e) => { setArea(Number(e.target.value)); handleCalculate(); }}
                        className="w-full h-3 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                </div>

                <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-200">
                    <p className="text-sm text-slate-500 font-bold">الكثافة الناتجة</p>
                    <p className="text-4xl font-black text-indigo-800 mt-2">{Number( (pop / area).toFixed(1) )} <span className="text-base font-medium">نسمة/كم²</span></p>
                </div>
            </div>

            {/* Visual Side */}
            <div className="flex-1 bg-slate-100 rounded-2xl border-4 border-slate-300 relative overflow-hidden flex items-center justify-center p-4">
                <span className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-xs font-bold shadow">منطقة (1 كم²)</span>
                
                {/* Dots Visualization */}
                <div className="flex flex-wrap gap-1 justify-center content-center w-full h-full overflow-hidden">
                    {Array.from({ length: dotsCount }).map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-rose-500 rounded-full animate-pulse shadow-sm"></div>
                    ))}
                </div>

                {dotsCount >= 200 && (
                    <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg">ازدحام شديد! 🚨</span>
                    </div>
                )}
            </div>
        </div>

        {/* Global Examples (Page 48) */}
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h4 className="font-bold text-red-900 text-lg mb-2">🔥 كثافة مرتفعة</h4>
                <p className="text-red-800">
                    <strong>البحرين:</strong> تعتبر من أعلى الدول العربية كثافة سكانية (مساحة صغيرة وسكان كثر).
                </p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h4 className="font-bold text-green-900 text-lg mb-2">🍃 كثافة منخفضة</h4>
                <p className="text-green-800">
                    <strong>ليبيا:</strong> تعتبر من أقل الدول العربية كثافة (مساحة صحراوية شاسعة وسكان قليلون).
                </p>
            </div>
        </div>

    </div>
  );
};

export default DensityConcept;