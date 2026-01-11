import React, { useState } from 'react';
import { Zap, Flame, Smartphone, Bird, ArrowDown, CheckCircle2, MessageSquarePlus } from 'lucide-react';

interface Scenario {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    question: "من الجهة المسؤولة؟";
    answer: string;
}

const GovServices: React.FC = () => {
  const [revealed, setRevealed] = useState<number | null>(null);

  const scenarios: Scenario[] = [
      {
          id: 1,
          title: "انقطاع الكهرباء",
          description: "تذكرت سارة الأنواء المناخية التي مرت بها السلطنة، حيث انقطع التيار الكهربائي عن الحي لعدة ساعات، ثم شاهدت عمالاً يعملون ليلاً لإعادته.",
          icon: <Zap size={32} className="text-yellow-500"/>,
          color: "bg-yellow-50 border-yellow-200",
          question: "من الجهة المسؤولة؟",
          answer: "هيئة تنظيم الخدمات العامة / شركات الكهرباء (تحت إشراف حكومي)"
      },
      {
          id: 2,
          title: "حريق وهمي (إخلاء)",
          description: "أقيمت في المدرسة فعالية بعنوان 'أمانك بيدك'، تضمنت تدريباً عملياً على إطفاء حريق وإسعاف المصابين.",
          icon: <Flame size={32} className="text-red-500"/>,
          color: "bg-red-50 border-red-200",
          question: "من الجهة المسؤولة؟",
          answer: "هيئة الدفاع المدني والإسعاف (شرطة عمان السلطانية)"
      },
      {
          id: 3,
          title: "الابتزاز الإلكتروني",
          description: "تلقى مازن رسالة تهديد من شخص مجهول يطلب المال مقابل عدم نشر صور خاصة. قام والده بالإبلاغ فوراً.",
          icon: <Smartphone size={32} className="text-slate-700"/>,
          color: "bg-slate-100 border-slate-300",
          question: "من الجهة المسؤولة؟",
          answer: "الادعاء العام / إدارة مكافحة الجرائم الإلكترونية (الشرطة)"
      },
      {
          id: 4,
          title: "صيد غير قانوني",
          description: "لاحظ زيد رجلاً يصطاد ظبياً نادراً في منطقة محمية. بعد أيام قرأ خبراً عن ضبط المخالف وتحويله للقضاء.",
          icon: <Bird size={32} className="text-green-600"/>,
          color: "bg-green-50 border-green-200",
          question: "من الجهة المسؤولة؟",
          answer: "هيئة البيئة (وحدات مراقبة الحياة الفطرية)"
      }
  ];

  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-800 mb-2">تطبيق عملي: الخدمات الحكومية</h2>
            <p className="text-slate-500">اقرأ المواقف التالية وحاول استنتاج الجهة الحكومية المسؤولة</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((item) => (
                <div key={item.id} className={`p-6 rounded-2xl border-2 shadow-sm transition-all ${item.color}`}>
                    <div className="flex items-start gap-4 mb-4">
                        <div className="bg-white p-3 rounded-full shadow-sm">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200/50">
                        {revealed === item.id ? (
                            <div className="animate-slide-up bg-white/80 p-3 rounded-xl flex items-center gap-3">
                                <CheckCircle2 className="text-green-600 flex-shrink-0" />
                                <span className="font-bold text-slate-800 text-sm">{item.answer}</span>
                            </div>
                        ) : (
                            <button 
                                onClick={() => setRevealed(item.id)}
                                className="w-full py-2 bg-white hover:bg-slate-50 text-slate-600 font-bold rounded-xl border border-slate-300 flex items-center justify-center gap-2 text-sm transition-colors"
                            >
                                <ArrowDown size={16} />
                                {item.question}
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* Reflection Activity (Page 125) */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 text-white mt-12 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                    <MessageSquarePlus size={32} />
                </div>
                <h3 className="text-2xl font-black">أجب عما يأتي: (صفحة 125)</h3>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed opacity-90">
                تسهم المؤسسات الحكومية في تطوير الخدمات العامة. في ضوء ذلك:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <h4 className="font-bold text-lg mb-2 text-yellow-300">ما الخدمة التي ترغب في تحسينها؟</h4>
                    <p className="text-sm text-slate-200">فكر في خدمة تحتاجها في محافظتك (صحية، تعليمية، ترفيهية...).</p>
                    <textarea className="w-full mt-3 p-3 rounded-lg bg-white/90 text-slate-800 text-sm h-24" placeholder="اكتب إجابتك هنا..."></textarea>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <h4 className="font-bold text-lg mb-2 text-green-300">اقترح حلولاً لتطويرها</h4>
                    <p className="text-sm text-slate-200">كيف يمكن للمؤسسات تحسين هذه الخدمة؟</p>
                    <textarea className="w-full mt-3 p-3 rounded-lg bg-white/90 text-slate-800 text-sm h-24" placeholder="اكتب مقترحاتك هنا..."></textarea>
                </div>
            </div>
        </div>
    </div>
  );
};

export default GovServices;