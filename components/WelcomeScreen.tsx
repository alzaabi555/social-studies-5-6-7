
import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Library, 
  Globe, 
  Star, 
  BookOpen, 
  FileQuestion, 
  User, 
  School, 
  Phone, 
  Settings, 
  Save, 
  X,
  Sparkles,
  ChevronLeft
} from 'lucide-react';

interface WelcomeScreenProps {
  onSelectGrade: (grade: 5 | 6 | 7) => void;
  onOpenQuestionBank: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectGrade, onOpenQuestionBank }) => {
  // State for User Profile
  const [teacherName, setTeacherName] = useState('أ. محمد درويش');
  const [schoolName, setSchoolName] = useState('مدرسة الإبداع للتعليم الأساسي');
  const [phoneNumber, setPhoneNumber] = useState('90000000');
  const [isEditing, setIsEditing] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const savedName = localStorage.getItem('teacherName');
    const savedSchool = localStorage.getItem('schoolName');
    const savedPhone = localStorage.getItem('phoneNumber');

    if (savedName) setTeacherName(savedName);
    if (savedSchool) setSchoolName(savedSchool);
    if (savedPhone) setPhoneNumber(savedPhone);
  }, []);

  const handleSave = () => {
    localStorage.setItem('teacherName', teacherName);
    localStorage.setItem('schoolName', schoolName);
    localStorage.setItem('phoneNumber', phoneNumber);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-hidden font-tajawal text-right flex flex-col items-center p-6" dir="rtl">
      
      {/* --- Background Effects --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-12 pt-8">
        
        {/* --- Header & Profile Section --- */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 animate-fade-in">
            
            {/* Title Block */}
            <div className="text-center lg:text-right">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 mb-4 shadow-lg">
                    <Sparkles className="text-yellow-400 w-5 h-5" />
                    <span className="text-indigo-200 font-bold text-sm tracking-wide">الإصدار التفاعلي 2.0</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-2xl tracking-tight">
                    الحقيبة <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-400 to-cyan-400">التفاعلية</span>
                </h1>
                <p className="text-xl text-slate-400 font-medium">لمادة الدراسات الاجتماعية - سلطنة عمان</p>
            </div>

            {/* Profile Card (Glassmorphism) */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl w-full max-w-md md:min-w-[350px] shadow-2xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                            <User className="text-white w-8 h-8" />
                        </div>
                        <button 
                            onClick={() => setIsEditing(!isEditing)}
                            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            <Settings size={20} />
                        </button>
                    </div>

                    {!isEditing ? (
                        <div className="space-y-3">
                            <div>
                                <p className="text-xs text-slate-400 font-bold mb-1">المعلم الفاضل</p>
                                <h3 className="text-2xl font-black text-white">{teacherName}</h3>
                            </div>
                            <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <School size={16} className="text-indigo-400"/>
                                    <span className="text-sm font-medium">{schoolName}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Phone size={16} className="text-emerald-400"/>
                                    <span className="text-sm font-medium dir-ltr font-mono">{phoneNumber}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-3 animate-fade-in">
                            <div>
                                <label className="text-xs text-indigo-300 font-bold block mb-1">الاسم</label>
                                <input type="text" value={teacherName} onChange={(e) => setTeacherName(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-indigo-500 outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-indigo-300 font-bold block mb-1">المدرسة</label>
                                <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-indigo-500 outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-indigo-300 font-bold block mb-1">رقم الهاتف</label>
                                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-indigo-500 outline-none dir-ltr" />
                            </div>
                            <div className="flex gap-2 pt-2">
                                <button onClick={handleSave} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2"><Save size={14}/> حفظ</button>
                                <button onClick={() => setIsEditing(false)} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2"><X size={14}/> إلغاء</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* --- Main Navigation Grid --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up mt-8">
            
            {/* Grade 5 */}
            <button onClick={() => onSelectGrade(5)} className="group relative h-64 rounded-[2.5rem] p-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-400 to-amber-600 rounded-[2.5rem] opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full bg-[#18181b] rounded-[2.3rem] p-6 flex flex-col items-center justify-center overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-amber-500/30 transition-colors"></div>
                    
                    <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Globe className="text-amber-400 w-10 h-10" />
                    </div>
                    
                    <h2 className="text-2xl font-black text-white mb-1">الصف الخامس</h2>
                    <p className="text-amber-200/60 text-xs font-medium">الموارد - النبوة - الحقوق</p>
                    
                    <div className="mt-6 flex items-center gap-2 text-amber-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                        <span>دخول</span> <ChevronLeft size={16} />
                    </div>
                </div>
            </button>

            {/* Grade 6 */}
            <button onClick={() => onSelectGrade(6)} className="group relative h-64 rounded-[2.5rem] p-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-[2.5rem] opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full bg-[#18181b] rounded-[2.3rem] p-6 flex flex-col items-center justify-center overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-emerald-500/30 transition-colors"></div>
                    
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Star className="text-emerald-400 w-10 h-10" />
                    </div>
                    
                    <h2 className="text-2xl font-black text-white mb-1">الصف السادس</h2>
                    <p className="text-emerald-200/60 text-xs font-medium">السكان - الأمويون - المجتمع</p>

                    <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                        <span>دخول</span> <ChevronLeft size={16} />
                    </div>
                </div>
            </button>

            {/* Grade 7 */}
            <button onClick={() => onSelectGrade(7)} className="group relative h-64 rounded-[2.5rem] p-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-purple-600 rounded-[2.5rem] opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full bg-[#18181b] rounded-[2.3rem] p-6 flex flex-col items-center justify-center overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-purple-500/30 transition-colors"></div>
                    
                    <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                        <GraduationCap className="text-purple-400 w-10 h-10" />
                    </div>
                    
                    <h2 className="text-2xl font-black text-white mb-1">الصف السابع</h2>
                    <p className="text-purple-200/60 text-xs font-medium">الطقس - العباسيون - الدولة</p>

                    <div className="mt-6 flex items-center gap-2 text-purple-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                        <span>دخول</span> <ChevronLeft size={16} />
                    </div>
                </div>
            </button>

            {/* Question Bank */}
            <button onClick={onOpenQuestionBank} className="group relative h-64 rounded-[2.5rem] p-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(236,72,153,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500 to-rose-600 rounded-[2.5rem] opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full bg-[#18181b] rounded-[2.3rem] p-6 flex flex-col items-center justify-center overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-pink-500/30 transition-colors"></div>
                    
                    <div className="w-20 h-20 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/20 group-hover:scale-110 transition-transform duration-500">
                        <FileQuestion className="text-pink-400 w-10 h-10" />
                    </div>
                    
                    <h2 className="text-2xl font-black text-white mb-1">بنك الأسئلة</h2>
                    <p className="text-pink-200/60 text-xs font-medium">اختبارات شاملة ومراجعة</p>

                    <div className="mt-6 flex items-center gap-2 text-pink-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                        <span>ابدأ</span> <ChevronLeft size={16} />
                    </div>
                </div>
            </button>

        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-slate-500 text-sm animate-fade-in">
            <p className="opacity-50">تم التصميم والتطوير لأغراض تعليمية © 2024</p>
        </div>

      </div>
    </div>
  );
};

export default WelcomeScreen;
