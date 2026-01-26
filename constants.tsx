
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
  Calendar, Sun, Shield, Database, FileText, History, RefreshCw, Mail
} from 'lucide-react';
import React from 'react';
import { GRADE_5_QUESTIONS } from './data/grade5Questions';

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
export const OMAN_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

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
export const EARTH_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const EXTERNAL_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.WEATHERING, label: 'التجوية', icon: <Sun /> },
    { id: Section.EROSION, label: 'التعرية', icon: <Wind /> },
    { id: Section.DEPOSITION, label: 'الترسيب', icon: <Layers /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const EXTERNAL_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.POLITICAL_MAP, label: 'الخريطة السياسية', icon: <MapIcon /> },
    { id: Section.PROSPERITY, label: 'مظاهر الازدهار', icon: <Star /> },
    { id: Section.CRUSADES, label: 'الحملات الصليبية', icon: <Swords /> },
    { id: Section.MONGOLS, label: 'الغزو المغولي', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const ABBASID_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const OMAN_ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.IMAMATE_STABILITY, label: 'استقرار الإمامة', icon: <Shield /> },
    { id: Section.SOCOTRA_CAMPAIGN, label: 'حملة سقطرى', icon: <Ship /> },
    { id: Section.ABBASID_INVASION, label: 'الغزو العباسي', icon: <Swords /> },
    { id: Section.NABHANID_ERA, label: 'دولة النباهنة', icon: <Crown /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_ABBASID_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const OMAN_CIVILIZATION_SECTIONS = [
    { id: Section.OMAN_CIV_INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.OMAN_CIV_CULTURE, label: 'الحياة الثقافية', icon: <BookOpen /> },
    { id: Section.OMAN_CIV_ECONOMY, label: 'الحياة الاقتصادية', icon: <Briefcase /> },
    { id: Section.OMAN_CIV_ARCH, label: 'العمارة', icon: <Building2 /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_CIVILIZATION_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const BASIC_STATUTE_SECTIONS = [
    { id: Section.STATUTE_INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.STATUTE_STRUCTURE, label: 'هيكل النظام', icon: <LayoutDashboard /> },
    { id: Section.STATUTE_PILLARS, label: 'المرتكزات', icon: <Target /> },
    { id: Section.STATUTE_PRINCIPLES, label: 'المبادئ الموجهة', icon: <Book /> },
    { id: Section.STATUTE_RUMORS, label: 'وعي قانوني', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const BASIC_STATUTE_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const STATE_INSTITUTIONS_SECTIONS = [
    { id: Section.STATE_INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.STATE_STRUCTURE, label: 'السلطات الثلاث', icon: <Scale /> },
    { id: Section.HEAD_OF_STATE, label: 'رئيس الدولة', icon: <Crown /> },
    { id: Section.GOV_INSTITUTIONS, label: 'المؤسسات', icon: <Building2 /> },
    { id: Section.GOV_SERVICES, label: 'الخدمات', icon: <Hand /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const STATE_INSTITUTIONS_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const UNIT_1_ASSESSMENT_QUESTIONS = QUIZ_QUESTIONS;
export const UNIT_2_ASSESSMENT_QUESTIONS = QUIZ_QUESTIONS;
export const UNIT_3_ASSESSMENT_QUESTIONS = QUIZ_QUESTIONS;

// --- GRADE 6 CONSTANTS ---
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
export const SIXTH_POPULATION_QUIZ = QUIZ_QUESTIONS;

export const SIXTH_STRUCTURE_SECTIONS = [
    { id: Section.INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.FACTORS, label: 'البنية النوعية', icon: <Users /> },
    { id: Section.REGIONS, label: 'البنية العمرية', icon: <BarChart2 /> },
    { id: Section.DATA_ANALYSIS, label: 'الهرم السكاني', icon: <Activity /> },
    { id: Section.PROCESSES, label: 'البنية الاقتصادية', icon: <Briefcase /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const SIXTH_STRUCTURE_QUIZ = QUIZ_QUESTIONS;

export const SIXTH_GROWTH_SECTIONS = [
    { id: Section.GROWTH_INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.OMAN_GROWTH_CHART, label: 'تحليل النمو', icon: <TrendingUp /> },
    { id: Section.NATURAL_INCREASE, label: 'الزيادة الطبيعية', icon: <Users /> },
    { id: Section.MIGRATION_IMPACT, label: 'الهجرة', icon: <ArrowDown /> },
    { id: Section.GROWTH_EFFECTS, label: 'آثار النمو', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const SIXTH_GROWTH_QUIZ = QUIZ_QUESTIONS;

export const SIXTH_DENSITY_SECTIONS = [
    { id: Section.DENSITY_INTRO, label: 'المقدمة', icon: <Info /> },
    { id: Section.DENSITY_FACTORS, label: 'عوامل التوزيع', icon: <Settings /> },
    { id: Section.CITY_VILLAGE, label: 'المدينة والريف', icon: <Building2 /> },
    { id: Section.DENSITY_CALC, label: 'حساب الكثافة', icon: <Activity /> },
    { id: Section.DENSITY_MAP_ANALYSIS, label: 'تحليل الخرائط', icon: <MapIcon /> },
    { id: Section.OMAN_DENSITY, label: 'كثافة عمان', icon: <MapPin /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const SIXTH_DENSITY_QUIZ = QUIZ_QUESTIONS;

export const UMAYYAD_SECTIONS = [
    { id: Section.UMAYYAD_RISE, label: 'التأسيس', icon: <Crown /> },
    { id: Section.UMAYYAD_CONQUESTS, label: 'الفتوحات', icon: <MapIcon /> },
    { id: Section.UMAYYAD_ACHIEVEMENTS, label: 'المنجزات', icon: <Star /> },
    { id: Section.UMAYYAD_FALL, label: 'السقوط', icon: <ArrowDown /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const UMAYYAD_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const OMAN_UMAYYAD_SECTIONS = [
    { id: Section.OMAN_UMAYYAD_INTRO, label: 'المقدمة والموقف', icon: <Info /> },
    { id: Section.OMAN_UMAYYAD_INDEPENDENCE, label: 'المقاومة', icon: <Shield /> },
    { id: Section.OMAN_UMAYYAD_CONTROL, label: 'حملات الحجاج', icon: <Swords /> },
    { id: Section.OMAN_UMAYYAD_GOVERNORS, label: 'الولاة والهجرة', icon: <Users /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_UMAYYAD_QUIZ_QUESTIONS = QUIZ_QUESTIONS;

export const OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS = [
    { id: Section.OMAN_ACHIEVEMENTS_INTRO, label: 'مقدمة', icon: <Info /> },
    { id: Section.OMAN_ACHIEVEMENTS_CULTURE, label: 'ثقافة وعلوم', icon: <BookOpen /> },
    { id: Section.OMAN_ACHIEVEMENTS_MILITARY, label: 'عسكري وسياسي', icon: <Swords /> },
    { id: Section.OMAN_ACHIEVEMENTS_ECONOMY, label: 'اقتصاد وعمارة', icon: <Building2 /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ = QUIZ_QUESTIONS;

export const CIVIL_SOCIETY_SECTIONS = [
    { id: Section.CIVIL_SOCIETY_INTRO, label: 'المفهوم', icon: <Info /> },
    { id: Section.CIVIL_SOCIETY_TYPES, label: 'الأنواع', icon: <Layers /> },
    { id: Section.CIVIL_SOCIETY_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const CIVIL_SOCIETY_QUIZ = QUIZ_QUESTIONS;

export const COMMUNITY_PARTICIPATION_SECTIONS = [
    { id: Section.COMMUNITY_INTRO, label: 'المفهوم', icon: <Info /> },
    { id: Section.COMMUNITY_FORMS, label: 'صور المشاركة', icon: <Users /> },
    { id: Section.COMMUNITY_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'الاختبار', icon: <CheckCircle /> }
];
export const COMMUNITY_PARTICIPATION_QUIZ = QUIZ_QUESTIONS;

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
    { id: 'EARTH_LOCATION', label: 'موقع الأرض', icon: <Globe2 /> },
    { id: 'QUIZ', label: 'الاختبار', icon: <CheckCircle /> }
];
// Grade 5 Quizzes Mapping to Data File
export const FIFTH_SPHERES_QUIZ = GRADE_5_QUESTIONS['FIFTH_SPHERES_1'] || QUIZ_QUESTIONS;
export const FIFTH_SPHERES_RELATION_QUIZ = GRADE_5_QUESTIONS['FIFTH_SPHERES_2'] || QUIZ_QUESTIONS;
export const FIFTH_RESOURCES_QUIZ = GRADE_5_QUESTIONS['FIFTH_RESOURCES'] || QUIZ_QUESTIONS;
export const FIFTH_ISLAMIC_STATE_QUIZ = GRADE_5_QUESTIONS['FIFTH_ISLAMIC_STATE'] || QUIZ_QUESTIONS;
export const FIFTH_OMAN_PROPHET_QUIZ = GRADE_5_QUESTIONS['FIFTH_OMAN_PROPHET'] || QUIZ_QUESTIONS;
export const FIFTH_OMAN_PERSONALITIES_QUIZ = GRADE_5_QUESTIONS['FIFTH_OMAN_PERSONALITIES'] || QUIZ_QUESTIONS;
export const FIFTH_RIGHTS_DUTIES_QUIZ = GRADE_5_QUESTIONS['FIFTH_RIGHTS_DUTIES'] || QUIZ_QUESTIONS;
export const FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ = GRADE_5_QUESTIONS['FIFTH_INSTITUTIONS'] || QUIZ_QUESTIONS;

// --- UNITS CONFIGURATION ---
export const UNITS: Unit[] = [
  {
    id: 'unit1',
    title: 'الوحدة الأولى: الغلاف الحيوي',
    description: 'دراسة الطقس والمناخ والعمليات التي تشكل سطح الأرض',
    lessons: [
      { id: 'WEATHER', title: 'الطقس والمناخ', subtitle: 'الدرس الأول', description: 'مفهوم الطقس والمناخ والفرق بينهما', icon: <CloudSun />, color: 'text-sky-500', textColor: 'text-sky-600', available: true },
      { id: 'OMAN_CLIMATE', title: 'مناخ سلطنة عمان', subtitle: 'الدرس الثاني', description: 'خصائص المناخ في عمان والعوامل المؤثرة', icon: <MapIcon />, color: 'text-emerald-500', textColor: 'text-emerald-600', available: true },
      { id: 'EARTH_LAYERS', title: 'تشكيل سطح الأرض (١)', subtitle: 'الدرس الثالث', description: 'طبقات الأرض وحركة الصفائح', icon: <Layers />, color: 'text-orange-500', textColor: 'text-orange-600', available: true },
      { id: 'EXTERNAL_PROCESSES', title: 'تشكيل سطح الأرض (٢)', subtitle: 'الدرس الرابع', description: 'العمليات الخارجية (التجوية والتعرية)', icon: <Mountain />, color: 'text-amber-500', textColor: 'text-amber-600', available: true },
      { id: 'UNIT_1_ASSESSMENT', title: 'تقويم الوحدة الأولى', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-indigo-500', textColor: 'text-indigo-600', available: true }
    ]
  },
  {
    id: 'unit2',
    title: 'الوحدة الثانية: الدولة العباسية',
    description: 'تاريخ الدولة العباسية ودور عمان في تلك الحقبة',
    lessons: [
      { id: 'ABBASID_STATE', title: 'الدولة العباسية', subtitle: 'الدرس الأول', description: 'نشأتها، ازدهارها، وسقوطها', icon: <Landmark />, color: 'text-purple-500', textColor: 'text-purple-600', available: true },
      { id: 'OMAN_ABBASID', title: 'عمان في العصر العباسي', subtitle: 'الدرس الثاني', description: 'استقلال عمان وأبرز الأحداث', icon: <Shield />, color: 'text-rose-500', textColor: 'text-rose-600', available: true },
      { id: 'OMAN_CIVILIZATION', title: 'المنجزات الحضارية', subtitle: 'الدرس الثالث', description: 'إسهامات عمان الحضارية في تلك الفترة', icon: <Star />, color: 'text-amber-500', textColor: 'text-amber-600', available: true },
      { id: 'UNIT_2_ASSESSMENT', title: 'تقويم الوحدة الثانية', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-indigo-500', textColor: 'text-indigo-600', available: true }
    ]
  },
  {
    id: 'unit3',
    title: 'الوحدة الثالثة: مؤسسات الدولة',
    description: 'النظام الأساسي للدولة ومؤسساتها الحديثة',
    lessons: [
      { id: 'BASIC_STATUTE', title: 'النظام الأساسي للدولة', subtitle: 'الدرس الأول', description: 'أهمية النظام الأساسي ومحتوياته', icon: <BookOpen />, color: 'text-teal-500', textColor: 'text-teal-600', available: true },
      { id: 'STATE_INSTITUTIONS', title: 'مؤسسات الدولة', subtitle: 'الدرس الثاني', description: 'أنواع المؤسسات وأدوارها', icon: <Building2 />, color: 'text-cyan-500', textColor: 'text-cyan-600', available: true },
      { id: 'UNIT_3_ASSESSMENT', title: 'تقويم الوحدة الثالثة', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-indigo-500', textColor: 'text-indigo-600', available: true }
    ]
  },
  {
    id: 'exams',
    title: 'الاختبارات النهائية',
    description: 'نماذج اختبارات شاملة للمنهج',
    lessons: [
      { id: 'FINAL_EXAM_G5', title: 'الاختبار النهائي (الصف 7)', subtitle: 'اختبار شامل', description: 'نموذج محاكاة للاختبار النهائي', icon: <Trophy />, color: 'text-yellow-500', textColor: 'text-yellow-600', available: true }
    ]
  }
];

export const UNITS_SIXTH: Unit[] = [
  {
    id: 'unit1',
    title: 'الوحدة الأولى: السكان',
    description: 'دراسة البيانات السكانية والنمو والتركيب السكاني',
    lessons: [
      { id: 'SIXTH_POPULATION', title: 'البيانات السكانية', subtitle: 'الدرس الأول', description: 'مصادر البيانات وأهميتها', icon: <Database />, color: 'text-blue-500', textColor: 'text-blue-600', available: true },
      { id: 'SIXTH_STRUCTURE', title: 'بنية السكان', subtitle: 'الدرس الثاني', description: 'التركيب النوعي والعمري', icon: <Users />, color: 'text-emerald-500', textColor: 'text-emerald-600', available: true },
      { id: 'SIXTH_GROWTH', title: 'النمو السكاني', subtitle: 'الدرس الثالث', description: 'مفهوم النمو والعوامل المؤثرة', icon: <TrendingUp />, color: 'text-indigo-500', textColor: 'text-indigo-600', available: true },
      { id: 'SIXTH_DENSITY', title: 'الكثافة السكانية', subtitle: 'الدرس الرابع', description: 'توزيع السكان والكثافة', icon: <MapPin />, color: 'text-rose-500', textColor: 'text-rose-600', available: true },
      { id: 'UNIT_1_G6_ASSESSMENT', title: 'تقويم الوحدة الأولى', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-purple-500', textColor: 'text-purple-600', available: true }
    ]
  },
  {
    id: 'unit2',
    title: 'الوحدة الثانية: الدولة الأموية',
    description: 'تاريخ الدولة الأموية وعلاقتها بعمان',
    lessons: [
      { id: 'SIXTH_UMAYYAD_STATE', title: 'الدولة الأموية', subtitle: 'الدرس الأول', description: 'التأسيس، الفتوحات، والسقوط', icon: <Crown />, color: 'text-amber-500', textColor: 'text-amber-600', available: true },
      { id: 'OMAN_UMAYYAD', title: 'عمان والأمويون', subtitle: 'الدرس الثاني', description: 'الموقف العماني والمقاومة', icon: <Swords />, color: 'text-orange-500', textColor: 'text-orange-600', available: true },
      { id: 'OMAN_UMAYYAD_ACHIEVEMENTS', title: 'منجزات عمان', subtitle: 'الدرس الثالث', description: 'الحضارة العمانية في العصر الأموي', icon: <Star />, color: 'text-teal-500', textColor: 'text-teal-600', available: true },
      { id: 'UNIT_2_G6_ASSESSMENT', title: 'تقويم الوحدة الثانية', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-purple-500', textColor: 'text-purple-600', available: true }
    ]
  },
  {
    id: 'unit3',
    title: 'الوحدة الثالثة: المجتمع المدني',
    description: 'مفهوم المجتمع المدني والمشاركة المجتمعية',
    lessons: [
      { id: 'SIXTH_CIVIL_SOCIETY', title: 'المجتمع المدني', subtitle: 'الدرس الأول', description: 'مفهومه ومؤسساته', icon: <Heart />, color: 'text-pink-500', textColor: 'text-pink-600', available: true },
      { id: 'SIXTH_COMMUNITY_PARTICIPATION', title: 'المشاركة المجتمعية', subtitle: 'الدرس الثاني', description: 'أهميتها وصورها', icon: <Hand />, color: 'text-cyan-500', textColor: 'text-cyan-600', available: true },
      { id: 'UNIT_3_G6_ASSESSMENT', title: 'تقويم الوحدة الثالثة', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-purple-500', textColor: 'text-purple-600', available: true }
    ]
  },
  {
    id: 'exams',
    title: 'الاختبارات النهائية',
    description: 'نماذج اختبارات شاملة للمنهج',
    lessons: [
      { id: 'FINAL_EXAM_G6', title: 'الاختبار النهائي (الصف 6)', subtitle: 'اختبار شامل', description: 'نموذج محاكاة للاختبار النهائي', icon: <Trophy />, color: 'text-yellow-500', textColor: 'text-yellow-600', available: true }
    ]
  }
];

export const UNITS_FIFTH: Unit[] = [
  {
    id: 'unit1',
    title: 'الوحدة الأولى: الأرض والموارد',
    description: 'كوكب الأرض وأغلفته والموارد الطبيعية',
    lessons: [
      { id: 'FIFTH_SPHERES_1', title: 'أغلفة الأرض (١)', subtitle: 'الدرس الأول', description: 'موقع الأرض والنظام الشمسي', icon: <Globe2 />, color: 'text-blue-500', textColor: 'text-blue-600', available: true },
      { id: 'FIFTH_SPHERES_2', title: 'أغلفة الأرض (٢)', subtitle: 'الدرس الثاني', description: 'علاقة الأغلفة ودورة الماء', icon: <RefreshCw />, color: 'text-green-500', textColor: 'text-green-600', available: true },
      { id: 'FIFTH_RESOURCES', title: 'الموارد الطبيعية', subtitle: 'الدرس الثالث', description: 'أنواع الموارد وأهميتها', icon: <Leaf />, color: 'text-amber-500', textColor: 'text-amber-600', available: true },
      { id: 'FIFTH_UNIT_1_ASSESSMENT', title: 'تقويم الوحدة الأولى', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-indigo-500', textColor: 'text-indigo-600', available: true }
    ]
  },
  {
    id: 'unit2',
    title: 'الوحدة الثانية: تاريخ عمان',
    description: 'عمان في عصر النبوة والخلافة الراشدة',
    lessons: [
      { id: 'FIFTH_ISLAMIC_STATE', title: 'الدولة الإسلامية', subtitle: 'الدرس الأول', description: 'تأسيس الدولة في المدينة', icon: <Landmark />, color: 'text-teal-500', textColor: 'text-teal-600', available: true },
      { id: 'FIFTH_OMAN_PROPHET', title: 'عمان والرسالة', subtitle: 'الدرس الثاني', description: 'إسلام أهل عمان ورسائل النبي', icon: <Mail />, color: 'text-emerald-500', textColor: 'text-emerald-600', available: true },
      { id: 'FIFTH_OMAN_PERSONALITIES', title: 'شخصيات عمانية', subtitle: 'الدرس الثالث', description: 'أبرز الشخصيات في تلك الحقبة', icon: <Users />, color: 'text-purple-500', textColor: 'text-purple-600', available: true },
      { id: 'FIFTH_UNIT_2_ASSESSMENT', title: 'تقويم الوحدة الثانية', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-indigo-500', textColor: 'text-indigo-600', available: true }
    ]
  },
  {
    id: 'unit3',
    title: 'الوحدة الثالثة: حقوقي وواجباتي',
    description: 'المواطنة الصالحة والمؤسسات الوطنية',
    lessons: [
      { id: 'FIFTH_RIGHTS_DUTIES', title: 'الحقوق والواجبات', subtitle: 'الدرس الأول', description: 'مفهوم الحقوق والواجبات', icon: <Scale />, color: 'text-rose-500', textColor: 'text-rose-600', available: true },
      { id: 'FIFTH_INSTITUTIONS', title: 'المؤسسات والاتفاقيات', subtitle: 'الدرس الثاني', description: 'حقوق الطفل والمؤسسات الراعية', icon: <Building2 />, color: 'text-cyan-500', textColor: 'text-cyan-600', available: true },
      { id: 'FIFTH_UNIT_3_ASSESSMENT', title: 'تقويم الوحدة الثالثة', subtitle: 'مراجعة شاملة', description: 'اختبار شامل لمفاهيم الوحدة', icon: <CheckCircle />, color: 'text-indigo-500', textColor: 'text-indigo-600', available: true }
    ]
  }
];
