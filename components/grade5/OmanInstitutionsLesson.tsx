
import React, { useState } from 'react';
import { Menu, ArrowRight, Building2, Globe, HeartHandshake, BookOpen, ShieldCheck, Scale, Info, Users, Baby, ExternalLink, Target, CheckCircle, XCircle, Heart, Star, Calendar, MessageCircle, Gavel } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const OmanInstitutionsLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'intro' | 'institutions' | 'human_rights' | 'child_rights' | 'women_rights'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO (Page 89) ---
  const IntroSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-8 text-center">
              <div className="bg-cyan-50 border-r-4 border-cyan-600 p-6 rounded-lg shadow-sm text-right">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-3 text-cyan-800 font-medium text-lg leading-relaxed">
                      <li>• أتعرف على المؤسسات الوطنية التي تكفل حقوق المواطن.</li>
                      <li>• أتعرف على الاتفاقيات الدولية (حقوق الإنسان، الطفل، المرأة).</li>
                      <li>• أقدر جهود السلطنة في رعاية الفئات المختلفة.</li>
                  </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-100 relative">
                  {/* Scene Illustration based on Page 89 */}
                  <div className="relative h-64 bg-sky-100 w-full overflow-hidden">
                      <div className="absolute bottom-0 w-full h-20 bg-slate-300"></div> {/* Road */}
                      <div className="absolute bottom-20 left-10 w-64 h-40 bg-rose-100 rounded-t-xl border-4 border-white flex flex-col items-center justify-center shadow-lg">
                          <div className="text-rose-500 font-bold text-lg">مركز صحي</div>
                          <div className="text-4xl text-rose-400">+</div>
                      </div>
                      
                      {/* Disabled Parking Spot */}
                      <div className="absolute bottom-2 left-20 w-16 h-16 border-2 border-blue-500 rounded bg-blue-50 flex items-center justify-center">
                          <div className="text-blue-600 text-3xl">♿</div>
                      </div>
                      <div className="absolute bottom-2 left-40 w-16 h-16 border-2 border-blue-500 rounded bg-blue-50 flex items-center justify-center">
                          <div className="text-blue-600 text-3xl">♿</div>
                      </div>
                  </div>

                  <div className="p-6">
                      <h2 className="text-2xl font-black text-slate-800 mb-4">ماذا تشاهد في الصورة؟</h2>
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-900 text-lg font-medium">
                          تخصيص مواقف خاصة <span className="font-bold text-blue-700">لذوي الإعاقة</span> أمام المؤسسات الصحية.
                          <br/>
                          <span className="text-sm mt-2 block text-blue-600">هذا يدل على اهتمام الدولة بحقوق جميع الفئات.</span>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. NATIONAL INSTITUTIONS (Page 90) ---
  const InstitutionsSection = () => {
      const [activeBuilding, setActiveBuilding] = useState<string | null>(null);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-cyan-800 mb-2">المؤسسات الوطنية (ص 90)</h2>
                  <p className="text-slate-500">أنشأت سلطنة عمان مؤسسات لضمان حقوق المواطنين.. اضغط على المباني</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  {/* Judicial */}
                  <button 
                      onClick={() => setActiveBuilding('judicial')}
                      className={`p-6 rounded-3xl border-b-8 transition-all hover:-translate-y-2 group ${activeBuilding === 'judicial' ? 'bg-amber-100 border-amber-600' : 'bg-white border-amber-200'}`}
                  >
                      <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                          <Gavel size={32}/>
                      </div>
                      <h3 className="font-bold text-xl text-amber-900 mb-2">المؤسسات القضائية</h3>
                      {activeBuilding === 'judicial' && (
                          <p className="text-amber-800 text-sm animate-fade-in">حفظ حقوق المواطنين من أي اعتداء أو ضرر.</p>
                      )}
                  </button>

                  {/* Security */}
                  <button 
                      onClick={() => setActiveBuilding('security')}
                      className={`p-6 rounded-3xl border-b-8 transition-all hover:-translate-y-2 group ${activeBuilding === 'security' ? 'bg-blue-100 border-blue-600' : 'bg-white border-blue-200'}`}
                  >
                      <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                          <ShieldCheck size={32}/>
                      </div>
                      <h3 className="font-bold text-xl text-blue-900 mb-2">المؤسسات الأمنية</h3>
                      {activeBuilding === 'security' && (
                          <p className="text-blue-800 text-sm animate-fade-in">حفظ الأمن داخل الوطن؛ لينعم المواطن بالرخاء.</p>
                      )}
                  </button>

                  {/* Service */}
                  <button 
                      onClick={() => setActiveBuilding('service')}
                      className={`p-6 rounded-3xl border-b-8 transition-all hover:-translate-y-2 group ${activeBuilding === 'service' ? 'bg-rose-100 border-rose-600' : 'bg-white border-rose-200'}`}
                  >
                      <div className="bg-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                          <HeartHandshake size={32}/>
                      </div>
                      <h3 className="font-bold text-xl text-rose-900 mb-2">المؤسسات الخدمية</h3>
                      {activeBuilding === 'service' && (
                          <p className="text-rose-800 text-sm animate-fade-in">تقدم خدماتها للمواطنين (الصحة، الرعاية الاجتماعية...).</p>
                      )}
                  </button>
              </div>

              {/* Info Box: OHRC */}
              <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg flex items-start gap-4 mt-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 p-20 bg-white opacity-5 rounded-full blur-3xl"></div>
                  <div className="bg-white/10 p-3 rounded-full flex-shrink-0 z-10">
                      <Scale size={32} className="text-yellow-400"/>
                  </div>
                  <div className="z-10">
                      <h4 className="font-bold text-yellow-400 text-lg mb-2">معلومة تهمك: اللجنة العمانية لحقوق الإنسان</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                          تقوم بمتابعة أوضاع حقوق الإنسان من خلال عمليتي الرصد وتلقي البلاغات.
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. HUMAN RIGHTS (Pages 91-92) ---
  const HumanRightsSection = () => {
      const [showAnalysis, setShowAnalysis] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-indigo-800 mb-2">أ. حقوق الإنسان</h2>
              </div>

              {/* Text Analysis (Page 91) */}
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-6 relative">
                  <div className="absolute -top-4 right-6 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                      حلل واستنتج
                  </div>
                  <div className="mt-4 text-center">
                      <p className="text-xl font-serif text-indigo-900 leading-loose italic mb-4">
                          "فدعمنا للقضاء واستقلاليته واجب التزمنا به... فالكل سواسية أمام القانون."
                      </p>
                      <p className="text-sm text-indigo-600 font-bold mb-6">- من خطاب السلطان قابوس (طيب الله ثراه)</p>
                      
                      <button 
                          onClick={() => setShowAnalysis(!showAnalysis)}
                          className="bg-white border-2 border-indigo-300 text-indigo-700 px-6 py-2 rounded-xl font-bold hover:bg-indigo-100 transition-colors"
                      >
                          {showAnalysis ? 'إخفاء التحليل' : 'علام تدل العبارة؟'}
                      </button>

                      {showAnalysis && (
                          <div className="mt-4 bg-white p-4 rounded-xl shadow-sm animate-slide-up text-indigo-800 font-medium">
                              تدل على أهمية <strong>العدالة والمساواة</strong> بين جميع أفراد المجتمع، وأنه لا أحد فوق القانون.
                          </div>
                      )}
                  </div>
              </div>

              {/* Omani Achievement (Page 92) */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-r-8 border-orange-500 flex items-center gap-4">
                  <div className="bg-orange-100 p-4 rounded-full text-orange-600 flex-shrink-0">
                      <Star size={32} />
                  </div>
                  <div>
                      <h4 className="font-black text-slate-800 text-lg mb-1">منجز عماني (1995م)</h4>
                      <p className="text-slate-600 text-sm">
                          إنشاء <strong>الجمعية العمانية للأشخاص ذوي الإعاقة</strong> لرعاية حقوقهم ودمجهم في المجتمع.
                      </p>
                  </div>
              </div>

              {/* Omani Personality (Page 92) */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl border-2 border-white/50">
                          👳‍♂️
                      </div>
                      <div className="text-center md:text-right">
                          <h3 className="text-2xl font-black text-yellow-300 mb-2">شخصية عمانية</h3>
                          <h4 className="text-xl font-bold mb-2">الإمام سعيد بن عبدالله الرحيلي</h4>
                          <p className="text-emerald-100 leading-relaxed">
                              وضع منظومة قيمية لحقوق الإنسان مستمدة من الشريعة، اعتنى فيها بحق المساواة، وحق الحرية، وحق المشاركة والشورى.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. CHILD RIGHTS (Pages 93-94) ---
  const ChildRightsSection = () => {
      const [collectedRights, setCollectedRights] = useState<string[]>([]);
      
      const rights = [
          { id: 'health', label: 'الرعاية الصحية', icon: '💉' },
          { id: 'edu', label: 'التعليم', icon: '📚' },
          { id: 'play', label: 'اللعب والترفيه', icon: '🪁' },
          { id: 'safety', label: 'الأمان', icon: '🛡️' },
          { id: 'name', label: 'الاسم والجنسية', icon: '🆔' }
      ];

      const toggleRight = (id: string) => {
          if (!collectedRights.includes(id)) setCollectedRights([...collectedRights, id]);
      };

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-blue-600 mb-2">ب. حقوق الطفل</h2>
                  <p className="text-slate-500">انضمت عمان لاتفاقية حقوق الطفل عام 1996م</p>
              </div>

              {/* Value (Page 93) */}
              <div className="bg-slate-100 p-4 rounded-xl text-center border-2 border-slate-200">
                  <p className="font-serif text-lg text-slate-700">﴿يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ...﴾</p>
                  <p className="text-xs text-slate-500 mt-2">قيمة: المساواة واحترام الآخر</p>
              </div>

              {/* Interactive Game: Collect Rights */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border-4 border-blue-100">
                  <h3 className="font-bold text-slate-800 mb-4 text-center">اجمع حقوق الطفل في السلة</h3>
                  <div className="flex justify-center flex-wrap gap-3 mb-8">
                      {rights.map((r) => (
                          <button
                              key={r.id}
                              onClick={() => toggleRight(r.id)}
                              disabled={collectedRights.includes(r.id)}
                              className={`px-4 py-2 rounded-full border-2 font-bold transition-all ${collectedRights.includes(r.id) ? 'bg-slate-100 text-slate-400 border-slate-200 scale-95' : 'bg-blue-50 border-blue-300 text-blue-700 hover:scale-110 hover:bg-blue-100'}`}
                          >
                              {r.icon} {r.label}
                          </button>
                      ))}
                  </div>

                  {/* The Basket */}
                  <div className="bg-blue-50 rounded-2xl p-6 min-h-[150px] relative border-2 border-dashed border-blue-300">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-bold text-blue-600 shadow-sm border border-blue-200">
                          حقوقي ({collectedRights.length}/5)
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center mt-2">
                          {collectedRights.map(id => {
                              const r = rights.find(item => item.id === id);
                              return (
                                  <span key={id} className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold animate-scale-in flex items-center gap-1 shadow-md">
                                      <CheckCircle size={14}/> {r?.label}
                                  </span>
                              );
                          })}
                      </div>
                      {collectedRights.length === 5 && (
                          <div className="mt-6 text-center animate-bounce">
                              <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-black shadow-lg">ممتاز! الطفل يتمتع بكل هذه الحقوق</span>
                          </div>
                      )}
                  </div>
              </div>

              {/* Page 94 Details */}
              <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-1">الحماية</h4>
                      <p className="text-red-800 text-sm">حماية الطفل من أداء الأعمال الخطرة.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-900 mb-1">ذوي الإعاقة</h4>
                      <p className="text-purple-800 text-sm">تمتع الطفل من ذوي الإعاقة برعاية آمنة وحياة كريمة.</p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 5. WOMEN RIGHTS (Page 95) ---
  const WomenRightsSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-pink-700 mb-2">ج. حقوق المرأة</h2>
                  <p className="text-slate-500">شريكة الرجل في بناء المجتمع</p>
              </div>

              {/* Omani Women's Day */}
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl p-8 text-white text-center shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-20 bg-white opacity-10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                      <div className="inline-block bg-white/20 p-4 rounded-full mb-4 animate-pulse">
                          <Calendar size={48} />
                      </div>
                      <h3 className="text-3xl font-black mb-2">17 أكتوبر</h3>
                      <p className="text-xl font-medium mb-4">يوم المرأة العمانية</p>
                      <div className="bg-white/20 px-4 py-2 rounded-xl inline-block text-sm">
                          احتفاءً وتكريماً لها في كل عام
                      </div>
                  </div>
              </div>

              {/* CEDAW Convention */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6">
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Globe className="text-blue-600"/> اتفاقية (سيداو)
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-sm">
                      انضمت سلطنة عمان إلى اتفاقية <strong>القضاء على جميع أشكال التمييز ضد المرأة</strong> (CEDAW)، مما يؤكد حرصها على تمكين المرأة في التعليم والعمل والمجتمع.
                  </p>
              </div>

              {/* Story: Abdullah bin Qais (Page 95) */}
              <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200">
                  <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="text-amber-700"/>
                      <h3 className="font-bold text-amber-900 text-lg">اقرأ واستمتع: الصحابي عبدالله بن أم مكتوم</h3>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-slate-700 text-sm leading-loose shadow-sm h-48 overflow-y-auto">
                      <p>
                          "عبدالله بن قيس (ابن أم مكتوم)، نشأ في مكة، وفقد بصره وهو صبي. هاجر إلى المدينة، ورغم العمى امتلك مواهب خاصة."
                      </p>
                      <p className="mt-2">
                          "جعلت الرسول ﷺ يلتفت إليه ويوظفه التوظيف الصحيح. فقد كان يؤذن في مسجد النبي مع بلال، كما استخلفه النبي أميراً على المدينة يصلي بالناس عند غيابه."
                      </p>
                      <p className="mt-2 font-bold text-amber-800">
                          الدرس المستفاد: الإعاقة ليست عائقاً أمام الإنجاز والمشاركة الفعالة في المجتمع.
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'intro': return <IntroSection />;
      case 'institutions': return <InstitutionsSection />;
      case 'human_rights': return <HumanRightsSection />;
      case 'child_rights': return <ChildRightsSection />;
      case 'women_rights': return <WomenRightsSection />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-cyan-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-cyan-100 flex flex-col`}>
        <div className="p-4 border-b border-cyan-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-cyan-700 px-2">الحقوق والمؤسسات 🏛️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'intro' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Target size={20}/> المقدمة والأهداف
          </button>
          <button onClick={() => {setActiveSection('institutions'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'institutions' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> المؤسسات الوطنية
          </button>
          <button onClick={() => {setActiveSection('human_rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'human_rights' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Users size={20}/> حقوق الإنسان
          </button>
          <button onClick={() => {setActiveSection('child_rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'child_rights' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Baby size={20}/> حقوق الطفل
          </button>
          <button onClick={() => {setActiveSection('women_rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'women_rights' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Heart size={20}/> حقوق المرأة
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-cyan-800">المؤسسات والاتفاقيات</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {activeSection === 'intro' && <IntroSection />}
          {activeSection === 'institutions' && <InstitutionsSection />}
          {activeSection === 'human_rights' && <HumanRightsSection />}
          {activeSection === 'child_rights' && <ChildRightsSection />}
          {activeSection === 'women_rights' && <WomenRightsSection />}
        </div>
      </main>
    </div>
  );
};

export default OmanInstitutionsLesson;
