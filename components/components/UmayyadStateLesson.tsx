import React, { useState } from 'react';
import { UMAYYAD_SECTIONS, UMAYYAD_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, Target, Building2, Scale, Search, UserCheck, Star, Crown, Mail, Sparkles, Swords, Waves, RefreshCw, Play, BookOpen, Coins } from 'lucide-react';
import SectionQuiz from './SectionQuiz';

interface Props {
    onBack: () => void;
}

const UmayyadStateLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.UMAYYAD_RISE);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- RISE SECTION ---
  const RiseSection = () => {
      const [showDiff, setShowDiff] = useState(false);
      const [activeCaliph, setActiveCaliph] = useState<number | null>(null);

      const caliphs = [
          { id: 1, name: 'معاوية بن أبي سفيان', title: 'المؤسس', desc: 'أسس الدولة، أنشأ الدواوين، واهتم بالأسطول البحري.', icon: <Crown size={28}/>, color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
          { id: 2, name: 'عبدالملك بن مروان', title: 'المؤسس الثاني', desc: 'عرب الدواوين، وسك أول عملة إسلامية، وبنى قبة الصخرة.', icon: <Coins size={28}/>, color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
          { id: 3, name: 'الوليد بن عبدالملك', title: 'العصر الذهبي', desc: 'وصلت الفتوحات لأقصى اتساع، وبنى الجامع الأموي.', icon: <Building2 size={28}/>, color: 'bg-blue-100 text-blue-800 border-blue-300' },
          { id: 4, name: 'عمر بن عبدالعزيز', title: 'خامس الراشدين', desc: 'تميز بالعدل والزهد، وأوقف الفتوحات لنشر الإسلام بالدعوة.', icon: <Scale size={28}/>, color: 'bg-purple-100 text-purple-800 border-purple-300' },
      ];
      
      return (
          <div className="p-6 animate-fade-in space-y-8">
              {/* Objectives */}
              <div className="bg-emerald-50 border-r-4 border-emerald-600 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-3 text-emerald-900 font-medium text-lg leading-relaxed">
                      <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> توضيح قيام الدولة الأموية وتغير نظام الحكم.</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> ذكر أبرز خلفاء بني أمية وإنجازاتهم.</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> تتبع حركة الفتوحات الإسلامية.</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> تفسير أسباب نهاية الدولة الأموية.</li>
                  </ul>
              </div>

              {/* Establishment */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 text-center">
                  <h2 className="text-3xl font-black text-slate-800 mb-6">قيام الدولة الأموية (41هـ)</h2>
                  
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-600 mb-2">الخليفة الراشدي الرابع</h4>
                          <div className="text-xl font-black text-emerald-700 bg-white p-3 rounded-lg shadow-sm border border-emerald-100">علي بن أبي طالب (كرم الله وجهه)</div>
                      </div>
                      <div className="text-3xl text-slate-400 animate-pulse">⬅️</div>
                      <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-600 mb-2">مؤسس الدولة الأموية</h4>
                          <div className="text-xl font-black text-emerald-700 bg-white p-3 rounded-lg shadow-sm border border-emerald-100">معاوية بن أبي سفيان</div>
                      </div>
                  </div>

                  <button 
                    onClick={() => setShowDiff(!showDiff)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-3 px-6 rounded-full shadow-md transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                  >
                      <Scale size={20} /> 
                      {showDiff ? "إخفاء المقارنة" : "كيف تغير نظام الحكم؟ (اضغط للكشف)"}
                  </button>

                  {showDiff && (
                      <div className="mt-6 grid md:grid-cols-2 gap-4 animate-slide-up">
                          <div className="bg-slate-100 p-4 rounded-xl border border-slate-300">
                              <span className="block font-bold text-slate-500 text-base mb-1">العصر الراشدي</span>
                              <span className="text-2xl font-black text-slate-800">نظام الشورى</span>
                          </div>
                          <div className="bg-emerald-100 p-4 rounded-xl border border-emerald-300">
                              <span className="block font-bold text-emerald-700 text-base mb-1">العصر الأموي</span>
                              <span className="text-2xl font-black text-emerald-900">نظام الوراثة</span>
                              <p className="text-sm font-medium mt-1 text-emerald-700">(بدأ بولاية العهد ليزيد بن معاوية)</p>
                          </div>
                      </div>
                  )}
              </div>

              {/* Caliphs Gallery */}
              <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-800 text-center flex items-center justify-center gap-2">
                      <Star className="text-yellow-500 fill-yellow-500" size={24}/> أبرز خلفاء الدولة الأموية
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {caliphs.map((caliph) => (
                          <div 
                            key={caliph.id}
                            onClick={() => setActiveCaliph(activeCaliph === caliph.id ? null : caliph.id)}
                            className={`cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300 ${activeCaliph === caliph.id ? `shadow-xl scale-[1.02] ${caliph.color}` : 'bg-white border-slate-200 hover:border-slate-300'}`}
                          >
                              <div className="flex items-center gap-3">
                                  <div className={`p-3 rounded-full ${activeCaliph === caliph.id ? 'bg-white/30' : 'bg-slate-100 text-slate-600'}`}>
                                      {caliph.icon}
                                  </div>
                                  <div>
                                      <h3 className="text-xl font-black">{caliph.name}</h3>
                                      <p className={`text-base font-bold ${activeCaliph === caliph.id ? 'opacity-90' : 'text-slate-500'}`}>{caliph.title}</p>
                                  </div>
                              </div>
                              {activeCaliph === caliph.id && (
                                  <div className="mt-3 pt-3 border-t border-black/10 animate-fade-in">
                                      <p className="text-lg font-medium leading-relaxed">{caliph.desc}</p>
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Research Activity */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-sm">
                  <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2"><Search size={24}/> نشاط بحثي (صفحة 58)</h4>
                  <p className="text-blue-800 text-lg font-medium mb-3">ابحث عن سبب الخلافات التي حدثت بين علي بن أبي طالب ومعاوية بن أبي سفيان.</p>
                  <textarea className="w-full p-3 rounded-xl border border-blue-300 text-lg h-24 focus:outline-none focus:border-blue-500" placeholder="اكتب إجابتك هنا..."></textarea>
              </div>
          </div>
      );
  };

  // --- CONQUESTS SECTION ---
  const ConquestsSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">الفتوحات الإسلامية</h2>
                  <p className="text-lg text-slate-600">امتدت الدولة الأموية من الصين شرقاً إلى الأندلس غرباً</p>
              </div>
              <div className="bg-indigo-50 rounded-2xl p-6 shadow-sm border-r-4 border-indigo-600 flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-indigo-200 p-4 rounded-full text-indigo-700 flex-shrink-0">
                      <UserCheck size={40} />
                  </div>
                  <div>
                      <h3 className="text-xl font-black text-indigo-900 mb-2">شخصية من الدرس (صفحة 59)</h3>
                      <h4 className="text-2xl font-black text-indigo-700 mb-2">قتيبة بن مسلم الباهلي</h4>
                      <p className="text-lg text-indigo-800 font-medium leading-relaxed">
                          قائد عسكري فذ، قاد الفتوحات الإسلامية في المشرق، ونجح في فتح <strong>"بلاد ما وراء النهر"</strong>.
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  // --- ACHIEVEMENTS SECTION ---
  const AchievementsSection = () => {
      const [activeItem, setActiveItem] = useState<string | null>(null);
      const triggerAnimation = (id: string) => {
          setActiveItem(null);
          setTimeout(() => setActiveItem(id), 50);
      };

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">منجزات الدولة الأموية</h2>
              </div>
              <div className="space-y-6">
                  <div onClick={() => triggerAnimation('admin')} className="cursor-pointer group flex flex-col md:flex-row gap-4 items-center bg-emerald-50 p-4 rounded-3xl border-2 border-emerald-200">
                      <div className="w-full md:w-48 h-40 bg-white border-2 border-emerald-200 rounded-2xl flex items-center justify-center p-2 relative shadow-sm overflow-hidden flex-shrink-0">
                          <div className="absolute top-2 right-2 text-emerald-500"><Mail size={20}/></div>
                          <span className="text-emerald-700 font-bold">ديوان البريد</span>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <h4 className="text-xl font-bold text-emerald-900 mb-2">البريد والتعريب</h4>
                          <p className="text-emerald-800">تنظيم نقل الرسائل وتعريب الدواوين.</p>
                      </div>
                  </div>
                  <div onClick={() => triggerAnimation('urban')} className="cursor-pointer group flex flex-col md:flex-row gap-4 items-center bg-purple-50 p-4 rounded-3xl border-2 border-purple-200">
                      <div className="w-full md:w-48 h-40 bg-white border-2 border-purple-200 rounded-2xl flex items-center justify-center p-2 relative shadow-sm overflow-hidden flex-shrink-0">
                          <div className="absolute top-2 right-2 text-purple-500"><Sparkles size={20}/></div>
                          <span className="text-purple-700 font-bold">العمارة</span>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <h4 className="text-xl font-bold text-purple-900 mb-2">روائع العمارة</h4>
                          <p className="text-purple-800">بناء مسجد قبة الصخرة والجامع الأموي.</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- FALL SECTION ---
  const FallSection = () => {
      const [battleStep, setBattleStep] = useState(0);
      const nextStep = () => {
          if (battleStep < 3) setBattleStep(prev => prev + 1);
          else setBattleStep(0);
      };

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-slate-800 mb-3">نهاية الدولة الأموية (132هـ)</h2>
              </div>
              <div className="bg-slate-900 rounded-3xl p-6 border-4 border-slate-700 shadow-2xl overflow-hidden relative">
                  <div className="text-center mb-6 relative z-10">
                      <h3 className="text-2xl font-black text-yellow-500 mb-2 flex items-center justify-center gap-3">
                          <Swords size={28}/> معركة الزاب (132هـ)
                      </h3>
                  </div>
                  <div className="relative h-64 bg-[#e5d5c5] rounded-xl overflow-hidden border-2 border-[#a18e78] mb-6">
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-blue-500 flex flex-col items-center justify-center z-10 opacity-80">
                          <Waves className="text-blue-200 animate-pulse mb-4" size={20} />
                          <span className="text-white font-bold rotate-90 mt-4 whitespace-nowrap text-xs bg-blue-800/50 px-2 rounded">نهر الزاب</span>
                      </div>
                      {battleStep === 3 && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-30 animate-fade-in">
                              <div className="text-center text-white p-4 border-4 border-yellow-500 rounded-xl bg-slate-800">
                                  <h4 className="text-xl font-black text-yellow-400 mb-1">انتصار العباسيين</h4>
                                  <p className="text-sm">سقوط الدولة الأموية</p>
                              </div>
                          </div>
                      )}
                  </div>
                  <div className="flex justify-center">
                      <button 
                        onClick={nextStep}
                        className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-6 py-2 rounded-full font-bold text-base shadow-lg flex items-center gap-2 transition-transform active:scale-95"
                      >
                          {battleStep === 0 ? <><Play fill="black" size={16} /> بدء المعركة</> : 
                           battleStep === 3 ? <><RefreshCw size={16} /> إعادة</> : "الخطوة التالية"}
                      </button>
                  </div>
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
          {UMAYYAD_SECTIONS.map((section: any) => (
            <button
              key={section.id}
              onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold text-base ${activeSection === section.id ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-emerald-800">الدولة الأموية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default UmayyadStateLesson;