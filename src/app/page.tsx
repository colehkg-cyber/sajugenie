"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  getTodayTarot, getLuckyElements, getDailyFortune, getAnimalSign, getZodiac,
  getLifePath, MONTHLY_2026, ELEMENT_COLORS, TAROT_MAJOR, JIJI, CHEONGAN,
  PHYSIOGNOMY, getSajuWonguk, NUMEROLOGY, getDetailedDailyFortune, getIljuDesc, ILJU_TYPE,
} from "@/data/fortune";
import { TODAY_FORTUNE } from "@/data/daily-fortune";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Tab = "root" | "chat" | "graph" | "my" | "match";

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
    { id: "match", icon: "💕", label: "궁합" },
    { id: "my", icon: "👤", label: "MY" },
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
function RootTab({ profile, setProfile, saved, setTab }: { profile: Profile; setProfile: (p: Profile) => void; saved: boolean; setTab: (t: Tab) => void }) {
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
            <input type="text" placeholder="김도사" value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
          </div>

          <div>
            <label className="text-xs text-text-muted">이름 한자 발음 (선택)</label>
            <input type="text" placeholder="쇠금 길도 스승사" value={profile.nameHanja}
              onChange={(e) => setProfile({...profile, nameHanja: e.target.value})}
              className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-text-muted">생년 *</label>
              <input type="number" placeholder="2004" value={profile.year}
                onChange={(e) => setProfile({...profile, year: e.target.value})}
                className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
            </div>
            <div>
              <label className="text-xs text-text-muted">월 *</label>
              <input type="number" placeholder="4" min="1" max="12" value={profile.month}
                onChange={(e) => setProfile({...profile, month: e.target.value})}
                className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
            </div>
            <div>
              <label className="text-xs text-text-muted">일 *</label>
              <input type="number" placeholder="6" min="1" max="31" value={profile.day}
                onChange={(e) => setProfile({...profile, day: e.target.value})}
                className="w-full mt-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-gold/50 outline-none" />
            </div>
          </div>

          {/* 사진 업로드 */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-text-muted">😊 얼굴 사진 (선택)</label>
              <label className="mt-1 flex items-center justify-center gap-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-muted cursor-pointer hover:border-purple-glow/50 transition">
                📷 촬영/업로드
                <input type="file" accept="image/*" capture="user" className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) { const r = new FileReader(); r.onload = () => localStorage.setItem("tyler_face", r.result as string); r.readAsDataURL(file); }
                  }} />
              </label>
            </div>
            <div>
              <label className="text-xs text-text-muted">✋ 손금 사진 (선택)</label>
              <label className="mt-1 flex items-center justify-center gap-1 bg-mystic border border-border rounded-lg px-3 py-2.5 text-sm text-text-muted cursor-pointer hover:border-purple-glow/50 transition">
                📷 촬영/업로드
                <input type="file" accept="image/*" capture="environment" className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) { const r = new FileReader(); r.onload = () => localStorage.setItem("tyler_palm", r.result as string); r.readAsDataURL(file); }
                  }} />
              </label>
            </div>
          </div>

          <div>
            <label className="text-xs text-text-muted">태어난 시 (선택, 0~23)</label>
            <input type="number" placeholder="14" min="0" max="23" value={profile.hour}
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

      {/* 나의 운세 — 노션 데이터 기반 */}
      {animal && (() => {
        const animalName = animal.animal.split(" ")[1] || "";
        const myData = TODAY_FORTUNE.animals.find(a => a.name.includes(animalName));
        if (!myData) return null;
        return (
        <div className="bg-mystic-card border border-purple-glow/30 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="font-bold text-sm">⭐ 나의 운세 — {myData.emoji} {myData.name} {myData.tag}</p>
            <span className={`text-sm font-bold ${myData.score >= 80 ? "text-gold" : myData.score >= 50 ? "text-text-secondary" : "text-fire"}`}>{myData.score}%</span>
          </div>
          <div className="space-y-1 mb-3">
            {myData.details.map((d, i) => (
              <p key={i} className="text-xs text-text-secondary leading-relaxed">{d}</p>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center bg-mystic/50 rounded-lg p-1.5"><p className="text-[10px] text-text-muted">💰재물</p><p className="text-xs font-bold text-gold">{myData.scores.money}</p></div>
            <div className="text-center bg-mystic/50 rounded-lg p-1.5"><p className="text-[10px] text-text-muted">💪건강</p><p className="text-xs font-bold text-gold">{myData.scores.health}</p></div>
            <div className="text-center bg-mystic/50 rounded-lg p-1.5"><p className="text-[10px] text-text-muted">💕사랑</p><p className="text-xs font-bold text-gold">{myData.scores.love}</p></div>
            <div className="text-center bg-mystic/50 rounded-lg p-1.5"><p className="text-[10px] text-text-muted">🍀행운</p><p className="text-xs font-bold text-gold">{myData.scores.luck}</p></div>
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

              {/* 일주 유형 카드 — MBTI처럼 */}
              {(() => {
                const key = saju.dayGan.name + saju.dayJi.name;
                const iljuType = ILJU_TYPE[key];
                const ilju = getIljuDesc(saju.dayGan.name, saju.dayJi.name);
                const jiHanjaMap: Record<string,string> = {"자":"子","축":"丑","인":"寅","묘":"卯","진":"辰","사":"巳","오":"午","미":"未","신":"申","유":"酉","술":"戌","해":"亥"};
                return (
                  <div className="bg-gradient-to-br from-mystic-card to-mystic border border-gold/30 rounded-2xl p-5 text-center">
                    <p className="text-3xl mb-2">{iljuType?.emoji || "🔮🔮"}</p>
                    <p className="text-gold text-lg font-bold">{saju.dayGan.hanja}{jiHanjaMap[saju.dayJi.name]}({saju.dayGan.name}{saju.dayJi.name})일주</p>
                    <p className="text-purple-glow text-xl font-bold mt-1">{iljuType?.type || "독특한 존재"}</p>
                    {iljuType?.mbti && <p className="text-text-muted text-xs mt-1">유사 MBTI: {iljuType.mbti}</p>}
                    <p className="text-xs text-text-secondary mt-3 leading-relaxed">{ilju.desc}</p>
                    {iljuType?.famous && (
                      <div className="mt-3 bg-mystic/50 rounded-xl p-3">
                        <p className="text-[10px] text-text-muted mb-1">🌟 비슷한 유명인</p>
                        <p className="text-sm font-bold text-gold">{iljuType.famous.join(" · ")}</p>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* 4주 상세 풀이 */}
              {(() => {
                const ilju = getIljuDesc(saju.dayGan.name, saju.dayJi.name);
                const elEmoji2: Record<string,string> = {"목":"🌳","화":"🔥","토":"🏔️","금":"⚔️","수":"💧"};
                const jiAnimal: Record<string,string> = {"자":"🐭쥐","축":"🐮소","인":"🐯호랑이","묘":"🐰토끼","진":"🐲용","사":"🐍뱀","오":"🐴말","미":"🐑양","신":"🐵원숭이","유":"🐔닭","술":"🐶개","해":"🐷돼지"};
                
                const pillarInfo = [
                  {label:"년주(年柱)", icon:"🏛️", meaning:"조상궁 · 사회적 환경", period:"0~15세 초년기", gan:saju.yearGan, ji:saju.yearJi,
                   reading:`${saju.yearGan.name}${saju.yearJi.name} 년주는 당신의 뿌리와 가문을 나타냅니다. ${elEmoji2[saju.yearGan.element]}${saju.yearGan.keyword.split("—")[0]}의 하늘 기운 아래 ${jiAnimal[saju.yearJi.name]}의 땅 기운이 깔려 있어, ${saju.yearGan.element === saju.yearJi.element ? "같은 오행이 만나 조상덕이 강합니다." : saju.yearGan.element === "수" && saju.yearJi.element === "수" ? "물의 기운이 넘쳐 지혜로운 집안입니다." : "다양한 기운이 만나 변화무쌍한 유년기를 보냈을 수 있습니다."}`},
                  {label:"월주(月柱)", icon:"👨‍👩‍👧", meaning:"부모궁 · 성장환경 · 사회성", period:"15~30세 청년기", gan:saju.monthGan, ji:saju.monthJi,
                   reading:`${saju.monthGan.name}${saju.monthJi.name} 월주는 부모님과 성장 환경, 그리고 사회에서 보여지는 당신의 모습입니다. ${elEmoji2[saju.monthGan.element]}${saju.monthGan.keyword.split("—")[0]}의 에너지가 청년기를 지배하며, ${jiAnimal[saju.monthJi.name]}의 기운이 직업 적성과 사회적 성향을 결정합니다. ${saju.monthGan.element === "토" ? "안정적이고 신뢰감 있는 사회생활이 예상됩니다." : saju.monthGan.element === "화" ? "열정적이고 카리스마 있는 사회활동이 특징입니다." : saju.monthGan.element === "수" ? "지혜롭고 전략적인 사회생활을 합니다." : saju.monthGan.element === "목" ? "성장하고 개척하는 사회활동이 어울립니다." : "결단력 있고 실용적인 사회생활을 합니다."}`},
                  {label:"일주(日柱)", icon:"💎", meaning:"본인 · 배우자궁 · 핵심 성격", period:"30~45세 장년기", gan:saju.dayGan, ji:saju.dayJi,
                   reading: ilju.desc},
                  ...(saju.hasHour ? [{label:"시주(時柱)", icon:"👶", meaning:"자녀궁 · 말년 · 꿈과 이상", period:"45세~ 말년기", gan:saju.hourGan, ji:saju.hourJi,
                   reading:`${saju.hourGan.name}${saju.hourJi.name} 시주는 당신의 자녀운과 말년, 그리고 내면 깊은 곳의 이상을 나타냅니다. ${elEmoji2[saju.hourGan.element]}${saju.hourGan.keyword.split("—")[0]}의 기운이 말년을 지배하며, ${jiAnimal[saju.hourJi.name]}의 에너지가 자녀와의 관계를 결정합니다. ${saju.hourGan.element === saju.dayGan.element ? "일주와 같은 오행이라 말년이 안정적입니다." : "다른 오행이 만나 말년에 새로운 변화가 찾아올 수 있습니다."}`}] : []),
                ];
                
                return (
                  <div className="bg-mystic-card border border-gold/20 rounded-2xl p-4 space-y-4">
                    <p className="font-bold text-sm text-gold">📖 사주 4주 상세 풀이</p>
                    {pillarInfo.map((p) => (
                      <div key={p.label} className="bg-mystic/50 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{p.icon}</span>
                          <div>
                            <p className="text-xs font-bold text-purple-glow">{p.label}</p>
                            <p className="text-[10px] text-text-muted">{p.meaning} · {p.period}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{backgroundColor: elColors[p.gan.element]+"30", color: elColors[p.gan.element]}}>{p.gan.hanja}{p.gan.name}</span>
                          <span className="text-[10px] text-text-muted">+</span>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{backgroundColor: elColors[p.ji.element]+"30", color: elColors[p.ji.element]}}>{jiAnimal[p.ji.name]}</span>
                        </div>
                        <p className="text-[11px] text-text-secondary leading-relaxed">{p.reading}</p>
                      </div>
                    ))}
                  </div>
                );
              })()}
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

        {/* 타로 카드 뽑기 */}
        <TarotPull />

        {/* 인상학 + 사진 분석 */}
        <FaceAnalysis />

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

      {/* 12띠 오늘의 운세 — 노션과 동일 */}
      <div className="bg-mystic-card border border-border rounded-2xl p-4">
        <p className="font-bold text-sm text-gold mb-1">{TODAY_FORTUNE.headline}</p>
        <p className="text-xs text-text-secondary mb-3">{TODAY_FORTUNE.description}</p>
        <div className="space-y-4">
          {TODAY_FORTUNE.animals.map((a) => {
            const isMe = animal && a.name.includes(animal.animal.split(" ")[1] || "");
            return (
              <div key={a.name} className={`rounded-xl p-3 ${isMe ? "bg-gold/10 border border-gold/30" : "bg-mystic/50"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold">{a.emoji} {a.name} {a.tag} {isMe && !a.tag && "⭐내띠"}</span>
                  <span className={`text-sm font-bold ${a.score >= 80 ? "text-gold" : a.score >= 50 ? "text-text-secondary" : "text-fire"}`}>{a.score}%</span>
                </div>
                <div className="space-y-1 mb-2">
                  {a.details.map((d, i) => (
                    <p key={i} className="text-[11px] text-text-secondary leading-relaxed">{d}</p>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-1">
                  <div className="text-center bg-mystic/50 rounded px-1 py-0.5"><p className="text-[9px] text-text-muted">재물</p><p className="text-[10px] font-bold text-gold">{a.scores.money}</p></div>
                  <div className="text-center bg-mystic/50 rounded px-1 py-0.5"><p className="text-[9px] text-text-muted">건강</p><p className="text-[10px] font-bold text-gold">{a.scores.health}</p></div>
                  <div className="text-center bg-mystic/50 rounded px-1 py-0.5"><p className="text-[9px] text-text-muted">사랑</p><p className="text-[10px] font-bold text-gold">{a.scores.love}</p></div>
                  <div className="text-center bg-mystic/50 rounded px-1 py-0.5"><p className="text-[9px] text-text-muted">행운</p><p className="text-[10px] font-bold text-gold">{a.scores.luck}</p></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 bg-mystic/50 rounded-xl p-3 text-center">
          <p className="text-[10px] text-text-muted whitespace-pre-line">{TODAY_FORTUNE.footer}</p>
        </div>
      </div>

      {/* 공유 기능 */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => {
          const shareText = `🔮 타일러의 타이르는 운세\n${profile.name}님의 사주 결과\n\n띠: ${animal?.animal}\n별자리: ${zodiac?.name}\n생명수: ${lifePath}\n\n오늘의 운세를 확인해보세요!\nhttps://app-pi-one-65.vercel.app`;
          if (navigator.share) {
            navigator.share({title:"타일러의 타이르는 운세", text:shareText, url:"https://app-pi-one-65.vercel.app"});
          } else {
            navigator.clipboard.writeText(shareText);
            alert("클립보드에 복사되었습니다! 붙여넣기로 공유하세요 📋");
          }
        }} className="py-3 bg-mystic-card border border-border rounded-xl text-sm hover:border-gold/40 transition">
          📤 결과 공유하기
        </button>
        <button onClick={() => setTab("match")}
          className="py-3 bg-mystic-card border border-border rounded-xl text-sm hover:border-purple-glow/40 transition">
          💕 궁합 보기
        </button>
      </div>

      {/* 도사에게 물어보기 */}
      <button onClick={() => setTab("chat")}
        className="w-full py-4 bg-gradient-to-r from-purple-glow to-gold rounded-2xl font-bold text-sm hover:opacity-90 transition">
        💬 타일러 도사에게 더 물어보기
      </button>

      <p className="text-[10px] text-text-muted text-center pb-4">타일러의 타이르는 운세 · v3.0</p>
    </div>
  );
}

// ========== 채팅 탭 ==========
function ChatTab({ profile }: { profile: Profile }) {
  const [messages, setMessages] = useState<{role:string;text:string}[]>([
    {role:"ai", text:"안녕하세요! 콜잇도사입니다 🔮\n\n사주·타로·수비학·별자리·인상학·도교·최면심리학을 융합한 동서양 운세 AI입니다.\n\n무엇이든 물어보세요! 오늘의 운세, 사주 풀이, 타로 해석, 인간관계 상담 등 다양한 상담이 가능합니다."},
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({behavior:"smooth"}); }, [messages]);

  const SYSTEM = `당신은 '콜잇도사'입니다. 동서양 심리철학(사주명리학+타로+수비학+별자리+인상학+도교+최면심리학) 융합 운세 AI 전문가입니다.

[응답 규칙]
- 자신을 '콜잇도사'로 칭함
- 따뜻하고 차분한 전문가 톤 (심리상담가처럼)
- 사주 용어는 한자+한글+쉬운설명 병행
- 표 활용, 섹션 정리 (최대 5개)
- 역사적 인물/사건 비유로 배움도 함께
- 답변 끝에 격려 한마디
- 추론은 짧게, 답변 내용은 풍부하고 길게
- 불필요한 반복이나 서론 생략, 바로 핵심부터
- 표(table)보다는 리스트(-)나 이모지로 정리 (모바일 화면 최적화)
- 마크다운 표를 쓸 경우 컬럼은 3개 이하로 간결하게

[사용자 정보]
이름: ${profile.name || "익명"}
${profile.nameHanja ? `한자: ${profile.nameHanja}` : ""}
${profile.year ? `생년월일: ${profile.year}.${profile.month}.${profile.day}` : "생년월일 미입력"}
${profile.hour ? `태어난 시: ${profile.hour}시` : ""}

[전문 지식]
- 사주: 천간10 지지12 오행상생상극 십신 용신 대운 세운 합충형파
- 타로: 메이저22장 마이너56장 정역방향 카바라 스프레드
- 수비학: 생명수 마스터넘버 이름획수
- 별자리: 12궁 4원소 행성
- 인상학: 오악 삼정 십이궁 오행얼굴형
- 도교: 내단(정기신) 외단 양생 소주천대주천
- 최면심리학: 자기암시 이완 융원형론`;

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, {role:"user", text:userMsg}]);
    setLoading(true);

    try {
      const history = messages.slice(-10).map(m => ({
        role: m.role === "ai" ? "model" : "user",
        parts: [{text: m.text}]
      }));

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          system: SYSTEM,
          prompt: userMsg,
          history: history
        })
      });
      const data = await res.json();
      const aiText = data.text || "죄송합니다. 잠시 후 다시 시도해주세요.";
      setMessages(prev => [...prev, {role:"ai", text:aiText}]);
    } catch {
      setMessages(prev => [...prev, {role:"ai", text:"네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요."}]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      <div className="text-center py-2">
        <h2 className="text-sm font-bold text-gold">💬 콜잇도사와 대화</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-2 space-y-3 pb-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
              m.role === "user"
                ? "bg-purple-glow/30 border border-purple-glow/40"
                : "bg-mystic-card border border-border"
            }`}>
              {m.role === "ai" && <p className="text-[10px] text-gold mb-1">🔮 콜잇도사</p>}
              <div className="text-xs text-text-secondary leading-relaxed prose prose-invert prose-xs max-w-none [&_h3]:text-gold [&_h3]:text-sm [&_h3]:mt-3 [&_h3]:mb-1 [&_strong]:text-text-primary [&_table]:text-[10px] [&_th]:px-2 [&_th]:py-1 [&_td]:px-2 [&_td]:py-1 [&_th]:bg-mystic/50 [&_hr]:border-border [&_p]:my-1">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.text}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-mystic-card border border-border rounded-2xl px-4 py-3">
              <p className="text-[10px] text-gold mb-1">🔮 콜잇도사</p>
              <p className="text-xs text-text-muted animate-pulse">답변 생성 중...</p>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="px-2 pb-2 flex gap-2 items-end">
        <textarea
          value={input}
          onChange={(e) => { setInput(e.target.value); e.target.style.height="auto"; e.target.style.height=Math.min(e.target.scrollHeight,120)+"px"; }}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
          placeholder="사주, 타로, 운세 무엇이든 물어보세요..."
          rows={1}
          className="flex-1 bg-mystic border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 outline-none resize-none overflow-hidden"
          style={{minHeight:"44px"}}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-4 py-3 bg-gradient-to-r from-purple-glow to-gold rounded-xl font-bold text-sm disabled:opacity-50 shrink-0"
        >
          ✨
        </button>
      </div>
    </div>
  );
}

// ========== 인상학 사진 분석 ==========
function FaceAnalysis() {
  const [faceImg, setFaceImg] = useState<string|null>(null);
  const [palmImg, setPalmImg] = useState<string|null>(null);
  const [faceResult, setFaceResult] = useState<string|null>(null);
  const [palmResult, setPalmResult] = useState<string|null>(null);
  const [loading, setLoading] = useState<string|null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "face"|"palm") => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      if (type === "face") { setFaceImg(reader.result as string); analyzeFace(base64, type); }
      else { setPalmImg(reader.result as string); analyzeFace(base64, type); }
    };
    reader.readAsDataURL(file);
  };

  const analyzeFace = async (base64: string, type: "face"|"palm") => {
    setLoading(type);
    if (type === "face") setFaceResult(null);
    else setPalmResult(null);

    const prompt = type === "face"
      ? `이 얼굴 사진을 인상학(人相學) 관점에서 분석해주세요.

분석 항목:
1. 오행 얼굴형 (목/화/토/금/수 중 어떤 형인지)
2. 삼정(三停) 분석 (상정/중정/하정 균형)
3. 오악(五岳) 분석 (이마/코/광대/턱)
4. 전체적인 인상 해석 (성격, 재물운, 대인관계)
5. 강점과 주의할 점

따뜻하고 긍정적인 톤으로, 이모지 활용해서 보기 좋게 정리해주세요.`
      : `이 손 사진을 수상학(手相學) 관점에서 분석해주세요.

분석 항목:
1. 생명선 — 건강과 활력
2. 두뇌선 — 지능과 사고방식
3. 감정선 — 감정과 연애관
4. 운명선 — 직업과 성취
5. 손가락 길이와 모양 — 성격 특성
6. 전체적인 손 모양 (오행 분류)

따뜻하고 긍정적인 톤으로, 이모지 활용해서 보기 좋게 정리해주세요.`;

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ system: "당신은 '콜잇도사'. 동서양 인상학+수상학 전문가. 따뜻하고 전문적. 추론 짧게 답변 풍부하게. 표보다 리스트.", prompt: prompt, image: base64 })
      });
      const data = await res.json();
      const text = data.text || "분석에 실패했습니다.";
      if (type === "face") setFaceResult(text);
      else setPalmResult(text);
    } catch {
      const errMsg = "네트워크 오류. 다시 시도해주세요.";
      if (type === "face") setFaceResult(errMsg);
      else setPalmResult(errMsg);
    }
    setLoading(null);
  };

  return (
    <div className="bg-mystic-card border border-border rounded-2xl p-4 space-y-4">
      <p className="font-bold text-sm text-purple-glow">👤 인상학 · 수상학 AI 분석</p>

      {/* 얼굴 사진 */}
      <div className="bg-mystic/50 rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium">😊 얼굴 사진</p>
          <label className="px-3 py-1.5 bg-purple-glow/20 text-purple-glow rounded-lg text-[10px] cursor-pointer hover:bg-purple-glow/30 transition">
            {faceImg ? "📷 다시 촬영" : "📷 사진 올리기"}
            <input type="file" accept="image/*" capture="user" className="hidden" onChange={e => handleUpload(e, "face")} />
          </label>
        </div>
        {faceImg && <img src={faceImg} alt="얼굴" className="w-full h-40 object-cover rounded-lg mb-2" />}
        {loading === "face" && <p className="text-xs text-gold animate-pulse">🔮 인상 분석 중...</p>}
        {faceResult && (
          <div className="text-xs text-text-secondary leading-relaxed prose prose-invert prose-xs max-w-none [&_strong]:text-text-primary [&_p]:my-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{faceResult}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* 손 사진 */}
      <div className="bg-mystic/50 rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium">✋ 손금 사진</p>
          <label className="px-3 py-1.5 bg-purple-glow/20 text-purple-glow rounded-lg text-[10px] cursor-pointer hover:bg-purple-glow/30 transition">
            {palmImg ? "📷 다시 촬영" : "📷 사진 올리기"}
            <input type="file" accept="image/*" capture="environment" className="hidden" onChange={e => handleUpload(e, "palm")} />
          </label>
        </div>
        {palmImg && <img src={palmImg} alt="손" className="w-full h-40 object-cover rounded-lg mb-2" />}
        {loading === "palm" && <p className="text-xs text-gold animate-pulse">🔮 손금 분석 중...</p>}
        {palmResult && (
          <div className="text-xs text-text-secondary leading-relaxed prose prose-invert prose-xs max-w-none [&_strong]:text-text-primary [&_p]:my-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{palmResult}</ReactMarkdown>
          </div>
        )}
      </div>

      {!faceImg && !palmImg && (
        <p className="text-[10px] text-text-muted text-center">사진을 올리면 AI가 인상학·수상학 분석을 해드립니다</p>
      )}
    </div>
  );
}

// ========== 타로 뽑기 ==========
function TarotPull() {
  const [question, setQuestion] = useState("");
  const [count, setCount] = useState(3);
  const [cards, setCards] = useState<{card: typeof TAROT_MAJOR[0]; reversed: boolean}[]>([]);
  const [reading, setReading] = useState<string|null>(null);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"ask"|"pick"|"result">("ask");
  const [deck, setDeck] = useState<number[]>([]);
  const [picked, setPicked] = useState<number[]>([]);

  const startPick = () => {
    if (!question.trim()) return;
    const shuffled = Array.from({length:22}, (_,i)=>i).sort(()=>Math.random()-0.5);
    setDeck(shuffled);
    setPicked([]);
    setCards([]);
    setReading(null);
    setPhase("pick");
  };

  const pickCard = (idx: number) => {
    if (picked.includes(idx) || picked.length >= count) return;
    const newPicked = [...picked, idx];
    setPicked(newPicked);
    const cardIdx = deck[idx];
    const reversed = Math.random() > 0.7;
    const newCards = [...cards, {card: TAROT_MAJOR[cardIdx], reversed}];
    setCards(newCards);

    if (newCards.length >= count) {
      setTimeout(() => interpretCards(newCards), 500);
    }
  };

  const interpretCards = async (pickedCards: typeof cards) => {
    setPhase("result");
    setLoading(true);
    const cardDesc = pickedCards.map((c,i) => 
      `${i+1}번: ${c.card.name}(${c.card.eng}) ${c.reversed?"역방향":"정방향"} — ${c.reversed ? c.card.reverse : c.card.keyword}`
    ).join("\n");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ system: "당신은 '콜잇도사'. 타로 전문가. 따뜻하고 전문적. 표보다 리스트와 이모지. 각 카드를 깊이 해석하고 질문에 맞게 종합.", prompt: `타로 리딩 해주세요.\n\n질문: ${question}\n\n뽑은 카드:\n${cardDesc}\n\n각 카드의 의미를 질문에 맞게 깊이 해석하고, 종합 메시지를 주세요.` })
      });
      const data = await res.json();
      const text = data.text || "해석에 실패했습니다.";
      setReading(text);
    } catch {
      setReading("네트워크 오류. 다시 시도해주세요.");
    }
    setLoading(false);
  };

  const reset = () => { setPhase("ask"); setCards([]); setReading(null); setPicked([]); setQuestion(""); };

  return (
    <div className="bg-mystic-card border border-purple-glow/20 rounded-2xl p-4 space-y-4">
      <p className="font-bold text-sm text-purple-glow text-center">🃏 타로 카드 뽑기</p>

      {phase === "ask" && (
        <>
          <textarea value={question} onChange={e=>setQuestion(e.target.value)}
            placeholder="질문을 입력하세요... (연애, 사업, 오늘 운세 등)"
            rows={2}
            className="w-full bg-mystic border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-purple-glow/50 outline-none resize-none" />
          <div className="flex gap-2 justify-center">
            {[1,3,5,7].map(n => (
              <button key={n} onClick={() => setCount(n)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition ${count===n ? "bg-purple-glow/30 border border-purple-glow text-purple-glow" : "bg-mystic/50 border border-border text-text-muted"}`}>
                {n}장
              </button>
            ))}
          </div>
          <button onClick={startPick} className="w-full py-3 bg-gradient-to-r from-purple-glow to-gold rounded-xl font-bold text-sm">
            🔮 카드 섞기
          </button>
        </>
      )}

      {phase === "pick" && (
        <>
          <p className="text-xs text-text-secondary text-center">카드를 {count}장 골라주세요 ({picked.length}/{count})</p>
          <div className="grid grid-cols-7 gap-1.5">
            {deck.map((_, idx) => (
              <button key={idx} onClick={() => pickCard(idx)}
                disabled={picked.includes(idx)}
                className={`aspect-[2/3] rounded-lg text-lg transition-all ${
                  picked.includes(idx) 
                    ? "bg-gold/30 border-2 border-gold scale-95" 
                    : "bg-purple-glow/10 border border-purple-glow/30 hover:bg-purple-glow/20 hover:scale-105"
                }`}>
                {picked.includes(idx) ? "✨" : "🂠"}
              </button>
            ))}
          </div>
        </>
      )}

      {/* 뽑은 카드 표시 */}
      {cards.length > 0 && (
        <div className="flex justify-center gap-3 flex-wrap">
          {cards.map((c, i) => (
            <div key={i} className={`w-20 bg-mystic/50 border rounded-xl p-2 text-center ${c.reversed ? "border-fire/40" : "border-gold/40"}`}>
              <p className="text-[10px] text-text-muted">{i+1}번</p>
              <p className="text-2xl my-1">{c.reversed ? "🔄" : "✨"}</p>
              <p className="text-[10px] font-bold">{c.card.name}</p>
              <p className="text-[8px] text-text-muted">{c.reversed ? "역" : "정"}</p>
            </div>
          ))}
        </div>
      )}

      {/* AI 해석 */}
      {loading && <p className="text-xs text-gold text-center animate-pulse">🔮 콜잇도사가 카드를 해석하고 있습니다...</p>}
      {reading && (
        <div className="bg-mystic/50 rounded-xl p-4 text-xs text-text-secondary leading-relaxed prose prose-invert prose-xs max-w-none [&_strong]:text-text-primary [&_p]:my-1">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{reading}</ReactMarkdown>
        </div>
      )}

      {phase === "result" && !loading && (
        <button onClick={reset} className="w-full py-2 bg-mystic/50 border border-border rounded-xl text-xs text-text-muted hover:text-gold transition">
          🔄 다시 뽑기
        </button>
      )}
    </div>
  );
}

// ========== 궁합 ==========
function MatchTab({ profile }: { profile: Profile }) {
  const [partner, setPartner] = useState({ name: "", year: "", month: "", day: "" });
  const [matchType, setMatchType] = useState<"love"|"business"|"friend">("love");
  const [result, setResult] = useState<null|{score:number;desc:string;details:string[]}>(null);
  const [loading, setLoading] = useState(false);

  const matchLabels = {love:"💕 연애 궁합", business:"💼 사업 궁합", friend:"🤝 친구 궁합"};

  const analyzeMatch = async () => {
    if (!partner.year || !partner.month || !partner.day) return;
    if (!profile.year) { alert("먼저 근본 탭에서 내 정보를 입력해주세요!"); return; }
    setLoading(true);

    try {
      const prompt = `사주 궁합을 봐주세요.

나: ${profile.name || "본인"}, ${profile.year}.${profile.month}.${profile.day}생${profile.hour ? ` ${profile.hour}시` : ""}
상대: ${partner.name || "상대방"}, ${partner.year}.${partner.month}.${partner.day}생

궁합 유형: ${matchLabels[matchType]}

다음을 분석해주세요:
1. 두 사람의 띠(12지신) 관계 (삼합/육합/충/형/파/해)
2. 오행 궁합 (상생/상극)
3. 궁합 점수 (100점 만점)
4. ${matchType === "love" ? "연애/결혼" : matchType === "business" ? "사업/동업" : "우정/친구"} 관점에서의 조언
5. 주의할 점과 강점

표와 이모지를 적극 활용해서 보기 좋게 정리해주세요.`;

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ system: "당신은 '콜잇도사'입니다. 동서양 심리철학 융합 운세 AI. 따뜻하고 전문적인 톤. 추론은 짧게, 답변은 풍부하게.", prompt: prompt })
      });
      const data = await res.json();
      const text = data.text || "분석에 실패했습니다.";
      setResult({score:0, desc:text, details:[]});
    } catch {
      setResult({score:0, desc:"네트워크 오류. 다시 시도해주세요.", details:[]});
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4 py-4">
      <div className="text-center">
        <h2 className="text-lg font-bold text-gold">💕 사주 궁합</h2>
        <p className="text-text-muted text-xs">두 사람의 운명적 관계를 분석합니다</p>
      </div>

      {/* 궁합 유형 선택 */}
      <div className="grid grid-cols-3 gap-2">
        {(["love","business","friend"] as const).map(t => (
          <button key={t} onClick={() => setMatchType(t)}
            className={`py-2.5 rounded-xl text-xs font-medium transition ${matchType === t ? "bg-purple-glow/30 border border-purple-glow text-purple-glow" : "bg-mystic-card border border-border text-text-muted"}`}>
            {matchLabels[t]}
          </button>
        ))}
      </div>

      {/* 내 정보 */}
      <div className="bg-mystic-card border border-border rounded-2xl p-4">
        <p className="text-xs text-gold font-bold mb-2">👤 나</p>
        <p className="text-xs text-text-secondary">
          {profile.name || "미입력"} · {profile.year ? `${profile.year}.${profile.month}.${profile.day}` : "근본 탭에서 입력해주세요"}
        </p>
      </div>

      {/* 상대 정보 */}
      <div className="bg-mystic-card border border-border rounded-2xl p-4 space-y-3">
        <p className="text-xs text-purple-glow font-bold">💫 상대방</p>
        <input type="text" placeholder="이름" value={partner.name}
          onChange={e => setPartner({...partner, name:e.target.value})}
          className="w-full bg-mystic border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-purple-glow/50 outline-none" />
        <div className="grid grid-cols-3 gap-2">
          <input type="number" placeholder="생년" value={partner.year}
            onChange={e => setPartner({...partner, year:e.target.value})}
            className="bg-mystic border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-purple-glow/50 outline-none" />
          <input type="number" placeholder="월" value={partner.month} min="1" max="12"
            onChange={e => setPartner({...partner, month:e.target.value})}
            className="bg-mystic border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-purple-glow/50 outline-none" />
          <input type="number" placeholder="일" value={partner.day} min="1" max="31"
            onChange={e => setPartner({...partner, day:e.target.value})}
            className="bg-mystic border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-purple-glow/50 outline-none" />
        </div>
      </div>

      <button onClick={analyzeMatch} disabled={loading}
        className="w-full py-3.5 bg-gradient-to-r from-purple-glow to-gold rounded-xl font-bold text-sm hover:opacity-90 transition disabled:opacity-50">
        {loading ? "🔮 분석 중..." : `🔮 ${matchLabels[matchType]} 분석하기`}
      </button>

      {/* 결과 */}
      {result && (
        <div className="bg-mystic-card border border-gold/20 rounded-2xl p-4">
          <p className="text-sm font-bold text-gold mb-3">📊 궁합 분석 결과</p>
          <div className="text-xs text-text-secondary leading-relaxed prose prose-invert prose-xs max-w-none [&_h3]:text-gold [&_h3]:text-sm [&_h3]:mt-3 [&_h3]:mb-1 [&_strong]:text-text-primary [&_table]:text-[10px] [&_th]:px-2 [&_th]:py-1 [&_td]:px-2 [&_td]:py-1 [&_th]:bg-mystic/50 [&_p]:my-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.desc}</ReactMarkdown>
          </div>

          {/* 공유 */}
          <button onClick={() => {
            const text = `🔮 타일러의 타이르는 운세 - 궁합 결과\n${profile.name} ❤️ ${partner.name}\n${matchLabels[matchType]}\n\nhttps://app-pi-one-65.vercel.app`;
            if (navigator.share) navigator.share({title:"궁합 결과", text});
            else { navigator.clipboard.writeText(text); alert("복사됨!"); }
          }} className="w-full mt-3 py-2 bg-mystic/50 border border-border rounded-xl text-xs text-text-muted hover:text-gold transition">
            📤 궁합 결과 공유하기
          </button>
        </div>
      )}
    </div>
  );
}

// ========== 만상도 ==========
function GraphTab() {
  return (
    <div className="py-4 space-y-3">
      <div className="text-center">
        <h2 className="text-lg font-bold text-gold">🌐 萬象圖 (만상도)</h2>
        <p className="text-text-muted text-xs">동서양 심리철학 통합 RAG 지식 그래프</p>
      </div>
      <div className="rounded-2xl overflow-hidden border border-border" style={{height:"calc(100vh - 200px)"}}>
        <iframe
          src="https://colehkg-cyber.github.io/mansangdo/"
          className="w-full h-full border-0"
          title="만상도"
        />
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

      {/* 만상도 */}
      <div className="bg-mystic-card border border-border rounded-2xl p-5">
        <h3 className="font-bold text-sm text-gold mb-2">🌐 萬象圖 (만상도)</h3>
        <p className="text-xs text-text-muted mb-3">동서양 심리철학 통합 RAG 지식 그래프</p>
        <a href="https://colehkg-cyber.github.io/mansangdo/" target="_blank" rel="noopener noreferrer"
          className="block w-full py-2.5 bg-purple-glow/20 text-purple-glow rounded-lg text-xs text-center hover:bg-purple-glow/30 transition">
          🌐 만상도 열기 →
        </a>
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
        {tab === "root" && <RootTab profile={profile} setProfile={setProfile} saved={saved} setTab={setTab} />}
        {tab === "chat" && <ChatTab profile={profile} />}
        {tab === "match" && <MatchTab profile={profile} />}
        {tab === "my" && <MyPage profile={profile} setProfile={setProfile} setTab={setTab} />}
      </main>
    </div>
  );
}
