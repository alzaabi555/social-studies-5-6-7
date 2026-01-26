
import React, { useState } from 'react';
import { FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { 
    ArrowRight, Target, Building2, Users, Baby, Heart, CheckCircle, Menu, 
    Eye, ShieldCheck, Globe, Calendar, Search, Gavel, Stethoscope, 
    BookOpen, MessageCircle, Star, Hand, UserCheck, Accessibility, Crown
} from 'lucide-react';

interface Props {
    onBack: () => void;
}

// --- 1. INTRO: HEALTH CENTER SCENE (Page 89) ---
const IntroScene = () => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-sky-50 border-r-4 border-sky-600 p-6 rounded-lg shadow-sm text-right">
                <h3 className="text-xl font-bold text-sky-900 mb-2 flex items-center gap-2">
                    <Target size={24}/> أتعلم في هذا الدرس:
                </h3>
                <ul className="grid gap-2 text-sky-800 font-medium list-disc list-inside">
                    <li>المؤسسات الوطنية التي تكفل حقوق المواطن.</li>
                    <li>الاتفاقيات الدولية (حقوق الإنسان، الطفل، المرأة).</li>
                </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-slate-200">
                {/* Simulated Scene from Page 89 */}
                <div className="relative h-72 bg-sky-200">
                    {/* Health Center Building */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-40 bg-[#fde68a] border-4 border-[#d97706] rounded-t-xl flex flex-col items-center pt-2">
                        <span className="text-red-600 font-bold bg-white px-2 rounded mb-2 border border-red-200">مركز صحي</span>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 mb-2"><Stethoscope /></div>
                        <div className="w-10 h-16 bg-sky-900 rounded-t-full mt-auto"></div>
                    </div>
                    
                    {/* Parking Sign */}
                    <div className="absolute bottom-10 right-20 flex flex-col items-center group cursor-pointer" onClick={() => setShowAnswer(true)}>
                        <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg border-2 border-white animate-bounce">
                            <Accessibility size={32} />
                        </div>
                        <div className="h-16 w-2 bg-slate-400"></div>
                    </div>

                    {/* Road */}
                    <div className="absolute bottom-0 w-full h-20 bg-slate-600 border-t-4 border-slate-400 flex items-center justify-center">
                        <div className="w-full h-2 border-t-2 border-dashed border-white"></div>
                    </div>
                </div>

                <div className="p-6 text-center">
                    <h3 className="text-2xl font-black text-slate-800 mb-4">ماذا تلاحظ في المشهد؟</h3>
                    {!showAnswer ? (
                        <button onClick={() => setShowAnswer(true)} className="bg-sky-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-sky-700 transition-transform hover:scale-105">
                            اضغط على العلامة الزرقاء للكشف
                        </button>
                    ) : (
                        <div className="animate-slide-up bg-blue-50 p-4 rounded-2xl border border-blue-200">
                            <p className="text-lg font-bold text-blue-900 mb-2">الفئة الواضحة: ذوو الإعاقة</p>
                            <p className="text-slate-600">
                                الخدمة المقدمة: مواقف مخصصة لتسهيل وصولهم إلى الخدمات الصحية، وهذا دليل على اهتمام الدولة بحقوقهم.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- 2. NATIONAL INSTITUTIONS (Page 90) ---
const InstitutionsCity = () => {
    const [activeInst, setActiveInst] = useState<'judicial' | 'security' | 'service' | null>(null);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center">
                <h2 className="text-2xl font-black text-slate-800 mb-2">المؤسسات الوطنية</h2>
                <p className="text-slate-500">أنشأت سلطنة عمان مؤسسات لضمان حقوق المواطن. اضغط عليها لاكتشافها:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Judicial */}
                <div 
                    onClick={() => setActiveInst('judicial')}
                    className={`cursor-pointer p-6 rounded-2xl border-b-8 transition-all hover:-translate-y-2 ${activeInst === 'judicial' ? 'bg-amber-100 border-amber-500' : 'bg-white border-slate-200'}`}
                >
                    <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 shadow-lg mx-auto">
                        <Gavel size={32} />
                    </div>
                    <h3 className="text-xl font-black text-center text-slate-800 mb-2">المؤسسات القضائية</h3>
                    {activeInst === 'judicial' ? (
                        <p className="text-sm text-amber-900 text-center animate-fade-in">
                            <strong>الهدف:</strong> حفظ حقوق المواطنين من أي اعتداء أو ضرر، وتحقيق العدالة.
                        </p>
                    ) : (
                        <p className="text-xs text-center text-slate-400">اضغط للتفاصيل</p>
                    )}
                </div>

                {/* Security */}
                <div 
                    onClick={() => setActiveInst('security')}
                    className={`cursor-pointer p-6 rounded-2xl border-b-8 transition-all hover:-translate-y-2 ${activeInst === 'security' ? 'bg-blue-100 border-blue-500' : 'bg-white border-slate-200'}`}
                >
                    <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 shadow-lg mx-auto">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-xl font-black text-center text-slate-800 mb-2">المؤسسات الأمنية</h3>
                    {activeInst === 'security' ? (
                        <p className="text-sm text-blue-900 text-center animate-fade-in">
                            <strong>الهدف:</strong> حفظ الأمن داخل الوطن لينعم المواطن بالرخاء والاستقرار.
                        </p>
                    ) : (
                        <p className="text-xs text-center text-slate-400">اضغط للتفاصيل</p>
                    )}
                </div>

                {/* Service */}
                <div 
                    onClick={() => setActiveInst('service')}
                    className={`cursor-pointer p-6 rounded-2xl border-b-8 transition-all hover:-translate-y-2 ${activeInst === 'service' ? 'bg-pink-100 border-pink-500' : 'bg-white border-slate-200'}`}
                >
                    <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 shadow-lg mx-auto">
                        <Heart size={32} />
                    </div>
                    <h3 className="text-xl font-black text-center text-slate-800 mb-2">المؤسسات الخدمية</h3>
                    {activeInst === 'service' ? (
                        <p className="text-sm text-pink-900 text-center animate-fade-in">
                            <strong>الهدف:</strong> تقدم خدماتها للمواطنين حسب اختصاصها (مثل الصحة، التعليم، الرعاية الاجتماعية).
                        </p>
                    ) : (
                        <p className="text-xs text-center text-slate-400">اضغط للتفاصيل</p>
                    )}
                </div>
            </div>

            {/* Enrichment Info (Page 90) */}
            <div className="bg-sky-50 rounded-2xl p-6 border-l-4 border-sky-500 flex items-start gap-4 shadow-sm">
                <div className="bg-sky-100 p-3 rounded-full text-sky-600 hidden md:block">
                    <Eye size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-sky-900 text-lg mb-2">معلومة تهمك: اللجنة العمانية لحقوق الإنسان</h4>
                    <p className="text-sky-800 text-sm leading-relaxed">
                        تقوم بمتابعة أوضاع حقوق الإنسان من خلال عمليتي <span className="font-bold">الرصد وتلقي البلاغات</span>، لضمان حماية الحقوق في السلطنة.
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- 3. ANALYZE & CONCLUDE (Page 91) ---
const AnalyzeSection = () => {
    const [reveal, setReveal] = useState(false);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Values */}
            <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-lg text-center">
                <div className="inline-block bg-white/20 p-2 rounded-full mb-2"><Star size={20}/></div>
                <h3 className="font-bold text-xl mb-1">قيمنا</h3>
                <p>نقدر جهود الدولة في توفير الخدمات للمواطنين.</p>
            </div>

            {/* Search Activity */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Search className="text-orange-500"/> ابحث وشارك (البوابة التعليمية)
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                    بالاستعانة بالبوابة التعليمية لسلطنة عمان، ما هي الخدمات التي تقدمها وزارة التربية والتعليم للطلبة؟
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                    <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap border border-orange-100">الكتب المدرسية</span>
                    <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap border border-orange-100">النقل المدرسي</span>
                    <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap border border-orange-100">المنصة التعليمية</span>
                </div>
            </div>

            {/* Analyze Text Activity */}
            <div className="bg-amber-50 p-8 rounded-3xl border-2 border-amber-200 relative">
                <h3 className="font-black text-amber-900 text-xl mb-4 flex items-center gap-2"><BookOpen/> حلل واستنتج</h3>
                <div className="bg-white p-6 rounded-xl shadow-inner mb-6 text-center italic text-slate-700 leading-loose border-r-4 border-amber-500">
                    "فدعمنا للقضاء واستقلاليته واجب التزمنا به، واحترام قراراته بلا محاباة أمر مفروغ منه <strong>فالكل سواسية أمام القانون</strong>."
                    <br/><span className="text-xs text-slate-400 not-italic font-bold mt-2 block">- السلطان قابوس بن سعيد (طيب الله ثراه) - 2011م</span>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm cursor-pointer" onClick={() => setReveal(!reveal)}>
                        <span className="font-bold text-slate-700">علام تدل عبارة "الكل سواسية أمام القانون"؟</span>
                        <span className="text-amber-600">{reveal ? '▼' : '◄'}</span>
                    </div>
                    {reveal && (
                        <div className="bg-green-100 p-4 rounded-xl text-green-900 font-bold animate-slide-up border border-green-200">
                            ✅ تدل على العدالة والمساواة بين جميع أفراد المجتمع دون تمييز.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- 4. INTERNATIONAL AGREEMENTS (Page 92) ---
const AgreementsSection = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200 text-center">
                <Globe size={48} className="mx-auto text-blue-600 mb-4" />
                <h2 className="text-2xl font-black text-slate-800 mb-2">الاتفاقيات الدولية</h2>
                <p className="text-slate-600 max-w-lg mx-auto">
                    صادقت سلطنة عمان على اتفاقيات دولية مرتبطة بحقوق الإنسان، والطفل، والمرأة.
                </p>
            </div>

            {/* Disability Rights Section */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-6 rounded-3xl border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <UserCheck /> حقوق الأشخاص ذوي الإعاقة
                </h3>
                <p className="text-indigo-800 text-sm mb-4 leading-relaxed">
                    انضمت السلطنة إلى اتفاقية حقوق الأشخاص ذوي الإعاقة لتؤكد على حفظ كرامة الإنسان واحترام الآخرين.
                </p>
                
                <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-700"><Crown size={24}/></div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">منجز عماني (1995م)</h4>
                        <p className="text-xs text-slate-500">أنشئت <strong>الجمعية العمانية للأشخاص ذوي الإعاقة</strong> في مسقط ولها فروع في المحافظات.</p>
                    </div>
                </div>
            </div>

            {/* Omani Personality */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border-t-8 border-emerald-500 relative overflow-hidden group hover:scale-105 transition-transform">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl text-xs font-bold">شخصية عمانية</div>
                <div className="flex flex-col items-center text-center pt-4">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                        <Users size={40} />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2">الإمام سعيد بن عبدالله الرحيلي</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        وضع منظومة قيمية لحقوق الإنسان مستمدة من الشريعة الإسلامية، اعتنى فيها بحق المساواة بين الرعية وحق الحرية والمشاركة (الشورى).
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- 5. CHILD RIGHTS (Pages 93-94) ---
const ChildRightsSection = () => {
    const [activeRight, setActiveRight] = useState<string | null>(null);

    const rights = [
        { id: 'health', title: 'حق الصحة', icon: '🩺', desc: 'التمتع بأعلى مستوى صحي وتلقي العلاج.', color: 'bg-red-100 border-red-300 text-red-900' },
        { id: 'protection', title: 'حق الحماية', icon: '🛡️', desc: 'الحماية من أداء الأعمال الخطرة التي تضر بنموه.', color: 'bg-orange-100 border-orange-300 text-orange-900' },
        { id: 'care', title: 'حق الرعاية', icon: '♿', desc: 'تمتع الطفل من ذوي الإعاقة برعاية خاصة وحياة كريمة.', color: 'bg-purple-100 border-purple-300 text-purple-900' },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-teal-50 p-6 rounded-3xl border border-teal-200 text-center">
                <div className="inline-block bg-teal-100 p-3 rounded-full text-teal-600 mb-3"><Baby size={32}/></div>
                <h2 className="text-2xl font-black text-teal-900 mb-2">حقوق الطفل</h2>
                <p className="text-teal-700 text-sm">
                    انضمت السلطنة لاتفاقية حقوق الطفل عام <strong>1996م</strong> لضمان حقوقهم وحمايتهم.
                </p>
            </div>

            {/* Quran Verse Activity (Page 93) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><BookOpen size={18}/> تأمل وأجب:</h4>
                <p className="text-center font-serif text-lg text-emerald-800 bg-emerald-50 p-4 rounded-xl mb-4 leading-loose">
                    ﴿يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ﴾
                </p>
                <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700">
                    <strong>القيمة المستخرجة:</strong> احترام الآخر، والمساواة بين جميع البشر (لا فرق إلا بالتقوى).
                </div>
            </div>

            {/* Interactive Rights Grid (Page 94) */}
            <h3 className="text-xl font-bold text-slate-800 text-center">أبرز الحقوق التي كفلتها الاتفاقية:</h3>
            <div className="grid gap-4">
                {rights.map((right) => (
                    <div 
                        key={right.id}
                        onClick={() => setActiveRight(activeRight === right.id ? null : right.id)}
                        className={`cursor-pointer p-4 rounded-2xl border-l-8 transition-all ${right.color} ${activeRight === right.id ? 'scale-105 shadow-lg' : 'opacity-90 hover:opacity-100'}`}
                    >
                        <div className="flex items-center justify-between">
                            <h4 className="font-black text-lg flex items-center gap-2">
                                <span className="text-2xl">{right.icon}</span> {right.title}
                            </h4>
                            <span className="text-xs bg-white/50 px-2 py-1 rounded">اضغط للتفاصيل</span>
                        </div>
                        {activeRight === right.id && (
                            <p className="mt-3 text-sm font-medium bg-white/40 p-3 rounded-lg animate-fade-in">
                                {right.desc}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Think & Suggest (Page 94) */}
            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2"><MessageCircle/> فكر واقترح:</h4>
                <p className="text-sm text-yellow-800 mb-4">كيف تنشر قيم الأخوة والصداقة بين الطلبة؟</p>
                <div className="flex gap-2 flex-wrap">
                    <span className="bg-white px-3 py-1 rounded-full text-xs border border-yellow-200 text-slate-600">🤝 التعاون في الأنشطة</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs border border-yellow-200 text-slate-600">🤗 التسامح والابتسامة</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs border border-yellow-200 text-slate-600">🎁 تبادل الهدايا</span>
                </div>
            </div>
        </div>
    );
};

// --- 6. WOMEN'S RIGHTS (Page 95) ---
const WomenRightsSection = () => {
    const [showDate, setShowDate] = useState(false);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-pink-50 p-6 rounded-3xl border border-pink-200 text-center">
                <h2 className="text-2xl font-black text-pink-900 mb-2">حقوق المرأة</h2>
                <p className="text-pink-800 text-sm">
                    حفظ الإسلام حقوق المرأة، وكفلها النظام الأساسي العماني، وانضمت السلطنة لاتفاقية القضاء على التمييز ضد المرأة (سيداو).
                </p>
            </div>

            {/* Omani Achievement: Omani Women's Day */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 rounded-full text-white mb-4 shadow-lg">
                    <Calendar size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">منجز عماني: يوم المرأة العمانية</h3>
                
                {!showDate ? (
                    <button onClick={() => setShowDate(true)} className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow hover:bg-pink-700 transition-colors">
                        متى نحتفل به؟
                    </button>
                ) : (
                    <div className="animate-scale-in text-center">
                        <span className="block text-5xl font-black text-pink-600 mb-2">17</span>
                        <span className="block text-xl font-bold text-slate-500 uppercase tracking-widest">أكتوبر</span>
                        <p className="text-xs text-slate-400 mt-2">من كل عام، احتفاءً بها.</p>
                    </div>
                )}
            </div>

            {/* Read & Enjoy: Umm Maktoum */}
            <div className="bg-slate-800 text-white p-6 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 p-20 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
                <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2 relative z-10">
                    <BookOpen /> اقرأ واستمتع: الصحابي ابن أم مكتوم
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-slate-200 relative z-10">
                    <p>
                        رغم أنه كان كفيفاً، إلا أنه امتلك مواهب فريدة. كان الرسول ﷺ يكرمه ويستخلفه على المدينة للصلاة بالناس عند غيابه.
                    </p>
                    <div className="bg-white/10 p-3 rounded-lg border border-white/20">
                        <strong>الدرس المستفاد:</strong> الإعاقة ليست حاجزاً للإبداع، والإسلام يعطي الفرصة للجميع (المساواة والتوظيف الصحيح للطاقات).
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const OmanInstitutionsLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'institutions' | 'analysis' | 'agreements' | 'child' | 'women' | 'quiz'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-cyan-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-cyan-100 flex flex-col`}>
        <div className="p-4 border-b border-cyan-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-cyan-800 px-2">الحقوق والمؤسسات 🏛️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Stethoscope size={20}/> المقدمة (ص 89)
          </button>
          <button onClick={() => {setActiveTab('institutions'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'institutions' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> المؤسسات الوطنية (ص 90)
          </button>
          <button onClick={() => {setActiveTab('analysis'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'analysis' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Search size={20}/> القيم والتحليل (ص 91)
          </button>
          <button onClick={() => {setActiveTab('agreements'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'agreements' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Globe size={20}/> الاتفاقيات الدولية (ص 92)
          </button>
          <button onClick={() => {setActiveTab('child'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'child' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Baby size={20}/> حقوق الطفل (ص 93-94)
          </button>
          <button onClick={() => {setActiveTab('women'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'women' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <UserCheck size={20}/> حقوق المرأة (ص 95)
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
           <span className="font-bold text-lg text-cyan-800">الحقوق والمؤسسات</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeTab === 'intro' && <IntroScene />}
            {activeTab === 'institutions' && <InstitutionsCity />}
            {activeTab === 'analysis' && <AnalyzeSection />}
            {activeTab === 'agreements' && <AgreementsSection />}
            {activeTab === 'child' && <ChildRightsSection />}
            {activeTab === 'women' && <WomenRightsSection />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default OmanInstitutionsLesson;
