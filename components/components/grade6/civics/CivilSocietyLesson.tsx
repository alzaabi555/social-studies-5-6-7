import React, { useState } from 'react';
import { CIVIL_SOCIETY_SECTIONS, CIVIL_SOCIETY_QUIZ } from '../../../constants';
import { Section } from '../../../types';
import { Menu, ArrowRight, HeartHandshake, Leaf, Stethoscope, Users, BookOpen, Crown } from 'lucide-react';
import SectionQuiz from '../../SectionQuiz';

interface Props {
    onBack: () => void;
}

const CivilSocietyLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.CIVIL_SOCIETY_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const IntroSection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          <div className="bg-teal-50 border-r-4 border-teal-600 p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-teal-900 mb-4">مفهوم المجتمع المدني</h3>
              <p className="text-lg text-teal-800">"مؤسسات أو جمعيات أهلية، تعمل وفق القوانين، وتقدم خدمات للمجتمع دون مقابل."</p>
          </div>
      </div>
  );

  const TypesSection = () => {
      const associations = [
          { id: 'env', title: 'البيئة', icon: <Leaf />, examples: 'جمعية البيئة العمانية', color: 'bg-green-50 text-green-600' },
          { id: 'health', title: 'الصحة', icon: <Stethoscope />, examples: 'الجمعية العمانية للسرطان', color: 'bg-red-50 text-red-600' }
      ];
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {associations.map((assoc) => (
                      <div key={assoc.id} className={`p-4 rounded-2xl border-2 bg-white`}>
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto ${assoc.color}`}>{assoc.icon}</div>
                          <h4 className="font-bold text-center text-slate-800 text-sm mb-1">{assoc.title}</h4>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  const ImportanceSection = () => (
      <div className="p-6 animate-fade-in space-y-10">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">
              <h3 className="font-black text-xl text-orange-900">الأهمية</h3>
              <p className="text-slate-600 mt-2">تعزيز الشراكة بين الحكومة والمجتمع.</p>
          </div>
      </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case Section.CIVIL_SOCIETY_INTRO: return <IntroSection />;
      case Section.CIVIL_SOCIETY_TYPES: return <TypesSection />;
      case Section.CIVIL_SOCIETY_IMPORTANCE: return <ImportanceSection />;
      case Section.QUIZ: return <SectionQuiz questions={CIVIL_SOCIETY_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-teal-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-teal-100 flex flex-col`}>
        <div className="p-4 border-b border-teal-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">المجتمع المدني 🤝</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {CIVIL_SOCIETY_SECTIONS.map((section: any) => (
            <button key={section.id} onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <span className="text-xl">{section.icon}</span> {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-teal-800">مؤسسات المجتمع المدني</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default CivilSocietyLesson;