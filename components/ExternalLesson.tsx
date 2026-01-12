import React, { useState } from 'react';
import { EXTERNAL_SECTIONS, EXTERNAL_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, Phone, ArrowRight, Truck, TrendingDown, Umbrella } from 'lucide-react';
import SectionQuiz from './SectionQuiz';
import WeatheringSim from './external/WeatheringSim';
import ErosionSim from './external/ErosionSim';

interface ExternalLessonProps {
    onBack: () => void;
}

const ExternalLesson: React.FC<ExternalLessonProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case Section.INTRO: 
        return (
            <div className="p-6 animate-fade-in space-y-6">
                 <div className="bg-amber-50 border-r-4 border-amber-600 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">أهداف الدرس:</h3>
                    <ul className="grid grid-cols-1 gap-3 text-amber-800 font-medium">
                        <li>1. التمييز بين التجوية والتعرية.</li>
                        <li>2. التفريق بين التجوية الميكانيكية والكيميائية.</li>
                        <li>3. استنتاج العوامل المؤثرة في تشكيل سطح الأرض (الرياح، المياه، الأمواج).</li>
                        <li>4. التعرف على الأشكال الناتجة مثل الكهوف، الموائد الصخرية، والكثبان الرملية.</li>
                    </ul>
                </div>
                
                {/* Visual Hook from Page 1 of PDF */}
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
                    <div className="relative h-64 w-full max-w-lg mx-auto bg-sky-100 rounded-xl overflow-hidden mb-6 border-4 border-white shadow-sm">
                        {/* Custom SVG Illustration of Rock Arch */}
                        <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                            {/* Sky */}
                            <rect width="400" height="300" fill="#BAE6FD" />
                            {/* Sea */}
                            <rect y="200" width="400" height="100" fill="#0EA5E9" />
                            {/* Clouds */}
                            <g fill="white" opacity="0.8">
                                <circle cx="50" cy="50" r="20" />
                                <circle cx="80" cy="60" r="25" />
                                <circle cx="350" cy="40" r="30" />
                            </g>
                            {/* Rock Arch Formation */}
                            <defs>
                                <mask id="archHole">
                                    <rect width="400" height="300" fill="white" />
                                    <ellipse cx="220" cy="250" rx="40" ry="60" fill="black" />
                                </mask>
                            </defs>
                            <path 
                                d="M0,300 L0,100 Q100,80 220,100 Q350,120 300,300 L0,300 Z" 
                                fill="#D97706" 
                                mask="url(#archHole)"
                            />
                            <path d="M180,260 Q220,265 260,260" stroke="white" strokeWidth="2" opacity="0.5" />
                        </svg>

                        <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-sm">
                            قوس صخري طبيعي - كيف تكون هذا الشكل؟
                        </div>
                    </div>
                    <h2 className="text-3xl font-black text-slate-800 mb-4">سؤال للتفكير 🤔</h2>
                    <p className="text-xl text-slate-600">تخيل شكل هذه الصخرة قبل مئات السنين.. هل كانت مغلقة؟</p>
                    <p className="text-slate-500 mt-2">ما القوة الخفية التي استطاعت نحت الصخر بهذا الشكل؟</p>
                </div>
            </div>
        );
      case Section.WEATHERING: return <WeatheringSim />;
      case Section.EROSION: return <ErosionSim />;
      case Section.DEPOSITION: 
          return (
              <div className="p-6 animate-fade-in space-y-8">
                  {/* Transport Section (Page 59) */}
                  <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100">
                      <h2 className="text-2xl font-black text-indigo-800 mb-6 flex items-center gap-2">
                          <Truck className="inline-block" /> ثانياً: عملية النقل
                      </h2>
                      <div className="grid md:grid-cols-4 gap-4 text-center">
                          <div className="bg-white p-4 rounded-xl shadow-sm">
                              <span className="text-2xl block mb-2">💨</span>
                              <h4 className="font-bold text-slate-700">قوة الرياح</h4>
                          </div>
                          <div className="bg-white p-4 rounded-xl shadow-sm">
                              <span className="text-2xl block mb-2">💧</span>
                              <h4 className="font-bold text-slate-700">جريان المياه</h4>
                          </div>
                          <div className="bg-white p-4 rounded-xl shadow-sm">
                              <span className="text-2xl block mb-2">🌊</span>
                              <h4 className="font-bold text-slate-700">حركة الأمواج</h4>
                          </div>
                          <div className="bg-white p-4 rounded-xl shadow-sm border-2 border-red-100">
                              <span className="text-2xl block mb-2">🍎</span>
                              <h4 className="font-bold text-red-700">الجاذبية الأرضية</h4>
                              <p className="text-xs text-slate-500 mt-1">تسبب الانهيارات الصخرية</p>
                          </div>
                      </div>
                  </div>

                  {/* Deposition Section (Page 60) */}
                  <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl">
                      <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
                          <TrendingDown className="inline-block text-green-600" /> ثالثاً: عملية الترسيب
                      </h2>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          يُعد الترسيب العملية الأخيرة. عندما تضعف سرعة الرياح أو المياه، تبدأ في إلقاء حمولتها، وتنتج عنها أشكال جديدة:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                          {/* Sand Dunes */}
                          <div className="relative h-48 bg-sky-100 rounded-xl overflow-hidden border border-slate-200 group">
                              <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-100"></div>
                              <path d="M0,250 Q100,200 200,250 T400,250" fill="#F59E0B" />
                              <svg viewBox="0 0 400 200" className="absolute bottom-0 w-full h-full">
                                  <path d="M0,200 L100,100 Q150,80 250,150 T400,180 L400,200 Z" fill="#D97706" />
                                  <path d="M-50,200 L50,150 Q100,120 200,180 T350,200 Z" fill="#F59E0B" opacity="0.9" />
                              </svg>
                              <div className="absolute bottom-2 right-2 bg-white/90 px-3 py-1 rounded text-xs font-bold text-amber-900">
                                  1. الكثبان الرملية (ترسيب الرياح)
                              </div>
                          </div>

                          {/* Sandy Beaches */}
                          <div className="relative h-48 bg-sky-200 rounded-xl overflow-hidden border border-slate-200 group">
                              <svg viewBox="0 0 400 200" className="w-full h-full">
                                  {/* Water */}
                                  <rect width="400" height="200" fill="#38BDF8" />
                                  {/* Sand */}
                                  <path d="M0,200 L100,120 Q200,100 400,140 V200 Z" fill="#FDE68A" />
                                  {/* Umbrella */}
                                  <g transform="translate(300, 160) scale(0.5)">
                                      <path d="M0,0 L0,-40" stroke="brown" strokeWidth="4" />
                                      <path d="M-30,-40 Q0,-80 30,-40 Z" fill="red" />
                                  </g>
                              </svg>
                              <div className="absolute bottom-2 right-2 bg-white/90 px-3 py-1 rounded text-xs font-bold text-blue-900">
                                  2. الشواطئ الرملية (ترسيب الأمواج)
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          );
      case Section.QUIZ: return <SectionQuiz questions={EXTERNAL_QUIZ_QUESTIONS} />;
      default: return <WeatheringSim />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      
      {/* Sidebar Navigation */}
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold"
          >
             <ArrowRight size={16} />
             العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-amber-700 px-2 leading-tight">العمليات الخارجية 🏜️</h1>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {EXTERNAL_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${
                activeSection === section.id 
                  ? 'bg-amber-100 text-amber-800' 
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
              <span className="font-bold text-lg text-amber-800">العمليات الخارجية</span>
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

export default ExternalLesson;