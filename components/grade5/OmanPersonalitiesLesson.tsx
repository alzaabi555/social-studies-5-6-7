
import React, { useState } from 'react';
import { Menu, ArrowRight, User, Users, MapPin, Star, MessageCircle, BookOpen, Quote, Sparkles, HelpCircle, Check, Key, Swords, ChevronLeft, ChevronRight, X, Info } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const OmanPersonalitiesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'puzzle' | 'profiles' | 'suwaid' | 'activity'>('puzzle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. PUZZLE SECTION (Page 67) ---
  const PuzzleSection = () => {
      // Track which answers are revealed
      const [revealedState, setRevealedState] = useState([false, false, false, false, false]);

      const riddles = [
          { q: 'من كان كلامه صحيحاً يوصف بأنه؟', a: 'صادق', letter: 'ص' },
          { q: 'إذا كتم الإنسان غضبه يوصف بأنه؟', a: 'حليم', letter: 'ح' },
          { q: 'من يعطى شيئاً فيحتفظ به يسمى؟', a: 'أمين', letter: 'أ' },
          { q: 'من يُتهم بشيء ثم يظهر أنه غير مذنب؟', a: 'بريء', letter: 'ب' },
          { q: 'يجب على الصغير أن ... الكبير؟', a: 'يوقر', letter: 'ي' },
      ];

      const handleReveal = (index: number) => {
          const newState = [...revealedState];
          newState[index] = true;
          setRevealedState(newState);
      };

      const allRevealed = revealedState.every(r => r === true);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-indigo-800 mb-2">لغز الكلمة السرية 🔐</h2>
                  <p className="text-indigo-600">اضغط على المربعات لكشف الإجابات واستنتاج الكلمة السرية</p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border-2 border-indigo-100 p-6 max-w-3xl mx-auto">
                  <div className="space-y-4 mb-8">
                      {riddles.map((riddle, idx) => (
                          <div key={idx} className="flex flex-col md:flex-row items-center gap-4 bg-indigo-50 p-3 rounded-xl transition-all hover:bg-indigo-100">
                              <div className="bg-indigo-200 w-8 h-8 flex items-center justify-center rounded-full font-bold text-indigo-800 flex-shrink-0">{idx + 1}</div>
                              <p className="flex-1 text-slate-700 font-medium text-center md:text-right">{riddle.q}</p>
                              
                              {/* Interactive Answer Box */}
                              <button 
                                  onClick={() => handleReveal(idx)}
                                  className={`w-40 py-2 px-4 rounded-lg font-bold border-2 transition-all duration-300 flex items-center justify-center ${
                                      revealedState[idx] 
                                          ? 'bg-white border-green-500 text-green-700 shadow-sm' 
                                          : 'bg-white border-indigo-300 text-slate-400 hover:border-indigo-500 hover:text-indigo-500 cursor-pointer animate-pulse'
                                  }`}
                              >
                                  {revealedState[idx] ? riddle.a : "اضغط للكشف"}
                              </button>

                              {/* Secret Letter Circle */}
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black shadow-lg transition-all duration-500 ${revealedState[idx] ? 'bg-green-500 text-white scale-110 rotate-0' : 'bg-slate-200 text-transparent scale-90 rotate-180'}`}>
                                  {riddle.letter}
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Secret Word Reveal */}
                  <div className={`text-center p-6 rounded-2xl transition-all duration-700 ${allRevealed ? 'bg-indigo-600 text-white shadow-2xl scale-105' : 'bg-slate-100 text-slate-400'}`}>
                      <p className="mb-2 font-bold opacity-80">الكلمة السرية هي:</p>
                      <h1 className="text-5xl font-black tracking-widest mb-2">
                          {allRevealed ? "صـحـابـي" : "؟ ؟ ؟ ؟ ؟"}
                      </h1>
                      {allRevealed && (
                          <p className="text-yellow-300 font-bold mt-4 animate-bounce">
                              أحسنت! موضوع درسنا عن الصحابة العمانيين 🎉
                          </p>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. PROFILES SECTION (Pages 68-70) - REVAMPED ---
  const ProfilesSection = () => {
      const [activeProfileId, setActiveProfileId] = useState<number | null>(null);

      const personalities = [
          {
              id: 1,
              name: 'كعب بن برشة الطاحي',
              role: 'مستشار الملكين',
              bio: 'أنا المستشار الأمين لملكي عُمان (عبد وجيفر). استشاراني الملكان عندما وصلتهما رسالة النبي ﷺ، فصدّقتُ عليها ونصحتُهما بالخير. أتحدث الفارسية وأقرأ الكتب السماوية.',
              trait_icon: <BookOpen />,
              trait_text: 'الثقافة والاطلاع',
              color: 'from-emerald-500 to-teal-600'
          },
          {
              id: 2,
              name: 'أبو صفرة العتكي',
              role: 'القائد الشجاع',
              bio: 'وفدتُ على الرسول ﷺ وأسلمت. لم يتوقف دوري هنا، بل شاركتُ بشجاعة في الفتوحات الإسلامية لنشر الدين الحنيف.',
              trait_icon: <Swords />,
              trait_text: 'الشجاعة والفصاحة',
              color: 'from-green-600 to-green-800',
              extraInfo: 'أبو صفرة هو والد القائد العماني المهلب بن أبي صفرة، حيث كان قائداً مشهوراً في الدولة الإسلامية.'
          },
          {
              id: 3,
              name: 'سلمة بن عياذ الأزدي',
              role: 'الداعية المخلص',
              bio: 'ذهبتُ إلى الرسول ﷺ مع جماعة من قومي لأعلن إسلامي. طلبتُ من النبي أن يدعو لقومي بالألفة، فاستجاب الله لدعائه وجمع كلمتنا.',
              trait_icon: <Users />,
              trait_text: 'حب الخير للقوم',
              color: 'from-blue-500 to-indigo-600'
          },
          {
              id: 4,
              name: 'صالح بن المتوكل',
              role: 'الرفيق الوفي',
              bio: 'كنتُ رفيق الدرب للصحابي الجليل مازن بن غضوبة في رحلته المباركة إلى المدينة المنورة للقاء الرسول ﷺ. شاركتُ بعدها في نشر الإسلام والفتوحات.',
              trait_icon: <User />,
              trait_text: 'الإخلاص والوفاء',
              color: 'from-rose-500 to-red-600'
          }
      ];

      const activeProfile = personalities.find(p => p.id === activeProfileId);

      const nextProfile = () => {
          if (activeProfileId === null) return;
          const nextId = activeProfileId === personalities.length ? 1 : activeProfileId + 1;
          setActiveProfileId(nextId);
      };

      const prevProfile = () => {
          if (activeProfileId === null) return;
          const prevId = activeProfileId === 1 ? personalities.length : activeProfileId - 1;
          setActiveProfileId(prevId);
      };

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">معرض الشخصيات العمانية 🌟</h2>
                  <p className="text-slate-500">اضغط على البطاقة للتعرف على قصة الصحابي</p>
              </div>

              {/* Character Grid (Hidden on Mobile if Detail is active) */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${activeProfileId ? 'hidden md:grid' : 'grid'}`}>
                  {personalities.map((p) => (
                      <button
                          key={p.id}
                          onClick={() => setActiveProfileId(p.id)}
                          className={`p-4 rounded-2xl border-2 transition-all hover:scale-105 flex flex-col items-center gap-3 text-center ${activeProfileId === p.id ? 'border-indigo-500 bg-indigo-50 shadow-lg ring-2 ring-indigo-200' : 'bg-white border-slate-200 hover:border-indigo-300'}`}
                      >
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-md`}>
                              {p.trait_icon}
                          </div>
                          <div>
                              <h3 className="font-bold text-slate-800 text-sm md:text-base">{p.name}</h3>
                              <p className="text-xs text-slate-500 mt-1">{p.role}</p>
                          </div>
                      </button>
                  ))}
              </div>

              {/* Spotlight View (Detailed) */}
              {activeProfile && (
                  <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-slide-up mt-6">
                      {/* Background Header */}
                      <div className={`h-32 bg-gradient-to-r ${activeProfile.color} relative`}>
                          <button onClick={() => setActiveProfileId(null)} className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
                              <X size={20}/>
                          </button>
                          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full p-2 shadow-xl flex items-center justify-center">
                              <div className={`w-full h-full rounded-full bg-gradient-to-br ${activeProfile.color} text-white flex items-center justify-center`}>
                                  {React.cloneElement(activeProfile.trait_icon as React.ReactElement, { size: 36 })}
                              </div>
                          </div>
                      </div>

                      {/* Content */}
                      <div className="pt-12 pb-8 px-8 text-center">
                          <h2 className="text-3xl font-black text-slate-800 mb-1">{activeProfile.name}</h2>
                          <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold mb-6">{activeProfile.role}</span>
                          
                          {/* Extra Info Box (Did You Know) */}
                          {/* @ts-ignore */}
                          {activeProfile.extraInfo && (
                              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg shadow-sm mb-6 text-right max-w-2xl mx-auto">
                                  <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                                      <Info size={18}/> معلومة تهمك:
                                  </h4>
                                  <p className="text-blue-800 text-sm font-medium leading-relaxed">
                                      {/* @ts-ignore */}
                                      {activeProfile.extraInfo}
                                  </p>
                              </div>
                          )}

                          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 relative mb-6">
                              <Quote className="absolute top-4 right-4 text-indigo-200 w-8 h-8 opacity-50" />
                              <p className="text-lg text-indigo-900 font-medium leading-loose italic relative z-10">
                                  "{activeProfile.bio}"
                              </p>
                          </div>

                          <div className="flex flex-col items-center gap-2">
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">أبرز الصفات</span>
                              <div className="flex items-center gap-2 bg-white border-2 border-slate-100 px-4 py-2 rounded-xl shadow-sm">
                                  <Star size={18} className="text-yellow-500 fill-yellow-500" />
                                  <span className="font-bold text-slate-700">{activeProfile.trait_text}</span>
                              </div>
                          </div>
                      </div>

                      {/* Navigation Footer */}
                      <div className="bg-slate-50 p-4 flex justify-between items-center border-t border-slate-200">
                          <button onClick={prevProfile} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold px-4 py-2 rounded-lg hover:bg-white transition-all">
                              <ChevronRight size={20}/> السابق
                          </button>
                          <div className="flex gap-1">
                              {personalities.map(p => (
                                  <div key={p.id} className={`w-2 h-2 rounded-full transition-colors ${activeProfileId === p.id ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
                              ))}
                          </div>
                          <button onClick={nextProfile} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold px-4 py-2 rounded-lg hover:bg-white transition-all">
                              التالي <ChevronLeft size={20}/>
                          </button>
                      </div>
                  </div>
              )}

              {/* Info Box Page 68 */}
              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg shadow-sm mt-4">
                  <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2"><BookOpen size={20}/> معلومة: الكتب السماوية</h4>
                  <p className="text-yellow-800 text-sm font-medium">
                      هي الكتب التي أنزلها الله على الرسل والأنبياء لتكون هداية ورحمة للناس، مثل: <strong>التوراة، والإنجيل، والقرآن الكريم</strong>.
                  </p>
              </div>
          </div>
      );
  };

  // --- 3. SUWAID'S STORY (Page 72) ---
  const SuwaidSection = () => {
      const [scene, setScene] = useState(0);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">قصة وفد سويد بن الحارث</h2>
                  <p className="text-slate-500">حوار رائع بين وفد الأزد والرسول ﷺ (صفحة 72)</p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="relative h-64 bg-gradient-to-b from-sky-900 to-indigo-900 flex items-center justify-center p-6 text-center">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
                      
                      <div className="relative z-10 animate-fade-in">
                          {scene === 0 && (
                              <div>
                                  <h3 className="text-3xl font-black text-yellow-400 mb-4">اللقاء</h3>
                                  <p className="text-white text-lg leading-relaxed">
                                      وفد سويد بن الحارث الأزدي مع قومه على الرسول ﷺ.
                                      <br/>فأعجب الرسول بسمتهم ومظهرهم.
                                  </p>
                              </div>
                          )}
                          {scene === 1 && (
                              <div>
                                  <h3 className="text-3xl font-black text-yellow-400 mb-4">السؤال</h3>
                                  <p className="text-white text-lg leading-relaxed">
                                      سألهم الرسول ﷺ: <strong>"ما أنتم؟"</strong>
                                      <br/>قالوا: <strong>"مؤمنون"</strong>
                                      <br/>فتبسم الرسول وقال: <strong>"إن لكل قول حقيقة، فما حقيقة قولكم وإيمانكم؟"</strong>
                                  </p>
                              </div>
                          )}
                          {scene === 2 && (
                              <div>
                                  <h3 className="text-3xl font-black text-yellow-400 mb-4">الإجابة المذهلة</h3>
                                  <p className="text-white text-lg leading-relaxed">
                                      قالوا: <strong>"خمس عشرة خصلة"</strong>
                                      <br/>5 أمرتنا بها رسلك.. 5 أمرتنا أن نعمل بها..
                                      <br/>و 5 تخلقنا بها في الجاهلية!
                                  </p>
                              </div>
                          )}
                          {scene === 3 && (
                              <div>
                                  <h3 className="text-3xl font-black text-yellow-400 mb-4">شهادة الرسول</h3>
                                  <p className="text-white text-lg leading-relaxed">
                                      قال لهم رسول الله ﷺ:
                                      <br/>
                                      <span className="text-2xl font-black bg-white/20 px-4 py-2 rounded-lg inline-block mt-4">
                                          "حكماء علماء كادوا من فقههم أن يكونوا أنبياء"
                                      </span>
                                  </p>
                              </div>
                          )}
                      </div>
                  </div>

                  <div className="bg-slate-50 p-4 flex justify-between items-center">
                      <button 
                          onClick={() => setScene(prev => Math.max(0, prev - 1))}
                          disabled={scene === 0}
                          className="px-6 py-2 rounded-full bg-white border border-slate-300 text-slate-600 disabled:opacity-50 font-bold"
                      >
                          السابق
                      </button>
                      <div className="flex gap-2">
                          {[0, 1, 2, 3].map(i => (
                              <div key={i} className={`w-3 h-3 rounded-full transition-colors ${i === scene ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
                          ))}
                      </div>
                      <button 
                          onClick={() => setScene(prev => Math.min(3, prev + 1))}
                          disabled={scene === 3}
                          className="px-6 py-2 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 disabled:opacity-50 font-bold"
                      >
                          التالي
                      </button>
                  </div>
              </div>

              {/* The 5 Pre-Islamic Traits */}
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                  <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2"><Star size={20}/> الخصال الخمس التي أقرهم الرسول عليها:</h4>
                  <ul className="grid gap-2 text-amber-800 font-medium">
                      <li className="bg-white p-3 rounded-lg shadow-sm">1. الشكر عند الرخاء.</li>
                      <li className="bg-white p-3 rounded-lg shadow-sm">2. الصبر عند البلاء.</li>
                      <li className="bg-white p-3 rounded-lg shadow-sm">3. الرضا بمر القضاء.</li>
                      <li className="bg-white p-3 rounded-lg shadow-sm">4. الصدق في مواطن اللقاء.</li>
                      <li className="bg-white p-3 rounded-lg shadow-sm">5. ترك الشماتة بالأعداء.</li>
                  </ul>
              </div>
          </div>
      );
  };

  // --- 4. ACTIVITIES & VALUES (Page 71) ---
  const ActivitySection = () => {
      const [matched, setMatched] = useState<number[]>([]);
      const [selectedCard, setSelectedCard] = useState<number | null>(null);

      const items = [
          { id: 1, text: 'استشار الملكان كعب بن برشة', match: 1, type: 'q' },
          { id: 2, text: 'لأنه كان قارئاً للكتب السماوية', match: 1, type: 'a' },
          { id: 3, text: 'طلب سلمة بن عياذ من الرسول', match: 2, type: 'q' },
          { id: 4, text: 'أن يدعو لقومه بالألفة واجتماع الكلمة', match: 2, type: 'a' },
      ];

      const handleCardClick = (id: number, matchId: number) => {
          if (matched.includes(id)) return;

          if (selectedCard === null) {
              setSelectedCard(id);
          } else {
              const prevCard = items.find(i => i.id === selectedCard);
              if (prevCard && prevCard.match === matchId && prevCard.id !== id) {
                  setMatched([...matched, id, selectedCard]);
                  setSelectedCard(null);
              } else {
                  setSelectedCard(null);
                  // Optional: Error feedback
              }
          }
      };

      return (
          <div className="p-6 animate-fade-in space-y-10">
              {/* Values */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-sm">
                  <h3 className="text-xl font-bold text-purple-900 mb-2 flex items-center gap-2">
                      <Sparkles /> قيمنا (ص 71)
                  </h3>
                  <p className="text-purple-800 text-lg font-medium leading-relaxed">
                      "نفتخر بالشخصيات العمانية التي عاصرت الرسول محمداً ﷺ، وندعو لهم بالرحمة والمغفرة."
                  </p>
              </div>

              {/* Matching Game */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                  <h3 className="text-2xl font-black text-slate-800 mb-6 text-center">لعبة المطابقة: صل العبارة بما يناسبها</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                      {items.map((item) => (
                          <button 
                              key={item.id}
                              onClick={() => handleCardClick(item.id, item.match)}
                              disabled={matched.includes(item.id)}
                              className={`p-6 rounded-2xl border-2 text-lg font-bold transition-all ${
                                  matched.includes(item.id) 
                                      ? 'bg-green-100 border-green-500 text-green-800 opacity-50 scale-95' 
                                      : selectedCard === item.id 
                                          ? 'bg-blue-100 border-blue-500 text-blue-900 scale-105' 
                                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-300'
                              }`}
                          >
                              {matched.includes(item.id) ? <Check className="mx-auto"/> : item.text}
                          </button>
                      ))}
                  </div>
                  
                  {matched.length === items.length && (
                      <div className="mt-6 text-center text-green-600 font-black text-xl animate-bounce">
                          أحسنت! إجابات صحيحة 🎉
                      </div>
                  )}
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'puzzle': return <PuzzleSection />;
      case 'profiles': return <ProfilesSection />;
      case 'suwaid': return <SuwaidSection />;
      case 'activity': return <ActivitySection />;
      default: return <PuzzleSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-indigo-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-indigo-100 flex flex-col`}>
        <div className="p-4 border-b border-indigo-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">شخصيات عمانية 👥</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('puzzle'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'puzzle' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Key size={20}/> لغز الدرس
          </button>
          <button onClick={() => {setActiveTab('profiles'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'profiles' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Users size={20}/> شخصيات خالدة
          </button>
          <button onClick={() => {setActiveTab('suwaid'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'suwaid' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <MessageCircle size={20}/> قصة سويد
          </button>
          <button onClick={() => {setActiveTab('activity'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'activity' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> أنشطة وقيم
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">شخصيات عمانية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanPersonalitiesLesson;
