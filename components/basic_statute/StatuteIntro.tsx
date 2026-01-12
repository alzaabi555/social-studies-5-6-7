import React, { useState } from 'react';
import { Target, Compass, Scroll, Flag, CalendarCheck, School, Users, Globe, Building2 } from 'lucide-react';

const StatuteIntro: React.FC = () => {
  const [activeYear, setActiveYear] = useState(2021);
  const [showSchoolAnalogy, setShowSchoolAnalogy] = useState(true);

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Page 109 Hook: School Discipline Analogy */}
        {showSchoolAnalogy && (
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden mb-8">
                <div className="absolute top-0 right-0 p-32 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-center">
                    <div className="inline-block bg-white/20 p-4 rounded-full mb-4 animate-bounce">
                        <School size={48} />
                    </div>
                    <h2 className="text-3xl font-black mb-4">سؤال للنقاش (صفحة 109) 🤔</h2>
                    <p className="text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-6">
                        "تخيل مدرسة بلا قوانين... كيف سيكون الحال؟ <br/>
                        <strong>ما الذي يضمن النظام والانضباط داخل المدرسة؟</strong>"
                    </p>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl inline-block text-left">
                        <ul className="list-disc list-inside text-sm md:text-base space-y-2">
                            <li>لائحة شؤون الطلاب؟ ✅</li>
                            <li>قوانين الفصل؟ ✅</li>
                            <li>احترام المعلمين؟ ✅</li>
                        </ul>
                    </div>
                    <p className="mt-6 text-sm opacity-90">
                        تماماً مثل المدرسة، الدولة تحتاج إلى قانون أعلى ينظمها... وهو <strong>النظام الأساسي للدولة</strong>.
                    </p>
                    <button 
                        onClick={() => setShowSchoolAnalogy(false)}
                        className="mt-6 bg-white text-indigo-700 px-6 py-2 rounded-full font-bold hover:bg-indigo-50 transition-colors"
                    >
                        ابدأ الدرس
                    </button>
                </div>
            </div>
        )}

        {/* Objectives */}
        <div className="bg-teal-50 border-r-4 border-teal-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2 mb-4">
            <Target className="text-teal-600" />
            أهداف الدرس: بنهاية هذا الدرس ستكون قادراً على أن:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-teal-800 font-medium">
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-teal-200 rounded-full flex justify-center items-center text-sm">1</span> تعرف المقصود بالنظام الأساسي للدولة.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-teal-200 rounded-full flex justify-center items-center text-sm">2</span> تعدد أبواب النظام الأساسي للدولة.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-teal-200 rounded-full flex justify-center items-center text-sm">3</span> تناقش أهمية وجود مرتكزات واضحة لنظام الحكم.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-teal-200 rounded-full flex justify-center items-center text-sm">4</span> تصنف المبادئ الموجهة لسياسة الدولة.</li>
            </ul>
        </div>

        {/* Definition Concept */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 p-32 bg-teal-100 opacity-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 text-center">
                <div className="inline-block bg-teal-100 p-4 rounded-full mb-4 text-teal-600">
                    <Compass size={48} />
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-4">النظام الأساسي: بوصلة الوطن</h2>
                
                {/* Intro Context from Page 111 */}
                <p className="text-slate-500 text-sm mb-4 max-w-2xl mx-auto italic">
                    "مرت سلطنة عمان عبر تاريخها الطويل بأنظمة سياسية مختلفة حافظت على بنية الدولة، وتشترك هذه الأنظمة في التأكيد على الوحدة الوطنية واستقلال الدولة ورفضها التبعية السياسية لأي قوى خارجية مهما كان حجمها وقوتها."
                </p>

                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed border-t pt-4 border-slate-100">
                    هو <span className="font-bold text-teal-700">وثيقة رسمية مكتوبة</span> تضم مجموعة من الفصول والمواد، توضح الإطار العام الذي تقوم عليه الدولة، ونظام الحكم فيها، وتبين الحقوق والواجبات.
                </p>
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-600 flex items-center gap-2"><Flag size={16}/> يحدد شكل الدولة</span>
                    <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-600 flex items-center gap-2"><Scroll size={16}/> ينظم السلطات</span>
                </div>
            </div>
        </div>

        {/* Historical Timeline */}
        <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 text-center">التطور التاريخي للنظام الأساسي</h3>
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block"></div>
                
                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    {/* 1996 */}
                    <button 
                        onClick={() => setActiveYear(1996)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 text-center group ${activeYear === 1996 ? 'bg-teal-600 text-white scale-105 shadow-xl border-teal-600' : 'bg-white border-slate-200 text-slate-600 hover:border-teal-300'}`}
                    >
                        <CalendarCheck size={32} className={activeYear === 1996 ? 'text-teal-200' : 'text-teal-600'} />
                        <span className="text-2xl font-black">1996م</span>
                        <p className="text-sm opacity-90">صدور أول نظام أساسي في عهد السلطان قابوس بن سعيد -طيب الله ثراه-.</p>
                    </button>

                    {/* 2011 */}
                    <button 
                        onClick={() => setActiveYear(2011)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 text-center group ${activeYear === 2011 ? 'bg-teal-600 text-white scale-105 shadow-xl border-teal-600' : 'bg-white border-slate-200 text-slate-600 hover:border-teal-300'}`}
                    >
                        <CalendarCheck size={32} className={activeYear === 2011 ? 'text-teal-200' : 'text-teal-600'} />
                        <span className="text-2xl font-black">2011م</span>
                        <p className="text-sm opacity-90">إجراء تعديلات على النظام الأساسي للدولة.</p>
                    </button>

                    {/* 2021 */}
                    <button 
                        onClick={() => setActiveYear(2021)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 text-center group ${activeYear === 2021 ? 'bg-teal-600 text-white scale-105 shadow-xl border-teal-600' : 'bg-white border-slate-200 text-slate-600 hover:border-teal-300'}`}
                    >
                        <CalendarCheck size={32} className={activeYear === 2021 ? 'text-teal-200' : 'text-teal-600'} />
                        <span className="text-2xl font-black">2021م</span>
                        <p className="text-sm opacity-90">صدور النظام الأساسي الحالي (مرسوم 6/2021) في عهد السلطان هيثم بن طارق -حفظه الله-.</p>
                    </button>
                </div>
            </div>
        </div>

        {/* Text Analysis Activity (Page 112) */}
        <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 mt-8">
            <div className="flex items-center gap-3 mb-4 border-b pb-4 border-slate-200">
                <div className="bg-slate-200 p-2 rounded-full"><Scroll size={24} className="text-slate-700"/></div>
                <h3 className="text-xl font-bold text-slate-800">نشاط: حلل النص (صفحة 112)</h3>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-inner mb-6 text-center italic text-slate-700 leading-relaxed border-l-4 border-teal-500">
                "إنه تأكيد للمبادئ التي قامت عليها سلطنة عمان... وترسيخاً لمكانة عمان الدولية، ودورها في إرساء أسس العدالة... وبناء على ما تقتضيه المصلحة العامة رسمنا بما هو آت..."
                <br/><span className="text-xs font-bold not-italic text-slate-400 mt-2 block">- من مرسوم سلطاني رقم 6/2021 بإصدار النظام الأساسي -</span>
            </div>

            <h4 className="font-bold text-slate-700 mb-4 text-center">أهمية النظام الأساسي لكل من:</h4>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center">
                    <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-red-600"><Users size={20}/></div>
                    <h5 className="font-bold text-red-800 mb-2">الأفراد</h5>
                    <p className="text-xs text-red-700">صون الحقوق والحريات، المشاركة في صنع المستقبل، الشعور بالأمن والعدالة.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
                    <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600"><Building2 size={20}/></div>
                    <h5 className="font-bold text-green-800 mb-2">المجتمع المحلي</h5>
                    <p className="text-xs text-green-700">حماية النسيج الاجتماعي، الوحدة الوطنية، تعزيز مبادئ الشورى.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600"><Globe size={20}/></div>
                    <h5 className="font-bold text-blue-800 mb-2">العلاقات الخارجية</h5>
                    <p className="text-xs text-blue-700">ترسيخ مكانة عمان الدولية، إرساء أسس العدالة والسلام بين الشعوب.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StatuteIntro;