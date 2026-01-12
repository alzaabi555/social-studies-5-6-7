import React, { useState } from 'react';
import { Castle, MapPin, Quote, User, Coins, ShieldAlert, BarChart } from 'lucide-react';

const NabhanidEra: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'context' | 'map' | 'analysis'>('context');

  const cityInfo = {
      nizwa: { title: "نزوى", desc: "وصفها ابن بطوطة بأنها مدينة تحف بها البساتين والأنهار، ولها أسواق حسنة.", coords: { cx: "380", cy: "250" } },
      bahla: { title: "بهلاء", desc: "مركز مهم للنباهنة، تم الكشف فيها عن نقود مسكوكة باسم الإمام.", coords: { cx: "360", cy: "260" } },
      maqniyat: { title: "مقنيات", desc: "أحد حصون النباهنة الهامة في منطقة الظاهرة.", coords: { cx: "320", cy: "240" } },
      samad: { title: "سمد الشأن", desc: "من المراكز الحضارية التي برزت في تلك الفترة.", coords: { cx: "420", cy: "230" } }
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-lg mx-auto mb-6">
            <button onClick={() => setActiveTab('context')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'context' ? 'bg-white shadow text-rose-700' : 'text-slate-500'}`}>ما بعد الإمامة</button>
            <button onClick={() => setActiveTab('map')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'map' ? 'bg-white shadow text-orange-700' : 'text-slate-500'}`}>دولة النباهنة</button>
            <button onClick={() => setActiveTab('analysis')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'analysis' ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}>تحليل الوضع</button>
        </div>

        {/* 1. Context: Post-Imamate (Pages 86-87) */}
        {activeTab === 'context' && (
            <div className="animate-slide-up space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-black text-slate-800 mb-2">الوضع السياسي بعد الإمامة الثانية</h2>
                    <p className="text-slate-500">فترة غياب الوحدة الوطنية ومحاولات التوحيد</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Imam Rashid bin Said */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-rose-500">
                        <div className="flex items-center gap-2 mb-3 text-rose-700">
                            <User size={24} />
                            <h3 className="font-bold text-lg">الإمام راشد بن سعيد اليحمدي</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            سعى لتوحيد عمان، وتمكن من <strong>طرد البويهيين</strong>. شهد عهده استقراراً ورخاءً، وتم الكشف عن <span className="font-bold text-rose-600">نقود مسكوكة باسمه في قلعة بهلاء</span>.
                        </p>
                        <div className="mt-3 flex justify-end">
                            <Coins className="text-yellow-500" size={20} />
                        </div>
                    </div>

                    {/* Imam Al-Khalil bin Shadhan */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500">
                        <div className="flex items-center gap-2 mb-3 text-green-700">
                            <User size={24} />
                            <h3 className="font-bold text-lg">الإمام الخليل بن شاذان</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            وصفه المؤرخ ابن رزيق بالعدل. في عهده "ركدت زعازع بغي الخلفاء العباسيين، وانقطعت مادتهم عن عمان"، وسار بسيرة العدل والإنصاف.
                        </p>
                        <div className="mt-3 flex justify-end">
                            <Quote className="text-slate-400" size={20} />
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* 2. Map: Nabhanid Era (Pages 88-89) */}
        {activeTab === 'map' && (
            <div className="animate-slide-up space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-black text-slate-800 mb-2">مدن دولة النباهنة (الشكل 8)</h2>
                    <p className="text-slate-500">امتد عصرهم من منتصف القرن 6 إلى منتصف القرن 10 الهجري</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="relative w-full bg-slate-100 border-b border-slate-200">
                        <img 
                            src="map_nabhanid.png"
                            onError={(e) => {e.currentTarget.src = "https://placehold.co/800x500/f8fafc/475569?text=Map+Nabhanid+Figure+8";}}
                            alt="Map of Nabhanid Cities"
                            className="w-full h-auto block"
                        />
                        <svg viewBox="0 0 800 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                            {Object.entries(cityInfo).map(([key, info]) => (
                                <g key={key} className="cursor-pointer hover:scale-110 transition-transform group" onClick={() => setActiveCity(key)}>
                                    <circle cx={info.coords.cx} cy={info.coords.cy} r="15" fill={activeCity === key ? "#EA580C" : "#64748B"} opacity="0.3" className="animate-ping" />
                                    <circle cx={info.coords.cx} cy={info.coords.cy} r="8" fill={activeCity === key ? "#EA580C" : "#64748B"} stroke="white" strokeWidth="2" />
                                    <text x={parseInt(info.coords.cx)} y={parseInt(info.coords.cy) - 15} textAnchor="middle" fontSize="14" fontWeight="bold" fill="black" className="bg-white/70 backdrop-blur-sm px-1">{info.title}</text>
                                </g>
                            ))}
                        </svg>
                    </div>
                    <div className="p-6 bg-slate-50 min-h-[120px] flex flex-col justify-center items-center text-center">
                        {activeCity ? (
                            <div className="animate-slide-up max-w-2xl">
                                <h3 className="font-bold text-2xl text-orange-600 mb-2">{cityInfo[activeCity as keyof typeof cityInfo].title}</h3>
                                <p className="text-slate-700">{cityInfo[activeCity as keyof typeof cityInfo].desc}</p>
                            </div>
                        ) : (
                            <p className="text-slate-400">اضغط على المدن في الخريطة لعرض التفاصيل</p>
                        )}
                    </div>
                </div>
            </div>
        )}

        {/* 3. Analysis: SWOT & Challenges (Page 90) */}
        {activeTab === 'analysis' && (
            <div className="animate-slide-up space-y-8">
                
                {/* Character: King Umar */}
                <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 flex items-start gap-4">
                    <div className="bg-red-500/20 p-3 rounded-full">
                        <ShieldAlert size={32} className="text-red-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1 text-red-400">شخصية عمانية: الملك النبهاني عُمر بن نبهان</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            واجه الفرس أثناء غزوهم لعمان عام 647هـ، وظل يقاتل حتى استشهد في المعركة دفاعاً عن وطنه.
                        </p>
                    </div>
                </div>

                {/* SWOT Analysis Activity */}
                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200">
                    <h3 className="text-xl font-black text-blue-900 mb-4 flex items-center gap-2">
                        <BarChart /> نشاط: تحليل الوضع السياسي (SWOT)
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-100 p-4 rounded-xl text-center">
                            <span className="font-bold text-green-800 block mb-2">نقاط القوة</span>
                            <span className="text-xs text-green-700">انتعاش العلاقات مع اليمن وشرق أفريقيا</span>
                        </div>
                        <div className="bg-red-100 p-4 rounded-xl text-center">
                            <span className="font-bold text-red-800 block mb-2">نقاط الضعف</span>
                            <span className="text-xs text-red-700">الصراعات الداخلية بين أفراد الأسرة</span>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-xl text-center">
                            <span className="font-bold text-blue-800 block mb-2">الفرص</span>
                            <span className="text-xs text-blue-700">الموقع الجغرافي والتحكم التجاري</span>
                        </div>
                        <div className="bg-orange-100 p-4 rounded-xl text-center">
                            <span className="font-bold text-orange-800 block mb-2">التحديات (المخاطر)</span>
                            <span className="text-xs text-orange-700">هجمات مملكة هرمز والفرس</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default NabhanidEra;