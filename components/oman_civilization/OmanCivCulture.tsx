import React, { useState } from 'react';
import { BookOpen, GraduationCap, School, HeartHandshake, MapPin } from 'lucide-react';

const OmanCivCulture: React.FC = () => {
  const [activeScholar, setActiveScholar] = useState<number | null>(null);

  const scholars = [
      { id: 1, name: 'الحسن بن أحمد النزوي', role: 'عالم ومؤسس مدرسة', work: 'أنشأ مدرسة الجليلين في حارة العقر بنزوى على نفقته الخاصة.' },
      { id: 2, name: 'أبو سعيد الكدمي', role: 'فقيه', work: 'من أبرز مؤلفاته كتاب "الاستقامة".' },
      { id: 3, name: 'ابن جعفر الأزكوي', role: 'شيخ وعالم', work: 'من أبرز مؤلفاته "جامع ابن جعفر".' }
  ];

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">المجال الثقافي والعلمي</h2>
            <p className="text-slate-500">اعتنى العمانيون بالعلم، فانتشرت المدارس والكتاتيب والمكتبات</p>
        </div>

        {/* Scholars Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-6">
            {scholars.map((scholar) => (
                <div 
                    key={scholar.id}
                    onClick={() => setActiveScholar(scholar.id)}
                    className={`cursor-pointer rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${activeScholar === scholar.id ? 'bg-amber-100 border-amber-500 scale-105' : 'bg-white border-slate-100'}`}
                >
                    <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 mb-4 mx-auto">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-center text-slate-800 mb-1">{scholar.name}</h3>
                    <p className="text-xs text-center text-slate-500 mb-4">{scholar.role}</p>
                    
                    {activeScholar === scholar.id && (
                        <p className="text-sm text-center text-amber-900 bg-amber-50 p-3 rounded-lg animate-fade-in">
                            {scholar.work}
                        </p>
                    )}
                </div>
            ))}
        </div>

        {/* Schools & Mosques Section (Page 94 Detail) */}
        <div className="grid md:grid-cols-2 gap-6">
            {/* Ibn Birkah School */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
                <div className="flex items-center gap-2 mb-3">
                    <School className="text-blue-600" />
                    <h3 className="font-bold text-lg text-slate-800">مدرسة ابن بركة (بهلاء)</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    أسسها العلامة <strong>عبدالله بن محمد السليمي</strong> (المعروف بابن بركة).
                </p>
                <div className="bg-blue-50 p-3 rounded-lg text-xs font-bold text-blue-800">
                    🎓 تخرج منها نحو أربعين عالماً من خارج عمان، مما يدل على شهرتها الإقليمية.
                </div>
            </div>

            {/* Educational Mosques */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-teal-500">
                <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-teal-600" />
                    <h3 className="font-bold text-lg text-slate-800">الجوامع التعليمية</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                    لم تكن المساجد للعبادة فقط، بل كانت جامعات علمية. من أشهر الجوامع التي اشتهرت بالتدريس:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                    <li className="bg-teal-50 px-3 py-1 rounded text-teal-800 text-xs font-bold">جامع العقر (نزوى)</li>
                    <li className="bg-teal-50 px-3 py-1 rounded text-teal-800 text-xs font-bold">جامع صحار</li>
                    <li className="bg-teal-50 px-3 py-1 rounded text-teal-800 text-xs font-bold">جامع مرباط</li>
                </ul>
            </div>
        </div>

        {/* Waqf Concept */}
        <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-emerald-800">
                    <HeartHandshake size={32} />
                    <h3 className="text-2xl font-black">الوقف (نظام التكافل العلمي)</h3>
                </div>
                <p className="text-emerald-900 leading-relaxed text-lg">
                    "هو أن يخرج الإنسان شيئاً من ملكه الخاص ليكون نفعه مستمراً لجهة بر، فلا يُباع ولا يورث، وإنما يُنتفع بعائده."
                </p>
                <div className="bg-white p-4 rounded-xl shadow-sm text-sm text-emerald-700">
                    <strong>أهميته:</strong> بدأ العمانيون بتأسيس المدارس الوقفية منذ القرن الرابع الهجري، مما ضمن استمرار التعليم ومجانيته للأجيال القادمة.
                </div>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 bg-emerald-200 rounded-full flex items-center justify-center shadow-inner border-4 border-white">
                    <School size={64} className="text-emerald-700" />
                    <div className="absolute bottom-4 bg-emerald-800 text-white text-xs px-3 py-1 rounded-full">مدرسة الجليلين</div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default OmanCivCulture;