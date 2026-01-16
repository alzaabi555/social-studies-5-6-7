
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, HelpCircle, Map as MapIcon, RefreshCw, Scale, Crown, BookOpen, User, Swords, Coins, Hammer, Ship, AlertTriangle } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit2AssessmentG6: React.FC<Props> = ({ onBack }) => {
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

  // --- STEP 1: Matching Concepts (Page 78 Q1) ---
  const Step1Matching = () => {
      const [matches, setMatches] = useState<{[key: string]: string}>({});
      
      const definitions = [
          { id: 'arud', text: 'هو ميزان الشعر به يُعرف موزونه من عدمه.', correct: 'علم العروض' },
          { id: 'heredity', text: 'هو أن يتولى الابن الأكبر للحاكم أو أحد أقربائه الحكم من بعده.', correct: 'الحكم الوراثي' },
          { id: 'sharia', text: 'تعتمد على استنباط معارفها من القرآن والسنة النبوية، مثل العقيدة والفقه.', correct: 'علوم الشريعة' },
      ];

      const concepts = ['الحكم الوراثي', 'علم العروض', 'علوم الشريعة'];

      return (
          <div className="space-y-8 animate-fade-in">
              <div className="bg-indigo-100 p-4 rounded-xl border-r-4 border-indigo-600">
                  <h3 className="text-xl font-bold text-indigo-900">١- اكتب المفاهيم الآتية أمام التعريف الذي يمثلها:</h3>
                  <div className="flex gap-4 mt-4 justify-center">
                      {concepts.map(c => (
                          <span key={c} className="bg-white px-4 py-2 rounded-lg font-bold text-indigo-700 shadow-sm border border-indigo-200">{c}</span>
                      ))}
                  </div>
              </div>

              <div className="space-y-4">
                  {definitions.map((def) => (
                      <div key={def.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-4">
                          <div className="flex-1 text-slate-700 font-medium leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 w-full text-center md:text-right">
                              {def.text}
                          </div>
                          <div className="md:w-1/3 w-full">
                              <select 
                                  className={`w-full p-3 rounded-xl border-2 font-bold outline-none cursor-pointer ${
                                      matches[def.id] === def.correct 
                                      ? 'bg-green-100 border-green-500 text-green-800' 
                                      : matches[def.id] ? 'bg-red-100 border-red-500 text-red-800' : 'bg-white border-slate-300'
                                  }`}
                                  onChange={(e) => setMatches({...matches, [def.id]: e.target.value})}
                                  value={matches[def.id] || ''}
                              >
                                  <option value="">اختر المفهوم...</option>
                                  {concepts.map(c => <option key={c} value={c}>{c}</option>)}
                              </select>
                          </div>
                          {matches[def.id] === def.correct && <CheckCircle className="text-green-500 animate-bounce" />}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- STEP 2: Provide Evidence (Page 78 Q2) ---
  const Step2Evidence = () => {
      const [revealed, setRevealed] = useState<number[]>([]);

      const questions = [
          { id: 1, q: "نبوغ الإمام جابر بن زيد في علوم الشريعة الإسلامية.", a: "تأليفه لكتاب (ديوان جابر) الذي يُعد أول كتاب في الفقه والحديث، وتأسيسه للمذهب الإباضي فكرياً." },
          { id: 2, q: "مشاركة العمانيين في الفتوحات الإسلامية للدولة الأموية.", a: "دور المهلب بن أبي صفرة في قتال الخوارج وفتوحات المشرق، ومشاركة العمانيين في فتوحات الأندلس." },
          { id: 3, q: "اهتمام الدولة الأموية بالمجال العمراني.", a: "بناء المساجد الفخمة مثل مسجد قبة الصخرة والجامع الأموي، وإنشاء المدن مثل القيروان وواسط." }
      ];

      const toggle = (id: number) => {
          setRevealed(prev => prev.includes(id) ? prev : [...prev, id]);
      };

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-emerald-100 p-4 rounded-xl border-r-4 border-emerald-600">
                  <h3 className="text-xl font-bold text-emerald-900">٢- اذكر دليلاً واحداً على ما يأتي:</h3>
              </div>
              <div className="grid gap-4">
                  {questions.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                          <div 
                              onClick={() => toggle(item.id)}
                              className="p-4 cursor-pointer hover:bg-slate-50 flex justify-between items-center"
                          >
                              <h4 className="font-bold text-slate-800 text-lg leading-snug">{item.q}</h4>
                              <button className="text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                  {revealed.includes(item.id) ? 'إخفاء' : 'عرض الدليل'}
                              </button>
                          </div>
                          {revealed.includes(item.id) && (
                              <div className="p-4 bg-emerald-50 border-t border-emerald-100 text-emerald-900 font-medium animate-fade-in leading-relaxed">
                                  <span className="font-bold">الدليل: </span>{item.a}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- STEP 3: Identify Achievements (Page 78 Q3) ---
  const Step3Identify = () => {
      const [inputs, setInputs] = useState({ img1: '', img2: '' });
      const [status, setStatus] = useState({ img1: false, img2: false });

      const checkAnswer = (key: 'img1' | 'img2', val: string, correct: string) => {
          setInputs(prev => ({...prev, [key]: val}));
          if (val === correct) {
              setStatus(prev => ({...prev, [key]: true}));
          }
      };

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-orange-100 p-4 rounded-xl border-r-4 border-orange-600">
                  <h3 className="text-xl font-bold text-orange-900">٣- استنتج من الصورتين اسم المنجز التابع للدولة الأموية:</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {/* Image 1: Catapult */}
                  <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 flex flex-col items-center">
                      <div className="h-40 w-full bg-slate-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                          <svg viewBox="0 0 200 150" className="w-3/4 h-full">
                              <path d="M50,130 L150,130" stroke="#5D4037" strokeWidth="4"/>
                              <path d="M70,130 L100,50 L130,130" stroke="#5D4037" strokeWidth="4" fill="none"/>
                              <line x1="100" y1="50" x2="160" y2="30" stroke="#8D6E63" strokeWidth="3"/>
                              <circle cx="160" cy="30" r="10" fill="#4E342E"/>
                          </svg>
                      </div>
                      
                      <div className="w-full">
                          <label className="block text-center font-bold text-slate-700 mb-2">ما اسم هذا المنجز العسكري؟</label>
                          <div className="flex gap-2">
                              <select 
                                  className={`w-full p-2 rounded-lg border-2 font-bold ${status.img1 ? 'bg-green-100 border-green-500 text-green-800' : 'border-slate-300'}`}
                                  onChange={(e) => checkAnswer('img1', e.target.value, 'mangonel')}
                                  disabled={status.img1}
                              >
                                  <option value="">اختر الإجابة...</option>
                                  <option value="mangonel">المنجنيق</option>
                                  <option value="tank">الدبابة</option>
                                  <option value="sword">السيف</option>
                              </select>
                              {status.img1 && <CheckCircle className="text-green-600 mt-2" />}
                          </div>
                      </div>
                  </div>

                  {/* Image 2: Coins */}
                  <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 flex flex-col items-center">
                      <div className="h-40 w-full bg-slate-100 rounded-xl mb-4 flex items-center justify-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-yellow-400 border-4 border-yellow-600 flex items-center justify-center shadow-lg">
                              <span className="text-[8px] font-bold text-yellow-800 text-center">لا إله إلا الله</span>
                          </div>
                          <div className="w-16 h-16 rounded-full bg-yellow-400 border-4 border-yellow-600 flex items-center justify-center shadow-lg">
                              <span className="text-[8px] font-bold text-yellow-800 text-center">محمد رسول الله</span>
                          </div>
                      </div>
                      
                      <div className="w-full">
                          <label className="block text-center font-bold text-slate-700 mb-2">ما اسم هذا المنجز الاقتصادي؟</label>
                          <div className="flex gap-2">
                              <select 
                                  className={`w-full p-2 rounded-lg border-2 font-bold ${status.img2 ? 'bg-green-100 border-green-500 text-green-800' : 'border-slate-300'}`}
                                  onChange={(e) => checkAnswer('img2', e.target.value, 'coin')}
                                  disabled={status.img2}
                              >
                                  <option value="">اختر الإجابة...</option>
                                  <option value="paper">العملة الورقية</option>
                                  <option value="coin">العملة الإسلامية (الدينار)</option>
                                  <option value="barter">المقايضة</option>
                              </select>
                              {status.img2 && <CheckCircle className="text-green-600 mt-2" />}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- STEP 4: Personalities Fields (Page 79 Q4) ---
  const Step4Fields = () => {
      const [matches, setMatches] = useState<{[key: string]: string}>({});

      const handleMatch = (id: string, field: string) => {
          setMatches(prev => ({...prev, [id]: field}));
      };

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600">
                  <h3 className="text-xl font-bold text-purple-900">٤- حدد المجال الذي اشتهرت به الشخصيات العمانية الآتية:</h3>
              </div>

              <div className="grid gap-6">
                  {/* Ziyad */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6">
                      <div className="bg-purple-50 p-4 rounded-full">
                          <Swords size={32} className="text-purple-600" />
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <h4 className="font-bold text-xl text-slate-800 mb-2">زياد بن المهلب الأزدي</h4>
                          <div className="flex gap-2 justify-center md:justify-start">
                              <button 
                                  onClick={() => handleMatch('ziyad', 'سياسي')}
                                  className={`px-4 py-2 rounded-lg font-bold border-2 ${matches['ziyad'] === 'سياسي' ? 'bg-green-100 border-green-500 text-green-900' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                              >
                                  المجال السياسي والعسكري (والٍ)
                              </button>
                              <button 
                                  onClick={() => handleMatch('ziyad', 'طبي')}
                                  className={`px-4 py-2 rounded-lg font-bold border-2 ${matches['ziyad'] === 'طبي' ? 'bg-red-100 border-red-500 text-red-900' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                              >
                                  المجال الطبي
                              </button>
                          </div>
                      </div>
                  </div>

                  {/* Kaab */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6">
                      <div className="bg-purple-50 p-4 rounded-full">
                          <BookOpen size={32} className="text-purple-600" />
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <h4 className="font-bold text-xl text-slate-800 mb-2">كعب بن معدان الأزدي</h4>
                          <div className="flex gap-2 justify-center md:justify-start">
                              <button 
                                  onClick={() => handleMatch('kaab', 'سياسي')}
                                  className={`px-4 py-2 rounded-lg font-bold border-2 ${matches['kaab'] === 'سياسي' ? 'bg-red-100 border-red-500 text-red-900' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                              >
                                  المجال السياسي
                              </button>
                              <button 
                                  onClick={() => handleMatch('kaab', 'علمي')}
                                  className={`px-4 py-2 rounded-lg font-bold border-2 ${matches['kaab'] === 'علمي' ? 'bg-green-100 border-green-500 text-green-900' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                              >
                                  المجال العلمي (طبيب وشاعر)
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- STEP 5: Map Route (Page 79 Q5) ---
  const Step5Map = () => {
      const [showRoute, setShowRoute] = useState(false);

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-blue-100 p-4 rounded-xl border-r-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-900">٥- ارسم خط سير حملات الحجاج بن يوسف للسيطرة على عُمان:</h3>
              </div>

              <div className="relative w-full bg-blue-50 rounded-3xl border-4 border-blue-200 overflow-hidden shadow-xl">
                  {/* Interactive Map */}
                  <svg viewBox="0 0 600 400" className="w-full h-auto bg-[#e0f2fe]">
                      {/* Land */}
                      <path d="M50,50 L550,50 L550,350 L450,380 L300,350 L150,250 L50,150 Z" fill="#d1fae5" stroke="#059669" />
                      
                      {/* Cities */}
                      <circle cx="100" cy="100" r="5" fill="#1f2937" /> <text x="90" y="90" fontSize="12" fontWeight="bold">البصرة/العراق</text>
                      <circle cx="450" cy="250" r="5" fill="#ef4444" className="animate-ping" /> <text x="460" y="250" fontSize="12" fontWeight="bold">عُمان</text>

                      {/* Route Animation */}
                      {showRoute && (
                          <>
                              {/* Land Route */}
                              <path d="M100,100 Q200,150 300,200 T450,250" fill="none" stroke="#b91c1c" strokeWidth="4" strokeDasharray="10 5" className="animate-[draw_3s_linear_forwards]" strokeDashoffset="500" />
                              
                              {/* Sea Route */}
                              <path d="M100,100 Q150,300 350,350 T450,250" fill="none" stroke="#1d4ed8" strokeWidth="4" strokeDasharray="10 5" className="animate-[draw_3s_linear_forwards]" strokeDashoffset="600" />
                              
                              <text x="250" y="180" fontSize="12" fill="#b91c1c" fontWeight="bold">حملة برية</text>
                              <text x="250" y="320" fontSize="12" fill="#1d4ed8" fontWeight="bold">حملة بحرية</text>
                          </>
                      )}
                  </svg>

                  <div className="absolute bottom-4 right-4">
                      <button 
                          onClick={() => setShowRoute(!showRoute)}
                          className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-transform hover:scale-105 flex items-center gap-2"
                      >
                          {showRoute ? <RefreshCw size={18}/> : <MapIcon size={18}/>}
                          {showRoute ? 'إعادة الرسم' : 'رسم خط السير'}
                      </button>
                  </div>
              </div>
          </div>
      );
  };

  // --- STEP 6: Consequences (Page 79 Q6) ---
  const Step6Results = () => {
      const [revealed, setRevealed] = useState<number[]>([]);

      const items = [
          { id: 1, q: "اتصاف التجار العمانيين بالأخلاق الحميدة في المناطق التي يصلون إليها؟", a: "أدى إلى انتشار الإسلام في تلك المناطق (مثل الصين وشرق أفريقيا) بفضل حسن تعاملهم وأمانتهم." },
          { id: 2, q: "ظهور فِرق معارضة للحكم الأموي؟", a: "أدى إلى ضعف الدولة الأموية، وزعزعة استقرارها، مما مهد لسقوطها وقيام الدولة العباسية." }
      ];

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-red-100 p-4 rounded-xl border-r-4 border-red-600">
                  <h3 className="text-xl font-bold text-red-900">٦- ما النتيجة المترتبة على:</h3>
              </div>

              <div className="grid gap-6">
                  {items.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                          <div className="p-6 border-b border-slate-100">
                              <h4 className="font-bold text-slate-800 text-lg mb-2">{item.q}</h4>
                          </div>
                          <div className="p-4 bg-slate-50 flex justify-center">
                              {!revealed.includes(item.id) ? (
                                  <button 
                                      onClick={() => setRevealed(prev => [...prev, item.id])}
                                      className="text-red-600 font-bold border-2 border-red-200 bg-white px-6 py-2 rounded-full hover:bg-red-50 transition-colors"
                                  >
                                      النتيجة
                                  </button>
                              ) : (
                                  <p className="text-center text-red-800 font-medium animate-fade-in px-4">
                                      {item.a}
                                  </p>
                              )}
                          </div>
                      </div>
                  ))}
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
            <h1 className="text-xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثانية - مطابق للكتاب ص78-79)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>

            {currentStep === 1 && <Step1Matching />}
            {currentStep === 2 && <Step2Evidence />}
            {currentStep === 3 && <Step3Identify />}
            {currentStep === 4 && <Step4Fields />}
            {currentStep === 5 && <Step5Map />}
            {currentStep === 6 && <Step6Results />}

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
        
        <style>{`
            @keyframes draw {
                to { stroke-dashoffset: 0; }
            }
        `}</style>
    </div>
  );
};

export default Unit2AssessmentG6;
