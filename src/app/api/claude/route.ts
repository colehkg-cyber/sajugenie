import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { system, prompt, image } = await req.json();

    const messages: any[] = [];
    if (image) {
      messages.push({
        role: "user",
        content: [
          { type: "image", source: { type: "base64", media_type: "image/jpeg", data: image } },
          { type: "text", text: prompt }
        ]
      });
    } else {
      messages.push({ role: "user", content: prompt });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.CLAUDE_API_KEY || "",
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307", // 빠르고 가벼운 모델 사용 (채팅/운세용)
        max_tokens: 4096,
        system: system,
        messages: messages,
      }),
    });

    const data = await response.json();
    if (data.error) {
      console.error("Claude API Error:", data.error);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ text: data.content[0].text });
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}