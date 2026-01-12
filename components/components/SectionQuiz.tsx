import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCcw } from 'lucide-react';

interface SectionQuizProps {
    questions?: QuizQuestion[];
}

const SectionQuiz: React.FC<SectionQuizProps> = ({ questions = QUIZ_QUESTIONS }) => {
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [submitted, setSubmitted] = useState(false);

  // Reset state if questions change (e.g., switching lessons)
  useEffect(() => {
      setAnswers({});
      setSubmitted(false);
  }, [questions]);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctIndex) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">اختبر معلوماتك</h2>
      
      <div className="space-y-6">
        {questions.map((q, index) => {
            const isAnswered = answers[q.id] !== undefined;
            const isCorrect = answers[q.id] === q.correctIndex;

            return (
                <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex gap-4 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                        </span>
                        <h3 className="text-lg font-bold text-slate-800">{q.question}</h3>
                    </div>

                    <div className="space-y-2 pr-12">
                        {q.options.map((opt, optIndex) => {
                            let styleClass = "border-slate-200 hover:bg-slate-50";
                            
                            if (submitted) {
                                if (optIndex === q.correctIndex) {
                                    styleClass = "bg-green-100 border-green-500 text-green-900 font-bold";
                                } else if (answers[q.id] === optIndex && optIndex !== q.correctIndex) {
                                    styleClass = "bg-red-100 border-red-500 text-red-900";
                                } else {
                                    styleClass = "opacity-50 border-slate-100";
                                }
                            } else if (answers[q.id] === optIndex) {
                                styleClass = "bg-sky-100 border-sky-500 text-sky-900";
                            }

                            return (
                                <button
                                    key={optIndex}
                                    onClick={() => handleSelect(q.id, optIndex)}
                                    className={`w-full text-right p-3 rounded-xl border-2 transition-all duration-200 ${styleClass}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{opt}</span>
                                        {submitted && optIndex === q.correctIndex && <CheckCircle className="text-green-600" size={20}/>}
                                        {submitted && answers[q.id] === optIndex && optIndex !== q.correctIndex && <XCircle className="text-red-600" size={20}/>}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center">
        {!submitted ? (
            <button
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length !== questions.length}
                className="px-8 py-3 bg-sky-600 text-white font-bold rounded-xl shadow-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
                عرض النتيجة
            </button>
        ) : (
            <div className="text-center animate-fade-in">
                <div className="text-4xl font-black text-slate-800 mb-2">
                    {calculateScore()} / {questions.length}
                </div>
                <p className="text-slate-500 mb-6">نتيجتك النهائية</p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 flex items-center gap-2 mx-auto"
                >
                    <RefreshCcw size={18}/>
                    إعادة الاختبار
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default SectionQuiz;