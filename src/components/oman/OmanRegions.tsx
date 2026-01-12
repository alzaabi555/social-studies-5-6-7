import React, { useState } from 'react';
import { OMAN_REGIONS_DATA } from '../../constants';
import { Info } from 'lucide-react';

const OmanRegions: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const activeData = OMAN_REGIONS_DATA.find(r => r.id === activeRegion);

  return (
    <div className="p-6 animate-fade-in">
        <h2 className="text-2xl font-black text-slate-800 mb-2 text-center">الأقاليم المناخية</h2>
        <p className="text-center text-slate-500 mb-8">اضغط على الخريطة لاستكشاف خصائص كل إقليم</p>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Interactive SVG Map */}
            <div className="w-full lg:w-1/2 relative bg-sky-50 rounded-2xl overflow-hidden border border-sky-200 h-96 shadow-inner">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                    {/* Ocean */}
                    <rect width="400" height="500" fill="#E0F2FE" />

                    {/* Oman Map Regions - Simplified Polygons */}
                    
                    {/* 1. Semi Desert (North Coast/Batinah) - Yellow */}
                    <path 
                        d="M260,80 L230,90 L210,120 L230,130 L270,100 Z" 
                        fill={activeRegion === 'semi_desert' ? "#FDE047" : "#FEF08A"} 
                        stroke="white" 
                        strokeWidth="1"
                        className="cursor-pointer hover:opacity-80 transition-colors"
                        onClick={() => setActiveRegion('semi_desert')}
                    />

                    {/* 2. Mediterranean (Mountains) - Green */}
                    <path 
                        d="M230,90 L210,120 L190,110 L210,80 Z" 
                        fill={activeRegion === 'mediterranean' ? "#4ADE80" : "#86EFAC"} 
                        stroke="white" 
                        strokeWidth="1"
                        className="cursor-pointer hover:opacity-80 transition-colors"
                        onClick={() => setActiveRegion('mediterranean')}
                    />

                    {/* 3. Dry Desert (Central) - Orange */}
                    <path 
                        d="M210,120 L190,110 L150,150 L100,350 L200,400 L250,300 L230,130 Z" 
                        fill={activeRegion === 'dry_desert' ? "#FB923C" : "#FDBA74"} 
                        stroke="white" 
                        strokeWidth="1"
                        className="cursor-pointer hover:opacity-80 transition-colors"
                        onClick={() => setActiveRegion('dry_desert')}
                    />

                    {/* 4. Monsoon (South/Dhofar) - Teal */}
                    <path 
                        d="M100,350 L80,420 L180,450 L200,400 Z" 
                        fill={activeRegion === 'monsoon' ? "#2DD4BF" : "#5EEAD4"} 
                        stroke="white" 
                        strokeWidth="1"
                        className="cursor-pointer hover:opacity-80 transition-colors"
                        onClick={() => setActiveRegion('monsoon')}
                    />

                    {/* Labels */}
                    <text x="240" y="70" fontSize="10" fontWeight="bold" fill="#334155">بحر عمان</text>
                    <text x="300" y="300" fontSize="10" fontWeight="bold" fill="#334155">بحر العرب</text>
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-lg text-xs shadow-md">
                    <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-yellow-300 rounded"></div> شبه صحراوي</div>
                    <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-green-300 rounded"></div> البحر المتوسط</div>
                    <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-orange-300 rounded"></div> صحراوي جاف</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-teal-300 rounded"></div> موسمي</div>
                </div>
            </div>

            {/* Details Panel */}
            <div className="w-full lg:w-1/2 min-h-[300px]">
                {activeData ? (
                    <div className={`p-6 rounded-2xl border-2 shadow-lg h-full animate-slide-up ${activeData.color}`}>
                        <h3 className="text-2xl font-black mb-4 text-slate-800">{activeData.name}</h3>
                        
                        <div className="space-y-4">
                            <div className="bg-white/60 p-3 rounded-xl">
                                <span className="text-xs font-bold text-slate-500 block mb-1">الموقع:</span>
                                <p className="font-medium text-slate-800">{activeData.location}</p>
                            </div>
                            
                            <div className="bg-white/60 p-3 rounded-xl">
                                <span className="text-xs font-bold text-slate-500 block mb-1">الخصائص:</span>
                                <p className="font-medium text-slate-800">{activeData.characteristics}</p>
                            </div>

                            <div className="bg-white/60 p-3 rounded-xl">
                                <span className="text-xs font-bold text-slate-500 block mb-1">الوصف العام:</span>
                                <p className="font-medium text-slate-800">{activeData.description}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 text-slate-400 p-8 text-center">
                        <Info size={48} className="mb-4 text-slate-300" />
                        <p className="text-lg font-bold">حدد منطقة على الخريطة</p>
                        <p className="text-sm">اضغط على الألوان المختلفة لمعرفة تفاصيل المناخ</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default OmanRegions;