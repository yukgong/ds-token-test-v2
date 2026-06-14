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
  Filter,
  Download,
  Eye,
  CheckCircle2,
  XCircle,
  Info,
  TrendingUp,
  AlertCircle,
  Zap,
  Clock,
  AlertTriangle,
  X,
} from 'lucide-react';

// ─── Sidebar ───────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside
      className={`dark ${css({
        width: '240px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'neutral.canvas.01',
        borderRight: '1px solid',
        borderColor: 'neutral.border.subtle',
        flexShrink: 0,
      })}`}
    >
      {/* Logo */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '20px 16px',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.subtle',
        })}
      >
        <div
          className={css({
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: 'primary.fill.default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <LayoutDashboard
            size={16}
            className={css({ color: 'inverse.icon.default' })}
          />
        </div>
        <span
          className={css({
            fontSize: '16px',
            fontWeight: '700',
            color: 'neutral.text.default',
          })}
        >
          Mildang
        </span>
      </div>

      {/* Nav */}
      <nav
        className={css({
          flex: 1,
          padding: '12px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        })}
      >
        {/* Active: 대시보드 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            backgroundColor: 'overlay.lighten.hover',
            cursor: 'pointer',
          })}
        >
          <LayoutDashboard
            size={18}
            className={css({ color: 'neutral.icon.default' })}
          />
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '600',
              color: 'neutral.text.default',
            })}
          >
            대시보드
          </span>
        </div>

        {/* 사용자 관리 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <Users
            size={18}
            className={css({ color: 'neutral.icon.default' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            사용자 관리
          </span>
        </div>

        {/* 결제 내역 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <CreditCard
            size={18}
            className={css({ color: 'neutral.icon.default' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            결제 내역
          </span>
        </div>

        {/* 알림 설정 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <Bell
            size={18}
            className={css({ color: 'neutral.icon.default' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            알림 설정
          </span>
        </div>

        {/* 시스템 로그 — 비활성 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            cursor: 'not-allowed',
            opacity: 0.38,
          })}
        >
          <ScrollText
            size={18}
            className={css({ color: 'neutral.icon.default' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            시스템 로그
          </span>
        </div>
      </nav>

      {/* 로그아웃 */}
      <div
        className={css({
          padding: '12px 8px',
          borderTop: '1px solid',
          borderColor: 'neutral.border.subtle',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <LogOut
            size={18}
            className={css({ color: 'critical.icon.default' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'critical.text.default',
            })}
          >
            로그아웃
          </span>
        </div>
      </div>
    </aside>
  );
}

// ─── Header ────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        height: '56px',
        backgroundColor: 'neutral.canvas.02',
        borderBottom: '1px solid',
        borderColor: 'neutral.border.default',
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
            color: 'neutral.text.subtle',
            cursor: 'pointer',
            _hover: { color: 'primary.text.default' },
          })}
        >
          홈
        </span>
        <span
          className={css({
            color: 'neutral.text.subtle',
            opacity: 0.38,
          })}
        >
          /
        </span>
        <span
          className={css({
            color: 'neutral.text.subtle',
            cursor: 'pointer',
            _hover: { color: 'primary.text.default' },
          })}
        >
          모니터링
        </span>
        <span
          className={css({
            color: 'neutral.text.subtle',
            opacity: 0.38,
          })}
        >
          /
        </span>
        <span
          className={css({
            color: 'neutral.text.default',
            fontWeight: '600',
          })}
        >
          대시보드
        </span>
      </nav>

      {/* Right controls */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        })}
      >
        {/* Search icon button with tooltip */}
        <div className={css({ position: 'relative', display: 'inline-flex' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              _hover: { backgroundColor: 'neutral.surface.strongest' },
            })}
          >
            <Search
              size={18}
              className={css({ color: 'neutral.icon.default' })}
            />
          </button>
          <span
            className={css({
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '4px',
              backgroundColor: 'neutral.fill.strongest',
              color: 'inverse.text.default',
              fontSize: '12px',
              padding: '4px 8px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 10,
            })}
          >
            검색
          </span>
        </div>

        {/* Bell icon button with badge */}
        <div className={css({ position: 'relative', display: 'inline-flex' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              _hover: { backgroundColor: 'neutral.surface.strongest' },
            })}
          >
            <Bell
              size={18}
              className={css({ color: 'neutral.icon.default' })}
            />
            <span
              className={css({
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '16px',
                height: '16px',
                borderRadius: '9999px',
                backgroundColor: 'critical.fill.default',
                color: 'inverse.text.default',
                fontSize: '10px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              })}
            >
              3
            </span>
          </button>
          <span
            className={css({
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '4px',
              backgroundColor: 'neutral.fill.strongest',
              color: 'inverse.text.default',
              fontSize: '12px',
              padding: '4px 8px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 10,
            })}
          >
            알림
          </span>
        </div>

        {/* Settings icon button */}
        <div className={css({ position: 'relative', display: 'inline-flex' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              _hover: { backgroundColor: 'neutral.surface.strongest' },
            })}
          >
            <Settings
              size={18}
              className={css({ color: 'neutral.icon.default' })}
            />
          </button>
          <span
            className={css({
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '4px',
              backgroundColor: 'neutral.fill.strongest',
              color: 'inverse.text.default',
              fontSize: '12px',
              padding: '4px 8px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 10,
            })}
          >
            설정
          </span>
        </div>

        {/* Vertical divider */}
        <div
          className={css({
            width: '1px',
            height: '24px',
            backgroundColor: 'neutral.border.default',
            marginX: '4px',
          })}
        />

        {/* New deploy button */}
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'primary.fill.default',
            color: 'inverse.text.default',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            _hover: { backgroundColor: 'primary.surface.strongest' },
          })}
        >
          <Plus
            size={16}
            className={css({ color: 'inverse.icon.default' })}
          />
          새 배포
        </button>

        {/* Profile avatar */}
        <div
          className={css({
            width: '36px',
            height: '36px',
            borderRadius: '9999px',
            backgroundColor: 'primary.fill.default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          })}
        >
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '700',
              color: 'inverse.text.default',
            })}
          >
            K
          </span>
        </div>
      </div>
    </header>
  );
}

// ─── Toast notifications ───────────────────────────────────────────────────

function ToastArea() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
        padding: '12px 24px',
      })}
    >
      {/* Toast 1: positive */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: '8px',
          backgroundColor: 'positive.surface.default',
          border: '1px solid',
          borderColor: 'positive.border.default',
          minWidth: '360px',
          maxWidth: '480px',
        })}
      >
        <CheckCircle2
          size={18}
          className={css({ color: 'positive.icon.default', flexShrink: 0, marginTop: '1px' })}
        />
        <span
          className={css({
            flex: 1,
            fontSize: '14px',
            color: 'positive.text.default',
          })}
        >
          배포 v2.4.1이 완료되었습니다.
        </span>
        <button
          className={css({
            border: 'none',
            backgroundColor: 'neutral.surface.transparent',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
          })}
        >
          <X size={16} className={css({ color: 'positive.icon.default' })} />
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
          backgroundColor: 'critical.surface.default',
          border: '1px solid',
          borderColor: 'critical.border.default',
          minWidth: '360px',
          maxWidth: '480px',
        })}
      >
        <XCircle
          size={18}
          className={css({ color: 'critical.icon.default', flexShrink: 0, marginTop: '1px' })}
        />
        <span
          className={css({
            flex: 1,
            fontSize: '14px',
            color: 'critical.text.default',
          })}
        >
          DB 연결이 끊어졌습니다. 즉시 확인하세요.
        </span>
        <button
          className={css({
            border: 'none',
            backgroundColor: 'neutral.surface.transparent',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
          })}
        >
          <X size={16} className={css({ color: 'critical.icon.default' })} />
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
          backgroundColor: 'info.surface.default',
          border: '1px solid',
          borderColor: 'info.border.default',
          minWidth: '360px',
          maxWidth: '480px',
        })}
      >
        <Info
          size={18}
          className={css({ color: 'info.icon.default', flexShrink: 0, marginTop: '1px' })}
        />
        <span
          className={css({
            flex: 1,
            fontSize: '14px',
            color: 'info.text.default',
          })}
        >
          시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
        </span>
        <button
          className={css({
            border: 'none',
            backgroundColor: 'neutral.surface.transparent',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
          })}
        >
          <X size={16} className={css({ color: 'info.icon.default' })} />
        </button>
      </div>
    </div>
  );
}

// ─── Stat Cards ────────────────────────────────────────────────────────────

function StatCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        padding: '0 24px',
      })}
    >
      {/* Card 1: 총 사용자 — positive */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px',
          })}
        >
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            총 사용자
          </span>
          <TrendingUp
            size={20}
            className={css({ color: 'positive.icon.default' })}
          />
        </div>
        <div
          className={css({
            fontSize: '28px',
            fontWeight: '700',
            color: 'neutral.text.default',
            marginBottom: '8px',
          })}
        >
          12,847
        </div>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'positive.surface.default',
            border: '1px solid',
            borderColor: 'positive.border.default',
            fontSize: '12px',
            color: 'positive.text.default',
          })}
        >
          +12%
        </span>
      </div>

      {/* Card 2: 결제 실패 — critical */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px',
          })}
        >
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            결제 실패
          </span>
          <AlertCircle
            size={20}
            className={css({ color: 'critical.icon.default' })}
          />
        </div>
        <div
          className={css({
            fontSize: '28px',
            fontWeight: '700',
            color: 'neutral.text.default',
            marginBottom: '8px',
          })}
        >
          24건
        </div>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'critical.surface.default',
            border: '1px solid',
            borderColor: 'critical.border.default',
            fontSize: '12px',
            color: 'critical.text.default',
          })}
        >
          +3건
        </span>
      </div>

      {/* Card 3: 평균 응답시간 — positive */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px',
          })}
        >
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            평균 응답시간
          </span>
          <Zap
            size={20}
            className={css({ color: 'positive.icon.default' })}
          />
        </div>
        <div
          className={css({
            fontSize: '28px',
            fontWeight: '700',
            color: 'neutral.text.default',
            marginBottom: '8px',
          })}
        >
          142ms
        </div>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'positive.surface.default',
            border: '1px solid',
            borderColor: 'positive.border.default',
            fontSize: '12px',
            color: 'positive.text.default',
          })}
        >
          -8%
        </span>
      </div>

      {/* Card 4: 미처리 민원 — warning */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px',
          })}
        >
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            미처리 민원
          </span>
          <Clock
            size={20}
            className={css({ color: 'warning.icon.default' })}
          />
        </div>
        <div
          className={css({
            fontSize: '28px',
            fontWeight: '700',
            color: 'neutral.text.default',
            marginBottom: '8px',
          })}
        >
          7건
        </div>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'warning.surface.default',
            border: '1px solid',
            borderColor: 'warning.border.default',
            fontSize: '12px',
            color: 'warning.text.default',
          })}
        >
          +2건
        </span>
      </div>
    </div>
  );
}

// ─── System Resources ──────────────────────────────────────────────────────

function SystemResources() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
        padding: '0 24px',
      })}
    >
      {/* CPU 42% — positive */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
          })}
        >
          <span
            className={css({ fontSize: '14px', color: 'neutral.text.subtle' })}
          >
            CPU 사용량
          </span>
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '700',
              color: 'positive.text.default',
            })}
          >
            42%
          </span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '9999px',
            backgroundColor: 'neutral.fill.default',
            overflow: 'hidden',
            marginBottom: '8px',
          })}
        >
          <div
            className={css({
              height: '100%',
              width: '42%',
              borderRadius: '9999px',
              backgroundColor: 'positive.fill.default',
            })}
          />
        </div>
        <span
          className={css({ fontSize: '12px', color: 'positive.text.default' })}
        >
          여유로운 상태
        </span>
      </div>

      {/* Memory 78% — warning */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
          })}
        >
          <span
            className={css({ fontSize: '14px', color: 'neutral.text.subtle' })}
          >
            메모리 사용량
          </span>
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '700',
              color: 'warning.text.default',
            })}
          >
            78%
          </span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '9999px',
            backgroundColor: 'neutral.fill.default',
            overflow: 'hidden',
            marginBottom: '8px',
          })}
        >
          <div
            className={css({
              height: '100%',
              width: '78%',
              borderRadius: '9999px',
              backgroundColor: 'warning.fill.default',
            })}
          />
        </div>
        <span
          className={css({ fontSize: '12px', color: 'warning.text.default' })}
        >
          주의 필요
        </span>
      </div>

      {/* Disk 91% — critical */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
          })}
        >
          <span
            className={css({ fontSize: '14px', color: 'neutral.text.subtle' })}
          >
            디스크 사용량
          </span>
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '700',
              color: 'critical.text.default',
            })}
          >
            91%
          </span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '9999px',
            backgroundColor: 'neutral.fill.default',
            overflow: 'hidden',
            marginBottom: '8px',
          })}
        >
          <div
            className={css({
              height: '100%',
              width: '91%',
              borderRadius: '9999px',
              backgroundColor: 'critical.fill.default',
            })}
          />
        </div>
        <span
          className={css({ fontSize: '12px', color: 'critical.text.default' })}
        >
          심각한 문제
        </span>
      </div>
    </div>
  );
}

// ─── Events Table ──────────────────────────────────────────────────────────

function EventsTable() {
  const rows = [
    { initials: '홍', event: '로그인 성공', time: '14:32', status: '정상 처리됨', intent: 'positive' as const },
    { initials: '김', event: '결제 실패', time: '14:28', status: '문제 발생', intent: 'critical' as const },
    { initials: '이', event: '비밀번호 5회 오류', time: '14:21', status: '주의 필요', intent: 'warning' as const },
    { initials: '박', event: '회원가입', time: '14:15', status: '정상 처리됨', intent: 'positive' as const },
    { initials: '시', event: 'API 응답 지연', time: '14:09', status: '주의 필요', intent: 'warning' as const },
  ];

  type Intent = 'positive' | 'critical' | 'warning';

  const intentTextToken: Record<Intent, string> = {
    positive: 'positive.text.default',
    critical: 'critical.text.default',
    warning: 'warning.text.default',
  };
  const intentIconToken: Record<Intent, string> = {
    positive: 'positive.icon.default',
    critical: 'critical.icon.default',
    warning: 'warning.icon.default',
  };

  return (
    <div
      className={css({
        margin: '0 24px',
        backgroundColor: 'neutral.canvas.02',
        border: '1px solid',
        borderColor: 'neutral.border.default',
        borderRadius: '12px',
        overflow: 'hidden',
      })}
    >
      {/* Tabs + buttons */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.subtle',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '0' })}>
          {/* Active tab */}
          <div
            className={css({
              padding: '14px 16px',
              borderBottom: '2px solid',
              borderColor: 'primary.border.emphasis',
              cursor: 'pointer',
            })}
          >
            <span
              className={css({
                fontSize: '14px',
                fontWeight: '600',
                color: 'primary.text.default',
              })}
            >
              전체 이벤트
            </span>
          </div>
          {/* Inactive tabs */}
          <div
            className={css({
              padding: '14px 16px',
              cursor: 'pointer',
              opacity: 0.38,
              borderBottom: '2px solid transparent',
            })}
          >
            <span
              className={css({ fontSize: '14px', color: 'neutral.text.subtle' })}
            >
              미처리
            </span>
          </div>
          <div
            className={css({
              padding: '14px 16px',
              cursor: 'pointer',
              opacity: 0.38,
              borderBottom: '2px solid transparent',
            })}
          >
            <span
              className={css({ fontSize: '14px', color: 'neutral.text.subtle' })}
            >
              처리완료
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className={css({ display: 'flex', gap: '8px' })}>
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '13px',
              color: 'neutral.text.default',
              cursor: 'pointer',
              _hover: { backgroundColor: 'neutral.surface.strongest' },
            })}
          >
            <Filter
              size={14}
              className={css({ color: 'neutral.icon.default' })}
            />
            필터
          </button>
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '13px',
              color: 'neutral.text.default',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            <Download
              size={14}
              className={css({ color: 'neutral.icon.default' })}
            />
            CSV 내보내기
          </button>
        </div>
      </div>

      {/* Tag filter + search */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.subtle',
          gap: '12px',
        })}
      >
        <div className={css({ display: 'flex', gap: '6px', flexWrap: 'wrap' })}>
          {/* 전체 — selected */}
          <span
            className={css({
              padding: '4px 12px',
              borderRadius: '9999px',
              backgroundColor: 'primary.fill.default',
              color: 'inverse.text.default',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
            })}
          >
            전체
          </span>
          {(['로그인', '결제', '보안', '시스템'] as const).map((tag) => (
            <span
              key={tag}
              className={css({
                padding: '4px 12px',
                borderRadius: '9999px',
                backgroundColor: 'neutral.surface.default',
                color: 'neutral.text.subtle',
                fontSize: '13px',
                cursor: 'pointer',
                _hover: { backgroundColor: 'neutral.surface.strongest' },
              })}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Search inputs */}
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
          {/* Normal focused state */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 12px',
              borderRadius: '8px',
              border: '2px solid',
              borderColor: 'focus.border',
              backgroundColor: 'neutral.surface.default',
              minWidth: '200px',
            })}
          >
            <Search
              size={14}
              className={css({ color: 'neutral.icon.default' })}
            />
            <span
              className={css({
                fontSize: '13px',
                color: 'neutral.text.muted',
                opacity: 0.38,
              })}
            >
              이벤트 검색...
            </span>
          </div>
          {/* Error state */}
          <div>
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 12px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'critical.border.emphasis',
                backgroundColor: 'critical.surface.default',
                minWidth: '200px',
              })}
            >
              <Search
                size={14}
                className={css({ color: 'critical.icon.default' })}
              />
              <span
                className={css({ fontSize: '13px', color: 'critical.text.default' })}
              >
                2025/99/99
              </span>
            </div>
            <p
              className={css({
                marginTop: '4px',
                fontSize: '12px',
                color: 'critical.text.default',
              })}
            >
              잘못된 날짜 형식입니다.
            </p>
          </div>
        </div>
      </div>

      {/* Table header */}
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1fr 1.5fr 60px',
          padding: '10px 20px',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.subtle',
          backgroundColor: 'neutral.canvas.03',
        })}
      >
        {['사용자', '이벤트', '시간', '상태', '액션'].map((h) => (
          <span
            key={h}
            className={css({
              fontSize: '12px',
              fontWeight: '600',
              color: 'neutral.text.subtle',
            })}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className={css({
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 1fr 1.5fr 60px',
            padding: '12px 20px',
            alignItems: 'center',
            backgroundColor: i % 2 === 0 ? 'neutral.canvas.02' : 'neutral.canvas.03',
            borderBottom: '1px solid',
            borderColor: 'neutral.border.subtle',
          })}
        >
          {/* Avatar + name */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
            <div
              className={css({
                width: '32px',
                height: '32px',
                borderRadius: '9999px',
                backgroundColor: 'neutral.surface.strongest',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              })}
            >
              <span
                className={css({
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'neutral.text.default',
                })}
              >
                {row.initials}
              </span>
            </div>
            <span
              className={css({ fontSize: '14px', color: 'neutral.text.default' })}
            >
              {row.initials}씨
            </span>
          </div>

          {/* Event */}
          <span className={css({ fontSize: '14px', color: 'neutral.text.default' })}>
            {row.event}
          </span>

          {/* Time */}
          <span className={css({ fontSize: '13px', color: 'neutral.text.subtle' })}>
            {row.time}
          </span>

          {/* Status */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
            {row.intent === 'positive' && (
              <CheckCircle2
                size={15}
                className={css({ color: intentIconToken[row.intent] as 'positive.icon.default' })}
              />
            )}
            {row.intent === 'critical' && (
              <XCircle
                size={15}
                className={css({ color: intentIconToken[row.intent] as 'critical.icon.default' })}
              />
            )}
            {row.intent === 'warning' && (
              <AlertTriangle
                size={15}
                className={css({ color: intentIconToken[row.intent] as 'warning.icon.default' })}
              />
            )}
            <span
              className={css({ fontSize: '13px', color: intentTextToken[row.intent] as 'positive.text.default' })}
            >
              {row.status}
            </span>
          </div>

          {/* Action */}
          <button
            className={css({
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              _hover: { backgroundColor: 'neutral.surface.strongest' },
            })}
          >
            <Eye
              size={16}
              className={css({ color: 'neutral.icon.default' })}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

// ─── Toggle Panel ──────────────────────────────────────────────────────────

function TogglePanel() {
  const toggles = [
    { label: '배포 알림', on: true, disabled: false },
    { label: '장애 알림', on: true, disabled: false },
    { label: '보안 알림', on: false, disabled: false },
    { label: '마케팅 알림', on: false, disabled: true },
  ];

  return (
    <div
      className={css({
        margin: '0 24px',
        backgroundColor: 'neutral.canvas.02',
        border: '1px solid',
        borderColor: 'neutral.border.default',
        borderRadius: '12px',
        padding: '20px',
      })}
    >
      <h3
        className={css({
          fontSize: '16px',
          fontWeight: '600',
          color: 'neutral.text.default',
          marginBottom: '16px',
        })}
      >
        알림 수신 설정
      </h3>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        })}
      >
        {toggles.map((t) => (
          <div
            key={t.label}
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              opacity: t.disabled ? 0.38 : 1,
            })}
          >
            <span
              className={css({ fontSize: '14px', color: 'neutral.text.default' })}
            >
              {t.label}
            </span>
            {/* Toggle switch */}
            <div
              className={css({
                width: '44px',
                height: '24px',
                borderRadius: '9999px',
                backgroundColor: t.on ? 'primary.fill.default' : 'neutral.fill.default',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
                cursor: t.disabled ? 'not-allowed' : 'pointer',
                justifyContent: t.on ? 'flex-end' : 'flex-start',
              })}
            >
              <div
                className={css({
                  width: '20px',
                  height: '20px',
                  borderRadius: '9999px',
                  backgroundColor: 'neutral.canvas.01',
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Bottom Notification Cards ─────────────────────────────────────────────

function BottomCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
        padding: '0 24px',
      })}
    >
      {/* Card 1: positive */}
      <div
        className={css({
          backgroundColor: 'positive.surface.default',
          border: '1px solid',
          borderColor: 'positive.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          })}
        >
          <CheckCircle2
            size={20}
            className={css({ color: 'positive.icon.default' })}
          />
          <button
            className={css({
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
            })}
          >
            <X size={16} className={css({ color: 'positive.icon.default' })} />
          </button>
        </div>
        <h4
          className={css({
            fontSize: '14px',
            fontWeight: '600',
            color: 'positive.text.default',
          })}
        >
          배포 완료
        </h4>
        <p
          className={css({ fontSize: '13px', color: 'positive.text.default' })}
        >
          v2.4.1이 성공적으로 배포되었습니다.
        </p>
        <button
          className={css({
            marginTop: '4px',
            padding: '7px 14px',
            borderRadius: '8px',
            border: '1px solid',
            borderColor: 'positive.border.emphasis',
            backgroundColor: 'neutral.surface.transparent',
            fontSize: '13px',
            fontWeight: '600',
            color: 'positive.text.default',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            _hover: { backgroundColor: 'positive.surface.strongest' },
          })}
        >
          배포 로그 보기
        </button>
      </div>

      {/* Card 2: critical */}
      <div
        className={css({
          backgroundColor: 'critical.surface.default',
          border: '1px solid',
          borderColor: 'critical.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          })}
        >
          <XCircle
            size={20}
            className={css({ color: 'critical.icon.default' })}
          />
          <button
            className={css({
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
            })}
          >
            <X size={16} className={css({ color: 'critical.icon.default' })} />
          </button>
        </div>
        <h4
          className={css({
            fontSize: '14px',
            fontWeight: '600',
            color: 'critical.text.default',
          })}
        >
          연결 실패
        </h4>
        <p
          className={css({ fontSize: '13px', color: 'critical.text.default' })}
        >
          DB 연결이 실패했습니다.
        </p>
        <div
          className={css({
            display: 'flex',
            gap: '8px',
            marginTop: '4px',
          })}
        >
          <button
            className={css({
              padding: '7px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'critical.fill.default',
              fontSize: '13px',
              fontWeight: '600',
              color: 'inverse.text.default',
              cursor: 'pointer',
              _hover: { backgroundColor: 'critical.surface.strongest' },
            })}
          >
            즉시 확인
          </button>
          <button
            className={css({
              padding: '7px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '13px',
              color: 'critical.text.default',
              cursor: 'pointer',
              _hover: { backgroundColor: 'critical.surface.strongest' },
            })}
          >
            무시
          </button>
        </div>
      </div>

      {/* Card 3: warning */}
      <div
        className={css({
          backgroundColor: 'warning.surface.default',
          border: '1px solid',
          borderColor: 'warning.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          })}
        >
          <AlertTriangle
            size={20}
            className={css({ color: 'warning.icon.default' })}
          />
          <button
            className={css({
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
            })}
          >
            <X size={16} className={css({ color: 'warning.icon.default' })} />
          </button>
        </div>
        <h4
          className={css({
            fontSize: '14px',
            fontWeight: '600',
            color: 'warning.text.default',
          })}
        >
          용량 경고
        </h4>
        <p
          className={css({ fontSize: '13px', color: 'warning.text.default' })}
        >
          디스크 사용량이 85%입니다.
        </p>
        <button
          className={css({
            marginTop: '4px',
            padding: '7px 14px',
            borderRadius: '8px',
            border: '1px solid',
            borderColor: 'warning.border.emphasis',
            backgroundColor: 'neutral.surface.transparent',
            fontSize: '13px',
            fontWeight: '600',
            color: 'warning.text.default',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            _hover: { backgroundColor: 'warning.surface.strongest' },
          })}
        >
          정리 시작
        </button>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div
      className={css({
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'neutral.canvas.01',
      })}
    >
      <Sidebar />

      {/* Main content */}
      <div
        className={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          backgroundColor: 'neutral.canvas.01',
        })}
      >
        <Header />
        <ToastArea />

        <main
          className={css({
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '0 0 32px',
          })}
        >
          <StatCards />
          <SystemResources />
          <EventsTable />
          <TogglePanel />
          <BottomCards />
        </main>
      </div>
    </div>
  );
}
