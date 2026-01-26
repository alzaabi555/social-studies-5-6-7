
import React, { useState } from 'react';
import { FIFTH_OMAN_PROPHET_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Star, Mail, MapPin, CheckCircle, Menu, User, ChevronRight, ChevronLeft, Map, Anchor, Shield, BookOpen, MessageCircle, HelpCircle, Trophy, Info } from 'lucide-react';

interface Props {
    onBack: () => void;
}

// --- 1. INTRO: Mazin bin Ghadouba Story (Page 59) ---
const MazinStory = () => {
    const [step, setStep] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [q1, setQ1] = useState<string | null>(null);
    const [q2, setQ2] = useState<string | null>(null);

    const scenes = [
        { text: "عاش مازن بن غضوبة في سمائل، وكان يعبد صنماً يسمى 'باجر'، لكنه كان يشعر في داخله أن هذا خطأ.", bg: 'bg-slate-100', icon: '🗿' },
        { text: "سمع صوتاً يخرج من الصنم يبشره بظهور نبي في الحجاز يدعو إلى الخير، فقرر كسر الصنم.", bg: 'bg-amber-50', icon: '🔨' },
        { text: "سافر إلى المدينة المنورة، وقطع مسافات طويلة وشاقة ليلتقي بالنبي ﷺ.", bg: 'bg-blue-50', icon: '🐪' },
        { text: "التقى بالنبي ﷺ وأعلن إسلامه، ودعا النبي لأهل عمان بالخير والبركة في الرزق والأمان.", bg: 'bg-green-50', icon: '🤲' },
        { text: "عاد إلى عمان وبنى مسجد 'المضمار' في سمائل، وهو أول مسجد بني في عمان.", bg: 'bg-emerald-50', icon: '🕌' }
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-black text-center text-amber-900 mb-6">قصة إسلام مازن بن غضوبة (أول من أسلم من أهل عمان)</h2>
            
            <div className={`relative h-72 rounded-3xl flex flex-col items-center justify-center text-center p-8 transition-all duration-500 ${scenes[step].bg} border-4 border-amber-200 shadow-xl overflow-hidden`}>
                <div className="text-8xl mb-6 animate-bounce">{scenes[step].icon}</div>
                <p className="text-xl font-bold text-slate-800 leading-relaxed max-w-2xl z-10">{scenes[step].text}</p>
                <div className="absolute bottom-4 right-4 bg-white/50 px-4 py-2 rounded-full text-xs font-bold text-amber-900">المشهد {step + 1} من {scenes.length}</div>
            </div>

            <div className="flex justify-between items-center px-4">
                <button 
                    onClick={() => setStep(s => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="p-3 rounded-full bg-slate-200 disabled:opacity-50 hover:bg-slate-300 transition-colors"
                >
                    <ChevronRight size={24}/>
                </button>
                
                <div className="flex gap-2">
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

            {/* Quick Quiz (Page 59) */}
            <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <button onClick={() => setShowQuiz(!showQuiz)} className="w-full flex justify-between items-center text-amber-800 font-bold">
                    <span>🤔 اختبر فهمك للقصة</span>
                    <span>{showQuiz ? '▲' : '▼'}</span>
                </button>
                
                {showQuiz && (
                    <div className="mt-4 space-y-4 animate-slide-up">
                        <div>
                            <p className="font-bold text-slate-700 mb-2">1. لماذا كسر مازن بن غضوبة الصنم 'باجر'؟</p>
                            <div className="flex gap-2">
                                <button onClick={() => setQ1('correct')} className={`flex-1 py-2 rounded border ${q1 === 'correct' ? 'bg-green-100 border-green-500' : 'bg-slate-50'}`}>لأنه علم بظهور النبي وأدرك بطلان عبادة الأصنام</button>
                                <button onClick={() => setQ1('wrong')} className={`flex-1 py-2 rounded border ${q1 === 'wrong' ? 'bg-red-100 border-red-500' : 'bg-slate-50'}`}>لأنه أراد استبداله بصنم آخر</button>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-slate-700 mb-2">2. ما اسم المسجد الذي بناه مازن؟</p>
                            <div className="flex gap-2">
                                <button onClick={() => setQ2('wrong')} className={`flex-1 py-2 rounded border ${q2 === 'wrong' ? 'bg-red-100 border-red-500' : 'bg-slate-50'}`}>مسجد الشواذنة</button>
                                <button onClick={() => setQ2('correct')} className={`flex-1 py-2 rounded border ${q2 === 'correct' ? 'bg-green-100 border-green-500' : 'bg-slate-50'}`}>مسجد المضمار</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- 2. THE LETTER & MAP (Pages 60-61) ---
const LetterAndMap = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMoving, setIsMoving] = useState(false);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* The Letter (Page 60 - Fig 3) */}
            <div className="bg-[#fdfbf7] p-8 rounded-3xl border-4 border-[#d4b483] text-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-20"></div>
                
                <h2 className="text-2xl font-black text-amber-900 mb-2">رسالة النبي ﷺ إلى أهل عمان</h2>
                <p className="text-amber-700 mb-6">حملها الصحابي عمرو بن العاص إلى ملكي عمان (جيفر وعبد)</p>
                
                <div className="relative h-56 flex items-center justify-center perspective-1000">
                    {!isOpen ? (
                        <div 
                            onClick={() => setIsOpen(true)}
                            className="cursor-pointer bg-[#f3e5ab] w-72 h-48 rounded shadow-2xl border-b-8 border-[#c2a265] flex flex-col items-center justify-center transform hover:scale-105 transition-all z-10"
                        >
                            <div className="w-16 h-16 bg-red-700/80 rounded-full flex items-center justify-center text-white font-serif mb-2 shadow-inner border-2 border-red-900">ختم النبوة</div>
                            <p className="font-bold text-amber-900 text-lg">اضغط لفتح الرسالة</p>
                        </div>
                    ) : (
                        <div className="bg-[#fffdf5] w-full max-w-xl p-6 rounded-xl shadow-inner border-2 border-[#f3e5ab] text-right animate-scale-in relative h-full overflow-y-auto">
                            <button onClick={() => setIsOpen(false)} className="absolute top-2 left-2 text-slate-400 hover:text-slate-600">✕</button>
                            <h4 className="font-bold text-center text-amber-800 mb-3 font-serif text-lg">بسم الله الرحمن الرحيم</h4>
                            <p className="text-sm md:text-base font-serif leading-loose text-slate-800">
                                "من محمد رسول الله إلى جيفر وعبد ابني الجلندى، السلام على من اتبع الهدى.. أما بعد، فإني أدعوكما بدعاية الإسلام، أسلما تسلما..."
                            </p>
                            <div className="mt-4 pt-4 border-t border-dashed border-amber-200 text-center">
                                <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold">النتيجة: دخلا في الإسلام طواعية وأسلم أهل عمان</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* The Map (Page 60 - Fig 4) */}
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-blue-900 text-lg">خط سير عمرو بن العاص (الشكل ٤)</h3>
                    <button 
                        onClick={() => setIsMoving(!isMoving)}
                        className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow hover:bg-blue-700"
                    >
                        {isMoving ? 'إعادة' : 'ابدأ الرحلة'}
                    </button>
                </div>

                <div className="relative h-64 bg-white rounded-xl overflow-hidden border-2 border-slate-200 shadow-inner">
                    {/* Simplified Map SVG */}
                    <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0">
                        {/* Land */}
                        <path d="M0,0 H400 V200 H0 Z" fill="#e0f2fe" />
                        <path d="M20,100 Q100,50 150,50 T300,80 L350,150 L380,180" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5 5" /> {/* Guide line */}
                        
                        {/* Medina */}
                        <circle cx="50" cy="50" r="5" fill="#10B981" />
                        <text x="50" y="40" fontSize="10" textAnchor="middle" fontWeight="bold">المدينة المنورة</text>

                        {/* Sohar */}
                        <circle cx="350" cy="120" r="5" fill="#EF4444" />
                        <text x="350" y="110" fontSize="10" textAnchor="middle" fontWeight="bold">صحار (عاصمة عمان)</text>

                        {/* Path Animation */}
                        {isMoving && (
                            <circle r="4" fill="#3B82F6">
                                <animateMotion 
                                    dur="3s" 
                                    repeatCount="1" 
                                    fill="freeze"
                                    path="M50,50 Q150,80 200,100 T350,120" 
                                />
                            </circle>
                        )}
                    </svg>
                </div>
            </div>

            {/* Enrichment Info (Page 61) */}
            <div className="bg-indigo-100 p-4 rounded-xl border-l-4 border-indigo-500 flex gap-3">
                <Info className="text-indigo-600 flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-indigo-900 text-sm">معلومة تهمك:</h4>
                    <p className="text-xs text-indigo-800 leading-relaxed">
                        ذهبت عدة وفود عمانية لرؤية الرسول ﷺ، ومنها الوفد الذي كان يرأسه الصحابي <strong>مسلية بن هزان الحداني</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- 3. POLITICAL & ECONOMIC LIFE (Page 62) ---
const PoliticalEconomic = () => {
    const [activeTab, setActiveTab] = useState<'political' | 'economic'>('political');

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex bg-slate-100 p-1 rounded-full">
                <button 
                    onClick={() => setActiveTab('political')}
                    className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'political' ? 'bg-white shadow text-red-700' : 'text-slate-500'}`}
                >
                    <Shield size={18} className="inline ml-2"/> الحياة السياسية
                </button>
                <button 
                    onClick={() => setActiveTab('economic')}
                    className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'economic' ? 'bg-white shadow text-green-700' : 'text-slate-500'}`}
                >
                    <Anchor size={18} className="inline ml-2"/> الحياة الاقتصادية
                </button>
            </div>

            {activeTab === 'political' ? (
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 space-y-6">
                    <h3 className="font-bold text-xl text-red-900">أ- الحياة السياسية (طرد الفرس)</h3>
                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-500">
                        <p className="text-slate-700 leading-relaxed">
                            استمر جيفر وعبد في الحكم. كان الفرس يحتلون جزءاً من ساحل <strong>صحار</strong>.
                            عندما دعاهم جيفر للإسلام رفضوا، فأعلن عليهم الحرب.
                        </p>
                    </div>
                    
                    {/* Visual Conflict */}
                    <div className="flex items-center justify-between px-4">
                        <div className="text-center">
                            <span className="text-4xl">👳‍♂️</span>
                            <p className="text-xs font-bold mt-1 text-green-800">العمانيون</p>
                        </div>
                        <div className="flex-1 mx-4 h-2 bg-slate-200 rounded-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-red-500 w-full animate-[slideRight_2s_infinite]"></div>
                        </div>
                        <div className="text-center opacity-50">
                            <span className="text-4xl">🤴</span>
                            <p className="text-xs font-bold mt-1 text-red-800">الفرس (طُردوا)</p>
                        </div>
                    </div>

                    <div className="bg-yellow-100 p-3 rounded-lg text-yellow-900 text-sm font-bold text-center">
                        النتيجة: انتصر العمانيون وأصبحت عمان دولة إسلامية مستقلة وموحدة.
                    </div>
                </div>
            ) : (
                <div className="bg-green-50 p-6 rounded-3xl border border-green-100 space-y-6">
                    <h3 className="font-bold text-xl text-green-900">ب- الحياة الاقتصادية</h3>
                    <p className="text-slate-600 text-sm">ازدهرت الأنشطة الاقتصادية بسبب الموقع الاستراتيجي والاستقرار.</p>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                            <span className="text-3xl block mb-2">🌾</span>
                            <span className="font-bold text-green-700 text-sm">الزراعة</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                            <span className="text-3xl block mb-2">⛵</span>
                            <span className="font-bold text-blue-700 text-sm">التجارة</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                            <span className="text-3xl block mb-2">🔨</span>
                            <span className="font-bold text-orange-700 text-sm">الصناعة</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-green-200">
                        <h4 className="font-bold text-green-800 mb-2 text-sm flex items-center gap-2"><HelpCircle size={16}/> فسّر (ص ٦٢):</h4>
                        <p className="text-sm text-slate-600">للموارد الطبيعية أهمية اقتصادية؟</p>
                        <p className="text-green-600 font-bold text-xs mt-2">الإجابة: لأنها مصدر للدخل، وتقوم عليها الصناعات، وتوفر الغذاء.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- 4. CULTURAL LIFE (Page 63) ---
const CulturalLife = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-black text-center text-purple-900">ج- الحياة الثقافية (المساجد)</h2>
            <p className="text-center text-slate-500 text-sm">انتشر الإسلام وبنيت المساجد لتكون منارات للعلم</p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-purple-200">
                    <img src="./img_midhmar.jpg" onError={(e) => e.currentTarget.src = "https://placehold.co/400x300/f3e8ff/6b21a8?text=Masjid+Al-Midhmar"} className="w-full h-48 object-cover" alt="مسجد المضمار" />
                    <div className="absolute bottom-0 w-full bg-white/90 p-4">
                        <h4 className="font-bold text-purple-900">مسجد المضمار</h4>
                        <p className="text-xs text-purple-700">أول مسجد في عمان (ولاية سمائل).</p>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-purple-200">
                    <img src="./img_shawadhna.jpg" onError={(e) => e.currentTarget.src = "https://placehold.co/400x300/f3e8ff/6b21a8?text=Masjid+Al-Shawadhna"} className="w-full h-48 object-cover" alt="مسجد الشواذنة" />
                    <div className="absolute bottom-0 w-full bg-white/90 p-4">
                        <h4 className="font-bold text-purple-900">مسجد الشواذنة</h4>
                        <p className="text-xs text-purple-700">من أقدم المساجد (ولاية نزوى).</p>
                    </div>
                </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 flex items-center gap-3">
                <BookOpen className="text-purple-600 flex-shrink-0"/>
                <div>
                    <h4 className="font-bold text-purple-900 text-sm">دور المساجد:</h4>
                    <p className="text-xs text-slate-600">لم تكن للصلاة فقط، بل لتعليم علوم الشريعة واللغة العربية.</p>
                </div>
            </div>
        </div>
    );
};

// --- 5. CITIES GAME (Page 65-66) ---
const CitiesGame = () => {
    const [dragged, setDragged] = useState<string[]>([]);
    const [feedback, setFeedback] = useState<string | null>(null);

    const cities = [
        { id: 'sohar', name: 'صحار', type: 'coastal', desc: 'عاصمة عمان قديماً وميناء تجاري.' },
        { id: 'buraimi', name: 'البريمي (توام)', type: 'interior', desc: 'واحة زراعية ومحطة للقوافل.' },
        { id: 'samail', name: 'سمائل', type: 'interior', desc: 'موطن أول من أسلم (مازن).' },
        { id: 'mirbat', name: 'مرباط', type: 'coastal', desc: 'ميناء رئيسي في الجنوب (ظفار).' }
    ];

    const checkAnswer = (cityId: string, zone: 'interior' | 'coastal') => {
        const city = cities.find(c => c.id === cityId);
        if (city?.type === zone) {
            setDragged([...dragged, cityId]);
            setFeedback('✅ إجابة صحيحة!');
        } else {
            setFeedback('❌ حاول مرة أخرى!');
        }
        setTimeout(() => setFeedback(null), 1000);
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center">
                <h2 className="text-2xl font-black text-slate-800 mb-2">لعبة تصنيف المدن (ص ٦٦)</h2>
                <p className="text-slate-500 text-sm">صنف المدن العمانية حسب موقعها (ساحلية أم داخلية)</p>
                {feedback && <div className="mt-2 font-bold text-lg animate-bounce">{feedback}</div>}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {cities.map(city => !dragged.includes(city.id) && (
                    <div key={city.id} className="bg-white px-4 py-2 rounded-lg shadow border border-slate-200 font-bold text-slate-700 animate-pulse">
                        {city.name}
                    </div>
                ))}
                {dragged.length === cities.length && <div className="text-green-600 font-black text-xl">أحسنت! أكملت التصنيف 🏆</div>}
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Interior Zone */}
                <div className="bg-amber-100 rounded-2xl p-6 border-4 border-dashed border-amber-300 min-h-[200px]">
                    <h3 className="font-bold text-amber-900 text-center mb-4 flex items-center justify-center gap-2"><Map/> مدن داخلية</h3>
                    <div className="space-y-2">
                        {cities.filter(c => dragged.includes(c.id) && c.type === 'interior').map(c => (
                            <div key={c.id} className="bg-white p-2 rounded text-center text-sm shadow animate-scale-in">
                                <span className="font-bold text-amber-800">{c.name}</span>
                                <p className="text-[10px] text-slate-500">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        {cities.map(c => !dragged.includes(c.id) && (
                            <button key={c.id} onClick={() => checkAnswer(c.id, 'interior')} className="bg-amber-200 hover:bg-amber-300 text-amber-900 text-xs py-1 rounded">أضف {c.name}</button>
                        ))}
                    </div>
                </div>

                {/* Coastal Zone */}
                <div className="bg-blue-100 rounded-2xl p-6 border-4 border-dashed border-blue-300 min-h-[200px]">
                    <h3 className="font-bold text-blue-900 text-center mb-4 flex items-center justify-center gap-2"><Anchor/> مدن ساحلية</h3>
                    <div className="space-y-2">
                        {cities.filter(c => dragged.includes(c.id) && c.type === 'coastal').map(c => (
                            <div key={c.id} className="bg-white p-2 rounded text-center text-sm shadow animate-scale-in">
                                <span className="font-bold text-blue-800">{c.name}</span>
                                <p className="text-[10px] text-slate-500">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        {cities.map(c => !dragged.includes(c.id) && (
                            <button key={c.id} onClick={() => checkAnswer(c.id, 'coastal')} className="bg-blue-200 hover:bg-blue-300 text-blue-900 text-xs py-1 rounded">أضف {c.name}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 6. DIALOGUE (Page 66) ---
const DialogueSection = () => {
    return (
        <div className="bg-slate-800 text-white p-6 rounded-3xl shadow-xl space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-yellow-400 flex items-center gap-2">
                <MessageCircle/> اقرأ واستمتع: البلاغة العمانية
            </h3>
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <p className="font-bold text-yellow-200 mb-1">معاوية بن أبي سفيان:</p>
                    <p>"ما هذه البلاغة التي فيكم؟"</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20 ml-8 border-r-4 border-r-green-500">
                    <p className="font-bold text-green-300 mb-1">صحار بن العباس:</p>
                    <p>"شيء تجيش به صدورنا فتقذفه على ألسنتنا."</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <p className="font-bold text-yellow-200 mb-1">معاوية:</p>
                    <p>"ما تعدون البلاغة فيكم؟"</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20 ml-8 border-r-4 border-r-green-500">
                    <p className="font-bold text-green-300 mb-1">صحار:</p>
                    <p>"الإيجاز (أن تجيب فلا تبطئ، وتقول فلا تخطئ)."</p>
                </div>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const OmanProphetEraLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'letter' | 'politics' | 'culture' | 'cities' | 'dialogue' | 'quiz'>('intro');
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
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> قصة مازن (ص ٥٩)
          </button>
          <button onClick={() => {setActiveTab('letter'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'letter' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Mail size={20}/> رسالة النبي (ص ٦٠)
          </button>
          <button onClick={() => {setActiveTab('politics'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'politics' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Shield size={20}/> السياسة والاقتصاد (ص ٦٢)
          </button>
          <button onClick={() => {setActiveTab('culture'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'culture' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <BookOpen size={20}/> الثقافة (ص ٦٣)
          </button>
          <button onClick={() => {setActiveTab('cities'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'cities' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Map size={20}/> المدن العمانية (ص ٦٥)
          </button>
          <button onClick={() => {setActiveTab('dialogue'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'dialogue' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <MessageCircle size={20}/> حوار البلاغة (ص ٦٦)
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Trophy size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-amber-800">عمان في عهد الرسول</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeTab === 'intro' && <MazinStory />}
            {activeTab === 'letter' && <LetterAndMap />}
            {activeTab === 'politics' && <PoliticalEconomic />}
            {activeTab === 'culture' && <CulturalLife />}
            {activeTab === 'cities' && <CitiesGame />}
            {activeTab === 'dialogue' && <DialogueSection />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_OMAN_PROPHET_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default OmanProphetEraLesson;
