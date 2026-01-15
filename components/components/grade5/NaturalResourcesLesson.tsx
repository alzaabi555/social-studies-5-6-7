
import React, { useState, useEffect } from 'react';
import { Sun, Wind, Droplet, Fuel, Target, RotateCcw, Factory, Coins, TreeDeciduous, Pickaxe, MapPin, CheckCircle, Flame, Leaf, Clock, TrendingUp, AlertTriangle, BookOpen, Menu, ArrowRight, Zap, Fish, Hammer, Search, Lightbulb, ShieldCheck, Info } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const NaturalResourcesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'types' | 'map' | 'economy' | 'sustain' | 'story'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO (Page 35) ---
  const IntroSection = () => {
      const [needs, setNeeds] = useState<string[]>([]);
      
      const toggleNeed = (need: string) => {
          if (needs.includes(need)) return;
          setNeeds([...needs, need]);
      };

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="bg-amber-50 border-r-4 border-amber-600 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-3 text-amber-800 font-medium text-lg">
                      <li>• مفهوم الموارد الطبيعية وأنواعها.</li>
                      <li>• أهميتها الاقتصادية.</li>
                      <li>• الجهود الوطنية لاستدامتها في سلطنة عمان.</li>
                  </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 text-center">
                  <div className="relative h-80 bg-sky-200 group overflow-hidden">
                      <div className="absolute bottom-0 w-full h-24 bg-[#E6D5B8]"></div>
                      <div className="absolute bottom-24 w-full h-12 bg-[#C2B280] skew-y-1"></div>
                      
                      {/* Sun */}
                      <button onClick={() => toggleNeed('الشمس')} className="absolute top-10 right-10 hover:scale-125 transition-transform animate-spin-slow cursor-pointer">
                          <Sun size={64} className="text-yellow-500 fill-yellow-500" />
                      </button>
                      
                      {/* Water */}
                      <button onClick={() => toggleNeed('الماء')} className="absolute bottom-0 left-0 w-full h-20 bg-blue-400/80 cursor-pointer hover:bg-blue-500 transition-colors flex items-center justify-center">
                          <span className="text-white font-bold opacity-0 hover:opacity-100">مياه</span>
                      </button>

                      {/* Plants */}
                      <button onClick={() => toggleNeed('النبات')} className="absolute bottom-20 left-20 cursor-pointer hover:-translate-y-2 transition-transform">
                          <TreeDeciduous size={80} className="text-green-700 fill-green-700" />
                      </button>

                      {/* Instructions */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full shadow font-bold text-slate-700 text-sm">
                          تأمل الصورة: ماذا يحتاج الإنسان لاستمرار حياته؟
                      </div>
                  </div>

                  <div className="p-6">
                      <div className="flex justify-center gap-4 flex-wrap min-h-[50px]">
                          {needs.map(n => (
                              <span key={n} className="bg-green-100 text-green-800 px-4 py-2 rounded-xl font-bold animate-scale-in border border-green-200 shadow-sm">{n}</span>
                          ))}
                      </div>
                      <div className="mt-6 bg-amber-50 p-6 rounded-xl border-2 border-amber-100 shadow-sm">
                          <h3 className="font-black text-amber-900 text-xl mb-2">💡 مفهوم الموارد الطبيعية:</h3>
                          <p className="font-medium text-slate-700 text-lg">"هي الموارد التي أوجدها الله في الطبيعة لخدمة الإنسان، دون تدخل منه."</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. TYPES & DEFINITIONS (Pages 36-37) ---
  const TypesSection = () => {
      const [activeType, setActiveType] = useState<'renewable' | 'non_renewable' | null>(null);

      const renewableItems = [
          { name: 'طاقة الشمس', icon: <Sun className="text-yellow-500"/> },
          { name: 'طاقة الرياح', icon: <Wind className="text-blue-400"/> },
          { name: 'المياه', icon: <Droplet className="text-blue-600"/> },
          { name: 'النباتات الطبيعية', icon: <TreeDeciduous className="text-green-600"/> },
          { name: 'الحيوانات', icon: <div className="text-2xl">🐪</div> },
      ];

      const nonRenewableItems = [
          { name: 'النفط', icon: <Fuel className="text-slate-700"/> },
          { name: 'الغاز الطبيعي', icon: <Flame className="text-orange-500"/> },
          { name: 'الفحم', icon: <div className="bg-black w-6 h-6 rounded-full"/> },
          { name: 'المعادن', icon: <Pickaxe className="text-slate-500"/> },
      ];

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center">
                  <h2 className="text-3xl font-black text-slate-800 mb-2">أنواع الموارد الطبيعية</h2>
                  <p className="text-slate-500">تصنف حسب استمراريتها إلى نوعين (الشكل 10)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {/* Renewable Column */}
                  <div 
                      onClick={() => setActiveType('renewable')}
                      className={`cursor-pointer rounded-3xl border-4 transition-all duration-300 p-6 ${activeType === 'renewable' ? 'bg-green-50 border-green-500 shadow-xl scale-105' : 'bg-white border-green-200 hover:border-green-300'}`}
                  >
                      <div className="flex items-center gap-3 mb-4">
                          <div className="bg-green-100 p-3 rounded-full text-green-700"><RotateCcw size={32}/></div>
                          <h3 className="text-2xl font-black text-green-900">1. الموارد المتجددة</h3>
                      </div>
                      
                      {activeType === 'renewable' && (
                          <div className="animate-fade-in space-y-4">
                              <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                                  <h4 className="font-bold text-green-800 mb-1">التعريف (ص 36):</h4>
                                  <p className="text-slate-700">"هي التي تتوفر باستمرار من خلال العمليات التي تحدث في أغلفة كوكب الأرض."</p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                  {renewableItems.map((item, idx) => (
                                      <div key={idx} className="flex items-center gap-2 bg-green-100/50 p-2 rounded-lg">
                                          {item.icon} <span className="font-bold text-sm text-green-900">{item.name}</span>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}
                      {activeType !== 'renewable' && <p className="text-slate-400 text-sm">اضغط للتفاصيل والأمثلة</p>}
                  </div>

                  {/* Non-Renewable Column */}
                  <div 
                      onClick={() => setActiveType('non_renewable')}
                      className={`cursor-pointer rounded-3xl border-4 transition-all duration-300 p-6 ${activeType === 'non_renewable' ? 'bg-slate-100 border-slate-600 shadow-xl scale-105' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                  >
                      <div className="flex items-center gap-3 mb-4">
                          <div className="bg-slate-200 p-3 rounded-full text-slate-700"><Fuel size={32}/></div>
                          <h3 className="text-2xl font-black text-slate-800">2. الموارد غير المتجددة</h3>
                      </div>

                      {activeType === 'non_renewable' && (
                          <div className="animate-fade-in space-y-4">
                              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                  <h4 className="font-bold text-slate-900 mb-1">التعريف (ص 37):</h4>
                                  <p className="text-slate-700">"هي الموجودة بكميات محدودة في الأرض، وتنفد مع استهلاكها."</p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                  {nonRenewableItems.map((item, idx) => (
                                      <div key={idx} className="flex items-center gap-2 bg-slate-200/50 p-2 rounded-lg">
                                          {item.icon} <span className="font-bold text-sm text-slate-900">{item.name}</span>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}
                      {activeType !== 'non_renewable' && <p className="text-slate-400 text-sm">اضغط للتفاصيل والأمثلة</p>}
                  </div>
              </div>

              {/* Info Box (Ma'louma Tuhammuka - Page 37) */}
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm mt-8">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mt-1">
                      <Info size={24} />
                  </div>
                  <div>
                      <h4 className="font-black text-indigo-900 text-lg mb-2">معلومة تهمك (ص 37): سرعة التجدد</h4>
                      <p className="text-indigo-800 leading-relaxed">
                          يوجد نوعان من الموارد المتجددة:
                      </p>
                      <ul className="mt-2 space-y-2 text-indigo-900">
                          <li className="flex items-center gap-2">
                              <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full font-bold">سريعة التجدد</span>
                              مثل: المياه الجوفية، الثروة الحيوانية، والسمكية.
                          </li>
                          <li className="flex items-center gap-2">
                              <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full font-bold">بطيئة التجدد</span>
                              تحتاج فترة زمنية طويلة، مثل: <strong>التربة</strong>، وأشجار الغابات المقطوعة.
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. MAP ACTIVITY (Page 38) ---
  const MapSection = () => {
      // Activity State
      const [tableData, setTableData] = useState<{gov: string, resource: string, type: string}[]>([
          { gov: '', resource: '', type: '' },
          { gov: '', resource: '', type: '' },
          { gov: '', resource: '', type: '' },
          { gov: '', resource: '', type: '' }
      ]);
      const [filledRows, setFilledRows] = useState(0);

      const mapPoints = [
          { id: 'musandam', x: 80, y: 10, gov: 'مسندم', res: 'أسماك', type: 'متجدد', icon: '🐟' },
          { id: 'batinah', x: 75, y: 20, gov: 'شمال الباطنة', res: 'نحاس (معادن)', type: 'غير متجدد', icon: '⛏️' },
          { id: 'dhahirah', x: 60, y: 25, gov: 'الظاهرة', res: 'نفط وغاز', type: 'غير متجدد', icon: '🛢️' },
          { id: 'dhofar', x: 30, y: 80, gov: 'ظفار', res: 'طاقة الرياح', type: 'متجدد', icon: '💨' },
      ];

      const handlePointClick = (point: any) => {
          // Check if already added
          if (tableData.some(row => row.gov === point.gov)) return;

          const newData = [...tableData];
          newData[filledRows] = { gov: point.gov, resource: point.res, type: point.type };
          setTableData(newData);
          setFilledRows(prev => Math.min(prev + 1, 4));
      };

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">تأمل وأجب (نشاط ص 38)</h2>
                  <p className="text-slate-500">اضغط على الرموز في الخريطة لإكمال الجدول أدناه</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Map */}
                  <div className="w-full lg:w-1/2 relative bg-[#e0f2fe] rounded-3xl border-4 border-slate-200 aspect-[3/4] shadow-inner overflow-hidden">
                      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                          <path d="M85,5 L90,10 L85,15 L95,20 L90,30 L80,35 L60,50 L40,80 L20,90 L10,80 L30,60 L50,40 L60,20 L75,10 Z" fill="#d1fae5" stroke="#059669" strokeWidth="0.5"/>
                      </svg>
                      {mapPoints.map((p) => (
                          <button
                              key={p.id}
                              onClick={() => handlePointClick(p)}
                              className="absolute w-10 h-10 bg-white rounded-full shadow-lg border-2 border-indigo-500 flex items-center justify-center text-xl hover:scale-125 transition-transform z-10 animate-bounce"
                              style={{ top: `${p.y}%`, left: `${p.x}%` }}
                          >
                              {p.icon}
                          </button>
                      ))}
                  </div>

                  {/* Table */}
                  <div className="w-full lg:w-1/2">
                      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                          <table className="w-full text-center">
                              <thead>
                                  <tr className="bg-indigo-600 text-white">
                                      <th className="p-3">المحافظة</th>
                                      <th className="p-3">اسم المورد</th>
                                      <th className="p-3">نوعه</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {tableData.map((row, i) => (
                                      <tr key={i} className="border-b border-slate-100 last:border-0 h-12 hover:bg-slate-50">
                                          <td className="font-bold text-slate-700">{row.gov}</td>
                                          <td className="text-slate-600">{row.resource}</td>
                                          <td className={`font-bold ${row.type === 'متجدد' ? 'text-green-600' : row.type === 'غير متجدد' ? 'text-red-600' : ''}`}>
                                              {row.type}
                                          </td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                          {filledRows < 4 && (
                              <div className="p-4 text-center text-sm text-slate-400">
                                  بانتظار اختيارك من الخريطة... ({filledRows}/4)
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. ECONOMY (Graphic Simulation) (Page 39) ---
  const EconomySection = () => {
      const [activePath, setActivePath] = useState<string | null>(null);

      const items = [
          { id: 'energy', title: 'إنتاج الطاقة', input: 'النفط والغاز', icon: <Flame size={24}/>, color: 'text-orange-500', bg: 'bg-orange-100' },
          { id: 'food', title: 'الغذاء', input: 'الزراعة والأسماك', icon: <Fish size={24}/>, color: 'text-green-500', bg: 'bg-green-100' },
          { id: 'industry', title: 'مواد خام للصناعة', input: 'المعادن والأخشاب', icon: <Hammer size={24}/>, color: 'text-purple-500', bg: 'bg-purple-100' },
          { id: 'income', title: 'مصدر للدخل', input: 'تصدير الفائض', icon: <Coins size={24}/>, color: 'text-yellow-600', bg: 'bg-yellow-100' },
      ];

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-slate-800 mb-4">الأهمية الاقتصادية (محاكاة الشكل 11)</h2>
                  <p className="text-slate-500">كيف تتحول الموارد الطبيعية إلى قيمة اقتصادية؟</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((item) => (
                      <div 
                          key={item.id}
                          onMouseEnter={() => setActivePath(item.id)}
                          onMouseLeave={() => setActivePath(null)}
                          className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${activePath === item.id ? 'border-indigo-500 shadow-xl scale-105' : 'border-slate-200 bg-white'}`}
                      >
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                              {item.icon}
                          </div>
                          <h4 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h4>
                          <p className="text-sm text-slate-500">يعتمد على: {item.input}</p>
                          
                          {/* Connection Animation */}
                          {activePath === item.id && (
                              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 animate-pulse rounded-t-2xl"></div>
                          )}
                      </div>
                  ))}
              </div>

              <div className="bg-slate-800 text-white p-6 rounded-2xl text-center shadow-lg mt-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                      <Coins className="text-yellow-400" />
                      <h3 className="text-xl font-bold">النتيجة النهائية</h3>
                  </div>
                  <p className="text-slate-300">تعد الموارد الطبيعية عنصراً مهماً في النشاط الاقتصادي ومصدراً للدخل للفرد والمجتمع.</p>
              </div>
          </div>
      );
  };

  // --- 5. SUSTAINABILITY (Pages 40-41) ---
  const SustainSection = () => {
      const [showDef, setShowDef] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-10">
              
              {/* Definition (Page 40) */}
              <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 text-center relative overflow-hidden">
                  <div className="relative z-10">
                      <h2 className="text-2xl font-black text-green-900 mb-6 flex items-center justify-center gap-3">
                          <Leaf /> ما المقصود باستدامة الموارد الطبيعية؟
                      </h2>
                      {!showDef ? (
                          <button onClick={() => setShowDef(true)} className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                              اضغط للتعريف
                          </button>
                      ) : (
                          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500 animate-slide-up inline-block text-right max-w-2xl">
                              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                                  "هي استعمال الموارد الطبيعية بشكل متوازن للحفاظ عليها، وضمان استمراريه الحياة."
                              </p>
                          </div>
                      )}
                  </div>
              </div>

              {/* Oman Efforts (Page 40) */}
              <div className="space-y-6">
                  <h3 className="text-2xl font-black text-slate-800 text-center">جهود سلطنة عمان في الاستدامة</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
                          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 font-bold">1</div>
                          <h4 className="font-bold text-slate-800 mb-2">رؤية عمان 2040</h4>
                          <p className="text-sm text-slate-600">وضعت الاستدامة ضمن أولوياتها الوطنية.</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
                          <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-600 mb-4 font-bold">2</div>
                          <h4 className="font-bold text-slate-800 mb-2">الاستفادة المثلى</h4>
                          <p className="text-sm text-slate-600">من الموارد المتجددة وتقليل الاعتماد على غير المتجددة.</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-500">
                          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center text-red-600 mb-4 font-bold">3</div>
                          <h4 className="font-bold text-slate-800 mb-2">سن القوانين</h4>
                          <p className="text-sm text-slate-600">وضع قوانين للمحافظة على الموارد والحد من استنزافها.</p>
                      </div>
                  </div>
              </div>

              {/* Omani Achievement (Page 41) - Dhofar Wind Farm */}
              <div className="bg-gradient-to-r from-teal-700 to-emerald-800 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden mt-8 border-4 border-white/20">
                  <div className="absolute right-0 top-0 opacity-10">
                      <Wind size={200} />
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="bg-white/10 p-6 rounded-full border border-white/30 animate-pulse">
                          <Zap size={48} className="text-yellow-300" />
                      </div>
                      <div>
                          <div className="inline-block bg-yellow-500 text-teal-900 px-4 py-1 rounded-full font-black text-sm mb-3 shadow-lg">منجز عماني (ص 41)</div>
                          <h3 className="text-3xl font-black mb-3 text-white">محطة ظفار لطاقة الرياح</h3>
                          <p className="text-teal-100 text-lg leading-relaxed mb-4">
                              أحد أبرز مشاريع الطاقة المتجددة لتوليد الكهرباء في السلطنة.
                          </p>
                          <div className="flex gap-4 text-sm font-bold bg-black/20 p-4 rounded-xl inline-flex">
                              <span>📅 الافتتاح: 2019م</span>
                              <span>📍 الموقع: محافظة ظفار</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  const renderContent = () => {
      switch(activeTab) {
          case 'intro': return <IntroSection />;
          case 'types': return <TypesSection />;
          case 'map': return <MapSection />;
          case 'economy': return <EconomySection />;
          case 'sustain': return <SustainSection />;
          // Story section reused from previous logic but placed here if user selects it
          case 'story': return (
              <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">قصة يوسف عليه السلام</h2>
                  <p className="text-lg">يمكنك العودة لها في نهاية الدرس كنشاط إثرائي.</p>
              </div>
          );
          default: return <IntroSection />;
      }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-amber-700 px-2">الموارد الطبيعية 💎</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}><Leaf size={20}/> المقدمة</button>
          <button onClick={() => {setActiveTab('types'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'types' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}><Clock size={20}/> الأنواع (الزمن)</button>
          <button onClick={() => {setActiveTab('map'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'map' ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}><MapPin size={20}/> خريطة الثروات</button>
          <button onClick={() => {setActiveTab('economy'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'economy' ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}><Factory size={20}/> الأهمية الاقتصادية</button>
          <button onClick={() => {setActiveTab('sustain'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'sustain' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}><CheckCircle size={20}/> الاستدامة وجهود عمان</button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-amber-800">الموارد الطبيعية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default NaturalResourcesLesson;
