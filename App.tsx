
import React, { useState, useEffect } from 'react';
import CourseIndex from './components/CourseIndex';
import WeatherLesson from './components/WeatherLesson';
import OmanClimateLesson from './components/OmanClimateLesson';
import EarthLesson from './components/EarthLesson';
import ExternalLesson from './components/ExternalLesson';
import UmayyadStateLesson from './components/UmayyadStateLesson';
import OmanUmayyadLesson from './components/OmanUmayyadLesson';
import OmanUmayyadAchievementsLesson from './components/OmanUmayyadAchievementsLesson';
import AbbasidLesson from './components/AbbasidLesson';
import OmanAbbasidLesson from './components/OmanAbbasidLesson';
import OmanCivilizationLesson from './components/OmanCivilizationLesson';
import BasicStatuteLesson from './components/BasicStatuteLesson';
import StateInstitutionsLesson from './components/StateInstitutionsLesson';
import PopulationDataLesson from './components/grade6/PopulationDataLesson.tsx'; 
import PopulationStructureLesson from './components/grade6/PopulationStructureLesson.tsx'; 
import PopulationGrowthLesson from './components/grade6/PopulationGrowthLesson.tsx'; 
import PopulationDensityLesson from './components/grade6/PopulationDensityLesson.tsx'; 
import Unit1AssessmentG6 from './components/grade6/Unit1AssessmentG6.tsx'; 
import Unit2AssessmentG6 from './components/grade6/Unit2AssessmentG6.tsx';
import Unit3AssessmentG6 from './components/grade6/Unit3AssessmentG6.tsx';
import CivilSocietyLesson from './components/grade6/civics/CivilSocietyLesson.tsx';
import CommunityParticipationLesson from './components/grade6/civics/CommunityParticipationLesson.tsx';
import Unit1Assessment from './components/Unit1Assessment';
import Unit2Assessment from './components/Unit2Assessment';
import Unit3Assessment from './components/Unit3Assessment';
import FinalExam from './components/FinalExam';
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
    <p className="text-indigo-200 text-lg font-medium">الدراسات الاجتماعية - سلطنة عمان</p>
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
      
      {/* Grade 7 Lessons */}
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
      
      /* Grade 6 Lessons (Unit 2) */
      ) : activeLesson === 'UMAYYAD_STATE' ? (
        <UmayyadStateLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_UMAYYAD' ? (
        <OmanUmayyadLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_UMAYYAD_ACHIEVEMENTS' ? (
        <OmanUmayyadAchievementsLesson onBack={() => setActiveLesson(null)} />
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
      
      /* Grade 6 Lessons (Unit 1) */
      ) : activeLesson === 'SIXTH_POPULATION' ? (
        <PopulationDataLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'SIXTH_STRUCTURE' ? (
        <PopulationStructureLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'SIXTH_GROWTH' ? (
        <PopulationGrowthLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'SIXTH_DENSITY' ? (
        <PopulationDensityLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_1_G6_ASSESSMENT' ? (
        <Unit1AssessmentG6 onBack={() => setActiveLesson(null)} />
      
      /* Grade 6 Lessons (Unit 2 Assessment) */
      ) : activeLesson === 'UNIT_2_G6_ASSESSMENT' ? (
        <Unit2AssessmentG6 onBack={() => setActiveLesson(null)} />

      /* Grade 6 Lessons (Unit 3) */
      ) : activeLesson === 'SIXTH_CIVIL_SOCIETY' ? (
        <CivilSocietyLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'SIXTH_COMMUNITY_PARTICIPATION' ? (
        <CommunityParticipationLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_3_G6_ASSESSMENT' ? (
        <Unit3AssessmentG6 onBack={() => setActiveLesson(null)} />

      ) : (
        <CourseIndex 
          onSelectLesson={(id) => setActiveLesson(id)} 
        />
      )}
    </div>
  );
};

export default App;
