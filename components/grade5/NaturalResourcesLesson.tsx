import React, { useState } from 'react';
import { FIFTH_RESOURCES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Sun, Wind, Droplet, Flame, Pickaxe, Menu, CheckCircle, Leaf, Zap, Battery } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const IntroSection = () => (
    <div className="p-6 animate-fade-in space-y-6">
        <div className="bg-amber-50 border-r-4 border-amber-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <Leaf size={24}/> الموارد الطبيعية
            </h3>
            <p className="text-amber-800 text-lg leading-relaxed">
                هي كل ما يوجد في الطبيعة من ثروات، خلقها الله تعالى لخدمة الإنسان، دون أن يتدخل الإنسان في إيجادها.
                <br/>
                مثل: الشمس، الماء، الهواء، التربة، النباتات الطبيعية، النفط، والمعادن.
            </p>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center border border-slate-200">
            <h2 className="text-2xl font-black text-slate-800 mb-6">أهمية الموارد الطبيعية</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-4xl block mb-2">🍞</span>
                    <span className="font-bold text-slate-700">مصدر للغذاء</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-4xl block mb-2">🏠</span>
                    <span className="font-bold text-slate-700">مواد للبناء</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-4xl block mb-2">🏭</span>
                    <span className="font-bold text-slate-700">أساس للصناعة</span>
                </div>
            </div>
        </div>
    </div>
);

const ResourcesTypes = () => {
    const [activeType, setActiveType] = useState<'renew' | 'non-renew' | null>(null);

    return (
        <div className="p-6 animate-fade-in space-y-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-slate-800">أنواع الموارد الطبيعية</h2>
                <p className="text-slate-500">تنقسم الموارد حسب تجددها إلى قسمين</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div 
                    onClick={() => setActiveType('renew')}
                    className={`cursor-pointer p-6 rounded-3xl border-4 transition-all hover:scale-105 ${activeType === 'renew' ? 'bg-green-100 border-green-500 shadow-xl' : 'bg-white border-green-200'}`}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                            <RefreshIcon />
                        </div>
                        <h3 className="text-xl font-black text-green-900 mb-2">موارد متجددة</h3>
                        <p className="text-green-800 text-sm">تتجدد باستمرار ولا تنفد إذا أحسن الإنسان استخدامها.</p>
                        {activeType === 'renew' && (
                            <div className="mt-4 grid grid-cols-3 gap-2 w-full animate-slide-up">
                                <div className="bg-white p-2 rounded text-xs font-bold text-green-700"><Sun className="mx-auto mb-1"/>الشمس</div>
                                <div className="bg-white p-2 rounded text-xs font-bold text-green-700"><Wind className="mx-auto mb-1"/>الرياح</div>
                                <div className="bg-white p-2 rounded text-xs font-bold text-green-700"><Droplet className="mx-auto mb-1"/>الماء</div>
                            </div>
                        )}
                    </div>
                </div>

                <div 
                    onClick={() => setActiveType('non-renew')}
                    className={`cursor-pointer p-6 rounded-3xl border-4 transition-all hover:scale-105 ${activeType === 'non-renew' ? 'bg-orange-100 border-orange-500 shadow-xl' : 'bg-white border-orange-200'}`}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
                            <Battery />
                        </div>
                        <h3 className="text-xl font-black text-orange-900 mb-2">موارد غير متجددة</h3>
                        <p className="text-orange-800 text-sm">توجد بكميات محدودة وتنقص بالاستخدام، وتحتاج ملايين السنين لتتكون.</p>
                        {activeType === 'non-renew' && (
                            <div className="mt-4 grid grid-cols-3 gap-2 w-full animate-slide-up">
                                <div className="bg-white p-2 rounded text-xs font-bold text-orange-700"><Flame className="mx-auto mb-1"/>النفط</div>
                                <div className="bg-white p-2 rounded text-xs font-bold text-orange-700"><Flame className="mx-auto mb-1"/>الغاز</div>
                                <div className="bg-white p-2 rounded text-xs font-bold text-orange-700"><Pickaxe className="mx-auto mb-1"/>المعادن</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const OmanEfforts = () => (
    <div className="p-6 animate-fade-in space-y-8">
        <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-800">استدامة الموارد في سلطنة عمان</h2>
            <p className="text-slate-500">تسعى السلطنة لاستغلال الطاقة النظيفة للحفاظ على البيئة</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600"><Zap size={32}/></div>
                <div>
                    <h3 className="font-bold text-lg text-slate-800">مشاريع الطاقة المتجددة</h3>
                    <p className="text-sm text-slate-500">رؤية عمان 2040</p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-48 bg-sky-100 rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-bold text-lg">محطة عبري للطاقة الشمسية</h4>
                        <p className="text-white/80 text-xs">أكبر مشروع للطاقة الشمسية في السلطنة.</p>
                    </div>
                    <Sun className="absolute top-4 right-4 text-yellow-400 w-12 h-12 animate-spin-slow opacity-80" />
                </div>

                <div className="relative h-48 bg-emerald-100 rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-bold text-lg">محطة ظفار لطاقة الرياح</h4>
                        <p className="text-white/80 text-xs">توليد الكهرباء باستخدام الرياح في منطقة فتخيت.</p>
                    </div>
                    <Wind className="absolute top-4 right-4 text-emerald-600 w-12 h-12 animate-pulse opacity-80" />
                </div>
            </div>
        </div>
    </div>
);

const NaturalResourcesLesson: React.FC<Props> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState<'intro' | 'types' | 'oman' | 'quiz'>('intro');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-amber-50 text-right font-tajawal">
            <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-amber-100 flex flex-col`}>
                <div className="p-4 border-b border-amber-100 pt-[max(1rem,env(safe-area-inset-top))]">
                    <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
                        <ArrowRight size={16} /> العودة للمكتبة
                    </button>
                    <h1 className="text-xl font-black text-amber-700 px-2">الموارد الطبيعية 💎</h1>
                </div>
                <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
                    <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <Leaf size={20}/> المفهوم والأهمية
                    </button>
                    <button onClick={() => {setActiveTab('types'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'types' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <Battery size={20}/> أنواع الموارد
                    </button>
                    <button onClick={() => {setActiveTab('oman'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'oman' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <Zap size={20}/> جهود السلطنة
                    </button>
                    <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <CheckCircle size={20}/> الاختبار
                    </button>
                </nav>
            </aside>
            
            <main className="flex-1 min-h-screen overflow-y-auto">
                <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
                    <span className="font-bold text-lg text-amber-800">الموارد الطبيعية</span>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
                </header>
                
                <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
                    {activeTab === 'intro' && <IntroSection />}
                    {activeTab === 'types' && <ResourcesTypes />}
                    {activeTab === 'oman' && <OmanEfforts />}
                    {activeTab === 'quiz' && <SectionQuiz questions={FIFTH_RESOURCES_QUIZ} />}
                </div>
            </main>
        </div>
    );
};

const RefreshIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
    </svg>
);

export default NaturalResourcesLesson;