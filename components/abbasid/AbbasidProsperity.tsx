import React from 'react';
import { BookOpen, Coins, Building2, Stethoscope, GraduationCap, Wheat, Lightbulb, PenTool } from 'lucide-react';

const AbbasidProsperity: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center">
            <h2 className="text-2xl font-black text-slate-800 mb-2">مظاهر الازدهار (الشكل 2 - صفحة 74)</h2>
            <p className="text-slate-500">رغم الضعف السياسي، شهد العصر نهضة حضارية شاملة في عدة مجالات</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            
            {/* Cultural */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-all">
                <div className="bg-purple-600 p-4 text-white flex items-center gap-3">
                    <BookOpen />
                    <h3 className="font-bold text-lg">المجال الثقافي</h3>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-700 mt-1"><PenTool size={16}/></div>
                        <p className="text-sm text-slate-600">نشطت حركة الترجمة والتأليف في مختلف العلوم (الحديث، التاريخ، الطب).</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-700 mt-1"><GraduationCap size={16}/></div>
                        <p className="text-sm text-slate-600">برز مجموعة من العلماء العظام مثل: <span className="font-bold text-purple-900">البخاري، والرازي، وابن الذهبي</span>.</p>
                    </div>
                </div>
            </div>

            {/* Economic */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-all">
                <div className="bg-emerald-600 p-4 text-white flex items-center gap-3">
                    <Coins />
                    <h3 className="font-bold text-lg">المجال الاقتصادي</h3>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1"><Wheat size={16}/></div>
                        <p className="text-sm text-slate-600">زراعة محاصيل متنوعة مثل <span className="font-bold text-emerald-900">الحبوب والفواكه</span>.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1"><Coins size={16}/></div>
                        <p className="text-sm text-slate-600">ظهور صناعات متطورة مثل: <span className="font-bold text-emerald-900">صناعة النسيج، وتكرير السكر</span>.</p>
                    </div>
                </div>
            </div>

            {/* Urban */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all">
                <div className="bg-orange-600 p-4 text-white flex items-center gap-3">
                    <Building2 />
                    <h3 className="font-bold text-lg">المجال العمراني</h3>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-700 mt-1"><Stethoscope size={16}/></div>
                        <p className="text-sm text-slate-600">إنشاء المستشفيات مثل <span className="font-bold text-orange-900">المستشفى العضدي</span> (في عصر البويهيين).</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-700 mt-1"><Building2 size={16}/></div>
                        <p className="text-sm text-slate-600">إنشاء <span className="font-bold text-orange-900">المدارس النظامية</span> (في عصر السلاجقة).</p>
                    </div>
                </div>
            </div>

        </div>

        {/* Knowledge Window - Page 76 */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-2xl shadow-lg flex items-start gap-4 border border-slate-700">
            <div className="bg-white/10 p-3 rounded-full">
                <Lightbulb className="text-yellow-400" size={32}/>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-2 text-yellow-400">نافذة المعرفة: استفادة الأوروبيين</h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                    استفاد الأوروبيون من المسلمين في هذا العصر، حيث نقلوا إلى بلادهم بعض مظاهر التقدم الحضاري، مثل:
                </p>
                <ul className="list-disc list-inside mt-2 text-slate-300 text-sm">
                    <li>استخدام <strong>الحمام الزاجل</strong> في نقل الرسائل.</li>
                    <li>صناعة الأسلحة مثل <strong>المنجنيق</strong>.</li>
                    <li>العلوم المتقدمة كالطب والفلك.</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default AbbasidProsperity;