// 천간
export const CHEONGAN = [
  { name: "갑", hanja: "甲", element: "목", yinyang: "양", keyword: "큰 나무 — 리더십, 개척" },
  { name: "을", hanja: "乙", element: "목", yinyang: "음", keyword: "풀·꽃 — 유연함, 적응" },
  { name: "병", hanja: "丙", element: "화", yinyang: "양", keyword: "태양 — 열정, 카리스마" },
  { name: "정", hanja: "丁", element: "화", yinyang: "음", keyword: "촛불 — 따뜻함, 예술성" },
  { name: "무", hanja: "戊", element: "토", yinyang: "양", keyword: "큰 산 — 안정, 신뢰" },
  { name: "기", hanja: "己", element: "토", yinyang: "음", keyword: "논밭 — 포용, 실용" },
  { name: "경", hanja: "庚", element: "금", yinyang: "양", keyword: "바위 — 결단, 의리" },
  { name: "신", hanja: "辛", element: "금", yinyang: "음", keyword: "보석 — 예민, 완벽주의" },
  { name: "임", hanja: "壬", element: "수", yinyang: "양", keyword: "큰 바다 — 지혜, 포용" },
  { name: "계", hanja: "癸", element: "수", yinyang: "음", keyword: "이슬 — 직관, 영감" },
];

// 지지 (12지신)
export const JIJI = [
  { name: "자", animal: "🐀 쥐", element: "수", month: 11 },
  { name: "축", animal: "🐂 소", element: "토", month: 12 },
  { name: "인", animal: "🐅 호랑이", element: "목", month: 1 },
  { name: "묘", animal: "🐇 토끼", element: "목", month: 2 },
  { name: "진", animal: "🐉 용", element: "토", month: 3 },
  { name: "사", animal: "🐍 뱀", element: "화", month: 4 },
  { name: "오", animal: "🐴 말", element: "화", month: 5 },
  { name: "미", animal: "🐑 양", element: "토", month: 6 },
  { name: "신", animal: "🐵 원숭이", element: "금", month: 7 },
  { name: "유", animal: "🐔 닭", element: "금", month: 8 },
  { name: "술", animal: "🐕 개", element: "토", month: 9 },
  { name: "해", animal: "🐷 돼지", element: "수", month: 10 },
];

// 오행 색상
export const ELEMENT_COLORS: Record<string, string> = {
  "목": "#27ae60", "화": "#e74c3c", "토": "#d4a437", "금": "#bdc3c7", "수": "#3498db",
};

// 타로 메이저 아르카나
export const TAROT_MAJOR = [
  { num: 0, name: "바보", eng: "The Fool", keyword: "새 시작, 모험, 자유", reverse: "무모, 위험" },
  { num: 1, name: "마법사", eng: "The Magician", keyword: "의지, 창조, 능력", reverse: "속임, 미숙" },
  { num: 2, name: "여사제", eng: "High Priestess", keyword: "직관, 비밀, 지혜", reverse: "숨김, 불안" },
  { num: 3, name: "여황제", eng: "The Empress", keyword: "풍요, 모성, 창조", reverse: "과잉, 집착" },
  { num: 4, name: "황제", eng: "The Emperor", keyword: "권위, 안정, 리더", reverse: "독재, 경직" },
  { num: 5, name: "교황", eng: "Hierophant", keyword: "전통, 가르침, 신뢰", reverse: "독단, 형식" },
  { num: 6, name: "연인", eng: "The Lovers", keyword: "사랑, 선택, 조화", reverse: "갈등, 불화" },
  { num: 7, name: "전차", eng: "The Chariot", keyword: "승리, 의지, 전진", reverse: "폭주, 방향상실" },
  { num: 8, name: "힘", eng: "Strength", keyword: "용기, 인내, 내면의 힘", reverse: "약함, 자기의심" },
  { num: 9, name: "은둔자", eng: "The Hermit", keyword: "성찰, 지혜, 고독", reverse: "고립, 외면" },
  { num: 10, name: "운명의 수레바퀴", eng: "Wheel of Fortune", keyword: "전환, 운명, 기회", reverse: "불운, 저항" },
  { num: 11, name: "정의", eng: "Justice", keyword: "공정, 균형, 결과", reverse: "불공정, 회피" },
  { num: 12, name: "매달린 사람", eng: "Hanged Man", keyword: "희생, 관점전환", reverse: "지연, 무의미" },
  { num: 13, name: "죽음", eng: "Death", keyword: "변화, 끝과 시작", reverse: "저항, 정체" },
  { num: 14, name: "절제", eng: "Temperance", keyword: "균형, 조화, 인내", reverse: "극단, 불균형" },
  { num: 15, name: "악마", eng: "The Devil", keyword: "유혹, 집착, 속박", reverse: "해방, 각성" },
  { num: 16, name: "탑", eng: "The Tower", keyword: "파괴, 급변, 각성", reverse: "두려움, 회피" },
  { num: 17, name: "별", eng: "The Star", keyword: "희망, 영감, 치유", reverse: "절망, 단절" },
  { num: 18, name: "달", eng: "The Moon", keyword: "환상, 불안, 직관", reverse: "혼란 해소" },
  { num: 19, name: "태양", eng: "The Sun", keyword: "성공, 기쁨, 활력", reverse: "지연된 성공" },
  { num: 20, name: "심판", eng: "Judgement", keyword: "부활, 각성, 소명", reverse: "후회, 미련" },
  { num: 21, name: "세계", eng: "The World", keyword: "완성, 성취, 통합", reverse: "미완, 지연" },
];

// 별자리
export const ZODIAC = [
  { name: "양자리", period: "3.21-4.19", element: "불", keyword: "용기, 개척" },
  { name: "황소자리", period: "4.20-5.20", element: "흙", keyword: "안정, 감각" },
  { name: "쌍둥이자리", period: "5.21-6.21", element: "바람", keyword: "소통, 호기심" },
  { name: "게자리", period: "6.22-7.22", element: "물", keyword: "감성, 보호" },
  { name: "사자자리", period: "7.23-8.22", element: "불", keyword: "리더, 화려" },
  { name: "처녀자리", period: "8.23-9.22", element: "흙", keyword: "분석, 완벽" },
  { name: "천칭자리", period: "9.23-10.22", element: "바람", keyword: "균형, 외교" },
  { name: "전갈자리", period: "10.23-11.21", element: "물", keyword: "깊이, 변환" },
  { name: "사수자리", period: "11.22-12.21", element: "불", keyword: "자유, 철학" },
  { name: "염소자리", period: "12.22-1.19", element: "흙", keyword: "야망, 인내" },
  { name: "물병자리", period: "1.20-2.18", element: "바람", keyword: "혁신, 독립" },
  { name: "물고기자리", period: "2.19-3.20", element: "물", keyword: "직관, 영성" },
];

// 2026 병오년 월별 운세
export const MONTHLY_2026 = [
  { month: 1, ganji: "경인", keyword: "시작의 에너지, 계획 수립", luck: 3 },
  { month: 2, ganji: "신묘", keyword: "섬세한 실행, 인맥 확장", luck: 4 },
  { month: 3, ganji: "임진", keyword: "큰 전환, 기회 포착", luck: 5 },
  { month: 4, ganji: "계사", keyword: "지혜로운 판단, 숨은 기회", luck: 4 },
  { month: 5, ganji: "갑오", keyword: "최고 에너지, 승부수!", luck: 5 },
  { month: 6, ganji: "을미", keyword: "유연한 대처, 휴식 필요", luck: 3 },
  { month: 7, ganji: "병신", keyword: "결단과 실행, 금전운↑", luck: 4 },
  { month: 8, ganji: "정유", keyword: "마무리, 수확의 시간", luck: 4 },
  { month: 9, ganji: "무술", keyword: "안정, 기반 다지기", luck: 3 },
  { month: 10, ganji: "기해", keyword: "내면 성장, 준비기", luck: 3 },
  { month: 11, ganji: "경자", keyword: "새로운 시작 준비", luck: 4 },
  { month: 12, ganji: "신축", keyword: "정리, 마무리", luck: 3 },
];

// 띠 계산
export function getAnimalSign(year: number) {
  const idx = (year - 4) % 12;
  return JIJI[idx >= 0 ? idx : idx + 12];
}

// 별자리 계산
export function getZodiac(month: number, day: number) {
  const dates = [20,19,21,20,21,22,23,23,23,23,22,22];
  const idx = day < dates[month-1] ? (month + 10) % 12 : (month + 11) % 12;
  return ZODIAC[idx];
}

// 생명수 계산
export function getLifePath(y: number, m: number, d: number) {
  const sum = String(y) + String(m) + String(d);
  let total = sum.split("").reduce((a, b) => a + parseInt(b), 0);
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    total = String(total).split("").reduce((a, b) => a + parseInt(b), 0);
  }
  return total;
}

// 오늘의 타로 (날짜 기반 시드)
export function getTodayTarot() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();
  const idx1 = seed % 22;
  const idx2 = (seed * 7 + 13) % 22;
  const idx3 = (seed * 3 + 7) % 22;
  return [TAROT_MAJOR[idx1], TAROT_MAJOR[idx2 === idx1 ? (idx2+1)%22 : idx2], TAROT_MAJOR[idx3 === idx1 || idx3 === idx2 ? (idx3+2)%22 : idx3]];
}

// 인상학 데이터
export const PHYSIOGNOMY = {
  oAk: [
    { name: "남악(衡山)", position: "이마", meaning: "초년운, 지성, 부모덕" },
    { name: "북악(恒山)", position: "턱", meaning: "말년운, 안정, 자식덕" },
    { name: "동악(泰山)", position: "좌광대", meaning: "좌측 운세, 형제" },
    { name: "서악(華山)", position: "우광대", meaning: "우측 운세, 친구" },
    { name: "중악(嵩山)", position: "코", meaning: "중년운, 재물, 건강" },
  ],
  samJeong: [
    { name: "상정", area: "이마~눈썹", period: "초년(15~30세)", meaning: "지성, 부모덕, 학업" },
    { name: "중정", area: "눈썹~코끝", period: "중년(31~50세)", meaning: "의지, 재물, 사업" },
    { name: "하정", area: "코끝~턱", period: "말년(51세~)", meaning: "건강, 자식덕, 부동산" },
  ],
  twelveGung: [
    { name: "명궁(命宮)", position: "미간", meaning: "운명의 총괄" },
    { name: "재백궁(財帛宮)", position: "코", meaning: "재물운" },
    { name: "관록궁(官祿宮)", position: "이마 중앙", meaning: "직업/출세운" },
    { name: "천이궁(遷移宮)", position: "이마 양측", meaning: "이동/여행운" },
    { name: "부모궁(父母宮)", position: "이마 좌우", meaning: "부모덕" },
    { name: "형제궁(兄弟宮)", position: "눈썹", meaning: "형제/친구운" },
    { name: "부처궁(夫妻宮)", position: "눈꼬리", meaning: "배우자운" },
    { name: "자녀궁(子女宮)", position: "눈 아래", meaning: "자녀운" },
    { name: "질액궁(疾厄宮)", position: "산근", meaning: "건강/재난" },
    { name: "노복궁(奴僕宮)", position: "턱 양측", meaning: "부하/아랫사람" },
    { name: "전택궁(田宅宮)", position: "눈~눈썹 사이", meaning: "부동산/재산" },
    { name: "복덕궁(福德宮)", position: "눈썹 꼬리 위", meaning: "복/행운" },
  ],
  faceByElement: [
    { element: "목(木)", shape: "긴 얼굴", feature: "키 큼, 마름, 학자형" },
    { element: "화(火)", shape: "뾰족한 얼굴", feature: "이마 넓음, 턱 좁음, 예술가형" },
    { element: "토(土)", shape: "네모난 얼굴", feature: "두터움, 안정, 관리자형" },
    { element: "금(金)", shape: "둥근 얼굴", feature: "광대 발달, 결단력, 무인형" },
    { element: "수(水)", shape: "통통한 얼굴", feature: "귀 큼, 지혜, 학자/외교형" },
  ],
};

// 오늘의 행운 요소
export function getLuckyElements() {
  const today = new Date();
  const seed = today.getDate() + today.getMonth() * 31;
  const colors = ["빨강", "파랑", "초록", "노랑", "보라", "검정", "흰색", "분홍", "하늘색"];
  const directions = ["동", "서", "남", "북", "동남", "서남", "동북", "서북"];
  return {
    color: colors[seed % colors.length],
    number: (seed % 9) + 1,
    direction: directions[seed % 8],
  };
}

// 일운 해석 (간단)
export function getDailyFortune() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();
  const categories = [
    { cat: "💰 재물운", score: ((seed * 3) % 5) + 1 },
    { cat: "💕 연애운", score: ((seed * 7) % 5) + 1 },
    { cat: "💼 직업운", score: ((seed * 11) % 5) + 1 },
    { cat: "🏥 건강운", score: ((seed * 13) % 5) + 1 },
    { cat: "🤝 대인운", score: ((seed * 17) % 5) + 1 },
  ];
  const total = Math.round(categories.reduce((a, b) => a + b.score, 0) / categories.length * 20);
  return { categories, total };
}
