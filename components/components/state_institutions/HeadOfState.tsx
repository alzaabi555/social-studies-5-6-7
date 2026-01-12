import React from 'react';
import { Crown, ShieldCheck, PenTool, Globe, Lock } from 'lucide-react';

const HeadOfState: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        {/* Main Card */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
                <div className="inline-block bg-yellow-500/20 p-4 rounded-full mb-4 ring-2 ring-yellow-500/50">
                    <Crown size={48} className="text-yellow-400" />
                </div>
                <h2 className="text-3xl font-black text-yellow-400 mb-2">رئيس الدولة (السلطان)</h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                    هو رئيس الدولة والممثل الأسمى لها، والقائد الأعلى، ذاته مصونة لا تمس، واحترامه واجب، وأمره مطاع.
                </p>
            </div>
        </div>

        {/* Roles Grid - Based on Diagram Page 120 */}
        <div className="grid md:grid-cols-2 gap-4">
            
            <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-green-500 flex items-center gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-green-100 p-3 rounded-full text-green-700">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">الاستقلال والسيادة</h3>
                    <p className="text-sm text-slate-600">المحافظة على استقلال البلاد ووحدة أراضيها.</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500 flex items-center gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <PenTool size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">التشريع</h3>
                    <p className="text-sm text-slate-600">إصدار القوانين والتصديق عليها.</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-red-500 flex items-center gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-red-100 p-3 rounded-full text-red-700">
                    <Lock size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">حماية الدولة</h3>
                    <p className="text-sm text-slate-600">اتخاذ الإجراءات لمواجهة أي خطر يهدد سلامة الدولة وشعبها.</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-indigo-500 flex items-center gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-700">
                    <Globe size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">العلاقات الدولية</h3>
                    <p className="text-sm text-slate-600">توقيع المعاهدات والاتفاقيات الدولية.</p>
                </div>
            </div>

        </div>
    </div>
  );
};

export default HeadOfState;