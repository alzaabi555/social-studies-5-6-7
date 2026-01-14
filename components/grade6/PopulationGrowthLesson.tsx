
import React, { useState } from 'react';
import { SIXTH_GROWTH_SECTIONS, SIXTH_GROWTH_QUIZ } from '../../constants';
import { Section } from '../../types';
import { Menu, ArrowRight } from 'lucide-react';
import SectionQuiz from '../SectionQuiz';
import GrowthIntro from './growth/GrowthIntro';
import OmanGrowthAnalysis from './growth/OmanGrowthAnalysis';
import NaturalIncrease from './growth/NaturalIncrease';
import NonNaturalIncrease from './growth/NonNaturalIncrease';
import GrowthEffects from './growth/GrowthEffects';

interface Props {
    onBack: () => void;
}

const PopulationGrowthLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.GROWTH_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case Section.GROWTH_INTRO: return <GrowthIntro />;
      case Section.OMAN_GROWTH_CHART: return <OmanGrowthAnalysis />;
      case Section.NATURAL_INCREASE: return <NaturalIncrease />;
      case Section.MIGRATION_IMPACT: return <NonNaturalIncrease />;
      case Section.GROWTH_EFFECTS: return <GrowthEffects />;
      case Section.QUIZ: return <SectionQuiz questions={SIXTH_GROWTH_QUIZ} />;
      default: return <GrowthIntro />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-indigo-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-indigo-100 flex flex-col`}>
        <div className="p-4 border-b border-indigo-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">النمو السكاني 📈</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {SIXTH_GROWTH_SECTIONS.map((section: any) => (
            <button key={section.id} onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <span className="text-xl">{section.icon}</span> {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">النمو السكاني</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default PopulationGrowthLesson;
