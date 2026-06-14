# ds-token-test

mildang 디자인 시스템의 **색상 토큰 명칭 체계가 AI 자동 생성 시 오용률에 미치는 영향**을 측정하는 실험 프로젝트.

동일한 중립 UI 스펙을 토큰 명칭 체계별로 AI에게 따로 생성시키고, 생성물의 토큰 오용률을 나란히 비교한다.

> **실험의 변천**: 이 프로젝트는 처음부터 **토큰을 직접 골라 쓰는 주체(AI 코드 생성 포함)가 명칭 체계에 따라 토큰을 얼마나 정확히 고르는가**를 보는 실험이다. 초기엔 *role-first(기존) vs property-first(신규)* 두 명칭 체계를 비교했으나, ① 기존 role-first가 오용률 8.17%로 조기 탈락·아카이브되고, ② 신규 후보를 intent-first(E)로 두고 **설명·순서 등 변수를 격리**하는 다중 arm 비교로 발전했다. "명칭 체계가 토큰 사용 정확도에 직결된다"는 큰 줄기는 그대로다.

## 실험 목적

기존 DS에서 두 가지 문제가 확인됨:

- **명칭 혼란** — `low` / `base` / `high` variant가 밝은 색인지 어두운 색인지 이름만으로 분간되지 않음(명도 방향이 이름에 드러나지 않음)
- **Property 구조 이슈** — `fg`와 `text` 중복, `ghost-bg`가 투명도 개념으로 사용되지만 실제 값과 의도 불일치

mildang-frontend 코드베이스 전체에서 raw semantic token 직접 참조가 약 2,000건 확인됨. 토큰 이름을 직접 써서 색을 고르는 패턴이 지배적이고 **AI 코드 생성도 동일하게 토큰을 직접 골라 쓰므로**, 명칭 설계가 토큰 사용 정확도에 직결됨.

## 실험 방법

### 구조

```
panda.config.property-first.ts           →  styled-system-property-first/          (property-first 명칭)
panda.config.intent-first.ts             →  styled-system-intent-first/            (intent-first, E+/E−/EC 공유)
panda.config.intent-first-stepnames.ts   →  styled-system-intent-first-stepnames/  (intent-first, step 어휘 변경, ES)
panda.config.intent-first-slotfirst.ts   →  styled-system-intent-first-slotfirst/  (slot-first 명칭, INV)
```

> EC arm은 E−/E+와 토큰·값이 동일하므로 별도 config 없이 `styled-system-intent-first`를 공유한다(프롬프트 토큰 목록에 canvas/surface 구분 힌트만 추가한 변형, per-token 설명은 없음).

각 styled-system을 완전히 분리하는 이유: autocomplete에 여러 토큰 이름이 섞이면 측정이 오염됨.

### 6가지 토큰 변형안 (arm)

토큰의 **네이밍 순서**(intent-first vs slot-first) · **설명 유무** · **step 어휘** · **부분 힌트(canvas/surface 구분)** 를 독립 변수로 분리해 비교한다.

| arm | 네이밍 | 설명 | 비고 |
|---|---|---|---|
| **PF** | slot-first | ✗ (자동완성 동등) | 외부 `property-first` 토큰 체계 (slot-first 계열·비교 대조군) |
| **E−** | intent-first | ✗ | E+와 설명 유무만 다름 |
| **EC** | intent-first | ✗ | E−(이름만)에 **canvas/surface 구분 힌트 한 단락만** 추가 (per-token 설명 없음) |
| **E+** | intent-first | ✓ | 신규 후보 (mildang 자체 설계) |
| **ES** | intent-first (step 어휘 변경) | ✓ | 셀 E와 **동일 토큰·색상값·순서**, step 단어만 `low/base/high/highest/lowest` → `subtle/default/strongest/emphasis/muted` |
| **INV** | slot-first | ✓ | 셀 E와 **동일 토큰·색상값**을 순서만 반전(`{intent}.{slot}` ↔ `{slot}.{intent}`) |

- **E+ ↔ E−** 는 토큰·순서·styled-system이 모두 동일하고 **설명 유무만** 다름 → 설명 효과 격리.
- **E+ ↔ INV** 는 동일 토큰·색상값을 **순서만** 반전, 설명은 둘 다 있음 → 순서 효과 격리.
- **E+ ↔ ES** 는 동일 토큰·색상값·순서에서 **step 단어만** 교체, 설명도 함께 변경 → step 어휘 효과 격리.
- **E− ↔ EC** 는 이름만인 E−에 **canvas/surface 구분 한 단락만** 추가 → 단일 핀포인트 힌트 효과 격리.

> **용어:** PF·INV는 둘 다 슬롯/속성이 먼저 오는 **slot-first 계열**이다(`{slot}.{intent}...`). 차이는 — PF는 외부에서 설계된 별도 `property-first` 토큰 체계(설명 없음, `bg`/`surface`/`icon` 등이 첫 세그먼트), INV는 셀 E(intent-first)를 순서만 반전한 것(설명 있음, 셀 E와 동일 값).

### 페이지

```
/property-first/{dashboard,billing,notifications,settings}/run{1,2,3}   PF 생성물
/e-nodesc/{dashboard,billing,notifications,settings}/run{1,2,3}         E− 생성물
/e-canvas-hint/{dashboard,billing,notifications,settings}/run{1,2,3}    EC 생성물
/intent-first/{dashboard,billing,notifications,settings}/run{1,2,3}     E+ 생성물
/step-rename/{dashboard,billing,notifications,settings}/run{1,2,3}      ES 생성물
/inverse-desc/{dashboard,billing,notifications,settings}/run{1,2,3}     INV 생성물
```

6 arm × 4 page × 3 run = **72셀**. 각 arm은 동일한 중립 스펙으로 AI가 **독립 생성**한다(같은 UI를 렌더하는 게 아님).

### 테스트 항목

| 테스트 | 방법 | 기준 |
|---|---|---|
| **토큰 오용률 (핵심)** | 중립 스펙 → AI 자동 생성 → LLM 블라인드 채점 | 의미에 맞는 슬롯/계열 토큰을 골랐는가 (정규화 오용률) |
| **환각** | `npx tsc` + 채점 | 목록에 없는 토큰을 지어내지 않았는가 |
| **시각 검증** | 72셀 렌더 → 스크린샷 → 뷰어 | 스펙대로 구현됐는가 (예: 다크 사이드바) |

오용은 5대 차원으로 분류: `slot/role` · `intent` · `icon↔text` · `hardcode` · `hallucination` (`eval/SCORING.md`).

### 편향 제거 (공정성 확보)

특정 토큰 체계에 유리한 누설을 제거해 arm 간 공정성을 맞춤:

- **어휘 중립화** — "브랜드" 등 특정 토큰명을 가리키는 어휘를 의미 기반 서술로 치환. (밀당은 `primary ≠ brand`, 아래 한계 §5 참조)
- **토큰 누설 제거** — 생성 프롬프트/스펙에서 영어 토큰명 인용·대응표 삭제. (집중 검증 표·정답표는 채점 전용으로 분리해 생성기엔 미주입.)
- **disabled = opacity** — "조작 불가 색상" 표현 제거 → 기본 색 + 요소 opacity 낮춤(실제 DS 컨벤션).
- **layer step-free 채점** — canvas는 계열 사용 여부만 채점, 01/02/03 단계 정밀도는 미채점(단계를 오용 집계하면 모델 능력이 아니라 프롬프트 모호성을 측정하게 됨).

### 왜 Sonnet 4.6 LLM 채점인가

토큰 오용은 "이 슬롯에 이 토큰이 의미상 맞는가"라는 의미론적 판단이라 단순 문자열 매칭으로는 잡히지 않는다. 평가 모델을 Sonnet 4.6으로 고정하고, 블라인드 + 적대적 검증(거짓양성 제거) 2단계로 채점한다. 생성·채점·검증 모두 동일 모델.

### 왜 Park UI인가

| | Park UI | shadcn |
|---|---|---|
| 스타일 엔진 | PandaCSS | Tailwind CSS |
| 토큰 연동 | PandaCSS semantic token 직접 참조 | CSS variable 수동 매핑 필요 (`--primary`, `--background` 등 20개+) |
| 매핑 방식 | 타입 시스템 안에서 해결 | globals.css에 별도 레이어 |
| 실험 적합성 | 매핑 의미론이 PandaCSS 토큰과 동일 | shadcn 의미론 ≠ mildang 의미론 → 매핑이 추측성 |

Park UI 컴포넌트는 PandaCSS semantic token을 직접 참조하므로, config에 토큰을 정의하면 Button / Input / Badge 등에 자동 반영됨.

## 결과 (정규화 오용률, 낮을수록 좋음 · 72셀)

| arm | 네이밍 | 설명 | **오용률** | 오용/사용 | 주된 오용 성격 |
|---|---|---|---|---|---|
| **INV** | slot-first (셀 E 토큰) | ✓ | **0.34%** | 7 / 2082 | 세로 구분선·토글 knob (소수) |
| **E+** | intent-first | ✓ | **0.37%** | 7 / 1910 | 세로 구분선·토글 knob (소수) |
| **ES** | intent-first (step 어휘) | ✓ | **0.47%** | 10 / 2131 | 세로 구분선·토글 knob (소수) + intent 1 |
| **EC** | intent-first + canvas/surface 힌트만 | ✗ | **0.75%** | 16 / 2129 | 토글 knob·세로 구분선 + `primary/critical.canvas` 환각 6 |
| **PF** | slot-first (property-first 체계) | ✗ | **0.85%** | 17 / 2006 | slot 오용 + 아이콘↔텍스트 혼용 |
| **E−** | intent-first | ✗ | **1.70%** | 39 / 2300 | surface를 레이아웃 배경에 사용 (canvas 오답) |

정규화 오용률 = 오용 총건수 ÷ 시맨틱 컬러 토큰 사용 총횟수(생성 verbosity에 의한 분모 오염 방지). EC만 부분 힌트 부작용으로 `primary/critical.canvas` 환각 6건(아래 4번), 나머지 5개 arm은 환각 0.

### 변수 격리 결과

1. **설명 효과 (E− → E+, 약 4.6× 감소)** — 결정적. E−의 오용은 거의 전부 `neutral.surface.*`를 카드·컨테이너·테이블 같은 **레이아웃 배경에 사용**(정답 `neutral.canvas.*`). 설명이 없으면 모델이 **canvas(레이아웃 레이어) vs surface(컴포넌트)** 를 구분하지 못함. → **설명이 오용률의 지배 변수.**
2. **순서 효과 (E+ ≈ INV)** — 미미. 동일 토큰을 슬롯/인텐트 순서만 반전한 두 셀이 0.37% ≈ 0.34%로 사실상 동일, 잔존 패턴까지 같음. → **설명이 제공되면 네이밍 순서는 거의 무관.**
3. **step 어휘 효과 (E+ ≈ ES)** — 미미. 동일 토큰에서 step 단어만 `base/high/…` → `default/strongest/…`로 교체한 두 셀이 0.37% ≈ 0.47%로 통계적 동률(차이 3건은 런 노이즈), 잔존 패턴도 동질. → **설명이 제공되면 step 축 어휘 선택도 거의 무관.**
4. **canvas/surface 단일 힌트 (E− → EC, 약 2.3× 감소, 단 부작용)** — E−에 **canvas/surface 구분 한 단락만** 추가하니 1.70% → 0.75%. E−의 지배적 실패였던 **surface→canvas 레이아웃 혼동이 사실상 소멸**(EC 잔존 slot 10건은 토글 knob·세로 구분선으로 E+/INV와 공유하는 커버리지성 잔여). → **E−의 1.70%는 거의 전부 'canvas vs surface를 모름' 한 가지 원인이었음**이 입증됨. **단 부작용**: EC에서 `primary.canvas.01`·`critical.canvas.01` **환각 6건** — "구조 컨테이너=canvas" 힌트를 색상 인텐트 컨테이너(Pro 박스·위험 구역)에 과확장했으나 canvas는 neutral 전용. 전체 per-token 설명(E+)은 이 실수를 막아 **E+(0.37%) < EC(0.75%)**. → **핀포인트 힌트로 지배적 실패의 ~65%를 닫지만, 부분 설명은 새 과확장 환각을 유발.**
5. **설계 함의** — 설명 없는 둘 중에서는 오히려 **E−(1.70%) > PF(0.85%)**. PF(property-first 체계)는 canvas/surface 구분이 없어(레이아웃·컴포넌트 모두 `surface.neutral.*`) **그 실수를 할 수조차 없으므로** 표현력이 낮아 역설적으로 안전.

> 결론: 토큰 체계의 표현력(canvas 레이어 등)은 **설명과 짝을 이룰 때만** 가치를 가진다. 오용률의 핵심 변수는 **설명**이며, 네이밍 표면(순서 · step 어휘)은 거의 무관하다. canvas/surface 구분 같은 **핀포인트 힌트는 큰 폭 개선**을 주지만, 경계를 명시하지 않은 부분 설명은 과확장 환각을 부르므로 **완전한 per-token 설명이 가장 안전**하다.

상세: 뷰어 `eval/viewer/index.html`(스크린샷 + 오용 상세) · 리포트 `eval/results/summary.md` · 룰북 `eval/SCORING.md`.

## 실험 한계 및 향후 논의

본 실험은 **E 계열(intent-first) 토큰의 설계자가 평가자 본인**이라는 비대칭 위에서 수행되었다. PF는 외부 설계 토큰이라 동일 조건을 부여하지 못했고, 결과 수치(특히 PF 0.85%)는 이 한계를 감안해 해석해야 한다.

1. **PF에 "설명 추가본"을 실험하지 못함** — E 계열은 설명 유무(E−/E+)를 모두 측정했지만 PF는 설명 없음 단일 조건만 측정. PF 토큰의 **설계 의도를 평가자가 알 수 없어**(외부 산출물) 부합하는 설명을 작성할 수 없었기 때문(추정 설명은 그 자체로 새 편향). 따라서 "설명이 지배 변수"라는 결론은 **E 계열 내부에서만 인과적으로 입증**된 것.
2. **PF 채점의 정답 판정 한계 → 실측 오용률 과소평가 가능** — 뷰어 렌더 확인 결과 **어두운 배경 + 대비 텍스트를 지시한 사이드바가 제대로 구현되지 않은** 케이스가 관찰됨. 그러나 현재 채점 프롬프트는 이를 오용으로 잡지 못함(PF의 정답 토큰 조합을 확정 불가 → E 계열에 대해서만 신뢰성 있게 채점). **PF 실제 오용률은 집계된 0.85%보다 높을 수 있음.**
3. **PF 토큰 구조 결함 (inverse 커버리지)** — PF는 다크/대비 영역을 `inverse` 토큰으로 처리하나, **모든 role × 슬롯 조합마다 inverse를 빠짐없이 정의하는 것은 비현실적**. 누락 조합에서 §2의 구현 실패가 발생. → inverse를 슬롯별로 채우기보다 **국소 부위(예: 사이드바)를 통째로 다크 테마로 전환**하는 방식이 더 견고할 것.
4. **`canvas` 레이어의 실험적 지위 (surface 통합 가능성)** — 화면 구성 시 회색 배경부터 쌓이는 경우와 흰색 배경부터 쌓이는 경우가 공존. 사람은 눈으로 즉석 판단하지만 **AI에게는 명확한 사용 규칙·순서가 있어야** 일관되게 구현됨. 그래서 **Carbon의 canvas–layer 관계를 참고**해 `surface`(컴포넌트)와 구별되는 `canvas`(레이아웃 레이어)를 별도 구성. **실험적 방향**이며 구현·프롬프팅 방식은 개발팀과 논의 필요, 결과에 따라 `canvas`는 `surface`로 통합될 수도 있음.
5. **`brand` ≠ `primary` (밀당 색상 정체성)** — 밀당은 brand가 초록인데 **진행률·완료 등 상태 표현도 대부분 초록**이고 표시할 상태가 많아 화면이 온통 초록·알록달록. 그래서 **메인 컬러를 중립 검정**으로 잡아 `primary ≠ brand`. E 계열엔 `brand`를 두지 않고 **`primary`만** 둠(필요 시 `secondary` 추가 가능). brand/primary를 동일시하는 토큰 체계와는 전제가 다르므로 비교 시 유의.

## 실험 범위

- **포함**: 색상 토큰 (primitive + semantic)
- **제외**: spacing, typography, 일부 color role
- **Primitive 색상값 변경 없음** — 같은 hex/oklch, 명칭만 다름
- 다크 모드는 토큰 값으로 light/dark 모두 정의됨. 단, 국소 다크 전환은 `.dark` 클래스로 처리(테스트 하네스가 `.dark` 선택자만 매칭 — `data-theme="dark"`로 쓰면 라이트로 렌더되니 주의)

## 개발 환경

```bash
pnpm install

# 모든 styled-system 생성 (main + property-first + intent-first + stepnames + slotfirst)
pnpm codegen

# 각 arm styles.css 생성 (페이지 생성 후 실행)
pnpm cssgen

# 개발 서버
pnpm dev          # 또는 PORT=3300 next dev -p 3300

# 생성: 중립 스펙 + 토큰목록을 Sonnet 4.6에 주입 (블라인드)
#   PF  → eval/inputs/tokens-property-first-nodesc.md     (이름만)
#   E−  → eval/inputs/tokens-intent-first-nodesc.md         (이름만)
#   EC  → eval/inputs/tokens-intent-first-canvas-hint.md     (이름만 + canvas/surface 구분 힌트만, per-token 설명 없음)
#   E+  → eval/inputs/tokens-intent-first-desc.md            (이름+설명)
#   ES  → eval/inputs/tokens-intent-first-stepnames-desc.md  (이름+설명, step 어휘 변경)
#   INV → eval/inputs/tokens-intent-first-inverse-desc.md    (slot-first 이름+설명)
#   ※ 생성 프롬프트는 "아이콘 import + css() 중복 키 금지" 명시

# 채점·집계·스샷
node eval/_rebuild.mjs   # 6-arm 집계 → summary.{json,md}
node eval/_shot.mjs      # 72셀 렌더 → eval/viewer/shots/ → 뷰어 자동 반영
```

> 점수는 채점 결과대로만 집계한다(임의 가감 금지). 토큰 1개 변경 시: 설명만 = `*-desc.md`만(빌드 X) · 값 = `mildang.ts` + cssgen · 이름 = 3파일 + codegen + cssgen.

## 기술 스택

Next.js 14 · PandaCSS · Park UI (`@park-ui/panda-preset`) · TypeScript · lucide-react

## 디렉토리 구조

```
panda.config.ts                          메인 (홈+스토리 렌더용)
panda.config.property-first.ts           PF config
panda.config.intent-first.ts             E+/E− config (intent-first, 공유)
panda.config.intent-first-stepnames.ts   ES config (셀 E 값을 step 어휘 변경 이름으로)
panda.config.intent-first-slotfirst.ts   INV config (셀 E 값을 slot-first 이름으로)
src/
  tokens/
    colors/               primitive 색상 (gray, red, green, blue, orange, neutral, mildangPT 등)
    semanticColors/
      property-first/             PF 토큰 (mildang.ts)
      intent-first/               E 토큰 (mildang.ts; slotfirst는 자동 변환)
      intent-first-stepnames/     ES 토큰 (mildang.ts; 셀 E의 step 어휘 변경본)
  app/
    property-first/{page}/run{n}/   PF 생성물
    e-nodesc/{page}/run{n}/         E− 생성물
    e-canvas-hint/{page}/run{n}/    EC 생성물 (styled-system-intent-first 공유)
    intent-first/{page}/run{n}/     E+ 생성물
    step-rename/{page}/run{n}/      ES 생성물
    inverse-desc/{page}/run{n}/     INV 생성물
eval/
  inputs/    중립 스펙(spec-{billing,dashboard,notifications,settings}) + 토큰목록 6종
  results/   런별 채점 JSON(72) + summary.{json,md}
  viewer/    index.html + data.js + shots/ (6-arm 뷰어)
  SCORING.md 채점 룰북
```
