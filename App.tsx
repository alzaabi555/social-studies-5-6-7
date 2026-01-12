
import React, { useState } from 'react';
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
import { LessonId } from './types';

const App: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<LessonId>(null);

  return (
    <>
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
        <CourseIndex onSelectLesson={(id) => setActiveLesson(id)} />
      )}
    </>
  );
};

export default App;
