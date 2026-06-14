// INV (inverse-desc = slot-first 네이밍 + 설명) arm 렌더 레이아웃.
// 셀 E와 동일 값/토큰을 slot-first 이름으로 노출하는 styled-system-intent-first-slotfirst 사용.
import '@ds-token-test/styled-system-intent-first-slotfirst/styles.css';
import type { ReactNode } from 'react';

export default function InverseDescLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
