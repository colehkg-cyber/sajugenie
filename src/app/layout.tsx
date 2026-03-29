import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🔮 타일러의 타이르는 운세 — 동서양 심리철학 운세 AI",
  description: "사주 + 타로 + 수비학 + 별자리 + 인상학 + 최면심리학 융합 AI 운세 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
