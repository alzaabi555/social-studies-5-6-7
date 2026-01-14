import React, { useState } from 'react';
import { User, CheckCircle, RefreshCcw, Calculator, ArrowDown } from 'lucide-react';

const AgeStructure: React.FC = () => {
  // Game State
  const [sortedCount, setSortedCount] = useState(0);
  const [people, setPeople] = useState([
      { id: 1, name: 'سعيد', age: 10, category: 'young' },
      { id: 2, name: 'خالد', age: 35, category: 'middle' },
      { id: 3, name: 'الجد محمد', age: 70, category: 'old' },
      { id: 4, name: 'سارة', age: 5, category: 'young' },
      { id: 5, name: 'مريم', age: 25, category: 'middle' },
  ]);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Apply Activity State
  const [calcStep, setCalcStep] = useState(0); // 0: intro, 1: young, 2: middle, 3: old, 4: done

  const handleSort = (personId: number, targetCategory: string) => {
      const person = people.find(p => p.id === personId);
      if (person && person.category === targetCategory) {
          setSortedCount(prev => prev + 1);
          setPeople(prev => prev.filter(p => p.id !== personId));
          setFeedback('correct');
          setTimeout(() => setFeedback(null), 500);
      } else {
          setFeedback('wrong');
          setTimeout(() => setFeedback(null), 500);
      }
  };

  const currentPerson = people[0];

  return (
    <div className="p-6 animate-fade-in space-y-12">
        <div className="text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-3">ثانياً: البنية العمرية</h2>
            <p className="text-xl text-slate-600">تصنيف السكان حسب فئات العمر إلى ثلاث مجموعات رئيسية</p>
        </div>

        {/* Sorting Game */}
        <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 shadow-inner">
            <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-2xl text-slate-800">لعبة فرز الأعمار (نشاط صنف صفحة 29)</h3>
                <div className="text-base font-bold bg-white px-4 py-2 rounded-full text-slate-600 shadow-sm">المتبقي: {people.length}</div>
            </div>

            {currentPerson ? (
                <div className="text-center mb-10">
                    <div className={`inline-block bg-white px-10 py-8 rounded-3xl shadow-xl border-b-8 border-indigo-500 transition-transform transform ${feedback === 'wrong' ? 'animate-shake bg-red-50' : ''} ${feedback === 'correct' ? 'scale-0' : 'scale-100'}`}>
                        <User size={64} className="mx-auto text-indigo-600 mb-4" />
                        <h4 className="text-3xl font-black text-slate-800 mb-2">{currentPerson.name}</h4>
                        <p className="text-slate-500 font-bold text-2xl">{currentPerson.age} سنة</p>
                    </div>
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="inline-block bg-green-100 p-6 rounded-full text-green-600 mb-6 animate-bounce">
                        <CheckCircle size={64} />
                    </div>
                    <h3 className="text-3xl font-black text-green-700 mb-2">أحسنت!</h3>
                    <p className="text-slate-600 text-lg mb-6">لقد قمت بتصنيف جميع الفئات بشكل صحيح.</p>
                    <button onClick={() => window.location.reload()} className="text-indigo-600 font-bold text-lg flex items-center justify-center gap-2 mx-auto px-6 py-2 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors"><RefreshCcw size={20}/> إعادة اللعبة</button>
                </div>
            )}

            <div className="grid md:grid-cols-3 gap-6">
                <button 
                    onClick={() => handleSort(currentPerson?.id, 'young')}
                    className="bg-green-100 hover:bg-green-200 p-6 rounded-2xl border-4 border-green-300 transition-all hover:-translate-y-1 flex flex-col items-center gap-3 shadow-md"
                >
                    <span className="text-4xl">👶</span>
                    <span className="font-black text-xl text-green-900">صغار السن</span>
                    <span className="text-sm font-bold text-green-700 bg-white/50 px-3 py-1 rounded-full">(أقل من 15 سنة)</span>
                </button>

                <button 
                    onClick={() => handleSort(currentPerson?.id, 'middle')}
                    className="bg-blue-100 hover:bg-blue-200 p-6 rounded-2xl border-4 border-blue-300 transition-all hover:-translate-y-1 flex flex-col items-center gap-3 shadow-md"
                >
                    <span className="text-4xl">👨‍🔧</span>
                    <span className="font-black text-xl text-blue-900">متوسطو السن</span>
                    <span className="text-sm font-bold text-blue-700 bg-white/50 px-3 py-1 rounded-full">(15 - 64 سنة)</span>
                </button>

                <button 
                    onClick={() => handleSort(currentPerson?.id, 'old')}
                    className="bg-orange-100 hover:bg-orange-200 p-6 rounded-2xl border-4 border-orange-300 transition-all hover:-translate-y-1 flex flex-col items-center gap-3 shadow-md"
                >
                    <span className="text-4xl">👴</span>
                    <span className="font-black text-xl text-orange-900">كبار السن</span>
                    <span className="text-sm font-bold text-orange-700 bg-white/50 px-3 py-1 rounded-full">(65 سنة فأكثر)</span>
                </button>
            </div>
        </div>

        {/* APPLY Activity (Page 30) */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-indigo-100 overflow-hidden">
            <div className="bg-indigo-600 p-8 text-white flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Calculator size={32} /> نشاط طَبّق (صفحة 30)
                </h3>
                <span className="text-sm font-bold bg-indigo-500 px-4 py-2 rounded-full border border-indigo-400">بيانات 2023م</span>
            </div>
            
            <div className="p-8">
                <p className="text-slate-700 mb-8 text-lg font-medium">
                    ادرس الجدول التالي الذي يوضح أعداد السكان، ثم احسب إجمالي السكان في كل فئة عمرية.
                </p>

                {/* Simplified Data Visualizer */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 max-h-64 overflow-y-auto text-sm font-mono shadow-inner">
                    <table className="w-full text-center">
                        <thead>
                            <tr className="border-b-2 border-slate-300 text-slate-600 bg-slate-100">
                                <th className="pb-3 pt-2 text-base">الفئة العمرية</th>
                                <th className="pb-3 pt-2 text-base">العدد</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-800 text-base">
                            <tr className="border-b border-slate-200"><td className="py-2">0-4</td><td className="font-bold">432,247</td></tr>
                            <tr className="border-b border-slate-200"><td className="py-2">5-9</td><td className="font-bold">462,759</td></tr>
                            <tr className="border-b border-slate-200"><td className="py-2">10-14</td><td className="font-bold">363,668</td></tr>
                            <tr><td colSpan={2} className="py-2 bg-slate-200/50 text-slate-500 italic">... (بقية الفئات) ...</td></tr>
                            <tr className="border-t border-slate-300"><td className="py-2 font-bold text-slate-600">65+</td><td className="text-slate-500">(مجموع الفئات العليا)</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="space-y-6">
                    {/* Step 1: Young */}
                    <div className={`p-6 rounded-2xl border-2 transition-all ${calcStep >= 1 ? 'bg-green-50 border-green-200 shadow-sm' : 'bg-white border-slate-100'}`}>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-xl text-slate-800">1. فئة صغار السن (0-14)</span>
                            {calcStep < 1 ? (
                                <button onClick={() => setCalcStep(1)} className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-base font-bold hover:bg-indigo-700 shadow transition-transform active:scale-95">احسب</button>
                            ) : (
                                <span className="font-black text-2xl text-green-700 animate-fade-in">1,258,674 نسمة</span>
                            )}
                        </div>
                        {calcStep >= 1 && <p className="text-base text-green-800 mt-2 font-medium">المجموع = (432,247 + 462,759 + 363,668)</p>}
                    </div>

                    {/* Step 2: Middle */}
                    <div className={`p-6 rounded-2xl border-2 transition-all ${calcStep >= 2 ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-white border-slate-100'}`}>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-xl text-slate-800">2. فئة متوسطي السن (15-64)</span>
                            {calcStep < 2 ? (
                                <button onClick={() => setCalcStep(2)} disabled={calcStep < 1} className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-base font-bold hover:bg-indigo-700 shadow disabled:opacity-50 transition-transform active:scale-95">احسب</button>
                            ) : (
                                <span className="font-black text-2xl text-blue-700 animate-fade-in">3,543,415 نسمة</span>
                            )}
                        </div>
                        {calcStep >= 2 && <p className="text-base text-blue-800 mt-2 font-medium">هذه هي الفئة المنتجة (القوى العاملة) وهي الأكبر عدداً.</p>}
                    </div>

                    {/* Step 3: Old */}
                    <div className={`p-6 rounded-2xl border-2 transition-all ${calcStep >= 3 ? 'bg-orange-50 border-orange-200 shadow-sm' : 'bg-white border-slate-100'}`}>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-xl text-slate-800">3. فئة كبار السن (65+)</span>
                            {calcStep < 3 ? (
                                <button onClick={() => setCalcStep(3)} disabled={calcStep < 2} className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-base font-bold hover:bg-indigo-700 shadow disabled:opacity-50 transition-transform active:scale-95">احسب</button>
                            ) : (
                                <span className="font-black text-2xl text-orange-700 animate-fade-in">131,761 نسمة</span>
                            )}
                        </div>
                        {calcStep >= 3 && <p className="text-base text-orange-800 mt-2 font-medium">تمثل أقل نسبة من السكان في السلطنة.</p>}
                    </div>
                </div>
            </div>
        </div>

        <style>{`
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            .animate-shake { animation: shake 0.3s ease-in-out; }
        `}</style>
    </div>
  );
};

export default AgeStructure;