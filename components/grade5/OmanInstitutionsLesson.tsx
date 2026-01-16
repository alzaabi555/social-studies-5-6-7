
import React, { useState } from 'react';
import { FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Target, Building2, Users, Baby, Heart, CheckCircle, Menu, Eye, ShieldCheck, Globe, Calendar, Search } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const IntroSection = () => (
    <div className="p-6 text-center space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-cyan-800">الحقوق والمؤسسات: حماية ورعاية</h2>
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-cyan-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 bg-cyan-50 rounded-full blur-2xl opacity-50"></div>
            <Target size={64} className="mx-auto text-cyan-500 mb-6"/>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
                لم تكتفِ السلطنة بوضع القوانين على الورق، بل قامت ببناء <strong>مؤسسات حقيقية</strong> على أرض الواقع لخدمتك وحمايتك.
                <br/><span className="text-cyan-600 text-sm mt-2 block">دعنا نستكشف هذه المؤسسات في مدينتنا الافتراضية! 👇</span>
            </p>
        </div>
    </div>
);

const InteractiveCity = () => {
    const [activeBuilding, setActiveBuilding] = useState<string | null>(null);

    return (
        <div className="p-6 space-y-6 animate-fade-in">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-black text-slate-800">مدينة المؤسسات الوطنية 🏛️</h2>
                <p className="text-slate-500">اضغط على المباني لمعرفة دور كل مؤسسة</p>
            </div>

            <div className="relative w-full h-[400px] bg-sky-100 rounded-3xl border-4 border-slate-300 overflow-hidden shadow-2xl group">
                {/* Sky & Clouds */}
                <div className="absolute top-10 left-10 text-white/80 animate-[pulse_3s_infinite]"><Search size={40} className="text-white"/></div>
                
                {/* Road */}
                <div className="absolute bottom-0 w-full h-24 bg-slate-700 border-t-4 border-slate-500">
                    <div className="w-full h-2 mt-10 border-t-2 border-dashed border-white"></div>
                </div>

                {/* Building 1: Human Rights Commission */}
                <button 
                    onClick={() => setActiveBuilding('human_rights')}
                    className="absolute bottom-20 left-10 w-40 h-48 bg-white border-2 border-slate-200 rounded-t-xl shadow-lg hover:scale-105 transition-transform flex flex-col items-center justify-end p-2 group-building"
                >
                    <div className="w-full h-4 bg-cyan-500 absolute top-4"></div>
                    <Eye size={32} className="text-cyan-600 mb-2"/>
                    <span className="text-xs font-bold text-center text-slate-700">اللجنة العمانية لحقوق الإنسان</span>
                    <div className="w-8 h-12 bg-slate-800 rounded-t-lg mt-2"></div>
                </button>

                {/* Building 2: Ministry of Social Development */}
                <button 
                    onClick={() => setActiveBuilding('ministry')}
                    className="absolute bottom-20 right-10 w-48 h-56 bg-orange-50 border-2 border-orange-200 rounded-t-xl shadow-lg hover:scale-105 transition-transform flex flex-col items-center justify-end p-2"
                >
                    <div className="w-full h-4 bg-orange-500 absolute top-4"></div>
                    <div className="w-full h-4 bg-orange-500 absolute top-12"></div>
                    <Building2 size={32} className="text-orange-600 mb-2"/>
                    <span className="text-xs font-bold text-center text-slate-700">وزارة التنمية الاجتماعية</span>
                    <div className="w-12 h-16 bg-slate-800 rounded-t-lg mt-2"></div>
                </button>

                {/* Info Modal Overlay */}
                {activeBuilding && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in z-20">
                        <div className="bg-white p-8 rounded-3xl max-w-md w-full relative shadow-2xl">
                            <button onClick={() => setActiveBuilding(null)} className="absolute top-4 right-4 bg-slate-100 p-2 rounded-full hover:bg-slate-200">✕</button>
                            
                            {activeBuilding === 'human_rights' && (
                                <div className="text-center">
                                    <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-600"><Eye size={32}/></div>
                                    <h3 className="text-2xl font-black text-cyan-800 mb-2">اللجنة العمانية لحقوق الإنسان</h3>
                                    <p className="text-slate-600">جهة وطنية مستقلة تراقب وتحمي حقوق الإنسان في السلطنة، وتتلقى الشكاوى من المواطنين والمقيمين.</p>
                                </div>
                            )}

                            {activeBuilding === 'ministry' && (
                                <div className="text-center">
                                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600"><Heart size={32}/></div>
                                    <h3 className="text-2xl font-black text-orange-800 mb-2">وزارة التنمية الاجتماعية</h3>
                                    <p className="text-slate-600">تقدم الرعاية للفئات الخاصة (الأيتام، ذوي الإعاقة، الأسر المحتاجة) وتضمن لهم حياة كريمة.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const BalloonsGame = () => {
    const [popped, setPopped] = useState<number[]>([]);
    const rights = [
        { id: 1, text: 'التعليم', color: 'bg-red-400', x: 10, y: 20 },
        { id: 2, text: 'الصحة', color: 'bg-blue-400', x: 40, y: 10 },
        { id: 3, text: 'الحماية', color: 'bg-green-400', x: 70, y: 30 },
        { id: 4, text: 'اللعب', color: 'bg-yellow-400', x: 30, y: 60 },
        { id: 5, text: 'الهوية', color: 'bg-purple-400', x: 60, y: 50 },
    ];

    return (
        <div className="p-6 space-y-6 animate-fade-in text-center">
            <h2 className="text-2xl font-black text-blue-800">لعبة حقوق الطفل 🎈</h2>
            <p className="text-slate-500">افقع البالونات لاكتشاف الحقوق التي كفلتها اتفاقية حقوق الطفل</p>
            
            <div className="relative w-full h-80 bg-gradient-to-b from-sky-200 to-white rounded-3xl border-4 border-sky-300 overflow-hidden shadow-inner">
                {rights.map((right) => (
                    !popped.includes(right.id) ? (
                        <button
                            key={right.id}
                            onClick={() => setPopped([...popped, right.id])}
                            className={`absolute w-20 h-24 rounded-[50%] ${right.color} shadow-lg flex items-center justify-center text-white font-bold animate-[float_3s_ease-in-out_infinite] hover:scale-110 transition-transform cursor-pointer`}
                            style={{ left: `${right.x}%`, top: `${right.y}%`, animationDelay: `${right.id * 0.5}s` }}
                        >
                            ?
                            {/* String */}
                            <div className="absolute top-full left-1/2 w-0.5 h-10 bg-slate-400 opacity-50"></div>
                        </button>
                    ) : (
                        <div 
                            key={right.id}
                            className="absolute bg-white px-4 py-2 rounded-xl shadow-xl text-slate-800 font-bold border-2 border-slate-100 animate-scale-in z-10"
                            style={{ left: `${right.x}%`, top: `${right.y}%` }}
                        >
                            {right.text} ✅
                        </div>
                    )
                ))}
                
                {popped.length === rights.length && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm animate-fade-in">
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-green-600 mb-2">رائع! 🎉</h3>
                            <p className="font-bold text-slate-700">لقد تعلمت جميع حقوق الطفل الأساسية.</p>
                            <button onClick={() => setPopped([])} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">لعب مرة أخرى</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const OmanInstitutionsLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'city' | 'balloons' | 'quiz'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-cyan-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-cyan-100 flex flex-col`}>
        <div className="p-4 border-b border-cyan-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-cyan-700 px-2">الحقوق والمؤسسات 🏛️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Target size={20}/> المقدمة
          </button>
          <button onClick={() => {setActiveTab('city'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'city' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> مدينة المؤسسات (تفاعلي)
          </button>
          <button onClick={() => {setActiveTab('balloons'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'balloons' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Baby size={20}/> لعبة حقوق الطفل
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-cyan-800">المؤسسات والاتفاقيات</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-6 md:px-10">
            {activeTab === 'intro' && <IntroSection />}
            {activeTab === 'city' && <InteractiveCity />}
            {activeTab === 'balloons' && <BalloonsGame />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default OmanInstitutionsLesson;
