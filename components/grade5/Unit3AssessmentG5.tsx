
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, HelpCircle, PenTool, Flag, Music, Building2, User, Scale, ShieldCheck, Heart, BookOpen, RefreshCw, Star } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit3AssessmentG5: React.FC<Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
      if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  // --- Q1: My Duty (Page 96) ---
  const Question1 = () => {
      const [revealed, setRevealed] = useState<{[key: string]: boolean}>({});

      const items = [
          { id: 'flag', label: 'العلم العماني', icon: <Flag className="text-red-600"/>, answer: 'أحترمه وأرفعه عالياً، وأقف باحترام عند تحيته.' },
          { id: 'anthem', label: 'النشيد الوطني', icon: <Music className="text-blue-600"/>, answer: 'أردده بحماس وفخر، وأقف ثابتاً عند سماعه.' },
          { id: 'property', label: 'الممتلكات العامة', icon: <Building2 className="text-orange-600"/>, answer: 'أحافظ عليها ولا أعبث بها (مثل الحدائق والمدارس).' },
          { id: 'dress', label: 'الزي العماني', icon: <User className="text-purple-600"/>, answer: 'أعتز بارتدائه وأحافظ على نظافته وهندامه.' },
      ];

      return (
          <div className="space-y-8 animate-fade-in">
              <div className="bg-green-100 p-4 rounded-xl border-r-4 border-green-600 flex items-center gap-3">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                  <h3 className="text-xl font-black text-green-900">بوصفي مواطناً صالحاً، أكتب واجبي تجاه:</h3>
              </div>

              <div className="grid gap-4">
                  {items.map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-4">
                          <div className="flex items-center gap-3 w-full md:w-1/3">
                              <div className="bg-slate-50 p-3 rounded-full">{item.icon}</div>
                              <span className="font-bold text-slate-800 text-lg">{item.label}</span>
                          </div>
                          
                          <div className="flex-1 w-full">
                              {!revealed[item.id] ? (
                                  <button 
                                      onClick={() => setRevealed(prev => ({...prev, [item.id]: true}))}
                                      className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-400 font-bold hover:bg-slate-50 hover:text-slate-600 hover:border-slate-400 transition-all flex items-center justify-center gap-2"
                                  >
                                      <PenTool size={16}/> اضغط لكتابة/إظهار الإجابة المقترحة
                                  </button>
                              ) : (
                                  <div className="bg-green-50 p-3 rounded-xl border border-green-200 text-green-800 font-medium animate-slide-up flex items-start gap-2">
                                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0"/>
                                      {item.answer}
                                  </div>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- Q2: Classification (Page 96) ---
  const Question2 = () => {
      const [items, setItems] = useState([
          { id: 1, text: 'تقديم الرعاية الاجتماعية للمواطن', type: 'rights' },
          { id: 2, text: 'إتقان الموظف العمل الذي يقوم به', type: 'duties' },
          { id: 3, text: 'الالتزام بالأنظمة والقوانين', type: 'duties' },
          { id: 4, text: 'التعبير عن الرأي بما يخدم مصلحة الوطن', type: 'rights' },
      ]);
      const [classified, setClassified] = useState<{[key: number]: string}>({});

      const handleSort = (id: number, type: string) => {
          setClassified(prev => ({...prev, [id]: type}));
      };

      return (
          <div className="space-y-8 animate-fade-in">
              <div className="bg-green-100 p-4 rounded-xl border-r-4 border-green-600 flex items-center gap-3">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                  <h3 className="text-xl font-black text-green-900">صنف العبارات الآتية (حقوق / واجبات):</h3>
              </div>

              <div className="grid gap-4 mb-8">
                  {items.map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                          <p className="font-bold text-slate-700 text-lg text-center md:text-right">{item.text}</p>
                          
                          {classified[item.id] ? (
                              <span className={`px-6 py-2 rounded-full font-black text-white animate-scale-in ${classified[item.id] === 'rights' ? 'bg-blue-500' : 'bg-red-500'}`}>
                                  {classified[item.id] === 'rights' ? 'حقوق' : 'واجبات'}
                              </span>
                          ) : (
                              <div className="flex gap-3">
                                  <button onClick={() => handleSort(item.id, item.type === 'rights' ? 'rights' : 'error')} className="px-6 py-2 rounded-lg border-2 border-blue-500 text-blue-600 font-bold hover:bg-blue-50">حقوق</button>
                                  <button onClick={() => handleSort(item.id, item.type === 'duties' ? 'duties' : 'error')} className="px-6 py-2 rounded-lg border-2 border-red-500 text-red-600 font-bold hover:bg-red-50">واجبات</button>
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- Q3: Evidence (Page 96) ---
  const Question3 = () => {
      const [showAnswer, setShowAnswer] = useState(false);

      return (
          <div className="space-y-8 animate-fade-in">
              <div className="bg-green-100 p-4 rounded-xl border-r-4 border-green-600 flex items-center gap-3">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                  <h3 className="text-xl font-black text-green-900">دلل على اهتمام سلطنة عمان برعاية حقوق المواطنين كاملة دون تقصير.</h3>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 text-center">
                  {!showAnswer ? (
                      <button 
                          onClick={() => setShowAnswer(true)}
                          className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
                      >
                          <HelpCircle /> إظهار الأدلة
                      </button>
                  ) : (
                      <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
                          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                              <Scale size={40} className="text-blue-600 mx-auto mb-3"/>
                              <h4 className="font-bold text-blue-900 mb-2">النظام الأساسي</h4>
                              <p className="text-sm text-blue-800">إصدار النظام الأساسي للدولة الذي كفل الحقوق والحريات.</p>
                          </div>
                          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                              <Building2 size={40} className="text-orange-600 mx-auto mb-3"/>
                              <h4 className="font-bold text-orange-900 mb-2">المؤسسات</h4>
                              <p className="text-sm text-orange-800">إنشاء مؤسسات لخدمة المواطن (تعليمية، صحية، أمنية، قضائية).</p>
                          </div>
                          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                              <Heart size={40} className="text-purple-600 mx-auto mb-3"/>
                              <h4 className="font-bold text-purple-900 mb-2">اللجان الوطنية</h4>
                              <p className="text-sm text-purple-800">إنشاء اللجنة العمانية لحقوق الإنسان لمتابعة ورصد الحقوق.</p>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- Q4: Reasoning (Page 97) ---
  const Question4 = () => {
      const [showAnswer, setShowAnswer] = useState(false);

      return (
          <div className="space-y-8 animate-fade-in">
              <div className="bg-green-100 p-4 rounded-xl border-r-4 border-green-600 flex items-center gap-3">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                  <h3 className="text-xl font-black text-green-900">علل: انضمام سلطنة عمان إلى اتفاقية حقوق الطفل.</h3>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 flex flex-col items-center justify-center min-h-[300px]">
                  <div className="bg-indigo-100 p-4 rounded-full mb-6">
                      <ShieldCheck size={48} className="text-indigo-600" />
                  </div>
                  
                  {!showAnswer ? (
                      <button 
                          onClick={() => setShowAnswer(true)}
                          className="text-indigo-600 font-bold text-lg hover:underline"
                      >
                          اضغط لمعرفة السبب
                      </button>
                  ) : (
                      <div className="animate-scale-in text-center max-w-2xl">
                          <p className="text-2xl font-black text-slate-800 mb-4 leading-relaxed">
                              "لضمان توفير حقوقهم كاملة، ولحمايتهم من أي ضرر قد يلحق بهم."
                          </p>
                          <div className="flex justify-center gap-4">
                              <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">رعاية صحية</span>
                              <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">تعليم</span>
                              <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">حماية</span>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- Q5: Recall (Page 97) ---
  const Question5 = () => {
      const [revealed, setRevealed] = useState(false);

      return (
          <div className="space-y-8 animate-fade-in">
              <div className="bg-green-100 p-4 rounded-xl border-r-4 border-green-600 flex items-center gap-3">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span>
                  <h3 className="text-xl font-black text-green-900">اذكر أمثلة لمنظومة حقوق الإنسان التي وضعها الإمام سعيد بن عبدالله الرحيلي.</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  {['حق المساواة بين الرعية', 'حق الحرية', 'حق المشاركة والشورى'].map((right, idx) => (
                      <div 
                          key={idx}
                          onClick={() => setRevealed(true)}
                          className={`cursor-pointer p-8 rounded-3xl border-2 flex items-center justify-center text-center transition-all duration-500 ${revealed ? 'bg-amber-50 border-amber-400 rotate-0' : 'bg-slate-100 border-slate-300 hover:bg-slate-200'}`}
                      >
                          {revealed ? (
                              <span className="font-black text-amber-900 text-lg animate-scale-in">{right}</span>
                          ) : (
                              <span className="text-slate-400 font-bold text-4xl">?</span>
                          )}
                      </div>
                  ))}
              </div>
              
              {!revealed && (
                  <p className="text-center text-slate-500 text-sm mt-4 animate-pulse">اضغط على البطاقات للكشف</p>
              )}
          </div>
      );
  };

  const renderStep = () => {
      switch(currentStep) {
          case 1: return <Question1 />;
          case 2: return <Question2 />;
          case 3: return <Question3 />;
          case 4: return <Question4 />;
          case 5: return <Question5 />;
          default: return <Question1 />;
      }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-green-600 text-lg transition-colors">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl font-black text-green-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثالثة)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-green-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>

            {renderStep()}
        </div>

        {/* Navigation Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 shadow-lg z-30">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <button 
                    onClick={prevStep} 
                    disabled={currentStep === 1}
                    className="px-6 py-3 rounded-xl font-bold bg-slate-100 text-slate-600 disabled:opacity-50 hover:bg-slate-200 transition-colors"
                >
                    السابق
                </button>
                <div className="text-slate-400 font-bold text-sm">
                    سؤال {currentStep} من {totalSteps}
                </div>
                {currentStep < totalSteps ? (
                    <button 
                        onClick={nextStep} 
                        className="px-8 py-3 rounded-xl font-bold bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-orange-200 transition-all transform hover:-translate-y-1"
                    >
                        التالي
                    </button>
                ) : (
                    <button 
                        onClick={onBack} 
                        className="px-8 py-3 rounded-xl font-bold bg-orange-600 text-white hover:bg-orange-700 shadow-lg flex items-center gap-2 animate-pulse"
                    >
                        <Star size={20}/> إنهاء التقييم
                    </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Unit3AssessmentG5;
