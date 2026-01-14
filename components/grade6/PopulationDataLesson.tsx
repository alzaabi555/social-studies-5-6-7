
import React, { useState } from 'react';
import { SIXTH_POPULATION_SECTIONS, SIXTH_POPULATION_QUIZ } from '../../constants';
import { Section } from '../../types';
import { Menu, ArrowRight, Target, Users, BookOpen, Star } from 'lucide-react';
import SectionQuiz from '../SectionQuiz';
import PopSources from './population/PopSources';
import CensusJourney from './population/CensusJourney';

interface Props {
    onBack: () => void;
}

const PopulationDataLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Intro Section Component ---
  const IntroSection = () => (
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

          {/* Hook Visual */}
          <div className="bg-white p-8 rounded-3xl shadow-xl text-center border border-blue-100">
              <div className="inline-block bg-blue-100 p-6 rounded-full mb-6 animate-pulse">
                  <Users size={64} className="text-blue-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-4">كيف تخطط الدولة للمستقبل؟ 🤔</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  هل سألت نفسك يوماً: كيف تعرف الحكومة عدد المدارس التي يجب بناؤها؟ أو كمية الكهرباء التي نحتاجها؟ <br/>
                  الجواب يكمن في <strong>"البيانات السكانية"</strong>.
              </p>
          </div>
      </div>
  );

  // --- Importance Section Component ---
  const ImportanceSection = () => (
      <div className="p-6 animate-fade-in space-y-10">
          <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-800 mb-2">لماذا نحتاج البيانات السكانية؟</h2>
              <p className="text-slate-500">البيانات هي الوقود الذي يحرك عجلة التنمية</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-green-500 hover:-translate-y-2 transition-transform">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><BookOpen size={32}/></div>
                  <h3 className="font-bold text-xl text-green-900 mb-3 text-center">توفير الخدمات</h3>
                  <p className="text-slate-600 text-center text-sm">مثل المدارس، المستشفيات، والكهرباء، بناءً على عدد السكان في كل منطقة.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-orange-500 hover:-translate-y-2 transition-transform">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600"><Star size={32}/></div>
                  <h3 className="font-bold text-xl text-orange-900 mb-3 text-center">التخطيط للمستقبل</h3>
                  <p className="text-slate-600 text-center text-sm">معرفة احتياجات الأجيال القادمة من وظائف وسكن وغذاء.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-purple-500 hover:-translate-y-2 transition-transform">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600"><Target size={32}/></div>
                  <h3 className="font-bold text-xl text-purple-900 mb-3 text-center">توزيع الثروات</h3>
                  <p className="text-slate-600 text-center text-sm">ضمان التوزيع العادل لمشاريع التنمية على جميع المحافظات.</p>
              </div>
          </div>
      </div>
  );

  // --- Summary Section Component ---
  const SummarySection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          <div className="bg-slate-800 text-white p-8 rounded-3xl shadow-xl text-center">
              <h2 className="text-3xl font-black mb-6">خلاصة الدرس</h2>
              <div className="grid md:grid-cols-2 gap-8 text-right">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
                      <h4 className="text-yellow-400 font-bold text-lg mb-2">مصادر البيانات</h4>
                      <ul className="text-slate-300 space-y-2 list-disc list-inside">
                          <li><strong>أولية:</strong> مثل التعداد السكاني (شامل).</li>
                          <li><strong>ثانوية:</strong> مثل سجلات المدارس والمواليد.</li>
                      </ul>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
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
      {/* Sidebar */}
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

      {/* Main Content */}
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
