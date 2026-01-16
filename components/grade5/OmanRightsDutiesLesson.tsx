
import React, { useState } from 'react';
import { FIFTH_RIGHTS_DUTIES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, BookOpen, Scale, Hand, CheckCircle, Menu, Trophy, Gavel, User, Shield } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const RightsGame = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'الحصول على التعليم', type: 'right' },
        { id: 2, text: 'احترام القوانين', type: 'duty' },
        { id: 3, text: 'الرعاية الصحية', type: 'right' },
        { id: 4, text: 'الحفاظ على البيئة', type: 'duty' },
        { id: 5, text: 'الأمن والأمان', type: 'right' },
        { id: 6, text: 'الدفاع عن الوطن', type: 'duty' },
    ]);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleSort = (id: number, target: string) => {
        const item = items.find(i => i.id === id);
        if (item?.type === target) {
            setScore(prev => prev + 1);
            setItems(prev => prev.filter(i => i.id !== id));
            setFeedback('إجابة صحيحة! ✅');
        } else {
            setFeedback('حاول مرة أخرى ❌');
        }
        setTimeout(() => setFeedback(''), 800);
    };

    return (
        <div className="p-6 bg-white rounded-3xl shadow-xl border border-teal-100 animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-teal-800">لعبة الحقوق والواجبات</h2>
                <p className="text-slate-500">ساعد أحمد في تصنيف البطاقات: هل هي حق (لي) أم واجب (علي)؟</p>
                <div className="text-xl font-bold text-indigo-600 mt-4 bg-indigo-50 inline-block px-6 py-2 rounded-full">النقاط: {score}</div>
                <div className="h-6 text-green-600 font-bold mt-2">{feedback}</div>
            </div>

            {items.length > 0 ? (
                <div className="flex flex-col items-center gap-8">
                    {/* The Card */}
                    <div className="bg-slate-100 px-10 py-8 rounded-2xl shadow-inner border-2 border-slate-300 transform transition-all hover:scale-105">
                        <p className="text-2xl font-black text-slate-800 text-center">{items[0].text}</p>
                    </div>

                    <div className="flex w-full gap-6 max-w-2xl">
                        <button 
                            onClick={() => handleSort(items[0].id, 'right')}
                            className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-800 p-6 rounded-2xl flex flex-col items-center gap-3 border-b-8 border-blue-300 transition-all active:border-b-0 active:translate-y-2"
                        >
                            <Hand size={40}/>
                            <span className="font-black text-xl">حق (لي)</span>
                        </button>
                        <button 
                            onClick={() => handleSort(items[0].id, 'duty')}
                            className="flex-1 bg-green-100 hover:bg-green-200 text-green-800 p-6 rounded-2xl flex flex-col items-center gap-3 border-b-8 border-green-300 transition-all active:border-b-0 active:translate-y-2"
                        >
                            <Scale size={40}/>
                            <span className="font-black text-xl">واجب (علي)</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center py-10">
                    <Trophy size={80} className="mx-auto text-yellow-400 mb-4 animate-bounce"/>
                    <h3 className="text-4xl font-black text-slate-800 mb-2">ممتاز يا بطل!</h3>
                    <p className="text-slate-600 text-lg">أنت مواطن صالح تعرف حقوقك وتلتزم بواجباتك.</p>
                    <button onClick={() => window.location.reload()} className="mt-8 bg-teal-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-teal-700 transition-colors">لعب مرة أخرى</button>
                </div>
            )}
        </div>
    );
};

const Concepts = () => {
    return (
        <div className="space-y-8 animate-slide-up">
            <div className="text-center">
                <h2 className="text-3xl font-black text-teal-900 mb-2">مفاهيم المواطنة</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Hand size={32}/></div>
                        <h3 className="text-2xl font-black text-blue-900">الحقوق</h3>
                    </div>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                        هي مجموعة الامتيازات التي يحصل عليها المواطن من الدولة، مثل: التعليم، الصحة، والأمن.
                    </p>
                </div>

                <div className="bg-green-50 p-8 rounded-3xl border-2 border-green-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600"><Scale size={32}/></div>
                        <h3 className="text-2xl font-black text-green-900">الواجبات</h3>
                    </div>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                        هي الالتزامات التي يجب على المواطن القيام بها تجاه وطنه ومجتمعه، مثل: احترام القانون والدفاع عن الوطن.
                    </p>
                </div>
            </div>

            {/* Circular Diagram (Interaction Relation) */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center">
                <h3 className="font-bold text-slate-800 mb-6">العلاقة بين الحقوق والواجبات</h3>
                <div className="relative w-64 h-64">
                    <div className="absolute inset-0 border-4 border-slate-200 rounded-full animate-spin-slow"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">أخذ</div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">عطاء</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <User size={48} className="mx-auto text-slate-400 mb-2"/>
                            <span className="font-black text-slate-700">المواطن</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StoryCard = () => (
    <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-200 text-center animate-fade-in">
        <Gavel size={48} className="mx-auto text-indigo-600 mb-4"/>
        <h2 className="text-2xl font-black text-indigo-900 mb-4">قصة العدالة</h2>
        <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            في سلطنة عمان، الجميع سواسية أمام القانون. يضمن <strong>النظام الأساسي للدولة</strong> أن يحصل كل فرد على حقه، وأن يؤدي واجبه، مما يخلق مجتمعاً عادلاً ومترابطاً.
        </p>
    </div>
);

const OmanRightsDutiesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'concepts' | 'game' | 'story' | 'quiz'>('concepts');
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
          <button onClick={() => {setActiveTab('concepts'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'concepts' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Shield size={20}/> المفاهيم
          </button>
          <button onClick={() => {setActiveTab('game'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'game' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <BookOpen size={20}/> اللعبة التفاعلية
          </button>
          <button onClick={() => {setActiveTab('story'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'story' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Gavel size={20}/> قصة العدالة
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
            {activeTab === 'concepts' && <Concepts />}
            {activeTab === 'game' && <RightsGame />}
            {activeTab === 'story' && <StoryCard />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_RIGHTS_DUTIES_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default OmanRightsDutiesLesson;
