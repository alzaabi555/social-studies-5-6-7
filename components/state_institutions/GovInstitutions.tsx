import React, { useState } from 'react';
import { Building2, Users, Scale, Laptop, Heart, GraduationCap, Quote, MessageCircle } from 'lucide-react';

const GovInstitutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'exec' | 'legis' | 'judic'>('exec');

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-lg mx-auto mb-6">
            <button onClick={() => setActiveTab('exec')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'exec' ? 'bg-white shadow text-cyan-700' : 'text-slate-500'}`}>التنفيذية</button>
            <button onClick={() => setActiveTab('legis')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'legis' ? 'bg-white shadow text-yellow-700' : 'text-slate-500'}`}>التشريعية</button>
            <button onClick={() => setActiveTab('judic')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'judic' ? 'bg-white shadow text-rose-700' : 'text-slate-500'}`}>القضائية</button>
        </div>

        <div className="min-h-[400px]">
            {/* Executive Content */}
            {activeTab === 'exec' && (
                <div className="animate-slide-up space-y-6">
                    <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-200">
                        <h3 className="text-xl font-bold text-cyan-900 mb-4 flex items-center gap-2">
                            <Building2 /> مؤسسات السلطة التنفيذية
                        </h3>
                        <ul className="space-y-3">
                            <li className="bg-white p-3 rounded-lg shadow-sm">
                                <span className="font-bold block text-cyan-800">1. مجلس الوزراء:</span>
                                <span className="text-sm text-slate-600">يترأسه السلطان، وهو الهيئة المكلفة بتنفيذ السياسات العامة.</span>
                            </li>
                            <li className="bg-white p-3 rounded-lg shadow-sm">
                                <span className="font-bold block text-cyan-800">2. الوزارات:</span>
                                <span className="text-sm text-slate-600">مثل وزارة التربية والتعليم، وزارة الصحة، وزارة الدفاع.</span>
                            </li>
                            <li className="bg-white p-3 rounded-lg shadow-sm">
                                <span className="font-bold block text-cyan-800">3. المجالس المتخصصة:</span>
                                <span className="text-sm text-slate-600">مثل صندوق الحماية الاجتماعية، وهيئة البيئة.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Oman Accomplishment: Tajawob */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-lg flex items-center gap-6">
                        <div className="bg-white/20 p-4 rounded-full">
                            <Laptop size={32} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-yellow-300 mb-1">منجز عماني: منصة "تجاوب"</h4>
                            <p className="text-sm opacity-90 leading-relaxed">
                                أطلقت سلطنة عمان هذه المنصة لتحسين تجربة المستفيدين من الخدمات الحكومية وتعزيز التواصل والمشاركة المجتمعية.
                            </p>
                        </div>
                    </div>

                    {/* Discussion (Page 121) */}
                    <div className="bg-white border-l-4 border-cyan-500 p-4 rounded-r-lg shadow-sm">
                        <h4 className="font-bold text-cyan-900 flex items-center gap-2 mb-2"><MessageCircle size={18}/> ناقش (صفحة 121):</h4>
                        <p className="text-sm text-slate-700">
                            ورد في النظام الأساسي للدولة أن السلطان "رمز للوحدة الوطنية". ناقش هذه العبارة.
                        </p>
                    </div>
                </div>
            )}

            {/* Legislative Content */}
            {activeTab === 'legis' && (
                <div className="animate-slide-up space-y-6">
                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                        <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
                            <Users /> مجلس عُمان (السلطة التشريعية)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-yellow-500">
                                <h4 className="font-bold text-lg mb-2">مجلس الدولة</h4>
                                <ul className="text-sm text-slate-600 list-disc list-inside">
                                    <li>يعين أعضاؤه بمرسوم سلطاني.</li>
                                    <li>يضم خبرات وكفاءات وطنية.</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-orange-500">
                                <h4 className="font-bold text-lg mb-2">مجلس الشورى</h4>
                                <ul className="text-sm text-slate-600 list-disc list-inside">
                                    <li>ينتخب أعضاؤه من قبل المواطنين.</li>
                                    <li>يمثل ولايات السلطنة كافة.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Knowledge Window: Charitable Org */}
                    <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-green-500 flex gap-4">
                        <div className="text-green-600 bg-green-50 p-3 rounded-full h-fit"><Heart /></div>
                        <div>
                            <h4 className="font-bold text-green-800">نافذة المعرفة: الهيئة العمانية للأعمال الخيرية</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                مؤسسة تابعة للسلطة التنفيذية، تتمتع بالاستقلال المالي والإداري. هدفها تقديم خدمات إنسانية داخل السلطنة وخارجها.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Judicial Content */}
            {activeTab === 'judic' && (
                <div className="animate-slide-up space-y-6">
                    <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200">
                        <h3 className="text-xl font-bold text-rose-900 mb-4 flex items-center gap-2">
                            <Scale /> مؤسسات السلطة القضائية
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded-lg shadow-sm border-r-4 border-rose-400">
                                <span className="font-bold text-rose-800 block">المجلس الأعلى للقضاء:</span>
                                <span className="text-sm text-slate-600">أعلى جهة قضائية، يرأسها السلطان، ويشرف على شؤون القضاء واستقلاله.</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-sm border-r-4 border-rose-400">
                                <span className="font-bold text-rose-800 block">المحاكم:</span>
                                <span className="text-sm text-slate-600">تشمل المحكمة العليا، محاكم الاستئناف، والمحاكم الابتدائية.</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-sm border-r-4 border-rose-400">
                                <span className="font-bold text-rose-800 block">الادعاء العام:</span>
                                <span className="text-sm text-slate-600">يتولى الدعوى العمومية باسم المجتمع.</span>
                            </div>
                        </div>
                    </div>

                    {/* Knowledge Window: Institute */}
                    <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg flex gap-4 items-center">
                        <div className="bg-slate-700 p-3 rounded-full"><GraduationCap /></div>
                        <div>
                            <h4 className="font-bold text-yellow-400">المعهد العالي للقضاء (أنشئ 2010م)</h4>
                            <p className="text-sm text-slate-300 mt-1">
                                يهدف لتأهيل القضاة ومعاوني الادعاء العام، ورفع كفاءتهم وتدريبهم وتنمية البحث العلمي القانوني.
                            </p>
                        </div>
                    </div>

                    {/* Royal Quote (Page 123) */}
                    <div className="bg-gradient-to-r from-red-50 to-rose-100 p-6 rounded-2xl border border-rose-200 relative overflow-hidden mt-4">
                        <Quote className="absolute top-4 left-4 text-rose-300 w-12 h-12 opacity-50" />
                        <h4 className="text-rose-900 font-black mb-3">من النطق السامي (نوفمبر 2020م):</h4>
                        <p className="text-rose-800 text-sm leading-relaxed italic font-serif">
                            "إن العمل مستمر في مراجعة الجوانب التشريعية والرقابية وتطوير أدوات المساءلة والمحاسبة؛ لتكون ركيزة أساسية من ركائز عمان المستقبل، مؤكدين على أهميتها الحاسمة في صون حقوق الوطن والمواطنين..."
                        </p>
                        <p className="text-rose-700 text-xs mt-2 font-bold text-left">- السلطان هيثم بن طارق حفظه الله -</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default GovInstitutions;