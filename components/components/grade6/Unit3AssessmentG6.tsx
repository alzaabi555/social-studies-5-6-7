
import React, { useState } from 'react';
import { ArrowRight, Building2, Heart, CheckCircle2 } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit3AssessmentG6: React.FC<Props> = ({ onBack }) => {
  // Q1 State
  const [q1Selection, setQ1Selection] = useState<string | null>(null);
  // Q2 State
  const [q2Answer, setQ2Answer] = useState<string | null>(null);
  // Q3 State
  const [q3Items, setQ3Items] = useState([
      { id: 1, text: 'جمعية البيئة العمانية', type: 'civil' },
      { id: 2, text: 'شرطة عمان السلطانية', type: 'gov' },
      { id: 3, text: 'جمعية النور للمكفوفين', type: 'civil' },
      { id: 4, text: 'وزارة الصحة', type: 'gov' }
  ]);
  const [q3Status, setQ3Status] = useState<{[key: number]: 'civil' | 'gov' | null}>({});

  const handleQ3Sort = (id: number, type: 'civil' | 'gov') => {
      setQ3Status(prev => ({ ...prev, [id]: type }));
  };

  return (
    <div className="min-h-screen bg-purple-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-purple-600 text-lg"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl md:text-2xl font-black text-purple-800">تقويم الوحدة الثالثة: المجتمع المدني</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-12 pb-20">
            
            {/* Q1: Concept */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-purple-100 p-5 border-b border-purple-200">
                    <span className="font-black text-purple-900 text-xl">1. أكمل الفراغ:</span>
                </div>
                <div className="p-8">
                    <p className="text-lg font-bold text-slate-800 mb-4 leading-loose">
                        "مؤسسات المجتمع المدني هي جمعيات أهلية تطوعية لا تهدف إلى <span className="inline-block w-32 border-b-2 border-purple-400 mx-2 text-center text-purple-600">{q1Selection || '.....'}</span>."
                    </p>
                    <div className="flex gap-4">
                        {['الربح المادي', 'خدمة المجتمع', 'التنظيم'].map(opt => (
                            <button
                                key={opt}
                                onClick={() => setQ1Selection(opt)}
                                className={`px-6 py-2 rounded-xl border-2 font-bold transition-all ${q1Selection === opt ? (opt === 'الربح المادي' ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900') : 'bg-white border-slate-200'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Q2: Responsibility */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-blue-100 p-5 border-b border-blue-200">
                    <span className="font-black text-blue-900 text-xl">2. من الجهة المسؤولة عن إشهار الجمعيات؟</span>
                </div>
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['وزارة التربية', 'وزارة التنمية الاجتماعية', 'وزارة الداخلية'].map(opt => (
                            <button
                                key={opt}
                                onClick={() => setQ2Answer(opt)}
                                className={`p-4 rounded-xl border-2 font-bold transition-all ${q2Answer === opt ? (opt === 'وزارة التنمية الاجتماعية' ? 'bg-green-100 border-green-500 text-green-900 shadow-md transform scale-105' : 'bg-red-100 border-red-500 text-red-900') : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Q3: Classification */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-teal-100 p-5 border-b border-teal-200">
                    <span className="font-black text-teal-900 text-xl">3. صنف المؤسسات التالية:</span>
                </div>
                <div className="p-8">
                    <div className="grid gap-4">
                        {q3Items.map((item) => {
                            const status = q3Status[item.id];
                            const isCorrect = status === item.type;
                            
                            return (
                                <div key={item.id} className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <span className="font-bold text-slate-800">{item.text}</span>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleQ3Sort(item.id, 'gov')}
                                            className={`px-4 py-1 rounded-lg text-sm font-bold border transition-colors ${status === 'gov' ? (item.type === 'gov' ? 'bg-green-500 text-white border-green-500' : 'bg-red-500 text-white border-red-500') : 'bg-white border-slate-300'}`}
                                        >
                                            حكومية 🏛️
                                        </button>
                                        <button 
                                            onClick={() => handleQ3Sort(item.id, 'civil')}
                                            className={`px-4 py-1 rounded-lg text-sm font-bold border transition-colors ${status === 'civil' ? (item.type === 'civil' ? 'bg-green-500 text-white border-green-500' : 'bg-red-500 text-white border-red-500') : 'bg-white border-slate-300'}`}
                                        >
                                            مجتمع مدني 🤝
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Reflection */}
            <div className="bg-yellow-50 p-6 rounded-2xl border-l-8 border-yellow-400 shadow-sm">
                <h4 className="font-bold text-yellow-900 text-lg mb-2 flex items-center gap-2"><Heart className="text-red-500 fill-red-500" /> وقفة تأمل:</h4>
                <p className="text-yellow-800">
                    العمل التطوعي يعود بالنفع على الفرد والمجتمع. هل سبق لك المشاركة في عمل تطوعي؟ وكيف كان شعورك؟
                </p>
                <textarea className="w-full mt-3 p-3 rounded-lg border border-yellow-300 bg-white/50 focus:bg-white transition-colors" placeholder="اكتب تجربتك هنا..."></textarea>
            </div>

        </div>
    </div>
  );
};

export default Unit3AssessmentG6;
