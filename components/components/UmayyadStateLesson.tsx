
import React, { useState } from 'react';
import { UMAYYAD_SECTIONS, UMAYYAD_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, Crown, Map, Swords, Building2, User, Flag, ArrowDown, Users, Star, BookOpen, Scroll } from 'lucide-react';
import SectionQuiz from './SectionQuiz';

interface Props {
    onBack: () => void;
}

const UmayyadStateLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.UMAYYAD_RISE);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. RISE & FOUNDATION ---
  const RiseSection = () => {
      const [year, setYear] = useState(41);
      
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-3xl font-black text-emerald-800 mb-2">قيام الدولة الأموية (41هـ - 132هـ)</h2>
                  <p className="text-slate-600">أسسها معاوية بن أبي سفيان بعد تنازل الحسن بن علي عن الخلافة</p>
              </div>

              {/* Year of Unity Interactive */}
              <div className="bg-white rounded-3xl shadow-xl border border-emerald-200 overflow-hidden">
                  <div className="bg-emerald-600 p-6 text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">عام الجماعة (41هـ)</h3>
                      <p>الحدث الفاصل في التاريخ الإسلامي</p>
                  </div>
                  <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                      <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
                          <h4 className="font-bold text-slate-700 mb-2">الحسن بن علي</h4>
                          <span className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full">تنازل عن الخلافة</span>
                      </div>
                      <div className="text-2xl text-emerald-500 font-black">🤝 حقناً لدماء المسلمين ➡</div>
                      <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-200">
                          <h4 className="font-bold text-emerald-900 mb-2">معاوية بن أبي سفيان</h4>
                          <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">أول خلفاء بني أمية</span>
                      </div>
                  </div>
                  
                  {/* Capital Shift */}
                  <div className="bg-slate-100 p-6 border-t border-slate-200 text-center">
                      <h4 className="font-bold text-slate-800 mb-4">نقل العاصمة</h4>
                      <div className="flex items-center justify-center gap-4">
                          <div className="opacity-50 line-through decoration-red-500 decoration-2 text-xl">الكوفة</div>
                          <ArrowRight className="text-slate-400" />
                          <div className="text-2xl font-black text-emerald-700 animate-pulse">دمشق</div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">لماذا دمشق؟ لقوتها الاقتصادية ووجود أنصار بني أمية فيها.</p>
                  </div>
              </div>

              {/* Caliphs Carousel */}
              <div className="space-y-4">
                  <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2"><Crown /> أشهر الخلفاء (من أصل 14 خليفة)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500">
                          <h4 className="font-bold text-lg">1. معاوية بن أبي سفيان</h4>
                          <p className="text-sm text-slate-600">المؤسس، أنشأ الدواوين (الرسائل والخاتم) واهتم بالأسطول.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
                          <h4 className="font-bold text-lg">2. عبدالملك بن مروان</h4>
                          <p className="text-sm text-slate-600">المؤسس الثاني، عرب الدواوين، وسك أول عملة إسلامية.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-purple-500">
                          <h4 className="font-bold text-lg">3. الوليد بن عبدالملك</h4>
                          <p className="text-sm text-slate-600">العصر الذهبي، وصلت الفتوحات لأقصى اتساع (الأندلس والصين).</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
                          <h4 className="font-bold text-lg">4. عمر بن عبدالعزيز</h4>
                          <p className="text-sm text-slate-600">خامس الراشدين، تميز بالعدل والزهد وإصلاح المظالم.</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. CONQUESTS (Pages 44-46) ---
  const ConquestsSection = () => {
      const [activeFront, setActiveFront] = useState<'east' | 'west' | 'north' | null>(null);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">حركة الفتوحات الإسلامية</h2>
                  <p className="text-slate-500">امتدت الدولة من حدود الصين شرقاً إلى الأندلس غرباً</p>
              </div>

              {/* Interactive Map Zones */}
              <div className="relative bg-blue-50 rounded-3xl p-6 border-4 border-blue-200 h-96 flex items-center justify-center overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  
                  {/* Central Hub */}
                  <div className="z-10 bg-emerald-600 text-white p-4 rounded-full shadow-xl animate-pulse cursor-default">
                      دمشق (العاصمة)
                  </div>

                  {/* East Front */}
                  <button 
                      onClick={() => setActiveFront('east')}
                      className={`absolute right-10 top-1/2 -translate-y-1/2 p-4 rounded-xl transition-all hover:scale-110 ${activeFront === 'east' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white text-orange-600 border-2 border-orange-200'}`}
                  >
                      <span className="block font-black text-lg">الشرق ⬅️</span>
                      <span className="text-xs">بلاد ما وراء النهر والسند</span>
                  </button>

                  {/* West Front */}
                  <button 
                      onClick={() => setActiveFront('west')}
                      className={`absolute left-10 top-1/2 -translate-y-1/2 p-4 rounded-xl transition-all hover:scale-110 ${activeFront === 'west' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-white text-indigo-600 border-2 border-indigo-200'}`}
                  >
                      <span className="block font-black text-lg">➡️ الغرب</span>
                      <span className="text-xs">شمال أفريقيا والأندلس</span>
                  </button>

                  {/* North Front */}
                  <button 
                      onClick={() => setActiveFront('north')}
                      className={`absolute top-10 left-1/2 -translate-x-1/2 p-4 rounded-xl transition-all hover:scale-110 ${activeFront === 'north' ? 'bg-red-500 text-white shadow-lg' : 'bg-white text-red-600 border-2 border-red-200'}`}
                  >
                      <span className="block font-black text-lg">⬆️ الشمال</span>
                      <span className="text-xs">آسيا الصغرى (الروم)</span>
                  </button>

                  {/* Detail Panel */}
                  {activeFront && (
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-2xl border-t-4 border-slate-600 animate-slide-up">
                          <h3 className="font-bold text-lg mb-2 text-slate-800">
                              {activeFront === 'east' && 'الجبهة الشرقية'}
                              {activeFront === 'west' && 'الجبهة الغربية'}
                              {activeFront === 'north' && 'الجبهة الشمالية'}
                          </h3>
                          <p className="text-slate-600 text-sm">
                              {activeFront === 'east' && 'قادها قتيبة بن مسلم الباهلي (فتح بلاد ما وراء النهر) ومحمد بن القاسم الثقفي (فتح بلاد السند).'}
                              {activeFront === 'west' && 'قادها عقبة بن نافع وموسى بن نصير (شمال أفريقيا) وطارق بن زياد (فتح الأندلس).'}
                              {activeFront === 'north' && 'محاولات فتح القسطنطينية والصوائف والشواتي ضد الروم.'}
                          </p>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- 3. ACHIEVEMENTS (Page 47-48) ---
  const AchievementsSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أبرز المنجزات الحضارية</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  {/* Administrative */}
                  <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
                      <div className="flex items-center gap-3 mb-3 text-blue-700">
                          <Scroll size={28} />
                          <h3 className="font-bold text-lg">1. التنظيم الإداري</h3>
                      </div>
                      <ul className="space-y-2 text-slate-600 text-sm list-disc list-inside">
                          <li>تعريب الدواوين (جعل اللغة العربية هي الرسمية).</li>
                          <li>سك العملة الإسلامية (الدينار الأموي).</li>
                          <li>تطوير نظام البريد لربط أطراف الدولة.</li>
                      </ul>
                  </div>

                  {/* Architectural */}
                  <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-yellow-500">
                      <div className="flex items-center gap-3 mb-3 text-yellow-700">
                          <Building2 size={28} />
                          <h3 className="font-bold text-lg">2. العمارة الإسلامية</h3>
                      </div>
                      <ul className="space-y-2 text-slate-600 text-sm list-disc list-inside">
                          <li>بناء <strong>مسجد قبة الصخرة</strong> في القدس (عبدالملك بن مروان).</li>
                          <li>بناء <strong>الجامع الأموي</strong> في دمشق (الوليد بن عبدالملك).</li>
                          <li>بناء المدن (مثل القيروان وواسط).</li>
                      </ul>
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. FALL (Page 49) ---
  const FallSection = () => {
      const [battleStep, setBattleStep] = useState(0);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="bg-slate-900 text-white rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                      <h2 className="text-3xl font-black text-red-500 mb-4">سقوط الدولة الأموية (132هـ)</h2>
                      <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-6">
                          <h3 className="text-xl font-bold text-yellow-400 mb-2">معركة الزاب</h3>
                          <p className="text-slate-300 mb-4">المعركة الفاصلة بين الجيش الأموي والجيش العباسي</p>
                          
                          <div className="flex items-center justify-center gap-8">
                              <div className={`transition-all duration-1000 ${battleStep === 1 ? 'opacity-30 blur-sm scale-90' : ''}`}>
                                  <span className="text-4xl block mb-2">🏳️</span>
                                  <span className="font-bold text-red-400">الأمويون</span>
                                  <span className="block text-xs text-slate-400">بقيادة مروان بن محمد</span>
                              </div>
                              
                              <div className="text-2xl font-black text-white">VS</div>
                              
                              <div className={`transition-all duration-1000 ${battleStep === 1 ? 'scale-125' : ''}`}>
                                  <span className="text-4xl block mb-2">🏴</span>
                                  <span className="font-bold text-white">العباسيون</span>
                                  <span className="block text-xs text-slate-400">الدعوة العباسية</span>
                              </div>
                          </div>
                      </div>

                      <button 
                          onClick={() => setBattleStep(prev => prev === 0 ? 1 : 0)}
                          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform active:scale-95"
                      >
                          {battleStep === 0 ? "شاهد النتيجة" : "إعادة"}
                      </button>

                      {battleStep === 1 && (
                          <div className="mt-6 animate-slide-up bg-green-600/20 p-4 rounded-xl border border-green-500/50">
                              <p className="font-bold text-green-300">النتيجة: هزيمة الأمويين، مقتل مروان بن محمد، وقيام الدولة العباسية.</p>
                          </div>
                      )}
                  </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2">أسباب السقوط:</h3>
                  <ul className="list-disc list-inside text-red-800 space-y-1">
                      <li>ظهور العصبية القبلية.</li>
                      <li>ضعف الخلفاء المتأخرين.</li>
                      <li>ظهور الدعوة العباسية المنظمة.</li>
                  </ul>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.UMAYYAD_RISE: return <RiseSection />;
      case Section.UMAYYAD_CONQUESTS: return <ConquestsSection />;
      case Section.UMAYYAD_ACHIEVEMENTS: return <AchievementsSection />;
      case Section.UMAYYAD_FALL: return <FallSection />;
      case Section.QUIZ: return <SectionQuiz questions={UMAYYAD_QUIZ_QUESTIONS} />;
      default: return <RiseSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-emerald-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-emerald-100 flex flex-col`}>
        <div className="p-4 border-b border-emerald-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-emerald-700 px-2">الدولة الأموية 🕌</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => { setActiveSection(Section.UMAYYAD_RISE); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.UMAYYAD_RISE ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Crown size={20}/> التأسيس والخلفاء
          </button>
          <button onClick={() => { setActiveSection(Section.UMAYYAD_CONQUESTS); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.UMAYYAD_CONQUESTS ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Map size={20}/> الفتوحات
          </button>
          <button onClick={() => { setActiveSection(Section.UMAYYAD_ACHIEVEMENTS); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.UMAYYAD_ACHIEVEMENTS ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> المنجزات
          </button>
          <button onClick={() => { setActiveSection(Section.UMAYYAD_FALL); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.UMAYYAD_FALL ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Flag size={20}/> السقوط
          </button>
          <button onClick={() => { setActiveSection(Section.QUIZ); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.QUIZ ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-emerald-800">الدولة الأموية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default UmayyadStateLesson;
