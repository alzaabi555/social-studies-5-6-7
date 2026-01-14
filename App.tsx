import React, { useState, useEffect } from 'react';
import CourseIndex from './components/CourseIndex';
import WeatherLesson from './components/WeatherLesson';
import OmanClimateLesson from './components/OmanClimateLesson';
import EarthLesson from './components/EarthLesson';
import ExternalLesson from './components/ExternalLesson';
import AbbasidLesson from './components/AbbasidLesson';
import OmanAbbasidLesson from './components/OmanAbbasidLesson';
import OmanCivilizationLesson from './components/OmanCivilizationLesson';
import BasicStatuteLesson from './components/BasicStatuteLesson';
import StateInstitutionsLesson from './components/StateInstitutionsLesson';
import Unit1Assessment from './components/Unit1Assessment';
import Unit2Assessment from './components/Unit2Assessment';
import Unit3Assessment from './components/Unit3Assessment';
import FinalExam from './components/FinalExam';
import LiveVoiceTutor from './components/LiveVoiceTutor';
import { LessonId } from './types';
import { BookOpen } from 'lucide-react';

const SplashScreen: React.FC = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 z-50 flex flex-col items-center justify-center animate-fade-in">
    <div className="relative">
      <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="bg-white/10 p-8 rounded-full backdrop-blur-md border border-white/20 relative z-10 mb-6">
        <BookOpen size={64} className="text-white drop-shadow-lg" />
      </div>
    </div>
    <h1 className="text-4xl font-black text-white mb-2 tracking-tight">الكتاب التفاعلي</h1>
    <p className="text-indigo-200 text-lg font-medium">الدراسات الاجتماعية - الصف السابع</p>
    <div className="mt-8 flex gap-2">
      <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<LessonId>(null);
  const [loading, setLoading] = useState(true);
  const [showLiveTutor, setShowLiveTutor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="relative min-h-screen bg-slate-50 animate-fade-in">
      {/* Floating Live Tutor Button */}
      {!showLiveTutor && (
        <button 
          onClick={() => setShowLiveTutor(true)}
          className="fixed bottom-6 left-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110 flex items-center gap-2 group border-4 border-white/20"
          title="تحدث مع المعلم الذكي"
        >
          <div className="relative">
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">المعلم المباشر</span>
        </button>
      )}

      {showLiveTutor && (
        <LiveVoiceTutor 
          onClose={() => setShowLiveTutor(false)} 
          context={activeLesson ? `الدرس الحالي: ${activeLesson}` : "القائمة الرئيسية - الدراسات الاجتماعية"}
        />
      )}

      {activeLesson === 'WEATHER' ? (
        <WeatherLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_CLIMATE' ? (
        <OmanClimateLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'EARTH_LAYERS' ? (
        <EarthLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'EXTERNAL_PROCESSES' ? (
        <ExternalLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_1_ASSESSMENT' ? (
        <Unit1Assessment onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'ABBASID_ERA' ? (
        <AbbasidLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_ABBASID' ? (
        <OmanAbbasidLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_CIVILIZATION' ? (
        <OmanCivilizationLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_2_ASSESSMENT' ? (
        <Unit2Assessment onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'BASIC_STATUTE' ? (
        <BasicStatuteLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'STATE_INSTITUTIONS' ? (
        <StateInstitutionsLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_3_ASSESSMENT' ? (
        <Unit3Assessment onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'FINAL_EXAM' ? (
        <FinalExam onBack={() => setActiveLesson(null)} />
      ) : (
        <CourseIndex 
          onSelectLesson={(id) => setActiveLesson(id)} 
        />
      )}
    </div>
  );
};

export default App;