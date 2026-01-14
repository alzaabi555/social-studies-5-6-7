
import React, { useState } from 'react';
import { COMMUNITY_PARTICIPATION_SECTIONS, COMMUNITY_PARTICIPATION_QUIZ } from '../../../constants';
import { Section } from '../../../types';
import { Menu, ArrowRight, HeartHandshake, Vote, Star, MessageCircle, Crown, CheckCircle2 } from 'lucide-react';
import SectionQuiz from '../../SectionQuiz';

interface Props {
    onBack: () => void;
}

const CommunityParticipationLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.COMMUNITY_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const IntroSection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-3xl shadow-xl text-center">
              <Crown size={32} className="mx-auto mb-4"/>
              <h3 className="text-lg font-bold text-blue-200 mb-4">من خطاب السلطان هيثم بن طارق</h3>
              <p className="text-xl font-serif">"ينبغي لنا جميعاً أن نعمل من أجل رفعة هذا البلد..."</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 text-center">
              <h2 className="text-2xl font-black text-slate-800 mb-2">مفهوم المشاركة</h2>
              <p className="text-slate-500">هي مساهمة المواطنين في صنع القرارات والتنمية.</p>
          </div>
      </div>
  );

  const FormsSection = () => {
      const forms = [
          { id: 'voluntary', title: 'العمل التطوعي', icon: <HeartHandshake />, color: 'bg-green-100 text-green-700' },
          { id: 'election', title: 'الانتخابات', icon: <Vote />, color: 'bg-blue-100 text-blue-700' }
      ];
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="grid grid-cols-2 gap-4">
                  {forms.map((form) => (
                      <div key={form.id} className="p-4 rounded-2xl border-2 bg-white">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto ${form.color}`}>{form.icon}</div>
                          <h4 className="font-bold text-center text-slate-800 text-sm mb-1">{form.title}</h4>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  const ImportanceSection = () => (
      <div className="p-6 animate-fade-in space-y-10 text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-2">أهمية المشاركة</h2>
          <p className="text-slate-500">تعزيز الانتماء وتحمل المسؤولية.</p>
      </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case Section.COMMUNITY_INTRO: return <IntroSection />;
      case Section.COMMUNITY_FORMS: return <FormsSection />;
      case Section.COMMUNITY_IMPORTANCE: return <ImportanceSection />;
      case Section.QUIZ: return <SectionQuiz questions={COMMUNITY_PARTICIPATION_QUIZ} />;
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
          <h1 className="text-xl font-black text-blue-700 px-2">المشاركة المجتمعية 🙌</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {COMMUNITY_PARTICIPATION_SECTIONS.map((section: any) => (
            <button key={section.id} onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <span className="text-xl">{section.icon}</span> {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-blue-800">المشاركة المجتمعية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default CommunityParticipationLesson;
