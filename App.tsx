
import React, { useState, useEffect } from 'react';
import EarthSpheresLesson1 from './components/grade5/EarthSpheresLesson1';
import EarthSpheresLesson2 from './components/grade5/EarthSpheresLesson2';
import NaturalResourcesLesson from './components/grade5/NaturalResourcesLesson';
import Unit1AssessmentG5 from './components/grade5/Unit1AssessmentG5';

// Grade 5 Unit 2 Imports
import IslamicStateLesson from './components/grade5/IslamicStateLesson';
import OmanProphetEraLesson from './components/grade5/OmanProphetEraLesson';
import OmanPersonalitiesLesson from './components/grade5/OmanPersonalitiesLesson';
import Unit2AssessmentG5 from './components/grade5/Unit2AssessmentG5';

// Grade 5 Unit 3 Imports (NEW)
import OmanRightsDutiesLesson from './components/grade5/OmanRightsDutiesLesson';
import OmanInstitutionsLesson from './components/grade5/OmanInstitutionsLesson';
import Unit3AssessmentG5 from './components/grade5/Unit3AssessmentG5';

import WeatherLesson from './components/WeatherLesson';
import OmanClimateLesson from './components/OmanClimateLesson';
import EarthLesson from './components/EarthLesson';
import ExternalLesson from './components/ExternalLesson';
import Unit1Assessment from './components/Unit1Assessment';

// Updated: Abbasid Lesson replaces old Umayyad link for Unit 2 Lesson 1
import AbbasidLesson from './components/AbbasidLesson';
import UmayyadStateLesson from './components/UmayyadStateLesson'; // Restored for Grade 6
import OmanUmayyadLesson from './components/OmanUmayyadLesson';
import OmanUmayyadAchievementsLesson from './components/OmanUmayyadAchievementsLesson';
import OmanAbbasidLesson from './components/OmanAbbasidLesson';
import OmanCivilizationLesson from './components/OmanCivilizationLesson';
import Unit2Assessment from './components/Unit2Assessment';

import BasicStatuteLesson from './components/BasicStatuteLesson';
import StateInstitutionsLesson from './components/StateInstitutionsLesson';
import Unit3Assessment from './components/Unit3Assessment';
// Removed FinalExam import as requested for Grade 7

import PopulationDataLesson from './components/grade6/PopulationDataLesson';
import PopulationStructureLesson from './components/grade6/PopulationStructureLesson';
import PopulationGrowthLesson from './components/grade6/PopulationGrowthLesson';
import PopulationDensityLesson from './components/grade6/PopulationDensityLesson';
import Unit1AssessmentG6 from './components/grade6/Unit1AssessmentG6';
import Unit2AssessmentG6 from './components/grade6/Unit2AssessmentG6';
import CivilSocietyLesson from './components/grade6/civics/CivilSocietyLesson';
import CommunityParticipationLesson from './components/grade6/civics/CommunityParticipationLesson';
import Unit3AssessmentG6 from './components/grade6/Unit3AssessmentG6';
// Removed FinalExamG6 import as requested for Grade 6

import CourseIndex from './components/CourseIndex';
import { LessonId } from './types';
import { BookOpen } from 'lucide-react';

const SplashScreen = () => (
  <div className="fixed inset-0 bg-indigo-900 flex flex-col items-center justify-center z-50 animate-fade-out">
    <div className="animate-bounce mb-4">
      <BookOpen size={64} className="text-white" />
    </div>
    <h1 className="text-4xl font-black text-white mb-2">الحقيبة التفاعلية</h1>
    <p className="text-indigo-200">الدراسات الاجتماعية</p>
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
      
      /* Grade 7 Unit 2: The New Abbasid Lesson */
      ) : activeLesson === 'ABBASID_STATE' ? (
        <AbbasidLesson onBack={() => setActiveLesson(null)} />
      
      /* Other Lessons */
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
      
      /* Grade 6 Lessons (Unit 2) - RESTORED */
      ) : activeLesson === 'SIXTH_UMAYYAD_STATE' ? (
        <UmayyadStateLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_UMAYYAD' ? (
        <OmanUmayyadLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_UMAYYAD_ACHIEVEMENTS' ? (
        <OmanUmayyadAchievementsLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_2_G6_ASSESSMENT' ? (
        <Unit2AssessmentG6 onBack={() => setActiveLesson(null)} />

      /* Grade 6 Lessons (Unit 3) */
      ) : activeLesson === 'SIXTH_CIVIL_SOCIETY' ? (
        <CivilSocietyLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'SIXTH_COMMUNITY_PARTICIPATION' ? (
        <CommunityParticipationLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_3_G6_ASSESSMENT' ? (
        <Unit3AssessmentG6 onBack={() => setActiveLesson(null)} />
      
      /* Grade 6 Final Exam REMOVED */

      /* Grade 5 Lessons (Unit 1) */
      ) : activeLesson === 'FIFTH_MAPS' ? (
        <MapsLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'FIFTH_SPHERES_CONCEPT' ? (
        <EarthSpheresLesson1 onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'FIFTH_SPHERES_RELATION' ? (
        <EarthSpheresLesson2 onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'FIFTH_RESOURCES' ? (
        <NaturalResourcesLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_1_G5_ASSESSMENT' ? (
        <Unit1AssessmentG5 onBack={() => setActiveLesson(null)} />

      /* Grade 5 Lessons (Unit 2) */
      ) : activeLesson === 'FIFTH_ISLAMIC_STATE' ? (
        <IslamicStateLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'FIFTH_OMAN_PROPHET' ? (
        <OmanProphetEraLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'FIFTH_OMAN_PERSONALITIES' ? (
        <OmanPersonalitiesLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_2_G5_ASSESSMENT' ? (
        <Unit2AssessmentG5 onBack={() => setActiveLesson(null)} />

      /* Grade 5 Lessons (Unit 3 - NEW) */
      ) : activeLesson === 'FIFTH_RIGHTS_DUTIES' ? (
        <OmanRightsDutiesLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'FIFTH_INSTITUTIONS_CONVENTIONS' ? (
        <OmanInstitutionsLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_3_G5_ASSESSMENT' ? (
        <Unit3AssessmentG5 onBack={() => setActiveLesson(null)} />

      ) : (
        <CourseIndex 
          onSelectLesson={(id) => setActiveLesson(id)} 
        />
      )}
    </div>
  );
};

export default App;
