
import React, { useState, useEffect } from 'react';
import { UNITS } from '../constants';
import { Phone, Lock, ChevronLeft, BookOpen, LayoutGrid, List, PieChart, Award, Bell, Briefcase, History, PlayCircle, UserCog, Save, School } from 'lucide-react';
import { LessonId, Lesson } from '../types';

interface CourseIndexProps {
  onSelectLesson: (id: LessonId) => void;
}

const CourseIndex: React.FC<CourseIndexProps> = ({ onSelectLesson }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [greeting, setGreeting] = useState('');
  
  // --- State for Teacher Data & Progress ---
  const [teacherName, setTeacherName] = useState('أ. محمد درويش');
  const [schoolName, setSchoolName] = useState('مدرسة الإبداع للتعليم الأساسي');
  const [lastLessonId, setLastLessonId] = useState<string | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // States for dropdowns
  const [showResumeMenu, setShowResumeMenu] = useState(false); // Was Notifications
  const [showProfile, setShowProfile] = useState(false);

  // Load saved data from LocalStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('teacherName');
    const savedSchool = localStorage.getItem('schoolName');
    const savedLastLesson = localStorage.getItem('lastLessonId');

    if (savedName) setTeacherName(savedName);
    if (savedSchool) setSchoolName(savedSchool);
    if (savedLastLesson) setLastLessonId(savedLastLesson);

    // Time-based greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('صباح الخير');
    else if (hour < 18) setGreeting('مساء الخير');
    else setGreeting('مساؤك سعيد');
  }, []);

  // Helper to find lesson details by ID
  const getLastLessonDetails = (): Lesson | null => {
      if (!lastLessonId) return null;
      for (const unit of UNITS) {
          const lesson = unit.lessons.find(l => l.id === lastLessonId);
          if (lesson) return lesson;
      }
      return null;
  };

  const lastLesson = getLastLessonDetails();

  // Wrapper to save progress when a lesson is clicked
  const handleLessonSelect = (id: LessonId) => {
      if (id) {
          localStorage.setItem('lastLessonId', id);
          setLastLessonId(id);
      }
      onSelectLesson(id);
  };

  // Save Teacher Data
  const handleSaveProfile = () => {
      localStorage.setItem('teacherName', teacherName);
      localStorage.setItem('schoolName', schoolName);
      setIsEditingProfile(false);
      setShowProfile(false);
  };

  // Calculate total stats
  const totalLessons = UNITS.reduce((acc, unit) => acc + unit.lessons.length, 0);
  const totalUnits = UNITS.length;

  return (
    <div className="min-h-screen bg-slate-50 text-right font-tajawal pb-20 select-none" dir="rtl">
      
      {/* --- Teacher App Header --- */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
            
            {/* Logo & Subject */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    <Briefcase size={26} />
                </div>
                <div>
                    <h1 className="text-xl font-black text-slate-800 leading-none mb-1">الحقيبة التفاعلية</h1>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">نسخة المعلم</span>
                </div>
            </div>
            
            {/* Teacher Actions Area */}
            <div className="flex gap-4 items-center">
                
                {/* 1. Resume Bell (Where did I stop?) */}
                <div className="relative">
                    <button 
                        onClick={() => {
                            setShowResumeMenu(!showResumeMenu);
                            setShowProfile(false);
                        }}
                        className={`p-2.5 rounded-full transition-all relative ${showResumeMenu ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-100 text-slate-600'}`}
                        title="أين توقفت؟"
                    >
                        <History size={24} />
                        {lastLesson && <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>}
                    </button>

                    {/* Resume Dropdown */}
                    {showResumeMenu && (
                        <div className="absolute top-14 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in z-50 origin-top-left">
                            <div className="p-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800 flex items-center gap-2"><History size={18}/> استكمال الشرح</h3>
                            </div>
                            
                            <div className="p-4">
                                {lastLesson ? (
                                    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                                        <p className="text-xs text-indigo-600 font-bold mb-2">توقفت آخر مرة عند:</p>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{lastLesson.icon}</span>
                                            <div>
                                                <h4 className="font-black text-slate-800 text-sm">{lastLesson.title}</h4>
                                                <p className="text-xs text-slate-500">{lastLesson.subtitle}</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => handleLessonSelect(lastLesson.id as LessonId)}
                                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <PlayCircle size={16} />
                                            إكمال الدرس
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center py-6 text-slate-400">
                                        <Bell size={32} className="mx-auto mb-2 opacity-50"/>
                                        <p className="text-sm">لم تبدأ أي درس بعد.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. Teacher Profile (Data Entry Only) */}
                <div className="relative">
                    <button 
                        onClick={() => {
                            setShowProfile(!showProfile);
                            setShowResumeMenu(false);
                            setIsEditingProfile(true); // Auto enable edit mode for simplicity
                        }}
                        className={`flex items-center gap-3 pl-2 pr-1 py-1 rounded-full transition-all border-2 ${showProfile ? 'border-indigo-600 bg-indigo-50' : 'border-transparent hover:bg-slate-100'}`}
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher&clothing=blazerAndShirt&eyes=happy" alt="Teacher" className="w-full h-full object-cover" />
                        </div>
                        <div className="hidden md:block text-right">
                            <span className="block text-xs font-bold text-slate-800">{teacherName}</span>
                            <span className="block text-[10px] text-slate-500 truncate max-w-[120px]">{schoolName}</span>
                        </div>
                    </button>

                    {/* Teacher Data Form Dropdown */}
                    {showProfile && (
                        <div className="absolute top-16 left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in z-50 origin-top-left">
                            <div className="p-4 bg-gradient-to-br from-indigo-800 to-indigo-600 text-white flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-lg">بيانات المعلم</h3>
                                    <p className="text-xs text-indigo-200 opacity-80">تخصيص التطبيق</p>
                                </div>
                                <UserCog size={24} className="opacity-50" />
                            </div>
                            
                            <div className="p-4 space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-1">اسم المعلم/المعلمة</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            value={teacherName}
                                            onChange={(e) => setTeacherName(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 pl-8 text-sm focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700"
                                            placeholder="أدخل الاسم..."
                                        />
                                        <UserCog size={16} className="absolute left-2 top-2.5 text-slate-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-1">اسم المدرسة</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            value={schoolName}
                                            onChange={(e) => setSchoolName(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 pl-8 text-sm focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700"
                                            placeholder="أدخل اسم المدرسة..."
                                        />
                                        <School size={16} className="absolute left-2 top-2.5 text-slate-400" />
                                    </div>
                                </div>

                                <button 
                                    onClick={handleSaveProfile}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors mt-2"
                                >
                                    <Save size={16} />
                                    حفظ البيانات
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </header>

      {/* Overlay to close dropdowns when clicking outside */}
      {(showResumeMenu || showProfile) && (
          <div 
            className="fixed inset-0 z-30 cursor-default" 
            onClick={() => {
                setShowResumeMenu(false);
                setShowProfile(false);
            }}
          ></div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-10 relative z-0">
        
        {/* --- Teacher Dashboard Section --- */}
        <div className="relative bg-gradient-to-r from-slate-800 to-indigo-900 rounded-3xl p-6 md:p-10 text-white shadow-2xl overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-right">
                    <p className="text-indigo-300 font-medium mb-1">{greeting}، {teacherName}</p>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                        جاهز لبدء <span className="text-yellow-400">حصة اليوم؟</span>
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base max-w-lg opacity-90 leading-relaxed">
                        مرحباً بك في {schoolName}. اختر الدرس لعرضه على الشاشة الذكية للطلاب.
                    </p>
                </div>

                {/* Quick Stats for Teacher */}
                <div className="flex gap-3 md:gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide justify-center md:justify-end">
                    <div className="min-w-[120px] bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                        <span className="text-2xl font-bold text-white">{totalUnits}</span>
                        <span className="text-xs text-indigo-200">وحدات دراسية</span>
                    </div>
                    <div className="min-w-[120px] bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                        <span className="text-2xl font-bold text-white">{totalLessons}</span>
                        <span className="text-xs text-indigo-200">درس جاهز للعرض</span>
                    </div>
                </div>
            </div>
        </div>

        {/* --- Filter & View Toggle --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                <BookOpen className="text-indigo-600"/>
                مكتبة الدروس
                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-lg">منهج الصف السابع</span>
            </h3>
            
            <div className="flex gap-2 w-full md:w-auto bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
                <button 
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${viewMode === 'grid' ? 'bg-slate-800 text-white shadow' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    <LayoutGrid size={16} /> شبكة
                </button>
                <button 
                    onClick={() => setViewMode('list')}
                    className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${viewMode === 'list' ? 'bg-slate-800 text-white shadow' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    <List size={16} /> قائمة
                </button>
            </div>
        </div>

        {/* --- Units & Lessons List --- */}
        <div className="space-y-12">
            {UNITS.map((unit, unitIndex) => (
                <div key={unit.id} className="animate-fade-in" style={{ animationDelay: `${unitIndex * 100}ms` }}>
                    
                    {/* Unit Header */}
                    <div className="flex items-center gap-4 mb-6 border-r-4 border-indigo-600 pr-4">
                        <div>
                            <h2 className="text-xl font-black text-slate-800">{unit.title}</h2>
                            <p className="text-slate-500 text-sm">{unit.description}</p>
                        </div>
                    </div>

                    {/* Lessons Grid/List */}
                    <div className={
                        viewMode === 'grid' 
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" 
                        : "flex flex-col gap-4"
                    }>
                        {unit.lessons.length > 0 ? (
                            unit.lessons.map((lesson) => (
                                <button
                                    key={lesson.id}
                                    onClick={() => lesson.available && handleLessonSelect(lesson.id as LessonId)}
                                    disabled={!lesson.available}
                                    className={`
                                        group relative overflow-hidden text-right transition-all duration-300
                                        ${viewMode === 'grid' ? 'p-6 flex flex-col h-full' : 'p-4 flex items-center gap-6'}
                                        rounded-2xl border bg-white
                                        ${lesson.available 
                                            ? `hover:border-${lesson.textColor.split('-')[1]}-400 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-slate-200 shadow-sm` 
                                            : 'opacity-60 grayscale cursor-not-allowed border-slate-100 bg-slate-50'
                                        }
                                    `}
                                >
                                    {/* Icon */}
                                    <div className={`
                                        relative z-10 flex-shrink-0 flex items-center justify-center
                                        ${viewMode === 'grid' ? 'w-14 h-14 mb-4 text-3xl rounded-2xl' : 'w-16 h-16 text-3xl rounded-2xl'}
                                        ${lesson.available ? `bg-${lesson.textColor.split('-')[1]}-50` : 'bg-slate-200'}
                                    `}>
                                        <span className="drop-shadow-sm">{lesson.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 relative z-10">
                                        <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold mb-2 tracking-wide ${lesson.available ? `bg-${lesson.textColor.split('-')[1]}-100 ${lesson.textColor}` : 'bg-slate-200 text-slate-500'}`}>
                                            {lesson.subtitle}
                                        </span>
                                        <h3 className="text-lg font-black text-slate-800 mb-1 leading-snug group-hover:text-indigo-700 transition-colors">
                                            {lesson.title}
                                        </h3>
                                        {viewMode === 'grid' && (
                                            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                                                {lesson.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Teacher Action Button */}
                                    <div className={`
                                        relative z-10 flex items-center justify-center
                                        ${viewMode === 'grid' ? 'mt-6 w-full py-3 rounded-xl' : 'w-10 h-10 rounded-full'}
                                        ${lesson.available 
                                            ? viewMode === 'grid' ? `bg-slate-800 text-white font-bold group-hover:bg-indigo-600 transition-colors` : `bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white`
                                            : 'hidden'
                                        }
                                    `}>
                                        {viewMode === 'grid' ? (
                                            <span className="flex items-center gap-2 text-sm">
                                                عرض الدرس <Briefcase size={16} />
                                            </span>
                                        ) : (
                                            <ChevronLeft size={20} />
                                        )}
                                    </div>

                                    {!lesson.available && (
                                        <div className="absolute top-4 left-4 text-slate-400">
                                            <Lock size={18} />
                                        </div>
                                    )}
                                </button>
                            ))
                        ) : (
                            <div className="col-span-full py-10 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                <p className="text-slate-400 font-bold">لا توجد دروس متاحة حالياً</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* --- Footer Signature --- */}
      <footer className="mt-12 text-center text-slate-400 text-sm pb-8 border-t border-slate-200 pt-8">
        <p className="font-bold text-slate-500">تم إعداد هذا المحتوى التعليمي بواسطة</p>
        <div className="flex items-center justify-center gap-2 mt-2">
            <span className="font-black text-indigo-700 text-lg">أ. محمد درويش الزعابي</span>
        </div>
        <div className="flex items-center justify-center gap-2 opacity-70 mt-1">
            <Phone size={14} /> <span dir="ltr" className="font-mono">98344555</span>
        </div>
      </footer>

    </div>
  );
};

export default CourseIndex;
