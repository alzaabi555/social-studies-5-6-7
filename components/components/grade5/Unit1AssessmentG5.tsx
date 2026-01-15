import React, { useState } from 'react';
import { ArrowRight, CheckCircle, XCircle, RotateCcw, CloudRain, Sun, Mountain, Droplet, Flame, Pickaxe, Fish, Wheat, HelpCircle, Trophy, AlertTriangle, Fuel } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit1AssessmentG5: React.FC<Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
      if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  // --- Q1: Spheres Table ---
  const Question1 = () => {
      const [answers, setAnswers] = useState<{[key: string]: string}>({});
      const correctAnswers = {
          'row1_comp': 'غازات وبخار ماء', 'row1_imp': 'التنفس وحماية الأرض', 'row1_prob': 'تلوث الهواء',
          'row2_comp': 'مسطحات مائية', 'row2_imp': 'مصدر للمياه والغذاء', 'row2_prob': 'تلوث المياه',
          'row3_comp': 'كائنات حية', 'row3_imp': 'التوازن البيئي', 'row3_prob': 'انقراض الأنواع',
          'row4_comp': 'صخور وتربة', 'row4_imp': 'معادن وطاقة', 'row4_prob': 'التصحر'
      };

      const handleSelect = (key: string, val: string) => {
          setAnswers(prev => ({...prev, [key]: val}));
      };

      return (
          <div className="space-y-6">
              <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                  <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                  أكمل الجدول التالي (ص 44):
              </h3>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-indigo-100">
                  <table className="w-full text-center min-w-[600px]">
                      <thead>
                          <tr className="bg-indigo-50 text-indigo-900">
                              <th className="p-3">اسم الغلاف</th>
                              <th className="p-3">أهم مكوناته</th>
                              <th className="p-3">أهميته الاقتصادية</th>
                              <th className="p-3">المشكلات البيئية</th>
                          </tr>
                      </thead>
                      <tbody className="text-sm">
                          {/* Atmosphere */}
                          <tr className="border-t border-indigo-100">
                              <td className="p-3 font-bold text-sky-600">الجوي</td>
                              <td className="p-3"><SelectBox options={['غازات وبخار ماء', 'صخور']} correct='غازات وبخار ماء' onSelect={(v) => handleSelect('row1_comp', v)} /></td>
                              <td className="p-3"><SelectBox options={['التنفس وحماية الأرض', 'الزراعة']} correct='التنفس وحماية الأرض' onSelect={(v) => handleSelect('row1_imp', v)} /></td>
                              <td className="p-3"><SelectBox options={['تلوث الهواء', 'انجراف التربة']} correct='تلوث الهواء' onSelect={(v) => handleSelect('row1_prob', v)} /></td>
                          </tr>
                          {/* Hydrosphere */}
                          <tr className="border-t border-indigo-100">
                              <td className="p-3 font-bold text-blue-600">المائي</td>
                              <td className="p-3"><SelectBox options={['مسطحات مائية', 'نباتات']} correct='مسطحات مائية' onSelect={(v) => handleSelect('row2_comp', v)} /></td>
                              <td className="p-3"><SelectBox options={['مصدر للمياه والغذاء', 'التعدين']} correct='مصدر للمياه والغذاء' onSelect={(v) => handleSelect('row2_imp', v)} /></td>
                              <td className="p-3"><SelectBox options={['تلوث المياه', 'الاحتباس الحراري']} correct='تلوث المياه' onSelect={(v) => handleSelect('row2_prob', v)} /></td>
                          </tr>
                          {/* Biosphere */}
                          <tr className="border-t border-indigo-100">
                              <td className="p-3 font-bold text-green-600">الحيوي</td>
                              <td className="p-3"><SelectBox options={['كائنات حية', 'رمال']} correct='كائنات حية' onSelect={(v) => handleSelect('row3_comp', v)} /></td>
                              <td className="p-3"><SelectBox options={['التوازن البيئي', 'النقل']} correct='التوازن البيئي' onSelect={(v) => handleSelect('row3_imp', v)} /></td>
                              <td className="p-3"><SelectBox options={['انقراض الأنواع', 'الضوضاء']} correct='انقراض الأنواع' onSelect={(v) => handleSelect('row3_prob', v)} /></td>
                          </tr>
                          {/* Lithosphere */}
                          <tr className="border-t border-indigo-100">
                              <td className="p-3 font-bold text-amber-600">الصخري</td>
                              <td className="p-3"><SelectBox options={['صخور وتربة', 'غيوم']} correct='صخور وتربة' onSelect={(v) => handleSelect('row4_comp', v)} /></td>
                              <td className="p-3"><SelectBox options={['معادن وطاقة', 'ملاحة']} correct='معادن وطاقة' onSelect={(v) => handleSelect('row4_imp', v)} /></td>
                              <td className="p-3"><SelectBox options={['التصحر', 'الأعاصير']} correct='التصحر' onSelect={(v) => handleSelect('row4_prob', v)} /></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      );
  };

  const SelectBox = ({options, correct, onSelect}: {options: string[], correct: string, onSelect: (v: string) => void}) => {
      const [selected, setSelected] = useState<string | null>(null);
      const isCorrect = selected === correct;
      return (
          <div className="flex flex-col gap-1">
              {options.map(opt => (
                  <button 
                      key={opt}
                      onClick={() => { setSelected(opt); onSelect(opt); }}
                      className={`px-2 py-1 rounded border text-xs transition-all ${selected === opt ? (opt === correct ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800') : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}
                  >
                      {opt}
                  </button>
              ))}
              {selected === correct && <CheckCircle size={14} className="text-green-500 mx-auto animate-bounce"/>}
          </div>
      );
  };

  // --- Q2: Water Cycle ---
  const Question2 = () => {
      const [labels, setLabels] = useState<{[key: string]: string | null}>({ top: null, right: null, bottom: null, left: null });
      
      const handleLabel = (pos: string, val: string) => {
          setLabels(prev => ({...prev, [pos]: val}));
      };

      const isComplete = labels.top === 'شمس' && labels.right === 'تكاثف' && labels.left === 'تبخر' && labels.bottom === 'تجمع';

      return (
          <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                  أكمل مخطط دورة الماء (ص 44):
              </h3>
              
              <div className="relative w-full max-w-lg mx-auto h-80 bg-sky-100 rounded-3xl overflow-hidden border-4 border-blue-200 shadow-xl">
                  {/* Scene */}
                  <div className="absolute top-4 right-1/2 translate-x-1/2"><Sun size={64} className="text-yellow-500 animate-spin-slow"/></div>
                  <div className="absolute bottom-0 w-full h-24 bg-blue-500"></div>
                  <div className="absolute top-20 left-10"><CloudRain size={48} className="text-slate-500"/></div>
                  <div className="absolute bottom-24 right-10"><Mountain size={64} className="text-amber-800"/></div>

                  {/* Interactive Slots */}
                  {/* Top: Sun */}
                  <div className="absolute top-2 right-1/2 translate-x-1/2 z-10">
                      <select onChange={(e) => handleLabel('top', e.target.value)} className={`text-xs p-1 rounded border-2 font-bold ${labels.top === 'شمس' ? 'bg-green-100 border-green-500 text-green-800' : 'bg-white border-yellow-400'}`}>
                          <option value="">؟</option>
                          <option value="شمس">الشمس</option>
                          <option value="قمر">القمر</option>
                      </select>
                  </div>

                  {/* Left: Evaporation */}
                  <div className="absolute bottom-32 left-10 z-10">
                      <select onChange={(e) => handleLabel('left', e.target.value)} className={`text-xs p-1 rounded border-2 font-bold ${labels.left === 'تبخر' ? 'bg-green-100 border-green-500 text-green-800' : 'bg-white border-blue-400'}`}>
                          <option value="">؟</option>
                          <option value="تبخر">تبخر</option>
                          <option value="تجمد">تجمد</option>
                      </select>
                  </div>

                  {/* Right: Condensation/Precipitation */}
                  <div className="absolute top-20 right-10 z-10">
                      <select onChange={(e) => handleLabel('right', e.target.value)} className={`text-xs p-1 rounded border-2 font-bold ${labels.right === 'تكاثف' ? 'bg-green-100 border-green-500 text-green-800' : 'bg-white border-slate-400'}`}>
                          <option value="">؟</option>
                          <option value="تكاثف">تكاثف</option>
                          <option value="انصهار">انصهار</option>
                      </select>
                  </div>

                  {/* Bottom: Collection */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                      <select onChange={(e) => handleLabel('bottom', e.target.value)} className={`text-xs p-1 rounded border-2 font-bold ${labels.bottom === 'تجمع' ? 'bg-green-100 border-green-500 text-green-800' : 'bg-white border-blue-600'}`}>
                          <option value="">؟</option>
                          <option value="تجمع">تجمع مائي</option>
                          <option value="جفاف">جفاف</option>
                      </select>
                  </div>

                  {/* Arrows Animation if complete */}
                  {isComplete && (
                      <svg className="absolute inset-0 w-full h-full pointer-events-none animate-pulse">
                          <path d="M100,250 Q100,150 250,50" fill="none" stroke="blue" strokeWidth="2" strokeDasharray="5,5"/>
                          <path d="M250,50 Q350,50 350,150" fill="none" stroke="blue" strokeWidth="2" strokeDasharray="5,5"/>
                          <path d="M350,150 L350,250" fill="none" stroke="blue" strokeWidth="2" strokeDasharray="5,5"/>
                      </svg>
                  )}
              </div>
          </div>
      );
  };

  // --- Q3: Reasons (Flip Cards) ---
  const Question3 = () => {
      return (
          <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                  <span className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                  علل ما يأتي (ص 45):
              </h3>
              <div className="grid gap-4">
                  <FlipCard 
                      question="أ. ظهور العديد من المشكلات البيئية على كوكب الأرض؟" 
                      answer="بسبب الأنشطة البشرية السلبية مثل التلوث، قطع الأشجار، والصيد الجائر."
                      icon={<AlertTriangle size={32} className="text-red-500"/>}
                  />
                  <FlipCard 
                      question="ب. ارتفاع درجات الحرارة على كوكب عطارد؟" 
                      answer="لأنه أقرب الكواكب إلى الشمس."
                      icon={<Sun size={32} className="text-yellow-500"/>}
                  />
                  <FlipCard 
                      question="ج. توجه سلطنة عمان نحو الاستفادة من الموارد المتجددة؟" 
                      answer="للحفاظ على البيئة، واستدامتها للأجيال القادمة (رؤية 2040)."
                      icon={<RotateCcw size={32} className="text-green-500"/>}
                  />
              </div>
          </div>
      );
  };

  const FlipCard = ({question, answer, icon}: {question: string, answer: string, icon: React.ReactNode}) => {
      const [flipped, setFlipped] = useState(false);
      return (
          <div onClick={() => setFlipped(!flipped)} className="cursor-pointer perspective-1000 h-32 w-full">
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden bg-white p-4 rounded-2xl shadow-md border-2 border-amber-100 flex items-center gap-4">
                      <div className="bg-amber-50 p-3 rounded-full">{icon}</div>
                      <p className="text-slate-800 font-bold text-lg">{question}</p>
                      <span className="mr-auto text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">اضغط للإجابة</span>
                  </div>
                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden bg-green-50 p-4 rounded-2xl shadow-md border-2 border-green-200 rotate-y-180 flex items-center justify-center text-center">
                      <p className="text-green-900 font-bold text-lg leading-relaxed">{answer}</p>
                  </div>
              </div>
          </div>
      );
  };

  // --- Q4: Classification Game ---
  const Question4 = () => {
      const [items, setItems] = useState([
          {id: 1, name: 'الغاز', type: 'non'}, 
          {id: 2, name: 'الرخام', type: 'non'}, 
          {id: 3, name: 'الأرز', type: 'renew'}, 
          {id: 4, name: 'الأسماك', type: 'renew'}
      ]);
      const [classified, setClassified] = useState<{[key: number]: string}>({});

      const handleSort = (id: number, type: string) => {
          setClassified(prev => ({...prev, [id]: type}));
      };

      return (
          <div className="space-y-6">
              <h3 className="text-xl font-bold text-purple-900 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center">4</span>
                  صنف الموارد التالية (ص 45):
              </h3>
              
              <div className="flex justify-center gap-4 mb-6">
                  {items.map(item => (
                      !classified[item.id] && (
                          <div key={item.id} className="bg-white px-4 py-2 rounded-lg shadow-md border border-slate-200 font-bold animate-bounce">
                              {item.name}
                          </div>
                      )
                  ))}
                  {Object.keys(classified).length === items.length && <span className="text-green-600 font-bold">أحسنت! تم التصنيف.</span>}
              </div>

              <div className="grid grid-cols-2 gap-8">
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 min-h-[200px]">
                      <h4 className="text-center font-black text-green-800 mb-4 flex items-center justify-center gap-2"><RotateCcw size={20}/> موارد متجددة</h4>
                      <div className="flex flex-col gap-2">
                          {items.map(item => (
                              <button key={item.id} onClick={() => handleSort(item.id, 'renew')} className={`p-2 rounded border transition-all ${classified[item.id] === 'renew' ? (item.type === 'renew' ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900') : 'bg-white hover:bg-slate-50'}`} disabled={classified[item.id] !== undefined}>
                                  {item.name}
                              </button>
                          ))}
                      </div>
                  </div>
                  <div className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-4 min-h-[200px]">
                      <h4 className="text-center font-black text-slate-800 mb-4 flex items-center justify-center gap-2"><Fuel size={20}/> موارد غير متجددة</h4>
                      <div className="flex flex-col gap-2">
                          {items.map(item => (
                              <button key={item.id} onClick={() => handleSort(item.id, 'non')} className={`p-2 rounded border transition-all ${classified[item.id] === 'non' ? (item.type === 'non' ? 'bg-slate-300 text-slate-900' : 'bg-red-200 text-red-900') : 'bg-white hover:bg-slate-50'}`} disabled={classified[item.id] !== undefined}>
                                  {item.name}
                              </button>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- Q5 & Q6: Synthesis ---
  const FinalQuestions = () => {
      const [showQ5, setShowQ5] = useState(false);
      const [showQ6, setShowQ6] = useState(false);

      return (
          <div className="space-y-8">
              {/* Q5 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-r-8 border-teal-500">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center">5</span>
                      اذكر اثنين من جهود سلطنة عمان لاستدامة الموارد؟
                  </h3>
                  {!showQ5 ? (
                      <button onClick={() => setShowQ5(true)} className="text-teal-600 font-bold hover:underline">إظهار الإجابة</button>
                  ) : (
                      <ul className="list-disc list-inside text-teal-800 font-medium animate-fade-in space-y-2">
                          <li>وضع قوانين صارمة للمحافظة على البيئة.</li>
                          <li>إنشاء المحميات الطبيعية.</li>
                          <li>الاستثمار في الطاقة النظيفة (الشمسية والرياح).</li>
                      </ul>
                  )}
              </div>

              {/* Q6 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-r-8 border-yellow-500">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <span className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center">6</span>
                      فسّر: للموارد الطبيعية أهمية اقتصادية؟
                  </h3>
                  {!showQ6 ? (
                      <button onClick={() => setShowQ6(true)} className="text-yellow-600 font-bold hover:underline">إظهار الإجابة</button>
                  ) : (
                      <div className="animate-slide-up flex gap-4 overflow-x-auto pb-2">
                          <div className="bg-yellow-50 p-4 rounded-xl min-w-[150px] text-center border border-yellow-200">
                              <span className="block text-2xl mb-2">💰</span>
                              <span className="text-sm font-bold text-yellow-900">مصدر للدخل القومي</span>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-xl min-w-[150px] text-center border border-blue-200">
                              <span className="block text-2xl mb-2">🏭</span>
                              <span className="text-sm font-bold text-blue-900">تقوم عليها الصناعات</span>
                          </div>
                          <div className="bg-green-50 p-4 rounded-xl min-w-[150px] text-center border border-green-200">
                              <span className="block text-2xl mb-2">🍞</span>
                              <span className="text-sm font-bold text-green-900">توفر الغذاء</span>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  const renderStep = () => {
      switch(currentStep) {
          case 1: return <Question1 />;
          case 2: return <Question2 />;
          case 3: return <Question3 />;
          case 4: return <Question4 />;
          case 5: return <FinalQuestions />;
          case 6: return (
              <div className="text-center py-12 animate-zoom-in">
                  <Trophy size={100} className="text-yellow-400 mx-auto mb-6" />
                  <h2 className="text-4xl font-black text-slate-800 mb-4">ممتاز يا بطل!</h2>
                  <p className="text-xl text-slate-600 mb-8">لقد أتممت تقويم الوحدة الأولى بنجاح.</p>
                  <button onClick={onBack} className="bg-indigo-600 text-white px-10 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">العودة للدروس</button>
              </div>
          );
          default: return <Question1 />;
      }
  };

  return (
    <div className="min-h-screen bg-indigo-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الأولى)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-8 pb-20">
            {/* Progress */}
            <div className="w-full bg-slate-200 rounded-full h-3 mb-8">
                <div className="bg-indigo-600 h-3 rounded-full transition-all duration-500" style={{width: `${(currentStep / totalSteps) * 100}%`}}></div>
            </div>

            {renderStep()}

            {/* Navigation */}
            {currentStep < totalSteps && (
                <div className="flex justify-between pt-8 border-t border-slate-200">
                    <button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50 hover:bg-slate-300 transition-colors">السابق</button>
                    <button onClick={nextStep} className="px-8 py-2 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-transform hover:scale-105">التالي</button>
                </div>
            )}
        </div>
    </div>
  );
};

export default Unit1AssessmentG5;