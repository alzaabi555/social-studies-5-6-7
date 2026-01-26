
import React, { useState } from 'react';
import { FIFTH_OMAN_PERSONALITIES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Star, Users, MapPin, MessageCircle, BookOpen, Crown, Lightbulb, Search, Check, Mic, Feather, Menu } from 'lucide-react';

interface Props {
    onBack: () => void;
}

// --- 1. INTRO: STARS OF OMAN ---
const IntroStars = () => {
    return (
        <div className="text-center p-8 space-y-6 animate-fade-in">
            <h2 className="text-3xl font-black text-purple-900">نجوم في سماء التاريخ</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                لم يكتفِ العمانيون بالدخول في الإسلام، بل كان لهم دور بارز ومؤثر. 
                برزت شخصيات عمانية عظيمة جمعت بين <span className="text-purple-600 font-bold">العلم</span>، <span className="text-purple-600 font-bold">القيادة</span>، و<span className="text-purple-600 font-bold">البلاغة</span>.
            </p>
            
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
                <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">📜</div>
                    <h3 className="font-bold text-purple-800">الباحث عن الحقيقة</h3>
                    <p className="text-xs text-slate-500">كعب بن برشة</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">🎤</div>
                    <h3 className="font-bold text-purple-800">خطيب العرب</h3>
                    <p className="text-xs text-slate-500">صحار بن العباس</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">⚔️</div>
                    <h3 className="font-bold text-purple-800">القائد الشجاع</h3>
                    <p className="text-xs text-slate-500">عبدالله بن وهب</p>
                </div>
            </div>
        </div>
    );
};

// --- 2. KAAB BIN BARSHA (STORY & MAP) ---
const KaabStory = () => {
    const [step, setStep] = useState(0);

    return (
        <div className="p-6 space-y-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700"><BookOpen size={24}/></div>
                <h2 className="text-2xl font-black text-slate-800">١- كعب بن برشة الطاحي (الباحث عن الحقيقة)</h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden flex flex-col md:flex-row">
                {/* Visual Side */}
                <div className="w-full md:w-1/2 bg-amber-50 relative p-8 flex items-center justify-center">
                    {step === 0 && (
                        <div className="text-center animate-fade-in">
                            <div className="text-8xl mb-4">✝️📖</div>
                            <p className="font-bold text-amber-800">كان مسيحياً مثقفاً يقرأ الكتب القديمة.</p>
                        </div>
                    )}
                    {step === 1 && (
                        <div className="text-center animate-fade-in">
                            <div className="text-8xl mb-4">🐪</div>
                            <p className="font-bold text-amber-800">قرأ عن صفات نبي سيظهر، فقرر السفر للتأكد.</p>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="text-center animate-fade-in">
                            <div className="text-8xl mb-4">🕌🤝</div>
                            <p className="font-bold text-amber-800">التقى بالرسول ﷺ ورأى فيه الصفات فأسلم فوراً.</p>
                        </div>
                    )}
                    
                    {/* Navigation */}
                    <div className="absolute bottom-4 flex gap-2">
                        <span className={`w-3 h-3 rounded-full ${step === 0 ? 'bg-amber-600' : 'bg-amber-200'}`}></span>
                        <span className={`w-3 h-3 rounded-full ${step === 1 ? 'bg-amber-600' : 'bg-amber-200'}`}></span>
                        <span className={`w-3 h-3 rounded-full ${step === 2 ? 'bg-amber-600' : 'bg-amber-200'}`}></span>
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 p-8 space-y-6">
                    <h3 className="text-xl font-bold text-slate-800">قصة إسلامه</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        رغم أنه كان نصرانياً، إلا أن بحثه عن الحقيقة قاده للإسلام. عندما قرأ في الكتب عن صفات النبي المنتظر، لم يتردد في الذهاب إلى المدينة المنورة للتثبت، وعندما تأكد أعلن إسلامه ودعا قومه للإسلام.
                    </p>
                    
                    <div className="bg-amber-100 p-4 rounded-xl border border-amber-200">
                        <h4 className="font-bold text-amber-900 mb-1 flex items-center gap-2"><Lightbulb size={18}/> قيمة مستفادة:</h4>
                        <p className="text-amber-800 text-sm">البحث عن الحقيقة وعدم التردد في قبولها.</p>
                    </div>

                    <button 
                        onClick={() => setStep((s) => (s + 1) % 3)}
                        className="w-full py-3 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-colors"
                    >
                        {step === 2 ? "إعادة القصة" : "الخطوة التالية"}
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- 3. SAHHAR BIN AL-ABBAS (ELOQUENCE) ---
const SahharEloquence = () => {
    const [analyzed, setAnalyzed] = useState(false);

    return (
        <div className="p-6 space-y-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700"><Mic size={24}/></div>
                <h2 className="text-2xl font-black text-slate-800">٢- صُحار بن العباس (خطيب العرب)</h2>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <div className="text-center mb-8">
                    <p className="text-slate-500 mb-2">اشتهر بفصاحته وبلاغته وسرعة بديهته</p>
                    <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 font-serif text-xl text-slate-800">
                        "الإيجاز: أن تجيب فلا تبطئ، وتقول فلا تخطئ"
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Activity */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
                        <h3 className="font-bold text-lg text-slate-800 mb-4">نشاط: المذيع الصغير 🎙️</h3>
                        <p className="text-slate-600 text-sm mb-4">
                            تخيل أنك تجري مقابلة مع صحار بن العباس. سأله معاوية بن أبي سفيان: "ما هي البلاغة؟".
                            <br/> بماذا أجاب صحار؟
                        </p>
                        {!analyzed ? (
                            <button 
                                onClick={() => setAnalyzed(true)}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                            >
                                كشف الإجابة والتحليل
                            </button>
                        ) : (
                            <div className="animate-slide-up bg-blue-50 p-4 rounded-lg text-blue-900 text-sm">
                                <p className="font-bold mb-2">الإجابة: "الإيجاز"</p>
                                <p>وهذا يدل على:</p>
                                <ul className="list-disc list-inside mt-1">
                                    <li>سرعة البديهة.</li>
                                    <li>القدرة على قول المعنى الكثير في كلمات قليلة.</li>
                                    <li>الثقة بالنفس.</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Did you know */}
                    <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center relative overflow-hidden">
                        <Feather className="absolute top-4 left-4 text-blue-400 opacity-50 w-24 h-24" />
                        <h3 className="font-bold text-xl mb-2 z-10">معلومة تهمك</h3>
                        <p className="text-blue-100 leading-relaxed z-10">
                            كان صحار بن العباس مرجعاً في اللغة والأنساب، ولهذا كان الخلفاء (مثل معاوية) يحرصون على مجالسته والاستفادة من علمه.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 4. ABDULLAH BIN WAHB (LEADERSHIP) ---
const AbdullahLeadership = () => {
    return (
        <div className="p-6 space-y-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-3 rounded-full text-red-700"><Crown size={24}/></div>
                <h2 className="text-2xl font-black text-slate-800">٣- عبدالله بن وهب الراسبي (القائد الأزدي)</h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-red-500 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-red-900">صفات القائد</h3>
                    <p className="text-slate-600 leading-relaxed">
                        كان عبدالله بن وهب زعيماً لقبائل الأزد، وتميز بصفات جعلت قومه يقدمونه للقيادة رغم وجود من هم أكبر سناً منه.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-50 p-3 rounded-lg text-center">
                            <span className="block text-2xl mb-1">🧠</span>
                            <span className="font-bold text-red-800 text-sm">الحكمة</span>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg text-center">
                            <span className="block text-2xl mb-1">🦁</span>
                            <span className="font-bold text-red-800 text-sm">الشجاعة</span>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg text-center">
                            <span className="block text-2xl mb-1">🤲</span>
                            <span className="font-bold text-red-800 text-sm">العبادة (ذو الثفنات)</span>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg text-center">
                            <span className="block text-2xl mb-1">🗣️</span>
                            <span className="font-bold text-red-800 text-sm">قوة الرأي</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 bg-slate-100 p-6 rounded-2xl text-center">
                    <h4 className="font-bold text-slate-800 mb-4">نشاط: صفات القائد</h4>
                    <p className="text-sm text-slate-500 mb-4">أي الصفات التالية تراها الأهم للقائد؟</p>
                    <div className="space-y-2">
                        <button className="w-full bg-white border border-slate-300 py-2 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-colors">العدل</button>
                        <button className="w-full bg-white border border-slate-300 py-2 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-colors">القوة الجسدية</button>
                        <button className="w-full bg-white border border-slate-300 py-2 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-colors">المال</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 5. "WHO AM I?" GAME ---
const GuessWhoGame = () => {
    const [revealedId, setRevealedId] = useState<number | null>(null);

    const questions = [
        { id: 1, text: "سافرت إلى المدينة للتأكد من صفات النبي ﷺ وأسلمت.", answer: "كعب بن برشة", color: "bg-amber-500" },
        { id: 2, text: "أُلقب بخطيب العرب، وحاورت معاوية بن أبي سفيان.", answer: "صحار بن العباس", color: "bg-blue-500" },
        { id: 3, text: "كنت قائداً للأزد وعُرفت بكثرة السجود (ذو الثفنات).", answer: "عبدالله بن وهب", color: "bg-red-500" },
        { id: 4, text: "شاركنا في وفد عمان إلى أبي بكر الصديق (رضي الله عنه).", answer: "بيرح بن أسد", color: "bg-green-500" },
    ];

    return (
        <div className="p-6 space-y-8 animate-fade-in text-center">
            <h2 className="text-3xl font-black text-indigo-900 mb-6">لعبة: من أنا؟ 🕵️‍♂️</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
                {questions.map((q) => (
                    <div 
                        key={q.id}
                        onClick={() => setRevealedId(q.id === revealedId ? null : q.id)}
                        className={`relative h-40 cursor-pointer perspective-1000 group`}
                    >
                        <div className={`w-full h-full transition-all duration-500 transform-style-3d ${revealedId === q.id ? 'rotate-y-180' : ''}`}>
                            {/* Front */}
                            <div className={`absolute inset-0 backface-hidden rounded-2xl shadow-lg flex items-center justify-center p-6 bg-white border-2 border-slate-100 hover:border-indigo-300`}>
                                <div className="text-center">
                                    <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-500 font-bold text-xl">?</div>
                                    <p className="text-slate-700 font-bold text-lg">{q.text}</p>
                                </div>
                            </div>
                            
                            {/* Back */}
                            <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-lg flex items-center justify-center p-6 ${q.color} text-white`}>
                                <div className="text-center">
                                    <h3 className="text-2xl font-black mb-2">{q.answer}</h3>
                                    <div className="text-4xl">🎉</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const OmanPersonalitiesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'kaab' | 'sahhar' | 'abdullah' | 'game' | 'quiz'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-purple-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-purple-100 flex flex-col`}>
        <div className="p-4 border-b border-purple-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-purple-600 bg-slate-50 hover:bg-purple-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-purple-700 px-2">شخصيات عمانية 👥</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-purple-100 text-purple-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> مقدمة: نجوم التاريخ
          </button>
          <button onClick={() => {setActiveTab('kaab'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'kaab' ? 'bg-purple-100 text-purple-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <BookOpen size={20}/> كعب بن برشة
          </button>
          <button onClick={() => {setActiveTab('sahhar'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'sahhar' ? 'bg-purple-100 text-purple-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Mic size={20}/> صحار بن العباس
          </button>
          <button onClick={() => {setActiveTab('abdullah'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'abdullah' ? 'bg-purple-100 text-purple-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Crown size={20}/> عبدالله بن وهب
          </button>
          <button onClick={() => {setActiveTab('game'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'game' ? 'bg-purple-100 text-purple-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Search size={20}/> لعبة: من أنا؟
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-purple-100 text-purple-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Check size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-purple-800">شخصيات عمانية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeTab === 'intro' && <IntroStars />}
            {activeTab === 'kaab' && <KaabStory />}
            {activeTab === 'sahhar' && <SahharEloquence />}
            {activeTab === 'abdullah' && <AbdullahLeadership />}
            {activeTab === 'game' && <GuessWhoGame />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_OMAN_PERSONALITIES_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default OmanPersonalitiesLesson;
