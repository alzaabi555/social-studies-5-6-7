
import React from 'react';

export type LessonId = 
  // Grade 7
  | 'WEATHER' | 'OMAN_CLIMATE' | 'EARTH_LAYERS' | 'EXTERNAL_PROCESSES' | 'UNIT_1_ASSESSMENT' 
  | 'ABBASID_STATE' | 'OMAN_ABBASID' | 'OMAN_CIVILIZATION' | 'UNIT_2_ASSESSMENT' 
  | 'BASIC_STATUTE' | 'STATE_INSTITUTIONS' | 'UNIT_3_ASSESSMENT'
  // Grade 6
  | 'SIXTH_POPULATION' | 'SIXTH_STRUCTURE' | 'SIXTH_GROWTH' | 'SIXTH_DENSITY' | 'UNIT_1_G6_ASSESSMENT'
  | 'SIXTH_UMAYYAD_STATE' | 'OMAN_UMAYYAD' | 'OMAN_UMAYYAD_ACHIEVEMENTS' | 'UNIT_2_G6_ASSESSMENT'
  | 'SIXTH_CIVIL_SOCIETY' | 'SIXTH_COMMUNITY_PARTICIPATION' | 'UNIT_3_G6_ASSESSMENT' 
  | 'FINAL_EXAM_G5' // Keeping as general final exam ID for now
  | null;

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
  // Common
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  SUMMARY = 'SUMMARY',
  
  // Grade 7 Sections
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
  
  // Grade 7 History
  UMAYYAD_RISE = 'UMAYYAD_RISE', 
  UMAYYAD_CONQUESTS = 'UMAYYAD_CONQUESTS',
  UMAYYAD_ACHIEVEMENTS = 'UMAYYAD_ACHIEVEMENTS',
  UMAYYAD_FALL = 'UMAYYAD_FALL',
  
  // Abbasid Sections
  POLITICAL_MAP = 'POLITICAL_MAP',
  PROSPERITY = 'PROSPERITY',
  CRUSADES = 'CRUSADES',
  MONGOLS = 'MONGOLS',

  IMAMATE_STABILITY = 'IMAMATE_STABILITY',
  SOCOTRA_CAMPAIGN = 'SOCOTRA_CAMPAIGN',
  ABBASID_INVASION = 'ABBASID_INVASION',
  NABHANID_ERA = 'NABHANID_ERA',
  OMAN_CIV_INTRO = 'OMAN_CIV_INTRO',
  OMAN_CIV_CULTURE = 'OMAN_CIV_CULTURE',
  OMAN_CIV_ECONOMY = 'OMAN_CIV_ECONOMY',
  OMAN_CIV_ARCH = 'OMAN_CIV_ARCH',
  
  // Grade 7 Civics
  STATUTE_INTRO = 'STATUTE_INTRO',
  STATUTE_STRUCTURE = 'STATUTE_STRUCTURE',
  STATUTE_PILLARS = 'STATUTE_PILLARS',
  STATUTE_PRINCIPLES = 'STATUTE_PRINCIPLES',
  STATUTE_RUMORS = 'STATUTE_RUMORS',
  STATE_INTRO = 'STATE_INTRO',
  STATE_STRUCTURE = 'STATE_STRUCTURE',
  HEAD_OF_STATE = 'HEAD_OF_STATE',
  GOV_INSTITUTIONS = 'GOV_INSTITUTIONS',
  GOV_SERVICES = 'GOV_SERVICES',

  // Grade 6 Sections
  POP_SOURCES = 'POP_SOURCES',
  CENSUS_EVOLUTION = 'CENSUS_EVOLUTION',
  POP_IMPORTANCE = 'POP_IMPORTANCE',
  GROWTH_INTRO = 'GROWTH_INTRO',
  OMAN_GROWTH_CHART = 'OMAN_GROWTH_CHART',
  NATURAL_INCREASE = 'NATURAL_INCREASE',
  MIGRATION_IMPACT = 'MIGRATION_IMPACT',
  GROWTH_EFFECTS = 'GROWTH_EFFECTS',
  DENSITY_INTRO = 'DENSITY_INTRO',
  DENSITY_FACTORS = 'DENSITY_FACTORS',
  CITY_VILLAGE = 'CITY_VILLAGE',
  DENSITY_CALC = 'DENSITY_CALC',
  DENSITY_MAP_ANALYSIS = 'DENSITY_MAP_ANALYSIS',
  OMAN_DENSITY = 'OMAN_DENSITY',
  OMAN_UMAYYAD_INTRO = 'OMAN_UMAYYAD_INTRO',
  OMAN_UMAYYAD_STANCE = 'OMAN_UMAYYAD_STANCE',
  OMAN_UMAYYAD_INDEPENDENCE = 'OMAN_UMAYYAD_INDEPENDENCE',
  OMAN_UMAYYAD_CONTROL = 'OMAN_UMAYYAD_CONTROL',
  OMAN_UMAYYAD_GOVERNORS = 'OMAN_UMAYYAD_GOVERNORS',
  OMAN_ACHIEVEMENTS_INTRO = 'OMAN_ACHIEVEMENTS_INTRO',
  OMAN_ACHIEVEMENTS_CULTURE = 'OMAN_ACHIEVEMENTS_CULTURE',
  OMAN_ACHIEVEMENTS_MILITARY = 'OMAN_ACHIEVEMENTS_MILITARY',
  OMAN_ACHIEVEMENTS_ECONOMY = 'OMAN_ACHIEVEMENTS_ECONOMY',
  CIVIL_SOCIETY_INTRO = 'CIVIL_SOCIETY_INTRO',
  CIVIL_SOCIETY_TYPES = 'CIVIL_SOCIETY_TYPES',
  CIVIL_SOCIETY_IMPORTANCE = 'CIVIL_SOCIETY_IMPORTANCE',
  COMMUNITY_INTRO = 'COMMUNITY_INTRO',
  COMMUNITY_FORMS = 'COMMUNITY_FORMS',
  COMMUNITY_IMPORTANCE = 'COMMUNITY_IMPORTANCE',

  // Grade 5 Maps (Common concept, keeping maps sections for now or remove if strictly G5)
  // Keeping general map concepts as they might be reused or relevant
  MAPS_INTRO = 'MAPS_INTRO',
  MAPS_TYPES = 'MAPS_TYPES',
  MAPS_ELEMENTS = 'MAPS_ELEMENTS',
  MAPS_READING = 'MAPS_READING'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  visualComponent?: React.ReactNode; 
}

export interface WeatherElement {
  id: string;
  name: string;
  instrument: string;
  unit: string;
  definition: string;
  mechanism: string; 
  importance: string; 
  realWorldExample: string;
  icon: React.ReactNode;
}

export interface Factor {
  id: string;
  title: string;
  description: string;
  detailedExplanation: string;
  scientificPrinciple: string; 
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
    state: string; 
    color: string;
}
