
import React, { useState } from 'react';
import { Menu, ArrowRight, Map, Building2, BookOpen, Users, Handshake, Shield, Crown, Scroll, Heart, Moon, Flag, Target, Scale, Swords, Tent } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const IslamicStateLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'foundation' | 'mosque' | 'brotherhood' | 'constitution' | 'defense'>('foundation');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. FOUNDATION: Arrival & The 4 Pillars (Page 52) ---
  const FoundationSection = () => {
      const [cityState, setCityState] = useState<'yathrib' | 'madinah'>('yathrib');

      return (
          <div className="p-6 animate-fade-in space-y-8">
              {/* Objectives */}
              <div className="bg-emerald-50 border-r-4 border-emerald-600 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2 flex items-center gap-2">
                      <Target className="text-emerald-600" /> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-2 text-emerald-800 font-medium">
                      <li>• تتبع هجرة الرسول ﷺ إلى المدينة المنورة.</li>
                      <li>• استنتاج أهمية الأعمال التأسيسية للدولة.</li>
                      <li>• التعرف على وثيقة المدينة (الصحيفة) وأطرافها.</li>
                      <li>• تقدير جهود المسلمين في حماية الدولة ونشر الإسلام.</li>
                  </ul>
              </div>

              {/* The Capital Transition */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 text-center relative p-8">
                  <h2 className="text-2xl font-black text-slate-800 mb-6">من يثرب إلى المدينة</h2>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                      <div className={`transition-all duration-500 p-4 rounded-2xl border-2 ${cityState === 'yathrib' ? 'bg-amber-100 border-amber-300' : 'bg-slate-50 opacity-50'}`}>
                          <h3 className="text-xl font-black text-amber-900">يثرب</h3>
                          <p className="text-xs text-amber-800">قبل الهجرة</p>
                      </div>

                      <button 
                          onClick={() => setCityState('madinah')}
                          className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-transform hover:scale-105 flex items-center gap-2"
                      >
                          <ArrowRight className="rotate-180" size={18}/> هجرة الرسول ﷺ
                      </button>

                      <div className={`transition-all duration-500 p-6 rounded-2xl border-4 ${cityState === 'madinah' ? 'bg-emerald-100 border-emerald-500 scale-110 shadow-xl' : 'bg-slate-50 opacity-50'}`}>
                          <span className="text-3xl block mb-2">🕌</span>
                          <h3 className="text-2xl font-black text-emerald-900">المدينة المنورة</h3>
                          <p className="text-sm font-bold text-emerald-700 bg-white px-2 py-1 rounded mt-2">عاصمة الدولة الإسلامية الأولى</p>
                      </div>
                  </div>

                  {cityState === 'madinah' && (
                      <div className="animate-slide-up bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
                          <h3 className="font-bold text-slate-800 mb-4 text-lg">أعمال الرسول ﷺ لتأسيس الدولة (ص 52):</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <button onClick={() => setActiveTab('mosque')} className="p-3 bg-white border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-colors">
                                  <Building2 className="mx-auto text-emerald-600 mb-2"/>
                                  <span className="font-bold text-sm text-slate-700">1. بناء المسجد</span>
                              </button>
                              <button onClick={() => setActiveTab('brotherhood')} className="p-3 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors">
                                  <Handshake className="mx-auto text-blue-600 mb-2"/>
                                  <span className="font-bold text-sm text-slate-700">2. المؤاخاة</span>
                              </button>
                              <button onClick={() => setActiveTab('constitution')} className="p-3 bg-white border border-amber-200 rounded-xl hover:bg-amber-50 transition-colors">
                                  <Scroll className="mx-auto text-amber-600 mb-2"/>
                                  <span className="font-bold text-sm text-slate-700">3. الصحيفة</span>
                              </button>
                              <button onClick={() => setActiveTab('defense')} className="p-3 bg-white border border-red-200 rounded-xl hover:bg-red-50 transition-colors">
                                  <Shield className="mx-auto text-red-600 mb-2"/>
                                  <span className="font-bold text-sm text-slate-700">4. حماية الدولة</span>
                              </button>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- 2. MOSQUE: Functions (Page 53) ---
  const MosqueSection = () => {
      const [activePart, setActivePart] = useState<string | null>(null);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-4">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أولاً: بناء المسجد النبوي</h2>
                  <p className="text-slate-600">أول عمل قام به الرسول ﷺ، وتعددت مهامه لتشمل (ص 53):</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                  {/* Interactive Diagram */}
                  <div className="relative bg-[#f0e6d2] p-4 rounded-xl border-4 border-[#8d6e63] shadow-xl aspect-square lg:aspect-auto min-h-[300px]">
                      {/* Prayer Area */}
                      <button 
                          onClick={() => setActivePart('worship')}
                          className="absolute top-10 left-1/2 -translate-x-1/2 w-2/3 h-1/4 bg-emerald-100/90 border-2 border-emerald-500 rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                      >
                          <Moon className="text-emerald-700"/> <span className="font-bold text-emerald-900">دار للعبادة</span>
                      </button>

                      {/* School */}
                      <button 
                          onClick={() => setActivePart('school')}
                          className="absolute top-1/2 left-8 -translate-y-1/2 w-1/3 h-1/3 bg-blue-100/90 border-2 border-blue-500 rounded-lg hover:scale-105 transition-transform flex flex-col items-center justify-center gap-1"
                      >
                          <BookOpen className="text-blue-700"/> <span className="font-bold text-blue-900 text-sm">مدرسة للعلم</span>
                      </button>

                      {/* Ruling */}
                      <button 
                          onClick={() => setActivePart('ruling')}
                          className="absolute top-1/2 right-8 -translate-y-1/2 w-1/3 h-1/3 bg-purple-100/90 border-2 border-purple-500 rounded-lg hover:scale-105 transition-transform flex flex-col items-center justify-center gap-1"
                      >
                          <Crown className="text-purple-700"/> <span className="font-bold text-purple-900 text-sm">مقر للحكم</span>
                      </button>

                      {/* Shelter */}
                      <button 
                          onClick={() => setActivePart('shelter')}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1/5 bg-amber-100/90 border-2 border-amber-500 rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                      >
                          <Users className="text-amber-700"/> <span className="font-bold text-amber-900 text-sm">مأوى للفقراء (الصفة)</span>
                      </button>
                  </div>

                  {/* Info Panel */}
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col justify-center text-center">
                      {activePart ? (
                          <div className="animate-slide-up">
                              {activePart === 'worship' && (
                                  <div className="text-emerald-900">
                                      <h3 className="text-2xl font-black mb-3">دار للعبادة</h3>
                                      <p className="text-lg">لأداء الصلاة وذكر الله وتوثيق الصلة بين العبد وربه.</p>
                                  </div>
                              )}
                              {activePart === 'school' && (
                                  <div className="text-blue-900">
                                      <h3 className="text-2xl font-black mb-3">مدرسة للعلم</h3>
                                      <p className="text-lg">لتعلم القرآن الكريم والسنة النبوية وأمور الدين.</p>
                                  </div>
                              )}
                              {activePart === 'ruling' && (
                                  <div className="text-purple-900">
                                      <h3 className="text-2xl font-black mb-3">مقر للحكم</h3>
                                      <p className="text-lg">منه تدار شؤون الدولة، وتنطلق الجيوش، وتستقبل الوفود.</p>
                                  </div>
                              )}
                              {activePart === 'shelter' && (
                                  <div className="text-amber-900">
                                      <h3 className="text-2xl font-black mb-3">مأوى للفقراء</h3>
                                      <p className="text-lg">مكان (الصفة) لإيواء الفقراء وعابري السبيل الذين لا مأوى لهم.</p>
                                  </div>
                              )}
                          </div>
                      ) : (
                          <div className="text-slate-400 py-10">
                              <Building2 size={64} className="mx-auto mb-4 opacity-50"/>
                              <p className="text-lg font-medium">اضغط على أجزاء المسجد لمعرفة المهام.</p>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. BROTHERHOOD (Page 53) ---
  const BrotherhoodSection = () => {
      const [step, setStep] = useState(0);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">ثانياً: المؤاخاة</h2>
                  <p className="text-slate-600">بين المهاجرين والأنصار</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-3xl border-2 border-blue-200 text-center">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow text-2xl">🕋</div>
                      <h3 className="text-xl font-black text-blue-900 mb-2">المهاجرون</h3>
                      <p className="text-blue-800 text-sm">أهل مكة الذين تركوا ديارهم وأموالهم نصرة لله ورسوله.</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-3xl border-2 border-green-200 text-center">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow text-2xl">🌴</div>
                      <h3 className="text-xl font-black text-green-900 mb-2">الأنصار</h3>
                      <p className="text-green-800 text-sm">أهل المدينة (الأوس والخزرج) الذين نصروا الرسول واستقبلوه.</p>
                  </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl text-center border-t-8 border-yellow-400">
                  <h3 className="text-xl font-bold mb-4">الهدف من المؤاخاة:</h3>
                  {step === 0 ? (
                      <button onClick={() => setStep(1)} className="bg-yellow-400 text-slate-900 px-8 py-2 rounded-full font-bold shadow hover:scale-105 transition-transform">
                          اضغط لمعرفة النتيجة
                      </button>
                  ) : (
                      <div className="animate-scale-in space-y-3">
                          <div className="flex items-center justify-center gap-2 text-yellow-600">
                              <Heart className="fill-yellow-500" />
                              <Handshake size={32} />
                              <Heart className="fill-yellow-500" />
                          </div>
                          <p className="text-lg font-medium text-slate-700 leading-relaxed">
                              تقوية الروابط بين المسلمين، ليصبحوا <span className="font-black text-yellow-600">كالجسد الواحد</span>، وتختفي العصبيات القبلية، ويتحقق التكافل الاجتماعي (المواساة بالمال والدار).
                          </p>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- 4. CONSTITUTION (SAHIFAH) (Pages 54-55) ---
  const ConstitutionSection = () => {
      const parties = [
          { name: 'المهاجرون', icon: '🕋' },
          { name: 'الأنصار', icon: '🌴' },
          { name: 'اليهود', icon: '🕍' }
      ];

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">ثالثاً: الصحيفة (وثيقة المدينة)</h2>
              </div>

              {/* Definition Box (Page 55) */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center shadow-sm">
                  <h3 className="text-xl font-black text-amber-900 mb-3 flex items-center justify-center gap-2">
                      <Scroll /> ما هي الصحيفة؟
                  </h3>
                  <p className="text-lg text-amber-800 font-medium leading-relaxed bg-white p-4 rounded-xl border border-amber-100">
                      "وثيقة وضعها الرسول ﷺ لتنظيم العلاقة بين جميع سكان المدينة، وتحديد حقوقهم وواجباتهم."
                  </p>
              </div>

              {/* Parties (Page 54) */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200">
                  <h3 className="font-bold text-slate-700 mb-4 text-center">أطراف الصحيفة (سكان المدينة):</h3>
                  <div className="flex justify-center gap-4 flex-wrap">
                      {parties.map((p, i) => (
                          <div key={i} className="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-100 min-w-[100px]">
                              <span className="text-3xl mb-2">{p.icon}</span>
                              <span className="font-bold text-slate-800">{p.name}</span>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Principles */}
              <div className="grid gap-3">
                  <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3">
                      <Scale className="text-blue-600 flex-shrink-0" />
                      <p className="text-blue-900 text-sm font-bold">العدل والمساواة بين الجميع.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex items-center gap-3">
                      <Heart className="text-green-600 flex-shrink-0" />
                      <p className="text-green-900 text-sm font-bold">حرية العقيدة (لليهود دينهم وللمسلمين دينهم).</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl flex items-center gap-3">
                      <Shield className="text-red-600 flex-shrink-0" />
                      <p className="text-red-900 text-sm font-bold">الدفاع المشترك عن المدينة ضد أي عدوان.</p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 5. DEFENSE (Page 56-57) - Modified: No Khandaq, Add Badr/Tabuk ---
  const DefenseSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">رابعاً: حماية الدولة</h2>
                  <p className="text-slate-600">قام الرسول ﷺ بإعداد جيش قوي لحماية الدولة والدفاع عنها.</p>
              </div>

              {/* Army Formation */}
              <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2"><Swords size={20}/> تكوين الجيش:</h3>
                  <p className="text-slate-700 leading-relaxed">
                      عمل الرسول ﷺ على تكوين جيش قوي، وتدريب الصحابة على فنون القتال، وإرسال السرايا والغزوات لتأمين حدود الدولة.
                  </p>
              </div>

              {/* Info Box: Badr & Tabuk (Page 56) */}
              <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 text-white p-6 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-16 bg-white opacity-5 rounded-full blur-2xl"></div>
                      <div className="relative z-10">
                          <span className="bg-yellow-500 text-slate-900 text-xs font-black px-2 py-1 rounded mb-2 inline-block">معلومة تهمك</span>
                          <h3 className="text-xl font-bold text-yellow-400 mb-1">غزوة بدر الكبرى (2 هـ)</h3>
                          <p className="text-slate-300 text-sm">أول غزوة في الإسلام، انتصر فيها المسلمون على المشركين.</p>
                      </div>
                  </div>

                  <div className="bg-slate-800 text-white p-6 rounded-2xl relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 p-16 bg-white opacity-5 rounded-full blur-2xl"></div>
                      <div className="relative z-10">
                          <span className="bg-yellow-500 text-slate-900 text-xs font-black px-2 py-1 rounded mb-2 inline-block">معلومة تهمك</span>
                          <h3 className="text-xl font-bold text-yellow-400 mb-1">غزوة تبوك (9 هـ)</h3>
                          <p className="text-slate-300 text-sm">آخر غزوة قادها الرسول ﷺ بنفسه.</p>
                      </div>
                  </div>
              </div>

              {/* Futuhat Definition (Page 57) */}
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-8 text-center shadow-lg">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Flag size={32} className="text-indigo-700"/>
                  </div>
                  <h3 className="text-2xl font-black text-indigo-900 mb-3">الفتوحات الإسلامية</h3>
                  <p className="text-lg text-indigo-800 font-bold bg-white p-4 rounded-xl shadow-sm border border-indigo-100">
                      "هي المعارك التي خاضها المسلمون لنشر الإسلام خارج شبه الجزيرة العربية."
                  </p>
                  <p className="mt-4 text-sm text-slate-500">
                      بدأت في عهد الخلفاء الراشدين واستمرت في الدول المتعاقبة.
                  </p>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'foundation': return <FoundationSection />;
      case 'mosque': return <MosqueSection />;
      case 'brotherhood': return <BrotherhoodSection />;
      case 'constitution': return <ConstitutionSection />;
      case 'defense': return <DefenseSection />;
      default: return <FoundationSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-emerald-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-emerald-100 flex flex-col`}>
        <div className="p-4 border-b border-emerald-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-emerald-700 px-2">الدولة الإسلامية 🕌</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('foundation'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'foundation' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Map size={20}/> التأسيس (العاصمة)
          </button>
          <button onClick={() => {setActiveTab('mosque'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'mosque' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> المسجد النبوي
          </button>
          <button onClick={() => {setActiveTab('brotherhood'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'brotherhood' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Handshake size={20}/> المؤاخاة
          </button>
          <button onClick={() => {setActiveTab('constitution'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'constitution' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Scroll size={20}/> الصحيفة
          </button>
          <button onClick={() => {setActiveTab('defense'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'defense' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Shield size={20}/> حماية الدولة
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-emerald-800">تأسيس الدولة</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default IslamicStateLesson;
