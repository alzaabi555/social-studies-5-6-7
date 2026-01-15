
import React, { useState, useEffect } from 'react';
import { Target, Leaf, Cloud, Droplet, Mountain, AlertTriangle, BookOpen, Quote, Check, Menu, ArrowRight, RotateCcw, Trees, Award, TreeDeciduous, Ship, Star, Zap, Fish, Wind, MousePointerClick, Sprout, Hammer, XCircle, CheckCircle, Waves, Play, RefreshCw, ArrowLeftRight, Factory, AlertOctagon } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const EarthSpheresLesson2: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'importance' | 'interaction' | 'impact' | 'oman'>('importance');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. IMPORTANCE SECTION (Page 27) ---
  const ImportanceSection = () => {
      const [activeResource, setActiveResource] = useState<string | null>(null);

      const resources = [
          { 
              id: 'litho', 
              title: 'الغلاف الصخري', 
              icon: <Mountain size={48}/>, 
              color: 'from-amber-700 to-amber-900', 
              bgColor: 'bg-amber-50',
              borderColor: 'border-amber-600',
              textColor: 'text-amber-900',
              desc: 'مخزون المعادن والطاقة',
              items: [
                  { name: 'نفط وغاز', icon: '🛢️' }, 
                  { name: 'معادن', icon: '💎' }, 
                  { name: 'صخور', icon: '🪨' }
              ] 
          },
          { 
              id: 'bio', 
              title: 'الغلاف الحيوي', 
              icon: <Leaf size={48}/>, 
              color: 'from-green-600 to-emerald-800', 
              bgColor: 'bg-green-50',
              borderColor: 'border-green-600',
              textColor: 'text-green-900',
              desc: 'مصدر الغذاء والدواء',
              items: [
                  { name: 'ثروة نباتية', icon: '🌳' }, 
                  { name: 'ثروة حيوانية', icon: '🐄' }, 
                  { name: 'أخشاب', icon: '🪵' }
              ] 
          },
          { 
              id: 'hydro', 
              title: 'الغلاف المائي', 
              icon: <Droplet size={48}/>, 
              color: 'from-blue-500 to-cyan-600', 
              bgColor: 'bg-blue-50',
              borderColor: 'border-blue-600',
              textColor: 'text-blue-900',
              desc: 'مصدر المياه والحياة البحرية',
              items: [
                  { name: 'مياه عذبة', icon: '💧' }, 
                  { name: 'أسماك', icon: '🐟' }, 
                  { name: 'أملاح', icon: '🧂' }
              ] 
          },
          { 
              id: 'atmo', 
              title: 'الغلاف الجوي', 
              icon: <Cloud size={48}/>, 
              color: 'from-sky-400 to-blue-500', 
              bgColor: 'bg-sky-50',
              borderColor: 'border-sky-600',
              textColor: 'text-sky-900',
              desc: 'مصدر الهواء والطقس',
              items: [
                  { name: 'أكسجين', icon: '🌬️' }, 
                  { name: 'أمطار', icon: '🌧️' }, 
                  { name: 'طاقة رياح', icon: '⚡' }
              ] 
          },
      ];

      return (
          <div className="animate-fade-in space-y-8">
              <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-slate-800 mb-3">أهمية أغلفة كوكب الأرض (الشكل 5)</h2>
                  <p className="text-lg text-slate-600">تحتوي على مخزون هائل من الموارد الطبيعية.. <span className="font-bold text-indigo-600">اضغط على الأغلفة لاستكشاف كنوزها!</span></p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {resources.map((res) => (
                      <div 
                          key={res.id}
                          onClick={() => setActiveResource(activeResource === res.id ? null : res.id)}
                          className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 group border-4 ${activeResource === res.id ? res.borderColor + ' shadow-2xl scale-105' : 'border-white shadow-lg hover:shadow-xl hover:-translate-y-1'}`}
                      >
                          {/* Card Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${res.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                          
                          <div className={`p-6 md:p-8 flex flex-col items-center text-center relative z-10 ${res.bgColor}`}>
                              
                              {/* Icon Circle */}
                              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${res.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                  {res.icon}
                              </div>
                              
                              <h3 className={`text-2xl font-black ${res.textColor} mb-2`}>{res.title}</h3>
                              
                              {/* Collapsible Content */}
                              <div className={`transition-all duration-500 overflow-hidden ${activeResource === res.id ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                  <p className="font-bold text-slate-600 mb-6 text-lg">{res.desc}</p>
                                  <div className="flex justify-center gap-4 flex-wrap">
                                      {res.items.map((item, idx) => (
                                          <div key={idx} className="bg-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2 animate-bounce" style={{ animationDelay: `${idx * 100}ms` }}>
                                              <span className="text-2xl">{item.icon}</span>
                                              <span className={`font-bold ${res.textColor}`}>{item.name}</span>
                                          </div>
                                      ))}
                                  </div>
                              </div>

                              {/* Hint Text */}
                              {activeResource !== res.id && (
                                  <div className="mt-2 text-sm font-bold text-slate-400 flex items-center gap-1 animate-pulse">
                                      <MousePointerClick size={16} /> اضغط للاستكشاف
                                  </div>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- 2. INTERACTION SECTION (Pages 28-29) - Updated with Compact Diagram ---
  const InteractionSection = () => {
      const [simStep, setSimStep] = useState(0);
      const [activeSim, setActiveSim] = useState<'cave' | 'plant'>('cave');
      const [activeRelation, setActiveRelation] = useState<string | null>(null);

      const startSim = () => {
          setSimStep(0);
          const interval = setInterval(() => {
              setSimStep(prev => {
                  if (prev >= 100) {
                      clearInterval(interval);
                      return 100;
                  }
                  return prev + 1;
              });
          }, 30);
      };

      return (
          <div className="animate-fade-in space-y-12">
              <div className="text-center">
                  <h2 className="text-3xl font-black text-slate-800 mb-4">تفاعل أغلفة كوكب الأرض (الشكل 6)</h2>
                  <p className="text-lg text-slate-600">جميع الأغلفة ترتبط بعلاقة تكاملية مستمرة.</p>
              </div>

              {/* FIGURE 6: COMPACT INTERACTIVE DIAGRAM */}
              <div className="relative w-full max-w-2xl mx-auto aspect-[16/10] md:aspect-video bg-white rounded-3xl shadow-xl border-4 border-slate-200 overflow-hidden">
                  
                  {/* Background SVG for Lines */}
                  <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
                      {/* Atmo (50,10) to Hydro (20,50) */}
                      <path d="M45,15 Q30,15 25,40" fill="none" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="1 1" className="animate-[dash_20s_linear_infinite]" />
                      {/* Atmo (50,10) to Bio (50,30) */}
                      <path d="M50,18 L50,28" fill="none" stroke="#22C55E" strokeWidth="0.5" />
                      {/* Atmo (50,10) to Litho (80,50) */}
                      <path d="M55,15 Q70,15 75,40" fill="none" stroke="#D97706" strokeWidth="0.5" strokeDasharray="1 1" />
                      
                      {/* Hydro (20,50) to Bio (50,30) */}
                      <path d="M25,45 Q35,35 45,35" fill="none" stroke="#06B6D4" strokeWidth="0.5" />
                      {/* Litho (80,50) to Bio (50,30) */}
                      <path d="M75,45 Q65,35 55,35" fill="none" stroke="#A16207" strokeWidth="0.5" />
                  </svg>

                  {/* 1. Atmosphere (Top Center) */}
                  <div className="absolute top-[5%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${activeRelation?.includes('atmo') ? 'bg-sky-100 scale-110 shadow-lg' : 'bg-slate-50 border border-slate-100'}`}>
                          <Cloud size={32} className="text-sky-500 mb-1"/>
                          <span className="font-bold text-slate-700 text-xs md:text-sm">الغلاف الجوي</span>
                      </div>
                  </div>

                  {/* 2. Biosphere (Center) */}
                  <div className="absolute top-[35%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                      <div className={`p-4 rounded-full border-4 border-white shadow-xl transition-all duration-300 ${activeRelation?.includes('bio') ? 'bg-green-100 scale-110 ring-2 ring-green-200' : 'bg-green-50'}`}>
                          <Leaf size={40} className="text-green-600"/>
                      </div>
                      <span className="font-black text-green-900 text-sm mt-2 bg-white/80 px-2 rounded">الغلاف الحيوي</span>
                  </div>

                  {/* 3. Hydrosphere (Bottom Left) */}
                  <div className="absolute bottom-[10%] left-[10%] z-10 flex flex-col items-center">
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${activeRelation?.includes('hydro') ? 'bg-blue-100 scale-110 shadow-lg' : 'bg-slate-50 border border-slate-100'}`}>
                          <Droplet size={32} className="text-blue-500 mb-1"/>
                          <span className="font-bold text-slate-700 text-xs md:text-sm">الغلاف المائي</span>
                      </div>
                  </div>

                  {/* 4. Lithosphere (Bottom Right) */}
                  <div className="absolute bottom-[10%] right-[10%] z-10 flex flex-col items-center">
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${activeRelation?.includes('litho') ? 'bg-amber-100 scale-110 shadow-lg' : 'bg-slate-50 border border-slate-100'}`}>
                          <Mountain size={32} className="text-amber-600 mb-1"/>
                          <span className="font-bold text-slate-700 text-xs md:text-sm">الغلاف الصخري</span>
                      </div>
                  </div>

                  {/* Buttons */}
                  {/* Atmo <-> Hydro */}
                  <button onClick={() => setActiveRelation('atmo-hydro')} className="absolute top-[20%] left-[25%] bg-white p-1.5 rounded-full shadow border hover:scale-110 z-30">
                      <RefreshCw size={16} className="text-blue-500" />
                  </button>
                  {/* Atmo <-> Bio */}
                  <button onClick={() => setActiveRelation('atmo-bio')} className="absolute top-[22%] left-1/2 -translate-x-1/2 bg-white p-1.5 rounded-full shadow border hover:scale-110 z-30">
                      <ArrowLeftRight size={16} className="text-green-500 rotate-90" />
                  </button>
                  
                  {/* Hydro <-> Bio */}
                  <button onClick={() => setActiveRelation('hydro-bio')} className="absolute bottom-[35%] left-[30%] bg-white p-1.5 rounded-full shadow border hover:scale-110 z-30">
                      <ArrowLeftRight size={16} className="text-cyan-500 -rotate-45" />
                  </button>
                  {/* Litho <-> Bio */}
                  <button onClick={() => setActiveRelation('litho-bio')} className="absolute bottom-[35%] right-[30%] bg-white p-1.5 rounded-full shadow border hover:scale-110 z-30">
                      <ArrowLeftRight size={16} className="text-amber-500 rotate-45" />
                  </button>

                  {/* Modal (Full Overlay for better visibility) */}
                  {activeRelation && (
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                          <h4 className="font-black text-xl mb-3 text-indigo-900">
                              {activeRelation === 'atmo-hydro' && 'الغلاف الجوي ⟷ الغلاف المائي'}
                              {activeRelation === 'atmo-bio' && 'الغلاف الجوي ⟷ الغلاف الحيوي'}
                              {activeRelation === 'hydro-bio' && 'الغلاف المائي ⟷ الغلاف الحيوي'}
                              {activeRelation === 'litho-bio' && 'الغلاف الصخري ⟷ الغلاف الحيوي'}
                          </h4>
                          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                              {activeRelation === 'atmo-hydro' && 'يحدث تبادل مستمر: تبخر المياه لتكوين السحب، ثم سقوط الأمطار.'}
                              {activeRelation === 'atmo-bio' && 'تأخذ الكائنات الحية الأكسجين للتنفس، وتطلق النباتات الأكسجين.'}
                              {activeRelation === 'hydro-bio' && 'الماء هو سر الحياة لجميع الكائنات الحية (شرب، ري، موطن للأسماك).'}
                              {activeRelation === 'litho-bio' && 'توفر التربة المعادن للنباتات، وتعتبر الكهوف والجبال مأوى للحيوانات.'}
                          </p>
                          <button onClick={() => setActiveRelation(null)} className="bg-indigo-600 text-white px-8 py-2 rounded-full font-bold shadow-lg hover:bg-indigo-700">إغلاق</button>
                      </div>
                  )}
              </div>

              {/* SPECIFIC EXPERIMENTS (Figures 7 & 8) */}
              <div className="mt-12 pt-12 border-t-2 border-slate-100">
                  <h3 className="text-2xl font-black text-slate-800 text-center mb-6">أمثلة تطبيقية (الشكل 7 و 8)</h3>
                  
                  {/* Tabs */}
                  <div className="flex justify-center gap-4 mb-8">
                      <button 
                          onClick={() => { setActiveSim('cave'); setSimStep(0); }}
                          className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${activeSim === 'cave' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-500 border hover:bg-slate-50'}`}
                      >
                          <Waves size={20}/> الماء والصخر (الشكل 7)
                      </button>
                      <button 
                          onClick={() => { setActiveSim('plant'); setSimStep(0); }}
                          className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${activeSim === 'plant' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-slate-500 border hover:bg-slate-50'}`}
                      >
                          <Sprout size={20}/> النبات والتربة (الشكل 8)
                      </button>
                  </div>

                  <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                      <div className="relative h-80 bg-slate-100">
                          
                          {activeSim === 'cave' ? (
                              // CAVE SIMULATION
                              <svg viewBox="0 0 400 200" className="w-full h-full">
                                  <defs>
                                      <pattern id="rockPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                                          <rect width="20" height="20" fill="#795548"/>
                                          <circle cx="10" cy="10" r="2" fill="#5D4037"/>
                                      </pattern>
                                  </defs>
                                  {/* Cliff Face */}
                                  <rect x="0" y="0" width="400" height="200" fill="url(#rockPattern)" />
                                  
                                  {/* Sea Water */}
                                  <rect x="0" y="120" width="400" height="80" fill="#4FC3F7" opacity="0.6" />
                                  
                                  {/* Waves hitting cliff */}
                                  {simStep > 0 && (
                                      <path d="M0,120 Q50,110 100,120 T200,120" stroke="white" strokeWidth="2" fill="none" className="animate-pulse">
                                          <animate attributeName="d" values="M0,120 Q50,110 100,120 T200,120; M0,120 Q50,130 100,120 T200,120; M0,120 Q50,110 100,120 T200,120" dur="2s" repeatCount="indefinite" />
                                      </path>
                                  )}

                                  {/* The Cave Being Carved */}
                                  <path 
                                      d={`M0,100 Q${simStep * 1.5},80 ${simStep * 1.5},120 Q${simStep * 1.5},160 0,140 Z`} 
                                      fill="#3E2723" 
                                  />
                                  
                                  {/* Labels */}
                                  <text x="10" y="30" fill="white" fontSize="12" fontWeight="bold">غلاف صخري (صخور)</text>
                                  <text x="10" y="180" fill="#01579B" fontSize="12" fontWeight="bold">غلاف مائي (أمواج)</text>
                              </svg>
                          ) : (
                              // PLANT SIMULATION
                              <svg viewBox="0 0 400 200" className="w-full h-full">
                                  {/* Sky */}
                                  <rect width="400" height="100" fill="#E0F7FA" />
                                  {/* Soil */}
                                  <rect y="100" width="400" height="100" fill="#795548" />
                                  
                                  {/* Minerals in Soil */}
                                  <circle cx="180" cy="150" r="3" fill="#FFD700" />
                                  <circle cx="220" cy="180" r="3" fill="#FFD700" />
                                  <circle cx="200" cy="120" r="3" fill="#FFD700" />

                                  {/* Plant Stem */}
                                  <rect x="198" y={100 - (simStep * 0.8)} width="4" height={simStep * 0.8} fill="#4CAF50" />
                                  
                                  {/* Leaves growing */}
                                  {simStep > 50 && (
                                      <g transform={`translate(200, ${100 - (simStep * 0.8)}) scale(${simStep/100})`}>
                                          <circle r="20" fill="#66BB6A" opacity="0.8" />
                                          <circle cx="-15" cy="10" r="10" fill="#66BB6A" />
                                          <circle cx="15" cy="10" r="10" fill="#66BB6A" />
                                      </g>
                                  )}

                                  {/* Roots growing and absorbing minerals */}
                                  <path 
                                      d={`M200,100 Q180,${100 + simStep} 160,${100 + (simStep * 0.5)}`} 
                                      stroke="#A1887F" strokeWidth="2" fill="none"
                                  />
                                  <path 
                                      d={`M200,100 Q220,${100 + simStep} 240,${100 + (simStep * 0.5)}`} 
                                      stroke="#A1887F" strokeWidth="2" fill="none"
                                  />

                                  {/* Absorption Particles */}
                                  {simStep > 20 && (
                                      <circle cx="180" cy="150" r="2" fill="#FFD700">
                                          <animate attributeName="cy" from="150" to="100" dur="1s" repeatCount="indefinite" />
                                          <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite" />
                                      </circle>
                                  )}

                                  <text x="10" y="30" fill="#006064" fontSize="12" fontWeight="bold">غلاف حيوي (نبات)</text>
                                  <text x="10" y="180" fill="#FFFFFF" fontSize="12" fontWeight="bold">غلاف صخري (تربة ومعادن)</text>
                              </svg>
                          )}

                          {/* Instructions Overlay */}
                          {simStep === 0 && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                                  <button onClick={startSim} className="bg-white text-indigo-900 px-8 py-3 rounded-full font-black text-xl shadow-xl hover:scale-110 transition-transform flex items-center gap-2">
                                      <Play fill="currentColor" /> ابدأ المحاكاة
                                  </button>
                              </div>
                          )}
                      </div>

                      <div className="p-6 bg-white border-t border-slate-100">
                          <h3 className="font-bold text-lg text-slate-800 mb-2">
                              {activeSim === 'cave' ? 'النتيجة: نحت الصخور وتكوين الكهوف' : 'النتيجة: امتصاص المعادن والنمو'}
                          </h3>
                          <p className="text-slate-600">
                              {activeSim === 'cave' 
                                  ? 'تتفاعل أمواج البحر (الغلاف المائي) مع صخور الشاطئ (الغلاف الصخري) مما يؤدي لتآكلها وتكوين الكهوف البحرية.' 
                                  : 'تمتص جذور النباتات (الغلاف الحيوي) الماء والمعادن من التربة (الغلاف الصخري) لتنمو وتزدهر.'}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. HUMAN IMPACT (UPDATED) - FIGURE 9 SIMULATION ---
  const ImpactSection = () => {
      const [activeProblem, setActiveProblem] = useState<string | null>(null);
      const [animStep, setAnimStep] = useState(0);

      // Existing Game State
      const [score, setScore] = useState(0);
      const [currentCard, setCurrentCard] = useState(0);
      const [finished, setFinished] = useState(false);

      // Cards data
      const cards = [
        { text: 'رمي المخلفات في الأودية والشواطئ', type: 'bad' },
        { text: 'زراعة الأشجار في فناء المنزل', type: 'good' },
        { text: 'ترك المصابيح مضاءة نهاراً', type: 'bad' },
        { text: 'استخدام أكياس قماشية بدلاً من البلاستيك', type: 'good' },
        { text: 'حرق النفايات في الهواء الطلق', type: 'bad' }
      ];

      useEffect(() => {
          let interval: any;
          if (activeProblem) {
              setAnimStep(0);
              interval = setInterval(() => {
                  setAnimStep(prev => prev < 100 ? prev + 2 : 100);
              }, 50);
          }
          return () => clearInterval(interval);
      }, [activeProblem]);

      const problems = [
          { id: 'acid', title: 'الأمطار الحمضية', sphere: 'غلاف جوي', color: 'bg-sky-50', border: 'border-sky-200', iconColor: 'text-sky-600', icon: <Cloud size={32}/> },
          { id: 'water', title: 'تلوث المياه', sphere: 'غلاف مائي', color: 'bg-blue-50', border: 'border-blue-200', iconColor: 'text-blue-600', icon: <Droplet size={32}/> },
          { id: 'plants', title: 'تدهور الغطاء النباتي', sphere: 'غلاف حيوي', color: 'bg-green-50', border: 'border-green-200', iconColor: 'text-green-600', icon: <TreeDeciduous size={32}/> },
          { id: 'landslide', title: 'الانهيارات الأرضية', sphere: 'غلاف صخري', color: 'bg-amber-50', border: 'border-amber-200', iconColor: 'text-amber-600', icon: <Mountain size={32}/> },
      ];

      const renderSimulation = () => {
          switch(activeProblem) {
              case 'acid':
                  return (
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Factory */}
                          <rect x="20" y="100" width="60" height="80" fill="#475569" />
                          <polygon points="20,100 50,70 80,100" fill="#475569" />
                          {/* Smoke */}
                          <path d="M50,70 Q60,40 80,50 T120,40" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" opacity={animStep/100} className="transition-opacity" />
                          {/* Clouds turning dark */}
                          <path d="M100,50 Q120,20 150,50 T200,50" fill={animStep > 50 ? "#475569" : "#E2E8F0"} className="transition-colors duration-1000" />
                          {/* Yellow Rain */}
                          {animStep > 60 && (
                              <g stroke="#FACC15" strokeWidth="2" strokeDasharray="4 4">
                                  <line x1="120" y1="60" x2="110" y2="150" className="animate-[rain_1s_infinite]" />
                                  <line x1="150" y1="60" x2="140" y2="150" className="animate-[rain_1s_infinite]" style={{animationDelay: '0.2s'}} />
                                  <line x1="180" y1="60" x2="170" y2="150" className="animate-[rain_1s_infinite]" style={{animationDelay: '0.4s'}} />
                              </g>
                          )}
                          {/* Tree dying */}
                          <g transform="translate(250, 100)">
                              <rect x="15" y="50" width="10" height="50" fill="#78350F" />
                              <circle cx="20" cy="30" r="30" fill={animStep > 80 ? "#A16207" : "#16A34A"} className="transition-colors duration-1000" />
                          </g>
                          <text x="200" y="190" textAnchor="middle" fill="#B91C1C" fontSize="14" fontWeight="bold" opacity={animStep > 90 ? 1 : 0}>النتيجة: موت الأشجار وتلوث التربة</text>
                      </svg>
                  );
              case 'water':
                  return (
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Water Body */}
                          <rect x="0" y="100" width="400" height="100" fill={animStep > 50 ? "#334155" : "#38BDF8"} className="transition-colors duration-1000" />
                          {/* Pipe */}
                          <circle cx="50" cy="100" r="15" fill="#64748B" />
                          <rect x="0" y="90" width="50" height="20" fill="#64748B" />
                          {/* Waste */}
                          {animStep > 20 && (
                              <path d="M60,100 Q100,120 150,110" stroke="#1E293B" strokeWidth="8" strokeDasharray="10 5" className="animate-[dash_1s_infinite]" />
                          )}
                          {/* Fish */}
                          <g transform={`translate(${200 + animStep}, 150) ${animStep > 60 ? 'rotate(180)' : ''}`}>
                              <path d="M0,0 L20,-10 L20,10 Z" fill={animStep > 60 ? "#94A3B8" : "#F59E0B"} />
                              <circle cx="5" cy="-2" r="2" fill="white" />
                          </g>
                          <text x="200" y="190" textAnchor="middle" fill="#B91C1C" fontSize="14" fontWeight="bold" opacity={animStep > 90 ? 1 : 0}>النتيجة: موت الأسماك وتلوث المياه</text>
                      </svg>
                  );
              case 'plants':
                  return (
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Ground */}
                          <rect x="0" y="150" width="400" height="50" fill={animStep > 80 ? "#D97706" : "#16A34A"} className="transition-colors duration-1000" />
                          {/* Trees Disappearing */}
                          {animStep < 50 && <circle cx="100" cy="120" r="30" fill="#15803D" />}
                          {animStep < 70 && <circle cx="200" cy="110" r="40" fill="#15803D" />}
                          {animStep < 90 && <circle cx="300" cy="130" r="25" fill="#15803D" />}
                          {/* Bulldozer */}
                          <g transform={`translate(${animStep * 3}, 130)`}>
                              <rect width="60" height="30" fill="#FACC15" />
                              <circle cx="15" cy="30" r="10" fill="black" />
                              <circle cx="45" cy="30" r="10" fill="black" />
                              <rect x="-20" y="10" width="20" height="20" fill="#713F12" /> {/* Blade */}
                          </g>
                          <text x="200" y="190" textAnchor="middle" fill="#B91C1C" fontSize="14" fontWeight="bold" opacity={animStep > 90 ? 1 : 0}>النتيجة: التصحر وفقدان الغطاء النباتي</text>
                      </svg>
                  );
              case 'landslide':
                  return (
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Hill */}
                          <path d="M0,200 L100,50 L200,50 L300,200" fill="#A8A29E" />
                          {/* Rocks Falling */}
                          <g transform={`translate(${100 + (animStep * 1.5)}, ${50 + (animStep * 1.2)}) rotate(${animStep * 5})`}>
                              <path d="M0,0 L20,-10 L30,10 L10,20 Z" fill="#57534E" />
                          </g>
                          <g transform={`translate(${120 + (animStep * 1.3)}, ${60 + (animStep * 1.1)}) rotate(-${animStep * 3})`}>
                              <circle r="15" fill="#78716C" />
                          </g>
                          {/* Warning Sign */}
                          <g transform="translate(320, 150)">
                              <path d="M0,0 L-20,40 L20,40 Z" fill="#FACC15" stroke="black" strokeWidth="2" />
                              <text x="-2" y="30" fontSize="20" fill="black">!</text>
                          </g>
                          <text x="200" y="190" textAnchor="middle" fill="#B91C1C" fontSize="14" fontWeight="bold" opacity={animStep > 90 ? 1 : 0}>النتيجة: تدمير الطرق والممتلكات</text>
                      </svg>
                  );
              default: return null;
          }
      };

      // Game Logic
      const handleChoice = (choice: 'good' | 'bad') => {
          if (cards[currentCard].type === choice) setScore(prev => prev + 1);
          if (currentCard < cards.length - 1) setCurrentCard(prev => prev + 1);
          else setFinished(true);
      };
      const resetGame = () => { setScore(0); setCurrentCard(0); setFinished(false); };

      return (
          <div className="animate-fade-in space-y-12">
              <div className="text-center">
                  <h2 className="text-3xl font-black text-slate-800 mb-4">المشكلات البيئية (الشكل 9)</h2>
                  <p className="text-lg text-slate-600">أنشطة الإنسان السلبية تؤثر على توازن الأغلفة. اضغط على المشكلة لرؤية تأثيرها.</p>
              </div>

              {/* Interactive Problem Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {problems.map((prob) => (
                      <button 
                          key={prob.id}
                          onClick={() => setActiveProblem(prob.id)}
                          className={`p-4 rounded-2xl border-2 transition-all hover:scale-105 flex flex-col items-center gap-3 text-center ${activeProblem === prob.id ? `${prob.color} ${prob.border} shadow-lg ring-2 ring-offset-2` : 'bg-white border-slate-200'}`}
                      >
                          <div className={`${prob.iconColor}`}>{prob.icon}</div>
                          <h4 className="font-bold text-slate-800">{prob.title}</h4>
                          <span className="text-xs font-bold text-slate-500 bg-white px-2 py-1 rounded border">{prob.sphere}</span>
                      </button>
                  ))}
              </div>

              {/* Simulation Box */}
              {activeProblem && (
                  <div className="bg-slate-50 border-4 border-slate-200 rounded-3xl p-6 relative h-64 overflow-hidden shadow-inner animate-slide-up">
                      <button onClick={() => setActiveProblem(null)} className="absolute top-4 right-4 bg-white/50 p-2 rounded-full hover:bg-white text-slate-600 z-10">✕</button>
                      {renderSimulation()}
                  </div>
              )}

              {/* Game Section */}
              <div className="pt-12 border-t-2 border-slate-100">
                  <div className="text-center mb-8">
                      <h2 className="text-3xl font-black text-slate-800 mb-4">لعبة: حارس البيئة 🛡️</h2>
                      <p className="text-xl text-slate-600">قيم الأفعال التالية: هل هي إيجابية أم سلبية؟</p>
                  </div>

                  <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl border-4 border-indigo-50 overflow-hidden relative min-h-[400px] flex flex-col items-center justify-center p-6">
                      {!finished ? (
                          <>
                              <div className="absolute top-4 right-4 bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-500">
                                  {currentCard + 1} / {cards.length}
                              </div>
                              <div className="mb-8 p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-100 w-full text-center min-h-[120px] flex items-center justify-center">
                                  <h3 className="text-2xl font-black text-indigo-900 leading-relaxed">{cards[currentCard].text}</h3>
                              </div>
                              <div className="flex gap-6 w-full">
                                  <button onClick={() => handleChoice('good')} className="flex-1 bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl font-bold text-lg shadow-lg flex flex-col items-center gap-2 transition-transform active:scale-95">
                                      <CheckCircle size={32} /> إيجابي ✅
                                  </button>
                                  <button onClick={() => handleChoice('bad')} className="flex-1 bg-red-500 hover:bg-red-600 text-white p-4 rounded-2xl font-bold text-lg shadow-lg flex flex-col items-center gap-2 transition-transform active:scale-95">
                                      <XCircle size={32} /> سلبي ❌
                                  </button>
                              </div>
                          </>
                      ) : (
                          <div className="text-center animate-zoom-in">
                              <Award size={80} className="text-yellow-400 mx-auto mb-4" />
                              <h3 className="text-3xl font-black text-slate-800 mb-2">النتيجة: {score} / {cards.length}</h3>
                              <p className="text-slate-500 mb-6 font-medium">{score === cards.length ? "ممتاز! أنت حارس بيئي رائع 🌟" : "جيد! حاول مرة أخرى."}</p>
                              <button onClick={resetGame} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700">إعادة اللعبة</button>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. OMAN EFFORTS & NOAH'S STORY (Pages 31-33) ---
  const OmanSection = () => {
      const [treesPlanted, setTreesPlanted] = useState(0);

      return (
          <div className="animate-fade-in space-y-10">
              
              {/* Plant a Tree Mini-Game */}
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden text-center">
                  <div className="relative z-10">
                      <span className="bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-xs font-black mb-4 inline-block">مبادرة وطنية</span>
                      <h3 className="text-3xl font-black mb-4">زراعة 10 ملايين شجرة 🌳</h3>
                      <p className="text-lg opacity-90 mb-6">ساهم معنا في المبادرة.. اضغط لزراعة شجرة!</p>
                      
                      <button 
                          onClick={() => setTreesPlanted(prev => prev + 1)}
                          className="bg-white text-green-700 px-8 py-3 rounded-full font-bold text-xl shadow-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 mx-auto"
                      >
                          <Sprout /> ازرع الآن
                      </button>

                      <div className="mt-6 flex justify-center gap-2 flex-wrap">
                          {Array.from({ length: Math.min(treesPlanted, 10) }).map((_, i) => (
                              <div key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                                  <Trees size={32} className="text-green-200" />
                              </div>
                          ))}
                      </div>
                      <p className="mt-4 font-bold text-2xl">{treesPlanted > 0 ? `زرعت ${treesPlanted} شجرة!` : ''}</p>
                  </div>
              </div>

              {/* Royal Spotlight (Page 31) */}
              <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-200 relative overflow-hidden text-center">
                  <Quote className="absolute top-4 left-4 text-indigo-200 w-24 h-24 rotate-180" />
                  <div className="relative z-10">
                      <h3 className="text-2xl font-black text-indigo-900 mb-4">إضاءات سلطانية 👑</h3>
                      <p className="text-xl text-indigo-800 font-serif italic leading-loose">
                          "إن العناية بالبيئة ومقدراتها مسؤولية عالمية لا تحدها الحدود السياسية للدول."
                      </p>
                      <p className="text-indigo-600 font-bold mt-4 text-sm">- من كلمة السلطان هيثم بن طارق حفظه الله (2021م)</p>
                  </div>
              </div>

              {/* Noah's Story (Page 33) */}
              <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200 mt-8">
                  <h3 className="text-2xl font-black text-amber-900 mb-4 flex items-center gap-2">
                      <BookOpen /> اقرأ واستمتع: قصة نوح عليه السلام
                  </h3>
                  <div className="bg-white p-6 rounded-xl text-lg text-slate-700 leading-loose shadow-sm max-h-96 overflow-y-auto">
                      <p>
                          دعا نبي الله نوح -عليه السلام- قومه ليلاً ونهاراً لعبادة الله، فكذبوه وعصوه. فأمره الله تعالى ببناء سفينة قبل الطوفان.
                      </p>
                      <p className="mt-4">
                          حملت السفينة من كل زوجين اثنين ذكراً وأنثى من الحيوانات والطيور؛ امتثالاً لقوله تعالى:
                          <br/>
                          <span className="text-amber-700 font-serif block text-center my-4 text-xl">﴿احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ﴾ (هود: 40)</span>
                      </p>
                      <p className="mt-2">
                          كانت السفينة وسيلة بأمر الله للحفاظ على الإنسان وحفظ <strong>النوع الحيواني</strong>.
                      </p>
                      <div className="mt-4 flex justify-center">
                          <Ship size={64} className="text-amber-800 opacity-50" />
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">علاقة الأغلفة (الدرس 2)</h1>
        </div>
        <nav className="p-4 space-y-3 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection('importance'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'importance' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> أهمية الأغلفة
          </button>
          <button onClick={() => {setActiveSection('interaction'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'interaction' ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <RotateCcw size={20}/> العلاقة التفاعلية
          </button>
          <button onClick={() => {setActiveSection('impact'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'impact' ? 'bg-red-100 text-red-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <AlertTriangle size={20}/> تأثير الإنسان
          </button>
          <button onClick={() => {setActiveSection('oman'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'oman' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Leaf size={20}/> جهود عمان
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">الأهمية والعلاقة</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
          {activeSection === 'importance' && <ImportanceSection />}
          {activeSection === 'interaction' && <InteractionSection />}
          {activeSection === 'impact' && <ImpactSection />}
          {activeSection === 'oman' && <OmanSection />}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson2;
