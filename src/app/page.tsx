"use client";
import { useState, useEffect } from "react";
import {
  getTodayTarot, getLuckyElements, getDailyFortune, getAnimalSign, getZodiac,
  getLifePath, MONTHLY_2026, ELEMENT_COLORS, TAROT_MAJOR, JIJI, CHEONGAN,
  PHYSIOGNOMY, getSajuWonguk, NUMEROLOGY, getDetailedDailyFortune,
} from "@/data/fortune";

type Tab = "root" | "chat" | "my";

interface Profile {
  name: string;
  nameHanja: string;
  year: string;
  month: string;
  day: string;
  hour: string;
}

function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 40 }).map((_, i) => (
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

function BottomNav({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
  const items: { id: Tab; icon: string; label: string }[] = [
    { id: "root", icon: "🔮", label: "근본" },
    { id: "chat", icon: "💬", label: "타일러 도사" },
    { id: "my", icon: "👤", label: "마이페이지" },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-mystic/95 backdrop-blur-xl border-t border-border safe-bottom">
      <div className="flex justify-around max-w-lg mx-auto">
        {items.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex flex-col items-center py-3 px-4 text-xs transition-colors ${tab === t.id ? "text-gold" : "text-text-muted hover:text-text-secondary"}`}>
            <span className="text-xl">{t.icon}</span>
            <span className="mt-1">{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function ScoreBar({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <div key={i} className={`w-3 h-3 rounded-full ${i < score ? "bg-gold" : "bg-border"}`} />
      ))}
    </div>
  );
}

// 일진 계산 (간단 시뮬레이션)
function getDailyGanji() {
  const today = new Date();
  const base = new Date(2026, 0, 1); // 2026.1.1 = 대략 계산용
  const diff = Math.floor((today.getTime() - base.getTime()) / 86400000);
  const ganIdx = (diff + 6) % 10; // 기준점 보정
  const jiIdx = (diff + 0) % 12;
  return { gan: CHEONGAN[ganIdx], ji: JIJI[jiIdx] };
}

// 띠별 오늘 운세 점수 (일진과의 관계)
function getAnimalDailyScore(animalIdx: number) {
  const { ji } = getDailyGanji();
  const dayIdx = JIJI.indexOf(ji);
  const relations: Record<string, number> = {};
  // 삼합
  const samhap = [[0,4,8],[1,5,9],[2,6,10],[3,7,11]];
  samhap.forEach(g => { if (g.includes(dayIdx)) g.forEach(i => { relations[String(i)] = 95; }); });
  // 육합
  const yukhap = [[0,1],[2,11],[3,10],[4,9],[5,8],[6,7]];
  yukhap.forEach(([a,b]) => {
    if (dayIdx === a) relations[String(b)] = 92;
    if (dayIdx === b) relations[String(a)] = 92;
  });
  // 충
  const chung = (dayIdx + 6) % 12;
  relations[String(chung)] = 40;
  // 형
  const hyung: Record<number, number[]> = { 0: [3], 3: [0], 2: [5,8], 5: [2,8], 8: [2,5], 1: [10,9], 10: [1,9], 9: [1,10] };
  (hyung[dayIdx] || []).forEach(i => { if (!relations[String(i)]) relations[String(i)] = 48; });
  
  return relations[String(animalIdx)] || (60 + Math.floor(Math.random() * 20));
}

// ========== 근본 탭 ==========
function RootTab({ profile, setProfile, saved }: { profile: Profile; setProfile: (p: Profile) => void; saved: boolean }) {
  const [showResult, setShowResult] = useState(saved);
  const ganji = getDailyGanji();
  const today = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dateStr = `${today.getFullYear()}.${String(today.getMonth()+1).padStart(2,"0")}.${String(today.getDate()).padStart(2,"0")} ${days[today.getDay()]}`;

  const handleSubmit = () => {
    if (!profile.year || !profile.month || !profile.day) return;
    localStorage.setItem("tyler_profile", JSON.stringify(profile));
    localStorage.setItem("tyler_history", JSON.stringify([
      ...(JSON.parse(localStorage.getItem("tyler_history") || "[]")),
      { date: dateStr, type: "근본분석" }
    ]));
    setShowResult(true);
  };

  const y = parseInt(profile.year), m = parseInt(profile.month), d = parseInt(profile.day);
  const animal = y ? getAnimalSign(y) : null;
  const zodiac = m && d ? getZodiac(m, d) : null;
  const lifePath = y && m && d ? getLifePath(y, m, d) : null;
  const tarot = getTodayTarot();
  const lucky = getLuckyElements();
  const myAnimalIdx = animal ? JIJI.indexOf(animal) : -1;

  // 오행 관계 해석
  const ganElement = ganji.gan.element;
  const ganYinyang = ganji.gan.yinyang;
  const jiElement = ganji.ji.element;
  const elementRelation = ganElement === "금" && jiElement === "수" ? "금생수(金生水)" :
    ganElement === "수" && jiElement === "목" ? "수생목(水生木)" :
    ganElement === "목" && jiElement === "화" ? "목생화(木生火)" :
    ganElement === "화" && jiElement === "토" ? "화생토(火生土)" :
    ganElement === "토" && jiElement === "금" ? "토생금(土生金)" : 
    `${ganElement}+${jiElement}`;

  if (!showResult) {
    return (
      <div className="space-y-6 py-4">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-glow via-gold to-purple-glow bg-clip-text text-transparent">
              🔮 타일러의 타이르는 운세
            </span>
          </h1>
          <p className="text-text-secondary text-xs">동서양 심리철학 융합 운세 AI</p>
        </div>

        <div className="bg-mystic-card border border-border rounded-2xl p-5 space-y-4">
          <h2 className="font-bold text-gold text-center">📝 근본 입력</h2>
          
          <div>
            <label className="text-xs text-text-muted">이름</label>
            <input type="text" placeholder="이름 입력" value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
          </div>

          <div>
            <label className="text-xs text-text-muted">이름 한자 발음 (선택)</label>
            <input type="text" placeholder="ex) 밝을현 준법준" value={profile.nameHanja}
              onChange={(e) => setProfile({...profile, nameHanja: e.target.value})}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-text-muted">생년 *</label>
              <input type="number" placeholder="1990" value={profile.year}
                onChange={(e) => setProfile({...profile, year: e.target.value})}
                className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
            </div>
            <div>
              <label className="text-xs text-text-muted">월 *</label>
              <input type="number" placeholder="1" min="1" max="12" value={profile.month}
                onChange={(e) => setProfile({...profile, month: e.target.value})}
                className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
            </div>
            <div>
              <label className="text-xs text-text-muted">일 *</label>
              <input type="number" placeholder="1" min="1" max="31" value={profile.day}
                onChange={(e) => setProfile({...profile, day: e.target.value})}
                className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
            </div>
          </div>

          <div>
            <label className="text-xs text-text-muted">태어난 시 (선택, 0~23)</label>
            <input type="number" placeholder="ex) 15" min="0" max="23" value={profile.hour}
              onChange={(e) => setProfile({...profile, hour: e.target.value})}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
          </div>

          <button onClick={handleSubmit}
            className="w-full py-3.5 bg-gradient-to-r from-purple-glow to-gold rounded-xl font-bold text-sm hover:opacity-90 transition">
            🔮 운세 보기
          </button>

          <button onClick={() => { localStorage.clear(); window.location.reload(); }}
            className="w-full py-2 text-text-muted text-[10px] hover:text-fire/60 transition">
            🗑️ 캐시 초기화
          </button>
        </div>

        <p className="text-[10px] text-text-muted text-center">타일러의 타이르는 운세 · v3.0</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 py-4">
      {/* 헤더 */}
      <div className="text-center">
        <h2 className="text-lg font-bold text-gold">🔮 {profile.name || "익명"}님의 통합 운세</h2>
        <p className="text-text-muted text-xs">{dateStr} · 일진: {ganji.gan.name}{ganji.ji.name}({ganji.gan.hanja}{ganji.ji.name === "자" ? "子" : ganji.ji.name === "축" ? "丑" : ganji.ji.name === "인" ? "寅" : ganji.ji.name === "묘" ? "卯" : ganji.ji.name === "진" ? "辰" : ganji.ji.name === "사" ? "巳" : ganji.ji.name === "오" ? "午" : ganji.ji.name === "미" ? "未" : ganji.ji.name === "신" ? "申" : ganji.ji.name === "유" ? "酉" : ganji.ji.name === "술" ? "戌" : "亥"})</p>
        <button onClick={() => setShowResult(false)} className="text-[10px] text-purple-glow mt-1">✏️ 수정</button>
      </div>

      {/* 오늘의 기운 */}
      <div className="bg-mystic-card border border-gold/30 rounded-2xl p-4">
        <p className="text-gold text-sm font-bold mb-2">☯️ 오늘의 기운</p>
        <p className="text-xs text-text-secondary leading-relaxed">
          {ganji.gan.keyword.split("—")[0].trim()}({ganji.gan.hanja}{ganji.gan.element}) 위에 {JIJI.find(j => j === ganji.ji)?.animal || ""}의 기운이 흐르는 날. {elementRelation}의 흐름으로 {ganElement === "금" ? "냉철한 판단력" : ganElement === "수" ? "지혜로운 직관" : ganElement === "목" ? "성장의 에너지" : ganElement === "화" ? "열정의 불꽃" : "안정의 대지"}이 빛나는 하루입니다.
        </p>
      </div>

      {/* 나의 운세 (내 띠) — RAG 기반 상세 */}
      {animal && (() => {
        const myFortune = getDetailedDailyFortune(ganji.ji.name, animal.name);
        return (
        <div className="bg-mystic-card border border-purple-glow/30 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="font-bold text-sm">⭐ 나의 운세 — {animal.animal}</p>
            <span className={`text-sm font-bold ${myFortune.score >= 80 ? "text-gold" : myFortune.score >= 50 ? "text-text-secondary" : "text-fire"}`}>{myFortune.score}%</span>
          </div>
          {myFortune.type !== "보통" && (
            <div className="bg-mystic/50 rounded-lg px-3 py-1.5 mb-2">
              <p className="text-xs text-purple-glow font-bold">{myFortune.type}</p>
            </div>
          )}
          <p className="text-xs text-text-secondary leading-relaxed mb-3">{myFortune.text}</p>
          <div className="grid grid-cols-4 gap-2">
            {[{l:"💰재물",s:((myFortune.score*0.95)|0)},{l:"💪건강",s:((myFortune.score*1.02)|0)},{l:"💕사랑",s:((myFortune.score*0.98)|0)},{l:"🍀행운",s:((myFortune.score*1.05)|0)}].map(x => (
              <div key={x.l} className="text-center bg-mystic/50 rounded-lg p-1.5">
                <p className="text-[10px] text-text-muted">{x.l}</p>
                <p className="text-xs font-bold text-gold">{Math.min(x.s, 99)}</p>
              </div>
            ))}
          </div>
        </div>
        );
      })()}

      {/* 통합 분석 리포트 */}
      <div className="space-y-3">
        {/* 사주원국 */}
        {y && m && d && (() => {
          const saju = getSajuWonguk(y, m, d, profile.hour ? parseInt(profile.hour) : undefined);
          const pillars = [
            { label: "시주", gan: saju.hourGan, ji: saju.hourJi },
            { label: "일주", gan: saju.dayGan, ji: saju.dayJi },
            { label: "월주", gan: saju.monthGan, ji: saju.monthJi },
            { label: "년주", gan: saju.yearGan, ji: saju.yearJi },
          ];
          const elColors: Record<string,string> = {"목":"#27ae60","화":"#e74c3c","토":"#d4a437","금":"#bdc3c7","수":"#3498db"};
          // 천간 이모지 3개 (쉬운 설명)
          const ganEmoji: Record<string,string> = {
            "갑":"🌳💪🏔️", "을":"🌿🌸🎨", "병":"☀️🔥👑", "정":"🕯️✨💡",
            "무":"🏔️🛡️🧱", "기":"🌾🏡🤝", "경":"⚔️💎🪨", "신":"💍✂️🔬",
            "임":"🌊🧠🌏", "계":"💧🌙🔮"
          };
          const ganDesc: Record<string,string> = {
            "갑":"큰나무·리더·개척", "을":"풀꽃·유연·예술", "병":"태양·열정·카리스마", "정":"촛불·따뜻·섬세",
            "무":"큰산·안정·신뢰", "기":"논밭·포용·실용", "경":"바위·결단·의리", "신":"보석·예민·완벽",
            "임":"큰바다·지혜·포용", "계":"이슬·직관·영감"
          };
          return (
            <>
              <div className="bg-mystic-card border border-border rounded-2xl p-4">
                <p className="font-bold text-sm text-purple-glow mb-3">📜 사주원국(四柱八字)</p>
                <div className="grid grid-cols-4 gap-2">
                  {pillars.map((p) => {
                    const jiHanja: Record<string,string> = {"자":"子","축":"丑","인":"寅","묘":"卯","진":"辰","사":"巳","오":"午","미":"未","신":"申","유":"酉","술":"戌","해":"亥"};
                    const elEmoji: Record<string,string> = {"목":"🌳","화":"🔥","토":"🏔️","금":"⚔️","수":"💧"};
                    return (
                    <div key={p.label} className="text-center">
                      <p className="text-[10px] text-text-muted mb-1">{p.label}</p>
                      <div className="rounded-lg p-2 mb-1" style={{backgroundColor: elColors[p.gan.element]+"20", border: `1px solid ${elColors[p.gan.element]}40`}}>
                        <p className="text-lg font-bold" style={{color: elColors[p.gan.element]}}>{p.gan.hanja}</p>
                        <p className="text-xs text-text-primary">{p.gan.name}</p>
                        <p className="text-sm">{ganEmoji[p.gan.name] || "✨✨✨"}</p>
                        <p className="text-[9px] text-text-muted">{elEmoji[p.gan.element]}{p.gan.element}({p.gan.yinyang})</p>
                      </div>
                      <div className="rounded-lg p-2" style={{backgroundColor: elColors[p.ji.element]+"20", border: `1px solid ${elColors[p.ji.element]}40`}}>
                        <p className="text-lg font-bold" style={{color: elColors[p.ji.element]}}>{jiHanja[p.ji.name] || ""}</p>
                        <p className="text-xs text-text-primary">{p.ji.name}</p>
                        <p className="text-lg">{p.ji.animal.split(" ")[0]}</p>
                        <p className="text-[9px] text-text-muted">{elEmoji[p.ji.element]}{p.ji.element}</p>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>

              {/* 오행 비율 */}
              <div className="bg-mystic-card border border-border rounded-2xl p-4">
                <p className="font-bold text-sm text-purple-glow mb-3">☯️ 오행 비율</p>
                <div className="space-y-2">
                  {Object.entries(saju.elementPercent).map(([el, pct]) => (
                    <div key={el} className="flex items-center gap-2">
                      <span className="text-xs w-8" style={{color: elColors[el]}}>{el}</span>
                      <div className="flex-1 h-4 bg-mystic/50 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{width: `${pct}%`, backgroundColor: elColors[el]}} />
                      </div>
                      <span className="text-xs text-text-muted w-10 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 신강/신약 */}
              <div className="bg-mystic-card border border-border rounded-2xl p-4 text-center">
                <p className="font-bold text-sm text-purple-glow mb-2">⚖️ 신강/신약</p>
                <div className="relative w-24 h-24 mx-auto">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#2A2A2A" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke={saju.sinScore >= 50 ? "#D4AF37" : "#9b59b6"} strokeWidth="8"
                      strokeDasharray={`${saju.sinScore * 2.51} 251`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">{saju.sinScore}</span>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-2">
                  {saju.sinScore >= 60 ? "신강(身强) — 에너지 넘침, 리더형" : saju.sinScore >= 40 ? "중화(中和) — 균형 잡힌 사주" : "신약(身弱) — 섬세하고 전략적"}
                </p>
                <p className="text-[10px] text-text-muted mt-1">일간: {saju.dayGan.hanja}({saju.dayGan.element}) — {saju.dayGan.keyword}</p>
              </div>
            </>
          );
        })()}

        {/* 타로 */}
        <div className="bg-mystic-card border border-border rounded-2xl p-4">
          <p className="font-bold text-sm text-purple-glow mb-2">🃏 타로 3장</p>
          <div className="grid grid-cols-3 gap-2">
            {tarot.map((t, i) => (
              <div key={i} className="bg-mystic/50 rounded-lg p-2 text-center">
                <p className="text-[10px] text-text-muted">{["과거","현재","미래"][i]}</p>
                <p className="text-xs font-bold mt-1">{t.name}</p>
                <p className="text-[10px] text-gold mt-0.5">{t.keyword.split(",")[0]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 수비학 + 별자리 */}
        <div className="grid grid-cols-2 gap-3">
          {lifePath && (
            <div className="bg-mystic-card border border-border rounded-2xl p-4 text-center">
              <p className="text-[10px] text-text-muted">🔢 생명수</p>
              <p className="text-2xl font-bold text-gold">{lifePath}</p>
              {NUMEROLOGY[lifePath] && <p className="text-[10px] text-text-secondary mt-1">{NUMEROLOGY[lifePath].title}</p>}
            </div>
          )}
          {zodiac && (
            <div className="bg-mystic-card border border-border rounded-2xl p-4 text-center">
              <p className="text-[10px] text-text-muted">⭐ 별자리</p>
              <p className="text-sm font-bold">{zodiac.name}</p>
              <p className="text-[10px] text-gold">{zodiac.keyword}</p>
            </div>
          )}
        </div>

        {/* 인상학 */}
        <div className="bg-mystic-card border border-border rounded-2xl p-4">
          <p className="font-bold text-sm text-purple-glow mb-2">👤 인상학 — 오행 얼굴형</p>
          <div className="space-y-1.5">
            {PHYSIOGNOMY.faceShapes.items.map((f: { element: string; shape: string; personality: string }) => (
              <div key={f.element} className="flex items-center gap-2 text-xs">
                <span>{f.element.includes("목")?"🌳":f.element.includes("화")?"🔥":f.element.includes("토")?"🏔️":f.element.includes("금")?"⚔️":"💧"}</span>
                <span className="font-medium w-20">{f.element}</span>
                <span className="text-text-secondary">{f.shape}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 행운 요소 */}
        <div className="bg-mystic-card border border-gold/20 rounded-2xl p-4">
          <p className="font-bold text-sm text-gold mb-2">🍀 오늘의 행운 요소</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div><p className="text-[10px] text-text-muted">행운색</p><p className="text-sm font-bold text-gold">{lucky.color}</p></div>
            <div><p className="text-[10px] text-text-muted">행운숫자</p><p className="text-sm font-bold text-gold">{lucky.number}</p></div>
            <div><p className="text-[10px] text-text-muted">행운방위</p><p className="text-sm font-bold text-gold">{lucky.direction}</p></div>
          </div>
        </div>

        {/* 최면심리학 자기암시 */}
        <div className="bg-mystic-card border border-purple-glow/20 rounded-2xl p-4 text-center">
          <p className="text-purple-glow text-sm font-bold">🧠 오늘의 자기 암시</p>
          <p className="text-xs text-text-secondary mt-2 leading-relaxed italic">
            &ldquo;나는 오늘 {lucky.color} 빛처럼 빛나는 하루를 보낸다. {zodiac ? zodiac.keyword.split(",")[0].trim() + "의 기운이 나를 이끈다." : "우주의 기운이 나를 이끈다."} 모든 것이 잘 풀린다.&rdquo;
          </p>
        </div>
      </div>

      {/* 12띠 오늘의 운세 (공유용) */}
      <div className="bg-mystic-card border border-border rounded-2xl p-4">
        <p className="font-bold text-sm text-gold mb-3">📋 오늘의 12띠 운세</p>
        <div className="space-y-3">
          {JIJI.map((ji, idx) => {
            const fortune = getDetailedDailyFortune(ganji.ji.name, ji.name);
            const isMe = idx === myAnimalIdx;
            return (
              <div key={ji.name} className={`rounded-xl p-3 ${isMe ? "bg-gold/10 border border-gold/30" : "bg-mystic/50"}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold">{ji.animal} {isMe && "⭐"} {fortune.score >= 90 && "🏆"} {fortune.score <= 40 && "⚠️"}</span>
                  <span className={`text-sm font-bold ${fortune.score >= 80 ? "text-gold" : fortune.score >= 50 ? "text-text-secondary" : "text-fire"}`}>{fortune.score}%</span>
                </div>
                {fortune.type !== "보통" && <p className="text-[10px] text-purple-glow font-medium mb-0.5">{fortune.type}</p>}
                <p className="text-[10px] text-text-secondary leading-relaxed">{fortune.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 도사에게 물어보기 */}
      <button onClick={() => {/* setTab will be handled by parent */}}
        className="w-full py-4 bg-gradient-to-r from-purple-glow to-gold rounded-2xl font-bold text-sm hover:opacity-90 transition">
        💬 타일러 도사에게 더 물어보기
      </button>

      <p className="text-[10px] text-text-muted text-center pb-4">타일러의 타이르는 운세 · v3.0</p>
    </div>
  );
}

// ========== 채팅 탭 ==========
function ChatTab() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <span className="text-6xl">💬</span>
      <h2 className="text-xl font-bold text-gold">타이르는 타일러 도사</h2>
      <p className="text-text-secondary text-sm text-center px-8">
        AI 도사와 실시간 대화 상담
      </p>
      <div className="bg-mystic-card border border-border rounded-2xl p-6 max-w-sm text-center">
        <p className="text-purple-glow text-sm font-bold mb-2">🚧 Phase 2 준비 중</p>
        <p className="text-xs text-text-muted leading-relaxed">
          Claude API 연동 후 실시간 상담이 가능합니다.<br/>
          사주·타로·인상학·최면심리학 기반<br/>
          맞춤형 AI 상담을 제공할 예정입니다.
        </p>
      </div>
    </div>
  );
}

// ========== 마이페이지 ==========
function MyPage({ profile, setProfile, setTab }: { profile: Profile; setProfile: (p: Profile) => void; setTab: (t: Tab) => void }) {
  const [history, setHistory] = useState<{date:string;type:string}[]>([]);

  useEffect(() => {
    const h = localStorage.getItem("tyler_history");
    if (h) setHistory(JSON.parse(h));
  }, []);

  const clearData = () => {
    localStorage.removeItem("tyler_profile");
    localStorage.removeItem("tyler_history");
    setProfile({ name: "", nameHanja: "", year: "", month: "", day: "", hour: "" });
    setHistory([]);
  };

  return (
    <div className="space-y-6 py-4">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gold">👤 마이페이지</h2>
      </div>

      {profile.name ? (
        <div className="bg-mystic-card border border-border rounded-2xl p-5">
          <h3 className="font-bold text-sm text-purple-glow mb-3">내 프로필</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-text-muted">이름</span><span>{profile.name}</span></div>
            {profile.nameHanja && <div className="flex justify-between"><span className="text-text-muted">한자</span><span>{profile.nameHanja}</span></div>}
            <div className="flex justify-between"><span className="text-text-muted">생년월일</span><span>{profile.year}.{profile.month}.{profile.day}</span></div>
            {profile.hour && <div className="flex justify-between"><span className="text-text-muted">태어난 시</span><span>{profile.hour}시</span></div>}
          </div>
          <button onClick={() => setTab("root")} className="w-full mt-3 py-2 bg-purple-glow/20 text-purple-glow rounded-lg text-xs">✏️ 수정하기</button>
        </div>
      ) : (
        <div className="bg-mystic-card border border-border rounded-2xl p-5 text-center">
          <p className="text-text-muted text-sm">아직 프로필이 없습니다</p>
          <button onClick={() => setTab("root")} className="mt-3 px-6 py-2 bg-gold/20 text-gold rounded-lg text-xs">근본 입력하기</button>
        </div>
      )}

      <div className="bg-mystic-card border border-border rounded-2xl p-5">
        <h3 className="font-bold text-sm text-purple-glow mb-3">📜 과거 기록</h3>
        {history.length > 0 ? (
          <div className="space-y-2">
            {history.slice(-10).reverse().map((h, i) => (
              <div key={i} className="flex justify-between text-xs bg-mystic/50 rounded-lg p-2">
                <span className="text-text-muted">{h.date}</span>
                <span>{h.type}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-text-muted text-center">기록이 없습니다</p>
        )}
      </div>

      <button onClick={clearData} className="w-full py-2 text-fire/60 text-xs hover:text-fire transition">데이터 초기화</button>
    </div>
  );
}

// ========== 메인 ==========
export default function Home() {
  const [tab, setTab] = useState<Tab>("root");
  const [profile, setProfile] = useState<Profile>({ name: "", nameHanja: "", year: "", month: "", day: "", hour: "" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tyler_profile");
    if (saved) setProfile(JSON.parse(saved));
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const saved = !!localStorage.getItem("tyler_profile");

  return (
    <div className="min-h-screen relative">
      <Stars />
      <BottomNav tab={tab} setTab={setTab} />
      <main className="relative z-10 max-w-lg mx-auto px-4 pb-24">
        {tab === "root" && <RootTab profile={profile} setProfile={setProfile} saved={saved} />}
        {tab === "chat" && <ChatTab />}
        {tab === "my" && <MyPage profile={profile} setProfile={setProfile} setTab={setTab} />}
      </main>
    </div>
  );
}
