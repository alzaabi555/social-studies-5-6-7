import React, { useState } from 'react';
import { DoorOpen, Book, Users, Briefcase, Shield, Landmark, Scale, Search } from 'lucide-react';

const StatuteStructure: React.FC = () => {
  const [activeDoor, setActiveDoor] = useState<number | null>(null);

  const doors = [
      { id: 1, title: 'الباب الأول', subtitle: 'الدولة ونظام الحكم', icon: <Landmark />, desc: 'يحدد شكل الدولة، دينها، لغتها، عاصمتها، ونظام الحكم فيها.' },
      { id: 2, title: 'الباب الثاني', subtitle: 'المبادئ الموجهة', icon: <Book />, desc: 'المبادئ السياسية، الاقتصادية، الاجتماعية، الثقافية، والأمنية للدولة.' },
      { id: 3, title: 'الباب الثالث', subtitle: 'الحقوق والواجبات', icon: <Scale />, desc: 'حقوق المواطنين وواجباتهم العامة والحريات المكفولة لهم.' },
      { id: 4, title: 'الباب الرابع', subtitle: 'رئيس الدولة', icon: <Users />, desc: 'صلاحيات السلطان، مجلس الوزراء، والمجالس المتخصصة.' },
      { id: 5, title: 'الباب الخامس', subtitle: 'مجلس عمان', icon: <Users />, desc: 'تكوين مجلس عمان (مجلس الدولة ومجلس الشورى) واختصاصاته.' },
      { id: 6, title: 'الباب السادس', subtitle: 'القضاء', icon: <Shield />, desc: 'استقلالية القضاء، أنواع المحاكم، والجهات القضائية.' },
      { id: 7, title: 'الباب السابع', subtitle: 'أحكام عامة', icon: <Briefcase />, desc: 'أحكام ختامية وانتقالية.' },
  ];

  return (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">أبواب النظام الأساسي للدولة</h2>
            <p className="text-slate-500">يتكون النظام الأساسي من 7 أبواب رئيسية.. اضغط لفتح الباب واكتشاف محتواه</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {doors.map((door) => (
                <div 
                    key={door.id}
                    onClick={() => setActiveDoor(activeDoor === door.id ? null : door.id)}
                    className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-500 relative overflow-hidden group ${activeDoor === door.id ? 'bg-teal-600 text-white shadow-xl scale-105 z-10' : 'bg-white border-slate-200 hover:border-teal-300'}`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${activeDoor === door.id ? 'bg-teal-500 text-white' : 'bg-teal-50 text-teal-800'}`}>
                            {door.title}
                        </span>
                        <div className={`p-2 rounded-full ${activeDoor === door.id ? 'bg-white/20' : 'bg-slate-100 text-slate-600'}`}>
                            {activeDoor === door.id ? <DoorOpen size={24}/> : door.icon}
                        </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${activeDoor === door.id ? 'text-white' : 'text-slate-800'}`}>
                        {door.subtitle}
                    </h3>

                    {activeDoor === door.id && (
                        <p className="text-teal-50 text-sm leading-relaxed animate-fade-in">
                            {door.desc}
                        </p>
                    )}

                    {activeDoor !== door.id && (
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
                    )}
                </div>
            ))}
        </div>

        {/* Search Activity (Page 113) */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 mt-8">
            <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                <Search size={32} />
            </div>
            <div>
                <h4 className="font-bold text-lg text-orange-900 mb-2">ابحث واكتشف (صفحة 113)</h4>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                    بالاستعانة بمصادر التعلم، ابحث عن بعض المواد المكونة للأبواب التالية واعرضها أمام زملائك:
                </p>
                <div className="flex gap-4">
                    <span className="bg-white px-4 py-2 rounded-lg text-sm font-bold text-orange-800 shadow-sm border border-orange-100">الباب الأول: الدولة ونظام الحكم</span>
                    <span className="bg-white px-4 py-2 rounded-lg text-sm font-bold text-orange-800 shadow-sm border border-orange-100">الباب الثالث: الحقوق والواجبات</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StatuteStructure;