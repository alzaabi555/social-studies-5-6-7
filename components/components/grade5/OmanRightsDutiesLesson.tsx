
import React, { useState } from 'react';
import { Menu, ArrowRight, BookOpen, Scale, Heart, Shield, Crown, Gavel, Info, Target, User, Users, Sun, Lightbulb, CheckCircle, MessageCircle, HelpCircle, Scroll, Award, ShieldCheck, Star } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const OmanRightsDutiesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'concepts' | 'rights' | 'duties' | 'importance' | 'story'>('concepts');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. CONCEPTS & DEFINITIONS (Pages 79-81) ---
  const ConceptsSection = () => {
      const [flipped, setFlipped] = useState<string | null>(null);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              {/* Objectives (Page 79) */}
              <div className="bg-teal-50 border-r-4 border-teal-600 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أتعلم في هذا الدرس:
                  </h3>
                  <ul className="grid gap-2 text-teal-800 font-medium">
                      <li>• أتعرف مفهوم الحقوق والواجبات.</li>
                      <li>• أستنتج أهمية النظام الأساسي للدولة.</li>
                      <li>• أقدر جهود سلطنة عمان في رعاية حقوق المواطن.</li>
                  </ul>
              </div>

              <div className="text-center mb-6">
                  <h2 className="text-3xl font-black text-slate-800 mb-2">المفاهيم الأساسية (ص 80)</h2>
                  <p className="text-slate-500">اضغط على البطاقات لتقلبها وتكتشف التعريف</p>
              </div>

              {/* Interactive Definitions (Page 80) */}
              <div className="grid md:grid-cols-2 gap-8">
                  {/* Rights Card */}
                  <div 
                      onClick={() => setFlipped(flipped === 'rights' ? null : 'rights')}
                      className="cursor-pointer perspective-1000 h-64"
                  >
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped === 'rights' ? 'rotate-y-180' : ''}`}>
                          {/* Front */}
                          <div className="absolute w-full h-full backface-hidden bg-white border-b-8 border-blue-500 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 hover:bg-blue-50 transition-colors">
                              <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600"><Heart size={48}/></div>
                              <h3 className="text-2xl font-black text-blue-900">الحقـوق</h3>
                              <span className="text-sm text-slate-400 mt-2">اضغط للتعريف</span>
                          </div>
                          {/* Back */}
                          <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 rotate-y-180 text-center border-4 border-blue-400">
                              <p className="text-lg font-bold leading-loose">
                                  "هي الأشياء التي <span className="text-yellow-300">يستحقها</span> المواطن من الدولة والمجتمع، وفقاً للقانون."
                              </p>
                              <p className="mt-4 text-sm bg-white/20 px-3 py-1 rounded-full">مثال: التعليم، الصحة</p>
                          </div>
                      </div>
                  </div>

                  {/* Duties Card */}
                  <div 
                      onClick={() => setFlipped(flipped === 'duties' ? null : 'duties')}
                      className="cursor-pointer perspective-1000 h-64"
                  >
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped === 'duties' ? 'rotate-y-180' : ''}`}>
                          {/* Front */}
                          <div className="absolute w-full h-full backface-hidden bg-white border-b-8 border-rose-500 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 hover:bg-rose-50 transition-colors">
                              <div className="bg-rose-100 p-4 rounded-full mb-4 text-rose-600"><Shield size={48}/></div>
                              <h3 className="text-2xl font-black text-rose-900">الواجبـات</h3>
                              <span className="text-sm text-slate-400 mt-2">اضغط للتعريف</span>
                          </div>
                          {/* Back */}
                          <div className="absolute w-full h-full backface-hidden bg-rose-600 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 rotate-y-180 text-center border-4 border-rose-400">
                              <p className="text-lg font-bold leading-loose">
                                  "هي الأفعال التي <span className="text-yellow-300">يلتزم</span> المواطن بالقيام بها تجاه الدولة والمجتمع."
                              </p>
                              <p className="mt-4 text-sm bg-white/20 px-3 py-1 rounded-full">مثال: الدفاع عن الوطن، احترام القانون</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Basic Statute (Page 81) */}
              <div className="mt-12 bg-slate-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 p-32 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                          <Scale size={64} className="text-yellow-400 animate-pulse"/>
                      </div>
                      <div>
                          <h3 className="text-2xl font-black text-yellow-400 mb-2">النظام الأساسي للدولة</h3>
                          <p className="text-lg leading-relaxed text-slate-200 font-medium">
                              هو الوثيقة الرسمية التي تحدد نظام الحكم في الدولة، وتبين الحقوق والواجبات للمواطنين، وتضمن العدالة والمساواة.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. RIGHTS SECTION (Pages 82-83) ---
  const RightsSection = () => {
      const [showSalt, setShowSalt] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-blue-800 mb-2">حقوقي كمواطن (ص 82)</h2>
                  <p className="text-slate-500">كفلها النظام الأساسي للدولة</p>
              </div>

              {/* Rights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow border-2 border-blue-100 text-center hover:scale-105 transition-transform">
                      <span className="text-4xl mb-2 block">🏥</span>
                      <h4 className="font-bold text-blue-900">الرعاية الصحية</h4>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow border-2 border-yellow-100 text-center hover:scale-105 transition-transform">
                      <span className="text-4xl mb-2 block">📚</span>
                      <h4 className="font-bold text-yellow-900">التعليم</h4>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow border-2 border-green-100 text-center hover:scale-105 transition-transform">
                      <span className="text-4xl mb-2 block">👮</span>
                      <h4 className="font-bold text-green-900">الأمن والأمان</h4>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow border-2 border-purple-100 text-center hover:scale-105 transition-transform">
                      <span className="text-4xl mb-2 block">🗣️</span>
                      <h4 className="font-bold text-purple-900">حرية الرأي</h4>
                  </div>
              </div>

              {/* Al-Salt's Will (Page 83) */}
              <div className="mt-8 relative">
                  <div 
                      className={`bg-[#fdf6e3] border-4 border-[#d4c5a9] rounded-xl p-6 transition-all duration-500 ${showSalt ? 'max-h-96' : 'max-h-24 overflow-hidden cursor-pointer hover:bg-[#f7f1e0]'}`}
                      onClick={() => !showSalt && setShowSalt(true)}
                  >
                      <div className="flex items-center gap-3 mb-2">
                          <Scroll className="text-[#8c7b5d]" />
                          <h3 className="text-xl font-black text-[#5c4b30]">معلومة تهمك: وصية الإمام الصلت بن مالك (ص 83)</h3>
                      </div>
                      
                      {!showSalt && <p className="text-[#8c7b5d] text-sm mt-1">اضغط لقراءة الوصية التاريخية...</p>}

                      <div className={`mt-4 text-[#5c4b30] leading-loose font-serif text-lg transition-opacity duration-500 ${showSalt ? 'opacity-100' : 'opacity-0'}`}>
                          <p>
                              أوصى الإمام الصلت بن مالك (توفي 273هـ) جنوده بالعدل واحترام الحقوق، فقال:
                              <br/>
                              <span className="block bg-[#e8dec6] p-3 rounded mt-2 italic">
                                  "لا تقتلوا شيخاً فانياً، ولا طفلاً صغيراً، ولا امرأة... ولا تقطعوا شجراً مثمراً..."
                              </span>
                          </p>
                          <button 
                              onClick={(e) => { e.stopPropagation(); setShowSalt(false); }}
                              className="mt-4 text-sm font-bold text-[#8c7b5d] underline"
                          >
                              إغلاق الوصية
                          </button>
                      </div>
                  </div>
              </div>

              {/* Omani Achievement (Page 83) */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full animate-pulse">
                      <Award size={32} />
                  </div>
                  <div>
                      <h4 className="font-bold text-yellow-300 text-lg">منجز عماني (ص 83)</h4>
                      <p className="text-sm md:text-base">
                          أنشئت <strong>اللجنة العمانية لحقوق الإنسان</strong> لتتابع حماية حقوق الإنسان وحرياته في السلطنة.
                      </p>
                  </div>
              </div>

              {/* Analyze & Conclude (Page 83-84) */}
              <div className="bg-slate-100 p-6 rounded-2xl border-2 border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <HelpCircle size={20}/> حلل واستنتج:
                  </h3>
                  <p className="text-slate-600 mb-4 font-medium">العلاقة بين الحقوق والواجبات هي علاقة تبادلية.</p>
                  <div className="flex items-center justify-center gap-4 text-center">
                      <div className="bg-white px-4 py-2 rounded-lg shadow text-blue-700 font-bold">أحصل على حقي</div>
                      <div className="text-2xl text-slate-400">⇄</div>
                      <div className="bg-white px-4 py-2 rounded-lg shadow text-rose-700 font-bold">أؤدي واجبي</div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. DUTIES SIMULATION (Page 84) ---
  const DutiesSection = () => {
      const [activeDuty, setActiveDuty] = useState<string | null>(null);

      const duties = [
          { id: 'religion', label: 'طاعة الله ورسوله', icon: '☪️', x: '50%', y: '10%', desc: 'الالتزام بتعاليم الدين الإسلامي الحنيف.' },
          { id: 'country', label: 'الدفاع عن الوطن', icon: '🛡️', x: '85%', y: '30%', desc: 'حماية الوطن والتضحية من أجله.' },
          { id: 'sultan', label: 'طاعة السلطان', icon: '👑', x: '85%', y: '70%', desc: 'احترام ولي الأمر وطاعته في غير معصية.' },
          { id: 'laws', label: 'احترام القوانين', icon: '⚖️', x: '15%', y: '70%', desc: 'الالتزام بالأنظمة وعدم مخالفتها.' },
          { id: 'environment', label: 'حماية البيئة', icon: '🌳', x: '15%', y: '30%', desc: 'المحافظة على الممتلكات العامة والبيئة.' },
      ];

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-4">
                  <h2 className="text-2xl font-black text-rose-800 mb-2">واجبات المواطن (محاكاة الشكل 2)</h2>
                  <p className="text-slate-500">اضغط على الدوائر المحيطة بالمواطن لاستكشاف واجباته</p>
              </div>

              {/* Interactive Radial Diagram */}
              <div className="relative w-full max-w-md mx-auto aspect-square bg-slate-50 rounded-full border-4 border-rose-100 shadow-inner">
                  
                  {/* Center: Citizen */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-xl border-4 border-rose-500 flex flex-col items-center justify-center z-20">
                      <User size={48} className="text-rose-600 mb-1" />
                      <span className="font-black text-rose-900 text-sm">المواطن</span>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                      {duties.map((d, i) => (
                          <line 
                              key={i}
                              x1="50%" y1="50%" 
                              x2={d.x} y2={d.y} 
                              stroke="#fb7185" 
                              strokeWidth="2" 
                              strokeDasharray="5,5"
                          />
                      ))}
                  </svg>

                  {/* Duties Buttons */}
                  {duties.map((duty) => (
                      <button
                          key={duty.id}
                          onClick={() => setActiveDuty(duty.id)}
                          className={`absolute w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-lg transition-all duration-300 z-20 hover:scale-110 ${activeDuty === duty.id ? 'bg-rose-600 text-white scale-110 ring-4 ring-rose-200' : 'bg-white text-slate-700 border-2 border-slate-100'}`}
                          style={{ top: duty.y, left: duty.x, transform: 'translate(-50%, -50%)' }}
                      >
                          <span className="text-2xl mb-1">{duty.icon}</span>
                          <span className="text-[10px] font-bold leading-tight">{duty.label}</span>
                      </button>
                  ))}
              </div>

              {/* Duty Detail Box */}
              <div className="min-h-[100px] flex items-center justify-center">
                  {activeDuty ? (
                      <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200 text-center animate-slide-up max-w-lg w-full shadow-sm">
                          <h4 className="text-xl font-bold text-rose-900 mb-2">{duties.find(d => d.id === activeDuty)?.label}</h4>
                          <p className="text-rose-800">{duties.find(d => d.id === activeDuty)?.desc}</p>
                      </div>
                  ) : (
                      <p className="text-slate-400 font-bold bg-slate-100 px-4 py-2 rounded-full">اختر واجباً لمعرفة التفاصيل</p>
                  )}
              </div>
          </div>
      );
  };

  // --- 4. IMPORTANCE (Page 86) ---
  const ImportanceSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أهمية الحقوق والواجبات (ص 86)</h2>
                  <p className="text-slate-500">لماذا نحتاج إليها في حياتنا؟</p>
              </div>

              {/* Interactive Pillars */}
              <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-indigo-500 hover:-translate-y-2 transition-transform group">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Gavel size={32} className="text-indigo-600"/>
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">تحقيق العدالة</h3>
                      <p className="text-slate-600 text-sm">تضمن حصول كل فرد على حقه دون تمييز.</p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-green-500 hover:-translate-y-2 transition-transform group">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <ShieldCheck size={32} className="text-green-600"/>
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">النظام والاستقرار</h3>
                      <p className="text-slate-600 text-sm">تحدد القواعد التي يلتزم بها الجميع، فيعم النظام.</p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-orange-500 hover:-translate-y-2 transition-transform group">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Users size={32} className="text-orange-600"/>
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">التكافل الاجتماعي</h3>
                      <p className="text-slate-600 text-sm">تقوي الروابط بين أفراد المجتمع من خلال أداء الواجبات.</p>
                  </div>
              </div>

              {/* Think & Discuss (Page 86) */}
              <div className="bg-purple-50 p-8 rounded-3xl border-2 border-purple-200 text-center">
                  <MessageCircle size={40} className="text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-purple-900 mb-3">فكر وناقش</h3>
                  <p className="text-lg text-purple-800 font-bold mb-4">"أقوم بواجبي قبل المطالبة بحقي"</p>
                  <div className="bg-white p-4 rounded-xl shadow-sm inline-block text-slate-700">
                      ما رأيك في هذه العبارة؟ وكيف تطبقها في مدرستك؟
                  </div>
              </div>
          </div>
      );
  };

  // --- 5. STORY & CONCLUSION (Pages 87-88) ---
  const StorySection = () => {
      const [scene, setScene] = useState(0);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">قصة تاريخية: العدالة (ص 88)</h2>
                  <p className="text-slate-500">من زمن الإمام أحمد بن سعيد</p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="relative h-72 bg-amber-100 flex items-center justify-center p-6 text-center">
                      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                      
                      <div className="relative z-10 animate-fade-in max-w-2xl">
                          {scene === 0 && (
                              <div>
                                  <div className="text-6xl mb-4">🥩 ⚔️</div>
                                  <h3 className="text-2xl font-black text-amber-900 mb-2">الظلم</h3>
                                  <p className="text-amber-800 text-lg">
                                      اشترى قائد عسكري لحماً من قصاب (بائع لحم) ولم يدفع الثمن. عندما طالبه القصاب بحقه، غضب القائد وأتلف اللحم!
                                  </p>
                              </div>
                          )}
                          {scene === 1 && (
                              <div>
                                  <div className="text-6xl mb-4">👳‍♂️</div>
                                  <h3 className="text-2xl font-black text-amber-900 mb-2">الخوف والشكوى</h3>
                                  <p className="text-amber-800 text-lg">
                                      خاف القصاب من بطش القائد، فذهب لأحد العلماء. دفع العالم المال للقصاب سراً لتعويضه.
                                  </p>
                              </div>
                          )}
                          {scene === 2 && (
                              <div>
                                  <div className="text-6xl mb-4">🕌</div>
                                  <h3 className="text-2xl font-black text-amber-900 mb-2">كشف الحقيقة</h3>
                                  <p className="text-amber-800 text-lg">
                                      علم الإمام أحمد بن سعيد بالقصة عندما سأل عن سبب غياب العالم عن الصلاة. فغضب غضباً شديداً للظلم.
                                  </p>
                              </div>
                          )}
                          {scene === 3 && (
                              <div>
                                  <div className="text-6xl mb-4">⚖️</div>
                                  <h3 className="text-2xl font-black text-amber-900 mb-2">تحقيق العدالة</h3>
                                  <p className="text-amber-800 text-lg">
                                      استدعى الإمام القائد وأجبره على دفع ثمن اللحم والاعتذار. <br/>
                                      <span className="font-bold bg-white/50 px-2 rounded">الدرس: لا أحد فوق القانون في عمان.</span>
                                  </p>
                              </div>
                          )}
                      </div>
                  </div>

                  <div className="bg-slate-50 p-4 flex justify-between items-center border-t border-slate-200">
                      <button 
                          onClick={() => setScene(prev => Math.max(0, prev - 1))}
                          disabled={scene === 0}
                          className="px-6 py-2 rounded-full bg-white border border-slate-300 text-slate-600 disabled:opacity-50 font-bold"
                      >
                          السابق
                      </button>
                      <div className="flex gap-2">
                          {[0, 1, 2, 3].map(i => (
                              <div key={i} className={`w-3 h-3 rounded-full transition-colors ${i === scene ? 'bg-amber-600' : 'bg-slate-300'}`}></div>
                          ))}
                      </div>
                      <button 
                          onClick={() => setScene(prev => Math.min(3, prev + 1))}
                          disabled={scene === 3}
                          className="px-6 py-2 rounded-full bg-amber-600 text-white shadow-lg hover:bg-amber-700 disabled:opacity-50 font-bold"
                      >
                          التالي
                      </button>
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'concepts': return <ConceptsSection />;
      case 'rights': return <RightsSection />;
      case 'duties': return <DutiesSection />;
      case 'importance': return <ImportanceSection />;
      case 'story': return <StorySection />;
      default: return <ConceptsSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-teal-50 text-right font-tajawal">
      {/* Sidebar */}
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-teal-100 flex flex-col`}>
        <div className="p-4 border-b border-teal-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">الحقوق والواجبات ⚖️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection('concepts'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'concepts' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <BookOpen size={20}/> المفاهيم والنظام
          </button>
          <button onClick={() => {setActiveSection('rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'rights' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Heart size={20}/> الحقوق (أمثلة)
          </button>
          <button onClick={() => {setActiveSection('duties'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'duties' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Shield size={20}/> الواجبات (تفاعلي)
          </button>
          <button onClick={() => {setActiveSection('importance'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'importance' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> الأهمية والمناقشة
          </button>
          <button onClick={() => {setActiveSection('story'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'story' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Gavel size={20}/> قصة العدالة
          </button>
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-teal-800">الحقوق والواجبات</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {activeSection === 'concepts' && <ConceptsSection />}
          {activeSection === 'rights' && <RightsSection />}
          {activeSection === 'duties' && <DutiesSection />}
          {activeSection === 'importance' && <ImportanceSection />}
          {activeSection === 'story' && <StorySection />}
        </div>
      </main>
    </div>
  );
};

export default OmanRightsDutiesLesson;
