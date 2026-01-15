
import React, { useState, useEffect } from 'react';
import { 
    SIXTH_POPULATION_QUIZ, 
    SIXTH_STRUCTURE_QUIZ, 
    SIXTH_GROWTH_QUIZ, 
    SIXTH_DENSITY_QUIZ,
    UMAYYAD_QUIZ_QUESTIONS,
    OMAN_UMAYYAD_QUIZ_QUESTIONS,
    OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ,
    CIVIL_SOCIETY_QUIZ,
    COMMUNITY_PARTICIPATION_QUIZ
} from '../constants';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCcw, ArrowRight, Award, AlertTriangle, Trophy, Star } from 'lucide-react';

interface FinalExamG6Props {
    onBack: () => void;
}

const FinalExamG6: React.FC<FinalExamG6Props> = ({ onBack }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: number}>({}); // Using uniqueId string key
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
      // 1. Gather all questions from G6 units
      const allQuestions = [
          ...SIXTH_POPULATION_QUIZ.map(q => ({...q, uniqueId: `pop_${q.id}`})),
          ...SIXTH_STRUCTURE_QUIZ.map(q => ({...q, uniqueId: `str_${q.id}`})),
          ...SIXTH_GROWTH_QUIZ.map(q => ({...q, uniqueId: `gro_${q.id}`})),
          ...SIXTH_DENSITY_QUIZ.map(q => ({...q, uniqueId: `den_${q.id}`})),
          ...UMAYYAD_QUIZ_QUESTIONS.map(q => ({...q, uniqueId: `uma_${q.id}`})),
          ...OMAN_UMAYYAD_QUIZ_QUESTIONS.map(q => ({...q, uniqueId: `oma_${q.id}`})),
          ...OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ.map(q => ({...q, uniqueId: `ach_${q.id}`})),
          ...CIVIL_SOCIETY_QUIZ.map(q => ({...q, uniqueId: `civ_${q.id}`})),
          ...COMMUNITY_PARTICIPATION_QUIZ.map(q => ({...q, uniqueId: `com_${q.id}`}))
      ];
      
      // 2. Shuffle (Fisher-Yates)
      for (let i = allQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
      }

      // 3. Take first 25 questions for a comprehensive exam
      setQuestions(allQuestions.slice(0, 25)); 
  }, []);

  if (questions.length === 0) return <div className="min-h-screen flex items-center justify-center font-tajawal text-slate-500">جاري إعداد الاختبار...</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentUniqueId = (currentQuestion as any).uniqueId;

  const handleNext = () => {
      if (selectedOption !== null) {
          setAnswers(prev => ({ ...prev, [currentUniqueId]: selectedOption }));
          setSelectedOption(null);
          
          if (isLastQuestion) {
              setShowResult(true);
          } else {
              setCurrentQuestionIndex(prev => prev + 1);
          }
      }
  };

  const calculateScore = () => {
      let score = 0;
      questions.forEach(q => {
          const uid = (q as any).uniqueId;
          if (answers[uid] === q.correctIndex) score++;
      });
      return score;
  };

  if (showResult) {
      const score = calculateScore();
      const total = questions.length;
      const percentage = (score / total) * 100;
      let message = "";
      let colorClass = "";

      if (percentage >= 90) { message = "يا بطل! نتيجتك مذهلة 🌟🚀"; colorClass = "text-yellow-500"; }
      else if (percentage >= 75) { message = "ممتاز! مستوى رائع جداً 👍"; colorClass = "text-green-500"; }
      else if (percentage >= 50) { message = "جيد، استمر في المحاولة 💪"; colorClass = "text-blue-500"; }
      else { message = "تحتاج لمراجعة الدروس، لا تيأس! 📚"; colorClass = "text-red-500"; }

      return (
          <div className="min-h-screen bg-slate-900 py-10 px-6 font-tajawal text-right relative overflow-hidden" dir="rtl">
              {/* Confetti / Stars Background */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="absolute top-10 left-10 text-4xl animate-bounce">⭐</div>
                  <div className="absolute top-20 right-20 text-3xl animate-pulse">✨</div>
                  <div className="absolute bottom-10 left-1/4 text-5xl animate-spin-slow">🌟</div>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                  {/* Score Card */}
                  <div className="bg-white p-10 rounded-3xl shadow-2xl text-center animate-zoom-in border-4 border-white/10 ring-4 ring-white/20">
                      <div className="mb-6 flex justify-center">
                          {percentage >= 90 ? <Trophy size={100} className="text-yellow-400 drop-shadow-xl" /> : 
                           percentage >= 50 ? <Award size={100} className="text-blue-500" /> : 
                           <AlertTriangle size={100} className="text-red-500" />}
                      </div>
                      <h2 className={`text-3xl md:text-4xl font-black mb-4 ${colorClass}`}>{message}</h2>
                      <div className="text-7xl font-black text-slate-800 mb-2">{score} <span className="text-3xl text-slate-400">/ {total}</span></div>
                      <p className="text-slate-500 mb-8 text-lg font-bold">الدرجة النهائية</p>
                      
                      <div className="flex gap-4 justify-center">
                          <button onClick={onBack} className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-bold shadow-lg hover:bg-slate-700 flex items-center gap-2 transition-transform hover:scale-105">
                              <ArrowRight size={24} /> العودة
                          </button>
                      </div>
                  </div>

                  {/* Review Section */}
                  <div className="space-y-4 animate-slide-up">
                      <h3 className="text-2xl font-bold text-white pr-2">راجع إجاباتك:</h3>
                      {questions.map((q, index) => {
                          const uid = (q as any).uniqueId;
                          const userAnswer = answers[uid];
                          const isCorrect = userAnswer === q.correctIndex;

                          return (
                              <div key={index} className={`bg-white p-6 rounded-2xl border-r-8 shadow-lg ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                                  <div className="flex items-start gap-4 mb-4">
                                      <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-white font-bold ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                                          {index + 1}
                                      </div>
                                      <div className="flex-1">
                                          <h4 className="font-bold text-lg text-slate-800 mb-2">{q.question}</h4>
                                      </div>
                                  </div>

                                  <div className="grid md:grid-cols-2 gap-3 pr-12">
                                      {q.options.map((opt, optIndex) => {
                                          let style = "bg-slate-50 text-slate-500 border-slate-100"; 
                                          let icon: React.ReactNode | null = null;

                                          if (optIndex === q.correctIndex) {
                                              style = "bg-green-100 text-green-900 border-green-200 font-bold ring-2 ring-green-500 ring-opacity-50";
                                              icon = <CheckCircle size={18} className="text-green-600"/>;
                                          } else if (optIndex === userAnswer && !isCorrect) {
                                              style = "bg-red-100 text-red-900 border-red-200 font-bold line-through decoration-red-500";
                                              icon = <XCircle size={18} className="text-red-600"/>;
                                          }

                                          return (
                                              <div key={optIndex} className={`p-3 rounded-lg border flex items-center justify-between ${style}`}>
                                                  <span className="text-sm">{opt}</span>
                                                  {icon}
                                              </div>
                                          );
                                      })}
                                  </div>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-tajawal text-right" dir="rtl">
        {/* Exam Header */}
        <div className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center px-6 md:px-12 sticky top-0 z-20">
            <button onClick={onBack} className="text-slate-300 hover:text-white flex items-center gap-2 font-bold">
                <ArrowRight size={20} /> إنهاء
            </button>
            <div className="text-center">
                <h1 className="text-xl font-black text-yellow-400 flex items-center gap-2">
                    <Star size={20}/> النهائي (الصف السادس)
                </h1>
            </div>
            <div className="text-sm font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
                سؤال {currentQuestionIndex + 1} من {questions.length}
            </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-3 sticky top-[72px] z-20">
            <div 
                className="bg-yellow-500 h-3 transition-all duration-500 ease-out" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
        </div>

        {/* Question Area */}
        <div className="flex-1 flex items-center justify-center p-6 bg-slate-100">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up border border-slate-200">
                <div className="p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 leading-relaxed text-center">
                        {currentQuestion.question}
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedOption(index)}
                                className={`w-full p-6 rounded-2xl border-2 text-right transition-all flex items-center justify-between group hover:shadow-md ${
                                    selectedOption === index 
                                    ? 'border-yellow-500 bg-yellow-50 text-yellow-900 ring-2 ring-yellow-200' 
                                    : 'border-slate-200 hover:border-yellow-300 hover:bg-slate-50 text-slate-700'
                                }`}
                            >
                                <span className="font-bold text-lg">{option}</span>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                    selectedOption === index ? 'border-yellow-600 bg-yellow-600' : 'border-slate-300'
                                }`}>
                                    {selectedOption === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 p-6 border-t border-slate-200 flex justify-center">
                    <button 
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className={`w-full md:w-auto px-12 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-all ${
                            selectedOption !== null 
                            ? 'bg-slate-900 text-white hover:bg-black hover:translate-x-1' 
                            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        }`}
                    >
                        {isLastQuestion ? 'تسليم الإجابات' : 'السؤال التالي'}
                        <ArrowRight className="rotate-180" size={24} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FinalExamG6;
