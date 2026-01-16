
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, RefreshCw, Building2, Users, HeartHandshake, BookOpen, Crown, Vote, Droplet, Sprout, Mic2, HelpCircle, Star } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit3AssessmentG6: React.FC<Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
  };

  const prevStep = () => {
      if (currentStep > 1) setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
  };

  // --- QUESTION 1: Identify Entity ---
  const Question1 = () => {
      const [answers, setAnswers] = useState<{ [key: number]: string }>({});
      
      const questions = [
          { id: 1, text: 'الإشراف على مؤسسات المجتمع المدني وإشهارها', correct: 'وزارة التنمية الاجتماعية', options: ['وزارة التربية والتعليم', 'وزارة التنمية الاجتماعية', 'وزارة الداخلية'] },
          { id: 2, text: 'تفعيل دور المرأة للمساهمة في البناء والتنمية المجتمعية', correct: 'جمعيات المرأة العمانية', options: ['جمعيات البيئة', 'الأندية الرياضية', 'جمعيات المرأة العمانية'] }
      ];

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-teal-100 p-4 rounded-xl border-r-4 border-teal-600">
                  <h3 className="text-xl font-bold text-teal-900">١- اكتب اسم الجهة المختصة بالأعمال الآتية:</h3>
              </div>

              <div className="grid gap-6">
                  {questions.map((q) => (
                      <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-start gap-2">
                              <span className="text-teal-600 mt-1"><Building2 size={24}/></span>
                              {q.text}
                          </h4>
                          
                          <div className="flex flex-wrap gap-3">
                              {q.options.map((opt) => (
                                  <button
                                      key={opt}
                                      onClick={() => setAnswers({...answers, [q.id]: opt})}
                                      className={`px-4 py-2 rounded-lg font-bold border-2 transition-all ${
                                          answers[q.id] === opt 
                                          ? (opt === q.correct ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900') 
                                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-teal-300'
                                      }`}
                                  >
                                      {opt}
                                      {answers[q.id] === opt && opt === q.correct && <CheckCircle className="inline mr-2" size={16}/>}
                                  </button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- QUESTION 2: Definitions ---
  const Question2 = () => {
      const [flipped, setFlipped] = useState<number | null>(null);

      const definitions = [
          { 
              id: 1, 
              term: 'المجتمع المدني', 
              def: 'مؤسسات وجمعيات أهلية تطوعية، ينشئها الأفراد بمحض إرادتهم، وتعمل وفق قوانين الدولة، ولا تهدف للربح.',
              icon: <Users size={32} className="text-blue-500"/>
          },
          { 
              id: 2, 
              term: 'المشاركة المجتمعية', 
              def: 'مساهمة المواطنين بجهدهم وفكرهم ومالهم في خدمة مجتمعهم ووطنهم، والمشاركة في اتخاذ القرارات.',
              icon: <HeartHandshake size={32} className="text-rose-500"/>
          },
          { 
              id: 3, 
              term: 'العمل التطوعي', 
              def: 'الجهد الذي يبذله الفرد من أجل الآخرين أو المجتمع دون انتظار مقابل مادي.',
              icon: <Star size={32} className="text-yellow-500"/>
          }
      ];

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-blue-100 p-4 rounded-xl border-r-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-900">٢- عَرِّف ما يأتي:</h3>
                  <p className="text-blue-700 text-sm mt-1">اضغط على البطاقة لقلبها وقراءة التعريف</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  {definitions.map((item) => (
                      <div 
                          key={item.id}
                          onClick={() => setFlipped(flipped === item.id ? null : item.id)}
                          className="relative h-64 cursor-pointer perspective-1000 group"
                      >
                          <div className={`w-full h-full transition-all duration-700 transform-style-3d ${flipped === item.id ? 'rotate-y-180' : ''}`}>
                              {/* Front */}
                              <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-lg border-2 border-slate-100 flex flex-col items-center justify-center p-6 hover:border-blue-300">
                                  <div className="bg-slate-50 p-4 rounded-full mb-4 shadow-inner">
                                      {item.icon}
                                  </div>
                                  <h4 className="text-xl font-black text-slate-800">{item.term}</h4>
                                  <span className="mt-4 text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">اضغط للتعريف</span>
                              </div>

                              {/* Back */}
                              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg border-2 border-blue-200 p-6 flex items-center justify-center rotate-y-180">
                                  <p className="text-center font-bold text-blue-900 leading-relaxed text-sm">
                                      {item.def}
                                  </p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- QUESTION 3: Roles (Clarify) ---
  const Question3 = () => {
      const [activeRole, setActiveRole] = useState<number | null>(null);

      const items = [
          { 
              id: 1, 
              title: 'النظام الأساسي للدولة', 
              subtitle: 'في تنظيم عمل مؤسسات المجتمع المدني',
              content: 'كفل النظام الأساسي حق تكوين الجمعيات، ووضع الأطر القانونية التي تنظم عملها وتضمن استقلاليتها تحت إشراف الدولة.',
              icon: <BookOpen size={24}/>
          },
          { 
              id: 2, 
              title: 'السبلة العمانية', 
              subtitle: 'في ترسيخ مفهوم المشاركة المجتمعية',
              content: 'تُعد مدرسة تقليدية للشورى والحوار، حيث يجتمع فيها أهالي الحي لمناقشة شؤونهم وحل مشكلاتهم وتعزيز التعاون بينهم.',
              icon: <Building2 size={24}/>
          },
          { 
              id: 3, 
              title: 'المشاركة المجتمعية', 
              subtitle: 'في تعزيز التعاون بين أفراد المجتمع',
              content: 'تزيد من التلاحم والترابط بين الأفراد، وتنمي روح المسؤولية، وتساعد في إنجاز المشاريع الخدمية التي يحتاجها المجتمع.',
              icon: <Users size={24}/>
          }
      ];

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600">
                  <h3 className="text-xl font-bold text-purple-900">٣- وضّح دور كلٍّ من:</h3>
              </div>

              <div className="space-y-4">
                  {items.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                          <button 
                              onClick={() => setActiveRole(activeRole === item.id ? null : item.id)}
                              className={`w-full p-5 text-right flex items-center justify-between transition-colors ${activeRole === item.id ? 'bg-purple-50' : 'hover:bg-slate-50'}`}
                          >
                              <div className="flex items-center gap-4">
                                  <div className={`p-2 rounded-lg ${activeRole === item.id ? 'bg-purple-200 text-purple-800' : 'bg-slate-100 text-slate-500'}`}>
                                      {item.icon}
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                                      <p className="text-xs text-slate-500">{item.subtitle}</p>
                                  </div>
                              </div>
                              <span className={`text-2xl font-bold transition-transform ${activeRole === item.id ? 'rotate-180 text-purple-600' : 'text-slate-300'}`}>
                                  ▼
                              </span>
                          </button>
                          
                          {activeRole === item.id && (
                              <div className="p-6 bg-purple-50/30 border-t border-purple-100 animate-slide-up">
                                  <p className="text-purple-900 font-medium leading-relaxed">
                                      <span className="font-bold text-purple-700">الدور: </span>
                                      {item.content}
                                  </p>
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- QUESTION 4: Classification (Sort Actions) ---
  const Question4 = () => {
      const [items, setItems] = useState([
          { id: 1, text: 'تنظيف الأفلاج', type: 'voluntary', icon: <Sprout size={20}/> },
          { id: 2, text: 'اختيار رئيس الجماعة الطلابية', type: 'political', icon: <Vote size={20}/> },
          { id: 3, text: 'تقديم فقرة في الحفل الوطني', type: 'cultural', icon: <Mic2 size={20}/> },
          { id: 4, text: 'تنظيم فعالية التبرع بالدم', type: 'voluntary', icon: <Droplet size={20}/> },
      ]);
      
      const [feedback, setFeedback] = useState<{[key: number]: string}>({});

      const handleClassify = (id: number, type: string) => {
          setFeedback(prev => ({ ...prev, [id]: type }));
      };

      const getButtonStyle = (itemId: number, btnType: string) => {
          const selectedType = feedback[itemId];
          if (!selectedType) return 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50';
          
          const correctType = items.find(i => i.id === itemId)?.type;
          
          if (selectedType === btnType) {
              return btnType === correctType 
                  ? 'bg-green-100 border-green-500 text-green-900 ring-1 ring-green-500' // Correct selection
                  : 'bg-red-100 border-red-500 text-red-900'; // Wrong selection
          }
          return 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
      };

      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-orange-100 p-4 rounded-xl border-r-4 border-orange-600">
                  <h3 className="text-xl font-bold text-orange-900">٤- صنّف الأعمال الآتية حسب شكل المشاركة المجتمعية:</h3>
              </div>

              <div className="grid gap-4">
                  {items.map((item) => (
                      <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3 w-full md:w-auto">
                              <div className="bg-orange-100 p-2 rounded-full text-orange-600">{item.icon}</div>
                              <span className="font-bold text-slate-800 text-lg">{item.text}</span>
                          </div>
                          
                          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                              <button 
                                  onClick={() => handleClassify(item.id, 'voluntary')}
                                  className={`px-4 py-2 rounded-lg border-2 font-bold text-sm whitespace-nowrap transition-all ${getButtonStyle(item.id, 'voluntary')}`}
                              >
                                  عمل تطوعي
                              </button>
                              <button 
                                  onClick={() => handleClassify(item.id, 'political')}
                                  className={`px-4 py-2 rounded-lg border-2 font-bold text-sm whitespace-nowrap transition-all ${getButtonStyle(item.id, 'political')}`}
                              >
                                  انتخاب / شورى
                              </button>
                              <button 
                                  onClick={() => handleClassify(item.id, 'cultural')}
                                  className={`px-4 py-2 rounded-lg border-2 font-bold text-sm whitespace-nowrap transition-all ${getButtonStyle(item.id, 'cultural')}`}
                              >
                                  مشاركة ثقافية
                              </button>
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
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-teal-600 text-lg transition-colors">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl font-black text-teal-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثالثة - مطابق للكتاب ص97)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-teal-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>

            {currentStep === 1 && <Question1 />}
            {currentStep === 2 && <Question2 />}
            {currentStep === 3 && <Question3 />}
            {currentStep === 4 && <Question4 />}

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
                        className="px-8 py-2 rounded-xl font-bold bg-teal-600 text-white hover:bg-teal-700 shadow-lg transition-transform hover:scale-105"
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

export default Unit3AssessmentG6;
