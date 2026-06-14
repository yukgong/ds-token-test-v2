# 토큰 ergonomics 테스트 프롬프트 — 알림 센터 페이지

이 테스트의 목적: 5가지 의미 역할(완료/오류/주의/안내/메인 컬러)을 **같은 카드 구조**에 반복 적용해 AI가 일관되게 시맨틱 토큰을 매핑하는지 검증.
추가 커버: 읽음/안읽음 상태, overlay, 상태별 요약 카운터 카드.

각 arm은 **각각 별개의 새 대화**(컨텍스트 격리)에서 실행한다. UI 스펙 본문은 두 arm이 공유하고, arm은 import 경로·출력 경로·토큰 레퍼런스 전달만 다르다.

---

## 공유 UI 스펙
→ `eval/inputs/spec-notifications.md` 전체를 그대로 붙여넣는다.

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
출력:         src/app/intent-first/notifications/run{n}/page.tsx
토큰 레퍼런스: eval/inputs/tokens-intent-first-desc.md (이름 + 설명) 전체 첨부
```

## arm: 비교군 = property-first (이름만)
```
CSS import:   @ds-token-test/styled-system-property-first/css
출력:         src/app/property-first/notifications/run{n}/page.tsx
토큰 레퍼런스: eval/inputs/tokens-property-first-nodesc.md (이름만, 설명 없음 = 자동완성 동등)
```

---

## 평가 기준

| 항목 | 확인 방법 |
|------|-----------|
| **일관성** — 같은 구조(카드)에 5가지 역할을 일관되게 적용했는가 | 코드 리뷰 |
| **읽음/안읽음 구분** — 배경 색상으로 상태를 올바르게 표현했는가 | 코드 리뷰 |
| **정확도** — 의미에 맞는 시맨틱 토큰을 맞는 자리에 썼는가 | 코드 리뷰 |
| **추론 오류** — 없는 토큰을 지어냈는가 | `pnpm check-types` |
| **시각적 동일성** — 두 페이지가 같아 보이는가 | 브라우저 나란히 비교 |

이 테스트에서 집중 검증하는 토큰:

| property-first | intent-first 대응 |
|---|---|
| `surface.brand.subtle` (읽지 않음 배경) | `primary.surface.base` |
| 왼쪽 강조선 `fill.positive/critical/warning/info/brand` | `positive/critical/warning/info/primary.fill.base` |
| `icon.*.default` (각 역할) | `*.icon.base` |
| `surface.*.subtle` + `border.*.subtle` + `text.*.default` (뱃지) | `*.surface.base` + `*.border.base` + `*.text.lowest` |
| 읽음 상태 강조선 (subtle fill) | 같은 계열의 low 단계 |

### intent 정답표 (채점 기준 — spec-notifications.md 근거)

상태 뱃지·요소의 **의미 계열(intent)** 정답. 채점 시 이 표를 기준으로 intent mismatch를 판정한다. (slot/step은 자유, **계열만** 평가. primary = property-first의 brand 계열.)

| 요소 | 정답 intent | spec 근거 | 혼동 주의 |
|---|---|---|---|
| 알림① 강조선·아이콘·"완료됨" 뱃지 | **positive** | L55·L57·L61 "완료 계열" | — |
| 알림② 강조선·아이콘·"즉시 확인" 뱃지 | **critical** | L65·L67·L71 "심각한 계열" | — |
| 알림③ 강조선·아이콘·"주의" 뱃지 | **warning** | L75·L77·L81 "주의 계열" | — |
| 알림④ 강조선·아이콘·"안내" 뱃지 (읽지 않음) | **info** | L85·L87·L91 "안내 계열" | — |
| 알림⑤ 강조선·아이콘·"새 기능" 뱃지 | **primary** | L95·L97·L101 "메인 컬러 계열" | ⚠ "새 기능"=메인컬러=**primary**, info/positive 아님 |
| 읽지 않음 카드 배경 (알림①~⑤) | **primary** | L45·L56 "메인 컬러 계열 가장 연한" | ⚠ neutral 아님 = **primary** |
| 읽음 카드 배경 (알림⑥~⑧) | **neutral** | L45·L106 "기본 밝은 배경" | — |
| 알림⑦(읽음) "처리됨" 뱃지 | **neutral** | L121 "중립 계열" | ⚠ 강조선/아이콘은 warning이나 **뱃지는 neutral**(읽음=중립화) |
| 알림⑧(읽음) "안내" 뱃지 | **neutral** | L131 "중립 계열" | ⚠⚠ 알림④의 "안내" 뱃지=info인데 읽음인 ⑧은 **neutral**. 같은 단어 다른 정답 |
| 알림⑥·⑦(읽음) 강조선·아이콘 | 각 **positive / warning** | L105·L107·L115·L117 | ⚠ 읽음 약화는 색 계열 교체 아닌 **opacity** |
| 카운터 카드 읽지 않음 / 오류 / 주의 | **primary / critical / warning** | L24·L25·L26 | — |
| 활성 탭·카테고리 "전체" | **primary** | L15·L31 "메인 컬러 계열" | — |
| 빈 상태 카드 | **neutral** | L135 "중립 계열" | — |

> 핵심: 읽지 않음 배경 = **primary**(메인컬러), 읽음 배경 = **neutral**. **읽음 카드 상태 뱃지(⑦·⑧) = neutral** — 강조선의 warning/info와 별개, 읽음=중립화. 알림⑤ "새 기능" = **primary**. 읽음 약화는 색 교체 아닌 **opacity**.

### 레이아웃 layer 정답 (intent-first 전용 감사 — canvas 계층)

intent-first는 레이아웃 배경을 컴포넌트 표면(`neutral.surface.*`)과 **분리된 `neutral.canvas.01~03` layer 토큰**으로 둔다. 레이아웃 요소가 이 layer 계층을 깊이 순서대로 올바르게 썼는지 감사한다.
**property-first엔 canvas 개념이 없어**(레이아웃·컴포넌트 배경 모두 `surface.neutral.*`) **이 항목은 intent-first만 평가**한다.

| 레이아웃 요소 | 정답 layer (intent-first) | spec 근거 / 토큰 desc |
|---|---|---|
| 오른쪽 알림 목록 배경 (가장 밑바탕) | `neutral.canvas.01` | L41 "가장 연한 중립 계열" / "기본 도화지" |
| 상단 헤더 바 (밝은 배경 + 하단 테두리) | `neutral.canvas.01`(헤더=밑바탕) 또는 `02` | L9 (desc: 헤더는 canvas.01 예시) |
| 왼쪽 필터 사이드바 (가장 연한 중립) | `neutral.canvas.01` | L21 "가장 연한 중립 배경" |
| 카운터 카드·알림 카드·빈상태 카드 컨테이너 | `neutral.canvas.02` | L23·L43·L135 "독립 정보 블록 컨테이너" |

> 감사 포인트 (★layer 규칙 2026-06-14 개정 — **step-free**):
> - **layer 정답 = canvas 계열(`neutral.canvas.*`) 사용 여부만 평가.** 정확한 step(01/02/03)은 **자유** — canvas.01↔02↔03 깊이 step 불일치는 **오용 아님**. 위 표의 layer 값은 참고 step일 뿐 정밀도는 채점하지 않는다.
> - 레이아웃 배경에 canvas가 아닌 토큰(`neutral.surface.*`·`neutral.fill.*`·`neutral.border.*`)을 쓰면 **slot 오용**(= layer 계열 자체를 안 씀).
> - ⚠ 이 페이지의 **필터 사이드바는 라이트**(가장 연한 중립 = `canvas.01`) — billing·dashboard의 어두운 사이드바와 달리 `dark` 클래스가 **불필요**. 사이드바라고 무조건 dark 적용하면 오용.
> - 읽지 않음 카드 배경은 layer(neutral)가 아니라 **primary surface**임에 주의(위 intent 표 참조).

채점 룰북: `eval/SCORING.md`.

---

## 실행 방법

1. 새 대화 열기 (컨텍스트 초기화)
2. `eval/inputs/spec-notifications.md` + intent-first arm 블록(공통 생성 규칙 + 토큰 레퍼런스 `tokens-intent-first-desc.md`) 붙여넣기 → 생성된 코드를 `src/app/intent-first/notifications/run{n}/page.tsx`에 저장
3. 새 대화 열기 (컨텍스트 초기화)
4. `eval/inputs/spec-notifications.md` + property-first arm 블록(공통 생성 규칙 + 토큰 레퍼런스 `tokens-property-first-nodesc.md`) 붙여넣기 → 생성된 코드를 `src/app/property-first/notifications/run{n}/page.tsx`에 저장
5. `pnpm check-types` — 타입 오류 확인 (없는 토큰 사용 여부)
6. 브라우저에서 `/intent-first/notifications/run{n}`과 `/property-first/notifications/run{n}` 나란히 비교
