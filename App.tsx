
import React, { useState, useEffect } from 'react';

// Common Imports
import WelcomeScreen from './components/WelcomeScreen';
import CourseIndex from './components/CourseIndex';
import { LessonId, Lesson } from './types';
import { BookOpen } from 'lucide-react';

// Question Bank Imports
import QuestionBankDashboard from './components/QuestionBank/QuestionBankDashboard';
import QuestionBankSession from './components/QuestionBank/QuestionBankSession';

// Grade 7 Lesson Imports
import WeatherLesson from './components/WeatherLesson';
import OmanClimateLesson from './components/OmanClimateLesson';
import EarthLesson from './components/EarthLesson';
import ExternalLesson from './components/ExternalLesson';
import Unit1Assessment from './components/Unit1Assessment';
import AbbasidLesson from './components/AbbasidLesson';
import OmanAbbasidLesson from './components/OmanAbbasidLesson';
import OmanCivilizationLesson from './components/OmanCivilizationLesson';
import Unit2Assessment from './components/Unit2Assessment';
import BasicStatuteLesson from './components/BasicStatuteLesson';
import StateInstitutionsLesson from './components/StateInstitutionsLesson';
import Unit3Assessment from './components/Unit3Assessment';
import FinalExam from './components/FinalExam';

// Grade 6 Lesson Imports
import PopulationDataLesson from './components/grade6/PopulationDataLesson';
import PopulationStructureLesson from './components/grade6/PopulationStructureLesson';
import PopulationGrowthLesson from './components/grade6/PopulationGrowthLesson';
import PopulationDensityLesson from './components/grade6/PopulationDensityLesson';
import Unit1AssessmentG6 from './components/grade6/Unit1AssessmentG6';
import UmayyadStateLesson from './components/UmayyadStateLesson';
import OmanUmayyadLesson from './components/OmanUmayyadLesson';
import OmanUmayyadAchievementsLesson from './components/OmanUmayyadAchievementsLesson';
import Unit2AssessmentG6 from './components/grade6/Unit2AssessmentG6';
import CivilSocietyLesson from './components/grade6/civics/CivilSocietyLesson';
import CommunityParticipationLesson from './components/grade6/civics/CommunityParticipationLesson';
import Unit3AssessmentG6 from './components/grade6/Unit3AssessmentG6';
import FinalExamG6 from './components/FinalExamG6';

// Grade 5 Lesson Imports
import EarthSpheresLesson1 from './components/grade5/EarthSpheresLesson1';
import EarthSpheresLesson2 from './components/grade5/EarthSpheresLesson2';
import NaturalResourcesLesson from './components/grade5/NaturalResourcesLesson';
import Unit1AssessmentG5 from './components/grade5/Unit1AssessmentG5';
import IslamicStateLesson from './components/grade5/IslamicStateLesson';
import OmanProphetEraLesson from './components/grade5/OmanProphetEraLesson';
import OmanPersonalitiesLesson from './components/grade5/OmanPersonalitiesLesson';
import Unit2AssessmentG5 from './components/grade5/Unit2AssessmentG5';
import OmanRightsDutiesLesson from './components/grade5/OmanRightsDutiesLesson';
import OmanInstitutionsLesson from './components/grade5/OmanInstitutionsLesson';
import Unit3AssessmentG5 from './components/grade5/Unit3AssessmentG5';
import MapsLesson from './components/grade5/MapsLesson'; // Ensure this is imported if exists

// Splash Screen Component
const SplashScreen = () => (
  <div className="fixed inset-0 bg-indigo-900 flex flex-col items-center justify-center z-50 animate-fade-out">
    <div className="animate-bounce mb-4">
      <BookOpen size={64} className="text-white" />
    </div>
    <h1 className="text-4xl font-black text-white mb-2">الحقيبة التفاعلية</h1>
    <p className="text-indigo-200">الدراسات الاجتماعية</p>
  </div>
);

// Types for View State
type ViewState = 'splash' | 'welcome' | 'course_index' | 'lesson' | 'qbank_dashboard' | 'qbank_session';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('splash');
  const [selectedGrade, setSelectedGrade] = useState<5 | 6 | 7 | null>(null);
  const [activeLesson, setActiveLesson] = useState<LessonId>(null);
  
  // Question Bank State
  const [qBankLesson, setQBankLesson] = useState<Lesson | null>(null);

  // Handle Splash Screen Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setViewState('welcome');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Navigation Handlers
  const handleGradeSelection = (grade: 5 | 6 | 7) => {
    setSelectedGrade(grade);
    setViewState('course_index');
  };

  const handleLessonSelection = (lessonId: LessonId) => {
    setActiveLesson(lessonId);
    setViewState('lesson');
  };

  const handleBackToCourseIndex = () => {
    setActiveLesson(null);
    setViewState('course_index');
  };

  const handleBackToWelcome = () => {
    setSelectedGrade(null);
    setViewState('welcome');
  };

  // Question Bank Handlers
  const openQuestionBank = () => {
    setViewState('qbank_dashboard');
  };

  const startQuestionBankQuiz = (lesson: Lesson, grade: number) => {
    setQBankLesson(lesson);
    setSelectedGrade(grade as 5|6|7); // Reuse selectedGrade for context if needed
    setViewState('qbank_session');
  };

  const exitQuestionBankQuiz = () => {
    setQBankLesson(null);
    setViewState('qbank_dashboard');
  };

  // 1. Splash Screen
  if (viewState === 'splash') return <SplashScreen />;

  // 2. Welcome Screen
  if (viewState === 'welcome') return <WelcomeScreen onSelectGrade={handleGradeSelection} onOpenQuestionBank={openQuestionBank} />;

  // 3. Question Bank Dashboard
  if (viewState === 'qbank_dashboard') return <QuestionBankDashboard onBack={handleBackToWelcome} onStartQuiz={startQuestionBankQuiz} />;

  // 4. Question Bank Session
  if (viewState === 'qbank_session' && qBankLesson && selectedGrade) return <QuestionBankSession lesson={qBankLesson} grade={selectedGrade} onExit={exitQuestionBankQuiz} />;

  // 5. Course Index (Dashboard for selected Grade)
  if (viewState === 'course_index' && selectedGrade) {
    return (
      <CourseIndex 
        onSelectLesson={handleLessonSelection} 
        selectedGrade={selectedGrade}
        onGoBack={handleBackToWelcome}
      />
    );
  }

  // 6. Lesson View
  if (viewState === 'lesson' && activeLesson) {
    return (
      <div className="relative min-h-screen bg-slate-50 animate-fade-in">
        
        {/* Grade 7 Lessons */}
        {activeLesson === 'WEATHER' ? ( <WeatherLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'OMAN_CLIMATE' ? ( <OmanClimateLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'EARTH_LAYERS' ? ( <EarthLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'EXTERNAL_PROCESSES' ? ( <ExternalLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'UNIT_1_ASSESSMENT' ? ( <Unit1Assessment onBack={handleBackToCourseIndex} />
        
        /* Grade 7 Unit 2 */
        ) : activeLesson === 'ABBASID_STATE' ? ( <AbbasidLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'OMAN_ABBASID' ? ( <OmanAbbasidLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'OMAN_CIVILIZATION' ? ( <OmanCivilizationLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'UNIT_2_ASSESSMENT' ? ( <Unit2Assessment onBack={handleBackToCourseIndex} />
        
        /* Grade 7 Unit 3 */
        ) : activeLesson === 'BASIC_STATUTE' ? ( <BasicStatuteLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'STATE_INSTITUTIONS' ? ( <StateInstitutionsLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'UNIT_3_ASSESSMENT' ? ( <Unit3Assessment onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FINAL_EXAM_G5' ? ( <FinalExam onBack={handleBackToCourseIndex} /> 

        /* Grade 6 Lessons (Unit 1) */
        ) : activeLesson === 'SIXTH_POPULATION' ? ( <PopulationDataLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'SIXTH_STRUCTURE' ? ( <PopulationStructureLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'SIXTH_GROWTH' ? ( <PopulationGrowthLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'SIXTH_DENSITY' ? ( <PopulationDensityLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'UNIT_1_G6_ASSESSMENT' ? ( <Unit1AssessmentG6 onBack={handleBackToCourseIndex} />
        
        /* Grade 6 Lessons (Unit 2) */
        ) : activeLesson === 'SIXTH_UMAYYAD_STATE' ? ( <UmayyadStateLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'OMAN_UMAYYAD' ? ( <OmanUmayyadLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'OMAN_UMAYYAD_ACHIEVEMENTS' ? ( <OmanUmayyadAchievementsLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'UNIT_2_G6_ASSESSMENT' ? ( <Unit2AssessmentG6 onBack={handleBackToCourseIndex} />

        /* Grade 6 Lessons (Unit 3) */
        ) : activeLesson === 'SIXTH_CIVIL_SOCIETY' ? ( <CivilSocietyLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'SIXTH_COMMUNITY_PARTICIPATION' ? ( <CommunityParticipationLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'UNIT_3_G6_ASSESSMENT' ? ( <Unit3AssessmentG6 onBack={handleBackToCourseIndex} />
        
        ) : activeLesson === 'FINAL_EXAM_G6' ? ( <FinalExamG6 onBack={handleBackToCourseIndex} />

        /* Grade 5 Lessons (Unit 1) */
        ) : activeLesson === 'FIFTH_SPHERES_1' ? ( <EarthSpheresLesson1 onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FIFTH_SPHERES_2' ? ( <EarthSpheresLesson2 onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FIFTH_RESOURCES' ? ( <NaturalResourcesLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FIFTH_UNIT_1_ASSESSMENT' ? ( <Unit1AssessmentG5 onBack={handleBackToCourseIndex} />

        /* Grade 5 Lessons (Unit 2) */
        ) : activeLesson === 'FIFTH_ISLAMIC_STATE' ? ( <IslamicStateLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FIFTH_OMAN_PROPHET' ? ( <OmanProphetEraLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FIFTH_OMAN_PERSONALITIES' ? ( <OmanPersonalitiesLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FIFTH_UNIT_2_ASSESSMENT' ? ( <Unit2AssessmentG5 onBack={handleBackToCourseIndex} />

        /* Grade 5 Lessons (Unit 3) */
        ) : activeLesson === 'FIFTH_RIGHTS_DUTIES' ? ( <OmanRightsDutiesLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FIFTH_INSTITUTIONS' ? ( <OmanInstitutionsLesson onBack={handleBackToCourseIndex} />
        ) : activeLesson === 'FIFTH_UNIT_3_ASSESSMENT' ? ( <Unit3AssessmentG5 onBack={handleBackToCourseIndex} />

        ) : (
          /* Fallback */
          <div className="flex items-center justify-center min-h-screen">
             <button onClick={handleBackToCourseIndex}>العودة</button>
          </div>
        )}
      </div>
    );
  }

  // Fallback (Should not happen)
  return <SplashScreen />;
};

export default App;
