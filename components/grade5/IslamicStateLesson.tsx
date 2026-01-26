
import React, { useState } from 'react';
import { FIFTH_ISLAMIC_STATE_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Map, Building2, Handshake, Scroll, Shield, Target, Menu, PlayCircle, Users, BookOpen, Star, MessageCircle, Crown, Info, HelpCircle, CheckCircle } from 'lucide-react';

interface Props {
    onBack: () => void;
}

// --- 0. INTRO ACTIVITY (Page 51) ---
const IntroProblemActivity = ({ onComplete }: { onComplete: () => void }) => {
    const [solved, setSolved] = useState(false);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-slate-800 mb-2">تأمل واستنتج (ص ٥١)</h2>
                <p className="text-slate-600">تخيل أنك تعيش في قرية تعاني من المشكلات التالية.. كيف تحلها؟</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Problem 1 */}
                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-200 text-red-800 px-3 py-1 text-xs font-bold rounded-bl-xl">المشكلة ١</div>
                    <div className="text-4xl mb-4">😤🗣️</div>
                    <h3 className="font-bold text-red-900 mb-2">الاختلاف بين السكان</h3>
                    <p className="text-sm text-red-800 mb-4">خلاف على مكان بناء المسجد وتنازع بين القبائل.</p>
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <p className="text-xs font-bold text-slate-500 mb-1">الحل النبوي:</p>
                        <p className="text-emerald-700 font-bold">بناء المسجد + المؤاخاة</p>
                    </div>
                </div>

                {/* Problem 2 */}
                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-200 text-red-800 px-3 py-1 text-xs font-bold rounded-bl-xl">المشكلة ٢</div>
                    <div className="text-4xl mb-4">⚔️🏚️</div>
                    <h3 className="font-bold text-red-900 mb-2">عدم التكاتف للحماية</h3>
                    <p className="text-sm text-red-800 mb-4">ضعف الدفاع عن القرية ضد الأخطار الخارجية.</p>
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <p className="text-xs font-bold text-slate-500 mb-1">الحل النبوي:</p>
                        <p className="text-emerald-700 font-bold">وثيقة المدينة + بناء الجيش</p>
                    </div>
                </div>
            </div>

            <div className="bg-emerald-600 text-white p-6 rounded-3xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">ماذا فعل الرسول ﷺ؟</h3>
                <p className="mb-6 opacity-90">قام الرسول ﷺ بأعمال محددة لحل هذه المشكلات وتأسيس دولة قوية في المدينة المنورة.</p>
                <button onClick={onComplete} className="bg-white text-emerald-800 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                    استكشف أعمال التأسيس <ArrowRight size={18}/>
                </button>
            </div>
        </div>
    );
};

// --- 1. MIGRATION SECTION (Page 52) ---
const MigrationMap = () => {
    const [isMigrating, setIsMigrating] = useState(false);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 text-center">
                <h2 className="text-2xl font-black text-emerald-900 mb-2">تأسيس الدولة: الهجرة النبوية</h2>
                <p className="text-emerald-700">بدأت مرحلة التأسيس عندما هاجر الرسول ﷺ من مكة إلى المدينة (الشكل ١)</p>
            </div>

            <div className="relative w-full h-96 bg-[#e6d5b8] rounded-3xl overflow-hidden border-4 border-[#c2b280] shadow-xl group">
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')]"></div>
                
                <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full">
                    {/* Red Sea */}
                    <path d="M0,250 L50,250 L60,150 L30,50 L0,0 Z" fill="#60A5FA" opacity="0.5" />
                    
                    {/* Path */}
                    <path 
                        id="migrationPath"
                        d="M280,180 Q250,200 150,120 T80,50" 
                        fill="none" 
                        stroke="#B45309" 
                        strokeWidth="3" 
                        strokeDasharray="8 4"
                        className="opacity-60"
                    />
                    
                    {/* Mecca */}
                    <g transform="translate(280, 180)">
                        <circle r="6" fill="#1F2937" className="animate-pulse"/>
                        <text y="20" textAnchor="middle" fontWeight="bold" fontSize="10" fill="#1F2937">مكة المكرمة</text>
                    </g>
                    
                    {/* Medina */}
                    <g transform="translate(80, 50)">
                        <circle r="8" fill="#059669" className="animate-pulse"/>
                        <text y="-10" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#059669">المدينة المنورة (العاصمة)</text>
                    </g>

                    {/* Camel Icon Moving */}
                    {isMigrating && (
                        <g>
                            <circle r="5" fill="#D97706">
                                <animateMotion 
                                    dur="5s" 
                                    repeatCount="1" 
                                    fill="freeze"
                                    path="M280,180 Q250,200 150,120 T80,50" 
                                />
                            </circle>
                            <text fontSize="15" dy="-5">
                                <animateMotion 
                                    dur="5s" 
                                    repeatCount="1" 
                                    fill="freeze"
                                    path="M280,180 Q250,200 150,120 T80,50" 
                                />
                                🐫
                            </text>
                        </g>
                    )}
                </svg>

                <div className="absolute bottom-4 right-4 bg-white/80 p-4 rounded-xl backdrop-blur-sm max-w-xs shadow-sm">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">النتائج:</h4>
                    <p className="text-xs text-slate-600">اتخذ الرسول ﷺ المدينة المنورة عاصمة للدولة الإسلامية.</p>
                </div>

                <button 
                    onClick={() => setIsMigrating(!isMigrating)}
                    className="absolute bottom-4 left-4 bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <PlayCircle size={20} /> {isMigrating ? 'إعادة الرحلة' : 'ابدأ الهجرة'}
                </button>
            </div>
        </div>
    );
};

// --- 2. MOSQUE SECTION (Pages 52-53) ---
const MosqueInteractive = () => {
    const [activeRole, setActiveRole] = useState<number | null>(null);
    const [showStory, setShowStory] = useState(false);

    const roles = [
        { id: 1, title: 'مكان للعبادة', icon: '🤲', desc: 'إقامة الصلوات والعبادات.' },
        { id: 2, title: 'مقر القيادة', icon: '⚖️', desc: 'إدارة شؤون الدولة واتخاذ القرارات.' },
        { id: 3, title: 'مكان الاجتماعات', icon: '🤝', desc: 'الشورى والالتقاء بالصحابة.' },
        { id: 4, title: 'استقبال الوفود', icon: '🏳️', desc: 'استقبال السفراء والقبائل.' },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center">
                <h2 className="text-2xl font-black text-slate-800 mb-2">١- بناء المسجد النبوي</h2>
                <p className="text-slate-500">أول عمل قام به الرسول ﷺ، ولم يكن للعبادة فقط! (الشكل ٢)</p>
            </div>

            {/* Interactive Roles (Figure 2) */}
            <div className="grid grid-cols-2 gap-4">
                {roles.map((role) => (
                    <div 
                        key={role.id}
                        onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}
                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all text-center ${activeRole === role.id ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg scale-105' : 'bg-white border-slate-200 hover:border-emerald-300'}`}
                    >
                        <div className="text-4xl mb-2">{role.icon}</div>
                        <h4 className="font-bold text-lg">{role.title}</h4>
                        {activeRole === role.id && (
                            <p className="text-sm mt-2 opacity-90 animate-fade-in">{role.desc}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Camel Story (Page 53 Analysis) */}
            <div className="bg-amber-50 rounded-3xl p-6 border-2 border-amber-200 relative overflow-hidden">
                <div className="flex items-start gap-4 relative z-10">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                        <BookOpen size={24}/>
                    </div>
                    <div>
                        <h3 className="font-bold text-amber-900 text-lg mb-2">حلل واستنتج (ص ٥٣): كيف تم اختيار الموقع؟</h3>
                        <p className="text-amber-800 text-sm leading-relaxed mb-4">
                            عندما دخل الرسول ﷺ المدينة، تسابق الأنصار لاستضافته، فقال لهم عن ناقته:
                            <br/>
                            <span className="font-black text-lg">"خَلُّوا زمامَها فإنها مأمورة"</span>
                        </p>
                        {!showStory ? (
                            <button onClick={() => setShowStory(true)} className="bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-bold shadow hover:bg-amber-700">
                                ماذا حدث بعد ذلك؟
                            </button>
                        ) : (
                            <div className="bg-white p-4 rounded-xl shadow-sm animate-slide-up text-slate-700 text-sm">
                                بركت الناقة في مكان لغلامين يتيمين، فاشتراه الرسول ﷺ منهما وبنى عليه المسجد.
                                <br/>
                                <span className="text-amber-600 font-bold block mt-2">الاستنتاج: اختار الله الموقع، وذلك قطعاً للنزاع وحتى لا يتحيز لأحد دون الآخر.</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 3. FOUNDATIONS SECTION (Pages 54-55) ---
const FoundationsSection = () => {
    const [activeTab, setActiveTab] = useState<'brotherhood' | 'charter'>('brotherhood');

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-md mx-auto">
                <button 
                    onClick={() => setActiveTab('brotherhood')}
                    className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'brotherhood' ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}
                >
                    ٢- المؤاخاة
                </button>
                <button 
                    onClick={() => setActiveTab('charter')}
                    className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'charter' ? 'bg-white shadow text-purple-700' : 'text-slate-500'}`}
                >
                    ٣- الصحيفة
                </button>
            </div>

            {activeTab === 'brotherhood' ? (
                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200 text-center animate-slide-up">
                    <div className="mb-6">
                        <Users size={64} className="mx-auto text-blue-500 mb-2" />
                        <h3 className="text-2xl font-black text-blue-900">المؤاخاة</h3>
                        <p className="text-blue-800 mt-2">آخى الرسول ﷺ بين:</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl shadow-md border-b-4 border-blue-400 w-32">
                            <span className="font-bold block text-lg">المهاجرين</span>
                            <span className="text-xs text-slate-500">أهل مكة</span>
                        </div>
                        <div className="text-3xl text-blue-600">🤝</div>
                        <div className="bg-white p-4 rounded-xl shadow-md border-b-4 border-green-400 w-32">
                            <span className="font-bold block text-lg">الأنصار</span>
                            <span className="text-xs text-slate-500">أهل المدينة</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm text-sm text-slate-600 mx-auto max-w-sm">
                        <Star size={16} className="inline text-yellow-500 mr-1"/>
                        <strong>النتيجة:</strong> أصبح المسلمون جميعاً إخوة، وقضى على العصبية القبلية.
                    </div>
                </div>
            ) : (
                <div className="bg-purple-50 p-6 rounded-3xl border border-purple-200 animate-slide-up">
                    <div className="text-center mb-6">
                        <Scroll size={64} className="mx-auto text-purple-500 mb-2" />
                        <h3 className="text-2xl font-black text-purple-900">الصحيفة (الدستور)</h3>
                        
                        {/* Definition from Page 55 */}
                        <div className="bg-white p-3 rounded-lg border border-purple-100 shadow-sm inline-block mt-2">
                            <span className="font-bold text-purple-800">ما المقصود بالصحيفة؟</span>
                            <p className="text-xs text-slate-600 mt-1">كتاب أو وثيقة وضعها الرسول ﷺ وضح فيها الحقوق والواجبات لسكان المدينة.</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-purple-500">
                            <h4 className="font-bold text-slate-800">مبدأ المواطنة:</h4>
                            <p className="text-sm text-slate-600">الجميع أمة واحدة، والمدينة وطن للجميع يدافعون عنه.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-purple-500">
                            <h4 className="font-bold text-slate-800">حرية العقيدة:</h4>
                            <p className="text-sm text-slate-600">لليهود دينهم وللمسلمين دينهم.</p>
                        </div>
                    </div>

                    {/* Analyze Text (Page 55) */}
                    <div className="mt-6 bg-white/60 p-4 rounded-xl text-center italic text-purple-900 font-serif border border-purple-100">
                        "إن الجار كالنفس غير مُضَارٍّ... وإن ما كان بين أهل هذه الصحيفة من حدث فمرده إلى الله وإلى محمد رسول الله"
                    </div>
                </div>
            )}
        </div>
    );
};

// --- 4. PROTECTION & EXPANSION (Pages 56-58) ---
const ExpansionSection = () => {
    const [showVerseAns, setShowVerseAns] = useState(false);

    return (
        <div className="space-y-10 animate-fade-in">
            {/* Protection */}
            <div className="bg-red-50 p-6 rounded-3xl border border-red-200">
                <h3 className="text-xl font-black text-red-900 mb-4 flex items-center gap-2">
                    <Shield size={24}/> ٤- حماية الدولة (الجيش)
                </h3>
                
                {/* Quran Activity (Page 56) */}
                <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-yellow-500 mb-6">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><BookOpen size={18}/> تأمل الآية (ص ٥٦):</h4>
                    <p className="text-lg font-serif text-slate-700 text-center mb-4 leading-loose bg-slate-50 p-3 rounded-lg border border-slate-100">
                        ﴿أُذِنَ لِلَّذِينَ يُقَاتَلُونَ بِأَنَّهُمْ ظُلِمُوا ۚ وَإِنَّ اللَّهَ عَلَىٰ نَصْرِهِمْ لَقَدِيرٌ﴾
                    </p>
                    <div className="flex justify-center">
                        {!showVerseAns ? (
                            <button onClick={() => setShowVerseAns(true)} className="text-sm bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold hover:bg-red-200 transition-colors">
                                استنتج الأمر والوعد
                            </button>
                        ) : (
                            <div className="grid grid-cols-2 gap-4 w-full animate-fade-in">
                                <div className="text-center p-2 bg-red-50 rounded-lg">
                                    <span className="block text-xs font-bold text-red-600">الأمر (الإذن)</span>
                                    <span className="font-bold text-slate-700">الدفاع عن النفس (القتال)</span>
                                </div>
                                <div className="text-center p-2 bg-green-50 rounded-lg">
                                    <span className="block text-xs font-bold text-green-600">الوعد</span>
                                    <span className="font-bold text-slate-700">النصر من الله</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Enrichment Info (Page 56) */}
                <div className="bg-blue-100 p-4 rounded-xl flex items-start gap-3 border border-blue-200 mb-6">
                    <Info className="text-blue-600 flex-shrink-0 mt-1" size={20}/>
                    <div>
                        <h5 className="font-bold text-blue-900 text-sm">معلومة تهمك:</h5>
                        <p className="text-xs text-blue-800">
                            تُعد <strong>غزوة بدر</strong> في السنة الثانية للهجرة أول غزوة خاضها المسلمون، وتُعد <strong>غزوة تبوك</strong> في السنة التاسعة آخر غزوة شارك فيها الرسول ﷺ.
                        </p>
                    </div>
                </div>
            </div>

            {/* Expansion Map (Page 57) */}
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200">
                <h3 className="text-xl font-black text-slate-800 mb-2 text-center">امتداد الدولة الإسلامية</h3>
                
                {/* Definition (Page 57) */}
                <div className="mb-4 text-center bg-slate-50 p-3 rounded-lg border border-slate-100 mx-auto max-w-lg">
                    <span className="text-xs font-bold text-slate-500 block mb-1">ما المقصود بالفتوحات الإسلامية؟</span>
                    <p className="text-sm font-bold text-slate-800">دخول المناطق غير المسلمة الإسلام، لتصبح جزءاً من الدولة الإسلامية أو تابعة لها.</p>
                </div>

                <div className="relative w-full h-64 bg-blue-50 rounded-xl overflow-hidden border border-blue-100">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                        {/* Simplified Map of Arabian Peninsula */}
                        <path d="M50,100 L100,50 L250,50 L350,150 L200,200 L50,150 Z" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
                        
                        {/* Medina */}
                        <circle cx="120" cy="100" r="4" fill="#059669" />
                        <text x="120" y="90" fontSize="8" textAnchor="middle" fill="#064e3b">المدينة</text>

                        {/* Arrows of Expansion */}
                        <g className="animate-[pulse_3s_infinite]">
                            <line x1="120" y1="100" x2="200" y2="80" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
                            <line x1="120" y1="100" x2="100" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
                            <line x1="120" y1="100" x2="50" y2="120" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
                        </g>
                        
                        <defs>
                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L9,3 z" fill="#059669" />
                            </marker>
                        </defs>
                    </svg>
                </div>
                <p className="text-center text-sm text-slate-500 mt-2">شملت الدولة شبه الجزيرة العربية في عهد الرسول ﷺ</p>
            </div>

            {/* Conquest of Mecca Story (Page 58) */}
            <div className="bg-slate-800 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-black text-yellow-400 mb-4 flex items-center justify-center gap-2">
                        <BookOpen/> اقرأ واستمتع: فتح مكة (8 هـ)
                    </h3>
                    <p className="text-lg mb-6 leading-relaxed text-slate-300">
                        دخل الرسول ﷺ مكة منتصراً دون قتال، وحطم الأصنام، ثم وقف أمام أهل مكة الذين آذوه وقال لهم:
                    </p>
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md">
                        <p className="text-2xl font-black text-white mb-2">"اذهبوا فأنتم الطلقاء"</p>
                        <div className="mt-2 flex justify-center gap-2">
                            <span className="text-xs bg-black/30 px-2 py-1 rounded text-yellow-200">قيمة العفو</span>
                            <span className="text-xs bg-black/30 px-2 py-1 rounded text-yellow-200">قيمة التسامح</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const IslamicStateLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'migration' | 'mosque' | 'foundations' | 'expansion' | 'quiz'>('intro');
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
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <HelpCircle size={20}/> المشكلة والحل (ص ٥١)
          </button>
          <button onClick={() => {setActiveTab('migration'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'migration' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Map size={20}/> الهجرة والتأسيس
          </button>
          <button onClick={() => {setActiveTab('mosque'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'mosque' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> المسجد النبوي
          </button>
          <button onClick={() => {setActiveTab('foundations'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'foundations' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Handshake size={20}/> أسس الدولة
          </button>
          <button onClick={() => {setActiveTab('expansion'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'expansion' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Shield size={20}/> الحماية والفتوحات
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
            {activeTab === 'intro' && <IntroProblemActivity onComplete={() => setActiveTab('migration')} />}
            {activeTab === 'migration' && <MigrationMap />}
            {activeTab === 'mosque' && <MosqueInteractive />}
            {activeTab === 'foundations' && <FoundationsSection />}
            {activeTab === 'expansion' && <ExpansionSection />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_ISLAMIC_STATE_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default IslamicStateLesson;
