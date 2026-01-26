
import React, { useState } from 'react';
import { FIFTH_RESOURCES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { 
    ArrowRight, Sun, Wind, Droplet, Flame, Pickaxe, Menu, 
    CheckCircle, Leaf, Zap, Battery, Globe, BarChart3, 
    Lightbulb, Crown, BookOpen, Wheat, CloudRain, RotateCcw,
    AlertTriangle, Factory, Fish, Coins
} from 'lucide-react';

interface Props {
    onBack: () => void;
}

// --- 1. INTRO & DEFINITION (Pages 35-37) ---
const IntroSection = () => {
    const [flipped, setFlipped] = useState<number | null>(null);

    const definitions = [
        { 
            id: 1, 
            title: 'الموارد الطبيعية', 
            icon: <Leaf size={40} className="text-green-600"/>,
            content: 'هي كل ما يوجد في الطبيعة من ثروات، خلقها الله تعالى لخدمة الإنسان، دون أن يتدخل الإنسان في إيجادها. (مثل: الشمس، الماء، التربة، النفط).',
            color: 'bg-green-50 border-green-200'
        },
        { 
            id: 2, 
            title: 'الموارد المتجددة', 
            icon: <RotateCcw size={40} className="text-blue-600"/>,
            content: 'هي التي تتوفر باستمرار من خلال العمليات التي تحدث في أغلفة كوكب الأرض. (مثل: الشمس، الرياح).',
            color: 'bg-blue-50 border-blue-200'
        },
        { 
            id: 3, 
            title: 'الموارد غير المتجددة', 
            icon: <Battery size={40} className="text-orange-600"/>,
            content: 'هي الموجودة بكميات محدودة في الأرض وتنفد مع استهلاكها. (مثل: النفط، الغاز، المعادن).',
            color: 'bg-orange-50 border-orange-200'
        }
    ];

    return (
        <div className="p-6 animate-fade-in space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-slate-800 mb-2">مفهوم الموارد الطبيعية وأنواعها</h2>
                <p className="text-slate-500">اضغط على البطاقات لتقليبها ومعرفة التعريفات</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {definitions.map((def) => (
                    <div 
                        key={def.id}
                        className="relative h-64 perspective-1000 cursor-pointer group"
                        onClick={() => setFlipped(flipped === def.id ? null : def.id)}
                    >
                        <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${flipped === def.id ? 'rotate-y-180' : ''}`}>
                            {/* Front */}
                            <div className={`absolute w-full h-full backface-hidden rounded-3xl shadow-lg border-b-8 p-6 flex flex-col items-center justify-center text-center ${def.color} ${flipped === def.id ? 'border-transparent' : 'border-slate-200'}`}>
                                <div className="bg-white p-4 rounded-full shadow-sm mb-4">{def.icon}</div>
                                <h3 className="text-xl font-black text-slate-800">{def.title}</h3>
                                <p className="text-xs text-slate-400 mt-4 font-bold">اضغط للعرض</p>
                            </div>

                            {/* Back */}
                            <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-3xl shadow-xl p-6 flex items-center justify-center text-center bg-white border-2 ${def.color}`}>
                                <p className="text-lg font-medium text-slate-700 leading-relaxed">
                                    {def.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Info Box (Page 37) */}
            <div className="bg-indigo-50 rounded-2xl p-6 border-l-4 border-indigo-500 shadow-sm flex items-start gap-4 mt-8">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 hidden md:block">
                    <Lightbulb size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">معلومة تهمك (ص ٣٧)</h4>
                    <p className="text-indigo-800 text-sm leading-relaxed">
                        يوجد نوعان من الموارد المتجددة:
                        <br/>
                        <span className="font-bold">• تتجدد بسرعة:</span> مثل المياه الجوفية، والثروة الحيوانية والسمكية.
                        <br/>
                        <span className="font-bold">• تحتاج فترة طويلة لتتجدد:</span> مثل التربة، وأشجار الغابات المقطوعة.
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- 2. CLASSIFICATION ACTIVITY (Pages 36-37) ---
const ResourcesTypes = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'الشمس', type: 'renew', icon: <Sun/> },
        { id: 2, name: 'النفط', type: 'non-renew', icon: <Flame/> },
        { id: 3, name: 'الرياح', type: 'renew', icon: <Wind/> },
        { id: 4, name: 'الغاز الطبيعي', type: 'non-renew', icon: <CloudRain className="text-slate-400"/> }, // Repurposed icon
        { id: 5, name: 'النباتات', type: 'renew', icon: <Leaf/> },
        { id: 6, name: 'المعادن', type: 'non-renew', icon: <Pickaxe/> },
    ]);
    
    const [classified, setClassified] = useState<{[key:number]: string}>({});

    const handleSort = (item: any, bucket: string) => {
        if (item.type === bucket) {
            setClassified(prev => ({...prev, [item.id]: 'correct'}));
        } else {
            // Shake effect logic could go here
            alert("حاول مرة أخرى! تأكد من نوع المورد.");
        }
    };

    return (
        <div className="p-6 animate-fade-in space-y-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-slate-800">نشاط: صنف الموارد (الشكل ١٠)</h2>
                <p className="text-slate-500">اسحب أو اضغط لتصنيف الموارد إلى متجددة وغير متجددة</p>
            </div>

            {/* Unsorted Items */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 min-h-[80px]">
                {items.map(item => !classified[item.id] && (
                    <div key={item.id} className="bg-white px-4 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-2 animate-bounce cursor-grab active:cursor-grabbing">
                        {item.icon}
                        <span className="font-bold">{item.name}</span>
                    </div>
                ))}
                {Object.keys(classified).length === items.length && (
                    <div className="text-green-600 font-black text-xl animate-pulse">أحسنت! أكملت التصنيف بنجاح 🎉</div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Renewable Bucket */}
                <div className="bg-green-50 rounded-3xl border-4 border-dashed border-green-300 p-6 min-h-[300px]">
                    <div className="text-center mb-4">
                        <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <RefreshIcon />
                        </div>
                        <h3 className="font-black text-green-800 text-lg">موارد متجددة</h3>
                        <p className="text-xs text-green-600">تتجدد باستمرار ولا تنفد</p>
                    </div>
                    
                    <div className="space-y-2">
                        {/* Simulation of dropping area */}
                        {items.filter(i => classified[i.id] && i.type === 'renew').map(i => (
                            <div key={i.id} className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3 text-green-700 font-bold animate-scale-in">
                                {i.icon} {i.name}
                            </div>
                        ))}
                        {/* Buttons for interaction */}
                        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-green-200">
                            {items.map(item => !classified[item.id] && (
                                <button key={item.id} onClick={() => handleSort(item, 'renew')} className="bg-white hover:bg-green-100 text-slate-600 text-xs py-2 rounded border border-slate-200">
                                    أضف {item.name} هنا
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Non-Renewable Bucket */}
                <div className="bg-orange-50 rounded-3xl border-4 border-dashed border-orange-300 p-6 min-h-[300px]">
                    <div className="text-center mb-4">
                        <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <Battery />
                        </div>
                        <h3 className="font-black text-orange-800 text-lg">موارد غير متجددة</h3>
                        <p className="text-xs text-orange-600">كميات محدودة وتنفد</p>
                    </div>

                    <div className="space-y-2">
                        {items.filter(i => classified[i.id] && i.type === 'non-renew').map(i => (
                            <div key={i.id} className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3 text-orange-700 font-bold animate-scale-in">
                                {i.icon} {i.name}
                            </div>
                        ))}
                        {/* Buttons for interaction */}
                        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-orange-200">
                            {items.map(item => !classified[item.id] && (
                                <button key={item.id} onClick={() => handleSort(item, 'non-renew')} className="bg-white hover:bg-orange-100 text-slate-600 text-xs py-2 rounded border border-slate-200">
                                    أضف {item.name} هنا
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 3. OMAN MAP & ACTIVITY (Page 38) ---
const OmanMapActivity = () => {
    const [selectedGov, setSelectedGov] = useState<string | null>(null);
    const [tableData, setTableData] = useState<{[key:string]: {resource: string, type: string}}>({});

    // Simplified resources map
    const governorates = [
        { id: 'muscat', name: 'مسقط', resource: 'طاقة شمسية / أسماك', type: 'متجدد' },
        { id: 'dhofar', name: 'ظفار', resource: 'طاقة رياح / لبان', type: 'متجدد' },
        { id: 'wusta', name: 'الوسطى', resource: 'نفط / غاز', type: 'غير متجدد' },
        { id: 'batinah', name: 'الباطنة', resource: 'نحاس / زراعة', type: 'مختلط' },
    ];

    const handleGovClick = (gov: typeof governorates[0]) => {
        setSelectedGov(gov.id);
        setTableData(prev => ({...prev, [gov.id]: {resource: gov.resource, type: gov.type}}));
    };

    return (
        <div className="p-6 animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-black text-slate-800 mb-2">نشاط الخريطة (صفحة ٣٨)</h2>
                <p className="text-slate-500">اضغط على المحافظات في الخريطة لإكمال الجدول</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Interactive Map Placeholder */}
                <div className="w-full md:w-1/2 bg-blue-50 rounded-3xl h-80 relative overflow-hidden border-4 border-white shadow-lg">
                    {/* SVG Map of Oman (Simplified representation) */}
                    <svg viewBox="0 0 300 400" className="w-full h-full">
                        <path d="M150,50 L200,80 L180,300 L100,350 L50,200 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                        
                        {/* Interactive Points */}
                        {governorates.map(gov => (
                            <g key={gov.id} onClick={() => handleGovClick(gov)} className="cursor-pointer hover:opacity-80">
                                <circle 
                                    cx={gov.id === 'muscat' ? 200 : gov.id === 'dhofar' ? 100 : gov.id === 'wusta' ? 150 : 180} 
                                    cy={gov.id === 'muscat' ? 80 : gov.id === 'dhofar' ? 320 : gov.id === 'wusta' ? 200 : 100} 
                                    r="15" 
                                    fill={selectedGov === gov.id ? "#16a34a" : "#3b82f6"} 
                                    className="transition-colors"
                                />
                                <text 
                                    x={gov.id === 'muscat' ? 200 : gov.id === 'dhofar' ? 100 : gov.id === 'wusta' ? 150 : 180} 
                                    y={gov.id === 'muscat' ? 85 : gov.id === 'dhofar' ? 325 : gov.id === 'wusta' ? 205 : 105} 
                                    fontSize="10" 
                                    fill="white" 
                                    textAnchor="middle" 
                                    fontWeight="bold"
                                >
                                    {gov.name}
                                </text>
                            </g>
                        ))}
                    </svg>
                </div>

                {/* The Table */}
                <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <table className="w-full text-right">
                        <thead className="bg-slate-800 text-white">
                            <tr>
                                <th className="p-4">المحافظة</th>
                                <th className="p-4">اسم المورد</th>
                                <th className="p-4">نوعه</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {governorates.map(gov => (
                                <tr key={gov.id} className={selectedGov === gov.id ? "bg-green-50" : ""}>
                                    <td className="p-4 font-bold text-slate-700">{gov.name}</td>
                                    <td className="p-4 text-slate-600">
                                        {tableData[gov.id] ? (
                                            <span className="animate-fade-in font-bold text-indigo-600">{tableData[gov.id].resource}</span>
                                        ) : (
                                            <span className="text-slate-300 text-xs">...</span>
                                        )}
                                    </td>
                                    <td className="p-4 text-slate-600">
                                        {tableData[gov.id] ? (
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${tableData[gov.id].type === 'متجدد' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                                                {tableData[gov.id].type}
                                            </span>
                                        ) : (
                                            <span className="text-slate-300 text-xs">...</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// --- 4. ECONOMIC IMPORTANCE (Page 39) ---
const EconomicImportance = () => {
    return (
        <div className="p-6 animate-fade-in space-y-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-slate-800 mb-2">الأهمية الاقتصادية للموارد (الشكل ١١)</h2>
                <p className="text-slate-500">تعد الموارد عنصراً مهماً في النشاط الاقتصادي للدولة</p>
            </div>

            {/* Interactive Flow Diagram */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                    
                    {/* Energy */}
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors shadow-md">
                            <Flame size={40} className="text-cyan-600 group-hover:text-white" />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">إنتاج الطاقة</h4>
                        <p className="text-xs text-slate-500 text-center">النفط والغاز لتشغيل المصانع والكهرباء</p>
                    </div>

                    {/* Food */}
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors shadow-md">
                            <Wheat size={40} className="text-green-600 group-hover:text-white" />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">الغذاء</h4>
                        <p className="text-xs text-slate-500 text-center">الزراعة والأسماك والثروة الحيوانية</p>
                    </div>

                    {/* Industry */}
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors shadow-md">
                            <Factory size={40} className="text-purple-600 group-hover:text-white" />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">مواد خام للصناعة</h4>
                        <p className="text-xs text-slate-500 text-center">المعادن والأخشاب والمنتجات الزراعية</p>
                    </div>

                    {/* Income */}
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors shadow-md">
                            <Coins size={40} className="text-yellow-600 group-hover:text-white" />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">مصدر للدخل</h4>
                        <p className="text-xs text-slate-500 text-center">تصدير الفائض يجلب العملة الصعبة</p>
                    </div>
                </div>

                {/* Connecting Line */}
                <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-100 -z-0 hidden md:block"></div>
            </div>

            {/* Think & Discuss (Page 39) */}
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <Lightbulb className="text-amber-600"/> فكر وناقش (ص ٣٩)
                </h3>
                <p className="text-amber-800 text-sm mb-4">
                    أهمية الموارد الطبيعية كمصدر دخل للفرد والمجتمع؟
                </p>
                <div className="bg-white p-4 rounded-xl text-slate-700 text-sm shadow-sm">
                    <strong>الإجابة:</strong> توفر فرص عمل (رواتب)، وتدعم ميزانية الدولة لإنشاء المدارس والمستشفيات والطرق.
                </div>
            </div>
        </div>
    );
};

// --- 5. SUSTAINABILITY & EFFORTS (Pages 40-41) ---
const OmanEfforts = () => (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Definition: Sustainability */}
        <div className="bg-green-600 text-white p-8 rounded-3xl text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-2xl font-black mb-4">ما المقصود باستدامة الموارد الطبيعية؟</h2>
                <p className="text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                    "هي استعمال الموارد الطبيعية بشكل متوازن للحفاظ عليها، وضمان استمرار الحياة."
                </p>
            </div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')] opacity-20"></div>
        </div>

        {/* Oman Efforts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-8 border-green-500">
                <h4 className="font-bold text-lg text-slate-800 mb-2">1. الاستفادة من المتجددة</h4>
                <p className="text-sm text-slate-600">التوسع في استخدام الطاقة الشمسية وطاقة الرياح.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-8 border-orange-500">
                <h4 className="font-bold text-lg text-slate-800 mb-2">2. تقليل الاعتماد</h4>
                <p className="text-sm text-slate-600">تقليل الاعتماد على الموارد غير المتجددة (النفط) وتنويع الاقتصاد.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-8 border-blue-500">
                <h4 className="font-bold text-lg text-slate-800 mb-2">3. وضع القوانين</h4>
                <p className="text-sm text-slate-600">سن التشريعات للمحافظة على البيئة والحد من استنزاف الموارد.</p>
            </div>
        </div>

        {/* Royal Spotlight & Achievements (Page 41) */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl"></div>
            
            <div className="flex-1 relative z-10">
                <div className="inline-block bg-yellow-500/20 px-4 py-1 rounded-full text-yellow-300 text-xs font-bold mb-4 border border-yellow-500/50">إضاءات سلطانية</div>
                <p className="text-lg font-serif italic leading-loose">
                    "سنعمل على ... توزيع عادل لمقدرات التنمية بين المحافظات، وحماية مواردنا الطبيعية وبيئتنا المتفردة."
                </p>
                <p className="mt-2 text-sm text-indigo-200 font-bold">- السلطان هيثم بن طارق حفظه الله -</p>
            </div>

            <div className="md:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 relative z-10">
                <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2"><Crown size={18}/> منجز عماني</h4>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Wind className="text-emerald-400" />
                        <div>
                            <span className="block font-bold text-sm">محطة ظفار لطاقة الرياح</span>
                            <span className="text-xs text-slate-300">لتوليد الكهرباء (2019م)</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Sun className="text-yellow-400" />
                        <div>
                            <span className="block font-bold text-sm">محطة عبري للطاقة الشمسية</span>
                            <span className="text-xs text-slate-300">أكبر مشروع للطاقة الشمسية</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- 6. STORY OF YUSUF (Page 43) ---
const StorySection = () => {
    const [storyStep, setStoryStep] = useState(0);

    return (
        <div className="p-6 animate-fade-in space-y-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-amber-900 mb-2">اقرأ واستمتع: قصة النبي يوسف (عليه السلام)</h2>
                <p className="text-amber-700">درس في إدارة الموارد والاستدامة من القرآن الكريم</p>
            </div>

            <div className="max-w-3xl mx-auto bg-[#fff8e1] rounded-3xl shadow-xl border-4 border-[#d4b483] p-8 relative">
                {/* Book Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#d4b483] rounded-b-xl flex items-center justify-center">
                    <BookOpen size={20} className="text-amber-900" />
                </div>

                <div className="mt-6 text-center">
                    {storyStep === 0 && (
                        <div className="animate-fade-in">
                            <h3 className="text-xl font-bold text-amber-900 mb-4">الرؤيا العجيبة</h3>
                            <p className="text-lg text-amber-800 leading-loose">
                                رأى ملك مصر في منامه سبع بقرات سمان تأكلهن سبع عجاف، وسبع سنبلات خضر وأخر يابسات.
                                <br/>
                                عجز المفسرون عن تأويلها، فتذكروا يوسف عليه السلام في السجن.
                            </p>
                            <div className="mt-6 text-6xl">🐄🌾</div>
                        </div>
                    )}
                    {storyStep === 1 && (
                        <div className="animate-fade-in">
                            <h3 className="text-xl font-bold text-amber-900 mb-4">التفسير والخطة (الاستدامة)</h3>
                            <p className="text-lg text-amber-800 leading-loose">
                                فسرها يوسف بأن مصر ستمر بـ 7 سنوات خصب (رخاء) تليها 7 سنوات قحط (جفاف).
                                <br/>
                                <strong>الخطة:</strong> "فما حصدتم فذروه في سنبله" (حفظ الموارد وترشيد الاستهلاك في سنوات الرخاء لتكفي سنوات الشدة).
                            </p>
                            <div className="mt-6 text-6xl">📉📈</div>
                        </div>
                    )}
                    {storyStep === 2 && (
                        <div className="animate-fade-in">
                            <h3 className="text-xl font-bold text-amber-900 mb-4">النتيجة والدروس</h3>
                            <p className="text-lg text-amber-800 leading-loose">
                                نجت مصر من المجاعة بفضل حسن إدارة الموارد.
                                <br/>
                                عين الملك يوسف وزيراً للخزينة (وزيراً للموارد) نظراً لحكمته وعلمه.
                                <br/>
                                <strong>الدرس المستفاد:</strong> التخطيط للمستقبل وحفظ النعم (الاستدامة).
                            </p>
                            <div className="mt-6 text-6xl">👑✅</div>
                        </div>
                    )}
                </div>

                <div className="flex justify-center mt-8 gap-4">
                    <button 
                        onClick={() => setStoryStep(Math.max(0, storyStep - 1))}
                        disabled={storyStep === 0}
                        className="px-6 py-2 rounded-full bg-[#d4b483] text-amber-900 font-bold disabled:opacity-50"
                    >
                        السابق
                    </button>
                    <button 
                        onClick={() => setStoryStep(Math.min(2, storyStep + 1))}
                        disabled={storyStep === 2}
                        className="px-6 py-2 rounded-full bg-amber-700 text-white font-bold disabled:opacity-50"
                    >
                        التالي
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const NaturalResourcesLesson: React.FC<Props> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState<'intro' | 'types' | 'map' | 'economy' | 'oman' | 'story' | 'quiz'>('intro');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-amber-50 text-right font-tajawal">
            <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-amber-100 flex flex-col`}>
                <div className="p-4 border-b border-amber-100 pt-[max(1rem,env(safe-area-inset-top))]">
                    <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
                        <ArrowRight size={16} /> العودة للمكتبة
                    </button>
                    <h1 className="text-xl font-black text-amber-700 px-2">الموارد الطبيعية 💎</h1>
                </div>
                <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
                    <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <Leaf size={20}/> المفهوم والأهمية
                    </button>
                    <button onClick={() => {setActiveTab('types'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'types' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <Battery size={20}/> أنواع الموارد (لعبة)
                    </button>
                    <button onClick={() => {setActiveTab('map'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'map' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <Globe size={20}/> خريطة الموارد
                    </button>
                    <button onClick={() => {setActiveTab('economy'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'economy' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <BarChart3 size={20}/> الأهمية الاقتصادية
                    </button>
                    <button onClick={() => {setActiveTab('oman'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'oman' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <Zap size={20}/> جهود السلطنة
                    </button>
                    <button onClick={() => {setActiveTab('story'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'story' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <BookOpen size={20}/> قصة يوسف (ع)
                    </button>
                    <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <CheckCircle size={20}/> الاختبار
                    </button>
                </nav>
            </aside>
            
            <main className="flex-1 min-h-screen overflow-y-auto">
                <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
                    <span className="font-bold text-lg text-amber-800">الموارد الطبيعية</span>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
                </header>
                
                <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
                    {activeTab === 'intro' && <IntroSection />}
                    {activeTab === 'types' && <ResourcesTypes />}
                    {activeTab === 'map' && <OmanMapActivity />}
                    {activeTab === 'economy' && <EconomicImportance />}
                    {activeTab === 'oman' && <OmanEfforts />}
                    {activeTab === 'story' && <StorySection />}
                    {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_RESOURCES_QUIZ} />}
                </div>
            </main>
        </div>
    );
};

const RefreshIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
    </svg>
);

export default NaturalResourcesLesson;
