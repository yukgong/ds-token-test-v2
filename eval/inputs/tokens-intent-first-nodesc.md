# 셀 E — 사용 가능한 시맨틱 컬러 토큰 (intent-first, description 미포함)

- 순서: intent-first `{intent}.{slot}.{step}`
- CSS 색상 속성에 '토큰경로' 형태로 사용. 목록에 없는 토큰 사용 금지.

## [토큰 선택 3단계 프로세스]
1. **1단계: 요구사항의 의도(Intent) 확정**
   - 요구사항의 의도를 확인하고 다음 중 택 1 
   - neutral, positive, critical, warning, info, primary
2. **2단계: 슬롯(Slot) 매칭 (CSS 속성 기준)**
   - **핵심 원칙:** 시각적 형태(선/면 등)나 부모 요소의 상속에 의존하지 않고, 해당 요소에 직접 적용하는 'CSS 속성명'을 기준으로 슬롯을 엄격히 일치.
      - `background` · `backgroundColor` · `bg` ➔ `canvas` · `surface` · `fill` 중 선택
         - *(※ 주의: CSS background 관련 속성을 선언할 때만 사용 가능)*
      - `borderColor` · `border-*` ➔ `border`
         - *(※ 주의: CSS border 관련 속성을 선언할 때만 사용 가능)*
    - svg 등 아이콘 요소의 `color` → `icon`(텍스트 토큰 혼용 금지, 독립 지정)
    - 텍스트 요소의 `color` → `text` (아이콘 토큰 혼용 금지, 독립 지정)
3. **3단계: 단계(Step) 및 상태 적용**
   - base를 기준으로 최종 명도 단계 선택
   - 비활성 상태인 경우, 토큰 변경 대신 CSS `opacity` 속성을 별도 추가 조합 (`opacity: 0.38`)

## **[반전 표면 처리 — 국소 테마 교체]** 
   - 일부 영역에서 light/dark 테마 변경이 필요할 경우, **그 요소에만 반대 테마를 국소 적용**. 
   > **예시**
      1. 다크로 전환할 영역의 루트 요소에 `dark` 클래스를 추가한다(예: `className={`dark ${css({ … })}`}`). 
      2. 그 요소와 하위 전체에서 평소대로 일반 토큰(`neutral.surface`·`neutral.canvas`·`neutral.text`·`neutral.icon` 등)을 그대로 쓰면 값이 자동으로 다크로 전환된다. 
   - ※ 다크 영역(사이드바·패널 등)의 **루트에 배경 토큰을 반드시 명시**한다(레이아웃 배경 = `neutral.canvas.*`). 배경을 비우면 투명하게 렌더되어 바탕(라이트)이 비친다.
   - ※ `neutral.fill.high`는 dark 영역 안에서 **흰색으로 반전**되므로 레이아웃 패널·사이드바 배경에 쓰지 말 것(레이아웃 다크 배경은 `neutral.canvas.*` 사용). `fill.high`는 라이트 컨텍스트의 작은 컴포넌트(툴팁·뱃지) 전용.

## **[inverse 토큰]** 
   - `inverse.text.base`(글자)·`inverse.icon.base`(아이콘)는 **진한 배경색을 사용하는 컴포넌트 (ex. 각 인텐트의 `fill.base`: Solid 뱃지·강조/CTA 버튼) 위에 얹는 반대색**.
```
# neutral
neutral.canvas.01
neutral.canvas.02
neutral.canvas.03
neutral.surface.transparent
neutral.surface.base
neutral.surface.high
neutral.fill.base
neutral.fill.high
neutral.border.transparent
neutral.border.low
neutral.border.base
neutral.border.high
neutral.icon.base
neutral.text.lowest
neutral.text.low
neutral.text.base

# positive
positive.surface.base
positive.surface.high
positive.fill.base
positive.border.base
positive.border.high
positive.border.highest
positive.icon.base
positive.text.base

# critical
critical.surface.base
critical.surface.high
critical.fill.base
critical.border.base
critical.border.high
critical.border.highest
critical.icon.base
critical.text.base

# warning
warning.surface.base
warning.surface.high
warning.fill.base
warning.border.base
warning.border.high
warning.border.highest
warning.icon.base
warning.text.base

# info
info.surface.base
info.surface.high
info.fill.base
info.border.base
info.border.high
info.border.highest
info.icon.base
info.text.base

# primary
primary.surface.base
primary.surface.high
primary.fill.base
primary.border.base
primary.border.high
primary.border.highest
primary.icon.base
primary.text.base

# inverse
inverse.icon.base
inverse.text.base

# overlay
overlay.lighten.hover
overlay.lighten.pressed
overlay.darken.hover
overlay.darken.pressed
overlay.scrim

# focus
focus.border
```
