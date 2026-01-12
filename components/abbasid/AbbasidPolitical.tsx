import React, { useState } from 'react';
import { MousePointerClick, Info } from 'lucide-react';

const AbbasidPolitical: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const regions = {
      baghdad: {
          title: "الدولة العباسية (اللون الأخضر)",
          desc: "تمثل الامتداد الرسمي للخلافة، وتشمل العراق وإيران (خراسان) وأجزاء من الجزيرة العربية.",
          color: "rgba(74, 222, 128, 0.5)", // Green overlay
          borderColor: "#166534"
      },
      andalusia: {
          title: "الدولة الأموية في الأندلس (اللون الأصفر)",
          desc: "الدولة المستقلة تماماً في شبه الجزيرة الأيبيرية (إسبانيا والبرتغال).",
          color: "rgba(250, 204, 21, 0.5)", // Yellow overlay
          borderColor: "#854D0E"
      },
      fatimid: {
          title: "الدولة الفاطمية (اللون البني)",
          desc: "الدولة المنافسة التي سيطرت على مصر وشمال أفريقيا.",
          color: "rgba(217, 119, 6, 0.5)", // Brown/Orange overlay
          borderColor: "#92400E"
      },
      qaramita: {
          title: "القرامطة (اللون البيج)",
          desc: "حركة انفصالية سيطرت على شرق الجزيرة العربية.",
          color: "rgba(253, 230, 138, 0.5)", 
          borderColor: "#D97706"
      },
      oman: {
          title: "عمان (اللون الزيتي/الذهبي)",
          desc: "حافظت عمان على استقلاليتها وتميزها السياسي في الزاوية الجنوبية الشرقية.",
          color: "rgba(202, 138, 4, 0.5)", 
          borderColor: "#713F12"
      }
  };

  return (
    <div className="p-6 animate-fade-in space-y-6">
        <div className="text-center">
            <h2 className="text-2xl font-black text-slate-800 mb-2">خريطة الدول المستقلة (الشكل 1)</h2>
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                <MousePointerClick size={16}/>
                اضغط على المناطق الملونة لإظهار المعلومات
            </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-300 group bg-slate-200">
            {/* 1. Base Image - The actual map provided */}
            <img 
                src="/map_political.png"
                onError={(e) => {e.currentTarget.src = "https://placehold.co/800x400/e2e8f0/475569?text=Map+Image+Not+Found";}}
                alt="Political Map" 
                className="w-full h-auto object-contain block"
            />
            
            {/* 2. Interactive SVG Overlay */}
            {/* We map invisible polygons over the image regions. When clicked/hovered, they light up */}
            <div className="absolute inset-0">
                <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="none">
                    {/* Andalusia Area */}
                    <path 
                        d="M30,120 L90,100 L110,140 L90,170 L40,160 Z" 
                        fill={activeRegion === 'andalusia' ? regions.andalusia.color : "transparent"}
                        stroke={activeRegion === 'andalusia' ? "white" : "transparent"} strokeWidth="2"
                        className="cursor-pointer transition-all hover:fill-yellow-400/30"
                        onClick={() => setActiveRegion('andalusia')}
                    />

                    {/* Fatimid Area (North Africa + Egypt) */}
                    <path 
                        d="M50,200 L150,180 L250,170 L340,190 L320,250 L280,270 L50,230 Z" 
                        fill={activeRegion === 'fatimid' ? regions.fatimid.color : "transparent"}
                        stroke={activeRegion === 'fatimid' ? "white" : "transparent"} strokeWidth="2"
                        className="cursor-pointer transition-all hover:fill-orange-600/30"
                        onClick={() => setActiveRegion('fatimid')}
                    />

                    {/* Abbasid Area (Green) */}
                    <path 
                        d="M350,180 L450,150 L550,120 L750,120 L780,250 L600,300 L500,280 L400,250 Z" 
                        fill={activeRegion === 'baghdad' ? regions.baghdad.color : "transparent"}
                        stroke={activeRegion === 'baghdad' ? "white" : "transparent"} strokeWidth="2"
                        className="cursor-pointer transition-all hover:fill-green-500/30"
                        onClick={() => setActiveRegion('baghdad')}
                    />

                     {/* Oman Area */}
                    <path 
                        d="M530,270 L570,260 L590,290 L560,310 Z" 
                        fill={activeRegion === 'oman' ? regions.oman.color : "transparent"}
                        stroke={activeRegion === 'oman' ? "white" : "transparent"} strokeWidth="2"
                        className="cursor-pointer transition-all hover:fill-yellow-600/30"
                        onClick={() => setActiveRegion('oman')}
                    />
                </svg>
            </div>

            {/* Info Box */}
            {activeRegion && (
                <div className="absolute bottom-4 right-4 max-w-sm bg-white/95 backdrop-blur p-4 rounded-xl shadow-2xl border-r-4 animate-slide-up z-20" 
                     style={{ borderColor: regions[activeRegion as keyof typeof regions].borderColor }}>
                    <h3 className="font-bold text-lg mb-1" style={{ color: regions[activeRegion as keyof typeof regions].borderColor }}>
                        {regions[activeRegion as keyof typeof regions].title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                        {regions[activeRegion as keyof typeof regions].desc}
                    </p>
                    <button onClick={() => setActiveRegion(null)} className="text-xs text-slate-400 mt-2 underline">إغلاق</button>
                </div>
            )}
        </div>
    </div>
  );
};

export default AbbasidPolitical;
