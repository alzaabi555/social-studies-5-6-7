import React, { useState } from 'react';
import { SIXTH_STRUCTURE_SECTIONS, SIXTH_STRUCTURE_QUIZ } from '../../constants';
import { Section } from '../../types';
import { Menu, ArrowRight } from 'lucide-react';
import SectionQuiz from '../SectionQuiz';
import StructureIntro from './structure/StructureIntro';
import GenderStructure from './structure/GenderStructure';
import AgeStructure from './structure/AgeStructure';
import PopPyramid from './structure/PopPyramid';
import EconomicStructure from './structure/EconomicStructure';

interface Props {
    onBack: () => void;
}

const PopulationStructureLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case Section.INTRO: return <StructureIntro />;
      case Section.FACTORS: return <GenderStructure />;
      case Section.REGIONS: return <AgeStructure />;
      case Section.DATA_ANALYSIS: return <PopPyramid />;
      case Section.PROCESSES: return <EconomicStructure />;
      case Section.QUIZ: return <SectionQuiz questions={SIXTH_STRUCTURE_QUIZ} />;
      default: return <StructureIntro />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-emerald-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-emerald-100 flex flex-col`}>
        <div className="p-4 border-b border-emerald-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-emerald-700 px-2">بنية السكان 👥</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {SIXTH_STRUCTURE_SECTIONS.map((section: any) => (
            <button key={section.id} onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <span className="text-xl">{section.icon}</span> {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-emerald-800">بنية السكان</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default PopulationStructureLesson;