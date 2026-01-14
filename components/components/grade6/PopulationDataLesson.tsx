import React, { useState } from 'react';
import { SIXTH_POPULATION_SECTIONS, SIXTH_POPULATION_QUIZ } from '../../constants';
import { Section } from '../../types';
import { Menu, ArrowRight, Target, Users, ImageIcon } from 'lucide-react';
import SectionQuiz from '../SectionQuiz';
import PopSources from './population/PopSources';
import CensusJourney from './population/CensusJourney';

interface Props {
    onBack: () => void;
}

const PopulationDataLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const IntroSection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Target size={24}/> أهداف الدرس:
              </h3>
              <ul className="grid gap-3 text-blue-800 font-medium">
                  <li>1. التعرف على مصادر البيانات السكانية.</li>
                  <li>2. تتبع تطور التعداد السكاني في سلطنة عمان.</li>
              </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-blue-100">
              <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                  <Users size={48} className="text-blue-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-4">ما البيانات التي تريد معرفتها؟ 🤔</h2>
              <p className="text-lg text-slate-600">هذا ما تقوم به الدولة من خلال "البيانات السكانية".</p>
          </div>
      </div>
  );

  const ImportanceSection = () => (
      <div className="p-6 animate-fade-in space-y-6">
          <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-800 mb-2">أهمية دراسة السكان</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-2xl text-center"><h3 className="font-bold text-green-900 mb-2">1. توفير الخدمات</h3></div>
              <div className="bg-orange-50 p-6 rounded-2xl text-center"><h3 className="font-bold text-orange-900 mb-2">2. إنشاء المشاريع</h3></div>
              <div className="bg-purple-50 p-6 rounded-2xl text-center"><h3 className="font-bold text-purple-900 mb-2">3. التخطيط للمستقبل</h3></div>
          </div>
      </div>
  );

  const SummarySection = () => (
      <div className="p-6 animate-fade-in space-y-6 text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-2">ملخص الدرس</h2>
          <div className="bg-white p-4 rounded-3xl shadow-xl border-2 border-slate-100">
              <p className="text-slate-500">مخطط تفصيلي لمصادر البيانات (أولية وثانوية)</p>
          </div>
      </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case Section.INTRO: return <IntroSection />;
      case Section.POP_SOURCES: return <PopSources />;
      case Section.CENSUS_EVOLUTION: return <CensusJourney />;
      case Section.POP_IMPORTANCE: return <ImportanceSection />;
      case Section.SUMMARY: return <SummarySection />; 
      case Section.QUIZ: return <SectionQuiz questions={SIXTH_POPULATION_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-blue-100 flex flex-col`}>
        <div className="p-4 border-b border-blue-100">
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
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
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