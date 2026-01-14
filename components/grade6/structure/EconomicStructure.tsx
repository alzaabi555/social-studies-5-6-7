import React from 'react';
import { Scale, Briefcase, Baby, User, Stethoscope, Book, GraduationCap, Heart, Users } from 'lucide-react';

const EconomicStructure: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-12">
        
        {/* Economic Structure (Page 34) */}
        <div>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-slate-800 mb-3">ثالثاً: البنية الاقتصادية (صفحة 34)</h2>
                <p className="text-xl text-slate-600">تصنيف السكان حسب النشاط الاقتصادي (قوى عاملة وغير عاملة)</p>
            </div>

            {/* Book Simulation: Cards for Workforce vs Non-Workforce */}
            <div className="grid md:grid-cols-2 gap-10 items-stretch relative">
                
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-200 px-6 py-2 rounded-full text-slate-600 font-bold text-sm shadow-md border border-slate-300">
                    علاقة إعالة
                </div>

                {/* Workforce Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-blue-500 flex flex-col items-center text-center hover:scale-105 transition-transform">
                    <div className="bg-blue-100 p-5 rounded-full text-blue-600 mb-6">
                        <Briefcase size={48} />
                    </div>
                    <h3 className="text-2xl font-black text-blue-900 mb-3">1. القوى العاملة</h3>
                    <p className="text-base text-slate-600 mb-8 font-medium leading-relaxed">هم الأفراد القادرون على العمل والإنتاج (15-64 سنة).</p>
                    
                    {/* Images Simulation (Like Book: Doctor, Engineer) */}
                    <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                            <div className="text-4xl mb-2">👷‍♂️</div>
                            <span className="text-sm font-bold text-blue-800 block">مهندس بترول</span>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                            <div className="text-4xl mb-2">👩‍⚕️</div>
                            <span className="text-sm font-bold text-blue-800 block">طبيبة</span>
                        </div>
                    </div>
                </div>

                {/* Non-Workforce Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-orange-500 flex flex-col items-center text-center hover:scale-105 transition-transform">
                    <div className="bg-orange-100 p-5 rounded-full text-orange-600 mb-6">
                        <Users size={48} />
                    </div>
                    <h3 className="text-2xl font-black text-orange-900 mb-3">2. القوى غير العاملة</h3>
                    <p className="text-base text-slate-600 mb-8 font-medium leading-relaxed">هم فئة المعالين (خارج سن العمل أو غير قادرين).</p>
                    
                    {/* Images Simulation (Like Book: Students, Elderly) */}
                    <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                            <div className="text-4xl mb-2">🎒</div>
                            <span className="text-sm font-bold text-orange-800 block">طلاب (صغار)</span>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                            <div className="text-4xl mb-2">👴</div>
                            <span className="text-sm font-bold text-orange-800 block">متقاعد (كبار)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Royal Quote (Page 35) */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden my-8">
            <div className="absolute top-0 right-0 opacity-10">
                <img src="oman_emblem.png" className="w-40 h-40" alt="Emblem"/>
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">✨ إضاءات سلطانية</h3>
            <p className="text-xl md:text-2xl leading-loose font-serif italic mb-6 text-center text-purple-100">
                "لقد جعلنا الشباب في صميم اهتمامنا واهتمام حكومتنا، متابعين الجهود المبذولة؛ لإشراكهم في بناء الوطن."
            </p>
            <div className="text-left text-base font-bold text-yellow-200/80">
                - من خطاب السلطان هيثم بن طارق (يناير 2021م)
            </div>
        </div>

        {/* Social Structure (Page 35) - NEW SECTION */}
        <div className="bg-pink-50 border-2 border-pink-200 rounded-3xl p-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-pink-900 flex items-center justify-center gap-3">
                    <Heart size={32} className="text-pink-600"/>
                    البنية الاجتماعية (الحالة الزوجية)
                </h2>
                <p className="text-pink-800 mt-2 text-lg">
                    تصنيف السكان حسب الحالة الاجتماعية إلى 4 فئات رئيسية
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-b-8 border-pink-400 hover:-translate-y-1 transition-transform">
                    <span className="text-4xl block mb-3">👤</span>
                    <span className="font-black text-lg text-slate-700">أعزب</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-b-8 border-pink-400 hover:-translate-y-1 transition-transform">
                    <span className="text-4xl block mb-3">💍</span>
                    <span className="font-black text-lg text-slate-700">متزوج</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-b-8 border-pink-400 hover:-translate-y-1 transition-transform">
                    <span className="text-4xl block mb-3">💔</span>
                    <span className="font-black text-lg text-slate-700">مطلق</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-b-8 border-pink-400 hover:-translate-y-1 transition-transform">
                    <span className="text-4xl block mb-3">🕯️</span>
                    <span className="font-black text-lg text-slate-700">أرمل</span>
                </div>
            </div>
        </div>

        {/* Values Section */}
        <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 flex items-center gap-6">
            <div className="bg-green-100 p-4 rounded-full text-green-700 flex-shrink-0">
                <Scale size={32} />
            </div>
            <div>
                <h4 className="font-black text-green-900 text-xl mb-2">قيمنا:</h4>
                <p className="text-green-800 text-lg leading-relaxed">
                    نثمن جهود القوى العاملة في بناء المجتمع وتطوره، ونسعى لنكون أفراداً منتجين في المستقبل.
                </p>
            </div>
        </div>
    </div>
  );
};

export default EconomicStructure;