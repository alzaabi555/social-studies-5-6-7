import React, { useState } from 'react';
import { Target, Library, Info, ArrowRightLeft } from 'lucide-react';

const AbbasidIntro: React.FC = () => {
  const [showObservation, setShowObservation] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="p-6 animate-fade-in space-y-8">
      
      {/* Visual Hook: Before and After */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-100">
          <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-800">ماذا تلاحظ في الصورتين؟ (صفحة 71)</h2>
              <p className="text-slate-500">اضغط على الزر لكشف العلاقة بين المشهدين</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 h-64">
              {/* Image 1: Golden Era Library */}
              <div className="relative rounded-xl overflow-hidden border-4 border-amber-200 group">
                  <div className="absolute inset-0 bg-amber-900/10"></div>
                  <svg viewBox="0 0 400 300" className="w-full h-full bg-[#3E2723]">
                       <rect x="20" y="20" width="360" height="260" fill="#5D4037" />
                       {Array.from({length: 40}).map((_, i) => (
                           <rect 
                            key={i}
                            x={40 + (i % 10) * 32} 
                            y={40 + Math.floor(i / 10) * 60} 
                            width="25" 
                            height="40" 
                            fill={['#C62828', '#1565C0', '#2E7D32', '#F9A825'][i % 4]} 
                            stroke="#3E2723"
                           />
                       ))}
                       <path d="M400,100 L250,300 L400,300 Z" fill="#FFECB3" opacity="0.3" />
                  </svg>
                  <div className="absolute bottom-2 right-2 bg-amber-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow">
                      1. العصر الذهبي (الازدهار)
                  </div>
              </div>

              {/* Image 2: Destruction */}
              <div className="relative rounded-xl overflow-hidden border-4 border-slate-400 grayscale group">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <svg viewBox="0 0 400 300" className="w-full h-full bg-[#1a1a1a]">
                       <path d="M20,20 L380,50 L360,280 L20,260 Z" fill="#3E2723" transform="rotate(5 200 150)" />
                       {Array.from({length: 15}).map((_, i) => (
                           <rect 
                            key={i}
                            x={Math.random() * 300} 
                            y={250 + Math.random() * 40} 
                            width="25" 
                            height="10" 
                            fill="#5D4037" 
                            transform={`rotate(${Math.random() * 360})`}
                           />
                       ))}
                       <path d="M0,0 L400,300" stroke="white" strokeWidth="1" opacity="0.1" />
                       <path d="M400,0 L0,300" stroke="white" strokeWidth="1" opacity="0.1" />
                  </svg>
                  <div className="absolute bottom-2 right-2 bg-slate-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow">
                      2. الانهيار والغزو
                  </div>
              </div>
          </div>

          <div className="mt-6 text-center">
               {!showObservation ? (
                   <button 
                    onClick={() => setShowObservation(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg animate-bounce"
                   >
                       كشف الإجابة 💡
                   </button>
               ) : (
                   <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 text-purple-900 animate-slide-up">
                       <p className="font-bold text-lg mb-2">المفارقة العجيبة!</p>
                       <p>
                           رغم أن العصر العباسي الثاني شهد <strong>ضعفاً سياسياً</strong> وانقساماً للدولة، إلا أنه تميز <strong>بازدهار حضاري وعلمي</strong> هائل. 
                           لكنه انتهى نهاية مأساوية بتدمير كل هذا التراث على يد المغول.
                       </p>
                   </div>
               )}
          </div>
      </div>

      {/* Intro Text */}
      <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-400">
          <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Info size={20}/> الإطار الزمني (صفحة 73)</h3>
          <p className="text-slate-700 leading-relaxed">
              بدأ العصر العباسي الثاني بتولي الخليفة <strong>المتوكل (232هـ)</strong>، وامتد لأكثر من أربعة قرون حتى سقوط بغداد عام <strong>(656هـ)</strong>.
              عرف بعصر <span className="text-red-600 font-bold">الضعف والانقسام</span> سياسياً، وعصر <span className="text-green-600 font-bold">الموسوعات والعلوم</span> حضارياً.
          </p>
      </div>

      {/* Comparison Activity (Page 73) */}
      <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
          <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                  <ArrowRightLeft /> قارن: العصر العباسي الأول والثاني
              </h3>
              <button 
                onClick={() => setShowComparison(!showComparison)}
                className="bg-indigo-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-indigo-700 transition-colors"
              >
                  {showComparison ? 'إخفاء المقارنة' : 'ابدأ المقارنة'}
              </button>
          </div>

          {showComparison && (
              <div className="overflow-x-auto animate-slide-up">
                  <table className="w-full text-right border-collapse bg-white rounded-lg shadow overflow-hidden">
                      <thead>
                          <tr className="bg-indigo-700 text-white">
                              <th className="p-3 border-b">أوجه المقارنة</th>
                              <th className="p-3 border-b bg-indigo-600">العصر العباسي الأول</th>
                              <th className="p-3 border-b bg-purple-600">العصر العباسي الثاني</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="border-b hover:bg-slate-50">
                              <td className="p-3 font-bold text-slate-700">الفترة الزمنية</td>
                              <td className="p-3 text-slate-600">132هـ - 232هـ</td>
                              <td className="p-3 text-slate-600">232هـ - 656هـ</td>
                          </tr>
                          <tr className="border-b hover:bg-slate-50">
                              <td className="p-3 font-bold text-slate-700">سمات العصر</td>
                              <td className="p-3 text-slate-600">قوة الدولة، المركزية، الازدهار السياسي</td>
                              <td className="p-3 text-slate-600">ضعف الخلفاء، نفوذ القادة الأتراك، ظهور الدويلات المستقلة، ازدهار علمي</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          )}
      </div>

      {/* Objectives */}
      <div className="bg-indigo-50 border-r-4 border-indigo-600 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2 mb-4">
          <Target className="text-indigo-600" />
          أهداف الدرس (صفحة 72):
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-indigo-800 font-medium">
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-indigo-200 rounded-full flex justify-center items-center text-sm">1</span> يلخص الأوضاع السياسية في العصر العباسي الثاني.</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-indigo-200 rounded-full flex justify-center items-center text-sm">2</span> يحدد على الخريطة بعض الدول المستقلة.</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-indigo-200 rounded-full flex justify-center items-center text-sm">3</span> يدلل على ازدهار العصر العباسي الثاني.</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-indigo-200 rounded-full flex justify-center items-center text-sm">4</span> يصنف عوامل نهاية الدولة العباسية (داخلية وخارجية).</li>
        </ul>
      </div>
    </div>
  );
};

export default AbbasidIntro;