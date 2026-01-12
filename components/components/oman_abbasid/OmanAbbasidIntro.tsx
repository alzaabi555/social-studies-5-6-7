import React, { useState } from 'react';
import { Target, HelpCircle, ShieldCheck, UserCheck, Coins } from 'lucide-react';

interface Props {
    isSection2?: boolean;
}

const OmanAbbasidIntro: React.FC<Props> = ({ isSection2 = false }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  if (isSection2) {
      return (
          <div className="p-6 animate-fade-in space-y-8">
               <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500">
                   <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
                       <ShieldCheck className="text-green-600" size={32} />
                       الإمامة الثانية والاستقرار (232هـ)
                   </h2>
                   <div className="grid md:grid-cols-2 gap-8 items-center">
                       <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                           <p>
                               رغم ضعف الدولة العباسية، عاشت <strong>عمان</strong> فترة استقرار ذهبي.
                           </p>
                           <p>
                               برز الإمام <strong>الصلت بن مالك الخروصي</strong>، وتميز عهده بـ:
                           </p>
                           <ul className="list-disc list-inside space-y-2 bg-green-50 p-4 rounded-xl text-green-900 font-bold text-sm">
                               <li>ترسيخ الأمن وتعزيز القوة الاقتصادية والعسكرية.</li>
                               <li>تحرير جزيرة سقطرى من النصارى.</li>
                           </ul>
                       </div>
                       <div className="relative h-64 bg-slate-100 rounded-2xl border-2 border-slate-200 overflow-hidden flex items-center justify-center">
                           <div className="text-center p-6">
                               <div className="text-6xl mb-4">⚓</div>
                               <h3 className="font-bold text-slate-600">القوة البحرية العمانية</h3>
                           </div>
                       </div>
                   </div>
               </div>
          </div>
      );
  }

  return (
    <div className="p-6 animate-fade-in space-y-8">
      {/* Riddle Section (Page 81) */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
              <div className="bg-white/20 p-4 rounded-full mb-4 animate-pulse">
                  <HelpCircle size={48} />
              </div>
              <h2 className="text-3xl font-black mb-4">لغز تاريخي (صفحة 81) 🤔</h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mb-8">
                  "دولة كبيرة امتدت من حدود الصين شرقاً إلى شمال أفريقيا غرباً، وعلى الرغم من ذلك فإنها <strong>لم تستطع السيطرة على عُمان</strong>. فما هذه الدولة؟"
              </p>
              {!showAnswer ? (
                  <button onClick={() => setShowAnswer(true)} className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-black text-lg shadow-lg hover:scale-105 transition-transform">
                      اكشف الإجابة
                  </button>
              ) : (
                  <div className="bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-2xl animate-bounce">
                      الدولة العباسية
                  </div>
              )}
          </div>
      </div>

      {/* Objectives (Page 82) */}
      <div className="bg-rose-50 border-r-4 border-rose-600 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-rose-900 flex items-center gap-2 mb-4">
          <Target className="text-rose-600" />
          أهداف الدرس:
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-rose-800 font-medium">
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-rose-200 rounded-full flex justify-center items-center text-sm">1</span> تلخص الحياة السياسية في عهد الإمامة الثانية.</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-rose-200 rounded-full flex justify-center items-center text-sm">2</span> تتتبع خط سير الأسطول العماني لنجدة سقطرى.</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-rose-200 rounded-full flex justify-center items-center text-sm">3</span> توضح عوامل تراجع قوة عمان (حملة محمد بن نور).</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-rose-200 rounded-full flex justify-center items-center text-sm">4</span> تستقصي وضع عمان في عهد دولة النباهنة.</li>
        </ul>
      </div>
    </div>
  );
};

export default OmanAbbasidIntro;