
import React, { useState } from 'react';
import { MAPS_SECTIONS, MAPS_QUIZ } from '../../constants';
import { Section } from '../../types';
import { Menu, ArrowRight, Map as MapIcon, Compass, Layers, Star, CheckCircle, Globe, Search, Info, MousePointerClick, Maximize, FileText, Mountain, Navigation, Phone, LocateFixed, History, Activity } from 'lucide-react';
import SectionQuiz from '../SectionQuiz';

interface Props {
    onBack: () => void;
}

const MapsLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.MAPS_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO: HISTORY OF MAPS ---
  const IntroSection = () => {
      const [era, setEra] = useState<'past' | 'present'>('past');

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-3xl font-black text-indigo-900 mb-2">تطور الخرائط عبر الزمن</h2>
                  <p className="text-slate-600">كيف كان يرسم الإنسان الأرض قديماً؟ وكيف نراها اليوم؟</p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-slate-200">
                  <div className="flex border-b border-slate-200">
                      <button 
                          onClick={() => setEra('past')}
                          className={`flex-1 py-4 font-bold text-lg flex items-center justify-center gap-2 transition-colors ${era === 'past' ? 'bg-amber-100 text-amber-900' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                      >
                          <FileText /> قديماً (الرسم اليدوي)
                      </button>
                      <button 
                          onClick={() => setEra('present')}
                          className={`flex-1 py-4 font-bold text-lg flex items-center justify-center gap-2 transition-colors ${era === 'present' ? 'bg-blue-100 text-blue-900' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                      >
                          <Globe /> حديثاً (التكنولوجيا)
                      </button>
                  </div>

                  <div className="p-8 text-center min-h-[300px] flex flex-col justify-center items-center">
                      {era === 'past' ? (
                          <div className="animate-fade-in max-w-2xl">
                              <div className="bg-amber-50 p-6 rounded-full inline-block mb-6 border-4 border-amber-200">
                                  <ScrollIcon size={64} className="text-amber-700"/>
                              </div>
                              <h3 className="text-2xl font-black text-amber-900 mb-4">الخرائط البابلية والمصرية القديمة</h3>
                              <p className="text-lg text-slate-700 leading-relaxed">
                                  بدأ الإنسان برسم الخرائط على <strong>ألواح الطين</strong> (مثل البابليين) أو على <strong>ورق البردي</strong> (مثل الفراعنة) لتحديد الملكيات والطرق التجارية. كانت بسيطة وغير دقيقة.
                              </p>
                          </div>
                      ) : (
                          <div className="animate-fade-in max-w-2xl">
                              <div className="bg-blue-50 p-6 rounded-full inline-block mb-6 border-4 border-blue-200">
                                  <Globe size={64} className="text-blue-600 animate-spin-slow"/>
                              </div>
                              <h3 className="text-2xl font-black text-blue-900 mb-4">الأقمار الصناعية ونظم المعلومات (GIS)</h3>
                              <p className="text-lg text-slate-700 leading-relaxed">
                                  اليوم، نستخدم <strong>الأقمار الصناعية</strong> والحواسيب لإنتاج خرائط دقيقة جداً وتفاعلية (مثل Google Maps)، تساعدنا في الملاحة والتخطيط العمراني.
                              </p>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. TYPES OF MAPS ---
  const TypesSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أنواع الخرائط</h2>
                  <p className="text-slate-500">تختلف الخرائط حسب الغرض منها</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  {/* Political */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-purple-500 hover:-translate-y-2 transition-transform">
                      <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-purple-600">
                          <FlagIcon />
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">الخرائط السياسية</h3>
                      <p className="text-sm text-slate-600">توضح الحدود بين الدول، ومواقع المدن والعواصف.</p>
                  </div>

                  {/* Physical */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-green-500 hover:-translate-y-2 transition-transform">
                      <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-green-600">
                          <Mountain size={32} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">الخرائط الطبيعية</h3>
                      <p className="text-sm text-slate-600">توضح التضاريس مثل الجبال، الهضاب، الأنهار، والبحار (تستخدم الألوان).</p>
                  </div>

                  {/* Thematic */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-orange-500 hover:-translate-y-2 transition-transform">
                      <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-orange-600">
                          <Info size={32} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">الخرائط الموضوعية</h3>
                      <p className="text-sm text-slate-600">تختص بموضوع معين مثل: المناخ، السكان، الزراعة، أو الطرق.</p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. ELEMENTS OF A MAP ---
  const ElementsSection = () => {
      const [activeElement, setActiveElement] = useState<string | null>(null);

      const elements = [
          { id: 'title', name: 'عنوان الخريطة', icon: <FileText/>, desc: 'يوضح موضوع الخريطة وما تحتويه من معلومات.' },
          { id: 'key', name: 'مفتاح الخريطة', icon: <Info/>, desc: 'مربع يحتوي على رموز وألوان الخريطة ومعانيها.' },
          { id: 'scale', name: 'مقياس الرسم', icon: <Maximize/>, desc: 'النسبة بين المسافة على الخريطة وما يقابلها على الطبيعة.' },
          { id: 'north', name: 'اتجاه الشمال', icon: <Navigation/>, desc: 'سهم يشير إلى جهة الشمال لتحديد الاتجاهات.' },
          { id: 'frame', name: 'إطار الخريطة', icon: <Maximize className="rotate-45"/>, desc: 'الحد الذي يحيط بالخريطة ويحصر محتوياتها.' }
      ];

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">عناصر الخريطة الأساسية</h2>
                  <p className="text-slate-500">لا تكتمل الخريطة إلا بوجود هذه العناصر الخمسة</p>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Interactive Map Visual */}
                  <div className="relative w-full md:w-1/2 aspect-square bg-blue-50 rounded-3xl border-4 border-slate-300 shadow-xl overflow-hidden group">
                      {/* Map Content Placeholder */}
                      <div className="absolute inset-0 p-8 flex items-center justify-center opacity-30">
                          <MapIcon size={120} className="text-blue-300" />
                      </div>

                      {/* Elements Hotspots */}
                      {/* Title */}
                      <button onClick={() => setActiveElement('title')} className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded shadow border border-slate-300 font-bold text-xs hover:scale-110 transition-transform">العنوان</button>
                      
                      {/* North Arrow */}
                      <button onClick={() => setActiveElement('north')} className="absolute top-4 right-4 text-slate-700 hover:scale-110 transition-transform">
                          <Navigation size={32} className="text-red-500" />
                          <span className="sr-only">اتجاه الشمال</span>
                      </button>

                      {/* Key */}
                      <button onClick={() => setActiveElement('key')} className="absolute bottom-4 left-4 bg-white p-2 rounded shadow border border-slate-300 hover:scale-110 transition-transform">
                          <div className="w-4 h-4 bg-green-500 mb-1"></div>
                          <div className="w-4 h-4 bg-blue-500"></div>
                          <span className="sr-only">المفتاح</span>
                      </button>

                      {/* Scale */}
                      <button onClick={() => setActiveElement('scale')} className="absolute bottom-4 right-1/2 translate-x-1/2 bg-white px-2 py-1 rounded shadow border border-slate-300 text-xs font-mono hover:scale-110 transition-transform">
                          0____100km
                      </button>

                      {/* Frame */}
                      <button onClick={() => setActiveElement('frame')} className="absolute inset-0 border-[12px] border-slate-400/20 hover:border-slate-400/50 transition-colors pointer-events-none"></button>
                  </div>

                  {/* Info Panel */}
                  <div className="flex-1 space-y-3">
                      {elements.map((el) => (
                          <div 
                              key={el.id}
                              onClick={() => setActiveElement(el.id)}
                              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4 ${activeElement === el.id ? 'bg-indigo-50 border-indigo-500 shadow-md' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
                          >
                              <div className={`p-2 rounded-full ${activeElement === el.id ? 'bg-indigo-200 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>
                                  {el.icon}
                              </div>
                              <div>
                                  <h4 className={`font-bold ${activeElement === el.id ? 'text-indigo-900' : 'text-slate-700'}`}>{el.name}</h4>
                                  {activeElement === el.id && <p className="text-sm text-indigo-700 mt-1 animate-fade-in">{el.desc}</p>}
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. READING MAPS ---
  const ReadingSection = () => {
      const [showAnswer, setShowAnswer] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">مهارة قراءة الخريطة</h2>
                  <p className="text-slate-500">كيف نستخدم الرموز والألوان لفهم الخريطة؟</p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 text-center">
                  <div className="mb-8">
                      <h3 className="text-xl font-bold text-indigo-900 mb-4">مثال: خريطة طبيعية</h3>
                      <div className="flex justify-center gap-8 flex-wrap">
                          <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-amber-700 rounded shadow"></div>
                              <span className="font-medium">جبال مرتفعة</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-yellow-200 rounded shadow"></div>
                              <span className="font-medium">صحراء / هضاب</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-green-500 rounded shadow"></div>
                              <span className="font-medium">سهول / زراعة</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-blue-500 rounded shadow"></div>
                              <span className="font-medium">مسطحات مائية</span>
                          </div>
                      </div>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                      <h4 className="font-bold text-lg mb-4 text-indigo-800">سؤال تفاعلي:</h4>
                      <p className="text-lg text-slate-700 mb-6">
                          إذا رأيت اللون <strong>الأخضر</strong> يغطي مساحة واسعة على خريطة دولة ما، ماذا تستنتج؟
                      </p>
                      {!showAnswer ? (
                          <button onClick={() => setShowAnswer(true)} className="bg-indigo-600 text-white px-8 py-2 rounded-full font-bold shadow hover:bg-indigo-700 transition-colors">
                              التحقق من الإجابة
                          </button>
                      ) : (
                          <div className="animate-scale-in bg-white p-4 rounded-xl shadow-sm text-green-700 font-bold border border-green-200 inline-block">
                              <CheckCircle className="inline ml-2"/> أستنتج أن هذه الدولة تتميز بوجود سهول زراعية خصبة أو غابات.
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.MAPS_INTRO: return <IntroSection />;
      case Section.MAPS_TYPES: return <TypesSection />;
      case Section.MAPS_ELEMENTS: return <ElementsSection />;
      case Section.MAPS_READING: return <ReadingSection />;
      case Section.QUIZ: return <SectionQuiz questions={MAPS_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-indigo-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-indigo-100 flex flex-col`}>
        <div className="p-4 border-b border-indigo-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">الخرائط 🗺️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {MAPS_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id as Section);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${
                activeSection === section.id 
                  ? 'bg-indigo-100 text-indigo-800' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
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

// Icons Helper
const ScrollIcon = ({size, className}: {size: number, className: string}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 4v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></path>
        <path d="M15 2v20"></path>
        <path d="M15 7h4"></path>
        <path d="M15 12h4"></path>
        <path d="M15 17h4"></path>
    </svg>
);

const FlagIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
    </svg>
);

export default MapsLesson;
