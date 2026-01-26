
import React, { useState } from 'react';
import { FIFTH_SPHERES_RELATION_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { 
    ArrowRight, RefreshCw, AlertTriangle, Leaf, CheckCircle, Menu, 
    Sun, CloudRain, Droplet, Wind, Mountain, Activity, 
    Factory,  HelpCircle, BookOpen, Crown, Zap, Anchor, Umbrella, Info
} from 'lucide-react';

interface Props {
    onBack: () => void;
}

// --- 1. IMPORTANCE SECTION (Page 27 - Figure 5) ---
const ImportanceSection = () => {
    const [activeSphere, setActiveSphere] = useState<string | null>(null);

    const spheres = [
        { 
            id: 'litho', 
            name: 'الغلاف الصخري', 
            icon: <Mountain size={32}/>, 
            color: 'bg-amber-100 text-amber-800 border-amber-300',
            resource: 'مصدر للمعادن والطاقة (نفط).',
            img: '🛢️ ⛏️' 
        },
        { 
            id: 'hydro', 
            name: 'الغلاف المائي', 
            icon: <Droplet size={32}/>, 
            color: 'bg-blue-100 text-blue-800 border-blue-300',
            resource: 'مصدر للمياه العذبة والمالحة والثروة السمكية.',
            img: '🐟 💧' 
        },
        { 
            id: 'atmo', 
            name: 'الغلاف الجوي', 
            icon: <Wind size={32}/>, 
            color: 'bg-sky-100 text-sky-800 border-sky-300',
            resource: 'مصدر للأكسجين، وتحدث فيه مظاهر الطقس.',
            img: '☁️ 🌪️' 
        },
        { 
            id: 'bio', 
            name: 'الغلاف الحيوي', 
            icon: <Leaf size={32}/>, 
            color: 'bg-green-100 text-green-800 border-green-300',
            resource: 'مصدر للثروة الحيوانية والنباتية.',
            img: '🐄 🌴' 
        }
    ];

    return (
        <div className="animate-fade-in space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100">
                <h2 className="text-2xl font-black text-slate-800 text-center mb-2">أهمية أغلفة كوكب الأرض (الشكل ٥)</h2>
                <p className="text-center text-slate-500 mb-6">تكمن أهميتها في مخزونها الهائل من الموارد الطبيعية. اضغط على الأغلفة لاكتشافها:</p>
                
                <div className="grid grid-cols-2 gap-4">
                    {spheres.map((s) => (
                        <button 
                            key={s.id}
                            onClick={() => setActiveSphere(s.id)}
                            className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all hover:scale-105 ${activeSphere === s.id ? s.color + ' ring-2 ring-offset-2' : 'bg-slate-50 border-slate-200 text-slate-600'}`}
                        >
                            {s.icon}
                            <span className="font-bold">{s.name}</span>
                        </button>
                    ))}
                </div>

                {activeSphere && (
                    <div className="mt-6 p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 text-center animate-slide-up">
                        <div className="text-4xl mb-2">{spheres.find(s => s.id === activeSphere)?.img}</div>
                        <p className="text-lg font-bold text-slate-800">
                            {spheres.find(s => s.id === activeSphere)?.resource}
                        </p>
                    </div>
                )}
            </div>

            {/* Page 28 Activities */}
            <div className="space-y-4">
                <div className="bg-indigo-50 p-6 rounded-2xl border-r-4 border-indigo-500">
                    <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2"><HelpCircle/> فكر وناقش (ص ٢٨)</h3>
                    <div className="space-y-4">
                        <details className="bg-white p-3 rounded-lg cursor-pointer">
                            <summary className="font-bold text-slate-700">١- النتائج المتوقعة إذا لم يكن الغلاف الجوي موجوداً؟</summary>
                            <p className="mt-2 text-indigo-700 text-sm">تنعدم الحياة، لا يوجد أكسجين للتنفس، تحترق الأرض بأشعة الشمس الضارة، وتتجمد ليلاً.</p>
                        </details>
                        <details className="bg-white p-3 rounded-lg cursor-pointer">
                            <summary className="font-bold text-slate-700">٢- أهمية الماء من خلال قوله تعالى: (وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ)؟</summary>
                            <p className="mt-2 text-indigo-700 text-sm">الماء هو أساس الحياة لجميع الكائنات الحية (الإنسان، الحيوان، النبات).</p>
                        </details>
                    </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl text-center border border-purple-200">
                    <div className="inline-block bg-purple-100 p-2 rounded-full mb-2"><Crown size={20} className="text-purple-600"/></div>
                    <h4 className="font-bold text-purple-900">قيمنا</h4>
                    <p className="text-sm text-purple-800">نشكر الله تعالى على نعمة الحياة على كوكب الأرض.</p>
                </div>
            </div>
        </div>
    );
};

// --- 2. RELATIONSHIPS SECTION (Pages 28-29) ---
const InteractionsSection = () => {
    const [animStep, setAnimStep] = useState(0);

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-black text-slate-800 mb-2">العلاقة بين أغلفة كوكب الأرض</h2>
                <p className="text-slate-500">يعد كوكب الأرض نظاماً بيئياً متكاملاً</p>
            </div>

            {/* Figure 6: Integrated System */}
            <div className="relative h-64 bg-white rounded-3xl shadow-md border border-slate-200 flex items-center justify-center overflow-hidden p-4">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <RefreshCw size={200} className="animate-spin-slow"/>
                </div>
                <div className="grid grid-cols-2 gap-8 relative z-10">
                    <div className="bg-sky-100 p-3 rounded-lg text-center font-bold text-sky-800 border border-sky-300">الغلاف الجوي</div>
                    <div className="bg-green-100 p-3 rounded-lg text-center font-bold text-green-800 border border-green-300">الغلاف الحيوي</div>
                    <div className="bg-blue-100 p-3 rounded-lg text-center font-bold text-blue-800 border border-blue-300">الغلاف المائي</div>
                    <div className="bg-amber-100 p-3 rounded-lg text-center font-bold text-amber-800 border border-amber-300">الغلاف الصخري</div>
                </div>
                {/* Connecting Arrows */}
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full">
                        <circle cx="50%" cy="50%" r="80" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                    </svg>
                </div>
                <div className="absolute bottom-2 text-xs text-slate-400 bg-white px-2 rounded">الشكل (٦): تفاعل الأغلفة</div>
            </div>

            {/* Figure 7 & 8: Examples of Interaction */}
            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Fig 7: Water & Rock */}
                <div className="bg-white p-6 rounded-3xl shadow-lg border-t-8 border-blue-500">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="bg-blue-100 p-1 rounded text-blue-600">الشكل ٧</span> الماء والصخر
                    </h3>
                    <div className="relative h-48 bg-stone-200 rounded-xl overflow-hidden border-2 border-stone-300">
                        {/* Rock */}
                        <path d="M0,0 L100,0 L100,200 L0,200 Z" fill="#78716C" />
                        <path d="M200,0 L300,0 L300,200 L200,200 Z" fill="#78716C" />
                        {/* Water Cave Carving Animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-stone-700 rounded-full animate-pulse opacity-50 scale-150"></div> {/* Cave void */}
                            <WavesAnimation />
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        يقوم <strong>الماء (الغلاف المائي)</strong> في أثناء احتكاكه بالصخور <strong>(الغلاف الصخري)</strong> بتشكيل بعض مظاهر السطح مثل: <span className="font-bold text-blue-600">الكهوف</span>.
                    </p>
                </div>

                {/* Fig 8: Bio & Rock */}
                <div className="bg-white p-6 rounded-3xl shadow-lg border-t-8 border-green-500">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="bg-green-100 p-1 rounded text-green-600">الشكل ٨</span> النبات والصخر
                    </h3>
                    <div className="relative h-48 bg-[#e6d5b8] rounded-xl overflow-hidden border-2 border-[#c2b280] flex justify-center items-end">
                        {/* Soil Layers */}
                        <div className="absolute bottom-0 w-full h-1/2 bg-[#a1887f]"></div>
                        {/* Plant */}
                        <div className="relative z-10 flex flex-col items-center group cursor-pointer" onClick={() => setAnimStep(s => s + 1)}>
                            <Leaf className="text-green-600 mb-1 animate-bounce" />
                            <div className="w-1 h-12 bg-green-700"></div>
                            {/* Roots Animation */}
                            <svg width="60" height="60" className="mt-[-5px]">
                                <path d="M30,0 L30,20 L10,40 M30,20 L50,40 M30,20 L30,50" stroke="#5d4037" strokeWidth="2" fill="none" className="animate-[dash_2s_infinite]"/>
                            </svg>
                        </div>
                        <div className="absolute top-2 right-2 text-xs bg-white/50 px-2 rounded">اضغط على النبات</div>
                    </div>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        تمتص جذور النباتات <strong>(الغلاف الحيوي)</strong> المعادن الموجودة في التربة <strong>(الغلاف الصخري)</strong> لتساعدها على النمو.
                    </p>
                </div>
            </div>
        </div>
    );
};

const WavesAnimation = () => (
    <div className="flex gap-1 h-full items-end pb-4">
        {[1,2,3].map(i => (
            <div key={i} className="w-4 h-16 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: `${i*0.1}s`}}></div>
        ))}
    </div>
);

// --- 3. HUMAN IMPACT SECTION (Pages 30-31) ---
const HumanImpactSection = () => {
    const [impactView, setImpactView] = useState<'chart' | 'details'>('chart');

    const problems = [
        { id: 1, title: 'تدهور الغطاء النباتي', sphere: 'الغلاف الحيوي', icon: '🌳', color: 'bg-green-100 text-green-800' },
        { id: 2, title: 'تلوث المياه', sphere: 'الغلاف المائي', icon: '🛢️', color: 'bg-blue-100 text-blue-800' },
        { id: 3, title: 'الأمطار الحمضية', sphere: 'الغلاف الجوي', icon: '🌧️', color: 'bg-red-100 text-red-800' },
        { id: 4, title: 'الانهيارات الأرضية', sphere: 'الغلاف الصخري', icon: '⛰️', color: 'bg-amber-100 text-amber-800' },
    ];

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-black text-slate-800 mb-2">تأثير الإنسان في أغلفة كوكب الأرض</h2>
                <p className="text-slate-500">زاد الاستهلاك للموارد الطبيعية فظهرت المشكلات البيئية</p>
            </div>

            {/* Figure 9: Problems Grid */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-6 text-center">من المشكلات البيئية الناجمة عن الممارسات الخاطئة (الشكل ٩)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {problems.map((p) => (
                        <div key={p.id} className={`p-4 rounded-2xl border text-center ${p.color} border-opacity-20 hover:scale-105 transition-transform`}>
                            <div className="text-4xl mb-2">{p.icon}</div>
                            <h4 className="font-bold text-sm mb-1">{p.title}</h4>
                            <span className="text-xs bg-white/50 px-2 py-1 rounded">{p.sphere}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Definitions & Facts (Page 31) */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Acid Rain */}
                <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                    <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2"><CloudRain/> ما المقصود بالأمطار الحمضية؟</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                        هي الأمطار التي تحتوي على نسبة عالية من الأحماض، وتحدث نتيجة لتلوث الهواء بمواد كيميائية وغازات سامة.
                    </p>
                </div>

                {/* Did you know - Oman Trees */}
                <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-sm relative overflow-hidden">
                    <Leaf className="absolute -left-4 -bottom-4 text-green-200 w-32 h-32"/>
                    <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2"><Info/> معلومة تهمك (ص ٣١)</h4>
                    <p className="text-green-800 text-sm leading-relaxed relative z-10">
                        تبنت مؤسسات المجتمع في سلطنة عمان وبإشراف من هيئة البيئة مبادرة وطنية لزراعة <span className="font-black text-lg">١٠ ملايين شجرة</span>؛ للمحافظة على النباتات البرية.
                    </p>
                </div>
            </div>

            {/* Royal Spotlight */}
            <div className="bg-gradient-to-r from-amber-700 to-yellow-600 text-white p-6 rounded-3xl shadow-xl flex items-start gap-4">
                <Crown className="flex-shrink-0 w-12 h-12 text-yellow-300" />
                <div>
                    <h3 className="font-bold text-yellow-200 text-lg mb-2">إضاءات سلطانية</h3>
                    <p className="text-sm leading-loose font-serif">
                        «إن العناية بالبيئة ومقدراتها مسؤولية عالمية لا تحدها الحدود السياسية للدول.»
                        <br/>
                        <span className="text-xs opacity-80 mt-2 block">- من كلمة جلالة السلطان هيثم بن طارق (حفظه الله) بمناسبة مرور 32 عاماً على جائزة اليونسكو - السلطان قابوس لصون البيئة.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- 4. ACHIEVEMENTS & SOLUTIONS (Pages 32-33) ---
const AchievementsSection = () => {
    return (
        <div className="animate-fade-in space-y-8">
            
            {/* Omani Achievement */}
            <div className="bg-white p-6 rounded-3xl border-2 border-yellow-400 shadow-lg text-center relative">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-bold shadow-md">
                    منجز عماني 🇴🇲
                </div>
                <div className="mt-4">
                    <p className="text-lg font-bold text-slate-800">
                        حصلت سلطنة عمان على جائزة مجلس التعاون الخليجي للبيئة والحياة الفطرية في مجال التوعية البيئية لعامي (٢٠١٣ و ٢٠١٤م).
                    </p>
                </div>
            </div>

            {/* Activity: Suggest Solutions */}
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-200">
                <h3 className="font-bold text-teal-900 mb-4 flex items-center gap-2"><HelpCircle/> فكر واقترح (ص ٣٢)</h3>
                <p className="text-sm text-slate-600 mb-4">فكر في إحدى المشكلات البيئية التي تعاني منها محافظتك، ثم اقترح الحلول المناسبة.</p>
                <div className="flex gap-2">
                    <input type="text" placeholder="اكتب اقتراحك هنا..." className="flex-1 p-2 rounded-lg border border-slate-300 text-sm"/>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-bold">إرسال</button>
                </div>
            </div>

            {/* Noah's Story (Page 33) */}
            <div className="bg-[#1e293b] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-sky-300 flex items-center gap-2"><BookOpen/> اقرأ واستمتع: قصة نوح عليه السلام</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1 space-y-4 text-sm leading-relaxed text-slate-300">
                            <p>
                                دعا نبي الله نوح -عليه السلام- قومه ليلاً ونهاراً لعبادة الله، فكذبوه. فأمره الله ببناء سفينة.
                            </p>
                            <p className="bg-white/10 p-3 rounded-lg border-r-4 border-yellow-500">
                                قبل الطوفان، حملت السفينة من كل زوجين اثنين ذكراً وأنثى من الحيوانات والطيور؛ امتثالاً لقوله تعالى: ﴿حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ قُلْنَا احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ﴾ (هود: ٤٠).
                            </p>
                            <p>
                                الحكمة: كانت السفينة وسيلة بأمر الله للحفاظ على الإنسان وحفظ النوع الحيواني (الغلاف الحيوي).
                            </p>
                        </div>
                        <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                            <Anchor size={64} className="text-sky-400"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EarthSpheresLesson2: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'importance' | 'interactions' | 'impact' | 'achieve' | 'quiz'>('importance');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-green-700 px-2">أغلفة الأرض: علاقة تفاعلية 🔄</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('importance'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'importance' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Factory size={20}/> الأهمية والموارد (ص٢٧)
          </button>
          <button onClick={() => {setActiveTab('interactions'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'interactions' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <RefreshCw size={20}/> العلاقات التفاعلية (ص٢٨)
          </button>
          <button onClick={() => {setActiveTab('impact'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'impact' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <AlertTriangle size={20}/> تأثير الإنسان (ص٣٠)
          </button>
          <button onClick={() => {setActiveTab('achieve'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'achieve' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Crown size={20}/> جهود وحلول (ص٣٢)
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
           <span className="font-bold text-lg text-green-800">العلاقة التفاعلية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeTab === 'importance' && <ImportanceSection />}
            {activeTab === 'interactions' && <InteractionsSection />}
            {activeTab === 'impact' && <HumanImpactSection />}
            {activeTab === 'achieve' && <AchievementsSection />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_SPHERES_RELATION_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson2;
