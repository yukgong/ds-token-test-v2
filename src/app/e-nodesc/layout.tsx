// E− (intent-first, 설명 없음=이름만) arm 렌더 레이아웃.
// E+와 동일한 styled-system-intent-first를 공유(토큰 이름·값 동일, 차이는 프롬프트 설명 유무뿐).
import '@ds-token-test/styled-system-intent-first/styles.css';
import type { ReactNode } from 'react';

export default function ENodescLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
