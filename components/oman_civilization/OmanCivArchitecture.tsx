import React, { useState } from 'react';
import { Castle, Shield, Info, Map } from 'lucide-react';

const OmanCivArchitecture: React.FC = () => {
  const [view, setView] = useState<'military' | 'civil'>('civil');

  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-800">المجال المعماري (صور صفحة 99)</h2>
            <p className="text-slate-500">استكشف تفاصيل العمارة العمانية من خلال الصور الحقيقية</p>
        </div>

        {/* City Planning Section (Page 99) */}
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex items-start gap-4 mb-6">
            <div className="bg-amber-100 p-2 rounded-full text-amber-700 mt-1">
                <Map size={24} />
            </div>
            <div>
                <h3 className="font-bold text-amber-900 text-lg">التخطيط العمراني (هندسة المدن)</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                    اهتم العمانيون بتخطيط الطرق وتحديد عرضها المناسب لكل نوع:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-amber-900">
                    <li><strong>الطريق الرئيسي:</strong> يربط الحارة أو المدينة بالسوق (أكثر اتساعاً).</li>
                    <li><strong>الطرق الفرعية:</strong> تربط بين البيوت.</li>
                    <li><strong>طرق البساتين:</strong> تربط البساتين بالمساجد.</li>
                </ul>
            </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
            <button 
                onClick={() => setView('civil')}
                className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 border-2 transition-all ${view === 'civil' ? 'bg-indigo-100 border-indigo-500 text-indigo-900' : 'bg-white border-slate-200'}`}
            >
                <Castle size={20} /> العمارة المدنية والدينية
            </button>
            <button 
                onClick={() => setView('military')}
                className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 border-2 transition-all ${view === 'military' ? 'bg-red-100 border-red-500 text-red-900' : 'bg-white border-slate-200'}`}
            >
                <Shield size={20} /> العمارة العسكرية
            </button>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200">
            {view === 'civil' ? (
                <div className="animate-slide-up grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-80 bg-slate-100 rounded-2xl overflow-hidden border-4 border-slate-300 group">
                        {/* Real Image: Mosques/Schools */}
                        <img 
                            src="/img_arch_civil.png"
                            onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/e0e7ff/3730a3?text=Mosques+and+Schools+Img";}}
                            alt="Omani Civil Architecture"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Interactive Highlights */}
                        <div className="absolute top-[30%] left-[40%]">
                            <span className="relative flex h-6 w-6">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-6 w-6 bg-indigo-500 border-2 border-white"></span>
                            </span>
                            <div className="absolute top-8 left-0 bg-white/90 text-indigo-900 text-xs font-bold px-2 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                الأقواس والمحاريب
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                            <Info size={20}/> مميزات العمارة المدنية:
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-3 bg-indigo-50 p-3 rounded-xl border border-indigo-100">
                                <span className="text-lg">🪵</span>
                                <span>استخدام <strong>الأخشاب المستوردة</strong> (من الهند) في الأسقف والأبواب، وزخرفتها بنقوش جميلة.</span>
                            </li>
                            <li className="flex items-start gap-3 bg-indigo-50 p-3 rounded-xl border border-indigo-100">
                                <span className="text-lg">🏘️</span>
                                <span>بساطة البناء وعدم التكلف، مع وجود ملاحق إضافية للمدارس (سكن للطلاب).</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="animate-slide-up grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-80 bg-slate-100 rounded-2xl overflow-hidden border-4 border-slate-300 group">
                        {/* Real Image: Forts/Walls */}
                        <img 
                            src="/img_arch_military.png"
                            onError={(e) => {e.currentTarget.src = "https://placehold.co/600x400/fee2e2/991b1b?text=Military+Forts+Img";}}
                            alt="Omani Military Architecture"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Interactive Highlights */}
                        <div className="absolute top-[20%] right-[20%]">
                            <span className="relative flex h-8 w-8">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-8 w-8 bg-red-600 border-2 border-white"></span>
                            </span>
                            <div className="absolute top-10 right-0 bg-white/90 text-red-900 text-xs font-bold px-2 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                الأبراج الضخمة
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
                            <Shield size={20}/> مميزات العمارة العسكرية:
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-3 bg-red-50 p-3 rounded-xl border border-red-100">
                                <span className="text-lg">🧱</span>
                                <span><strong>الأسوار العالية:</strong> أحاطت بالمدن الكبرى مثل نزوى وصحار لتوفير الحماية.</span>
                            </li>
                            <li className="flex items-start gap-3 bg-red-50 p-3 rounded-xl border border-red-100">
                                <span className="text-lg">🏰</span>
                                <span><strong>الأبراج والقلاع:</strong> تميزت بالضخامة والقوة، وكانت تستخدم للمراقبة والدفاع.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default OmanCivArchitecture;
