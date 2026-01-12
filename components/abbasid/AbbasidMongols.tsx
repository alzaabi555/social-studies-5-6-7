import React, { useState } from 'react';
import { Skull, Ban, Play, RotateCcw, Droplets } from 'lucide-react';

const AbbasidMongols: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'invasion' | 'ain_jalut'>('invasion');
  const [animate, setAnimate] = useState(false);

  const startAnimation = () => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 50);
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-md mx-auto mb-4">
            <button 
                onClick={() => { setActiveTab('invasion'); setAnimate(false); }}
                className={`flex-1 py-2 px-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'invasion' ? 'bg-white shadow text-red-700' : 'text-slate-500'}`}
            >
                <Skull size={18} /> سقوط بغداد (الشكل 4)
            </button>
            <button 
                onClick={() => { setActiveTab('ain_jalut'); setAnimate(false); }}
                className={`flex-1 py-2 px-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'ain_jalut' ? 'bg-white shadow text-green-700' : 'text-slate-500'}`}
            >
                <Ban size={18} /> عين جالوت (الشكل 5)
            </button>
        </div>

        {activeTab === 'invasion' ? (
            <div className="space-y-6 animate-slide-up">
                <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800">الغزو المغولي وسقوط بغداد (656هـ)</h3>
                    <p className="text-slate-500 text-sm">كارثة كبرى على الثقافة الإسلامية بقيادة هولاكو</p>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden border-4 border-slate-300 shadow-xl bg-slate-200">
                    <img 
                        src="/map_mongol.png"
                        onError={(e) => {e.currentTarget.src = "https://placehold.co/800x400/d1d5db/374151?text=Mongol+Invasion+Map";}}
                        alt="Mongol Invasion Map"
                        className="w-full h-auto block"
                    />

                    <svg viewBox="0 0 800 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                            <marker id="arrowYellow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 z" fill="#F59E0B" />
                            </marker>
                        </defs>

                        {/* Highlight Baghdad */}
                        <circle cx="380" cy="220" r="8" fill="none" stroke="red" strokeWidth="2" className="animate-ping" />

                        {/* Tigris River Turning Black Effect */}
                        {animate && (
                            <g style={{ animationDelay: '3.5s', opacity: 0, animationFillMode: 'forwards' }} className="animate-fade-in">
                                <path d="M370,210 Q380,220 390,230" stroke="black" strokeWidth="4" opacity="0.7" />
                                <text x="390" y="240" fontSize="12" fontWeight="bold" fill="black">نهر دجلة (حبر الكتب)</text>
                            </g>
                        )}

                        {animate && (
                            <>
                                <path 
                                    d="M780,100 Q600,150 500,180 T390,220" 
                                    fill="none" 
                                    stroke="#F59E0B" 
                                    strokeWidth="8" 
                                    markerEnd="url(#arrowYellow)"
                                    className="animate-[draw_3s_linear_forwards]"
                                    strokeDasharray="500"
                                    strokeDashoffset="500"
                                    strokeLinecap="round"
                                />
                                <text x="360" y="210" fontSize="40" className="animate-bounce" style={{ animationDelay: '3s', opacity: 0, animationFillMode: 'forwards' }}>🔥</text>
                            </>
                        )}
                    </svg>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <button onClick={startAnimation} className="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                            {animate ? <RotateCcw size={18}/> : <Play size={18}/>}
                            {animate ? "إعادة" : "بدء الزحف"}
                        </button>
                    </div>
                </div>

                {/* Text Analysis from Page 78 */}
                <div className="bg-slate-50 p-4 rounded-xl border border-red-200 text-sm text-slate-700">
                    <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2"><Droplets size={16}/> كارثة ثقافية:</h4>
                    <p>
                        "أشعلوا النار في بيت الحكمة، وألقوا بالكتب في نهر دجلة؛ مما أدى إلى <span className="font-bold">تلوّن أغلب مياه النهر باللون الأسود</span> (من حبر الكتب)، بالإضافة لقتل العلماء وتدمير المساجد والقصور."
                    </p>
                </div>
            </div>
        ) : (
            <div className="space-y-6 animate-slide-up">
                 <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800">معركة عين جالوت (الشكل 5)</h3>
                    <p className="text-slate-500 text-sm">استطاع المسلمون (المماليك) إيقاف الزحف المغولي بعد هزيمتهم</p>
                </div>

                 <div className="relative w-full rounded-2xl overflow-hidden border-4 border-green-300 shadow-xl bg-slate-200">
                    <img 
                        src="/map_ain_jalut.png"
                        onError={(e) => {e.currentTarget.src = "https://placehold.co/800x400/dcfce7/166534?text=Ain+Jalut+Map";}}
                        alt="Ain Jalut Map"
                        className="w-full h-auto block"
                    />
                    
                    <svg viewBox="0 0 800 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                            <marker id="arrowMongol2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#F59E0B" /></marker>
                            <marker id="arrowMamluk" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#4B5563" /></marker>
                        </defs>
                        <circle cx="260" cy="215" r="8" fill="none" stroke="red" strokeWidth="2" className="animate-ping" />
                        {animate && (
                            <>
                                <path d="M450,120 Q400,150 270,210" fill="none" stroke="#F59E0B" strokeWidth="8" markerEnd="url(#arrowMongol2)" className="animate-[draw_2s_linear_forwards]" strokeDasharray="300" strokeDashoffset="300" strokeLinecap="round"/>
                                <path d="M100,350 Q180,300 250,230" fill="none" stroke="#475569" strokeWidth="8" markerEnd="url(#arrowMamluk)" className="animate-[draw_2s_linear_forwards]" strokeDasharray="300" strokeDashoffset="300" strokeLinecap="round"/>
                                <text x="240" y="210" fontSize="50" className="animate-bounce" style={{ animationDelay: '2s', opacity: 0, animationFillMode: 'forwards' }}>⚔️</text>
                            </>
                        )}
                    </svg>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <button onClick={startAnimation} className="bg-green-600 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                            {animate ? <RotateCcw size={18}/> : <Play size={18}/>}
                            {animate ? "إعادة" : "بدء المعركة"}
                        </button>
                    </div>
                 </div>
            </div>
        )}
        
        <style>{`
            @keyframes draw { to { stroke-dashoffset: 0; } }
        `}</style>
    </div>
  );
};

export default AbbasidMongols;
