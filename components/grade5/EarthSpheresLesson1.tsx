
import React, { useState, useEffect } from 'react';
import { Section } from '../../types';
import { Menu, ArrowRight, Target, Globe2, Sun, Cloud, Droplet, Mountain, MessageCircle, Info, Check, RotateCcw, Star, Wind, Thermometer, Play, Pause, Waves, Telescope, BookOpen, Quote, Award, Leaf, Smile, CheckCircle, HelpCircle, ShieldCheck } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const EarthSpheresLesson1: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.SPHERES_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. SOLAR SYSTEM & INTRO TO SPHERES (Pages 17-20) ---
  const SolarSystemSection = () => {
      const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
      const [showIntroDialogue, setShowIntroDialogue] = useState(true);
      
      // Interactive Table State
      const [tableAnswers, setTableAnswers] = useState<{[key: number]: boolean}>({});

      const planets = [
          { id: 'mercury', name: 'عطارد', color: 'bg-stone-400', size: 12, orbit: 60, speed: 2, desc: 'أقرب الكواكب للشمس وشديد الحرارة.' },
          { id: 'venus', name: 'الزهرة', color: 'bg-orange-300', size: 18, orbit: 90, speed: 3, desc: 'توأم الأرض في الحجم، وأكثر الكواكب لمعاناً.' },
          { id: 'earth', name: 'الأرض', color: 'bg-blue-500', size: 20, orbit: 130, speed: 4, desc: 'الكوكب المائي، وهو الوحيد الذي توجد عليه حياة.' },
          { id: 'mars', name: 'المريخ', color: 'bg-red-500', size: 16, orbit: 170, speed: 5, desc: 'الكوكب الأحمر.' },
          { id: 'jupiter', name: 'المشتري', color: 'bg-orange-200', size: 40, orbit: 230, speed: 8, desc: 'أكبر كواكب المجموعة الشمسية.' },
          { id: 'saturn', name: 'زحل', color: 'bg-yellow-200', size: 35, orbit: 290, speed: 10, ring: true, desc: 'يتميز بوجود حلقات ملونة تدور حوله.' },
          { id: 'uranus', name: 'أورانوس', color: 'bg-cyan-300', size: 25, orbit: 340, speed: 12, desc: 'الكوكب البارد.' },
          { id: 'neptune', name: 'نبتون', color: 'bg-blue-700', size: 24, orbit: 390, speed: 14, desc: 'أبعد الكواكب وشديد البرودة.' },
      ];

      const tableData = [
          { id: 1, question: 'الكوكب الأقرب إلى الشمس', answer: 'عطارد' },
          { id: 2, question: 'الكوكب الأكبر في المجموعة الشمسية', answer: 'المشتري' },
          { id: 3, question: 'الكوكب الثالث في الترتيب', answer: 'الأرض' },
          { id: 4, question: 'الكوكب الذي يتميز بوجود حلقات حوله', answer: 'زحل' },
      ];

      const toggleAnswer = (id: number) => {
          setTableAnswers(prev => ({...prev, [id]: true}));
      };

      return (
          <div className="p-6 animate-fade-in space-y-12">
              
              {/* Intro Dialogue (Page 17) */}
              {showIntroDialogue && (
                  <div className="bg-purple-100 rounded-3xl p-8 border-4 border-purple-200 shadow-xl relative mb-8">
                      <button onClick={() => setShowIntroDialogue(false)} className="absolute top-4 right-4 text-purple-400 hover:text-purple-600">✕</button>
                      <h2 className="text-2xl font-black text-purple-900 mb-6 text-center">حوار: نافذة على الكون 🪟</h2>
                      <div className="flex flex-col gap-6">
                          <div className="flex items-start gap-4">
                              <div className="bg-white p-3 rounded-full text-3xl shadow">👩‍👧</div>
                              <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-sm text-purple-800">
                                  <strong>الأم:</strong> ماذا تشاهدين يا فجر؟ أراك تقفين عند النافذة منذ فترة.
                              </div>
                          </div>
                          <div className="flex items-start gap-4 flex-row-reverse">
                              <div className="bg-white p-3 rounded-full text-3xl shadow">👧</div>
                              <div className="bg-purple-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-purple-900">
                                  <strong>فجر:</strong> أتأمل الشمس يا أمي، هل هي قريبة منا؟ وهل نحن الكوكب الوحيد الموجود في هذا الكون؟ وهل تعيش عليها كائنات حية مثلنا؟
                              </div>
                          </div>
                      </div>
                      <div className="mt-6 text-center">
                          <p className="text-purple-700 font-bold bg-white/50 inline-block px-4 py-1 rounded-full">ناقش مجموعتك في الأسئلة التي طرحتها فجر!</p>
                      </div>
                  </div>
              )}

              {/* Objectives (Page 17) */}
              <div className="bg-indigo-50 border-r-4 border-indigo-600 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أتعلم في هذا الدرس:
                  </h3>
                  <ul className="grid gap-3 text-indigo-800 font-medium text-lg leading-relaxed">
                      <li className="flex items-center gap-2">• موقع كوكب الأرض بالنسبة إلى المجموعة الشمسية.</li>
                      <li className="flex items-center gap-2">• أغلفة كوكب الأرض، ومكوناتها.</li>
                  </ul>
              </div>

              {/* Solar System Simulation (Page 18) */}
              <div className="bg-black rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden relative min-h-[600px] flex items-center justify-center border-4 border-slate-700">
                  <div className="absolute top-4 left-4 z-20">
                      <div className="bg-yellow-500/20 backdrop-blur-md p-4 rounded-xl border border-yellow-500/50 text-yellow-100 max-w-sm text-center">
                          <Quote size={20} className="mx-auto mb-2 text-yellow-400"/>
                          <p className="font-serif text-lg">﴿لَا الشَّمْسُ يَنْبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ ۚ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ﴾</p>
                          <span className="text-xs text-yellow-300 block mt-2">(يس: 40)</span>
                      </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-3 rounded-xl z-20 text-sm font-medium max-w-xs border border-white/20">
                      <Info className="inline mb-1 ml-1" size={16}/> اضغط على الكواكب لمعرفة أسمائها
                  </div>
                  
                  {/* Sun */}
                  <div className="absolute bg-yellow-500 rounded-full w-24 h-24 md:w-36 md:h-36 shadow-[0_0_80px_rgba(253,224,71,0.6)] z-10 flex items-center justify-center">
                      <span className="text-yellow-900 font-black text-sm md:text-base">الشمس</span>
                  </div>
                  {/* Planets */}
                  {planets.map((planet) => (
                      <div key={planet.id} className="absolute rounded-full border border-white/10 pointer-events-none"
                           style={{ width: `${planet.orbit * 2}px`, height: `${planet.orbit * 2}px` }}>
                          <div className="w-full h-full animate-spin-slow" style={{ animationDuration: `${planet.speed * 50}s` }}>
                              <div 
                                  onClick={() => setSelectedPlanet(planet.id)}
                                  className={`absolute top-1/2 -right-[${planet.size/2}px] -translate-y-1/2 translate-x-1/2 ${planet.color} rounded-full cursor-pointer hover:scale-150 transition-transform z-20 shadow-lg pointer-events-auto flex items-center justify-center`}
                                  style={{ width: `${planet.size}px`, height: `${planet.size}px` }}
                              >
                                  {planet.ring && <div className="absolute w-[160%] h-[40%] border-2 border-yellow-100/50 rounded-full transform rotate-12 pointer-events-none"></div>}
                              </div>
                          </div>
                      </div>
                  ))}
                  {/* Info Modal */}
                  {selectedPlanet && (
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl z-30 w-11/12 md:w-96 text-center animate-slide-up border-b-4 border-indigo-600">
                          <h3 className="text-2xl font-black text-indigo-900 mb-3">{planets.find(p => p.id === selectedPlanet)?.name}</h3>
                          <p className="text-slate-700 font-medium mb-5 text-lg leading-relaxed">{planets.find(p => p.id === selectedPlanet)?.desc}</p>
                          <button onClick={() => setSelectedPlanet(null)} className="bg-indigo-600 text-white px-8 py-2 rounded-full font-bold text-base hover:bg-indigo-700 transition-colors">إغلاق</button>
                      </div>
                  )}
              </div>

              {/* Table Activity (Page 19) - INTERACTIVE NOW */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-100">
                  <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                          <BookOpen size={24} className="text-orange-500"/> تأمل وأجب (أكمل الجدول):
                      </h3>
                      <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">اضغط على الخانات للكشف عن الإجابة</span>
                  </div>
                  
                  <div className="overflow-x-auto">
                      <table className="w-full text-right border-collapse">
                          <thead>
                              <tr className="bg-orange-50">
                                  <th className="p-4 border border-orange-200 text-orange-900 font-black w-2/3">العبارة</th>
                                  <th className="p-4 border border-orange-200 text-orange-900 font-black w-1/3">اسم الكوكب</th>
                              </tr>
                          </thead>
                          <tbody className="text-slate-700">
                              {tableData.map((row) => (
                                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                                      <td className="p-4 border border-orange-100 font-medium text-lg">{row.question}</td>
                                      <td 
                                          className={`p-4 border border-orange-100 font-bold cursor-pointer transition-all duration-300 text-center select-none ${tableAnswers[row.id] ? 'bg-green-50 text-green-700' : 'bg-slate-50 text-slate-400 hover:bg-orange-100 hover:text-orange-600'}`}
                                          onClick={() => toggleAnswer(row.id)}
                                      >
                                          {tableAnswers[row.id] ? (
                                              <span className="flex items-center justify-center gap-2 animate-scale-in text-xl">
                                                  <CheckCircle size={20} /> {row.answer}
                                              </span>
                                          ) : (
                                              <span className="flex items-center justify-center gap-2 text-sm">
                                                  <HelpCircle size={18} /> اضغط للكشف
                                              </span>
                                          )}
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>

              {/* Omani Achievement (Page 20) */}
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border-2 border-blue-400/30">
                  <div className="absolute top-0 left-0 p-40 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="bg-white/10 p-6 rounded-full border border-white/20 animate-pulse flex-shrink-0 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                          <Telescope size={56} className="text-yellow-400"/>
                      </div>
                      <div className="text-center md:text-right flex-1">
                          <div className="inline-block bg-yellow-500 text-blue-900 px-4 py-1.5 rounded-full text-sm font-black mb-4 shadow-lg transform -rotate-1">منجز عماني (ص 20)</div>
                          <h3 className="text-3xl md:text-4xl font-black mb-4 text-yellow-300">الجمعية الفلكية العمانية</h3>
                          <p className="text-blue-100 leading-loose text-lg md:text-xl font-medium">
                              تأسست عام 2008م، وتعد مركزاً رائداً للأنشطة الفلكية داخل سلطنة عمان وخارجها.
                          </p>
                      </div>
                  </div>
              </div>

              {/* Figure 2 Simulation (Spheres Gateway) */}
              <div className="py-10 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
                  <h2 className="text-3xl font-black text-slate-800 text-center mb-4">أغلفة كوكب الأرض (محاكاة الشكل 2)</h2>
                  <p className="text-center text-slate-500 mb-10 text-lg">اضغط على أي غلاف للدخول إلى تفاصيله</p>
                  
                  <div className="relative w-full max-w-xl mx-auto aspect-square">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] z-20 bg-blue-600 rounded-full border-4 border-white shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center animate-pulse">
                          <Globe2 size={80} className="text-white" />
                      </div>
                      <div className="w-full h-full grid grid-cols-2 gap-2">
                          <button onClick={() => setActiveSection(Section.LITHOSPHERE)} className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-tl-3xl rounded-br-3xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-white shadow-lg group relative overflow-hidden">
                              <Mountain size={48} className="mb-2 z-10" /> <span className="font-black text-lg z-10">الغلاف الصخري</span>
                          </button>
                          <button onClick={() => setActiveSection(Section.ATMOSPHERE)} className="bg-gradient-to-bl from-sky-400 to-blue-600 rounded-tr-3xl rounded-bl-3xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-white shadow-lg group relative overflow-hidden">
                              <Cloud size={48} className="mb-2 z-10" /> <span className="font-black text-lg z-10">الغلاف الجوي</span>
                          </button>
                          <button onClick={() => setActiveSection(Section.LITHOSPHERE)} className="bg-gradient-to-tr from-green-600 to-emerald-800 rounded-bl-3xl rounded-tr-3xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-white shadow-lg group relative overflow-hidden">
                              <Leaf size={48} className="mb-2 z-10" /> <span className="font-black text-lg z-10">الغلاف الحيوي</span>
                          </button>
                          <button onClick={() => setActiveSection(Section.HYDROSPHERE)} className="bg-gradient-to-tl from-blue-500 to-cyan-400 rounded-br-3xl rounded-tl-3xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-white shadow-lg group relative overflow-hidden">
                              <Droplet size={48} className="mb-2 z-10" /> <span className="font-black text-lg z-10">الغلاف المائي</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. ATMOSPHERE SECTION (Page 21) ---
  const AtmosphereSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-sky-600 mb-3">أولاً: الغلاف الجوي</h2>
                  <p className="text-slate-500 text-xl font-medium">الدرع الواقي للأرض</p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="relative h-96 bg-gradient-to-b from-[#0f172a] via-[#1e40af] to-[#38bdf8] rounded-full overflow-hidden shadow-2xl border-4 border-slate-200">
                      <div className="absolute bottom-0 w-full h-24 bg-green-600 rounded-b-full"></div>
                      {Array.from({length: 20}).map((_, i) => (
                          <div key={i} className="absolute bg-white/20 rounded-full animate-pulse" 
                               style={{ width: Math.random() * 12 + 6 + 'px', height: Math.random() * 12 + 6 + 'px', top: Math.random() * 70 + '%', left: Math.random() * 90 + '%', animationDuration: Math.random() * 3 + 1 + 's' }}>
                          </div>
                      ))}
                      <div className="absolute top-[30%] w-full h-3 bg-purple-400/50 blur-md"></div>
                      <span className="absolute top-[28%] right-6 text-white text-sm font-bold bg-purple-600/50 px-3 py-1 rounded-full">طبقة الأوزون</span>
                      <div className="absolute top-0 left-10 w-2 h-24 bg-yellow-400/50 rotate-12"></div>
                      <div className="absolute top-[30%] left-[60px] text-red-500 text-3xl font-bold filter drop-shadow-md">✖</div>
                  </div>

                  <div className="space-y-8">
                      <div className="bg-sky-50 p-8 rounded-3xl border-l-8 border-sky-500 shadow-sm">
                          <h3 className="font-bold text-sky-900 mb-3 text-2xl">تعريفه:</h3>
                          <p className="text-sky-800 leading-loose font-medium text-lg">
                              الطبقة الغازية التي تحيط بكوكب الأرض إحاطة تامة. تتكون من بخار الماء ومجموعة من الغازات أهمها: <span className="font-black text-sky-950">النيتروجين والأكسجين</span>.
                          </p>
                      </div>
                      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
                          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-3 text-xl"><ShieldCheck size={28}/> أهميته:</h3>
                          <ul className="space-y-4">
                              <li className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                                  <div className="bg-purple-100 p-3 rounded-full text-purple-600"><ShieldCheck size={24}/></div>
                                  <span className="text-base md:text-lg text-slate-700 font-medium">يحتوي على <strong>حزام الأوزون</strong> الذي يحمي كوكب الأرض من الأشعة الضارة.</span>
                              </li>
                              <li className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                                  <div className="bg-green-100 p-3 rounded-full text-green-600"><Wind size={24}/></div>
                                  <span className="text-base md:text-lg text-slate-700 font-medium">يزود المخلوقات الحية بالهواء اللازم للتنفس.</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. HYDROSPHERE & WATER CYCLE (Page 22-23) ---
  const HydrosphereSection = () => {
      const [cycleStep, setCycleStep] = useState(0); 
      const [isPlaying, setIsPlaying] = useState(false);

      useEffect(() => {
          let timer: any;
          if (isPlaying) {
              timer = setInterval(() => { setCycleStep(prev => (prev < 4 ? prev + 1 : 1)); }, 2500);
          } else { setCycleStep(0); }
          return () => clearInterval(timer);
      }, [isPlaying]);

      return (
          <div className="p-6 animate-fade-in space-y-12">
              <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-blue-600 mb-3">ثالثاً: الغلاف المائي (ص 22)</h2>
                  <p className="text-slate-500 text-xl font-serif">قال تعالى: ﴿وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ﴾</p>
              </div>

              <div className="bg-blue-50 border-r-8 border-blue-500 p-8 rounded-l-3xl shadow-sm mb-10">
                  <h3 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-3"><Droplet size={32}/> المفهوم:</h3>
                  <p className="text-blue-900 text-xl font-medium leading-loose">
                      "يشمل جميع الموارد المائية الموجودة في الكرة الأرضية بحالاتها الثلاث: (السائلة، والصلبة، والغازية)، سواء أكانت مياهاً مالحة أم عذبة."
                  </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 relative">
                  <div className="absolute top-6 left-6 z-20">
                      <button onClick={() => setIsPlaying(!isPlaying)} className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all text-lg ${isPlaying ? 'bg-red-500' : 'bg-blue-600'}`}>
                          {isPlaying ? <><Pause size={24}/> إيقاف</> : <><Play size={24}/> تشغيل المحاكاة</>}
                      </button>
                  </div>
                  <div className="relative h-[500px] w-full bg-sky-200 overflow-hidden">
                      <div className="absolute top-8 right-8"><Sun size={100} className={`text-yellow-500 ${cycleStep >= 1 ? 'animate-spin-slow scale-110' : ''}`} /></div>
                      <svg viewBox="0 0 100 100" className="absolute bottom-24 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                          <path d="M-10,100 L30,40 L60,100 Z" fill="#795548" />
                          <path d="M20,100 L50,50 L80,100 Z" fill="#5D4037" />
                          <path d="M25,50 L30,40 L35,50 Z" fill="white" />
                      </svg>
                      <div className="absolute bottom-0 w-full h-32 bg-blue-600 flex items-end">
                          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                      </div>
                      {cycleStep === 1 && (
                          <div className="absolute bottom-32 right-1/4 flex gap-6">
                              <ArrowRight className="text-white -rotate-90 w-10 h-10 animate-bounce" />
                              <span className="absolute -top-10 right-0 text-blue-900 font-bold text-lg bg-white/80 px-3 py-1 rounded-full shadow-sm">تبخر</span>
                          </div>
                      )}
                      <div className={`absolute top-24 left-1/3 transition-all duration-1000 ${cycleStep >= 2 ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 translate-x-20'}`}>
                          <Cloud size={140} className="text-white fill-white drop-shadow-xl" />
                          {cycleStep >= 2 && <span className="absolute -top-8 left-10 text-blue-900 font-bold text-lg bg-white/80 px-3 py-1 rounded-full shadow-sm">تكاثف</span>}
                      </div>
                      {cycleStep >= 3 && (
                          <div className="absolute top-56 left-1/3 w-32 h-40 flex justify-center gap-4">
                              <div className="w-1.5 h-6 bg-blue-600 animate-[rain_0.5s_infinite_linear]"></div>
                              <span className="absolute top-12 -right-24 text-blue-900 font-bold text-lg bg-white/80 px-3 py-1 rounded-full shadow-sm">تساقط</span>
                          </div>
                      )}
                      {cycleStep >= 4 && (
                          <div className="absolute bottom-24 left-10 w-48 h-3 bg-blue-400 rotate-12 animate-pulse rounded-full">
                              <span className="absolute -top-10 left-10 text-blue-900 font-bold text-lg bg-white/80 px-3 py-1 rounded-full shadow-sm">جريان وتجمع</span>
                          </div>
                      )}
                  </div>
              </div>

              <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-200 text-center shadow-md">
                  <h4 className="font-black text-indigo-900 text-2xl mb-4">ما المقصود بدورة الماء؟</h4>
                  <p className="text-indigo-800 text-xl font-bold leading-relaxed">"هي حركة الماء المستمرة من سطح الأرض إلى الغلاف الجوي، ثم عودته مرة أخرى."</p>
              </div>

              <div className="flex flex-col md:flex-row gap-12 items-center justify-center pt-8 border-t-2 border-slate-200">
                  <div className="relative w-56 h-56">
                      <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90 drop-shadow-xl">
                          <circle cx="16" cy="16" r="16" fill="#86efac" /> {/* Land 29% */}
                          <circle cx="16" cy="16" r="8" fill="transparent" stroke="#3b82f6" strokeWidth="16" strokeDasharray="71 100" /> {/* Water 71% */}
                      </svg>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white/90 rounded-full w-20 h-20 flex flex-col justify-center items-center shadow-sm">
                          <span className="block font-black text-blue-600 text-2xl">71%</span>
                          <span className="text-sm text-slate-500 font-bold">مياه</span>
                      </div>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex-1 max-w-md">
                      <h4 className="font-bold text-slate-800 mb-4 text-xl">توزيع سطح الأرض:</h4>
                      <ul className="space-y-4">
                          <li className="flex items-center gap-4 text-lg"><div className="w-6 h-6 bg-blue-500 rounded-md shadow-sm"></div> <span className="text-slate-700"><strong>المياه:</strong> 71%</span></li>
                          <li className="flex items-center gap-4 text-lg"><div className="w-6 h-6 bg-green-300 rounded-md shadow-sm"></div> <span className="text-slate-700"><strong>اليابسة:</strong> 29%</span></li>
                      </ul>
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. LITHOSPHERE & BIOSPHERE (Pages 22, 24, 26) ---
  const OtherSpheresSection = () => {
      const [activeTab, setActiveTab] = useState<'litho' | 'bio'>('litho');

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="flex justify-center bg-slate-100 p-1.5 rounded-full max-w-lg mx-auto mb-8 shadow-inner">
                  <button onClick={() => setActiveTab('litho')} className={`flex-1 py-3 rounded-full font-bold text-lg transition-all ${activeTab === 'litho' ? 'bg-white shadow text-amber-700' : 'text-slate-500 hover:bg-slate-200'}`}>الغلاف الصخري 🪨</button>
                  <button onClick={() => setActiveTab('bio')} className={`flex-1 py-3 rounded-full font-bold text-lg transition-all ${activeTab === 'bio' ? 'bg-white shadow text-green-700' : 'text-slate-500 hover:bg-slate-200'}`}>الغلاف الحيوي 🌿</button>
              </div>

              {activeTab === 'litho' ? (
                  <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200 shadow-lg animate-slide-up">
                      <div className="flex flex-col md:flex-row items-center gap-10">
                          <div className="flex-1 space-y-6">
                              <h3 className="text-3xl font-black text-amber-900 mb-4">ثانياً: الغلاف الصخري</h3>
                              <p className="text-amber-900 text-xl leading-loose font-medium">يمثل <strong>الطبقة الخارجية</strong> للقشرة الأرضية، بما في ذلك القارات وقيعان البحار والمحيطات.</p>
                              <div className="bg-white p-6 rounded-2xl border-r-4 border-amber-500 shadow-sm">
                                  <h4 className="font-bold text-amber-800 mb-2 text-lg">أهم المكونات:</h4>
                                  <p className="text-lg text-slate-700">الصخور، التربة، والمعادن.</p>
                              </div>
                          </div>
                          <div className="w-full md:w-1/2 h-72 bg-[#5D4037] rounded-3xl relative overflow-hidden shadow-2xl border-4 border-[#3E2723]">
                              <div className="absolute top-0 left-0 w-full h-1/3 bg-blue-400 opacity-80"></div> 
                              <div className="absolute top-12 left-0 w-1/3 h-full bg-[#795548] transform skew-x-12 origin-bottom-left border-r-4 border-[#4E342E]"></div>
                              <div className="absolute bottom-4 right-4 bg-black/40 text-white px-3 py-1 rounded-lg text-sm font-bold backdrop-blur-sm">باطن الأرض</div>
                          </div>
                      </div>
                  </div>
              ) : (
                  <div className="bg-green-50 p-8 rounded-3xl border border-green-200 shadow-lg animate-slide-up">
                      <h3 className="text-3xl font-black text-green-900 mb-6 text-center">رابعاً: الغلاف الحيوي</h3>
                      <p className="text-center text-green-800 mb-10 max-w-3xl mx-auto font-medium text-xl leading-relaxed">"يمثل البيئة التي تعيش وتنمو وتتكاثر فيها الكائنات الحية."</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          {[{icon:'👨‍👩‍👧‍👦',label:'الإنسان'},{icon:'🐘',label:'الحيوان'},{icon:'🌴',label:'النبات'},{icon:'🦠',label:'الكائنات الدقيقة'}].map((item, idx) => (
                              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm text-center hover:scale-105 transition-transform border-2 border-green-100 hover:border-green-300">
                                  <div className="text-5xl mb-4">{item.icon}</div>
                                  <span className="font-bold text-slate-800 text-lg">{item.label}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              )}

              {/* Ibn Al-Shatir (Page 26) */}
              <div className="mt-16 bg-amber-900 text-amber-50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border-4 border-amber-700">
                  <div className="absolute top-0 right-0 p-40 bg-black opacity-20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                      <div className="bg-white/10 p-8 rounded-full border-2 border-amber-500/30 shadow-lg backdrop-blur-sm">
                          <BookOpen size={64} className="text-yellow-400" />
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                              <Award className="text-yellow-400" size={28}/>
                              <span className="font-black text-yellow-400 text-base uppercase tracking-wider bg-black/30 px-3 py-1 rounded-lg">اقرأ واستمتع (ص 26)</span>
                          </div>
                          <h3 className="text-4xl font-black mb-6 font-serif text-white">ابن الشاطر (عالم الفلك)</h3>
                          <p className="text-amber-100 leading-loose mb-6 text-xl font-medium">ولد في دمشق، وشغف بدراسة الفلك منذ صغره. حقق ثروة هائلة، لكنه استغلها في طلب العلم.</p>
                          <div className="bg-black/30 p-6 rounded-2xl border border-amber-500/20 backdrop-blur-md shadow-inner">
                              <div className="flex gap-3 mb-2 opacity-60"><Quote className="text-yellow-500" size={24} /></div>
                              <p className="italic font-serif text-yellow-100 text-lg leading-relaxed">"من أشهر كتبه (الزيج الجديد)، وأثبت فيه نظرية دوران الأرض والكواكب حول الشمس قبل كوبرنيكوس بقرون."</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.SPHERES_INTRO: return <SolarSystemSection />; 
      case Section.ATMOSPHERE: return <AtmosphereSection />; 
      case Section.HYDROSPHERE: return <HydrosphereSection />; 
      case Section.LITHOSPHERE: return <OtherSpheresSection />; 
      default: return <SolarSystemSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">أغلفة كوكب الأرض 🌍</h1>
        </div>
        <nav className="p-4 space-y-3 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection(Section.SPHERES_INTRO); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === Section.SPHERES_INTRO ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Sun size={20}/> النظام الشمسي
          </button>
          <button onClick={() => {setActiveSection(Section.ATMOSPHERE); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === Section.ATMOSPHERE ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Cloud size={20}/> الغلاف الجوي
          </button>
          <button onClick={() => {setActiveSection(Section.HYDROSPHERE); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === Section.HYDROSPHERE ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Droplet size={20}/> الغلاف المائي
          </button>
          <button onClick={() => {setActiveSection(Section.LITHOSPHERE); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === Section.LITHOSPHERE ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Globe2 size={20}/> الصخري والحيوي
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">أغلفة كوكب الأرض</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson1;
