# 채점 룰북 (NEW) — 토큰 명칭·설명 효과 격리 실험

> 출처: `rule-book-new/`. 기존 룰북은 `rule-book-old/`로 격리됨(이 실험엔 **미사용**).
> 평가 모델: **Claude Sonnet 4.6** (`claude-sonnet-4-6`).

## 0. 실험 가설

> **토큰 순서·구조를 바꾸지 않고도, 명칭을 다듬고 설명을 붙이면 AI 자동 생성 시 오용률이 줄어든다.**

기존 테스트는 순서(role↔slot) + 구조 + 어휘를 한꺼번에 바꿔 비교해 **교란**이 있었다. 본 실험은 변수를 분리한다.

## 1. 세 군 (3-arm)

| 셀 | 토큰셋 | 설명 제공 | styled-system |
|---|---|---|---|
| **B** | property-first 96개 (slot-first) | ✗ | `styled-system-property-first` |
| **E−** | intent-first 61개 | ✗ (이름만) | `styled-system-intent-first` |
| **E+** | intent-first 61개 (E−와 **동일**) | ✓ (이름+설명) | `styled-system-intent-first` |

**격리되는 효과**
- **E− vs E+** → *설명 효과* 순수 격리 (토큰셋·순서·구조 100% 동일, 설명 유무만 차이). ← 가설의 핵심
- **B vs E−** → *토큰 재설계 효과* (둘 다 설명 없음, 이름만).
- **B vs E+** → 합산 효과.

## 2. 채점 차원 (rule-book-new 반영)

각 생성 결과(`page.tsx`)에서 **시맨틱 컬러 토큰 사용처 전수**를 집계한 뒤 아래를 카운트한다.

| 차원 | 정의 | 검출 |
|---|---|---|
| **slot/role mismatch** | 존재하는 토큰을 *잘못된 CSS 속성/역할*에 사용 (예: 테두리에 `fill.*`, 배경에 `text/icon` 계열) | 코드 리뷰 |
| **intent mismatch** ★ | *의미 계열을 틀림* (예: "안 읽음" 카드 배경에 `info`(블루)를 씀, 성공 뱃지에 `warning`) — **기존 슬롯 채점이 못 잡던 차원** | 각 `test-prompt-{page}.md`의 **intent 정답표** 기준 대조 (요소→정답 intent를 spec 근거 줄번호와 함께 명시) |
| **fg/text·icon/text mismatch** | 글자에 `icon/fg` 또는 아이콘에 `text` 등 전경 역할 혼용 | 코드 리뷰 |
| **hardcode** | 토큰 대신 하드코딩 hex/rgb, 또는 색 누락(빈 값) | 코드 리뷰 |
| **hallucination** | 목록에 없는 토큰을 지어냄 | `pnpm check-types` + 목록 대조 |

> ★ **intent mismatch**가 이번 룰북의 핵심 추가. notifications의 "읽음/안읽음 구분", dashboard의 status 토스트/카드, billing의 상태 뱃지가 집중 검증 지점.
>
> **정답표 기준 채점(2026-06-14~):** 4개 페이지(billing·dashboard·notifications·settings) 모두 `test-prompt-{page}.md`에 **intent 정답표**(요소→정답 intent + spec 근거 줄번호 + 혼동 주의)를 보유. 정답표가 자기완결적이라 **채점 프롬프트에 spec-*.md 원문 주입은 선택사항**으로 완화(이전엔 컨텍스트 부재 오판 차단용으로 필수였음 — 예: "처리 중=warning"을 info로 오채점). 단 정답표에 없는 롱테일 요소는 여전히 spec 대조 권장.

## 3. 정규화 (필수)

생성 verbosity가 분모를 오염시키지 않도록 **오용률을 정규화**한다.

```
오용률(misuse_rate) = (slot + intent + fg/text + hardcode + hallucination 건수) / 시맨틱 토큰 사용 총 횟수
```

- 절대 건수와 **정규화 오용률**을 함께 보고한다.
- 셀·페이지·런별로 산출 → 페이지×3런 평균 → 셀 종합.

## 4. 공정성 통제 (task 2)

1. **스펙 동일**: 세 군 모두 `rule-book-new`의 *어휘중립* 스펙. 어느 셀 토큰명과도 verbatim으로 안 겹침 → 정답 누설·어휘 편향 제거.
2. **토큰 전달 동일**: 세 군 모두 *목록을 프롬프트로* 받음(자동완성 대체). **유일한 차이는 E+에만 설명이 붙는 것** — 그래야 E−↔E+가 설명 효과만 격리.
3. **정본 목록만 노출**: B=96(B.md), E=61(E.md). park-ui preset이 주입하는 오염 토큰(`border.default/disabled/error/...`, `sand.*`, `neutral.fg` 등)은 **목록에서 제외**(양쪽 동일 처리).
4. **색 동일**: B·E는 같은 프리미티브를 alias → 매칭 토큰의 hex 동일(B↔E 매칭 시트로 검증). 색 자체 차이로 인한 유불리 없음.
5. **모델 고정**: 생성·채점 모두 동일 모델 계열, **채점은 Sonnet 4.6**.
6. **반복·블라인드**: 페이지당 3런(독립 생성). 채점자는 어느 셀인지 모른 채 코드만 보고 채점(블라인드).

## 5. 산출물

- `eval/results/{cell}_{page}_run{n}.json` — 런별 구조화 채점.
- `eval/results/summary.json` / `summary.md` — 셀×페이지 집계 + 정규화 오용률.
- `eval/viewer/index.html` — 결과 화면·코드·점수 나란히 비교 뷰어.

## 6. 페이지별 집중 검증 토큰 (rule-book-new)

- **dashboard**: status 토스트 3종(완료/위험/안내), 통계/리소스 카드 status, disabled, 메인컬러 버튼·아바타.
- **billing**: Pro 카드 메인컬러 톤 일관성(`B surface/border/text/icon/fill.brand` ↔ `E primary.*`), 결제내역 상태 뱃지(완료/실패/처리중/환불).
- **notifications**: 5역할×카드 반복 일관성, **읽음/안읽음 배경 구분**(안읽음=메인컬러 연한 배경 ↔ 읽음=기본 배경), 좌측 강조선 역할별 채움.
