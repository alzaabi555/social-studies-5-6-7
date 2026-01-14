
import React, { useState, useEffect } from 'react';
import { UNITS, UNITS_SIXTH } from '../constants';
import { Lock, ChevronLeft, LayoutGrid, List, Briefcase, History, PlayCircle, UserCog, Save, School, GraduationCap, Sparkles, BookOpenCheck } from 'lucide-react';
import { LessonId, Lesson } from '../types';

interface CourseIndexProps {
  onSelectLesson: (id: LessonId) => void;
}

const CourseIndex: React.FC<CourseIndexProps> = ({ onSelectLesson }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeGrade, setActiveGrade] = useState<6 | 7>(7);
  const [greeting, setGreeting] = useState('');
  
  // --- State for Teacher Data & Progress ---
  const [teacherName, setTeacherName] = useState('أ. محمد درويش');
  const [schoolName, setSchoolName] = useState('مدرسة الإبداع للتعليم الأساسي');
  const [lastLessonId, setLastLessonId] = useState<string | null>(null);

  // States for dropdowns
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Load saved data
  useEffect(() => {
    const savedName = localStorage.getItem('teacherName');
    const savedSchool = localStorage.getItem('schoolName');
    const savedLastLesson = localStorage.getItem('lastLessonId');
    const savedGrade = localStorage.getItem('activeGrade');

    if (savedName) setTeacherName(savedName);
    if (savedSchool) setSchoolName(savedSchool);
    if (savedLastLesson) setLastLessonId(savedLastLesson);
    if (savedGrade) setActiveGrade(Number(savedGrade) as 6 | 7);

    const hour = new Date().getHours();
    if (hour < 12) setGreeting('صباح الخير');
    else if (hour < 18) setGreeting('مساء الخير');
    else setGreeting('مساؤك سعيد');
  }, []);

  const handleGradeChange = (grade: 6 | 7) => {
      setActiveGrade(grade);
      localStorage.setItem('activeGrade', String(grade));
  };

  const currentUnits = activeGrade === 6 ? UNITS_SIXTH : UNITS;

  const getLastLessonDetails = (): Lesson | null => {
      if (!lastLessonId) return null;
      const allUnits = [...UNITS, ...UNITS_SIXTH];
      for (const unit of allUnits) {
          const lesson = unit.lessons.find(l => l.id === lastLessonId);
          if (lesson) return lesson;
      }
      return null;
  };

  const lastLesson = getLastLessonDetails();

  const handleLessonSelect = (id: LessonId) => {
      if (id) {
          localStorage.setItem('lastLessonId', id);
          setLastLessonId(id);
      }
      onSelectLesson(id);
  };

  const handleSaveProfile = () => {
      localStorage.setItem('teacherName', teacherName);
      localStorage.setItem('schoolName', schoolName);
      setShowProfile(false);
  };

  const totalLessons = currentUnits.reduce((acc, unit) => acc + unit.lessons.length, 0);
  const totalUnits = currentUnits.length;

  return (
    <div className="min-h-screen bg-slate-50 text-right font-tajawal pb-20 select-none" dir="rtl">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    <Briefcase size={24} />
                </div>
                <div>
                    <h1 className="text-lg md:text-xl font-black text-slate-800 leading-none mb-1">الحقيبة التفاعلية</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] md:text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">نسخة المعلم</span>
                    </div>
                </div>
            </div>
            
            <div className="flex gap-2 md:gap-4 items-center">
                {/* Resume Bell */}
                <div className="relative">
                    <button 
                        onClick={() => { setShowResumeMenu(!showResumeMenu); setShowProfile(false); }}
                        className={`p-2 md:p-2.5 rounded-full transition-all relative ${showResumeMenu ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-100 text-slate-600'}`}
                        title="أين توقفت؟"
                    >
                        <History size={22} />
                        {lastLesson && <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>}
                    </button>

                    {showResumeMenu && (
                        <div className="absolute top-14 left-0 w-72 md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in z-50 origin-top-left">
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
                                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
                                        >
                                            <PlayCircle size={16} /> متابعة الدرس
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-slate-400">
                                        <History size={32} className="mx-auto mb-2 opacity-50"/>
                                        <p className="text-sm">لم تبدأ أي درس بعد</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div className="relative">
                    <button 
                        onClick={() => { setShowProfile(!showProfile); setShowResumeMenu(false); }}
                        className={`flex items-center gap-2 md:gap-3 p-1 pr-3 md:pr-4 pl-1 rounded-full border transition-all ${showProfile ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-200 hover:border-indigo-200'}`}
                    >
                        <div className="text-left hidden md:block">
                            <span className="block text-xs font-bold text-slate-800">{teacherName}</span>
                            <span className="block text-[10px] text-slate-500 truncate max-w-[100px]">{schoolName}</span>
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 border-2 border-white shadow-sm">
                            <UserCog size={18} />
                        </div>
                    </button>

                    {showProfile && (
                        <div className="absolute top-14 left-0 w-72 md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in z-50 origin-top-left">
                            <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                                <h3 className="font-bold text-slate-800 flex items-center gap-2"><UserCog size={18}/> بيانات المعلم</h3>
                            </div>
                            <div className="p-4 space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 mb-1 block">الاسم</label>
                                    <input 
                                        type="text" 
                                        value={teacherName}
                                        onChange={(e) => setTeacherName(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 mb-1 block">المدرسة</label>
                                    <input 
                                        type="text" 
                                        value={schoolName}
                                        onChange={(e) => setSchoolName(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>
                                <button 
                                    onClick={handleSaveProfile}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                                >
                                    <Save size={16} /> حفظ البيانات
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white py-12 px-6 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                      <div className="inline-block bg-indigo-500/30 backdrop-blur-sm border border-indigo-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-indigo-100 mb-4 shadow-sm animate-fade-in flex items-center gap-2">
                          <Sparkles size={14} className="text-yellow-300"/> {greeting} يا أستاذ {teacherName.split(' ')[1] || teacherName}
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                          مادة الدراسات الاجتماعية <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white">
                              {activeGrade === 6 ? 'للصف السادس' : 'للصف السابع'}
                          </span>
                      </h2>
                      <div className="flex flex-wrap gap-3 mt-2 text-indigo-200 text-sm font-medium">
                          <span className="bg-white/10 px-3 py-1 rounded-lg flex items-center gap-2 border border-white/10"><Briefcase size={16}/> الفصل الدراسي الثاني</span>
                          <span className="bg-white/10 px-3 py-1 rounded-lg flex items-center gap-2 border border-white/10"><School size={16}/> {schoolName}</span>
                      </div>
                  </div>

                  {/* Stats Card */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex gap-8 shadow-xl hover:bg-white/20 transition-colors cursor-default">
                      <div className="text-center">
                          <div className="text-3xl font-black text-white">{totalUnits}</div>
                          <div className="text-xs text-indigo-200 font-bold uppercase tracking-wider mt-1">وحدات</div>
                      </div>
                      <div className="w-px bg-white/20"></div>
                      <div className="text-center">
                          <div className="text-3xl font-black text-white">{totalLessons}</div>
                          <div className="text-xs text-indigo-200 font-bold uppercase tracking-wider mt-1">دروس</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 -mt-8 relative z-20">
          
          {/* Grade Selector Tabs */}
          <div className="flex justify-center mb-8">
              <div className="bg-white p-1.5 rounded-2xl shadow-lg border border-indigo-100 flex gap-1 w-full max-w-md">
                  <button 
                      onClick={() => handleGradeChange(6)}
                      className={`flex-1 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${activeGrade === 6 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                      <GraduationCap size={20} />
                      الصف السادس
                  </button>
                  <button 
                      onClick={() => handleGradeChange(7)}
                      className={`flex-1 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${activeGrade === 7 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                      <GraduationCap size={20} />
                      الصف السابع
                  </button>
              </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end mb-6">
              <div className="bg-white p-1 rounded-lg shadow-sm border border-slate-200 flex">
                  <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-slate-100 text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                      <LayoutGrid size={20} />
                  </button>
                  <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-100 text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                      <List size={20} />
                  </button>
              </div>
          </div>

          {/* Units */}
          <div className="space-y-12">
              {currentUnits.length > 0 ? currentUnits.map((unit) => (
                  <section key={unit.id} className="animate-slide-up">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="h-10 w-2 bg-indigo-600 rounded-full shadow-sm"></div>
                          <div>
                              <h3 className="text-2xl font-black text-slate-800">{unit.title}</h3>
                              <p className="text-slate-500 text-sm mt-1">{unit.description}</p>
                          </div>
                      </div>

                      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                          {unit.lessons.map((lesson) => (
                              <div 
                                  key={lesson.id}
                                  onClick={() => lesson.available && handleLessonSelect(lesson.id as LessonId)}
                                  className={`group relative bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                                      lesson.available 
                                          ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-2 hover:border-transparent' 
                                          : 'opacity-70 cursor-not-allowed border-slate-100'
                                  } ${viewMode === 'list' ? 'flex items-center p-4 gap-6' : 'flex flex-col'}`}
                              >
                                  {/* Icon Area */}
                                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-24 h-24 rounded-2xl flex-shrink-0' : 'h-40'} ${lesson.color} transition-colors group-hover:filter group-hover:brightness-95`}>
                                      <div className="absolute inset-0 flex items-center justify-center text-6xl transform group-hover:scale-110 transition-transform duration-500">
                                          {lesson.icon}
                                      </div>
                                      {!lesson.available && (
                                          <div className="absolute inset-0 bg-slate-200/50 backdrop-blur-[1px] flex items-center justify-center">
                                              <Lock className="text-slate-500" size={32} />
                                          </div>
                                      )}
                                  </div>

                                  {/* Content */}
                                  <div className={`flex-1 ${viewMode === 'grid' ? 'p-6' : ''}`}>
                                      <div className="flex justify-between items-start mb-2">
                                          <span className={`text-[10px] font-extrabold uppercase tracking-wider ${lesson.textColor} bg-white/50 px-2 py-1 rounded-md`}>
                                              {lesson.subtitle}
                                          </span>
                                          {/* Last Visited Indicator */}
                                          {lastLessonId === lesson.id && (
                                              <span className="flex h-3 w-3 relative" title="آخر درس تمت زيارته">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                              </span>
                                          )}
                                      </div>

                                      <h4 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-indigo-700 transition-colors">
                                          {lesson.title}
                                      </h4>
                                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                          {lesson.description}
                                      </p>

                                      {/* Action Footer */}
                                      {viewMode === 'grid' && (
                                          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                                              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                                                  <BookOpenCheck size={14}/> درس تفاعلي
                                              </span>
                                              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${lesson.available ? 'bg-slate-100 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white' : 'bg-slate-100 text-slate-300'}`}>
                                                  <ChevronLeft size={18} />
                                              </div>
                                          </div>
                                      )}
                                  </div>
                              </div>
                          ))}
                      </div>
                  </section>
              )) : (
                  <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                      <p className="text-slate-400 text-xl font-bold">لا توجد وحدات متاحة لهذا الصف حالياً.</p>
                  </div>
              )}
          </div>
      </main>
    </div>
  );
};

export default CourseIndex;
