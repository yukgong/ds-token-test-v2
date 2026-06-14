# 셀 E — 사용 가능한 시맨틱 컬러 토큰 (intent-first, description 포함)

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
neutral.canvas.01 — 화면의 기본 틀을 형성하는 가장 밑바탕의 레이아웃 배경색. 전체 페이지의 기본 도화지 (헤더, 본문 레이아웃 등), 면 분할 없이 테두리/그림자로만 영역을 구분하는 요소 (아웃라인 카드, 플랫 패널), 바닥 배경과 자연스럽게 연결되는 플로팅 레이아웃 (모달, 바텀시트, 팝오버, 토스트 등)
neutral.canvas.02 — 독립된 정보 블록을 형성하는 일반적인 컨테이너의 기본 레이아웃 배경색. 카드, 패널, 박스 등 하위 배경과 명확한 면 분할을 통해 구조를 잡을 때 사용
neutral.canvas.03 — canvas 02 위에 한 단계 더 얹어지는 최상위 배경색. 하단 캔버스와의 명암 차이로 시각적 깊이감을 주고 계층을 명확히 분리할 때 사용
neutral.surface.transparent — Ghost 버튼 등 배경이 없는 컴포넌트의 투명 표면색
neutral.surface.base — 입력창·버튼 등 일반 컴포넌트, 그리고 정적 표시/장식 블록의 가장 옅은 기본 배경색
neutral.surface.high — 컴포넌트의 비활성 상태 또는 호버 인터랙션에서만 쓰는 표면색 (정적·기본 상태 배경은 surface/base 사용)
neutral.fill.base — 토글·프로그레스 등 컴포넌트의 트랙/비활성 영역을 채우는 옅은 채움 색상 (컨테이너·카드 배경은 canvas 계열 사용)
neutral.fill.high — 툴팁·뱃지 등 작은 떠 있는 컴포넌트의 진한 채움 색상(배경과 반대 명도). (반전 표면 처리 섹션 참고)
neutral.border.transparent — 수동 조정용 투명 테두리 (AI 자동 생성 가이드 등에서는 제외)
neutral.border.low — 동일 Layer 내에서 요소 간을 가볍게 분할하는 옅은 구분선
neutral.border.base — layer 간의 경계선 또는 카드, 패널, 컴포넌트(Input, Button 등)의 기본 외곽선
neutral.border.high — 컨테이너 및 컴포넌트의 호버 인터랙션용 강조 외곽선
neutral.icon.base — 아이콘 전용 기본 색상
neutral.text.lowest — 플레이스홀더, 캡션, 비활성 상태 등 우선순위가 가장 낮은 텍스트 색상
neutral.text.low — 설명문, 보조 라벨, 메타 데이터 등 보조 역할을 하는 텍스트 색상
neutral.text.base — 가독성을 최우선으로 하는 본문 및 제목용 기본 텍스트 색상

# positive
positive.surface.base — 긍정·성공 알림창, 뱃지 등 컴포넌트의 옅은 기본 배경색
positive.surface.high — 긍정·성공 컴포넌트의 비활성 상태 또는 호버 인터랙션 표면색
positive.fill.base — 긍정·성공 상태를 강하게 나타내는 가장 진한 채움 색상 (Solid 뱃지, 강조 버튼 등). Note: 위에 얹는 글자·아이콘은 inverse/text·inverse/icon 적용
positive.border.base — 긍정·성공 컴포넌트의 기본 테두리선
positive.border.high — 긍정·성공 테두리의 호버 인터랙션용 강조 외곽선
positive.border.highest — 긍정·명확한 상태 전달 및 시각적 강조를 위한 가장 또렷한 테두리선
positive.icon.base — 긍정·성공 아이콘 전용 색상
positive.text.base — 긍정·성공 메시지 등 텍스트 전용 색상

# critical
critical.surface.base — 심각·오류 알림창, 뱃지 등 컴포넌트의 옅은 기본 배경색
critical.surface.high — 심각·오류 컴포넌트의 비활성 상태 또는 호버 인터랙션 표면색
critical.fill.base — 심각·오류 상태를 강하게 나타내는 가장 진한 채움 색상 (Solid 뱃지, 강조 버튼 등). Note: 위에 얹는 글자·아이콘은 inverse/text·inverse/icon 적용
critical.border.base — 심각·오류 컴포넌트의 기본 테두리선
critical.border.high — 심각·오류 테두리의 호버 인터랙션용 강조 외곽선
critical.border.highest — 심각·오류의 명확한 상태 전달 및 시각적 강조를 위한 가장 또렷한 테두리선
critical.icon.base — 심각·오류 아이콘 전용 색상
critical.text.base — 심각·오류 메시지 등 텍스트 전용 색상

# warning
warning.surface.base — 경고·주의 알림창, 뱃지 등 컴포넌트의 옅은 기본 배경색
warning.surface.high — 경고·주의 컴포넌트의 비활성 상태 또는 호버 인터랙션 표면색
warning.fill.base — 경고·주의 상태를 강하게 나타내는 가장 진한 채움 색상 (Solid 뱃지, 강조 버튼 등). Note: 위에 얹는 글자·아이콘은 inverse/text·inverse/icon 적용
warning.border.base — 경고·주의 컴포넌트의 기본 테두리선
warning.border.high — 경고·주의 테두리의 호버 인터랙션용 강조 외곽선
warning.border.highest — 경고·주의의 명확한 상태 전달 및 시각적 강조를 위한 가장 또렷한 테두리선
warning.icon.base — 경고·주의 아이콘 전용 색상
warning.text.base — 경고·주의 메시지 등 텍스트 전용 색상

# info
info.surface.base — 정보·안내 알림창, 뱃지 등 컴포넌트의 옅은 기본 배경색
info.surface.high — 정보·안내 컴포넌트의 비활성 상태 또는 호버 인터랙션 표면색
info.fill.base — 정보·안내 상태를 강하게 나타내는 가장 진한 채움 색상 (Solid 뱃지, 강조 버튼 등). Note: 위에 얹는 글자·아이콘은 inverse/text·inverse/icon 적용
info.border.base — 정보·안내 컴포넌트의 기본 테두리선
info.border.high — 정보·안내 테두리의 호버 인터랙션용 강조 외곽선
info.border.highest — 정보·안내의 명확한 상태 전달 및 시각적 강조를 위한 가장 또렷한 테두리선
info.icon.base — 정보·안내 아이콘 전용 색상
info.text.base — 정보·안내 메시지 등 텍스트 전용 색상

# primary
primary.surface.base — 브랜드 정체성을 강조하는 컴포넌트 전용 표면색. 브랜드 강조형 카드 배경 등에 제한적으로 사용 (일반 카드/패널 배경은 neutral/canvas/02 등을 사용).
primary.surface.high — 브랜드 정체성을 강조하는 컴포넌트의 비활성 상태 또는 호버 인터랙션 표면색
primary.fill.base — 사용자의 가장 중요한 행동을 유도하는 브랜드 강조형 핵심 채움 색상. 주요 CTA 버튼, Filled 버튼 등에 사용. Note: 위에 얹는 글자·아이콘은 inverse/text·inverse/icon 적용
primary.border.base — 브랜드 정체성을 강조하는 컴포넌트의 테두리선. 브랜드 강조형 카드, 패널 등 가벼운 외곽선에 제한적으로 사용. (Note: 주요 CTA 및 Outline 버튼 등 강한 대비가 필요한 곳은 highest 토큰을 적용)
primary.border.high — 브랜드 강조 컴포넌트 테두리의 호버 인터랙션용 강조 외곽선
primary.border.highest — 주요 CTA 버튼, Outline 버튼 등 브랜드 정체성을 강하게 드러내는 핵심 컴포넌트 자체의 가장 또렷한 외곽선 전용 색상.(일반 컴포넌트의 기본 테두리는 neutral/border/base, 활성·선택 강조는 neutral/border/high, 포커스 상태는 focusRing/default를 엄격히 구분하여 사용)
primary.icon.base — 브랜드 정체성을 강하게 드러내거나 브랜드 강조 컴포넌트 내에 링크되는 아이콘 전용 색상. (일반적인 기능 및 안내 아이콘은 neutral/icon/base 사용)
primary.text.base — 브랜드 정체성을 강하게 드러내거나 브랜드 강조 컴포넌트 내에 배치되는 텍스트 전용 색상. (일반적인 서비스 본문, 제목, 가독성 중심의 텍스트는 neutral/text/base 사용)

# inverse
inverse.icon.base — 진한 채움용 배경색(각 인텐트의 fill/base — 강조 버튼·Solid 뱃지 등) 위에 얹는 아이콘에 사용.
inverse.text.base — 진한 채움용 배경색(각 인텐트의 fill/base — 강조 버튼·Solid 뱃지 등) 위에 얹는 글자에 사용.

# overlay
overlay.lighten.hover — 진한 배경색 컴포넌트의 호버 및 지속적 활성·선택(현재 메뉴/탭 등) 상태를 표현하는 밝게 덮는 반투명 오버레이
overlay.lighten.pressed — 진한 배경색 컴포넌트의 순간적 눌림(Pressed) 상태 전용 오버레이 (호버보다 밝음)
overlay.darken.hover — 연한 배경색 컴포넌트의 호버(Hover) 상태를 표현하는 투명한 어두운 오버레이
overlay.darken.pressed — 연한 배경색 컴포넌트의 눌림(Pressed) 상태를 표현하는 투명한 오버레이 (호버보다 어두움)
overlay.scrim — 모달·드로어·바텀시트 뒤를 덮어 배경을 가라앉히는 반투명 레이어

# focus
focus.border — 포커스 링/아웃라인 전용 색상. 인텐트와 무관하게 항상 info 블루. 입력창·버튼 등 모든 포커스 테두리·아웃라인에 사용.
```
