import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: In a real deployment, ensure process.env.API_KEY is set.
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. Please set process.env.API_KEY.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateConsultationResponse = async (userPrompt: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "申し訳ありません。現在AIサービスに接続できません。APIキーをご確認ください。";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `あなたはBOQU JAPANのシニア・ランドスケープ・アーキテクトです。
        ユーザーからの噴水や水景（ウォーターフィーチャー）に関する相談に対し、専門的かつ美的な観点から日本語で提案を行ってください。
        
        以下のガイドラインに従ってください：
        1. 丁寧で洗練された「です・ます」調の日本語を使用すること。
        2. 空間の用途（公園、商業施設、個人邸宅など）に合わせて、具体的な噴水の種類（カスケード、ドライファウンテン、ミュージカルファウンテンなど）を提案すること。
        3. 水の音、光の演出、メンテナンス性についても触れるとより良いです。
        4. 回答は簡潔に、300文字程度でまとめてください。`,
        temperature: 0.7,
      }
    });

    if (response.text) {
      return response.text;
    } else {
      return "申し訳ありません。適切な回答を生成できませんでした。";
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "エラーが発生しました。しばらく経ってから再度お試しください。";
  }
};