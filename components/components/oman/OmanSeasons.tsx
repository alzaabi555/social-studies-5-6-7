import React, { useState } from 'react';
import { Sun, Snowflake, Wind, AlertTriangle } from 'lucide-react';

const OmanSeasons: React.FC = () => {
  const [season, setSeason] = useState<'summer' | 'winter'>('summer');

  return (
    <div className="p-6 animate-fade-in">
        <h2 className="text-2xl font-black text-slate-800 mb-6 text-center">أحوال الطقس في عمان</h2>
        
        {/* Toggle */}
        <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1 rounded-full flex relative">
                <div 
                    className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full shadow-md transition-all duration-300 ${season === 'summer' ? 'right-1' : 'right-[48%]'}`}
                ></div>
                <button 
                    onClick={() => setSeason('summer')}
                    className={`relative z-10 px-8 py-2 rounded-full font-bold flex items-center gap-2 transition-colors ${season === 'summer' ? 'text-orange-600' : 'text-slate-500'}`}
                >
                    <Sun size={18} /> الصيف
                </button>
                <button 
                    onClick={() => setSeason('winter')}
                    className={`relative z-10 px-8 py-2 rounded-full font-bold flex items-center gap-2 transition-colors ${season === 'winter' ? 'text-blue-600' : 'text-slate-500'}`}
                >
                    <Snowflake size={18} /> الشتاء
                </button>
            </div>
        </div>

        {/* Content Card */}
        <div className={`rounded-3xl p-8 border-2 transition-all duration-500 ${season === 'summer' ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-200'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* Visual */}
                <div className="relative h-64 bg-white rounded-2xl shadow-inner border border-slate-100 overflow-hidden">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                        {/* Map Outline */}
                        <path d="M150,50 L200,30 L250,60 L280,150 L200,250 L100,200 L120,100 Z" fill="#E2E8F0" stroke="#CBD5E1" />
                        
                        {season === 'summer' ? (
                            <>
                                {/* Summer: Sun directly overhead (Tropic of Cancer) */}
                                <circle cx="180" cy="80" r="30" fill="#F97316" className="animate-pulse" />
                                <line x1="0" y1="80" x2="400" y2="80" stroke="#F97316" strokeDasharray="5 5" opacity="0.5" />
                                <text x="10" y="75" fill="#F97316" fontSize="10">تعامد الشمس</text>

                                {/* Monsoon Winds in South */}
                                <path d="M100,280 Q150,250 200,250" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrow)" className="animate-[dash_1s_linear_infinite]" />
                                <text x="100" y="290" fill="#0D9488" fontSize="12" fontWeight="bold">رياح موسمية</text>
                            </>
                        ) : (
                            <>
                                {/* Winter: Sun far south */}
                                <circle cx="350" cy="20" r="20" fill="#FDBA74" opacity="0.6" />
                                
                                {/* Winter Depressions in North */}
                                <g transform="translate(150, 40)">
                                    <path d="M0,0 Q20,-20 40,0 T80,0" stroke="#3B82F6" strokeWidth="20" opacity="0.3" />
                                    <text x="0" y="-10" fill="#1D4ED8" fontSize="10">منخفضات جوية</text>
                                </g>
                                <path d="M120,20 L180,60" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" />
                            </>
                        )}
                    </svg>
                </div>

                {/* Info Text */}
                <div className="space-y-4">
                    <h3 className={`text-3xl font-black ${season === 'summer' ? 'text-orange-800' : 'text-blue-800'}`}>
                        {season === 'summer' ? 'فصل الصيف' : 'فصل الشتاء'}
                    </h3>
                    <ul className="space-y-3 text-lg text-slate-700">
                        {season === 'summer' ? (
                            <>
                                <li className="flex items-center gap-2"><Sun className="text-orange-500"/> حرارة مرتفعة جداً (تعامد الشمس).</li>
                                <li className="flex items-center gap-2"><Wind className="text-orange-500"/> ضغط جوي منخفض.</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> تساقط أمطار الخريف في ظفار.</li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-center gap-2"><Snowflake className="text-blue-500"/> درجات حرارة معتدلة إلى باردة.</li>
                                <li className="flex items-center gap-2"><Wind className="text-blue-500"/> ضغط جوي مرتفع.</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> أمطار في الشمال (منخفضات).</li>
                            </>
                        )}
                    </ul>
                </div>

            </div>
        </div>

        {/* Cyclone Info */}
        <div className="mt-8 bg-slate-800 text-white rounded-2xl p-6 flex items-start gap-4 shadow-xl">
             <AlertTriangle className="text-yellow-400 w-12 h-12 flex-shrink-0" />
             <div>
                 <h4 className="font-bold text-lg mb-1 text-yellow-400">حالات مدارية استثنائية: إعصار شاهين (2021)</h4>
                 <p className="text-slate-300 text-sm leading-relaxed">
                     تعرضت السلطنة لإعصار شاهين الذي أدى لهطول أمطار غزيرة. سطر العمانيون ملحمة وطنية في التكاتف والتعاون لمواجهة الآثار، مما يبرز أهمية الاستعداد للتغير المناخي.
                 </p>
             </div>
        </div>
    </div>
  );
};

export default OmanSeasons;