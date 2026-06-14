# ds-token-test-v3 — 5-arm 비교 (PF · E− · E+ · ES · INV) · step-free layer

> 2026-06-14~15. 동일 중립 스펙(4페이지: dashboard·billing·notifications·settings) × 3런. 생성·채점·검증 모두 **Sonnet 4.6**, 블라인드. raw 정규화 오용률(= 오용 ÷ 시맨틱 컬러 토큰 사용 총횟수). layer(canvas)는 **step-free**(canvas 계열 사용 여부만, 01/02/03 정밀도 미채점).
> ES(2026-06-15 추가) = 셀 E와 토큰 구조·색상값·순서 100% 동일, **step(단계) 어휘만 교체**: `lowest→muted, low→subtle, base→default, high→strongest, highest→emphasis`. E+와 비교하면 step 어휘만 다름.

## 종합 (5 arm × 4page × 3run = 60셀)

| arm | 네이밍 | 설명 | 오용률 | 오용/사용 | slot | intent | fg/text | halluc. |
|---|---|---|---|---|---|---|---|---|
| **INV** | slot-first (셀 E 토큰) | ✓ | **0.34%** | 7 / 2082 | 7 | 0 | 0 | 0 |
| **E+** | intent-first | ✓ | **0.37%** | 7 / 1910 | 7 | 0 | 0 | 0 |
| **ES** | intent-first (step 어휘 변경) | ✓ | **0.47%** | 10 / 2131 | 9 | 1 | 0 | 0 |
| **PF** | property-first | ✗ | **0.85%** | 17 / 2006 | 12 | 0 | 5 | 0 |
| **E−** | intent-first | ✗ | **1.70%** | 39 / 2300 | 38 | 1 | 0 | 0 |

## 두 가지 격리 결과

### ① 설명 효과 (E− vs E+, intent-first 고정) — **결정적**
**E− 1.70% → E+ 0.37%, 약 4.6× 감소.** 설명 유무만 다르고 토큰·순서·styled-system 동일.
- E−의 오용은 거의 전부 **`neutral.surface.*`를 레이아웃 배경(카드·컨테이너·테이블)에 사용 → `canvas` 정답**. 설명이 없으니 모델이 **canvas(레이아웃 레이어) vs surface(컴포넌트)** 구분을 못 함. EN dashboard run1 한 셀에 15건(카드 8 + 테이블 3 + 토글패널 등)이 이 한 패턴.
- → intent-first의 canvas 레이어 체계는 **설명 없으면 최악의 함정, 설명 있으면 최고**(아래 ③).

### ② 순서 효과 (E+ vs INV, 설명·토큰 고정) — **미미**
**E+ 0.37% ≈ INV 0.34%** (동일 셀 E 토큰을 `{intent}.{slot}` ↔ `{slot}.{intent}` 순서만 반전). 거의 차이 없음 → **설명이 있으면 토큰 경로의 슬롯/인텐트 순서는 오용률에 거의 영향 없음.** 잔존 패턴도 양쪽 동일(border-as-divider, 토글 knob inverse).

### ②′ step 어휘 효과 (E+ vs ES, 설명·토큰·순서 고정) — **미미**
**E+ 0.37% ≈ ES 0.47%** (동일 셀 E 토큰에서 step 단어만 `base/high/highest/low/lowest` → `default/strongest/emphasis/subtle/muted`로 교체). 통계적 동률 — 차이 3건(ES dashboard run1 3건 등)은 런간 노이즈 수준이며 slot 9·intent 1로 패턴도 E+와 동질. → **설명이 있으면 step 축 어휘 선택(base-계열 vs default-계열)도 오용률에 거의 영향 없음.** ②(순서)와 함께, 설명이 지배 변수일 때 네이밍 표면(순서·step 어휘)은 부차적임을 재확인.

### ③ 설계 함의 (PF 대비)
- 설명 없는 셋 중: **E− 1.70% > PF 0.85%**. property-first는 canvas/surface 구분이 없어(레이아웃·컴포넌트 모두 `surface.neutral.*`) **그 실수를 할 수조차 없음** → 표현력이 낮아 역설적으로 안전.
- 설명 있는 intent/slot-first(E+·INV 0.3%대) < PF 0.85% < 설명 없는 intent-first(E− 1.70%).
- **결론: 토큰 체계의 표현력(canvas 레이어)은 설명과 짝이어야 가치. 설명이 오용률의 지배 변수, 순서는 거의 무관.**

## 잔존 오용 패턴
- **E+ (7)**: border-as-divider 4 + 토글 knob inverse 2 + fill→border 1.
- **INV (7)**: border-as-divider(세로 구분선) 3 + settings 토글 knob/구분선 4. (E+와 동일 계열)
- **PF (17)**: slot 12(border→bg 등) + fg/text 5.
- **E− (39)**: surface→canvas 레이어 혼동이 대부분(설명 부재). dashboard run1 15·settings run1/2 7/6에 집중.

## 타입검증 (환각)
- 4 arm 모두 **hallucination 0**. `npx tsc --noEmit`: TS1117 3건(EN notif run2·IV dashboard run3·PF dashboard run1 = css() 중복 키, 크래시 아님·측정 외).

## 라운드 진행 기록 (intent-first E+)
raw step-strict 2.69% → step-free 0.98% → 컴포넌트 토큰 0.86% → Tier2 neutral.fill 0.64% → fill.high desc 정정 0.37%.

## 재현 메모
- 결과 JSON: `eval/results/{E,EN,IV,PF}_{page}_run{n}.json` (48). 워크플로우 `ds-token-arms-EN-IV`(EN·IV 24셀).
- styled-system: E+/E− = `styled-system-intent-first`(공유), INV = `styled-system-intent-first-slotfirst`(셀 E 값을 slot-first 이름으로, `mildang` 자동 변환), PF = `styled-system-property-first`.
- 라우트: intent-first(E+)·e-nodesc(E−)·inverse-desc(INV)·property-first(PF). 토큰목록 `tokens-{intent-first-desc, intent-first-nodesc, intent-first-inverse-desc, property-first-nodesc}.md`.
- 집계 `node eval/_rebuild.mjs`(4-arm), 스샷 `node eval/_shot.mjs`(48장), 뷰어 `eval/viewer/index.html`.
