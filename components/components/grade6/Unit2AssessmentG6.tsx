
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, HelpCircle, Map, RefreshCw } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit2AssessmentG6: React.FC<Props> = ({ onBack }) => {
  const [q1Answers, setQ1Answers] = useState<{[key: number]: boolean | null}>({});
  const [q2Selected, setQ2Selected] = useState<string | null>(null);
  const [q3Match, setQ3Match] = useState<{[key: string]: string}>({});
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  // Data
  const trueFalseQuestions = [
      { id: 1, text: 'استمر حكم الدولة الأموية 91 عاماً.', correct: true },
      { id: 2, text: 'مؤسس الدولة الأموية هو عبدالملك بن مروان.', correct: false }, // Muawiyah
      { id: 3, text: 'من أبرز منجزات الوليد بن عبدالملك بناء الجامع الأموي.', correct: true },
  ];

  const matchData = [
      { id: 'hajjaj', term: 'الحجاج بن يوسف', desc: 'قائد أموي أرسل حملات للسيطرة على عمان' },
      { id: 'khalil', term: 'الخليل بن أحمد', desc: 'عالم عماني وضع علم العروض' },
      { id: 'jabir', term: 'جابر بن زيد', desc: 'مؤسس المذهب الإباضي وأول من ألف في الفقه' },
  ];

  const handleTrueFalse = (id: number, answer: boolean) => {
      setQ1Answers(prev => ({ ...prev, [id]: answer }));
  };

  const handleMatch = (descId: string) => {
      if (selectedTerm === descId) {
          setQ3Match(prev => ({ ...prev, [descId]: 'matched' }));
          setSelectedTerm(null);
      }
  };

  return (
    <div className="min-h-screen bg-orange-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-orange-600 text-lg"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl md:text-2xl font-black text-orange-800">تقويم الوحدة الثانية: الدولة الأموية</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-10 pb-20">
            
            {/* Q1: True/False */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-orange-100 p-5 border-b border-orange-200 flex items-center gap-3">
                    <span className="font-black text-orange-800 text-xl">1. ضع علامة (✓) أو (✗):</span>
                </div>
                <div className="p-6 space-y-4">
                    {trueFalseQuestions.map((q) => (
                        <div key={q.id} className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="font-bold text-slate-800 text-lg">{q.text}</p>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => handleTrueFalse(q.id, true)}
                                    className={`px-6 py-2 rounded-lg font-bold border-2 transition-colors ${q1Answers[q.id] === true ? (q.correct ? 'bg-green-500 text-white border-green-500' : 'bg-red-500 text-white border-red-500') : 'bg-white border-slate-300 text-slate-500'}`}
                                >
                                    ✓
                                </button>
                                <button 
                                    onClick={() => handleTrueFalse(q.id, false)}
                                    className={`px-6 py-2 rounded-lg font-bold border-2 transition-colors ${q1Answers[q.id] === false ? (!q.correct ? 'bg-green-500 text-white border-green-500' : 'bg-red-500 text-white border-red-500') : 'bg-white border-slate-300 text-slate-500'}`}
                                >
                                    ✗
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Q2: Multiple Choice */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-teal-100 p-5 border-b border-teal-200">
                    <span className="font-black text-teal-800 text-xl">2. اختر الإجابة الصحيحة:</span>
                </div>
                <div className="p-6">
                    <h4 className="font-bold text-lg text-slate-800 mb-4">الدولة التي امتدت من الصين شرقاً إلى الأندلس غرباً هي:</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {['العباسية', 'الأموية', 'العثمانية', 'اليعربية'].map(opt => (
                            <button
                                key={opt}
                                onClick={() => setQ2Selected(opt)}
                                className={`p-4 rounded-xl border-2 font-bold transition-all ${q2Selected === opt ? (opt === 'الأموية' ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900') : 'bg-white border-slate-200 hover:border-teal-300'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Q3: Matching */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-indigo-100 p-5 border-b border-indigo-200">
                    <span className="font-black text-indigo-800 text-xl">3. صل الشخصية بالحدث المناسب:</span>
                </div>
                <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <h5 className="font-bold text-slate-500 mb-2">الشخصيات</h5>
                            {matchData.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setSelectedTerm(item.id)}
                                    disabled={q3Match[item.id] === 'matched'}
                                    className={`w-full p-3 rounded-lg border-2 font-bold transition-all ${q3Match[item.id] === 'matched' ? 'bg-green-100 border-green-300 opacity-50' : selectedTerm === item.id ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-white border-slate-200'}`}
                                >
                                    {item.term}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-3">
                            <h5 className="font-bold text-slate-500 mb-2">الإنجازات</h5>
                            {matchData.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => handleMatch(item.id)}
                                    className={`w-full p-3 rounded-lg border-2 font-medium transition-all cursor-pointer ${q3Match[item.id] === 'matched' ? 'bg-green-100 border-green-300 text-green-900' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                                >
                                    {item.desc}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
  );
};

export default Unit2AssessmentG6;
