import { css } from '@ds-token-test/styled-system-property-first/css';
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

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside
      className={css({
        width: '240px',
        minWidth: '240px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        backgroundColor: 'surface.neutral.emphasis',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      })}
    >
      {/* Logo */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '24px 20px 20px',
        })}
      >
        <LayoutDashboard size={22} className={css({ color: 'icon.brand.default' })} />
        <span
          className={css({
            fontSize: '18px',
            fontWeight: '700',
            color: 'text.inverse',
          })}
        >
          Mildang
        </span>
      </div>

      {/* Nav */}
      <nav
        className={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          padding: '4px 12px',
        })}
      >
        {/* Active item: 대시보드 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor: 'surface.brand.default',
            color: 'text.inverse',
            fontSize: '14px',
            fontWeight: '600',
          })}
        >
          <LayoutDashboard size={18} className={css({ color: 'icon.inverse' })} />
          <span>대시보드</span>
        </div>

        {/* 사용자 관리 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'text.inverse',
            fontSize: '14px',
            fontWeight: '400',
          })}
        >
          <Users size={18} className={css({ color: 'icon.inverse' })} />
          <span>사용자 관리</span>
        </div>

        {/* 결제 내역 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'text.inverse',
            fontSize: '14px',
            fontWeight: '400',
          })}
        >
          <CreditCard size={18} className={css({ color: 'icon.inverse' })} />
          <span>결제 내역</span>
        </div>

        {/* 알림 설정 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'text.inverse',
            fontSize: '14px',
            fontWeight: '400',
          })}
        >
          <Bell size={18} className={css({ color: 'icon.inverse' })} />
          <span>알림 설정</span>
        </div>

        {/* 시스템 로그 — disabled */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 12px',
            borderRadius: '8px',
            cursor: 'not-allowed',
            color: 'text.inverse',
            fontSize: '14px',
            fontWeight: '400',
            opacity: 0.38,
          })}
        >
          <ScrollText size={18} className={css({ color: 'icon.inverse' })} />
          <span>시스템 로그</span>
        </div>
      </nav>

      {/* Logout */}
      <div
        className={css({
          padding: '16px 12px 24px',
          borderTop: '1px solid',
          borderColor: 'border.neutral.subtle',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'text.critical.default',
            fontSize: '14px',
            fontWeight: '500',
          })}
        >
          <LogOut size={18} className={css({ color: 'icon.critical.default' })} />
          <span>로그아웃</span>
        </div>
      </div>
    </aside>
  );
}

// ─── Header Bar ───────────────────────────────────────────────────────────────

function HeaderBar() {
  return (
    <header
      className={css({
        backgroundColor: 'surface.neutral.default',
        borderBottom: '1px solid',
        borderColor: 'border.neutral.default',
        padding: '0 24px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      })}
    >
      {/* Breadcrumb */}
      <nav
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '14px',
        })}
      >
        <span
          className={css({
            color: 'text.neutral.default',
            cursor: 'pointer',
            _hover: { color: 'text.brand.default' },
          })}
        >
          홈
        </span>
        <span className={css({ color: 'text.neutral.subtle', opacity: 0.38 })}>/</span>
        <span
          className={css({
            color: 'text.neutral.default',
            cursor: 'pointer',
            _hover: { color: 'text.brand.default' },
          })}
        >
          모니터링
        </span>
        <span className={css({ color: 'text.neutral.subtle', opacity: 0.38 })}>/</span>
        <span
          className={css({
            color: 'text.neutral.default',
            fontWeight: '600',
          })}
        >
          대시보드
        </span>
      </nav>

      {/* Right actions */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        })}
      >
        {/* Search */}
        <div className={css({ position: 'relative' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'surface.transparent',
              cursor: 'pointer',
              color: 'icon.neutral.default',
              _hover: { backgroundColor: 'surface.neutral.ghost' },
            })}
          >
            <Search size={18} />
          </button>
          <div
            className={css({
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'surface.neutral.emphasis',
              color: 'text.inverse',
              fontSize: '12px',
              padding: '4px 8px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              display: 'none',
            })}
          >
            검색
          </div>
        </div>

        {/* Bell + badge */}
        <div className={css({ position: 'relative' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'surface.transparent',
              cursor: 'pointer',
              color: 'icon.neutral.default',
              _hover: { backgroundColor: 'surface.neutral.ghost' },
            })}
          >
            <Bell size={18} />
          </button>
          <span
            className={css({
              position: 'absolute',
              top: '4px',
              right: '4px',
              minWidth: '14px',
              height: '14px',
              borderRadius: '99px',
              backgroundColor: 'fill.critical',
              color: 'text.inverse',
              fontSize: '10px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 2px',
            })}
          >
            3
          </span>
        </div>

        {/* Settings */}
        <div className={css({ position: 'relative' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'surface.transparent',
              cursor: 'pointer',
              color: 'icon.neutral.default',
              _hover: { backgroundColor: 'surface.neutral.ghost' },
            })}
          >
            <Settings size={18} />
          </button>
        </div>

        {/* Divider */}
        <div
          className={css({
            width: '1px',
            height: '24px',
            backgroundColor: 'border.neutral.default',
            margin: '0 8px',
          })}
        />

        {/* New deploy button */}
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            borderRadius: '8px',
            backgroundColor: 'fill.brand',
            color: 'text.inverse',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            border: 'none',
            _hover: { backgroundColor: 'surface.brand.emphasis' },
          })}
        >
          <Plus size={16} />
          새 배포
        </button>

        {/* Profile avatar */}
        <div
          className={css({
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'fill.brand',
            color: 'text.inverse',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '14px',
            marginLeft: '8px',
            cursor: 'pointer',
            flexShrink: 0,
          })}
        >
          K
        </div>
      </div>
    </header>
  );
}

// ─── Toast Notifications ──────────────────────────────────────────────────────

function ToastArea() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-end',
        padding: '12px 0 0',
        marginBottom: '8px',
      })}
    >
      {/* Toast 1: success / positive */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: 'border.positive.default',
          backgroundColor: 'surface.positive.subtle',
          minWidth: '340px',
          maxWidth: '420px',
          fontSize: '13px',
        })}
      >
        <CheckCircle2
          size={16}
          className={css({ color: 'icon.positive.default', flexShrink: 0, marginTop: '1px' })}
        />
        <span className={css({ color: 'text.positive.default', flex: 1 })}>
          배포 v2.4.1이 완료되었습니다.
        </span>
        <button
          className={css({
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'icon.positive.muted',
            display: 'flex',
            flexShrink: 0,
          })}
        >
          <XCircle size={14} />
        </button>
      </div>

      {/* Toast 2: critical */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: 'border.critical.default',
          backgroundColor: 'surface.critical.subtle',
          minWidth: '340px',
          maxWidth: '420px',
          fontSize: '13px',
        })}
      >
        <XCircle
          size={16}
          className={css({ color: 'icon.critical.default', flexShrink: 0, marginTop: '1px' })}
        />
        <span className={css({ color: 'text.critical.default', flex: 1 })}>
          DB 연결이 끊어졌습니다. 즉시 확인하세요.
        </span>
        <button
          className={css({
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'icon.critical.muted',
            display: 'flex',
            flexShrink: 0,
          })}
        >
          <XCircle size={14} />
        </button>
      </div>

      {/* Toast 3: info */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: 'border.info.default',
          backgroundColor: 'surface.info.subtle',
          minWidth: '340px',
          maxWidth: '420px',
          fontSize: '13px',
        })}
      >
        <Info
          size={16}
          className={css({ color: 'icon.info.default', flexShrink: 0, marginTop: '1px' })}
        />
        <span className={css({ color: 'text.info.default', flex: 1 })}>
          시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
        </span>
        <button
          className={css({
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'icon.neutral.muted',
            display: 'flex',
            flexShrink: 0,
          })}
        >
          <XCircle size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Stat Cards ───────────────────────────────────────────────────────────────

function StatCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginBottom: '16px',
      })}
    >
      {/* Card 1: 총 사용자 — positive */}
      <div
        className={css({
          backgroundColor: 'surface.neutral.default',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'relative',
        })}
      >
        <TrendingUp
          size={20}
          className={css({ color: 'icon.positive.default', position: 'absolute', top: '16px', right: '16px' })}
        />
        <span className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>총 사용자</span>
        <span className={css({ fontSize: '28px', fontWeight: '700', color: 'text.neutral.default' })}>12,847</span>
        <span
          className={css({
            alignSelf: 'flex-start',
            padding: '2px 10px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: 'surface.positive.subtle',
            color: 'text.positive.default',
            border: '1px solid',
            borderColor: 'border.positive.subtle',
          })}
        >
          +12%
        </span>
      </div>

      {/* Card 2: 결제 실패 — critical */}
      <div
        className={css({
          backgroundColor: 'surface.neutral.default',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'relative',
        })}
      >
        <AlertCircle
          size={20}
          className={css({ color: 'icon.critical.default', position: 'absolute', top: '16px', right: '16px' })}
        />
        <span className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>결제 실패</span>
        <span className={css({ fontSize: '28px', fontWeight: '700', color: 'text.neutral.default' })}>24건</span>
        <span
          className={css({
            alignSelf: 'flex-start',
            padding: '2px 10px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: 'surface.critical.subtle',
            color: 'text.critical.default',
            border: '1px solid',
            borderColor: 'border.critical.subtle',
          })}
        >
          +3건
        </span>
      </div>

      {/* Card 3: 평균 응답시간 — positive */}
      <div
        className={css({
          backgroundColor: 'surface.neutral.default',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'relative',
        })}
      >
        <Zap
          size={20}
          className={css({ color: 'icon.positive.default', position: 'absolute', top: '16px', right: '16px' })}
        />
        <span className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>평균 응답시간</span>
        <span className={css({ fontSize: '28px', fontWeight: '700', color: 'text.neutral.default' })}>142ms</span>
        <span
          className={css({
            alignSelf: 'flex-start',
            padding: '2px 10px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: 'surface.positive.subtle',
            color: 'text.positive.default',
            border: '1px solid',
            borderColor: 'border.positive.subtle',
          })}
        >
          -8%
        </span>
      </div>

      {/* Card 4: 미처리 민원 — warning */}
      <div
        className={css({
          backgroundColor: 'surface.neutral.default',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'relative',
        })}
      >
        <Clock
          size={20}
          className={css({ color: 'icon.warning.default', position: 'absolute', top: '16px', right: '16px' })}
        />
        <span className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>미처리 민원</span>
        <span className={css({ fontSize: '28px', fontWeight: '700', color: 'text.neutral.default' })}>7건</span>
        <span
          className={css({
            alignSelf: 'flex-start',
            padding: '2px 10px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: 'surface.warning.subtle',
            color: 'text.warning.default',
            border: '1px solid',
            borderColor: 'border.warning.subtle',
          })}
        >
          +2건
        </span>
      </div>
    </div>
  );
}

// ─── System Resources ─────────────────────────────────────────────────────────

function SystemResources() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
        marginBottom: '16px',
      })}
    >
      {/* CPU — positive (42%) */}
      <div
        className={css({
          backgroundColor: 'surface.neutral.default',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <span className={css({ fontSize: '13px', color: 'text.neutral.muted', fontWeight: '500' })}>
            CPU 사용량
          </span>
          <span className={css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.default' })}>42%</span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '4px',
            backgroundColor: 'surface.neutral.muted',
            overflow: 'hidden',
          })}
        >
          <div
            className={css({
              width: '42%',
              height: '100%',
              borderRadius: '4px',
              backgroundColor: 'fill.positive',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'text.positive.default', fontWeight: '500' })}>
          여유로운 상태
        </span>
      </div>

      {/* Memory — warning (78%) */}
      <div
        className={css({
          backgroundColor: 'surface.neutral.default',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <span className={css({ fontSize: '13px', color: 'text.neutral.muted', fontWeight: '500' })}>
            메모리 사용량
          </span>
          <span className={css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.default' })}>78%</span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '4px',
            backgroundColor: 'surface.neutral.muted',
            overflow: 'hidden',
          })}
        >
          <div
            className={css({
              width: '78%',
              height: '100%',
              borderRadius: '4px',
              backgroundColor: 'fill.warning',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'text.warning.default', fontWeight: '500' })}>
          주의 필요
        </span>
      </div>

      {/* Disk — critical (91%) */}
      <div
        className={css({
          backgroundColor: 'surface.neutral.default',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <span className={css({ fontSize: '13px', color: 'text.neutral.muted', fontWeight: '500' })}>
            디스크 사용량
          </span>
          <span className={css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.default' })}>91%</span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '4px',
            backgroundColor: 'surface.neutral.muted',
            overflow: 'hidden',
          })}
        >
          <div
            className={css({
              width: '91%',
              height: '100%',
              borderRadius: '4px',
              backgroundColor: 'fill.critical',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'text.critical.default', fontWeight: '500' })}>
          심각한 문제
        </span>
      </div>
    </div>
  );
}

// ─── Event Table ──────────────────────────────────────────────────────────────

function EventTable() {
  return (
    <div
      className={css({
        backgroundColor: 'surface.neutral.default',
        border: '1px solid',
        borderColor: 'border.neutral.default',
        borderRadius: '10px',
        marginBottom: '16px',
        overflow: 'hidden',
      })}
    >
      {/* Tab bar */}
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'border.neutral.subtle',
          padding: '0 20px',
        })}
      >
        <div className={css({ display: 'flex' })}>
          {/* Active tab */}
          <div
            className={css({
              padding: '14px 16px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'text.brand.default',
              borderBottom: '2px solid',
              borderColor: 'border.brand.default',
              cursor: 'pointer',
            })}
          >
            전체 이벤트
          </div>
          {/* Inactive tab 1 */}
          <div
            className={css({
              padding: '14px 16px',
              fontSize: '14px',
              fontWeight: '400',
              color: 'text.neutral.muted',
              opacity: 0.38,
              borderBottom: '2px solid transparent',
              cursor: 'pointer',
              _hover: { opacity: 1 },
            })}
          >
            미처리
          </div>
          {/* Inactive tab 2 */}
          <div
            className={css({
              padding: '14px 16px',
              fontSize: '14px',
              fontWeight: '400',
              color: 'text.neutral.muted',
              opacity: 0.38,
              borderBottom: '2px solid transparent',
              cursor: 'pointer',
              _hover: { opacity: 1 },
            })}
          >
            처리완료
          </div>
        </div>

        <div className={css({ display: 'flex', gap: '8px' })}>
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              backgroundColor: 'surface.transparent',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              borderRadius: '6px',
              fontSize: '13px',
              color: 'text.neutral.default',
              cursor: 'pointer',
              _hover: { backgroundColor: 'surface.neutral.ghost' },
            })}
          >
            <Filter size={14} />
            필터
          </button>
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              backgroundColor: 'surface.transparent',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              borderRadius: '6px',
              fontSize: '13px',
              color: 'text.neutral.default',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            <Download size={14} />
            CSV 내보내기
          </button>
        </div>
      </div>

      {/* Tag filter bar + search */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '12px 20px',
          borderBottom: '1px solid',
          borderColor: 'border.neutral.subtle',
        })}
      >
        <div className={css({ display: 'flex', gap: '6px', flexWrap: 'wrap' })}>
          {/* Selected tag */}
          <span
            className={css({
              padding: '4px 12px',
              borderRadius: '99px',
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: 'fill.brand',
              color: 'text.inverse',
              cursor: 'pointer',
            })}
          >
            전체
          </span>
          {/* Unselected tags */}
          {['로그인', '결제', '보안', '시스템'].map((tag) => (
            <span
              key={tag}
              className={css({
                padding: '4px 12px',
                borderRadius: '99px',
                fontSize: '12px',
                fontWeight: '500',
                backgroundColor: 'surface.neutral.subtle',
                color: 'text.neutral.muted',
                cursor: 'pointer',
                _hover: { backgroundColor: 'surface.neutral.muted' },
              })}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', marginLeft: 'auto' })}>
          {/* Normal search input */}
          <input
            placeholder="이벤트 검색..."
            className={css({
              padding: '7px 12px',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              borderRadius: '6px',
              backgroundColor: 'surface.neutral.subtle',
              color: 'text.neutral.default',
              fontSize: '13px',
              outline: 'none',
              width: '220px',
              _placeholder: { color: 'text.neutral.subtle', opacity: 0.38 },
              _focus: {
                borderColor: 'border.brand.default',
                boxShadow: '0 0 0 2px token(colors.focusRing.default)',
              },
            })}
          />
          {/* Error state input */}
          <input
            defaultValue="2025/99/99"
            className={css({
              padding: '7px 12px',
              border: '1px solid',
              borderColor: 'border.critical.default',
              borderRadius: '6px',
              backgroundColor: 'surface.critical.subtle',
              color: 'text.neutral.default',
              fontSize: '13px',
              outline: 'none',
              width: '220px',
            })}
          />
          <span className={css({ fontSize: '11px', color: 'text.critical.default' })}>
            잘못된 날짜 형식입니다. (예: 2025-06-10)
          </span>
        </div>
      </div>

      {/* Table */}
      <table className={css({ width: '100%', borderCollapse: 'collapse', fontSize: '14px' })}>
        <thead>
          <tr className={css({ backgroundColor: 'surface.neutral.subtle' })}>
            {['사용자', '이벤트', '시간', '상태', '액션'].map((col) => (
              <th
                key={col}
                className={css({
                  padding: '10px 20px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'text.neutral.muted',
                  borderBottom: '1px solid',
                  borderColor: 'border.neutral.subtle',
                })}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Row 1: 홍 — positive (odd) */}
          <tr className={css({ backgroundColor: 'surface.neutral.default' })}>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                <div
                  className={css({
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
                  })}
                >
                  홍
                </div>
                <span className={css({ color: 'text.neutral.default' })}>홍씨</span>
              </div>
            </td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.default' })}>로그인 성공</td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.muted' })}>14:32</td>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'text.positive.default' })}>
                <CheckCircle2 size={14} className={css({ color: 'icon.positive.default' })} />
                정상 처리됨
              </div>
            </td>
            <td className={css({ padding: '12px 20px' })}>
              <button
                className={css({
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'surface.transparent',
                  cursor: 'pointer',
                  color: 'icon.neutral.default',
                  _hover: { backgroundColor: 'surface.neutral.ghost' },
                })}
              >
                <Eye size={15} />
              </button>
            </td>
          </tr>

          {/* Row 2: 김 — critical (even) */}
          <tr className={css({ backgroundColor: 'surface.neutral.ghost' })}>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                <div
                  className={css({
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
                  })}
                >
                  김
                </div>
                <span className={css({ color: 'text.neutral.default' })}>김씨</span>
              </div>
            </td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.default' })}>결제 실패</td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.muted' })}>14:28</td>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'text.critical.default' })}>
                <XCircle size={14} className={css({ color: 'icon.critical.default' })} />
                문제 발생
              </div>
            </td>
            <td className={css({ padding: '12px 20px' })}>
              <button
                className={css({
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'surface.transparent',
                  cursor: 'pointer',
                  color: 'icon.neutral.default',
                  _hover: { backgroundColor: 'surface.neutral.ghost' },
                })}
              >
                <Eye size={15} />
              </button>
            </td>
          </tr>

          {/* Row 3: 이 — warning (odd) */}
          <tr className={css({ backgroundColor: 'surface.neutral.default' })}>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                <div
                  className={css({
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
                  })}
                >
                  이
                </div>
                <span className={css({ color: 'text.neutral.default' })}>이씨</span>
              </div>
            </td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.default' })}>비밀번호 5회 오류</td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.muted' })}>14:21</td>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'text.warning.default' })}>
                <AlertCircle size={14} className={css({ color: 'icon.warning.default' })} />
                주의 필요
              </div>
            </td>
            <td className={css({ padding: '12px 20px' })}>
              <button
                className={css({
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'surface.transparent',
                  cursor: 'pointer',
                  color: 'icon.neutral.default',
                  _hover: { backgroundColor: 'surface.neutral.ghost' },
                })}
              >
                <Eye size={15} />
              </button>
            </td>
          </tr>

          {/* Row 4: 박 — positive (even) */}
          <tr className={css({ backgroundColor: 'surface.neutral.ghost' })}>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                <div
                  className={css({
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
                  })}
                >
                  박
                </div>
                <span className={css({ color: 'text.neutral.default' })}>박씨</span>
              </div>
            </td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.default' })}>회원가입</td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.muted' })}>14:15</td>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'text.positive.default' })}>
                <CheckCircle2 size={14} className={css({ color: 'icon.positive.default' })} />
                정상 처리됨
              </div>
            </td>
            <td className={css({ padding: '12px 20px' })}>
              <button
                className={css({
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'surface.transparent',
                  cursor: 'pointer',
                  color: 'icon.neutral.default',
                  _hover: { backgroundColor: 'surface.neutral.ghost' },
                })}
              >
                <Eye size={15} />
              </button>
            </td>
          </tr>

          {/* Row 5: 시 — warning (odd) */}
          <tr className={css({ backgroundColor: 'surface.neutral.default' })}>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                <div
                  className={css({
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
                  })}
                >
                  시
                </div>
                <span className={css({ color: 'text.neutral.default' })}>시씨</span>
              </div>
            </td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.default' })}>API 응답 지연</td>
            <td className={css({ padding: '12px 20px', color: 'text.neutral.muted' })}>14:09</td>
            <td className={css({ padding: '12px 20px' })}>
              <div className={css({ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'text.warning.default' })}>
                <AlertCircle size={14} className={css({ color: 'icon.warning.default' })} />
                주의 필요
              </div>
            </td>
            <td className={css({ padding: '12px 20px' })}>
              <button
                className={css({
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'surface.transparent',
                  cursor: 'pointer',
                  color: 'icon.neutral.default',
                  _hover: { backgroundColor: 'surface.neutral.ghost' },
                })}
              >
                <Eye size={15} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ─── Toggle Panel ─────────────────────────────────────────────────────────────

function TogglePanel() {
  return (
    <div
      className={css({
        backgroundColor: 'surface.neutral.default',
        border: '1px solid',
        borderColor: 'border.neutral.default',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '16px',
      })}
    >
      <h3
        className={css({
          fontSize: '16px',
          fontWeight: '600',
          color: 'text.neutral.default',
          marginBottom: '16px',
        })}
      >
        알림 수신 설정
      </h3>

      <div className={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
        {/* Toggle 1: 배포 알림 — ON */}
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <span className={css({ fontSize: '14px', color: 'text.neutral.default' })}>배포 알림</span>
          <div
            className={css({
              width: '42px',
              height: '24px',
              borderRadius: '12px',
              backgroundColor: 'fill.brand',
              position: 'relative',
              cursor: 'pointer',
            })}
          >
            <div
              className={css({
                position: 'absolute',
                top: '3px',
                right: '3px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: 'fill.inverse',
              })}
            />
          </div>
        </div>

        {/* Toggle 2: 장애 알림 — ON */}
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <span className={css({ fontSize: '14px', color: 'text.neutral.default' })}>장애 알림</span>
          <div
            className={css({
              width: '42px',
              height: '24px',
              borderRadius: '12px',
              backgroundColor: 'fill.brand',
              position: 'relative',
              cursor: 'pointer',
            })}
          >
            <div
              className={css({
                position: 'absolute',
                top: '3px',
                right: '3px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: 'fill.inverse',
              })}
            />
          </div>
        </div>

        {/* Toggle 3: 보안 알림 — OFF */}
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <span className={css({ fontSize: '14px', color: 'text.neutral.default' })}>보안 알림</span>
          <div
            className={css({
              width: '42px',
              height: '24px',
              borderRadius: '12px',
              backgroundColor: 'surface.neutral.muted',
              position: 'relative',
              cursor: 'pointer',
            })}
          >
            <div
              className={css({
                position: 'absolute',
                top: '3px',
                left: '3px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: 'fill.inverse',
              })}
            />
          </div>
        </div>

        {/* Toggle 4: 마케팅 알림 — OFF + disabled */}
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            opacity: 0.38,
          })}
        >
          <span className={css({ fontSize: '14px', color: 'text.neutral.default' })}>마케팅 알림</span>
          <div
            className={css({
              width: '42px',
              height: '24px',
              borderRadius: '12px',
              backgroundColor: 'surface.neutral.muted',
              position: 'relative',
              cursor: 'not-allowed',
            })}
          >
            <div
              className={css({
                position: 'absolute',
                top: '3px',
                left: '3px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: 'fill.inverse',
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Alert Cards ──────────────────────────────────────────────────────────────

function AlertCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
      })}
    >
      {/* Card 1: 배포 완료 — positive */}
      <div
        className={css({
          backgroundColor: 'surface.positive.subtle',
          border: '1px solid',
          borderColor: 'border.positive.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
          <CheckCircle2 size={22} className={css({ color: 'icon.positive.default' })} />
          <button
            className={css({
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'icon.positive.muted',
            })}
          >
            <XCircle size={16} />
          </button>
        </div>
        <h4 className={css({ fontSize: '15px', fontWeight: '600', color: 'text.positive.default', margin: 0 })}>
          배포 완료
        </h4>
        <p className={css({ fontSize: '13px', color: 'text.positive.default', margin: 0 })}>
          v2.4.1이 성공적으로 배포되었습니다.
        </p>
        <button
          className={css({
            alignSelf: 'flex-start',
            padding: '6px 12px',
            backgroundColor: 'surface.transparent',
            border: '1px solid',
            borderColor: 'border.positive.default',
            borderRadius: '6px',
            fontSize: '13px',
            color: 'text.positive.default',
            cursor: 'pointer',
            _hover: { backgroundColor: 'surface.positive.ghost' },
          })}
        >
          배포 로그 보기
        </button>
      </div>

      {/* Card 2: 연결 실패 — critical */}
      <div
        className={css({
          backgroundColor: 'surface.critical.subtle',
          border: '1px solid',
          borderColor: 'border.critical.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
          <XCircle size={22} className={css({ color: 'icon.critical.default' })} />
          <button
            className={css({
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'icon.critical.muted',
            })}
          >
            <XCircle size={16} />
          </button>
        </div>
        <h4 className={css({ fontSize: '15px', fontWeight: '600', color: 'text.critical.default', margin: 0 })}>
          연결 실패
        </h4>
        <p className={css({ fontSize: '13px', color: 'text.critical.default', margin: 0 })}>
          DB 연결이 실패했습니다.
        </p>
        <div className={css({ display: 'flex', gap: '8px' })}>
          <button
            className={css({
              padding: '6px 12px',
              backgroundColor: 'fill.critical',
              border: 'none',
              borderRadius: '6px',
              fontSize: '13px',
              color: 'text.inverse',
              cursor: 'pointer',
              _hover: { backgroundColor: 'surface.critical.emphasis' },
            })}
          >
            즉시 확인
          </button>
          <button
            className={css({
              padding: '6px 12px',
              backgroundColor: 'surface.transparent',
              border: 'none',
              borderRadius: '6px',
              fontSize: '13px',
              color: 'text.critical.default',
              cursor: 'pointer',
              _hover: { backgroundColor: 'surface.critical.ghost' },
            })}
          >
            무시
          </button>
        </div>
      </div>

      {/* Card 3: 용량 경고 — warning */}
      <div
        className={css({
          backgroundColor: 'surface.warning.subtle',
          border: '1px solid',
          borderColor: 'border.warning.default',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
          <AlertTriangle size={22} className={css({ color: 'icon.warning.default' })} />
          <button
            className={css({
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'icon.warning.muted',
            })}
          >
            <XCircle size={16} />
          </button>
        </div>
        <h4 className={css({ fontSize: '15px', fontWeight: '600', color: 'text.warning.default', margin: 0 })}>
          용량 경고
        </h4>
        <p className={css({ fontSize: '13px', color: 'text.warning.default', margin: 0 })}>
          디스크 사용량이 85%입니다.
        </p>
        <button
          className={css({
            alignSelf: 'flex-start',
            padding: '6px 12px',
            backgroundColor: 'surface.transparent',
            border: '1px solid',
            borderColor: 'border.warning.default',
            borderRadius: '6px',
            fontSize: '13px',
            color: 'text.warning.default',
            cursor: 'pointer',
            _hover: { backgroundColor: 'surface.warning.ghost' },
          })}
        >
          정리 시작
        </button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'surface.neutral.subtle',
      })}
    >
      <Sidebar />

      <div
        className={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        })}
      >
        <HeaderBar />

        <main
          className={css({
            flex: 1,
            overflowY: 'auto',
            padding: '0 24px 24px',
            backgroundColor: 'surface.neutral.subtle',
          })}
        >
          <ToastArea />
          <StatCards />
          <SystemResources />
          <EventTable />
          <TogglePanel />
          <AlertCards />
        </main>
      </div>
    </div>
  );
}
