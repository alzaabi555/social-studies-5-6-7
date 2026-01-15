
import React, { useState } from 'react';
import { COMMUNITY_PARTICIPATION_SECTIONS, COMMUNITY_PARTICIPATION_QUIZ } from '../../../constants';
import { Section } from '../../../types';
import { Menu, ArrowRight, HeartHandshake, Vote, Star, MessageCircle, Crown, CheckCircle2, UserPlus, CloudLightning, ThumbsUp } from 'lucide-react';
import SectionQuiz from '../../SectionQuiz';

interface Props {
    onBack: () => void;
}

const CommunityParticipationLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.COMMUNITY_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. CONCEPT & CITIZENSHIP ---
  const IntroSection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          {/* Royal Quote (Page 105) */}
          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-8 rounded-3xl shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-20 bg-white opacity-5 rounded-full blur-3xl"></div>
              <Crown size={40} className="mx-auto mb-4 text-yellow-400"/>
              <h3 className="text-lg font-bold text-blue-200 mb-4 uppercase tracking-widest">من النطق السامي</h3>
              <p className="text-xl md:text-2xl font-serif italic leading-loose">
                  "إن بناء الأوطان لا يتم إلا بتعاون الجميع... فالمواطنون شركاء في التنمية."
              </p>
              <p className="mt-4 text-sm font-bold text-yellow-200">- السلطان هيثم بن طارق حفظه الله -</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-black text-slate-800">ما هي المشاركة المجتمعية؟</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                      هي مساهمة المواطنين <span className="text-blue-600 font-bold">بجهدهم، وفكرهم، ومالهم</span> في خدمة مجتمعهم ووطنهم، والمشاركة في اتخاذ القرارات التي تهمهم.
                  </p>
                  <div className="flex gap-4">
                      <span className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg font-bold text-sm">واجب وطني</span>
                      <span className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg font-bold text-sm">مسؤولية مشتركة</span>
                  </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                  <UserPlus size={100} className="text-blue-200" />
              </div>
          </div>
      </div>
  );

  // --- 2. FORMS OF PARTICIPATION (Shura & Volunteering) ---
  const FormsSection = () => {
      const [activeForm, setActiveForm] = useState<'shura' | 'volunteer' | null>(null);

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">صور المشاركة المجتمعية</h2>
                  <p className="text-slate-500">للمشاركة أشكال متعددة.. اختر لنكتشفها معاً</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {/* Shura Card */}
                  <div 
                      onClick={() => setActiveForm('shura')}
                      className={`cursor-pointer bg-white p-8 rounded-3xl shadow-lg border-t-8 transition-all hover:-translate-y-2 group ${activeForm === 'shura' ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200'}`}
                  >
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                          <Vote size={32} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-800 mb-3">1. المشاركة السياسية (الشورى)</h3>
                      <p className="text-slate-600 mb-4">التعبير عن الرأي والمشاركة في صنع القرار.</p>
                      
                      {activeForm === 'shura' && (
                          <div className="bg-blue-50 p-4 rounded-xl animate-fade-in text-sm text-blue-900 space-y-2">
                              <p><strong>مجلس الشورى:</strong> يمثل المواطنين، ويتم اختيار أعضائه عبر <span className="font-bold text-red-600">الانتخابات</span> كل 4 سنوات.</p>
                              <p><strong>من حقك:</strong> الترشح (إذا انطبقت الشروط) أو التصويت لاختيار من يمثلك.</p>
                          </div>
                      )}
                  </div>

                  {/* Volunteering Card */}
                  <div 
                      onClick={() => setActiveForm('volunteer')}
                      className={`cursor-pointer bg-white p-8 rounded-3xl shadow-lg border-t-8 transition-all hover:-translate-y-2 group ${activeForm === 'volunteer' ? 'border-green-600 ring-2 ring-green-100' : 'border-slate-200'}`}
                  >
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                          <HeartHandshake size={32} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-800 mb-3">2. العمل التطوعي</h3>
                      <p className="text-slate-600 mb-4">بذل الجهد أو المال أو الوقت دون مقابل.</p>

                      {activeForm === 'volunteer' && (
                          <div className="bg-green-50 p-4 rounded-xl animate-fade-in text-sm text-green-900 space-y-2">
                              <p><strong>المجالات:</strong> تنظيف الشواطئ، مساعدة المحتاجين، التشجير، التوعية الصحية.</p>
                              <p><strong>الهدف:</strong> نشر الخير والتكافل الاجتماعي.</p>
                          </div>
                      )}
                  </div>
              </div>

              {/* Real Example: Cyclone Response */}
              <div className="mt-8 bg-slate-100 rounded-3xl p-6 border-2 border-slate-200 flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-white p-4 rounded-full shadow-sm text-slate-600">
                      <CloudLightning size={40} />
                  </div>
                  <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-2">مثال من واقعنا: "ملحمة عُمان"</h4>
                      <p className="text-slate-700 leading-relaxed text-sm">
                          عند تعرض السلطنة للأنواء المناخية (مثل إعصار شاهين)، هب آلاف الشباب العمانيين للتطوع في تنظيف المناطق المتضررة ومساعدة الأهالي، في صورة رائعة للمشاركة المجتمعية الحقيقية.
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. IMPORTANCE (Interactive List) ---
  const ImportanceSection = () => (
      <div className="p-6 animate-fade-in space-y-10">
          <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-slate-800 mb-2">أهمية المشاركة المجتمعية</h2>
              <p className="text-slate-500">لماذا يجب علينا جميعاً أن نشارك؟</p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
              {[
                  { text: 'تعزيز الانتماء والولاء للوطن', icon: '🇴🇲', color: 'bg-red-50 text-red-800 border-red-200' },
                  { text: 'تحقيق التكافل والترابط بين أفراد المجتمع', icon: '🤝', color: 'bg-green-50 text-green-800 border-green-200' },
                  { text: 'مساعدة الحكومة في تنفيذ خطط التنمية', icon: '🏗️', color: 'bg-blue-50 text-blue-800 border-blue-200' },
                  { text: 'استغلال طاقات الشباب في أعمال مفيدة', icon: '⚡', color: 'bg-yellow-50 text-yellow-800 border-yellow-200' },
              ].map((item, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl border-2 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow ${item.color}`}>
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-bold text-lg">{item.text}</span>
                  </div>
              ))}
          </div>

          {/* Call to Action */}
          <div className="bg-white p-8 rounded-3xl shadow-xl text-center border-t-8 border-indigo-600 mt-8">
              <ThumbsUp size={48} className="mx-auto text-indigo-600 mb-4 animate-bounce" />
              <h3 className="text-2xl font-black text-slate-800 mb-2">كن إيجابياً.. كن مشاركاً!</h3>
              <p className="text-slate-600">ابدأ الآن.. شارك في جماعات الأنشطة المدرسية، أو تطوع في حيك.</p>
          </div>
      </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case Section.COMMUNITY_INTRO: return <IntroSection />;
      case Section.COMMUNITY_FORMS: return <FormsSection />;
      case Section.COMMUNITY_IMPORTANCE: return <ImportanceSection />;
      case Section.QUIZ: return <SectionQuiz questions={COMMUNITY_PARTICIPATION_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-blue-100 flex flex-col`}>
        <div className="p-4 border-b border-blue-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-blue-700 px-2">المشاركة المجتمعية 🙌</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => { setActiveSection(Section.COMMUNITY_INTRO); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.COMMUNITY_INTRO ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Crown size={20}/> المفهوم والأهداف
          </button>
          <button onClick={() => { setActiveSection(Section.COMMUNITY_FORMS); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.COMMUNITY_FORMS ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Vote size={20}/> صور المشاركة
          </button>
          <button onClick={() => { setActiveSection(Section.COMMUNITY_IMPORTANCE); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.COMMUNITY_IMPORTANCE ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> الأهمية
          </button>
          <button onClick={() => { setActiveSection(Section.QUIZ); setMobileMenuOpen(false); }} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.QUIZ ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle2 size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-blue-800">المشاركة المجتمعية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default CommunityParticipationLesson;
