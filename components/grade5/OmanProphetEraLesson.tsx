
import React, { useState } from 'react';
import { FIFTH_OMAN_PROPHET_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Star, Mail, MapPin, CheckCircle, Menu, User, ChevronRight, ChevronLeft } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const MazinStory = () => {
    const [step, setStep] = useState(0);
    const scenes = [
        { text: "عاش مازن بن غضوبة في سمائل، وكان يعبد الأصنام، لكنه كان يشعر في داخله أن هذا خطأ.", bg: 'bg-slate-100', icon: '🙏' },
        { text: "سمع خبراً عن نبي ظهر في الحجاز يدعو إلى عبادة الله وحده وترك الأصنام.", bg: 'bg-amber-50', icon: '👂' },
        { text: "قرر السفر إلى المدينة المنورة، وقطع مسافات طويلة وشاقة على ناقته.", bg: 'bg-blue-50', icon: '🐫' },
        { text: "التقى بالنبي ﷺ وأعلن إسلامه، ودعا النبي لأهل عمان بالخير والبركة.", bg: 'bg-green-50', icon: '🤝' },
        { text: "عاد إلى عمان وبنى مسجد 'المضمار' في سمائل، وهو أول مسجد في عمان.", bg: 'bg-emerald-50', icon: '🕌' }
    ];

    return (
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-amber-100 animate-fade-in">
            <h2 className="text-2xl font-black text-center text-amber-900 mb-6">قصة إسلام مازن بن غضوبة</h2>
            
            {/* Story Card */}
            <div className={`relative h-64 rounded-2xl flex flex-col items-center justify-center text-center p-8 transition-all duration-500 ${scenes[step].bg} border-2 border-amber-200 overflow-hidden`}>
                <div className="text-6xl mb-4 animate-bounce">{scenes[step].icon}</div>
                <p className="text-xl font-bold text-slate-800 leading-relaxed max-w-lg z-10">{scenes[step].text}</p>
                <div className="absolute bottom-4 right-4 bg-white/50 px-3 py-1 rounded text-xs font-bold">المشهد {step + 1} من {scenes.length}</div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6">
                <button 
                    onClick={() => setStep(s => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="p-3 rounded-full bg-slate-200 disabled:opacity-50 hover:bg-slate-300 transition-colors"
                >
                    <ChevronRight size={24}/>
                </button>
                
                <div className="flex gap-2 items-center">
                    {scenes.map((_, i) => (
                        <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'bg-amber-600 w-8' : 'bg-slate-300 w-2'}`}></div>
                    ))}
                </div>

                <button 
                    onClick={() => setStep(s => Math.min(scenes.length - 1, s + 1))}
                    disabled={step === scenes.length - 1}
                    className="p-3 rounded-full bg-amber-600 text-white disabled:opacity-50 hover:bg-amber-700 transition-colors shadow-lg"
                >
                    <ChevronLeft size={24}/>
                </button>
            </div>
        </div>
    );
};

const AnimatedLetter = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 text-center animate-fade-in space-y-8">
            <div>
                <h2 className="text-2xl font-black text-blue-900 mb-2">رسالة النبي ﷺ إلى أهل عمان</h2>
                <p className="text-blue-700">الصحابي عمرو بن العاص يحمل رسالة السلام</p>
            </div>
            
            {/* Interactive Envelope */}
            <div className="relative h-48 flex items-center justify-center">
                {!isOpen ? (
                    <div 
                        onClick={() => setIsOpen(true)}
                        className="cursor-pointer bg-[#f3e5ab] w-64 h-40 rounded shadow-xl border-4 border-[#d4b483] flex flex-col items-center justify-center transform hover:scale-105 transition-all hover:shadow-2xl z-10"
                    >
                        <div className="w-full h-1 bg-[#d4b483] absolute top-10"></div>
                        <Mail size={48} className="text-amber-800 mb-2"/>
                        <p className="font-bold text-amber-900 text-sm">اضغط لفتح الرسالة</p>
                        <div className="absolute bottom-2 text-[10px] text-amber-700 font-serif">إلى: جيفر وعبد ابني الجلندى</div>
                    </div>
                ) : (
                    <div className="bg-[#fffdf5] w-full max-w-lg p-6 rounded-xl shadow-lg border-2 border-[#f3e5ab] text-right animate-scale-in relative">
                        <button onClick={() => setIsOpen(false)} className="absolute top-2 left-2 text-slate-400 hover:text-slate-600">✕</button>
                        <h4 className="font-bold text-center text-amber-800 mb-3 font-serif">بسم الله الرحمن الرحيم</h4>
                        <p className="text-sm font-serif leading-loose text-slate-800">
                            "من محمد رسول الله إلى جيفر وعبد ابني الجلندى، السلام على من اتبع الهدى.. أما بعد، فإني أدعوكما بدعاية الإسلام، أسلما تسلما..."
                        </p>
                        <div className="mt-4 pt-4 border-t border-dashed border-amber-200 text-center">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">النتيجة: أسلما وأسلم أهل عمان طواعية</span>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Map Path Visualization */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 mt-4 relative h-32 overflow-hidden">
                <svg viewBox="0 0 400 100" className="w-full h-full absolute inset-0">
                    <line x1="50" y1="50" x2="350" y2="50" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5 5" />
                    <circle cx="50" cy="50" r="5" fill="#10B981" />
                    <text x="50" y="70" fontSize="10" textAnchor="middle">المدينة</text>
                    <circle cx="350" cy="50" r="5" fill="#EF4444" />
                    <text x="350" y="70" fontSize="10" textAnchor="middle">صحار</text>
                    
                    {/* Moving Messenger */}
                    <circle r="4" fill="#3B82F6">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M50,50 L350,50" />
                    </circle>
                </svg>
                <p className="absolute top-2 right-2 text-xs text-slate-400">مسار الرحلة</p>
            </div>
        </div>
    );
};

const OmanProphetEraLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'letter' | 'quiz'>('story');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-amber-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-amber-100 flex flex-col`}>
        <div className="p-4 border-b border-amber-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-amber-700 px-2">عُمان والرسالة 📜</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('story'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'story' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> قصة مازن (تفاعلية)
          </button>
          <button onClick={() => {setActiveTab('letter'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'letter' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Mail size={20}/> رسالة النبي
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-amber-800">عمان في عهد الرسول</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeTab === 'story' && <MazinStory />}
            {activeTab === 'letter' && <AnimatedLetter />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_OMAN_PROPHET_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default OmanProphetEraLesson;
