import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { system, prompt, image, history } = await req.json();

    // 대화 히스토리 포함 (챗봇용)
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      contents.push(...history);
    }

    // 현재 메시지
    const parts: any[] = [];
    if (image) {
      parts.push({ inline_data: { mime_type: "image/jpeg", data: image } });
    }
    parts.push({ text: prompt });
    contents.push({ role: "user", parts });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: system }] },
          contents,
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 8192,
          },
        }),
      }
    );

    const data = await response.json();
    if (data.error) {
      console.error("Gemini API Error:", data.error);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    const text =
      data?.candidates?.[0]?.content?.parts
        ?.filter((p: any) => p.text)
        .map((p: any) => p.text)
        .join("") || "응답 없음";

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
