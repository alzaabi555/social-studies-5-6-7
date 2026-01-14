import React, { useState } from 'react';
import { Building2, Trees, ArrowRightLeft, Lightbulb, CheckCircle2, XCircle } from 'lucide-react';

const CityVillageCompare: React.FC = () => {
  const [revealedRows, setRevealedRows] = useState<number[]>([]);

  const toggleRow = (index: number) => {
      if (revealedRows.includes(index)) {
          setRevealedRows(prev => prev.filter(i => i !== index));
      } else {
          setRevealedRows(prev => [...prev, index]);
      }
  };

  const comparisons = [
      { id: 1, title: 'الأنشطة الاقتصادية', city: 'صناعة، تجارة، خدمات', village: 'زراعة، رعي، صيد' },
      { id: 2, title: 'توفر الخدمات', city: 'متوفرة بكثرة ومتنوعة', village: 'محدودة / أساسية' },
      { id: 3, title: 'توفر فرص العمل', city: 'كثيرة ومتنوعة', village: 'قليلة ومحدودة' },
      { id: 4, title: 'جودة الطرق والنقل', city: 'شبكة طرق حديثة ومزدحمة', village: 'طرق بسيطة / أقل ازدحاماً' },
      { id: 5, title: 'تركز السكان', city: 'كثافة سكانية مرتفعة', village: 'كثافة سكانية منخفضة' },
  ];

  return (
    <div className="p-6 animate-fade-in space-y-10">
        
        <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-800 mb-2">نشاط قارن (صفحة 47)</h2>
            <p className="text-slate-500">يختلف عدد السكان في المدينة عنه في الريف.. دعنا نكتشف الأسباب</p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-3 bg-slate-800 text-white p-4 font-bold text-lg text-center">
                <div>وجه المقارنة</div>
                <div className="flex items-center justify-center gap-2 text-blue-300"><Building2 /> المدينة</div>
                <div className="flex items-center justify-center gap-2 text-green-300"><Trees /> الريف</div>
            </div>

            <div className="divide-y divide-slate-100">
                {comparisons.map((item, index) => (
                    <div key={item.id} className="grid grid-cols-3 text-center group hover:bg-slate-50 transition-colors">
                        <div className="p-4 font-bold text-slate-700 bg-slate-50 flex items-center justify-center">
                            {item.title}
                        </div>
                        
                        <div 
                            onClick={() => toggleRow(index)}
                            className="p-4 cursor-pointer relative border-l border-slate-100"
                        >
                            {revealedRows.includes(index) ? (
                                <span className="text-blue-800 font-medium animate-fade-in">{item.city}</span>
                            ) : (
                                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">اضغط للكشف</span>
                            )}
                        </div>

                        <div 
                            onClick={() => toggleRow(index)}
                            className="p-4 cursor-pointer relative border-l border-slate-100"
                        >
                            {revealedRows.includes(index) ? (
                                <span className="text-green-800 font-medium animate-fade-in">{item.village}</span>
                            ) : (
                                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">اضغط للكشف</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Knowledge Window (Page 47) */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 p-20 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-start gap-6">
                <div className="bg-white/20 p-4 rounded-full animate-pulse">
                    <Lightbulb size={40} className="text-yellow-300" />
                </div>
                <div>
                    <h3 className="text-2xl font-black mb-3 text-yellow-300">نافذة المعرفة</h3>
                    <p className="text-lg leading-relaxed opacity-90">
                        "اهتمت حكومة سلطنة عمان منذ بداية عصر النهضة المباركة بإيصال مظاهر التنمية والتعمير لكل شبر من البلاد، وأصبح المواطن والمقيم ينعم بمختلف الخدمات في ولايته <strong>دون أن يتكبد مشاق التوجه إلى المدن</strong>."
                    </p>
                    <div className="mt-4 flex gap-3">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold border border-white/30">توزيع عادل للخدمات</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold border border-white/30">تقليل الهجرة للمدن</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default CityVillageCompare;