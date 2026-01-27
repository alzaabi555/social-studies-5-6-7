import React, { useState, useEffect } from 'react';
import { Lesson, QuizQuestion } from '../types';
import { getQuestions } from '../data/questionBank';
import { 
  Clock, CheckCircle, XCircle, ArrowRight, RefreshCcw, 
  Trophy, AlertCircle, Home, Star, ChevronLeft 
} from 'lucide-react';

interface Props {
  lesson: Lesson;
  grade: number;
  onExit: () => void;
}

const QuestionBankSession: React.FC<Props> = ({ lesson, grade, onExit }) => {
  // --- States ---
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Timer State (Optional: 30 seconds per question or global)
  // Here we implement a simple counter for the total time taken
  const [timeElapsed, setTimeElapsed] = useState(0);

  // --- Effects ---
  useEffect(() => {
    // Load questions based on lesson ID
    const loadedQuestions = getQuestions(lesson.id);
    setQuestions(loadedQuestions);
  }, [lesson.id]);

  useEffect(() => {
    let timer: any;
    if (!quizCompleted) {
      timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizCompleted]);

  // --- Helpers ---
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered) return; // Prevent changing answer
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === questions[currentQuestionIndex].correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setTimeElapsed(0);
    setQuizCompleted(false);
  };

  // --- Render: Loading State ---
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white font-tajawal">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
        <p>جاري تحميل الأسئلة...</p>
        <button onClick={onExit} className="mt-4 text-slate-400 hover:text-white text-sm">العودة</button>
      </div>
    );
  }

  // --- Render: Result Screen ---
  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";
    let colorClass = "";
    
    if (percentage >= 90) { message = "ممتاز يا بطل! 🌟"; colorClass = "text-emerald-400"; }
    else if (percentage >= 75) { message = "جيد جداً! أحسنت 👍"; colorClass = "text-indigo-400"; }
    else if (percentage >= 50) { message = "جيد، حاول مرة أخرى 💪"; colorClass = "text-amber-400"; }
    else { message = "تحتاج لمراجعة الدرس 📚"; colorClass = "text-rose-400"; }

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center font-tajawal p-4 relative overflow-hidden" dir="rtl">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
        
        <div className="relative z-10 w-full max-w-lg bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 text-center shadow-2xl animate-fade-in-up">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mb-6">
            <Trophy size={48} className="text-white" />
          </div>
          
          <h2 className={`text-3xl font-black mb-2 ${colorClass}`}>{message}</h2>
          <p className="text-slate-400 mb-8">لقد أنهيت اختبار درس "{lesson.title}"</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700">
              <span className="block text-slate-500 text-sm mb-1">النتيجة النهائية</span>
              <span className={`text-3xl font-black ${colorClass}`}>{percentage}%</span>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700">
              <span className="block text-slate-500 text-sm mb-1">الإجابات الصحيحة</span>
              <span className="text-3xl font-black text-white">{score}<span className="text-sm text-slate-500 font-normal">/{questions.length}</span></span>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 col-span-2 flex items-center justify-center gap-3">
              <Clock size={20} className="text-indigo-400"/>
              <span className="text-xl font-bold text-white">{formatTime(timeElapsed)}</span>
              <span className="text-slate-500 text-sm">الوقت المستغرق</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleRestart}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <RefreshCcw size={20} />
              إعادة الاختبار
            </button>
            <button 
              onClick={onExit}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <Home size={20} />
              العودة لبنك الأسئلة
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Render: Quiz Active ---
  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-slate-950 font-tajawal text-right flex flex-col" dir="rtl">
      {/* 1. Header & Progress */}
      <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={onExit} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
            <RefreshCcw size={20} className="rotate-45" /> {/* Icon to indicate 'quit' */}
          </button>
          
          <div className="flex flex-col items-center">
            <span className="text-slate-300 font-bold text-sm">{lesson.title}</span>
            <span className="text-slate-500 text-xs">سؤال {currentQuestionIndex + 1} من {questions.length}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
            <Clock size={16} className="text-indigo-400" />
            <span className="text-slate-300 font-mono text-sm">{formatTime(timeElapsed)}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 w-full bg-slate-800">
          <div 
            className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 max-w-4xl mx-auto w-full">
        
        {/* Question Card */}
        <div className="w-full bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 md:p-10 shadow-2xl mb-6 relative overflow-hidden group">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
          
          <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed relative z-10">
            {currentQ.question}
          </h2>
        </div>

        {/* Options Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQ.options.map((option, index) => {
            // Determine button style based on state
            let buttonStyle = "bg-slate-800 border-slate-700 text-slate-300 hover:border-indigo-500 hover:bg-slate-750";
            let icon = <div className="w-6 h-6 rounded-full border-2 border-slate-600 flex items-center justify-center text-xs font-bold text-slate-500">{index + 1}</div>;

            if (isAnswered) {
              if (index === currentQ.correctIndex) {
                // Correct Answer Style
                buttonStyle = "bg-emerald-900/30 border-emerald-500/50 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                icon = <CheckCircle size={24} className="text-emerald-400" />;
              } else if (index === selectedOption) {
                // Wrong Selected Answer Style
                buttonStyle = "bg-rose-900/30 border-rose-500/50 text-rose-100";
                icon = <XCircle size={24} className="text-rose-400" />;
              } else {
                // Other unselected options
                buttonStyle = "bg-slate-900/50 border-slate-800 text-slate-600 opacity-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={`
                  relative group p-4 rounded-2xl border-2 text-right transition-all duration-300 flex items-center justify-between
                  ${buttonStyle}
                  ${!isAnswered && "hover:shadow-lg hover:-translate-y-1"}
                `}
              >
                <span className="font-bold text-lg">{option}</span>
                <span className="mr-3 flex-shrink-0">{icon}</span>
              </button>
            );
          })}
        </div>

      </main>

      {/* 3. Bottom Action Bar (Only shows after answering) */}
      <div className={`fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-800 p-4 transition-transform duration-300 transform ${isAnswered ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
             {selectedOption === currentQ.correctIndex ? (
               <div className="flex items-center gap-2 text-emerald-400 font-bold animate-pulse">
                 <CheckCircle /> <span>إجابة صحيحة! أحسنت</span>
               </div>
             ) : (
                <div className="flex items-center gap-2 text-rose-400 font-bold">
                 <XCircle /> <span>إجابة خاطئة، الصحيح هو الخيار الملون بالأخضر</span>
               </div>
             )}
          </div>
          
          <button 
            onClick={handleNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-indigo-600/20"
          >
            {currentQuestionIndex === questions.length - 1 ? 'عرض النتيجة' : 'السؤال التالي'}
            <ArrowRight size={20} className="rotate-180" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default QuestionBankSession;
