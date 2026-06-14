// 셀 ES (intent-first + 설명, step 어휘 변경본) 렌더 레이아웃.
// postcss 비활성 상태이므로 이 레이아웃이 ES 전용 사전생성 CSS를 직접 주입한다.
import '@ds-token-test/styled-system-intent-first-stepnames/styles.css';
import type { ReactNode } from 'react';

export default function ESLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
