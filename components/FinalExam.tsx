import React, { useState, useEffect } from 'react';
import { UNIT_1_ASSESSMENT_QUESTIONS, UNIT_2_ASSESSMENT_QUESTIONS, UNIT_3_ASSESSMENT_QUESTIONS } from '../constants';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCcw, ArrowRight, Award, AlertTriangle, Trophy } from 'lucide-react';

interface FinalExamProps {
    onBack: () => void;
}

const FinalExam: React.FC<FinalExamProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: number}>({}); // Using string key combining unit+id
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
      // Combine and shuffle questions
      const allQuestions = [
          ...UNIT_1_ASSESSMENT_QUESTIONS.map(q => ({...q, uniqueId: `u1_${q.id}`})),
          ...UNIT_2_ASSESSMENT_QUESTIONS.map(q => ({...q, uniqueId: `u2_${q.id}`})),
          ...UNIT_3_ASSESSMENT_QUESTIONS.map(q => ({...q, uniqueId: `u3_${q.id}`}))
      ];
      
      // Shuffle array (Fisher-Yates)
      for (let i = allQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
      }

      // Updated to take 30 questions to ensure broader coverage of the new comprehensive pool
      setQuestions(allQuestions.slice(0, 30)); 
  }, []);

  if (questions.length === 0) return <div className="min-h-screen flex items-center justify-center">جاري تحميل الاختبار...</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Type assertion for uniqueId which we added dynamically
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

      if (percentage >= 90) { message = "مذهل! أنت عبقري وتستحق العلامة الكاملة 🏆"; colorClass = "text-yellow-600"; }
      else if (percentage >= 75) { message = "ممتاز! مستوى رائع جداً 🌟"; colorClass = "text-green-600"; }
      else if (percentage >= 50) { message = "جيد! لقد اجتزت الاختبار بنجاح 👍"; colorClass = "text-blue-600"; }
      else { message = "للأسف! تحتاج لمراجعة المنهج مرة أخرى 📚"; colorClass = "text-red-600"; }

      return (
          <div className="min-h-screen bg-slate-900 py-10 px-6 font-tajawal text-right relative" dir="rtl">
              {/* Confetti Effect if passed high - Local Image */}
              {percentage >= 75 && <div className="absolute inset-0 pointer-events-none bg-[url('/stardust_pattern.png')] opacity-20 animate-pulse"></div>}
              
              <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                  {/* Score Card */}
                  <div className="bg-white p-10 rounded-3xl shadow-2xl text-center animate-zoom-in">
                      <div className="mb-6 flex justify-center">
                          {percentage >= 90 ? <Trophy size={100} className="text-yellow-500 drop-shadow-lg" /> : 
                           percentage >= 50 ? <Award size={100} className="text-blue-500" /> : 
                           <AlertTriangle size={100} className="text-red-500" />}
                      </div>
                      <h2 className={`text-4xl font-black mb-4 ${colorClass}`}>{message}</h2>
                      <div className="text-7xl font-black text-slate-800 mb-2">{score} <span className="text-3xl text-slate-400">/ {total}</span></div>
                      <p className="text-slate-500 mb-8 text-lg font-bold">النتيجة النهائية</p>
                      
                      <div className="flex gap-4 justify-center">
                          <button 
                              onClick={onBack}
                              className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-bold shadow-lg hover:bg-slate-700 flex items-center gap-2 transition-transform hover:scale-105"
                          >
                              <ArrowRight size={24} /> العودة للصفحة الرئيسية
                          </button>
                      </div>
                  </div>

                  {/* Review Section */}
                  <div className="space-y-4 animate-slide-up">
                      <h3 className="text-2xl font-bold text-white pr-2">مراجعة الأخطاء والإجابات:</h3>
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
                                          {q.visualComponent && <div className="mb-4 opacity-75 scale-90 origin-top-right">{q.visualComponent}</div>}
                                      </div>
                                  </div>

                                  <div className="grid md:grid-cols-2 gap-3 pr-12">
                                      {q.options.map((opt, optIndex) => {
                                          let style = "bg-slate-50 text-slate-500 border-slate-100"; 
                                          let icon = null;

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
        <div className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center px-6 md:px-12">
            <button onClick={onBack} className="text-slate-300 hover:text-white flex items-center gap-2 font-bold">
                <ArrowRight size={20} /> إنهاء الاختبار
            </button>
            <div className="text-center">
                <h1 className="text-xl font-black text-yellow-400 flex items-center gap-2">
                    <Trophy size={20}/> الاختبار النهائي الشامل
                </h1>
            </div>
            <div className="text-sm font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
                سؤال {currentQuestionIndex + 1} من {questions.length}
            </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-3">
            <div 
                className="bg-yellow-500 h-3 transition-all duration-500 ease-out" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
        </div>

        {/* Question Area */}
        <div className="flex-1 flex items-center justify-center p-6 bg-slate-100">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up border border-slate-200">
                <div className="p-10">
                    {/* Visual Component (Map/Image) */}
                    {currentQuestion.visualComponent && (
                        <div className="mb-8 flex justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            {currentQuestion.visualComponent}
                        </div>
                    )}

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 leading-relaxed">
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

                <div className="bg-slate-50 p-6 border-t border-slate-200 flex justify-end">
                    <button 
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className={`px-10 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-3 transition-all ${
                            selectedOption !== null 
                            ? 'bg-slate-900 text-white hover:bg-black hover:translate-x-1' 
                            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        }`}
                    >
                        {isLastQuestion ? 'إنهاء وتسليم' : 'السؤال التالي'}
                        <ArrowRight className="rotate-180" size={24} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FinalExam;