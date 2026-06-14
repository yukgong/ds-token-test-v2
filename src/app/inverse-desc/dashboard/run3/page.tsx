import {
  LayoutDashboard,
  Users,
  CreditCard,
  Bell,
  ScrollText,
  LogOut,
  Search,
  Settings,
  Plus,
  CheckCircle2,
  XCircle,
  Info,
  TrendingUp,
  AlertCircle,
  Zap,
  Clock,
  Filter,
  Download,
  Eye,
  AlertTriangle,
  X,
} from 'lucide-react';
import { css } from '@ds-token-test/styled-system-intent-first-slotfirst/css';

// ── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar() {
  const sidebarRoot = css({
    width: '240px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    backgroundColor: 'canvas.neutral.01',
  });

  const logoArea = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '20px 16px',
  });

  const logoIconStyle = css({
    color: 'icon.primary.base',
  });

  const logoText = css({
    fontSize: '18px',
    fontWeight: '700',
    color: 'text.neutral.base',
  });

  const navList = css({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '8px',
    gap: '2px',
  });

  const navItemActive = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'overlay.lighten.hover',
    color: 'text.neutral.base',
  });

  const navItemStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
  });

  const navItemDisabled = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'not-allowed',
    opacity: 0.38,
  });

  const navIconStyle = css({
    color: 'icon.neutral.base',
  });

  const navTextStyle = css({
    color: 'text.neutral.base',
    fontSize: '14px',
    fontWeight: '500',
  });

  const divider = css({
    borderTop: '1px solid',
    borderColor: 'border.neutral.low',
    margin: '8px',
  });

  const logoutBtn = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    margin: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
  });

  const logoutIconStyle = css({
    color: 'icon.critical.base',
  });

  const logoutTextStyle = css({
    color: 'text.critical.base',
    fontSize: '14px',
    fontWeight: '500',
  });

  return (
    <aside className={`dark ${sidebarRoot}`}>
      <div className={logoArea}>
        <LayoutDashboard size={24} className={logoIconStyle} />
        <span className={logoText}>Mildang</span>
      </div>
      <nav className={navList}>
        <div className={navItemActive}>
          <LayoutDashboard size={18} className={navIconStyle} />
          <span className={navTextStyle}>대시보드</span>
        </div>
        <div className={navItemStyle}>
          <Users size={18} className={navIconStyle} />
          <span className={navTextStyle}>사용자 관리</span>
        </div>
        <div className={navItemStyle}>
          <CreditCard size={18} className={navIconStyle} />
          <span className={navTextStyle}>결제 내역</span>
        </div>
        <div className={navItemStyle}>
          <Bell size={18} className={navIconStyle} />
          <span className={navTextStyle}>알림 설정</span>
        </div>
        <div className={navItemDisabled}>
          <ScrollText size={18} className={navIconStyle} />
          <span className={navTextStyle}>시스템 로그</span>
        </div>
      </nav>
      <div className={divider} />
      <div className={logoutBtn}>
        <LogOut size={18} className={logoutIconStyle} />
        <span className={logoutTextStyle}>로그아웃</span>
      </div>
    </aside>
  );
}

// ── Tooltip ───────────────────────────────────────────────────────────────────
function Tooltip({ label }: { label: string }) {
  const tooltipStyle = css({
    position: 'absolute',
    bottom: '-32px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'fill.neutral.high',
    color: 'inverse.text.base',
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 10,
    display: 'none',
  });
  return <span className={tooltipStyle}>{label}</span>;
}

// ── Header Bar ────────────────────────────────────────────────────────────────
function HeaderBar() {
  const headerStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: '56px',
    backgroundColor: 'canvas.neutral.02',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.base',
    flexShrink: 0,
  });

  const breadcrumbStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
  });

  const breadcrumbLinkStyle = css({
    color: 'text.primary.base',
    cursor: 'pointer',
    textDecoration: 'none',
  });

  const breadcrumbSeparatorStyle = css({
    color: 'text.neutral.base',
    opacity: 0.38,
  });

  const breadcrumbCurrentStyle = css({
    color: 'text.neutral.base',
    fontWeight: '600',
  });

  const rightAreaStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  const iconBtnStyle = css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'surface.neutral.transparent',
    color: 'icon.neutral.base',
    border: 'none',
    _hover: {
      backgroundColor: 'surface.neutral.high',
    },
  });

  const bellBtnWrapStyle = css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const badgeStyle = css({
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'fill.critical.base',
    color: 'inverse.text.base',
    fontSize: '10px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const vertDividerStyle = css({
    width: '1px',
    height: '24px',
    backgroundColor: 'border.neutral.base',
  });

  const filledBtnStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    borderRadius: '8px',
    backgroundColor: 'fill.primary.base',
    color: 'inverse.text.base',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    _hover: {
      opacity: 0.9,
    },
  });

  const filledBtnIconStyle = css({
    color: 'inverse.icon.base',
  });

  const avatarStyle = css({
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'surface.primary.base',
    color: 'text.primary.base',
    fontSize: '14px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return (
    <header className={headerStyle}>
      <nav className={breadcrumbStyle}>
        <span className={breadcrumbLinkStyle}>홈</span>
        <span className={breadcrumbSeparatorStyle}>/</span>
        <span className={breadcrumbLinkStyle}>모니터링</span>
        <span className={breadcrumbSeparatorStyle}>/</span>
        <span className={breadcrumbCurrentStyle}>대시보드</span>
      </nav>
      <div className={rightAreaStyle}>
        <button className={iconBtnStyle} aria-label="검색">
          <Search size={18} />
          <Tooltip label="검색" />
        </button>
        <div className={bellBtnWrapStyle}>
          <button className={iconBtnStyle} aria-label="알림">
            <Bell size={18} />
            <span className={badgeStyle}>3</span>
            <Tooltip label="알림" />
          </button>
        </div>
        <button className={iconBtnStyle} aria-label="설정">
          <Settings size={18} />
          <Tooltip label="설정" />
        </button>
        <div className={vertDividerStyle} />
        <button className={filledBtnStyle}>
          <Plus size={16} className={filledBtnIconStyle} />
          새 배포
        </button>
        <div className={avatarStyle}>K</div>
      </div>
    </header>
  );
}

// ── Toast Area ────────────────────────────────────────────────────────────────
function ToastArea() {
  const wrapperStyle = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
    padding: '12px 24px',
  });

  const toastBase = css({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid',
    minWidth: '320px',
    maxWidth: '400px',
  });

  const toastPositive = css({
    backgroundColor: 'surface.positive.base',
    borderColor: 'border.positive.base',
  });

  const toastCritical = css({
    backgroundColor: 'surface.critical.base',
    borderColor: 'border.critical.base',
  });

  const toastInfo = css({
    backgroundColor: 'surface.info.base',
    borderColor: 'border.info.base',
  });

  const toastTextPositive = css({
    color: 'text.positive.base',
    fontSize: '13px',
    flex: 1,
  });

  const toastTextCritical = css({
    color: 'text.critical.base',
    fontSize: '13px',
    flex: 1,
  });

  const toastTextInfo = css({
    color: 'text.info.base',
    fontSize: '13px',
    flex: 1,
  });

  const toastIconPositive = css({ color: 'icon.positive.base', flexShrink: 0 });
  const toastIconCritical = css({ color: 'icon.critical.base', flexShrink: 0 });
  const toastIconInfo = css({ color: 'icon.info.base', flexShrink: 0 });

  const closePositive = css({
    color: 'icon.positive.base',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    flexShrink: 0,
  });

  const closeCritical = css({
    color: 'icon.critical.base',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    flexShrink: 0,
  });

  const closeInfo = css({
    color: 'icon.info.base',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    flexShrink: 0,
  });

  return (
    <div className={wrapperStyle}>
      <div className={`${toastBase} ${toastPositive}`}>
        <CheckCircle2 size={18} className={toastIconPositive} />
        <span className={toastTextPositive}>배포 v2.4.1이 완료되었습니다.</span>
        <button className={closePositive} aria-label="닫기"><X size={16} /></button>
      </div>
      <div className={`${toastBase} ${toastCritical}`}>
        <XCircle size={18} className={toastIconCritical} />
        <span className={toastTextCritical}>DB 연결이 끊어졌습니다. 즉시 확인하세요.</span>
        <button className={closeCritical} aria-label="닫기"><X size={16} /></button>
      </div>
      <div className={`${toastBase} ${toastInfo}`}>
        <Info size={18} className={toastIconInfo} />
        <span className={toastTextInfo}>시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.</span>
        <button className={closeInfo} aria-label="닫기"><X size={16} /></button>
      </div>
    </div>
  );
}

// ── Stat Cards ────────────────────────────────────────────────────────────────
function StatCards() {
  const gridStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    padding: '0 24px',
  });

  const cardStyle = css({
    backgroundColor: 'canvas.neutral.02',
    border: '1px solid',
    borderColor: 'border.neutral.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  });

  const cardHeaderStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  });

  const cardLabelStyle = css({
    fontSize: '14px',
    color: 'text.neutral.low',
  });

  const cardValueStyle = css({
    fontSize: '28px',
    fontWeight: '700',
    color: 'text.neutral.base',
  });

  const badgePositive = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '2px 8px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'surface.positive.base',
    color: 'text.positive.base',
    border: '1px solid',
    borderColor: 'border.positive.base',
  });

  const badgeCritical = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '2px 8px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'surface.critical.base',
    color: 'text.critical.base',
    border: '1px solid',
    borderColor: 'border.critical.base',
  });

  const badgeWarning = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '2px 8px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'surface.warning.base',
    color: 'text.warning.base',
    border: '1px solid',
    borderColor: 'border.warning.base',
  });

  const iconPositive = css({ color: 'icon.positive.base' });
  const iconCritical = css({ color: 'icon.critical.base' });
  const iconWarning = css({ color: 'icon.warning.base' });

  return (
    <div className={gridStyle}>
      {/* Card 1: 총 사용자 */}
      <div className={cardStyle}>
        <div className={cardHeaderStyle}>
          <span className={cardLabelStyle}>총 사용자</span>
          <TrendingUp size={20} className={iconPositive} />
        </div>
        <span className={cardValueStyle}>12,847</span>
        <div>
          <span className={badgePositive}>+12%</span>
        </div>
      </div>
      {/* Card 2: 결제 실패 */}
      <div className={cardStyle}>
        <div className={cardHeaderStyle}>
          <span className={cardLabelStyle}>결제 실패</span>
          <AlertCircle size={20} className={iconCritical} />
        </div>
        <span className={cardValueStyle}>24건</span>
        <div>
          <span className={badgeCritical}>+3건</span>
        </div>
      </div>
      {/* Card 3: 평균 응답시간 */}
      <div className={cardStyle}>
        <div className={cardHeaderStyle}>
          <span className={cardLabelStyle}>평균 응답시간</span>
          <Zap size={20} className={iconPositive} />
        </div>
        <span className={cardValueStyle}>142ms</span>
        <div>
          <span className={badgePositive}>-8%</span>
        </div>
      </div>
      {/* Card 4: 미처리 민원 */}
      <div className={cardStyle}>
        <div className={cardHeaderStyle}>
          <span className={cardLabelStyle}>미처리 민원</span>
          <Clock size={20} className={iconWarning} />
        </div>
        <span className={cardValueStyle}>7건</span>
        <div>
          <span className={badgeWarning}>+2건</span>
        </div>
      </div>
    </div>
  );
}

// ── Resource Cards ────────────────────────────────────────────────────────────
function ResourceCards() {
  const gridStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '16px',
    padding: '16px 24px 0',
  });

  const cardStyle = css({
    backgroundColor: 'canvas.neutral.02',
    border: '1px solid',
    borderColor: 'border.neutral.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  });

  const labelStyle = css({ fontSize: '14px', color: 'text.neutral.low' });
  const valueStyle = css({ fontSize: '24px', fontWeight: '700', color: 'text.neutral.base' });

  const progressTrack = css({
    height: '8px',
    borderRadius: '999px',
    backgroundColor: 'fill.neutral.base',
    overflow: 'hidden',
  });

  const progressFillPositive = css({
    height: '100%',
    borderRadius: '999px',
    backgroundColor: 'fill.positive.base',
    width: '42%',
  });

  const progressFillWarning = css({
    height: '100%',
    borderRadius: '999px',
    backgroundColor: 'fill.warning.base',
    width: '78%',
  });

  const progressFillCritical = css({
    height: '100%',
    borderRadius: '999px',
    backgroundColor: 'fill.critical.base',
    width: '91%',
  });

  const statusPositive = css({ fontSize: '13px', color: 'text.positive.base' });
  const statusWarning = css({ fontSize: '13px', color: 'text.warning.base' });
  const statusCritical = css({ fontSize: '13px', color: 'text.critical.base' });

  return (
    <div className={gridStyle}>
      <div className={cardStyle}>
        <span className={labelStyle}>CPU 사용량</span>
        <span className={valueStyle}>42%</span>
        <div className={progressTrack}>
          <div className={progressFillPositive} />
        </div>
        <span className={statusPositive}>여유로운 상태</span>
      </div>
      <div className={cardStyle}>
        <span className={labelStyle}>메모리 사용량</span>
        <span className={valueStyle}>78%</span>
        <div className={progressTrack}>
          <div className={progressFillWarning} />
        </div>
        <span className={statusWarning}>주의 필요</span>
      </div>
      <div className={cardStyle}>
        <span className={labelStyle}>디스크 사용량</span>
        <span className={valueStyle}>91%</span>
        <div className={progressTrack}>
          <div className={progressFillCritical} />
        </div>
        <span className={statusCritical}>심각한 문제</span>
      </div>
    </div>
  );
}

// ── Events Table ──────────────────────────────────────────────────────────────
function EventsTable() {
  const wrapperStyle = css({
    margin: '16px 24px 0',
    backgroundColor: 'canvas.neutral.02',
    border: '1px solid',
    borderColor: 'border.neutral.base',
    borderRadius: '12px',
    overflow: 'hidden',
  });

  const tableHeaderAreaStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px 0',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.low',
  });

  const tabsStyle = css({ display: 'flex', gap: '0' });

  const tabActiveStyle = css({
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'text.neutral.base',
    borderBottom: '2px solid',
    borderColor: 'border.primary.highest',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid',
    borderBottomColor: 'border.primary.highest',
  });

  const tabInactiveStyle = css({
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '400',
    color: 'text.neutral.base',
    opacity: 0.38,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid transparent',
    _hover: {
      opacity: 0.7,
    },
  });

  const btnGroupStyle = css({ display: 'flex', gap: '8px', paddingBottom: '12px' });

  const outlineBtnStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'border.neutral.base',
    backgroundColor: 'surface.neutral.transparent',
    color: 'text.neutral.base',
    fontSize: '13px',
    cursor: 'pointer',
    _hover: {
      backgroundColor: 'surface.neutral.high',
    },
  });

  const outlineBtnIconStyle = css({ color: 'icon.neutral.base' });

  const disabledBtnStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'border.neutral.base',
    backgroundColor: 'surface.neutral.transparent',
    color: 'text.neutral.base',
    fontSize: '13px',
    cursor: 'not-allowed',
    opacity: 0.38,
  });

  const tagBarStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 20px',
    gap: '8px',
  });

  const tagsStyle = css({ display: 'flex', gap: '8px' });

  const tagSelectedStyle = css({
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: 'fill.primary.base',
    color: 'inverse.text.base',
    cursor: 'pointer',
    border: 'none',
  });

  const tagUnselectedStyle = css({
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: '400',
    backgroundColor: 'surface.neutral.base',
    color: 'text.neutral.base',
    cursor: 'pointer',
    border: 'none',
    _hover: {
      backgroundColor: 'surface.neutral.high',
    },
  });

  const searchAreaStyle = css({ display: 'flex', flexDirection: 'column', gap: '6px' });

  const inputStyle = css({
    padding: '7px 12px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'border.neutral.base',
    backgroundColor: 'surface.neutral.base',
    color: 'text.neutral.base',
    fontSize: '13px',
    outline: 'none',
    _placeholder: {
      color: 'text.neutral.lowest',
      opacity: 0.38,
    },
    _focus: {
      borderColor: 'focus.border',
      outline: '2px solid',
      outlineColor: 'focus.border',
      outlineOffset: '1px',
    },
  });

  const inputErrorStyle = css({
    padding: '7px 12px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'border.critical.base',
    backgroundColor: 'surface.critical.base',
    color: 'text.neutral.base',
    fontSize: '13px',
    outline: 'none',
  });

  const inputErrorMsgStyle = css({
    fontSize: '12px',
    color: 'text.critical.base',
  });

  const tableStyle = css({ width: '100%', borderCollapse: 'collapse' });

  const thStyle = css({
    padding: '10px 16px',
    fontSize: '12px',
    fontWeight: '600',
    color: 'text.neutral.low',
    textAlign: 'left',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.low',
    backgroundColor: 'canvas.neutral.01',
  });

  const tdStyle = css({
    padding: '12px 16px',
    fontSize: '13px',
    color: 'text.neutral.base',
    verticalAlign: 'middle',
  });

  const rowEvenStyle = css({
    backgroundColor: 'canvas.neutral.01',
  });

  const avatarSmallStyle = css({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'surface.neutral.base',
    color: 'text.neutral.base',
    fontSize: '12px',
    fontWeight: '700',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '8px',
  });

  const userCellStyle = css({ display: 'flex', alignItems: 'center' });

  const statusPositive = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    color: 'text.positive.base',
    fontSize: '13px',
  });

  const statusCritical = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    color: 'text.critical.base',
    fontSize: '13px',
  });

  const statusWarning = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    color: 'text.warning.base',
    fontSize: '13px',
  });

  const iconPositive = css({ color: 'icon.positive.base' });
  const iconCritical = css({ color: 'icon.critical.base' });
  const iconWarning = css({ color: 'icon.warning.base' });

  const eyeBtnStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: 'surface.neutral.transparent',
    color: 'icon.neutral.base',
    border: 'none',
    _hover: {
      backgroundColor: 'surface.neutral.high',
    },
  });

  const rows = [
    { initial: '홍', event: '로그인 성공', time: '14:32', status: 'positive' as const },
    { initial: '김', event: '결제 실패', time: '14:28', status: 'critical' as const },
    { initial: '이', event: '비밀번호 5회 오류', time: '14:21', status: 'warning' as const },
    { initial: '박', event: '회원가입', time: '14:15', status: 'positive' as const },
    { initial: '시', event: 'API 응답 지연', time: '14:09', status: 'warning' as const },
  ];

  const statusMap = {
    positive: { label: '정상 처리됨', className: statusPositive, iconClass: iconPositive, Icon: CheckCircle2 },
    critical: { label: '문제 발생', className: statusCritical, iconClass: iconCritical, Icon: XCircle },
    warning: { label: '주의 필요', className: statusWarning, iconClass: iconWarning, Icon: AlertCircle },
  };

  return (
    <div className={wrapperStyle}>
      <div className={tableHeaderAreaStyle}>
        <div className={tabsStyle}>
          <button className={tabActiveStyle}>전체 이벤트</button>
          <button className={tabInactiveStyle}>미처리</button>
          <button className={tabInactiveStyle}>처리완료</button>
        </div>
        <div className={btnGroupStyle}>
          <button className={outlineBtnStyle}>
            <Filter size={14} className={outlineBtnIconStyle} />
            필터
          </button>
          <button className={disabledBtnStyle} disabled>
            <Download size={14} />
            CSV 내보내기
          </button>
        </div>
      </div>

      <div className={tagBarStyle}>
        <div className={tagsStyle}>
          <button className={tagSelectedStyle}>전체</button>
          <button className={tagUnselectedStyle}>로그인</button>
          <button className={tagUnselectedStyle}>결제</button>
          <button className={tagUnselectedStyle}>보안</button>
          <button className={tagUnselectedStyle}>시스템</button>
        </div>
        <div className={searchAreaStyle}>
          <input className={inputStyle} placeholder="이벤트 검색" />
          <input className={inputErrorStyle} defaultValue="2025-99-99" placeholder="날짜 검색" />
          <span className={inputErrorMsgStyle}>잘못된 날짜 형식입니다.</span>
        </div>
      </div>

      <table className={tableStyle}>
        <thead>
          <tr>
            <th className={thStyle}>사용자</th>
            <th className={thStyle}>이벤트</th>
            <th className={thStyle}>시간</th>
            <th className={thStyle}>상태</th>
            <th className={thStyle}>액션</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const { label, className: stClass, iconClass, Icon } = statusMap[row.status];
            return (
              <tr key={idx} className={idx % 2 === 1 ? rowEvenStyle : undefined}>
                <td className={tdStyle}>
                  <div className={userCellStyle}>
                    <span className={avatarSmallStyle}>{row.initial}</span>
                    {row.initial}씨
                  </div>
                </td>
                <td className={tdStyle}>{row.event}</td>
                <td className={tdStyle}>{row.time}</td>
                <td className={tdStyle}>
                  <span className={stClass}>
                    <Icon size={14} className={iconClass} />
                    {label}
                  </span>
                </td>
                <td className={tdStyle}>
                  <button className={eyeBtnStyle} aria-label="상세 보기">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Toggle Panel ──────────────────────────────────────────────────────────────
function TogglePanel() {
  const wrapperStyle = css({
    margin: '16px 24px 0',
    backgroundColor: 'canvas.neutral.02',
    border: '1px solid',
    borderColor: 'border.neutral.base',
    borderRadius: '12px',
    padding: '20px',
  });

  const titleStyle = css({
    fontSize: '16px',
    fontWeight: '700',
    color: 'text.neutral.base',
    marginBottom: '16px',
  });

  const rowStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.low',
  });

  const rowLastStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
  });

  const labelStyle = css({ fontSize: '14px', color: 'text.neutral.base' });
  const labelDisabledStyle = css({ fontSize: '14px', color: 'text.neutral.base', opacity: 0.38 });

  const toggleOnStyle = css({
    width: '44px',
    height: '24px',
    borderRadius: '999px',
    backgroundColor: 'fill.primary.base',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    padding: '0 3px',
    justifyContent: 'flex-end',
  });

  const toggleOffStyle = css({
    width: '44px',
    height: '24px',
    borderRadius: '999px',
    backgroundColor: 'fill.neutral.base',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    padding: '0 3px',
    justifyContent: 'flex-start',
  });

  const toggleDisabledStyle = css({
    width: '44px',
    height: '24px',
    borderRadius: '999px',
    backgroundColor: 'fill.neutral.base',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'not-allowed',
    border: 'none',
    padding: '0 3px',
    justifyContent: 'flex-start',
    opacity: 0.38,
  });

  const handleStyle = css({
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: 'canvas.neutral.02',
  });

  return (
    <div className={wrapperStyle}>
      <h2 className={titleStyle}>알림 수신 설정</h2>
      <div className={rowStyle}>
        <span className={labelStyle}>배포 알림</span>
        <button className={toggleOnStyle} aria-label="배포 알림 켜짐">
          <div className={handleStyle} />
        </button>
      </div>
      <div className={rowStyle}>
        <span className={labelStyle}>장애 알림</span>
        <button className={toggleOnStyle} aria-label="장애 알림 켜짐">
          <div className={handleStyle} />
        </button>
      </div>
      <div className={rowStyle}>
        <span className={labelStyle}>보안 알림</span>
        <button className={toggleOffStyle} aria-label="보안 알림 꺼짐">
          <div className={handleStyle} />
        </button>
      </div>
      <div className={rowLastStyle}>
        <span className={labelDisabledStyle}>마케팅 알림</span>
        <button className={toggleDisabledStyle} disabled aria-label="마케팅 알림 비활성">
          <div className={handleStyle} />
        </button>
      </div>
    </div>
  );
}

// ── Bottom Notification Cards ─────────────────────────────────────────────────
function BottomCards() {
  const gridStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '16px',
    margin: '16px 24px 24px',
  });

  const cardBase = css({
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  });

  const cardPositive = css({
    backgroundColor: 'surface.positive.base',
    borderColor: 'border.positive.base',
  });

  const cardCritical = css({
    backgroundColor: 'surface.critical.base',
    borderColor: 'border.critical.base',
  });

  const cardWarning = css({
    backgroundColor: 'surface.warning.base',
    borderColor: 'border.warning.base',
  });

  const cardTitleRow = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  const cardTitleInner = css({ display: 'flex', alignItems: 'center', gap: '8px' });

  const titlePositive = css({ fontSize: '15px', fontWeight: '700', color: 'text.positive.base' });
  const titleCritical = css({ fontSize: '15px', fontWeight: '700', color: 'text.critical.base' });
  const titleWarning = css({ fontSize: '15px', fontWeight: '700', color: 'text.warning.base' });

  const iconPositive = css({ color: 'icon.positive.base' });
  const iconCritical = css({ color: 'icon.critical.base' });
  const iconWarning = css({ color: 'icon.warning.base' });

  const closePositive = css({ color: 'icon.positive.base', background: 'none', border: 'none', cursor: 'pointer', padding: 0 });
  const closeCritical = css({ color: 'icon.critical.base', background: 'none', border: 'none', cursor: 'pointer', padding: 0 });
  const closeWarning = css({ color: 'icon.warning.base', background: 'none', border: 'none', cursor: 'pointer', padding: 0 });

  const descPositive = css({ fontSize: '13px', color: 'text.positive.base' });
  const descCritical = css({ fontSize: '13px', color: 'text.critical.base' });
  const descWarning = css({ fontSize: '13px', color: 'text.warning.base' });

  const btnRowStyle = css({ display: 'flex', gap: '8px', flexWrap: 'wrap' });

  const outlineBtnPositive = css({
    padding: '6px 12px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'border.positive.highest',
    backgroundColor: 'surface.neutral.transparent',
    color: 'text.positive.base',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: '500',
  });

  const filledBtnCritical = css({
    padding: '6px 12px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: 'fill.critical.base',
    color: 'inverse.text.base',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: '600',
  });

  const ghostBtnCritical = css({
    padding: '6px 12px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: 'surface.neutral.transparent',
    color: 'text.critical.base',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: '500',
  });

  const outlineBtnWarning = css({
    padding: '6px 12px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'border.warning.highest',
    backgroundColor: 'surface.neutral.transparent',
    color: 'text.warning.base',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: '500',
  });

  return (
    <div className={gridStyle}>
      {/* Card 1: 배포 완료 */}
      <div className={`${cardBase} ${cardPositive}`}>
        <div className={cardTitleRow}>
          <div className={cardTitleInner}>
            <CheckCircle2 size={18} className={iconPositive} />
            <span className={titlePositive}>배포 완료</span>
          </div>
          <button className={closePositive} aria-label="닫기"><X size={16} /></button>
        </div>
        <p className={descPositive}>v2.4.1이 성공적으로 배포되었습니다.</p>
        <div className={btnRowStyle}>
          <button className={outlineBtnPositive}>배포 로그 보기</button>
        </div>
      </div>
      {/* Card 2: 연결 실패 */}
      <div className={`${cardBase} ${cardCritical}`}>
        <div className={cardTitleRow}>
          <div className={cardTitleInner}>
            <XCircle size={18} className={iconCritical} />
            <span className={titleCritical}>연결 실패</span>
          </div>
          <button className={closeCritical} aria-label="닫기"><X size={16} /></button>
        </div>
        <p className={descCritical}>DB 연결이 실패했습니다.</p>
        <div className={btnRowStyle}>
          <button className={filledBtnCritical}>즉시 확인</button>
          <button className={ghostBtnCritical}>무시</button>
        </div>
      </div>
      {/* Card 3: 용량 경고 */}
      <div className={`${cardBase} ${cardWarning}`}>
        <div className={cardTitleRow}>
          <div className={cardTitleInner}>
            <AlertTriangle size={18} className={iconWarning} />
            <span className={titleWarning}>용량 경고</span>
          </div>
          <button className={closeWarning} aria-label="닫기"><X size={16} /></button>
        </div>
        <p className={descWarning}>디스크 사용량이 85%입니다.</p>
        <div className={btnRowStyle}>
          <button className={outlineBtnWarning}>정리 시작</button>
        </div>
      </div>
    </div>
  );
}

// ── Page Root ─────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const pageStyle = css({
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: 'canvas.neutral.01',
  });

  const mainStyle = css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: 'canvas.neutral.01',
  });

  const scrollAreaStyle = css({
    flex: 1,
    overflowY: 'auto',
  });

  return (
    <div className={pageStyle}>
      <Sidebar />
      <main className={mainStyle}>
        <HeaderBar />
        <div className={scrollAreaStyle}>
          <ToastArea />
          <StatCards />
          <ResourceCards />
          <EventsTable />
          <TogglePanel />
          <BottomCards />
        </div>
      </main>
    </div>
  );
}
