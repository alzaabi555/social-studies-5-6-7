import React, { useState } from 'react';
import { Clock, CalendarRange, Map, BarChart3, CheckCircle2, XCircle, ArrowRightLeft, Sun } from 'lucide-react';

interface GameItem {
  id: number;
  text: string;
  type: 'weather' | 'climate';
}

const ITEMS: GameItem[] = [
  { id: 1, text: 'سجلت درجة الحرارة في مسقط يوم الثلاثاء 35 درجة', type: 'weather' },
  { id: 2, text: 'يتميز مناخ البحر المتوسط بأنه حار جاف صيفاً', type: 'climate' },
  { id: 3, text: 'حذرت الأرصاد من ضباب كثيف صباح الغد', type: 'weather' },
  { id: 4, text: 'معدل الأمطار السنوي في ظفار 500 ملم', type: 'climate' },
  { id: 5, text: 'هبت عاصفة رملية مفاجئة بعد الظهر', type: 'weather' },
];

const SectionDefinition: React.FC = () => {
  const [sortedItems, setSortedItems] = useState<{id: number, correct: boolean}[]>([]);
  
  const handleSort = (item: GameItem, selectedType: 'weather' | 'climate') => {
    if (sortedItems.find(i => i.id === item.id)) return;
    const isCorrect = item.type === selectedType;
    setSortedItems([...sortedItems, { id: item.id, correct: isCorrect }]);
    if (!isCorrect) {
      setTimeout(() => {
        setSortedItems(prev => prev.filter(i => i.id !== item.id));
      }, 1000);
    }
  };

  const getStatus = (id: number) => {
    const item = sortedItems.find(i => i.id === id);
    if (!item) return 'pending';
    return item.correct ? 'correct' : 'wrong';
  };

  return (
    <div className="flex flex-col gap-10 p-6 animate-fade-in">
      
      <div className="text-center mb-4">
        <h2 className="text-3xl font-black text-slate-800">مقارنة شاملة: الطقس والمناخ</h2>
        <p className="text-slate-500 mt-2 text-lg">الوجهان لعملة واحدة، ولكن الفرق في التفاصيل</p>
      </div>

      {/* Comparison Table Section */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
        <div className="grid grid-cols-3 bg-slate-800 text-white p-4 font-bold text-lg text-center">
            <div className="flex items-center justify-center gap-2"><ArrowRightLeft /> وجه المقارنة</div>
            <div className="flex items-center justify-center gap-2 text-orange-300"><Clock /> الطقس</div>
            <div className="flex items-center justify-center gap-2 text-indigo-300"><CalendarRange /> المناخ</div>
        </div>

        <div className="grid grid-cols-3 bg-white divide-x divide-x-reverse divide-slate-100 text-slate-700">
            {/* Row 1: Definition */}
            <div className="p-6 font-bold bg-slate-50 border-b">التعريف</div>
            <div className="p-6 border-b">حالة الجو في مكان معين خلال فترة زمنية <span className="font-bold text-orange-600">قصيرة</span>.</div>
            <div className="p-6 border-b">متوسط حالة الجو في مكان معين خلال فترة زمنية <span className="font-bold text-indigo-600">طويلة</span>.</div>

            {/* Row 2: Time */}
            <div className="p-6 font-bold bg-slate-50 border-b">المدة الزمنية</div>
            <div className="p-6 border-b">يوم، يومان، أو أسبوع.</div>
            <div className="p-6 border-b">فصل كامل، سنة، أو عدة سنوات (عادة 30 سنة).</div>

            {/* Row 3: Change */}
            <div className="p-6 font-bold bg-slate-50 border-b">التغير والثبات</div>
            <div className="p-6 border-b text-orange-700">متغير جداً (قد يتغير في نفس اليوم).</div>
            <div className="p-6 border-b text-indigo-700">ثابت نسبياً لا يتغير إلا ببطء شديد.</div>

            {/* Row 4: Importance */}
            <div className="p-6 font-bold bg-slate-50">الأهمية</div>
            <div className="p-6">يفيد في تحديد نوع الملابس، حركة النقل، الصيد، والنشاط اليومي.</div>
            <div className="p-6">يفيد في تحديد أنواع المحاصيل الزراعية، وتخطيط المدن والمشاريع.</div>
        </div>
      </div>

      {/* Visual Metaphor with Custom SVG Scenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex flex-col items-center text-center shadow-lg transform transition-all hover:scale-105">
              <h4 className="font-bold text-orange-800 mb-3 text-lg">مثال على الطقس</h4>
              <div className="relative w-full h-48 bg-white rounded-xl overflow-hidden mb-4 shadow-sm group border-4 border-orange-200">
                  {/* Weather Scene: Split Sunny/Cloudy */}
                  <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="none">
                      <rect width="200" height="300" fill="#BAE6FD" /> {/* Sunny Side */}
                      <rect x="200" width="200" height="300" fill="#94A3B8" /> {/* Cloudy Side */}
                      
                      {/* Sun */}
                      <circle cx="100" cy="80" r="40" fill="#FDE047" />
                      <g stroke="#FDE047" strokeWidth="4">
                         <line x1="100" y1="20" x2="100" y2="10" />
                         <line x1="100" y1="140" x2="100" y2="150" />
                         <line x1="40" y1="80" x2="30" y2="80" />
                         <line x1="160" y1="80" x2="170" y2="80" />
                      </g>

                      {/* Cloud */}
                      <path d="M250,100 Q270,80 290,100 T330,100 T370,100" fill="none" stroke="white" strokeWidth="25" strokeLinecap="round" />
                      <path d="M280,120 L270,140 M310,120 L300,140 M340,120 L330,140" stroke="#CBD5E1" strokeWidth="3" />
                  </svg>
                  
                  <div className="absolute top-2 right-2 bg-white/90 p-1 rounded-full text-orange-500 shadow-sm"><Sun size={24}/></div>
                  <p className="absolute bottom-0 left-0 right-0 bg-orange-100/90 py-2 text-xs font-bold text-orange-800">اليوم مشمس وغداً غائم (متغير)</p>
              </div>
              <p className="text-sm text-slate-600">"اليوم الجو حار، سأرتدي ملابس خفيفة."</p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex flex-col items-center text-center shadow-lg transform transition-all hover:scale-105">
              <h4 className="font-bold text-indigo-800 mb-3 text-lg">مثال على المناخ</h4>
              <div className="relative w-full h-48 bg-white rounded-xl overflow-hidden mb-4 shadow-sm border-4 border-indigo-200">
                  {/* Climate Scene: Stable Green Nature */}
                  <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="none">
                      <rect width="400" height="300" fill="#D1FAE5" /> {/* Background */}
                      
                      {/* Hills */}
                      <path d="M0,200 Q100,150 200,200 T400,180 V300 H0 Z" fill="#10B981" />
                      <path d="M0,250 Q150,220 300,250 T400,240 V300 H0 Z" fill="#059669" />

                      {/* Trees */}
                      <g transform="translate(50, 180)">
                          <rect x="8" y="0" width="4" height="20" fill="#78350F" />
                          <circle cx="10" cy="0" r="15" fill="#047857" />
                      </g>
                      <g transform="translate(150, 160)">
                          <rect x="8" y="0" width="4" height="20" fill="#78350F" />
                          <circle cx="10" cy="0" r="15" fill="#047857" />
                      </g>
                      <g transform="translate(300, 170)">
                           {/* Palm Treeish */}
                           <path d="M10,0 Q5,-20 0,-10 M10,0 Q15,-20 20,-10 M10,0 Q10,-25 10,-10" stroke="#047857" strokeWidth="3" fill="none"/>
                           <rect x="8" y="0" width="4" height="30" fill="#78350F" />
                      </g>

                      {/* Sun always there */}
                      <circle cx="350" cy="50" r="25" fill="#FDBA74" opacity="0.6"/>
                  </svg>

                  <div className="absolute top-2 right-2 bg-white/90 p-1 rounded-full text-indigo-500 shadow-sm"><CalendarRange size={24}/></div>
                  <p className="absolute bottom-0 left-0 right-0 bg-indigo-100/90 py-2 text-xs font-bold text-indigo-800">طبيعة المنطقة خضراء (سمة دائمة)</p>
              </div>
              <p className="text-sm text-slate-600">"نزرع النخيل هنا لأن المناخ حار ومناسب له."</p>
          </div>
      </div>

      {/* Interactive Game */}
      <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-sky-500 blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-purple-500 blur-[100px] opacity-20"></div>
        
        <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">اختبر فهمك: هل العبارة تصف الطقس أم المناخ؟</h3>
            
            <div className="space-y-4 max-w-2xl mx-auto">
            {ITEMS.map((item) => {
                const status = getStatus(item.id);
                if (status === 'correct') return null;

                return (
                <div key={item.id} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                    <p className="font-medium text-lg flex-1 text-center sm:text-right text-white">{item.text}</p>
                    
                    {status === 'wrong' ? (
                    <span className="text-red-300 font-bold flex items-center gap-1 animate-pulse bg-red-900/50 px-3 py-1 rounded-lg">
                        <XCircle size={20}/> خطأ، حاول مجدداً
                    </span>
                    ) : (
                    <div className="flex gap-3">
                        <button 
                        onClick={() => handleSort(item, 'weather')}
                        className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold shadow-lg transition-all transform hover:scale-105"
                        >
                        طقس
                        </button>
                        <button 
                        onClick={() => handleSort(item, 'climate')}
                        className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-bold shadow-lg transition-all transform hover:scale-105"
                        >
                        مناخ
                        </button>
                    </div>
                    )}
                </div>
                );
            })}
            
            {sortedItems.filter(i => i.correct).length === ITEMS.length && (
                <div className="text-center p-8 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 font-bold text-3xl animate-bounce">
                أحسنت! فهمك للفرق بين الطقس والمناخ ممتاز 🌟
                </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDefinition;