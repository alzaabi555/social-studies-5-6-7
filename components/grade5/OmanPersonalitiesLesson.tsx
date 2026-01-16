
import React, { useState } from 'react';
import { FIFTH_OMAN_PERSONALITIES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Key, Users, Star, Check, Menu, Book, Crown, Feather, HelpCircle, MapPin } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const PuzzleGame = () => {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="p-6 text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl font-black text-indigo-900 mb-4">لعبة: من أنا؟ 🕵️‍♂️</h2>
            <div className="max-w-md mx-auto bg-slate-800 rounded-3xl shadow-2xl border-4 border-slate-700 overflow-hidden relative group cursor-pointer h-96 transition-transform hover:scale-105" onClick={() => setRevealed(!revealed)}>
                
                {/* Question Face (Dark Mode) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-700 p-8 ${revealed ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                    <div className="bg-white/10 p-6 rounded-full mb-6 animate-pulse">
                        <HelpCircle size={64} className="text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">اضغط لكشف الشخصية</h3>
                    <div className="space-y-2 text-slate-300 text-sm">
                        <p>🔹 عالم لغوي عماني شهير.</p>
                        <p>🔹 مؤلف "كتاب العين".</p>
                        <p>🔹 مؤسس علم العروض (أوزان الشعر).</p>
                    </div>
                </div>
                
                {/* Answer Face (Light Mode) */}
                <div className={`absolute inset-0 bg-white flex flex-col items-center justify-center p-8 transition-all duration-700 ${revealed ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 mb-4 shadow-inner">
                        <Feather size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-indigo-800 mb-2">الخليل بن أحمد الفراهيدي</h3>
                    <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                        <MapPin size={14}/> ولد في ودام (ساحل الباطنة)
                    </div>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                        أحد عباقرة اللغة العربية، ترك إرثاً علمياً خالداً تستفيد منه الأجيال حتى اليوم.
                    </p>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">رائع!</button>
                </div>
            </div>
        </div>
    );
};

const InteractiveGallery = () => {
    const [activeChar, setActiveChar] = useState<number | null>(null);

    const characters = [
        { id: 1, name: 'عبد وجيفر', title: 'ملكا عمان', icon: <Crown size={32}/>, color: 'bg-purple-100 text-purple-700 border-purple-300', desc: 'استقبلا رسالة النبي ﷺ بحكمة، وأسلما طواعية، فجنبا عمان الحروب ووحدوا الصف.' },
        { id: 2, name: 'كعب بن برشة', title: 'الصحابي الجليل', icon: <Star size={32}/>, color: 'bg-blue-100 text-blue-700 border-blue-300', desc: 'من قبيلة طاحية، وفد إلى النبي ﷺ، وساهم في نشر تعاليم الإسلام السمحة بين قومه.' },
        { id: 3, name: 'عبدالله بن وهب', title: 'العالم القائد', icon: <Book size={32}/>, color: 'bg-green-100 text-green-700 border-green-300', desc: 'الراسبي، شخصية قيادية وعلمية بارزة، كان له دور كبير في الأحداث السياسية في صدر الإسلام.' },
        { id: 4, name: 'بيرح بن أسد', title: 'السفير العماني', icon: <Users size={32}/>, color: 'bg-orange-100 text-orange-700 border-orange-300', desc: 'من الشخصيات التي كان لها حضور في الوفود العمانية، ساهم في تمثيل أهل عمان خير تمثيل.' },
    ];

    return (
        <div className="p-6 space-y-8 animate-fade-in">
            <h2 className="text-3xl font-black text-slate-800 text-center mb-6">معرض الشخصيات الخالدة</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {characters.map((char) => (
                    <button
                        key={char.id}
                        onClick={() => setActiveChar(char.id)}
                        className={`p-6 rounded-2xl transition-all duration-300 flex flex-col items-center gap-4 border-b-4 hover:-translate-y-2 ${char.color} ${activeChar === char.id ? 'scale-105 shadow-xl ring-2 ring-offset-2 ring-indigo-300' : 'shadow-sm opacity-90 hover:opacity-100'}`}
                    >
                        <div className="bg-white p-4 rounded-full shadow-sm">
                            {char.icon}
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg mb-1">{char.name}</h3>
                            <p className="text-xs font-bold opacity-75">{char.title}</p>
                        </div>
                    </button>
                ))}
            </div>

            <div className="min-h-[150px]">
                {activeChar ? (
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-100 animate-slide-up text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-2xl font-black text-indigo-900 mb-3 relative z-10">{characters.find(c => c.id === activeChar)?.name}</h3>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto relative z-10">
                            {characters.find(c => c.id === activeChar)?.desc}
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 font-bold bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 p-8">
                        <Users size={48} className="mb-2 opacity-50"/>
                        <p>اختر شخصية من الأعلى لعرض سيرتها العطرة</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const ActivityValues = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-slate-800 text-center">قيم نقتدي بها</h2>
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                <Star size={40} className="mb-4 text-white/80" />
                <h3 className="text-xl font-black mb-2">العلم والمعرفة</h3>
                <p className="opacity-90">نسعى لطلب العلم كما فعل الخليل بن أحمد.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                <Users size={40} className="mb-4 text-white/80" />
                <h3 className="text-xl font-black mb-2">خدمة المجتمع</h3>
                <p className="opacity-90">نشارك في بناء الوطن كما فعل أجدادنا.</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 text-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                <Check size={40} className="mb-4 text-white/80" />
                <h3 className="text-xl font-black mb-2">الحكمة وحسن الخلق</h3>
                <p className="opacity-90">نتصف بالتسامح وحسن التعامل مع الآخرين.</p>
            </div>
        </div>
    </div>
);

const OmanPersonalitiesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'puzzle' | 'gallery' | 'activity' | 'quiz'>('puzzle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-indigo-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-indigo-100 flex flex-col`}>
        <div className="p-4 border-b border-indigo-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">شخصيات عمانية 👥</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('puzzle'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'puzzle' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Key size={20}/> لعبة من أنا؟
          </button>
          <button onClick={() => {setActiveTab('gallery'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'gallery' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Users size={20}/> معرض الشخصيات
          </button>
          <button onClick={() => {setActiveTab('activity'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'activity' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> قيم نقتدي بها
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Check size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">شخصيات عمانية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-6 md:px-10">
            {activeTab === 'puzzle' && <PuzzleGame />}
            {activeTab === 'gallery' && <InteractiveGallery />}
            {activeTab === 'activity' && <ActivityValues />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_OMAN_PERSONALITIES_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default OmanPersonalitiesLesson;
