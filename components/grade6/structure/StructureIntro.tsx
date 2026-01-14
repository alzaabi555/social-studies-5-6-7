import React, { useState } from 'react';
import { Target, Users, ArrowDown } from 'lucide-react';

const StructureIntro: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-8">
        {/* Objectives - Page 25 */}
        <div className="bg-emerald-50 border-r-4 border-emerald-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <Target size={28}/> أهداف الدرس:
            </h3>
            <ul className="grid gap-4 text-emerald-900 font-medium text-lg leading-relaxed">
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> تتعرف على مفهوم البنية السكانية وأنواعها.</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> تستنتج العوامل المؤثرة في التركيب النوعي.</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> تقرأ وتحلل الهرم السكاني لسلطنة عمان.</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> تصنف السكان حسب التركيب العمري والاقتصادي.</li>
            </ul>
        </div>

        {/* Concept Hook - Based on Page 25 Images */}
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-emerald-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-slate-800 mb-4">ماذا تلاحظ في الصور؟ (صفحة 25)</h2>
                <p className="text-xl text-slate-600">المجتمع يتكون من فئات مختلفة.. هل يمكنك تمييزها؟</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:scale-105 transition-transform">
                    <div className="text-7xl mb-4">👵👴</div>
                    <p className="font-bold text-xl text-slate-800">الصورة (ج)</p>
                    <p className="text-lg text-slate-500 mt-2">كبار السن</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:scale-105 transition-transform">
                    <div className="text-7xl mb-4">👨‍💼👩‍💼</div>
                    <p className="font-bold text-xl text-slate-800">الصورة (ب)</p>
                    <p className="text-lg text-slate-500 mt-2">الشباب (العاملون)</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:scale-105 transition-transform">
                    <div className="text-7xl mb-4">👦👧</div>
                    <p className="font-bold text-xl text-slate-800">الصورة (أ)</p>
                    <p className="text-lg text-slate-500 mt-2">صغار السن</p>
                </div>
            </div>

            <div className="bg-emerald-100 p-8 rounded-2xl inline-block text-emerald-900 text-xl leading-loose shadow-sm border border-emerald-200 max-w-3xl">
                <p className="font-black mb-2 text-2xl">💡 تعريف البنية السكانية:</p>
                "هي دراسة السكان من حيث التركيب العمري، والنوعي، والحالة الاقتصادية والاجتماعية."
            </div>
        </div>
    </div>
  );
};

export default StructureIntro;