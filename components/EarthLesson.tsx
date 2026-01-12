import React, { useState } from 'react';
import { EARTH_SECTIONS, EARTH_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, Phone, ArrowRight } from 'lucide-react';
import SectionIntro from './SectionIntro'; // Can reuse standard intro or make custom
import EarthLayers from './earth/EarthLayers';
import PlateTectonics from './earth/PlateTectonics';
import InternalProcesses from './earth/InternalProcesses';
import SectionQuiz from './SectionQuiz';

interface EarthLessonProps {
    onBack: () => void;
}

const EarthLesson: React.FC<EarthLessonProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case Section.INTRO: 
        // Using a custom Intro text for Earth
        return (
            <div className="p-6 animate-fade-in space-y-6">
                 <div className="bg-orange-50 border-r-4 border-orange-600 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-orange-900 mb-4">أهداف الدرس: بنهاية هذا الدرس ستكون قادراً على أن:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-orange-800 font-medium">
                        <li>1. توضح طبقات باطن الأرض ومكوناتها.</li>
                        <li>2. تفسر العلاقة بين درجة الحرارة والعمق في باطن الأرض.</li>
                        <li>3. تربط بين نظرية الصفائح التكتونية والأشكال الناتجة عنها.</li>
                        <li>4. تميز بين العمليات الداخلية البطيئة (الالتواءات) والسريعة (الزلازل).</li>
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
                    <h2 className="text-3xl font-black text-slate-800 mb-4">سؤال للتفكير 🤔</h2>
                    <p className="text-xl text-slate-600">لماذا يظهر سطح الأرض غير مستوٍ (جبال، وهاد، محيطات)؟</p>
                    <p className="text-slate-500 mt-2">هل الأرض ثابتة أم تتحرك تحت أقدامنا؟</p>
                </div>
            </div>
        );
      case Section.LAYERS: return <EarthLayers />;
      case Section.TECTONICS: return <PlateTectonics />;
      case Section.PROCESSES: return <InternalProcesses />;
      case Section.QUIZ: return <SectionQuiz questions={EARTH_QUIZ_QUESTIONS} />;
      default: return <EarthLayers />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      
      {/* Sidebar Navigation */}
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold"
          >
             <ArrowRight size={16} />
             العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-orange-700 px-2 leading-tight">تشكيل سطح الأرض 🌋</h1>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {EARTH_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${
                activeSection === section.id 
                  ? 'bg-orange-100 text-orange-800' 
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
              <span className="font-bold text-lg text-orange-800">تشكيل الأرض</span>
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

export default EarthLesson;