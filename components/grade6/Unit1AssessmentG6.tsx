
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calculator, Scale, Users, FileText, Database, MapPin, TrendingUp, AlertTriangle } from 'lucide-react';

interface Unit1AssessmentG6Props {
    onBack: () => void;
}

const Unit1AssessmentG6: React.FC<Unit1AssessmentG6Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [q1Answers, setQ1Answers] = useState<{[key: number]: string}>({});
  const q1Correct = { 1: 'الكثافة السكانية', 2: 'التعداد السكاني', 3: 'الهرم السكاني', 4: 'أمد الحياة' };
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [q3Growth, setQ3Growth] = useState<string[]>([]);
  const [q3Dist, setQ3Dist] = useState<string[]>([]);
  const factors = ['المواليد', 'المناخ', 'الهجرة', 'األنشطة الاقتصادية', 'الوفيات', 'توفر الخدمات'];
  const [q4Input, setQ4Input] = useState('');
  const [q4Result, setQ4Result] = useState<string | null>(null);
  const [q5Input, setQ5Input] = useState('');
  const [q5Result, setQ5Result] = useState<string | null>(null);

  const handleQ1Select = (id: number, value: string) => setQ1Answers(prev => ({...prev, [id]: value}));
  const handleQ3Move = (factor: string, target: 'growth' | 'dist') => {
      setQ3Growth(prev => prev.filter(f => f !== factor));
      setQ3Dist(prev => prev.filter(f => f !== factor));
      if (target === 'growth') setQ3Growth(prev => [...prev, factor]);
      else setQ3Dist(prev => [...prev, factor]);
  };
  const checkQ4 = () => { if (parseInt(q4Input.replace(/,/g, '')) === 12577) setQ4Result('correct'); else setQ4Result('wrong'); };
  const checkQ5 = () => { if (Math.round(parseFloat(q5Input)) >= 16 && Math.round(parseFloat(q5Input)) <= 17) setQ5Result('correct'); else setQ5Result('wrong'); };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-2xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي</h1>
        </div>
        <div className="flex-1 max-w-5xl mx-auto w-full p-6 space-y-10 pb-20">
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-indigo-50 p-6 border-b border-indigo-100 flex items-center gap-4"><span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">1</span><h3 className="font-black text-xl text-indigo-900">أكتب المصطلح المناسب:</h3></div>
                <div className="p-8 space-y-6">
                    {[{id: 1, text: 'عدد السكان في كيلومتر مربع واحد.'}, {id: 2, text: 'عملية حصر السكان والمساكن.'}].map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-4 border-b border-slate-100 pb-6"><p className="flex-1 text-slate-700 font-bold text-lg">{item.text}</p><select onChange={(e) => handleQ1Select(item.id, e.target.value)} className="p-3 rounded-xl border-2 font-bold"><option value="">اختر...</option><option value="التعداد السكاني">التعداد السكاني</option><option value="الكثافة السكانية">الكثافة السكانية</option></select></div>
                    ))}
                </div>
            </section>
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-green-50 p-6 border-b border-green-100 flex items-center gap-4"><span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">3</span><h3 className="font-black text-xl text-green-900">صنّف العوامل:</h3></div>
                <div className="p-8">
                    <div className="flex flex-wrap gap-3 justify-center mb-8">{factors.map(f => (<button key={f} onClick={() => { if (q3Growth.includes(f) || q3Dist.includes(f)) { setQ3Growth(prev => prev.filter(i => i !== f)); setQ3Dist(prev => prev.filter(i => i !== f)); }}} className="px-5 py-3 rounded-full font-bold shadow-sm bg-white border-2 border-slate-300">{f}</button>))}</div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-indigo-50 border-4 border-indigo-200 rounded-3xl p-6"><h4 className="font-black text-indigo-900 text-center mb-4">النمو السكاني</h4><div className="flex flex-wrap gap-3 justify-center">{factors.map(f => (!q3Growth.includes(f) && !q3Dist.includes(f) && ['المواليد', 'الوفيات', 'الهجرة'].includes(f) ? <button key={f} onClick={() => handleQ3Move(f, 'growth')} className="bg-white border-2 border-indigo-200 text-indigo-700 px-4 py-2 rounded-xl text-lg font-bold">+ {f}</button> : null))}</div></div>
                        <div className="bg-teal-50 border-4 border-teal-200 rounded-3xl p-6"><h4 className="font-black text-teal-900 text-center mb-4">التوزيع الجغرافي</h4><div className="flex flex-wrap gap-3 justify-center">{factors.map(f => (!q3Growth.includes(f) && !q3Dist.includes(f) && ['المناخ', 'األنشطة الاقتصادية', 'توفر الخدمات'].includes(f) ? <button key={f} onClick={() => handleQ3Move(f, 'dist')} className="bg-white border-2 border-teal-200 text-teal-700 px-4 py-2 rounded-xl text-lg font-bold">+ {f}</button> : null))}</div></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default Unit1AssessmentG6;
