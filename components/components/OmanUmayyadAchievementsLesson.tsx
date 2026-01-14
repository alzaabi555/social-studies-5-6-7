import React, { useState } from 'react';
import { OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS, OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, BookOpen, Mic, Lightbulb, User, Shield, Swords, Coins, Mail, Sparkles, Star, Globe } from 'lucide-react';
import SectionQuiz from './SectionQuiz';

interface Props {
    onBack: () => void;
}

const OmanUmayyadAchievementsLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.OMAN_ACHIEVEMENTS_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO & UNESCO ---
  const IntroSection = () => {
      const [showInfo, setShowInfo] = useState(false);
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="bg-teal-50 border-r-4 border-teal-600 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <Star size={24}/> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-3 text-teal-800 font-medium text-lg">
                      <li>1. التعرف على المنجزات الثقافية والعلمية للعمانيين.</li>
                      <li>2. تقدير الدور العسكري للعمانيين.</li>
                      <li>3. استنتاج أهمية الموقع الجغرافي لعمان.</li>
                  </ul>
              </div>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
                      <div className="inline-block bg-white/20 p-4 rounded-full mb-4 animate-pulse"><Globe size={48} /></div>
                      <h2 className="text-3xl font-black mb-4">شخصية اليونسكو</h2>
                  </div>
                  <div className="p-8 text-center">
                      {!showInfo ? (
                          <button onClick={() => setShowInfo(true)} className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">اكشف الشخصية 🔍</button>
                      ) : (
                          <div className="animate-slide-up bg-teal-50 p-6 rounded-2xl border-2 border-teal-100 inline-block">
                              <h4 className="text-2xl font-black text-teal-900 mb-2">الخليل بن أحمد الفراهيدي</h4>
                              <p className="text-teal-700 font-medium">عبقري اللغة ومؤسس علم العروض</p>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. CULTURAL SECTION ---
  const CulturalSection = () => {
      const [activeScholar, setActiveScholar] = useState<string | null>(null);
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أولاً: المجال الثقافي</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                  <div onClick={() => setActiveScholar('jabir')} className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${activeScholar === 'jabir' ? 'bg-amber-50 border-amber-500 shadow-md' : 'bg-white border-slate-200 hover:border-amber-300'}`}>
                      <div className="flex items-center gap-4 mb-4">
                          <div className="bg-amber-100 p-3 rounded-full text-amber-700"><BookOpen size={28}/></div>
                          <h3 className="text-xl font-bold text-slate-800">جابر بن زيد</h3>
                      </div>
                      <p className="text-slate-600">أول من ألف في علم الفقه.</p>
                  </div>
                  <div onClick={() => setActiveScholar('kaab')} className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${activeScholar === 'kaab' ? 'bg-purple-50 border-purple-500 shadow-md' : 'bg-white border-slate-200 hover:border-purple-300'}`}>
                      <div className="flex items-center gap-4 mb-4">
                          <div className="bg-purple-100 p-3 rounded-full text-purple-700"><Mic size={28}/></div>
                          <h3 className="text-xl font-bold text-slate-800">كعب بن معدان</h3>
                      </div>
                      <p className="text-slate-600">برز في علم الشعر والخطابة.</p>
                  </div>
              </div>
              <div className="bg-slate-800 text-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-teal-300 mb-4 flex items-center gap-2"><Lightbulb /> علم العروض</h3>
                  <p className="text-lg leading-relaxed mb-6 text-slate-200">اكتشفه الخليل بن أحمد من إيقاع المطارق.</p>
              </div>
          </div>
      );
  };

  // --- 3. MILITARY SECTION ---
  const MilitarySection = () => {
      const [role, setRole] = useState<'internal' | 'external'>('internal');
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">ثانياً: المجال العسكري</h2>
              </div>
              <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-md mx-auto mb-8">
                  <button onClick={() => setRole('internal')} className={`flex-1 py-2 px-4 rounded-full font-bold transition-all ${role === 'internal' ? 'bg-white shadow text-red-700' : 'text-slate-500'}`}>داخلياً (الأمن)</button>
                  <button onClick={() => setRole('external')} className={`flex-1 py-2 px-4 rounded-full font-bold transition-all ${role === 'external' ? 'bg-white shadow text-orange-700' : 'text-slate-500'}`}>خارجياً (الفتوحات)</button>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 text-center min-h-[200px] flex flex-col justify-center items-center">
                  {role === 'internal' ? (
                      <div>
                          <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600"><Shield size={40} /></div>
                          <h3 className="text-xl font-black text-red-900 mb-3">حماية الجبهة الداخلية</h3>
                      </div>
                  ) : (
                      <div>
                          <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600"><Swords size={40} /></div>
                          <h3 className="text-xl font-black text-orange-900 mb-3">المشاركة في الفتوحات</h3>
                          <p>مثل فتح بلاد ما وراء النهر بقيادة قتيبة بن مسلم.</p>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- 4. ECONOMIC SECTION ---
  const EconomicSection = () => {
      const [coinRevealed, setCoinRevealed] = useState(false);
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">ثالثاً: المجال الاقتصادي</h2>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2"><Coins /> حدث اقتصادي (81هـ)</h3>
                  <div onClick={() => setCoinRevealed(!coinRevealed)} className="relative w-40 h-40 cursor-pointer">
                      {!coinRevealed ? (
                          <div className="absolute inset-0 w-full h-full bg-yellow-500 rounded-full border-4 border-yellow-300 flex items-center justify-center shadow-lg"><span className="font-black text-yellow-900 text-6xl">؟</span></div>
                      ) : (
                          <div className="absolute inset-0 w-full h-full bg-yellow-400 rounded-full border-4 border-yellow-200 flex flex-col items-center justify-center shadow-lg"><span className="text-xs font-bold text-yellow-900">أول عملة</span><span className="text-2xl font-black text-yellow-900">عمانية</span></div>
                      )}
                  </div>
                  <p className="mt-6 text-sm text-slate-300">اضغط على العملة لاكتشاف الحدث</p>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.OMAN_ACHIEVEMENTS_INTRO: return <IntroSection />;
      case Section.OMAN_ACHIEVEMENTS_CULTURE: return <CulturalSection />;
      case Section.OMAN_ACHIEVEMENTS_MILITARY: return <MilitarySection />;
      case Section.OMAN_ACHIEVEMENTS_ECONOMY: return <EconomicSection />;
      case Section.QUIZ: return <SectionQuiz questions={OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">منجزات عمان 🏺</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS.map((section: any) => (
            <button key={section.id} onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <span className="text-xl">{section.icon}</span> {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-teal-800">منجزات عمان</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanUmayyadAchievementsLesson;