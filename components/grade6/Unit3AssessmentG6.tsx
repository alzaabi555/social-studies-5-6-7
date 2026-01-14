
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Scale, Crown } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit3AssessmentG6: React.FC<Props> = ({ onBack }) => {
  const [q1Answers, setQ1Answers] = useState<{[key: number]: string}>({});
  const q1Correct = { 1: 'وزارة التنمية الاجتماعية', 2: 'جمعيات المرأة العمانية' };
  const handleQ1Select = (id: number, val: string) => setQ1Answers(prev => ({ ...prev, [id]: val }));

  return (
    <div className="min-h-screen bg-purple-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-purple-600 text-lg"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl md:text-2xl font-black text-purple-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثالثة)</h1>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-10 pb-20">
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-purple-100 p-6 border-b border-purple-200 flex items-center gap-4"><span className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">1</span><h3 className="font-black text-xl text-purple-900">أكتب اسم الجهة المختصة:</h3></div>
                <div className="p-8 space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 border-b border-slate-100 pb-6"><p className="flex-1 text-slate-700 font-bold text-lg">الإشراف على مؤسسات المجتمع المدني.</p><select onChange={(e) => handleQ1Select(1, e.target.value)} className="p-3 rounded-xl border-2 font-bold"><option value="">اختر...</option><option value="وزارة التنمية الاجتماعية">وزارة التنمية الاجتماعية</option></select></div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default Unit3AssessmentG6;
