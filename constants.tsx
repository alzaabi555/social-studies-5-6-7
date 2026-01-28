
import { Unit, Section, QuizQuestion, WeatherElement, EarthLayer, OmanRegion, Lesson, LessonId } from './types';
import { 
  CloudSun, Thermometer, Wind, Droplet, CloudRain, Mountain, Globe2, 
  BookOpen, Flag, Scale, Landmark, Users, Briefcase, 
  Map as MapIcon, Activity, Star, ArrowDown,
  Swords, AlertTriangle, 
  Building2, Layers, Crown, Moon, User, Heart, 
  Compass, Settings, BarChart2, CheckCircle,
  TrendingUp, MapPin, Trophy, Award, Scroll, 
  PieChart, Info, Zap, MessageCircle, 
  Search, Eye, Hand, Leaf, Box, Anchor, Ship, Hammer, Target, Book, LayoutDashboard,
  Calendar, Sun, Shield, Database, FileText, History, RefreshCw, Mail,
  Clock, Navigation
} from 'lucide-react';
import React from 'react';
import { GRADE_5_QUESTIONS } from './data/grade5Questions';
import { GRADE_6_QUESTIONS } from './data/grade6Questions';
import { GRADE_7_QUESTIONS } from './data/grade7Questions';

// --- SHARED / COMMON ---
export const QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: "سؤال تجريبي 1", options: ["أ", "ب", "ج"], correctIndex: 0 },
    { id: 2, question: "سؤال تجريبي 2", options: ["أ", "ب", "ج"], correctIndex: 1 },
];

export const WEATHER_ELEMENTS_DATA: WeatherElement[] = [
  { id: 'temp', name: 'درجة الحرارة', instrument: 'الثرمومتر', unit: 'درجة مئوية', definition: 'مقدار سخونة أو برودة الجو', mechanism: 'تؤثر في جميع العناصر', importance: 'تحدد نوع الملابس والنشاط', realWorldExample: 'ارتفاع الحرارة ظهراً', icon: <Thermometer /> },
  { id: 'pressure', name: 'الضغط الجوي', instrument: 'البارومتر', unit: 'مليبار', definition: 'وزن عمود الهواء', mechanism: 'يتحكم في الرياح', importance: 'توقع الطقس', realWorldExample: 'ضغط الأذن في الطائرة', icon: <Activity /> },
  { id: 'wind', name: 'الرياح', instrument: 'الأنيمومتر', unit: 'عقدة/كم', definition: 'حركة الهواء', mechanism: 'تنقل الحرارة والسحب', importance: 'توليد الطاقة', realWorldExample: 'حركة الأشجار', icon: <Wind /> },
  { id: 'humidity', name: 'الرطوبة', instrument: 'الهيجرومتر', unit: '%', definition: 'بخار الماء في الهواء', mechanism: 'تكون السحب', importance: 'الشعور بالراحة', realWorldExample: 'الضباب', icon: <Droplet /> },
  { id: 'precipitation', name: 'الأمطار', instrument: 'مقياس المطر', unit: 'ملم', definition: 'سقوط الماء من السحب', mechanism: 'دورة الماء', importance: 'الحياة والزراعة', realWorldExample: 'المطر الغزير', icon: <CloudRain /> }
];

export const SECTIONS = [
  { id: Section.INTRO, label: 'المقدمة', icon: <Info /> },
  { id: Section.DEFINITION, label: 'المفهوم', icon: <BookOpen /> },
  { id: Section.FACTORS, label: 'العوامل', icon: <Settings /> },
  { id: Section.ELEMENTS, label: 'العناصر', icon: <CloudSun /> },
  { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];

// --- GRADE 7 CONSTANTS ---
export const OMAN_REGIONS_DATA: OmanRegion[] = [
    { id: 'semi_desert', name: 'شبه الصحراوي', description: 'حار صيفاً دافئ شتاءً', characteristics: 'أمطار قليلة', location: 'شمال عمان', color: 'bg-yellow-100' },
    { id: 'mediterranean', name: 'البحر المتوسط', description: 'معتدل صيفاً بارد شتاءً', characteristics: 'أمطار شتوية', location: 'الجبل الأخضر', color: 'bg-green-100' },
    { id: 'dry_desert', name: 'الصحراوي', description: 'حار جداً وجاف', characteristics: 'ندرة الأمطار', location: 'الوسطى', color: 'bg-orange-100' },
    { id: 'monsoon', name: 'الموسمي', description: 'معتدل صيفاً', characteristics: 'أمطار موسمية', location: 'ظفار', color: 'bg-teal-100' }
];

export const OMAN_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.FACTORS, label: 'العوامل المؤثرة', icon: <Settings /> },
    { id: Section.REGIONS, label: 'الأقاليم المناخية', icon: <MapIcon /> },
    { id: Section.SEASONS, label: 'فصول السنة', icon: <Sun /> },
    { id: Section.DATA_ANALYSIS, label: 'تحليل البيانات', icon: <BarChart2 /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_QUIZ_QUESTIONS = GRADE_7_QUESTIONS['OMAN_CLIMATE'] || QUIZ_QUESTIONS;

export const EARTH_LAYERS_DATA: EarthLayer[] = [
    { id: 'crust', name: 'القشرة الأرضية', depth: '0-100 كم', temp: 'منخفضة', description: 'الطبقة الخارجية الصلبة.', state: 'صلبة', color: '#8B4513' },
    { id: 'mantle', name: 'الوشاح', depth: '2900 كم', temp: 'عالية', description: 'طبقة سميكة من الصخور.', state: 'شبه صلبة', color: '#D2691E' },
    { id: 'outer_core', name: 'اللب الخارجي', depth: '2200 كم', temp: 'مرتفعة جداً', description: 'مواد منصهرة (حديد ونيكل).', state: 'سائلة', color: '#FF8C00' },
    { id: 'inner_core', name: 'اللب الداخلي', depth: '1200 كم', temp: 'الأعلى حرارة', description: 'مركز الأرض الصلب.', state: 'صلبة', color: '#FF4500' }
];

export const EARTH_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.LAYERS, label: 'طبقات الأرض', icon: <Layers /> },
    { id: Section.TECTONICS, label: 'الصفائح التكتونية', icon: <Activity /> },
    { id: Section.PROCESSES, label: 'العمليات الداخلية', icon: <Mountain /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const EARTH_QUIZ_QUESTIONS = GRADE_7_QUESTIONS['EARTH_LAYERS'] || QUIZ_QUESTIONS;

export const EXTERNAL_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.WEATHERING, label: 'التجوية', icon: <Sun /> },
    { id: Section.EROSION, label: 'التعرية', icon: <Wind /> },
    { id: Section.DEPOSITION, label: 'الترسيب', icon: <Layers /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const EXTERNAL_QUIZ_QUESTIONS = GRADE_7_QUESTIONS['EXTERNAL_PROCESSES'] || QUIZ_QUESTIONS;

export const ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.POLITICAL_MAP, label: 'الخريطة السياسية', icon: <MapIcon /> },
    { id: Section.PROSPERITY, label: 'مظاهر الازدهار', icon: <Star /> },
    { id: Section.CRUSADES, label: 'الحملات الصليبية', icon: <Swords /> },
    { id: Section.MONGOLS, label: 'الغزو المغولي', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const ABBASID_QUIZ_QUESTIONS = GRADE_7_QUESTIONS['ABBASID_STATE'] || QUIZ_QUESTIONS;

export const OMAN_ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.IMAMATE_STABILITY, label: 'استقرار الإمامة', icon: <Shield /> },
    { id: Section.SOCOTRA_CAMPAIGN, label: 'حملة سقطرى', icon: <Ship /> },
    { id: Section.ABBASID_INVASION, label: 'الغزو العباسي', icon: <Swords /> },
    { id: Section.NABHANID_ERA, label: 'دولة النباهنة', icon: <Crown /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_ABBASID_QUIZ_QUESTIONS = GRADE_7_QUESTIONS['OMAN_ABBASID'] || QUIZ_QUESTIONS;

export const OMAN_CIVILIZATION_SECTIONS = [
    { id: Section.OMAN_CIV_INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.OMAN_CIV_CULTURE, label: 'الحياة الثقافية', icon: <BookOpen /> },
    { id: Section.OMAN_CIV_ECONOMY, label: 'الحياة الاقتصادية', icon: <Briefcase /> },
    { id: Section.OMAN_CIV_ARCH, label: 'العمارة', icon: <Building2 /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_CIVILIZATION_QUIZ_QUESTIONS = GRADE_7_QUESTIONS['OMAN_CIVILIZATION'] || QUIZ_QUESTIONS;

export const BASIC_STATUTE_SECTIONS = [
    { id: Section.STATUTE_INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.STATUTE_STRUCTURE, label: 'هيكل النظام', icon: <LayoutDashboard /> },
    { id: Section.STATUTE_PILLARS, label: 'المرتكزات', icon: <Target /> },
    { id: Section.STATUTE_PRINCIPLES, label: 'المبادئ الموجهة', icon: <Book /> },
    { id: Section.STATUTE_RUMORS, label: 'وعي قانوني', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const BASIC_STATUTE_QUIZ_QUESTIONS = GRADE_7_QUESTIONS['BASIC_STATUTE'] || QUIZ_QUESTIONS;

export const STATE_INSTITUTIONS_SECTIONS = [
    { id: Section.STATE_INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.STATE_STRUCTURE, label: 'السلطات الثلاث', icon: <Scale /> },
    { id: Section.HEAD_OF_STATE, label: 'رئيس الدولة', icon: <Crown /> },
    { id: Section.GOV_INSTITUTIONS, label: 'المؤسسات', icon: <Building2 /> },
    { id: Section.GOV_SERVICES, label: 'الخدمات', icon: <Hand /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const STATE_INSTITUTIONS_QUIZ_QUESTIONS = GRADE_7_QUESTIONS['STATE_INSTITUTIONS'] || QUIZ_QUESTIONS;

export const UNIT_1_ASSESSMENT_QUESTIONS = (GRADE_7_QUESTIONS['WEATHER'] || []).concat(GRADE_7_QUESTIONS['OMAN_CLIMATE'] || [], GRADE_7_QUESTIONS['EARTH_LAYERS'] || [], GRADE_7_QUESTIONS['EXTERNAL_PROCESSES'] || []);
export const UNIT_2_ASSESSMENT_QUESTIONS = (GRADE_7_QUESTIONS['ABBASID_STATE'] || []).concat(GRADE_7_QUESTIONS['OMAN_ABBASID'] || [], GRADE_7_QUESTIONS['OMAN_CIVILIZATION'] || []);
export const UNIT_3_ASSESSMENT_QUESTIONS = (GRADE_7_QUESTIONS['BASIC_STATUTE'] || []).concat(GRADE_7_QUESTIONS['STATE_INSTITUTIONS'] || []);

// --- GRADE 6 CONSTANTS ---
export const SIXTH_LOCATION_SECTIONS = [
    { id: Section.LOC_INTRO, label: 'المفهوم', icon: <Globe2 /> },
    { id: Section.LOC_COORDINATES, label: 'الإحداثيات', icon: <Navigation /> },
    { id: Section.LOC_TIME, label: 'حساب الزمن', icon: <Clock /> },
    { id: Section.LOC_OMAN, label: 'موقع عمان', icon: <MapPin /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const SIXTH_LOCATION_QUIZ = GRADE_6_QUESTIONS['SIXTH_LOCATION'] || QUIZ_QUESTIONS;

export const SIXTH_POPULATION_SECTIONS = [
    { id: Section.INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.POP_SOURCES, label: 'مصادر البيانات', icon: <BookOpen /> },
    { id: Section.POP_CENSUS_FORM, label: 'استمارة التعداد', icon: <FileText /> },
    { id: Section.CENSUS_EVOLUTION, label: 'تطور التعداد', icon: <TrendingUp /> },
    { id: Section.POP_IMPORTANCE, label: 'أهمية البيانات', icon: <Star /> },
    { id: Section.POP_ACTIVITY, label: 'نشاط تفاعلي', icon: <Activity /> },
    { id: Section.SUMMARY, label: 'الخلاصة', icon: <CheckCircle /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const SIXTH_POPULATION_QUIZ = GRADE_6_QUESTIONS['SIXTH_POPULATION'] || QUIZ_QUESTIONS;

export const SIXTH_STRUCTURE_SECTIONS = [
    { id: Section.INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.FACTORS, label: 'البنية النوعية', icon: <Users /> },
    { id: Section.REGIONS, label: 'البنية العمرية', icon: <BarChart2 /> },
    { id: Section.DATA_ANALYSIS, label: 'الهرم السكاني', icon: <Activity /> },
    { id: Section.PROCESSES, label: 'البنية الاقتصادية', icon: <Briefcase /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const SIXTH_STRUCTURE_QUIZ = GRADE_6_QUESTIONS['SIXTH_STRUCTURE'] || QUIZ_QUESTIONS;

export const SIXTH_GROWTH_SECTIONS = [
    { id: Section.GROWTH_INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.OMAN_GROWTH_CHART, label: 'تحليل النمو', icon: <TrendingUp /> },
    { id: Section.NATURAL_INCREASE, label: 'الزيادة الطبيعية', icon: <Users /> },
    { id: Section.MIGRATION_IMPACT, label: 'الهجرة', icon: <ArrowDown /> },
    { id: Section.GROWTH_EFFECTS, label: 'آثار النمو', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const SIXTH_GROWTH_QUIZ = GRADE_6_QUESTIONS['SIXTH_GROWTH'] || QUIZ_QUESTIONS;

export const SIXTH_DENSITY_SECTIONS = [
    { id: Section.DENSITY_INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.DENSITY_FACTORS, label: 'عوامل التوزيع', icon: <Settings /> },
    { id: Section.CITY_VILLAGE, label: 'المدينة والريف', icon: <Building2 /> },
    { id: Section.DENSITY_CALC, label: 'حساب الكثافة', icon: <Activity /> },
    { id: Section.DENSITY_MAP_ANALYSIS, label: 'تحليل الخرائط', icon: <MapIcon /> },
    { id: Section.OMAN_DENSITY, label: 'كثافة عمان', icon: <MapPin /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const SIXTH_DENSITY_QUIZ = GRADE_6_QUESTIONS['SIXTH_DENSITY'] || QUIZ_QUESTIONS;

export const UMAYYAD_SECTIONS = [
    { id: Section.UMAYYAD_RISE, label: 'التأسيس', icon: <Crown /> },
    { id: Section.UMAYYAD_CONQUESTS, label: 'الفتوحات', icon: <MapIcon /> },
    { id: Section.UMAYYAD_ACHIEVEMENTS, label: 'المنجزات', icon: <Star /> },
    { id: Section.UMAYYAD_FALL, label: 'السقوط', icon: <ArrowDown /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const UMAYYAD_QUIZ_QUESTIONS = GRADE_6_QUESTIONS['SIXTH_UMAYYAD_STATE'] || QUIZ_QUESTIONS;

export const OMAN_UMAYYAD_SECTIONS = [
    { id: Section.OMAN_UMAYYAD_INTRO, label: 'المقدمة والموقف', icon: <Info /> },
    { id: Section.OMAN_UMAYYAD_INDEPENDENCE, label: 'المقاومة', icon: <Shield /> },
    { id: Section.OMAN_UMAYYAD_CONTROL, label: 'حملات الحجاج', icon: <Swords /> },
    { id: Section.OMAN_UMAYYAD_GOVERNORS, label: 'الولاة والهجرة', icon: <Users /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_UMAYYAD_QUIZ_QUESTIONS = GRADE_6_QUESTIONS['OMAN_UMAYYAD'] || QUIZ_QUESTIONS;

export const OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS = [
    { id: Section.OMAN_ACHIEVEMENTS_INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.OMAN_ACHIEVEMENTS_CULTURE, label: 'ثقافة وعلوم', icon: <BookOpen /> },
    { id: Section.OMAN_ACHIEVEMENTS_MILITARY, label: 'عسكري وسياسي', icon: <Swords /> },
    { id: Section.OMAN_ACHIEVEMENTS_ECONOMY, label: 'اقتصاد وعمارة', icon: <Building2 /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ = GRADE_6_QUESTIONS['OMAN_UMAYYAD_ACHIEVEMENTS'] || QUIZ_QUESTIONS;

export const CIVIL_SOCIETY_SECTIONS = [
    { id: Section.CIVIL_SOCIETY_INTRO, label: 'المفهوم', icon: <Info /> },
    { id: Section.CIVIL_SOCIETY_TYPES, label: 'الأنواع', icon: <Layers /> },
    { id: Section.CIVIL_SOCIETY_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const CIVIL_SOCIETY_QUIZ = GRADE_6_QUESTIONS['SIXTH_CIVIL_SOCIETY'] || QUIZ_QUESTIONS;

export const COMMUNITY_PARTICIPATION_SECTIONS = [
    { id: Section.COMMUNITY_INTRO, label: 'المفهوم', icon: <Info /> },
    { id: Section.COMMUNITY_FORMS, label: 'صور المشاركة', icon: <Users /> },
    { id: Section.COMMUNITY_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const COMMUNITY_PARTICIPATION_QUIZ = GRADE_6_QUESTIONS['SIXTH_COMMUNITY_PARTICIPATION'] || QUIZ_QUESTIONS;

// --- GRADE 5 CONSTANTS ---
export const MAPS_SECTIONS = [
    { id: Section.MAPS_INTRO, label: 'تطور الخرائط', icon: <History /> },
    { id: Section.MAPS_TYPES, label: 'أنواع الخرائط', icon: <Layers /> },
    { id: Section.MAPS_ELEMENTS, label: 'عناصر الخريطة', icon: <MapIcon /> },
    { id: Section.MAPS_READING, label: 'قراءة الخريطة', icon: <Eye /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const MAPS_QUIZ = QUIZ_QUESTIONS;

export const FIFTH_SPHERES_SECTIONS = [
    { id: 'INTRO', label: 'المقدمة', icon: <Info /> },
    { id: 'SOLAR_SYSTEM', label: 'النظام الشمسي', icon: <Sun /> },
    { id: 'EARTH_LOCATION', label: 'موقع الأرض', icon: <Globe2 /> }
];

// Grade 5 Quizzes (Populated from Grade 5 Data)
export const FIFTH_SPHERES_QUIZ = GRADE_5_QUESTIONS['FIFTH_SPHERES_1'] || QUIZ_QUESTIONS;
export const FIFTH_SPHERES_RELATION_QUIZ = GRADE_5_QUESTIONS['FIFTH_SPHERES_2'] || QUIZ_QUESTIONS;
export const FIFTH_RESOURCES_QUIZ = GRADE_5_QUESTIONS['FIFTH_RESOURCES'] || QUIZ_QUESTIONS;
export const FIFTH_ISLAMIC_STATE_QUIZ = GRADE_5_QUESTIONS['FIFTH_ISLAMIC_STATE'] || QUIZ_QUESTIONS;
export const FIFTH_OMAN_PROPHET_QUIZ = GRADE_5_QUESTIONS['FIFTH_OMAN_PROPHET'] || QUIZ_QUESTIONS;
export const FIFTH_OMAN_PERSONALITIES_QUIZ = GRADE_5_QUESTIONS['FIFTH_OMAN_PERSONALITIES'] || QUIZ_QUESTIONS;
export const FIFTH_RIGHTS_DUTIES_QUIZ = GRADE_5_QUESTIONS['FIFTH_RIGHTS_DUTIES'] || QUIZ_QUESTIONS;
export const FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ = GRADE_5_QUESTIONS['FIFTH_INSTITUTIONS'] || QUIZ_QUESTIONS;

// Units Definitions
// Grade 7 Units
export const UNITS: Unit[] = [
  {
    id: 'unit1',
    title: 'الغلاف الجوي',
    description: 'دراسة الطقس والمناخ والعوامل المؤثرة فيهما',
    lessons: [
      { id: 'WEATHER', title: 'الطقس والمناخ', subtitle: 'مفاهيم أساسية', description: 'الفرق بين الطقس والمناخ وعناصرهما.', icon: <CloudSun />, color: 'text-sky-500', textColor: 'text-sky-600', available: true },
      { id: 'OMAN_CLIMATE', title: 'مناخ عمان', subtitle: 'دراسة حالة', description: 'العوامل المؤثرة في مناخ السلطنة.', icon: <Sun />, color: 'text-orange-500', textColor: 'text-orange-600', available: true },
      { id: 'EARTH_LAYERS', title: 'تشكيل الأرض', subtitle: 'العمليات الداخلية', description: 'طبقات الأرض والزلازل والبراكين.', icon: <Layers />, color: 'text-amber-700', textColor: 'text-amber-800', available: true },
      { id: 'EXTERNAL_PROCESSES', title: 'العمليات الخارجية', subtitle: 'التجوية والتعرية', description: 'أثر الرياح والمياه في تشكيل السطح.', icon: <Mountain />, color: 'text-stone-500', textColor: 'text-stone-600', available: true },
      { id: 'UNIT_1_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'اختبار شامل', description: 'مراجعة وتقييم للمفاهيم المكتسبة.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  },
  {
    id: 'unit2',
    title: 'الدولة العباسية وعمان',
    description: 'تاريخ الحضارة الإسلامية وعمان في العصر العباسي',
    lessons: [
      { id: 'ABBASID_STATE', title: 'العصر العباسي الثاني', subtitle: 'الضعف والازدهار', description: 'الأوضاع السياسية والحضارية.', icon: <Scroll />, color: 'text-purple-600', textColor: 'text-purple-700', available: true },
      { id: 'OMAN_ABBASID', title: 'عمان في العصر العباسي', subtitle: 'استقلال وسيادة', description: 'الإمامة الثانية ودولة النباهنة.', icon: <Shield />, color: 'text-rose-600', textColor: 'text-rose-700', available: true },
      { id: 'OMAN_CIVILIZATION', title: 'المنجزات الحضارية', subtitle: 'تراث عمان', description: 'العمارة والثقافة والاقتصاد.', icon: <Building2 />, color: 'text-amber-600', textColor: 'text-amber-700', available: true },
      { id: 'UNIT_2_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'اختبار تاريخي', description: 'اختبر معلوماتك التاريخية.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  },
  {
    id: 'unit3',
    title: 'مؤسسات الدولة',
    description: 'التربية للمواطنة والنظام الأساسي',
    lessons: [
      { id: 'BASIC_STATUTE', title: 'النظام الأساسي', subtitle: 'دستور الدولة', description: 'المبادئ والحقوق والواجبات.', icon: <BookOpen />, color: 'text-teal-600', textColor: 'text-teal-700', available: true },
      { id: 'STATE_INSTITUTIONS', title: 'مؤسسات الدولة', subtitle: 'السلطات الثلاث', description: 'تنظيم الدولة وخدماتها.', icon: <Landmark />, color: 'text-cyan-600', textColor: 'text-cyan-700', available: true },
      { id: 'UNIT_3_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'وعي قانوني', description: 'قياس الفهم للمواطنة.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  }
];

// Grade 6 Units
export const UNITS_SIXTH: Unit[] = [
  {
    id: 'unit1_g6',
    title: 'السكان في العالم',
    description: 'دراسة البيانات السكانية والنمو والتركيب',
    lessons: [
      { id: 'SIXTH_POPULATION', title: 'البيانات السكانية', subtitle: 'المصادر والتعداد', description: 'مصادر البيانات وأهميتها.', icon: <Database />, color: 'text-blue-600', textColor: 'text-blue-700', available: true },
      { id: 'SIXTH_STRUCTURE', title: 'البنية السكانية', subtitle: 'النوع والعمر', description: 'الهرم السكاني والتركيب العمري والنوعي.', icon: <BarChart2 />, color: 'text-emerald-600', textColor: 'text-emerald-700', available: true },
      { id: 'SIXTH_GROWTH', title: 'النمو السكاني', subtitle: 'الزيادة والهجرة', description: 'حساب الزيادة الطبيعية وغير الطبيعية.', icon: <TrendingUp />, color: 'text-indigo-600', textColor: 'text-indigo-700', available: true },
      { id: 'SIXTH_DENSITY', title: 'الكثافة السكانية', subtitle: 'التوزيع الجغرافي', description: 'العوامل المؤثرة في توزيع السكان.', icon: <MapIcon />, color: 'text-rose-600', textColor: 'text-rose-700', available: true },
      { id: 'UNIT_1_G6_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'اختبار سكاني', description: 'مراجعة شاملة لوحدة السكان.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  },
  {
    id: 'unit2_g6',
    title: 'الدولة الأموية',
    description: 'التاريخ الإسلامي والعماني في العصر الأموي',
    lessons: [
      { id: 'SIXTH_UMAYYAD_STATE', title: 'قيام الدولة الأموية', subtitle: 'تاريخ إسلامي', description: 'التأسيس والفتوحات وأبرز الخلفاء.', icon: <Crown />, color: 'text-emerald-600', textColor: 'text-emerald-700', available: true },
      { id: 'OMAN_UMAYYAD', title: 'عمان والأمويون', subtitle: 'الموقف السياسي', description: 'العلاقة مع الدولة الأموية ومقاومة الحجاج.', icon: <Shield />, color: 'text-orange-600', textColor: 'text-orange-700', available: true },
      { id: 'OMAN_UMAYYAD_ACHIEVEMENTS', title: 'منجزات عمانية', subtitle: 'حضارة وتراث', description: 'الإسهامات العلمية والبحرية والعسكرية.', icon: <Star />, color: 'text-teal-600', textColor: 'text-teal-700', available: true },
      { id: 'UNIT_2_G6_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'اختبار تاريخي', description: 'قياس المعرفة التاريخية.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  },
  {
    id: 'unit3_g6',
    title: 'المجتمع المدني',
    description: 'المشاركة والعمل التطوعي',
    lessons: [
      { id: 'SIXTH_CIVIL_SOCIETY', title: 'مؤسسات المجتمع', subtitle: 'مفاهيم', description: 'مفهوم المجتمع المدني وأهميته.', icon: <Users />, color: 'text-teal-600', textColor: 'text-teal-700', available: true },
      { id: 'SIXTH_COMMUNITY_PARTICIPATION', title: 'المشاركة المجتمعية', subtitle: 'تفاعل وعطاء', description: 'أشكال المشاركة وأهميتها.', icon: <Heart />, color: 'text-blue-600', textColor: 'text-blue-700', available: true },
      { id: 'UNIT_3_G6_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'وعي مجتمعي', description: 'اختبار المفاهيم المدنية.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  }
];

// Grade 5 Units
export const UNITS_FIFTH: Unit[] = [
  {
    id: 'unit1_g5',
    title: 'الأرض والموارد',
    description: 'الكون وأغلفة الأرض والموارد الطبيعية',
    lessons: [
      { id: 'FIFTH_SPHERES_1', title: 'المجموعة الشمسية', subtitle: 'الفضاء', description: 'كواكب المجموعة الشمسية وأغلفة الأرض.', icon: <Sun />, color: 'text-blue-500', textColor: 'text-blue-600', available: true },
      { id: 'FIFTH_SPHERES_2', title: 'علاقة الأغلفة', subtitle: 'تكامل بيئي', description: 'التفاعل بين أغلفة الأرض وتأثير الإنسان.', icon: <Globe2 />, color: 'text-green-600', textColor: 'text-green-700', available: true },
      { id: 'FIFTH_RESOURCES', title: 'الموارد الطبيعية', subtitle: 'ثروات بلادي', description: 'أنواع الموارد وأهميتها الاقتصادية.', icon: <Leaf />, color: 'text-amber-600', textColor: 'text-amber-700', available: true },
      { id: 'FIFTH_UNIT_1_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'اختبار جغرافي', description: 'مراجعة المفاهيم الجغرافية.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  },
  {
    id: 'unit2_g5',
    title: 'تاريخ عمان الإسلامي',
    description: 'عمان في صدر الإسلام',
    lessons: [
      { id: 'FIFTH_ISLAMIC_STATE', title: 'الدولة الإسلامية', subtitle: 'التأسيس', description: 'هجرة الرسول وتأسيس الدولة في المدينة.', icon: <Moon />, color: 'text-emerald-600', textColor: 'text-emerald-700', available: true },
      { id: 'FIFTH_OMAN_PROPHET', title: 'عمان والرسالة', subtitle: 'إسلام أهل عمان', description: 'قصة مازن بن غضوبة ورسائل النبي.', icon: <Mail />, color: 'text-amber-600', textColor: 'text-amber-700', available: true },
      { id: 'FIFTH_OMAN_PERSONALITIES', title: 'شخصيات عمانية', subtitle: 'أعلام', description: 'صحابة وعلماء عمانيون بارزون.', icon: <User />, color: 'text-purple-600', textColor: 'text-purple-700', available: true },
      { id: 'FIFTH_UNIT_2_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'اختبار تاريخي', description: 'مراجعة السيرة والتاريخ العماني.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  },
  {
    id: 'unit3_g5',
    title: 'حقوقي وواجباتي',
    description: 'التربية للمواطنة',
    lessons: [
      { id: 'FIFTH_RIGHTS_DUTIES', title: 'الحقوق والواجبات', subtitle: 'مواطنة', description: 'مفاهيم الحقوق والواجبات والعلاقة بينها.', icon: <Scale />, color: 'text-teal-600', textColor: 'text-teal-700', available: true },
      { id: 'FIFTH_INSTITUTIONS', title: 'الحقوق والمؤسسات', subtitle: 'رعاية وحماية', description: 'المؤسسات الوطنية والاتفاقيات الدولية.', icon: <Building2 />, color: 'text-cyan-600', textColor: 'text-cyan-700', available: true },
      { id: 'FIFTH_UNIT_3_ASSESSMENT', title: 'تقييم الوحدة', subtitle: 'وعي مدني', description: 'اختبار في الحقوق والواجبات.', icon: <CheckCircle />, color: 'text-green-600', textColor: 'text-green-700', available: true }
    ]
  }
];
