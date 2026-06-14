# 토큰 ergonomics 테스트 프롬프트 — 서비스 모니터링 대시보드

각 arm은 **각각 별개의 새 대화**(컨텍스트 격리)에서 실행한다. UI 스펙 본문은 두 arm이 공유하고, arm은 import 경로·출력 경로·토큰 레퍼런스 전달만 다르다.

---

## 공유 UI 스펙
→ `eval/inputs/spec-dashboard.md` 전체를 그대로 붙여넣는다.

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
출력:         src/app/intent-first/dashboard/run{n}/page.tsx
토큰 레퍼런스: eval/inputs/tokens-intent-first-desc.md (이름 + 설명) 전체 첨부
```

## arm: 비교군 = property-first (이름만)
```
CSS import:   @ds-token-test/styled-system-property-first/css
출력:         src/app/property-first/dashboard/run{n}/page.tsx
토큰 레퍼런스: eval/inputs/tokens-property-first-nodesc.md (이름만, 설명 없음 = 자동완성 동등)
```

---

## 평가 기준

| 항목 | 확인 방법 |
|------|-----------|
| **정확도** — 의미에 맞는 시맨틱 토큰을 맞는 자리에 썼는가 | 코드 리뷰 |
| **완성도** — 색상이 빠진 자리(하드코딩, 빈 값)가 있는가 | 코드 리뷰 |
| **추론 오류** — 없는 토큰을 지어냈는가 | `pnpm check-types` |
| **시각적 동일성** — 두 페이지가 같아 보이는가 | 브라우저 나란히 비교 |

### intent 정답표 (채점 기준 — spec-dashboard.md 근거)

상태 뱃지·요소의 **의미 계열(intent)** 정답. 채점 시 이 표를 기준으로 intent mismatch를 판정한다. (slot/step은 자유, **계열만** 평가. primary = property-first의 brand 계열.)

| 요소 | 정답 intent | spec 근거 | 혼동 주의 |
|---|---|---|---|
| 토스트 ①·하단카드① (배포 완료) | **positive** | L40·L112 "정상 완료 계열" | — |
| 토스트 ②·하단카드② (연결/DB 실패) | **critical** | L41·L114 "심각한 계열" | — |
| 토스트 ③ (시스템 점검 안내) | **info** | L42 "중립적인 일반 안내" | ⚠ "중립적" 표현에 끌려 neutral 금지 = **info** |
| 하단카드③ (용량 경고) | **warning** | L116 "주의가 필요한 상태" | — |
| 통계카드 ① 총 사용자 +12% | **positive** | L48 "좋은 변화" | — |
| 통계카드 ② 결제 실패 +3건 | **critical** | L49 "문제 상황" | — |
| 통계카드 ③ 응답시간 142ms −8% | **positive** | L50 "좋은 변화" | ⚠ "−8%" 음수라고 critical 아님, 응답시간 감소=좋음=**positive** |
| 통계카드 ④ 미처리 민원 +2건 | **warning** | L51 "주의 필요" | — |
| 리소스 바 CPU 42% / 메모리 78% / 디스크 91% | **positive / warning / critical** | L58·L59·L60 | 단계별 계열 구분 |
| 상태열 정상 처리됨·회원가입 | **positive** | L88·L91 | — |
| 상태열 문제 발생(결제 실패) | **critical** | L89 | — |
| 상태열 주의 필요(비번 오류·응답 지연) | **warning** | L90·L92 | — |
| 알림 뱃지(Bell "3") | **critical** | L30 "문제 발생을 나타내는 색상" | — |
| 로그아웃 (LogOut) | **critical** | L16 "파괴적 액션 계열" | — |
| "새 배포" 버튼·프로필 아바타·태그"전체"·토글 켜짐 | **primary** | L33·L34·L74·L101 "메인 컬러" | — |
| 검색 인풋 포커스 테두리·링 | **primary** (focus) | L83 "메인 컬러 테두리 + 포커스 링" | focus.border/focusRing |
| 오류 상태 인풋 | **critical** | L84 "문제를 나타내는 색상" | — |
| 툴팁 (배경+텍스트) | **inverse** | L29·L36 "어두운 배경 + 대비 밝은 텍스트(반전)" | ⚠ neutral surface 아님 = **inverse** |
| 토글 꺼짐(보안)·빈 부분 바·이벤트행 아바타 | **neutral** | L103·L62·L94 | — |

> 핵심: 토스트 ③ "중립적 일반 안내" = **info**(neutral 아님). 통계 응답시간 **−8% = positive**(좋은 변화 — 음수 함정). 툴팁 = **inverse**(neutral surface 아님). 리소스 바 42/78/91% = **positive/warning/critical**.

### 레이아웃 layer 정답 (intent-first 전용 감사 — canvas 계층)

intent-first는 레이아웃 배경을 컴포넌트 표면(`neutral.surface.*`)과 **분리된 `neutral.canvas.01~03` layer 토큰**으로 둔다. 레이아웃 요소가 이 layer 계층을 깊이 순서대로 올바르게 썼는지 감사한다.
**property-first엔 canvas 개념이 없어**(레이아웃·컴포넌트 배경 모두 `surface.neutral.*`) **이 항목은 intent-first만 평가**한다.

| 레이아웃 요소 | 정답 layer (intent-first) | spec 근거 / 토큰 desc |
|---|---|---|
| 메인 콘텐츠 배경 (가장 밑바탕) | `neutral.canvas.01` | L19 "가장 연한 중립 계열" / "기본 도화지" |
| 상단 헤더 바 (밝은 배경 + 하단 테두리) | `neutral.canvas.01`(헤더=밑바탕) 또는 `02` | L22 (desc: 헤더는 canvas.01 예시) |
| 통계·리소스·알림·토글 카드 컨테이너 | `neutral.canvas.02` | L47 "흰색 카드" / "독립 정보 블록 컨테이너" |
| 테이블 헤더 행·짝수 행 줄무늬 (얹힌 면 구분) | `neutral.canvas.03` | L65·L97 "줄무늬 구분" / "canvas 02 위 깊이" |
| 어두운 사이드바 | `dark` 클래스 국소 적용 + `neutral.canvas.*` | L7 "어두운 solid 계열" (국소 테마 교체) |

> 감사 포인트 (★layer 규칙 2026-06-14 개정 — **step-free**):
> - **layer 정답 = canvas 계열(`neutral.canvas.*`) 사용 여부만 평가.** 정확한 step(01/02/03)은 **자유** — canvas.01↔02↔03 깊이 step 불일치는 **오용 아님**(스펙·desc가 step을 모호하게 지시 → step 정밀도를 채점하면 프롬프트 모호성을 측정하게 됨). 위 표의 layer 값은 참고 step일 뿐 정밀도는 채점하지 않는다.
> - 레이아웃 배경에 canvas가 아닌 토큰(`neutral.surface.*`·`neutral.fill.*`·`neutral.border.*`)을 쓰면 **slot 오용**(= layer 계열 자체를 안 씀).
> - **어두운 사이드바를 `dark` 클래스 없이 라이트로 렌더하면 오용 유지**(테마 적용 실패 = step 문제와 별개의 실재 결함). 툴팁의 반전 배경도 마찬가지 — 어두워야 할 곳이 라이트면 오용(layer 아닌 **inverse/dark** 소관, 위 intent 표 참조).

채점 룰북: `eval/SCORING.md`.

---

## 실행 방법

1. 새 대화 열기 (컨텍스트 초기화)
2. `eval/inputs/spec-dashboard.md` + intent-first arm 블록(공통 생성 규칙 + 토큰 레퍼런스 `tokens-intent-first-desc.md`) 붙여넣기 → 생성된 코드를 `src/app/intent-first/dashboard/run{n}/page.tsx`에 저장
3. 새 대화 열기 (컨텍스트 초기화)
4. `eval/inputs/spec-dashboard.md` + property-first arm 블록(공통 생성 규칙 + 토큰 레퍼런스 `tokens-property-first-nodesc.md`) 붙여넣기 → 생성된 코드를 `src/app/property-first/dashboard/run{n}/page.tsx`에 저장
5. `pnpm check-types` — 타입 오류 확인 (없는 토큰 사용 여부)
6. 브라우저에서 `/intent-first/dashboard/run{n}`과 `/property-first/dashboard/run{n}` 나란히 비교
