import React from 'react';
import { FileQuestion, ArrowRight, Star, Sparkles } from 'lucide-react';

// لا نحتاج لتعريف props معقدة، نقبل أي شيء ولا نستخدمه
const SectionQuiz: React.FC<any> = () => {
  
  return (
    <div className="w-full bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-1 shadow-lg my-8 transform hover:scale-[1.01] transition-transform duration-300">
      <div className="bg-white/10 backdrop-blur-sm rounded-[22px] p-8 text-center text-white border border-white/20 relative overflow-hidden">
        
        {/* تأثيرات خلفية جمالية */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="bg-white/20 p-4 rounded-2xl shadow-inner mb-2 animate-bounce">
            <Sparkles size={32} className="text-yellow-300" />
          </div>

          <h2 className="text-3xl font-black mb-2">هل أنت مستعد للتحدي؟</h2>
          
          <p className="text-indigo-100 text-lg max-w-md leading-relaxed mb-6">
            تم نقل اختبار هذا الدرس إلى 
            <span className="font-bold text-yellow-300 mx-1">بنك الأسئلة الشامل</span>
            لتحصل على تجربة تقييم أكثر متعة واحترافية!
          </p>

          <div className="flex flex-col gap-3 w-full max-w-sm">
            <div className="bg-white/10 border border-white/20 p-4 rounded-xl flex items-center gap-3 text-right">
              <div className="bg-indigo-500 p-2 rounded-lg"><FileQuestion size={20}/></div>
              <div className="flex-1">
                <h3 className="font-bold text-sm">كيف أصل للاختبار؟</h3>
                <p className="text-xs text-indigo-200">عد للقائمة الرئيسية &larr; اختر بنك الأسئلة</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SectionQuiz;
