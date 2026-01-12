import React from 'react';
import { Target, Building, Stethoscope, School, GraduationCap } from 'lucide-react';

const StateIntro: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Objectives */}
        <div className="bg-cyan-50 border-r-4 border-cyan-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-cyan-900 flex items-center gap-2 mb-4">
            <Target className="text-cyan-600" />
            أهداف الدرس: بنهاية هذا الدرس ستكون قادراً على أن:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-cyan-800 font-medium">
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-cyan-200 rounded-full flex justify-center items-center text-sm">1</span> تشرح الهيكل التنظيمي للدولة (السلطات الثلاث).</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-cyan-200 rounded-full flex justify-center items-center text-sm">2</span> تميز بين اختصاصات السلطات العامة.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-cyan-200 rounded-full flex justify-center items-center text-sm">3</span> ترسم خريطة ذهنية لبعض المؤسسات الحكومية.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-cyan-200 rounded-full flex justify-center items-center text-sm">4</span> تستنتج الخدمات التي تقدمها المؤسسات الحكومية.</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 bg-cyan-200 rounded-full flex justify-center items-center text-sm">5</span> تقدر دور المؤسسات الحكومية في خدمة الوطن والمواطن.</li>
            </ul>
        </div>

        {/* Concept Introduction - Page 117 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center">
            <h2 className="text-2xl font-black text-slate-800 mb-6">من يقدم لنا هذه الخدمات؟</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-2xl flex flex-col items-center gap-3 hover:scale-105 transition-transform border border-blue-100">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                        <Stethoscope size={40} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-blue-900">المراكز الصحية والمستشفيات</h3>
                    <p className="text-sm text-blue-700">تقدم الرعاية الطبية والعلاج للمواطنين.</p>
                    <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mt-2">جهة حكومية (وزارة الصحة)</span>
                </div>

                <div className="bg-orange-50 p-6 rounded-2xl flex flex-col items-center gap-3 hover:scale-105 transition-transform border border-orange-100">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                        <School size={40} className="text-orange-600" />
                    </div>
                    <h3 className="font-bold text-orange-900">المدارس الحكومية</h3>
                    <p className="text-sm text-orange-700">توفر التعليم المجاني للطلاب في جميع المراحل.</p>
                    <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-bold mt-2">جهة حكومية (وزارة التربية والتعليم)</span>
                </div>
            </div>
            
            <div className="mt-8 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-slate-600 font-medium">
                    يتعامل المواطن يومياً مع العديد من الجهات.. معظم الخدمات الأساسية كالتعليم والصحة والأمن تقدمها <span className="font-bold text-cyan-700">مؤسسات حكومية</span> تابعة للدولة.
                </p>
            </div>
        </div>
    </div>
  );
};

export default StateIntro;