import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, X, Volume2, WifiOff } from 'lucide-react';
import { base64ToUint8Array, createPCMBlob, decodeAudioData } from '../services/audioUtils';

interface LiveVoiceTutorProps {
  onClose?: () => void;
  context?: string;
}

const LiveVoiceTutor: React.FC<LiveVoiceTutorProps> = ({ onClose, context = "الدراسات الاجتماعية - الصف السابع" }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const outputNodeRef = useRef<GainNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<Promise<any> | null>(null);

  useEffect(() => {
    connectToGemini();
    return () => disconnect();
  }, []);

  const connectToGemini = async () => {
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API Key not found");

      const ai = new GoogleGenAI({ apiKey });
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      outputNodeRef.current = audioContextRef.current.createGain();
      outputNodeRef.current.connect(audioContextRef.current.destination);

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { sampleRate: 16000, channelCount: 1, echoCancellation: true }
      });

      const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      inputSourceRef.current = inputAudioContext.createMediaStreamSource(stream);
      processorRef.current = inputAudioContext.createScriptProcessor(4096, 1, 1);

      const config = {
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: `أنت معلم دراسات اجتماعية عماني خبير ومرح، اسمك "الأستاذ ناصر".
          تتحدث مع طالب في الصف السابع في سلطنة عمان.
          الموضوع الحالي هو: ${context}.
          تحدث بلهجة عربية فصحى سهلة ومحببة مع بعض المفردات العمانية اللطيفة.
          دورك هو شرح المفاهيم، طرح أسئلة مثيرة للتفكير، وتشجيع الطالب.
          اجعل إجاباتك قصيرة (جملتين أو ثلاث) ليكون حواراً وليس محاضرة.`,
        },
      };

      const sessionPromise = ai.live.connect({
        model: config.model,
        config: config.config,
        callbacks: {
          onopen: () => {
            console.log("Connected to Gemini Live");
            setIsConnected(true);
            
            processorRef.current!.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                const pcmBlob = createPCMBlob(inputData, 16000);
                sessionPromise.then(session => {
                    session.sendRealtimeInput({ media: { mimeType: pcmBlob.mimeType, data: pcmBlob.data } });
                });
            };
            
            inputSourceRef.current!.connect(processorRef.current!);
            processorRef.current!.connect(inputAudioContext.destination);
          },
          onmessage: async (msg: LiveServerMessage) => {
            const audioData = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioData) {
               setIsTalking(true);
               if (audioContextRef.current && outputNodeRef.current) {
                   const audioBuffer = await decodeAudioData(
                       base64ToUint8Array(audioData),
                       audioContextRef.current,
                       24000
                   );
                   playAudio(audioBuffer);
               }
            }
            if (msg.serverContent?.turnComplete) {
                setIsTalking(false);
            }
          },
          onclose: () => setIsConnected(false),
          onerror: (err) => {
            console.error(err);
            setError("انقطع الاتصال");
            setIsConnected(false);
          }
        }
      });
      sessionRef.current = sessionPromise;
    } catch (e) {
      console.error(e);
      setError("تعذر الوصول للميكروفون");
    }
  };

  const playAudio = (buffer: AudioBuffer) => {
      if (!audioContextRef.current || !outputNodeRef.current) return;
      const source = audioContextRef.current.createBufferSource();
      source.buffer = buffer;
      source.connect(outputNodeRef.current);
      
      const currentTime = audioContextRef.current.currentTime;
      if (nextStartTimeRef.current < currentTime) nextStartTimeRef.current = currentTime;
      
      source.start(nextStartTimeRef.current);
      nextStartTimeRef.current += buffer.duration;
      source.onended = () => {
          sourcesRef.current.delete(source);
          if (sourcesRef.current.size === 0) setIsTalking(false);
      };
      sourcesRef.current.add(source);
  };

  const disconnect = () => {
      if (sessionRef.current) sessionRef.current.then(s => s.close());
      if (processorRef.current) { processorRef.current.disconnect(); processorRef.current.onaudioprocess = null; }
      if (inputSourceRef.current) inputSourceRef.current.disconnect();
      sourcesRef.current.forEach(s => s.stop());
      sourcesRef.current.clear();
      if (audioContextRef.current) audioContextRef.current.close();
      setIsConnected(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-up">
      <div className="bg-slate-900 text-white rounded-3xl shadow-2xl p-5 w-72 border border-indigo-500/50 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none"></div>
          
          <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <span className="font-bold text-sm">المعلم الذكي (الأستاذ ناصر)</span>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors bg-white/10 p-1 rounded-full">
                  <X size={16} />
              </button>
          </div>

          <div className="flex flex-col items-center py-2 z-10">
              {error ? (
                  <div className="text-red-400 text-center text-xs flex flex-col items-center gap-2">
                      <WifiOff size={24} />
                      <p>{error}</p>
                  </div>
              ) : (
                  <div className={`relative w-24 h-24 flex items-center justify-center rounded-full transition-all duration-300 ${isTalking ? 'bg-indigo-600 scale-110 shadow-[0_0_40px_rgba(79,70,229,0.6)]' : 'bg-slate-800 border-2 border-slate-700'}`}>
                      {isTalking ? (
                          <Volume2 size={40} className="animate-bounce text-white" />
                      ) : (
                          <div className="flex gap-1 items-end h-8">
                              <div className="w-1 bg-indigo-400 animate-[music_1s_ease-in-out_infinite] h-4"></div>
                              <div className="w-1 bg-indigo-400 animate-[music_1.2s_ease-in-out_infinite] h-8"></div>
                              <div className="w-1 bg-indigo-400 animate-[music_0.8s_ease-in-out_infinite] h-6"></div>
                          </div>
                      )}
                  </div>
              )}
          </div>

          <div className="text-center z-10">
              <p className="text-xs text-slate-300 mb-3 bg-slate-800/50 p-2 rounded-lg">
                  {isTalking ? "يستمع إليك..." : "تحدث الآن، أنا أستمع..."}
              </p>
              <button 
                onClick={onClose}
                className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-200 border border-red-500/30 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                  <MicOff size={14} /> إنهاء الحصة الصوتية
              </button>
          </div>
      </div>
      <style>{`@keyframes music { 0%, 100% { height: 10px; } 50% { height: 30px; } }`}</style>
    </div>
  );
};

export default LiveVoiceTutor;