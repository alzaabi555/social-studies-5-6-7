
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calculator, Scale, Users, FileText, HelpCircle, RefreshCw, XCircle } from 'lucide-react';

interface Unit1AssessmentG6Props {
    onBack: () => void;
}

const Unit1AssessmentG6: React.FC<Unit1AssessmentG6Props> = ({ onBack }) => {
  // --- State for Q1 (Concepts) ---
  const [q1Answers, setQ1Answers] = useState<{[key: number]: string}>({});
  const q1Correct = { 1: 'الكثافة السكانية', 2: 'التعداد السكاني', 3: 'النمو السكاني', 4: 'البنية السكانية' };
  
  // --- State for Q2 (Results) ---
  const [q2Selection, setQ2Selection] = useState<string | null>(null);
  const q2Correct = 'الضغط على الخدمات';

  // --- State for Q3 (Classification) ---
  const [q3Growth, setQ3Growth] = useState<string[]>([]);
  const [q3Dist, setQ3Dist] = useState<string[]>([]);
  const factorsPool = ['المواليد', 'المناخ', 'الهجرة', 'الأنشطة الاقتصادية', 'الوفيات', 'تضاريس السطح'];
  
  // --- State for Q4 (Math) ---
  const [mathAnswer1, setMathAnswer1] = useState(''); // Natural Increase
  const [mathAnswer2, setMathAnswer2] = useState(''); // Density
  const [mathFeedback, setMathFeedback] = useState<string | null>(null);

  // --- State for Q5 (Reasoning) ---
  const [q5Answer, setQ5Answer] = useState<string | null>(null);

  // --- Handlers ---
  const handleQ1Select = (id: number, val: string) => setQ1Answers(prev => ({ ...prev, [id]: val }));
  
  const handleQ3Move = (factor: string, target: 'growth' | 'dist') => {
      // Remove from existing lists first
      setQ3Growth(prev => prev.filter(f => f !== factor));
      setQ3Dist(prev => prev.filter(f => f !== factor));
      // Add to target
      if (target === 'growth') setQ3Growth(prev => [...prev, factor]);
      else setQ3Dist(prev => [...prev, factor]);
  };

  const checkMath = () => {
      // Q4-A: Natural Increase = Births (1500) - Deaths (500) = 1000
      // Q4-B: Density = Pop (5000) / Area (500) = 10
      const ans1 = parseInt(mathAnswer1);
      const ans2 = parseFloat(mathAnswer2);
      
      if (ans1 === 1000 && ans2 === 10) {
          setMathFeedback('correct');
      } else {
          setMathFeedback('wrong');
      }
  };

  return (
    <div className="min-h-screen bg-indigo-50 font-tajawal text-right flex flex-col" dir="rtl">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg transition-colors">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-2xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (شامل)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-12 pb-20">
            
            {/* Question 1: Concepts */}
            <section className="bg-white rounded-3xl shadow-md border-t-8 border-indigo-500 overflow-hidden">
                <div className="bg-indigo-50 p-6 flex items-center gap-4 border-b border-indigo-100">
                    <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-lg">1</span>
                    <h3 className="font-black text-xl text-indigo-900">أكتب المصطلح المناسب أمام العبارات:</h3>
                </div>
                <div className="p-8 space-y-6">
                    {[
                        {id: 1, text: 'عدد السكان في الكيلومتر المربع الواحد.'},
                        {id: 2, text: 'عملية حصر شامل للسكان والمساكن.'},
                        {id: 3, text: 'مقدار الزيادة في عدد السكان خلال فترة زمنية.'},
                        {id: 4, text: 'خصائص السكان من حيث العمر والنوع.'}
                    ].map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-4 border-b border-slate-100 pb-4 last:border-0">
                            <p className="flex-1 text-slate-700 font-bold text-lg">{item.text}</p>
                            <select 
                                onChange={(e) => handleQ1Select(item.id, e.target.value)} 
                                className={`p-3 rounded-xl border-2 font-bold w-full md:w-64 transition-colors outline-none focus:ring-2 focus:ring-indigo-300 ${q1Answers[item.id] === q1Correct[item.id as keyof typeof q1Correct] ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-300'}`}
                            >
                                <option value="">اختر المصطلح...</option>
                                <option value="التعداد السكاني">التعداد السكاني</option>
                                <option value="الكثافة السكانية">الكثافة السكانية</option>
                                <option value="النمو السكاني">النمو السكاني</option>
                                <option value="البنية السكانية">البنية السكانية</option>
                            </select>
                            {q1Answers[item.id] === q1Correct[item.id as keyof typeof q1Correct] && <CheckCircle className="text-green-500 animate-bounce" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* Question 2: Results */}
            <section className="bg-white rounded-3xl shadow-md border-t-8 border-rose-500 overflow-hidden">
                <div className="bg-rose-50 p-6 flex items-center gap-4 border-b border-rose-100">
                    <span className="bg-rose-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-lg">2</span>
                    <h3 className="font-black text-xl text-rose-900">ما النتيجة المترتبة على: زيادة السكان عن الموارد؟</h3>
                </div>
                <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                        {['حدوث رفاهية اجتماعية', 'الضغط على الخدمات', 'زيادة فرص العمل', 'انخفاض الكثافة السكانية'].map((opt) => (
                            <button
                                key={opt}
                                onClick={() => setQ2Selection(opt)}
                                className={`p-4 rounded-xl font-bold text-lg border-2 transition-all ${
                                    q2Selection === opt 
                                        ? opt === q2Correct ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900'
                                        : 'bg-slate-50 border-slate-200 hover:border-rose-300'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Question 3: Classification */}
            <section className="bg-white rounded-3xl shadow-md border-t-8 border-green-500 overflow-hidden">
                <div className="bg-green-50 p-6 flex items-center gap-4 border-b border-green-100">
                    <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-lg">3</span>
                    <h3 className="font-black text-xl text-green-900">صنّف العوامل التالية في الجدول:</h3>
                </div>
                <div className="p-8">
                    {/* Source Items */}
                    <div className="flex flex-wrap gap-3 justify-center mb-8 bg-slate-100 p-4 rounded-2xl min-h-[80px]">
                        {factorsPool.map(f => (
                            !q3Growth.includes(f) && !q3Dist.includes(f) && (
                                <div key={f} className="group relative">
                                    <div className="px-5 py-2 rounded-full font-bold shadow-sm bg-white border-2 border-slate-300 text-slate-700 flex gap-2 items-center">
                                        {f}
                                        <div className="flex gap-1 mr-2">
                                            <button onClick={() => handleQ3Move(f, 'growth')} className="w-6 h-6 bg-indigo-100 hover:bg-indigo-600 hover:text-white text-indigo-700 rounded-full flex items-center justify-center text-xs transition-colors" title="نمو">1</button>
                                            <button onClick={() => handleQ3Move(f, 'dist')} className="w-6 h-6 bg-teal-100 hover:bg-teal-600 hover:text-white text-teal-700 rounded-full flex items-center justify-center text-xs transition-colors" title="توزيع">2</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                        {factorsPool.every(f => q3Growth.includes(f) || q3Dist.includes(f)) && <span className="text-green-600 font-bold flex items-center gap-2"><CheckCircle/> تم تصنيف جميع العناصر</span>}
                    </div>

                    {/* Targets */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-6 min-h-[150px]">
                            <h4 className="font-black text-indigo-900 text-center mb-4 border-b border-indigo-200 pb-2">عوامل النمو السكاني</h4>
                            <div className="flex flex-wrap gap-2">
                                {q3Growth.map(f => (
                                    <span key={f} className="bg-white border border-indigo-200 text-indigo-800 px-3 py-1 rounded-lg font-bold shadow-sm flex items-center gap-2">
                                        {f} <button onClick={() => setQ3Growth(prev => prev.filter(i => i !== f))} className="text-red-400 hover:text-red-600">×</button>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-teal-50 border-2 border-teal-200 rounded-3xl p-6 min-h-[150px]">
                            <h4 className="font-black text-teal-900 text-center mb-4 border-b border-teal-200 pb-2">عوامل توزيع السكان</h4>
                            <div className="flex flex-wrap gap-2">
                                {q3Dist.map(f => (
                                    <span key={f} className="bg-white border border-teal-200 text-teal-800 px-3 py-1 rounded-lg font-bold shadow-sm flex items-center gap-2">
                                        {f} <button onClick={() => setQ3Dist(prev => prev.filter(i => i !== f))} className="text-red-400 hover:text-red-600">×</button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Question 4: Math Problems */}
            <section className="bg-white rounded-3xl shadow-md border-t-8 border-orange-500 overflow-hidden">
                <div className="bg-orange-50 p-6 flex items-center gap-4 border-b border-orange-100">
                    <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-lg">4</span>
                    <h3 className="font-black text-xl text-orange-900">مسائل حسابية (استخدم الأرقام الإنجليزية):</h3>
                </div>
                <div className="p-8 space-y-8">
                    
                    {/* Problem A */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full shadow text-orange-600"><Calculator /></div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-lg mb-4">
                                    أ) إذا كان عدد المواليد في مدينة ما (1500) مولود، وعدد الوفيات (500) حالة. احسب الزيادة الطبيعية؟
                                </p>
                                <div className="flex items-center gap-4">
                                    <input 
                                        type="number" 
                                        value={mathAnswer1} 
                                        onChange={(e) => setMathAnswer1(e.target.value)}
                                        placeholder="الناتج" 
                                        className="p-3 rounded-xl border-2 border-slate-300 w-40 text-center font-black text-xl focus:border-orange-500 outline-none"
                                    />
                                    <span className="font-bold text-slate-500">نسمة</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Problem B */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full shadow text-orange-600"><Users /></div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-lg mb-4">
                                    ب) تبلغ مساحة قرية (500) كم²، ويسكنها (5000) نسمة. احسب الكثافة السكانية؟
                                </p>
                                <div className="flex items-center gap-4">
                                    <input 
                                        type="number" 
                                        value={mathAnswer2} 
                                        onChange={(e) => setMathAnswer2(e.target.value)}
                                        placeholder="الناتج" 
                                        className="p-3 rounded-xl border-2 border-slate-300 w-40 text-center font-black text-xl focus:border-orange-500 outline-none"
                                    />
                                    <span className="font-bold text-slate-500">نسمة/كم²</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button 
                            onClick={checkMath}
                            className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-transform active:scale-95"
                        >
                            تحقق من الإجابات
                        </button>
                    </div>
                    {mathFeedback === 'correct' && <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-bold animate-fade-in border border-green-200">إجابات صحيحة وممتازة! ✅</div>}
                    {mathFeedback === 'wrong' && <div className="bg-red-100 text-red-800 p-4 rounded-xl text-center font-bold animate-fade-in border border-red-200">حاول مرة أخرى.. تأكد من القوانين (الطرح للزيادة، والقسمة للكثافة) ❌</div>}
                </div>
            </section>

            {/* Question 5: Reasoning */}
            <section className="bg-white rounded-3xl shadow-md border-t-8 border-blue-500 overflow-hidden">
                <div className="bg-blue-50 p-6 flex items-center gap-4 border-b border-blue-100">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-lg">5</span>
                    <h3 className="font-black text-xl text-blue-900">علّل (اذكر السبب):</h3>
                </div>
                <div className="p-8">
                    <h4 className="font-bold text-lg text-slate-800 mb-4">انخفاض الكثافة السكانية في المناطق الصحراوية؟</h4>
                    <div className="space-y-3">
                        {['بسبب خصوبة التربة ووفرة المياه', 'بسبب الجفاف وارتفاع الحرارة وقلة الموارد', 'بسبب توفر المصانع والشركات'].map((reason, idx) => (
                            <button
                                key={idx}
                                onClick={() => setQ5Answer(reason)}
                                className={`w-full text-right p-4 rounded-xl border-2 font-medium transition-all ${
                                    q5Answer === reason 
                                        ? reason.includes('الجفاف') ? 'bg-green-100 border-green-500 text-green-900 font-bold' : 'bg-red-100 border-red-500 text-red-900'
                                        : 'bg-white border-slate-100 hover:bg-slate-50'
                                }`}
                            >
                                {reason}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    </div>
  );
};

export default Unit1AssessmentG6;
