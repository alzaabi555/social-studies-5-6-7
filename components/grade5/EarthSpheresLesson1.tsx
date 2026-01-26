
import React, { useState } from 'react';
import { FIFTH_SPHERES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { Menu, ArrowRight, Sun, Globe, Info, Play, Pause, BookOpen, Star, HelpCircle, CheckCircle, Edit3, PieChart, Leaf, Wind, Mountain, Droplet, RefreshCw, Cloud, Layers } from 'lucide-react';

interface Props {
    onBack: () => void;
}

// --- HELPER COMPONENTS ---

const TextbookBox = ({ title, content, type, icon: Icon }: { title: string, content: string, type: 'def' | 'info' | 'value', icon: any }) => {
    const styles = {
        def: "bg-green-50 border-green-500 text-green-900",
        info: "bg-blue-50 border-blue-500 text-blue-900",
        value: "bg-purple-50 border-purple-500 text-purple-900"
    };
    return (
        <div className={`p-4 rounded-xl border-r-4 shadow-sm my-4 text-right animate-fade-in ${styles[type]}`}>
            <h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
                <Icon size={20} /> {title}
            </h4>
            <p className="font-medium leading-relaxed opacity-90">{content}</p>
        </div>
    );
};

const ActivityAnswer = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden mb-4 shadow-sm">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 text-right flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
            >
                <span className="font-bold text-slate-800 flex items-center gap-2"><HelpCircle className="text-orange-500" size={18}/> {question}</span>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-200">
                    {isOpen ? 'إخفاء الإجابة' : 'إظهار الإجابة'}
                </span>
            </button>
            {isOpen && (
                <div className="p-4 bg-orange-50 text-orange-900 border-t border-slate-200 animate-slide-up font-bold">
                    ✅ {answer}
                </div>
            )}
        </div>
    );
};

// --- PART 1: SOLAR SYSTEM & ACTIVITIES (Pages 18-20) ---
const SolarSystemSection = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    
    // Activity State (Page 19 Table)
    const [tableAnswers, setTableAnswers] = useState<{[key: string]: string}>({});
    const [tableFeedback, setTableFeedback] = useState<{[key: string]: boolean}>({});

    const handleTableCheck = (key: string, correctValue: string, userValue: string) => {
        setTableAnswers(prev => ({...prev, [key]: userValue}));
        setTableFeedback(prev => ({...prev, [key]: userValue === correctValue}));
    };

    // Planets Data
    const planets = [
        { id: 'mercury', name: 'عطارد', color: '#9CA3AF', size: 10, orbit: 60, speed: 2 },
        { id: 'venus', name: 'الزهرة', color: '#FCD34D', size: 18, orbit: 90, speed: 3 },
        { id: 'earth', name: 'الأرض', color: '#3B82F6', size: 20, orbit: 130, speed: 4 },
        { id: 'mars', name: 'المريخ', color: '#EF4444', size: 14, orbit: 170, speed: 5 },
        { id: 'jupiter', name: 'المشتري', color: '#D97706', size: 45, orbit: 230, speed: 8 },
        { id: 'saturn', name: 'زحل', color: '#FDE047', size: 38, orbit: 290, speed: 10, ring: true },
        { id: 'uranus', name: 'أورانوس', color: '#67E8F9', size: 25, orbit: 340, speed: 12 },
        { id: 'neptune', name: 'نبتون', color: '#1E40AF', size: 24, orbit: 390, speed: 14 },
    ];

    return (
        <div className="space-y-10 animate-fade-in">
            {/* Header & Definition (Page 18) */}
            <div>
                <h2 className="text-3xl font-black text-slate-800 mb-4 text-center">المجموعة الشمسية</h2>
                <TextbookBox 
                    type="def" 
                    icon={BookOpen} 
                    title="ما المقصود بمجرة درب التبانة؟ (ص ١٨)" 
                    content="تجمع عدد كبير جداً من النجوم والسحب والغازات على شكل شريط حلزوني مضيء في السماء."
                />
            </div>

            {/* Simulation */}
            <div className="relative w-full h-[400px] bg-[#0B0B15] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 flex items-center justify-center group select-none">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-black"></div>
                
                {/* Sun */}
                <div className="absolute z-20 w-16 h-16 bg-yellow-500 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.8)] animate-pulse flex items-center justify-center">
                    <span className="text-[8px] font-black text-yellow-900">الشمس</span>
                </div>

                {/* Planets */}
                {planets.map((planet) => (
                    <div key={planet.id} className="absolute rounded-full border border-white/10 flex items-center justify-center" style={{ width: `${planet.orbit * 2}px`, height: `${planet.orbit * 2}px` }}>
                        <div 
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ animation: isPlaying ? `orbit ${planet.speed * 2}s linear infinite` : 'none', transformOrigin: `0 ${planet.orbit}px` }}
                        >
                            <div className="rounded-full shadow-lg relative tooltip-trigger" style={{ backgroundColor: planet.color, width: `${planet.size}px`, height: `${planet.size}px` }}>
                                {planet.ring && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[40%] border-2 border-white/50 rounded-full rotate-12"></div>}
                            </div>
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-white opacity-70">{planet.name}</span>
                        </div>
                    </div>
                ))}
                
                <button onClick={() => setIsPlaying(!isPlaying)} className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/30"><span className="sr-only">Toggle</span>{isPlaying ? <Pause size={16}/> : <Play size={16}/>}</button>
            </div>
            <style>{`@keyframes orbit { from { transform: rotate(0deg) translateX(-50%) translateY(-50%) rotate(0deg); } to { transform: rotate(360deg) translateX(-50%) translateY(-50%) rotate(-360deg); } }`}</style>

            {/* PAGE 19: ACTIVITY TABLE (تأمل وأجب) */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-4 border-b pb-2">
                    <div className="bg-indigo-100 p-2 rounded-full text-indigo-700"><Edit3 size={20}/></div>
                    <h3 className="font-bold text-xl text-indigo-900">نشاط: تأمل وأجب (صفحة ١٩)</h3>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse">
                        <thead>
                            <tr className="bg-slate-100 text-slate-700">
                                <th className="p-3 rounded-tr-lg">العبارة</th>
                                <th className="p-3 rounded-tl-lg w-48">اسم الكوكب</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b">
                                <td className="p-3 font-medium">الكوكب الأقرب إلى الشمس</td>
                                <td className="p-3">
                                    <select 
                                        onChange={(e) => handleTableCheck('q1', 'عطارد', e.target.value)}
                                        className={`w-full p-2 rounded border-2 ${tableFeedback['q1'] ? 'border-green-500 bg-green-50 text-green-800' : 'border-slate-300'}`}
                                    >
                                        <option value="">اختر...</option>
                                        <option value="الأرض">الأرض</option>
                                        <option value="عطارد">عطارد</option>
                                        <option value="المريخ">المريخ</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3 font-medium">الكوكب الأكبر في المجموعة الشمسية</td>
                                <td className="p-3">
                                    <select 
                                        onChange={(e) => handleTableCheck('q2', 'المشتري', e.target.value)}
                                        className={`w-full p-2 rounded border-2 ${tableFeedback['q2'] ? 'border-green-500 bg-green-50 text-green-800' : 'border-slate-300'}`}
                                    >
                                        <option value="">اختر...</option>
                                        <option value="زحل">زحل</option>
                                        <option value="المشتري">المشتري</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3 font-medium">الكوكب الثالث في ترتيب المجموعة</td>
                                <td className="p-3">
                                    <select 
                                        onChange={(e) => handleTableCheck('q3', 'الأرض', e.target.value)}
                                        className={`w-full p-2 rounded border-2 ${tableFeedback['q3'] ? 'border-green-500 bg-green-50 text-green-800' : 'border-slate-300'}`}
                                    >
                                        <option value="">اختر...</option>
                                        <option value="الزهرة">الزهرة</option>
                                        <option value="الأرض">الأرض</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">الكوكب الذي يتميز بوجود حلقات حوله</td>
                                <td className="p-3">
                                    <select 
                                        onChange={(e) => handleTableCheck('q4', 'زحل', e.target.value)}
                                        className={`w-full p-2 rounded border-2 ${tableFeedback['q4'] ? 'border-green-500 bg-green-50 text-green-800' : 'border-slate-300'}`}
                                    >
                                        <option value="">اختر...</option>
                                        <option value="نبتون">نبتون</option>
                                        <option value="زحل">زحل</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* PAGE 19: THINK & DISCUSS */}
            <div className="space-y-4">
                <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                    <span className="bg-yellow-400 text-white w-8 h-8 flex items-center justify-center rounded-full shadow">؟</span>
                    فكر وناقش (ص ١٩)
                </h3>
                <ActivityAnswer 
                    question="سبب تسمية كوكب الأرض (الكوكب المائي)؟"
                    answer="لأن الماء يغطي الجزء الأكبر من مساحته (حوالي 71%)."
                />
                <ActivityAnswer 
                    question="سبب البرودة الشديدة على كوكب نبتون؟"
                    answer="لأنه أبعد الكواكب عن الشمس."
                />
            </div>

            {/* PAGE 19: DID YOU KNOW */}
            <TextbookBox 
                type="info" 
                icon={Info} 
                title="معلومة تهمك (ص ١٩)" 
                content="كوكب الأرض من كواكب النظام الشمسي، ويتميز بوجود حياة عليه."
            />

            {/* PAGE 20: ANALYZE & CONCLUDE */}
            <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 bg-emerald-100 rounded-full blur-2xl opacity-50"></div>
                <div className="relative z-10">
                    <h3 className="font-black text-emerald-900 text-lg mb-2 flex items-center gap-2">
                        <BookOpen size={20}/> حلل واستنتج (ص ٢٠)
                    </h3>
                    <p className="text-emerald-800 font-serif text-lg leading-relaxed mb-4 bg-white/60 p-4 rounded-xl border border-emerald-100">
                        قال الله تعالى: ﴿لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ ۚ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ﴾
                    </p>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <p className="font-bold text-slate-700 mb-2">استنتج عدم اصطدام كواكب المجموعة الشمسية ببعضها؟</p>
                        <p className="text-emerald-700 font-bold">الإجابة: لأن الله تعالى جعل لكل كوكب مداراً (فلكاً) محدداً يسير فيه بسرعة منتظمة لا يحيد عنه.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- PART 2: EARTH SPHERES (Pages 20-22) ---
const SpheresSection = () => {
    const [activeSphere, setActiveSphere] = useState<string | null>(null);

    return (
        <div className="space-y-10 animate-fade-in">
            {/* Definition (Page 20) */}
            <TextbookBox 
                type="def" 
                icon={Leaf} 
                title="ما المقصود بالموارد الطبيعية؟ (ص ٢٠)" 
                content="كل ما هو موجود في الطبيعة، ويستفيد منه الإنسان، والكائنات الحية الأخرى."
            />

            {/* Earth Spheres Model */}
            <div className="text-center">
                <h2 className="text-2xl font-black text-slate-800 mb-4">أغلفة كوكب الأرض (الشكل ٢)</h2>
                <p className="text-slate-500 mb-6">اضغط على الأغلفة لاستكشاف التفاصيل</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* 3D-like Interactive Layered Earth */}
                <div className="relative w-72 h-72 mx-auto">
                    {/* Biosphere (All) */}
                    <div onClick={() => setActiveSphere('bio')} className="absolute inset-0 rounded-full border-4 border-green-400 cursor-pointer hover:bg-green-100/20 z-40 transition-all" title="الغلاف الحيوي"></div>
                    
                    {/* Atmosphere (Outer Ring) */}
                    <div onClick={() => setActiveSphere('atmo')} className="absolute inset-[-20px] rounded-full border-4 border-dashed border-sky-300 cursor-pointer hover:border-sky-500 z-10 transition-all" title="الغلاف الجوي"></div>
                    
                    {/* Hydrosphere (Blue Base) */}
                    <div onClick={() => setActiveSphere('hydro')} className="absolute inset-0 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition-colors flex items-center justify-center overflow-hidden z-20" title="الغلاف المائي">
                        <div className="w-full h-full opacity-50 bg-[url('https://www.transparenttextures.com/patterns/water.png')]"></div>
                    </div>

                    {/* Lithosphere (Land Patches) */}
                    <div onClick={() => setActiveSphere('litho')} className="absolute top-4 left-8 w-24 h-32 bg-amber-700 rounded-[40%] cursor-pointer hover:bg-amber-800 z-30 transition-colors shadow-lg" title="الغلاف الصخري"></div>
                    <div onClick={() => setActiveSphere('litho')} className="absolute bottom-8 right-6 w-20 h-20 bg-amber-600 rounded-[30%] cursor-pointer hover:bg-amber-800 z-30 transition-colors shadow-lg"></div>
                </div>

                {/* Info Panel */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-slate-100 min-h-[300px] flex flex-col justify-center">
                    {!activeSphere && <p className="text-center text-slate-400">حدد غلافاً من الرسم لعرض المعلومات</p>}
                    
                    {activeSphere === 'atmo' && (
                        <div className="animate-slide-up">
                            <h3 className="text-xl font-black text-sky-600 mb-2 flex items-center gap-2"><Wind/> أولاً: الغلاف الجوي</h3>
                            <p className="text-slate-700 font-medium mb-3">الطبقة الغازية التي تحيط بالأرض إحاطة تامة.</p>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                <li>مكوناته: غازات (نيتروجين، أكسجين) وبخار ماء.</li>
                                <li>أهميته: يحتوي على <strong>حزام الأوزون</strong> الذي يحمي الأرض من الأشعة الضارة.</li>
                            </ul>
                        </div>
                    )}

                    {activeSphere === 'litho' && (
                        <div className="animate-slide-up">
                            <h3 className="text-xl font-black text-amber-700 mb-2 flex items-center gap-2"><Mountain/> ثانياً: الغلاف الصخري</h3>
                            <p className="text-slate-700 font-medium mb-3">يمثل القشرة الخارجية للأرض (قارات وقيعان محيطات).</p>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                <li>مكوناته: الصخور، التربة، والمعادن.</li>
                                <li>يرتبط بظواهر مثل البراكين والزلازل.</li>
                            </ul>
                            <div className="mt-3 bg-amber-50 p-2 rounded text-xs text-amber-800 font-bold border border-amber-200">
                                نشاط (ص 22): ابحث عن أنواع الصخور (نارية، رسوبية، متحولة).
                            </div>
                        </div>
                    )}

                    {activeSphere === 'hydro' && (
                        <div className="animate-slide-up">
                            <h3 className="text-xl font-black text-blue-600 mb-2 flex items-center gap-2"><Droplet/> ثالثاً: الغلاف المائي</h3>
                            <p className="text-slate-700 font-medium mb-3">يشمل جميع الموارد المائية (سائلة، صلبة، غازية).</p>
                            <p className="text-sm text-slate-600">مسؤول عن دورة الماء واستمرار الحياة.</p>
                        </div>
                    )}

                    {activeSphere === 'bio' && (
                        <div className="animate-slide-up">
                            <h3 className="text-xl font-black text-green-600 mb-2 flex items-center gap-2"><Globe/> رابعاً: الغلاف الحيوي</h3>
                            <p className="text-slate-700 font-medium mb-3">الحيز الذي تعيش فيه الكائنات الحية.</p>
                            <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                                <span className="bg-green-50 px-2 py-1 rounded">الإنسان</span>
                                <span className="bg-green-50 px-2 py-1 rounded">الحيوان</span>
                                <span className="bg-green-50 px-2 py-1 rounded">النبات</span>
                                <span className="bg-green-50 px-2 py-1 rounded">الكائنات الدقيقة</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Values (Page 21) */}
            <TextbookBox 
                type="value" 
                icon={Star} 
                title="قيمنا (ص ٢١)" 
                content="نستشعر إعجاز الله سبحانه وتعالى في خلق هذا الكون البديع."
            />
        </div>
    );
};

// --- PART 3: WATER CYCLE (Pages 23-24) ---
const WaterCycleSection = () => {
    const [step, setStep] = useState(0);

    return (
        <div className="space-y-10 animate-fade-in">
            {/* Definition & Chart (Page 23) */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <TextbookBox 
                        type="def" 
                        icon={RefreshCw} 
                        title="ما المقصود بدورة الماء؟ (ص ٢٣)" 
                        content="هي حركة الماء من سطح الأرض إلى الغلاف الجوي، ثم عودته مرة أخرى."
                    />
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-slate-200 flex items-center justify-around shadow-sm">
                    <div className="text-center">
                        <div className="relative w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center text-blue-800 font-black text-xl shadow-inner bg-blue-50">
                            71%
                        </div>
                        <p className="text-xs font-bold mt-2 text-slate-600">نسبة المياه</p>
                    </div>
                    <div className="text-center">
                        <div className="relative w-24 h-24 rounded-full border-4 border-amber-500 flex items-center justify-center text-amber-800 font-black text-xl shadow-inner bg-amber-50">
                            29%
                        </div>
                        <p className="text-xs font-bold mt-2 text-slate-600">نسبة اليابسة</p>
                    </div>
                </div>
            </div>

            {/* Water Cycle Simulation (Figure 3) */}
            <div className="bg-sky-100 rounded-3xl p-8 border-4 border-sky-300 relative overflow-hidden shadow-inner h-[400px]">
                {/* Sun */}
                <Sun size={60} className="absolute top-4 right-4 text-yellow-400 animate-spin-slow" />
                
                {/* Cloud */}
                <div className={`absolute top-10 left-1/3 transition-all duration-1000 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <Cloud size={80} className="text-white fill-white drop-shadow-xl" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-600 font-bold text-xs">تكاثف</span>
                </div>

                {/* Rain */}
                <div className={`absolute top-32 left-1/3 transition-all ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex gap-4 animate-bounce">
                        <Droplet className="text-blue-500 fill-blue-500" size={20}/>
                        <Droplet className="text-blue-500 fill-blue-500" size={20}/>
                    </div>
                    <span className="text-xs font-bold text-blue-800 block mt-1">تساقط</span>
                </div>

                {/* Mountains & Land */}
                <svg viewBox="0 0 400 200" className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
                    <path d="M0,200 L100,50 L200,200 Z" fill="#795548" />
                    <path d="M150,200 L250,80 L350,200 Z" fill="#8D6E63" />
                    <rect x="0" y="180" width="400" height="20" fill="#22C55E" opacity="0.3" /> {/* Land */}
                </svg>

                {/* Water Body (Sea) */}
                <div className="absolute bottom-0 right-0 w-full h-16 bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm z-10">تجمع المياه</span>
                </div>

                {/* Evaporation Arrow */}
                <div className={`absolute bottom-20 right-20 flex flex-col items-center transition-all duration-1000 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-red-500 font-bold text-lg rotate-180">⬆</div>
                    <div className="text-red-500 font-bold text-lg rotate-180">⬆</div>
                    <span className="text-xs font-bold text-red-700 bg-white/50 px-1 rounded">تبخر</span>
                </div>

                {/* Control Button */}
                <div className="absolute bottom-4 left-4 z-20">
                    <button 
                        onClick={() => setStep(s => s < 4 ? s + 1 : 0)}
                        className="bg-white text-sky-700 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                        {step === 0 ? "ابدأ الدورة" : step === 4 ? "إعادة" : "التالي"}
                    </button>
                </div>
            </div>

            {/* Values (Page 24) */}
            <TextbookBox 
                type="value" 
                icon={Star} 
                title="قيمنا (ص ٢٤)" 
                content="نحافظ على المياه، ولا نسرف في استخدامها."
            />
        </div>
    );
};

// --- MAIN COMPONENT ---
const EarthSpheresLesson1: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'solar' | 'spheres' | 'water' | 'quiz'>('solar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
      switch(activeSection) {
          case 'solar': return <SolarSystemSection />;
          case 'spheres': return <SpheresSection />;
          case 'water': return <WaterCycleSection />;
          case 'quiz': return <SectionQuiz questions={FIFTH_SPHERES_QUIZ} />;
          default: return <SolarSystemSection />;
      }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-blue-800 px-2">أغلفة كوكب الأرض 🌍</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
            <button onClick={() => { setActiveSection('solar'); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === 'solar' ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                <Sun size={20}/> المجموعة الشمسية (ص 17-20)
            </button>
            <button onClick={() => { setActiveSection('spheres'); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === 'spheres' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                <Layers size={20}/> أغلفة الأرض (ص 21-22)
            </button>
            <button onClick={() => { setActiveSection('water'); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === 'water' ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                <Cloud size={20}/> دورة الماء (ص 23-24)
            </button>
            <button onClick={() => { setActiveSection('quiz'); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === 'quiz' ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                <CheckCircle size={20}/> الاختبار
            </button>
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
           <span className="font-bold text-lg text-blue-800">أغلفة كوكب الأرض</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-8 px-4 md:px-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson1;
