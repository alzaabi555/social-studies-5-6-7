
import { Unit, Section, QuizQuestion, WeatherElement, EarthLayer, OmanRegion } from './types';
import { 
  CloudSun, Thermometer, Wind, Umbrella, CloudRain, Mountain, Globe2, 
  BookOpen, Flag, Scale, Landmark, Users, Briefcase, 
  Map, Activity, Database, FileText, Smartphone, Vote, HeartHandshake,
  Leaf, Sun, Droplet, Cloud, Coins, Shield, Castle, Star, ArrowDown,
  Swords, List, Target, ArrowLeftRight, AlertTriangle, Calculator,
  Building2, Layers, Book, Crown, Pickaxe, Moon, Mail, User, Heart, Scale3d,
  Compass, History, Settings, BarChart2, Hammer, HelpCircle, Gauge,
  TrendingUp, MapPin, CheckCircle2, Trophy, Award, Scroll, CheckCircle
} from 'lucide-react';
import React from 'react';

// --- WEATHER ELEMENTS ---
export const WEATHER_ELEMENTS_DATA: WeatherElement[] = [
    {
        id: 'temp',
        name: 'درجة الحرارة',
        instrument: 'الثرمومتر',
        unit: 'درجة مئوية (C°)',
        definition: 'مقدار السخونة أو البرودة في الهواء.',
        mechanism: 'يعتمد التسخين على أشعة الشمس. تختلف الحرارة باختلاف زاوية سقوط الأشعة وطبيعة السطح.',
        importance: 'تؤثر في نشاط الإنسان ونمو النباتات وبقية عناصر الطقس.',
        realWorldExample: 'ارتفاع الحرارة صيفاً يدفعنا لاستخدام التكييف، وانخفاضها شتاءً يتطلب التدفئة.',
        icon: <Thermometer />
    },
    {
        id: 'pressure',
        name: 'الضغط الجوي',
        instrument: 'البارومتر',
        unit: 'مليبار (mb)',
        definition: 'وزن عمود الهواء الواقع على وحدة المساحة (1 سم²) من سطح الأرض حتى نهاية الغلاف الجوي.',
        mechanism: 'ينشأ من وزن الهواء. يقل الضغط كلما ارتفعنا عن سطح البحر.',
        importance: 'المحرك الرئيسي للرياح؛ حيث تنتقل الرياح من مناطق الضغط المرتفع إلى المنخفض.',
        realWorldExample: 'انسداد الأذن عند صعود الجبل أو ركوب الطائرة بسبب تغير الضغط.',
        icon: <Activity />
    },
    {
        id: 'wind',
        name: 'الرياح',
        instrument: 'الأنيمومتر (سرعة) / دوارة الرياح (اتجاه)',
        unit: 'عقدة (للسرعة)',
        definition: 'حركة الهواء الأفقية على سطح الأرض.',
        mechanism: 'تتحرك نتيجة اختلاف الضغط الجوي بين منطقتين.',
        importance: 'تلطيف الجو، نقل حبوب اللقاح، تحريك السفن الشراعية، وتوليد الكهرباء.',
        realWorldExample: 'حركة الأشجار، نسيم البحر نهاراً، والعواصف الرملية.',
        icon: <Wind />
    },
    {
        id: 'humidity',
        name: 'الرطوبة',
        instrument: 'الهيجرومتر',
        unit: 'نسبة مئوية (%)',
        definition: 'كمية بخار الماء العالق في الهواء.',
        mechanism: 'تنتج عن تبخر المياه من البحار والمحيطات والنباتات.',
        importance: 'أساسية لتكون السحب ونزول الأمطار.',
        realWorldExample: 'الشعور باللزوجة والحرارة الزائدة في المناطق الساحلية (مثل مسقط وصحار).',
        icon: <Droplet />
    },
    {
        id: 'precipitation',
        name: 'التساقط (الأمطار)',
        instrument: 'مقياس المطر',
        unit: 'ملم (mm)',
        definition: 'تكثف بخار الماء في طبقات الجو العليا وسقوطه.',
        mechanism: 'عندما يبرد الهواء المشبع بالبخار، يتكاثف ويتحول لقطرات ماء.',
        importance: 'المصدر الرئيسي للمياه العذبة والزراعة.',
        realWorldExample: 'جريان الأودية (مثل وادي ضيقة) بعد هطول الأمطار.',
        icon: <CloudRain />
    }
];

// --- WEATHER LESSON SECTIONS ---
export const SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.DEFINITION, label: 'المفهوم', icon: <BookOpen /> },
    { id: Section.FACTORS, label: 'العوامل المؤثرة', icon: <Settings /> },
    { id: Section.ELEMENTS, label: 'عناصر الطقس', icon: <CloudSun /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        question: 'وصف حالة الجو في مكان معين خلال فترة زمنية قصيرة يسمى:',
        options: ['الطقس', 'المناخ', 'الغلاف الجوي', 'الضغط'],
        correctIndex: 0
    },
    {
        id: 2,
        question: 'متوسط حالة الجو في مكان ما لفترة زمنية طويلة يسمى:',
        options: ['المناخ', 'الطقس', 'الرياح', 'الحرارة'],
        correctIndex: 0
    },
    {
        id: 3,
        question: 'الجهاز المستخدم لقياس الضغط الجوي:',
        options: ['البارومتر', 'الأنيمومتر', 'الثرمومتر', 'الهيجرومتر'],
        correctIndex: 0
    },
    {
        id: 4,
        question: 'أي مما يلي ليس من عناصر المناخ؟',
        options: ['التربة', 'الحرارة', 'الضغط الجوي', 'الرياح'],
        correctIndex: 0
    }
];

// --- OMAN CLIMATE LESSON ---
export const OMAN_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.FACTORS, label: 'العوامل المؤثرة', icon: <Settings /> },
    { id: Section.REGIONS, label: 'الأقاليم المناخية', icon: <Map /> },
    { id: Section.SEASONS, label: 'فصول السنة', icon: <CloudSun /> },
    { id: Section.DATA_ANALYSIS, label: 'تحليل البيانات', icon: <BarChart2 /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_REGIONS_DATA: OmanRegion[] = [
    { id: 'semi_desert', name: 'شبه الصحراوي', description: 'يسود في شمال السلطنة', characteristics: 'حار صيفاً ودافئ شتاءً', location: 'شمال السلطنة', color: 'bg-yellow-100' },
    { id: 'mediterranean', name: 'البحر المتوسط', description: 'في المناطق الجبلية المرتفعة', characteristics: 'معتدل صيفاً وبارد شتاءً', location: 'الجبل الأخضر', color: 'bg-green-100' },
    { id: 'dry_desert', name: 'الصحراوي الجاف', description: 'يغطي معظم مساحة السلطنة', characteristics: 'شديد الحرارة والجفاف', location: 'الوسطى والربع الخالي', color: 'bg-orange-100' },
    { id: 'monsoon', name: 'الموسمي', description: 'في محافظة ظفار', characteristics: 'أمطار صيفية وحرارة معتدلة', location: 'محافظة ظفار', color: 'bg-teal-100' }
];

export const OMAN_QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        question: 'يسود المناخ الصحراوي الحار في:',
        options: ['معظم محافظات السلطنة', 'الجبل الأخضر', 'محافظة ظفار', 'مسندم'],
        correctIndex: 0
    },
    {
        id: 2,
        question: 'تهب الرياح الموسمية الصيفية على محافظة:',
        options: ['ظفار', 'مسقط', 'البريمي', 'شمال الباطنة'],
        correctIndex: 0
    },
    {
        id: 3,
        question: 'يمر مدار السرطان عبر مدينة:',
        options: ['مسقط', 'صلالة', 'صحار', 'صور'],
        correctIndex: 0
    },
    {
        id: 4,
        question: 'يتميز مناخ الجبل الأخضر بـ:',
        options: ['اعتدال الحرارة صيفاً', 'الحرارة الشديدة صيفاً', 'الجفاف التام', 'انعدام الأمطار'],
        correctIndex: 0
    }
];

// --- EARTH LAYERS LESSON ---
export const EARTH_LAYERS_DATA: EarthLayer[] = [
    { id: 'crust', name: 'القشرة الأرضية', depth: '0-100 كم', temp: 'متفاوتة', description: 'الطبقة الخارجية الصلبة التي نعيش عليها.', state: 'صلبة', color: '#8B4513' },
    { id: 'mantle', name: 'الوشاح', depth: '2900 كم', temp: '1000-3700°C', description: 'طبقة سميكة من الصخور المنصهرة (الماجما).', state: 'لدنة', color: '#D2691E' },
    { id: 'outer_core', name: 'اللب الخارجي', depth: '2200 كم', temp: '4500-5500°C', description: 'طبقة سائلة من الحديد والنيكل.', state: 'سائلة', color: '#FF8C00' },
    { id: 'inner_core', name: 'اللب الداخلي', depth: '1220 كم', temp: '6000°C', description: 'مركز الأرض، صلب بسبب الضغط الهائل.', state: 'صلبة', color: '#FF4500' }
];

export const EARTH_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.LAYERS, label: 'طبقات الأرض', icon: <Layers /> },
    { id: Section.TECTONICS, label: 'الصفائح التكتونية', icon: <Activity /> },
    { id: Section.PROCESSES, label: 'العمليات الداخلية', icon: <Mountain /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const EARTH_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'الطبقة التي نعيش عليها تسمى:', options: ['القشرة الأرضية', 'الوشاح', 'اللب', 'الغلاف الجوي'], correctIndex: 0 },
    { id: 2, question: 'الطبقة التي تتكون من مواد منصهرة (الماجما) هي:', options: ['الوشاح', 'القشرة', 'اللب الداخلي', 'الغلاف الجوي'], correctIndex: 0 }
];

// --- EXTERNAL PROCESSES LESSON ---
export const EXTERNAL_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.WEATHERING, label: 'التجوية', icon: <Sun /> },
    { id: Section.EROSION, label: 'التعرية', icon: <Wind /> },
    { id: Section.DEPOSITION, label: 'الترسب', icon: <Layers /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const EXTERNAL_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'تفتت الصخور في مكانها دون انتقال يسمى:', options: ['التجوية', 'التعرية', 'الترسيب', 'النقل'], correctIndex: 0 }
];

// --- ABBASID LESSON ---
export const ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.POLITICAL_MAP, label: 'الخريطة السياسية', icon: <Map /> },
    { id: Section.PROSPERITY, label: 'الازدهار الحضاري', icon: <Star /> },
    { id: Section.CRUSADES, label: 'الحروب الصليبية', icon: <Shield /> },
    { id: Section.MONGOLS, label: 'الغزو المغولي', icon: <Flag /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const ABBASID_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'انتهت الدولة العباسية على يد:', options: ['المغول', 'الصليبيين', 'الفاطميين', 'الأمويين'], correctIndex: 0 }
];

// --- OMAN ABBASID LESSON ---
export const OMAN_ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.IMAMATE_STABILITY, label: 'الاستقرار', icon: <Shield /> },
    { id: Section.SOCOTRA_CAMPAIGN, label: 'حملة سقطرى', icon: <Flag /> },
    { id: Section.ABBASID_INVASION, label: 'الغزو العباسي', icon: <Swords /> },
    { id: Section.NABHANID_ERA, label: 'دولة النباهنة', icon: <Crown /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_ABBASID_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'قاد حملة تحرير سقطرى الإمام:', options: ['الصلت بن مالك', 'المهلب بن أبي صفرة', 'ناصر بن مرشد', 'أحمد بن سعيد'], correctIndex: 0 }
];

// --- OMAN CIVILIZATION LESSON ---
export const OMAN_CIVILIZATION_SECTIONS = [
    { id: Section.OMAN_CIV_INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.OMAN_CIV_CULTURE, label: 'الثقافة', icon: <BookOpen /> },
    { id: Section.OMAN_CIV_ECONOMY, label: 'الاقتصاد', icon: <Coins /> },
    { id: Section.OMAN_CIV_ARCH, label: 'العمارة', icon: <Hammer /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_CIVILIZATION_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'مؤلف كتاب "العين" هو:', options: ['الخليل بن أحمد', 'ابن دريد', 'المبرد', 'السيرافي'], correctIndex: 0 }
];

// --- BASIC STATUTE LESSON ---
export const BASIC_STATUTE_SECTIONS = [
    { id: Section.STATUTE_INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.STATUTE_STRUCTURE, label: 'الهيكل', icon: <Layers /> },
    { id: Section.STATUTE_PILLARS, label: 'المرتكزات', icon: <Building2 /> },
    { id: Section.STATUTE_PRINCIPLES, label: 'المبادئ', icon: <BookOpen /> },
    { id: Section.STATUTE_RUMORS, label: 'الإشاعات', icon: <HelpCircle /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const BASIC_STATUTE_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'صدر النظام الأساسي للدولة عام:', options: ['1996م', '1970م', '2020م', '2011م'], correctIndex: 0 }
];

// --- STATE INSTITUTIONS LESSON ---
export const STATE_INSTITUTIONS_SECTIONS = [
    { id: Section.STATE_INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.STATE_STRUCTURE, label: 'الهيكل التنظيمي', icon: <Layers /> },
    { id: Section.HEAD_OF_STATE, label: 'رئيس الدولة', icon: <Crown /> },
    { id: Section.GOV_INSTITUTIONS, label: 'المؤسسات', icon: <Building2 /> },
    { id: Section.GOV_SERVICES, label: 'الخدمات', icon: <HeartHandshake /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const STATE_INSTITUTIONS_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'رئيس الدولة هو:', options: ['السلطان', 'رئيس الوزراء', 'رئيس مجلس الشورى', 'رئيس المحكمة العليا'], correctIndex: 0 }
];

// --- GRADE 6 SECTIONS ---
export const SIXTH_POPULATION_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.POP_SOURCES, label: 'مصادر البيانات', icon: <BookOpen /> },
    { id: Section.CENSUS_EVOLUTION, label: 'تطور التعداد', icon: <Activity /> },
    { id: Section.POP_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.SUMMARY, label: 'ملخص', icon: <FileText /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const SIXTH_POPULATION_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'عملية حصر شامل لجميع السكان والمساكن في الدولة تسمى:', options: ['التعداد السكاني', 'المسح بالعينة', 'السجل المدني', 'الإحصاء الحيوي'], correctIndex: 0 },
    { id: 2, question: 'أجري أول تعداد سكاني في سلطنة عمان عام:', options: ['1993م', '2003م', '2010م', '2020م'], correctIndex: 0 },
    { id: 3, question: 'أي من الآتي يعتبر مصدراً ثانوياً للبيانات السكانية؟', options: ['سجلات المدارس والمستشفيات', 'التعداد السكاني', 'المسح بالعينة', 'التسجيل الحيوي'], correctIndex: 0 },
    { id: 4, question: 'الجهة المسؤولة عن التعداد السكاني في سلطنة عمان:', options: ['المركز الوطني للإحصاء والمعلومات', 'وزارة الصحة', 'وزارة الداخلية', 'وزارة التربية'], correctIndex: 0 }
];

export const SIXTH_STRUCTURE_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.FACTORS, label: 'النوع', icon: <Users /> },
    { id: Section.REGIONS, label: 'العمر', icon: <Activity /> },
    { id: Section.DATA_ANALYSIS, label: 'الهرم السكاني', icon: <BarChart2 /> },
    { id: Section.PROCESSES, label: 'البنية الاقتصادية', icon: <Coins /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const SIXTH_STRUCTURE_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'يقصد بالبنية النوعية للسكان تقسيمهم إلى:', options: ['ذكور وإناث', 'صغار وكبار', 'عاملين وغير عاملين', 'حضر وريف'], correctIndex: 0 }
];

export const SIXTH_GROWTH_SECTIONS = [
    { id: Section.GROWTH_INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.OMAN_GROWTH_CHART, label: 'تحليل النمو', icon: <BarChart2 /> },
    { id: Section.NATURAL_INCREASE, label: 'الزيادة الطبيعية', icon: <Sun /> },
    { id: Section.MIGRATION_IMPACT, label: 'الهجرة', icon: <Flag /> },
    { id: Section.GROWTH_EFFECTS, label: 'آثار النمو', icon: <Activity /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const SIXTH_GROWTH_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'الفرق بين عدد المواليد وعدد الوفيات يسمى:', options: ['الزيادة الطبيعية', 'الزيادة غير الطبيعية', 'الكثافة السكانية', 'النمو السكاني'], correctIndex: 0 }
];

export const SIXTH_DENSITY_SECTIONS = [
    { id: Section.DENSITY_INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.DENSITY_FACTORS, label: 'العوامل المؤثرة', icon: <Settings /> },
    { id: Section.CITY_VILLAGE, label: 'المدينة والريف', icon: <Building2 /> },
    { id: Section.DENSITY_CALC, label: 'حساب الكثافة', icon: <Activity /> },
    { id: Section.DENSITY_MAP_ANALYSIS, label: 'تحليل الخرائط', icon: <Map /> },
    { id: Section.OMAN_DENSITY, label: 'كثافة عمان', icon: <Flag /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const SIXTH_DENSITY_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'تحسب الكثافة السكانية بقسمة عدد السكان على:', options: ['المساحة', 'المواليد', 'الوفيات', 'الموارد'], correctIndex: 0 }
];

export const UMAYYAD_SECTIONS = [
    { id: Section.UMAYYAD_RISE, label: 'التأسيس', icon: <Crown /> },
    { id: Section.UMAYYAD_CONQUESTS, label: 'الفتوحات', icon: <Map /> },
    { id: Section.UMAYYAD_ACHIEVEMENTS, label: 'المنجزات', icon: <Star /> },
    { id: Section.UMAYYAD_FALL, label: 'السقوط', icon: <Flag /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const UMAYYAD_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'مؤسس الدولة الأموية هو:', options: ['معاوية بن أبي سفيان', 'عبدالملك بن مروان', 'عمر بن عبدالعزيز', 'الوليد بن عبدالملك'], correctIndex: 0 }
];

export const OMAN_UMAYYAD_SECTIONS = [
    { id: Section.OMAN_UMAYYAD_INTRO, label: 'الموقف العماني', icon: <Shield /> },
    { id: Section.OMAN_UMAYYAD_INDEPENDENCE, label: 'الاستقلال', icon: <Flag /> },
    { id: Section.OMAN_UMAYYAD_CONTROL, label: 'حملات الحجاج', icon: <Swords /> },
    { id: Section.OMAN_UMAYYAD_GOVERNORS, label: 'الولاة', icon: <Users /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_UMAYYAD_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'القائد العماني الذي قاوم حملات الحجاج:', options: ['سعيد بن عباد', 'المهلب بن أبي صفرة', 'الجلندى بن مسعود', 'الصلت بن مالك'], correctIndex: 0 }
];

export const OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS = [
    { id: Section.OMAN_ACHIEVEMENTS_INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.OMAN_ACHIEVEMENTS_CULTURE, label: 'الثقافة', icon: <BookOpen /> },
    { id: Section.OMAN_ACHIEVEMENTS_MILITARY, label: 'الجيش', icon: <Swords /> },
    { id: Section.OMAN_ACHIEVEMENTS_ECONOMY, label: 'الاقتصاد', icon: <Coins /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'مؤسس علم العروض هو:', options: ['الخليل بن أحمد', 'ابن دريد', 'المبرد', 'سيبويه'], correctIndex: 0 }
];

export const CIVIL_SOCIETY_SECTIONS = [
    { id: Section.CIVIL_SOCIETY_INTRO, label: 'المفهوم', icon: <BookOpen /> },
    { id: Section.CIVIL_SOCIETY_TYPES, label: 'الأنواع', icon: <Building2 /> },
    { id: Section.CIVIL_SOCIETY_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const CIVIL_SOCIETY_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'من خصائص مؤسسات المجتمع المدني أنها:', options: ['غير ربحية', 'حكومية', 'إجبارية', 'عسكرية'], correctIndex: 0 }
];

export const COMMUNITY_PARTICIPATION_SECTIONS = [
    { id: Section.COMMUNITY_INTRO, label: 'المفهوم', icon: <Crown /> },
    { id: Section.COMMUNITY_FORMS, label: 'الصور', icon: <Users /> },
    { id: Section.COMMUNITY_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const COMMUNITY_PARTICIPATION_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'المشاركة في انتخابات مجلس الشورى تعتبر:', options: ['مشاركة سياسية', 'مشاركة اجتماعية', 'مشاركة اقتصادية', 'مشاركة ثقافية'], correctIndex: 0 }
];

export const MAPS_SECTIONS = [
    { id: Section.MAPS_INTRO, label: 'تطور الخرائط', icon: <History /> },
    { id: Section.MAPS_TYPES, label: 'أنواع الخرائط', icon: <Map /> },
    { id: Section.MAPS_ELEMENTS, label: 'عناصر الخريطة', icon: <Compass /> },
    { id: Section.MAPS_READING, label: 'قراءة الخريطة', icon: <Globe2 /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const MAPS_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'يوضح موضوع الخريطة وما تحتويه:', options: ['عنوان الخريطة', 'مفتاح الخريطة', 'مقياس الرسم', 'اتجاه الشمال'], correctIndex: 0 }
];

// --- UNIT 1 ASSESSMENT QUESTIONS (RESTORED FROM PDF) ---
export const UNIT_1_ASSESSMENT_QUESTIONS: QuizQuestion[] = [
    { 
        id: 1, 
        question: 'يُستخدم الجهاز الذي أمامك في قياس:', 
        options: ['الحرارة', 'الضغط الجوي', 'كمية الأمطار', 'سرعة الرياح'], 
        correctIndex: 1, 
        visualComponent: <div className="p-4 bg-slate-100 rounded-full border-4 border-slate-300 w-32 h-32 flex items-center justify-center shadow-inner mx-auto mb-2"><Gauge size={64} className="text-slate-600"/></div>
    },
    { 
        id: 2, 
        question: 'تتأثر المنطقة المشار إليها بالرقم (1) بمناخ البحر المتوسط نتيجة:', 
        options: ['الرياح الموسمية', 'الارتفاع عن مستوى سطح البحر', 'قربها من المسطحات المائية', 'موقعها على دائرة الاستواء'], 
        correctIndex: 0, 
        visualComponent: <div className="text-xs text-center text-slate-500 mb-2 font-bold">(انظر الخريطة: المنطقة الجنوبية - ظفار)</div>
    },
    { 
        id: 3, 
        question: 'الضغط الجوي السائد في المنطقة المشار إليها بالرمز (ب):', 
        options: ['منخفض', 'متوسط', 'مرتفع', 'مرتفع جداً'], 
        correctIndex: 0, 
        visualComponent: <div className="text-xs text-center text-slate-500 mb-2 font-bold">(خريطة توزيع الضغط)</div>
    },
    { 
        id: 4, 
        question: 'الجزء المشار إليه بالرمز (أ) يُطلق عليه:', 
        options: ['القشرة الأرضية', 'النواة الداخلية', 'النواة الخارجية', 'الوشاح'], 
        correctIndex: 1, 
        visualComponent: <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto flex items-center justify-center mb-2 border-4 border-slate-300 relative"><div className="w-4 h-4 bg-red-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div><span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8px] text-white">أ</span></div>
    },
    { 
        id: 5, 
        question: 'الجهاز المقابل يُستخدم لرصد:', 
        options: ['البراكين', 'الزلازل', 'المطر', 'الرياح'], 
        correctIndex: 1, 
        visualComponent: <div className="p-2 mx-auto mb-2 flex justify-center"><Activity size={48} className="text-red-500 animate-pulse"/></div>
    }
];

// --- UNIT 2 ASSESSMENT QUESTIONS (FROM PDF: ABBASID ERA) ---
export const UNIT_2_ASSESSMENT_QUESTIONS: QuizQuestion[] = [
    { 
        id: 1, 
        question: 'العام الهجري الذي تعرضت فيه مدينة بغداد لهجوم المغول:', 
        options: ['656هـ', '657هـ', '658هـ', '659هـ'], 
        correctIndex: 0 
    },
    { 
        id: 2, 
        question: 'الإمام العماني الذي استطاع أن يحرر جزيرة سقطرى من النصارى:', 
        options: ['المهنا بن جيفر', 'الصلت بن مالك', 'الوارث بن كعب', 'الجلندى بن مسعود'], 
        correctIndex: 1 
    },
    { 
        id: 3, 
        question: 'مؤلف كتاب الاستقامة:', 
        options: ['أبو سعيد الكدمي', 'أبو جعفر الأزكوي', 'محمد بن محبوب الرحيلي', 'موسى بن علي الأزكوي'], 
        correctIndex: 0 
    }
];

// --- UNIT 3 ASSESSMENT QUESTIONS (Removed to avoid conflict with the interactive component) ---
export const UNIT_3_ASSESSMENT_QUESTIONS: QuizQuestion[] = [
    // This array is intentionally left empty or minimal as the main assessment logic is now
    // handled within the Unit3Assessment component itself for better interactivity.
    // However, if needed for the final exam pool, we can keep the textual representation.
    { id: 1, question: 'السلطة المسؤولة عن حل النزاعات وضمان تطبيق القوانين:', options: ['التنفيذية', 'التشريعية', 'القضائية', 'الإعلامية'], correctIndex: 2 },
    { id: 2, question: 'المجلسان اللذان يتكون منهما مجلس عُمان:', options: ['الدولة والشورى', 'الشورى والوزراء', 'الدولة والقضاء', 'الدولة والوزراء'], correctIndex: 0 },
    { id: 3, question: 'عدد أبواب النظام الأساسي للدولة:', options: ['5', '6', '7', '8'], correctIndex: 2 },
    { id: 4, question: 'المبدأ الذي يمثل حماية التراث الوطني:', options: ['السياسي', 'الثقافي', 'الاقتصادي', 'الاجتماعي'], correctIndex: 1 }
];

// --- GRADE 5 QUIZZES (RESTORED) ---
export const FIFTH_SPHERES_CONCEPT_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'المجرة التي تنتمي إليها مجموعتنا الشمسية تسمى:', options: ['درب التبانة', 'المرأة المسلسلة', 'سحابة ماجلان', 'مجرة الدوامة'], correctIndex: 0 },
    { id: 2, question: 'الكوكب الذي نعيش عليها ويسمى بالكوكب المائي هو:', options: ['الأرض', 'المريخ', 'الزهرة', 'عطارد'], correctIndex: 0 },
    { id: 3, question: 'يحتل كوكب الأرض الترتيب ..... قرباً من الشمس:', options: ['الثالث', 'الأول', 'الخامس', 'الثامن'], correctIndex: 0 },
    { id: 4, question: 'أقرب الكواكب إلى الشمس هو:', options: ['عطارد', 'الزهرة', 'الأرض', 'المشتري'], correctIndex: 0 }
];

export const FIFTH_SPHERES_RELATION_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'الغلاف الذي يحتوي على جميع الكائنات الحية يسمى:', options: ['الغلاف الحيوي', 'الغلاف الصخري', 'الغلاف المائي', 'الغلاف الجوي'], correctIndex: 0 },
    { id: 2, question: 'النسبة التي يغطيها الماء من مساحة الكرة الأرضية:', options: ['71%', '29%', '50%', '90%'], correctIndex: 0 },
    { id: 3, question: 'حركة الماء المستمرة بين سطح الأرض والغلاف الجوي تسمى:', options: ['دورة الماء', 'التبخر', 'التكاثف', 'الرياح'], correctIndex: 0 },
    { id: 4, question: 'أي من الآتي يعتبر من مكونات الغلاف الصخري؟', options: ['الجبال والتربة', 'البحار والمحيطات', 'الغازات', 'النباتات'], correctIndex: 0 }
];

export const FIFTH_RESOURCES_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'أي مما يلي يعتبر من الموارد المتجددة؟', options: ['الطاقة الشمسية', 'النفط', 'الغاز الطبيعي', 'الفحم'], correctIndex: 0 },
    { id: 2, question: 'الموارد التي تنفد باستخدام الإنسان لها تسمى:', options: ['موارد غير متجددة', 'موارد متجددة', 'موارد دائمة', 'موارد بشرية'], correctIndex: 0 }
];

export const FIFTH_ISLAMIC_STATE_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'هاجر الرسول ﷺ من مكة إلى:', options: ['المدينة المنورة', 'الطائف', 'الحبشة', 'الشام'], correctIndex: 0 }
];
export const FIFTH_OMAN_PROPHET_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'أول من أسلم من أهل عمان هو:', options: ['مازن بن غضوبة', 'جيفر بن الجلندى', 'عبد بن الجلندى', 'كعب بن برشة'], correctIndex: 0 }
];
export const FIFTH_OMAN_PERSONALITIES_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'مؤسس علم العروض هو:', options: ['الخليل بن أحمد', 'المبرد', 'ابن دريد', 'سيبويه'], correctIndex: 0 }
];
export const FIFTH_RIGHTS_DUTIES_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'التعليم والصحة يعتبران من:', options: ['الحقوق', 'الواجبات', 'العادات', 'التقاليد'], correctIndex: 0 }
];
export const FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'الجهة المسؤولة عن رعاية الأطفال والأيتام هي:', options: ['وزارة التنمية الاجتماعية', 'وزارة الصحة', 'وزارة التعليم', 'الشرطة'], correctIndex: 0 }
];

// --- UNITS CONFIGURATION ---

export const UNITS: Unit[] = [
  {
    id: 'UNIT_1',
    title: 'الوحدة الأولى: الغلاف الجوي والغلاف الصخري',
    description: 'دراسة الطقس والمناخ، والعوامل المؤثرة فيهما، وتشكيل سطح الأرض.',
    lessons: [
      {
        id: 'WEATHER',
        title: 'الطقس والمناخ',
        subtitle: 'الدرس الأول',
        description: 'مفهوم الطقس والمناخ، والفرق بينهما، وعناصرهما.',
        icon: <CloudSun />,
        color: 'text-sky-500',
        textColor: 'text-sky-600',
        available: true
      },
      {
        id: 'OMAN_CLIMATE',
        title: 'مناخ سلطنة عمان',
        subtitle: 'الدرس الثاني',
        description: 'العوامل المؤثرة في مناخ عمان، والأقاليم المناخية.',
        icon: <Map />,
        color: 'text-emerald-500',
        textColor: 'text-emerald-600',
        available: true
      },
      {
        id: 'EARTH_LAYERS',
        title: 'باطن الأرض',
        subtitle: 'الدرس الثالث',
        description: 'طبقات الأرض والعمليات الداخلية التي تشكل سطحها.',
        icon: <Layers />,
        color: 'text-orange-500',
        textColor: 'text-orange-600',
        available: true
      },
      {
        id: 'EXTERNAL_PROCESSES',
        title: 'العمليات الخارجية',
        subtitle: 'الدرس الرابع',
        description: 'التجوية والتعرية ودورهما في تشكيل سطح الأرض.',
        icon: <Mountain />,
        color: 'text-amber-500',
        textColor: 'text-amber-600',
        available: true
      },
      {
        id: 'UNIT_1_ASSESSMENT',
        title: 'تقويم الوحدة الأولى',
        subtitle: 'مراجعة شاملة',
        description: 'اختبار شامل لقياس مدى استيعاب مفاهيم الوحدة.',
        icon: <CheckCircle2 />,
        color: 'text-indigo-500',
        textColor: 'text-indigo-600',
        available: true
      }
    ]
  },
  {
    id: 'UNIT_2',
    title: 'الوحدة الثانية: الحضارة الإسلامية (الدولة العباسية)',
    description: 'دراسة تاريخ الدولة العباسية، ومنجزاتها، والدور العماني فيها.',
    lessons: [
      {
        id: 'ABBASID_STATE',
        title: 'قيام الدولة العباسية',
        subtitle: 'الدرس الأول',
        description: 'نشأة الدولة العباسية، وأبرز خلفائها، وفتوحاتها.',
        icon: <Flag />,
        color: 'text-purple-500',
        textColor: 'text-purple-600',
        available: true
      },
      {
        id: 'OMAN_ABBASID',
        title: 'عمان في العصر العباسي',
        subtitle: 'الدرس الثاني',
        description: 'استقلال عمان، وعلاقتها بالخلافة العباسية.',
        icon: <Shield />,
        color: 'text-rose-500',
        textColor: 'text-rose-600',
        available: true
      },
      {
        id: 'OMAN_CIVILIZATION',
        title: 'المنجزات الحضارية العمانية',
        subtitle: 'الدرس الثالث',
        description: 'الإسهامات الثقافية والعلمية والعمرانية للعمانيين.',
        icon: <Building2 />,
        color: 'text-amber-500',
        textColor: 'text-amber-600',
        available: true
      },
      {
        id: 'UNIT_2_ASSESSMENT',
        title: 'تقويم الوحدة الثانية',
        subtitle: 'مراجعة شاملة',
        description: 'اختبار شامل لقياس مدى استيعاب مفاهيم الوحدة.',
        icon: <CheckCircle2 />,
        color: 'text-indigo-500',
        textColor: 'text-indigo-600',
        available: true
      }
    ]
  },
  {
    id: 'UNIT_3',
    title: 'الوحدة الثالثة: مؤسسات الدولة الحديثة',
    description: 'التعرف على النظام الأساسي للدولة ومؤسساتها المختلفة.',
    lessons: [
      {
        id: 'BASIC_STATUTE',
        title: 'النظام الأساسي للدولة',
        subtitle: 'الدرس الأول',
        description: 'مفهوم النظام الأساسي، وأهميته، ومبادئه.',
        icon: <Scroll />,
        color: 'text-teal-500',
        textColor: 'text-teal-600',
        available: true
      },
      {
        id: 'STATE_INSTITUTIONS',
        title: 'مؤسسات الدولة',
        subtitle: 'الدرس الثاني',
        description: 'السلطات الثلاث في الدولة واختصاصاتها.',
        icon: <Landmark />,
        color: 'text-cyan-500',
        textColor: 'text-cyan-600',
        available: true
      },
      {
        id: 'UNIT_3_ASSESSMENT',
        title: 'تقويم الوحدة الثالثة',
        subtitle: 'مراجعة شاملة',
        description: 'اختبار شامل لقياس مدى استيعاب مفاهيم الوحدة.',
        icon: <CheckCircle2 />,
        color: 'text-indigo-500',
        textColor: 'text-indigo-600',
        available: true
      }
    ]
  }
];

export const UNITS_SIXTH: Unit[] = [
  {
    id: 'UNIT_1',
    title: 'الوحدة الأولى: السكان في الوطن العربي والعالم',
    description: 'دراسة البيانات السكانية، والنمو، والتركيب السكاني.',
    lessons: [
      {
        id: 'SIXTH_POPULATION',
        title: 'البيانات السكانية',
        subtitle: 'الدرس الأول',
        description: 'مصادر البيانات السكانية وأهميتها.',
        icon: <Database />,
        color: 'text-blue-500',
        textColor: 'text-blue-600',
        available: true
      },
      {
        id: 'SIXTH_STRUCTURE',
        title: 'التركيب السكاني',
        subtitle: 'الدرس الثاني',
        description: 'التركيب النوعي والعمري للسكان.',
        icon: <Users />,
        color: 'text-emerald-500',
        textColor: 'text-emerald-600',
        available: true
      },
      {
        id: 'SIXTH_GROWTH',
        title: 'النمو السكاني',
        subtitle: 'الدرس الثالث',
        description: 'معدلات النمو السكاني والعوامل المؤثرة فيه.',
        icon: <TrendingUp />,
        color: 'text-indigo-500',
        textColor: 'text-indigo-600',
        available: true
      },
      {
        id: 'SIXTH_DENSITY',
        title: 'الكثافة السكانية',
        subtitle: 'الدرس الرابع',
        description: 'توزيع السكان والكثافة السكانية.',
        icon: <Map />,
        color: 'text-rose-500',
        textColor: 'text-rose-600',
        available: true
      },
      {
        id: 'UNIT_1_G6_ASSESSMENT',
        title: 'تقويم الوحدة الأولى',
        subtitle: 'مراجعة شاملة',
        description: 'اختبار شامل لقياس مدى استيعاب مفاهيم الوحدة.',
        icon: <CheckCircle2 />,
        color: 'text-indigo-500',
        textColor: 'text-indigo-600',
        available: true
      }
    ]
  },
  {
    id: 'UNIT_2',
    title: 'الوحدة الثانية: الحضارة الإسلامية (الدولة الأموية)',
    description: 'تاريخ الدولة الأموية، ودور عمان في تلك الفترة.',
    lessons: [
      {
        id: 'SIXTH_UMAYYAD_STATE',
        title: 'قيام الدولة الأموية',
        subtitle: 'الدرس الأول',
        description: 'تأسيس الدولة الأموية وأبرز خلفائها.',
        icon: <Crown />,
        color: 'text-emerald-500',
        textColor: 'text-emerald-600',
        available: true
      },
      {
        id: 'OMAN_UMAYYAD',
        title: 'عمان في العصر الأموي',
        subtitle: 'الدرس الثاني',
        description: 'علاقة عمان بالدولة الأموية وأبرز الأحداث.',
        icon: <Swords />,
        color: 'text-orange-500',
        textColor: 'text-orange-600',
        available: true
      },
      {
        id: 'OMAN_UMAYYAD_ACHIEVEMENTS',
        title: 'المنجزات الحضارية',
        subtitle: 'الدرس الثالث',
        description: 'الإسهامات الحضارية لعمان في العصر الأموي.',
        icon: <Star />,
        color: 'text-teal-500',
        textColor: 'text-teal-600',
        available: true
      },
      {
        id: 'UNIT_2_G6_ASSESSMENT',
        title: 'تقويم الوحدة الثانية',
        subtitle: 'مراجعة شاملة',
        description: 'اختبار شامل لقياس مدى استيعاب مفاهيم الوحدة.',
        icon: <CheckCircle2 />,
        color: 'text-indigo-500',
        textColor: 'text-indigo-600',
        available: true
      }
    ]
  },
  {
    id: 'UNIT_3',
    title: 'الوحدة الثالثة: المجتمع المدني',
    description: 'مفهوم المجتمع المدني والمشاركة المجتمعية.',
    lessons: [
      {
        id: 'SIXTH_CIVIL_SOCIETY',
        title: 'مؤسسات المجتمع المدني',
        subtitle: 'الدرس الأول',
        description: 'تعريف المجتمع المدني وأهم مؤسساته.',
        icon: <HeartHandshake />,
        color: 'text-teal-500',
        textColor: 'text-teal-600',
        available: true
      },
      {
        id: 'SIXTH_COMMUNITY_PARTICIPATION',
        title: 'المشاركة المجتمعية',
        subtitle: 'الدرس الثاني',
        description: 'أهمية المشاركة المجتمعية وصورها.',
        icon: <Users />,
        color: 'text-blue-500',
        textColor: 'text-blue-600',
        available: true
      },
      {
        id: 'UNIT_3_G6_ASSESSMENT',
        title: 'تقويم الوحدة الثالثة',
        subtitle: 'مراجعة شاملة',
        description: 'اختبار شامل لقياس مدى استيعاب مفاهيم الوحدة.',
        icon: <CheckCircle2 />,
        color: 'text-indigo-500',
        textColor: 'text-indigo-600',
        available: true
      }
    ]
  }
];
