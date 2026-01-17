
import React, { useState } from 'react';
import { 
    Database, FileText, Activity, CheckCircle, XCircle, Search, 
    Users, HeartPulse, ClipboardList, Building2, PieChart, 
    Lightbulb, Crown, ArrowLeft, BookOpen, BarChart, Info
} from 'lucide-react';

const PopSources: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'sources' | 'form' | 'importance' | 'activity'>('sources');

    return (
        <div className="p-4 md:p-6 animate-fade-in space-y-6">
            
            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center bg-blue-50 p-2 rounded-2xl gap-2 shadow-inner">
                <button 
                    onClick={() => setActiveTab('sources')}
                    className={`flex-1 min-w-[120px] py-2 px-4 rounded-xl font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 ${activeTab === 'sources' ? 'bg-white shadow text-blue-700' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Database size={18} /> المصادر
                </button>
                <button 
                    onClick={() => setActiveTab('form')}
                    className={`flex-1 min-w-[120px] py-2 px-4 rounded-xl font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 ${activeTab === 'form' ? 'bg-white shadow text-emerald-700' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <ClipboardList size={18} /> استمارة التعداد
                </button>
                <button 
                    onClick={() => setActiveTab('importance')}
                    className={`flex-1 min-w-[120px] py-2 px-4 rounded-xl font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 ${activeTab === 'importance' ? 'bg-white shadow text-purple-700' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <PieChart size={18} /> الأهمية
                </button>
                <button 
                    onClick={() => setActiveTab('activity')}
                    className={`flex-1 min-w-[120px] py-2 px-4 rounded-xl font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 ${activeTab === 'activity' ? 'bg-white shadow text-orange-700' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Activity size={18} /> نشاط
                </button>
            </div>

            {/* CONTENT RENDERER */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[500px]">
                {activeTab === 'sources' && <SourcesSection />}
                {activeTab === 'form' && <CensusFormSim />}
                {activeTab === 'importance' && <ImportanceSection />}
                {activeTab === 'activity' && <SortingGame />}
            </div>
        </div>
    );
};

// --- 1. SOURCES SECTION (TEXTBOOK PAGES 18-22) ---
const SourcesSection = () => {
    return (
        <div className="p-6 md:p-8 space-y-10 animate-slide-up">
            
            {/* Header */}
            <div className="text-center">
                <h2 className="text-2xl font-black text-slate-800 mb-2">مصادر البيانات السكانية</h2>
                <p className="text-slate-500">من أين نحصل على المعلومات عن السكان؟</p>
            </div>

            {/* Primary Sources Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                
                {/* 1. Census */}
                <div className="bg-blue-50 rounded-2xl p-6 border-t-8 border-blue-500 hover:shadow-lg transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-xl text-xs font-bold">المصدر الأهم</div>
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                        <Users size={32} />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2">1. التعداد السكاني</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        عملية <span className="font-bold text-blue-700">حصر شامل</span> لجميع السكان والمساكن والمنشآت في وقت محدد.
                    </p>
                    
                    {/* Historical Fact (Image 2) */}
                    <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-sm flex items-start gap-3">
                        <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 mt-1"><Crown size={16}/></div>
                        <div>
                            <span className="text-xs font-black text-slate-400 uppercase">شخصية عمانية</span>
                            <p className="text-xs text-slate-700 font-bold mt-1">
                                السلطان قابوس بن سعيد -طيب الله ثراه- هو <span className="text-blue-600">أول مواطن</span> يُسجل بياناته في أول تعداد شامل عام 1993م.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Vital Statistics */}
                <div className="bg-rose-50 rounded-2xl p-6 border-t-8 border-rose-500 hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-4">
                        <HeartPulse size={32} />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2">2. الإحصاءات الحيوية</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        تُسمى في سلطنة عمان <span className="font-bold text-rose-700">"سجل الأحوال المدنية"</span>، وهي تسجيل مستمر للأحداث.
                    </p>
                    <ul className="space-y-2">
                        <li className="bg-white px-3 py-2 rounded-lg text-xs font-bold text-rose-800 flex items-center gap-2 border border-rose-100"><CheckCircle size={14}/> المواليد والوفيات</li>
                        <li className="bg-white px-3 py-2 rounded-lg text-xs font-bold text-rose-800 flex items-center gap-2 border border-rose-100"><CheckCircle size={14}/> الزواج والطلاق</li>
                    </ul>
                </div>

                {/* 3. Sample Surveys */}
                <div className="bg-emerald-50 rounded-2xl p-6 border-t-8 border-emerald-500 hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                        <Search size={32} />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2">3. المسوحات بالعينة</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        جمع بيانات عن <span className="font-bold text-emerald-700">جزء محدد</span> من السكان (عينة) لتمثيل المجتمع كله.
                    </p>
                    <div className="bg-emerald-100/50 p-3 rounded-lg text-xs text-emerald-900 font-bold border border-emerald-200">
                        ⚡ تتميز بتوفير الوقت والجهد والتكلفة مقارنة بالتعداد الشامل.
                    </div>
                </div>
            </div>

            {/* Knowledge Window (Image 6) */}
            <div className="bg-indigo-900 text-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl">
                <div className="bg-white/10 p-4 rounded-full animate-pulse">
                    <Lightbulb size={40} className="text-yellow-400" />
                </div>
                <div className="flex-1 text-center md:text-right">
                    <h4 className="text-xl font-black text-yellow-400 mb-2">نافذة المعرفة</h4>
                    <p className="text-indigo-100 leading-relaxed">
                        تنتهج سلطنة عمان <span className="font-bold text-white underline decoration-yellow-400 decoration-2">نظام الحكومة الإلكترونية</span> بهدف ربط البيانات السكانية بالمؤسسات الحكومية، مما سهل الانتقال من التعداد الميداني إلى التعداد الإلكتروني (2020م).
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- 2. CENSUS FORM SIMULATION (BASED ON IMAGE 9) ---
const CensusFormSim = () => {
    const [hoveredField, setHoveredField] = useState<string | null>(null);

    const fields = [
        { id: 'seq', label: 'تسلسل', width: 'w-16', desc: 'رقم الفرد في الأسرة' },
        { id: 'name', label: 'الاسم الثلاثي والقبيلة', width: 'flex-1', desc: 'لتحديد هوية الشخص بدقة' },
        { id: 'rel', label: 'العلاقة', width: 'w-24', desc: 'رب الأسرة، زوجة، ابن، ابنة...' },
        { id: 'sex', label: 'النوع', width: 'w-20', desc: 'ذكر أو أنثى (للحسابات النوعية)' },
        { id: 'dob', label: 'سنة الميلاد', width: 'w-24', desc: 'لحساب العمر والتركيب العمري' },
        { id: 'edu', label: 'الحالة التعليمية', width: 'w-32', desc: 'أمي، يقرأ ويكتب، جامعي...' },
        { id: 'job', label: 'نوع النشاط', width: 'w-32', desc: 'مشتغل، طالب، ربة منزل...' },
        { id: 'prof', label: 'المهنة الرئيسية', width: 'w-40', desc: 'طبيب، معلم، مهندس...' },
    ];

    const sampleRow = {
        seq: '01', name: 'أحمد بن سعيد المعمري', rel: 'رب الأسرة', sex: 'ذكر', dob: '1980', edu: 'جامعي', job: 'مشتغل', prof: 'مهندس مدني'
    };

    return (
        <div className="p-6 md:p-8 bg-slate-50 min-h-full animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-slate-800 mb-2">محاكاة استمارة التعداد 📝</h2>
                <p className="text-slate-500">هذا نموذج تفاعلي لما تحتويه استمارة التعداد (كما في الصورة 9 من الكتاب)</p>
            </div>

            {/* The Form */}
            <div className="bg-white p-2 md:p-6 rounded-xl shadow-2xl border-2 border-slate-200 overflow-x-auto">
                <div className="min-w-[800px]">
                    {/* Header */}
                    <div className="bg-emerald-600 text-white rounded-t-lg p-3 text-center font-bold text-lg">
                        بيانات أفراد الأسرة
                    </div>
                    
                    {/* Columns */}
                    <div className="flex bg-emerald-50 border-x-2 border-emerald-600">
                        {fields.map((f, i) => (
                            <div 
                                key={f.id} 
                                className={`${f.width} p-3 text-center text-xs font-black text-emerald-900 border-l border-emerald-200 flex items-center justify-center`}
                            >
                                {f.label}
                            </div>
                        ))}
                    </div>

                    {/* Simulation Rows */}
                    {[1, 2, 3].map((rowNum) => (
                        <div key={rowNum} className="flex border-b border-x border-slate-300 bg-white hover:bg-yellow-50 transition-colors group relative">
                            {fields.map((f) => (
                                <div 
                                    key={f.id}
                                    onMouseEnter={() => setHoveredField(f.id)}
                                    onMouseLeave={() => setHoveredField(null)}
                                    className={`${f.width} p-3 text-center border-l border-slate-200 text-sm font-medium text-slate-700 cursor-help relative`}
                                >
                                    {rowNum === 1 ? (sampleRow as any)[f.id] : <span className="opacity-20 text-slate-300">-----</span>}
                                    
                                    {/* Tooltip */}
                                    {hoveredField === f.id && rowNum === 1 && (
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-slate-800 text-white text-xs p-2 rounded-lg shadow-xl z-20 animate-fade-in">
                                            {f.desc}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 flex gap-4 justify-center text-sm text-slate-500">
                <span className="flex items-center gap-1"><Info size={16}/> حرك الفأرة فوق الخانات لمعرفة أهميتها</span>
            </div>
        </div>
    );
};

// --- 3. IMPORTANCE SECTION (TEXTBOOK PAGE 23) ---
const ImportanceSection = () => {
    return (
        <div className="p-6 md:p-8 animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-slate-800 mb-2">أهمية دراسة السكان</h2>
                <p className="text-slate-500">لماذا تهتم الدول بجمع البيانات السكانية؟</p>
            </div>

            {/* Interactive Diagrams */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform text-center group">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                        <Building2 size={40} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-800 mb-2">توفير الخدمات</h3>
                    <p className="text-sm text-slate-500">معرفة عدد السكان تساعد في تحديد عدد المدارس والمستشفيات والطرق المطلوبة.</p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform text-center group">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                        <BarChart size={40} className="text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-800 mb-2">إنشاء المشاريع</h3>
                    <p className="text-sm text-slate-500">التخطيط للمشاريع الصناعية والزراعية والتجارية بناءً على القوى العاملة المتوفرة.</p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform text-center group">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                        <BookOpen size={40} className="text-purple-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-800 mb-2">وضع الخطط</h3>
                    <p className="text-sm text-slate-500">رسم السياسات المستقبلية للدولة (مثل رؤية عمان 2040) بناءً على التوقعات السكانية.</p>
                </div>
            </div>

            {/* Sultan's Light & Discussion (Images 7 & 8) */}
            <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 opacity-10 p-10"><Crown size={200}/></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full text-yellow-300 font-bold mb-2 border border-yellow-500/50">
                            <Crown size={20} /> إضاءات سلطانية
                        </div>
                        <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 font-serif">
                            "لقد تجلت الجهود الوطنية... في استمرار مسيرة تطوير قطاعات الصحة والتعليم والخدمات التي عكفنا جاهدين على أن تواكب التزايد في عدد السكان..."
                        </p>
                        <p className="text-sm font-bold text-emerald-300">- من خطاب حضرة صاحب الجلالة السلطان هيثم بن طارق المعظم -</p>
                    </div>
                    
                    <div className="md:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                        <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2"><Lightbulb size={20}/> ناقش:</h4>
                        <p className="text-sm leading-relaxed mb-4">
                            "أهمية توفر بيانات سكانية دقيقة للتخطيط المستقبلي في قطاعات الصحة والتعليم."
                        </p>
                        <div className="bg-black/20 p-3 rounded text-xs text-slate-200">
                            <strong>الاستنتاج:</strong> البيانات الدقيقة تمنع الهدر، وتضمن وصول الخدمة لكل مواطن، وتساعد في مواجهة الأزمات.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 4. ACTIVITY: SORTING GAME ---
const SortingGame = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'التعداد السكاني الشامل', type: 'primary' },
        { id: 2, text: 'سجلات المدارس والجامعات', type: 'secondary' },
        { id: 3, text: 'شهادات الميلاد والوفاة', type: 'primary' },
        { id: 4, text: 'سجلات العمال في الشركات', type: 'secondary' },
        { id: 5, text: 'المسح بالعينة', type: 'primary' },
    ]);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
    const [completed, setCompleted] = useState(false);

    const handleSort = (target: 'primary' | 'secondary') => {
        if (items.length === 0) return;
        
        if (items[0].type === target) {
            setFeedback('correct');
            setTimeout(() => {
                setFeedback(null);
                const newItems = items.slice(1);
                setItems(newItems);
                if (newItems.length === 0) setCompleted(true);
            }, 600);
        } else {
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 600);
        }
    };

    return (
        <div className="p-8 text-center bg-slate-50 h-full flex flex-col justify-center animate-fade-in">
            {!completed ? (
                <>
                    <h2 className="text-2xl font-black text-slate-800 mb-8">نشاط: صنف المصادر (أولية / ثانوية)</h2>
                    
                    <div className="relative h-32 mb-10 flex justify-center items-center">
                        <div className={`bg-white p-6 rounded-2xl shadow-xl border-b-4 border-indigo-500 transform transition-all duration-300 ${feedback === 'correct' ? 'scale-0 opacity-0 translate-y-10' : feedback === 'wrong' ? 'animate-shake border-red-500' : 'scale-100'}`}>
                            <span className="text-xl font-bold text-slate-800">{items[0].text}</span>
                        </div>
                        {feedback === 'correct' && <div className="absolute text-green-600 font-bold text-xl animate-bounce">أحسنت! ✅</div>}
                        {feedback === 'wrong' && <div className="absolute text-red-600 font-bold text-xl animate-pulse">حاول مرة أخرى ❌</div>}
                    </div>

                    <div className="flex justify-center gap-8">
                        <button 
                            onClick={() => handleSort('primary')}
                            className="bg-orange-100 border-4 border-orange-400 p-6 rounded-3xl w-40 hover:bg-orange-200 transition-colors flex flex-col items-center"
                        >
                            <Database size={32} className="text-orange-600 mb-2"/>
                            <span className="font-black text-orange-900">مصادر أولية</span>
                        </button>
                        <button 
                            onClick={() => handleSort('secondary')}
                            className="bg-purple-100 border-4 border-purple-400 p-6 rounded-3xl w-40 hover:bg-purple-200 transition-colors flex flex-col items-center"
                        >
                            <FileText size={32} className="text-purple-600 mb-2"/>
                            <span className="font-black text-purple-900">مصادر ثانوية</span>
                        </button>
                    </div>
                </>
            ) : (
                <div className="animate-zoom-in">
                    <div className="inline-block p-6 bg-green-100 rounded-full text-green-600 mb-4 shadow-lg">
                        <CheckCircle size={64} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-800 mb-2">ممتاز!</h3>
                    <p className="text-slate-600">لقد أتقنت التمييز بين مصادر البيانات السكانية.</p>
                    <button onClick={() => window.location.reload()} className="mt-6 text-indigo-600 font-bold hover:underline">إعادة النشاط</button>
                </div>
            )}
            
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake { animation: shake 0.3s ease-in-out; }
            `}</style>
        </div>
    );
};

// --- ICONS ---
const BookOpenIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const PuzzleIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.439 7.85c0 .249.027.449.082.6.502 1.396 2.023 2.158 2.023 4.678 0 2.762-2.198 4.792-4.545 4.792h-5.454v-5.55c0-2.31 1.764-3.791 3.527-3.791 2.336 0 4.367-2.31 4.367-4.792 0-2.228-1.562-4.083-3.667-4.667"/></svg>;

export default PopSources;
