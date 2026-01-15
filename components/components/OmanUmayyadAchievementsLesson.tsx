
import React, { useState } from 'react';
import { OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS, OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, BookOpen, Swords, Coins, Sparkles, Star, Globe, User, Lightbulb, Ship, Hammer } from 'lucide-react';
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
                      <li>• تقدير الدور الحضاري للعمانيين في العصر الأموي.</li>
                      <li>• التعرف على أبرز الشخصيات العمانية (علمياً وعسكرياً).</li>
                      <li>• استنتاج ازدهار الحياة الاقتصادية والعمرانية.</li>
                  </ul>
              </div>

              {/* UNESCO Personality */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 p-16 bg-white opacity-10 rounded-full blur-2xl"></div>
                      <div className="inline-block bg-white/20 p-4 rounded-full mb-4 animate-pulse relative z-10"><Globe size={48} /></div>
                      <h2 className="text-3xl font-black mb-2 relative z-10">شخصية عمانية عالمية</h2>
                      <p className="text-blue-100 relative z-10">أدرجتها اليونسكو ضمن الشخصيات المؤثرة عالمياً (2006م)</p>
                  </div>
                  <div className="p-8 text-center">
                      {!showInfo ? (
                          <button onClick={() => setShowInfo(true)} className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                              اكشف الشخصية 🔍
                          </button>
                      ) : (
                          <div className="animate-slide-up">
                              <h4 className="text-3xl font-black text-teal-900 mb-2">الخليل بن أحمد الفراهيدي</h4>
                              <p className="text-slate-600 font-medium text-lg mb-4">ولد في عمان، وهو عبقري اللغة العربية، واضع علم العروض، ومؤلف أول معجم عربي (كتاب العين).</p>
                              <div className="inline-block bg-teal-50 text-teal-800 px-4 py-2 rounded-lg border border-teal-100 text-sm font-bold">
                                  "استخرج علم العروض من إيقاع مطارق النحاسين"
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. CULTURAL SECTION ---
  const CulturalSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أولاً: الحياة الثقافية والعلمية</h2>
                  <p className="text-slate-500">برز العمانيون في الفقه، اللغة، والشعر</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  {/* Jabir bin Zaid */}
                  <div className="bg-white p-6 rounded-3xl shadow-lg border-t-8 border-amber-500 hover:-translate-y-2 transition-transform">
                      <div className="flex items-center gap-4 mb-4">
                          <div className="bg-amber-100 p-4 rounded-full text-amber-700"><BookOpen size={32}/></div>
                          <div>
                              <h3 className="text-xl font-bold text-slate-800">جابر بن زيد</h3>
                              <span className="text-xs bg-amber-50 text-amber-800 px-2 py-1 rounded">المؤسس الحقيقي للمذهب الإباضي</span>
                          </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                          من كبار التابعين، ولد في "فرق" بنزوى. كان عالماً فذاً، وهو <strong>أول من دون الحديث والفقه</strong> في كتابه الشهير (ديوان جابر).
                      </p>
                  </div>

                  {/* Ka'ab bin Ma'dan */}
                  <div className="bg-white p-6 rounded-3xl shadow-lg border-t-8 border-purple-500 hover:-translate-y-2 transition-transform">
                      <div className="flex items-center gap-4 mb-4">
                          <div className="bg-purple-100 p-4 rounded-full text-purple-700"><Lightbulb size={32}/></div>
                          <div>
                              <h3 className="text-xl font-bold text-slate-800">كعب بن معدان الأشقري</h3>
                              <span className="text-xs bg-purple-50 text-purple-800 px-2 py-1 rounded">طبيب وشاعر</span>
                          </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                          برع في <strong>الطب</strong> والشعر والخطابة. كان مجلسه يجمع بين العلم والأدب، وكان الخلفاء الأمويون يستمعون لنصائحه الطبية.
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. MILITARY SECTION ---
  const MilitarySection = () => {
      const [battleInfo, setBattleInfo] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">ثانياً: الحياة العسكرية والسياسية</h2>
              </div>

              {/* Al-Muhallab Profile */}
              <div className="bg-slate-800 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-32 bg-red-600 opacity-10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="bg-white/10 p-6 rounded-full border border-white/20 shadow-lg">
                          <Swords size={48} className="text-red-400"/>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <h3 className="text-3xl font-black mb-2 text-red-400">المهلب بن أبي صفرة</h3>
                          <p className="text-slate-300 text-lg mb-4">
                              القائد العماني الأسطوري الذي دوخ أعداء الدولة الأموية.
                          </p>
                          <button 
                              onClick={() => setBattleInfo(!battleInfo)}
                              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                          >
                              {battleInfo ? 'إخفاء الإنجازات' : 'أبرز إنجازاته'}
                          </button>
                      </div>
                  </div>
                  
                  {battleInfo && (
                      <div className="mt-6 bg-white/10 p-6 rounded-xl backdrop-blur-md border-l-4 border-red-500 animate-slide-up">
                          <ul className="list-disc list-inside space-y-2 text-slate-200">
                              <li>قضى على فتنة <strong>الأزارقة (الخوارج)</strong> التي هددت الدولة الأموية.</li>
                              <li>تولى ولاية <strong>خراسان</strong>، وقاد الفتوحات في المشرق.</li>
                              <li>اشتهر بالشجاعة والحكمة والخطط العسكرية الذكية.</li>
                          </ul>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- 4. ECONOMIC & ARCHITECTURE SECTION ---
  const EconomySection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">ثالثاً: الحياة الاقتصادية والعمرانية</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  {/* Maritime Trade */}
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      <h3 className="text-xl font-black text-blue-900 mb-3 flex items-center gap-2">
                          <Ship /> النشاط البحري
                      </h3>
                      <p className="text-blue-800 leading-relaxed text-sm">
                          واصلت السفن العمانية نشاطها التجاري، حيث حملت البضائع (اللبان، التمور، النحاس) إلى موانئ <strong>الصين والهند وشرق أفريقيا</strong>، ونشرت الإسلام بأخلاق التجار.
                      </p>
                  </div>

                  {/* Architecture */}
                  <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                      <h3 className="text-xl font-black text-amber-900 mb-3 flex items-center gap-2">
                          <Hammer /> العمارة (القلاع والحصون)
                      </h3>
                      <p className="text-amber-800 leading-relaxed text-sm">
                          اهتم العمانيون بتحصين مدنهم. من الأمثلة:
                          <br/><span className="font-bold">- حصن الحدّة (في ولاية جعلان بني بو حسن).</span>
                          <br/><span className="font-bold">- بناء المساجد وترميم القلاع القديمة.</span>
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.OMAN_ACHIEVEMENTS_INTRO: return <IntroSection />;
      case Section.OMAN_ACHIEVEMENTS_CULTURE: return <CulturalSection />;
      case Section.OMAN_ACHIEVEMENTS_MILITARY: return <MilitarySection />;
      case Section.OMAN_ACHIEVEMENTS_ECONOMY: return <EconomySection />;
      case Section.QUIZ: return <SectionQuiz questions={OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-teal-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">منجزات عمان 🏺</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => { setActiveSection(Section.OMAN_ACHIEVEMENTS_INTRO); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.OMAN_ACHIEVEMENTS_INTRO ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> المقدمة
          </button>
          <button onClick={() => { setActiveSection(Section.OMAN_ACHIEVEMENTS_CULTURE); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.OMAN_ACHIEVEMENTS_CULTURE ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <BookOpen size={20}/> الثقافة والعلوم
          </button>
          <button onClick={() => { setActiveSection(Section.OMAN_ACHIEVEMENTS_MILITARY); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.OMAN_ACHIEVEMENTS_MILITARY ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Swords size={20}/> الجيش والسياسة
          </button>
          <button onClick={() => { setActiveSection(Section.OMAN_ACHIEVEMENTS_ECONOMY); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.OMAN_ACHIEVEMENTS_ECONOMY ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Coins size={20}/> الاقتصاد والعمارة
          </button>
          <button onClick={() => { setActiveSection(Section.QUIZ); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.QUIZ ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> الاختبار
          </button>
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
