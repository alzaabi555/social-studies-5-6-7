
import React, { useState, useEffect } from 'react';
import { askAITutor } from '../services/geminiService';
import { Bot, Send, Loader2, X, WifiOff, Sparkles } from 'lucide-react';

const AITutor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    if (!isOnline) {
        setAnswer("عذراً، لا يوجد اتصال بالإنترنت. يرجى التحقق من الشبكة.");
        return;
    }

    setLoading(true);
    setAnswer(null);
    
    try {
      const response = await askAITutor(question);
      setAnswer(response);
    } catch (error) {
      setAnswer("حدث خطأ ما، يرجى المحاولة لاحقاً.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-tajawal">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className={`group p-4 rounded-full shadow-2xl flex items-center gap-3 transition-all hover:scale-105 hover:-translate-y-1 ${isOnline ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-slate-500 text-slate-100'}`}
        >
          <div className="relative">
             {isOnline ? <Bot size={28} /> : <WifiOff size={28} />}
             {isOnline && <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>}
          </div>
          <span className="font-bold hidden md:inline pr-1">
            {isOnline ? 'اسأل المعلم الذكي' : 'غير متصل'}
          </span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-80 md:w-96 rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-slide-up ring-4 ring-slate-100">
          {/* Header */}
          <div className={`${isOnline ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-slate-600'} p-4 flex justify-between items-center text-white`}>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  {isOnline ? <Bot size={20} /> : <WifiOff size={20} />}
              </div>
              <div>
                  <h3 className="font-bold text-sm">المعلم الذكي</h3>
                  <p className="text-[10px] opacity-80">{isOnline ? 'مدعوم بالذكاء الاصطناعي' : 'لا يوجد اتصال'}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Content Area */}
          <div className="p-4 min-h-[250px] max-h-[400px] overflow-y-auto bg-slate-50 scrollbar-thin">
             {answer ? (
               <div className="space-y-3">
                   <div className="flex justify-end">
                       <div className="bg-indigo-100 text-indigo-900 px-4 py-2 rounded-2xl rounded-tr-none text-sm max-w-[85%] shadow-sm">
                           {question}
                       </div>
                   </div>
                   <div className="flex justify-start gap-2">
                       <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                           <Bot size={16} className="text-white"/>
                       </div>
                       <div className="bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-2xl rounded-tl-none text-sm shadow-sm leading-relaxed whitespace-pre-wrap">
                           {answer}
                       </div>
                   </div>
               </div>
             ) : (
               <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 p-4">
                 {loading ? (
                     <div className="flex flex-col items-center gap-3">
                         <Loader2 className="animate-spin text-indigo-600" size={32} />
                         <p className="text-sm font-medium text-indigo-600 animate-pulse">جاري التفكير وصياغة الإجابة...</p>
                     </div>
                 ) : isOnline ? (
                    <div className="space-y-4">
                        <Sparkles className="text-yellow-400 mx-auto" size={48} />
                        <div>
                            <p className="font-bold text-slate-600 mb-1">مرحباً بك يا بطل!</p>
                            <p className="text-xs">أنا هنا لمساعدتك في فهم الدروس.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            <button onClick={() => setQuestion("ما الفرق بين الطقس والمناخ؟")} className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors">الطقس والمناخ</button>
                            <button onClick={() => setQuestion("حدثني عن الإمام الصلت بن مالك")} className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors">شخصيات تاريخية</button>
                        </div>
                    </div>
                 ) : (
                    <div className="flex flex-col items-center gap-2">
                        <WifiOff size={40} />
                        <p className="font-bold text-slate-600">أنت غير متصل</p>
                        <p className="text-xs">تحقق من اتصال الإنترنت لاستخدام المساعد الذكي.</p>
                    </div>
                 )}
               </div>
             )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleAsk} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={isOnline ? "اكتب سؤالك هنا..." : "غير متصل..."}
              disabled={!isOnline || loading}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none disabled:opacity-50 text-sm transition-all"
            />
            <button 
              type="submit" 
              disabled={loading || !question.trim() || !isOnline}
              className={`${isOnline && !loading ? 'bg-indigo-600 hover:bg-indigo-700 shadow-md' : 'bg-slate-200 text-slate-400'} text-white p-2.5 rounded-xl disabled:cursor-not-allowed transition-all`}
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} className={isOnline && !loading ? "translate-x-0.5" : ""} />}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AITutor;
