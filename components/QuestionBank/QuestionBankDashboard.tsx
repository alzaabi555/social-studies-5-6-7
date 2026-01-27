import React, { useState } from 'react';
import { UNITS, UNITS_SIXTH, UNITS_FIFTH } from '../../constants';
import { Lesson, Unit } from '../../types';
import { 
  BookOpen, ChevronRight, LayoutGrid, 
  GraduationCap, Layers, Star, Circle, ArrowRight
} from 'lucide-react';

interface Props {
  onBack: () => void;
  onStartQuiz: (lesson: Lesson, grade: number) => void;
}

const QuestionBankDashboard: React.FC<Props> = ({ onBack, onStartQuiz }) => {
  // الحالة هنا تدير "المستوى الحالي"
  // null = نحن في شاشة اختيار الصف
  // number = نحن داخل صف محدد (5 أو 6 أو 7)
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  // دالة لجلب بيانات الصف المختار فقط
  const getGradeData = () => {
    switch (selectedGrade) {
      case 5: return { units: UNITS_FIFTH, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', icon: 'bg-amber-500' };
      case 6: return { units: UNITS_SIXTH, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'bg-emerald-500' };
      case 7: return { units: UNITS, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', icon: 'bg-purple-500' };
      default: return null;
    }
  };

  const currentData = getGradeData();

  // --- VIEW 1: شاشة اختيار الصف (Grade Selection) ---
  if (!selectedGrade) {
    return (
      <div className="min-h-screen bg-slate-50 font-tajawal text-right dir-rtl" dir="rtl">
        <header className="bg-white p-6 shadow-sm border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <button 
              onClick={onBack} 
              className="flex items-center gap-2 text-slate-500 hover:text-rose-600 font-bold transition-colors mb-4"
            >
              <ArrowRight size={20}/> العودة للرئيسية
            </button>
            <h1 className="text-3xl font-black text-slate-800 flex items-center gap-3">
              <LayoutGrid className="text-indigo-600" size={32} />
              بنك الأسئلة الشامل
            </h1>
            <p className="text-slate-500 mt-2 text-lg">اختر الصف الدراسي لاستعراض الاختبارات المتاحة</p>
          </div>
        </header>

        <main className="max-w-5xl mx-auto p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* بطاقة الصف الخامس */}
            <button 
              onClick={() => setSelectedGrade(5)}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-100 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 text-right"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-50 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 text-3xl font-black group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  5
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">الصف الخامس</h2>
                <p className="text-slate-500">الأرض والموارد، التاريخ الإسلامي، الحقوق.</p>
                <div className="mt-6 flex items-center text-amber-600 font-bold">
                  تصفح الأسئلة <ChevronRight className="mr-auto"/>
                </div>
              </div>
            </button>

            {/* بطاقة الصف السادس */}
            <button 
              onClick={() => setSelectedGrade(6)}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-100 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300 text-right"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-50 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-3xl font-black group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  6
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">الصف السادس</h2>
                <p className="text-slate-500">السكان، الدولة الأموية، المجتمع المدني.</p>
                <div className="mt-6 flex items-center text-emerald-600 font-bold">
                  تصفح الأسئلة <ChevronRight className="mr-auto"/>
                </div>
              </div>
            </button>

            {/* بطاقة الصف السابع */}
            <button 
              onClick={() => setSelectedGrade(7)}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-100 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 text-right"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-50 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-3xl font-black group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  7
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">الصف السابع</h2>
                <p className="text-slate-500">الغلاف الجوي، الدولة العباسية، مؤسسات الدولة.</p>
                <div className="mt-6 flex items-center text-purple-600 font-bold">
                  تصفح الأسئلة <ChevronRight className="mr-auto"/>
                </div>
              </div>
            </button>
          </div>
        </main>
      </div>
    );
  }

  // --- VIEW 2: قائمة الدروس للصف المختار (Lessons List) ---
  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right dir-rtl" dir="rtl">
      {/* Header للصف المختار */}
      <header className="bg-white p-4 shadow-sm border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => setSelectedGrade(null)} // يعيدنا لاختيار الصف وليس الرئيسية
            className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors"
          >
            <ArrowRight size={20}/> تغيير الصف
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-black text-slate-800">بنك أسئلة الصف {selectedGrade}</h1>
            <span className={`px-3 py-1 rounded-lg text-sm font-bold text-white ${currentData?.icon}`}>
              {selectedGrade === 5 ? 'الخامس' : selectedGrade === 6 ? 'السادس' : 'السابع'}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-8">
        {currentData?.units.map((unit: Unit, unitIndex: number) => (
          <div key={unit.id} className="animate-fade-in-up" style={{ animationDelay: `${unitIndex * 100}ms` }}>
            {/* عنوان الوحدة */}
            <div className={`flex items-center gap-3 mb-4 pr-2 border-r-4 ${currentData.border.replace('border-', 'border-l-')}`}>
              <div className={`p-2 rounded-lg ${currentData.bg} ${currentData.color}`}>
                <Layers size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">{unit.title}</h2>
                <p className="text-sm text-slate-500">{unit.description}</p>
              </div>
            </div>

            {/* شبكة الدروس داخل الوحدة */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {unit.lessons.map((lesson) => (
                <div 
                  key={lesson.id} 
                  className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all group flex flex-col justify-between h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors`}>
                      <Star size={20} fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity absolute" />
                      <Circle size={20} className="group-hover:opacity-0 transition-opacity" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-base leading-tight mb-1">{lesson.title}</h3>
                      <p className="text-xs text-slate-500">{lesson.subtitle}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => onStartQuiz(lesson, selectedGrade)}
                    className={`w-full py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${currentData.bg} ${currentData.color} hover:brightness-95`}
                  >
                    <BookOpen size={16} />
                    بدء الاختبار
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default QuestionBankDashboard;
