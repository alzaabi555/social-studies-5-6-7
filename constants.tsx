
import { Unit, Section, QuizQuestion, WeatherElement, EarthLayer, OmanRegion } from './types';
import { 
  CloudSun, Thermometer, Wind, Umbrella, CloudRain, Mountain, Globe2, 
  BookOpen, Flag, Scale, Landmark, Users, Briefcase, 
  Map, Activity, Database, FileText, Smartphone, Vote, HeartHandshake,
  Leaf, Sun, Droplet, Cloud, Coins, Shield, Castle, Star, ArrowDown,
  Swords, List, Target, ArrowLeftRight, AlertTriangle, Calculator,
  Building2, Layers, Book, Crown, Pickaxe, Moon, Mail, User, Heart, Scale3d,
  Compass, History, Settings, BarChart2, Hammer, HelpCircle
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

// --- ASSESSMENT QUESTIONS ---
export const UNIT_1_ASSESSMENT_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'أحد المكونات التالية ليس من مكونات الغلاف الجوي:', options: ['الصخور', 'الأكسجين', 'النيتروجين', 'بخار الماء'], correctIndex: 0 },
    { id: 2, question: 'عملية تحول الماء من الحالة السائلة إلى الغازية تسمى:', options: ['التبخر', 'التكاثف', 'التساقط', 'الانصهار'], correctIndex: 0 },
    { id: 3, question: 'أي الموارد التالية يعتبر مورداً غير متجدد؟', options: ['النفط', 'الرياح', 'الشمس', 'النبات'], correctIndex: 0 }
];

export const UNIT_2_ASSESSMENT_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'وثيقة نظمت العلاقة بين سكان المدينة المنورة:', options: ['الصحيفة', 'القرآن', 'الدستور', 'المعاهدة'], correctIndex: 0 },
    { id: 2, question: 'الملكان اللذان حكما عمان عند وصول رسالة النبي ﷺ هما:', options: ['جيفر وعبد', 'سعيد وسليمان', 'الصلت ومهنا', 'مالك وعمر'], correctIndex: 0 }
];

export const UNIT_3_ASSESSMENT_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'الالتزام بالقوانين يعتبر:', options: ['واجباً', 'حقاً', 'تطوعاً', 'منحة'], correctIndex: 0 },
    { id: 2, question: 'المؤسسة الوطنية التي تعنى بحقوق الإنسان في عمان:', options: ['اللجنة العمانية لحقوق الإنسان', 'الشورى', 'الدفاع', 'البلدية'], correctIndex: 0 }
];

export const UNITS_SIXTH: Unit[] = [
    {
        id: 'UNIT_1_G6',
        title: 'الوحدة الأولى: السكان في العالم',
        description: 'دراسة جغرافية السكان',
        lessons: [
            {
                id: 'SIXTH_POPULATION',
                title: 'الدرس الأول: البيانات السكانية',
                subtitle: 'المصادر والأهمية',
                description: 'مصادر البيانات السكانية (تعداد، تسجيل حيوي)، وتطور التعداد في عمان.',
                icon: '📊',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
                textColor: 'text-blue-700',
                available: true
            },
            {
                id: 'SIXTH_STRUCTURE',
                title: 'الدرس الثاني: بنية السكان',
                subtitle: 'النوع والعمر',
                description: 'التركيب النوعي والعمري، والهرم السكاني.',
                icon: '👥',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'SIXTH_GROWTH',
                title: 'الدرس الثالث: النمو السكاني',
                subtitle: 'الزيادة والتغير',
                description: 'الزيادة الطبيعية وغير الطبيعية (الهجرة)، وحساب معدلات النمو.',
                icon: '📈',
                color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
                textColor: 'text-indigo-700',
                available: true
            },
            {
                id: 'SIXTH_DENSITY',
                title: 'الدرس الرابع: الكثافة السكانية',
                subtitle: 'التوزيع والتركز',
                description: 'مفهوم الكثافة، والعوامل المؤثرة في توزيع السكان.',
                icon: '🗺️',
                color: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
                textColor: 'text-rose-700',
                available: true
            },
            {
                id: 'UNIT_1_G6_ASSESSMENT',
                title: 'تقويم الوحدة الأولى',
                subtitle: 'مراجعة شاملة',
                description: 'أسئلة وتطبيقات على جغرافية السكان.',
                icon: '📝',
                color: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
                textColor: 'text-slate-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_2_G6',
        title: 'الوحدة الثانية: الدولة الأموية',
        description: 'تاريخ الدولة الأموية وعلاقتها بعمان',
        lessons: [
            {
                id: 'SIXTH_UMAYYAD_STATE',
                title: 'الدرس الأول: الدولة الأموية',
                subtitle: 'النشأة والامتداد',
                description: 'قيام الدولة، خلفاؤها، والفتوحات الإسلامية.',
                icon: '🏰',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'OMAN_UMAYYAD',
                title: 'الدرس الثاني: عمان في العصر الأموي',
                subtitle: 'العلاقات السياسية',
                description: 'موقف عمان من الدولة الأموية، ومقاومة الحملات.',
                icon: '⚔️',
                color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
                textColor: 'text-orange-700',
                available: true
            },
            {
                id: 'OMAN_UMAYYAD_ACHIEVEMENTS',
                title: 'الدرس الثالث: منجزات عمانية',
                subtitle: 'الحضارة والتراث',
                description: 'الإنجازات الفكرية والعمرانية والاقتصادية لعمان في تلك الفترة.',
                icon: '🏺',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'UNIT_2_G6_ASSESSMENT',
                title: 'تقويم الوحدة الثانية',
                subtitle: 'مراجعة تاريخية',
                description: 'اختبر معلوماتك عن الدولة الأموية.',
                icon: '📝',
                color: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
                textColor: 'text-slate-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_3_G6',
        title: 'الوحدة الثالثة: المجتمع المدني',
        description: 'التربية للمواطنة',
        lessons: [
            {
                id: 'SIXTH_CIVIL_SOCIETY',
                title: 'الدرس الأول: مؤسسات المجتمع المدني',
                subtitle: 'المفهوم والأهمية',
                description: 'تعريف المجتمع المدني، أنواعه، ودوره في التنمية.',
                icon: '🤝',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'SIXTH_COMMUNITY_PARTICIPATION',
                title: 'الدرس الثاني: المشاركة المجتمعية',
                subtitle: 'العمل التطوعي',
                description: 'أهمية المشاركة، صورها، وفوائدها للفرد والمجتمع.',
                icon: '🙌',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
                textColor: 'text-blue-700',
                available: true
            },
            {
                id: 'UNIT_3_G6_ASSESSMENT',
                title: 'تقويم الوحدة الثالثة',
                subtitle: 'مراجعة شاملة',
                description: 'تطبيقات على مفاهيم المواطنة والمجتمع المدني.',
                icon: '📝',
                color: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
                textColor: 'text-slate-700',
                available: true
            }
        ]
    }
];

export const UNITS: Unit[] = [
    {
        id: 'UNIT_1',
        title: 'الوحدة الأولى: الغلاف الجوي',
        description: 'دراسة الطقس والمناخ والعوامل المؤثرة',
        lessons: [
            {
                id: 'WEATHER',
                title: 'الدرس الأول: الطقس والمناخ',
                subtitle: 'المفهوم والعناصر',
                description: 'الفرق بين الطقس والمناخ، وعناصر المناخ الرئيسية.',
                icon: '🌦️',
                color: 'bg-sky-50 hover:bg-sky-100 border-sky-200',
                textColor: 'text-sky-700',
                available: true
            },
            {
                id: 'OMAN_CLIMATE',
                title: 'الدرس الثاني: مناخ سلطنة عمان',
                subtitle: 'الخصائص والعوامل',
                description: 'العوامل المؤثرة في مناخ عمان، والأقاليم المناخية.',
                icon: '🇴🇲',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'EARTH_LAYERS',
                title: 'الدرس الثالث: تشكيل سطح الأرض',
                subtitle: 'عوامل تشكيل الأرض',
                description: 'طبقات الأرض، والعمليات الداخلية (زلازل، براكين).',
                icon: '🌋',
                color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
                textColor: 'text-orange-700',
                available: true
            },
            {
                id: 'EXTERNAL_PROCESSES',
                title: 'الدرس الرابع: العمليات الخارجية',
                subtitle: 'التجوية والتعرية',
                description: 'العوامل الخارجية التي تشكل سطح الأرض.',
                icon: '🏜️',
                color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
                textColor: 'text-amber-700',
                available: true
            },
            {
                id: 'UNIT_1_ASSESSMENT',
                title: 'تقويم الوحدة الأولى',
                subtitle: 'مراجعة شاملة',
                description: 'أسئلة وتطبيقات على الوحدة الأولى.',
                icon: '📝',
                color: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
                textColor: 'text-slate-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_2',
        title: 'الوحدة الثانية: الدولة العباسية',
        description: 'تاريخ الدولة العباسية وعمان في عهدها',
        lessons: [
            {
                id: 'ABBASID_STATE',
                title: 'الدرس الأول: العصر العباسي الثاني',
                subtitle: 'الضعف والانقسام',
                description: 'الأوضاع السياسية والحضارية في العصر العباسي الثاني.',
                icon: '🕌',
                color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
                textColor: 'text-purple-700',
                available: true
            },
            {
                id: 'OMAN_ABBASID',
                title: 'الدرس الثاني: عمان في العصر العباسي',
                subtitle: 'الاستقلال والتحدي',
                description: 'علاقة عمان بالدولة العباسية، ودولة النباهنة.',
                icon: '⚔️',
                color: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
                textColor: 'text-rose-700',
                available: true
            },
            {
                id: 'OMAN_CIVILIZATION',
                title: 'الدرس الثالث: المنجزات الحضارية',
                subtitle: 'تراث وإنجاز',
                description: 'الإنجازات الحضارية لعمان في العصر العباسي.',
                icon: '🏺',
                color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
                textColor: 'text-amber-800',
                available: true
            },
            {
                id: 'UNIT_2_ASSESSMENT',
                title: 'تقويم الوحدة الثانية',
                subtitle: 'مراجعة شاملة',
                description: 'اختبر معلوماتك التاريخية.',
                icon: '📝',
                color: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
                textColor: 'text-slate-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_3',
        title: 'الوحدة الثالثة: مؤسسات الدولة',
        description: 'النظام الأساسي ومؤسسات الدولة',
        lessons: [
            {
                id: 'BASIC_STATUTE',
                title: 'الدرس الأول: النظام الأساسي للدولة',
                subtitle: 'الدستور والمرجع',
                description: 'أهمية النظام الأساسي ومحتوياته.',
                icon: '📜',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'STATE_INSTITUTIONS',
                title: 'الدرس الثاني: مؤسسات الدولة',
                subtitle: 'التنظيم والإدارة',
                description: 'السلطات الثلاث (التشريعية، التنفيذية، القضائية).',
                icon: '🏛️',
                color: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-200',
                textColor: 'text-cyan-700',
                available: true
            },
            {
                id: 'UNIT_3_ASSESSMENT',
                title: 'تقويم الوحدة الثالثة',
                subtitle: 'مراجعة شاملة',
                description: 'تطبيقات على التربية للمواطنة.',
                icon: '📝',
                color: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
                textColor: 'text-slate-700',
                available: true
            },
            {
                id: 'FINAL_EXAM_G5',
                title: 'الاختبار النهائي',
                subtitle: 'قياس الأداء',
                description: 'اختبار شامل لجميع الوحدات.',
                icon: '🏆',
                color: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200',
                textColor: 'text-yellow-700',
                available: true
            }
        ]
    }
];

// --- GRADE 5 QUIZZES ---

export const FIFTH_SPHERES_CONCEPT_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'مركز المجموعة الشمسية هو:', options: ['الأرض', 'الشمس', 'المشتري', 'القمر'], correctIndex: 1 },
    { id: 2, question: 'الكوكب الذي نعيش عليه يسمى:', options: ['المريخ', 'الزهرة', 'الأرض', 'عطارد'], correctIndex: 2 },
    { id: 3, question: 'أقرب الكواكب إلى الشمس:', options: ['نبتون', 'عطارد', 'زحل', 'المشتري'], correctIndex: 1 }
];

export const FIFTH_SPHERES_RELATION_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'الغلاف الذي يشمل جميع الكائنات الحية:', options: ['الصخري', 'المائي', 'الحيوي', 'الجوي'], correctIndex: 2 },
    { id: 2, question: 'عملية تحول بخار الماء إلى قطرات ماء (سائل) تسمى:', options: ['التبخر', 'التكاثف', 'التساقط', 'الانصهار'], correctIndex: 1 },
    { id: 3, question: 'نسبة المياه على سطح الكرة الأرضية:', options: ['29%', '50%', '71%', '90%'], correctIndex: 2 }
];

export const FIFTH_RESOURCES_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'من الموارد الطبيعية المتجددة:', options: ['النفط', 'الغاز الطبيعي', 'الشمس', 'الفحم'], correctIndex: 2 },
    { id: 2, question: 'مورد طبيعي غير متجدد وقابل للنفاذ:', options: ['الرياح', 'النبات الطبيعي', 'المعادن', 'المياه'], correctIndex: 2 },
    { id: 3, question: 'تعتمد النباتات في غذائها بشكل أساسي على:', options: ['ضوء الشمس', 'النفط', 'الغاز', 'الصخور'], correctIndex: 0 }
];

export const FIFTH_ISLAMIC_STATE_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'أول عمل قام به الرسول ﷺ عند وصوله المدينة:', options: ['بناء السوق', 'بناء المسجد النبوي', 'بناء القلاع', 'زراعة النخيل'], correctIndex: 1 },
    { id: 2, question: 'نظم الرسول ﷺ العلاقة بين المسلمين واليهود عن طريق:', options: ['المؤاخاة', 'الصحيفة (الوثيقة)', 'القتال', 'التجارة'], correctIndex: 1 },
    { id: 3, question: 'المؤاخاة كانت بين:', options: ['الأوس والخزرج', 'المهاجرين والأنصار', 'المسلمين واليهود', 'العرب والعجم'], correctIndex: 1 }
];

export const FIFTH_OMAN_PROPHET_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'الصحابي الذي حمل رسالة النبي ﷺ إلى أهل عمان:', options: ['عمرو بن العاص', 'أبو بكر الصديق', 'عمر بن الخطاب', 'علي بن أبي طالب'], correctIndex: 0 },
    { id: 2, question: 'ملكا عمان اللذان استقبلا رسالة النبي ﷺ:', options: ['سعيد وسليمان', 'عبد وجيفر', 'مالك وعمر', 'الصلت ومهنا'], correctIndex: 1 },
    { id: 3, question: 'أول من أسلم من أهل عمان:', options: ['مازن بن غضوبة', 'كعب بن برشة', 'عبد بن الجلندى', 'جيفر بن الجلندى'], correctIndex: 0 }
];

export const FIFTH_OMAN_PERSONALITIES_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'مؤسس علم العروض ومؤلف كتاب العين:', options: ['الخليل بن أحمد الفراهيدي', 'ابن دريد', 'المبرد', 'جابر بن زيد'], correctIndex: 0 },
    { id: 2, question: 'صحابي جليل من عمان وفد إلى النبي ﷺ:', options: ['كعب بن برشة', 'أحمد بن ماجد', 'المهلب بن أبي صفرة', 'ناصر بن مرشد'], correctIndex: 0 },
    { id: 3, question: 'شخصية عمانية برزت في القيادة والعلم:', options: ['عبدالله بن وهب الراسبي', 'أحمد بن سعيد', 'سلطان بن سيف', 'قيد الأرض'], correctIndex: 0 }
];

export const FIFTH_RIGHTS_DUTIES_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'من حقوق المواطن في سلطنة عمان:', options: ['دفع الضرائب', 'الدفاع عن الوطن', 'الحصول على التعليم', 'احترام القانون'], correctIndex: 2 },
    { id: 2, question: 'من واجبات المواطن:', options: ['الرعاية الصحية', 'الأمن والأمان', 'المحافظة على الممتلكات العامة', 'حرية التعبير'], correctIndex: 2 },
    { id: 3, question: 'العلاقة بين الحقوق والواجبات علاقة:', options: ['تنافر', 'تكامل (أخذ وعطاء)', 'تضاد', 'انفصال'], correctIndex: 1 }
];

export const FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'المؤسسة التي تعنى بحماية حقوق الإنسان في السلطنة:', options: ['اللجنة العمانية لحقوق الإنسان', 'وزارة الزراعة', 'وزارة النقل', 'الهيئة العامة للمياه'], correctIndex: 0 },
    { id: 2, question: 'اتفاقية دولية انضمت إليها السلطنة لحماية الأطفال:', options: ['اتفاقية التجارة', 'اتفاقية حقوق الطفل', 'اتفاقية المناخ', 'اتفاقية البحار'], correctIndex: 1 },
    { id: 3, question: 'تقوم وزارة التنمية الاجتماعية برعاية:', options: ['الشوارع', 'الفئات الخاصة والأسر', 'المباني الحكومية', 'الحدائق العامة'], correctIndex: 1 }
];
