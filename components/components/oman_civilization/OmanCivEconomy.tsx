import React, { useState } from 'react';
import { Ship, Wheat, Hammer, Quote, User, Info } from 'lucide-react';

const OmanCivEconomy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trade' | 'agriculture' | 'industry'>('trade');
  const [animateRoutes, setAnimateRoutes] = useState(false);

  // Trigger animation on tab change
  React.useEffect(() => {
      if (activeTab === 'trade') {
          setAnimateRoutes(false);
          setTimeout(() => setAnimateRoutes(true), 100);
      }
  }, [activeTab]);

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Tabs */}
        <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-lg mx-auto mb-6">
            <button onClick={() => setActiveTab('trade')} className={`flex-1 py-2 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'trade' ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}>
                <Ship size={18}/> التجارة
            </button>
            <button onClick={() => setActiveTab('agriculture')} className={`flex-1 py-2 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'agriculture' ? 'bg-white shadow text-green-700' : 'text-slate-500'}`}>
                <Wheat size={18}/> الزراعة
            </button>
            <button onClick={() => setActiveTab('industry')} className={`flex-1 py-2 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'industry' ? 'bg-white shadow text-orange-700' : 'text-slate-500'}`}>
                <Hammer size={18}/> الصناعة
            </button>
        </div>

        {/* TRADE MAP CONTENT */}
        {activeTab === 'trade' && (
            <div className="animate-slide-up space-y-6">
                
                {/* Muhammad bin Mahboub (Page 95 Detail) */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg shadow-sm flex items-start gap-4">
                    <div className="bg-blue-200 p-2 rounded-full text-blue-800 mt-1">
                        <User size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-900 text-lg">شخصية عمانية: العلامة محمد بن محبوب الرحيلي</h4>
                        <p className="text-blue-800 text-sm leading-relaxed">
                            بذل جهوداً كبيرة في دعوة التجار القادمين إلى صحار للدين الإسلامي، وضمن لهم العدالة والأمن، مما ساهم في ازدهار التجارة.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-4">
                    <h3 className="font-bold text-slate-800 text-xl">خريطة خطوط التجارة (الشكل 10)</h3>
                    <p className="text-slate-500 text-sm">شاهد كيف ربطت السفن العمانية موانئ السلطنة بالعالم القديم</p>
                </div>
                
                {/* Map Container */}
                <div className="relative w-full rounded-2xl overflow-hidden border-4 border-slate-300 shadow-xl bg-blue-50">
                    <img 
                        src="map_trade_routes.png"
                        onError={(e) => {e.currentTarget.src = "https://placehold.co/800x500/bfdbfe/1e3a8a?text=Trade+Map+Figure+10";}}
                        alt="Map of Trade Routes"
                        className="w-full h-auto block"
                    />

                    {/* Animation Overlay */}
                    <svg viewBox="0 0 800 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                            <marker id="shipArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                <path d="M0,0 L0,8 L8,4 z" fill="#DC2626" />
                            </marker>
                        </defs>

                        {/* Pulsing Port Locations */}
                        <circle cx="450" cy="220" r="6" fill="#DC2626" className="animate-ping" />
                        <circle cx="450" cy="220" r="4" fill="#B91C1C" />
                        <text x="440" y="210" fontSize="12" fontWeight="bold" fill="#7F1D1D" className="bg-white/60 px-1">صحار</text>

                        {/* Internal Cities: Samad Al Shan & Nizwa (Page 95) */}
                        <circle cx="440" cy="230" r="3" fill="#1F2937" />
                        <text x="400" y="235" fontSize="10" fontWeight="bold" fill="#1F2937" className="bg-white/60 px-1">نزوى/سمد الشأن</text>

                        {/* Other Ports */}
                        <circle cx="750" cy="180" r="4" fill="#1D4ED8" /> <text x="740" y="170" fontSize="12" fontWeight="bold" fill="#1E3A8A">الصين</text>
                        <circle cx="600" cy="250" r="4" fill="#1D4ED8" /> <text x="610" y="240" fontSize="12" fontWeight="bold" fill="#1E3A8A">الهند</text>
                        <circle cx="350" cy="380" r="4" fill="#1D4ED8" /> <text x="300" y="380" fontSize="12" fontWeight="bold" fill="#1E3A8A">شرق أفريقيا</text>
                        <circle cx="380" cy="150" r="4" fill="#1D4ED8" /> <text x="360" y="140" fontSize="12" fontWeight="bold" fill="#1E3A8A">البصرة</text>

                        {animateRoutes && (
                            <>
                                {/* Route 1: Sohar -> India -> China */}
                                <path d="M450,220 Q550,300 600,250 T750,180" fill="none" stroke="#DC2626" strokeWidth="3" strokeDasharray="10 5" className="animate-[draw_3s_linear_forwards]" strokeDashoffset="1000" />
                                <g><text x="0" y="0" fontSize="20" style={{ offsetPath: "path('M450,220 Q550,300 600,250 T750,180')", animation: "moveShip 3s linear forwards" }}>⛵</text></g>

                                {/* Route 2: Sohar -> East Africa */}
                                <path d="M450,220 Q480,300 420,350 T350,380" fill="none" stroke="#DC2626" strokeWidth="3" strokeDasharray="10 5" className="animate-[draw_3s_linear_forwards]" strokeDashoffset="1000" />
                                <g><text x="0" y="0" fontSize="20" style={{ offsetPath: "path('M450,220 Q480,300 420,350 T350,380')", animation: "moveShip 3s linear forwards" }}>⛵</text></g>

                                {/* Route 3: Sohar -> Basra */}
                                <path d="M450,220 Q400,180 380,150" fill="none" stroke="#DC2626" strokeWidth="3" strokeDasharray="10 5" className="animate-[draw_1.5s_linear_forwards]" strokeDashoffset="500" />
                            </>
                        )}
                    </svg>
                </div>

                {/* Al-Maqdisi Quote (Page 96 Activity) */}
                <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-xl mt-6 relative overflow-hidden">
                    <Quote className="absolute top-4 left-4 text-slate-600 w-16 h-16 opacity-20" />
                    <h4 className="text-yellow-400 font-bold mb-2 text-lg">نشاط: حلل مقولة المقدسي</h4>
                    <p className="text-xl font-serif leading-relaxed text-center italic mb-4">
                        "من أراد التجارة فعليه بعدن، أو عُمان، أو مصر"
                    </p>
                    <div className="bg-slate-700/50 p-3 rounded-lg text-sm text-slate-300">
                        <strong>الدلالة:</strong> تشير المقولة إلى المكانة التجارية العالمية لعمان في ذلك العصر، حيث كانت مركزاً رئيسياً يضاهي مصر وعدن.
                    </div>
                </div>
            </div>
        )}

        {/* AGRICULTURE CONTENT */}
        {activeTab === 'agriculture' && (
            <div className="animate-slide-up grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                    <h3 className="font-bold text-green-900 text-lg mb-4">المحاصيل الزراعية</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
                            <span className="text-xl">🌴</span> النخيل (المنتج الأول)
                        </li>
                        <li className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
                            <span className="text-xl">🍋</span> الليمون والحمضيات
                        </li>
                        <li className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
                            <span className="text-xl">🪵</span> اللبان (في ظفار - للتصدير)
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg">
                    <h4 className="font-bold text-slate-800 mb-2">قصة طريفة: شجرة النارنج 🍊</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        أعجب الخليفة العباسي "القاهر" بشجرة النارنج (البرتقال المر)، فطلب استيرادها من عمان وزراعتها خصيصاً في قصره ببغداد، مما يدل على شهرة الزراعة العمانية وجودتها.
                    </p>
                </div>
            </div>
        )}

        {/* INDUSTRY CONTENT */}
        {activeTab === 'industry' && (
            <div className="animate-slide-up space-y-6">
                
                {/* Women's Role (Page 96 Detail) */}
                <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                    <div className="bg-pink-100 p-4 rounded-full text-pink-600">
                        <User size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-pink-900 mb-2">دور المرأة العمانية في الصناعة</h3>
                        <p className="text-pink-800 leading-relaxed">
                            شاركت المرأة العمانية بفاعلية في الحياة الاقتصادية، وخاصة في مجالات:
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-pink-700 shadow-sm border border-pink-100">غزل القطن</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-pink-700 shadow-sm border border-pink-100">صباغة الملابس</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-pink-700 shadow-sm border border-pink-100">الخياطة</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-orange-50 p-4 rounded-xl text-center border border-orange-100 hover:scale-105 transition-transform">
                        <span className="text-3xl block mb-2">⛏️</span>
                        <h4 className="font-bold text-orange-900">التعدين</h4>
                        <p className="text-xs text-orange-800">النحاس والفضة</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl text-center border border-orange-100 hover:scale-105 transition-transform">
                        <span className="text-3xl block mb-2">🧶</span>
                        <h4 className="font-bold text-orange-900">النسيج</h4>
                        <p className="text-xs text-orange-800">غزل القطن والصوف</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl text-center border border-orange-100 hover:scale-105 transition-transform">
                        <span className="text-3xl block mb-2">⛵</span>
                        <h4 className="font-bold text-orange-900">السفن</h4>
                        <p className="text-xs text-orange-800">صناعة السفن الخشبية</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl text-center border border-orange-100 hover:scale-105 transition-transform">
                        <span className="text-3xl block mb-2">🍯</span>
                        <h4 className="font-bold text-orange-900">الغذاء</h4>
                        <p className="text-xs text-orange-800">دبس التمر وتجفيف السمك</p>
                    </div>
                </div>
            </div>
        )}
        
        <style>{`
            @keyframes draw {
                to { stroke-dashoffset: 0; }
            }
            @keyframes moveShip {
                0% { offset-distance: 0%; }
                100% { offset-distance: 100%; }
            }
        `}</style>
    </div>
  );
};

export default OmanCivEconomy;