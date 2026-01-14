
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, XCircle, Scale } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit2AssessmentG6: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [score, setScore] = useState(0);
  const [matches, setMatches] = useState<{[key: string]: string}>({});
  const concepts = [{ id: 'arud', term: 'علم العروض', def: 'ميزان الشعر' }, { id: 'hereditary', term: 'الحكم الوراثي', def: 'تولي الابن بعد الأب' }];
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const handleMatch = (defId: string) => {
      if (selectedTerm === defId) { setMatches(prev => ({ ...prev, [defId]: 'correct' })); setScore(s => s + 1); }
      setSelectedTerm(null);
  };

  return (
    <div className="min-h-screen bg-indigo-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl md:text-2xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثانية)</h1>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-8 pb-20">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-indigo-100">
                <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2"><Scale className="text-indigo-600"/> صل المفهوم بالتعريف:</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">{concepts.map(c => (<button key={c.id} onClick={() => setSelectedTerm(c.id)} className={`w-full p-4 rounded-xl font-bold text-lg border-2 ${selectedTerm === c.id ? 'bg-indigo-600 text-white' : 'bg-slate-50'}`}>{c.term}</button>))}</div>
                    <div className="space-y-4">{concepts.map(c => (<div key={c.id} onClick={() => handleMatch(c.id)} className={`w-full p-4 rounded-xl font-medium border-2 cursor-pointer ${matches[c.id] === 'correct' ? 'bg-green-100 text-green-900' : 'bg-white'}`}>{c.def}</div>))}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Unit2AssessmentG6;
