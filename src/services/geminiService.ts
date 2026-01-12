
import { GoogleGenAI } from "@google/genai";

// Initialize AI Instance safely
const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey.length > 0 && !apiKey.includes("your_api_key")) {
  try {
    ai = new GoogleGenAI({ apiKey: apiKey });
  } catch (e) {
    console.error("Failed to initialize GoogleGenAI:", e);
  }
}

export const askAITutor = async (question: string): Promise<string> => {
  // 1. Check for Internet Connection
  if (!navigator.onLine) {
    return "عذراً، لا يوجد اتصال بالإنترنت. يرجى التحقق من الشبكة للمتابعة مع المعلم الذكي.";
  }

  // 2. Check for API Key configuration
  if (!ai) {
    console.warn("API Key is missing or invalid.");
    return "خدمة المعلم الذكي غير مفعلة حالياً (مفتاح الربط مفقود). يرجى التواصل مع المعلم أو استخدام الدروس التفاعلية المتاحة.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    // Updated instruction for a "Live Interactive Lesson" feel
    const systemInstruction = `
      أنت "المعلم الذكي المباشر" لمادة الدراسات الاجتماعية (المنهج العماني - الصف السابع).
      
      دورك ليس فقط الإجابة، بل خلق تجربة "درس تفاعلي حي":
      1. **أسلوب المخاطبة:** تحدث بحماس وكأنك في حصة مباشرة (مثلاً: "سؤال ممتاز يا بطل!"، "دعنا نفكر سوياً").
      2. **التفاعل السقراطي:** لا تعطِ الإجابة النهائية فوراً إذا كان السؤال يتطلب تفكيراً. بل اطرح سؤالاً موجهاً يساعد الطالب على استنتاج الإجابة بنفسه.
      3. **الربط بالبيئة:** اربط دائماً المعلومات ببيئة الطالب العمانية (الأودية، الجبال، القلاع، العادات).
      4. **التشجيع:** استخدم عبارات تشجيعية واطلب من الطالب إبداء رأيه في نهاية الإجابة (مثلاً: "ما رأيك أنت في هذا التصرف؟").
      
      الموضوعات: الطقس والمناخ، تاريخ عمان (اليعاربة، العصر العباسي)، المواطنة والنظام الأساسي.
      
      كن موجزاً، ذكياً، ومرحاً.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "لم أتمكن من صياغة إجابة مناسبة، هل يمكنك إعادة صياغة السؤال؟";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدثت مشكلة تقنية أثناء الاتصال بالمعلم الذكي. حاول مرة أخرى لاحقاً.";
  }
};