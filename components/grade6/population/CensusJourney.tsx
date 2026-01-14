
import React, { useState } from 'react';
import { History, FileText, Smartphone, Database, Check, ChevronLeft } from 'lucide-react';

const CensusJourney: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number>(2020);

  const censusData = [
      { 
          year: 1993, 
          title: 'أول تعداد سكاني', 
          type: 'ميداني (ورقي)', 
          icon: <FileText size={32}/>,
          desc: 'اعتمد على الاستمارات الورقية وزيارة الباحثين للمنازل.',
          color: 'bg-amber-500'
      },
      { 
          year: 2003, 
          title: 'التعداد الثاني', 
          type: 'ميداني (ورقي)', 
          icon: <FileText size={32}/>,
          desc: 'استمر استخدام الطريقة التقليدية في جمع البيانات.',
          color: 'bg-amber-600'
      },
      { 
          year: 2010, 
          title: 'التعداد الثالث', 
          type: 'مختلط (أجهزة كفية)', 
          icon: <Smartphone size={32}/>,
          desc: 'نقلة نوعية باستخدام الأجهزة الكفية (PDA) لتسريع جمع البيانات.',
          color: 'bg-blue-500'
      },
      { 
          year: 2020, 
          title: 'التعداد الإلكتروني', 
          type: 'سجلات إدارية (قواعد بيانات)', 
          icon: <Database size={32}/>,
          desc: 'تعداد حديث يعتمد على ربط قواعد البيانات الحكومية (السجل المدني) دون الحاجة لزيارة المنازل.',
          color: 'bg-green-600'
      }
  ];

  const activeData = censusData.find(d => d.year === activeYear);

  return (
    <div className="p-6 animate-fade-in space-y-12">
        <div className="text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-2">رحلة التعداد في سلطنة عمان</h2>
            <p className="text-slate-500">من الورق إلى البيانات الرقمية.. قصة نجاح</p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {censusData.map((item) => (
                    <button 
                        key={item.year}
                        onClick={() => setActiveYear(item.year)}
                        className={`group relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${activeYear === item.year ? 'bg-white shadow-xl scale-110 border-2 border-indigo-100' : 'hover:bg-white/50'}`}
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg mb-3 transition-transform group-hover:scale-110 ${item.color}`}>
                            {item.year === activeYear ? <Check size={24} /> : <span className="font-bold">{item.year}</span>}
                        </div>
                        <span className={`font-black text-lg ${activeYear === item.year ? 'text-indigo-900' : 'text-slate-500'}`}>{item.year}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* Detail Card */}
        {activeData && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row animate-slide-up">
                <div className={`p-8 md:w-1/3 flex flex-col items-center justify-center text-white ${activeData.color}`}>
                    <div className="bg-white/20 p-6 rounded-full mb-4 animate-pulse">
                        {activeData.icon}
                    </div>
                    <h3 className="text-3xl font-black text-center">{activeData.year}</h3>
                    <span className="mt-2 bg-black/20 px-3 py-1 rounded-full text-sm font-bold">{activeData.type}</span>
                </div>
                
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <h2 className="text-2xl font-black text-slate-800 mb-4">{activeData.title}</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-6">
                        {activeData.desc}
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-700 mb-2 text-sm flex items-center gap-2">
                            <History size={16}/> المميزات:
                        </h4>
                        <div className="flex gap-2 flex-wrap">
                            {activeData.year === 2020 ? (
                                <>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-xs font-bold">دقة عالية</span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-xs font-bold">توفير الجهد والمال</span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-xs font-bold">تحديث فوري</span>
                                </>
                            ) : (
                                <>
                                    <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-lg text-xs font-bold">أساس لقاعدة البيانات</span>
                                    <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-lg text-xs font-bold">جهد بشري كبير</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Comparison Table Activity */}
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 text-center">مقارنة: التعداد التقليدي vs الإلكتروني</h3>
            <div className="grid grid-cols-3 gap-1 text-center text-sm md:text-base">
                <div className="bg-indigo-200 p-3 rounded-t-lg font-black text-indigo-900">وجه المقارنة</div>
                <div className="bg-white p-3 rounded-t-lg font-bold text-slate-700">التقليدي (الميداني)</div>
                <div className="bg-green-100 p-3 rounded-t-lg font-bold text-green-800">الإلكتروني (2020)</div>

                <div className="bg-indigo-100 p-3 font-medium text-indigo-900 border-b border-indigo-200">الأداة المستخدمة</div>
                <div className="bg-white p-3 border-b border-slate-100">استمارة ورقية / جهاز كفي</div>
                <div className="bg-green-50 p-3 border-b border-green-200 font-bold text-green-700">قواعد البيانات الحكومية</div>

                <div className="bg-indigo-100 p-3 font-medium text-indigo-900 border-b border-indigo-200">الجهد والتكلفة</div>
                <div className="bg-white p-3 border-b border-slate-100">عالية جداً (زيارات ميدانية)</div>
                <div className="bg-green-50 p-3 border-b border-green-200 font-bold text-green-700">منخفضة (ربط إلكتروني)</div>

                <div className="bg-indigo-100 p-3 rounded-b-lg font-medium text-indigo-900">دقة البيانات</div>
                <div className="bg-white p-3 rounded-b-lg">معرضة للأخطاء البشرية</div>
                <div className="bg-green-50 p-3 rounded-b-lg font-bold text-green-700">عالية الدقة</div>
            </div>
        </div>
    </div>
  );
};

export default CensusJourney;
