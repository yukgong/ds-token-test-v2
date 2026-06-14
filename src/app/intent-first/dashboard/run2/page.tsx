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
  return (
    <aside
      className={`dark ${css({
        width: '240px',
        minWidth: '240px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'neutral.canvas.02',
        flexShrink: 0,
      })}`}
    >
      {/* Logo */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '22px 18px 16px',
          borderBottom: '1px solid',
          borderBottomColor: 'neutral.border.low',
        })}
      >
        <LayoutDashboard
          size={22}
          className={css({ color: 'neutral.icon.base' })}
        />
        <span
          className={css({
            fontSize: '17px',
            fontWeight: '700',
            color: 'neutral.text.base',
          })}
        >
          Mildang
        </span>
      </div>

      {/* Navigation */}
      <nav
        className={css({
          flex: 1,
          padding: '10px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        })}
      >
        {/* Active — 대시보드 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor: 'overlay.lighten.hover',
          })}
        >
          <LayoutDashboard
            size={16}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '600',
              color: 'neutral.text.base',
            })}
          >
            대시보드
          </span>
        </div>

        {/* Disabled nav items — opacity: 0.38 */}
        {[
          { icon: <Users size={16} />, label: '사용자 관리' },
          { icon: <CreditCard size={16} />, label: '결제 내역' },
          { icon: <Bell size={16} />, label: '알림 설정' },
          { icon: <ScrollText size={16} />, label: '시스템 로그' },
        ].map((item) => (
          <div
            key={item.label}
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 12px',
              borderRadius: '8px',
              opacity: 0.38,
            })}
          >
            <span className={css({ color: 'neutral.icon.base' })}>
              {item.icon}
            </span>
            <span
              className={css({
                fontSize: '14px',
                color: 'neutral.text.base',
              })}
            >
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div
        className={css({
          padding: '12px 8px 16px',
          borderTop: '1px solid',
          borderTopColor: 'neutral.border.low',
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
          })}
        >
          <LogOut
            size={16}
            className={css({ color: 'critical.icon.base' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'critical.text.base',
            })}
          >
            로그아웃
          </span>
        </div>
      </div>
    </aside>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────

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
        borderBottomColor: 'neutral.border.base',
        flexShrink: 0,
      })}
    >
      {/* Breadcrumb */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '14px',
        })}
      >
        <span
          className={css({
            color: 'neutral.text.base',
            cursor: 'pointer',
            _hover: { color: 'primary.text.base' },
          })}
        >
          홈
        </span>
        <span
          className={css({
            color: 'neutral.text.base',
            opacity: 0.38,
          })}
        >
          /
        </span>
        <span
          className={css({
            color: 'neutral.text.base',
            cursor: 'pointer',
            _hover: { color: 'primary.text.base' },
          })}
        >
          모니터링
        </span>
        <span
          className={css({
            color: 'neutral.text.base',
            opacity: 0.38,
          })}
        >
          /
        </span>
        <span
          className={css({
            color: 'primary.text.base',
            fontWeight: '600',
          })}
        >
          대시보드
        </span>
      </div>

      {/* Right controls */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        })}
      >
        {/* Search icon button + tooltip */}
        <div className={css({ position: 'relative', display: 'inline-flex' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              _hover: { backgroundColor: 'overlay.darken.hover' },
            })}
          >
            <Search
              size={17}
              className={css({ color: 'neutral.icon.base' })}
            />
          </button>
          <span
            className={css({
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'neutral.fill.high',
              color: 'inverse.text.base',
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

        {/* Bell icon button + badge + tooltip */}
        <div className={css({ position: 'relative', display: 'inline-flex' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              _hover: { backgroundColor: 'overlay.darken.hover' },
            })}
          >
            <Bell
              size={17}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                position: 'absolute',
                top: '4px',
                right: '4px',
                minWidth: '15px',
                height: '15px',
                borderRadius: '999px',
                backgroundColor: 'critical.fill.base',
                color: 'inverse.text.base',
                fontSize: '10px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 3px',
              })}
            >
              3
            </span>
          </button>
          <span
            className={css({
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'neutral.fill.high',
              color: 'inverse.text.base',
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

        {/* Settings icon button + tooltip */}
        <div className={css({ position: 'relative', display: 'inline-flex' })}>
          <button
            className={css({
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              _hover: { backgroundColor: 'overlay.darken.hover' },
            })}
          >
            <Settings
              size={17}
              className={css({ color: 'neutral.icon.base' })}
            />
          </button>
          <span
            className={css({
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'neutral.fill.high',
              color: 'inverse.text.base',
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
            backgroundColor: 'neutral.border.base',
            margin: '0 6px',
          })}
        />

        {/* New Deploy — primary filled button */}
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            borderRadius: '7px',
            border: 'none',
            backgroundColor: 'primary.fill.base',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            color: 'inverse.text.base',
            _hover: { backgroundColor: 'primary.surface.high', color: 'primary.text.base' },
          })}
        >
          <Plus
            size={14}
            className={css({ color: 'inverse.icon.base' })}
          />
          새 배포
        </button>

        {/* Avatar */}
        <div
          className={css({
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            backgroundColor: 'primary.fill.base',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '4px',
            flexShrink: 0,
          })}
        >
          <span
            className={css({
              color: 'inverse.text.base',
              fontSize: '14px',
              fontWeight: '700',
            })}
          >
            K
          </span>
        </div>
      </div>
    </header>
  );
}

// ── Toast Area ────────────────────────────────────────────────────────────────

function ToastArea() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
        padding: '12px 24px 0',
      })}
    >
      {/* Success toast */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '11px 14px',
          borderRadius: '8px',
          border: '1px solid',
          backgroundColor: 'positive.surface.base',
          borderColor: 'positive.border.base',
          minWidth: '340px',
          maxWidth: '460px',
        })}
      >
        <CheckCircle2
          size={16}
          className={css({ color: 'positive.icon.base', flexShrink: 0 })}
        />
        <span className={css({ flex: 1, fontSize: '13px', color: 'positive.text.base' })}>
          배포 v2.4.1이 완료되었습니다.
        </span>
        <button
          className={css({ border: 'none', background: 'none', cursor: 'pointer', padding: 0 })}
        >
          <X size={14} className={css({ color: 'positive.icon.base' })} />
        </button>
      </div>

      {/* Critical toast */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '11px 14px',
          borderRadius: '8px',
          border: '1px solid',
          backgroundColor: 'critical.surface.base',
          borderColor: 'critical.border.base',
          minWidth: '340px',
          maxWidth: '460px',
        })}
      >
        <XCircle
          size={16}
          className={css({ color: 'critical.icon.base', flexShrink: 0 })}
        />
        <span className={css({ flex: 1, fontSize: '13px', color: 'critical.text.base' })}>
          DB 연결이 끊어졌습니다. 즉시 확인하세요.
        </span>
        <button
          className={css({ border: 'none', background: 'none', cursor: 'pointer', padding: 0 })}
        >
          <X size={14} className={css({ color: 'critical.icon.base' })} />
        </button>
      </div>

      {/* Info toast */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '11px 14px',
          borderRadius: '8px',
          border: '1px solid',
          backgroundColor: 'info.surface.base',
          borderColor: 'info.border.base',
          minWidth: '340px',
          maxWidth: '460px',
        })}
      >
        <Info
          size={16}
          className={css({ color: 'info.icon.base', flexShrink: 0 })}
        />
        <span className={css({ flex: 1, fontSize: '13px', color: 'info.text.base' })}>
          시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
        </span>
        <button
          className={css({ border: 'none', background: 'none', cursor: 'pointer', padding: 0 })}
        >
          <X size={14} className={css({ color: 'info.icon.base' })} />
        </button>
      </div>
    </div>
  );
}

// ── Stat Cards ────────────────────────────────────────────────────────────────

function StatCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
      })}
    >
      {/* 총 사용자 — positive (좋은 변화) */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '10px',
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
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            총 사용자
          </span>
          <TrendingUp
            size={20}
            className={css({ color: 'positive.icon.base' })}
          />
        </div>
        <div
          className={css({
            fontSize: '26px',
            fontWeight: '700',
            color: 'neutral.text.base',
            marginBottom: '10px',
          })}
        >
          12,847
        </div>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 8px',
            borderRadius: '999px',
            backgroundColor: 'positive.surface.base',
            border: '1px solid',
            borderColor: 'positive.border.base',
            fontSize: '12px',
            color: 'positive.text.base',
          })}
        >
          <TrendingUp size={11} className={css({ color: 'positive.icon.base' })} />
          +12%
        </span>
      </div>

      {/* 결제 실패 — critical (문제 상황) */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '10px',
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
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            결제 실패
          </span>
          <AlertCircle
            size={20}
            className={css({ color: 'critical.icon.base' })}
          />
        </div>
        <div
          className={css({
            fontSize: '26px',
            fontWeight: '700',
            color: 'neutral.text.base',
            marginBottom: '10px',
          })}
        >
          24건
        </div>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 8px',
            borderRadius: '999px',
            backgroundColor: 'critical.surface.base',
            border: '1px solid',
            borderColor: 'critical.border.base',
            fontSize: '12px',
            color: 'critical.text.base',
          })}
        >
          <AlertCircle size={11} className={css({ color: 'critical.icon.base' })} />
          +3건
        </span>
      </div>

      {/* 평균 응답시간 — positive (좋은 변화) */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '10px',
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
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            평균 응답시간
          </span>
          <Zap size={20} className={css({ color: 'positive.icon.base' })} />
        </div>
        <div
          className={css({
            fontSize: '26px',
            fontWeight: '700',
            color: 'neutral.text.base',
            marginBottom: '10px',
          })}
        >
          142ms
        </div>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 8px',
            borderRadius: '999px',
            backgroundColor: 'positive.surface.base',
            border: '1px solid',
            borderColor: 'positive.border.base',
            fontSize: '12px',
            color: 'positive.text.base',
          })}
        >
          <Zap size={11} className={css({ color: 'positive.icon.base' })} />
          -8%
        </span>
      </div>

      {/* 미처리 민원 — warning (주의 필요) */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '10px',
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
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            미처리 민원
          </span>
          <Clock size={20} className={css({ color: 'warning.icon.base' })} />
        </div>
        <div
          className={css({
            fontSize: '26px',
            fontWeight: '700',
            color: 'neutral.text.base',
            marginBottom: '10px',
          })}
        >
          7건
        </div>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 8px',
            borderRadius: '999px',
            backgroundColor: 'warning.surface.base',
            border: '1px solid',
            borderColor: 'warning.border.base',
            fontSize: '12px',
            color: 'warning.text.base',
          })}
        >
          <Clock size={11} className={css({ color: 'warning.icon.base' })} />
          +2건
        </span>
      </div>
    </div>
  );
}

// ── System Resources ──────────────────────────────────────────────────────────

function SystemResources() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
      })}
    >
      {/* CPU — positive (여유로운 상태) */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '10px',
          padding: '18px 20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          })}
        >
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            CPU 사용량
          </span>
          <span
            className={css({ fontSize: '20px', fontWeight: '700', color: 'neutral.text.base' })}
          >
            42%
          </span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '999px',
            backgroundColor: 'neutral.fill.base',
            overflow: 'hidden',
            marginBottom: '8px',
          })}
        >
          <div
            className={css({
              height: '100%',
              width: '42%',
              backgroundColor: 'positive.fill.base',
              borderRadius: '999px',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'positive.text.base' })}>
          여유로운 상태
        </span>
      </div>

      {/* Memory — warning (주의 필요) */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '10px',
          padding: '18px 20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          })}
        >
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            메모리 사용량
          </span>
          <span
            className={css({ fontSize: '20px', fontWeight: '700', color: 'neutral.text.base' })}
          >
            78%
          </span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '999px',
            backgroundColor: 'neutral.fill.base',
            overflow: 'hidden',
            marginBottom: '8px',
          })}
        >
          <div
            className={css({
              height: '100%',
              width: '78%',
              backgroundColor: 'warning.fill.base',
              borderRadius: '999px',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'warning.text.base' })}>
          주의 필요
        </span>
      </div>

      {/* Disk — critical (심각한 문제) */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '10px',
          padding: '18px 20px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          })}
        >
          <span className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            디스크 사용량
          </span>
          <span
            className={css({ fontSize: '20px', fontWeight: '700', color: 'neutral.text.base' })}
          >
            91%
          </span>
        </div>
        <div
          className={css({
            height: '8px',
            borderRadius: '999px',
            backgroundColor: 'neutral.fill.base',
            overflow: 'hidden',
            marginBottom: '8px',
          })}
        >
          <div
            className={css({
              height: '100%',
              width: '91%',
              backgroundColor: 'critical.fill.base',
              borderRadius: '999px',
            })}
          />
        </div>
        <span className={css({ fontSize: '12px', color: 'critical.text.base' })}>
          심각한 문제
        </span>
      </div>
    </div>
  );
}

// ── Events Table ──────────────────────────────────────────────────────────────

const eventRows = [
  { initial: '홍', event: '로그인 성공', time: '14:32', status: '정상 처리됨', intent: 'positive' },
  { initial: '김', event: '결제 실패', time: '14:28', status: '문제 발생', intent: 'critical' },
  { initial: '이', event: '비밀번호 5회 오류', time: '14:21', status: '주의 필요', intent: 'warning' },
  { initial: '박', event: '회원가입', time: '14:15', status: '정상 처리됨', intent: 'positive' },
  { initial: '시', event: 'API 응답 지연', time: '14:09', status: '주의 필요', intent: 'warning' },
] as const;

function EventsTable() {
  return (
    <div
      className={css({
        backgroundColor: 'neutral.canvas.02',
        border: '1px solid',
        borderColor: 'neutral.border.base',
        borderRadius: '10px',
        overflow: 'hidden',
      })}
    >
      {/* Tab bar */}
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          borderBottom: '1px solid',
          borderBottomColor: 'neutral.border.low',
        })}
      >
        <div className={css({ display: 'flex' })}>
          <button
            className={css({
              padding: '13px 16px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'neutral.text.base',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              borderBottom: '2px solid',
              borderBottomColor: 'primary.border.highest',
            })}
          >
            전체 이벤트
          </button>
          <button
            className={css({
              padding: '13px 16px',
              fontSize: '14px',
              color: 'neutral.text.base',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              borderBottom: '2px solid transparent',
              opacity: 0.38,
              _hover: { opacity: 0.7 },
            })}
          >
            미처리
          </button>
          <button
            className={css({
              padding: '13px 16px',
              fontSize: '14px',
              color: 'neutral.text.base',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              borderBottom: '2px solid transparent',
              opacity: 0.38,
              _hover: { opacity: 0.7 },
            })}
          >
            처리완료
          </button>
        </div>

        <div className={css({ display: 'flex', gap: '8px' })}>
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '13px',
              color: 'neutral.text.base',
              cursor: 'pointer',
              _hover: { backgroundColor: 'overlay.darken.hover' },
            })}
          >
            <Filter size={13} className={css({ color: 'neutral.icon.base' })} />
            필터
          </button>
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '13px',
              color: 'neutral.text.base',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            <Download size={13} className={css({ color: 'neutral.icon.base' })} />
            CSV 내보내기
          </button>
        </div>
      </div>

      {/* Tag filter bar + search */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '10px 20px',
          borderBottom: '1px solid',
          borderBottomColor: 'neutral.border.low',
          gap: '16px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
          })}
        >
          {/* Selected tag */}
          <span
            className={css({
              padding: '4px 12px',
              borderRadius: '999px',
              backgroundColor: 'primary.fill.base',
              color: 'inverse.text.base',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
            })}
          >
            전체
          </span>
          {['로그인', '결제', '보안', '시스템'].map((tag) => (
            <span
              key={tag}
              className={css({
                padding: '4px 12px',
                borderRadius: '999px',
                backgroundColor: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                color: 'neutral.text.base',
                fontSize: '13px',
                cursor: 'pointer',
                _hover: { backgroundColor: 'neutral.surface.high' },
              })}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Search inputs */}
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
          <input
            type="text"
            placeholder="이벤트 검색..."
            className={css({
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
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
                outlineOffset: '1px',
              },
            })}
          />
          {/* Error state input */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '3px' })}>
            <input
              type="text"
              defaultValue="2025-99-99"
              className={css({
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'critical.border.highest',
                backgroundColor: 'critical.surface.base',
                color: 'neutral.text.base',
                fontSize: '13px',
                outline: 'none',
              })}
            />
            <span className={css({ fontSize: '11px', color: 'critical.text.base' })}>
              잘못된 날짜 형식입니다. (예: 2025-06-14)
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
        <thead>
          <tr>
            {['사용자', '이벤트', '시간', '상태', '액션'].map((col) => (
              <th
                key={col}
                className={css({
                  padding: '10px 20px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'neutral.text.low',
                  backgroundColor: 'neutral.canvas.03',
                  borderBottom: '1px solid',
                  borderBottomColor: 'neutral.border.low',
                })}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {eventRows.map((row, i) => (
            <tr
              key={`${row.initial}-${i}`}
              className={css({
                backgroundColor: i % 2 === 0 ? 'neutral.canvas.02' : 'neutral.canvas.03',
              })}
            >
              {/* User */}
              <td
                className={css({
                  padding: '11px 20px',
                  borderBottom: '1px solid',
                  borderBottomColor: 'neutral.border.low',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <span
                    className={css({
                      width: '28px',
                      height: '28px',
                      borderRadius: '999px',
                      backgroundColor: 'neutral.surface.high',
                      color: 'neutral.text.base',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: '700',
                      flexShrink: 0,
                    })}
                  >
                    {row.initial}
                  </span>
                  <span className={css({ fontSize: '13px', color: 'neutral.text.base' })}>
                    {row.initial}씨
                  </span>
                </div>
              </td>

              {/* Event */}
              <td
                className={css({
                  padding: '11px 20px',
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  borderBottom: '1px solid',
                  borderBottomColor: 'neutral.border.low',
                })}
              >
                {row.event}
              </td>

              {/* Time */}
              <td
                className={css({
                  padding: '11px 20px',
                  fontSize: '13px',
                  color: 'neutral.text.low',
                  borderBottom: '1px solid',
                  borderBottomColor: 'neutral.border.low',
                })}
              >
                {row.time}
              </td>

              {/* Status */}
              <td
                className={css({
                  padding: '11px 20px',
                  borderBottom: '1px solid',
                  borderBottomColor: 'neutral.border.low',
                })}
              >
                {row.intent === 'positive' && (
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '13px',
                      color: 'positive.text.base',
                    })}
                  >
                    <CheckCircle2
                      size={14}
                      className={css({ color: 'positive.icon.base' })}
                    />
                    {row.status}
                  </span>
                )}
                {row.intent === 'critical' && (
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '13px',
                      color: 'critical.text.base',
                    })}
                  >
                    <XCircle
                      size={14}
                      className={css({ color: 'critical.icon.base' })}
                    />
                    {row.status}
                  </span>
                )}
                {row.intent === 'warning' && (
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '13px',
                      color: 'warning.text.base',
                    })}
                  >
                    <AlertCircle
                      size={14}
                      className={css({ color: 'warning.icon.base' })}
                    />
                    {row.status}
                  </span>
                )}
              </td>

              {/* Action */}
              <td
                className={css({
                  padding: '11px 20px',
                  borderBottom: '1px solid',
                  borderBottomColor: 'neutral.border.low',
                })}
              >
                <button
                  className={css({
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    _hover: { backgroundColor: 'overlay.darken.hover' },
                  })}
                >
                  <Eye size={15} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Notification Toggles ──────────────────────────────────────────────────────

function NotificationToggles() {
  const toggleItems = [
    { label: '배포 알림', on: true, disabled: false },
    { label: '장애 알림', on: true, disabled: false },
    { label: '보안 알림', on: false, disabled: false },
    { label: '마케팅 알림', on: false, disabled: true },
  ];

  return (
    <div
      className={css({
        backgroundColor: 'neutral.canvas.02',
        border: '1px solid',
        borderColor: 'neutral.border.base',
        borderRadius: '10px',
        padding: '20px',
      })}
    >
      <h3
        className={css({
          fontSize: '15px',
          fontWeight: '700',
          color: 'neutral.text.base',
          marginBottom: '16px',
        })}
      >
        알림 수신 설정
      </h3>

      <div className={css({ display: 'flex', flexDirection: 'column', gap: '0' })}>
        {toggleItems.map((item, idx) => (
          <div
            key={item.label}
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '11px 0',
              borderBottom: idx < toggleItems.length - 1 ? '1px solid' : 'none',
              borderBottomColor: 'neutral.border.low',
              opacity: item.disabled ? 0.38 : 1,
            })}
          >
            <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
              {item.label}
            </span>
            {/* Toggle track */}
            <div
              className={css({
                width: '44px',
                height: '24px',
                borderRadius: '999px',
                backgroundColor: item.on ? 'primary.fill.base' : 'neutral.fill.base',
                position: 'relative',
                cursor: item.disabled ? 'default' : 'pointer',
                flexShrink: 0,
              })}
            >
              {/* Toggle handle */}
              <div
                className={css({
                  position: 'absolute',
                  top: '3px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '999px',
                  backgroundColor: 'neutral.canvas.01',
                })}
                style={{ left: item.on ? '23px' : '3px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Bottom Alert Cards ────────────────────────────────────────────────────────

function BottomAlertCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
      })}
    >
      {/* Card 1 — positive */}
      <div
        className={css({
          backgroundColor: 'positive.surface.base',
          border: '1px solid',
          borderColor: 'positive.border.base',
          borderRadius: '10px',
          padding: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
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
            className={css({ color: 'positive.icon.base' })}
          />
          <button
            className={css({ border: 'none', background: 'none', cursor: 'pointer', padding: 0 })}
          >
            <X size={15} className={css({ color: 'positive.icon.base' })} />
          </button>
        </div>
        <p
          className={css({
            fontSize: '14px',
            fontWeight: '700',
            color: 'positive.text.base',
          })}
        >
          배포 완료
        </p>
        <p className={css({ fontSize: '13px', color: 'positive.text.base', lineHeight: '1.5' })}>
          v2.4.1이 성공적으로 배포되었습니다.
        </p>
        <div className={css({ marginTop: '4px' })}>
          <button
            className={css({
              padding: '7px 14px',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: 'positive.border.highest',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '13px',
              fontWeight: '500',
              color: 'positive.text.base',
              cursor: 'pointer',
              _hover: { backgroundColor: 'positive.surface.high' },
            })}
          >
            배포 로그 보기
          </button>
        </div>
      </div>

      {/* Card 2 — critical */}
      <div
        className={css({
          backgroundColor: 'critical.surface.base',
          border: '1px solid',
          borderColor: 'critical.border.base',
          borderRadius: '10px',
          padding: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
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
            className={css({ color: 'critical.icon.base' })}
          />
          <button
            className={css({ border: 'none', background: 'none', cursor: 'pointer', padding: 0 })}
          >
            <X size={15} className={css({ color: 'critical.icon.base' })} />
          </button>
        </div>
        <p
          className={css({
            fontSize: '14px',
            fontWeight: '700',
            color: 'critical.text.base',
          })}
        >
          연결 실패
        </p>
        <p className={css({ fontSize: '13px', color: 'critical.text.base', lineHeight: '1.5' })}>
          DB 연결이 실패했습니다.
        </p>
        <div className={css({ display: 'flex', gap: '8px', marginTop: '4px' })}>
          <button
            className={css({
              padding: '7px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'critical.fill.base',
              fontSize: '13px',
              fontWeight: '600',
              color: 'inverse.text.base',
              cursor: 'pointer',
            })}
          >
            즉시 확인
          </button>
          <button
            className={css({
              padding: '7px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '13px',
              color: 'critical.text.base',
              cursor: 'pointer',
              _hover: { backgroundColor: 'critical.surface.high' },
            })}
          >
            무시
          </button>
        </div>
      </div>

      {/* Card 3 — warning */}
      <div
        className={css({
          backgroundColor: 'warning.surface.base',
          border: '1px solid',
          borderColor: 'warning.border.base',
          borderRadius: '10px',
          padding: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
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
            className={css({ color: 'warning.icon.base' })}
          />
          <button
            className={css({ border: 'none', background: 'none', cursor: 'pointer', padding: 0 })}
          >
            <X size={15} className={css({ color: 'warning.icon.base' })} />
          </button>
        </div>
        <p
          className={css({
            fontSize: '14px',
            fontWeight: '700',
            color: 'warning.text.base',
          })}
        >
          용량 경고
        </p>
        <p className={css({ fontSize: '13px', color: 'warning.text.base', lineHeight: '1.5' })}>
          디스크 사용량이 85%입니다.
        </p>
        <div className={css({ marginTop: '4px' })}>
          <button
            className={css({
              padding: '7px 14px',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: 'warning.border.highest',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '13px',
              fontWeight: '500',
              color: 'warning.text.base',
              cursor: 'pointer',
              _hover: { backgroundColor: 'warning.surface.high' },
            })}
          >
            정리 시작
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page Root ─────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
      })}
    >
      <Sidebar />

      <div
        className={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'neutral.canvas.01',
          overflow: 'hidden',
        })}
      >
        <Header />
        <ToastArea />

        <main
          className={css({
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          })}
        >
          <StatCards />
          <SystemResources />
          <EventsTable />
          <NotificationToggles />
          <BottomAlertCards />
        </main>
      </div>
    </div>
  );
}
