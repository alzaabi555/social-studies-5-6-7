
import React, { useState } from 'react';
import { FIFTH_SPHERES_CONCEPT_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Sun, Globe, Menu, MessageCircle, HelpCircle, Check, X, Star } from 'lucide-react';

interface Props {
    onBack: () => void;
}

// 1. Dialogue Section (Textbook Page 17)
const DialogueSection = () => (
    <div className="bg-white rounded-3xl p-6 shadow-lg border-r-8 border-purple-400 mb-8 flex flex-col md:flex-row items-center gap-6 animate-fade-in">
        <div className="md:w-1/4 flex justify-center">
            {/* Visual representation of Fajr and Mother */}
            <div className="relative w-40 h-40">
                 <div className="absolute inset-0 bg-purple-100 rounded-full animate-pulse"></div>
                 <div className="absolute bottom-0 left-2 text-6xl">👩‍👧</div>
                 <div className="absolute top-0 right-0 text-4xl">🪟</div>
            </div>
        </div>
        <div className="md:w-3/4 space-y-4">
            <h3 className="font-black text-purple-900 mb-2">حوار استهلالي (كما ورد في الكتاب ص١٧)</h3>
            <div className="bg-purple-50 p-4 rounded-2xl rounded-tr-none border border-purple-100 relative">
                <span className="absolute -top-3 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded">الأم</span>
                <p className="text-slate-700 font-medium mt-2">"ماذا تشاهدين يا فجر؟ أراكِ تقفين عند النافذة منذ فترة."</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-2xl rounded-tl-none border border-amber-100 relative mr-8">
                <span className="absolute -top-3 left-4 bg-amber-600 text-white text-xs px-2 py-1 rounded">فجر</span>
                <p className="text-slate-700 font-medium mt-2">"أتأمل الشمس يا أمي، هل هي قريبة منا؟ وهل نحن الكوكب الوحيد الموجود في هذا الكون؟ وهل تعيش عليها كائنات حية مثلنا؟"</p>
            </div>
        </div>
    </div>
);

// 2. Solar System Visualization (Textbook Page 18 - Figure 1)
const SolarSystemViz = () => {
    // Planets data matching the textbook order and visuals
    const planets = [
        { name: 'عطارد', color: 'bg-stone-400', size: 'w-6 h-6', orbit: 'w-32 h-32', speed: '4s' },
        { name: 'الزهرة', color: 'bg-orange-300', size: 'w-8 h-8', orbit: 'w-48 h-48', speed: '6s' },
        { name: 'الأرض', color: 'bg-blue-500', size: 'w-9 h-9', orbit: 'w-64 h-64', speed: '8s' },
        { name: 'المريخ', color: 'bg-red-500', size: 'w-7 h-7', orbit: 'w-80 h-80', speed: '10s' },
        { name: 'المشتري', color: 'bg-orange-100', size: 'w-16 h-16', orbit: 'w-96 h-96', speed: '14s' },
        { name: 'زحل', color: 'bg-yellow-200', size: 'w-14 h-14', orbit: 'w-[28rem] h-[28rem]', speed: '18s' }, // Has rings
        { name: 'أورانوس', color: 'bg-cyan-300', size: 'w-10 h-10', orbit: 'w-[32rem] h-[32rem]', speed: '22s' },
        { name: 'نبتون', color: 'bg-blue-800', size: 'w-10 h-10', orbit: 'w-[36rem] h-[36rem]', speed: '26s' },
    ];

    return (
        <div className="bg-slate-900 rounded-3xl p-4 md:p-8 mb-8 overflow-hidden relative min-h-[600px] flex items-center justify-center shadow-2xl border-4 border-slate-700">
             {/* Galaxy Background */}
             <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
             
             {/* Info Box */}
             <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white text-xs z-20 border border-white/20">
                 <h3 className="font-bold text-yellow-400 mb-2 flex items-center gap-2"><Star size={14}/> المجموعة الشمسية (الشكل ١)</h3>
                 <p>تضم الشمس و 8 كواكب تدور حولها.</p>
                 <p className="mt-1 text-slate-300">مركز المجموعة: الشمس ☀️</p>
             </div>

             {/* Sun */}
             <div className="absolute w-24 h-24 bg-yellow-500 rounded-full shadow-[0_0_80px_rgba(253,224,71,0.6)] z-10 flex items-center justify-center animate-pulse">
                 <span className="text-white font-black text-sm">الشمس</span>
             </div>

             {/* Planets Orbits & Planets */}
             {planets.map((planet, idx) => (
                 <div 
                    key={idx}
                    className="absolute rounded-full border border-white/10 flex items-center justify-center pointer-events-none"
                    style={{ 
                        width: planet.orbit.includes('[') ? undefined : undefined, // Tailwind arbitrary values handling in class
                        height: planet.orbit.includes('[') ? undefined : undefined,
                        animation: `spin ${planet.speed} linear infinite`
                    }}
                 >
                     {/* The Orbit Ring */}
                     <div className={`absolute border border-white/10 rounded-full ${planet.orbit}`}></div>

                     {/* The Planet Container (Rotates) */}
                     <div 
                        className={`absolute inset-0 ${planet.orbit} animate-[spin_${planet.speed}_linear_infinite]`}
                     >
                         {/* The Planet Itself (Positioned at top of orbit) */}
                         <div 
                            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${planet.color} ${planet.size} rounded-full shadow-lg pointer-events-auto cursor-pointer hover:scale-150 transition-transform group z-10`}
                         >
                             {/* Saturn Rings Special Case */}
                             {planet.name === 'زحل' && (
                                 <div className="absolute inset-0 border-4 border-yellow-100/50 rounded-full w-[140%] h-[40%] top-[30%] -left-[20%] -rotate-12"></div>
                             )}
                             
                             {/* Label Tooltip */}
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                                 {planet.name}
                             </div>
                         </div>
                     </div>
                 </div>
             ))}
        </div>
    );
};

// 3. Activity Table (Textbook Page 19)
const ActivityTable = () => {
    const [inputs, setInputs] = useState(['', '', '', '']);
    const answers = ['عطارد', 'المشتري', 'الأرض', 'زحل']; // Answers based on Page 18 diagram
    const [status, setStatus] = useState<('correct' | 'wrong' | null)[]>([null, null, null, null]);

    const checkAnswer = (idx: number, val: string) => {
        const newInputs = [...inputs];
        newInputs[idx] = val;
        setInputs(newInputs);

        const newStatus = [...status];
        if (val === answers[idx]) newStatus[idx] = 'correct';
        else if (val !== '') newStatus[idx] = 'wrong';
        else newStatus[idx] = null;
        setStatus(newStatus);
    };

    return (
        <div className="bg-amber-50 p-6 rounded-3xl border-2 border-amber-200 mb-8">
            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <MessageCircle /> تأمل وأجب (نشاط صفحة ١٩)
            </h3>
            <p className="text-slate-600 mb-4 text-sm">بالرجوع إلى الشكل (١)، أكمل الجدول الآتي:</p>
            
            <div className="overflow-x-auto">
                <table className="w-full text-center bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-amber-200 text-amber-900">
                        <tr>
                            <th className="p-4 border-l border-amber-100">العبارة</th>
                            <th className="p-4 border-l border-amber-100">اسم الكوكب</th>
                            <th className="p-4">التحقق</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-50">
                        <tr>
                            <td className="p-4 text-slate-700 font-bold text-right">الكوكب الأقرب إلى الشمس</td>
                            <td className="p-4">
                                <select 
                                    className="bg-slate-50 border-2 border-slate-200 rounded-lg p-2 w-full font-medium focus:border-amber-400 outline-none"
                                    onChange={(e) => checkAnswer(0, e.target.value)}
                                >
                                    <option value="">اختر...</option>
                                    <option value="الأرض">الأرض</option>
                                    <option value="عطارد">عطارد</option>
                                    <option value="نبتون">نبتون</option>
                                </select>
                            </td>
                            <td className="p-4">
                                {status[0] === 'correct' && <Check className="mx-auto text-green-500 animate-bounce" />}
                                {status[0] === 'wrong' && <X className="mx-auto text-red-500 animate-pulse" />}
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 text-slate-700 font-bold text-right">الكوكب الأكبر في المجموعة الشمسية</td>
                            <td className="p-4">
                                <select 
                                    className="bg-slate-50 border-2 border-slate-200 rounded-lg p-2 w-full font-medium focus:border-amber-400 outline-none"
                                    onChange={(e) => checkAnswer(1, e.target.value)}
                                >
                                    <option value="">اختر...</option>
                                    <option value="المشتري">المشتري</option>
                                    <option value="زحل">زحل</option>
                                    <option value="الشمس">الشمس</option>
                                </select>
                            </td>
                            <td className="p-4">
                                {status[1] === 'correct' && <Check className="mx-auto text-green-500 animate-bounce" />}
                                {status[1] === 'wrong' && <X className="mx-auto text-red-500 animate-pulse" />}
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 text-slate-700 font-bold text-right">الكوكب الثالث في ترتيب المجموعة</td>
                            <td className="p-4">
                                <select 
                                    className="bg-slate-50 border-2 border-slate-200 rounded-lg p-2 w-full font-medium focus:border-amber-400 outline-none"
                                    onChange={(e) => checkAnswer(2, e.target.value)}
                                >
                                    <option value="">اختر...</option>
                                    <option value="الزهرة">الزهرة</option>
                                    <option value="الأرض">الأرض</option>
                                    <option value="المريخ">المريخ</option>
                                </select>
                            </td>
                            <td className="p-4">
                                {status[2] === 'correct' && <Check className="mx-auto text-green-500 animate-bounce" />}
                                {status[2] === 'wrong' && <X className="mx-auto text-red-500 animate-pulse" />}
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 text-slate-700 font-bold text-right">الكوكب الذي يتميز بوجود حلقات حوله</td>
                            <td className="p-4">
                                <select 
                                    className="bg-slate-50 border-2 border-slate-200 rounded-lg p-2 w-full font-medium focus:border-amber-400 outline-none"
                                    onChange={(e) => checkAnswer(3, e.target.value)}
                                >
                                    <option value="">اختر...</option>
                                    <option value="أورانوس">أورانوس</option>
                                    <option value="زحل">زحل</option>
                                    <option value="نبتون">نبتون</option>
                                </select>
                            </td>
                            <td className="p-4">
                                {status[3] === 'correct' && <Check className="mx-auto text-green-500 animate-bounce" />}
                                {status[3] === 'wrong' && <X className="mx-auto text-red-500 animate-pulse" />}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {/* Think & Discuss (Page 19) */}
            <div className="mt-6 bg-white p-6 rounded-2xl border-r-4 border-indigo-500 shadow-sm">
                <h4 className="font-bold text-indigo-900 mb-3 text-lg">فكر وناقش:</h4>
                <ul className="space-y-3 text-slate-700 list-disc list-inside font-medium">
                    <li>
                        سبب تسمية كوكب الأرض (الكوكب المائي)؟ 
                        <span className="block text-indigo-600 text-sm mt-1 mr-6 font-bold bg-indigo-50 p-2 rounded w-fit">لأن الماء يغطي ٧١٪ من مساحته.</span>
                    </li>
                    <li>
                        سبب البرودة الشديدة على كوكب نبتون؟ 
                        <span className="block text-indigo-600 text-sm mt-1 mr-6 font-bold bg-indigo-50 p-2 rounded w-fit">لأنه أبعد الكواكب عن الشمس.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const EarthSpheresLesson1: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'intro' | 'system' | 'activity' | 'quiz'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">أغلفة كوكب الأرض 🌍</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'intro' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <MessageCircle size={20}/> الحوار الافتتاحي (ص١٧)
          </button>
          <button onClick={() => {setActiveSection('system'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'system' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Sun size={20}/> المجموعة الشمسية (ص١٨)
          </button>
          <button onClick={() => {setActiveSection('activity'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'activity' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <HelpCircle size={20}/> نشاط تأمل وأجب (ص١٩)
          </button>
          <button onClick={() => {setActiveSection('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'quiz' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Check size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
           <span className="font-bold text-lg text-indigo-800">الدرس الأول</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeSection === 'intro' && <DialogueSection />}
            {activeSection === 'system' && <SolarSystemViz />}
            {activeSection === 'activity' && <ActivityTable />}
            {activeSection === 'quiz' && <SectionQuiz questions={FIFTH_SPHERES_CONCEPT_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson1;
