// 셀 EC (intent-first, 이름만 + canvas/surface 구분 설명) 렌더 레이아웃.
// EC는 E−/E+와 동일 토큰·styled-system(intent-first)을 공유한다. 프롬프트 토큰목록에
// canvas/surface 구분 설명만 추가한 변형이므로 styled-system은 그대로 intent-first를 쓴다.
import '@ds-token-test/styled-system-intent-first/styles.css';
import type { ReactNode } from 'react';

export default function ECLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
