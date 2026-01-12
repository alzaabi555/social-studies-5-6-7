import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { Mic, MicOff, Volume2, XCircle, Activity, Loader2 } from 'lucide-react';
// تأكد أن المسار صحيح لملف audioUtils
import { createPCMBlob, decodeAudioData, base64ToUint8Array } from '../services/audioUtils';

interface LiveVoiceTutorProps {
  onClose: () => void;
}

const LiveVoiceTutor: React.FC<LiveVoiceTutorProps> = ({ onClose }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const processorRef = useRef<ScriptProcessorNode | null>(null);

  const cleanup = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    sourcesRef.current.clear();
    sessionRef.current = null;
    
    setIsConnected(false);
    setIsSpeaking(false);
  };

  useEffect(() => {
    startSession();
    return () => cleanup();
  }, []);

  const startSession = async () => {
    setError(null);
    try {
      // استخدام (as any) لتجاوز خطأ TypeScript في الوصول للمتغيرات البيئية
      const apiKey = (import.meta as any).env.VITE_GOOGLE_API_KEY;
      
      if (!apiKey) throw new Error("مفتاح API غير متوفر في ملف .env");

      const ai = new GoogleGenAI({ apiKey });
      
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      inputAudioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      outputAudioContextRef.current = new AudioContextClass({ sampleRate: 24000 });
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const model = 'gemini-2.0-flash-exp'; 
      
      const config = {
        model: model,
        generationConfig: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
        },
        systemInstruction: {
          parts: [{
            text: `
            أنت "الأستاذ محمد"، معلم دراسات اجتماعية عماني للصف السابع.
            تحدث بلهجة عربية فصحى بسيطة ومشجعة.
            أسلوبك تفاعلي: لا تلقي محاضرات طويلة، بل اسأل الطالب وانتظر إجابته.
            عندما يجيب الطالب، شجعه ثم أضف معلومة قصيرة.
            المواضيع: الطقس والمناخ في عمان، تاريخ عمان (اليعاربة، العباسيين)، والمواطنة.
            اجعل إجاباتك صوتية فقط وقصيرة جداً (جملة أو جملتين).
            `
          }]
        }
      };

      const sessionPromise = ai.live.connect({
        ...config,
        callbacks: {
          onopen: () => {
            setIsConnected(true);
            const ctx = inputAudioContextRef.current!;
            const source = ctx.createMediaStreamSource(stream);
            const processor = ctx.createScriptProcessor(4096, 1, 1);
            processorRef.current = processor;

            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              sessionPromise.then(session => {
                 if (sessionRef.current) {
                    const pcmBlob = createPCMBlob(inputData, 16000);
                    
                    // --- الحل الحاسم: استخدام (as any) لتمرير البيانات وإسكات TypeScript ---
                    const payload = {
                      mimeType: "audio/pcm;rate=16000",
                      data: pcmBlob
                    };
                    
                    // نرسل البيانات ككائن مع خاصية media، ونجبرها على النوع any لتجاوز أخطاء المكتبة
                    session.sendRealtimeInput({
                        media: payload
                    } as any);
                 }
              });
            };

            source.connect(processor);
            processor.connect(ctx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const serverContent = message.serverContent;
            if (serverContent && serverContent.modelTurn && serverContent.modelTurn.parts) {
                const parts = serverContent.modelTurn.parts;
                for (const part of parts) {
                    if (part.inlineData && part.inlineData.data) {
                        setIsSpeaking(true);
                        const ctx = outputAudioContextRef.current!;
                        const audioBytes = base64ToUint8Array(part.inlineData.data);
                        const audioBuffer = await decodeAudioData(audioBytes, ctx);
                        
                        const now = ctx.currentTime;
                        const startTime = Math.max(nextStartTimeRef.current, now);
                        
                        const source = ctx.createBufferSource();
                        source.buffer = audioBuffer;
                        source.connect(ctx.destination);
                        source.start(startTime);
                        
                        nextStartTimeRef.current = startTime + audioBuffer.duration;
                        sourcesRef.current.add(source);
                        
                        source.onended = () => {
                            sourcesRef.current.delete(source);
                            if (sourcesRef.current.size === 0) {
                                setIsSpeaking(false);
                            }
                        };
                    }
                }
            }

            if (serverContent?.interrupted) {
              sourcesRef.current.forEach(src => src.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsSpeaking(false);
            }
          },
          onclose: () => {
            setIsConnected(false);
          },
          onerror: (e) => {
            console.error(e);
            setError("انقطع الاتصال بالخادم");
            setIsConnected(false);
          }
        }
      });
      
      sessionRef.current = sessionPromise;

    } catch (err) {
      console.error(err);
      setError("تعذر الوصول للميكروفون أو مفتاح API مفقود.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in font-tajawal">
      <div className="bg-white/10 border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-2xl relative overflow-hidden text-center backdrop-blur-xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-white/10 p-2 rounded-full">
          <XCircle size={24} />
        </button>
        
        <div className="mb-10 mt-4">
           <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-[0_0_40px_rgba(99,102,241,0.6)]">
              {isConnected && !isSpeaking && (
                 <div className="absolute inset-0 border-4 border-indigo-400 rounded-full animate-ping opacity-20"></div>
              )}
              {isSpeaking && (
                 <>
                    <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-40 duration-1000"></div>
                    <div className="absolute inset-[-10px] border-2 border-white/30 rounded-full animate-pulse"></div>
                 </>
              )}
              <Volume2 size={50} className="text-white relative z-10" />
           </div>
           
           <h2 className="text-2xl font-black text-white mb-2">الأستاذ محمد</h2>
           <p className="text-indigo-200 text-sm">معلم الدراسات الاجتماعية (تفاعلي)</p>
        </div>

        <div className="h-16 flex flex-col items-center justify-center gap-2 mb-8">
            {error ? (
                <span className="text-red-400 bg-red-900/20 px-4 py-2 rounded-lg text-xs font-bold">{error}</span>
            ) : isConnected ? (
               isSpeaking ? (
                 <div className="flex items-center gap-2 text-green-400">
                     <Activity className="animate-bounce" size={20} />
                     <span className="font-bold">يتحدث الآن...</span>
                 </div>
               ) : (
                 <div className="flex items-center gap-2 text-indigo-300">
                     <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                     <span className="text-sm font-medium">أستمع إليك.. تفضل بالسؤال</span>
                 </div>
               )
            ) : (
               <div className="text-slate-400 text-sm flex items-center gap-2">
                   <Loader2 className="animate-spin" size={16}/> جاري الاتصال...
               </div>
            )}
        </div>

        <div className="flex justify-center gap-6">
           <button 
             onClick={isConnected ? cleanup : startSession}
             className={`rounded-full p-6 shadow-xl transition-all transform hover:scale-105 active:scale-95 ${
                 isConnected 
                 ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-900/20' 
                 : 'bg-green-600 hover:bg-green-700 text-white shadow-green-900/20'
             }`}
           >
             {isConnected ? <MicOff size={32} /> : <Mic size={32} />}
           </button>
        </div>
        
        <p className="mt-8 text-[10px] text-white/30">
             Powered by Gemini Live
        </p>
      </div>
    </div>
  );
};

export default LiveVoiceTutor;
