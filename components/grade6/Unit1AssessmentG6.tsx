
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calculator, Scale, Users, FileText, HelpCircle, RefreshCw, XCircle, Map, Target, List, ArrowDown, ArrowUpRight } from 'lucide-react';

interface Unit1AssessmentG6Props {
    onBack: () => void;
}

const Unit1AssessmentG6: React.FC<Unit1AssessmentG6Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
  };

  const prevStep = () => {
      if (currentStep > 1) setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
  };

  // ----------------------------------------------------------------------
  // STEP 1: DEFINITIONS (Page 52 - Q1)
  // ----------------------------------------------------------------------
  const Step1Definitions = () => {
      const [matches, setMatches] = useState<{[key: number]: string}>({});
      
      const definitions = [
          { id: 1, text: 'عدد السكان في كيلومتر مربع واحد من الأرض.', correct: 'الكثافة السكانية' },
          { id: 2, text: 'عملية حصر السكان والمساكن والمنشآت لمجتمع معين في وقت محدد.', correct: 'التعداد السكاني' },
          { id: 3, text: 'شكل بياني لتمثيل البيانات السكانية الخاصة بالعمر والنوع.', correct: 'الهرم السكاني' },
          { id: 4, text: 'عدد السنوات التي يتوقع أن يعيشها الفرد.', correct: 'أمد الحياة' },
      ];

      const options = ['التعداد السكاني', 'الكثافة السكانية', 'أمد الحياة', 'الهرم السكاني'];

      return (
          <div className="space-y-6 animate-fade-in">
              <div className="bg-indigo-100 p-4 rounded-xl border-r-4 border-indigo-600">
                  <h3 className="text-xl font-bold text-indigo-900">١- اكتب المصطلح المناسب أمام كل عبارة:</h3>
              </div>
              <div className="grid gap-4">
                  {definitions.map((def) => (
                      <div key={def.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-4">
                          <p className="flex-1 font-medium text-slate-700">{def.text}</p>
                          <select 
                              className={`p-2 rounded-lg border-2 font-bold outline-none cursor-pointer w-full md:w-auto ${
                                  matches[def.id] === def.correct 
                                  ? 'bg-green-100 border-green-500 text-green-800' 
                                  : matches[def.id] ? 'bg-red-100 border-red-500 text-red-800' : 'bg-slate-50 border-slate-300'
                              }`}
                              onChange={(e) => setMatches({...matches, [def.id]: e.target.value})}
                              value={matches[def.id] || ''}
                          >
                              <option value="">اختر المصطلح...</option>
                              {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                          {matches[def.id] === def.correct && <CheckCircle className="text-green-500 animate-bounce" />}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // ----------------------------------------------------------------------
  // STEP 2: CONSEQUENCES (Page 52 - Q2)
  // ----------------------------------------------------------------------
  const Step2Consequences = () => {
      const [revealed, setRevealed] = useState<number[]>([]);

      const items = [
          { id: 1, q: 'التبليغ الخاطئ عن نوع المولود؟', a: 'يؤدي إلى بيانات سكانية غير دقيقة، مما يسبب أخطاء في التخطيط المستقبلي.' },
          { id: 2, q: 'تزايد هجرة الذكور مقارنة بالإناث؟', a: 'يؤدي إلى اختلال التركيب النوعي للسكان (زيادة نسبة الذكور في المناطق الجاذبة).' },
          { id: 3, q: 'التركز السكاني في منطقة معينة؟', a: 'يسبب الضغط على الخدمات، الازدحام المروري، التلوث، ومشكلة السكن.' },
          { id: 4, q: 'توفر بيانات سكانية دقيقة؟', a: 'يساعد في نجاح خطط التنمية، وتوفير الخدمات المناسبة، وتوزيع عادل للثروات.' }
      ];

      const toggle = (id: number) => {
          setRevealed(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
      };

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-rose-100 p-4 rounded-xl border-r-4 border-rose-600">
                  <h3 className="text-xl font-bold text-rose-900">٢- ما النتائج المترتبة على:</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                  {items.map((item) => (
                      <div 
                          key={item.id} 
                          onClick={() => toggle(item.id)}
                          className={`cursor-pointer p-6 rounded-2xl border-2 transition-all shadow-sm ${revealed.includes(item.id) ? 'bg-rose-50 border-rose-300' : 'bg-white border-slate-200 hover:border-rose-200'}`}
                      >
                          <div className="flex justify-between items-center mb-2">
                              <h4 className="font-bold text-slate-800">{item.q}</h4>
                              <ArrowDown size={20} className={`text-rose-500 transition-transform ${revealed.includes(item.id) ? 'rotate-180' : ''}`} />
                          </div>
                          {revealed.includes(item.id) && (
                              <p className="text-rose-800 font-medium animate-fade-in border-t border-rose-200 pt-2 mt-2">{item.a}</p>
                          )}
                          {!revealed.includes(item.id) && <p className="text-xs text-slate-400">اضغط لمعرفة النتيجة</p>}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // ----------------------------------------------------------------------
  // STEP 3: CLASSIFICATION (Page 52 - Q3)
  // ----------------------------------------------------------------------
  const Step3Classification = () => {
      const factors = [
          { id: 'births', text: 'المواليد', correct: 'growth' },
          { id: 'climate', text: 'المناخ', correct: 'dist' },
          { id: 'migration', text: 'الهجرة', correct: 'growth' },
          { id: 'economy', text: 'الأنشطة الاقتصادية', correct: 'dist' },
          { id: 'deaths', text: 'الوفيات', correct: 'growth' },
          { id: 'services', text: 'توفر الخدمات', correct: 'dist' }
      ];

      const [growthItems, setGrowthItems] = useState<string[]>([]);
      const [distItems, setDistItems] = useState<string[]>([]);
      const [pool, setPool] = useState(factors);

      const moveTo = (item: typeof factors[0], target: 'growth' | 'dist') => {
          if (target === 'growth') setGrowthItems([...growthItems, item.text]);
          else setDistItems([...distItems, item.text]);
          setPool(pool.filter(i => i.id !== item.id));
      };

      const reset = () => {
          setGrowthItems([]);
          setDistItems([]);
          setPool(factors);
      };

      const checkAnswers = () => {
          const correctGrowth = ['المواليد', 'الهجرة', 'الوفيات'];
          const correctDist = ['المناخ', 'الأنشطة الاقتصادية', 'توفر الخدمات'];
          
          const isGrowthCorrect = growthItems.length === 3 && growthItems.every(i => correctGrowth.includes(i));
          const isDistCorrect = distItems.length === 3 && distItems.every(i => correctDist.includes(i));
          
          return isGrowthCorrect && isDistCorrect;
      };

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-green-100 p-4 rounded-xl border-r-4 border-green-600">
                  <h3 className="text-xl font-bold text-green-900">٣- صنف العوامل المؤثرة في السكان:</h3>
              </div>

              {/* Pool */}
              <div className="flex flex-wrap gap-3 justify-center bg-slate-100 p-4 rounded-2xl min-h-[80px]">
                  {pool.map(item => (
                      <div key={item.id} className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-300 font-bold text-slate-700 flex items-center gap-2 animate-scale-in">
                          {item.text}
                          <div className="flex gap-1 mr-2">
                              <button onClick={() => moveTo(item, 'growth')} className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 text-xs">1</button>
                              <button onClick={() => moveTo(item, 'dist')} className="w-6 h-6 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 text-xs">2</button>
                          </div>
                      </div>
                  ))}
                  {pool.length === 0 && (
                      <div className="text-center w-full">
                          {checkAnswers() ? (
                              <span className="text-green-600 font-black text-xl flex items-center justify-center gap-2"><CheckCircle/> أحسنت! التصنيف صحيح</span>
                          ) : (
                              <button onClick={reset} className="text-red-600 font-bold flex items-center justify-center gap-2 mx-auto hover:underline"><RefreshCw size={16}/> حاول مرة أخرى</button>
                          )}
                      </div>
                  )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  {/* Bucket 1: Growth */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 min-h-[200px]">
                      <h4 className="font-black text-blue-900 text-center mb-4 text-lg">النمو السكاني</h4>
                      <div className="space-y-2">
                          {growthItems.map(t => (
                              <div key={t} className="bg-white p-3 rounded-lg text-blue-800 font-bold shadow-sm text-center animate-slide-up">{t}</div>
                          ))}
                      </div>
                  </div>

                  {/* Bucket 2: Distribution */}
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 min-h-[200px]">
                      <h4 className="font-black text-orange-900 text-center mb-4 text-lg">التوزيع الجغرافي للسكان</h4>
                      <div className="space-y-2">
                          {distItems.map(t => (
                              <div key={t} className="bg-white p-3 rounded-lg text-orange-800 font-bold shadow-sm text-center animate-slide-up">{t}</div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // ----------------------------------------------------------------------
  // STEP 4: CALCULATE NATURAL INCREASE (Page 53 - Q4)
  // ----------------------------------------------------------------------
  const Step4MuscatCalc = () => {
      const [births, setBirths] = useState('');
      const [deaths, setDeaths] = useState('');
      const [result, setResult] = useState<number | null>(null);
      const [feedback, setFeedback] = useState<string | null>(null);

      const calculate = () => {
          const b = parseInt(births);
          const d = parseInt(deaths);
          
          if (b === 15143 && d === 2566) {
              const res = b - d;
              setResult(res);
              setFeedback('correct');
          } else {
              setFeedback('wrong');
          }
      };

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-teal-100 p-4 rounded-xl border-r-4 border-teal-600">
                  <h3 className="text-xl font-bold text-teal-900">٤- احسب الزيادة الطبيعية في محافظة مسقط (عام 2022م):</h3>
                  <p className="text-sm text-teal-800 mt-2">
                      علماً بأن عدد المواليد: <strong>15,143</strong> وعدد الوفيات: <strong>2,566</strong>.
                  </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center max-w-lg mx-auto">
                  <div className="flex items-center justify-center gap-4 mb-6">
                      <input 
                          type="number" 
                          placeholder="المواليد" 
                          value={births}
                          onChange={(e) => setBirths(e.target.value)}
                          className="w-32 p-3 text-center text-xl font-bold border-2 border-slate-300 rounded-xl focus:border-teal-500 outline-none"
                      />
                      <span className="text-4xl font-black text-slate-400">-</span>
                      <input 
                          type="number" 
                          placeholder="الوفيات" 
                          value={deaths}
                          onChange={(e) => setDeaths(e.target.value)}
                          className="w-32 p-3 text-center text-xl font-bold border-2 border-slate-300 rounded-xl focus:border-teal-500 outline-none"
                      />
                  </div>

                  <button 
                      onClick={calculate}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
                  >
                      <Calculator size={20}/> احسب النتيجة
                  </button>

                  {feedback === 'correct' && (
                      <div className="mt-6 animate-bounce">
                          <span className="text-3xl font-black text-green-600 block mb-2">{result?.toLocaleString()} نسمة</span>
                          <span className="text-green-500 font-bold flex items-center justify-center gap-2"><CheckCircle/> إجابة صحيحة!</span>
                      </div>
                  )}
                  {feedback === 'wrong' && (
                      <div className="mt-4 text-red-500 font-bold flex items-center justify-center gap-2 animate-shake">
                          <XCircle/> تأكد من إدخال الأرقام الصحيحة كما في السؤال
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // ----------------------------------------------------------------------
  // STEP 5: CALCULATE DENSITY (Page 53 - Q5)
  // ----------------------------------------------------------------------
  const Step5KSACalc = () => {
      const [pop, setPop] = useState('');
      const [area, setArea] = useState('');
      const [result, setResult] = useState<string | null>(null);
      const [feedback, setFeedback] = useState<string | null>(null);

      const calculate = () => {
          // Clean inputs
          const p = parseInt(pop.replace(/,/g, ''));
          const a = parseInt(area.replace(/,/g, ''));
          
          if (p === 36000000 && a === 2149690) {
              const res = (p / a).toFixed(1);
              setResult(res);
              setFeedback('correct');
          } else {
              setFeedback('wrong');
          }
      };

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-blue-100 p-4 rounded-xl border-r-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-900">٥- احسب الكثافة السكانية للمملكة العربية السعودية:</h3>
                  <p className="text-sm text-blue-800 mt-2">
                      علماً بأن المساحة: <strong>2,149,690 كم²</strong> وعدد السكان: <strong>36,000,000 نسمة</strong>.
                  </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center max-w-lg mx-auto">
                  <div className="flex flex-col gap-4 mb-6">
                      <div className="relative">
                          <label className="block text-right text-xs font-bold text-slate-500 mb-1">عدد السكان</label>
                          <input 
                              type="number" 
                              placeholder="36000000" 
                              value={pop}
                              onChange={(e) => setPop(e.target.value)}
                              className="w-full p-3 text-center text-xl font-bold border-2 border-slate-300 rounded-xl focus:border-blue-500 outline-none"
                          />
                      </div>
                      <div className="text-2xl font-black text-slate-300">÷</div>
                      <div className="relative">
                          <label className="block text-right text-xs font-bold text-slate-500 mb-1">المساحة (كم²)</label>
                          <input 
                              type="number" 
                              placeholder="2149690" 
                              value={area}
                              onChange={(e) => setArea(e.target.value)}
                              className="w-full p-3 text-center text-xl font-bold border-2 border-slate-300 rounded-xl focus:border-blue-500 outline-none"
                          />
                      </div>
                  </div>

                  <button 
                      onClick={calculate}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
                  >
                      <Calculator size={20}/> احسب الكثافة
                  </button>

                  {feedback === 'correct' && (
                      <div className="mt-6 animate-bounce">
                          <span className="text-3xl font-black text-green-600 block mb-2">{result} نسمة/كم²</span>
                          <span className="text-green-500 font-bold flex items-center justify-center gap-2"><CheckCircle/> إجابة صحيحة!</span>
                      </div>
                  )}
                  {feedback === 'wrong' && (
                      <div className="mt-4 text-red-500 font-bold flex items-center justify-center gap-2 animate-shake">
                          <XCircle/> الرجاء إدخال الأرقام بدقة (بدون فواصل)
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // ----------------------------------------------------------------------
  // STEP 6: COMPARISONS (Page 53 - Q6)
  // ----------------------------------------------------------------------
  const Step6Comparisons = () => {
      // Table 1 State
      const [table1, setTable1] = useState({
          source1: '', scope1: '', accuracy1: '', // Primary
          source2: '', scope2: '', accuracy2: ''  // Secondary
      });

      // Table 2 State
      const [table2, setTable2] = useState({
          young_work: '', middle_work: '', old_work: '',
          young_age: '', middle_age: '', old_age: ''
      });

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600">
                  <h3 className="text-xl font-bold text-purple-900">٦- قارن حسب بيانات كل جدول فيما يأتي:</h3>
              </div>

              {/* Table 1: Sources */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                  <div className="bg-purple-500 text-white p-3 font-bold text-center">أولاً: مصادر جمع البيانات السكانية</div>
                  <div className="overflow-x-auto">
                      <table className="w-full text-center min-w-[600px]">
                          <thead className="bg-purple-50 text-purple-900">
                              <tr>
                                  <th className="p-3">وجه المقارنة</th>
                                  <th className="p-3">المصادر الأولية (مثل التعداد)</th>
                                  <th className="p-3">المصادر الثانوية (مثل السجلات)</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-purple-100">
                              <tr>
                                  <td className="p-3 font-bold text-slate-700">الشمولية</td>
                                  <td className="p-3">
                                      <select className="bg-slate-50 border p-2 rounded w-full" onChange={(e) => setTable1({...table1, scope1: e.target.value})}>
                                          <option>اختر..</option>
                                          <option value="high">شاملة لجميع السكان</option>
                                          <option value="low">غير شاملة (فئات محددة)</option>
                                      </select>
                                      {table1.scope1 === 'high' && <CheckCircle size={16} className="inline text-green-500 ml-1"/>}
                                  </td>
                                  <td className="p-3">
                                      <select className="bg-slate-50 border p-2 rounded w-full" onChange={(e) => setTable1({...table1, scope2: e.target.value})}>
                                          <option>اختر..</option>
                                          <option value="high">شاملة</option>
                                          <option value="low">جزئية / غير شاملة</option>
                                      </select>
                                      {table1.scope2 === 'low' && <CheckCircle size={16} className="inline text-green-500 ml-1"/>}
                                  </td>
                              </tr>
                              <tr>
                                  <td className="p-3 font-bold text-slate-700">الدقة</td>
                                  <td className="p-3">
                                      <select className="bg-slate-50 border p-2 rounded w-full" onChange={(e) => setTable1({...table1, accuracy1: e.target.value})}>
                                          <option>اختر..</option>
                                          <option value="high">دقيقة جداً</option>
                                          <option value="low">أقل دقة</option>
                                      </select>
                                      {table1.accuracy1 === 'high' && <CheckCircle size={16} className="inline text-green-500 ml-1"/>}
                                  </td>
                                  <td className="p-3">
                                      <select className="bg-slate-50 border p-2 rounded w-full" onChange={(e) => setTable1({...table1, accuracy2: e.target.value})}>
                                          <option>اختر..</option>
                                          <option value="high">دقيقة</option>
                                          <option value="low">قد تحتمل الخطأ / أقل دقة</option>
                                      </select>
                                      {table1.accuracy2 === 'low' && <CheckCircle size={16} className="inline text-green-500 ml-1"/>}
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>

              {/* Table 2: Age Groups */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                  <div className="bg-orange-500 text-white p-3 font-bold text-center">ثانياً: الفئات العمرية للسكان</div>
                  <div className="overflow-x-auto">
                      <table className="w-full text-center min-w-[600px]">
                          <thead className="bg-orange-50 text-orange-900">
                              <tr>
                                  <th className="p-3">وجه المقارنة</th>
                                  <th className="p-3">صغار السن</th>
                                  <th className="p-3">متوسطو السن</th>
                                  <th className="p-3">كبار السن</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-orange-100">
                              <tr>
                                  <td className="p-3 font-bold text-slate-700">الفئات العمرية</td>
                                  <td className="p-3">
                                      <select className="bg-slate-50 border p-2 rounded w-full text-sm" onChange={(e) => setTable2({...table2, young_age: e.target.value})}>
                                          <option>اختر..</option>
                                          <option value="correct">أقل من 15 سنة</option>
                                          <option value="wrong">15 - 64 سنة</option>
                                      </select>
                                      {table2.young_age === 'correct' && <CheckCircle size={16} className="inline text-green-500"/>}
                                  </td>
                                  <td className="p-3">
                                      <select className="bg-slate-50 border p-2 rounded w-full text-sm" onChange={(e) => setTable2({...table2, middle_age: e.target.value})}>
                                          <option>اختر..</option>
                                          <option value="wrong">65 فأكثر</option>
                                          <option value="correct">15 - 64 سنة</option>
                                      </select>
                                      {table2.middle_age === 'correct' && <CheckCircle size={16} className="inline text-green-500"/>}
                                  </td>
                                  <td className="p-3">
                                      <select className="bg-slate-50 border p-2 rounded w-full text-sm" onChange={(e) => setTable2({...table2, old_age: e.target.value})}>
                                          <option>اختر..</option>
                                          <option value="correct">65 سنة فأكثر</option>
                                          <option value="wrong">15 - 64 سنة</option>
                                      </select>
                                      {table2.old_age === 'correct' && <CheckCircle size={16} className="inline text-green-500"/>}
                                  </td>
                              </tr>
                              <tr>
                                  <td className="p-3 font-bold text-slate-700">العمل والإنتاج</td>
                                  <td className="p-3">
                                      <div className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-bold">غير منتجة (مستهلكة)</div>
                                  </td>
                                  <td className="p-3">
                                      <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold">منتجة (قوى عاملة)</div>
                                  </td>
                                  <td className="p-3">
                                      <div className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-bold">غير منتجة (مستهلكة)</div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg transition-colors">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الأولى - مطابق للكتاب ص52-53)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>

            {currentStep === 1 && <Step1Definitions />}
            {currentStep === 2 && <Step2Consequences />}
            {currentStep === 3 && <Step3Classification />}
            {currentStep === 4 && <Step4MuscatCalc />}
            {currentStep === 5 && <Step5KSACalc />}
            {currentStep === 6 && <Step6Comparisons />}

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button 
                    onClick={prevStep} 
                    disabled={currentStep === 1}
                    className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50 hover:bg-slate-300 transition-colors"
                >
                    السابق
                </button>
                {currentStep < totalSteps ? (
                    <button 
                        onClick={nextStep} 
                        className="px-8 py-2 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-transform hover:scale-105"
                    >
                        التالي
                    </button>
                ) : (
                    <button 
                        onClick={onBack} 
                        className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white hover:bg-green-700 shadow-lg flex items-center gap-2 animate-pulse"
                    >
                        <RefreshCw size={20}/> إنهاء
                    </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Unit1AssessmentG6;
