
import React, { useState } from 'react';
import { FIFTH_RIGHTS_DUTIES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, BookOpen, Scale, Hand, CheckCircle, Menu, Trophy, Gavel, User, Shield, Heart, BarChart2, MessageCircle, Lightbulb, Users, FileText, AlertTriangle, Flower, Scroll, Star } from 'lucide-react';

interface Props {
    onBack: () => void;
}

// --- 1. INTRO & CONCEPTS (Pages 79-81) ---
const ConceptsSection = () => {
    const [activeTab, setActiveTab] = useState<'def' | 'statute' | 'game'>('def');

    // Game State
    const [gameItems, setGameItems] = useState([
        { id: 1, text: 'الحصول على الرعاية الصحية', type: 'right' },
        { id: 2, text: 'احترام الأنظمة والقوانين', type: 'duty' },
        { id: 3, text: 'التعليم المجاني', type: 'right' },
        { id: 4, text: 'الدفاع عن الوطن', type: 'duty' },
        { id: 5, text: 'الحفاظ على الممتلكات العامة', type: 'duty' },
        { id: 6, text: 'التعبير عن الرأي', type: 'right' },
    ]);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleSort = (id: number, target: string) => {
        const item = gameItems.find(i => i.id === id);
        if (item?.type === target) {
            setScore(prev => prev + 1);
            setGameItems(prev => prev.filter(i => i.id !== id));
            setFeedback('✅ إجابة صحيحة!');
        } else {
            setFeedback('❌ حاول مرة أخرى');
        }
        setTimeout(() => setFeedback(''), 1000);
    };

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Tabs */}
            <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-2xl mx-auto">
                <button onClick={() => setActiveTab('def')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'def' ? 'bg-white shadow text-teal-700' : 'text-slate-500'}`}>المفاهيم</button>
                <button onClick={() => setActiveTab('statute')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'statute' ? 'bg-white shadow text-indigo-700' : 'text-slate-500'}`}>النظام الأساسي</button>
                <button onClick={() => setActiveTab('game')} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 'game' ? 'bg-white shadow text-rose-700' : 'text-slate-500'}`}>لعبة التصنيف</button>
            </div>

            {activeTab === 'def' && (
                <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
                    <div className="bg-blue-50 p-8 rounded-3xl border-b-8 border-blue-400 hover:-translate-y-2 transition-transform">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-600 mx-auto">
                            <Hand size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-blue-900 text-center mb-4">الحقوق</h3>
                        <p className="text-lg text-slate-700 text-center font-medium">
                            هي ما يحصل عليه المواطن من الدولة والمجتمع، وفقاً للقانون وثقافة المجتمع.
                            <br/><span className="text-sm text-blue-600 mt-2 block">(مثال: التعليم، الصحة، الأمن)</span>
                        </p>
                    </div>

                    <div className="bg-green-50 p-8 rounded-3xl border-b-8 border-green-400 hover:-translate-y-2 transition-transform">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-green-600 mx-auto">
                            <Scale size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-green-900 text-center mb-4">الواجبات</h3>
                        <p className="text-lg text-slate-700 text-center font-medium">
                            هي ما يجب على المواطن القيام به تجاه الدولة والمجتمع، وفقاً للقانون.
                            <br/><span className="text-sm text-green-600 mt-2 block">(مثال: حماية الوطن، احترام القانون)</span>
                        </p>
                    </div>
                    
                    <div className="md:col-span-2 bg-yellow-50 p-6 rounded-2xl border border-yellow-200 text-center">
                        <h4 className="font-bold text-yellow-900 mb-2">العلاقة التبادلية</h4>
                        <p className="text-yellow-800">العلاقة بين المواطن والدولة هي علاقة <span className="font-black">أخذ وعطاء</span>. الدولة توفر الحقوق، والمواطن يؤدي الواجبات.</p>
                    </div>
                </div>
            )}

            {activeTab === 'statute' && (
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center animate-slide-up">
                    <FileText size={64} className="mx-auto text-indigo-500 mb-4" />
                    <h3 className="text-2xl font-black text-slate-800 mb-4">النظام الأساسي للدولة</h3>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                        هو وثيقة رسمية (قانون الدولة الأسمى) تعرف بالدولة ونظام الحكم فيها، وتبين <span className="text-indigo-600 font-bold">الحقوق والواجبات العامة</span>.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-bold text-slate-700">
                        <div className="p-4 bg-slate-50 rounded-xl border hover:bg-indigo-50">التعليم 🎓</div>
                        <div className="p-4 bg-slate-50 rounded-xl border hover:bg-indigo-50">الرعاية الصحية 🏥</div>
                        <div className="p-4 bg-slate-50 rounded-xl border hover:bg-indigo-50">الأمن والأمان 🛡️</div>
                        <div className="p-4 bg-slate-50 rounded-xl border hover:bg-indigo-50">التعبير عن الرأي 🗣️</div>
                    </div>
                    
                    <div className="mt-6 bg-indigo-900 text-white p-4 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="font-bold text-yellow-400 mb-1">إضاءة سلطانية</h4>
                            <p className="text-sm font-serif italic">"إن مما نفخر به، أن المواطنين والمقيمين على أرض عمان العزيزة يعيشون بفضل الله في ظل دولة القانون والمؤسسات... دولة تقوم على مبادئ الحرية والمساواة..."</p>
                            <p className="text-xs text-indigo-300 mt-2 font-bold">- السلطان هيثم بن طارق (حفظه الله)</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'game' && (
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-rose-100 text-center animate-slide-up">
                    <h3 className="text-xl font-black text-rose-900 mb-4">ساعد "أحمد" في التصنيف</h3>
                    
                    {gameItems.length > 0 ? (
                        <>
                            <div className="bg-slate-100 p-6 rounded-2xl mb-6 shadow-inner text-2xl font-bold text-slate-800 min-h-[100px] flex items-center justify-center">
                                {gameItems[0].text}
                            </div>
                            
                            <div className="flex gap-4 justify-center">
                                <button onClick={() => handleSort(gameItems[0].id, 'right')} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform active:scale-95 flex flex-col items-center gap-2">
                                    <Hand size={24}/> حق (لي)
                                </button>
                                <button onClick={() => handleSort(gameItems[0].id, 'duty')} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform active:scale-95 flex flex-col items-center gap-2">
                                    <Scale size={24}/> واجب (علي)
                                </button>
                            </div>
                            <div className="mt-4 font-bold text-lg h-8 text-rose-600">{feedback}</div>
                        </>
                    ) : (
                        <div className="py-10">
                            <Trophy size={64} className="mx-auto text-yellow-400 mb-4 animate-bounce" />
                            <h4 className="text-2xl font-black text-slate-800">ممتاز! أنهيت التصنيف بنجاح 🎉</h4>
                            <button onClick={() => window.location.reload()} className="mt-4 text-slate-500 hover:text-slate-800 underline">إعادة اللعبة</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// --- 2. OMANI ACHIEVEMENTS & CHART (Page 83) ---
const AchievementsSection = () => {
    const [chartYear, setChartYear] = useState<'2010' | '2022'>('2022');

    return (
        <div className="space-y-8 animate-fade-in p-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-teal-800 mb-2">منجزات عمانية في الحقوق</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-teal-500">
                    <h3 className="font-bold text-teal-900 mb-2 flex items-center gap-2">
                        <Users size={20}/> اللجنة العمانية لحقوق الإنسان
                    </h3>
                    <p className="text-slate-600 text-sm">أنشئت لتقوم بدور رائد في نشر ثقافة حقوق الإنسان ومتابعة حمايتها في السلطنة.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-teal-500">
                    <h3 className="font-bold text-teal-900 mb-2 flex items-center gap-2">
                        <Scroll size={20}/> وصية الإمام الصلت بن مالك
                    </h3>
                    <p className="text-slate-600 text-sm">تُعد وصيته للأسطول العماني المتجه إلى سقطرى وثيقة تاريخية مهمة في حفظ حقوق الإنسان (أثناء الحرب).</p>
                </div>
            </div>

            {/* Interactive Chart Activity (Page 83) */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">حلل واستنتج: المؤسسات التعليمية والصحية (٢٠٢٢)</h3>
                <p className="text-xs text-center text-slate-500 mb-6">الشكل يوضح توزع المؤسسات في المحافظات (أرقام تقريبية للتمثيل)</p>
                
                <div className="h-64 flex items-end justify-around gap-2 pb-8 border-b-2 border-slate-300 relative">
                    {[
                        { name: 'مسقط', val: 90, color: 'bg-blue-500' },
                        { name: 'ظفار', val: 60, color: 'bg-green-500' },
                        { name: 'الداخلية', val: 75, color: 'bg-orange-500' },
                        { name: 'الباطنة', val: 85, color: 'bg-purple-500' },
                        { name: 'أخرى', val: 40, color: 'bg-slate-400' }
                    ].map((item) => (
                        <div key={item.name} className="flex flex-col items-center gap-2 w-full h-full justify-end group">
                            <div 
                                className={`w-full max-w-[40px] rounded-t-lg transition-all duration-1000 ${item.color} relative hover:opacity-80`}
                                style={{ height: `${item.val}%` }}
                            >
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    مؤسسات خدمية
                                </span>
                            </div>
                            <span className="text-xs font-bold text-slate-600 rotate-45 md:rotate-0 mt-2">{item.name}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-bold text-slate-700 mb-2">الاستنتاج:</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>تنتشر المؤسسات التعليمية والصحية في جميع المحافظات.</li>
                        <li>هذا يدل على حرص الدولة على توفير الحقوق (التعليم والصحة) لكل مواطن أينما كان.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// --- 3. DUTIES SECTION (Pages 84-85) ---
const DutiesSection = () => {
    const [flipped, setFlipped] = useState<number | null>(null);

    const duties = [
        { id: 1, title: 'احترام العادات والتقاليد', img: '🇴🇲', desc: 'الالتزام بالزي العماني والمشاركة في المناسبات واحترام قيم المجتمع.' },
        { id: 2, title: 'المشاركة في الأسرة', img: '👨‍👩‍👧‍👦', desc: 'التعاون في أداء الأعمال المنزلية واحترام الوالدين وكبار السن.' },
        { id: 3, title: 'الالتزام بالأخلاق الحسنة', img: '🤝', desc: 'احترام الآخرين في القول والعمل والتعامل بصدق وأمانة.' },
        { id: 4, title: 'الحفاظ على البيئة', img: '🌳', desc: 'عدم رمي المخلفات، الحفاظ على الممتلكات العامة والحدائق.' }
    ];

    return (
        <div className="space-y-8 animate-fade-in p-6">
            <div className="text-center">
                <h2 className="text-2xl font-black text-orange-900 mb-2">واجبات المواطن</h2>
                <p className="text-orange-800">تقابل الحقوق التي نحصل عليها واجبات يجب أن نؤديها (الشكل ٢)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {duties.map((d) => (
                    <div 
                        key={d.id}
                        onClick={() => setFlipped(flipped === d.id ? null : d.id)}
                        className="relative h-48 cursor-pointer perspective-1000 group"
                    >
                        <div className={`w-full h-full transition-all duration-500 transform-style-3d ${flipped === d.id ? 'rotate-y-180' : ''}`}>
                            {/* Front */}
                            <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-md border-2 border-orange-100 flex flex-col items-center justify-center p-4 group-hover:border-orange-300">
                                <div className="text-5xl mb-3">{d.img}</div>
                                <h3 className="font-bold text-slate-800 text-lg">{d.title}</h3>
                                <p className="text-xs text-slate-400 mt-2">اضغط للتفاصيل</p>
                            </div>
                            
                            {/* Back */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-orange-50 rounded-2xl shadow-md border-2 border-orange-200 flex items-center justify-center p-6 text-center">
                                <p className="text-orange-900 font-medium">{d.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Royal Spotlight */}
            <div className="bg-gradient-to-r from-orange-700 to-red-800 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden mt-6">
                <div className="relative z-10">
                    <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2"><Star size={20}/> إضاءات سلطانية</h3>
                    <p className="font-serif text-lg leading-relaxed italic">
                        "تأسست عمان وترسخ وجودها الحضاري بتضحيات أبنائها... من أجل الحفاظ على عزتها ومنعتها، وبإخلاصهم في أداء واجباتهم الوطنية."
                    </p>
                    <p className="text-xs mt-2 opacity-80 text-left">- السلطان هيثم بن طارق (حفظه الله)</p>
                </div>
            </div>
        </div>
    );
};

// --- 4. IMPORTANCE & BALANCE (Page 86) ---
const ImportanceSection = () => {
    return (
        <div className="p-6 animate-fade-in space-y-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-indigo-900">أهمية الحقوق والواجبات</h2>
                <p className="text-slate-500">التوازن بينهما يبني مجتمعاً قوياً</p>
            </div>

            <div className="grid gap-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-r-4 border-green-500">
                    <div className="bg-green-100 p-3 rounded-full text-green-600"><Scale size={24}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800">تحقيق العدالة والمساواة</h4>
                        <p className="text-sm text-slate-600">بين جميع أفراد المجتمع.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Shield size={24}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800">ضمان الوحدة والترابط</h4>
                        <p className="text-sm text-slate-600">التماسك بين أبناء الوطن الواحد.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-r-4 border-purple-500">
                    <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Heart size={24}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800">توفير الحياة الكريمة</h4>
                        <p className="text-sm text-slate-600">التمتع بالخدمات والأمن.</p>
                    </div>
                </div>
            </div>

            {/* Discussion Activity */}
            <div className="bg-slate-100 p-6 rounded-2xl border-2 border-slate-200 text-center">
                <MessageCircle size={32} className="mx-auto text-slate-500 mb-2"/>
                <h3 className="font-bold text-slate-800 mb-2">فكر وناقش</h3>
                <p className="text-slate-600 italic font-medium mb-4">"أقوم بواجبي قبل المطالبة بحقي"</p>
                <div className="bg-white p-4 rounded-xl text-sm text-slate-700 shadow-sm mx-auto max-w-lg">
                    <strong>المعنى:</strong> يجب أن أؤدي ما علي من التزامات تجاه وطني ومجتمعي بإخلاص أولاً، لأن قيام الجميع بواجباتهم يضمن حصول الجميع على حقوقهم تلقائياً.
                </div>
            </div>
        </div>
    );
};

// --- 5. PARK SCENARIO (Page 87) ---
const ParkScenario = () => {
    const [feedback, setFeedback] = useState<'good' | 'bad' | null>(null);

    return (
        <div className="p-6 animate-fade-in space-y-6">
            <h2 className="text-2xl font-black text-center text-slate-800 mb-6">فكر واقترح: موقف في الحديقة</h2>
            
            <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200 relative overflow-hidden text-center">
                <Flower size={64} className="mx-auto text-pink-400 mb-4 animate-bounce" />
                <p className="text-lg font-bold text-green-900 mb-6">
                    "خرجت أسرة لقضاء وقت ممتع في إحدى الحدائق العامة. وفي أثناء جلوسهم، قام الأطفال بقطف الأزهار وتخريب النباتات."
                </p>

                {!feedback ? (
                    <div className="space-y-4">
                        <p className="font-bold text-slate-700">ما رأيك في هذا السلوك؟</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setFeedback('bad')} className="bg-red-500 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-600">سلوك خاطئ 👎</button>
                            <button onClick={() => setFeedback('good')} className="bg-green-500 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-green-600">سلوك صحيح 👍</button>
                        </div>
                    </div>
                ) : (
                    <div className="animate-slide-up bg-white p-6 rounded-2xl shadow-lg">
                        {feedback === 'bad' ? (
                            <>
                                <h4 className="text-green-600 font-bold text-xl mb-2">أحسنت الرأي! ✅</h4>
                                <p className="text-slate-600 mb-4">هذا سلوك غير صحيح لأنه يعد تعدياً على الممتلكات العامة ويشوه المنظر الجمالي.</p>
                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                    <strong>الحل المقترح:</strong> توعية الأطفال بأهمية النباتات، ومراقبتهم، وتشجيعهم على العناية بالحديقة بدلاً من تخريبها.
                                </div>
                            </>
                        ) : (
                            <>
                                <h4 className="text-red-600 font-bold text-xl mb-2">رأي غير موفق ❌</h4>
                                <p className="text-slate-600">قطف الأزهار يحرم الآخرين من الاستمتاع بها ويضر بالبيئة. حاول مرة أخرى!</p>
                                <button onClick={() => setFeedback(null)} className="mt-4 text-slate-500 underline">إعادة</button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// --- 6. STORY (Page 88) ---
const StorySection = () => {
    const [step, setStep] = useState(0);

    const scenes = [
        { text: "عاش قصاب (بائع لحم) في الرستاق، وكان أحد قادة الجند يشتري منه اللحم بالدّين، حتى تراكم عليه مبلغ كبير.", bg: 'bg-red-50' },
        { text: "طالب القصاب القائد بدفع المال، فغضب القائد وقام بإتلاف اللحم في الدكان وتخريبه!", bg: 'bg-orange-50' },
        { text: "ذهب القصاب المظلوم إلى الإمام أحمد بن سعيد (الحاكم) يشتكي، لكنه خاف أن يخبره أن الفاعل هو قائد جيشه.", bg: 'bg-slate-50' },
        { text: "تغيب القصاب عن المسجد خوفاً، فلاحظ الإمام غيابه وسأل عنه، ثم زاره بنفسه ليعرف السبب.", bg: 'bg-blue-50' },
        { text: "عندما علم الإمام بالحقيقة، غضب واستدعى القائد فوراً، وأمره بدفع المال للقصاب وتعويضه عما أتلفه.", bg: 'bg-green-50' }
    ];

    return (
        <div className="p-6 animate-fade-in space-y-6">
            <h2 className="text-2xl font-black text-center text-slate-800">قصة: عدالة الإمام (ص 88)</h2>
            <div className="max-w-2xl mx-auto">
                <div className={`p-8 rounded-3xl border-2 shadow-xl min-h-[250px] flex flex-col justify-center items-center text-center transition-all duration-500 ${scenes[step].bg}`}>
                    <div className="text-4xl mb-4">📜</div>
                    <p className="text-lg font-bold text-slate-800 leading-loose">{scenes[step].text}</p>
                </div>
                
                <div className="flex justify-between mt-6">
                    <button 
                        onClick={() => setStep(s => Math.max(0, s - 1))}
                        disabled={step === 0}
                        className="px-6 py-2 rounded-full bg-slate-200 text-slate-600 font-bold disabled:opacity-50"
                    >
                        السابق
                    </button>
                    <span className="font-bold text-slate-400 self-center">{step + 1} / {scenes.length}</span>
                    <button 
                        onClick={() => setStep(s => Math.min(scenes.length - 1, s + 1))}
                        disabled={step === scenes.length - 1}
                        className="px-6 py-2 rounded-full bg-indigo-600 text-white font-bold disabled:opacity-50 hover:bg-indigo-700"
                    >
                        التالي
                    </button>
                </div>

                {step === scenes.length - 1 && (
                    <div className="mt-8 bg-indigo-100 p-4 rounded-xl text-center text-indigo-900 border border-indigo-200 animate-bounce">
                        <strong>العبرة:</strong> العدل أساس الحكم، والقانون يطبق على الجميع (القوي والضعيف) لضمان الحقوق.
                    </div>
                )}
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const OmanRightsDutiesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'rights' | 'duties' | 'balance' | 'scenario' | 'story' | 'quiz'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-teal-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-teal-100 flex flex-col`}>
        <div className="p-4 border-b border-teal-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">الحقوق والواجبات ⚖️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <BookOpen size={20}/> المفاهيم (ص 79-81)
          </button>
          <button onClick={() => {setActiveTab('rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'rights' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Hand size={20}/> الحقوق والمنجزات (ص 82-83)
          </button>
          <button onClick={() => {setActiveTab('duties'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'duties' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <User size={20}/> واجبات المواطن (ص 84-85)
          </button>
          <button onClick={() => {setActiveTab('balance'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'balance' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Scale size={20}/> الأهمية والتوازن (ص 86)
          </button>
          <button onClick={() => {setActiveTab('scenario'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'scenario' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Flower size={20}/> موقف الحديقة (ص 87)
          </button>
          <button onClick={() => {setActiveTab('story'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'story' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Gavel size={20}/> قصة العدالة (ص 88)
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-teal-800">الحقوق والواجبات</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeTab === 'intro' && <ConceptsSection />}
            {activeTab === 'rights' && <AchievementsSection />}
            {activeTab === 'duties' && <DutiesSection />}
            {activeTab === 'balance' && <ImportanceSection />}
            {activeTab === 'scenario' && <ParkScenario />}
            {activeTab === 'story' && <StorySection />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_RIGHTS_DUTIES_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default OmanRightsDutiesLesson;
