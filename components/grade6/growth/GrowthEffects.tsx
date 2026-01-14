import React, { useState } from 'react';
import { Scale, TrendingUp, AlertTriangle, Lightbulb, Users, Box, Globe, Video } from 'lucide-react';

const GrowthEffects: React.FC = () => {
  const [population, setPopulation] = useState(50);
  const [resources, setResources] = useState(50);

  // Balance Calculation
  const diff = population - resources;
  const tiltAngle = diff * -0.5; // Simple scaling

  let statusColor = "text-green-600";
  let statusText = "توازن مثالي (استقرار)";
  
  if (diff > 10) {
      statusColor = "text-red-600";
      statusText = "مشكلة: النمو يفوق الموارد (فقر/نقص غذاء)";
  } else if (diff < -10) {
      statusColor = "text-blue-600";
      statusText = "وفرة في الموارد (رفاهية)";
  }

  return (
    <div className="p-6 animate-fade-in space-y-10">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-slate-800 mb-3">الآثار المترتبة على النمو السكاني (صفحة 42)</h2>
            <p className="text-xl text-slate-600">العلاقة بين السكان والموارد تحدد شكل الحياة</p>
        </div>

        {/* Balance Scale Simulation */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
            <div className="text-center mb-10">
                <h3 className={`text-2xl font-black transition-colors duration-300 ${statusColor}`}>{statusText}</h3>
                <p className="text-sm text-slate-400 mt-2 font-bold">حرك المؤشرات بالأسفل لتجربة سيناريوهات مختلفة</p>
            </div>

            <div className="relative h-64 w-full flex justify-center items-end mb-10">
                {/* The Scale Base */}
                <div className="absolute bottom-0 w-6 h-40 bg-slate-300 rounded-t-lg"></div>
                <div className="absolute bottom-0 w-40 h-6 bg-slate-300 rounded-full"></div>

                {/* The Balance Beam */}
                <div 
                    className="relative w-80 md:w-96 h-3 bg-slate-600 rounded-full transition-transform duration-500 ease-out origin-center flex justify-between items-center"
                    style={{ bottom: '150px', transform: `rotate(${tiltAngle}deg)` }}
                >
                    {/* Left Plate (Population) */}
                    <div className="absolute left-0 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-[100%] flex flex-col items-center justify-end origin-bottom transition-transform duration-500" style={{ transform: `rotate(${-tiltAngle}deg)` }}>
                        <div className="bg-orange-100 rounded-b-full w-32 h-16 border-4 border-slate-400 flex items-center justify-center relative overflow-visible shadow-lg">
                            <span className="absolute -bottom-8 font-black text-lg text-slate-600 bg-white px-2 rounded shadow-sm border">السكان</span>
                            {/* People Icons Pile */}
                            <div className="absolute bottom-3 flex flex-wrap justify-center w-24 gap-1 transition-all">
                                {Array.from({ length: Math.ceil(population / 10) }).map((_, i) => (
                                    <Users key={i} size={24} className="text-orange-600 drop-shadow-sm" />
                                ))}
                            </div>
                        </div>
                        <div className="w-1 h-20 bg-slate-400"></div>
                    </div>

                    {/* Right Plate (Resources) */}
                    <div className="absolute right-0 top-1/2 w-32 h-32 translate-x-1/2 -translate-y-[100%] flex flex-col items-center justify-end origin-bottom transition-transform duration-500" style={{ transform: `rotate(${-tiltAngle}deg)` }}>
                        <div className="bg-green-100 rounded-b-full w-32 h-16 border-4 border-slate-400 flex items-center justify-center relative shadow-lg">
                            <span className="absolute -bottom-8 font-black text-lg text-slate-600 bg-white px-2 rounded shadow-sm border">الموارد</span>
                            {/* Resources Icons Pile */}
                            <div className="absolute bottom-3 flex flex-wrap justify-center w-24 gap-1 transition-all">
                                {Array.from({ length: Math.ceil(resources / 10) }).map((_, i) => (
                                    <Box key={i} size={22} className="text-green-600 drop-shadow-sm" />
                                ))}
                            </div>
                        </div>
                        <div className="w-1 h-20 bg-slate-400"></div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="grid md:grid-cols-2 gap-10 bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <div>
                    <label className="flex justify-between font-black text-orange-900 mb-3 text-lg">
                        <span>معدل النمو السكاني</span>
                        <span className="bg-white px-3 py-1 rounded border border-orange-200">{population}%</span>
                    </label>
                    <input 
                        type="range" min="10" max="100" 
                        value={population} 
                        onChange={(e) => setPopulation(Number(e.target.value))}
                        className="w-full h-4 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                    />
                </div>
                <div>
                    <label className="flex justify-between font-black text-green-900 mb-3 text-lg">
                        <span>الموارد المتاحة (غذاء/خدمات)</span>
                        <span className="bg-white px-3 py-1 rounded border border-green-200">{resources}%</span>
                    </label>
                    <input 
                        type="range" min="10" max="100" 
                        value={resources} 
                        onChange={(e) => setResources(Number(e.target.value))}
                        className="w-full h-4 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                </div>
            </div>
        </div>

        {/* Future Prediction */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl flex items-center gap-8 border-4 border-slate-700">
            <div className="bg-white/10 p-6 rounded-full hidden md:block">
                <Globe size={64} className="text-blue-400 animate-pulse" />
            </div>
            <div>
                <h4 className="text-2xl font-black text-blue-300 mb-3">نظرة للمستقبل (عام 2100م)</h4>
                <p className="text-slate-200 text-xl font-medium leading-relaxed">
                    يشير تقرير الأمم المتحدة أن عدد سكان العالم قد يصل إلى حوالي <span className="text-white font-black text-3xl bg-blue-600 px-2 rounded mx-1 shadow-lg">10 مليارات</span> نسمة.
                </p>
            </div>
        </div>

        {/* Activities Section */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 p-8 rounded-3xl border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                <h4 className="font-black text-yellow-900 flex items-center gap-3 mb-4 text-xl"><Lightbulb size={28}/> اقترح حلاً:</h4>
                <p className="text-lg text-yellow-800 mb-6 font-medium">
                    تتأثر المناطق الجاذبة للمهاجرين بالضغط على الخدمات. ما مقترحاتك للتقليل من الهجرة؟
                </p>
                <div className="bg-white p-4 rounded-xl text-base text-slate-700 shadow-sm border border-yellow-100">
                    <strong>💡 فكرة:</strong> توفير فرص العمل والخدمات الأساسية في المناطق الطاردة للسكان لتشجيعهم على البقاء فيها.
                </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-3xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
                <h4 className="font-black text-purple-900 flex items-center gap-3 mb-4 text-xl"><Video size={28}/> لخص وشاهد:</h4>
                <p className="text-lg text-purple-800 font-medium">
                    امسح الرمز (في الكتاب) لمشاهدة مقطع عن النتائج المترتبة على النمو السكاني المتزايد على الأسرة والدولة، ولخص أهم النقاط.
                </p>
            </div>
        </div>

    </div>
  );
};

export default GrowthEffects;