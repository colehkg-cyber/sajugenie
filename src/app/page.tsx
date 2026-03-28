"use client";
import { useState } from "react";
import {
  getTodayTarot, getLuckyElements, getDailyFortune, getAnimalSign, getZodiac,
  getLifePath, MONTHLY_2026, ELEMENT_COLORS, TAROT_MAJOR,
} from "@/data/fortune";

type View = "home" | "today" | "my" | "tarot" | "monthly";

function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white/20" style={{
          width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 3 + 1}px`,
          top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
          animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }} />
      ))}
      <style>{`@keyframes pulse { 0%,100% { opacity: 0.2; } 50% { opacity: 0.8; } }`}</style>
    </div>
  );
}

function Nav({ view, setView }: { view: View; setView: (v: View) => void }) {
  const items: { id: View; icon: string; label: string }[] = [
    { id: "home", icon: "🏠", label: "홈" },
    { id: "today", icon: "🔮", label: "오늘의 운세" },
    { id: "my", icon: "⭐", label: "나의 운세" },
    { id: "tarot", icon: "🃏", label: "타로" },
    { id: "monthly", icon: "📅", label: "월별 운세" },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-mystic/90 backdrop-blur-xl border-t border-border md:static md:border-t-0 md:border-b">
      <div className="flex justify-around max-w-lg mx-auto">
        {items.map((t) => (
          <button key={t.id} onClick={() => setView(t.id)}
            className={`flex flex-col items-center py-2 px-3 text-xs transition-colors ${view === t.id ? "text-gold" : "text-text-muted hover:text-text-secondary"}`}>
            <span className="text-lg">{t.icon}</span>
            <span className="mt-0.5">{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function ScoreBar({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div key={i} className={`w-4 h-4 rounded-full ${i < score ? "bg-gold" : "bg-border"}`} />
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <div className="text-center space-y-8 py-8">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-purple-glow via-gold to-purple-glow bg-clip-text text-transparent">
            🔮 콜잇도사
          </span>
        </h1>
        <p className="text-text-secondary text-sm md:text-base">
          동서양 심리철학 융합 운세 AI
        </p>
        <p className="text-text-muted text-xs">
          사주 · 타로 · 수비학 · 별자리 · 심리학
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        <div className="bg-mystic-card border border-border rounded-2xl p-5 hover:border-purple-glow/40 transition-all cursor-pointer">
          <span className="text-3xl">🔮</span>
          <p className="text-sm font-medium mt-2">오늘의 운세</p>
          <p className="text-[10px] text-text-muted mt-1">일운 · 타로 · 행운요소</p>
        </div>
        <div className="bg-mystic-card border border-border rounded-2xl p-5 hover:border-gold/40 transition-all cursor-pointer">
          <span className="text-3xl">⭐</span>
          <p className="text-sm font-medium mt-2">나의 운세</p>
          <p className="text-[10px] text-text-muted mt-1">사주 · 별자리 · 수비학</p>
        </div>
        <div className="bg-mystic-card border border-border rounded-2xl p-5 hover:border-fire/40 transition-all cursor-pointer">
          <span className="text-3xl">🃏</span>
          <p className="text-sm font-medium mt-2">타로 카드</p>
          <p className="text-[10px] text-text-muted mt-1">메이저 아르카나 22장</p>
        </div>
        <div className="bg-mystic-card border border-border rounded-2xl p-5 hover:border-water/40 transition-all cursor-pointer">
          <span className="text-3xl">📅</span>
          <p className="text-sm font-medium mt-2">2026 월별 운세</p>
          <p className="text-[10px] text-text-muted mt-1">병오년 월별 기운</p>
        </div>
      </div>

      <div className="bg-mystic-card border border-border rounded-2xl p-5 max-w-sm mx-auto">
        <p className="text-gold text-sm font-medium mb-2">✨ 2026 병오(丙午)년</p>
        <p className="text-xs text-text-secondary leading-relaxed">
          태양(丙) + 말(午) = 화기(火氣) 폭발의 해<br />
          열정, 확장, 변화, 스피드의 에너지가 넘칩니다
        </p>
      </div>

      <p className="text-[10px] text-text-muted">
        콜잇AI 운세 AI · 엔터테인먼트 목적 · v1.0
      </p>
    </div>
  );
}

function TodayPage() {
  const fortune = getDailyFortune();
  const tarot = getTodayTarot();
  const lucky = getLuckyElements();
  const today = new Date();
  const dateStr = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일`;

  return (
    <div className="space-y-6 py-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gold">🔮 오늘의 운세</h2>
        <p className="text-text-muted text-xs mt-1">{dateStr}</p>
      </div>

      {/* 종합 점수 */}
      <div className="bg-mystic-card border border-border rounded-2xl p-5 text-center">
        <p className="text-text-muted text-xs mb-1">오늘의 종합 운세</p>
        <p className="text-5xl font-bold text-gold">{fortune.total}<span className="text-lg text-text-muted">/100</span></p>
      </div>

      {/* 분야별 */}
      <div className="bg-mystic-card border border-border rounded-2xl p-5 space-y-3">
        <h3 className="font-bold text-sm text-purple-glow">📊 분야별 운세</h3>
        {fortune.categories.map((c) => (
          <div key={c.cat} className="flex items-center justify-between">
            <span className="text-sm">{c.cat}</span>
            <ScoreBar score={c.score} />
          </div>
        ))}
      </div>

      {/* 타로 3장 */}
      <div className="bg-mystic-card border border-border rounded-2xl p-5 space-y-3">
        <h3 className="font-bold text-sm text-purple-glow">🃏 오늘의 타로 3장</h3>
        <div className="grid grid-cols-3 gap-2">
          {tarot.map((t, i) => (
            <div key={i} className="bg-mystic/50 border border-border rounded-xl p-3 text-center">
              <p className="text-xs text-text-muted">{["과거", "현재", "미래"][i]}</p>
              <p className="text-2xl mt-1">{["🌙", "⭐", "☀️"][i]}</p>
              <p className="text-xs font-bold mt-1">{t.name}</p>
              <p className="text-[10px] text-text-secondary mt-0.5">{t.keyword}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 행운 요소 */}
      <div className="bg-mystic-card border border-border rounded-2xl p-5">
        <h3 className="font-bold text-sm text-purple-glow mb-3">🍀 오늘의 행운 요소</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-xs text-text-muted">행운색</p>
            <p className="text-lg font-bold text-gold">{lucky.color}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted">행운숫자</p>
            <p className="text-lg font-bold text-gold">{lucky.number}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted">행운방위</p>
            <p className="text-lg font-bold text-gold">{lucky.direction}</p>
          </div>
        </div>
      </div>

      <div className="bg-mystic-card border border-gold/20 rounded-2xl p-5 text-center">
        <p className="text-gold text-sm">💡 콜잇도사의 한마디</p>
        <p className="text-xs text-text-secondary mt-2 leading-relaxed">
          &ldquo;오늘은 {fortune.total >= 60 ? "좋은 기운이 함께합니다. 적극적으로 움직여보세요!" :
          fortune.total >= 40 ? "무난한 하루입니다. 차분하게 본업에 집중하세요." :
          "에너지를 아끼는 날입니다. 큰 결정은 내일로 미루세요."}&rdquo;
        </p>
      </div>
    </div>
  );
}

function MyFortunePage() {
  const [birth, setBirth] = useState({ year: "", month: "", day: "", hour: "" });
  const [result, setResult] = useState<null | { animal: typeof import("@/data/fortune").JIJI[0]; zodiac: typeof import("@/data/fortune").ZODIAC[0]; lifePath: number }>(null);

  const calculate = () => {
    const y = parseInt(birth.year), m = parseInt(birth.month), d = parseInt(birth.day);
    if (!y || !m || !d) return;
    setResult({
      animal: getAnimalSign(y),
      zodiac: getZodiac(m, d),
      lifePath: getLifePath(y, m, d),
    });
  };

  const lifePathMeaning: Record<number, string> = {
    1: "독립적 리더, 개척자의 길",
    2: "조화와 협력의 외교관",
    3: "창의적 표현자, 소통의 달인",
    4: "안정과 체계의 건축가",
    5: "자유와 모험의 탐험가",
    6: "책임과 봉사의 돌봄이",
    7: "탐구와 분석의 철학자",
    8: "성취와 권력의 야망가",
    9: "인도와 완성의 이상주의자",
    11: "영적 직관의 마스터",
    22: "비전 실현의 건설자",
    33: "치유와 가르침의 헌신자",
  };

  return (
    <div className="space-y-6 py-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gold">⭐ 나의 운세</h2>
        <p className="text-text-muted text-xs mt-1">생년월일시를 입력하세요</p>
      </div>

      <div className="bg-mystic-card border border-border rounded-2xl p-5 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-text-muted">태어난 해</label>
            <input type="number" placeholder="1995" value={birth.year}
              onChange={(e) => setBirth({ ...birth, year: e.target.value })}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-purple-glow/50 outline-none" />
          </div>
          <div>
            <label className="text-xs text-text-muted">태어난 월</label>
            <input type="number" placeholder="12" min="1" max="12" value={birth.month}
              onChange={(e) => setBirth({ ...birth, month: e.target.value })}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-purple-glow/50 outline-none" />
          </div>
          <div>
            <label className="text-xs text-text-muted">태어난 일</label>
            <input type="number" placeholder="28" min="1" max="31" value={birth.day}
              onChange={(e) => setBirth({ ...birth, day: e.target.value })}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-purple-glow/50 outline-none" />
          </div>
          <div>
            <label className="text-xs text-text-muted">태어난 시 (선택)</label>
            <input type="number" placeholder="15" min="0" max="23" value={birth.hour}
              onChange={(e) => setBirth({ ...birth, hour: e.target.value })}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-purple-glow/50 outline-none" />
          </div>
        </div>
        <button onClick={calculate}
          className="w-full py-3 bg-gradient-to-r from-purple-glow to-purple-dim rounded-xl font-bold text-sm hover:opacity-90 transition">
          🔮 운세 보기
        </button>
      </div>

      {result && (
        <>
          <div className="bg-mystic-card border border-border rounded-2xl p-5 space-y-4">
            <h3 className="font-bold text-purple-glow text-sm">🐾 띠 (12지신)</h3>
            <div className="text-center">
              <p className="text-4xl">{result.animal.animal.split(" ")[0]}</p>
              <p className="text-lg font-bold mt-2">{result.animal.animal}</p>
              <p className="text-xs text-text-secondary mt-1">
                오행: <span style={{ color: ELEMENT_COLORS[result.animal.element] }}>{result.animal.element}({result.animal.element === "목" ? "木" : result.animal.element === "화" ? "火" : result.animal.element === "토" ? "土" : result.animal.element === "금" ? "金" : "水"})</span>
              </p>
            </div>
          </div>

          <div className="bg-mystic-card border border-border rounded-2xl p-5 space-y-3">
            <h3 className="font-bold text-purple-glow text-sm">⭐ 별자리</h3>
            <div className="text-center">
              <p className="text-lg font-bold">{result.zodiac.name}</p>
              <p className="text-xs text-text-secondary">{result.zodiac.period} · {result.zodiac.element} 원소</p>
              <p className="text-sm text-gold mt-2">{result.zodiac.keyword}</p>
            </div>
          </div>

          <div className="bg-mystic-card border border-border rounded-2xl p-5 space-y-3">
            <h3 className="font-bold text-purple-glow text-sm">🔢 수비학 — 생명수</h3>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold">{result.lifePath}</p>
              <p className="text-sm text-text-secondary mt-2">
                {lifePathMeaning[result.lifePath] || "특별한 에너지를 가진 숫자"}
              </p>
            </div>
          </div>

          <div className="bg-mystic-card border border-gold/20 rounded-2xl p-5 text-center">
            <p className="text-gold text-sm">💡 콜잇도사의 한마디</p>
            <p className="text-xs text-text-secondary mt-2 leading-relaxed">
              &ldquo;{result.animal.animal.split(" ")[1]}띠에 {result.zodiac.name}, 생명수 {result.lifePath}의 조합이시군요!
              {result.lifePath <= 3 ? " 창의적이고 표현력이 뛰어난 분입니다." :
                result.lifePath <= 6 ? " 안정감 있고 책임감 강한 분입니다." :
                " 깊은 통찰력과 영적 감각을 가진 분입니다."}
              더 자세한 사주 분석은 Phase 2에서 만나요!&rdquo;
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function TarotPage() {
  const [picked, setPicked] = useState<number | null>(null);
  const [isReversed, setIsReversed] = useState(false);

  const pickCard = () => {
    const idx = Math.floor(Math.random() * 22);
    const reversed = Math.random() > 0.7;
    setPicked(idx);
    setIsReversed(reversed);
  };

  return (
    <div className="space-y-6 py-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gold">🃏 타로 카드</h2>
        <p className="text-text-muted text-xs mt-1">카드를 뽑아보세요</p>
      </div>

      <div className="text-center">
        <button onClick={pickCard}
          className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-dim rounded-2xl font-bold hover:opacity-90 transition text-lg">
          🃏 카드 뽑기
        </button>
      </div>

      {picked !== null && (
        <div className="bg-mystic-card border border-purple-glow/30 rounded-2xl p-6 text-center space-y-4">
          <p className="text-6xl">{isReversed ? "🔄" : "✨"}</p>
          <div>
            <p className="text-xs text-text-muted">{isReversed ? "역방향" : "정방향"} · {TAROT_MAJOR[picked].num}번</p>
            <h3 className="text-2xl font-bold text-gold mt-1">{TAROT_MAJOR[picked].name}</h3>
            <p className="text-sm text-text-secondary">{TAROT_MAJOR[picked].eng}</p>
          </div>
          <div className="bg-mystic/50 rounded-xl p-4">
            <p className="text-sm text-text-primary">
              {isReversed ? TAROT_MAJOR[picked].reverse : TAROT_MAJOR[picked].keyword}
            </p>
          </div>
          <p className="text-xs text-text-muted">
            {isReversed
              ? "역방향 카드는 에너지가 막혀있음을 의미합니다. 내면을 돌아보세요."
              : "정방향 카드는 에너지가 순조롭게 흐르고 있음을 의미합니다."}
          </p>
        </div>
      )}

      <div className="bg-mystic-card border border-border rounded-2xl p-5">
        <h3 className="font-bold text-sm text-purple-glow mb-3">📖 메이저 아르카나 22장</h3>
        <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto">
          {TAROT_MAJOR.map((t) => (
            <div key={t.num} className="bg-mystic/50 border border-border rounded-lg p-2 text-center">
              <p className="text-[10px] text-text-muted">{t.num}</p>
              <p className="text-xs font-bold">{t.name}</p>
              <p className="text-[10px] text-text-secondary">{t.keyword}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MonthlyPage() {
  const currentMonth = new Date().getMonth() + 1;
  return (
    <div className="space-y-6 py-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gold">📅 2026 병오년 월별 운세</h2>
        <p className="text-text-muted text-xs mt-1">태양(丙) + 말(午) = 화기 폭발의 해</p>
      </div>

      <div className="space-y-3">
        {MONTHLY_2026.map((m) => (
          <div key={m.month}
            className={`bg-mystic-card border rounded-2xl p-4 transition-all ${
              m.month === currentMonth ? "border-gold/50 bg-mystic-card-hover" : "border-border"
            }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  m.month === currentMonth ? "bg-gold/20 text-gold" : "bg-mystic text-text-secondary"
                }`}>
                  {m.month}월
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {m.ganji}월 {m.month === currentMonth && <span className="text-gold text-xs">← 이번 달</span>}
                  </p>
                  <p className="text-xs text-text-secondary">{m.keyword}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < m.luck ? "bg-gold" : "bg-border"}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [view, setView] = useState<View>("home");

  const renderView = () => {
    switch (view) {
      case "home": return <HomePage />;
      case "today": return <TodayPage />;
      case "my": return <MyFortunePage />;
      case "tarot": return <TarotPage />;
      case "monthly": return <MonthlyPage />;
    }
  };

  return (
    <div className="min-h-screen relative">
      <Stars />
      <Nav view={view} setView={setView} />
      <main className="relative z-10 max-w-lg mx-auto px-4 pb-20 md:pb-4">
        {renderView()}
      </main>
    </div>
  );
}
