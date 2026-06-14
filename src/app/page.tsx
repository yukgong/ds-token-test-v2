import Link from 'next/link';
import { css } from '@ds-token-test/styled-system/css';

const cardLink = css({
  display: 'block',
  p: '3',
  rounded: 'md',
  bg: 'surface.neutral.muted',
  color: 'text.neutral.default',
  _hover: { bg: 'surface.neutral.emphasis' },
  textDecoration: 'none',
});

export default function Home() {
  return (
    <main className={css({ p: '8', fontFamily: 'sans', maxW: '760px', mx: 'auto', mt: '10' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '2', color: 'text.neutral.default' })}>
        DS Token 비교 실험 — v3 (편향 제거)
      </h1>
      <p className={css({ color: 'text.neutral.muted', mb: '6' })}>
        property-first(이름만) vs E+(intent-first + 설명). 동일 중립 스펙으로 sonnet 4.6 생성·블라인드 채점.
        결과·오용 상세는 <code>eval/viewer/index.html</code> 참고.
      </p>

      <div className={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6' })}>
        <div className={css({ border: '1px solid', borderColor: 'border.neutral.default', rounded: 'lg', p: '6' })}>
          <h2 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: '4', color: 'text.neutral.default' })}>
            property-first
          </h2>
          <div className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
            <Link href="/property-first/dashboard/run1" className={cardLink}>대시보드 run1 →</Link>
            <Link href="/property-first/billing/run1" className={cardLink}>결제 run1 →</Link>
            <Link href="/property-first/notifications/run1" className={cardLink}>알림 run1 →</Link>
          </div>
        </div>

        <div className={css({ border: '1px solid', borderColor: 'border.brand.default', rounded: 'lg', p: '6' })}>
          <h2 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: '4', color: 'text.brand.default' })}>
            E+ (intent-first + 설명)
          </h2>
          <div className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
            <Link href="/e/dashboard/run1" className={cardLink}>대시보드 run1 →</Link>
            <Link href="/e/billing/run1" className={cardLink}>결제 run1 →</Link>
            <Link href="/e/notifications/run1" className={cardLink}>알림 run1 →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
