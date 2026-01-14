import React, { useState } from 'react';
import { CloudRain, Mountain, Waves, Briefcase, ShieldCheck, Bus, Sun, RefreshCw, Users, TreeDeciduous } from 'lucide-react';

const DistributionFactors: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'natural' | 'human'>('natural');
  const [selectedFactor, setSelectedFactor] = useState<string | null>(null);
  
  // Simulation State
  const [populationCount, setPopulationCount] = useState(0);
  const [environmentText, setEnvironmentText] = useState("اختر عاملاً لنرى تأثيره...");

  const simulateFactor = (factor: string) => {
      setSelectedFactor(factor);
      
      // Simulate Population Density based on factor
      switch(factor) {
          // Natural
          case 'climate_good':
              setPopulationCount(20);
              setEnvironmentText("مناخ معتدل وممطر: بيئة جاذبة جداً للسكان والزراعة.");
              break;
          case 'climate_bad':
              setPopulationCount(2);
              setEnvironmentText("صحراء حارة وجافة: بيئة طاردة للسكان لقلة الموارد.");
              break;
          case 'terrain_flat':
              setPopulationCount(18);
              setEnvironmentText("سهول منبسطة: سهولة البناء والتنقل والزراعة.");
              break;
          case 'terrain_mountain':
              setPopulationCount(4);
              setEnvironmentText("جبال وعرة: صعوبة التنقل والبناء.");
              break;
          
          // Human
          case 'economic_good':
              setPopulationCount(25);
              setEnvironmentText("منطقة صناعية/تجارية: توفر فرص العمل يجذب الهجرة.");
              break;
          case 'stability_good':
              setPopulationCount(15);
              setEnvironmentText("منطقة آمنة ومستقرة سياسياً: يفضل الناس العيش فيها.");
              break;
          case 'stability_bad':
              setPopulationCount(0);
              setEnvironmentText("منطقة حروب ونزاعات: يهرب السكان منها (هجرة قسرية).");
              break;
          case 'services_good':
              setPopulationCount(22);
              setEnvironmentText("توفر الخدمات (طرق، كهرباء، صحة): عامل جذب رئيسي.");
              break;
          default:
              setPopulationCount(0);
      }
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-800 mb-2">محاكي توزيع السكان</h2>
            <p className="text-slate-500">جرب تغيير الظروف الطبيعية والبشرية وشاهد كيف يتغير عدد السكان في المنطقة</p>
        </div>

        <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-lg mx-auto mb-6 shadow-sm">
            <button 
                onClick={() => { setActiveTab('natural'); setSelectedFactor(null); setPopulationCount(0); setEnvironmentText("اختر عاملاً..."); }} 
                className={`flex-1 py-3 rounded-full font-bold text-lg transition-all ${activeTab === 'natural' ? 'bg-white shadow text-green-700' : 'text-slate-500'}`}
            >
                العوامل الطبيعية 🌿
            </button>
            <button 
                onClick={() => { setActiveTab('human'); setSelectedFactor(null); setPopulationCount(0); setEnvironmentText("اختر عاملاً..."); }} 
                className={`flex-1 py-3 rounded-full font-bold text-lg transition-all ${activeTab === 'human' ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}
            >
                العوامل البشرية 👷
            </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Controls Panel */}
            <div className="lg:col-span-1 space-y-4">
                <h3 className="font-bold text-slate-700 mb-2 border-b pb-2">اختر الحالة:</h3>
                
                {activeTab === 'natural' ? (
                    <div className="space-y-3">
                        <button onClick={() => simulateFactor('climate_good')} className={`w-full p-4 rounded-xl border-2 text-right transition-all hover:scale-105 flex items-center gap-3 ${selectedFactor === 'climate_good' ? 'bg-green-100 border-green-500 ring-2 ring-green-200' : 'bg-white border-slate-200'}`}>
                            <CloudRain className="text-green-600"/> 
                            <div><span className="font-bold block text-slate-800">مناخ معتدل</span><span className="text-xs text-slate-500">أمطار وحرارة مناسبة</span></div>
                        </button>
                        <button onClick={() => simulateFactor('climate_bad')} className={`w-full p-4 rounded-xl border-2 text-right transition-all hover:scale-105 flex items-center gap-3 ${selectedFactor === 'climate_bad' ? 'bg-orange-100 border-orange-500 ring-2 ring-orange-200' : 'bg-white border-slate-200'}`}>
                            <Sun className="text-orange-600"/> 
                            <div><span className="font-bold block text-slate-800">مناخ صحراوي</span><span className="text-xs text-slate-500">حرارة شديدة وجفاف</span></div>
                        </button>
                        <button onClick={() => simulateFactor('terrain_flat')} className={`w-full p-4 rounded-xl border-2 text-right transition-all hover:scale-105 flex items-center gap-3 ${selectedFactor === 'terrain_flat' ? 'bg-emerald-100 border-emerald-500 ring-2 ring-emerald-200' : 'bg-white border-slate-200'}`}>
                            <TreeDeciduous className="text-emerald-600"/> 
                            <div><span className="font-bold block text-slate-800">سهول منبسطة</span><span className="text-xs text-slate-500">أرض زراعية</span></div>
                        </button>
                        <button onClick={() => simulateFactor('terrain_mountain')} className={`w-full p-4 rounded-xl border-2 text-right transition-all hover:scale-105 flex items-center gap-3 ${selectedFactor === 'terrain_mountain' ? 'bg-stone-100 border-stone-500 ring-2 ring-stone-200' : 'bg-white border-slate-200'}`}>
                            <Mountain className="text-stone-600"/> 
                            <div><span className="font-bold block text-slate-800">جبال وعرة</span><span className="text-xs text-slate-500">تضاريس صعبة</span></div>
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <button onClick={() => simulateFactor('economic_good')} className={`w-full p-4 rounded-xl border-2 text-right transition-all hover:scale-105 flex items-center gap-3 ${selectedFactor === 'economic_good' ? 'bg-purple-100 border-purple-500 ring-2 ring-purple-200' : 'bg-white border-slate-200'}`}>
                            <Briefcase className="text-purple-600"/> 
                            <div><span className="font-bold block text-slate-800">منطقة صناعية</span><span className="text-xs text-slate-500">وفرة فرص العمل</span></div>
                        </button>
                        <button onClick={() => simulateFactor('stability_good')} className={`w-full p-4 rounded-xl border-2 text-right transition-all hover:scale-105 flex items-center gap-3 ${selectedFactor === 'stability_good' ? 'bg-blue-100 border-blue-500 ring-2 ring-blue-200' : 'bg-white border-slate-200'}`}>
                            <ShieldCheck className="text-blue-600"/> 
                            <div><span className="font-bold block text-slate-800">استقرار سياسي</span><span className="text-xs text-slate-500">أمن وأمان</span></div>
                        </button>
                        <button onClick={() => simulateFactor('services_good')} className={`w-full p-4 rounded-xl border-2 text-right transition-all hover:scale-105 flex items-center gap-3 ${selectedFactor === 'services_good' ? 'bg-cyan-100 border-cyan-500 ring-2 ring-cyan-200' : 'bg-white border-slate-200'}`}>
                            <Bus className="text-cyan-600"/> 
                            <div><span className="font-bold block text-slate-800">توفر الخدمات</span><span className="text-xs text-slate-500">نقل، صحة، تعليم</span></div>
                        </button>
                    </div>
                )}
            </div>

            {/* Simulation Viewport */}
            <div className="lg:col-span-2">
                <div className="relative h-96 bg-slate-50 rounded-3xl overflow-hidden border-4 border-slate-300 shadow-inner flex flex-col">
                    
                    {/* Environment Layer */}
                    <div className={`absolute inset-0 transition-colors duration-700 ${
                        selectedFactor?.includes('desert') || selectedFactor?.includes('bad') ? 'bg-amber-100' : 
                        selectedFactor?.includes('mountain') ? 'bg-stone-200' : 
                        'bg-green-100'
                    }`}>
                        {/* Background SVG based on selection */}
                        <svg viewBox="0 0 400 300" className="w-full h-full opacity-50 absolute inset-0">
                            {selectedFactor?.includes('mountain') && <path d="M0,300 L100,100 L200,300 L300,50 L400,300" fill="#A8A29E" />}
                            {selectedFactor?.includes('climate_good') && <circle cx="50" cy="50" r="30" fill="#FDE047" />}
                            {selectedFactor?.includes('economic') && <rect x="50" y="150" width="100" height="150" fill="#94A3B8" />}
                        </svg>
                    </div>

                    {/* Population Layer */}
                    <div className="relative z-10 flex-1 p-8 flex flex-wrap content-end gap-2 transition-all">
                        {Array.from({ length: populationCount }).map((_, i) => (
                            <div key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                                <Users size={32} className={`${populationCount > 10 ? 'text-slate-800' : 'text-slate-600'}`} />
                            </div>
                        ))}
                        {populationCount === 0 && selectedFactor && (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-xl">
                                منطقة خالية من السكان 🌵
                            </div>
                        )}
                    </div>

                    {/* Status Bar */}
                    <div className="bg-white/90 p-4 border-t border-slate-200 backdrop-blur-md relative z-20">
                        <h4 className="font-black text-lg text-indigo-900 mb-1">{environmentText}</h4>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-500">الكثافة المتوقعة:</span>
                            <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full transition-all duration-1000 ${populationCount > 15 ? 'bg-red-500' : populationCount > 5 ? 'bg-green-500' : 'bg-orange-400'}`} 
                                    style={{ width: `${(populationCount / 25) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Discussion Activity (Page 46) */}
        <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 mt-8">
            <h4 className="font-bold text-yellow-900 text-xl mb-3 flex items-center gap-2">🤔 ناقش:</h4>
            <p className="text-yellow-800 text-lg leading-relaxed">
                لماذا يتركز السكان في <strong>ولاية صلالة</strong> (محافظة ظفار) ويقل عددهم في <strong>ولاية الجبل الأخضر</strong>؟
            </p>
            <div className="mt-4 bg-white p-4 rounded-xl text-slate-700 shadow-sm">
                <span className="font-bold text-yellow-600">الإجابة:</span> صلالة منطقة سهلية ساحلية تتوفر فيها الخدمات وفرص العمل، بينما الجبل الأخضر منطقة جبلية وعرة قد تصعب فيها الحركة والبناء مقارنة بالسهول.
            </div>
        </div>

    </div>
  );
};

export default DistributionFactors;