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

// ── Sidebar ───────────────────────────────────────────────────────────────────

function Sidebar() {
  const sidebarCls = css({
    width: '240px',
    height: '100vh',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    backgroundColor: 'neutral.canvas.02',
  });

  const logoCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '20px',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.low',
    fontWeight: '700',
    fontSize: '18px',
    color: 'neutral.text.base',
  });

  const logoIconCls = css({ color: 'neutral.icon.base' });

  const navCls = css({ flex: 1, paddingTop: '8px', paddingBottom: '8px' });

  const activeItemCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    margin: '0 8px',
    borderRadius: '8px',
    backgroundColor: 'overlay.lighten.hover',
    color: 'neutral.text.base',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  });

  const activeIconCls = css({ color: 'neutral.icon.base' });

  const navItemCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    margin: '0 8px',
    borderRadius: '8px',
    color: 'neutral.text.base',
    fontSize: '14px',
    cursor: 'pointer',
    _hover: { backgroundColor: 'overlay.lighten.hover' },
  });

  const navIconCls = css({ color: 'neutral.icon.base' });

  const disabledItemCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    margin: '0 8px',
    borderRadius: '8px',
    color: 'neutral.text.base',
    fontSize: '14px',
    cursor: 'not-allowed',
    opacity: 0.38,
  });

  const logoutAreaCls = css({
    borderTop: '1px solid',
    borderColor: 'neutral.border.low',
    padding: '12px 8px',
  });

  const logoutCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    _hover: { backgroundColor: 'overlay.lighten.hover' },
  });

  const logoutIconCls = css({ color: 'critical.icon.base' });
  const logoutTextCls = css({ color: 'critical.text.base', fontSize: '14px' });

  return (
    // "dark" class triggers the dark local theme so neutral tokens render as dark-mode values
    <aside className={`dark ${sidebarCls}`}>
      <div className={logoCls}>
        <LayoutDashboard size={22} className={logoIconCls} />
        <span>Mildang</span>
      </div>
      <nav className={navCls}>
        <div className={activeItemCls}>
          <LayoutDashboard size={18} className={activeIconCls} />
          <span>대시보드</span>
        </div>
        <div className={navItemCls}>
          <Users size={18} className={navIconCls} />
          <span>사용자 관리</span>
        </div>
        <div className={navItemCls}>
          <CreditCard size={18} className={navIconCls} />
          <span>결제 내역</span>
        </div>
        <div className={navItemCls}>
          <Bell size={18} className={navIconCls} />
          <span>알림 설정</span>
        </div>
        <div className={disabledItemCls}>
          <ScrollText size={18} className={navIconCls} />
          <span>시스템 로그</span>
        </div>
      </nav>
      <div className={logoutAreaCls}>
        <div className={logoutCls}>
          <LogOut size={16} className={logoutIconCls} />
          <span className={logoutTextCls}>로그아웃</span>
        </div>
      </div>
    </aside>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────

function Header() {
  const headerCls = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: '56px',
    backgroundColor: 'neutral.canvas.01',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.base',
    flexShrink: 0,
  });

  const breadcrumbCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
  });

  const linkCls = css({
    color: 'neutral.text.base',
    textDecoration: 'none',
    cursor: 'pointer',
    _hover: { color: 'primary.text.base' },
  });

  const sepCls = css({ color: 'neutral.text.base', opacity: 0.38 });

  const currentCls = css({ color: 'neutral.text.base', fontWeight: '600' });

  const rightCls = css({ display: 'flex', alignItems: 'center', gap: '8px' });

  const iconBtnCls = css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.icon.base',
    cursor: 'pointer',
    border: 'none',
    _hover: { backgroundColor: 'neutral.surface.high' },
  });

  // Tooltip: dark solid background with contrasting text — use neutral.fill.high (darkest neutral fill)
  const tooltipCls = css({
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '6px',
    padding: '4px 8px',
    borderRadius: '6px',
    backgroundColor: 'neutral.fill.high',
    color: 'inverse.text.base',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 10,
  });

  const badgeCls = css({
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '16px',
    height: '16px',
    borderRadius: '9999px',
    backgroundColor: 'critical.fill.base',
    color: 'inverse.text.base',
    fontSize: '10px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const dividerCls = css({
    width: '1px',
    height: '24px',
    backgroundColor: 'neutral.border.base',
    margin: '0 4px',
  });

  const primaryBtnCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    borderRadius: '8px',
    backgroundColor: 'primary.fill.base',
    color: 'inverse.text.base',
    fontSize: '14px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    _hover: { backgroundColor: 'primary.surface.high' },
  });

  const primaryBtnIconCls = css({ color: 'inverse.icon.base' });

  const avatarCls = css({
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
    cursor: 'pointer',
  });

  return (
    <header className={headerCls}>
      <nav className={breadcrumbCls}>
        <a href="#" className={linkCls}>홈</a>
        <span className={sepCls}>/</span>
        <a href="#" className={linkCls}>모니터링</a>
        <span className={sepCls}>/</span>
        <span className={currentCls}>대시보드</span>
      </nav>
      <div className={rightCls}>
        {/* Search icon btn + tooltip */}
        <div className={css({ position: 'relative' })}>
          <button className={iconBtnCls} aria-label="검색">
            <Search size={18} />
          </button>
          <div className={tooltipCls}>검색</div>
        </div>
        {/* Bell with badge + tooltip */}
        <div className={css({ position: 'relative' })}>
          <button className={iconBtnCls} aria-label="알림">
            <Bell size={18} />
            <span className={badgeCls}>3</span>
          </button>
          <div className={tooltipCls}>알림</div>
        </div>
        {/* Settings + tooltip */}
        <div className={css({ position: 'relative' })}>
          <button className={iconBtnCls} aria-label="설정">
            <Settings size={18} />
          </button>
          <div className={tooltipCls}>설정</div>
        </div>
        <div className={dividerCls} />
        <button className={primaryBtnCls}>
          <Plus size={16} className={primaryBtnIconCls} />
          새 배포
        </button>
        <div className={avatarCls}>K</div>
      </div>
    </header>
  );
}

// ── Toasts ────────────────────────────────────────────────────────────────────

function ToastArea() {
  const wrapperCls = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '12px 24px',
    alignItems: 'flex-end',
  });

  return (
    <div className={wrapperCls}>
      {/* Toast 1: positive */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          borderRadius: '10px',
          border: '1px solid',
          maxWidth: '400px',
          backgroundColor: 'positive.surface.base',
          borderColor: 'positive.border.base',
        })}
      >
        <CheckCircle2 size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
        <span className={css({ fontSize: '13px', flex: 1, color: 'positive.text.base' })}>
          배포 v2.4.1이 완료되었습니다.
        </span>
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'neutral.surface.transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'positive.icon.base',
            borderRadius: '4px',
            padding: '2px',
          })}
        >
          <X size={14} />
        </button>
      </div>

      {/* Toast 2: critical */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          borderRadius: '10px',
          border: '1px solid',
          maxWidth: '400px',
          backgroundColor: 'critical.surface.base',
          borderColor: 'critical.border.base',
        })}
      >
        <XCircle size={16} className={css({ color: 'critical.icon.base', flexShrink: 0 })} />
        <span className={css({ fontSize: '13px', flex: 1, color: 'critical.text.base' })}>
          DB 연결이 끊어졌습니다. 즉시 확인하세요.
        </span>
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'neutral.surface.transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'critical.icon.base',
            borderRadius: '4px',
            padding: '2px',
          })}
        >
          <X size={14} />
        </button>
      </div>

      {/* Toast 3: info */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          borderRadius: '10px',
          border: '1px solid',
          maxWidth: '400px',
          backgroundColor: 'info.surface.base',
          borderColor: 'info.border.base',
        })}
      >
        <Info size={16} className={css({ color: 'info.icon.base', flexShrink: 0 })} />
        <span className={css({ fontSize: '13px', flex: 1, color: 'info.text.base' })}>
          시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
        </span>
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'neutral.surface.transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'info.icon.base',
            borderRadius: '4px',
            padding: '2px',
          })}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

// ── Stat Cards ────────────────────────────────────────────────────────────────

function StatCards() {
  const gridCls = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    padding: '0 24px 20px',
  });

  const cardCls = css({
    backgroundColor: 'neutral.canvas.01',
    border: '1px solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  });

  const cardHeaderCls = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  });

  const labelCls = css({ fontSize: '13px', color: 'neutral.text.low' });
  const valueCls = css({ fontSize: '28px', fontWeight: '700', color: 'neutral.text.base' });

  return (
    <div className={gridCls}>
      {/* Card 1: 총 사용자 — positive (좋은 변화) */}
      <div className={cardCls}>
        <div className={cardHeaderCls}>
          <span className={labelCls}>총 사용자</span>
          <TrendingUp size={20} className={css({ color: 'positive.icon.base' })} />
        </div>
        <span className={valueCls}>12,847</span>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            borderRadius: '9999px',
            border: '1px solid',
            fontSize: '12px',
            fontWeight: '600',
            alignSelf: 'flex-start',
            backgroundColor: 'positive.surface.base',
            borderColor: 'positive.border.base',
            color: 'positive.text.base',
          })}
        >
          +12%
        </span>
      </div>

      {/* Card 2: 결제 실패 — critical (문제 상황) */}
      <div className={cardCls}>
        <div className={cardHeaderCls}>
          <span className={labelCls}>결제 실패</span>
          <AlertCircle size={20} className={css({ color: 'critical.icon.base' })} />
        </div>
        <span className={valueCls}>24건</span>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            borderRadius: '9999px',
            border: '1px solid',
            fontSize: '12px',
            fontWeight: '600',
            alignSelf: 'flex-start',
            backgroundColor: 'critical.surface.base',
            borderColor: 'critical.border.base',
            color: 'critical.text.base',
          })}
        >
          +3건
        </span>
      </div>

      {/* Card 3: 평균 응답시간 — positive (좋은 변화) */}
      <div className={cardCls}>
        <div className={cardHeaderCls}>
          <span className={labelCls}>평균 응답시간</span>
          <Zap size={20} className={css({ color: 'positive.icon.base' })} />
        </div>
        <span className={valueCls}>142ms</span>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            borderRadius: '9999px',
            border: '1px solid',
            fontSize: '12px',
            fontWeight: '600',
            alignSelf: 'flex-start',
            backgroundColor: 'positive.surface.base',
            borderColor: 'positive.border.base',
            color: 'positive.text.base',
          })}
        >
          -8%
        </span>
      </div>

      {/* Card 4: 미처리 민원 — warning (주의 필요) */}
      <div className={cardCls}>
        <div className={cardHeaderCls}>
          <span className={labelCls}>미처리 민원</span>
          <Clock size={20} className={css({ color: 'warning.icon.base' })} />
        </div>
        <span className={valueCls}>7건</span>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            borderRadius: '9999px',
            border: '1px solid',
            fontSize: '12px',
            fontWeight: '600',
            alignSelf: 'flex-start',
            backgroundColor: 'warning.surface.base',
            borderColor: 'warning.border.base',
            color: 'warning.text.base',
          })}
        >
          +2건
        </span>
      </div>
    </div>
  );
}

// ── System Resources ──────────────────────────────────────────────────────────

function SystemResources() {
  const sectionCls = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    padding: '0 24px 20px',
  });

  const cardCls = css({
    backgroundColor: 'neutral.canvas.01',
    border: '1px solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  });

  // Empty track: neutral.fill.base (the light neutral fill for tracks/inactive areas)
  const trackCls = css({
    height: '8px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.fill.base',
    overflow: 'hidden',
  });

  return (
    <div className={sectionCls}>
      {/* CPU 42% — positive (여유로운 상태) */}
      <div className={cardCls}>
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' })}>
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>CPU 사용량</span>
          <span className={css({ fontSize: '22px', fontWeight: '700', color: 'neutral.text.base' })}>42%</span>
        </div>
        <div className={trackCls}>
          <div
            className={css({
              height: '100%',
              width: '42%',
              borderRadius: '9999px',
              backgroundColor: 'positive.fill.base',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'positive.text.base' })}>여유로운 상태</span>
      </div>

      {/* 메모리 78% — warning (주의 필요) */}
      <div className={cardCls}>
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' })}>
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>메모리 사용량</span>
          <span className={css({ fontSize: '22px', fontWeight: '700', color: 'neutral.text.base' })}>78%</span>
        </div>
        <div className={trackCls}>
          <div
            className={css({
              height: '100%',
              width: '78%',
              borderRadius: '9999px',
              backgroundColor: 'warning.fill.base',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'warning.text.base' })}>주의 필요</span>
      </div>

      {/* 디스크 91% — critical (심각) */}
      <div className={cardCls}>
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' })}>
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>디스크 사용량</span>
          <span className={css({ fontSize: '22px', fontWeight: '700', color: 'neutral.text.base' })}>91%</span>
        </div>
        <div className={trackCls}>
          <div
            className={css({
              height: '100%',
              width: '91%',
              borderRadius: '9999px',
              backgroundColor: 'critical.fill.base',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'critical.text.base' })}>심각한 문제</span>
      </div>
    </div>
  );
}

// ── Events Table ──────────────────────────────────────────────────────────────

function EventsTable() {
  const containerCls = css({
    margin: '0 24px 20px',
    backgroundColor: 'neutral.canvas.01',
    border: '1px solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    overflow: 'hidden',
  });

  const tabBarCls = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.low',
  });

  const tabsCls = css({ display: 'flex' });

  const activeTabCls = css({
    padding: '14px 16px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'primary.text.base',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    borderBottom: '2px solid',
    borderColor: 'primary.border.highest',
  });

  const inactiveTabCls = css({
    padding: '14px 16px',
    fontSize: '14px',
    color: 'neutral.text.base',
    cursor: 'pointer',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    opacity: 0.38,
    _hover: { opacity: 1, color: 'neutral.text.low' },
  });

  const tabBtnsCls = css({ display: 'flex', gap: '8px', padding: '8px 0' });

  const outlineBtnCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'neutral.border.base',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.text.base',
    fontSize: '13px',
    cursor: 'pointer',
    _hover: { borderColor: 'neutral.border.high', backgroundColor: 'neutral.surface.high' },
  });

  const outlineBtnIconCls = css({ color: 'neutral.icon.base' });

  const disabledBtnCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'neutral.border.base',
    backgroundColor: 'neutral.surface.transparent',
    color: 'neutral.text.base',
    fontSize: '13px',
    cursor: 'not-allowed',
    opacity: 0.38,
  });

  const tagBarCls = css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.low',
    flexWrap: 'wrap',
  });

  const activeTagCls = css({
    padding: '4px 12px',
    borderRadius: '9999px',
    backgroundColor: 'primary.fill.base',
    color: 'inverse.text.base',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
  });

  const inactiveTagCls = css({
    padding: '4px 12px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.surface.base',
    color: 'neutral.text.low',
    fontSize: '13px',
    cursor: 'pointer',
    border: 'none',
    _hover: { backgroundColor: 'neutral.surface.high', color: 'neutral.text.base' },
  });

  const inputCls = css({
    padding: '6px 10px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'neutral.border.base',
    backgroundColor: 'neutral.surface.base',
    color: 'neutral.text.base',
    fontSize: '13px',
    outline: 'none',
    _placeholder: { color: 'neutral.text.lowest', opacity: 0.38 },
    _focus: {
      borderColor: 'focus.border',
      boxShadow: '0 0 0 2px token(colors.focus.border)',
    },
  });

  const errorInputCls = css({
    padding: '6px 10px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'critical.border.base',
    backgroundColor: 'critical.surface.base',
    color: 'neutral.text.base',
    fontSize: '13px',
    outline: 'none',
  });

  const thCls = css({
    textAlign: 'left',
    padding: '10px 16px',
    fontSize: '12px',
    fontWeight: '600',
    color: 'neutral.text.low',
    backgroundColor: 'neutral.canvas.02',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.low',
  });

  const tdCls = css({
    padding: '12px 16px',
    fontSize: '14px',
    color: 'neutral.text.base',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.low',
  });

  const tdEvenCls = css({
    padding: '12px 16px',
    fontSize: '14px',
    color: 'neutral.text.base',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.low',
    backgroundColor: 'neutral.canvas.02',
  });

  const avatarSmCls = css({
    width: '28px',
    height: '28px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.surface.base',
    color: 'neutral.text.base',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: '700',
    flexShrink: 0,
  });

  const ghostBtnCls = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '6px',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    color: 'neutral.icon.base',
    cursor: 'pointer',
    _hover: { backgroundColor: 'neutral.surface.high' },
  });

  type StatusType = 'positive' | 'critical' | 'warning';

  const rows: {
    initial: string;
    name: string;
    event: string;
    time: string;
    status: StatusType;
    statusLabel: string;
  }[] = [
    { initial: '홍', name: '홍길동', event: '로그인 성공', time: '14:32', status: 'positive', statusLabel: '정상 처리됨' },
    { initial: '김', name: '김철수', event: '결제 실패', time: '14:28', status: 'critical', statusLabel: '문제 발생' },
    { initial: '이', name: '이영희', event: '비밀번호 5회 오류', time: '14:21', status: 'warning', statusLabel: '주의 필요' },
    { initial: '박', name: '박민준', event: '회원가입', time: '14:15', status: 'positive', statusLabel: '정상 처리됨' },
    { initial: '시', name: '시스템', event: 'API 응답 지연', time: '14:09', status: 'warning', statusLabel: '주의 필요' },
  ];

  const statusConfig: Record<StatusType, { iconColor: string; textColor: string }> = {
    positive: { iconColor: 'positive.icon.base', textColor: 'positive.text.base' },
    critical: { iconColor: 'critical.icon.base', textColor: 'critical.text.base' },
    warning: { iconColor: 'warning.icon.base', textColor: 'warning.text.base' },
  };

  const StatusIcon = ({ status }: { status: StatusType }) => {
    const iconCls = css({ color: statusConfig[status].iconColor as 'positive.icon.base' });
    if (status === 'positive') return <CheckCircle2 size={14} className={iconCls} />;
    if (status === 'critical') return <XCircle size={14} className={iconCls} />;
    return <AlertCircle size={14} className={iconCls} />;
  };

  return (
    <div className={containerCls}>
      {/* Tab Bar */}
      <div className={tabBarCls}>
        <div className={tabsCls}>
          <button className={activeTabCls}>전체 이벤트</button>
          <button className={inactiveTabCls}>미처리</button>
          <button className={inactiveTabCls}>처리완료</button>
        </div>
        <div className={tabBtnsCls}>
          <button className={outlineBtnCls}>
            <Filter size={14} className={outlineBtnIconCls} />
            필터
          </button>
          <button className={disabledBtnCls} disabled>
            <Download size={14} />
            CSV 내보내기
          </button>
        </div>
      </div>

      {/* Tag filter + search */}
      <div className={tagBarCls}>
        <button className={activeTagCls}>전체</button>
        <button className={inactiveTagCls}>로그인</button>
        <button className={inactiveTagCls}>결제</button>
        <button className={inactiveTagCls}>보안</button>
        <button className={inactiveTagCls}>시스템</button>
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', marginLeft: 'auto' })}>
          <input className={inputCls} placeholder="이벤트 검색..." />
          <div>
            <input className={errorInputCls} defaultValue="2025/13/45" />
            <p className={css({ fontSize: '12px', color: 'critical.text.base', marginTop: '2px' })}>
              잘못된 날짜 형식입니다. (예: 2025-06-10)
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
        <thead>
          <tr>
            <th className={thCls}>사용자</th>
            <th className={thCls}>이벤트</th>
            <th className={thCls}>시간</th>
            <th className={thCls}>상태</th>
            <th className={thCls}>액션</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const td = idx % 2 === 1 ? tdEvenCls : tdCls;
            const { textColor } = statusConfig[row.status];
            return (
              <tr key={idx}>
                <td className={td}>
                  <span className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <span className={avatarSmCls}>{row.initial}</span>
                    <span>{row.name}</span>
                  </span>
                </td>
                <td className={td}>{row.event}</td>
                <td className={td}>{row.time}</td>
                <td className={td}>
                  <span className={css({ display: 'inline-flex', alignItems: 'center', gap: '4px' })}>
                    <StatusIcon status={row.status} />
                    <span className={css({ fontSize: '13px', color: textColor as 'positive.text.base' })}>
                      {row.statusLabel}
                    </span>
                  </span>
                </td>
                <td className={td}>
                  <button className={ghostBtnCls} aria-label="자세히 보기">
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
  const cardCls = css({
    margin: '0 24px 20px',
    backgroundColor: 'neutral.canvas.01',
    border: '1px solid',
    borderColor: 'neutral.border.base',
    borderRadius: '12px',
    padding: '20px',
  });

  const titleCls = css({
    fontSize: '16px',
    fontWeight: '700',
    color: 'neutral.text.base',
    marginBottom: '16px',
  });

  const rowCls = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid',
    borderColor: 'neutral.border.low',
  });

  const lastRowCls = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
  });

  const labelCls = css({ fontSize: '14px', color: 'neutral.text.base' });

  // Toggle ON — primary.fill.base track
  const trackOnCls = css({
    width: '44px',
    height: '24px',
    borderRadius: '9999px',
    backgroundColor: 'primary.fill.base',
    position: 'relative',
    cursor: 'pointer',
    flexShrink: 0,
  });

  // Toggle OFF — neutral.fill.base track (neutral inactive fill for toggle track)
  const trackOffCls = css({
    width: '44px',
    height: '24px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.fill.base',
    position: 'relative',
    cursor: 'pointer',
    flexShrink: 0,
  });

  const trackDisabledCls = css({
    width: '44px',
    height: '24px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.fill.base',
    position: 'relative',
    cursor: 'not-allowed',
    flexShrink: 0,
    opacity: 0.38,
  });

  // White handle — using neutral.canvas.01 which is white in light theme
  const handleOnCls = css({
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.canvas.01',
  });

  const handleOffCls = css({
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '9999px',
    backgroundColor: 'neutral.canvas.01',
  });

  return (
    <div className={cardCls}>
      <h3 className={titleCls}>알림 수신 설정</h3>
      {/* 배포 알림 — ON */}
      <div className={rowCls}>
        <span className={labelCls}>배포 알림</span>
        <div className={trackOnCls}><div className={handleOnCls} /></div>
      </div>
      {/* 장애 알림 — ON */}
      <div className={rowCls}>
        <span className={labelCls}>장애 알림</span>
        <div className={trackOnCls}><div className={handleOnCls} /></div>
      </div>
      {/* 보안 알림 — OFF */}
      <div className={rowCls}>
        <span className={labelCls}>보안 알림</span>
        <div className={trackOffCls}><div className={handleOffCls} /></div>
      </div>
      {/* 마케팅 알림 — OFF + disabled */}
      <div className={lastRowCls}>
        <span className={labelCls}>마케팅 알림</span>
        <div className={trackDisabledCls}><div className={handleOffCls} /></div>
      </div>
    </div>
  );
}

// ── Notification Cards ────────────────────────────────────────────────────────

function NotificationCards() {
  const gridCls = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    padding: '0 24px 32px',
  });

  const positiveOutlineCls = css({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 12px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'positive.border.highest',
    backgroundColor: 'neutral.surface.transparent',
    color: 'positive.text.base',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    _hover: { backgroundColor: 'positive.surface.high' },
  });

  const criticalFilledCls = css({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 12px',
    borderRadius: '8px',
    backgroundColor: 'critical.fill.base',
    color: 'inverse.text.base',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    _hover: { backgroundColor: 'critical.surface.high' },
  });

  const ghostCls = css({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 12px',
    borderRadius: '8px',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    color: 'neutral.text.base',
    fontSize: '13px',
    cursor: 'pointer',
    _hover: { backgroundColor: 'neutral.surface.high' },
  });

  const warningOutlineCls = css({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 12px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'warning.border.highest',
    backgroundColor: 'neutral.surface.transparent',
    color: 'warning.text.base',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    _hover: { backgroundColor: 'warning.surface.high' },
  });

  const closeBtnCls = css({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'neutral.surface.transparent',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    padding: '2px',
  });

  return (
    <div className={gridCls}>
      {/* Card 1: positive — 배포 완료 */}
      <div
        className={css({
          backgroundColor: 'positive.surface.base',
          border: '1px solid',
          borderColor: 'positive.border.base',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
            <CheckCircle2 size={20} className={css({ color: 'positive.icon.base' })} />
            <span className={css({ fontSize: '15px', fontWeight: '700', color: 'positive.text.base' })}>배포 완료</span>
          </div>
          <button className={`${closeBtnCls} ${css({ color: 'positive.icon.base' })}`}><X size={14} /></button>
        </div>
        <p className={css({ fontSize: '13px', color: 'positive.text.base' })}>
          v2.4.1이 성공적으로 배포되었습니다.
        </p>
        <div className={css({ display: 'flex', gap: '8px' })}>
          <button className={positiveOutlineCls}>배포 로그 보기</button>
        </div>
      </div>

      {/* Card 2: critical — 연결 실패 */}
      <div
        className={css({
          backgroundColor: 'critical.surface.base',
          border: '1px solid',
          borderColor: 'critical.border.base',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
            <XCircle size={20} className={css({ color: 'critical.icon.base' })} />
            <span className={css({ fontSize: '15px', fontWeight: '700', color: 'critical.text.base' })}>연결 실패</span>
          </div>
          <button className={`${closeBtnCls} ${css({ color: 'critical.icon.base' })}`}><X size={14} /></button>
        </div>
        <p className={css({ fontSize: '13px', color: 'critical.text.base' })}>
          DB 연결이 실패했습니다.
        </p>
        <div className={css({ display: 'flex', gap: '8px' })}>
          <button className={criticalFilledCls}>즉시 확인</button>
          <button className={ghostCls}>무시</button>
        </div>
      </div>

      {/* Card 3: warning — 용량 경고 */}
      <div
        className={css({
          backgroundColor: 'warning.surface.base',
          border: '1px solid',
          borderColor: 'warning.border.base',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
            <AlertTriangle size={20} className={css({ color: 'warning.icon.base' })} />
            <span className={css({ fontSize: '15px', fontWeight: '700', color: 'warning.text.base' })}>용량 경고</span>
          </div>
          <button className={`${closeBtnCls} ${css({ color: 'warning.icon.base' })}`}><X size={14} /></button>
        </div>
        <p className={css({ fontSize: '13px', color: 'warning.text.base' })}>
          디스크 사용량이 85%입니다.
        </p>
        <div className={css({ display: 'flex', gap: '8px' })}>
          <button className={warningOutlineCls}>정리 시작</button>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const layoutCls = css({
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  });

  const mainCls = css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    backgroundColor: 'neutral.canvas.03',
  });

  const contentCls = css({
    flex: 1,
    paddingTop: '8px',
  });

  return (
    <div className={layoutCls}>
      <Sidebar />
      <main className={mainCls}>
        <Header />
        <ToastArea />
        <div className={contentCls}>
          <StatCards />
          <SystemResources />
          <EventsTable />
          <TogglePanel />
          <NotificationCards />
        </div>
      </main>
    </div>
  );
}
