# 토큰 ergonomics 테스트 프롬프트 — Settings 페이지

대시보드 테스트에서 다루지 않은 토큰을 집중 커버한다:
- 메인 컬러 계열 surface/border/text (구독 플랜 카드)
- info 계열 채움/배경 (안내 배너)
- focusRing (입력 포커스 상태)
- 입력 오류·성공·비활성 상태
- 체크박스 계열 색상

각 arm은 **각각 별개의 새 대화**(컨텍스트 격리)에서 실행한다. UI 스펙 본문은 두 arm이 공유하고, arm은 import 경로·출력 경로·토큰 레퍼런스 전달만 다르다.

---

## 공유 UI 스펙
→ `eval/inputs/spec-settings.md` 전체를 그대로 붙여넣는다.

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
출력:         src/app/intent-first/settings/run{n}/page.tsx
토큰 레퍼런스: eval/inputs/tokens-intent-first-desc.md (이름 + 설명) 전체 첨부
```

## arm: 비교군 = property-first (이름만)
```
CSS import:   @ds-token-test/styled-system-property-first/css
출력:         src/app/property-first/settings/run{n}/page.tsx
토큰 레퍼런스: eval/inputs/tokens-property-first-nodesc.md (이름만, 설명 없음 = 자동완성 동등)
```

---

## 평가 기준

| 항목 | 확인 방법 |
|------|-----------|
| **정확도** — 의미에 맞는 시맨틱 토큰을 맞는 자리에 썼는가 | 코드 리뷰 |
| **완성도** — 색상이 빠진 자리(하드코딩, 빈 값)가 있는가 | 코드 리뷰 |
| **추론 오류** — 없는 토큰을 지어냈는가 | `pnpm check-types` |
| **커버리지** — 각 시스템에서 커버한 토큰 종류 수 | 코드 리뷰 |
| **시각적 동일성** — 두 페이지가 같아 보이는가 | 브라우저 나란히 비교 |

대시보드 대비 추가로 검증하는 토큰:

| property-first | intent-first 대응 |
|---|---|
| `surface.brand.*` | `primary.surface.*` |
| `border.brand.*` | `primary.border.*` |
| `text.brand.default` | `primary.text.base` |
| `icon.brand.*` | `primary.icon.*` |
| `fill.info` | `info.fill.base`|
| `surface.info.*` | `info.surface.*` |
| `border.info.*` | `info.border.*` |
| `focusRing.default` | `focus.border` |
| `border.positive.*` | `positive.border.*` |
| `surface.positive.*` (입력 성공) | `positive.surface.*` |
| `text.neutral.subtle` (helper text) | `neutral.text.lowest` |

### intent 정답표 (채점 기준 — spec-settings.md 근거)

상태 뱃지·요소의 **의미 계열(intent)** 정답. 채점 시 이 표를 기준으로 intent mismatch를 판정한다. (slot/step은 자유, **계열만** 평가. primary = property-first의 brand 계열.)

| 요소 | 정답 intent | spec 근거 | 혼동 주의 |
|---|---|---|---|
| 메뉴 활성(프로필)·아바타·저장 버튼·현재 플랜 박스·켜진 토글·세션①·체크됨 체크박스·업그레이드 버튼 | **primary** | L12·L35·L51·L60~63·L111·L118~120·L142·L70 "브랜드 계열" | — |
| 메뉴 "위험 구역"·세션 "종료" 버튼·위험 구역 카드·비활성화·영구 삭제 버튼 | **critical** | L16·L124·L159~161·L167·L171 "심각한/파괴적 계열" | — |
| 카드2 안내 배너 | **info** | L65~67 "일반 안내 계열" | ⚠ 브랜드 위주 페이지라도 안내 = **info** |
| 새 비밀번호 포커스 테두리·링 | **primary** (focus) | L84 "브랜드 계열 + 포커스 링" | focus.border/focusRing |
| 비밀번호 확인 오류 | **critical** | L88·L90 "심각한 계열" | — |
| 새 이메일 성공 | **positive** | L93·L95 "정상 완료 계열" | — |
| 카드5 상단 주의 배너 | **warning** | L135·L137 "주의 계열" | — |
| 카드4 ShieldCheck 아이콘·"활성화됨" 뱃지 | **positive** | L110·L112 "완료/정상 계열" | ⚠ 같은 행 토글은 primary — 아이콘·뱃지만 **positive** |
| 비활성 입력(전화번호·사용자 ID)·필수 체크박스(비활성) | **neutral** (opacity↓) | L43·L98·L144 "조작 불가" | ⚠ 전용 disabled 색 아님 = **neutral 기반 opacity 낮춤** |
| 일반 입력 테두리·취소/중립 버튼·helper text·세션② 배경 | **neutral** | L41·L42·L44·L48·L52·L122 | — |

> 핵심: 비활성(전화번호·사용자 ID·필수 체크박스)은 **전용 disabled 색이 아니라 neutral + opacity 낮춤**(intent=neutral). 카드4 ShieldCheck·"활성화됨" 뱃지 = **positive**지만 같은 행 토글 = **primary**(한 행에 두 계열). 안내 배너 = **info**(브랜드 아님). 포커스 링 = **primary**(focus).

### 레이아웃 layer 정답 (intent-first 전용 감사 — canvas 계층)

intent-first는 레이아웃 배경을 컴포넌트 표면(`neutral.surface.*`)과 **분리된 `neutral.canvas.01~03` layer 토큰**으로 둔다. 레이아웃 요소가 이 layer 계층을 깊이 순서대로 올바르게 썼는지 감사한다.
**property-first엔 canvas 개념이 없어**(레이아웃·컴포넌트 배경 모두 `surface.neutral.*`) **이 항목은 intent-first만 평가**한다.

| 레이아웃 요소 | 정답 layer (intent-first) | spec 근거 / 토큰 desc |
|---|---|---|
| 오른쪽 콘텐츠 영역 배경 (가장 밑바탕) | `neutral.canvas.01` | L21 "가장 연한 중립 계열" / "기본 도화지" |
| 왼쪽 설정 메뉴 (가장 연한 중립) | `neutral.canvas.01` | L8 "가장 연한 중립 계열" |
| 카드 1~6 컨테이너 (흰색/밝은 배경 카드) | `neutral.canvas.02` | L32 등 "흰색 카드" / "독립 정보 블록 컨테이너" |
| 카드 안의 중립 연한 박스 (세션② 등) | `neutral.canvas.03` 또는 `neutral.surface.base` | L122 "중립 연한 배경" (카드 위 얹힌 깊이) |

> 감사 포인트 (★layer 규칙 2026-06-14 개정 — **step-free**):
> - **layer 정답 = canvas 계열(`neutral.canvas.*`) 사용 여부만 평가.** 정확한 step(01/02/03)은 **자유** — canvas.01↔02↔03 깊이 step 불일치는 **오용 아님**. 위 표의 layer 값은 참고 step일 뿐 정밀도는 채점하지 않는다.
> - 레이아웃 배경에 canvas가 아닌 토큰(`neutral.surface.*`·`neutral.fill.*`·`neutral.border.*`)을 쓰면 **slot 오용**(= layer 계열 자체를 안 씀).
> - ⚠ 이 페이지의 **설정 메뉴는 라이트**(가장 연한 중립 = `canvas.01`) — billing·dashboard의 어두운 사이드바와 달리 `dark` 클래스가 **불필요**. 사이드바라고 무조건 dark 적용하면 오용.
> - 카드 안의 brand/critical "가장 연한 배경" 박스(현재 플랜·세션①·위험 구역 카드)는 layer가 아니라 해당 **intent surface**임에 주의(위 intent 표 참조).

채점 룰북: `eval/SCORING.md`.

---

## 실행 방법

1. 새 대화 열기 (컨텍스트 초기화)
2. `eval/inputs/spec-settings.md` + intent-first arm 블록(공통 생성 규칙 + 토큰 레퍼런스 `tokens-intent-first-desc.md`) 붙여넣기 → 생성된 코드를 `src/app/intent-first/settings/run{n}/page.tsx`에 저장
3. 새 대화 열기 (컨텍스트 초기화)
4. `eval/inputs/spec-settings.md` + property-first arm 블록(공통 생성 규칙 + 토큰 레퍼런스 `tokens-property-first-nodesc.md`) 붙여넣기 → 생성된 코드를 `src/app/property-first/settings/run{n}/page.tsx`에 저장
5. `pnpm check-types` — 타입 오류 확인 (없는 토큰 사용 여부)
6. 브라우저에서 `/intent-first/settings/run{n}`과 `/property-first/settings/run{n}` 나란히 비교
