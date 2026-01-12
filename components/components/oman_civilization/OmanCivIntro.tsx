import React, { useState } from 'react';
import { Target, Eye, Home, MapPin } from 'lucide-react';

const OmanCivIntro: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  // Hotspots configured for a typical view of Al Aqr (Wall, Alley, Palm trees)
  const hotspots = [
      { id: 'fortification', x: 20, y: 50, label: 'التحصينات والأسوار', desc: 'لاحظ متانة الأسوار المبنية من الطين والحجارة لحماية الحارة.' },
      { id: 'palms', x: 80, y: 30, label: 'واحات النخيل', desc: 'تداخل العمارة مع البيئة الزراعية، حيث تحيط النخيل بالمنازل.' },
      { id: 'architecture', x: 50, y: 60, label: 'المباني الطينية', desc: 'مباني متعددة الطوابق بنوافذ صغيرة لتقليل الحرارة والحفاظ على الخصوصية.' }
  ];

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Objectives */}
        <div className="bg-amber-50 border-r-4 border-amber-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2 mb-4">
            <Target className="text-amber-600" />
            أهداف الدرس: بنهاية هذا الدرس ستكون قادراً على أن:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-amber-800 font-medium">
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-amber-200 rounded-full flex justify-center items-center text-sm">1</span> تلخص دور العمانيين في المجال الثقافي.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-amber-200 rounded-full flex justify-center items-center text-sm">2</span> تدلل على براعة العمانيين في التجارة والصناعة.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-amber-200 rounded-full flex justify-center items-center text-sm">3</span> تفسر ازدهار الزراعة وتطور العمارة.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-amber-200 rounded-full flex justify-center items-center text-sm">4</span> تناقش دور الشخصيات العمانية في الازدهار.</li>
            </ul>
        </div>

        {/* Virtual Tour - Al Aqr */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
            <div className="p-6 text-center bg-stone-50 border-b border-stone-100">
                <h2 className="text-2xl font-black text-stone-800 mb-2 flex items-center justify-center gap-2">
                    <Home /> جولة في حارة العقر (نزوى)
                </h2>
                <p className="text-stone-500">صورة بانورامية للحارة القديمة.. اضغط على النقاط لاكتشاف المعالم.</p>
            </div>

            <div className="relative w-full bg-stone-200 overflow-hidden group" style={{ height: '500px' }}>
                {/* Real Image: Page 91 */}
                <img 
                    src="img_al_aqr.png"
                    onError={(e) => {e.currentTarget.src = "https://placehold.co/800x500/d6d3d1/57534e?text=Al+Aqr+Image+Page+91";}}
                    alt="Harat Al Aqr"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-black/10">
                    {hotspots.map((spot) => (
                        <button
                            key={spot.id}
                            onClick={() => setActiveHotspot(spot.id)}
                            className="absolute w-10 h-10 bg-amber-500/90 rounded-full border-4 border-white shadow-xl animate-pulse hover:scale-110 hover:bg-amber-600 transition-all flex items-center justify-center text-white z-10"
                            style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                        >
                            <Eye size={18} />
                        </button>
                    ))}
                </div>

                {/* Info Box Overlay */}
                {activeHotspot && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 md:w-auto md:min-w-[300px] bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-b-4 border-amber-600 animate-slide-up z-20">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-black text-xl text-amber-900 flex items-center gap-2">
                                <MapPin size={20}/>
                                {hotspots.find(h => h.id === activeHotspot)?.label}
                            </h4>
                            <button 
                                onClick={() => setActiveHotspot(null)}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-slate-700 leading-relaxed font-medium">
                            {hotspots.find(h => h.id === activeHotspot)?.desc}
                        </p>
                    </div>
                )}
            </div>
            
            <div className="p-4 bg-stone-100 text-center text-sm font-bold text-stone-600 border-t border-stone-200">
                سؤال للتأمل: كيف ساهم تصميم هذه الحارة في حماية السكان وتوفير الراحة لهم؟
            </div>
        </div>
    </div>
  );
};

export default OmanCivIntro;