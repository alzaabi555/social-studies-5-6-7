import React, { useState } from 'react';
import { OMAN_ABBASID_SECTIONS, OMAN_ABBASID_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, Phone, ArrowRight } from 'lucide-react';
import SectionQuiz from './SectionQuiz';
import OmanAbbasidIntro from './oman_abbasid/OmanAbbasidIntro';
import SocotraCampaign from './oman_abbasid/SocotraCampaign';
import AbbasidInvasion from './oman_abbasid/AbbasidInvasion';
import NabhanidEra from './oman_abbasid/NabhanidEra';

interface OmanAbbasidLessonProps {
    onBack: () => void;
}

const OmanAbbasidLesson: React.FC<OmanAbbasidLessonProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case Section.INTRO: return <OmanAbbasidIntro />;
      case Section.IMAMATE_STABILITY: return <OmanAbbasidIntro isSection2={true} />; // Reusing Intro component for first two parts
      case Section.SOCOTRA_CAMPAIGN: return <SocotraCampaign />;
      case Section.ABBASID_INVASION: return <AbbasidInvasion />;
      case Section.NABHANID_ERA: return <NabhanidEra />;
      case Section.QUIZ: return <SectionQuiz questions={OMAN_ABBASID_QUIZ_QUESTIONS} />;
      default: return <OmanAbbasidIntro />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      
      {/* Sidebar Navigation */}
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold"
          >
             <ArrowRight size={16} />
             العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-rose-700 px-2 leading-tight">عمان في العصر العباسي الثاني</h1>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {OMAN_ABBASID_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${
                activeSection === section.id 
                  ? 'bg-rose-100 text-rose-800' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
            <p className="text-sm font-black text-slate-700 mb-2">أ. محمد درويش الزعابي</p>
            <div className="flex items-center justify-center gap-2 text-slate-500 bg-white py-1 px-3 rounded-full border border-slate-200 text-xs font-mono shadow-sm mx-auto w-fit">
                <Phone size={12} />
                <span dir="ltr">98344555</span>
            </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-10 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <div className="flex items-center gap-3">
              <button onClick={onBack} className="p-2 bg-slate-100 rounded-full text-slate-600">
                  <ArrowRight size={20} />
              </button>
              <span className="font-bold text-lg text-rose-800">عمان والعصر العباسي</span>
           </div>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700">
             <Menu />
           </button>
        </header>

        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanAbbasidLesson;