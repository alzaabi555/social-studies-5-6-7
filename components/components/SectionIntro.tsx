import React, { useState } from 'react';
import { CloudSun, Anchor, Target, BookOpen, Compass } from 'lucide-react';

const SectionIntro: React.FC = () => {
  const [decision, setDecision] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8 p-6 animate-fade-in">
      
      {/* Learning Objectives Section */}
      <div className="bg-indigo-50 border-r-4 border-indigo-600 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2 mb-4">
          <Target className="text-indigo-600" />
          أهداف الدرس: بنهاية هذا الدرس ستكون قادراً على أن:
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-indigo-800 font-medium">
            <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center text-sm">1</span>
                تميز بدقة بين مفهومي الطقس والمناخ.
            </li>
            <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center text-sm">2</span>
                تعدد عناصر الطقس المختلفة وتذكر أدوات قياسها.
            </li>
            <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center text-sm">3</span>
                تستنتج العوامل المؤثرة في مناخ أي منطقة.
            </li>
            <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center text-sm">4</span>
                تربط بين الظواهر الجوية وحياتنا اليومية.
            </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mt-8">
        <div className="mb-2 bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-bold">
            نشاط استهلالي
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">قصة عبد الله ورحلة الصيد</h2>
        
        {/* Safe SVG Cartoon Illustration for Fishing Boat */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 border-4 border-sky-100 w-full h-64 md:h-80 bg-sky-200">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Sky */}
            <rect width="800" height="400" fill="#BAE6FD" />
            <circle cx="700" cy="80" r="40" fill="#FDE047" opacity="0.8" /> {/* Sun */}
            
            {/* Clouds */}
            <path d="M100,100 Q120,80 140,100 T180,100 T220,100" fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" opacity="0.8"/>
            <path d="M500,150 Q520,130 540,150 T580,150 T620,150" fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" opacity="0.6"/>

            {/* Sea */}
            <path d="M0,250 Q200,220 400,250 T800,250 V400 H0 Z" fill="#0EA5E9" />
            <path d="M0,280 Q200,250 400,280 T800,280 V400 H0 Z" fill="#0284C7" opacity="0.5"/>

            {/* Boat */}
            <g transform="translate(350, 210)">
                <path d="M-60,0 L60,0 L40,40 H-40 Z" fill="#78350F" /> {/* Hull */}
                <rect x="-5" y="-60" width="10" height="60" fill="#451A03" /> {/* Mast */}
                <path d="M5,-55 L50,-10 L5,-10 Z" fill="#F87171" /> {/* Sail */}
                <circle cx="-30" cy="10" r="10" fill="#1E293B" /> {/* Abdallah Head */}
                <path d="M-30,20 L-30,30" stroke="#1E293B" strokeWidth="4" />
            </g>

            {/* Fishing Line */}
             <path d="M380,220 Q450,200 450,260" fill="none" stroke="#94A3B8" strokeWidth="2" />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-right">
            <p className="text-lg md:text-xl font-light leading-relaxed">
              "قرر عبد الله وأصدقاؤه الخروج في رحلة صيد بحرية <span className="text-amber-300 font-bold">غداً صباحاً</span>. 
              المعدات جاهزة، والقارب مستعد، ولكن هناك أمر هام جداً قد يحدد مصير الرحلة وسلامتهم."
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 w-full">
            <p className="text-xl text-slate-700 font-medium mb-6">
            لكي يقرر عبد الله هل يخرج للبحر غداً أم يؤجل الرحلة، عن ماذا يجب أن يبحث؟
            </p>

            {!decision ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                onClick={() => setDecision('weather')}
                className="group p-6 bg-sky-50 hover:bg-sky-500 border-2 border-sky-200 rounded-xl transition-all duration-300 flex flex-col items-center gap-3"
                >
                <CloudSun size={48} className="text-sky-500 group-hover:text-white" />
                <span className="text-lg font-bold text-sky-800 group-hover:text-white">حالة الطقس (غداً)</span>
                <span className="text-sm text-sky-600 group-hover:text-sky-100">درجة الحرارة، سرعة الرياح، وارتفاع الموج ليوم محدد.</span>
                </button>

                <button 
                onClick={() => setDecision('climate')}
                className="group p-6 bg-teal-50 hover:bg-teal-600 border-2 border-teal-200 rounded-xl transition-all duration-300 flex flex-col items-center gap-3"
                >
                <BookOpen size={48} className="text-teal-600 group-hover:text-white" />
                <span className="text-lg font-bold text-teal-800 group-hover:text-white">بيانات المناخ (التاريخية)</span>
                <span className="text-sm text-teal-600 group-hover:text-teal-100">معدل سقوط الأمطار في هذا الشهر للسنوات العشر الماضية.</span>
                </button>
            </div>
            ) : (
            <div className="animate-slide-up">
                <div className={`p-6 rounded-xl border-2 ${decision === 'weather' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} mb-4`}>
                    {decision === 'weather' ? (
                    <div className="flex items-start gap-4">
                        <div className="bg-green-500 p-2 rounded-full text-white mt-1"><CheckIcon /></div>
                        <div className="text-right">
                            <h3 className="text-2xl font-bold text-green-800 mb-2">إجابة ممتازة! ✅</h3>
                            <p className="text-green-900 text-lg leading-relaxed">
                            أحسنت الاختيار. عبد الله يحتاج لمعرفة حالة الجو <strong>لفترة قصيرة (غداً)</strong> ومكان محدد، وهذا هو تعريف <strong>الطقس</strong>.
                            الطقس يخبرنا هل الجو مناسب للصيد، هل هناك عواصف أو أمواج عالية تهدد سلامتهم غداً.
                            </p>
                        </div>
                    </div>
                    ) : (
                    <div className="flex items-start gap-4">
                         <div className="bg-red-500 p-2 rounded-full text-white mt-1"><XIcon /></div>
                         <div className="text-right">
                            <h3 className="text-2xl font-bold text-red-800 mb-2">إجابة غير دقيقة ❌</h3>
                            <p className="text-red-900 text-lg leading-relaxed">
                            المناخ يعطينا فكرة عامة عن حالة الجو لسنوات طويلة (مثلاً: هذا الشهر عادةً ممطر)، لكنه لا يخبرنا ماذا سيحدث <strong>غداً بالتحديد</strong>.
                            لرحلة قصيرة، نحتاج لمعلومات آنية ومحددة.
                            </p>
                            <button 
                            onClick={() => setDecision(null)}
                            className="mt-4 px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg hover:bg-red-50 font-bold"
                            >
                            حاول مرة أخرى
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>;
const XIcon = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>;

export default SectionIntro;