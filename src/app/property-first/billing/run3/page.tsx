import { css } from '@ds-token-test/styled-system-property-first/css';
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
  FileText,
  Download,
  TrendingUp,
  Calendar,
  RefreshCw,
} from 'lucide-react';

/* ───────────────────────── shared styles ───────────────────────── */

const pageWrapper = css({
  display: 'flex',
  minHeight: '100vh',
  fontFamily: 'system-ui, sans-serif',
});

/* ───────────────────────── sidebar ───────────────────────── */

const sidebarWrap = css({
  width: '240px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'surface.neutral.emphasis',
  flexShrink: 0,
});

const logoArea = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '20px 16px',
});

const logoText = css({
  color: 'text.inverse',
  fontWeight: '700',
  fontSize: '18px',
});

const logoIcon = css({ color: 'icon.inverse' });

const navWrap = css({
  flex: 1,
  padding: '8px 12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

const navItemActive = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 12px',
  borderRadius: '8px',
  backgroundColor: 'surface.neutral.default',
  cursor: 'pointer',
});

const navItemActiveIcon = css({ color: 'icon.inverse' });
const navItemActiveText = css({ fontSize: '14px', fontWeight: '600', color: 'text.inverse' });

const navItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 12px',
  borderRadius: '8px',
  cursor: 'pointer',
});

const navItemIcon = css({ color: 'icon.neutral.subtle' });
const navItemText = css({ fontSize: '14px', color: 'text.neutral.muted' });

const navItemDisabled = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 12px',
  borderRadius: '8px',
  cursor: 'not-allowed',
  opacity: 0.38,
});

const logoutRow = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '16px',
  borderTop: '1px solid',
  borderColor: 'border.neutral.default',
  cursor: 'pointer',
});

const logoutIcon = css({ color: 'icon.critical.default' });
const logoutText = css({ fontSize: '14px', fontWeight: '500', color: 'text.critical.default' });

/* ───────────────────────── main area ───────────────────────── */

const mainArea = css({
  flex: 1,
  backgroundColor: 'surface.neutral.subtle',
  padding: '32px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

const pageTitleText = css({ color: 'text.neutral.default', fontWeight: '700', fontSize: '24px' });
const pageSubText = css({ color: 'text.neutral.muted', fontSize: '14px', marginTop: '4px' });

/* ───────────────────────── plan cards ───────────────────────── */

const planGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
});

const planCardFree = css({
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  backgroundColor: 'surface.neutral.default',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const planCardPro = css({
  borderRadius: '12px',
  border: '2px solid',
  borderColor: 'border.brand.emphasis',
  backgroundColor: 'surface.brand.subtle',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const proBanner = css({
  backgroundColor: 'fill.brand',
  padding: '8px 16px',
  textAlign: 'center',
});

const proBannerText = css({ color: 'text.inverse', fontSize: '13px', fontWeight: '700' });

const planBody = css({
  padding: '20px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const planNameFree = css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.default' });
const planPriceFree = css({ fontSize: '28px', fontWeight: '800', color: 'text.neutral.default' });

const planNameProRow = css({ display: 'flex', alignItems: 'center', gap: '8px' });
const planNamePro = css({ fontSize: '18px', fontWeight: '700', color: 'text.brand.default' });
const planPricePro = css({ fontSize: '28px', fontWeight: '800', color: 'text.brand.default' });

const currentBadge = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '700',
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
});

const featureList = css({ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' });

const featureItem = css({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'text.neutral.default' });
const featureItemExcluded = css({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'text.neutral.default', opacity: 0.38 });
const featureItemPro = css({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'text.brand.default' });
const featureItemProExcluded = css({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'text.brand.default', opacity: 0.38 });

const featureCheckPos = css({ color: 'icon.positive.default', flexShrink: 0 });
const featureCheckBrand = css({ color: 'icon.brand.default', flexShrink: 0 });
const featureXIcon = css({ color: 'icon.neutral.default', flexShrink: 0 });

const btnCurrentPlanDisabled = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '10px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  backgroundColor: 'surface.neutral.default',
  color: 'text.neutral.default',
  opacity: 0.38,
  cursor: 'not-allowed',
  marginTop: 'auto',
});

const btnCurrentProDisabled = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '10px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  border: 'none',
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
  opacity: 0.38,
  cursor: 'not-allowed',
  marginTop: 'auto',
});

const planMemoText = css({ fontSize: '12px', color: 'text.neutral.muted', textAlign: 'center', opacity: 0.38, marginTop: '4px' });

const btnEnterprise = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '10px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  border: 'none',
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
  cursor: 'pointer',
  marginTop: 'auto',
});

/* ───────────────────────── payment method ───────────────────────── */

const sectionCard = css({
  backgroundColor: 'surface.neutral.default',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  padding: '24px',
});

const sectionTitle = css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.default', marginBottom: '20px' });

const paymentRow = css({ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' });

const cardArt = css({
  backgroundColor: 'surface.neutral.muted',
  borderRadius: '8px',
  padding: '12px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  minWidth: '180px',
});

const cardArtIcon = css({ color: 'icon.neutral.default', opacity: 0.38 });
const cardArtNumber = css({ fontSize: '14px', fontWeight: '700', color: 'text.neutral.default', letterSpacing: '2px' });

const cardInfo = css({ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' });
const cardName = css({ fontSize: '16px', fontWeight: '700', color: 'text.neutral.default' });
const cardExpRow = css({ display: 'flex', alignItems: 'center', gap: '8px' });
const cardExp = css({ fontSize: '14px', color: 'text.neutral.muted' });

const validBadge = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  backgroundColor: 'surface.positive.subtle',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
});

const cardActions = css({ display: 'flex', gap: '8px', marginLeft: 'auto' });

const btnOutlineNeutral = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '8px 14px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  color: 'text.neutral.default',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
});

const btnGhostCritical = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '8px 14px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  border: 'none',
  color: 'text.critical.default',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
});

const warningBanner = css({
  backgroundColor: 'surface.warning.subtle',
  border: '1px solid',
  borderColor: 'border.warning.default',
  borderRadius: '8px',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

const warningBannerIcon = css({ color: 'icon.warning.default', flexShrink: 0 });
const warningBannerText = css({ fontSize: '14px', color: 'text.neutral.default', flex: 1 });
const warningBannerLink = css({ fontSize: '14px', fontWeight: '600', color: 'text.warning.default', cursor: 'pointer', textDecoration: 'underline' });

/* ───────────────────────── billing table ───────────────────────── */

const tableHeader = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' });
const tableSectionTitle = css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.default' });

const csvBtn = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 14px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  color: 'text.neutral.default',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
});

const csvBtnIcon = css({ color: 'icon.neutral.default' });

const tableEl = css({ width: '100%', borderCollapse: 'collapse' });
const tableHead = css({ backgroundColor: 'surface.neutral.subtle' });

const th = css({
  padding: '10px 14px',
  textAlign: 'left',
  fontSize: '11px',
  fontWeight: '700',
  color: 'text.neutral.muted',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  opacity: 0.38,
});

const tdBase = css({
  padding: '12px 14px',
  fontSize: '14px',
  color: 'text.neutral.default',
  borderTop: '1px solid',
  borderColor: 'border.neutral.subtle',
});

const tdEven = css({
  padding: '12px 14px',
  fontSize: '14px',
  color: 'text.neutral.default',
  borderTop: '1px solid',
  borderColor: 'border.neutral.subtle',
  backgroundColor: 'surface.neutral.ghost',
});

const tdCriticalRow = css({
  padding: '12px 14px',
  fontSize: '14px',
  color: 'text.neutral.default',
  borderTop: '1px solid',
  borderColor: 'border.neutral.subtle',
  backgroundColor: 'surface.critical.subtle',
});

const badgePositive = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  backgroundColor: 'surface.positive.subtle',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
});

const badgeCriticalFilled = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  backgroundColor: 'fill.critical',
  color: 'text.inverse',
});

const badgeWarning = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  backgroundColor: 'surface.warning.subtle',
  border: '1px solid',
  borderColor: 'border.warning.default',
  color: 'text.warning.default',
});

const badgeInfo = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  backgroundColor: 'surface.info.subtle',
  border: '1px solid',
  borderColor: 'border.info.default',
  color: 'text.info.default',
});

const iconBtnGhost = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'icon.neutral.default',
  cursor: 'pointer',
});

const btnOutlineCritical = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 12px',
  borderRadius: '8px',
  fontSize: '13px',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'border.critical.default',
  color: 'text.critical.default',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
});

const retryIcon = css({ color: 'icon.critical.default' });

/* ───────────────────────── summary cards ───────────────────────── */

const summaryGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
});

const summaryCardBase = css({
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  backgroundColor: 'surface.neutral.default',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const summaryCardCritical = css({
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'border.critical.default',
  backgroundColor: 'surface.critical.subtle',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const summaryIconPos = css({ color: 'icon.positive.default' });
const summaryIconCrit = css({ color: 'icon.critical.default' });
const summaryIconInfo = css({ color: 'icon.info.default' });

const summaryAmount = css({ fontSize: '28px', fontWeight: '800', color: 'text.neutral.default' });
const summaryAmountCritical = css({ fontSize: '28px', fontWeight: '800', color: 'text.critical.default' });
const summaryDate = css({ fontSize: '22px', fontWeight: '700', color: 'text.neutral.default' });
const summarySub = css({ fontSize: '13px', color: 'text.neutral.muted' });

const badgePositiveSubtle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  backgroundColor: 'surface.positive.subtle',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
});

const badgeInfoSubtle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  backgroundColor: 'surface.info.subtle',
  border: '1px solid',
  borderColor: 'border.info.default',
  color: 'text.info.default',
});

const btnCriticalFilled = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '700',
  backgroundColor: 'fill.critical',
  color: 'text.inverse',
  cursor: 'pointer',
  border: 'none',
  marginTop: '4px',
});

/* ═══════════════════════════ PAGE ═══════════════════════════ */

export default function BillingPage() {
  const billingRows = [
    { id: 1, date: '2025-08-01', desc: 'Pro 플랜 (8월)',       amount: '₩49,000',  status: 'success',  label: '결제 완료', action: 'receipt' },
    { id: 2, date: '2025-07-01', desc: 'Pro 플랜 (7월)',       amount: '₩49,000',  status: 'success',  label: '결제 완료', action: 'receipt' },
    { id: 3, date: '2025-06-15', desc: '추가 사용자 시트',      amount: '₩9,000',   status: 'success',  label: '결제 완료', action: 'receipt' },
    { id: 4, date: '2025-06-01', desc: 'Pro 플랜 (6월)',       amount: '₩49,000',  status: 'critical', label: '결제 실패', action: 'retry'   },
    { id: 5, date: '2025-05-28', desc: 'Pro 플랜 (6월) 재시도', amount: '₩49,000',  status: 'success',  label: '결제 완료', action: 'receipt' },
    { id: 6, date: '2025-05-01', desc: 'Pro 플랜 (5월)',       amount: '₩49,000',  status: 'success',  label: '결제 완료', action: 'receipt' },
    { id: 7, date: '2025-04-01', desc: 'Pro 플랜 (4월)',       amount: '₩49,000',  status: 'warning',  label: '처리 중',   action: 'none'    },
    { id: 8, date: '2025-03-10', desc: '환불 처리',             amount: '-₩49,000', status: 'info',     label: '환불 완료', action: 'detail'  },
    { id: 9, date: '2025-03-01', desc: 'Pro 플랜 (3월)',       amount: '₩49,000',  status: 'success',  label: '결제 완료', action: 'receipt' },
  ] as const;

  return (
    <div className={pageWrapper}>

      {/* ── Sidebar ── */}
      <aside className={sidebarWrap}>
        <div className={logoArea}>
          <LayoutDashboard size={22} className={logoIcon} />
          <span className={logoText}>Mildang</span>
        </div>

        <nav className={navWrap}>
          {/* Active */}
          <div className={navItemActive}>
            <CreditCard size={18} className={navItemActiveIcon} />
            <span className={navItemActiveText}>결제 내역</span>
          </div>
          <div className={navItem}>
            <LayoutDashboard size={18} className={navItemIcon} />
            <span className={navItemText}>대시보드</span>
          </div>
          <div className={navItem}>
            <Users size={18} className={navItemIcon} />
            <span className={navItemText}>사용자 관리</span>
          </div>
          {/* Disabled */}
          <div className={navItemDisabled}>
            <Settings size={18} className={navItemIcon} />
            <span className={navItemText}>설정</span>
          </div>
        </nav>

        <div className={logoutRow}>
          <LogOut size={18} className={logoutIcon} />
          <span className={logoutText}>로그아웃</span>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className={mainArea}>

        {/* Page heading */}
        <div>
          <h1 className={pageTitleText}>결제 및 구독 관리</h1>
          <p className={pageSubText}>플랜, 결제 수단, 청구 내역을 관리하세요.</p>
        </div>

        {/* Section 4 first per layout order matching spec visual hierarchy — actually spec says 1→4 order */}

        {/* ── Section 1: Plan Selection ── */}
        <section>
          <h2 className={sectionTitle}>플랜 선택</h2>
          <div className={planGrid}>

            {/* Free */}
            <div className={planCardFree}>
              <div className={planBody}>
                <div className={planNameFree}>Free</div>
                <div className={planPriceFree}>₩0/월</div>
                <ul className={featureList}>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>기본 워크스페이스</span></li>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>팀원 최대 3명</span></li>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>5GB 스토리지</span></li>
                  <li className={featureItemExcluded}><X size={16} className={featureXIcon} /><span>고급 분석</span></li>
                  <li className={featureItemExcluded}><X size={16} className={featureXIcon} /><span>우선 지원</span></li>
                </ul>
                <button className={btnCurrentPlanDisabled} disabled>현재 플랜</button>
              </div>
            </div>

            {/* Pro */}
            <div className={planCardPro}>
              <div className={proBanner}><span className={proBannerText}>추천</span></div>
              <div className={planBody}>
                <div className={planNameProRow}>
                  <span className={planNamePro}>Pro</span>
                  <span className={currentBadge}>현재 플랜</span>
                </div>
                <div className={planPricePro}>₩49,000/월</div>
                <ul className={featureList}>
                  <li className={featureItemPro}><Check size={16} className={featureCheckBrand} /><span>무제한 워크스페이스</span></li>
                  <li className={featureItemPro}><Check size={16} className={featureCheckBrand} /><span>팀원 무제한</span></li>
                  <li className={featureItemPro}><Check size={16} className={featureCheckBrand} /><span>50GB 스토리지</span></li>
                  <li className={featureItemPro}><Check size={16} className={featureCheckBrand} /><span>고급 분석</span></li>
                  <li className={featureItemPro}><Check size={16} className={featureCheckBrand} /><span>우선 지원</span></li>
                  <li className={featureItemProExcluded}><X size={16} className={featureCheckBrand} /><span>전용 인프라</span></li>
                </ul>
                <button className={btnCurrentProDisabled} disabled>현재 사용 중</button>
                <p className={planMemoText}>다음 결제일: 2025년 9월 1일</p>
              </div>
            </div>

            {/* Enterprise */}
            <div className={planCardFree}>
              <div className={planBody}>
                <div className={planNameFree}>Enterprise</div>
                <div className={planPriceFree}>맞춤 견적</div>
                <ul className={featureList}>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>무제한 워크스페이스</span></li>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>팀원 무제한</span></li>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>무제한 스토리지</span></li>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>고급 분석 + 커스텀</span></li>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>전담 지원</span></li>
                  <li className={featureItem}><Check size={16} className={featureCheckPos} /><span>전용 인프라</span></li>
                </ul>
                <button className={btnEnterprise}>영업팀 문의</button>
              </div>
            </div>

          </div>
        </section>

        {/* ── Section 2: Payment Method ── */}
        <div className={sectionCard}>
          <h2 className={sectionTitle}>등록된 결제 수단</h2>

          <div className={paymentRow}>
            <div className={cardArt}>
              <CreditCard size={24} className={cardArtIcon} />
              <span className={cardArtNumber}>•••• •••• •••• 4242</span>
            </div>

            <div className={cardInfo}>
              <div className={cardName}>Visa</div>
              <div className={cardExpRow}>
                <span className={cardExp}>만료일 12/26</span>
                <span className={validBadge}>유효</span>
              </div>
            </div>

            <div className={cardActions}>
              <button className={btnOutlineNeutral}>변경</button>
              <button className={btnGhostCritical}>삭제</button>
            </div>
          </div>

          {/* Warning banner */}
          <div className={warningBanner}>
            <AlertTriangle size={18} className={warningBannerIcon} />
            <span className={warningBannerText}>
              결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
            </span>
            <span className={warningBannerLink}>카드 변경</span>
          </div>
        </div>

        {/* ── Section 3: Billing History ── */}
        <div className={sectionCard}>
          <div className={tableHeader}>
            <h2 className={tableSectionTitle}>결제 내역</h2>
            <button className={csvBtn}>
              <Download size={16} className={csvBtnIcon} />
              CSV 내보내기
            </button>
          </div>

          <table className={tableEl}>
            <thead className={tableHead}>
              <tr>
                <th className={th}>날짜</th>
                <th className={th}>내역</th>
                <th className={th}>금액</th>
                <th className={th}>상태</th>
                <th className={th}>액션</th>
              </tr>
            </thead>
            <tbody>
              {billingRows.map((row, index) => {
                const isCritical = row.status === 'critical';
                const isEven = index % 2 === 1;
                const cellCls = isCritical ? tdCriticalRow : isEven ? tdEven : tdBase;

                return (
                  <tr key={row.id}>
                    <td className={cellCls}>{row.date}</td>
                    <td className={cellCls}>{row.desc}</td>
                    <td className={cellCls}>{row.amount}</td>
                    <td className={cellCls}>
                      {row.status === 'success'  && <span className={badgePositive}>{row.label}</span>}
                      {row.status === 'critical' && <span className={badgeCriticalFilled}>{row.label}</span>}
                      {row.status === 'warning'  && <span className={badgeWarning}>{row.label}</span>}
                      {row.status === 'info'     && <span className={badgeInfo}>{row.label}</span>}
                    </td>
                    <td className={cellCls}>
                      {row.action === 'receipt' && (
                        <button className={iconBtnGhost} aria-label="영수증">
                          <FileText size={16} />
                        </button>
                      )}
                      {row.action === 'retry' && (
                        <button className={btnOutlineCritical}>
                          <RefreshCw size={14} className={retryIcon} />
                          재시도
                        </button>
                      )}
                      {row.action === 'detail' && (
                        <button className={iconBtnGhost} aria-label="상세">
                          <FileText size={16} />
                        </button>
                      )}
                      {row.action === 'none' && <span>—</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ── Section 4: Billing Summary ── */}
        <section>
          <div className={summaryGrid}>

            {/* 이번 달 청구 */}
            <div className={summaryCardBase}>
              <TrendingUp size={22} className={summaryIconPos} />
              <div className={summaryAmount}>₩58,000</div>
              <span className={badgePositiveSubtle}>정상 결제</span>
              <div className={summarySub}>Pro ₩49,000 + 추가 ₩9,000</div>
            </div>

            {/* 미결제 금액 */}
            <div className={summaryCardCritical}>
              <AlertCircle size={22} className={summaryIconCrit} />
              <div className={summaryAmountCritical}>₩49,000</div>
              <span className={badgeCriticalFilled}>미결제</span>
              <button className={btnCriticalFilled}>지금 결제</button>
            </div>

            {/* 다음 결제일 */}
            <div className={summaryCardBase}>
              <Calendar size={22} className={summaryIconInfo} />
              <div className={summaryDate}>2025년 9월 1일</div>
              <span className={badgeInfoSubtle}>예정</span>
              <div className={summarySub}>Pro 플랜 월정액 ₩49,000</div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
