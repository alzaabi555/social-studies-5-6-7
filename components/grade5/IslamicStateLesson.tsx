
import React, { useState } from 'react';
import { FIFTH_ISLAMIC_STATE_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Map, Building2, Handshake, Scroll, Shield, Target, Menu, PlayCircle, Users } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const MigrationMap = () => {
    const [isMigrating, setIsMigrating] = useState(false);

    return (
        <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 animate-fade-in">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-emerald-900">طريق الهجرة النبوية</h2>
                <p className="text-slate-600">تتبع مسار الرسول ﷺ من مكة إلى المدينة</p>
            </div>

            <div className="relative w-full h-80 bg-[#e6d5b8] rounded-2xl overflow-hidden border-4 border-[#c2b280] shadow-lg">
                {/* Map Terrain */}
                <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
                    {/* Path */}
                    <path 
                        id="migrationPath"
                        d="M350,150 Q300,180 200,100 T50,50" 
                        fill="none" 
                        stroke="#B45309" 
                        strokeWidth="4" 
                        strokeDasharray="10 5"
                        className="opacity-50"
                    />
                    
                    {/* Cities */}
                    <g transform="translate(350, 150)">
                        <circle r="8" fill="#1F2937" />
                        <text y="20" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1F2937">مكة المكرمة</text>
                    </g>
                    
                    <g transform="translate(50, 50)">
                        <circle r="8" fill="#059669" />
                        <text y="20" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#059669">المدينة المنورة</text>
                    </g>

                    {/* Camel Animation */}
                    {isMigrating && (
                        <circle r="6" fill="#D97706">
                            <animateMotion 
                                dur="4s" 
                                repeatCount="1" 
                                fill="freeze"
                                path="M350,150 Q300,180 200,100 T50,50" 
                            />
                        </circle>
                    )}
                </svg>

                <button 
                    onClick={() => setIsMigrating(!isMigrating)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <PlayCircle size={20} /> {isMigrating ? 'إعادة' : 'بدء الهجرة'}
                </button>
            </div>
        </div>
    );
};

const MosqueInteractive = () => {
    const [activePart, setActivePart] = useState<string | null>(null);

    const parts = [
        { id: 'prayer', label: 'المصلى', desc: 'مكان الصلاة والعبادة وتجمع المسلمين.', x: 50, y: 50, color: 'bg-green-500' },
        { id: 'school', label: 'مدرسة العلم', desc: 'حلقات تعليم القرآن وأمور الدين.', x: 20, y: 30, color: 'bg-blue-500' },
        { id: 'gov', label: 'مقر الحكم', desc: 'إدارة شؤون الدولة واستقبال الوفود.', x: 80, y: 30, color: 'bg-purple-500' },
        { id: 'suffah', label: 'الظلة (الصفة)', desc: 'مأوى للفقراء والمهاجرين الذين لا مأوى لهم.', x: 20, y: 80, color: 'bg-orange-500' },
    ];

    return (
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200 animate-fade-in">
            <h2 className="text-2xl font-black text-center text-slate-800 mb-6">المسجد النبوي: أكثر من مجرد مصلى</h2>
            
            <div className="relative w-full h-72 bg-slate-100 rounded-2xl border-4 border-slate-300 overflow-hidden shadow-inner">
                {/* Simple Blueprint Layout */}
                <div className="absolute inset-4 border-2 border-dashed border-slate-400 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-4xl opacity-20">مخطط المسجد</div>
                
                {parts.map(part => (
                    <button
                        key={part.id}
                        onClick={() => setActivePart(part.id)}
                        className={`absolute w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xl transition-transform hover:scale-110 ${part.color} ${activePart === part.id ? 'ring-4 ring-white scale-110' : ''}`}
                        style={{ left: `${part.x}%`, top: `${part.y}%` }}
                    >
                        +
                    </button>
                ))}

                {activePart && (
                    <div className="absolute inset-x-0 bottom-0 bg-white/95 p-4 backdrop-blur-md border-t-2 border-slate-200 animate-slide-up">
                        <h4 className="font-black text-lg text-slate-900">{parts.find(p => p.id === activePart)?.label}</h4>
                        <p className="text-slate-600 text-sm">{parts.find(p => p.id === activePart)?.desc}</p>
                    </div>
                )}
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">اضغط على العلامات (+) لاستكشاف أجزاء المسجد</p>
        </div>
    );
};

const IslamicStateLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'migration' | 'mosque' | 'foundations' | 'quiz'>('migration');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-emerald-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-emerald-100 flex flex-col`}>
        <div className="p-4 border-b border-emerald-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-emerald-700 px-2">الدولة الإسلامية 🕌</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('migration'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'migration' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Map size={20}/> الهجرة (محاكاة)
          </button>
          <button onClick={() => {setActiveTab('mosque'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'mosque' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> المسجد النبوي
          </button>
          <button onClick={() => {setActiveTab('foundations'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'foundations' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Handshake size={20}/> أسس الدولة
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Target size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
           <span className="font-bold text-lg text-emerald-800">تأسيس الدولة</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeTab === 'migration' && <MigrationMap />}
            {activeTab === 'mosque' && <MosqueInteractive />}
            {activeTab === 'foundations' && (
                <div className="space-y-6 animate-fade-in">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-black text-emerald-900">أسس بناء الدولة</h2>
                        <p className="text-slate-500">كيف وحد الرسول ﷺ المجتمع في المدينة؟</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2"><Handshake/> المؤاخاة</h3>
                            <p className="text-slate-700 leading-relaxed">
                                آخى الرسول بين المهاجرين والأنصار ليصبحوا أخوة في الدين، يتقاسمون المال والبيت، مما قضى على العصبية القبلية وخلق مجتمعاً متماسكاً.
                            </p>
                        </div>
                        <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-amber-900 mb-2 flex items-center gap-2"><Scroll/> الصحيفة (الوثيقة)</h3>
                            <p className="text-slate-700 leading-relaxed">
                                دستور ينظم العلاقة بين المسلمين واليهود وغيرهم في المدينة، يضمن حرية العقيدة، وحرمة الدماء، والدفاع المشترك عن المدينة ضد أي عدوان.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-sm mt-6">
                        <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2"><Shield/> حماية الدولة</h3>
                        <p className="text-slate-700">
                            بدأ الرسول ﷺ بتكوين جيش قوي لحماية الدولة الفتية، وقاد بنفسه 27 غزوة (منها بدر وأحد والخندق) وأرسل العديد من السرايا لصد المعتدين وتأمين الحدود.
                        </p>
                    </div>
                </div>
            )}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_ISLAMIC_STATE_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default IslamicStateLesson;
