import React from 'react';

export type LessonId = 'WEATHER' | 'OMAN_CLIMATE' | 'EARTH_LAYERS' | 'EXTERNAL_PROCESSES' | 'UNIT_1_ASSESSMENT' | 'ABBASID_ERA' | 'OMAN_ABBASID' | 'OMAN_CIVILIZATION' | 'UNIT_2_ASSESSMENT' | 'BASIC_STATUTE' | 'STATE_INSTITUTIONS' | 'UNIT_3_ASSESSMENT' | 'FINAL_EXAM' | null;

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
  available: boolean;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export enum Section {
  INTRO = 'INTRO',
  DEFINITION = 'DEFINITION',
  FACTORS = 'FACTORS',
  ELEMENTS = 'ELEMENTS',
  REGIONS = 'REGIONS',
  SEASONS = 'SEASONS',
  DATA_ANALYSIS = 'DATA_ANALYSIS',
  LAYERS = 'LAYERS',
  TECTONICS = 'TECTONICS',
  PROCESSES = 'PROCESSES',
  WEATHERING = 'WEATHERING',
  EROSION = 'EROSION',
  DEPOSITION = 'DEPOSITION',
  // History Sections Lesson 1
  POLITICAL_MAP = 'POLITICAL_MAP',
  PROSPERITY = 'PROSPERITY',
  CRUSADES = 'CRUSADES',
  MONGOLS = 'MONGOLS',
  // History Sections Lesson 2
  IMAMATE_STABILITY = 'IMAMATE_STABILITY',
  SOCOTRA_CAMPAIGN = 'SOCOTRA_CAMPAIGN',
  ABBASID_INVASION = 'ABBASID_INVASION',
  NABHANID_ERA = 'NABHANID_ERA',
  // History Sections Lesson 3
  OMAN_CIV_INTRO = 'OMAN_CIV_INTRO',
  OMAN_CIV_CULTURE = 'OMAN_CIV_CULTURE',
  OMAN_CIV_ECONOMY = 'OMAN_CIV_ECONOMY',
  OMAN_CIV_ARCH = 'OMAN_CIV_ARCH',
  // Civics Sections (Unit 3 Lesson 1)
  STATUTE_INTRO = 'STATUTE_INTRO',
  STATUTE_STRUCTURE = 'STATUTE_STRUCTURE',
  STATUTE_PILLARS = 'STATUTE_PILLARS',
  STATUTE_PRINCIPLES = 'STATUTE_PRINCIPLES',
  STATUTE_RUMORS = 'STATUTE_RUMORS',
  // Civics Sections (Unit 3 Lesson 2)
  STATE_INTRO = 'STATE_INTRO',
  STATE_STRUCTURE = 'STATE_STRUCTURE',
  HEAD_OF_STATE = 'HEAD_OF_STATE',
  GOV_INSTITUTIONS = 'GOV_INSTITUTIONS',
  GOV_SERVICES = 'GOV_SERVICES',
  QUIZ = 'QUIZ',
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  visualComponent?: React.ReactNode; // Optional custom visual for the question
}

export interface WeatherElement {
  id: string;
  name: string;
  instrument: string;
  unit: string;
  definition: string;
  mechanism: string; // How it works/happens
  importance: string; // Why do we measure it?
  realWorldExample: string;
  icon: React.ReactNode;
}

export interface Factor {
  id: string;
  title: string;
  description: string;
  detailedExplanation: string;
  scientificPrinciple: string; // The "Why"
  effect: string;
}

export interface OmanRegion {
    id: string;
    name: string;
    description: string;
    characteristics: string;
    location: string;
    color: string;
}

export interface EarthLayer {
    id: string;
    name: string;
    depth: string;
    temp: string;
    description: string;
    state: string; // Solid, Molten, etc.
    color: string;
}