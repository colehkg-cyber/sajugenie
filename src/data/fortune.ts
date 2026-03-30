// ─── 천간 (10 Heavenly Stems) ───
export const CHEONGAN = [
  { name: "갑", hanja: "甲", element: "목", yinyang: "양", symbol: "큰 나무", keyword: "리더십, 개척, 정직, 고집",
    personality: "하늘을 향해 뻗는 큰 나무처럼, 목표를 향한 직진 본능이 강합니다. 타고난 리더이자 개척자.",
    career: "CEO, 창업가, 군인, 스포츠 선수" },
  { name: "을", hanja: "乙", element: "목", yinyang: "음", symbol: "풀·꽃", keyword: "유연함, 적응, 예술성, 인내",
    personality: "바람에 흔들려도 꺾이지 않는 풀처럼, 어떤 환경에서도 적응하며 피어나는 생명력을 지녔습니다.",
    career: "디자이너, 예술가, 외교관, 상담사" },
  { name: "병", hanja: "丙", element: "화", yinyang: "양", symbol: "태양", keyword: "열정, 카리스마, 화려, 급함",
    personality: "태양처럼 온 세상을 비추는 밝고 뜨거운 에너지! 주변을 활기차게 만드는 천생 분위기 메이커.",
    career: "연예인, 정치인, 마케터, 강사" },
  { name: "정", hanja: "丁", element: "화", yinyang: "음", symbol: "촛불", keyword: "따뜻함, 예술성, 섬세, 예민",
    personality: "촛불처럼 은은하게 주변을 밝히는 따뜻한 마음의 소유자. 감수성이 풍부하고 예술적 재능이 뛰어납니다.",
    career: "작가, 음악가, 요리사, 심리상담사" },
  { name: "무", hanja: "戊", element: "토", yinyang: "양", symbol: "큰 산", keyword: "안정, 신뢰, 포용, 우직",
    personality: "태산처럼 듬직하고 흔들림 없는 신뢰의 아이콘. 주변 사람들의 든든한 버팀목 역할을 합니다.",
    career: "공무원, 부동산, 건축가, 경영관리" },
  { name: "기", hanja: "己", element: "토", yinyang: "음", symbol: "논밭", keyword: "포용, 실용, 세심, 걱정",
    personality: "만물을 키워내는 논밭처럼, 사람을 품고 돌보는 넓은 마음. 실용적이고 알뜰한 살림꾼.",
    career: "교사, 농업, 서비스업, 사회복지사" },
  { name: "경", hanja: "庚", element: "금", yinyang: "양", symbol: "바위·쇠", keyword: "결단, 의리, 강직, 냉정",
    personality: "쇠처럼 단단한 의지와 칼같은 결단력의 소유자. 한번 맺은 인연은 끝까지 책임지는 의리파.",
    career: "군인, 검찰, 외과의사, 엔지니어" },
  { name: "신", hanja: "辛", element: "금", yinyang: "음", symbol: "보석", keyword: "예민, 완벽주의, 미적감각, 날카로움",
    personality: "다듬어진 보석처럼 빛나는 미적 감각과 완벽주의. 디테일에 강하지만 상처받기 쉬운 유리 멘탈도.",
    career: "보석상, 편집자, 프로그래머, 감정사" },
  { name: "임", hanja: "壬", element: "수", yinyang: "양", symbol: "큰 바다", keyword: "지혜, 포용, 자유, 방랑",
    personality: "모든 것을 품는 바다처럼, 넓은 시야와 깊은 지혜를 가졌습니다. 자유를 사랑하는 영혼.",
    career: "학자, 철학자, 무역, 항해사" },
  { name: "계", hanja: "癸", element: "수", yinyang: "음", symbol: "이슬·비", keyword: "직관, 영감, 감성, 비밀",
    personality: "이슬처럼 맑고 투명한 직관력! 보이지 않는 것을 느끼는 영적 감각의 소유자.",
    career: "점술가, 심리학자, 연구원, 예술가" },
];

// ─── 지지 (12 Earthly Branches / 12지신) ───
export const JIJI = [
  { name: "자", hanja: "子", animal: "🐀 쥐", element: "수", yinyang: "양", time: "23:00-01:00", month: 11,
    personality: "영리하고 눈치 빠른 전략가. 작은 기회도 놓치지 않는 날카로운 감각.",
    story: "자시(子時)는 하루의 시작. 어둠 속에서도 길을 찾는 쥐처럼, 어떤 상황에서도 살아남는 생존력의 상징입니다. 12지신 중 가장 먼저 옥황상제 앞에 도착한 영리함!" },
  { name: "축", hanja: "丑", animal: "🐂 소", element: "토", yinyang: "음", time: "01:00-03:00", month: 12,
    personality: "성실하고 끈기 있는 노력파. 느리지만 확실한 결과를 만드는 힘.",
    story: "축시(丑時)는 새벽의 고요함. 묵묵히 밭을 가는 소처럼, 꾸준한 노력으로 반드시 목표를 이루는 대기만성형. 쥐에게 속아 2등을 했지만 원망하지 않는 너그러움!" },
  { name: "인", hanja: "寅", animal: "🐅 호랑이", element: "목", yinyang: "양", time: "03:00-05:00", month: 1,
    personality: "용감하고 카리스마 넘치는 왕. 정의감이 강하고 리더십이 타고남.",
    story: "인시(寅時)는 동이 트기 전 어둠. 산중의 왕 호랑이처럼 당당하고 위엄있는 존재감! 한번 으르렁하면 백수가 엎드리는 타고난 리더." },
  { name: "묘", hanja: "卯", animal: "🐇 토끼", element: "목", yinyang: "음", time: "05:00-07:00", month: 2,
    personality: "똑똑하고 재치있는 인기인. 예술적 감각과 사교성이 뛰어남.",
    story: "묘시(卯時)는 해가 뜨는 시간. 달에서 방아 찧는 토끼처럼 꿈과 낭만이 있고, 위기에서 재빠르게 빠져나가는 센스!" },
  { name: "진", hanja: "辰", animal: "🐉 용", element: "토", yinyang: "양", time: "07:00-09:00", month: 3,
    personality: "야망 크고 비범한 존재. 12지신 중 유일한 상상의 동물, 무한한 가능성.",
    story: "진시(辰時)는 활동 시작의 시간. 하늘을 나는 용처럼, 남들이 상상도 못하는 스케일의 꿈을 꾸고 실현하는 자! 왕이나 위인의 띠로 불립니다." },
  { name: "사", hanja: "巳", animal: "🐍 뱀", element: "화", yinyang: "음", time: "09:00-11:00", month: 4,
    personality: "지혜롭고 신비로운 전략가. 냉정한 판단력과 깊은 통찰력.",
    story: "사시(巳時)는 태양이 높이 뜨는 시간. 뱀은 '작은 용'이라 불리며, 허물을 벗고 새로 태어나는 변신과 재생의 상징입니다." },
  { name: "오", hanja: "午", animal: "🐴 말", element: "화", yinyang: "양", time: "11:00-13:00", month: 5,
    personality: "자유롭고 열정적인 모험가. 에너지가 넘치고 활동적.",
    story: "오시(午時)는 태양이 정점에 오른 정오! 끝없는 들판을 질주하는 말처럼, 뜨거운 열정과 자유로운 영혼의 상징. 2026년은 바로 말의 해(午年)!" },
  { name: "미", hanja: "未", animal: "🐑 양", element: "토", yinyang: "음", time: "13:00-15:00", month: 6,
    personality: "온화하고 예술적인 감성파. 따뜻한 마음씨와 희생정신.",
    story: "미시(未時)는 오후의 나른함. 평화로운 양처럼, 다툼보다 화합을 추구하는 평화주의자. 예술과 아름다움을 사랑합니다." },
  { name: "신", hanja: "申", animal: "🐵 원숭이", element: "금", yinyang: "양", time: "15:00-17:00", month: 7,
    personality: "재주 많고 영리한 만능 엔터테이너. 임기응변의 달인.",
    story: "신시(申時)는 오후의 활력. 72가지 변신을 하는 손오공처럼, 어떤 상황에서도 빠져나가는 재치와 다재다능함!" },
  { name: "유", hanja: "酉", animal: "🐔 닭", element: "금", yinyang: "음", time: "17:00-19:00", month: 8,
    personality: "꼼꼼하고 성실한 완벽주의자. 시간 관념이 철저함.",
    story: "유시(酉時)는 해질녘. 새벽을 알리는 닭처럼, 시간과 약속을 철저히 지키는 성실함의 상징. 화려한 깃털처럼 패션 감각도 뛰어납니다!" },
  { name: "술", hanja: "戌", animal: "🐕 개", element: "토", yinyang: "양", time: "19:00-21:00", month: 9,
    personality: "충성스럽고 정의로운 수호자. 의리와 신뢰의 아이콘.",
    story: "술시(戌時)는 어둠이 찾아오는 시간. 주인을 지키는 개처럼, 한번 맺은 인연은 끝까지 지키는 의리의 사나이(사나녀). 정의감이 투철!" },
  { name: "해", hanja: "亥", animal: "🐷 돼지", element: "수", yinyang: "음", time: "21:00-23:00", month: 10,
    personality: "복덕 많고 낙천적인 행운아. 재물운이 강하고 인복이 넘침.",
    story: "해시(亥時)는 하루의 마무리. 복을 상징하는 돼지처럼, 타고난 재물운과 사람 복! 순수하고 낙천적인 성격으로 주변에 행복을 전파합니다." },
];

// ─── 오행 색상 ───
export const ELEMENT_COLORS: Record<string, string> = {
  "목": "#27ae60", "화": "#e74c3c", "토": "#d4a437", "금": "#bdc3c7", "수": "#3498db",
};

// ─── 오행 상세 ───
export const FIVE_ELEMENTS: Record<string, { hanja: string; color: string; season: string; direction: string; organ: string; taste: string; emotion: string }> = {
  "목": { hanja: "木", color: "청색/녹색", season: "봄", direction: "동", organ: "간장", taste: "신맛", emotion: "분노" },
  "화": { hanja: "火", color: "적색", season: "여름", direction: "남", organ: "심장", taste: "쓴맛", emotion: "기쁨" },
  "토": { hanja: "土", color: "황색", season: "환절기", direction: "중앙", organ: "비장", taste: "단맛", emotion: "사려" },
  "금": { hanja: "金", color: "백색", season: "가을", direction: "서", organ: "폐장", taste: "매운맛", emotion: "슬픔" },
  "수": { hanja: "水", color: "흑색", season: "겨울", direction: "북", organ: "신장", taste: "짠맛", emotion: "두려움" },
};

// ─── 타로 메이저 아르카나 (확장) ───
export const TAROT_MAJOR = [
  { num: 0, name: "바보", eng: "The Fool", keyword: "새 시작, 모험, 자유, 순수한 가능성", reverse: "무모함, 부주의, 위험한 도박",
    astrology: "천왕성", elementTarot: "바람", description: "절벽 끝에서도 미소짓는 바보. 두려움 없는 첫 발걸음이 위대한 여정의 시작입니다." },
  { num: 1, name: "마법사", eng: "The Magician", keyword: "의지, 창조, 능력, 무한한 잠재력", reverse: "속임수, 미숙함, 재능 낭비",
    astrology: "수성", elementTarot: "바람", description: "하늘과 땅을 잇는 마법사. 당신이 가진 모든 것을 활용할 때가 왔습니다." },
  { num: 2, name: "여사제", eng: "High Priestess", keyword: "직관, 비밀, 지혜, 내면의 목소리", reverse: "숨겨진 진실, 불안, 직감 무시",
    astrology: "달", elementTarot: "물", description: "달빛 아래 앉은 여사제. 논리보다 직감을 따르세요, 답은 이미 당신 안에 있습니다." },
  { num: 3, name: "여황제", eng: "The Empress", keyword: "풍요, 모성, 창조, 자연의 축복", reverse: "과잉보호, 집착, 창조적 고갈",
    astrology: "금성", elementTarot: "흙", description: "만물을 피워내는 대지의 어머니. 사랑과 풍요가 당신을 감싸고 있습니다." },
  { num: 4, name: "황제", eng: "The Emperor", keyword: "권위, 안정, 리더십, 체계와 질서", reverse: "독재, 경직, 권력 남용",
    astrology: "양자리", elementTarot: "불", description: "흔들림 없는 왕좌의 주인. 결단력과 책임감으로 세상을 다스리세요." },
  { num: 5, name: "교황", eng: "Hierophant", keyword: "전통, 가르침, 신뢰, 영적 안내", reverse: "독단, 형식주의, 맹목적 추종",
    astrology: "황소자리", elementTarot: "흙", description: "하늘과 땅을 잇는 다리. 스승의 지혜를 따르되, 자신만의 길도 잊지 마세요." },
  { num: 6, name: "연인", eng: "The Lovers", keyword: "사랑, 선택, 조화, 영혼의 결합", reverse: "갈등, 불화, 잘못된 선택",
    astrology: "쌍둥이자리", elementTarot: "바람", description: "에덴동산의 두 사람. 진정한 사랑은 선택에서 시작됩니다." },
  { num: 7, name: "전차", eng: "The Chariot", keyword: "승리, 의지, 전진, 극복의 쾌감", reverse: "폭주, 방향 상실, 통제 불능",
    astrology: "게자리", elementTarot: "물", description: "두 마리 스핑크스를 이끄는 전사. 의지력으로 모든 장애물을 돌파하세요!" },
  { num: 8, name: "힘", eng: "Strength", keyword: "용기, 인내, 내면의 힘, 부드러운 강함", reverse: "자기의심, 약함, 내적 갈등",
    astrology: "사자자리", elementTarot: "불", description: "사자를 어루만지는 여인. 진정한 강함은 폭력이 아닌 사랑에서 나옵니다." },
  { num: 9, name: "은둔자", eng: "The Hermit", keyword: "성찰, 지혜, 고독, 진리 탐구", reverse: "고립, 현실 도피, 지나친 폐쇄",
    astrology: "처녀자리", elementTarot: "흙", description: "등불을 든 현자. 혼자만의 시간이 가장 깊은 깨달음을 선사합니다." },
  { num: 10, name: "운명의 수레바퀴", eng: "Wheel of Fortune", keyword: "전환, 운명, 기회, 순환의 법칙", reverse: "불운, 저항, 흐름 역행",
    astrology: "목성", elementTarot: "불", description: "쉴 새 없이 도는 운명의 바퀴. 모든 것은 변하고, 지금이 바로 전환점!" },
  { num: 11, name: "정의", eng: "Justice", keyword: "공정, 균형, 진실, 인과응보", reverse: "불공정, 회피, 편견",
    astrology: "천칭자리", elementTarot: "바람", description: "저울과 검을 든 정의의 여신. 뿌린 대로 거두는 우주의 법칙." },
  { num: 12, name: "매달린 사람", eng: "Hanged Man", keyword: "희생, 관점 전환, 내려놓음", reverse: "지연, 무의미한 고통",
    astrology: "해왕성", elementTarot: "물", description: "거꾸로 매달린 채 미소짓는 사람. 포기가 아닌 새로운 시각의 발견입니다." },
  { num: 13, name: "죽음", eng: "Death", keyword: "변화, 끝과 시작, 완전한 변혁", reverse: "변화 저항, 정체, 집착",
    astrology: "전갈자리", elementTarot: "물", description: "끝은 곧 새로운 시작. 오래된 것을 보내야 새것이 찾아옵니다." },
  { num: 14, name: "절제", eng: "Temperance", keyword: "균형, 조화, 인내, 중용의 미덕", reverse: "극단, 불균형, 조급함",
    astrology: "사수자리", elementTarot: "불", description: "두 잔의 물을 섞는 천사. 극단이 아닌 중용에서 진정한 답을 찾으세요." },
  { num: 15, name: "악마", eng: "The Devil", keyword: "유혹, 집착, 속박, 물질적 욕망", reverse: "해방, 각성, 사슬 풀기",
    astrology: "염소자리", elementTarot: "흙", description: "쇠사슬은 느슨합니다 — 벗어날 수 있어요. 진짜 감옥은 마음 속에 있습니다." },
  { num: 16, name: "탑", eng: "The Tower", keyword: "파괴, 급변, 각성, 기존 체계 붕괴", reverse: "변화 두려움, 회피, 불안정",
    astrology: "화성", elementTarot: "불", description: "벼락 맞는 탑. 고통스럽지만, 무너져야 더 단단하게 다시 쌓을 수 있습니다." },
  { num: 17, name: "별", eng: "The Star", keyword: "희망, 영감, 치유, 우주와의 연결", reverse: "절망, 단절, 희망 상실",
    astrology: "물병자리", elementTarot: "바람", description: "폭풍 뒤에 빛나는 별. 상처가 치유되고 새로운 희망이 밝아옵니다." },
  { num: 18, name: "달", eng: "The Moon", keyword: "환상, 불안, 직관, 무의식의 세계", reverse: "혼란 해소, 진실 직면",
    astrology: "물고기자리", elementTarot: "물", description: "달빛 아래의 길. 두렵지만 직감을 믿고 어둠을 통과하세요." },
  { num: 19, name: "태양", eng: "The Sun", keyword: "성공, 기쁨, 활력, 빛나는 미래", reverse: "지연된 성공, 일시적 좌절",
    astrology: "태양", elementTarot: "불", description: "찬란한 태양 아래 춤추는 아이. 모든 것이 밝아지고 성공이 찾아옵니다!" },
  { num: 20, name: "심판", eng: "Judgement", keyword: "부활, 각성, 소명, 운명의 부름", reverse: "후회, 미련, 소명 거부",
    astrology: "명왕성", elementTarot: "불", description: "천사의 나팔 소리에 일어서는 영혼들. 당신의 진정한 소명을 따르세요." },
  { num: 21, name: "세계", eng: "The World", keyword: "완성, 성취, 통합, 새 사이클 시작", reverse: "미완성, 지연, 닫히지 않은 결말",
    astrology: "토성", elementTarot: "흙", description: "모든 여정의 끝이자 새로운 시작. 바보에서 시작한 여정이 드디어 완성!" },
];

// ─── 수비학 (Numerology) ───
export const NUMEROLOGY: Record<number, { title: string; keyword: string; description: string; strength: string; weakness: string }> = {
  1: { title: "독립적 리더", keyword: "개척, 독립, 창조", description: "타고난 개척자이자 리더. 새로운 길을 만들고 앞장서서 이끄는 선구자의 에너지를 품고 있습니다.", strength: "결단력, 독립심, 창의성", weakness: "독선, 고집, 외로움" },
  2: { title: "조화의 외교관", keyword: "협력, 균형, 감성", description: "사람과 사람 사이의 다리 역할을 하는 외교관. 섬세한 감수성으로 조화를 만들어냅니다.", strength: "배려, 협동, 직관", weakness: "우유부단, 의존성, 소심" },
  3: { title: "창의적 표현자", keyword: "표현, 소통, 즐거움", description: "말과 글, 예술로 세상을 밝히는 표현자. 타고난 낙관주의와 유머로 주변을 행복하게 합니다.", strength: "창의성, 소통, 낙관", weakness: "산만함, 과장, 감정기복" },
  4: { title: "안정의 건축가", keyword: "체계, 노력, 현실", description: "흔들림 없는 기반을 쌓는 건축가. 성실함과 인내로 확실한 결과를 만들어냅니다.", strength: "성실, 인내, 실용", weakness: "고지식, 융통성 부족, 보수적" },
  5: { title: "자유의 모험가", keyword: "변화, 자유, 모험", description: "정해진 길보다 미지의 세계를 택하는 모험가. 변화를 두려워하지 않고 자유를 추구합니다.", strength: "적응력, 다재다능, 용기", weakness: "무책임, 산만, 중독 주의" },
  6: { title: "책임의 돌봄이", keyword: "사랑, 봉사, 가정", description: "사랑과 책임감으로 주변을 돌보는 따뜻한 존재. 가정과 공동체의 화합을 이끕니다.", strength: "헌신, 책임감, 사랑", weakness: "간섭, 희생 강요, 번아웃" },
  7: { title: "탐구의 철학자", keyword: "분석, 영성, 진리", description: "보이는 것 너머를 탐구하는 철학자. 깊은 사색과 분석으로 진리에 다가갑니다.", strength: "통찰력, 분석력, 영성", weakness: "고립, 냉소, 완벽주의" },
  8: { title: "성취의 야망가", keyword: "권력, 성공, 물질", description: "목표를 향해 돌진하는 야망의 화신. 현실적 능력으로 큰 성취를 이룹니다.", strength: "추진력, 관리능력, 야망", weakness: "물질만능, 과로, 지배욕" },
  9: { title: "인류의 이상주의자", keyword: "박애, 완성, 지혜", description: "모든 숫자를 품은 완성의 수. 넓은 시야로 세상을 바라보며 인류애를 실천합니다.", strength: "관대함, 지혜, 예술성", weakness: "비현실적, 감정과잉, 자기희생" },
  11: { title: "영적 직관의 마스터", keyword: "영감, 계시, 직관", description: "마스터 넘버 11! 일반인이 보지 못하는 것을 감지하는 영적 안테나의 소유자.", strength: "영적 직관, 영감, 카리스마", weakness: "신경과민, 불안, 이상과 현실의 괴리" },
  22: { title: "비전 실현의 건설자", keyword: "비전, 실현, 대업", description: "마스터 넘버 22! 거대한 비전을 현실로 만드는 마스터 빌더. 꿈을 설계도로 바꿉니다.", strength: "실행력, 비전, 조직력", weakness: "완벽주의, 극심한 압박감, 좌절" },
  33: { title: "치유와 헌신의 스승", keyword: "치유, 가르침, 무조건적 사랑", description: "마스터 넘버 33! 가장 높은 사랑의 진동수. 치유하고 가르치는 영적 스승의 에너지.", strength: "무조건적 사랑, 치유, 영성", weakness: "자기 무시, 에너지 소진, 이상 과다" },
};

// ─── 별자리 12궁 (확장) ───
export const ZODIAC = [
  { name: "양자리", symbol: "♈", period: "3.21-4.19", element: "불", ruling: "화성", keyword: "용기, 개척, 열정, 솔직",
    description: "12궁의 첫 별자리! 새 시작의 에너지로 가득 찬 전사. 두려움 없이 돌진하는 용기의 아이콘.", compatibility: "사자자리, 사수자리" },
  { name: "황소자리", symbol: "♉", period: "4.20-5.20", element: "흙", ruling: "금성", keyword: "안정, 감각, 인내, 미식",
    description: "오감이 발달한 현실주의자. 느리지만 확실한 성취를 만드는 인내의 별자리.", compatibility: "처녀자리, 염소자리" },
  { name: "쌍둥이자리", symbol: "♊", period: "5.21-6.21", element: "바람", ruling: "수성", keyword: "소통, 호기심, 다재, 변화",
    description: "두 개의 얼굴을 가진 소통의 달인. 끝없는 호기심과 재치로 어디서든 인기 만점!", compatibility: "천칭자리, 물병자리" },
  { name: "게자리", symbol: "♋", period: "6.22-7.22", element: "물", ruling: "달", keyword: "감성, 보호, 가족, 직관",
    description: "단단한 껍데기 아래 부드러운 마음. 가족과 소중한 사람을 끝까지 지키는 수호자.", compatibility: "전갈자리, 물고기자리" },
  { name: "사자자리", symbol: "♌", period: "7.23-8.22", element: "불", ruling: "태양", keyword: "리더, 화려, 자존심, 관대",
    description: "백수의 왕! 태양처럼 빛나는 존재감과 타고난 리더십. 무대 위의 스타.", compatibility: "양자리, 사수자리" },
  { name: "처녀자리", symbol: "♍", period: "8.23-9.22", element: "흙", ruling: "수성", keyword: "분석, 완벽, 실용, 겸손",
    description: "디테일의 신. 완벽한 분석력과 실용적 지혜로 세상을 정리정돈하는 능력자.", compatibility: "황소자리, 염소자리" },
  { name: "천칭자리", symbol: "♎", period: "9.23-10.22", element: "바람", ruling: "금성", keyword: "균형, 외교, 아름다움, 정의",
    description: "조화와 아름다움의 수호자. 갈등 속에서도 균형을 찾는 천생 중재자.", compatibility: "쌍둥이자리, 물병자리" },
  { name: "전갈자리", symbol: "♏", period: "10.23-11.21", element: "물", ruling: "명왕성", keyword: "깊이, 변환, 열정, 비밀",
    description: "가장 깊고 강렬한 별자리. 표면 아래 용암같은 열정이 숨어있는 변혁가.", compatibility: "게자리, 물고기자리" },
  { name: "사수자리", symbol: "♐", period: "11.22-12.21", element: "불", ruling: "목성", keyword: "자유, 철학, 모험, 낙관",
    description: "활시위를 당기는 궁수처럼 더 넓은 세상을 향해! 자유와 진리를 추구하는 낙관주의자.", compatibility: "양자리, 사자자리" },
  { name: "염소자리", symbol: "♑", period: "12.22-1.19", element: "흙", ruling: "토성", keyword: "야망, 인내, 책임, 현실",
    description: "정상을 향해 묵묵히 올라가는 산양. 시간이 갈수록 빛나는 대기만성형.", compatibility: "황소자리, 처녀자리" },
  { name: "물병자리", symbol: "♒", period: "1.20-2.18", element: "바람", ruling: "천왕성", keyword: "혁신, 독립, 인류애, 독창",
    description: "시대를 앞서가는 혁신가. 틀에 갇히지 않는 자유로운 사고로 세상을 바꿉니다.", compatibility: "쌍둥이자리, 천칭자리" },
  { name: "물고기자리", symbol: "♓", period: "2.19-3.20", element: "물", ruling: "해왕성", keyword: "직관, 영성, 감성, 동정",
    description: "12궁의 마지막, 모든 것을 품은 별자리. 꿈과 현실의 경계를 넘나드는 영적 감수성.", compatibility: "게자리, 전갈자리" },
];

// ─── 2026 병오년 월별 운세 (확장) ───
export const MONTHLY_2026 = [
  { month: 1, ganji: "경인(庚寅)", element: "금+목", keyword: "시작의 에너지, 계획 수립", luck: 3,
    advice: "호랑이의 기운이 감도는 1월! 올해의 큰 그림을 그리세요. 무리한 실행보다 치밀한 계획이 필요한 때." },
  { month: 2, ganji: "신묘(辛卯)", element: "금+목", keyword: "섬세한 실행, 인맥 확장", luck: 4,
    advice: "토끼의 재치가 필요한 달. 새로운 인연이 찾아올 수 있으니 열린 마음으로 만남에 임하세요." },
  { month: 3, ganji: "임진(壬辰)", element: "수+토", keyword: "큰 전환, 기회 포착", luck: 5,
    advice: "용의 기운이 활활! 올 상반기 최고의 기회가 찾아옵니다. 과감한 도전이 큰 보상으로 돌아올 달." },
  { month: 4, ganji: "계사(癸巳)", element: "수+화", keyword: "지혜로운 판단, 숨은 기회", luck: 4,
    advice: "뱀의 지혜가 빛나는 달. 표면 아래 숨어있는 기회를 포착하세요. 직감을 믿으되 검증은 필수!" },
  { month: 5, ganji: "갑오(甲午)", element: "목+화", keyword: "최고 에너지, 승부수!", luck: 5,
    advice: "말의 해에 말의 달! 화기(火氣) 폭발! 올해 최고의 에너지 월. 미루던 일에 과감하게 승부수를 던지세요!" },
  { month: 6, ganji: "을미(乙未)", element: "목+토", keyword: "유연한 대처, 휴식 필요", luck: 3,
    advice: "양의 평화로움이 필요한 때. 상반기 전력 질주 후 충전이 필요합니다. 가족, 친구와의 시간을 가지세요." },
  { month: 7, ganji: "병신(丙申)", element: "화+금", keyword: "결단과 실행, 금전운 상승", luck: 4,
    advice: "태양(丙)과 원숭이(申)의 만남! 재치있는 판단으로 금전적 기회를 잡으세요. 투자보다 본업 집중!" },
  { month: 8, ganji: "정유(丁酉)", element: "화+금", keyword: "마무리, 수확의 시간", luck: 4,
    advice: "촛불의 따뜻함으로 결실을 거두는 달. 상반기에 뿌린 씨앗이 열매를 맺기 시작합니다." },
  { month: 9, ganji: "무술(戊戌)", element: "토+토", keyword: "안정, 기반 다지기", luck: 3,
    advice: "산과 개의 충직함! 더블 토(土) 에너지로 단단한 기반을 다지세요. 부동산/재산 관련 결정에 좋은 시기." },
  { month: 10, ganji: "기해(己亥)", element: "토+수", keyword: "내면 성장, 준비기", luck: 3,
    advice: "돼지의 복을 받는 달. 외적 성과보다 내면의 성장에 집중하면 연말에 큰 선물이 기다립니다." },
  { month: 11, ganji: "경자(庚子)", element: "금+수", keyword: "새로운 시작 준비", luck: 4,
    advice: "쥐의 영리함으로 내년을 준비하세요. 새로운 계획과 인맥 정리에 최적의 달!" },
  { month: 12, ganji: "신축(辛丑)", element: "금+토", keyword: "정리, 마무리, 감사", luck: 3,
    advice: "소의 끈기로 한 해를 마무리. 올해의 교훈을 정리하고 감사한 마음으로 새해를 준비하세요." },
];

// ─── 인상학 (Face Reading) ───
export const PHYSIOGNOMY = {
  ohak: {
    title: "오악(五嶽)",
    description: "얼굴의 다섯 산(봉우리)으로 보는 인상학의 핵심 구조",
    items: [
      { name: "남악(南嶽)", part: "이마", meaning: "초년운(15~30세). 지적 능력과 부모 복. 이마가 넓고 둥글면 초년운이 좋고 지혜로움." },
      { name: "북악(北嶽)", part: "턱", meaning: "말년운(50세 이후). 의지력과 추진력. 턱이 발달하면 만년에 안정되고 부하 복이 있음." },
      { name: "동악(東嶽)", part: "왼쪽 광대", meaning: "좌보(左輔). 사회적 지위와 인맥. 왼쪽 광대가 적당히 발달하면 인복이 좋음." },
      { name: "서악(西嶽)", part: "오른쪽 광대", meaning: "우필(右弼). 권력과 실행력. 오른쪽 광대가 풍만하면 리더십이 강함." },
      { name: "중악(中嶽)", part: "코", meaning: "중년운(30~50세). 재물운과 자존심. 코가 곧고 풍만하면 재물운이 좋고 자수성가형." },
    ],
  },
  samjeong: {
    title: "삼정(三停)",
    description: "얼굴을 상·중·하 세 부분으로 나누어 인생의 초·중·말년을 봅니다",
    items: [
      { name: "상정(上停)", range: "이마 ~ 눈썹", period: "초년(15~30세)", meaning: "지적 능력, 교육운, 부모와의 인연. 상정이 넓고 깨끗하면 학업운이 좋고 좋은 교육을 받음." },
      { name: "중정(中停)", range: "눈썹 ~ 코끝", period: "중년(31~50세)", meaning: "사회적 성취, 재물, 명예. 중정이 균형잡히면 사회생활이 순탄하고 재물운이 좋음." },
      { name: "하정(下停)", range: "코끝 ~ 턱", period: "말년(51세 이후)", meaning: "가정운, 자녀복, 건강. 하정이 풍만하면 만년에 행복하고 자녀 복이 있음." },
    ],
  },
  sibigungPositions: {
    title: "십이궁(十二宮)",
    description: "얼굴의 12구역으로 인생의 12가지 운세를 판독합니다",
    items: [
      { name: "명궁(命宮)", position: "미간", meaning: "전체 운명의 중심. 미간이 넓고 깨끗하면 운이 트이고, 좁거나 주름지면 고생이 많을 수 있음." },
      { name: "재백궁(財帛宮)", position: "코", meaning: "재물운의 핵심. 코가 곧고 풍만하면 돈을 잘 벌고 모으는 재력가." },
      { name: "형제궁(兄弟宮)", position: "눈썹", meaning: "형제·친구 관계. 눈썹이 정돈되고 길면 형제 복과 인맥이 좋음." },
      { name: "부모궁(父母宮)", position: "이마 양쪽", meaning: "부모 복과 윗사람과의 관계. 이마가 맑고 밝으면 부모 복이 큼." },
      { name: "전택궁(田宅宮)", position: "눈과 눈썹 사이", meaning: "주거·부동산 운. 이 부분이 넓으면 부동산 복이 있고 살 곳이 좋음." },
      { name: "남녀궁(男女宮)", position: "눈 아래(와잠)", meaning: "자녀운. 눈 아래가 풍만하고 색이 좋으면 자녀 복이 큼." },
      { name: "처첩궁(妻妾宮)", position: "눈꼬리", meaning: "배우자 운. 눈꼬리가 올라가면 배우자가 능력 있고, 처지면 정에 약함." },
      { name: "질액궁(疾厄宮)", position: "코 중간(산근)", meaning: "건강운. 콧등 중간이 높고 곧으면 건강하고, 낮거나 끊기면 질병 주의." },
      { name: "천이궁(遷移宮)", position: "이마 양 끝(천창)", meaning: "여행·이사·해외운. 이 부분이 둥글면 여행이 좋고 해외에서 발복할 수 있음." },
      { name: "노복궁(奴僕宮)", position: "턱 양쪽", meaning: "아랫사람 복. 턱이 넓으면 부하 복이 있고, 좁으면 혼자 힘으로 살아야 함." },
      { name: "관록궁(官祿宮)", position: "이마 중앙", meaning: "직업·사회적 성취. 이마 중앙이 밝고 넓으면 높은 자리에 오를 수 있음." },
      { name: "복덕궁(福德宮)", position: "눈썹 끝 위", meaning: "타고난 복과 정신적 풍요. 이 부분이 풍만하면 복이 많고 정신적으로 풍요로움." },
    ],
  },
  faceShapes: {
    title: "오행 얼굴형",
    description: "얼굴형을 오행(木火土金水)에 대입하여 성격과 운명을 판단합니다",
    items: [
      { element: "목(木)형", shape: "긴 얼굴, 좁은 턱", features: "이마가 좁고 얼굴이 길며 체형이 마른 편",
        personality: "이상주의적, 학구적, 예술적. 나무처럼 곧고 정직하며 인내심이 강합니다.",
        fortune: "초년에 고생하나 중년 이후 서서히 발복. 학문/예술 분야에서 두각." },
      { element: "화(火)형", shape: "역삼각형, 뾰족한 턱", features: "이마가 넓고 턱이 좁으며 광대가 발달",
        personality: "정열적, 직관적, 창의적. 불꽃처럼 뜨거운 열정과 빠른 판단력의 소유자.",
        fortune: "초년에 두각을 나타내나 만년에 주의 필요. 사업/연예 분야에 강함." },
      { element: "토(土)형", shape: "사각형, 넓은 얼굴", features: "얼굴이 넓적하고 턱이 발달하며 체격이 좋음",
        personality: "안정적, 신뢰감, 포용력. 대지처럼 듬직하고 사람들에게 신뢰를 줍니다.",
        fortune: "꾸준한 운세로 큰 기복 없이 안정적. 부동산/농업/관리직에서 성공." },
      { element: "금(金)형", shape: "달걀형, 정돈된 이목구비", features: "피부가 희고 이목구비가 또렷하며 골격이 단정",
        personality: "결단력, 정의감, 완벽주의. 보석처럼 빛나는 미적 감각과 날카로운 판단력.",
        fortune: "중년에 크게 발복. 금융/법률/기술 분야에서 두각을 나타냄." },
      { element: "수(水)형", shape: "둥근 얼굴, 풍만한 느낌", features: "얼굴이 둥글고 살이 부드러우며 이목구비가 둥근 편",
        personality: "지혜롭고 유연, 적응력 최강. 물처럼 어떤 그릇에든 담기는 유연함.",
        fortune: "지혜로 위기를 넘기며 꾸준히 발전. 학문/무역/서비스업에서 성공." },
    ],
  },
};

// ─── 오늘의 한마디 (콜잇도사) ───
export const DAILY_QUOTES = [
  "운명은 정해진 것이 아니라, 매 순간의 선택이 만드는 것이지. — 콜잇도사",
  "오늘 하루, 당신이 뿌린 씨앗은 반드시 꽃이 됩니다. 조금만 기다려봐. — 콜잇도사",
  "별이 당신을 비추고 있어. 하지만 걸어가는 건 당신의 두 발이지. — 콜잇도사",
  "좋은 운은 좋은 마음에서 오는 법이야. 오늘도 웃어봐! — 콜잇도사",
  "과거는 타로에 맡기고, 미래는 별에 물어봐. 현재는 네가 만들어! — 콜잇도사",
  "고민이 많은 날일수록, 하늘을 한번 올려다봐. 답이 보일 거야. — 콜잇도사",
  "오행의 기운이 널 감싸고 있어. 오늘은 네 안의 불꽃을 믿어봐! — 콜잇도사",
  "세상에 완벽한 사주는 없어. 부족한 것은 노력으로 채우면 돼. — 콜잇도사",
  "타로카드가 말해줘 — 지금 이 순간이 바로 전환점이라고! — 콜잇도사",
  "12지신이 모두 널 응원하고 있어. 오늘 하루도 힘내! — 콜잇도사",
  "수비학이 알려줘 — 네 영혼의 숫자는 무한한 가능성을 품고 있다고. — 콜잇도사",
  "별자리는 방향을 알려주지만, 출발은 네가 해야 해. 자, 이제 가볼까? — 콜잇도사",
  "인상(人相)은 변해. 좋은 마음을 품으면 좋은 인상이 되는 법이지. — 콜잇도사",
  "오늘의 운세가 좋든 나쁘든, 진짜 중요한 건 네 마음가짐이야. — 콜잇도사",
  "동양의 사주와 서양의 별자리, 둘 다 말하고 있어 — 넌 특별하다고! — 콜잇도사",
];

// ─── 유틸리티 함수들 ───

export function getAnimalSign(year: number) {
  const idx = (year - 4) % 12;
  return JIJI[idx >= 0 ? idx : idx + 12];
}

export function getZodiac(month: number, day: number) {
  const dates = [20, 19, 21, 20, 21, 22, 23, 23, 23, 23, 22, 22];
  const idx = day < dates[month - 1] ? (month + 10) % 12 : (month + 11) % 12;
  return ZODIAC[idx];
}

export function getLifePath(y: number, m: number, d: number) {
  const sum = String(y) + String(m) + String(d);
  let total = sum.split("").reduce((a, b) => a + parseInt(b), 0);
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    total = String(total).split("").reduce((a, b) => a + parseInt(b), 0);
  }
  return total;
}

export function getCheongan(year: number) {
  return CHEONGAN[(year - 4) % 10];
}

export function getElementAnalysis(year: number, month: number, day: number) {
  const stem = getCheongan(year);
  const branch = getAnimalSign(year);
  const elements: Record<string, number> = { "목": 0, "화": 0, "토": 0, "금": 0, "수": 0 };
  elements[stem.element] += 2;
  elements[branch.element] += 2;
  const monthBranch = JIJI.find(j => j.month === month) || JIJI[0];
  elements[monthBranch.element] += 1;
  const dayElement = ["목", "화", "토", "금", "수"][day % 5];
  elements[dayElement] += 1;

  const dominant = Object.entries(elements).sort((a, b) => b[1] - a[1])[0][0];
  const weak = Object.entries(elements).sort((a, b) => a[1] - b[1])[0][0];

  return { elements, dominant, weak, stem, branch };
}

export function getTodayTarot() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const idx1 = seed % 22;
  const idx2 = (seed * 7 + 13) % 22;
  const idx3 = (seed * 3 + 7) % 22;
  return [
    TAROT_MAJOR[idx1],
    TAROT_MAJOR[idx2 === idx1 ? (idx2 + 1) % 22 : idx2],
    TAROT_MAJOR[idx3 === idx1 || idx3 === idx2 ? (idx3 + 2) % 22 : idx3],
  ];
}

export function getLuckyElements() {
  const today = new Date();
  const seed = today.getDate() + today.getMonth() * 31;
  const colors = ["빨강", "파랑", "초록", "노랑", "보라", "검정", "흰색", "분홍", "하늘색", "금색", "은색"];
  const directions = ["동", "서", "남", "북", "동남", "서남", "동북", "서북"];
  return {
    color: colors[seed % colors.length],
    number: (seed % 9) + 1,
    direction: directions[seed % 8],
  };
}

export function getDailyFortune() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
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

export function getDailyQuote() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return DAILY_QUOTES[seed % DAILY_QUOTES.length];
}

// ─── 사주원국 계산 (간략 시뮬레이션) ───
export function getSajuWonguk(year: number, month: number, day: number, hour?: number) {
  // 년주
  const yearGanIdx = (year - 4) % 10;
  const yearJiIdx = (year - 4) % 12;
  const yearGan = CHEONGAN[yearGanIdx >= 0 ? yearGanIdx : yearGanIdx + 10];
  const yearJi = JIJI[yearJiIdx >= 0 ? yearJiIdx : yearJiIdx + 12];
  
  // 월주 (간략 - 년간 기준)
  const monthJiIdx = ((month + 1) % 12); // 인월=1월 기준 보정
  const monthGanBase = [2,4,6,8,0]; // 갑기→병, 을경→무, 병신→경, 정임→임, 무계→갑
  const yearGanGroup = yearGanIdx % 5;
  const monthGanIdx = (monthGanBase[yearGanGroup] + (month - 1) * 1) % 10;
  const monthGan = CHEONGAN[monthGanIdx];
  const monthJi = JIJI[monthJiIdx];
  
  // 일주 (날짜 기반 시뮬레이션)
  const baseDate = new Date(2000, 0, 7); // 갑자일 기준점
  const targetDate = new Date(year, month - 1, day);
  const diffDays = Math.floor((targetDate.getTime() - baseDate.getTime()) / 86400000);
  const dayGanIdx = ((diffDays % 10) + 10) % 10;
  const dayJiIdx = ((diffDays % 12) + 12) % 12;
  const dayGan = CHEONGAN[dayGanIdx];
  const dayJi = JIJI[dayJiIdx];
  
  // 시주
  let hourGan = CHEONGAN[0];
  let hourJi = JIJI[0];
  if (hour !== undefined) {
    const hourJiIdx2 = Math.floor(((hour + 1) % 24) / 2);
    hourJi = JIJI[hourJiIdx2];
    const dayGanGroup = dayGanIdx % 5;
    const hourGanBase = [0, 2, 4, 6, 8];
    const hourGanIdx2 = (hourGanBase[dayGanGroup] + hourJiIdx2) % 10;
    hourGan = CHEONGAN[hourGanIdx2];
  }
  
  // 오행 비율 계산
  const elements = [yearGan.element, yearJi.element, monthGan.element, monthJi.element, dayGan.element, dayJi.element];
  if (hour !== undefined) { elements.push(hourGan.element, hourJi.element); }
  const elementCount: Record<string, number> = { "목": 0, "화": 0, "토": 0, "금": 0, "수": 0 };
  elements.forEach(e => { if (e in elementCount) elementCount[e]++; });
  const total = elements.length;
  const elementPercent = Object.fromEntries(
    Object.entries(elementCount).map(([k, v]) => [k, Math.round(v / total * 100)])
  );
  
  // 신강/신약 점수 (일간 기준)
  const dayElement = dayGan.element;
  const supportCount = elements.filter(e => e === dayElement).length + 
    elements.filter(e => {
      const gen: Record<string,string> = {"수":"목","목":"화","화":"토","토":"금","금":"수"};
      return gen[e] === dayElement;
    }).length;
  const sinScore = Math.round(supportCount / total * 100);
  
  return {
    yearGan, yearJi, monthGan, monthJi, dayGan, dayJi, hourGan, hourJi,
    elementPercent, sinScore,
    hasHour: hour !== undefined,
  };
}

// ─── 일진×띠 관계 상세 해석 (RAG 기반) ───
export const JIJI_RELATIONS: Record<string, Record<string, {type: string; score: number; text: string}>> = {
  // 자(쥐)일
  "자": {
    "자": {type:"비견", score:78, text:"비견의 날! 자기 자신에게 집중하라. 셀프 투자·자기계발에 돈 써도 아깝지 않다."},
    "축": {type:"자축합(子丑合)", score:92, text:"육합 대길! 귀인이 나를 돕는다. 주변의 제안이나 도움을 흔쾌히 수용하라."},
    "인": {type:"수생목", score:85, text:"수생목 기운! 아이디어가 뻗어나가고 추진력이 샘솟는다. 거침없이 전진하라!"},
    "묘": {type:"자묘형(子卯刑)", score:42, text:"무례지형! 말실수가 화를 부른다. SNS 댓글, 카톡 보내기 전에 세 번 읽어라."},
    "진": {type:"신자진 삼합(水局)", score:88, text:"수국 삼합! 물 만난 고기처럼 기획력과 비즈니스 스케일이 팍팍 커지는 대길일."},
    "사": {type:"수극화", score:55, text:"수극화 기운으로 심리적 압박. 앞장서기보다 2선에서 상황을 관망하라."},
    "오": {type:"자오충(子午冲)", score:35, text:"강력한 충돌과 이동수! 욱하는 성질을 죽이고 무조건 안전 운전하라."},
    "미": {type:"자미원진", score:48, text:"별것 아닌 일에 예민해진다. 섭섭한 감정을 타인에게 드러내지 마라."},
    "신": {type:"신자진 삼합(水局)", score:90, text:"삼합 발동! 동료들과 환상적인 팀워크. 독고다이보다 팀플레이에서 큰 성과."},
    "유": {type:"자유파(子酉破)", score:58, text:"직관력은 최고조지만 피로가 심하다. 일찍 귀가해 혼자만의 시간을 가져라."},
    "술": {type:"보통", score:62, text:"금수 기운이 교차하여 충동구매의 유혹이 크다. 현상 유지에 힘써라."},
    "해": {type:"해자수(水氣)", score:75, text:"수기운의 결합! 동료들과 단합이 잘 되지만, 섣부른 오지랖은 독이 되니 주의."},
  },
  // 축(소)일
  "축": {
    "자": {type:"자축합(子丑合)", score:92, text:"육합 대길! 영리한 쥐의 지혜가 소의 안정감과 만나 든든한 하루."},
    "축": {type:"비견", score:72, text:"비견의 날. 꾸준하고 안정적인 에너지. 묵묵히 할 일 하면 인정받는다."},
    "인": {type:"보통", score:65, text:"새로운 시도보다 기존 일을 탄탄하게 다지는 게 유리한 날."},
    "묘": {type:"보통", score:68, text:"감성적인 에너지가 더해져 예술적 영감이 떠오른다. 메모 필수."},
    "진": {type:"축진형", score:48, text:"고집과 고집이 부딪힌다. 양보가 최선의 전략."},
    "사": {type:"사유축 삼합(金局)", score:88, text:"금국 삼합 대길! 금전운 급상승. 투자나 저축 시작하기에 최적."},
    "오": {type:"보통", score:62, text:"무난한 하루. 특별한 변수 없이 안정적. 루틴에 충실하라."},
    "미": {type:"축미충(丑未冲)", score:40, text:"강력 충돌! 뜻밖의 변수 발생. 약속 변경 가능성. 유연하게 대처하라."},
    "신": {type:"보통", score:70, text:"착실하게 실속 챙기는 날. 절약 모드 ON이 좋다."},
    "유": {type:"사유축 삼합(金局)", score:88, text:"금국 삼합! 금전운과 직감력 상승. 재테크 정보에 귀 기울여라."},
    "술": {type:"축술형(恃勢之刑)", score:45, text:"시세지형! 자신의 세력을 믿고 날뛰면 화를 입는다. 겸손하라."},
    "해": {type:"보통", score:65, text:"차분하고 안정적. 급한 불 없이 계획대로 진행하면 OK."},
  },
  // 인(호랑이)일
  "인": {
    "자": {type:"수생목", score:78, text:"지혜(수)가 성장(목)을 돕는다. 배움에 투자하면 큰 결실."},
    "축": {type:"보통", score:65, text:"안정 속에서 새로운 기회를 모색. 급하게 움직이지 마라."},
    "인": {type:"비견", score:80, text:"비견의 날! 리더십 폭발. 결단력과 용기로 앞장서라."},
    "묘": {type:"인묘 방합(木方)", score:92, text:"방합 대길! 봄 숲 호랑이처럼 에너지 폭발! 새 프로젝트 최적."},
    "진": {type:"동방 목기운", score:85, text:"동방 목기운 합류! 성장과 확장의 에너지. 사업 확장 적기."},
    "사": {type:"인사형(寅巳刑)", score:45, text:"무은지형! 급한 성질이 화를 부른다. 오늘은 느긋하게."},
    "오": {type:"인오술 삼합(火局)", score:95, text:"화국 삼합 대길! 불꽃 호랑이! 추진력 최고조. 밀어붙여라!"},
    "미": {type:"보통", score:68, text:"의욕은 넘치나 실행이 따라가지 못한다. 계획을 줄여라."},
    "신": {type:"인신충(寅申冲)", score:38, text:"강력 충돌! 짜증나는 일이 생긴다. 참아라. 내일이면 괜찮다."},
    "유": {type:"보통", score:60, text:"무난한 하루. 무리하지 않으면 탈 없다."},
    "술": {type:"인오술 삼합(火局)", score:94, text:"화국 삼합! 범띠와 개띠의 황금 동맹. 불꽃 같은 행운."},
    "해": {type:"인해합(寅亥合)", score:90, text:"육합 대길! 물이 나무를 키우듯 든든한 지원군이 나타난다."},
  },
  // 묘(토끼)일
  "묘": {
    "자": {type:"자묘형(子卯刑)", score:42, text:"무례지형! 예상치 못한 태클. 욱하는 성질을 죽이고 유연하게 대처."},
    "축": {type:"보통", score:68, text:"안정 속에서 감성적인 하루. 조용한 취미가 잘 맞는다."},
    "인": {type:"인묘 방합(木方)", score:90, text:"방합 대길! 범의 용기와 토끼의 감성이 만나 창의력 폭발."},
    "묘": {type:"비견", score:82, text:"비견의 날! 자기 자신에게 올인. 셀프 투자·뷰티 최적."},
    "진": {type:"묘진해(卯辰害)", score:50, text:"가까운 사람과 사소한 오해. 감정적 반응 자제하라."},
    "사": {type:"보통", score:65, text:"부드러운 에너지. 큰 변수 없이 평탄하게."},
    "오": {type:"묘오파(卯午破)", score:48, text:"약속이 갑자기 취소되거나 계획이 틀어진다. 유연하게."},
    "미": {type:"해묘미 삼합(木局)", score:88, text:"목국 삼합 대길! 친구들과 뭉치면 좋은 일. 모임 잡아라."},
    "신": {type:"보통", score:62, text:"평범한 하루. 큰 기대도 큰 실망도 없다."},
    "유": {type:"묘유충(卯酉冲)", score:35, text:"강력 충돌! 감정적 행동 절대 금물. 참을 인(忍) 세 번."},
    "술": {type:"묘술합(卯戌合)", score:95, text:"육합 대길! 짝사랑 고백 성공 확률 급상승! 막혔던 일이 풀린다."},
    "해": {type:"해묘미 삼합(木局)", score:90, text:"목국 삼합! 물 만난 고기. 모든 것이 술술 풀리는 대길일!"},
  },
};

// 일진 기반 오늘의 상세 운세 생성
export function getDetailedDailyFortune(dayJiName: string, animalJiName: string) {
  const relations = JIJI_RELATIONS[dayJiName];
  if (!relations) return { type: "보통", score: 65, text: "평탄한 하루. 기본에 충실하면 좋은 일이 생깁니다." };
  return relations[animalJiName] || { type: "보통", score: 65, text: "평탄한 하루. 기본에 충실하면 좋은 일이 생깁니다." };
}

// 추가 지지 관계 데이터 (진~해)
Object.assign(JIJI_RELATIONS, {
  "진": {
    "자": {type:"신자진 삼합(水局)", score:88, text:"수국 삼합! 기획력 폭발. 물 만난 고기처럼 스케일이 커진다."},
    "축": {type:"축진형", score:48, text:"토끼리 긴장. 고집과 고집이 부딪힌다. 양보가 최선."},
    "인": {type:"동방 목기운", score:85, text:"목기운 합류! 성장 에너지. 새 프로젝트 시작 최적."},
    "묘": {type:"묘진해(卯辰害)", score:50, text:"가까운 사람과 오해 주의. 감정 반응 자제."},
    "진": {type:"비견", score:78, text:"비견의 날! 야심과 전략이 빛난다. 리더십 발휘."},
    "사": {type:"보통", score:68, text:"안정적. 큰 변수 없이 계획대로 진행하면 OK."},
    "오": {type:"보통", score:65, text:"평탄한 하루. 무난하게 보내면 된다."},
    "미": {type:"보통", score:62, text:"의욕은 있으나 실행이 더디다. 차분하게."},
    "신": {type:"신자진 삼합(水局)", score:88, text:"삼합 발동! 팀워크 폭발. 협업에서 큰 성과."},
    "유": {type:"진유합(辰酉合)", score:92, text:"육합 대길! 뜻밖의 행운. 우연한 만남이 좋은 인연."},
    "술": {type:"진술충(辰戌冲)", score:38, text:"강력 충돌! 감정 조절 최우선. 급하게 결정 말라."},
    "해": {type:"보통", score:65, text:"차분하고 안정적. 급한 불 없이 진행하면 OK."},
  },
  "사": {
    "자": {type:"수극화", score:55, text:"물이 불을 끈다. 심리적 압박. 2선에서 관망하라."},
    "축": {type:"사유축 삼합(金局)", score:88, text:"금국 삼합! 금전운 급상승. 투자·저축 최적."},
    "인": {type:"인사형(寅巳刑)", score:45, text:"무은지형! 급한 성질이 화. 느긋하게."},
    "묘": {type:"보통", score:65, text:"부드러운 에너지. 큰 변수 없이 평탄."},
    "진": {type:"보통", score:68, text:"안정적. 어제의 흐름 이어간다."},
    "사": {type:"비견", score:82, text:"비견의 날! 카리스마 최고조. 직감이 레이저처럼 날카롭다."},
    "오": {type:"사오 남방 화기운", score:80, text:"남방 화기운 동맹! 열정 타오른다. 영업·마케팅 최고."},
    "미": {type:"보통", score:70, text:"안정적이고 포근한 하루. 편안함이 최고."},
    "신": {type:"사신합(巳申合)", score:90, text:"육합 대길! 최고의 팀워크. 파트너십 폭발."},
    "유": {type:"사유축 삼합(金局)", score:88, text:"금국 삼합! 금전운+직감 상승. 재테크 정보 귀 기울여."},
    "술": {type:"보통", score:62, text:"무난한 하루. 특별한 건 없지만 탈도 없다."},
    "해": {type:"사해충(巳亥冲)", score:38, text:"강력 충돌! 충동적 행동 금물. 심호흡 세 번."},
  },
  "오": {
    "자": {type:"자오충(子午冲)", score:35, text:"강력 충돌! 감정 폭발 주의. 한 템포 늦게 반응."},
    "축": {type:"보통", score:62, text:"무난한 하루. 특별한 변수 없이 안정적."},
    "인": {type:"인오술 삼합(火局)", score:95, text:"화국 삼합 대길! 추진력 최고조. 밀어붙여라!"},
    "묘": {type:"묘오파(卯午破)", score:48, text:"약속 취소·계획 틀어짐. 유연하게."},
    "진": {type:"보통", score:65, text:"아이디어 폭발하지만 정리 안 됨. 메모장 필수."},
    "사": {type:"사오 남방 화기운", score:80, text:"남방 화기운! 열정 피크. 영업·발표 강추."},
    "오": {type:"비견", score:82, text:"비견의 날! 열정 폭발. 자기 자신에게 몰입."},
    "미": {type:"오미합(午未合)", score:85, text:"육합! 말과 양의 화합. 협업 시너지 폭발."},
    "신": {type:"보통", score:62, text:"잔머리가 과열. 꼼수보다 정공법이 답."},
    "유": {type:"오유파(午酉破)", score:52, text:"잔잔한 불편함. 무시하면 됨."},
    "술": {type:"인오술 삼합(火局)", score:94, text:"화국 삼합! 불꽃 같은 행운. 승진·발탁 기회."},
    "해": {type:"보통", score:55, text:"화기운에 수기운 눌림. 에너지 저하. 억지로 움직이지 마."},
  },
  "미": {
    "자": {type:"자미원진", score:48, text:"별것 아닌 일에 예민. 감정 드러내지 마라."},
    "축": {type:"축미충(丑未冲)", score:40, text:"강력 충돌! 뜻밖의 변수. 유연하게 대처."},
    "인": {type:"보통", score:68, text:"의욕은 넘치나 실행 더디다. 계획 줄여라."},
    "묘": {type:"해묘미 삼합(木局)", score:88, text:"목국 삼합! 친구들과 뭉치면 좋은 일."},
    "진": {type:"보통", score:62, text:"토끼리 만남. 안정적이지만 변화 없음."},
    "사": {type:"보통", score:70, text:"따뜻한 에너지. 감사 표현하면 좋은 일."},
    "오": {type:"오미합(午未合)", score:85, text:"육합! 협업 시너지 폭발. 팀 프로젝트 MVP."},
    "미": {type:"비견", score:80, text:"비견의 날! 나를 위한 선물. 셀프 투자 최적."},
    "신": {type:"보통", score:65, text:"착실하게 마무리하는 날. 실속 챙겨라."},
    "유": {type:"보통", score:68, text:"무난한 하루. 주간 마무리에 집중."},
    "술": {type:"축술미형(恃勢之刑)", score:45, text:"시세지형! 고집 부리면 손해. 유연하게."},
    "해": {type:"해묘미 삼합(木局)", score:85, text:"목국 삼합! 금요일 모임에서 인기 폭발."},
  },
  "신": {
    "자": {type:"신자진 삼합(水局)", score:90, text:"수국 삼합! 팀워크 환상. 독고다이보다 팀플레이."},
    "축": {type:"보통", score:70, text:"착실하게 실속. 절약 모드 ON."},
    "인": {type:"인신충(寅申冲)", score:38, text:"강력 충돌! 짜증나는 일. 참아라. 내일이면 OK."},
    "묘": {type:"보통", score:62, text:"평범한 하루. 큰 기대도 큰 실망도 없다."},
    "진": {type:"신자진 삼합(水局)", score:88, text:"삼합의 고지! 중요한 인사이트를 얻는다."},
    "사": {type:"사신합(巳申合)", score:90, text:"육합 대길! 뜻밖의 인연. 소개팅·모임 적극."},
    "오": {type:"보통", score:62, text:"잔머리 과열. 꼼수보다 정공법."},
    "미": {type:"보통", score:65, text:"착실하게 마무리. 실속 챙겨라."},
    "신": {type:"비견", score:82, text:"비견의 날! 자기만의 시간 투자. 취미·운동 시작."},
    "유": {type:"신유 서방 금기운", score:78, text:"서방 금기운! 착실하게 실속. 이직 준비·자격증."},
    "술": {type:"보통", score:65, text:"편안한 하루. 긴장 풀리고 여유."},
    "해": {type:"해신합(亥申合)", score:82, text:"육합! 함께하면 좋은 일."},
  },
  "유": {
    "자": {type:"자유파(子酉破)", score:58, text:"직관력 최고조지만 피로 심함. 일찍 귀가."},
    "축": {type:"사유축 삼합(金局)", score:88, text:"금국 삼합! 금전운+직감 상승."},
    "인": {type:"보통", score:60, text:"무난한 하루. 무리하지 않으면 탈 없다."},
    "묘": {type:"묘유충(卯酉冲)", score:35, text:"강력 충돌! 감정적 행동 절대 금물."},
    "진": {type:"진유합(辰酉合)", score:92, text:"육합 대길! 뜻밖의 행운!"},
    "사": {type:"사유축 삼합(金局)", score:88, text:"금국 삼합! 금전운 최고. 좋은 투자 정보."},
    "오": {type:"오유파(午酉破)", score:52, text:"잔잔한 불편함. 무시하면 됨."},
    "미": {type:"보통", score:68, text:"무난한 하루. 주간 마무리 집중."},
    "신": {type:"신유 서방 금기운", score:78, text:"서방 금기운! 착실하게 실속."},
    "유": {type:"비견", score:82, text:"비견의 날! 나를 위한 선물. 쇼핑·미용 최적."},
    "술": {type:"유술해(酉戌害)", score:52, text:"가까운 사람과 미세한 긴장감. 혼자 시간 추천."},
    "해": {type:"보통", score:65, text:"착실한 하루. 다음 주 준비에 집중."},
  },
  "술": {
    "자": {type:"보통", score:62, text:"충동구매 유혹 크다. 현상 유지에 힘써라."},
    "축": {type:"축술형(恃勢之刑)", score:45, text:"시세지형! 세력 믿고 날뛰면 화. 겸손."},
    "인": {type:"인오술 삼합(火局)", score:94, text:"화국 삼합! 불꽃 같은 행운. 승진 기회."},
    "묘": {type:"묘술합(卯戌合)", score:95, text:"육합 대길! 막혔던 일이 풀린다. 고백 성공률 UP."},
    "진": {type:"진술충(辰戌冲)", score:38, text:"강력 충돌! 감정 조절 최우선. 급하게 결정 말라."},
    "사": {type:"보통", score:62, text:"무난. 특별한 건 없지만 탈도 없다."},
    "오": {type:"인오술 삼합(火局)", score:94, text:"화국 삼합! 범·말띠와 황금 동맹. 불꽃 행운."},
    "미": {type:"축술미형(恃勢之刑)", score:45, text:"시세지형! 고집 부리면 손해. 유연하게."},
    "신": {type:"보통", score:65, text:"편안한 하루. 긴장 풀리고 여유."},
    "유": {type:"유술해(酉戌害)", score:52, text:"미세한 긴장감. 무리한 약속보다 혼자 시간."},
    "술": {type:"비견", score:78, text:"비견의 날! 충성과 보호의 에너지. 가족과 함께."},
    "해": {type:"보통", score:65, text:"차분한 하루. 다음 주 준비에 집중."},
  },
  "해": {
    "자": {type:"해자수(水氣)", score:75, text:"수기운 결합! 단합 좋지만 오지랖 주의."},
    "축": {type:"보통", score:65, text:"차분하고 안정적. 계획대로 진행하면 OK."},
    "인": {type:"인해합(寅亥合)", score:90, text:"육합 대길! 물이 나무 키우듯 든든한 지원군."},
    "묘": {type:"해묘미 삼합(木局)", score:90, text:"목국 삼합! 물 만난 고기. 모든 것이 술술."},
    "진": {type:"보통", score:65, text:"차분하고 안정적. 급한 불 없이 진행."},
    "사": {type:"사해충(巳亥冲)", score:38, text:"강력 충돌! 충동적 행동 금물. 심호흡 세 번."},
    "오": {type:"보통", score:55, text:"화기운에 수기운 눌림. 에너지 저하."},
    "미": {type:"해묘미 삼합(木局)", score:85, text:"목국 삼합! 모임에서 인기 폭발."},
    "신": {type:"해신합(亥申合)", score:82, text:"육합! 함께하면 좋은 일."},
    "유": {type:"보통", score:65, text:"착실한 하루. 다음 주 준비."},
    "술": {type:"보통", score:65, text:"차분한 하루. 무리하지 말고."},
    "해": {type:"비견", score:80, text:"비견의 날! 포용과 창의의 에너지. 반성과 준비."},
  },
});

// ─── 60갑자 일주 풀이 (RAG 학습 기반) ───
export const ILJU_DESC: Record<string, {title: string; desc: string}> = {
  "갑자": {title:"갑자(甲子)일주 — 큰 나무가 차가운 물 위에 서다", desc:"갑목(큰 나무)이 자수(차가운 물) 위에 뿌리를 내린 형상입니다. 지혜롭고 영리하며, 물 위의 나무처럼 겉으로는 당당하지만 내면은 불안할 수 있습니다. 학문과 예술에 뛰어나고, 새로운 것을 시작하는 개척자 기질이 있습니다. 다만 물 위의 나무라 기반이 흔들릴 수 있으니 꾸준함이 중요합니다."},
  "갑인": {title:"갑인(甲寅)일주 — 큰 나무가 숲에 뿌리내리다", desc:"갑목이 인목(호랑이 숲) 위에 있어 뿌리가 깊고 당당합니다. 타고난 리더이자 개척자. 호랑이처럼 용맹하고 결단력이 있습니다. 독립심이 강하고 자존심이 대단합니다. 다만 고집이 세고 독불장군이 될 수 있으니 협업을 배워야 합니다."},
  "갑진": {title:"갑진(甲辰)일주 — 큰 나무가 용의 연못에 서다", desc:"갑목이 진토(용 연못) 위에 있어 야심차고 전략적입니다. 물을 머금은 땅에 뿌리를 내린 나무라 생명력이 강합니다. 큰 꿈을 품고 있으며 카리스마가 넘칩니다. 사업가, CEO 기질이 강합니다."},
  "을축": {title:"을축(乙丑)일주 — 풀꽃이 겨울 논밭에 피다", desc:"을목(풀꽃)이 축토(소, 겨울 논밭) 위에 있습니다. 겨울 땅의 꽃이라 인내심이 강하고 끈기가 대단합니다. 속도는 느리지만 반드시 결실을 맺는 대기만성형입니다. 예술적 감성과 실용적 능력을 겸비합니다."},
  "을묘": {title:"을묘(乙卯)일주 — 봄 들판의 풀꽃", desc:"을목이 묘목(토끼, 봄 들판) 위에 있어 가장 자연스러운 조합입니다. 부드럽고 유연하며 감성이 풍부합니다. 예술가, 디자이너, 상담사에 적합합니다. 사람들에게 사랑받는 매력이 있지만, 결단력이 부족할 수 있습니다."},
  "을사": {title:"을사(乙巳)일주 — 풀꽃이 불길 속에 피다", desc:"을목이 사화(뱀, 불길) 위에 있어 목생화의 기운입니다. 아이디어가 불꽃처럼 피어나고 표현력이 뛰어납니다. 카리스마와 매력이 넘치며, 변화를 두려워하지 않습니다. 예술, 방송, 마케팅에 재능이 있습니다."},
  "병오": {title:"병오(丙午)일주 — 태양이 정오에 빛나다", desc:"병화(태양)가 오화(말, 정오) 위에 있어 불꽃이 두 배! 열정과 카리스마가 최고조입니다. 리더십이 강하고 사람들을 끌어당기는 자력이 있습니다. 다만 과열 주의. 급하면 화를 다스려야 합니다."},
  "병자": {title:"병자(丙子)일주 — 태양이 한밤의 물 위에 비추다", desc:"병화(태양)가 자수(쥐, 한밤 물) 위에 있어 수극화의 긴장이 있습니다. 낮과 밤, 불과 물의 대비로 극적인 인생을 삽니다. 예술적 감성과 이성적 판단을 동시에 가진 독특한 사람입니다."},
  "정사": {title:"정사(丁巳)일주 — 촛불이 뱀의 불길과 만나다", desc:"정화(촛불)가 사화(뱀) 위에 있어 따뜻하면서도 신비로운 매력이 있습니다. 직관력이 뛰어나고 사람의 마음을 읽는 능력이 탁월합니다. 심리상담, 종교, 철학에 재능이 있습니다."},
  "정미": {title:"정미(丁未)일주 — 촛불이 초원을 비추다", desc:"정화(촛불)가 미토(양, 초원) 위에 있어 화생토의 안정적 기운입니다. 따뜻하고 포근한 사람이며, 사람들의 중재자 역할을 잘합니다. 교육, 상담, 요리 분야에서 빛납니다."},
  "무신": {title:"무신(戊申)일주 — 큰 산에서 원숭이가 뛰놀다", desc:"무토(큰 산)가 신금(원숭이) 위에 있어 토생금의 기운입니다. 안정적이면서도 영리합니다. 실용적 지혜와 손재주가 뛰어나며, 사업 감각이 좋습니다. 든든하면서도 재치 있는 사람입니다."},
  "무술": {title:"무술(戊戌)일주 — 큰 산과 충직한 개", desc:"무토가 술토(개) 위에 있어 토+토로 안정감이 극대화됩니다. 한번 맡은 일은 반드시 해내는 책임감의 아이콘. 정의로우며 배신을 모릅니다. 다만 고집이 너무 셀 수 있습니다."},
  "기유": {title:"기유(己酉)일주 — 논밭에서 황금 닭알을 거두다", desc:"기토(논밭)가 유금(닭) 위에 있어 토생금의 수확 기운입니다. 꼼꼼하고 완벽주의적이며, 재물을 모으는 능력이 탁월합니다. 세련되고 깔끔한 스타일을 추구합니다."},
  "기해": {title:"기해(己亥)일주 — 논밭이 가을 호수를 만나다", desc:"기토가 해수(돼지, 가을 호수) 위에 있어 토극수의 긴장이 있지만, 물을 가둔 논밭이라 풍요롭습니다. 관대하고 포용력이 넓으며, 재물운이 좋습니다."},
  "경술": {title:"경술(庚戌)일주 — 바위산에 충직한 개가 지키다", desc:"경금(바위)이 술토(개) 위에 있어 토생금으로 든든합니다. 강인하고 의리 있으며, 한번 정한 건 끝까지 갑니다. 군인, 경찰, 법조인 기질이 있습니다."},
  "경자": {title:"경자(庚子)일주 — 바위 아래 맑은 샘물", desc:"경금(바위)이 자수(쥐, 물) 위에 있어 금생수의 기운입니다. 냉철한 판단력과 날카로운 지혜를 동시에 가졌습니다. 결단력이 뛰어나고 분석적입니다."},
  "신해": {title:"신해(辛亥)일주 — 보석이 가을 호수에 잠기다", desc:"신금(보석)이 해수(돼지, 호수) 위에 있어 금생수의 기운입니다. 세련되고 직관적이며, 숨겨진 매력이 있습니다. 예술적 안목과 재물 감각이 뛰어납니다."},
  "임자": {title:"임자(壬子)일주 — 큰 바다가 한밤에 넘실대다", desc:"임수(큰 바다)가 자수(쥐) 위에 있어 물+물로 지혜가 폭발합니다. 머리가 비상하게 좋고 직관력이 대단합니다. 학자, 연구자, 전략가 기질입니다. 다만 감정의 파도가 클 수 있습니다."},
  "임진": {title:"임진(壬辰)일주 — 큰 바다에서 용이 솟구치다", desc:"임수(바다)가 진토(용) 위에 있어 용이 바다를 만난 격! 최고의 스케일과 야망을 가진 사주입니다. 사업가, 정치가, 리더 중의 리더. 꿈이 크고 실행력도 강합니다."},
  "계사": {title:"계사(癸巳)일주 — 이슬이 불꽃 위에 맺히다", desc:"계수(이슬)가 사화(뱀, 불꽃) 위에 있어 물과 불이 만난 극적인 조합입니다. 직관력과 지혜가 뛰어나며, 스파크처럼 번뜩이는 아이디어가 특징입니다. 창의적이고 변화무쌍하며, 위기에서 빛나는 타입입니다. 사업, AI, 스타트업에 천생 적합합니다."},
  "계축": {title:"계축(癸丑)일주 — 이슬이 겨울 논밭에 맺히다", desc:"계수(이슬)가 축토(소) 위에 있어 차분하고 꾸준합니다. 물이 흙에 스며들듯 인내심이 강하고, 한번 시작하면 끝을 봅니다. 학자, 연구자, 전문가 기질입니다."},
  "계묘": {title:"계묘(癸卯)일주 — 이슬이 봄 풀잎에 맺히다", desc:"계수(이슬)가 묘목(토끼, 봄 들판) 위에 있어 수생목의 아름다운 조합입니다. 감성이 풍부하고 예술적 재능이 뛰어납니다. 사람들에게 부드러운 인상을 주며, 치유의 능력이 있습니다."},
  "계해": {title:"계해(癸亥)일주 — 이슬이 가을 호수에 녹아들다", desc:"계수가 해수(돼지) 위에 있어 물+물! 직관과 영감이 끝없이 솟아납니다. 영적 감각이 뛰어나고 예술, 종교, 철학에 깊은 관심이 있습니다."},
};

export function getIljuDesc(ganName: string, jiName: string): {title: string; desc: string} {
  const key = ganName + jiName;
  return ILJU_DESC[key] || {
    title: `${ganName}${jiName}(${CHEONGAN.find(c=>c.name===ganName)?.hanja||""}${
      jiName==="자"?"子":jiName==="축"?"丑":jiName==="인"?"寅":jiName==="묘"?"卯":jiName==="진"?"辰":jiName==="사"?"巳":jiName==="오"?"午":jiName==="미"?"未":jiName==="신"?"申":jiName==="유"?"酉":jiName==="술"?"戌":"亥"
    })일주`,
    desc: `${CHEONGAN.find(c=>c.name===ganName)?.keyword || ""}의 기운이 ${jiName} 위에 있습니다. ${
      CHEONGAN.find(c=>c.name===ganName)?.element === JIJI.find(j=>j.name===jiName)?.element ? "같은 오행이 만나 에너지가 강화됩니다." :
      "서로 다른 오행이 만나 다채로운 성격을 만들어냅니다."
    } 당신만의 독특한 매력과 잠재력을 발휘해보세요.`
  };
}
