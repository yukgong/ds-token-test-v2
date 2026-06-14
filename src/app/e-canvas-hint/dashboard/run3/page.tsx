import { css } from '@ds-token-test/styled-system-intent-first/css';
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

// ─────────────────────────── Sidebar ───────────────────────────

function Sidebar() {
  const sidebarClass = `dark ${css({
    width: '240px',
    height: '100vh',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'neutral.canvas.02',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'neutral.border.low',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
  })}`;

  const logoAreaClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.low',
  });

  const logoIconClass = css({ color: 'neutral.icon.base' });

  const logoTextClass = css({
    color: 'neutral.text.base',
    fontWeight: '700',
    fontSize: '18px',
  });

  const navClass = css({
    flex: 1,
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  });

  const activeNavItemClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '8px',
    backgroundColor: 'overlay.lighten.hover',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    textAlign: 'left',
  });

  const activeNavIconClass = css({ color: 'neutral.icon.base' });

  const activeNavTextClass = css({
    color: 'neutral.text.base',
    fontSize: '14px',
    fontWeight: '600',
  });

  const inactiveNavItemClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    _hover: { backgroundColor: 'overlay.lighten.hover' },
  });

  const navIconClass = css({ color: 'neutral.icon.base' });

  const navTextClass = css({ color: 'neutral.text.base', fontSize: '14px' });

  const disabledNavItemClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '8px',
    cursor: 'not-allowed',
    background: 'none',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    opacity: 0.38,
  });

  const logoutAreaClass = css({
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '16px',
    paddingBottom: '16px',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'neutral.border.low',
  });

  const logoutBtnClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    textAlign: 'left',
  });

  const logoutIconClass = css({ color: 'critical.icon.base' });

  const logoutTextClass = css({ color: 'critical.text.base', fontSize: '14px' });

  return (
    <aside className={sidebarClass}>
      <div className={logoAreaClass}>
        <LayoutDashboard size={22} className={logoIconClass} />
        <span className={logoTextClass}>Mildang</span>
      </div>

      <nav className={navClass}>
        <button className={activeNavItemClass}>
          <LayoutDashboard size={18} className={activeNavIconClass} />
          <span className={activeNavTextClass}>대시보드</span>
        </button>
        <button className={inactiveNavItemClass}>
          <Users size={18} className={navIconClass} />
          <span className={navTextClass}>사용자 관리</span>
        </button>
        <button className={inactiveNavItemClass}>
          <CreditCard size={18} className={navIconClass} />
          <span className={navTextClass}>결제 내역</span>
        </button>
        <button className={inactiveNavItemClass}>
          <Bell size={18} className={navIconClass} />
          <span className={navTextClass}>알림 설정</span>
        </button>
        <button className={disabledNavItemClass} disabled>
          <ScrollText size={18} className={navIconClass} />
          <span className={navTextClass}>시스템 로그</span>
        </button>
      </nav>

      <div className={logoutAreaClass}>
        <button className={logoutBtnClass}>
          <LogOut size={18} className={logoutIconClass} />
          <span className={logoutTextClass}>로그아웃</span>
        </button>
      </div>
    </aside>
  );
}

// ─────────────────────────── Header ───────────────────────────

function Header() {
  const headerClass = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '24px',
    paddingRight: '24px',
    backgroundColor: 'neutral.canvas.02',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.base',
    height: '56px',
    flexShrink: 0,
  });

  const breadcrumbClass = css({ display: 'flex', alignItems: 'center', gap: '6px' });

  const breadcrumbLinkClass = css({
    color: 'neutral.text.base',
    fontSize: '14px',
    textDecoration: 'none',
    cursor: 'pointer',
    _hover: { color: 'primary.text.base' },
  });

  const breadcrumbSepClass = css({
    color: 'neutral.text.base',
    fontSize: '14px',
    opacity: 0.38,
  });

  const breadcrumbCurrentClass = css({
    color: 'neutral.text.base',
    fontSize: '14px',
    fontWeight: '600',
  });

  const rightAreaClass = css({ display: 'flex', alignItems: 'center', gap: '8px' });

  const iconBtnClass = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'neutral.icon.base',
    position: 'relative',
    _hover: { backgroundColor: 'neutral.surface.high' },
  });

  const tooltipClass = css({
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '6px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '4px',
    paddingBottom: '4px',
    backgroundColor: 'neutral.fill.high',
    color: 'inverse.text.base',
    fontSize: '12px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    zIndex: 20,
    pointerEvents: 'none',
  });

  const badgeClass = css({
    position: 'absolute',
    top: '4px',
    right: '4px',
    backgroundColor: 'critical.fill.base',
    color: 'inverse.text.base',
    fontSize: '10px',
    fontWeight: '700',
    borderRadius: '9999px',
    width: '14px',
    height: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1',
  });

  const dividerClass = css({
    width: '1px',
    height: '24px',
    backgroundColor: 'neutral.border.base',
    marginLeft: '4px',
    marginRight: '4px',
  });

  const newDeployBtnClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    paddingLeft: '14px',
    paddingRight: '14px',
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: 'primary.fill.base',
    color: 'inverse.text.base',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    _hover: { backgroundColor: 'primary.surface.high' },
  });

  const newDeployIconClass = css({ color: 'inverse.icon.base' });

  const avatarClass = css({
    width: '36px',
    height: '36px',
    borderRadius: '9999px',
    backgroundColor: 'primary.fill.base',
    color: 'inverse.text.base',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '700',
    flexShrink: 0,
  });

  return (
    <header className={headerClass}>
      <nav className={breadcrumbClass}>
        <span className={breadcrumbLinkClass}>홈</span>
        <span className={breadcrumbSepClass}>/</span>
        <span className={breadcrumbLinkClass}>모니터링</span>
        <span className={breadcrumbSepClass}>/</span>
        <span className={breadcrumbCurrentClass}>대시보드</span>
      </nav>

      <div className={rightAreaClass}>
        <button className={iconBtnClass}>
          <Search size={18} />
          <span className={tooltipClass}>검색</span>
        </button>

        <button className={iconBtnClass}>
          <Bell size={18} />
          <span className={badgeClass}>3</span>
          <span className={tooltipClass}>알림</span>
        </button>

        <button className={iconBtnClass}>
          <Settings size={18} />
          <span className={tooltipClass}>설정</span>
        </button>

        <div className={dividerClass} />

        <button className={newDeployBtnClass}>
          <Plus size={16} className={newDeployIconClass} />
          새 배포
        </button>

        <div className={avatarClass}>K</div>
      </div>
    </header>
  );
}

// ─────────────────────────── Toasts ───────────────────────────

function ToastPositive({ message }: { message: string }) {
  const toastClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '14px',
    paddingRight: '14px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    minWidth: '320px',
    backgroundColor: 'positive.surface.base',
    borderColor: 'positive.border.base',
  });
  const iconClass = css({ color: 'positive.icon.base', flexShrink: 0 });
  const textClass = css({ color: 'positive.text.base', fontSize: '14px', flex: 1 });
  const closeBtnClass = css({
    color: 'positive.icon.base',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  });
  return (
    <div className={toastClass}>
      <CheckCircle2 size={18} className={iconClass} />
      <span className={textClass}>{message}</span>
      <button className={closeBtnClass}><X size={16} /></button>
    </div>
  );
}

function ToastCritical({ message }: { message: string }) {
  const toastClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '14px',
    paddingRight: '14px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    minWidth: '320px',
    backgroundColor: 'critical.surface.base',
    borderColor: 'critical.border.base',
  });
  const iconClass = css({ color: 'critical.icon.base', flexShrink: 0 });
  const textClass = css({ color: 'critical.text.base', fontSize: '14px', flex: 1 });
  const closeBtnClass = css({
    color: 'critical.icon.base',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  });
  return (
    <div className={toastClass}>
      <XCircle size={18} className={iconClass} />
      <span className={textClass}>{message}</span>
      <button className={closeBtnClass}><X size={16} /></button>
    </div>
  );
}

function ToastInfo({ message }: { message: string }) {
  const toastClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '14px',
    paddingRight: '14px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    minWidth: '320px',
    backgroundColor: 'info.surface.base',
    borderColor: 'info.border.base',
  });
  const iconClass = css({ color: 'info.icon.base', flexShrink: 0 });
  const textClass = css({ color: 'info.text.base', fontSize: '14px', flex: 1 });
  const closeBtnClass = css({
    color: 'info.icon.base',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  });
  return (
    <div className={toastClass}>
      <Info size={18} className={iconClass} />
      <span className={textClass}>{message}</span>
      <button className={closeBtnClass}><X size={16} /></button>
    </div>
  );
}

// ─────────────────────────── Stat Cards ───────────────────────────

function StatCardPositive({
  label,
  value,
  change,
  icon,
}: {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  const cardClass = css({
    backgroundColor: 'neutral.canvas.02',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });
  const topRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' });
  const labelClass = css({ color: 'neutral.text.low', fontSize: '13px' });
  const valueClass = css({ color: 'neutral.text.base', fontSize: '28px', fontWeight: '700' });
  const badgeClass = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '3px',
    paddingBottom: '3px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'positive.surface.base',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'positive.border.base',
    color: 'positive.text.base',
  });
  const iconClass = css({ color: 'positive.icon.base' });
  return (
    <div className={cardClass}>
      <div className={topRowClass}>
        <span className={labelClass}>{label}</span>
        <span className={iconClass}>{icon}</span>
      </div>
      <span className={valueClass}>{value}</span>
      <span className={badgeClass}>{change}</span>
    </div>
  );
}

function StatCardCritical({
  label,
  value,
  change,
  icon,
}: {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  const cardClass = css({
    backgroundColor: 'neutral.canvas.02',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });
  const topRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' });
  const labelClass = css({ color: 'neutral.text.low', fontSize: '13px' });
  const valueClass = css({ color: 'neutral.text.base', fontSize: '28px', fontWeight: '700' });
  const badgeClass = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '3px',
    paddingBottom: '3px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'critical.surface.base',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'critical.border.base',
    color: 'critical.text.base',
  });
  const iconClass = css({ color: 'critical.icon.base' });
  return (
    <div className={cardClass}>
      <div className={topRowClass}>
        <span className={labelClass}>{label}</span>
        <span className={iconClass}>{icon}</span>
      </div>
      <span className={valueClass}>{value}</span>
      <span className={badgeClass}>{change}</span>
    </div>
  );
}

function StatCardWarning({
  label,
  value,
  change,
  icon,
}: {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  const cardClass = css({
    backgroundColor: 'neutral.canvas.02',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });
  const topRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' });
  const labelClass = css({ color: 'neutral.text.low', fontSize: '13px' });
  const valueClass = css({ color: 'neutral.text.base', fontSize: '28px', fontWeight: '700' });
  const badgeClass = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '3px',
    paddingBottom: '3px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'warning.surface.base',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'warning.border.base',
    color: 'warning.text.base',
  });
  const iconClass = css({ color: 'warning.icon.base' });
  return (
    <div className={cardClass}>
      <div className={topRowClass}>
        <span className={labelClass}>{label}</span>
        <span className={iconClass}>{icon}</span>
      </div>
      <span className={valueClass}>{value}</span>
      <span className={badgeClass}>{change}</span>
    </div>
  );
}

// ─────────────────────────── Resource Cards ───────────────────────────

function ResourceCardPositive({
  label,
  percent,
  statusText,
}: {
  label: string;
  percent: number;
  statusText: string;
}) {
  const cardClass = css({
    backgroundColor: 'neutral.canvas.02',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  });
  const headerRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' });
  const labelClass = css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '600' });
  const percentClass = css({ color: 'neutral.text.base', fontSize: '26px', fontWeight: '700' });
  const trackClass = css({
    width: '100%',
    height: '8px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.fill.base',
    overflow: 'hidden',
  });
  const fillClass = css({
    height: '100%',
    borderRadius: '9999px',
    backgroundColor: 'positive.fill.base',
    width: `${percent}%`,
  });
  const statusClass = css({ color: 'positive.text.base', fontSize: '12px', fontWeight: '500' });
  return (
    <div className={cardClass}>
      <div className={headerRowClass}>
        <span className={labelClass}>{label}</span>
        <span className={percentClass}>{percent}%</span>
      </div>
      <div className={trackClass}>
        <div className={fillClass} />
      </div>
      <span className={statusClass}>{statusText}</span>
    </div>
  );
}

function ResourceCardWarning({
  label,
  percent,
  statusText,
}: {
  label: string;
  percent: number;
  statusText: string;
}) {
  const cardClass = css({
    backgroundColor: 'neutral.canvas.02',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  });
  const headerRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' });
  const labelClass = css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '600' });
  const percentClass = css({ color: 'neutral.text.base', fontSize: '26px', fontWeight: '700' });
  const trackClass = css({
    width: '100%',
    height: '8px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.fill.base',
    overflow: 'hidden',
  });
  const fillClass = css({
    height: '100%',
    borderRadius: '9999px',
    backgroundColor: 'warning.fill.base',
    width: `${percent}%`,
  });
  const statusClass = css({ color: 'warning.text.base', fontSize: '12px', fontWeight: '500' });
  return (
    <div className={cardClass}>
      <div className={headerRowClass}>
        <span className={labelClass}>{label}</span>
        <span className={percentClass}>{percent}%</span>
      </div>
      <div className={trackClass}>
        <div className={fillClass} />
      </div>
      <span className={statusClass}>{statusText}</span>
    </div>
  );
}

function ResourceCardCritical({
  label,
  percent,
  statusText,
}: {
  label: string;
  percent: number;
  statusText: string;
}) {
  const cardClass = css({
    backgroundColor: 'neutral.canvas.02',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  });
  const headerRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' });
  const labelClass = css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '600' });
  const percentClass = css({ color: 'neutral.text.base', fontSize: '26px', fontWeight: '700' });
  const trackClass = css({
    width: '100%',
    height: '8px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.fill.base',
    overflow: 'hidden',
  });
  const fillClass = css({
    height: '100%',
    borderRadius: '9999px',
    backgroundColor: 'critical.fill.base',
    width: `${percent}%`,
  });
  const statusClass = css({ color: 'critical.text.base', fontSize: '12px', fontWeight: '500' });
  return (
    <div className={cardClass}>
      <div className={headerRowClass}>
        <span className={labelClass}>{label}</span>
        <span className={percentClass}>{percent}%</span>
      </div>
      <div className={trackClass}>
        <div className={fillClass} />
      </div>
      <span className={statusClass}>{statusText}</span>
    </div>
  );
}

// ─────────────────────────── Event Table ───────────────────────────

function EventTable() {
  const wrapClass = css({
    backgroundColor: 'neutral.canvas.02',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    overflow: 'hidden',
  });

  const tableHeaderBarClass = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '16px',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.low',
  });

  const tabsClass = css({ display: 'flex' });

  const activeTabClass = css({
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'neutral.text.base',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'primary.border.highest',
    cursor: 'pointer',
  });

  const inactiveTabClass = css({
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '14px',
    color: 'neutral.text.base',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.transparent',
    cursor: 'pointer',
    opacity: 0.38,
    _hover: { opacity: 1 },
  });

  const btnGroupClass = css({
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    paddingBottom: '8px',
  });

  const outlineBtnClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '6px',
    paddingBottom: '6px',
    backgroundColor: 'neutral.surface.transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '6px',
    fontSize: '13px',
    color: 'neutral.text.base',
    cursor: 'pointer',
    _hover: { backgroundColor: 'neutral.surface.high' },
  });

  const outlineBtnIconClass = css({ color: 'neutral.icon.base' });

  const disabledBtnClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '6px',
    paddingBottom: '6px',
    backgroundColor: 'neutral.surface.transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '6px',
    fontSize: '13px',
    color: 'neutral.text.base',
    cursor: 'not-allowed',
    opacity: 0.38,
  });

  const disabledBtnIconClass = css({ color: 'neutral.icon.base' });

  const tagBarClass = css({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '12px',
    paddingBottom: '12px',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.low',
    flexWrap: 'wrap',
  });

  const activeTagClass = css({
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderRadius: '9999px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: 'primary.fill.base',
    color: 'inverse.text.base',
    cursor: 'pointer',
    border: 'none',
  });

  const inactiveTagClass = css({
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderRadius: '9999px',
    fontSize: '13px',
    backgroundColor: 'neutral.surface.base',
    color: 'neutral.text.low',
    cursor: 'pointer',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    _hover: { backgroundColor: 'neutral.surface.high' },
  });

  const searchInputClass = css({
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '6px',
    backgroundColor: 'neutral.surface.base',
    color: 'neutral.text.base',
    fontSize: '13px',
    outline: 'none',
    _placeholder: { opacity: 0.38 },
    _focus: {
      borderColor: 'focus.border',
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'focus.border',
    },
  });

  const errorInputWrapClass = css({ display: 'flex', flexDirection: 'column', gap: '4px' });

  const errorInputClass = css({
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'critical.border.base',
    borderRadius: '6px',
    backgroundColor: 'critical.surface.base',
    color: 'neutral.text.base',
    fontSize: '13px',
    outline: 'none',
  });

  const errorMsgClass = css({ color: 'critical.text.base', fontSize: '12px' });

  const tableClass = css({ width: '100%', borderCollapse: 'collapse' });

  const thClass = css({
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '600',
    color: 'neutral.text.low',
    backgroundColor: 'neutral.canvas.01',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.low',
  });

  const avatarClass = css({
    width: '32px',
    height: '32px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.surface.base',
    color: 'neutral.text.base',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: '600',
    flexShrink: 0,
  });

  const oddCellClass = css({
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '12px',
    paddingBottom: '12px',
    fontSize: '14px',
    color: 'neutral.text.base',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.low',
    backgroundColor: 'neutral.canvas.02',
  });

  const evenCellClass = css({
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '12px',
    paddingBottom: '12px',
    fontSize: '14px',
    color: 'neutral.text.base',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.low',
    backgroundColor: 'neutral.canvas.03',
  });

  const eyeBtnClass = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'neutral.icon.base',
    _hover: { backgroundColor: 'neutral.surface.high' },
  });

  const statusPositiveRowClass = css({ display: 'flex', alignItems: 'center', gap: '6px' });
  const statusPositiveIconClass = css({ color: 'positive.icon.base' });
  const statusPositiveTextClass = css({ color: 'positive.text.base', fontSize: '14px' });

  const statusCriticalRowClass = css({ display: 'flex', alignItems: 'center', gap: '6px' });
  const statusCriticalIconClass = css({ color: 'critical.icon.base' });
  const statusCriticalTextClass = css({ color: 'critical.text.base', fontSize: '14px' });

  const statusWarningRowClass = css({ display: 'flex', alignItems: 'center', gap: '6px' });
  const statusWarningIconClass = css({ color: 'warning.icon.base' });
  const statusWarningTextClass = css({ color: 'warning.text.base', fontSize: '14px' });

  const userCellInnerClass = css({ display: 'flex', alignItems: 'center', gap: '10px' });

  const rows = [
    { initial: '홍', name: '홍길동', event: '로그인 성공', time: '14:32', status: '정상 처리됨', variant: 'positive' as const },
    { initial: '김', name: '김철수', event: '결제 실패', time: '14:28', status: '문제 발생', variant: 'critical' as const },
    { initial: '이', name: '이영희', event: '비밀번호 5회 오류', time: '14:21', status: '주의 필요', variant: 'warning' as const },
    { initial: '박', name: '박민준', event: '회원가입', time: '14:15', status: '정상 처리됨', variant: 'positive' as const },
    { initial: '시', name: '시스템', event: 'API 응답 지연', time: '14:09', status: '주의 필요', variant: 'warning' as const },
  ];

  return (
    <div className={wrapClass}>
      <div className={tableHeaderBarClass}>
        <div className={tabsClass}>
          <button className={activeTabClass}>전체 이벤트</button>
          <button className={inactiveTabClass}>미처리</button>
          <button className={inactiveTabClass}>처리완료</button>
        </div>
        <div className={btnGroupClass}>
          <button className={outlineBtnClass}>
            <Filter size={14} className={outlineBtnIconClass} />
            필터
          </button>
          <button className={disabledBtnClass} disabled>
            <Download size={14} className={disabledBtnIconClass} />
            CSV 내보내기
          </button>
        </div>
      </div>

      <div className={tagBarClass}>
        <button className={activeTagClass}>전체</button>
        <button className={inactiveTagClass}>로그인</button>
        <button className={inactiveTagClass}>결제</button>
        <button className={inactiveTagClass}>보안</button>
        <button className={inactiveTagClass}>시스템</button>
        <input className={searchInputClass} type="text" placeholder="이벤트 검색..." readOnly />
        <div className={errorInputWrapClass}>
          <input className={errorInputClass} type="text" defaultValue="2025-99-99" readOnly />
          <span className={errorMsgClass}>올바른 날짜 형식이 아닙니다.</span>
        </div>
      </div>

      <table className={tableClass}>
        <thead>
          <tr>
            <th className={thClass}>사용자</th>
            <th className={thClass}>이벤트</th>
            <th className={thClass}>시간</th>
            <th className={thClass}>상태</th>
            <th className={thClass}>액션</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const cellClass = i % 2 === 0 ? oddCellClass : evenCellClass;
            return (
              <tr key={i}>
                <td className={cellClass}>
                  <div className={userCellInnerClass}>
                    <div className={avatarClass}>{row.initial}</div>
                    <span>{row.name}</span>
                  </div>
                </td>
                <td className={cellClass}>{row.event}</td>
                <td className={cellClass}>{row.time}</td>
                <td className={cellClass}>
                  {row.variant === 'positive' && (
                    <div className={statusPositiveRowClass}>
                      <CheckCircle2 size={15} className={statusPositiveIconClass} />
                      <span className={statusPositiveTextClass}>{row.status}</span>
                    </div>
                  )}
                  {row.variant === 'critical' && (
                    <div className={statusCriticalRowClass}>
                      <XCircle size={15} className={statusCriticalIconClass} />
                      <span className={statusCriticalTextClass}>{row.status}</span>
                    </div>
                  )}
                  {row.variant === 'warning' && (
                    <div className={statusWarningRowClass}>
                      <AlertCircle size={15} className={statusWarningIconClass} />
                      <span className={statusWarningTextClass}>{row.status}</span>
                    </div>
                  )}
                </td>
                <td className={cellClass}>
                  <button className={eyeBtnClass}><Eye size={16} /></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────── Toggle Panel ───────────────────────────

function TogglePanel() {
  const cardClass = css({
    backgroundColor: 'neutral.canvas.02',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
  });

  const titleClass = css({
    color: 'neutral.text.base',
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '4px',
  });

  const rowClass = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'neutral.border.low',
  });

  const disabledRowClass = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '10px',
    paddingBottom: '10px',
    opacity: 0.38,
  });

  const labelClass = css({ color: 'neutral.text.base', fontSize: '14px' });

  const trackOnClass = css({
    width: '44px',
    height: '24px',
    borderRadius: '9999px',
    backgroundColor: 'primary.fill.base',
    position: 'relative',
    cursor: 'pointer',
    flexShrink: 0,
    border: 'none',
  });

  const trackOffClass = css({
    width: '44px',
    height: '24px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.fill.base',
    position: 'relative',
    cursor: 'pointer',
    flexShrink: 0,
    border: 'none',
  });

  const handleOnClass = css({
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.canvas.01',
  });

  const handleOffClass = css({
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.canvas.01',
  });

  return (
    <div className={cardClass}>
      <h2 className={titleClass}>알림 수신 설정</h2>
      <div className={rowClass}>
        <span className={labelClass}>배포 알림</span>
        <button className={trackOnClass}><span className={handleOnClass} /></button>
      </div>
      <div className={rowClass}>
        <span className={labelClass}>장애 알림</span>
        <button className={trackOnClass}><span className={handleOnClass} /></button>
      </div>
      <div className={rowClass}>
        <span className={labelClass}>보안 알림</span>
        <button className={trackOffClass}><span className={handleOffClass} /></button>
      </div>
      <div className={disabledRowClass}>
        <span className={labelClass}>마케팅 알림</span>
        <button className={trackOffClass} disabled><span className={handleOffClass} /></button>
      </div>
    </div>
  );
}

// ─────────────────────────── Alert Cards (Bottom) ───────────────────────────

function AlertCardPositive() {
  const cardClass = css({
    backgroundColor: 'positive.surface.base',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'positive.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: 1,
  });
  const topRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' });
  const iconClass = css({ color: 'positive.icon.base' });
  const titleClass = css({ color: 'positive.text.base', fontSize: '15px', fontWeight: '700' });
  const descClass = css({ color: 'positive.text.base', fontSize: '13px' });
  const closeBtnClass = css({
    color: 'positive.icon.base',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  });
  const btnRowClass = css({ display: 'flex', gap: '8px' });
  const outlineBtnClass = css({
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '7px',
    paddingBottom: '7px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: 'neutral.surface.transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'positive.border.highest',
    color: 'positive.text.base',
    cursor: 'pointer',
    _hover: { backgroundColor: 'positive.surface.high' },
  });
  return (
    <div className={cardClass}>
      <div className={topRowClass}>
        <CheckCircle2 size={22} className={iconClass} />
        <button className={closeBtnClass}><X size={16} /></button>
      </div>
      <span className={titleClass}>배포 완료</span>
      <span className={descClass}>v2.4.1이 성공적으로 배포되었습니다.</span>
      <div className={btnRowClass}>
        <button className={outlineBtnClass}>배포 로그 보기</button>
      </div>
    </div>
  );
}

function AlertCardCritical() {
  const cardClass = css({
    backgroundColor: 'critical.surface.base',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'critical.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: 1,
  });
  const topRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' });
  const iconClass = css({ color: 'critical.icon.base' });
  const titleClass = css({ color: 'critical.text.base', fontSize: '15px', fontWeight: '700' });
  const descClass = css({ color: 'critical.text.base', fontSize: '13px' });
  const closeBtnClass = css({
    color: 'critical.icon.base',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  });
  const btnRowClass = css({ display: 'flex', gap: '8px' });
  const filledBtnClass = css({
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '7px',
    paddingBottom: '7px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: 'critical.fill.base',
    color: 'inverse.text.base',
    border: 'none',
    cursor: 'pointer',
  });
  const ghostBtnClass = css({
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '7px',
    paddingBottom: '7px',
    borderRadius: '6px',
    fontSize: '13px',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.text.base',
    border: 'none',
    cursor: 'pointer',
    _hover: { backgroundColor: 'neutral.surface.high' },
  });
  return (
    <div className={cardClass}>
      <div className={topRowClass}>
        <XCircle size={22} className={iconClass} />
        <button className={closeBtnClass}><X size={16} /></button>
      </div>
      <span className={titleClass}>연결 실패</span>
      <span className={descClass}>DB 연결이 실패했습니다.</span>
      <div className={btnRowClass}>
        <button className={filledBtnClass}>즉시 확인</button>
        <button className={ghostBtnClass}>무시</button>
      </div>
    </div>
  );
}

function AlertCardWarning() {
  const cardClass = css({
    backgroundColor: 'warning.surface.base',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'warning.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: 1,
  });
  const topRowClass = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' });
  const iconClass = css({ color: 'warning.icon.base' });
  const titleClass = css({ color: 'warning.text.base', fontSize: '15px', fontWeight: '700' });
  const descClass = css({ color: 'warning.text.base', fontSize: '13px' });
  const closeBtnClass = css({
    color: 'warning.icon.base',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  });
  const btnRowClass = css({ display: 'flex', gap: '8px' });
  const outlineBtnClass = css({
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '7px',
    paddingBottom: '7px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: 'neutral.surface.transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'warning.border.highest',
    color: 'warning.text.base',
    cursor: 'pointer',
    _hover: { backgroundColor: 'warning.surface.high' },
  });
  return (
    <div className={cardClass}>
      <div className={topRowClass}>
        <AlertTriangle size={22} className={iconClass} />
        <button className={closeBtnClass}><X size={16} /></button>
      </div>
      <span className={titleClass}>용량 경고</span>
      <span className={descClass}>디스크 사용량이 85%입니다.</span>
      <div className={btnRowClass}>
        <button className={outlineBtnClass}>정리 시작</button>
      </div>
    </div>
  );
}

// ─────────────────────────── Page ───────────────────────────

export default function DashboardPage() {
  const layoutClass = css({
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: 'neutral.canvas.01',
  });

  const mainClass = css({
    flex: 1,
    marginLeft: '240px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  });

  const contentClass = css({
    flex: 1,
    backgroundColor: 'neutral.canvas.01',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  });

  const toastAreaClass = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'flex-end',
    marginBottom: '4px',
  });

  const statsGridClass = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  });

  const resourceGridClass = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  });

  const sectionTitleClass = css({
    color: 'neutral.text.base',
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '12px',
  });

  const bottomCardsClass = css({
    display: 'flex',
    gap: '16px',
  });

  return (
    <div className={layoutClass}>
      <Sidebar />

      <div className={mainClass}>
        <Header />

        <div className={contentClass}>
          {/* 토스트 알림 영역 */}
          <div className={toastAreaClass}>
            <ToastPositive message="배포 v2.4.1이 완료되었습니다." />
            <ToastCritical message="DB 연결이 끊어졌습니다. 즉시 확인하세요." />
            <ToastInfo message="시스템 점검이 2025-06-10 02:00에 예정되어 있습니다." />
          </div>

          {/* 통계 카드 */}
          <section>
            <h2 className={sectionTitleClass}>주요 지표</h2>
            <div className={statsGridClass}>
              <StatCardPositive label="총 사용자" value="12,847" change="+12%" icon={<TrendingUp size={20} />} />
              <StatCardCritical label="결제 실패" value="24건" change="+3건" icon={<AlertCircle size={20} />} />
              <StatCardPositive label="평균 응답시간" value="142ms" change="-8%" icon={<Zap size={20} />} />
              <StatCardWarning label="미처리 민원" value="7건" change="+2건" icon={<Clock size={20} />} />
            </div>
          </section>

          {/* 시스템 리소스 */}
          <section>
            <h2 className={sectionTitleClass}>시스템 리소스</h2>
            <div className={resourceGridClass}>
              <ResourceCardPositive label="CPU 사용량" percent={42} statusText="여유로운 상태" />
              <ResourceCardWarning label="메모리 사용량" percent={78} statusText="주의 필요" />
              <ResourceCardCritical label="디스크 사용량" percent={91} statusText="위험 수준" />
            </div>
          </section>

          {/* 최근 이벤트 테이블 */}
          <section>
            <h2 className={sectionTitleClass}>최근 이벤트</h2>
            <EventTable />
          </section>

          {/* 알림 설정 토글 */}
          <TogglePanel />

          {/* 하단 알림 카드 */}
          <section>
            <h2 className={sectionTitleClass}>알림</h2>
            <div className={bottomCardsClass}>
              <AlertCardPositive />
              <AlertCardCritical />
              <AlertCardWarning />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
