
import React, { useState } from 'react';
import { FIFTH_SPHERES_RELATION_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, RefreshCw, AlertTriangle, Leaf, CheckCircle, Menu, Sun, CloudRain, Droplet, Wind, ArrowDown, Activity } from 'lucide-react';

interface Props {
    onBack: () => void;
}

// 1. Four Spheres Cards (Textbook Page 21 - Figure 2)
const SpheresDefinitions = () => {
    const [activeSphere, setActiveSphere] = useState<string | null>(null);

    return (
        <div className="animate-fade-in space-y-8">
            <h2 className="text-3xl font-black text-slate-800 text-center mb-6">أغلفة كوكب الأرض (الشكل ٢)</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Atmosphere */}
                <div 
                    onClick={() => setActiveSphere('air')}
                    className={`cursor-pointer p-6 rounded-3xl border-2 transition-all hover:scale-105 ${activeSphere === 'air' ? 'bg-sky-100 border-sky-400 shadow-xl' : 'bg-sky-50 border-sky-200'}`}
                >
                    <div className="flex items-center gap-3 mb-3 text-sky-800">
                        <Wind size={32} />
                        <h3 className="text-xl font-black">أولاً: الغلاف الجوي</h3>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-bold">
                        الطبقة الغازية التي تحيط بالأرض إحاطة تامة. أهم مكوناته: النيتروجين والأكسجين. 
                        {activeSphere === 'air' && <span className="block mt-2 text-sky-700 bg-white p-2 rounded">يحتوي على حزام الأوزون الذي يحمي الأرض من الأشعة الضارة.</span>}
                    </p>
                </div>

                {/* Lithosphere */}
                <div 
                    onClick={() => setActiveSphere('rock')}
                    className={`cursor-pointer p-6 rounded-3xl border-2 transition-all hover:scale-105 ${activeSphere === 'rock' ? 'bg-amber-100 border-amber-400 shadow-xl' : 'bg-amber-50 border-amber-200'}`}
                >
                    <div className="flex items-center gap-3 mb-3 text-amber-800">
                        <Activity size={32} />
                        <h3 className="text-xl font-black">ثانياً: الغلاف الصخري</h3>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-bold">
                        الطبقة الخارجية للقشرة الأرضية (القارات وقيعان المحيطات).
                        {activeSphere === 'rock' && <span className="block mt-2 text-amber-700 bg-white p-2 rounded">يرتبط بظواهر مثل البراكين والزلازل. مكوناته: الصخور والتربة والمعادن.</span>}
                    </p>
                </div>

                {/* Hydrosphere */}
                <div 
                    onClick={() => setActiveSphere('water')}
                    className={`cursor-pointer p-6 rounded-3xl border-2 transition-all hover:scale-105 ${activeSphere === 'water' ? 'bg-blue-100 border-blue-400 shadow-xl' : 'bg-blue-50 border-blue-200'}`}
                >
                    <div className="flex items-center gap-3 mb-3 text-blue-800">
                        <Droplet size={32} />
                        <h3 className="text-xl font-black">ثالثاً: الغلاف المائي</h3>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-bold">
                        يشمل جميع الموارد المائية (السائلة، الصلبة، الغازية).
                        {activeSphere === 'water' && <span className="block mt-2 text-blue-700 bg-white p-2 rounded">سواء كانت عذبة أو مالحة. يغطي ٧١٪ من مساحة الأرض.</span>}
                    </p>
                </div>

                {/* Biosphere */}
                <div 
                    onClick={() => setActiveSphere('life')}
                    className={`cursor-pointer p-6 rounded-3xl border-2 transition-all hover:scale-105 ${activeSphere === 'life' ? 'bg-green-100 border-green-400 shadow-xl' : 'bg-green-50 border-green-200'}`}
                >
                    <div className="flex items-center gap-3 mb-3 text-green-800">
                        <Leaf size={32} />
                        <h3 className="text-xl font-black">رابعاً: الغلاف الحيوي</h3>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-bold">
                        الحيز الذي توجد فيه الحياة (نبات، حيوان، إنسان).
                        {activeSphere === 'life' && <span className="block mt-2 text-green-700 bg-white p-2 rounded">يتداخل مع جميع الأغلفة الأخرى.</span>}
                    </p>
                </div>
            </div>
        </div>
    );
};

// 2. Water Cycle Diagram (Textbook Page 23 - Figure 3)
const WaterCycle = () => {
    const [step, setStep] = useState(0); // 0: Start, 1: Evap, 2: Condense, 3: Precip, 4: Collect

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mb-8 animate-slide-up">
            <h2 className="text-2xl font-black text-slate-800 text-center mb-2">دورة الماء في الطبيعة (الشكل ٣)</h2>
            <p className="text-center text-slate-500 mb-6">اضغط على الزر لتتبع رحلة قطرة الماء</p>
            
            <div className="relative h-[400px] bg-gradient-to-b from-sky-300 via-sky-100 to-blue-100 rounded-2xl overflow-hidden border-4 border-slate-300 shadow-inner">
                {/* Background Landscape */}
                <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
                     {/* Mountains */}
                     <path d="M0,300 L100,100 L200,300 Z" fill="#8D6E63" />
                     <path d="M150,300 L250,150 L350,300 Z" fill="#795548" />
                     {/* Ocean */}
                     <rect x="0" y="250" width="400" height="50" fill="#2563EB" />
                     <text x="50" y="280" fill="white" fontSize="10" fontWeight="bold">تجمع المياه</text>
                </svg>

                {/* Sun */}
                <div className="absolute top-4 right-4">
                    <Sun size={64} className="text-yellow-400 animate-spin-slow" />
                </div>

                {/* 1. Evaporation (Sea to Sky) */}
                {step >= 1 && (
                    <div className="absolute bottom-20 left-20 flex flex-col items-center animate-[float_3s_infinite]">
                        <div className="flex gap-2 mb-1">
                            <ArrowRight className="-rotate-90 text-blue-600 h-6 w-6 animate-pulse" />
                            <ArrowRight className="-rotate-90 text-blue-600 h-6 w-6 animate-pulse delay-100" />
                        </div>
                        <span className="text-red-600 font-black bg-white/70 px-2 rounded text-xs shadow">تبخر</span>
                    </div>
                )}

                {/* 2. Condensation (Clouds) */}
                <div className={`absolute top-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                     <CloudRain size={80} className="text-white fill-white drop-shadow-lg" />
                     <span className="absolute top-full left-1/2 -translate-x-1/2 text-slate-700 font-black bg-white/70 px-2 rounded text-xs mt-1">تكاثف</span>
                </div>

                {/* 3. Precipitation (Rain on Mountain) */}
                {step >= 3 && (
                    <div className="absolute top-32 left-1/2 transform -translate-x-10 animate-bounce">
                        <div className="flex gap-2 justify-center">
                             <div className="w-1 h-4 bg-blue-700 rounded-full"></div>
                             <div className="w-1 h-4 bg-blue-700 rounded-full"></div>
                             <div className="w-1 h-4 bg-blue-700 rounded-full"></div>
                        </div>
                        <span className="text-blue-900 font-black bg-white/70 px-2 rounded text-xs mt-1 block">تساقط</span>
                    </div>
                )}

                {/* 4. Collection (River to Sea) */}
                {step >= 4 && (
                    <div className="absolute bottom-10 left-1/2 w-32 h-2 bg-blue-500 rotate-12 rounded-full animate-pulse">
                         <ArrowRight className="absolute -right-2 -top-3 text-blue-800 rotate-12" />
                    </div>
                )}

                {/* Controls */}
                <div className="absolute bottom-4 left-4 z-20">
                    <button 
                        onClick={() => setStep(s => s < 4 ? s + 1 : 0)}
                        className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform border border-blue-200"
                    >
                        {step === 0 ? 'بدء الدورة' : step === 4 ? 'إعادة' : 'الخطوة التالية'}
                    </button>
                </div>
            </div>

            {/* Definition Box (Page 23) */}
            <div className="bg-green-50 p-6 rounded-2xl border-r-4 border-green-500">
                <h4 className="font-bold text-green-900 mb-2">ما المقصود بدورة الماء في الطبيعة؟</h4>
                <p className="text-slate-700 font-medium">
                    "هي حركة الماء من سطح الأرض إلى الغلاف الجوي، ثم عودته مرة أخرى."
                </p>
            </div>
            
            {/* Chart Info (Page 23) */}
            <div className="mt-4 flex gap-4">
                <div className="flex-1 bg-blue-100 p-4 rounded-xl text-center">
                    <span className="block text-2xl font-black text-blue-800">٧١٪</span>
                    <span className="text-xs text-blue-700 font-bold">نسبة المياه</span>
                </div>
                <div className="flex-1 bg-amber-100 p-4 rounded-xl text-center">
                    <span className="block text-2xl font-black text-amber-800">٢٩٪</span>
                    <span className="text-xs text-amber-700 font-bold">نسبة اليابس</span>
                </div>
            </div>
        </div>
    );
};

const EarthSpheresLesson2: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'spheres' | 'water_cycle' | 'quiz'>('spheres');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-green-700 px-2">أغلفة الأرض (٢) 🔄</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('spheres'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'spheres' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <RefreshCw size={20}/> مكونات الأغلفة (ص٢١)
          </button>
          <button onClick={() => {setActiveTab('water_cycle'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'water_cycle' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CloudRain size={20}/> دورة الماء (ص٢٣)
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
           <span className="font-bold text-lg text-green-800">علاقة الأغلفة</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
            {activeTab === 'spheres' && <SpheresDefinitions />}
            {activeTab === 'water_cycle' && <WaterCycle />}
            {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_SPHERES_RELATION_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson2;
