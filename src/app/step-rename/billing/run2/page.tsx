import { css } from '@ds-token-test/styled-system-intent-first-stepnames/css';
import {
  LayoutDashboard,
  CreditCard,
  Users,
  Settings,
  LogOut,
  Check,
  X,
  AlertTriangle,
  AlertCircle,
  TrendingUp,
  Calendar,
  Download,
  FileText,
  RefreshCw,
} from 'lucide-react';

// ── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar() {
  const root = `dark ${css({
    width: '240px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'neutral.canvas.01',
    padding: '24px 0',
    flexShrink: 0,
  })}`;

  const logoArea = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '0 20px 24px',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const logoText = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '18px' });
  const logoIcon = css({ color: 'neutral.icon.default' });

  const navList = css({ flex: 1, padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '4px' });

  const navItemActive = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 20px',
    backgroundColor: 'overlay.lighten.hover',
    borderRadius: '8px',
    margin: '0 8px',
    cursor: 'pointer',
  });

  const navItemInactive = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 20px',
    borderRadius: '8px',
    margin: '0 8px',
    cursor: 'pointer',
    opacity: 0.38,
  });

  const navTextActive = css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '600' });
  const navTextInactive = css({ color: 'neutral.text.default', fontSize: '14px' });
  const navIconActive = css({ color: 'neutral.icon.default' });
  const navIconInactive = css({ color: 'neutral.icon.default' });

  const bottomArea = css({
    padding: '16px 8px 0',
    borderTop: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const logoutBtn = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
  });

  const logoutText = css({ color: 'critical.text.default', fontSize: '14px', fontWeight: '500' });
  const logoutIcon = css({ color: 'critical.icon.default' });

  return (
    <aside className={root}>
      <div className={logoArea}>
        <LayoutDashboard size={22} className={logoIcon} />
        <span className={logoText}>Mildang</span>
      </div>

      <nav className={navList}>
        {/* Active: 결제 내역 */}
        <div className={navItemActive}>
          <CreditCard size={18} className={navIconActive} />
          <span className={navTextActive}>결제 내역</span>
        </div>
        {/* Inactive: 대시보드 */}
        <div className={navItemInactive}>
          <LayoutDashboard size={18} className={navIconInactive} />
          <span className={navTextInactive}>대시보드</span>
        </div>
        {/* Inactive: 사용자 관리 */}
        <div className={navItemInactive}>
          <Users size={18} className={navIconInactive} />
          <span className={navTextInactive}>사용자 관리</span>
        </div>
        {/* Inactive: 설정 */}
        <div className={navItemInactive}>
          <Settings size={18} className={navIconInactive} />
          <span className={navTextInactive}>설정</span>
        </div>
      </nav>

      <div className={bottomArea}>
        <button className={logoutBtn}>
          <LogOut size={18} className={logoutIcon} />
          <span className={logoutText}>로그아웃</span>
        </button>
      </div>
    </aside>
  );
}

// ── Plan Cards (Section 1) ────────────────────────────────────────────────────

function PlanFeature({
  included,
  label,
  iconColor,
  textColor,
}: {
  included: boolean;
  label: string;
  iconColor: string;
  textColor: string;
}) {
  return (
    <li className={css({ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' })}>
      {included ? (
        <Check size={16} className={iconColor} />
      ) : (
        <div className={css({ opacity: 0.38 })}>
          <X size={16} className={css({ color: 'neutral.icon.default' })} />
        </div>
      )}
      <span className={included ? textColor : css({ color: 'neutral.text.default', opacity: 0.38 })}>{label}</span>
    </li>
  );
}

function FreePlanCard() {
  const card = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  });

  const planName = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '20px', marginBottom: '8px' });
  const price = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '28px', marginBottom: '20px' });
  const featureList = css({ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 });
  const iconCheck = css({ color: 'positive.icon.default' });
  const featText = css({ color: 'neutral.text.default', fontSize: '14px' });

  const btn = css({
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'neutral.fill.default',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    color: 'neutral.text.default',
    fontWeight: '600',
    fontSize: '14px',
    opacity: 0.38,
    cursor: 'not-allowed',
  });

  return (
    <div className={card}>
      <h3 className={planName}>Free</h3>
      <p className={price}>₩0/월</p>
      <ul className={featureList}>
        <PlanFeature included label="기본 대시보드" iconColor={iconCheck} textColor={featText} />
        <PlanFeature included label="사용자 1명" iconColor={iconCheck} textColor={featText} />
        <PlanFeature included label="월 100건 처리" iconColor={iconCheck} textColor={featText} />
        <PlanFeature included={false} label="고급 분석" iconColor="" textColor="" />
        <PlanFeature included={false} label="API 접근" iconColor="" textColor="" />
      </ul>
      <button className={btn}>현재 플랜</button>
    </div>
  );
}

function ProPlanCard() {
  const card = css({
    backgroundColor: 'primary.surface.default',
    border: '1px solid',
    borderColor: 'primary.border.strongest',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  });

  const banner = css({
    backgroundColor: 'primary.fill.default',
    padding: '8px 24px',
    textAlign: 'center',
  });

  const bannerText = css({ color: 'inverse.text.default', fontWeight: '700', fontSize: '13px' });

  const cardBody = css({ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 });

  const nameRow = css({ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' });
  const planName = css({ color: 'primary.text.default', fontWeight: '700', fontSize: '20px' });

  const badge = css({
    backgroundColor: 'primary.fill.default',
    color: 'inverse.text.default',
    fontSize: '11px',
    fontWeight: '700',
    padding: '2px 8px',
    borderRadius: '99px',
  });

  const price = css({ color: 'primary.text.default', fontWeight: '700', fontSize: '28px', marginBottom: '20px' });
  const featureList = css({ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 });
  const iconCheck = css({ color: 'primary.icon.default' });
  const featText = css({ color: 'neutral.text.default', fontSize: '14px' });

  const btn = css({
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'primary.fill.default',
    border: 'none',
    color: 'inverse.text.default',
    fontWeight: '600',
    fontSize: '14px',
    opacity: 0.38,
    cursor: 'not-allowed',
  });

  const memo = css({ color: 'neutral.text.subtle', fontSize: '12px', marginTop: '12px', opacity: 0.38 });

  return (
    <div className={card}>
      <div className={banner}>
        <span className={bannerText}>추천</span>
      </div>
      <div className={cardBody}>
        <div className={nameRow}>
          <h3 className={planName}>Pro</h3>
          <span className={badge}>현재 플랜</span>
        </div>
        <p className={price}>₩49,000/월</p>
        <ul className={featureList}>
          <PlanFeature included label="기본 대시보드" iconColor={iconCheck} textColor={featText} />
          <PlanFeature included label="사용자 최대 10명" iconColor={iconCheck} textColor={featText} />
          <PlanFeature included label="월 10,000건 처리" iconColor={iconCheck} textColor={featText} />
          <PlanFeature included label="고급 분석" iconColor={iconCheck} textColor={featText} />
          <PlanFeature included label="API 접근" iconColor={iconCheck} textColor={featText} />
          <PlanFeature included={false} label="전용 지원 매니저" iconColor="" textColor="" />
        </ul>
        <button className={btn}>현재 사용 중</button>
        <p className={memo}>다음 결제일: 2025년 9월 1일</p>
      </div>
    </div>
  );
}

function EnterprisePlanCard() {
  const card = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  });

  const planName = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '20px', marginBottom: '8px' });
  const price = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '28px', marginBottom: '20px' });
  const featureList = css({ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 });
  const iconCheck = css({ color: 'positive.icon.default' });
  const featText = css({ color: 'neutral.text.default', fontSize: '14px' });

  const btn = css({
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'primary.fill.default',
    border: 'none',
    color: 'inverse.text.default',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
  });

  return (
    <div className={card}>
      <h3 className={planName}>Enterprise</h3>
      <p className={price}>맞춤 견적</p>
      <ul className={featureList}>
        <PlanFeature included label="기본 대시보드" iconColor={iconCheck} textColor={featText} />
        <PlanFeature included label="무제한 사용자" iconColor={iconCheck} textColor={featText} />
        <PlanFeature included label="무제한 처리" iconColor={iconCheck} textColor={featText} />
        <PlanFeature included label="고급 분석 + 커스텀 리포트" iconColor={iconCheck} textColor={featText} />
        <PlanFeature included label="API 접근 + 웹훅" iconColor={iconCheck} textColor={featText} />
        <PlanFeature included label="전용 지원 매니저" iconColor={iconCheck} textColor={featText} />
      </ul>
      <button className={btn}>영업팀 문의</button>
    </div>
  );
}

function PlanSection() {
  const section = css({ marginBottom: '32px' });
  const title = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '20px', marginBottom: '20px' });
  const grid = css({ display: 'flex', gap: '20px', alignItems: 'stretch' });

  return (
    <section className={section}>
      <h2 className={title}>플랜 선택</h2>
      <div className={grid}>
        <FreePlanCard />
        <ProPlanCard />
        <EnterprisePlanCard />
      </div>
    </section>
  );
}

// ── Payment Method (Section 2) ─────────────────────────────────────────────

function PaymentMethodSection() {
  const section = css({ marginBottom: '32px' });
  const card = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    padding: '24px',
  });

  const header = css({
    color: 'neutral.text.default',
    fontWeight: '700',
    fontSize: '18px',
    marginBottom: '20px',
  });

  const cardRow = css({ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' });

  const cardArt = css({
    backgroundColor: 'neutral.surface.default',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '8px',
    width: '120px',
    height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 12px',
    flexShrink: 0,
  });

  const cardArtIcon = css({ color: 'neutral.icon.default', opacity: 0.38 });
  const cardNumber = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '13px' });

  const cardInfo = css({ flex: 1 });
  const cardName = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '16px', marginBottom: '6px' });

  const expiryRow = css({ display: 'flex', alignItems: 'center', gap: '8px' });
  const expiryText = css({ color: 'neutral.text.subtle', fontSize: '13px' });

  const validBadge = css({
    backgroundColor: 'positive.surface.default',
    border: '1px solid',
    borderColor: 'positive.border.default',
    color: 'positive.text.default',
    fontSize: '11px',
    fontWeight: '600',
    padding: '2px 8px',
    borderRadius: '99px',
  });

  const btnGroup = css({ display: 'flex', gap: '8px', marginLeft: 'auto' });

  const btnOutline = css({
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.text.default',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  });

  const btnGhost = css({
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'neutral.surface.transparent',
    color: 'critical.text.default',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  });

  const warningBanner = css({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 16px',
    backgroundColor: 'warning.surface.default',
    border: '1px solid',
    borderColor: 'warning.border.default',
    borderRadius: '8px',
    marginTop: '4px',
  });

  const warningIcon = css({ color: 'warning.icon.default', flexShrink: 0 });
  const warningText = css({ color: 'warning.text.default', fontSize: '14px', flex: 1 });
  const warningLink = css({ color: 'warning.text.default', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' });

  return (
    <section className={section}>
      <div className={card}>
        <h2 className={header}>등록된 결제 수단</h2>

        <div className={cardRow}>
          <div className={cardArt}>
            <CreditCard size={18} className={cardArtIcon} />
            <span className={cardNumber}>•••• •••• •••• 4242</span>
          </div>
          <div className={cardInfo}>
            <p className={cardName}>Visa</p>
            <div className={expiryRow}>
              <span className={expiryText}>만료일 12/26</span>
              <span className={validBadge}>유효</span>
            </div>
          </div>
          <div className={btnGroup}>
            <button className={btnOutline}>변경</button>
            <button className={btnGhost}>삭제</button>
          </div>
        </div>

        <div className={warningBanner}>
          <AlertTriangle size={18} className={warningIcon} />
          <p className={warningText}>
            결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.{' '}
            <span className={warningLink}>카드 변경</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Billing History Table (Section 3) ─────────────────────────────────────

type BadgeKind = 'positive' | 'critical' | 'warning' | 'info';

function StatusBadge({ kind, label }: { kind: BadgeKind; label: string }) {
  const base = css({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 10px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid',
  });

  const styles: Record<BadgeKind, string> = {
    positive: css({
      backgroundColor: 'positive.surface.default',
      borderColor: 'positive.border.default',
      color: 'positive.text.default',
    }),
    critical: css({
      backgroundColor: 'critical.fill.default',
      borderColor: 'critical.border.emphasis',
      color: 'inverse.text.default',
    }),
    warning: css({
      backgroundColor: 'warning.surface.default',
      borderColor: 'warning.border.default',
      color: 'warning.text.default',
    }),
    info: css({
      backgroundColor: 'info.surface.default',
      borderColor: 'info.border.default',
      color: 'info.text.default',
    }),
  };

  return <span className={`${base} ${styles[kind]}`}>{label}</span>;
}

interface BillingRow {
  date: string;
  desc: string;
  amount: string;
  status: { kind: BadgeKind; label: string };
  action: 'receipt' | 'retry' | 'detail' | null;
  isFailed?: boolean;
}

const billingRows: BillingRow[] = [
  { date: '2025-08-01', desc: 'Pro 플랜 (8월)', amount: '₩49,000', status: { kind: 'positive', label: '결제 완료' }, action: 'receipt' },
  { date: '2025-07-01', desc: 'Pro 플랜 (7월)', amount: '₩49,000', status: { kind: 'positive', label: '결제 완료' }, action: 'receipt' },
  { date: '2025-06-15', desc: '추가 사용자 시트', amount: '₩9,000', status: { kind: 'positive', label: '결제 완료' }, action: 'receipt' },
  { date: '2025-06-01', desc: 'Pro 플랜 (6월)', amount: '₩49,000', status: { kind: 'critical', label: '결제 실패' }, action: 'retry', isFailed: true },
  { date: '2025-05-28', desc: 'Pro 플랜 (6월) 재시도', amount: '₩49,000', status: { kind: 'positive', label: '결제 완료' }, action: 'receipt' },
  { date: '2025-05-01', desc: 'Pro 플랜 (5월)', amount: '₩49,000', status: { kind: 'positive', label: '결제 완료' }, action: 'receipt' },
  { date: '2025-04-01', desc: 'Pro 플랜 (4월)', amount: '₩49,000', status: { kind: 'warning', label: '처리 중' }, action: null },
  { date: '2025-03-10', desc: '환불 처리', amount: '-₩49,000', status: { kind: 'info', label: '환불 완료' }, action: 'detail' },
  { date: '2025-03-01', desc: 'Pro 플랜 (3월)', amount: '₩49,000', status: { kind: 'positive', label: '결제 완료' }, action: 'receipt' },
];

function BillingHistorySection() {
  const section = css({ marginBottom: '32px' });
  const card = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    overflow: 'hidden',
  });

  const cardHeader = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px 16px',
  });

  const title = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '18px' });

  const exportBtn = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.text.default',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  });

  const exportIcon = css({ color: 'neutral.icon.default' });

  const table = css({ width: '100%', borderCollapse: 'collapse' as const });

  const thead = css({ backgroundColor: 'neutral.canvas.01' });

  const th = css({
    padding: '10px 16px',
    textAlign: 'left' as const,
    fontSize: '11px',
    fontWeight: '700',
    color: 'neutral.text.default',
    opacity: 0.38,
    textTransform: 'uppercase' as const,
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const tdBase = css({
    padding: '14px 16px',
    fontSize: '14px',
    color: 'neutral.text.default',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const tdEven = css({
    padding: '14px 16px',
    fontSize: '14px',
    color: 'neutral.text.default',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
    backgroundColor: 'neutral.canvas.01',
  });

  const tdFailed = css({
    padding: '14px 16px',
    fontSize: '14px',
    color: 'neutral.text.default',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
    backgroundColor: 'critical.surface.default',
  });

  const ghostIconBtn = css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.icon.default',
    cursor: 'pointer',
  });

  const retryBtn = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '6px 12px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'critical.border.emphasis',
    backgroundColor: 'neutral.surface.transparent',
    color: 'critical.text.default',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  });

  const retryIcon = css({ color: 'critical.icon.default' });

  return (
    <section className={section}>
      <div className={card}>
        <div className={cardHeader}>
          <h2 className={title}>결제 내역</h2>
          <button className={exportBtn}>
            <Download size={14} className={exportIcon} />
            CSV 내보내기
          </button>
        </div>

        <table className={table}>
          <thead className={thead}>
            <tr>
              <th className={th}>날짜</th>
              <th className={th}>내역</th>
              <th className={th}>금액</th>
              <th className={th}>상태</th>
              <th className={th}>액션</th>
            </tr>
          </thead>
          <tbody>
            {billingRows.map((row, idx) => {
              const tdClass = row.isFailed ? tdFailed : idx % 2 === 1 ? tdEven : tdBase;
              return (
                <tr key={idx}>
                  <td className={tdClass}>{row.date}</td>
                  <td className={tdClass}>{row.desc}</td>
                  <td className={tdClass}>{row.amount}</td>
                  <td className={tdClass}>
                    <StatusBadge kind={row.status.kind} label={row.status.label} />
                  </td>
                  <td className={tdClass}>
                    {row.action === 'receipt' && (
                      <button className={ghostIconBtn} title="영수증">
                        <FileText size={16} />
                      </button>
                    )}
                    {row.action === 'retry' && (
                      <button className={retryBtn}>
                        <RefreshCw size={13} className={retryIcon} />
                        재시도
                      </button>
                    )}
                    {row.action === 'detail' && (
                      <button className={ghostIconBtn} title="상세">
                        <FileText size={16} />
                      </button>
                    )}
                    {row.action === null && <span>—</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── Billing Summary (Section 4) ────────────────────────────────────────────

function BillingSummarySection() {
  const section = css({ marginBottom: '32px' });
  const grid = css({ display: 'flex', gap: '20px' });

  // Left card: 이번 달 청구
  const cardNeutral = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    padding: '24px',
    flex: 1,
  });

  const iconRow = css({ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' });
  const positiveIcon = css({ color: 'positive.icon.default' });
  const infoIcon = css({ color: 'info.icon.default' });
  const criticalIcon = css({ color: 'critical.icon.default' });

  const cardTitle = css({ color: 'neutral.text.subtle', fontSize: '13px', fontWeight: '600', marginBottom: '12px' });
  const amountStrong = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '28px', marginBottom: '10px' });
  const amountCritical = css({ color: 'critical.text.default', fontWeight: '700', fontSize: '28px', marginBottom: '10px' });
  const amountInfo = css({ color: 'neutral.text.default', fontWeight: '700', fontSize: '22px', marginBottom: '10px' });

  const positiveBadge = css({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 10px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'positive.surface.default',
    border: '1px solid',
    borderColor: 'positive.border.default',
    color: 'positive.text.default',
    marginBottom: '12px',
  });

  const infoBadge = css({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 10px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'info.surface.default',
    border: '1px solid',
    borderColor: 'info.border.default',
    color: 'info.text.default',
    marginBottom: '12px',
  });

  const criticalBadgeFill = css({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 10px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'critical.fill.default',
    border: '1px solid',
    borderColor: 'critical.border.emphasis',
    color: 'inverse.text.default',
    marginBottom: '12px',
  });

  const subText = css({ color: 'neutral.text.subtle', fontSize: '13px' });

  // Center card: 미결제 금액
  const cardCritical = css({
    backgroundColor: 'critical.surface.default',
    border: '1px solid',
    borderColor: 'critical.border.default',
    borderRadius: '12px',
    padding: '24px',
    flex: 1,
  });

  const payNowBtn = css({
    marginTop: '16px',
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'critical.fill.default',
    border: 'none',
    color: 'inverse.text.default',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
  });

  return (
    <section className={section}>
      <div className={grid}>
        {/* 이번 달 청구 */}
        <div className={cardNeutral}>
          <p className={cardTitle}>이번 달 청구</p>
          <div className={iconRow}>
            <TrendingUp size={20} className={positiveIcon} />
          </div>
          <p className={amountStrong}>₩58,000</p>
          <span className={positiveBadge}>정상 결제</span>
          <p className={subText}>Pro ₩49,000 + 추가 ₩9,000</p>
        </div>

        {/* 미결제 금액 */}
        <div className={cardCritical}>
          <p className={cardTitle}>미결제 금액</p>
          <div className={iconRow}>
            <AlertCircle size={20} className={criticalIcon} />
          </div>
          <p className={amountCritical}>₩49,000</p>
          <span className={criticalBadgeFill}>미결제</span>
          <button className={payNowBtn}>지금 결제</button>
        </div>

        {/* 다음 결제일 */}
        <div className={cardNeutral}>
          <p className={cardTitle}>다음 결제일</p>
          <div className={iconRow}>
            <Calendar size={20} className={infoIcon} />
          </div>
          <p className={amountInfo}>2025년 9월 1일</p>
          <span className={infoBadge}>예정</span>
          <p className={subText}>Pro 플랜 월정액 ₩49,000</p>
        </div>
      </div>
    </section>
  );
}

// ── Page Root ────────────────────────────────────────────────────────────────

export default function BillingPage() {
  const layout = css({
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: 'neutral.canvas.01',
  });

  const main = css({
    flex: 1,
    backgroundColor: 'neutral.canvas.01',
    padding: '40px 40px',
    overflowY: 'auto' as const,
  });

  const pageTitle = css({
    color: 'neutral.text.default',
    fontWeight: '700',
    fontSize: '24px',
    marginBottom: '32px',
  });

  return (
    <div className={layout}>
      <Sidebar />
      <main className={main}>
        <h1 className={pageTitle}>결제 및 구독 관리</h1>
        <PlanSection />
        <PaymentMethodSection />
        <BillingHistorySection />
        <BillingSummarySection />
      </main>
    </div>
  );
}
