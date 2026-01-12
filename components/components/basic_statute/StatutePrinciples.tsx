import React, { useState } from 'react';
import { Shield, Users, Coins, BookOpen, Fingerprint, ArrowRight } from 'lucide-react';

interface Principle {
    id: number;
    text: string;
    category: 'political' | 'economic' | 'social' | 'cultural' | 'security';
}

const PRINCIPLES_POOL: Principle[] = [
    { id: 1, text: 'الحفاظ على الاستقلال والسيادة', category: 'political' },
    { id: 2, text: 'الاقتصاد الوطني أساسه العدالة', category: 'economic' },
    { id: 3, text: 'التعليم حق لكل مواطن', category: 'cultural' },
    { id: 4, text: 'الأسرة هي أساس المجتمع', category: 'social' },
    { id: 5, text: 'السلام هدف الدولة', category: 'security' },
    { id: 6, text: 'الملكية الخاصة مصونة', category: 'economic' },
    { id: 7, text: 'رعاية التراث الوطني', category: 'cultural' },
    { id: 8, text: 'توثيق عرى التعاون الدولي', category: 'political' },
];

const StatutePrinciples: React.FC = () => {
  const [items, setItems] = useState<Principle[]>(PRINCIPLES_POOL);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleCategorize = (item: Principle, selectedCat: string) => {
      if (item.category === selectedCat) {
          setFeedback('correct');
          setTimeout(() => {
              setItems(prev => prev.filter(i => i.id !== item.id));
              setFeedback(null);
          }, 800);
      } else {
          setFeedback('wrong');
          setTimeout(() => setFeedback(null), 1000);
      }
  };

  const currentItem = items[0];

  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center mb-4">
            <h2 className="text-2xl font-black text-slate-800 mb-2">لعبة تصنيف المبادئ</h2>
            <p className="text-slate-500">ساعد في تصنيف المبادئ الموجهة لسياسة الدولة إلى مجالاتها الصحيحة</p>
        </div>

        {items.length > 0 ? (
            <div className="max-w-4xl mx-auto">
                {/* Active Card */}
                <div className="flex justify-center mb-12">
                    <div className={`bg-white px-8 py-6 rounded-2xl shadow-2xl border-b-8 border-teal-600 transform transition-all duration-300 ${feedback === 'correct' ? 'scale-0 opacity-0 bg-green-100' : feedback === 'wrong' ? 'shake bg-red-100' : 'scale-100'}`}>
                        <h3 className="text-xl font-bold text-slate-800 text-center">{currentItem.text}</h3>
                    </div>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <button onClick={() => handleCategorize(currentItem, 'political')} className="p-4 bg-slate-100 hover:bg-slate-200 rounded-xl flex flex-col items-center gap-2 border-2 border-transparent hover:border-slate-400 transition-all">
                        <FlagIcon />
                        <span className="font-bold text-sm">سياسية</span>
                    </button>
                    <button onClick={() => handleCategorize(currentItem, 'economic')} className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-xl flex flex-col items-center gap-2 border-2 border-transparent hover:border-yellow-400 transition-all">
                        <Coins className="text-yellow-600"/>
                        <span className="font-bold text-sm text-yellow-800">اقتصادية</span>
                    </button>
                    <button onClick={() => handleCategorize(currentItem, 'social')} className="p-4 bg-green-50 hover:bg-green-100 rounded-xl flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-400 transition-all">
                        <Users className="text-green-600"/>
                        <span className="font-bold text-sm text-green-800">اجتماعية</span>
                    </button>
                    <button onClick={() => handleCategorize(currentItem, 'cultural')} className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl flex flex-col items-center gap-2 border-2 border-transparent hover:border-purple-400 transition-all">
                        <BookOpen className="text-purple-600"/>
                        <span className="font-bold text-sm text-purple-800">ثقافية</span>
                    </button>
                    <button onClick={() => handleCategorize(currentItem, 'security')} className="p-4 bg-red-50 hover:bg-red-100 rounded-xl flex flex-col items-center gap-2 border-2 border-transparent hover:border-red-400 transition-all">
                        <Shield className="text-red-600"/>
                        <span className="font-bold text-sm text-red-800">أمنية</span>
                    </button>
                </div>
            </div>
        ) : (
            <div className="text-center p-12 bg-teal-50 rounded-3xl border border-teal-200">
                <div className="inline-block p-4 bg-teal-100 rounded-full text-teal-600 mb-4 animate-bounce">
                    <Fingerprint size={48} />
                </div>
                <h3 className="text-2xl font-black text-teal-900 mb-2">أحسنت! 🌟</h3>
                <p className="text-teal-700">لقد قمت بتصنيف جميع المبادئ بشكل صحيح.</p>
                <button onClick={() => setItems(PRINCIPLES_POOL)} className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 flex items-center gap-2 mx-auto">
                    إعادة اللعبة <ArrowRight size={16}/>
                </button>
            </div>
        )}
        
        <style>{`
            .shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
            @keyframes shake {
                10%, 90% { transform: translate3d(-1px, 0, 0); }
                20%, 80% { transform: translate3d(2px, 0, 0); }
                30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                40%, 60% { transform: translate3d(4px, 0, 0); }
            }
        `}</style>
    </div>
  );
};

const FlagIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
    </svg>
);

export default StatutePrinciples;