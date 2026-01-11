
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
    const systemInstruction = `
      أنت معلم خبير في الدراسات الاجتماعية لمنهج الصف السابع في سلطنة عمان.
      أسلوبك تربوي، مشجع، ومبسط.
      
      عند الإجابة:
      1. اربط المعلومات بالبيئة العمانية كلما أمكن.
      2. استخدم لغة سهلة وواضحة تناسب طلاب الصف السابع.
      3. كن دقيقاً علمياً ولكن لا تفرط في التعقيد.
      4. إذا سئلت عن موضوع خارج المنهج، أجب باختصار ثم وجه الطالب للعودة للدرس.
      
      الموضوعات الأساسية: الطقس والمناخ، تاريخ عمان في العصر العباسي، النظام الأساسي للدولة.
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
