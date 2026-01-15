
import React, { useState } from 'react';
import { MAPS_SECTIONS, MAPS_QUIZ } from '../../constants';
import { Section } from '../../types';
import { Menu, ArrowRight, Target, Map, MapPin, Search, Compass, Expand, Info, CheckCircle, Globe2 } from 'lucide-react';
import SectionQuiz from '../SectionQuiz';

interface Props {
    onBack: () => void;
}

const MapsLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.MAPS_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Intro Section ---
  const IntroSection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          <div className="bg-indigo-50 border-r-4 border-indigo-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <Target size={24}/> أهداف الدرس:
              </h3>
              <ul className="grid gap-3 text-indigo-800 font-medium text-lg leading-relaxed">
                  <li className="flex items-center gap-2"><span className="text-indigo-500">•</span> تعرف مفهوم الخريطة وتطورها عبر التاريخ.</li>
                  <li className="flex items-center gap-2"><span className="text-indigo-500">•</span> تحدد عناصر الخريطة الأساسية (العنوان، المفتاح، المقياس، الاتجاه).</li>
                  <li className="flex items-center gap-2"><span className="text-indigo-500">•</span> تميز بين أنواع الخرائط المختلفة (طبيعية، سياسية).</li>
                  <li className="flex items-center gap-2"><span className="text-indigo-500">•</span> تقدر أهمية الخرائط في حياتنا اليومية.</li>
              </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 text-center">
              <div className="inline-block bg-indigo-100 p-6 rounded-full mb-6 animate-bounce">
                  <Map size={64} className="text-indigo-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-4">ما هي الخريطة؟ 🤔</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  "هي رسم توضيحي لسطح الأرض أو جزء منه، على سطح مستوٍ، باستخدام رموز وألوان معينة وبمقياس رسم محدد."
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                      <span className="text-3xl block mb-2">📜</span>
                      <span className="font-bold text-yellow-900">قديماً</span>
                      <p className="text-xs text-yellow-800 mt-1">رسمت على الجلد والطين</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <span className="text-3xl block mb-2">📄</span>
                      <span className="font-bold text-blue-900">حديثاً</span>
                      <p className="text-xs text-blue-800 mt-1">ورقية دقيقة</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <span className="text-3xl block mb-2">📱</span>
                      <span className="font-bold text-green-900">الآن</span>
                      <p className="text-xs text-green-800 mt-1">رقمية (Google Maps)</p>
                  </div>
              </div>
          </div>
      </div>
  );

  // --- Map Elements (Interactive) ---
  const ElementsSection = () => {
      const [activeElement, setActiveElement] = useState<string | null>(null);

      const elements = [
          { id: 'title', label: 'عنوان الخريطة', desc: 'يوضح موضوع الخريطة وما تحتويه من معلومات.', icon: <Info/>, pos: 'top-2 right-1/2 -translate-x-1/2' },
          { id: 'key', label: 'مفتاح الخريطة', desc: 'مربع يضم الرموز والألوان المستخدمة في الخريطة ودلالاتها.', icon: <Search/>, pos: 'bottom-4 left-4' },
          { id: 'scale', label: 'مقياس الرسم', desc: 'النسبة بين المسافة على الخريطة وما يقابلها على الطبيعة.', icon: <Expand/>, pos: 'bottom-4 right-1/2 -translate-x-1/2' },
          { id: 'compass', label: 'إشارة الشمال', desc: 'سهم يحدد اتجاه الشمال الجغرافي، مما يساعد في معرفة باقي الاتجاهات.', icon: <Compass/>, pos: 'top-4 left-4' }
      ];

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">عناصر الخريطة الأساسية</h2>
                  <p className="text-slate-500">اضغط على العناصر الموجودة على الخريطة لاكتشاف وظيفتها</p>
              </div>

              <div className="relative w-full max-w-4xl mx-auto h-[500px] bg-sky-100 rounded-3xl border-4 border-slate-300 shadow-2xl overflow-hidden group">
                  {/* Fake Map Content */}
                  <svg viewBox="0 0 800 500" className="w-full h-full absolute inset-0 opacity-50">
                      <path d="M100,400 Q200,300 300,400 T600,350" fill="none" stroke="#3B82F6" strokeWidth="8"/>
                      <path d="M50,100 Q150,50 200,150 T400,100" fill="#A8A29E" opacity="0.5"/>
                  </svg>
                  
                  {/* Interactive Elements */}
                  {elements.map((el) => (
                      <button
                          key={el.id}
                          onClick={() => setActiveElement(el.id)}
                          className={`absolute ${el.pos} bg-white p-3 rounded-xl shadow-lg border-2 border-slate-200 hover:border-indigo-500 hover:scale-110 transition-all flex items-center gap-2 ${activeElement === el.id ? 'ring-4 ring-indigo-300 border-indigo-600' : ''}`}
                      >
                          <span className="text-indigo-600">{el.icon}</span>
                          <span className="font-bold text-slate-700 text-sm hidden md:inline">{el.label}</span>
                      </button>
                  ))}

                  {/* Info Box */}
                  {activeElement && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-2xl border-t-4 border-indigo-600 animate-zoom-in text-center max-w-sm">
                          <h3 className="text-xl font-black text-indigo-900 mb-2">{elements.find(e => e.id === activeElement)?.label}</h3>
                          <p className="text-slate-600 leading-relaxed">{elements.find(e => e.id === activeElement)?.desc}</p>
                          <button onClick={() => setActiveElement(null)} className="mt-4 text-sm text-slate-400 font-bold hover:text-slate-600">إغلاق</button>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // Types Section stub
  const TypesSection = () => (
      <div className="p-6 animate-fade-in text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-6">أنواع الخرائط</h2>
          <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                  <h3 className="font-bold text-green-900 text-xl mb-2">خرائط طبيعية</h3>
                  <p className="text-green-800">توضح التضاريس، المناخ، والنبات الطبيعي.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                  <h3 className="font-bold text-blue-900 text-xl mb-2">خرائط بشرية (سياسية)</h3>
                  <p className="text-blue-800">توضح الحدود بين الدول، المدن، وتوزيع السكان.</p>
              </div>
          </div>
      </div>
  );

  // Importance Section stub
  const ImportanceSection = () => (
      <div className="p-6 animate-fade-in text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-6">أهمية الخرائط</h2>
          <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">تحديد المواقع</div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">تخطيط المشاريع</div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">الملاحة والسفر</div>
          </div>
      </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case Section.MAPS_INTRO: return <IntroSection />;
      case Section.MAPS_ELEMENTS: return <ElementsSection />;
      case Section.MAPS_TYPES: return <TypesSection />;
      case Section.MAPS_IMPORTANCE: return <ImportanceSection />;
      case Section.QUIZ: return <SectionQuiz questions={MAPS_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-indigo-50 text-right font-tajawal">
      {/* Sidebar */}
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-indigo-100 flex flex-col`}>
        <div className="p-4 border-b border-indigo-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">الخرائط 🗺️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {MAPS_SECTIONS.map((section: any) => (
            <button key={section.id} onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <span className="text-xl">{section.icon}</span> {section.label}
            </button>
          ))}
        </nav>
      </aside>
      
      {/* Main */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">الخرائط</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default MapsLesson;