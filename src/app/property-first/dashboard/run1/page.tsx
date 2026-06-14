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
} from 'lucide-react';
import { css } from '@ds-token-test/styled-system-property-first/css';

export default function DashboardPage() {
  const sidebarStyle = css({
    width: '240px',
    minHeight: '100vh',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'surface.neutral.emphasis',
  });

  const logoAreaStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '24px 20px 20px',
  });

  const logoIconStyle = css({
    color: 'icon.inverse',
  });

  const logoTextStyle = css({
    color: 'text.inverse',
    fontSize: '18px',
    fontWeight: '700',
  });

  const navStyle = css({
    flex: 1,
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  });

  const navItemActiveStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'surface.brand.default',
    color: 'text.inverse',
  });

  const navItemStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    color: 'text.inverse',
  });

  const navItemDisabledStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    color: 'text.inverse',
    opacity: 0.4,
  });

  const navIconActiveStyle = css({
    color: 'icon.inverse',
  });

  const navIconStyle = css({
    color: 'icon.inverse',
  });

  const sidebarBottomStyle = css({
    padding: '16px 12px',
    borderTop: '1px solid',
    borderColor: 'border.neutral.emphasis',
  });

  const logoutButtonStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    color: 'text.critical.default',
    background: 'none',
    border: 'none',
    width: '100%',
  });

  const logoutIconStyle = css({
    color: 'icon.critical.default',
  });

  const mainStyle = css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'surface.neutral.subtle',
  });

  const headerStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: '60px',
    backgroundColor: 'surface.neutral.default',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.subtle',
    flexShrink: 0,
  });

  const breadcrumbStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
  });

  const breadcrumbLinkStyle = css({
    color: 'text.neutral.default',
    cursor: 'pointer',
    textDecoration: 'none',
  });

  const breadcrumbSepStyle = css({
    color: 'text.neutral.muted',
  });

  const breadcrumbCurrentStyle = css({
    color: 'text.brand.default',
    fontWeight: '600',
  });

  const headerRightStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  const iconButtonStyle = css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    color: 'icon.neutral.default',
  });

  const badgeStyle = css({
    position: 'absolute',
    top: '2px',
    right: '2px',
    minWidth: '16px',
    height: '16px',
    borderRadius: '8px',
    backgroundColor: 'fill.critical',
    color: 'text.inverse',
    fontSize: '10px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 3px',
  });

  const dividerStyle = css({
    width: '1px',
    height: '24px',
    backgroundColor: 'border.neutral.subtle',
    margin: '0 4px',
  });

  const primaryButtonStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'fill.brand',
    color: 'text.inverse',
    fontSize: '14px',
    fontWeight: '600',
  });

  const avatarStyle = css({
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'surface.brand.default',
    color: 'text.inverse',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '700',
    flexShrink: 0,
  });

  const contentStyle = css({
    flex: 1,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  });

  const toastAreaStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignSelf: 'flex-end',
    width: '380px',
  });

  const toastPositiveStyle = css({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: 'surface.positive.subtle',
    border: '1px solid',
    borderColor: 'border.positive.default',
    color: 'text.positive.default',
  });

  const toastCriticalStyle = css({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: 'surface.critical.subtle',
    border: '1px solid',
    borderColor: 'border.critical.default',
    color: 'text.critical.default',
  });

  const toastInfoStyle = css({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: 'surface.info.subtle',
    border: '1px solid',
    borderColor: 'border.info.default',
    color: 'text.info.default',
  });

  const toastTextStyle = css({
    flex: 1,
    fontSize: '14px',
  });

  const toastCloseStyle = css({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    color: 'inherit',
  });

  const statsGridStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  });

  const statCardStyle = css({
    backgroundColor: 'surface.neutral.default',
    border: '1px solid',
    borderColor: 'border.neutral.subtle',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });

  const statCardTopStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  });

  const statLabelStyle = css({
    fontSize: '13px',
    color: 'text.neutral.muted',
    fontWeight: '500',
  });

  const statValueStyle = css({
    fontSize: '28px',
    fontWeight: '700',
    color: 'text.neutral.default',
  });

  const badgePositiveStyle = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '3px 8px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'surface.positive.subtle',
    color: 'text.positive.default',
    border: '1px solid',
    borderColor: 'border.positive.subtle',
  });

  const badgeCriticalStyle = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '3px 8px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'surface.critical.subtle',
    color: 'text.critical.default',
    border: '1px solid',
    borderColor: 'border.critical.subtle',
  });

  const badgeWarningStyle = css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '3px 8px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: 'surface.warning.subtle',
    color: 'text.warning.default',
    border: '1px solid',
    borderColor: 'border.warning.subtle',
  });

  const resourceGridStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '16px',
  });

  const resourceCardStyle = css({
    backgroundColor: 'surface.neutral.default',
    border: '1px solid',
    borderColor: 'border.neutral.subtle',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  });

  const resourceLabelStyle = css({
    fontSize: '13px',
    color: 'text.neutral.muted',
    fontWeight: '500',
  });

  const resourceValueStyle = css({
    fontSize: '24px',
    fontWeight: '700',
    color: 'text.neutral.default',
  });

  const progressTrackStyle = css({
    height: '8px',
    borderRadius: '4px',
    backgroundColor: 'surface.neutral.muted',
    overflow: 'hidden',
  });

  const progressFillPositiveStyle = css({
    height: '100%',
    borderRadius: '4px',
    backgroundColor: 'fill.positive',
    width: '42%',
  });

  const progressFillWarningStyle = css({
    height: '100%',
    borderRadius: '4px',
    backgroundColor: 'fill.warning',
    width: '78%',
  });

  const progressFillCriticalStyle = css({
    height: '100%',
    borderRadius: '4px',
    backgroundColor: 'fill.critical',
    width: '91%',
  });

  const resourceStatusPositiveStyle = css({
    fontSize: '12px',
    color: 'text.positive.default',
    fontWeight: '500',
  });

  const resourceStatusWarningStyle = css({
    fontSize: '12px',
    color: 'text.warning.default',
    fontWeight: '500',
  });

  const resourceStatusCriticalStyle = css({
    fontSize: '12px',
    color: 'text.critical.default',
    fontWeight: '500',
  });

  const tableCardStyle = css({
    backgroundColor: 'surface.neutral.default',
    border: '1px solid',
    borderColor: 'border.neutral.subtle',
    borderRadius: '12px',
    overflow: 'hidden',
  });

  const tableHeaderAreaStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px 0',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.subtle',
  });

  const tabsStyle = css({
    display: 'flex',
    gap: '0',
  });

  const tabActiveStyle = css({
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    color: 'text.brand.default',
    borderBottom: '2px solid',
    borderColor: 'border.brand.default',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid',
    borderBottomColor: 'border.brand.default',
  });

  const tabStyle = css({
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '400',
    cursor: 'pointer',
    color: 'text.neutral.muted',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid transparent',
  });

  const tableActionsStyle = css({
    display: 'flex',
    gap: '8px',
    paddingBottom: '16px',
  });

  const outlineButtonStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'border.neutral.default',
    background: 'transparent',
    color: 'text.neutral.default',
    fontSize: '13px',
    fontWeight: '500',
  });

  const disabledButtonStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    borderRadius: '8px',
    cursor: 'not-allowed',
    border: '1px solid',
    borderColor: 'border.neutral.default',
    background: 'transparent',
    color: 'text.neutral.default',
    fontSize: '13px',
    fontWeight: '500',
    opacity: 0.4,
  });

  const tagBarStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.subtle',
  });

  const tagActiveStyle = css({
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: 'fill.brand',
    color: 'text.inverse',
    border: 'none',
  });

  const tagStyle = css({
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '400',
    cursor: 'pointer',
    backgroundColor: 'surface.neutral.subtle',
    color: 'text.neutral.default',
    border: '1px solid',
    borderColor: 'border.neutral.subtle',
  });

  const tagSearchWrapStyle = css({
    marginLeft: 'auto',
    display: 'flex',
    gap: '8px',
  });

  const inputStyle = css({
    padding: '7px 12px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'border.neutral.default',
    backgroundColor: 'surface.neutral.default',
    color: 'text.neutral.default',
    fontSize: '13px',
    outline: 'none',
  });

  const inputErrorStyle = css({
    padding: '7px 12px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'border.critical.default',
    backgroundColor: 'surface.critical.subtle',
    color: 'text.neutral.default',
    fontSize: '13px',
    outline: 'none',
  });

  const inputErrorMsgStyle = css({
    fontSize: '12px',
    color: 'text.critical.default',
    marginTop: '4px',
  });

  const tableStyle = css({
    width: '100%',
    borderCollapse: 'collapse',
  });

  const thStyle = css({
    textAlign: 'left',
    padding: '10px 20px',
    fontSize: '12px',
    fontWeight: '600',
    color: 'text.neutral.muted',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.subtle',
    backgroundColor: 'surface.neutral.subtle',
  });

  const tdStyle = css({
    padding: '12px 20px',
    fontSize: '14px',
    color: 'text.neutral.default',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.subtle',
  });

  const tdEvenStyle = css({
    padding: '12px 20px',
    fontSize: '14px',
    color: 'text.neutral.default',
    borderBottom: '1px solid',
    borderColor: 'border.neutral.subtle',
    backgroundColor: 'surface.neutral.ghost',
  });

  const rowAvatarStyle = css({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'surface.neutral.muted',
    color: 'text.neutral.default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '600',
    flexShrink: 0,
  });

  const userCellStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  const statusPositiveStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'text.positive.default',
    fontSize: '13px',
    fontWeight: '500',
  });

  const statusCriticalStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'text.critical.default',
    fontSize: '13px',
    fontWeight: '500',
  });

  const statusWarningStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'text.warning.default',
    fontSize: '13px',
    fontWeight: '500',
  });

  const ghostIconButtonStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    color: 'icon.neutral.default',
  });

  const toggleCardStyle = css({
    backgroundColor: 'surface.neutral.default',
    border: '1px solid',
    borderColor: 'border.neutral.subtle',
    borderRadius: '12px',
    padding: '20px',
  });

  const toggleCardTitleStyle = css({
    fontSize: '16px',
    fontWeight: '700',
    color: 'text.neutral.default',
    marginBottom: '16px',
  });

  const toggleListStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  });

  const toggleRowStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  const toggleLabelStyle = css({
    fontSize: '14px',
    color: 'text.neutral.default',
  });

  const toggleOnStyle = css({
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: 'fill.brand',
    position: 'relative',
    flexShrink: 0,
    cursor: 'pointer',
    border: 'none',
  });

  const toggleOffStyle = css({
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: 'surface.neutral.muted',
    position: 'relative',
    flexShrink: 0,
    cursor: 'pointer',
    border: 'none',
  });

  const toggleDisabledStyle = css({
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: 'surface.neutral.muted',
    position: 'relative',
    flexShrink: 0,
    cursor: 'not-allowed',
    border: 'none',
    opacity: 0.4,
  });

  const toggleHandleOnStyle = css({
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'surface.neutral.default',
  });

  const toggleHandleOffStyle = css({
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'surface.neutral.default',
  });

  const notifCardsGridStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '16px',
  });

  const notifCardPositiveStyle = css({
    backgroundColor: 'surface.positive.subtle',
    border: '1px solid',
    borderColor: 'border.positive.default',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  });

  const notifCardCriticalStyle = css({
    backgroundColor: 'surface.critical.subtle',
    border: '1px solid',
    borderColor: 'border.critical.default',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  });

  const notifCardWarningStyle = css({
    backgroundColor: 'surface.warning.subtle',
    border: '1px solid',
    borderColor: 'border.warning.default',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  });

  const notifCardHeaderStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  });

  const notifCardTitleRowStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  const notifCardTitlePositiveStyle = css({
    fontSize: '14px',
    fontWeight: '700',
    color: 'text.positive.default',
  });

  const notifCardTitleCriticalStyle = css({
    fontSize: '14px',
    fontWeight: '700',
    color: 'text.critical.default',
  });

  const notifCardTitleWarningStyle = css({
    fontSize: '14px',
    fontWeight: '700',
    color: 'text.warning.default',
  });

  const notifCardDescPositiveStyle = css({
    fontSize: '13px',
    color: 'text.positive.default',
    opacity: 0.8,
  });

  const notifCardDescCriticalStyle = css({
    fontSize: '13px',
    color: 'text.critical.default',
    opacity: 0.8,
  });

  const notifCardDescWarningStyle = css({
    fontSize: '13px',
    color: 'text.warning.default',
    opacity: 0.8,
  });

  const notifCardActionsStyle = css({
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  });

  const outlineButtonPositiveStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'border.positive.default',
    background: 'transparent',
    color: 'text.positive.default',
    fontSize: '13px',
    fontWeight: '500',
  });

  const solidButtonCriticalStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'fill.critical',
    color: 'text.inverse',
    fontSize: '13px',
    fontWeight: '500',
  });

  const ghostButtonCriticalStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    color: 'text.critical.default',
    fontSize: '13px',
    fontWeight: '500',
  });

  const outlineButtonWarningStyle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'border.warning.default',
    background: 'transparent',
    color: 'text.warning.default',
    fontSize: '13px',
    fontWeight: '500',
  });

  const closeButtonPositiveStyle = css({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    color: 'icon.positive.default',
  });

  const closeButtonCriticalStyle = css({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    color: 'icon.critical.default',
  });

  const closeButtonWarningStyle = css({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    color: 'icon.warning.default',
  });

  return (
    <div
      className={css({
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'surface.neutral.subtle',
      })}
    >
      {/* Sidebar */}
      <aside className={sidebarStyle}>
        {/* Logo */}
        <div className={logoAreaStyle}>
          <LayoutDashboard size={24} className={logoIconStyle} />
          <span className={logoTextStyle}>Mildang</span>
        </div>

        {/* Navigation */}
        <nav className={navStyle}>
          <button className={navItemActiveStyle}>
            <LayoutDashboard size={18} className={navIconActiveStyle} />
            <span>대시보드</span>
          </button>
          <button className={navItemStyle}>
            <Users size={18} className={navIconStyle} />
            <span>사용자 관리</span>
          </button>
          <button className={navItemStyle}>
            <CreditCard size={18} className={navIconStyle} />
            <span>결제 내역</span>
          </button>
          <button className={navItemDisabledStyle}>
            <Bell size={18} className={navIconStyle} />
            <span>알림 설정</span>
          </button>
          <button className={navItemDisabledStyle}>
            <ScrollText size={18} className={navIconStyle} />
            <span>시스템 로그</span>
          </button>
        </nav>

        {/* Bottom logout */}
        <div className={sidebarBottomStyle}>
          <button className={logoutButtonStyle}>
            <LogOut size={18} className={logoutIconStyle} />
            <span>로그아웃</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className={mainStyle}>
        {/* Header bar */}
        <header className={headerStyle}>
          {/* Breadcrumb */}
          <nav className={breadcrumbStyle}>
            <a className={breadcrumbLinkStyle}>홈</a>
            <span className={breadcrumbSepStyle}>/</span>
            <a className={breadcrumbLinkStyle}>모니터링</a>
            <span className={breadcrumbSepStyle}>/</span>
            <span className={breadcrumbCurrentStyle}>대시보드</span>
          </nav>

          {/* Header right */}
          <div className={headerRightStyle}>
            <button className={iconButtonStyle} title="검색">
              <Search size={18} />
            </button>
            <button className={iconButtonStyle} title="알림">
              <Bell size={18} />
              <span className={badgeStyle}>3</span>
            </button>
            <button className={iconButtonStyle} title="설정">
              <Settings size={18} />
            </button>
            <div className={dividerStyle} />
            <button className={primaryButtonStyle}>
              <Plus size={16} />
              새 배포
            </button>
            <div className={avatarStyle}>K</div>
          </div>
        </header>

        {/* Content area */}
        <div className={contentStyle}>
          {/* Toast notifications */}
          <div className={toastAreaStyle}>
            {/* Toast 1: positive */}
            <div className={toastPositiveStyle}>
              <CheckCircle2
                size={18}
                className={css({ color: 'icon.positive.default', flexShrink: 0 })}
              />
              <span className={toastTextStyle}>배포 v2.4.1이 완료되었습니다.</span>
              <button className={toastCloseStyle}>
                <XCircle size={16} />
              </button>
            </div>

            {/* Toast 2: critical */}
            <div className={toastCriticalStyle}>
              <XCircle
                size={18}
                className={css({ color: 'icon.critical.default', flexShrink: 0 })}
              />
              <span className={toastTextStyle}>
                DB 연결이 끊어졌습니다. 즉시 확인하세요.
              </span>
              <button className={toastCloseStyle}>
                <XCircle size={16} />
              </button>
            </div>

            {/* Toast 3: info */}
            <div className={toastInfoStyle}>
              <Info
                size={18}
                className={css({ color: 'icon.info.default', flexShrink: 0 })}
              />
              <span className={toastTextStyle}>
                시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
              </span>
              <button className={toastCloseStyle}>
                <XCircle size={16} />
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className={statsGridStyle}>
            {/* Card 1: total users - positive */}
            <div className={statCardStyle}>
              <div className={statCardTopStyle}>
                <span className={statLabelStyle}>총 사용자</span>
                <TrendingUp
                  size={20}
                  className={css({ color: 'icon.positive.default' })}
                />
              </div>
              <span className={statValueStyle}>12,847</span>
              <span className={badgePositiveStyle}>
                <TrendingUp size={12} />
                +12%
              </span>
            </div>

            {/* Card 2: payment failures - critical */}
            <div className={statCardStyle}>
              <div className={statCardTopStyle}>
                <span className={statLabelStyle}>결제 실패</span>
                <AlertCircle
                  size={20}
                  className={css({ color: 'icon.critical.default' })}
                />
              </div>
              <span className={statValueStyle}>24건</span>
              <span className={badgeCriticalStyle}>
                <AlertCircle size={12} />
                +3건
              </span>
            </div>

            {/* Card 3: avg response time - positive */}
            <div className={statCardStyle}>
              <div className={statCardTopStyle}>
                <span className={statLabelStyle}>평균 응답시간</span>
                <Zap
                  size={20}
                  className={css({ color: 'icon.positive.default' })}
                />
              </div>
              <span className={statValueStyle}>142ms</span>
              <span className={badgePositiveStyle}>
                <TrendingUp size={12} />
                -8%
              </span>
            </div>

            {/* Card 4: unresolved complaints - warning */}
            <div className={statCardStyle}>
              <div className={statCardTopStyle}>
                <span className={statLabelStyle}>미처리 민원</span>
                <Clock
                  size={20}
                  className={css({ color: 'icon.warning.default' })}
                />
              </div>
              <span className={statValueStyle}>7건</span>
              <span className={badgeWarningStyle}>
                <Clock size={12} />
                +2건
              </span>
            </div>
          </div>

          {/* System resources */}
          <div className={resourceGridStyle}>
            {/* CPU */}
            <div className={resourceCardStyle}>
              <span className={resourceLabelStyle}>CPU 사용량</span>
              <span className={resourceValueStyle}>42%</span>
              <div className={progressTrackStyle}>
                <div className={progressFillPositiveStyle} />
              </div>
              <span className={resourceStatusPositiveStyle}>여유로운 상태</span>
            </div>

            {/* Memory */}
            <div className={resourceCardStyle}>
              <span className={resourceLabelStyle}>메모리 사용량</span>
              <span className={resourceValueStyle}>78%</span>
              <div className={progressTrackStyle}>
                <div className={progressFillWarningStyle} />
              </div>
              <span className={resourceStatusWarningStyle}>주의 필요</span>
            </div>

            {/* Disk */}
            <div className={resourceCardStyle}>
              <span className={resourceLabelStyle}>디스크 사용량</span>
              <span className={resourceValueStyle}>91%</span>
              <div className={progressTrackStyle}>
                <div className={progressFillCriticalStyle} />
              </div>
              <span className={resourceStatusCriticalStyle}>위험 수준</span>
            </div>
          </div>

          {/* Events table */}
          <div className={tableCardStyle}>
            {/* Tab header */}
            <div className={tableHeaderAreaStyle}>
              <div className={tabsStyle}>
                <button className={tabActiveStyle}>전체 이벤트</button>
                <button className={tabStyle}>미처리</button>
                <button className={tabStyle}>처리완료</button>
              </div>
              <div className={tableActionsStyle}>
                <button className={outlineButtonStyle}>
                  <Filter size={14} />
                  필터
                </button>
                <button className={disabledButtonStyle} disabled>
                  <Download size={14} />
                  CSV 내보내기
                </button>
              </div>
            </div>

            {/* Tag filter bar */}
            <div className={tagBarStyle}>
              <button className={tagActiveStyle}>전체</button>
              <button className={tagStyle}>로그인</button>
              <button className={tagStyle}>결제</button>
              <button className={tagStyle}>보안</button>
              <button className={tagStyle}>시스템</button>
              <div className={tagSearchWrapStyle}>
                <div>
                  <input
                    className={inputStyle}
                    placeholder={css({ color: 'text.neutral.subtle' })}
                    defaultValue=""
                  />
                </div>
                <div>
                  <input
                    className={inputErrorStyle}
                    defaultValue="2025/13/40"
                  />
                  <p className={inputErrorMsgStyle}>올바른 날짜 형식을 입력하세요 (예: 2025-06-10)</p>
                </div>
              </div>
            </div>

            {/* Table */}
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
                {/* Row 1 - odd */}
                <tr>
                  <td className={tdStyle}>
                    <div className={userCellStyle}>
                      <div className={rowAvatarStyle}>홍</div>
                      <span>홍길동</span>
                    </div>
                  </td>
                  <td className={tdStyle}>로그인 성공</td>
                  <td className={tdStyle}>14:32</td>
                  <td className={tdStyle}>
                    <span className={statusPositiveStyle}>
                      <CheckCircle2 size={14} />
                      정상 처리됨
                    </span>
                  </td>
                  <td className={tdStyle}>
                    <button className={ghostIconButtonStyle}>
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 2 - even */}
                <tr>
                  <td className={tdEvenStyle}>
                    <div className={userCellStyle}>
                      <div className={rowAvatarStyle}>김</div>
                      <span>김철수</span>
                    </div>
                  </td>
                  <td className={tdEvenStyle}>결제 실패</td>
                  <td className={tdEvenStyle}>14:28</td>
                  <td className={tdEvenStyle}>
                    <span className={statusCriticalStyle}>
                      <XCircle size={14} />
                      문제 발생
                    </span>
                  </td>
                  <td className={tdEvenStyle}>
                    <button className={ghostIconButtonStyle}>
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 3 - odd */}
                <tr>
                  <td className={tdStyle}>
                    <div className={userCellStyle}>
                      <div className={rowAvatarStyle}>이</div>
                      <span>이영희</span>
                    </div>
                  </td>
                  <td className={tdStyle}>비밀번호 5회 오류</td>
                  <td className={tdStyle}>14:21</td>
                  <td className={tdStyle}>
                    <span className={statusWarningStyle}>
                      <AlertCircle size={14} />
                      주의 필요
                    </span>
                  </td>
                  <td className={tdStyle}>
                    <button className={ghostIconButtonStyle}>
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 4 - even */}
                <tr>
                  <td className={tdEvenStyle}>
                    <div className={userCellStyle}>
                      <div className={rowAvatarStyle}>박</div>
                      <span>박민수</span>
                    </div>
                  </td>
                  <td className={tdEvenStyle}>회원가입</td>
                  <td className={tdEvenStyle}>14:15</td>
                  <td className={tdEvenStyle}>
                    <span className={statusPositiveStyle}>
                      <CheckCircle2 size={14} />
                      정상 처리됨
                    </span>
                  </td>
                  <td className={tdEvenStyle}>
                    <button className={ghostIconButtonStyle}>
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 5 - odd */}
                <tr>
                  <td className={tdStyle}>
                    <div className={userCellStyle}>
                      <div className={rowAvatarStyle}>시</div>
                      <span>시스템</span>
                    </div>
                  </td>
                  <td className={tdStyle}>API 응답 지연</td>
                  <td className={tdStyle}>14:09</td>
                  <td className={tdStyle}>
                    <span className={statusWarningStyle}>
                      <AlertCircle size={14} />
                      주의 필요
                    </span>
                  </td>
                  <td className={tdStyle}>
                    <button className={ghostIconButtonStyle}>
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notification settings toggle panel */}
          <div className={toggleCardStyle}>
            <h3 className={toggleCardTitleStyle}>알림 수신 설정</h3>
            <div className={toggleListStyle}>
              {/* Toggle 1: on */}
              <div className={toggleRowStyle}>
                <span className={toggleLabelStyle}>배포 알림</span>
                <button className={toggleOnStyle}>
                  <span className={toggleHandleOnStyle} />
                </button>
              </div>

              {/* Toggle 2: on */}
              <div className={toggleRowStyle}>
                <span className={toggleLabelStyle}>장애 알림</span>
                <button className={toggleOnStyle}>
                  <span className={toggleHandleOnStyle} />
                </button>
              </div>

              {/* Toggle 3: off */}
              <div className={toggleRowStyle}>
                <span className={toggleLabelStyle}>보안 알림</span>
                <button className={toggleOffStyle}>
                  <span className={toggleHandleOffStyle} />
                </button>
              </div>

              {/* Toggle 4: disabled */}
              <div className={toggleRowStyle}>
                <span
                  className={css({
                    fontSize: '14px',
                    color: 'text.neutral.default',
                    opacity: 0.4,
                  })}
                >
                  마케팅 알림
                </span>
                <button className={toggleDisabledStyle} disabled>
                  <span className={toggleHandleOffStyle} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom notification cards */}
          <div className={notifCardsGridStyle}>
            {/* Card 1: positive */}
            <div className={notifCardPositiveStyle}>
              <div className={notifCardHeaderStyle}>
                <div className={notifCardTitleRowStyle}>
                  <CheckCircle2
                    size={18}
                    className={css({ color: 'icon.positive.default' })}
                  />
                  <span className={notifCardTitlePositiveStyle}>배포 완료</span>
                </div>
                <button className={closeButtonPositiveStyle}>
                  <XCircle size={16} />
                </button>
              </div>
              <p className={notifCardDescPositiveStyle}>
                v2.4.1이 성공적으로 배포되었습니다.
              </p>
              <div className={notifCardActionsStyle}>
                <button className={outlineButtonPositiveStyle}>배포 로그 보기</button>
              </div>
            </div>

            {/* Card 2: critical */}
            <div className={notifCardCriticalStyle}>
              <div className={notifCardHeaderStyle}>
                <div className={notifCardTitleRowStyle}>
                  <XCircle
                    size={18}
                    className={css({ color: 'icon.critical.default' })}
                  />
                  <span className={notifCardTitleCriticalStyle}>연결 실패</span>
                </div>
                <button className={closeButtonCriticalStyle}>
                  <XCircle size={16} />
                </button>
              </div>
              <p className={notifCardDescCriticalStyle}>DB 연결이 실패했습니다.</p>
              <div className={notifCardActionsStyle}>
                <button className={solidButtonCriticalStyle}>즉시 확인</button>
                <button className={ghostButtonCriticalStyle}>무시</button>
              </div>
            </div>

            {/* Card 3: warning */}
            <div className={notifCardWarningStyle}>
              <div className={notifCardHeaderStyle}>
                <div className={notifCardTitleRowStyle}>
                  <AlertTriangle
                    size={18}
                    className={css({ color: 'icon.warning.default' })}
                  />
                  <span className={notifCardTitleWarningStyle}>용량 경고</span>
                </div>
                <button className={closeButtonWarningStyle}>
                  <XCircle size={16} />
                </button>
              </div>
              <p className={notifCardDescWarningStyle}>디스크 사용량이 85%입니다.</p>
              <div className={notifCardActionsStyle}>
                <button className={outlineButtonWarningStyle}>정리 시작</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
