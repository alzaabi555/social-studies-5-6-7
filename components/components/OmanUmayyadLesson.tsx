
import React, { useState } from 'react';
import { OMAN_UMAYYAD_SECTIONS, OMAN_UMAYYAD_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, Target, Shield, Users, Swords, Anchor, Skull, Play, RefreshCw, Star, Info, Ship, AlertTriangle, Flag } from 'lucide-react';
import SectionQuiz from './SectionQuiz';

interface Props {
    onBack: () => void;
}

const OmanUmayyadLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.OMAN_UMAYYAD_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO & STANCE ---
  const IntroSection = () => {
      const [showReason, setShowReason] = useState(false);
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="bg-orange-50 border-r-4 border-orange-600 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-3 text-orange-800 font-medium text-lg">
                      <li>• توضيح موقف عمان من قيام الدولة الأموية.</li>
                      <li>• تتبع حملات الحجاج بن يوسف للسيطرة على عمان.</li>
                      <li>• تقدير تضحيات العمانيين في الدفاع عن استقلالهم.</li>
                      <li>• تعليل هجرة الأزد إلى البصرة وشرق أفريقيا.</li>
                  </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center">
                  <h2 className="text-3xl font-black text-slate-800 mb-4">الموقف العماني المبكر (41هـ)</h2>
                  <div className="flex items-center justify-center gap-6 mb-6">
                      <div className="bg-slate-100 px-6 py-3 rounded-full font-bold text-slate-700">الدولة الأموية (دمشق)</div>
                      <div className="text-3xl text-red-500">❌</div>
                      <div className="bg-green-100 px-6 py-3 rounded-full font-bold text-green-800">عمان (آل الجلندى)</div>
                  </div>
                  <button 
                      onClick={() => setShowReason(!showReason)}
                      className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                      {showReason ? 'إخفاء السبب' : 'لماذا رفضت عمان التبعية؟'}
                  </button>
                  {showReason && (
                      <div className="mt-6 bg-orange-50 p-6 rounded-2xl text-orange-900 font-medium animate-slide-up">
                          <p>
                              حافظت عمان على استقلالها منذ إسلام أهلها طواعية. وعندما قامت الدولة الأموية، فضل العمانيون <strong>الاستقلال وعدم التدخل في الصراعات السياسية</strong> التي كانت تدور في مركز الخلافة.
                          </p>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- 2. RESISTANCE (INDEPENDENCE) ---
  const IndependenceSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">مقاومة الغزو الأول (عهد عبدالملك)</h2>
                  <p className="text-slate-500">حملة "النجدات" ومقتل عباد بن عبد</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 bg-slate-200 rounded-3xl overflow-hidden border-4 border-slate-300 group">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10"></div>
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">الخطر القادم</div>
                      <div className="flex items-center justify-center h-full">
                          <Swords size={64} className="text-slate-400 group-hover:scale-125 transition-transform duration-500" />
                      </div>
                  </div>

                  <div className="space-y-4">
                      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-500">
                          <h4 className="font-bold text-red-900 mb-2">الهجوم الغادر:</h4>
                          <p className="text-slate-700">تعرضت عمان لهجوم من "النجدات" (خوارج من البحرين). تصدى لهم الملك <strong>عباد بن عبد</strong> واستشهد دفاعاً عن وطنه (69هـ).</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500">
                          <h4 className="font-bold text-green-900 mb-2">عودة الاستقلال:</h4>
                          <p className="text-slate-700">تولى الحكم ابناه <strong>(سعيد وسليمان)</strong>، ونجحا في طرد الغزاة وإعادة توحيد عمان واستقلالها.</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. AL-HAJJAJ CAMPAIGNS (CONTROL) ---
  const ControlSection = () => {
      const [campaignStep, setCampaignStep] = useState(0);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">حملات الحجاج بن يوسف (81هـ)</h2>
                  <p className="text-slate-500">أصر الحجاج (والي العراق) على إخضاع عمان بالقوة</p>
              </div>

              <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                  {/* Campaign Simulator */}
                  <div className="relative h-64 border-2 border-slate-600 rounded-xl bg-slate-800 flex items-center justify-center mb-6 overflow-hidden">
                      {campaignStep === 0 && (
                          <div className="text-center animate-fade-in">
                              <h3 className="text-2xl font-bold text-yellow-400 mb-4">الحملة البرية الأولى (القاسم بن شعوة)</h3>
                              <div className="flex gap-4 justify-center items-center">
                                  <div className="bg-red-600 px-4 py-2 rounded text-sm">جيش الحجاج</div>
                                  <Swords size={32} className="text-slate-400"/>
                                  <div className="bg-green-600 px-4 py-2 rounded text-sm">جيش عمان (سعيد وسليمان)</div>
                              </div>
                              <p className="mt-4 text-green-300 font-bold bg-green-900/50 p-2 rounded">النتيجة: هزيمة جيش الحجاج ومقتل قائده</p>
                          </div>
                      )}
                      {campaignStep === 1 && (
                          <div className="text-center animate-fade-in">
                              <h3 className="text-2xl font-bold text-orange-400 mb-4">الحملة البرية الثانية (مجاعة بن سعر)</h3>
                              <p className="mb-4 text-slate-300">أرسل الحجاج جيشاً أكبر (40 ألف مقاتل) برياً.</p>
                              <div className="flex gap-4 justify-center items-center">
                                  <div className="bg-orange-600 px-4 py-2 rounded text-sm">جيش الحجاج</div>
                                  <Swords size={32} className="text-slate-400"/>
                                  <div className="bg-green-600 px-4 py-2 rounded text-sm">جيش عمان</div>
                              </div>
                              <p className="mt-4 text-orange-300 font-bold bg-orange-900/50 p-2 rounded">النتيجة: صمود العمانيين وفشل الحملة جزئياً</p>
                          </div>
                      )}
                      {campaignStep === 2 && (
                          <div className="text-center animate-fade-in">
                              <h3 className="text-2xl font-bold text-red-500 mb-4">الحملة البحرية الحاسمة</h3>
                              <p className="mb-4 text-slate-300">أدرك الحجاج صعوبة البر، فأرسل أسطولاً بحرياً ضخماً.</p>
                              <div className="flex justify-center mb-4">
                                  <Ship size={48} className="text-blue-400 animate-pulse" />
                              </div>
                              <p className="text-red-300 font-bold bg-red-900/50 p-2 rounded">النتيجة: السيطرة على عمان واضطرار سعيد وسليمان للخروج</p>
                          </div>
                      )}
                  </div>

                  <div className="flex justify-center gap-4">
                      <button 
                          onClick={() => setCampaignStep(prev => prev > 0 ? prev - 1 : 0)}
                          className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-full font-bold transition-colors"
                          disabled={campaignStep === 0}
                      >
                          السابق
                      </button>
                      <button 
                          onClick={() => setCampaignStep(prev => prev < 2 ? prev + 1 : 0)}
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-colors shadow-lg"
                      >
                          {campaignStep === 2 ? "إعادة" : "التالي"}
                      </button>
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. GOVERNORS & MIGRATION ---
  const GovernorsSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              {/* Migration Result */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-purple-500">
                  <h3 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                      <Anchor className="text-purple-600"/> الهجرة الأزدية
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      نتيجة لسياسة الحجاج القاسية والحروب المتواصلة، هاجرت قبائل الأزد العمانية (بقيادة سعيد وسليمان) إلى:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-xl text-center border border-purple-200">
                          <span className="block font-black text-purple-900 mb-1">شرق أفريقيا</span>
                          <span className="text-xs text-purple-700">تأسيس حضارة جديدة</span>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl text-center border border-blue-200">
                          <span className="block font-black text-blue-900 mb-1">البصرة</span>
                          <span className="text-xs text-blue-700">مركز علمي وتجاري</span>
                      </div>
                  </div>
              </div>

              {/* Omani Governors */}
              <div className="bg-green-50 p-8 rounded-3xl border border-green-200">
                  <h3 className="text-xl font-black text-green-900 mb-4 flex items-center gap-2">
                      <Users size={24}/> ولاة عمان في العصر الأموي
                  </h3>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                          <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1"><Star size={16}/></div>
                          <div>
                              <span className="font-bold text-slate-800">زياد بن المهلب</span>
                              <p className="text-sm text-slate-500">من الشخصيات العمانية البارزة التي تولت ولاية عمان.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                          <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1"><Star size={16}/></div>
                          <div>
                              <span className="font-bold text-slate-800">الخيار بن سبرة</span>
                              <p className="text-sm text-slate-500">والي أموي في أواخر عهد الدولة.</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.OMAN_UMAYYAD_INTRO: return <IntroSection />;
      case Section.OMAN_UMAYYAD_STANCE: return <IntroSection />; // Re-using Intro for initial stance details
      case Section.OMAN_UMAYYAD_INDEPENDENCE: return <IndependenceSection />;
      case Section.OMAN_UMAYYAD_CONTROL: return <ControlSection />;
      case Section.OMAN_UMAYYAD_GOVERNORS: return <GovernorsSection />;
      case Section.QUIZ: return <SectionQuiz questions={OMAN_UMAYYAD_QUIZ_QUESTIONS} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-orange-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-orange-100 flex flex-col`}>
        <div className="p-4 border-b border-orange-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-orange-600 bg-slate-50 hover:bg-orange-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-orange-700 px-2">عمان والأمويون ⚔️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => { setActiveSection(Section.OMAN_UMAYYAD_INTRO); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.OMAN_UMAYYAD_INTRO ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Shield size={20}/> الموقف العماني
          </button>
          <button onClick={() => { setActiveSection(Section.OMAN_UMAYYAD_INDEPENDENCE); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.OMAN_UMAYYAD_INDEPENDENCE ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Flag size={20}/> المقاومة والاستقلال
          </button>
          <button onClick={() => { setActiveSection(Section.OMAN_UMAYYAD_CONTROL); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.OMAN_UMAYYAD_CONTROL ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Swords size={20}/> حملات الحجاج
          </button>
          <button onClick={() => { setActiveSection(Section.OMAN_UMAYYAD_GOVERNORS); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.OMAN_UMAYYAD_GOVERNORS ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Users size={20}/> الولاة والهجرة
          </button>
          <button onClick={() => { setActiveSection(Section.QUIZ); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.QUIZ ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-orange-800">عمان والأمويون</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanUmayyadLesson;
