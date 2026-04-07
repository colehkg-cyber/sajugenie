import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { system, prompt, image } = await req.json();

    const parts: any[] = [];
    if (image) {
      parts.push({ inline_data: { mime_type: "image/jpeg", data: image } });
    }
    parts.push({ text: prompt });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: system }] },
          contents: [{ role: "user", parts }],
          generationConfig: { temperature: 0.8, maxOutputTokens: 8192, thinkingConfig: { thinkingBudget: 256 } },
        }),
      }
    );

    const data = await response.json();
    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }
    const text = data?.candidates?.[0]?.content?.parts
      ?.filter((p: any) => p.text)
      .map((p: any) => p.text)
      .join("") || "응답 없음";

    return NextResponse.json({ text });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
