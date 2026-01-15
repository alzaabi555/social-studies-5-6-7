
import React, { useState } from 'react';
import { CIVIL_SOCIETY_SECTIONS, CIVIL_SOCIETY_QUIZ } from '../../../constants';
import { Section } from '../../../types';
import { Menu, ArrowRight, HeartHandshake, Leaf, Stethoscope, Users, BookOpen, Crown, Building2, Star, CheckCircle, Search } from 'lucide-react';
import SectionQuiz from '../../SectionQuiz';

interface Props {
    onBack: () => void;
}

const CivilSocietyLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.CIVIL_SOCIETY_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. CONCEPT & CHARACTERISTICS ---
  const IntroSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="bg-teal-50 border-r-4 border-teal-600 p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <BookOpen size={24} /> مفهوم المجتمع المدني:
                  </h3>
                  <p className="text-xl text-teal-800 font-medium leading-loose">
                      "هي مؤسسات وجمعيات <span className="bg-white px-2 rounded border border-teal-200 font-bold">أهلية تطوعية</span>، ينشئها الأفراد بمحض إرادتهم، وتعمل وفق قوانين الدولة، ولا تهدف إلى الربح المادي."
                  </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 text-center">
                  <h3 className="text-2xl font-black text-slate-800 mb-6">خصائص مؤسسات المجتمع المدني</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-100 hover:scale-105 transition-transform">
                          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                              <HeartHandshake size={32} />
                          </div>
                          <h4 className="font-bold text-lg text-orange-900">تطوعية</h4>
                          <p className="text-sm text-slate-600 mt-2">يقوم العمل فيها على رغبة الأفراد في خدمة مجتمعهم دون إجبار.</p>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-100 hover:scale-105 transition-transform">
                          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                              <Building2 size={32} />
                          </div>
                          <h4 className="font-bold text-lg text-purple-900">غير حكومية</h4>
                          <p className="text-sm text-slate-600 mt-2">يديرها أفراد من المجتمع (أهلية) وليست تابعة للحكومة مباشرة، لكنها تحت إشرافها.</p>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100 hover:scale-105 transition-transform">
                          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                              <Star size={32} />
                          </div>
                          <h4 className="font-bold text-lg text-blue-900">غير ربحية</h4>
                          <p className="text-sm text-slate-600 mt-2">هدفها الأساسي خدمة المجتمع وليس جمع الأموال.</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. TYPES & EXAMPLES IN OMAN ---
  const TypesSection = () => {
      const [activeType, setActiveType] = useState<string | null>(null);

      const associations = [
          { 
              id: 'women', 
              title: 'جمعيات المرأة العمانية', 
              icon: <Users size={32}/>, 
              color: 'bg-pink-100 text-pink-700',
              borderColor: 'border-pink-500',
              desc: 'تهتم بشؤون المرأة والأسرة، وتدريب النساء على مهارات مختلفة (كالخياطة والحرف).',
              example: 'أول جمعية للمرأة تأسست في مسقط عام 1971م.'
          },
          { 
              id: 'charity', 
              title: 'الجمعيات الخيرية', 
              icon: <HeartHandshake size={32}/>, 
              color: 'bg-green-100 text-green-700',
              borderColor: 'border-green-500',
              desc: 'تقدم المساعدات للمحتاجين والأيتام والمتضررين من الكوارث.',
              example: 'جمعية دار العطاء، الهيئة العمانية للأعمال الخيرية.'
          },
          { 
              id: 'professional', 
              title: 'الجمعيات المهنية', 
              icon: <Stethoscope size={32}/>, 
              color: 'bg-blue-100 text-blue-700',
              borderColor: 'border-blue-500',
              desc: 'تضم أصحاب المهنة الواحدة لتطوير مهنتهم وحماية حقوقهم.',
              example: 'الجمعية الطبية العمانية، جمعية المهندسين، جمعية الصحفيين.'
          },
          { 
              id: 'env', 
              title: 'جمعيات البيئة', 
              icon: <Leaf size={32}/>, 
              color: 'bg-emerald-100 text-emerald-700',
              borderColor: 'border-emerald-500',
              desc: 'تعمل على حماية البيئة العمانية ونشر الوعي البيئي.',
              example: 'جمعية البيئة العمانية.'
          }
      ];

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-4">
                  <h2 className="text-2xl font-black text-slate-800">نماذج عمانية 🇴🇲</h2>
                  <p className="text-slate-500">اضغط على البطاقات للتعرف على أمثلة من واقعنا</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {associations.map((assoc) => (
                      <div 
                          key={assoc.id} 
                          onClick={() => setActiveType(activeType === assoc.id ? null : assoc.id)}
                          className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${activeType === assoc.id ? `bg-white shadow-xl scale-105 ${assoc.borderColor}` : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
                      >
                          <div className="flex items-center gap-4">
                              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${assoc.color}`}>
                                  {assoc.icon}
                              </div>
                              <h3 className="font-bold text-lg text-slate-800">{assoc.title}</h3>
                          </div>
                          
                          {activeType === assoc.id && (
                              <div className="mt-4 animate-slide-up border-t border-slate-100 pt-4">
                                  <p className="text-slate-600 mb-3 text-sm leading-relaxed">{assoc.desc}</p>
                                  <div className={`text-xs font-bold px-3 py-2 rounded-lg inline-block ${assoc.color} bg-opacity-20`}>
                                      مثال: {assoc.example}
                                  </div>
                              </div>
                          )}
                          
                          {activeType !== assoc.id && <p className="text-xs text-slate-400 mt-2 text-left">اضغط للتفاصيل</p>}
                      </div>
                  ))}
              </div>

              {/* Ministry Role */}
              <div className="bg-slate-800 text-white p-6 rounded-2xl flex items-center gap-4 shadow-lg">
                  <div className="bg-white/20 p-3 rounded-full">
                      <Crown size={28} className="text-yellow-400" />
                  </div>
                  <div>
                      <h4 className="font-bold text-yellow-400 text-lg">جهة الاختصاص</h4>
                      <p className="text-slate-300 text-sm">
                          تشرف <strong>وزارة التنمية الاجتماعية</strong> على إشهار ومتابعة عمل هذه الجمعيات في سلطنة عمان.
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. IMPORTANCE & ROLES ---
  const ImportanceSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-orange-900 mb-6">أهمية مؤسسات المجتمع المدني</h2>
              </div>

              {/* Roles Interactive Diagram */}
              <div className="relative w-full max-w-2xl mx-auto h-80 bg-orange-50 rounded-full border-4 border-orange-200 shadow-inner flex items-center justify-center">
                  <div className="absolute w-32 h-32 bg-white rounded-full flex items-center justify-center text-center p-2 font-black text-orange-800 shadow-xl z-20 border-4 border-orange-500">
                      أدوار المجتمع المدني
                  </div>

                  {/* Role 1 */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-40">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"><HeartHandshake/></div>
                      <h4 className="font-bold text-blue-900 text-sm">مساندة الحكومة</h4>
                      <p className="text-xs text-slate-600">تقديم خدمات مكملة للجهد الحكومي.</p>
                  </div>

                  {/* Role 2 */}
                  <div className="absolute bottom-10 left-10 text-center w-40">
                      <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"><Users/></div>
                      <h4 className="font-bold text-green-900 text-sm">تنمية المهارات</h4>
                      <p className="text-xs text-slate-600">تدريب المواطنين وصقل مواهبهم.</p>
                  </div>

                  {/* Role 3 */}
                  <div className="absolute bottom-10 right-10 text-center w-40">
                      <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"><Search/></div>
                      <h4 className="font-bold text-purple-900 text-sm">رصد الاحتياجات</h4>
                      <p className="text-xs text-slate-600">تلمس حاجات المجتمع وإيصالها للمسؤولين.</p>
                  </div>
              </div>

              {/* Activity */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="text-green-600" /> نشاط (ص 103):
                  </h3>
                  <p className="text-slate-700 mb-4">
                      كيف يمكن لجمعية البيئة العمانية أن تساهم في الحفاظ على نظافة الشواطئ؟
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600">
                      <strong>مقترح:</strong> تنظيم حملات تنظيف تطوعية، نشر الوعي بين الزوار، وضع حاويات مخصصة، وتوزيع مطويات توعوية.
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.CIVIL_SOCIETY_INTRO: return <IntroSection />;
      case Section.CIVIL_SOCIETY_TYPES: return <TypesSection />;
      case Section.CIVIL_SOCIETY_IMPORTANCE: return <ImportanceSection />;
      case Section.QUIZ: return <SectionQuiz questions={CIVIL_SOCIETY_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-teal-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-teal-100 flex flex-col`}>
        <div className="p-4 border-b border-teal-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">المجتمع المدني 🤝</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => { setActiveSection(Section.CIVIL_SOCIETY_INTRO); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.CIVIL_SOCIETY_INTRO ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <BookOpen size={20}/> المفهوم والخصائص
          </button>
          <button onClick={() => { setActiveSection(Section.CIVIL_SOCIETY_TYPES); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.CIVIL_SOCIETY_TYPES ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> أنواع المؤسسات
          </button>
          <button onClick={() => { setActiveSection(Section.CIVIL_SOCIETY_IMPORTANCE); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.CIVIL_SOCIETY_IMPORTANCE ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> الأهمية والأدوار
          </button>
          <button onClick={() => { setActiveSection(Section.QUIZ); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.QUIZ ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-teal-800">مؤسسات المجتمع المدني</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default CivilSocietyLesson;
