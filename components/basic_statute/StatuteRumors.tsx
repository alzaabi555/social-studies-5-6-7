import React, { useState } from 'react';
import { MessageCircle, AlertTriangle, Search, CheckCircle } from 'lucide-react';

const StatuteRumors: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">استنتج (صفحة 116)</h2>
            <p className="text-slate-500">نشاط تحليلي حول التعامل مع المعلومات ومصادرها</p>
        </div>

        {/* The Scenario */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-slate-100 p-6 border-b border-slate-200">
                <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                        <MessageCircle size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">الموقف: قصة بدر</h3>
                        <p className="text-slate-700 leading-relaxed">
                            "سمع بدر من أحد زملائه في المدرسة معلومة عن حدث وقع في إحدى المحافظات. 
                            وفي طريق العودة سمع الكثير من الأشخاص يتحدثون عن الحادثة، ولكن <strong>كل شخص يحكي تفاصيل مختلفة</strong> عن الآخر. 
                            وعندما وصل المنزل قرأ في أحد مواقع التواصل الاجتماعي عن الخبر نفسه، ولكن <strong>بتفاصيل مختلفة أيضاً، ودون أن يذكر مصدر الخبر</strong> الذي قام بنشره."
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h4 className="font-bold text-slate-800 mb-4 text-center">تحليل الموقف: اضغط للكشف عن الإجابة</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Problem */}
                    <div 
                        onClick={() => setStep(1)}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${step >= 1 ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-dashed border-slate-300 hover:border-slate-400'}`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className={step >= 1 ? "text-red-500" : "text-slate-400"} size={20} />
                            <span className="font-bold text-slate-700">1. المشكلة</span>
                        </div>
                        {step >= 1 ? (
                            <p className="text-sm text-red-700 animate-fade-in">انتشار الإشاعات وتضارب المعلومات (أخبار كاذبة/مجهولة المصدر).</p>
                        ) : (
                            <p className="text-xs text-slate-400">اضغط للكشف</p>
                        )}
                    </div>

                    {/* Causes */}
                    <div 
                        onClick={() => setStep(2)}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${step >= 2 ? 'bg-orange-50 border-orange-200' : 'bg-slate-50 border-dashed border-slate-300 hover:border-slate-400'}`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Search className={step >= 2 ? "text-orange-500" : "text-slate-400"} size={20} />
                            <span className="font-bold text-slate-700">2. الأسباب</span>
                        </div>
                        {step >= 2 ? (
                            <p className="text-sm text-orange-700 animate-fade-in">النقل دون تثبت، غياب المصدر الرسمي، وسرعة النشر عبر التواصل الاجتماعي.</p>
                        ) : (
                            <p className="text-xs text-slate-400">اضغط للكشف</p>
                        )}
                    </div>

                    {/* Results */}
                    <div 
                        onClick={() => setStep(3)}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${step >= 3 ? 'bg-yellow-50 border-yellow-200' : 'bg-slate-50 border-dashed border-slate-300 hover:border-slate-400'}`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className={step >= 3 ? "text-yellow-600" : "text-slate-400"} size={20} />
                            <span className="font-bold text-slate-700">3. النتائج والآثار</span>
                        </div>
                        {step >= 3 ? (
                            <p className="text-sm text-yellow-800 animate-fade-in">إثارة الفوضى والقلق في المجتمع، ضياع الحقيقة، والإضرار بسمعة الأفراد أو المؤسسات.</p>
                        ) : (
                            <p className="text-xs text-slate-400">اضغط للكشف</p>
                        )}
                    </div>

                    {/* Solutions */}
                    <div 
                        onClick={() => setStep(4)}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${step >= 4 ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-dashed border-slate-300 hover:border-slate-400'}`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className={step >= 4 ? "text-green-500" : "text-slate-400"} size={20} />
                            <span className="font-bold text-slate-700">4. الحلول</span>
                        </div>
                        {step >= 4 ? (
                            <p className="text-sm text-green-700 animate-fade-in">التثبت من المصادر الرسمية (وكالة الأنباء، الحسابات الحكومية)، عدم نشر ما يجهل مصدره، والوعي القانوني.</p>
                        ) : (
                            <p className="text-xs text-slate-400">اضغط للكشف</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StatuteRumors;