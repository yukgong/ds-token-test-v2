# 토큰 ergonomics 테스트 프롬프트 — 결제/플랜 비교 페이지

이 테스트의 목적: 메인 컬러를 플랜 카드 강조에 집중 사용하고, 결제 내역 테이블의 상태 뱃지(완료/실패/처리중)로 positive/critical/warning 계열을 반복 검증.

각 arm은 **각각 별개의 새 대화**(컨텍스트 격리)에서 실행한다. UI 스펙 본문은 두 arm이 공유하고, arm은 import 경로·출력 경로·토큰 레퍼런스 전달만 다르다.

---

## 공유 UI 스펙
→ `eval/inputs/spec-billing.md` 전체를 그대로 붙여넣는다.

공통 생성 규칙:
```
아래 스펙대로 {출력 경로} 를 만들어줘.

아이콘:       lucide-react
컴포넌트:     @ark-ui/react (필요한 것만 골라 써)

PandaCSS css() 함수로만 스타일링하고 인라인 style은 쓰지 마.
'use client' 없이 서버 컴포넌트로 작성해.
문법적으로 유효한 TSX만 출력해.
목록에 없는 토큰을 지어내면 오류다(없는 토큰 사용 금지).
```

---

## arm: intent-first (이름 + 설명)
```
CSS import:   @ds-token-test/styled-system-intent-first/css
출력:         src/app/intent-first/billing/run{n}/page.tsx
토큰 레퍼런스: eval/inputs/tokens-intent-first-desc.md (이름 + 설명) 전체 첨부
```

## arm: 비교군 = property-first (이름만)
```
CSS import:   @ds-token-test/styled-system-property-first/css
출력:         src/app/property-first/billing/run{n}/page.tsx
토큰 레퍼런스: eval/inputs/tokens-property-first-nodesc.md (이름만, 설명 없음 = 자동완성 동등)
```

---

## 평가 기준

| 항목 | 확인 방법 |
|------|-----------|
| **메인 컬러 계열 깊이** — surface/border/text/icon/fill 모두 메인 컬러 계열로 일관되게 썼는가 | 코드 리뷰 |
| **정확도** — 의미에 맞는 시맨틱 토큰을 맞는 자리에 썼는가 | 코드 리뷰 |
| **완성도** — 색상이 빠진 자리(하드코딩, 빈 값)가 있는가 | 코드 리뷰 |
| **추론 오류** — 없는 토큰을 지어냈는가 | `pnpm check-types` |
| **시각적 동일성** — 두 페이지가 같아 보이는가 | 브라우저 나란히 비교 |

이 테스트에서 집중 검증하는 토큰:

| property-first | intent-first 대응 |
|---|---|
| `surface.brand.subtle` (Pro 카드 배경) | `primary.surface.base` |
| `border.brand.emphasis/strongest` (Pro 카드 테두리) | `primary.border.high/highest` |
| `text.brand.default` (Pro 플랜명, 가격) | `primary.text.base` |
| `icon.brand.default` (Pro 기능 체크 아이콘) | `primary.icon.base` |
| `fill.brand` (Pro 카드 상단 배너, 버튼) | `primary.fill.base` |
| `surface.critical.subtle` (미결제 카드, 실패 행) | `critical.surface.base` |
| `border.critical.subtle/default` (미결제 카드) | `critical.border.base/highest` |
| `text.critical.default` (미결제 금액) | `critical.text.base` |
| `surface.warning.subtle` + `border.warning.*` (만료 배너) | `warning.surface.base` + `warning.border.*` |
| `surface.info.subtle` + `border.info.*` (환불 뱃지) | `info.surface.base` + `info.border.*` |

### intent 정답표 (채점 기준 — spec-billing.md 근거)

상태 뱃지·요소의 **의미 계열(intent)** 정답. 채점 시 이 표를 기준으로 intent mismatch를 판정한다. (slot/step은 자유, **계열만** 평가)

| 요소 | 정답 intent | spec 근거 | 혼동 주의 |
|---|---|---|---|
| 결제 완료 / 유효 / 정상 결제 뱃지 | **positive** | L63·L80~89·L104 "완료 계열" | — |
| 결제 실패 / 미결제 뱃지 (채움) | **critical** | L83·L111 "심각한 계열 채움" | — |
| **처리 중 뱃지** | **warning** | L86 "**주의 계열** — 연한 배경+테두리+텍스트" | ⚠️ info(진행)·neutral 아님. **정답은 warning** |
| 환불 완료 / 예정 뱃지 | **info** | L87·L118 "안내 계열" | ⚠️ "완료"라도 positive 아님 = **info** |
| 만료 임박 경고 배너 | **warning** | L67 "주의 계열" | — |
| Pro 카드 전반(배경/테두리/플랜명/가격/배너/버튼) | **primary** | L31~41 "메인 컬러 계열" | — |
| Pro 카드 Check 아이콘 | **primary** | L39 "메인 컬러 계열 아이콘" | ⚠️ Free/Ent의 Check는 positive — **Pro만 primary** |
| Free / Enterprise Check 아이콘 | **positive** | L27·L48 "완료 계열" | — |
| 로그아웃 / 삭제 액션 | **critical** | L11·L64 "파괴적 액션 계열" | — |
| 미결제 금액 텍스트·아이콘(AlertCircle) | **critical** | L109·L110 "심각한 계열" | — |

> 핵심: **처리 중 = warning**(spec L86 명시). 진행 상태라고 info/neutral로 채점하면 오채점. 마찬가지로 **환불 완료 = info**(positive 아님), **Pro Check = primary**(positive 아님).

### 레이아웃 layer 정답 (intent-first 전용 감사 — canvas 계층)

intent-first는 레이아웃 배경을 컴포넌트 표면(`neutral.surface.*`)과 **분리된 `neutral.canvas.01~03` layer 토큰**으로 둔다. 레이아웃 요소가 이 layer 계층을 깊이 순서대로 올바르게 썼는지 감사한다.
**property-first엔 canvas 개념이 없어**(레이아웃·컴포넌트 배경 모두 `surface.neutral.*`) **이 항목은 intent-first만 평가**한다.

| 레이아웃 요소 | 정답 layer (intent-first) | spec 근거 / 토큰 desc |
|---|---|---|
| 페이지/메인 콘텐츠 배경 (가장 밑바탕) | `neutral.canvas.01` | L14 "가장 연한 중립 계열" / "전체 페이지 기본 도화지" |
| 카드·패널 컨테이너 (흰색 카드) | `neutral.canvas.02` | L23 "카드 흰색/밝은 배경" / "독립 정보 블록 컨테이너" |
| 카드 위 블록 · 결제 카드 아트 (한 단계 위) | `neutral.canvas.03` | L58 "카드 아트 중립 배경" / "canvas 02 위 최상위 깊이" |
| 테이블 헤더 / 짝수 행 (연한 면 구분) | `neutral.canvas.01` 또는 `03` | L76·L78 "가장 연한 중립" 면 구분 |
| 어두운 사이드바 | `dark` 클래스 국소 적용 + `neutral.canvas.*` | L8 "어두운 solid 계열" (국소 테마 교체) |

> 감사 포인트 (★layer 규칙 2026-06-14 개정 — **step-free**):
> - **layer 정답 = canvas 계열(`neutral.canvas.*`) 사용 여부만 평가.** 정확한 step(01/02/03)은 **자유** — canvas.01↔02↔03 깊이 step 불일치는 **오용 아님**(스펙·desc가 step을 모호하게 지시 → step 정밀도를 채점하면 프롬프트 모호성을 측정하게 됨). 위 표의 layer 값은 참고 step일 뿐 정밀도는 채점하지 않는다.
> - 레이아웃 배경에 canvas가 아닌 토큰(`neutral.surface.*`·`neutral.fill.*`·`neutral.border.*`)을 쓰면 **slot 오용**(= layer 계열 자체를 안 씀).
> - **어두운 사이드바를 `dark` 클래스 없이 라이트로 렌더하면 오용 유지**(테마 적용 실패 = step 문제와 별개의 실재 결함). canvas 토큰 선택 자체는 맞은 것.

채점 룰북: `eval/SCORING.md`.

---

## 실행 방법

1. 새 대화 열기 (컨텍스트 초기화)
2. `eval/inputs/spec-billing.md` + intent-first arm 블록(공통 생성 규칙 + 토큰 레퍼런스 `tokens-intent-first-desc.md`) 붙여넣기 → 생성된 코드를 `src/app/intent-first/billing/run{n}/page.tsx`에 저장
3. 새 대화 열기 (컨텍스트 초기화)
4. `eval/inputs/spec-billing.md` + property-first arm 블록(공통 생성 규칙 + 토큰 레퍼런스 `tokens-property-first-nodesc.md`) 붙여넣기 → 생성된 코드를 `src/app/property-first/billing/run{n}/page.tsx`에 저장
5. `pnpm check-types` — 타입 오류 확인 (없는 토큰 사용 여부)
6. 브라우저에서 `/intent-first/billing/run{n}`과 `/property-first/billing/run{n}` 나란히 비교
