// property-first arm 렌더 레이아웃 (격리 styled-system CSS 주입).
import '@ds-token-test/styled-system-property-first/styles.css';
import type { ReactNode } from 'react';

export default function PropertyFirstLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
