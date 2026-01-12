import React, { useState } from 'react';
import { Shield, Map, Play, RefreshCw, FileText } from 'lucide-react';

const AbbasidCrusades: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handlePlay = () => setIsPlaying(!isPlaying);
  const handleReset = () => {
      setIsPlaying(false);
      setKey(prev => prev + 1);
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="bg-red-50 border-r-4 border-red-600 p-6 rounded-lg">
             <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
                 <Shield /> الحملات الصليبية ومعركة حطين (الشكل 3)
             </h3>
             <p className="text-red-800 leading-relaxed">
                 استمرت الحملات الصليبية فترة طويلة، وكان هدفها السيطرة على الأراضي المقدسة في بلاد الشام.
                 بذل المسلمون جهوداً كبيرة بقيادة <strong>صلاح الدين الأيوبي</strong> وتوجت بانتصار <strong>حطين</strong> وتحرير القدس.
             </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            
            {/* Map Simulation */}
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-slate-700 flex items-center gap-2">
                        <Map size={16}/> محاكاة التحركات العسكرية
                    </h4>
                    <div className="flex gap-2">
                        <button onClick={handlePlay} className={`px-4 py-1 rounded-full flex items-center gap-2 font-bold text-sm ${isPlaying ? 'bg-yellow-100 text-yellow-700' : 'bg-green-600 text-white'}`}>
                            {isPlaying ? 'إيقاف' : <><Play size={14}/> تشغيل</>}
                        </button>
                        <button onClick={handleReset} className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200">
                            <RefreshCw size={14} />
                        </button>
                    </div>
                </div>

                <div className="relative w-full rounded-xl overflow-hidden border-2 border-slate-300 bg-slate-100">
                    <img 
                        src="map_hattin.png"
                        onError={(e) => {e.currentTarget.src = "https://placehold.co/600x800/e0f2fe/1e293b?text=Map+Hattin";}}
                        alt="Battle of Hattin Map"
                        className="w-full h-auto block object-contain"
                    />
                    <svg viewBox="0 0 400 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none" key={key}>
                        <defs>
                            <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#16A34A" /></marker>
                            <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#DC2626" /></marker>
                        </defs>
                        <circle cx="250" cy="220" r="15" fill="#FACC15" fillOpacity="0.4" className="animate-pulse" />
                        <path d="M300,180 Q340,200 300,220" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" opacity="0.6"/>
                        {isPlaying && (
                            <>
                                <path d="M300,500 Q320,400 300,300 Q290,250 260,230" fill="none" stroke="#16A34A" strokeWidth="8" markerEnd="url(#arrowGreen)" className="animate-[draw_3s_linear_forwards]" strokeDasharray="400" strokeDashoffset="400" strokeLinecap="round" opacity="0.8"/>
                                <text x="310" y="480" fill="#14532D" fontSize="14" fontWeight="bold" className="animate-fade-in bg-white/50 px-1">الجيش الإسلامي</text>
                                <path d="M100,220 L230,220" fill="none" stroke="#DC2626" strokeWidth="8" markerEnd="url(#arrowRed)" className="animate-[draw_2s_linear_forwards]" strokeDasharray="200" strokeDashoffset="200" strokeLinecap="round" opacity="0.8" style={{ animationDelay: '1s' }}/>
                                <text x="80" y="210" fill="#7F1D1D" fontSize="14" fontWeight="bold" className="animate-fade-in bg-white/50 px-1" style={{ animationDelay: '1s' }}>الجيش الصليبي</text>
                                <text x="240" y="210" fontSize="40" className="animate-bounce" style={{ animationDelay: '2.5s', opacity: 0, animationFillMode: 'forwards' }}>💥</text>
                            </>
                        )}
                    </svg>
                </div>
            </div>

            {/* Text Analysis (Page 76) */}
            <div className="flex flex-col gap-4">
                <button 
                    onClick={() => setShowAnalysis(!showAnalysis)}
                    className="bg-slate-800 text-white p-4 rounded-xl shadow-lg flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                    <span className="font-bold flex items-center gap-2"><FileText /> تحليل نص المعركة (صفحة 76)</span>
                    <span>{showAnalysis ? '▲' : '▼'}</span>
                </button>

                {showAnalysis && (
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 animate-slide-up text-sm leading-relaxed text-slate-700">
                        <h4 className="font-bold text-red-800 mb-2">ذكاء صلاح الدين العسكري:</h4>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>اختيار الموقع:</strong> تمركز الجيش الإسلامي قرب بحيرة طبرية لمنع الصليبيين من الوصول للماء.</li>
                            <li><strong>استغلال الظروف:</strong> اشتد العطش بالصليبيين وهم منهكون.</li>
                            <li><strong>التكتيك الحربي:</strong> أشعل المسلمون النار في الأعشاب اليابسة، فاجتمع على الصليبيين: <span className="font-bold text-red-600">العطش، حر النار، والدخان</span>.</li>
                        </ul>
                        <div className="mt-4 bg-white p-3 rounded border border-slate-200 italic">
                            "ونتجية لذلك تعذر عليهم الصمود طويلاً، وكان موقفهم في غاية الحرج."
                        </div>
                    </div>
                )}
            </div>
        </div>
        
        <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        `}</style>
    </div>
  );
};

export default AbbasidCrusades;