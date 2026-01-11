import React, { useState } from 'react';
import { Scale, FileText, Gavel, UserCheck, Users, Briefcase, FileSearch } from 'lucide-react';

const StateStructure: React.FC = () => {
  const [activePower, setActivePower] = useState<'legislative' | 'executive' | 'judicial' | null>(null);

  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center mb-4">
            <h2 className="text-2xl font-black text-slate-800 mb-2">الهيكل التنظيمي للدولة (السلطات الثلاث)</h2>
            <p className="text-slate-500">ينقسم الهيكل التنظيمي إلى ثلاث سلطات عامة، لكل منها اختصاصات محددة.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            
            {/* Executive Power */}
            <div 
                onClick={() => setActivePower('executive')}
                className={`cursor-pointer rounded-2xl p-6 border-b-8 transition-all duration-300 relative overflow-hidden group ${activePower === 'executive' ? 'bg-cyan-100 border-cyan-600 shadow-xl scale-105' : 'bg-white border-cyan-200 hover:bg-cyan-50'}`}
            >
                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div className="bg-cyan-600 text-white p-4 rounded-full shadow-lg">
                        <Briefcase size={32} />
                    </div>
                    <h3 className="text-xl font-black text-cyan-900">السلطة التنفيذية</h3>
                    
                    {activePower === 'executive' ? (
                        <div className="text-sm text-cyan-800 space-y-4 animate-fade-in">
                            <div className="bg-white/60 p-3 rounded-lg">
                                <strong>الاختصاصات:</strong>
                                <p>رسم السياسات العامة للدولة وتنفيذها، وإدارة الجهاز الحكومي.</p>
                            </div>
                            <div className="bg-white/60 p-3 rounded-lg">
                                <strong>يمثلها:</strong>
                                <ul className="list-disc list-inside">
                                    <li>مجلس الوزراء</li>
                                    <li>المجالس واللجان والهيئات المتخصصة</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <p className="text-xs text-cyan-600 mt-2">اضغط للتفاصيل</p>
                    )}
                </div>
            </div>

            {/* Legislative Power */}
            <div 
                onClick={() => setActivePower('legislative')}
                className={`cursor-pointer rounded-2xl p-6 border-b-8 transition-all duration-300 relative overflow-hidden group ${activePower === 'legislative' ? 'bg-yellow-100 border-yellow-500 shadow-xl scale-105' : 'bg-white border-yellow-200 hover:bg-yellow-50'}`}
            >
                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div className="bg-yellow-500 text-white p-4 rounded-full shadow-lg">
                        <FileText size={32} />
                    </div>
                    <h3 className="text-xl font-black text-yellow-900">السلطة التشريعية</h3>
                    
                    {activePower === 'legislative' ? (
                        <div className="text-sm text-yellow-800 space-y-4 animate-fade-in">
                            <div className="bg-white/60 p-3 rounded-lg">
                                <strong>الاختصاصات:</strong>
                                <p>إقرار أو تعديل مشروعات القوانين، ومناقشة خطط التنمية والميزانية العامة.</p>
                            </div>
                            <div className="bg-white/60 p-3 rounded-lg">
                                <strong>يمثلها:</strong>
                                <p>مجلس عُمان (الدولة والشورى)</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-xs text-yellow-600 mt-2">اضغط للتفاصيل</p>
                    )}
                </div>
            </div>

            {/* Judicial Power */}
            <div 
                onClick={() => setActivePower('judicial')}
                className={`cursor-pointer rounded-2xl p-6 border-b-8 transition-all duration-300 relative overflow-hidden group ${activePower === 'judicial' ? 'bg-rose-100 border-rose-600 shadow-xl scale-105' : 'bg-white border-rose-200 hover:bg-rose-50'}`}
            >
                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div className="bg-rose-600 text-white p-4 rounded-full shadow-lg">
                        <Scale size={32} />
                    </div>
                    <h3 className="text-xl font-black text-rose-900">السلطة القضائية</h3>
                    
                    {activePower === 'judicial' ? (
                        <div className="text-sm text-rose-800 space-y-4 animate-fade-in">
                            <div className="bg-white/60 p-3 rounded-lg">
                                <strong>الاختصاصات:</strong>
                                <p>حل النزاعات، وضمان تطبيق القوانين، وحماية الحقوق.</p>
                            </div>
                            <div className="bg-white/60 p-3 rounded-lg">
                                <strong>يمثلها:</strong>
                                <p>المجلس الأعلى للقضاء والمحاكم</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-xs text-rose-600 mt-2">اضغط للتفاصيل</p>
                    )}
                </div>
            </div>
        </div>

        {/* Text Analysis Activity (Page 120) */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-200 p-2 rounded-full text-slate-700">
                    <FileSearch size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">نشاط: حلل النص (صفحة 120)</h3>
            </div>
            
            <div className="bg-white p-5 rounded-xl border-l-4 border-cyan-500 shadow-sm mb-4 text-sm text-slate-700 leading-relaxed italic">
                "تسهم السلطات العامة بسلطنة عمان في تحقيق التوازن والاستقرار... والسعي لتحقيق رؤية عمان 2040... ويضمن النظام الأساسي استقلالية مرنة للسلطات العامة في ممارسة مهامها؛ مما يعزز الشفافية والمساءلة..."
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-100">
                    <h4 className="font-bold text-cyan-900 mb-2 text-sm">أ- الأهداف العامة للسلطات:</h4>
                    <ul className="list-disc list-inside text-xs text-cyan-800 space-y-1">
                        <li>تحقيق التوازن والاستقرار.</li>
                        <li>تحقيق العدالة.</li>
                        <li>تنفيذ رؤية عمان 2040.</li>
                    </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-2 text-sm">ب- أهمية الفصل والاستقلال المرن:</h4>
                    <p className="text-xs text-indigo-800">
                        يعزز الشفافية والمساءلة، ويحمي حقوق المواطنين.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StateStructure;