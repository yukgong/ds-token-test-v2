# ds-token-test-v3 — 6-arm 비교 (SF · IF− · IFC · IF+ · IFS · INV) · step-free layer

> 2026-06-14~15. 동일 중립 스펙(4페이지: dashboard·billing·notifications·settings) × 3런. 생성·채점·검증 모두 **Sonnet 4.6**, 블라인드. raw 정규화 오용률(= 오용 ÷ 시맨틱 컬러 토큰 사용 총횟수). layer(canvas)는 **step-free**(canvas 계열 사용 여부만, 01/02/03 정밀도 미채점).
> IFS(2026-06-15) = 셀 IF와 토큰 구조·색상값·순서 100% 동일, **step 어휘만 교체**: `lowest→muted, low→subtle, base→default, high→strongest, highest→emphasis`.
> IFC(2026-06-15) = **IF−(이름만)에 canvas/surface/fill 구분 설명만** 상단 추가(나머지 토큰 목록은 이름만 유지). IF−의 지배적 실패(surface↔canvas 혼동)에 단일 힌트만 주면 얼마나 닫히는지 격리.

## 종합 (6 arm × 4page × 3run = 72셀)

| arm | 네이밍 | 설명 | 오용률 | 오용/사용 | slot | intent | fg/text | halluc. |
|---|---|---|---|---|---|---|---|---|
| **INV** | slot-first (셀 IF 토큰) | ✓ | **0.34%** | 7 / 2082 | 7 | 0 | 0 | 0 |
| **IF+** | intent-first | ✓ | **0.37%** | 7 / 1910 | 7 | 0 | 0 | 0 |
| **IFS** | intent-first (step 어휘 변경) | ✓ | **0.47%** | 10 / 2131 | 9 | 1 | 0 | 0 |
| **IFC** | intent-first 이름만 + canvas/surface 구분 설명만 | (부분) | **0.75%** | 16 / 2129 | 10 | 0 | 0 | 6 |
| **SF** | property-first | ✗ | **0.85%** | 17 / 2006 | 12 | 0 | 5 | 0 |
| **IF−** | intent-first | ✗ | **1.70%** | 39 / 2300 | 38 | 1 | 0 | 0 |

## 두 가지 격리 결과

### ① 설명 효과 (IF− vs IF+, intent-first 고정) — **결정적**
**IF− 1.70% → IF+ 0.37%, 약 4.6× 감소.** 설명 유무만 다르고 토큰·순서·styled-system 동일.
- IF−의 오용은 거의 전부 **`neutral.surface.*`를 레이아웃 배경(카드·컨테이너·테이블)에 사용 → `canvas` 정답**. 설명이 없으니 모델이 **canvas(레이아웃 레이어) vs surface(컴포넌트)** 구분을 못 함. EN dashboard run1 한 셀에 15건(카드 8 + 테이블 3 + 토글패널 등)이 이 한 패턴.
- → intent-first의 canvas 레이어 체계는 **설명 없으면 최악의 함정, 설명 있으면 최고**(아래 ③).

### ② 순서 효과 (IF+ vs INV, 설명·토큰 고정) — **미미**
**IF+ 0.37% ≈ INV 0.34%** (동일 셀 IF 토큰을 `{intent}.{slot}` ↔ `{slot}.{intent}` 순서만 반전). 거의 차이 없음 → **설명이 있으면 토큰 경로의 슬롯/인텐트 순서는 오용률에 거의 영향 없음.** 잔존 패턴도 양쪽 동일(border-as-divider, 토글 knob inverse).

### ④ canvas/surface 단일 힌트 효과 (IF− vs IFC) — **큰 폭 개선, 단 부작용**
**IF− 1.70% → IFC 0.75% (약 2.3× 감소).** IF−에서 **canvas/surface/fill 구분 설명 한 단락만** 추가했더니, IF−의 지배적 실패였던 **surface→canvas 레이아웃 배경 혼동이 사실상 소멸**(IFC의 잔존 slot 10건은 거의 전부 토글 knob·세로 구분선 backgroundColor로 IF+/INV와 공유하는 커버리지성 잔여, canvas/surface 레이어 혼동 아님). → **IF−의 1.70%는 거의 전부 'canvas vs surface를 모름' 한 가지 원인이었음**이 단일 힌트로 입증됨.
- **단, 부작용:** IFC에서 **환각 6건 발생**(settings run1·run3의 `primary.canvas.01`·`critical.canvas.01`). canvas 힌트("구조 컨테이너 배경=canvas")를 **색상 인텐트 컨테이너(Pro 플랜 박스·위험 구역)에 과확장**해 `primary.canvas`/`critical.canvas`를 발명 — canvas는 neutral 전용인데 힌트가 그 경계를 명시하지 않은 탓. IF+의 전체 토큰 목록·per-token 설명은 이 실수를 막음(그래서 IF+ 0.37% < IFC 0.75%).
- → **단일 힌트로 지배적 실패의 ~65%를 닫지만, 부분 설명은 새 과확장 환각을 유발.** 완전한 per-token 설명(IF+)이 여전히 우위.

### ②′ step 어휘 효과 (IF+ vs IFS, 설명·토큰·순서 고정) — **미미**
**IF+ 0.37% ≈ IFS 0.47%** (동일 셀 IF 토큰에서 step 단어만 `base/high/highest/low/lowest` → `default/strongest/emphasis/subtle/muted`로 교체). 통계적 동률 — 차이 3건(IFS dashboard run1 3건 등)은 런간 노이즈 수준이며 slot 9·intent 1로 패턴도 IF+와 동질. → **설명이 있으면 step 축 어휘 선택(base-계열 vs default-계열)도 오용률에 거의 영향 없음.** ②(순서)와 함께, 설명이 지배 변수일 때 네이밍 표면(순서·step 어휘)은 부차적임을 재확인.

### ③ 설계 함의 (SF 대비)
- 설명 없는 셋 중: **IF− 1.70% > SF 0.85%**. property-first는 canvas/surface 구분이 없어(레이아웃·컴포넌트 모두 `surface.neutral.*`) **그 실수를 할 수조차 없음** → 표현력이 낮아 역설적으로 안전.
- 설명 있는 intent/slot-first(IF+·INV 0.3%대) < SF 0.85% < 설명 없는 intent-first(IF− 1.70%).
- **결론: 토큰 체계의 표현력(canvas 레이어)은 설명과 짝이어야 가치. 설명이 오용률의 지배 변수, 순서는 거의 무관.**

## 잔존 오용 패턴
- **IF+ (7)**: border-as-divider 4 + 토글 knob inverse 2 + fill→border 1.
- **INV (7)**: border-as-divider(세로 구분선) 3 + settings 토글 knob/구분선 4. (IF+와 동일 계열)
- **SF (17)**: slot 12(border→bg 등) + fg/text 5.
- **IF− (39)**: surface→canvas 레이어 혼동이 대부분(설명 부재). dashboard run1 15·settings run1/2 7/6에 집중.

## 타입검증 (환각)
- 4 arm 모두 **hallucination 0**. `npx tsc --noEmit`: TS1117 3건(EN notif run2·IV dashboard run3·SF dashboard run1 = css() 중복 키, 크래시 아님·측정 외).

## 라운드 진행 기록 (intent-first IF+)
raw step-strict 2.69% → step-free 0.98% → 컴포넌트 토큰 0.86% → Tier2 neutral.fill 0.64% → fill.high desc 정정 0.37%.

## 재현 메모
- 결과 JSON: `eval/results/{E,EN,IV,SF}_{page}_run{n}.json` (48). 워크플로우 `ds-token-arms-EN-IV`(EN·IV 24셀).
- styled-system: IF+/IF− = `styled-system-intent-first`(공유), INV = `styled-system-intent-first-slotfirst`(셀 IF 값을 slot-first 이름으로, `mildang` 자동 변환), SF = `styled-system-property-first`.
- 라우트: intent-first(IF+)·e-nodesc(IF−)·inverse-desc(INV)·property-first(SF). 토큰목록 `tokens-{intent-first-desc, intent-first-nodesc, intent-first-inverse-desc, property-first-nodesc}.md`.
- 집계 `node eval/_rebuild.mjs`(4-arm), 스샷 `node eval/_shot.mjs`(48장), 뷰어 `eval/viewer/index.html`.
