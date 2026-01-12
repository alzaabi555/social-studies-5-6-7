import React, { useState } from 'react';
import { Ship, Play, RefreshCw, BookOpen } from 'lucide-react';

const SocotraCampaign: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0); 

  const handlePlay = () => setIsPlaying(true);
  const handleReset = () => { setIsPlaying(false); setKey(prev => prev + 1); };

  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-slate-800 mb-2">نجدة أهل سقطرى (الشكل 6)</h2>
            <p className="text-slate-500">حرك الأسطول العماني من صحار لنجدة سقطرى</p>
        </div>

        {/* Story Activity (Page 83) */}
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 flex items-start gap-4 shadow-sm">
            <div className="bg-amber-100 p-3 rounded-full text-amber-700 mt-1">
                <BookOpen size={24} />
            </div>
            <div>
                <h4 className="font-bold text-amber-900 text-lg mb-2">نشاط: قصة الزهراء السقطرية</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                    استغاثت امرأة تدعى "الزهراء" بالإمام الصلت بن مالك بعد هجوم النصارى على سقطرى. 
                    <br/><strong>المطلوب:</strong> شاهد المقطع (أو تخيل القصة) ثم لخص مشاعرك تجاه نخوة الإمام واستجابة العمانيين.
                </p>
                <div className="flex gap-2">
                    <span className="bg-white px-3 py-1 rounded text-xs font-bold text-amber-800 border border-amber-100">النخوة العربية</span>
                    <span className="bg-white px-3 py-1 rounded text-xs font-bold text-amber-800 border border-amber-100">نصرة المظلوم</span>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl border border-blue-100">
             <div className="flex flex-col gap-6">
                 {/* Controls */}
                 <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl">
                     <div>
                         <h4 className="font-bold text-blue-900">محاكاة الحملة البحرية</h4>
                         <p className="text-xs text-blue-700">انطلاق الأسطول بقيادة الإمام الصلت بن مالك</p>
                     </div>
                     <div className="flex gap-2">
                        <button 
                            onClick={handlePlay}
                            disabled={isPlaying}
                            className={`px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all ${isPlaying ? 'bg-slate-200 text-slate-400' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'}`}
                        >
                            <Play size={18} /> انطلاق
                        </button>
                        <button onClick={handleReset} className="p-2 bg-white border border-blue-200 text-blue-600 rounded-full hover:bg-blue-50">
                            <RefreshCw size={18} />
                        </button>
                     </div>
                 </div>

                 <div className="relative w-full rounded-2xl overflow-hidden border-4 border-slate-300 bg-slate-100 shadow-inner">
                     <img 
                        src="map_socotra.png"
                        onError={(e) => {e.currentTarget.src = "https://placehold.co/800x500/e0f2fe/1e40af?text=Map+Socotra+Figure+6";}}
                        alt="Map of Socotra Campaign"
                        className="w-full h-auto block"
                     />
                     <svg viewBox="0 0 800 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none" key={key}>
                         <circle cx="480" cy="180" r="8" fill="#EF4444" className="animate-ping" opacity="0.7"/>
                         <circle cx="480" cy="180" r="5" fill="#B91C1C" />
                         <text x="490" y="185" fontSize="14" fontWeight="bold" fill="#7F1D1D" className="bg-white/50">صحار (الانطلاق)</text>
                         <circle cx="350" cy="420" r="8" fill="#F59E0B" className="animate-ping" opacity="0.7"/>
                         <circle cx="350" cy="420" r="5" fill="#B45309" />
                         <text x="360" y="425" fontSize="14" fontWeight="bold" fill="#78350F" className="bg-white/50">سقطرى (الهدف)</text>
                         <path id="fleetPath" d="M480,180 Q600,250 550,350 T350,420" fill="none" stroke="#1E40AF" strokeWidth="4" strokeDasharray="10 10" opacity="0.6"/>
                         {isPlaying && (
                             <g><g style={{ offsetPath: "path('M480,180 Q600,250 550,350 T350,420')", animation: "moveShip 4s linear forwards" }}><text x="-15" y="10" fontSize="30">⛵</text></g></g>
                         )}
                     </svg>
                 </div>
             </div>
        </div>
        
        <style>{`
            @keyframes moveShip { 0% { offset-distance: 0%; } 100% { offset-distance: 100%; } }
        `}</style>
    </div>
  );
};

export default SocotraCampaign;