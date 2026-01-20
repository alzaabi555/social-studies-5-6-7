
import React, { useState } from 'react';
import { SIXTH_POPULATION_SECTIONS, SIXTH_POPULATION_QUIZ } from '../../constants';
import { Section } from '../../types';
import { Menu, ArrowRight, Target, Users, BookOpen, Star, HelpCircle, CheckCircle } from 'lucide-react';
import SectionQuiz from '../SectionQuiz';
import { SourcesSection, CensusFormSim, ImportanceSection, SortingGame } from './population/PopSources';
import CensusJourney from './population/CensusJourney';

interface Props {
    onBack: () => void;
}

const PopulationDataLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Interactive Intro Section ---
  const IntroSection = () => {
      const [step, setStep] = useState(0);
      return (
          <div className="p-6 animate-fade-in space-y-8">
              {/* Objectives Card */}
              <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-3 text-blue-800 font-medium text-lg leading-relaxed">
                      <li className="flex items-center gap-2"><span className="text-blue-500">•</span> التعرف على مفهوم البيانات السكانية.</li>
                      <li className="flex items-center gap-2"><span className="text-blue-500">•</span> التمييز بين المصادر الأولية والثانوية للبيانات.</li>
                      <li className="flex items-center gap-2"><span className="text-blue-500">•</span> تتبع تطور التعداد السكاني في سلطنة عمان.</li>
                      <li className="flex items-center gap-2"><span className="text-blue-500">•</span> استنتاج أهمية البيانات السكانية للتخطيط.</li>
                  </ul>
              </div>

              {/* Interactive Hook: The City Mystery */}
              <div className="bg-white p-8 rounded-3xl shadow-xl text-center border border-blue-100 transition-all duration-500">
                  {step === 0 && (
                      <div className="animate-fade-in py-4">
                          <div className="inline-block bg-blue-100 p-6 rounded-full mb-6 animate-pulse">
                              <HelpCircle size={64} className="text-blue-600" />
                          </div>
                          <h2 className="text-3xl font-black text-slate-800 mb-4">لغز المدينة الجديدة 🤔</h2>
                          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
                              قررت الحكومة بناء مدينة جديدة متكاملة، المهندسون جاهزون، والأموال موجودة، لكنهم توقفوا فجأة... واجهتهم مشكلة كبيرة!
                          </p>
                          <button onClick={() => setStep(1)} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
                              ما هي المشكلة؟
                          </button>
                      </div>
                  )}

                  {step === 1 && (
                      <div className="animate-slide-up py-4">
                          <h3 className="text-2xl font-bold text-red-600 mb-6">المهندسون يسألون:</h3>
                          <div className="grid md:grid-cols-3 gap-4 mb-8">
                              <div className="bg-slate-50 p-4 rounded-xl font-bold text-slate-700 border border-slate-200">كم مدرسة نبني؟ 🏫</div>
                              <div className="bg-slate-50 p-4 rounded-xl font-bold text-slate-700 border border-slate-200">كم مستشفى نحتاج؟ 🏥</div>
                              <div className="bg-slate-50 p-4 rounded-xl font-bold text-slate-700 border border-slate-200">كم كمية المياه المطلوبة؟ 💧</div>
                          </div>
                          <p className="text-lg text-slate-600 mb-6">لا يمكنهم البناء عشوائياً! هم بحاجة لشيء واحد فقط للإجابة.</p>
                          <button onClick={() => setStep(2)} className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
                              ما هو الحل؟
                          </button>
                      </div>
                  )}

                  {step === 2 && (
                      <div className="animate-zoom-in py-4">
                          <div className="inline-block bg-green-100 p-6 rounded-full mb-6">
                              <CheckCircle size={64} className="text-green-600" />
                          </div>
                          <h2 className="text-4xl font-black text-blue-800 mb-4">البيانات السكانية 📊</h2>
                          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto bg-blue-50 p-4 rounded-2xl border border-blue-200">
                              هي المعلومات الرقمية (الأرقام) المتعلقة بالسكان، وهي المفتاح السحري لأي تخطيط ناجح!
                          </p>
                          <button onClick={() => setStep(0)} className="text-slate-400 font-bold hover:text-blue-600 underline">
                              إعادة القصة
                          </button>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- Summary Section Component ---
  const SummarySection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          <div className="bg-slate-800 text-white p-8 rounded-3xl shadow-xl text-center">
              <h2 className="text-3xl font-black mb-6">خلاصة الدرس</h2>
              <div className="grid md:grid-cols-2 gap-8 text-right">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/10">
                      <h4 className="text-yellow-400 font-bold text-lg mb-2">مصادر البيانات</h4>
                      <ul className="text-slate-300 space-y-2 list-disc list-inside">
                          <li><strong>أولية:</strong> التعداد السكاني (شامل)، الإحصاءات الحيوية.</li>
                          <li><strong>ثانوية:</strong> سجلات المدارس، سجلات المستشفيات.</li>
                      </ul>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/10">
                      <h4 className="text-green-400 font-bold text-lg mb-2">تطور التعداد في عمان</h4>
                      <ul className="text-slate-300 space-y-2 list-disc list-inside">
                          <li>بدأ عام 1993 (ميداني).</li>
                          <li>تطور إلى إلكتروني كامل في 2020.</li>
                          <li>يعتمد الآن على السجل المدني الموحد.</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case Section.INTRO: return <IntroSection />;
      case Section.POP_SOURCES: return <SourcesSection />;
      case Section.POP_CENSUS_FORM: return <CensusFormSim />;
      case Section.CENSUS_EVOLUTION: return <CensusJourney />;
      case Section.POP_IMPORTANCE: return <ImportanceSection />;
      case Section.POP_ACTIVITY: return <SortingGame />;
      case Section.SUMMARY: return <SummarySection />; 
      case Section.QUIZ: return <SectionQuiz questions={SIXTH_POPULATION_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-50 text-right font-tajawal">
      {/* Sidebar */}
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-blue-100 flex flex-col`}>
        <div className="p-4 border-b border-blue-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-blue-700 px-2">البيانات السكانية 📊</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {SIXTH_POPULATION_SECTIONS.map((section: any) => (
            <button key={section.id} onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <span className="text-xl">{section.icon}</span> {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
           <span className="font-bold text-lg text-blue-800">البيانات السكانية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default PopulationDataLesson;
