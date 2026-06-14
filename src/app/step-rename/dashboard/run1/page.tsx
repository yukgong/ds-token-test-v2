import { css } from '@ds-token-test/styled-system-intent-first-stepnames/css';
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
  X,
  TrendingUp,
  AlertCircle,
  Zap,
  Clock,
  Filter,
  Download,
  Eye,
  AlertTriangle,
} from 'lucide-react';

// ─── Sidebar ───────────────────────────────────────────────────────────────

function Sidebar() {
  const root = css({
    width: '240px',
    height: '100vh',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'neutral.canvas.01',
    borderRight: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const logoArea = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '20px 16px',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const logoIconWrap = css({
    color: 'primary.icon.default',
  });

  const logoText = css({
    fontSize: '18px',
    fontWeight: '700',
    color: 'neutral.text.default',
  });

  const nav = css({
    flex: '1',
    padding: '12px 8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  });

  // Active menu item — lighten overlay on dark bg
  const navItemActive = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'overlay.lighten.hover',
    color: 'neutral.text.default',
  });

  const navItemActiveIcon = css({
    color: 'neutral.icon.default',
  });

  const navItem = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    color: 'neutral.text.subtle',
    _hover: {
      backgroundColor: 'neutral.surface.strongest',
    },
  });

  const navItemIcon = css({
    color: 'neutral.icon.default',
  });

  const navItemDisabled = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'not-allowed',
    color: 'neutral.text.subtle',
    opacity: 0.38,
  });

  const navLabel = css({
    fontSize: '14px',
    fontWeight: '500',
  });

  const bottomArea = css({
    padding: '12px 8px',
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
    color: 'critical.text.default',
    _hover: {
      backgroundColor: 'critical.surface.default',
    },
  });

  const logoutIcon = css({
    color: 'critical.icon.default',
  });

  return (
    <aside className={`dark ${root}`}>
      {/* Logo */}
      <div className={logoArea}>
        <span className={logoIconWrap}>
          <LayoutDashboard size={22} />
        </span>
        <span className={logoText}>Mildang</span>
      </div>

      {/* Nav */}
      <nav className={nav}>
        {/* Active */}
        <div className={navItemActive}>
          <span className={navItemActiveIcon}><LayoutDashboard size={18} /></span>
          <span className={navLabel}>대시보드</span>
        </div>
        {/* Normal */}
        <div className={navItem}>
          <span className={navItemIcon}><Users size={18} /></span>
          <span className={navLabel}>사용자 관리</span>
        </div>
        <div className={navItem}>
          <span className={navItemIcon}><CreditCard size={18} /></span>
          <span className={navLabel}>결제 내역</span>
        </div>
        <div className={navItem}>
          <span className={navItemIcon}><Bell size={18} /></span>
          <span className={navLabel}>알림 설정</span>
        </div>
        {/* Disabled */}
        <div className={navItemDisabled}>
          <span><ScrollText size={18} /></span>
          <span className={navLabel}>시스템 로그</span>
        </div>
      </nav>

      {/* Logout */}
      <div className={bottomArea}>
        <button className={logoutBtn}>
          <span className={logoutIcon}><LogOut size={18} /></span>
          <span className={navLabel}>로그아웃</span>
        </button>
      </div>
    </aside>
  );
}

// ─── Header Bar ───────────────────────────────────────────────────────────

function HeaderBar() {
  const header = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: '56px',
    backgroundColor: 'neutral.canvas.02',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.default',
    position: 'relative',
  });

  const breadcrumb = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
  });

  const breadLink = css({
    color: 'primary.text.default',
    cursor: 'pointer',
    _hover: {
      color: 'neutral.text.default',
    },
  });

  const breadSep = css({
    color: 'neutral.text.subtle',
    opacity: 0.38,
  });

  const breadCurrent = css({
    color: 'neutral.text.default',
    fontWeight: '600',
  });

  const rightArea = css({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  });

  const iconBtn = css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.icon.default',
    _hover: {
      backgroundColor: 'neutral.surface.strongest',
    },
  });

  const tooltipWrap = css({
    position: 'relative',
    display: 'inline-flex',
    _hover: {
      '& .tooltip': {
        display: 'block',
      },
    },
  });

  const tooltip = css({
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '6px',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    backgroundColor: 'neutral.fill.strongest',
    color: 'inverse.text.default',
    zIndex: 10,
  });

  const bellWrap = css({
    position: 'relative',
    display: 'inline-flex',
  });

  const badge = css({
    position: 'absolute',
    top: '0px',
    right: '0px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    fontSize: '10px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'critical.fill.default',
    color: 'inverse.text.default',
    pointerEvents: 'none',
  });

  const divider = css({
    width: '1px',
    height: '24px',
    backgroundColor: 'neutral.border.default',
    margin: '0 8px',
  });

  const primaryBtn = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: 'primary.fill.default',
    color: 'inverse.text.default',
    border: 'none',
    _hover: {
      backgroundColor: 'primary.surface.strongest',
    },
  });

  const primaryBtnIcon = css({
    color: 'inverse.icon.default',
  });

  const avatar = css({
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '700',
    backgroundColor: 'primary.surface.default',
    color: 'primary.text.default',
    marginLeft: '8px',
    cursor: 'pointer',
  });

  return (
    <header className={header}>
      {/* Breadcrumb */}
      <div className={breadcrumb}>
        <span className={breadLink}>홈</span>
        <span className={breadSep}>/</span>
        <span className={breadLink}>모니터링</span>
        <span className={breadSep}>/</span>
        <span className={breadCurrent}>대시보드</span>
      </div>

      {/* Right actions */}
      <div className={rightArea}>
        {/* Search */}
        <div className={tooltipWrap}>
          <button className={iconBtn}>
            <Search size={18} />
          </button>
          <div className={`tooltip ${tooltip}`}>검색</div>
        </div>

        {/* Bell + badge */}
        <div className={tooltipWrap}>
          <button className={iconBtn}>
            <div className={bellWrap}>
              <Bell size={18} />
              <span className={badge}>3</span>
            </div>
          </button>
          <div className={`tooltip ${tooltip}`}>알림</div>
        </div>

        {/* Settings */}
        <div className={tooltipWrap}>
          <button className={iconBtn}>
            <Settings size={18} />
          </button>
          <div className={`tooltip ${tooltip}`}>설정</div>
        </div>

        <div className={divider} />

        {/* New Deploy */}
        <button className={primaryBtn}>
          <span className={primaryBtnIcon}><Plus size={16} /></span>
          새 배포
        </button>

        {/* Avatar */}
        <div className={avatar}>K</div>
      </div>
    </header>
  );
}

// ─── Toast Area ────────────────────────────────────────────────────────────

function ToastArea() {
  const wrap = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '12px 24px',
    alignItems: 'flex-end',
  });

  const toastBase = css({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid',
    width: '380px',
    fontSize: '13px',
    fontWeight: '500',
  });

  const toastSuccess = css({
    backgroundColor: 'positive.surface.default',
    borderColor: 'positive.border.default',
  });

  const toastCritical = css({
    backgroundColor: 'critical.surface.default',
    borderColor: 'critical.border.default',
  });

  const toastInfo = css({
    backgroundColor: 'info.surface.default',
    borderColor: 'info.border.default',
  });

  const iconSuccess = css({ color: 'positive.icon.default', flexShrink: 0, marginTop: '1px' });
  const iconCritical = css({ color: 'critical.icon.default', flexShrink: 0, marginTop: '1px' });
  const iconInfo = css({ color: 'info.icon.default', flexShrink: 0, marginTop: '1px' });

  const textSuccess = css({ color: 'positive.text.default', flex: 1 });
  const textCritical = css({ color: 'critical.text.default', flex: 1 });
  const textInfo = css({ color: 'info.text.default', flex: 1 });

  const closeBtn = css({
    color: 'neutral.icon.default',
    cursor: 'pointer',
    flexShrink: 0,
    opacity: 0.6,
  });

  return (
    <div className={wrap}>
      {/* Success */}
      <div className={`${toastBase} ${toastSuccess}`}>
        <span className={iconSuccess}><CheckCircle2 size={16} /></span>
        <span className={textSuccess}>배포 v2.4.1이 완료되었습니다.</span>
        <span className={closeBtn}><X size={14} /></span>
      </div>
      {/* Critical */}
      <div className={`${toastBase} ${toastCritical}`}>
        <span className={iconCritical}><XCircle size={16} /></span>
        <span className={textCritical}>DB 연결이 끊어졌습니다. 즉시 확인하세요.</span>
        <span className={closeBtn}><X size={14} /></span>
      </div>
      {/* Info */}
      <div className={`${toastBase} ${toastInfo}`}>
        <span className={iconInfo}><Info size={16} /></span>
        <span className={textInfo}>시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.</span>
        <span className={closeBtn}><X size={14} /></span>
      </div>
    </div>
  );
}

// ─── Stat Cards ────────────────────────────────────────────────────────────

function StatCards() {
  const grid = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    padding: '0 24px',
    marginBottom: '16px',
  });

  const card = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });

  const cardTop = css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  });

  const cardLabel = css({
    fontSize: '13px',
    color: 'neutral.text.subtle',
    fontWeight: '500',
  });

  const cardValue = css({
    fontSize: '28px',
    fontWeight: '700',
    color: 'neutral.text.default',
    lineHeight: '1.2',
  });

  // Badge base
  const badgeBase = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '3px 8px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid',
    alignSelf: 'flex-start',
  });

  const badgePositive = css({
    backgroundColor: 'positive.surface.default',
    borderColor: 'positive.border.default',
    color: 'positive.text.default',
  });

  const badgeCritical = css({
    backgroundColor: 'critical.surface.default',
    borderColor: 'critical.border.default',
    color: 'critical.text.default',
  });

  const badgeWarning = css({
    backgroundColor: 'warning.surface.default',
    borderColor: 'warning.border.default',
    color: 'warning.text.default',
  });

  const iconPositive = css({ color: 'positive.icon.default' });
  const iconCritical = css({ color: 'critical.icon.default' });
  const iconWarning = css({ color: 'warning.icon.default' });

  return (
    <div className={grid}>
      {/* Card 1: Total Users */}
      <div className={card}>
        <div className={cardTop}>
          <span className={cardLabel}>총 사용자</span>
          <span className={iconPositive}><TrendingUp size={20} /></span>
        </div>
        <span className={cardValue}>12,847</span>
        <div className={`${badgeBase} ${badgePositive}`}>
          <TrendingUp size={12} />
          +12%
        </div>
      </div>

      {/* Card 2: Payment Fail */}
      <div className={card}>
        <div className={cardTop}>
          <span className={cardLabel}>결제 실패</span>
          <span className={iconCritical}><AlertCircle size={20} /></span>
        </div>
        <span className={cardValue}>24건</span>
        <div className={`${badgeBase} ${badgeCritical}`}>
          <AlertCircle size={12} />
          +3건
        </div>
      </div>

      {/* Card 3: Response Time */}
      <div className={card}>
        <div className={cardTop}>
          <span className={cardLabel}>평균 응답시간</span>
          <span className={iconPositive}><Zap size={20} /></span>
        </div>
        <span className={cardValue}>142ms</span>
        <div className={`${badgeBase} ${badgePositive}`}>
          <TrendingUp size={12} />
          -8%
        </div>
      </div>

      {/* Card 4: Pending Complaints */}
      <div className={card}>
        <div className={cardTop}>
          <span className={cardLabel}>미처리 민원</span>
          <span className={iconWarning}><Clock size={20} /></span>
        </div>
        <span className={cardValue}>7건</span>
        <div className={`${badgeBase} ${badgeWarning}`}>
          <Clock size={12} />
          +2건
        </div>
      </div>
    </div>
  );
}

// ─── System Resources ──────────────────────────────────────────────────────

function SystemResources() {
  const section = css({
    padding: '0 24px',
    marginBottom: '16px',
  });

  const grid = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  });

  const card = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  });

  const topRow = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const label = css({
    fontSize: '13px',
    fontWeight: '500',
    color: 'neutral.text.subtle',
  });

  const valueText = css({
    fontSize: '22px',
    fontWeight: '700',
    color: 'neutral.text.default',
  });

  const progressTrack = css({
    height: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: 'neutral.fill.default',
  });

  const barPositive = css({
    height: '100%',
    borderRadius: '4px',
    backgroundColor: 'positive.fill.default',
  });

  const barWarning = css({
    height: '100%',
    borderRadius: '4px',
    backgroundColor: 'warning.fill.default',
  });

  const barCritical = css({
    height: '100%',
    borderRadius: '4px',
    backgroundColor: 'critical.fill.default',
  });

  const statusPositive = css({ fontSize: '12px', color: 'positive.text.default', fontWeight: '500' });
  const statusWarning = css({ fontSize: '12px', color: 'warning.text.default', fontWeight: '500' });
  const statusCritical = css({ fontSize: '12px', color: 'critical.text.default', fontWeight: '500' });

  return (
    <div className={section}>
      <div className={grid}>
        {/* CPU */}
        <div className={card}>
          <div className={topRow}>
            <span className={label}>CPU 사용량</span>
            <span className={valueText}>42%</span>
          </div>
          <div className={progressTrack}>
            <div className={barPositive} style={{ width: '42%' }} />
          </div>
          <span className={statusPositive}>여유로운 상태</span>
        </div>

        {/* Memory */}
        <div className={card}>
          <div className={topRow}>
            <span className={label}>메모리 사용량</span>
            <span className={valueText}>78%</span>
          </div>
          <div className={progressTrack}>
            <div className={barWarning} style={{ width: '78%' }} />
          </div>
          <span className={statusWarning}>주의 필요</span>
        </div>

        {/* Disk */}
        <div className={card}>
          <div className={topRow}>
            <span className={label}>디스크 사용량</span>
            <span className={valueText}>91%</span>
          </div>
          <div className={progressTrack}>
            <div className={barCritical} style={{ width: '91%' }} />
          </div>
          <span className={statusCritical}>심각한 상태</span>
        </div>
      </div>
    </div>
  );
}

// ─── Event Table ───────────────────────────────────────────────────────────

function EventTable() {
  const section = css({
    padding: '0 24px',
    marginBottom: '16px',
  });

  const card = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    overflow: 'hidden',
  });

  // Tab bar
  const tabBar = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const tabs = css({
    display: 'flex',
    alignItems: 'center',
    gap: '0',
  });

  const tabActive = css({
    padding: '14px 16px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'neutral.text.default',
    borderBottom: '2px solid',
    borderColor: 'primary.border.emphasis',
    cursor: 'pointer',
    marginBottom: '-1px',
  });

  const tabInactive = css({
    padding: '14px 16px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'neutral.text.subtle',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    opacity: 0.38,
    _hover: {
      opacity: 0.7,
      color: 'neutral.text.default',
    },
  });

  const tabActions = css({
    display: 'flex',
    gap: '8px',
  });

  const outlineBtn = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.text.default',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    _hover: {
      backgroundColor: 'neutral.surface.strongest',
    },
  });

  const outlineBtnIcon = css({ color: 'neutral.icon.default' });

  const disabledBtn = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'not-allowed',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.text.default',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    opacity: 0.38,
  });

  // Filter + search bar
  const filterRow = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    gap: '12px',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const tagGroup = css({
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  });

  const tagSelected = css({
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: 'primary.fill.default',
    color: 'inverse.text.default',
  });

  const tagDefault = css({
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.default',
    color: 'neutral.text.subtle',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    _hover: {
      backgroundColor: 'neutral.surface.strongest',
      color: 'neutral.text.default',
    },
  });

  const searchWrap = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  });

  const searchInput = css({
    padding: '7px 12px',
    borderRadius: '8px',
    fontSize: '13px',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    backgroundColor: 'neutral.surface.default',
    color: 'neutral.text.default',
    width: '200px',
    outline: 'none',
    _focus: {
      borderColor: 'focus.border',
      boxShadow: '0 0 0 2px token(colors.focus.border)',
    },
    _placeholder: {
      color: 'neutral.text.muted',
      opacity: 0.38,
    },
  });

  const searchInputError = css({
    padding: '7px 12px',
    borderRadius: '8px',
    fontSize: '13px',
    border: '1px solid',
    borderColor: 'critical.border.emphasis',
    backgroundColor: 'critical.surface.default',
    color: 'neutral.text.default',
    width: '200px',
    outline: 'none',
  });

  const errorMsg = css({
    fontSize: '12px',
    color: 'critical.text.default',
  });

  // Table
  const tableWrap = css({
    overflowX: 'auto',
  });

  const table = css({
    width: '100%',
    borderCollapse: 'collapse',
  });

  const th = css({
    padding: '10px 16px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '600',
    color: 'neutral.text.subtle',
    backgroundColor: 'neutral.canvas.03',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const tdBase = css({
    padding: '12px 16px',
    fontSize: '13px',
    color: 'neutral.text.default',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.subtle',
  });

  const trEven = css({
    backgroundColor: 'neutral.surface.default',
  });

  const trOdd = css({
    backgroundColor: 'neutral.canvas.02',
  });

  const avatarCell = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  const avatarCircle = css({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '700',
    flexShrink: 0,
    backgroundColor: 'neutral.surface.strongest',
    color: 'neutral.text.default',
  });

  const statusPositive = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '13px',
    color: 'positive.text.default',
  });

  const statusPositiveIcon = css({ color: 'positive.icon.default' });

  const statusCritical = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '13px',
    color: 'critical.text.default',
  });

  const statusCriticalIcon = css({ color: 'critical.icon.default' });

  const statusWarning = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '13px',
    color: 'warning.text.default',
  });

  const statusWarningIcon = css({ color: 'warning.icon.default' });

  const eyeBtn = css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.icon.default',
    border: 'none',
    _hover: {
      backgroundColor: 'neutral.surface.strongest',
    },
  });

  const rows = [
    { init: '홍', event: '로그인 성공', time: '14:32', status: 'positive', label: '정상 처리됨', even: false },
    { init: '김', event: '결제 실패', time: '14:28', status: 'critical', label: '문제 발생', even: true },
    { init: '이', event: '비밀번호 5회 오류', time: '14:21', status: 'warning', label: '주의 필요', even: false },
    { init: '박', event: '회원가입', time: '14:15', status: 'positive', label: '정상 처리됨', even: true },
    { init: '시', event: 'API 응답 지연', time: '14:09', status: 'warning', label: '주의 필요', even: false },
  ];

  return (
    <div className={section}>
      <div className={card}>
        {/* Tabs */}
        <div className={tabBar}>
          <div className={tabs}>
            <div className={tabActive}>전체 이벤트</div>
            <div className={tabInactive}>미처리</div>
            <div className={tabInactive}>처리완료</div>
          </div>
          <div className={tabActions}>
            <button className={outlineBtn}>
              <span className={outlineBtnIcon}><Filter size={14} /></span>
              필터
            </button>
            <button className={disabledBtn} disabled>
              <Download size={14} />
              CSV 내보내기
            </button>
          </div>
        </div>

        {/* Filter + search */}
        <div className={filterRow}>
          <div className={tagGroup}>
            <span className={tagSelected}>전체</span>
            <span className={tagDefault}>로그인</span>
            <span className={tagDefault}>결제</span>
            <span className={tagDefault}>보안</span>
            <span className={tagDefault}>시스템</span>
          </div>
          <div className={searchWrap}>
            <input
              className={searchInput}
              placeholder="이벤트 검색..."
            />
            <input
              className={searchInputError}
              defaultValue="2025/99/99"
              placeholder="날짜 검색..."
            />
            <span className={errorMsg}>잘못된 날짜 형식입니다.</span>
          </div>
        </div>

        {/* Table */}
        <div className={tableWrap}>
          <table className={table}>
            <thead>
              <tr>
                <th className={th}>사용자</th>
                <th className={th}>이벤트</th>
                <th className={th}>시간</th>
                <th className={th}>상태</th>
                <th className={th}>액션</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={row.even ? trEven : trOdd}>
                  <td className={tdBase}>
                    <div className={avatarCell}>
                      <div className={avatarCircle}>{row.init}</div>
                      <span>{row.init}씨</span>
                    </div>
                  </td>
                  <td className={tdBase}>{row.event}</td>
                  <td className={tdBase}>{row.time}</td>
                  <td className={tdBase}>
                    {row.status === 'positive' && (
                      <span className={statusPositive}>
                        <span className={statusPositiveIcon}><CheckCircle2 size={14} /></span>
                        {row.label}
                      </span>
                    )}
                    {row.status === 'critical' && (
                      <span className={statusCritical}>
                        <span className={statusCriticalIcon}><XCircle size={14} /></span>
                        {row.label}
                      </span>
                    )}
                    {row.status === 'warning' && (
                      <span className={statusWarning}>
                        <span className={statusWarningIcon}><AlertTriangle size={14} /></span>
                        {row.label}
                      </span>
                    )}
                  </td>
                  <td className={tdBase}>
                    <button className={eyeBtn}>
                      <Eye size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Notification Toggle Panel ─────────────────────────────────────────────

function NotificationToggles() {
  const section = css({
    padding: '0 24px',
    marginBottom: '16px',
  });

  const card = css({
    backgroundColor: 'neutral.canvas.02',
    border: '1px solid',
    borderColor: 'neutral.border.default',
    borderRadius: '12px',
    padding: '20px',
  });

  const title = css({
    fontSize: '16px',
    fontWeight: '600',
    color: 'neutral.text.default',
    marginBottom: '16px',
  });

  const toggleList = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  });

  const toggleRow = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  const toggleLabel = css({
    fontSize: '14px',
    color: 'neutral.text.default',
  });

  const toggleRowDisabled = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.38,
  });

  // Toggle track on
  const trackOn = css({
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    padding: '2px',
    cursor: 'pointer',
    backgroundColor: 'primary.fill.default',
    justifyContent: 'flex-end',
  });

  // Toggle track off
  const trackOff = css({
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    padding: '2px',
    cursor: 'pointer',
    backgroundColor: 'neutral.fill.default',
    justifyContent: 'flex-start',
  });

  const handle = css({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'neutral.canvas.01',
    flexShrink: 0,
  });

  const items = [
    { label: '배포 알림', on: true, disabled: false },
    { label: '장애 알림', on: true, disabled: false },
    { label: '보안 알림', on: false, disabled: false },
    { label: '마케팅 알림', on: false, disabled: true },
  ];

  return (
    <div className={section}>
      <div className={card}>
        <div className={title}>알림 수신 설정</div>
        <div className={toggleList}>
          {items.map((item, i) => (
            <div key={i} className={item.disabled ? toggleRowDisabled : toggleRow}>
              <span className={toggleLabel}>{item.label}</span>
              <div className={item.on ? trackOn : trackOff}>
                <div className={handle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Bottom Notification Cards ─────────────────────────────────────────────

function BottomNotificationCards() {
  const section = css({
    padding: '0 24px',
    marginBottom: '24px',
  });

  const grid = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  });

  // Card bases per intent
  const cardBase = css({
    borderRadius: '12px',
    border: '1px solid',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  });

  const cardPositive = css({
    backgroundColor: 'positive.surface.default',
    borderColor: 'positive.border.default',
  });

  const cardCritical = css({
    backgroundColor: 'critical.surface.default',
    borderColor: 'critical.border.default',
  });

  const cardWarning = css({
    backgroundColor: 'warning.surface.default',
    borderColor: 'warning.border.default',
  });

  const cardHeader = css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  });

  const cardTitleRow = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  const closeIcon = css({
    color: 'neutral.icon.default',
    cursor: 'pointer',
    opacity: 0.6,
  });

  const cardTitle = css({
    fontSize: '14px',
    fontWeight: '600',
  });

  const cardDesc = css({
    fontSize: '13px',
  });

  const titlePositive = css({ color: 'positive.text.default' });
  const titleCritical = css({ color: 'critical.text.default' });
  const titleWarning = css({ color: 'warning.text.default' });

  const iconPositive = css({ color: 'positive.icon.default' });
  const iconCritical = css({ color: 'critical.icon.default' });
  const iconWarning = css({ color: 'warning.icon.default' });

  const descPositive = css({ color: 'positive.text.default' });
  const descCritical = css({ color: 'critical.text.default' });
  const descWarning = css({ color: 'warning.text.default' });

  const btnRow = css({
    display: 'flex',
    gap: '8px',
    marginTop: '4px',
  });

  // Outline buttons
  const btnOutlinePositive = css({
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.transparent',
    color: 'positive.text.default',
    border: '1px solid',
    borderColor: 'positive.border.emphasis',
    _hover: {
      backgroundColor: 'positive.surface.strongest',
    },
  });

  const btnOutlineWarning = css({
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.transparent',
    color: 'warning.text.default',
    border: '1px solid',
    borderColor: 'warning.border.emphasis',
    _hover: {
      backgroundColor: 'warning.surface.strongest',
    },
  });

  // Filled critical
  const btnFilledCritical = css({
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: 'critical.fill.default',
    color: 'inverse.text.default',
    border: 'none',
    _hover: {
      backgroundColor: 'critical.surface.strongest',
    },
  });

  // Ghost
  const btnGhost = css({
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.text.subtle',
    border: 'none',
    _hover: {
      backgroundColor: 'neutral.surface.strongest',
    },
  });

  return (
    <div className={section}>
      <div className={grid}>
        {/* Card 1: Success */}
        <div className={`${cardBase} ${cardPositive}`}>
          <div className={cardHeader}>
            <div className={cardTitleRow}>
              <span className={iconPositive}><CheckCircle2 size={18} /></span>
              <span className={`${cardTitle} ${titlePositive}`}>배포 완료</span>
            </div>
            <span className={closeIcon}><X size={14} /></span>
          </div>
          <p className={`${cardDesc} ${descPositive}`}>v2.4.1이 성공적으로 배포되었습니다.</p>
          <div className={btnRow}>
            <button className={btnOutlinePositive}>배포 로그 보기</button>
          </div>
        </div>

        {/* Card 2: Critical */}
        <div className={`${cardBase} ${cardCritical}`}>
          <div className={cardHeader}>
            <div className={cardTitleRow}>
              <span className={iconCritical}><XCircle size={18} /></span>
              <span className={`${cardTitle} ${titleCritical}`}>연결 실패</span>
            </div>
            <span className={closeIcon}><X size={14} /></span>
          </div>
          <p className={`${cardDesc} ${descCritical}`}>DB 연결이 실패했습니다.</p>
          <div className={btnRow}>
            <button className={btnFilledCritical}>즉시 확인</button>
            <button className={btnGhost}>무시</button>
          </div>
        </div>

        {/* Card 3: Warning */}
        <div className={`${cardBase} ${cardWarning}`}>
          <div className={cardHeader}>
            <div className={cardTitleRow}>
              <span className={iconWarning}><AlertTriangle size={18} /></span>
              <span className={`${cardTitle} ${titleWarning}`}>용량 경고</span>
            </div>
            <span className={closeIcon}><X size={14} /></span>
          </div>
          <p className={`${cardDesc} ${descWarning}`}>디스크 사용량이 85%입니다.</p>
          <div className={btnRow}>
            <button className={btnOutlineWarning}>정리 시작</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page Root ─────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const layout = css({
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  });

  const main = css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: 'neutral.canvas.01',
  });

  const scrollArea = css({
    flex: 1,
    overflowY: 'auto',
  });

  return (
    <div className={layout}>
      <Sidebar />
      <div className={main}>
        <HeaderBar />
        <div className={scrollArea}>
          <ToastArea />
          <StatCards />
          <SystemResources />
          <EventTable />
          <NotificationToggles />
          <BottomNotificationCards />
        </div>
      </div>
    </div>
  );
}
