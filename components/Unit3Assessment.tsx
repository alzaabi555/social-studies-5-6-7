import React, { useState } from 'react';
import { UNIT_3_ASSESSMENT_QUESTIONS } from '../constants';
import { CheckCircle, XCircle, RefreshCcw, ArrowRight, Award, AlertCircle } from 'lucide-react';

interface Unit3AssessmentProps {
    onBack: () => void;
}

const Unit3Assessment: React.FC<Unit3AssessmentProps> = ({ onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = UNIT_3_ASSESSMENT_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === UNIT_3_ASSESSMENT_QUESTIONS.length - 1;

  const handleNext = () => {
      if (selectedOption !== null) {
          setAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedOption }));
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
      UNIT_3_ASSESSMENT_QUESTIONS.forEach(q => {
          if (answers[q.id] === q.correctIndex) score++;
      });
      return score;
  };

  const resetQuiz = () => {
      setAnswers({});
      setCurrentQuestionIndex(0);
      setShowResult(false);
      setSelectedOption(null);
  };

  if (showResult) {
      const score = calculateScore();
      const total = UNIT_3_ASSESSMENT_QUESTIONS.length;
      const percentage = (score / total) * 100;
      let message = "";
      let colorClass = "";

      if (percentage >= 90) { message = "ممتاز! أنت مواطن واعي 🇴🇲"; colorClass = "text-green-600"; }
      else if (percentage >= 75) { message = "جيد جداً! ثقافتك الوطنية عالية 👍"; colorClass = "text-blue-600"; }
      else if (percentage >= 50) { message = "جيد، ولكن راجع معلوماتك الوطنية 🙂"; colorClass = "text-orange-600"; }
      else { message = "حاول مرة أخرى، النظام الأساسي مهم جداً! 💪"; colorClass = "text-red-600"; }

      return (
          <div className="min-h-screen bg-indigo-50 py-10 px-6 font-tajawal text-right" dir="rtl">
              <div className="max-w-3xl mx-auto space-y-8">
                  {/* Score Card */}
                  <div className="bg-white p-8 rounded-3xl shadow-2xl text-center animate-fade-in">
                      <div className="mb-6 flex justify-center">
                          {percentage >= 75 ? <Award size={80} className="text-yellow-400" /> : <AlertCircle size={80} className="text-slate-400" />}
                      </div>
                      <h2 className={`text-3xl font-black mb-4 ${colorClass}`}>{message}</h2>
                      <div className="text-6xl font-black text-slate-800 mb-2">{score} / {total}</div>
                      <p className="text-slate-500 mb-8">الدرجة النهائية</p>
                      
                      <div className="flex gap-4 justify-center">
                          <button 
                              onClick={resetQuiz}
                              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 flex items-center gap-2 transition-transform hover:scale-105"
                          >
                              <RefreshCcw size={20} /> إعادة الاختبار
                          </button>
                          <button 
                              onClick={onBack}
                              className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 flex items-center gap-2"
                          >
                              <ArrowRight size={20} /> العودة للدروس
                          </button>
                      </div>
                  </div>

                  {/* Review Section */}
                  <div className="space-y-4 animate-slide-up">
                      <h3 className="text-2xl font-bold text-slate-800 pr-2">مراجعة الإجابات:</h3>
                      {UNIT_3_ASSESSMENT_QUESTIONS.map((q, index) => {
                          const userAnswer = answers[q.id];
                          const isCorrect = userAnswer === q.correctIndex;

                          return (
                              <div key={q.id} className={`bg-white p-6 rounded-2xl border-r-8 shadow-sm ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                                  <div className="flex items-start gap-4 mb-4">
                                      <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-white font-bold ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                                          {index + 1}
                                      </div>
                                      <div className="flex-1">
                                          <h4 className="font-bold text-lg text-slate-800 mb-2">{q.question}</h4>
                                          {q.visualComponent && <div className="mb-4 opacity-75 scale-90 origin-top-right">{q.visualComponent}</div>}
                                      </div>
                                  </div>

                                  <div className="space-y-2 pr-12">
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
                                                  <span>{opt}</span>
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
    <div className="min-h-screen bg-slate-100 flex flex-col font-tajawal text-right" dir="rtl">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm flex justify-between items-center px-6 md:px-12">
            <button onClick={onBack} className="text-slate-500 hover:text-slate-700 flex items-center gap-2 font-bold">
                <ArrowRight size={20} /> خروج
            </button>
            <h1 className="text-xl font-black text-indigo-800">اختبار الوحدة الثالثة</h1>
            <div className="text-sm font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                سؤال {currentQuestionIndex + 1} من {UNIT_3_ASSESSMENT_QUESTIONS.length}
            </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-2">
            <div 
                className="bg-indigo-600 h-2 transition-all duration-500" 
                style={{ width: `${((currentQuestionIndex + 1) / UNIT_3_ASSESSMENT_QUESTIONS.length) * 100}%` }}
            ></div>
        </div>

        {/* Question Area */}
        <div className="flex-1 flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden animate-slide-up">
                <div className="p-8">
                    {/* Visual Component (Map/Image) */}
                    {currentQuestion.visualComponent && (
                        <div className="mb-6 flex justify-center">
                            {currentQuestion.visualComponent}
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
                        {currentQuestion.question}
                    </h2>

                    <div className="grid gap-4">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedOption(index)}
                                className={`w-full p-4 rounded-xl border-2 text-right transition-all flex items-center justify-between group ${
                                    selectedOption === index 
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-md' 
                                    : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50 text-slate-700'
                                }`}
                            >
                                <span className="font-bold text-lg">{option}</span>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                    selectedOption === index ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
                                }`}>
                                    {selectedOption === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-end">
                    <button 
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className={`px-8 py-3 rounded-xl font-bold text-lg shadow-lg flex items-center gap-2 transition-all ${
                            selectedOption !== null 
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:translate-x-1' 
                            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        }`}
                    >
                        {isLastQuestion ? 'إنهاء الاختبار' : 'التالي'}
                        <ArrowRight className="rotate-180" size={20} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Unit3Assessment;