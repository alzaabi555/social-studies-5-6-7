import React from 'react';
import { Leaf } from 'lucide-react';

const OmanData: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-12">
        
        {/* Rainfall Charts */}
        <div>
            <h2 className="text-2xl font-black text-slate-800 mb-6 text-center">تحليل بيانات الأمطار</h2>
            <div className="grid md:grid-cols-2 gap-8">
                
                {/* Diba Chart (Winter Rain) */}
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                    <h3 className="font-bold text-center mb-4 text-blue-700">محطة دبا (أمطار شتوية)</h3>
                    <div className="h-48 flex items-end justify-between gap-1 px-2 border-b-2 border-slate-200 pb-1">
                        {[50, 60, 30, 10, 5, 0, 0, 0, 5, 10, 40, 55].map((val, i) => (
                            <div key={i} className="w-full bg-blue-400 rounded-t hover:bg-blue-600 transition-colors relative group" style={{ height: `${val}%` }}>
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100">{val}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                        <span>يناير</span>
                        <span>يونيو</span>
                        <span>ديسمبر</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 text-center">تتركز الأمطار في شهور الشتاء (يناير/فبراير) بسبب المنخفضات الجوية.</p>
                </div>

                {/* Qairon Hairiti Chart (Summer Rain) */}
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                    <h3 className="font-bold text-center mb-4 text-teal-700">محطة قيرون حيرتي (أمطار موسمية)</h3>
                    <div className="h-48 flex items-end justify-between gap-1 px-2 border-b-2 border-slate-200 pb-1">
                        {[5, 5, 10, 15, 20, 40, 80, 75, 30, 10, 5, 5].map((val, i) => (
                            <div key={i} className="w-full bg-teal-400 rounded-t hover:bg-teal-600 transition-colors relative group" style={{ height: `${val}%` }}>
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100">{val}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                        <span>يناير</span>
                        <span>يونيو</span>
                        <span>ديسمبر</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 text-center">تتركز الأمطار في شهور الصيف (يوليو/أغسطس) بسبب الرياح الموسمية (الخريف).</p>
                </div>
            </div>
        </div>

        {/* Net Zero Strategy */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 border border-green-200 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
                <Leaf size={200} />
            </div>
            
            <span className="bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-4 inline-block">رؤية عمان</span>
            <h2 className="text-3xl font-black text-green-900 mb-4">الحياد الصفري الكربوني 2050</h2>
            <p className="text-green-800 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
                تسعى سلطنة عمان للوصول إلى تصفير الانبعاثات الكربونية بحلول عام 2050، وذلك من خلال الاستثمار في الطاقة المتجددة (الشمسية والرياح) والهيدروجين الأخضر.
            </p>
            
            <div className="flex justify-center gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm text-green-700 font-bold text-sm">
                    🌱 طاقة نظيفة
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-green-700 font-bold text-sm">
                    🚗 نقل مستدام
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-green-700 font-bold text-sm">
                    🏭 صناعة خضراء
                </div>
            </div>
        </div>
    </div>
  );
};

export default OmanData;