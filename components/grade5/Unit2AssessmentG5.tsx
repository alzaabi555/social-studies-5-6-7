
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, HelpCircle, MapPin, Award, BookOpen, Users, Scroll, MessageCircle, RefreshCw, Star } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit2AssessmentG5: React.FC<Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
      if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  // --- Q1: Works & Roles (Page 73) ---
  const Question1 = () => {
      const [revealed, setRevealed] = useState<string[]>([]);

      const works = [
          { id: 'mosque', text: 'بناء المسجد النبوي', icon: '🕌' },
          { id: 'brotherhood', text: 'المؤاخاة', icon: '🤝' },
          { id: 'sahifah', text: 'وثيقة المدينة (الصحيفة)', icon: '📜' },
          { id: 'defense', text: 'حماية الدولة (الجيش)', icon: '🛡️' }
      ];

      const roles = [
          { id: 'worship', text: 'دار للعبادة والصلاة', icon: '🤲' },
          { id: 'school', text: 'مدرسة للعلم', icon: '📖' },
          { id: 'gov', text: 'مقر للحكم وإدارة الدولة', icon: '⚖️' },
          { id: 'shelter', text: 'مأوى للفقراء (الصفة)', icon: '🏠' }
      ];

      const toggleReveal = (id: string) => {
          if (!revealed.includes(id)) setRevealed([...revealed, id]);
      };

      return (
          <div className="space-y-8 animate-fade-in">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                  <span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">1</span>
                  أذكر اثنين من:
              </h2>

              {/* Part A */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-emerald-500">
                  <h3 className="font-bold text-lg text-slate-700 mb-4">أ- الأعمال التي قام بها الرسول ﷺ لتأسيس الدولة:</h3>
                  <div className="grid grid-cols-2 gap-4">
                      {works.map(item => (
                          <button 
                              key={item.id}
                              onClick={() => toggleReveal(item.id)}
                              className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${revealed.includes(item.id) ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-dashed border-slate-300 text-slate-400 hover:bg-white'}`}
                          >
                              <span className="text-2xl">{item.icon}</span>
                              <span className="font-bold">{revealed.includes(item.id) ? item.text : 'اضغط للكشف'}</span>
                          </button>
                      ))}
                  </div>
              </div>

              {/* Part B */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-blue-500">
                  <h3 className="font-bold text-lg text-slate-700 mb-4">ب- الأدوار التي كان يقوم بها المسجد:</h3>
                  <div className="grid grid-cols-2 gap-4">
                      {roles.map(item => (
                          <button 
                              key={item.id}
                              onClick={() => toggleReveal(item.id)}
                              className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${revealed.includes(item.id) ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-slate-50 border-dashed border-slate-300 text-slate-400 hover:bg-white'}`}
                          >
                              <span className="text-2xl">{item.icon}</span>
                              <span className="font-bold">{revealed.includes(item.id) ? item.text : 'اضغط للكشف'}</span>
                          </button>
                      ))}
                  </div>
              </div>
          </div>
      );
  };

  // --- Q2: Definitions (Page 73) ---
  const Question2 = () => {
      const [matches, setMatches] = useState<{[key: string]: string}>({});
      
      const definitions = [
          { id: 'ansar', term: 'الأنصار', def: 'أهل المدينة الذين نصروا الرسول ﷺ واستقبلوه.' },
          { id: 'sahifah', term: 'الصحيفة', def: 'وثيقة تنظم العلاقة بين سكان المدينة وتحدد الحقوق والواجبات.' },
          { id: 'books', term: 'الكتب السماوية', def: 'الكتب التي أنزلها الله على رسله (التوراة، الإنجيل، الزبور، القرآن).' },
      ];

      const handleMatch = (id: string) => {
          setMatches(prev => ({...prev, [id]: 'revealed'}));
      };

      return (
          <div className="space-y-8 animate-slide-up">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                  <span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">2</span>
                  عَرِّف ما يأتي:
              </h2>

              <div className="grid gap-6">
                  {definitions.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
                          <div className="bg-orange-50 p-4 flex justify-between items-center">
                              <span className="font-black text-orange-900 text-lg flex items-center gap-2">
                                  <BookOpen size={20}/> {item.term}
                              </span>
                              {matches[item.id] !== 'revealed' && (
                                  <button 
                                      onClick={() => handleMatch(item.id)}
                                      className="text-xs bg-white border border-orange-200 text-orange-600 px-3 py-1 rounded-full font-bold hover:bg-orange-100"
                                  >
                                      إظهار التعريف
                                  </button>
                              )}
                          </div>
                          {matches[item.id] === 'revealed' && (
                              <div className="p-6 bg-yellow-50/50 animate-fade-in">
                                  <p className="text-slate-700 font-medium leading-relaxed">{item.def}</p>
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- Q3: Text Analysis (Page 73) ---
  const Question3 = () => {
      const [showAnswers, setShowAnswers] = useState(false);

      return (
          <div className="space-y-8 animate-slide-up">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                  <span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">3</span>
                  اقرأ النص، ثم أجب:
              </h2>

              <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 text-center shadow-sm">
                  <p className="text-xl text-indigo-900 font-serif leading-loose">
                      "ذَهَبَتْ وُفُودٌ عُمَانِيَّةٌ عَدِيدَةٌ لِرُؤْيَةِ الرَّسُولِ مُحَمَّدٍ ﷺ، وَالالْتِقَاءِ بِهِ."
                  </p>
              </div>

              <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                          <Users className="text-indigo-500"/> ما المقصود بالوفود؟
                      </h4>
                      {showAnswers ? (
                          <p className="text-indigo-700 font-medium bg-indigo-50 p-3 rounded-lg animate-fade-in">
                              هي جماعات من الناس تذهب لتمثيل قومها أو قبيلتها في مهمة رسمية.
                          </p>
                      ) : (
                          <div className="h-10 bg-slate-100 rounded-lg animate-pulse"></div>
                      )}
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                          <MessageCircle className="text-indigo-500"/> لماذا كانت وفود العمانيين تتجه لرؤية الرسول ﷺ؟
                      </h4>
                      {showAnswers ? (
                          <p className="text-indigo-700 font-medium bg-indigo-50 p-3 rounded-lg animate-fade-in">
                              لإعلان إسلامهم، والتعرف على مبادئ الدين الإسلامي، ونيل شرف لقاء النبي ﷺ.
                          </p>
                      ) : (
                          <div className="h-10 bg-slate-100 rounded-lg animate-pulse"></div>
                      )}
                  </div>

                  <div className="text-center mt-4">
                      <button 
                          onClick={() => setShowAnswers(!showAnswers)}
                          className="bg-indigo-600 text-white px-8 py-2 rounded-full font-bold shadow hover:bg-indigo-700 transition-colors"
                      >
                          {showAnswers ? 'إخفاء الإجابات' : 'كشف الإجابات'}
                      </button>
                  </div>
              </div>
          </div>
      );
  };

  // --- Q4: Personalities (Page 73) ---
  const Question4 = () => {
      const [revealedNames, setRevealedNames] = useState<number[]>([]);

      const data = [
          { id: 1, desc: 'كان خطيباً مشهوراً.', name: 'صُحار بن العباس العبدي', color: 'bg-red-100 text-red-800' },
          { id: 2, desc: 'رافق الصحابي مازن بن غضوبة في رحلته إلى المدينة.', name: 'صالح بن المتوكل', color: 'bg-green-100 text-green-800' },
          { id: 3, desc: 'كان في الوفد الذي ذهب إلى المدينة في عهد أبي بكر الصديق.', name: 'عبد بن الجلندى', color: 'bg-blue-100 text-blue-800' },
      ];

      const toggleName = (id: number) => {
          if (!revealedNames.includes(id)) setRevealedNames([...revealedNames, id]);
      };

      return (
          <div className="space-y-8 animate-slide-up">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                  <span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">4</span>
                  تَعَرَّف اسم الشخصية الآتية:
              </h2>

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                  <table className="w-full text-right">
                      <thead className="bg-orange-100 text-orange-900">
                          <tr>
                              <th className="p-4 w-2/3 border-b-2 border-orange-200">الأعمال</th>
                              <th className="p-4 w-1/3 border-b-2 border-orange-200">الشخصية</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                          {data.map((row) => (
                              <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                                  <td className="p-4 text-slate-700 font-medium text-lg align-middle">
                                      {row.desc}
                                  </td>
                                  <td className="p-4 align-middle text-center">
                                      {revealedNames.includes(row.id) ? (
                                          <div className={`font-black px-4 py-2 rounded-xl shadow-sm animate-scale-in ${row.color}`}>
                                              {row.name}
                                          </div>
                                      ) : (
                                          <button 
                                              onClick={() => toggleName(row.id)}
                                              className="bg-slate-200 text-slate-500 px-4 py-2 rounded-full font-bold text-sm hover:bg-slate-300 hover:text-slate-700 transition-colors"
                                          >
                                              ؟ اكشف الاسم
                                          </button>
                                      )}
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      );
  };

  // --- Q5: Map (Page 74) ---
  const Question5 = () => {
      const [activeCity, setActiveCity] = useState<string | null>(null);
      const [correctCities, setCorrectCities] = useState<string[]>([]);

      const cities = [
          { id: 'sohar', name: 'صحار', x: 75, y: 22 },
          { id: 'buraimi', name: 'البريمي', x: 68, y: 18 }, // Tuwam
          { id: 'samail', name: 'سمائل', x: 82, y: 28 },
          { id: 'mirbat', name: 'مرباط', x: 25, y: 85 }
      ];

      const handleCityClick = (cityId: string) => {
          if (!correctCities.includes(cityId)) {
              setCorrectCities([...correctCities, cityId]);
              setActiveCity(cityId);
          }
      };

      return (
          <div className="space-y-8 animate-slide-up">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                  <span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">5</span>
                  حدد على الخريطة المدن: (صحار، مرباط، البريمي، سمائل)
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="relative w-full max-w-md bg-blue-50 rounded-3xl border-4 border-slate-300 overflow-hidden shadow-2xl">
                      {/* Oman Map Placeholder SVG */}
                      <svg viewBox="0 0 100 100" className="w-full h-auto bg-[#e0f2fe]">
                          {/* Land */}
                          <path d="M85,5 L95,15 L90,40 L60,60 L30,90 L10,85 L20,70 L40,50 L50,30 L60,10 Z" fill="#d1fae5" stroke="#059669" strokeWidth="0.5" />
                          
                          {/* Cities Buttons */}
                          {cities.map((city) => (
                              <g key={city.id} onClick={() => handleCityClick(city.id)} className="cursor-pointer">
                                  <circle 
                                      cx={city.x} 
                                      cy={city.y} 
                                      r="3" 
                                      fill={correctCities.includes(city.id) ? "#ef4444" : "#ffffff"} 
                                      stroke="#b91c1c" 
                                      strokeWidth="0.5"
                                      className="animate-pulse"
                                  />
                                  {correctCities.includes(city.id) && (
                                      <text x={city.x} y={city.y - 4} fontSize="4" textAnchor="middle" fontWeight="bold" fill="#7f1d1d" className="bg-white/80">
                                          {city.name}
                                      </text>
                                  )}
                              </g>
                          ))}
                      </svg>
                      <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 text-[10px] rounded shadow text-slate-500">
                          اضغط على النقاط لتسمية المدن
                      </div>
                  </div>

                  <div className="flex-1 w-full">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                          <h4 className="font-bold text-slate-800 mb-4">قائمة المدن المكتشفة:</h4>
                          <div className="space-y-3">
                              {cities.map((city) => (
                                  <div key={city.id} className={`flex items-center justify-between p-3 rounded-xl border-2 ${correctCities.includes(city.id) ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100'}`}>
                                      <span className={`font-bold ${correctCities.includes(city.id) ? 'text-green-800' : 'text-slate-400'}`}>
                                          {city.name}
                                      </span>
                                      {correctCities.includes(city.id) ? <CheckCircle className="text-green-500" size={20}/> : <HelpCircle className="text-slate-300" size={20}/>}
                                  </div>
                              ))}
                          </div>
                          {correctCities.length === cities.length && (
                              <div className="mt-6 text-center animate-bounce">
                                  <span className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black shadow-lg">
                                      أحسنت! أكملت الخريطة 🗺️
                                  </span>
                              </div>
                          )}
                      </div>
                  </div>
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
          case 5: return <Question5 />;
          default: return <Question1 />;
      }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-orange-600 text-lg transition-colors">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl font-black text-orange-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثانية)</h1>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-orange-500 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
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
                        className="px-8 py-3 rounded-xl font-bold bg-green-600 text-white hover:bg-green-700 shadow-lg flex items-center gap-2 animate-pulse"
                    >
                        <Award size={20}/> إنهاء التقييم
                    </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Unit2AssessmentG5;
