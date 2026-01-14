import React, { useState } from 'react';
import { OMAN_UMAYYAD_SECTIONS, OMAN_UMAYYAD_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, Target, Shield, History, Users, UserCheck, Scroll, Swords, Flag, Smile, Frown } from 'lucide-react';
import SectionQuiz from './SectionQuiz';

interface Props {
    onBack: () => void;
}

const OmanUmayyadLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.OMAN_UMAYYAD_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO SECTION ---
  const IntroSection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          <div className="bg-gradient-to-r from-orange-600 to-amber-700 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-full"><Scroll size={32} /></div>
                      <h3 className="text-xl font-bold text-orange-200">من الخطاب السامي (2020م)</h3>
                  </div>
                  <p className="text-lg leading-loose font-serif italic mb-4 text-center">
                      "وَعَلَى الصَّعِيدِ الْخَارِجِيِّ فَإِنَّنَا نَرْتَسِمُ خُطَى السُّلْطَانِ الرَّاحِلِ..."
                  </p>
                  <p className="text-left text-sm font-bold text-orange-200">- السلطان هيثم بن طارق حفظه الله</p>
              </div>
          </div>
          <div className="bg-amber-50 border-r-4 border-amber-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Target size={24}/> أهداف الدرس:
              </h3>
              <ul className="grid gap-3 text-amber-800 font-medium text-lg">
                  <li>1. التعرف على موقف عمان مع بداية حكم الدولة الأموية.</li>
                  <li>2. تتبع مراحل استقلال عمان عن الدولة الأموية.</li>
                  <li>3. استنتاج سياسة الولاة الأمويين في عمان.</li>
                  <li>4. تحليل أسباب مقاومة العمانيين للسيطرة الأموية.</li>
              </ul>
          </div>
      </div>
  );

  // --- 2. OMANI STANCE SECTION ---
  const StanceSection = () => {
      const [revealed, setRevealed] = useState(false);
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">موقف عُمان</h2>
                  <p className="text-slate-500">مع بداية الحكم الأموي</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-500">
                  <h3 className="font-bold text-lg text-slate-800 mb-3">الموقف العماني</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                      ابتعـدت عُمان عـن الصراعـات، وأعلنـت عـدم ارتباطهـا بالدولـة الأمويـة.
                  </p>
              </div>
              <div className="bg-orange-50 rounded-3xl p-8 border border-orange-200 mt-8 relative">
                  <h3 className="text-xl font-black text-orange-900 mb-4 flex items-center gap-2">
                      <Swords size={24}/> نافذة المعرفة: هجوم النجدات (69هـ)
                  </h3>
                  <div className="bg-white/80 p-4 rounded-xl text-slate-700 leading-relaxed shadow-sm">
                      <p className="mb-2">دافع العمانيون عن بلادهم بشراسة.</p>
                      <p className={`transition-all duration-500 ${revealed ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
                          انتهت المعركة بمقتل ملك عمان <strong>"عَبَّاد بن عَبد بن الجلندى"</strong> دفاعاً عن الوطن.
                      </p>
                      {!revealed && (
                          <button onClick={() => setRevealed(true)} className="mt-2 text-orange-600 font-bold underline text-sm">
                              اضغط لمعرفة نتيجة المعركة
                          </button>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. INDEPENDENCE SECTION ---
  const IndependenceSection = () => {
      const timelineEvents = [
          { year: '41هـ', oman: 'استقلال وعدم تبعية', umayyad: 'قيام الدولة الأموية' },
          { year: '69هـ', oman: 'مقتل عَبَّاد وتولي ابنيه', umayyad: 'عهد عبدالملك بن مروان' },
          { year: '81هـ', oman: 'دخول عمان تحت الحكم الأموي', umayyad: 'حملات الحجاج بن يوسف' }
      ];
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                      <History size={20}/> خط زمني مقارن:
                  </h3>
                  <div className="space-y-4">
                      {timelineEvents.map((event, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                              <span className="text-green-600 font-bold">{event.oman}</span>
                              <span className="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded-full">{event.year}</span>
                              <span className="text-orange-600 font-bold">{event.umayyad}</span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="bg-slate-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 text-slate-500 shadow-md">
                          <Users size={48} />
                      </div>
                      <h3 className="font-bold text-xl text-slate-800">سعيد وسليمان</h3>
                      <p className="text-sm text-slate-500 mt-1">ابنا عَبَّاد بن عَبد</p>
                  </div>
                  <div className="md:w-2/3">
                      <h4 className="font-bold text-lg text-indigo-900 mb-4">كفاح من أجل الاستقلال</h4>
                      <p className="text-slate-700 leading-loose mb-6 text-lg">
                          بعد مقتل والدهما، قاد <strong>سعيد وسليمان</strong> المقاومة واستعادا استقلال عمان.
                      </p>
                      <div className="bg-white p-4 rounded-xl border-l-4 border-indigo-500 flex gap-4 items-center shadow-sm">
                          <Shield size={32} className="text-indigo-600" />
                          <div>
                              <span className="block font-bold text-indigo-800">النتيجة:</span>
                              <span className="text-sm text-indigo-700">تحرير البلاد وحكم مستقل حتى عام 81هـ.</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. CONTROL SECTION ---
  const ControlSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">سيطرة الدولة الأموية (81هـ)</h2>
                  <p className="text-slate-500">حملات الحجاج بن يوسف الثقفي</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                  <p className="text-blue-900 text-lg font-medium leading-relaxed">
                      أرسل الحجاج بن يوسف حملات عسكرية للسيطرة على عمان، نجحت الحملة البحرية أخيراً في إخضاع عمان للحكم الأموي.
                  </p>
              </div>
          </div>
      );
  };

  // --- 5. GOVERNORS SECTION ---
  const GovernorsSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">عُمال الدولة الأموية</h2>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="bg-slate-100 p-3 rounded-full text-slate-600"><UserCheck size={24}/></div>
                      <h3 className="font-bold text-slate-800 text-lg">تعيين العمال</h3>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed">
                      استمرت الدولة الأموية في تعيين العمال (الولاة) على عمان.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm font-bold text-indigo-700">
                      <li>• صالح بن عبد الرحمن الليثي</li>
                      <li>• زياد بن المهلب (شخصية عمانية بارزة)</li>
                  </ul>
              </div>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl mt-8">
                  <h3 className="text-2xl font-black mb-6 text-center">موقف أهل عمان</h3>
                  <div className="flex justify-center gap-8">
                      <div className="flex flex-col items-center">
                          <Smile size={40} className="text-yellow-300 mb-2"/>
                          <span className="font-bold">العدل: الطاعة</span>
                      </div>
                      <div className="flex flex-col items-center">
                          <Frown size={40} className="text-red-300 mb-2"/>
                          <span className="font-bold">الظلم: الرفض</span>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.OMAN_UMAYYAD_INTRO: return <IntroSection />;
      case Section.OMAN_UMAYYAD_STANCE: return <StanceSection />;
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
          {OMAN_UMAYYAD_SECTIONS.map((section: any) => (
            <button
              key={section.id}
              onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold text-base ${activeSection === section.id ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
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