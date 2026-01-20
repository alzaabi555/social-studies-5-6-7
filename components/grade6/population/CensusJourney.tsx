
import React, { useState, useEffect } from 'react';
import { History, FileText, Smartphone, Database, Check, Play, RotateCcw, User, Home, Server, Wifi } from 'lucide-react';

const CensusJourney: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number>(2020);

  // Simulation State
  const [simStatus, setSimStatus] = useState<'idle' | 'running' | 'finished'>('idle');
  const [progress93, setProgress93] = useState(0);
  const [progress20, setProgress20] = useState(0);
  const [step93, setStep93] = useState(0); // 0: Walking, 1: Knocking, 2: Writing, 3: Done

  const startSimulation = () => {
      if (simStatus === 'running') return;
      setSimStatus('running');
      setProgress93(0);
      setProgress20(0);
      setStep93(0);

      // Simulation 1993: Slow, Manual Steps
      const interval93 = setInterval(() => {
          setProgress93(prev => {
              if (prev >= 100) {
                  clearInterval(interval93);
                  return 100;
              }
              // Update steps visuals based on progress
              if (prev < 30) setStep93(0); // Traveling
              else if (prev < 50) setStep93(1); // Knocking
              else if (prev < 90) setStep93(2); // Writing
              else setStep93(3); // Done
              
              return prev + 0.5; // Very slow
          });
      }, 50);

      // Simulation 2020: Fast, Digital Link
      const interval20 = setInterval(() => {
          setProgress20(prev => {
              if (prev >= 100) {
                  clearInterval(interval20);
                  return 100;
              }
              return prev + 4; // Very fast
          });
      }, 50);
  };

  const resetSimulation = () => {
      setSimStatus('idle');
      setProgress93(0);
      setProgress20(0);
      setStep93(0);
  };

  useEffect(() => {
      if (progress93 === 100 && progress20 === 100) {
          setSimStatus('finished');
      }
  }, [progress93, progress20]);

  const censusData = [
      { 
          year: 1993, 
          title: 'أول تعداد سكاني (تقليدي)', 
          type: 'ميداني (ورقي)', 
          icon: <FileText size={32}/>,
          desc: 'اعتمد على زيارة الباحثين للمنازل وتعبئة الاستمارات الورقية يدوياً.',
          color: 'bg-amber-600'
      },
      { 
          year: 2003, 
          title: 'التعداد الثاني', 
          type: 'ميداني (ورقي)', 
          icon: <FileText size={32}/>,
          desc: 'استمر استخدام الطريقة التقليدية في جمع البيانات.',
          color: 'bg-amber-700'
      },
      { 
          year: 2010, 
          title: 'التعداد الثالث', 
          type: 'مختلط (أجهزة كفية)', 
          icon: <Smartphone size={32}/>,
          desc: 'نقلة نوعية باستخدام الأجهزة الكفية (PDA) لتسريع جمع البيانات.',
          color: 'bg-blue-500'
      },
      { 
          year: 2020, 
          title: 'التعداد الإلكتروني', 
          type: 'سجلات إدارية (قواعد بيانات)', 
          icon: <Database size={32}/>,
          desc: 'تعداد حديث يعتمد على ربط قواعد البيانات الحكومية (السجل المدني) دون الحاجة لزيارة المنازل.',
          color: 'bg-emerald-600'
      }
  ];

  const activeData = censusData.find(d => d.year === activeYear);

  return (
    <div className="p-6 animate-fade-in space-y-12">
        <div className="text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-2">رحلة التعداد في سلطنة عمان</h2>
            <p className="text-slate-500">من الورق إلى البيانات الرقمية.. قصة نجاح</p>
        </div>

        {/* --- NEW: Interactive Simulation Section --- */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border-4 border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-white/10 rounded-bl-2xl text-white font-bold text-sm backdrop-blur-sm">
                مختبر المحاكاة: الفرق في السرعة والآلية
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                
                {/* 1993 Scenario */}
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-600 relative">
                    <div className="flex justify-between items-center mb-4 text-amber-400">
                        <h4 className="font-bold text-lg">📝 تعداد 1993 (التقليدي)</h4>
                        <span className="text-xs bg-amber-900/50 px-2 py-1 rounded">زيارة ميدانية</span>
                    </div>
                    
                    {/* Visual Scene 1993 */}
                    <div className="h-32 bg-slate-700/50 rounded-xl relative overflow-hidden flex items-center justify-between px-8 mb-4">
                        {/* Researcher */}
                        <div 
                            className="absolute transition-all duration-300 flex flex-col items-center z-10"
                            style={{ left: `${Math.min(progress93, 70)}%` }}
                        >
                            <User size={32} className="text-white" />
                            <span className="text-[10px] text-slate-300 bg-black/50 px-1 rounded">باحث</span>
                        </div>

                        {/* House */}
                        <div className="absolute right-8 flex flex-col items-center">
                            <Home size={40} className="text-amber-200" />
                            <span className="text-[10px] text-amber-200">المنزل</span>
                        </div>

                        {/* Action Indicators */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-amber-300">
                            {step93 === 0 && simStatus === 'running' && "🚶 يمشي..."}
                            {step93 === 1 && "✊ يطرق الباب..."}
                            {step93 === 2 && "✍️ يكتب الاستمارة..."}
                            {step93 === 3 && "✅ تم الجمع"}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden border border-slate-600">
                        <div 
                            className="bg-amber-500 h-full transition-all duration-300 ease-linear"
                            style={{ width: `${progress93}%` }}
                        ></div>
                    </div>
                    <p className="text-right text-xs text-slate-400 mt-2">يستغرق وقتاً وجهداً كبيراً (أيام/أسابيع)</p>
                </div>

                {/* 2020 Scenario */}
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-600 relative">
                    <div className="flex justify-between items-center mb-4 text-emerald-400">
                        <h4 className="font-bold text-lg">💻 تعداد 2020 (الإلكتروني)</h4>
                        <span className="text-xs bg-emerald-900/50 px-2 py-1 rounded">ربط قواعد بيانات</span>
                    </div>

                    {/* Visual Scene 2020 */}
                    <div className="h-32 bg-slate-700/50 rounded-xl relative overflow-hidden flex items-center justify-between px-8 mb-4">
                        {/* Civil Status DB */}
                        <div className="flex flex-col items-center z-10">
                            <Database size={40} className="text-blue-400" />
                            <span className="text-[10px] text-blue-200 mt-1">السجل المدني</span>
                        </div>

                        {/* Connection Animation */}
                        <div className="flex-1 mx-4 relative h-1 bg-slate-600 rounded">
                            {simStatus === 'running' && (
                                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399] animate-[ping_0.5s_linear_infinite]" style={{ left: `${progress20}%`, transition: 'left 0.1s linear' }}></div>
                            )}
                            {simStatus === 'running' && (
                                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2">
                                    <Wifi size={20} className="text-emerald-500 animate-pulse"/>
                                </div>
                            )}
                        </div>

                        {/* Census DB */}
                        <div className="flex flex-col items-center z-10">
                            <Server size={40} className="text-emerald-400" />
                            <span className="text-[10px] text-emerald-200 mt-1">قاعدة التعداد</span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden border border-slate-600">
                        <div 
                            className="bg-emerald-500 h-full transition-all duration-100 ease-linear"
                            style={{ width: `${progress20}%` }}
                        ></div>
                    </div>
                    <p className="text-right text-xs text-slate-400 mt-2">يتم في لحظات (دقة عالية وتحديث فوري)</p>
                </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex justify-center">
                {simStatus === 'idle' ? (
                    <button 
                        onClick={startSimulation}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-3 rounded-full font-bold shadow-lg flex items-center gap-3 transition-transform hover:scale-105"
                    >
                        <Play size={24} fill="currentColor" /> ابدأ المقارنة
                    </button>
                ) : (
                    <button 
                        onClick={resetSimulation}
                        className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-3 transition-colors"
                    >
                        <RotateCcw size={20} /> إعادة المحاكاة
                    </button>
                )}
            </div>

            {simStatus === 'finished' && (
                <div className="mt-6 text-center animate-fade-in bg-green-500/20 p-4 rounded-xl border border-green-500/50">
                    <p className="text-green-300 font-bold text-lg">✨ النتيجة: التعداد الإلكتروني يوفر الوقت والجهد والمال ويعطي بيانات دقيقة ومحدثة.</p>
                </div>
            )}
        </div>

        {/* Timeline Visualization */}
        <div className="relative pt-8">
            <h3 className="text-xl font-black text-slate-700 mb-6 text-center">التسلسل الزمني للتعداد</h3>
            {/* Line */}
            <div className="absolute top-[60%] left-0 w-full h-2 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {censusData.map((item) => (
                    <button 
                        key={item.year}
                        onClick={() => setActiveYear(item.year)}
                        className={`group relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${activeYear === item.year ? 'bg-white shadow-xl scale-110 border-2 border-indigo-100' : 'hover:bg-white/50'}`}
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg mb-3 transition-transform group-hover:scale-110 ${item.color}`}>
                            {item.year === activeYear ? <Check size={24} /> : <span className="font-bold">{item.year}</span>}
                        </div>
                        <span className={`font-black text-lg ${activeYear === item.year ? 'text-indigo-900' : 'text-slate-500'}`}>{item.year}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* Comparison Table Activity */}
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 text-center">جدول المقارنة</h3>
            <div className="grid grid-cols-3 gap-1 text-center text-sm md:text-base">
                <div className="bg-indigo-200 p-3 rounded-t-lg font-black text-indigo-900">وجه المقارنة</div>
                <div className="bg-amber-100 p-3 rounded-t-lg font-bold text-amber-900">التقليدي (1993)</div>
                <div className="bg-emerald-100 p-3 rounded-t-lg font-bold text-emerald-900">الإلكتروني (2020)</div>

                <div className="bg-indigo-100 p-3 font-medium text-indigo-900 border-b border-indigo-200">الوسيلة</div>
                <div className="bg-white p-3 border-b border-slate-100 text-amber-800">استمارة ورقية + قلم</div>
                <div className="bg-white p-3 border-b border-slate-100 text-emerald-800 font-bold">ربط قواعد بيانات</div>

                <div className="bg-indigo-100 p-3 font-medium text-indigo-900 border-b border-indigo-200">الجهد البشري</div>
                <div className="bg-white p-3 border-b border-slate-100 text-amber-800">آلاف الباحثين الميدانيين</div>
                <div className="bg-white p-3 border-b border-slate-100 text-emerald-800">فريق فني صغير</div>

                <div className="bg-indigo-100 p-3 rounded-b-lg font-medium text-indigo-900">التكلفة</div>
                <div className="bg-white p-3 rounded-b-lg text-amber-800">عالية جداً</div>
                <div className="bg-white p-3 rounded-b-lg text-emerald-800 font-bold">منخفضة</div>
            </div>
        </div>
    </div>
  );
};

export default CensusJourney;
