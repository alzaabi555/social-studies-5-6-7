import React from 'react';
import { BookOpen, MapPin, Flag, Crown, MessageSquare } from 'lucide-react';

const StatutePillars: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">مرتكزات نظام الحكم</h2>
            <p className="text-slate-500">يقوم نظام الحكم في سلطنة عمان على أسس راسخة حددها النظام الأساسي</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Visual Centerpiece */}
            <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl flex items-center justify-center p-8 overflow-hidden">
                {/* Background Pattern - Local */}
                <div className="absolute inset-0 bg-[url('/arabesque_pattern.png')] opacity-10"></div>
                <div className="text-center text-white z-10">
                    {/* Emblem - Local */}
                    <img src="/oman_emblem.png" alt="Oman Emblem" className="h-32 w-auto mx-auto mb-6 filter drop-shadow-lg" />
                    <h3 className="text-2xl font-bold text-yellow-400">سلطنة عُمان</h3>
                    <p className="text-slate-300 mt-2">دولة عربية إسلامية ذات سيادة تامة</p>
                </div>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-green-500 flex items-center gap-4 transition-transform hover:translate-x-2">
                    <div className="bg-green-100 p-3 rounded-full text-green-700"><BookOpen size={24}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800">دين الدولة</h4>
                        <p className="text-sm text-slate-600">الإسلام هو دين الدولة، والشريعة الإسلامية هي أساس التشريع.</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-red-500 flex items-center gap-4 transition-transform hover:translate-x-2">
                    <div className="bg-red-100 p-3 rounded-full text-red-700"><Flag size={24}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800">اللغة الرسمية</h4>
                        <p className="text-sm text-slate-600">اللغة العربية هي اللغة الرسمية للدولة.</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-yellow-500 flex items-center gap-4 transition-transform hover:translate-x-2">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-700"><Crown size={24}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800">نظام الحكم</h4>
                        <p className="text-sm text-slate-600">نظام سلطاني وراثي في الذكور من ذرية السيد تركي بن سعيد بن سلطان.</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500 flex items-center gap-4 transition-transform hover:translate-x-2">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700"><MapPin size={24}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800">العاصمة</h4>
                        <p className="text-sm text-slate-600">مدينة مسقط هي عاصمة السلطنة.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Discussion Question (Page 114) */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mt-8">
            <div className="flex items-start gap-4">
                <div className="bg-indigo-200 p-3 rounded-full text-indigo-700">
                    <MessageSquare size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">شارك برأيك (صفحة 114)</h4>
                    <p className="text-indigo-800 text-sm leading-relaxed">
                        تُعد اللغة العربية جزءاً لا يتجزأ من هويتنا الوطنية، وهي من المرتكزات الأساسية لنظام الحكم.
                        <br/>
                        <strong>برأيك، كيف يمكننا المحافظة على اللغة العربية في ظل التطور التقني والتكنولوجي الذي يشهده العالم؟</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StatutePillars;