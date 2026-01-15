
import React, { useState } from 'react';
import { Menu, ArrowRight, Scroll, Moon, Star, Mail, CheckCircle, Quote, Map, Hammer, Ship, BookOpen, Users, MapPin, Target, Swords, User, ClipboardList, HelpCircle, Anchor, Flag, Palmtree, Coins, MessageCircle } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const OmanProphetEraLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'mazin' | 'letter' | 'society' | 'cities'>('mazin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. MAZIN'S STORY (Pages 59) ---
  const MazinSection = () => {
      const [step, setStep] = useState(0);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-amber-800 mb-2">قصة إسلام أهل عمان</h2>
                  <p className="text-amber-600">البداية كانت مع الصحابي مازن بن غضوبة من أهل سمائل</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100 relative overflow-hidden text-center">
                  {step === 0 && (
                      <div className="animate-fade-in">
                          <div className="w-32 h-32 bg-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-stone-300 shadow-inner">
                              <span className="text-6xl grayscale opacity-50">🗿</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 mb-4">الصنم "باجر"</h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                              كان مازن يعبد صنماً يسمى "باجر". في أحد الأيام سمع صوتاً من الصنم يخبره بظهور نبي الخير في مكة.
                              <br/><strong>ماذا فعل مازن؟</strong>
                          </p>
                          <button onClick={() => setStep(1)} className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                              <Hammer size={20} /> كسر الصنم وسافر
                          </button>
                      </div>
                  )}

                  {step === 1 && (
                      <div className="animate-slide-up">
                          <h3 className="text-xl font-bold text-green-800 mb-4">اللقاء بالنبي ﷺ</h3>
                          <p className="text-slate-700 mb-6">
                              وصل مازن إلى المدينة المنورة، وأعلن إسلامه، وطلب من النبي ﷺ أن يدعو لأهل عمان.
                          </p>
                          <div className="grid gap-3 max-w-lg mx-auto">
                              <div className="bg-green-50 p-3 rounded-xl border border-green-200 font-bold text-green-900">1. اللهم اهدهم</div>
                              <div className="bg-green-50 p-3 rounded-xl border border-green-200 font-bold text-green-900">2. وأطعمهم من جوع (الخصب)</div>
                              <div className="bg-green-50 p-3 rounded-xl border border-green-200 font-bold text-green-900">3. ولا تسلط عليهم عدواً من غيرهم (الأمن)</div>
                          </div>
                          <div className="mt-6 flex justify-center gap-4">
                              <button onClick={() => setStep(0)} className="text-slate-400 text-sm">إعادة القصة</button>
                              <button onClick={() => setStep(2)} className="bg-green-600 text-white px-6 py-2 rounded-full font-bold shadow">النتيجة</button>
                          </div>
                      </div>
                  )}

                  {step === 2 && (
                      <div className="animate-scale-in">
                          <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 mb-6">
                              <h4 className="font-bold text-amber-900 mb-2">أول مسجد في عمان</h4>
                              <p className="text-slate-700">عاد مازن إلى عمان وبنى مسجد <strong>"المضمار"</strong> في سمائل.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-xl text-right">
                              <p className="font-serif italic text-slate-600 text-center">
                                  "إليكَ رسولَ اللهِ خَبَّتْ مَطِيَّتِي ... تَجُوبُ الفَيَافِي مِـنْ عُمَانَ إِلى العَرْجِ"
                              </p>
                              <p className="text-xs text-center text-slate-400 mt-2">- من شعر مازن بن غضوبة</p>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- 2. THE LETTER & KINGS (Pages 60-61) ---
  const LetterSection = () => {
      const [opened, setOpened] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-slate-800 mb-4">رسالة النبي ﷺ إلى مَلِكَي عُمان</h2>
                  <p className="text-slate-600">أرسل النبي ﷺ الصحابي <strong>عمرو بن العاص</strong> برسالة إلى عبد وجيفر ابني الجلندى.</p>
              </div>

              {/* Interactive Map Route (Detailed) */}
              <div className="relative bg-[#f0e6d2] rounded-3xl overflow-hidden shadow-xl h-80 border-4 border-[#d7ccc8] group">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

                  <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full pointer-events-none">
                      <path 
                          id="routePath"
                          d="M 100,200 Q 300,280 400,250 T 650,180 L 720,160" 
                          fill="none" 
                          stroke="#b45309" 
                          strokeWidth="4" 
                          strokeDasharray="12 6"
                          strokeLinecap="round"
                      >
                          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="6s" repeatCount="indefinite" />
                      </path>
                  </svg>

                  {/* 1. Medina */}
                  <div className="absolute top-[45%] left-[10%] flex flex-col items-center z-10">
                      <div className="w-4 h-4 bg-green-600 rounded-full animate-ping absolute"></div>
                      <div className="w-4 h-4 bg-green-600 rounded-full relative border-2 border-white"></div>
                      <span className="mt-2 text-xs font-bold text-slate-800 bg-white/80 px-2 py-1 rounded shadow">المدينة المنورة</span>
                  </div>

                  {/* 2. Al-Yamamah */}
                  <div className="absolute top-[60%] left-[48%] flex flex-col items-center z-10">
                      <div className="w-3 h-3 bg-slate-600 rounded-full border-2 border-white"></div>
                      <span className="mt-2 text-xs font-bold text-slate-700 bg-white/60 px-2 py-1 rounded">اليمامة</span>
                  </div>

                  {/* 3. Tuwam */}
                  <div className="absolute top-[40%] left-[78%] flex flex-col items-center z-10">
                      <div className="w-3 h-3 bg-slate-600 rounded-full border-2 border-white"></div>
                      <span className="mt-2 text-xs font-bold text-slate-700 bg-white/60 px-2 py-1 rounded">توام (البريمي)</span>
                  </div>

                  {/* 4. Sohar */}
                  <div className="absolute top-[35%] left-[88%] flex flex-col items-center z-10">
                      <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white animate-pulse"></div>
                      <span className="mt-2 text-sm font-black text-red-800 bg-white/90 px-2 py-1 rounded shadow-lg border border-red-200">صحار (العاصمة)</span>
                  </div>

                  {/* Moving Messenger Icon */}
                  <div 
                      className="absolute z-20 text-3xl"
                      style={{ 
                          offsetPath: "path('M 100,200 Q 300,280 400,250 T 650,180 L 720,160')", 
                          animation: "moveMessenger 6s linear infinite" 
                      }}
                  >
                      🐫
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-amber-900 shadow border border-amber-200">
                      خط سير عمرو بن العاص
                  </div>
              </div>
              
              <style>{`
                  @keyframes moveMessenger {
                      0% { offset-distance: 0%; transform: scaleX(-1); }
                      100% { offset-distance: 100%; transform: scaleX(-1); }
                  }
              `}</style>

              {/* The Letter */}
              <div className="flex justify-center">
                  <div 
                      onClick={() => setOpened(!opened)}
                      className={`cursor-pointer transition-all duration-700 bg-[#f3e5ab] border-8 border-[#5d4037] rounded-lg shadow-2xl p-8 max-w-md w-full ${opened ? 'scale-100' : 'scale-95 hover:scale-100'}`}
                  >
                      {!opened ? (
                          <div className="text-center py-10">
                              <Mail size={48} className="mx-auto text-[#5d4037] mb-4" />
                              <h3 className="text-xl font-bold text-[#5d4037]">اضغط لفتح رسالة النبي ﷺ</h3>
                          </div>
                      ) : (
                          <div className="animate-fade-in text-center font-serif">
                              <h3 className="text-xl font-bold mb-4 text-[#5d4037]">بسم الله الرحمن الرحيم</h3>
                              <p className="text-lg leading-loose text-slate-800 mb-6">
                                  "من محمد رسول الله، إلى جيفر وعبد ابني الجلندى.. سلام على من اتبع الهدى، أما بعد: فإني أدعوكما بدعاية الإسلام، أسلما تسلما..."
                              </p>
                              <div className="bg-[#5d4037] text-[#f3e5ab] px-4 py-2 rounded inline-block text-sm font-bold">
                                  النتيجة: دخلا في الإسلام طواعية
                              </div>
                          </div>
                      )}
                  </div>
              </div>

              {/* Info Box (Page 61) */}
              <div className="bg-indigo-50 border-r-4 border-indigo-500 p-6 rounded-lg shadow-sm mt-4">
                  <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mt-1">
                          <Users size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-indigo-900 text-lg mb-2 flex items-center gap-2">
                              <HelpCircle size={18}/> معلومة تهمك (ص 61)
                          </h3>
                          <p className="text-slate-700 leading-relaxed">
                              ذهبت عدة وفود عمانية لرؤية الرسول ﷺ، ومنها الوفد الذي كان يرأسه الصحابي <strong>مُسْلِمَة بن هَزَّان الحُدَاني</strong>، حيث أسلم هو ومن معه.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. SOCIETY: REVAMPED INTERACTIVE (Pages 62-63) ---
  const SocietySection = () => {
      const [activeGame, setActiveGame] = useState<'political' | 'economic' | 'cultural' | null>(null);
      
      // Political Game State
      const [isLiberated, setIsLiberated] = useState(false);
      
      // Economic Game State
      const [resources, setResources] = useState(0);

      // Cultural State
      const [builtMosques, setBuiltMosques] = useState(0);

      const handleLiberation = () => {
          setIsLiberated(true);
      };

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800">جوانب الحضارة: استكشف بنفسك 🕹️</h2>
                  <p className="text-slate-500">اختر أحد المجالات لتجربة الحياة في عمان قديماً</p>
              </div>

              {/* Game Selector */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <button 
                      onClick={() => {setActiveGame('political'); setIsLiberated(false);}} 
                      className={`p-4 rounded-2xl border-b-4 transition-all hover:-translate-y-1 flex flex-col items-center gap-2 ${activeGame === 'political' ? 'bg-red-500 border-red-700 text-white' : 'bg-white border-slate-200 text-slate-600'}`}
                  >
                      <Swords size={32} />
                      <span className="font-bold text-lg">المهمة السياسية: طرد الفرس</span>
                  </button>
                  <button 
                      onClick={() => {setActiveGame('economic'); setResources(0);}} 
                      className={`p-4 rounded-2xl border-b-4 transition-all hover:-translate-y-1 flex flex-col items-center gap-2 ${activeGame === 'economic' ? 'bg-green-500 border-green-700 text-white' : 'bg-white border-slate-200 text-slate-600'}`}
                  >
                      <Ship size={32} />
                      <span className="font-bold text-lg">المهمة الاقتصادية: جمع الثروات</span>
                  </button>
                  <button 
                      onClick={() => {setActiveGame('cultural'); setBuiltMosques(0);}} 
                      className={`p-4 rounded-2xl border-b-4 transition-all hover:-translate-y-1 flex flex-col items-center gap-2 ${activeGame === 'cultural' ? 'bg-blue-500 border-blue-700 text-white' : 'bg-white border-slate-200 text-slate-600'}`}
                  >
                      <Moon size={32} />
                      <span className="font-bold text-lg">المهمة الثقافية: بناء المساجد</span>
                  </button>
              </div>

              {/* GAME AREA */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-100 overflow-hidden min-h-[400px] relative">
                  
                  {/* Default State */}
                  {!activeGame && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
                          <Target size={64} className="text-slate-300 mb-4 animate-bounce" />
                          <p className="text-xl font-bold text-slate-400">اختر مهمة للبدء</p>
                      </div>
                  )}

                  {/* 1. Political Game */}
                  {activeGame === 'political' && (
                      <div className="p-8 text-center bg-red-50 h-full flex flex-col items-center justify-center animate-fade-in">
                          <h3 className="text-2xl font-black text-red-900 mb-4">معركة تحرير عمان</h3>
                          <p className="text-red-800 mb-8 max-w-md">الفرس يحتلون ساحل الباطنة (صحار). بعد إسلام عبد وجيفر، قررا تحرير البلاد. ساعدهم في القرار!</p>
                          
                          <div className="relative w-full max-w-lg h-64 bg-amber-100 rounded-2xl border-4 border-amber-300 mb-6 overflow-hidden">
                              {/* Omani Army */}
                              <div className={`absolute bottom-4 left-4 transition-transform duration-1000 ${isLiberated ? 'translate-x-40 scale-125' : ''}`}>
                                  <span className="text-5xl">⚔️</span>
                                  <div className="text-xs font-bold bg-white/80 px-2 rounded mt-1">جيش عمان</div>
                              </div>

                              {/* Persian Army */}
                              <div className={`absolute bottom-4 right-4 transition-all duration-1000 ${isLiberated ? 'translate-x-full opacity-0' : ''}`}>
                                  <span className="text-5xl">🏰</span>
                                  <div className="text-xs font-bold bg-slate-800 text-white px-2 rounded mt-1">الفرس</div>
                              </div>

                              {/* Flag */}
                              {isLiberated && (
                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in text-center">
                                      <Flag size={64} className="text-green-600 fill-green-600 animate-pulse mx-auto" />
                                      <span className="font-black text-green-800 bg-white/90 px-4 py-1 rounded-full shadow-lg">عمان حرة مستقلة</span>
                                  </div>
                              )}
                          </div>

                          {!isLiberated ? (
                              <button onClick={handleLiberation} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                                  <Swords /> هجوم وتحرير
                              </button>
                          ) : (
                              <div className="bg-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm animate-slide-up">
                                  <strong>النتيجة:</strong> تم طرد الفرس نهائياً وأصبحت عمان دولة إسلامية مستقلة وموحدة.
                              </div>
                          )}
                      </div>
                  )}

                  {/* 2. Economic Game */}
                  {activeGame === 'economic' && (
                      <div className="p-8 text-center bg-green-50 h-full flex flex-col items-center justify-center animate-fade-in">
                          <h3 className="text-2xl font-black text-green-900 mb-2">ازدهار الاقتصاد</h3>
                          <p className="text-green-700 mb-6">اضغط على الموارد لجمع الثروة وتنشيط اقتصاد الدولة الإسلامية</p>
                          
                          <div className="flex justify-center gap-12 mb-8">
                              <button 
                                  onClick={() => setResources(prev => prev + 10)}
                                  className="group relative"
                              >
                                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center border-4 border-blue-300 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                                      <Ship size={40} className="text-blue-600" />
                                  </div>
                                  <span className="block mt-2 font-bold text-blue-800">تجارة بحرية</span>
                                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">+10</span>
                              </button>

                              <button 
                                  onClick={() => setResources(prev => prev + 5)}
                                  className="group relative"
                              >
                                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-300 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                                      <Palmtree size={40} className="text-green-600" />
                                  </div>
                                  <span className="block mt-2 font-bold text-green-800">زراعة</span>
                                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">+5</span>
                              </button>
                          </div>

                          <div className="bg-white px-8 py-4 rounded-2xl shadow-md border border-slate-200 flex items-center gap-4">
                              <Coins className="text-yellow-500" size={32} />
                              <div className="text-left">
                                  <span className="block text-xs text-slate-400 font-bold uppercase">خزينة الدولة</span>
                                  <span className="block text-3xl font-black text-slate-800">{resources} دينار</span>
                              </div>
                          </div>
                      </div>
                  )}

                  {/* 3. Cultural Game */}
                  {activeGame === 'cultural' && (
                      <div className="p-8 text-center bg-blue-50 h-full flex flex-col items-center justify-center animate-fade-in">
                          <h3 className="text-2xl font-black text-blue-900 mb-2">نهضة بناء المساجد</h3>
                          <p className="text-blue-700 mb-6">ساهم في نشر الإسلام ببناء المساجد في المدن العمانية</p>
                          
                          <div className="grid grid-cols-2 gap-4 w-full max-w-lg mb-6">
                              <button 
                                  onClick={() => setBuiltMosques(1)}
                                  className={`p-4 rounded-xl border-2 transition-all ${builtMosques >= 1 ? 'bg-green-100 border-green-500' : 'bg-white border-dashed border-slate-300'}`}
                              >
                                  {builtMosques >= 1 ? <CheckCircle className="mx-auto text-green-600 mb-2"/> : <Hammer className="mx-auto text-slate-400 mb-2"/>}
                                  <span className="font-bold text-slate-700">مسجد المضمار (سمائل)</span>
                              </button>
                              
                              <button 
                                  onClick={() => setBuiltMosques(2)}
                                  disabled={builtMosques < 1}
                                  className={`p-4 rounded-xl border-2 transition-all ${builtMosques >= 2 ? 'bg-green-100 border-green-500' : 'bg-white border-dashed border-slate-300 opacity-50'}`}
                              >
                                  {builtMosques >= 2 ? <CheckCircle className="mx-auto text-green-600 mb-2"/> : <Hammer className="mx-auto text-slate-400 mb-2"/>}
                                  <span className="font-bold text-slate-700">مسجد الشواذنة (نزوى)</span>
                              </button>
                          </div>

                          <div className="bg-blue-100 p-4 rounded-xl text-blue-900 font-medium">
                              {builtMosques === 0 && "ابدأ ببناء أول مسجد أسسه مازن بن غضوبة!"}
                              {builtMosques === 1 && "أحسنت! الآن توسع في بناء المساجد في نزوى."}
                              {builtMosques === 2 && "ممتاز! أصبحت عمان منارة للعلم والإيمان."}
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // --- 4. CITIES & PERSONALITIES: REVAMPED (Pages 64-66) ---
  const CitiesSection = () => {
      const [activeCity, setActiveCity] = useState<string | null>(null);
      const [personalityRevealed, setPersonalityRevealed] = useState(false);
      const [showActivity, setShowActivity] = useState(false);
      const [answers, setAnswers] = useState<{[key: string]: string}>({});

      const cities = [
          { id: 'sohar', name: 'صحار', x: 80, y: 30, icon: '🏰', desc: 'العاصمة السياسية في عهد الرسول ﷺ، وفيها استقبل عبد وجيفر رسالة الإسلام.' },
          { id: 'buraimi', name: 'توام (البريمي)', x: 60, y: 20, icon: '🌴', desc: 'اشتهرت كواحة زراعية خصبة ومحطة للقوافل التجارية.' },
          { id: 'samail', name: 'سمائل', x: 70, y: 45, icon: '🕌', desc: 'أول مدينة يدخلها الإسلام على يد مازن بن غضوبة، وفيها مسجد المضمار.' },
          { id: 'mirbat', name: 'مرباط', x: 20, y: 80, icon: '⚓', desc: 'ميناء تاريخي هام في الجنوب لتصدير اللبان والخيول.' },
      ];

      const handleDrop = (city: string, type: string) => {
          setAnswers(prev => ({...prev, [city]: type}));
      };

      return (
          <div className="p-6 animate-fade-in space-y-10">
              
              {/* Personality Riddle */}
              <div className="bg-slate-800 rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                      <div className="inline-block bg-yellow-500/20 p-4 rounded-full mb-4 animate-pulse">
                          <HelpCircle size={48} className="text-yellow-400" />
                      </div>
                      <h2 className="text-3xl font-black mb-4 text-yellow-300">من أنا؟</h2>
                      <div className="text-lg leading-loose font-medium text-slate-200 mb-6 bg-slate-700/50 p-6 rounded-xl max-w-2xl mx-auto">
                          "أنا صحابي جليل من أهل عمان.. عُرفت بالفصاحة والبيان والقدرة على الخطابة.. رويتُ الحديث عن النبي ﷺ.. فمن أكون؟"
                      </div>
                      
                      {!personalityRevealed ? (
                          <button onClick={() => setPersonalityRevealed(true)} className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-black hover:scale-105 transition-transform shadow-lg">
                              اكشف الشخصية
                          </button>
                      ) : (
                          <div className="animate-zoom-in">
                              <h3 className="text-4xl font-black text-yellow-400 mb-2">صُحار بن العباس العبدي</h3>
                              <p className="text-slate-400">صحابي ومفكر وخطيب عماني</p>
                          </div>
                      )}
                  </div>
              </div>

              {/* Interactive Map Journey */}
              <div className="bg-sky-50 rounded-3xl border-4 border-sky-200 p-6 shadow-inner">
                  <h2 className="text-2xl font-black text-sky-900 mb-4 text-center">رحلة عبر مدن عمان الإسلامية</h2>
                  <p className="text-center text-sky-700 mb-8">اضغط على المدن في الخريطة لاكتشاف أهميتها</p>
                  
                  <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                      {/* Abstract Map Background */}
                      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                          <path d="M85,5 L90,10 L85,15 L95,20 L90,30 L80,35 L60,50 L40,80 L20,90 L10,80 L30,60 L50,40 L60,20 L75,10 Z" fill="#d1fae5" stroke="#059669" strokeWidth="0.5"/>
                      </svg>

                      {cities.map((city) => (
                          <button
                              key={city.id}
                              onClick={() => setActiveCity(city.id)}
                              className={`absolute w-12 h-12 bg-white rounded-full shadow-lg border-2 border-indigo-500 flex items-center justify-center text-2xl hover:scale-125 transition-transform z-10 animate-bounce ${activeCity === city.id ? 'ring-4 ring-indigo-300 scale-125' : ''}`}
                              style={{ top: `${city.y}%`, left: `${city.x}%`, animationDelay: `${Math.random()}s` }}
                          >
                              {city.icon}
                          </button>
                      ))}

                      {/* City Detail Overlay */}
                      {activeCity && (
                          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-xl shadow-2xl border-l-4 border-indigo-600 animate-slide-up z-20">
                              <div className="flex justify-between items-start">
                                  <div>
                                      <h3 className="text-xl font-black text-indigo-900 mb-1">{cities.find(c => c.id === activeCity)?.name}</h3>
                                      <p className="text-slate-600 text-sm leading-relaxed">{cities.find(c => c.id === activeCity)?.desc}</p>
                                  </div>
                                  <button onClick={() => setActiveCity(null)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                              </div>
                          </div>
                      )}
                  </div>
              </div>

              {/* Classification Activity (Interactive) */}
              <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-indigo-100">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                          <ClipboardList className="text-indigo-600"/> صنف المدن (تفاعلي)
                      </h3>
                      <button 
                          onClick={() => {setAnswers({}); setShowActivity(!showActivity);}}
                          className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-200 transition-colors"
                      >
                          {showActivity ? 'إغلاق النشاط' : 'ابدأ النشاط'}
                      </button>
                  </div>

                  {showActivity && (
                      <div className="animate-fade-in space-y-6">
                          <p className="text-slate-600 text-center text-sm">اضغط على الخيار الصحيح لكل مدينة</p>
                          
                          <div className="grid gap-4">
                              {[
                                  { name: 'صحار', correct: 'ساحلية' },
                                  { name: 'توام (البريمي)', correct: 'داخلية' },
                                  { name: 'سمائل', correct: 'داخلية' },
                                  { name: 'مرباط', correct: 'ساحلية' }
                              ].map((item, idx) => (
                                  <div key={idx} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                                      <span className="font-bold text-slate-800 w-1/3">{item.name}</span>
                                      <div className="flex gap-2">
                                          <button 
                                              onClick={() => handleDrop(item.name, 'ساحلية')}
                                              className={`px-4 py-1 rounded-full text-sm font-bold transition-all ${answers[item.name] === 'ساحلية' ? (item.correct === 'ساحلية' ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-white border hover:bg-slate-100'}`}
                                          >
                                              <Anchor size={14} className="inline mr-1"/> ساحلية
                                          </button>
                                          <button 
                                              onClick={() => handleDrop(item.name, 'داخلية')}
                                              className={`px-4 py-1 rounded-full text-sm font-bold transition-all ${answers[item.name] === 'داخلية' ? (item.correct === 'داخلية' ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-white border hover:bg-slate-100'}`}
                                          >
                                              <MapPin size={14} className="inline mr-1"/> داخلية
                                          </button>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'mazin': return <MazinSection />;
      case 'letter': return <LetterSection />;
      case 'society': return <SocietySection />;
      case 'cities': return <CitiesSection />;
      default: return <MazinSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-amber-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-amber-100 flex flex-col`}>
        <div className="p-4 border-b border-amber-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-amber-700 px-2">عُمان والرسالة 📜</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('mazin'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'mazin' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> قصة مازن
          </button>
          <button onClick={() => {setActiveTab('letter'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'letter' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Mail size={20}/> رسالة النبي
          </button>
          <button onClick={() => {setActiveTab('society'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'society' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Users size={20}/> جوانب الحضارة (لعبة)
          </button>
          <button onClick={() => {setActiveTab('cities'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'cities' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <MapPin size={20}/> المدن والشخصيات
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-amber-800">عمان في عهد الرسول</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanProphetEraLesson;
