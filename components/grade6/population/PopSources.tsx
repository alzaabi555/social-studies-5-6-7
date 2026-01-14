
import React, { useState } from 'react';
import { Database, FileText, Activity, CheckCircle, XCircle } from 'lucide-react';

interface SourceItem {
    id: number;
    text: string;
    type: 'primary' | 'secondary';
}

const ITEMS: SourceItem[] = [
    { id: 1, text: 'التعداد السكاني الشامل', type: 'primary' },
    { id: 2, text: 'سجلات المدارس والجامعات', type: 'secondary' },
    { id: 3, text: 'شهادات الميلاد والوفاة', type: 'primary' },
    { id: 4, text: 'سجلات العمال في الشركات', type: 'secondary' },
    { id: 5, text: 'المسح بالعينة', type: 'primary' },
    { id: 6, text: 'سجلات المرضى بالمستشفيات', type: 'secondary' },
];

const PopSources: React.FC = () => {
    const [items, setItems] = useState<SourceItem[]>(ITEMS);
    const [primaryCount, setPrimaryCount] = useState(0);
    const [secondaryCount, setSecondaryCount] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
    const [isComplete, setIsComplete] = useState(false);

    const handleSort = (targetType: 'primary' | 'secondary') => {
        const currentItem = items[0];
        if (!currentItem) return;

        if (currentItem.type === targetType) {
            setFeedback('correct');
            if (targetType === 'primary') setPrimaryCount(prev => prev + 1);
            else setSecondaryCount(prev => prev + 1);
            
            setTimeout(() => {
                setFeedback(null);
                const nextItems = items.slice(1);
                setItems(nextItems);
                if (nextItems.length === 0) setIsComplete(true);
            }, 600);
        } else {
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 800);
        }
    };

    const currentItem = items[0];

    return (
        <div className="p-6 animate-fade-in space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-slate-800 mb-3">مصادر البيانات السكانية</h2>
                <p className="text-xl text-slate-600">ساعدنا في تصنيف المصادر إلى "أولية" و "ثانوية"</p>
            </div>

            {!isComplete ? (
                <div className="max-w-4xl mx-auto">
                    {/* The Card to Sort */}
                    <div className="flex justify-center mb-12 h-32 relative">
                        {currentItem && (
                            <div className={`absolute z-10 w-64 bg-white p-6 rounded-2xl shadow-2xl border-b-8 border-indigo-500 flex flex-col items-center justify-center transform transition-all duration-300 ${feedback === 'correct' ? 'scale-0 opacity-0 translate-y-10' : feedback === 'wrong' ? 'animate-shake bg-red-50 border-red-500' : 'hover:scale-105'}`}>
                                <FileText size={40} className="text-indigo-600 mb-3"/>
                                <h3 className="text-xl font-bold text-slate-800 text-center">{currentItem.text}</h3>
                                {feedback === 'wrong' && <span className="text-red-600 text-xs font-bold mt-2 flex items-center gap-1"><XCircle size={12}/> حاول مرة أخرى</span>}
                                {feedback === 'correct' && <span className="text-green-600 text-xs font-bold mt-2 flex items-center gap-1"><CheckCircle size={12}/> صحيح!</span>}
                            </div>
                        )}
                    </div>

                    {/* Buckets */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <button 
                            onClick={() => handleSort('primary')}
                            className="bg-orange-50 border-4 border-orange-200 rounded-3xl p-8 flex flex-col items-center gap-4 hover:bg-orange-100 transition-colors active:scale-95 group"
                        >
                            <div className="bg-orange-200 p-4 rounded-full text-orange-700 group-hover:scale-110 transition-transform">
                                <Database size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-orange-900">المصادر الأولية</h3>
                            <p className="text-sm text-orange-800 font-medium">بيانات تجمع لأول مرة من الميدان (مثل التعداد)</p>
                            <div className="text-4xl font-black text-orange-400 mt-2">{primaryCount}</div>
                        </button>

                        <button 
                            onClick={() => handleSort('secondary')}
                            className="bg-green-50 border-4 border-green-200 rounded-3xl p-8 flex flex-col items-center gap-4 hover:bg-green-100 transition-colors active:scale-95 group"
                        >
                            <div className="bg-green-200 p-4 rounded-full text-green-700 group-hover:scale-110 transition-transform">
                                <FileText size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-green-900">المصادر الثانوية</h3>
                            <p className="text-sm text-green-800 font-medium">بيانات مسجلة مسبقاً في المؤسسات</p>
                            <div className="text-4xl font-black text-green-400 mt-2">{secondaryCount}</div>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center bg-indigo-50 p-10 rounded-3xl border-2 border-indigo-100 animate-slide-up">
                    <Activity size={64} className="text-indigo-600 mx-auto mb-6 animate-bounce" />
                    <h3 className="text-3xl font-black text-indigo-900 mb-4">أحسنت! 🌟</h3>
                    <p className="text-xl text-indigo-700 mb-8">لقد أتقنت التمييز بين مصادر البيانات السكانية.</p>
                    <button onClick={() => { setItems(ITEMS); setPrimaryCount(0); setSecondaryCount(0); setIsComplete(false); }} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg">
                        إعادة اللعبة
                    </button>
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

export default PopSources;
