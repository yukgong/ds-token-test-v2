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

// ────────────────────────────────────────────────
// Sidebar
// ────────────────────────────────────────────────
function Sidebar() {
  return (
    <aside
      className={`dark ${css({
        width: '240px',
        minWidth: '240px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'neutral.canvas.01',
        borderRight: '1px solid',
        borderColor: 'neutral.border.subtle',
        position: 'fixed',
        top: 0,
        left: 0,
      })}`}
    >
      {/* Logo */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '20px 16px 16px',
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
            size={18}
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
          display: 'flex',
          flexDirection: 'column',
          padding: '12px 8px',
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
              color: 'neutral.text.default',
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
              color: 'neutral.text.default',
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
              color: 'neutral.text.default',
            })}
          >
            알림 설정
          </span>
        </div>

        {/* 시스템 로그 (비활성) */}
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
              color: 'neutral.text.default',
            })}
          >
            시스템 로그
          </span>
        </div>
      </nav>

      {/* Logout */}
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

// ────────────────────────────────────────────────
// Tooltip (static, shown via group-hover pattern)
// ────────────────────────────────────────────────
function Tooltip({ label }: { label: string }) {
  return (
    <div
      className={css({
        position: 'absolute',
        bottom: '-36px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'neutral.fill.strongest',
        color: 'inverse.text.default',
        fontSize: '12px',
        padding: '4px 8px',
        borderRadius: '6px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 10,
        display: 'none',
      })}
    >
      {label}
    </div>
  );
}

// ────────────────────────────────────────────────
// Header Bar
// ────────────────────────────────────────────────
function HeaderBar() {
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
            color: 'primary.text.default',
            cursor: 'pointer',
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
            color: 'primary.text.default',
            cursor: 'pointer',
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

      {/* Right side */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        })}
      >
        {/* Search icon button */}
        <div
          className={css({
            position: 'relative',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor: 'neutral.surface.transparent',
          })}
        >
          <Search
            size={18}
            className={css({ color: 'neutral.icon.default' })}
          />
          <div
            className={css({
              position: 'absolute',
              bottom: '-32px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'neutral.fill.strongest',
              color: 'inverse.text.default',
              fontSize: '12px',
              padding: '4px 8px',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
              zIndex: 10,
            })}
          >
            검색
          </div>
        </div>

        {/* Bell icon button + badge */}
        <div
          className={css({
            position: 'relative',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor: 'neutral.surface.transparent',
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
              borderRadius: '50%',
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
        </div>

        {/* Settings icon button */}
        <div
          className={css({
            position: 'relative',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor: 'neutral.surface.transparent',
          })}
        >
          <Settings
            size={18}
            className={css({ color: 'neutral.icon.default' })}
          />
        </div>

        {/* Divider */}
        <div
          className={css({
            width: '1px',
            height: '24px',
            backgroundColor: 'neutral.border.default',
            marginLeft: '4px',
            marginRight: '4px',
          })}
        />

        {/* "새 배포" filled button */}
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            borderRadius: '8px',
            backgroundColor: 'primary.fill.default',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            color: 'inverse.text.default',
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
            borderRadius: '50%',
            backgroundColor: 'primary.surface.default',
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
              color: 'primary.text.default',
            })}
          >
            K
          </span>
        </div>
      </div>
    </header>
  );
}

// ────────────────────────────────────────────────
// Toast Notifications
// ────────────────────────────────────────────────
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
      {/* Toast 1: 성공 */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: '10px',
          backgroundColor: 'positive.surface.default',
          border: '1px solid',
          borderColor: 'positive.border.default',
          minWidth: '340px',
        })}
      >
        <CheckCircle2
          size={18}
          className={css({ color: 'positive.icon.default', flexShrink: 0 })}
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
        <X
          size={16}
          className={css({ color: 'positive.icon.default', cursor: 'pointer', flexShrink: 0 })}
        />
      </div>

      {/* Toast 2: 심각 */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: '10px',
          backgroundColor: 'critical.surface.default',
          border: '1px solid',
          borderColor: 'critical.border.default',
          minWidth: '340px',
        })}
      >
        <XCircle
          size={18}
          className={css({ color: 'critical.icon.default', flexShrink: 0 })}
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
        <X
          size={16}
          className={css({ color: 'critical.icon.default', cursor: 'pointer', flexShrink: 0 })}
        />
      </div>

      {/* Toast 3: 정보 */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: '10px',
          backgroundColor: 'info.surface.default',
          border: '1px solid',
          borderColor: 'info.border.default',
          minWidth: '340px',
        })}
      >
        <Info
          size={18}
          className={css({ color: 'info.icon.default', flexShrink: 0 })}
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
        <X
          size={16}
          className={css({ color: 'info.icon.default', cursor: 'pointer', flexShrink: 0 })}
        />
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Stat Cards
// ────────────────────────────────────────────────
function StatCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        padding: '20px 24px 0',
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
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          })}
        >
          <div>
            <p
              className={css({
                fontSize: '13px',
                color: 'neutral.text.subtle',
                marginBottom: '4px',
              })}
            >
              총 사용자
            </p>
            <p
              className={css({
                fontSize: '28px',
                fontWeight: '700',
                color: 'neutral.text.default',
              })}
            >
              12,847
            </p>
          </div>
          <TrendingUp
            size={24}
            className={css({ color: 'positive.icon.default' })}
          />
        </div>
        <div
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            padding: '3px 8px',
            borderRadius: '20px',
            backgroundColor: 'positive.surface.default',
            border: '1px solid',
            borderColor: 'positive.border.default',
            alignSelf: 'flex-start',
          })}
        >
          <span
            className={css({
              fontSize: '12px',
              fontWeight: '600',
              color: 'positive.text.default',
            })}
          >
            +12%
          </span>
        </div>
      </div>

      {/* Card 2: 결제 실패 — critical */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          })}
        >
          <div>
            <p
              className={css({
                fontSize: '13px',
                color: 'neutral.text.subtle',
                marginBottom: '4px',
              })}
            >
              결제 실패
            </p>
            <p
              className={css({
                fontSize: '28px',
                fontWeight: '700',
                color: 'neutral.text.default',
              })}
            >
              24건
            </p>
          </div>
          <AlertCircle
            size={24}
            className={css({ color: 'critical.icon.default' })}
          />
        </div>
        <div
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            padding: '3px 8px',
            borderRadius: '20px',
            backgroundColor: 'critical.surface.default',
            border: '1px solid',
            borderColor: 'critical.border.default',
            alignSelf: 'flex-start',
          })}
        >
          <span
            className={css({
              fontSize: '12px',
              fontWeight: '600',
              color: 'critical.text.default',
            })}
          >
            +3건
          </span>
        </div>
      </div>

      {/* Card 3: 평균 응답시간 — positive */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          })}
        >
          <div>
            <p
              className={css({
                fontSize: '13px',
                color: 'neutral.text.subtle',
                marginBottom: '4px',
              })}
            >
              평균 응답시간
            </p>
            <p
              className={css({
                fontSize: '28px',
                fontWeight: '700',
                color: 'neutral.text.default',
              })}
            >
              142ms
            </p>
          </div>
          <Zap
            size={24}
            className={css({ color: 'positive.icon.default' })}
          />
        </div>
        <div
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            padding: '3px 8px',
            borderRadius: '20px',
            backgroundColor: 'positive.surface.default',
            border: '1px solid',
            borderColor: 'positive.border.default',
            alignSelf: 'flex-start',
          })}
        >
          <span
            className={css({
              fontSize: '12px',
              fontWeight: '600',
              color: 'positive.text.default',
            })}
          >
            -8%
          </span>
        </div>
      </div>

      {/* Card 4: 미처리 민원 — warning */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          })}
        >
          <div>
            <p
              className={css({
                fontSize: '13px',
                color: 'neutral.text.subtle',
                marginBottom: '4px',
              })}
            >
              미처리 민원
            </p>
            <p
              className={css({
                fontSize: '28px',
                fontWeight: '700',
                color: 'neutral.text.default',
              })}
            >
              7건
            </p>
          </div>
          <Clock
            size={24}
            className={css({ color: 'warning.icon.default' })}
          />
        </div>
        <div
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            padding: '3px 8px',
            borderRadius: '20px',
            backgroundColor: 'warning.surface.default',
            border: '1px solid',
            borderColor: 'warning.border.default',
            alignSelf: 'flex-start',
          })}
        >
          <span
            className={css({
              fontSize: '12px',
              fontWeight: '600',
              color: 'warning.text.default',
            })}
          >
            +2건
          </span>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// System Resources
// ────────────────────────────────────────────────
function ProgressBar({
  value,
  intent,
}: {
  value: number;
  intent: 'positive' | 'warning' | 'critical';
}) {
  const fillToken =
    intent === 'positive'
      ? 'positive.fill.default'
      : intent === 'warning'
      ? 'warning.fill.default'
      : 'critical.fill.default';

  return (
    <div
      className={css({
        width: '100%',
        height: '8px',
        borderRadius: '4px',
        backgroundColor: 'neutral.fill.default',
        overflow: 'hidden',
      })}
    >
      <div
        className={css({
          height: '100%',
          borderRadius: '4px',
          backgroundColor: fillToken,
        })}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function SystemResources() {
  const resources = [
    {
      label: 'CPU 사용량',
      value: 42,
      intent: 'positive' as const,
      statusText: '여유로운 상태',
      statusIntent: 'positive' as const,
    },
    {
      label: '메모리 사용량',
      value: 78,
      intent: 'warning' as const,
      statusText: '주의 필요',
      statusIntent: 'warning' as const,
    },
    {
      label: '디스크 사용량',
      value: 91,
      intent: 'critical' as const,
      statusText: '심각한 상태',
      statusIntent: 'critical' as const,
    },
  ];

  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
        padding: '20px 24px 0',
      })}
    >
      {resources.map((r) => {
        const textToken =
          r.statusIntent === 'positive'
            ? 'positive.text.default'
            : r.statusIntent === 'warning'
            ? 'warning.text.default'
            : 'critical.text.default';

        return (
          <div
            key={r.label}
            className={css({
              backgroundColor: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            })}
          >
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span
                className={css({
                  fontSize: '14px',
                  color: 'neutral.text.subtle',
                })}
              >
                {r.label}
              </span>
              <span
                className={css({
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'neutral.text.default',
                })}
              >
                {r.value}%
              </span>
            </div>
            <ProgressBar value={r.value} intent={r.intent} />
            <span
              className={css({
                fontSize: '12px',
                color: textToken,
              })}
            >
              {r.statusText}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ────────────────────────────────────────────────
// Events Table
// ────────────────────────────────────────────────
function EventsTable() {
  const rows = [
    {
      avatar: '홍',
      event: '로그인 성공',
      time: '14:32',
      status: '정상 처리됨',
      statusIntent: 'positive' as const,
    },
    {
      avatar: '김',
      event: '결제 실패',
      time: '14:28',
      status: '문제 발생',
      statusIntent: 'critical' as const,
    },
    {
      avatar: '이',
      event: '비밀번호 5회 오류',
      time: '14:21',
      status: '주의 필요',
      statusIntent: 'warning' as const,
    },
    {
      avatar: '박',
      event: '회원가입',
      time: '14:15',
      status: '정상 처리됨',
      statusIntent: 'positive' as const,
    },
    {
      avatar: '시',
      event: 'API 응답 지연',
      time: '14:09',
      status: '주의 필요',
      statusIntent: 'warning' as const,
    },
  ];

  return (
    <div
      className={css({
        margin: '20px 24px 0',
        backgroundColor: 'neutral.canvas.02',
        border: '1px solid',
        borderColor: 'neutral.border.default',
        borderRadius: '12px',
        overflow: 'hidden',
      })}
    >
      {/* Table header controls */}
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px 0',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.subtle',
        })}
      >
        {/* Tabs */}
        <div
          className={css({
            display: 'flex',
            gap: '0',
          })}
        >
          {/* Active tab */}
          <div
            className={css({
              padding: '10px 16px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'neutral.text.default',
              borderBottom: '2px solid',
              borderColor: 'primary.border.emphasis',
              cursor: 'pointer',
            })}
          >
            전체 이벤트
          </div>
          {/* Inactive tabs */}
          <div
            className={css({
              padding: '10px 16px',
              fontSize: '14px',
              color: 'neutral.text.subtle',
              borderBottom: '2px solid transparent',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            미처리
          </div>
          <div
            className={css({
              padding: '10px 16px',
              fontSize: '14px',
              color: 'neutral.text.subtle',
              borderBottom: '2px solid transparent',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            처리완료
          </div>
        </div>

        {/* Buttons */}
        <div
          className={css({
            display: 'flex',
            gap: '8px',
            paddingBottom: '10px',
          })}
        >
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
              cursor: 'pointer',
              fontSize: '13px',
              color: 'neutral.text.default',
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
              cursor: 'not-allowed',
              fontSize: '13px',
              color: 'neutral.text.default',
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

      {/* Tag filter bar + search */}
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
        <div
          className={css({
            display: 'flex',
            gap: '8px',
          })}
        >
          {/* 전체 — selected */}
          <span
            className={css({
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '600',
              backgroundColor: 'primary.fill.default',
              color: 'inverse.text.default',
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
                borderRadius: '20px',
                fontSize: '13px',
                backgroundColor: 'neutral.surface.default',
                color: 'neutral.text.subtle',
                cursor: 'pointer',
                border: '1px solid',
                borderColor: 'neutral.border.default',
              })}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Search inputs */}
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          })}
        >
          {/* Normal search input */}
          <input
            type="text"
            placeholder="이벤트 검색..."
            className={css({
              padding: '7px 12px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              backgroundColor: 'neutral.surface.default',
              fontSize: '13px',
              color: 'neutral.text.default',
              outline: 'none',
              width: '200px',
            })}
          />
          {/* Error state input */}
          <div>
            <input
              type="text"
              defaultValue="2025/99/99"
              className={css({
                padding: '7px 12px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'critical.border.emphasis',
                backgroundColor: 'critical.surface.default',
                fontSize: '13px',
                color: 'neutral.text.default',
                outline: 'none',
                width: '200px',
              })}
            />
            <p
              className={css({
                fontSize: '11px',
                color: 'critical.text.default',
                marginTop: '3px',
              })}
            >
              잘못된 날짜 형식입니다.
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <table
        className={css({
          width: '100%',
          borderCollapse: 'collapse',
        })}
      >
        <thead>
          <tr
            className={css({
              backgroundColor: 'neutral.canvas.03',
            })}
          >
            {['사용자', '이벤트', '시간', '상태', '액션'].map((col) => (
              <th
                key={col}
                className={css({
                  padding: '10px 20px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'neutral.text.subtle',
                  borderBottom: '1px solid',
                  borderColor: 'neutral.border.subtle',
                })}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const isEven = idx % 2 === 1;

            const iconToken =
              row.statusIntent === 'positive'
                ? 'positive.icon.default'
                : row.statusIntent === 'warning'
                ? 'warning.icon.default'
                : 'critical.icon.default';

            const textToken =
              row.statusIntent === 'positive'
                ? 'positive.text.default'
                : row.statusIntent === 'warning'
                ? 'warning.text.default'
                : 'critical.text.default';

            const StatusIcon =
              row.statusIntent === 'positive'
                ? CheckCircle2
                : row.statusIntent === 'warning'
                ? AlertTriangle
                : XCircle;

            return (
              <tr
                key={idx}
                className={css({
                  backgroundColor: isEven
                    ? 'neutral.canvas.03'
                    : 'neutral.canvas.02',
                  borderBottom: '1px solid',
                  borderColor: 'neutral.border.subtle',
                })}
              >
                {/* 사용자 */}
                <td
                  className={css({
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  })}
                >
                  <div
                    className={css({
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
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
                      {row.avatar}
                    </span>
                  </div>
                </td>
                {/* 이벤트 */}
                <td
                  className={css({
                    padding: '14px 20px',
                    fontSize: '14px',
                    color: 'neutral.text.default',
                  })}
                >
                  {row.event}
                </td>
                {/* 시간 */}
                <td
                  className={css({
                    padding: '14px 20px',
                    fontSize: '14px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  {row.time}
                </td>
                {/* 상태 */}
                <td
                  className={css({
                    padding: '14px 20px',
                  })}
                >
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    })}
                  >
                    <StatusIcon
                      size={15}
                      className={css({ color: iconToken })}
                    />
                    <span
                      className={css({
                        fontSize: '13px',
                        color: textToken,
                      })}
                    >
                      {row.status}
                    </span>
                  </div>
                </td>
                {/* 액션 */}
                <td
                  className={css({
                    padding: '14px 20px',
                  })}
                >
                  <button
                    className={css({
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: 'neutral.surface.transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    <Eye
                      size={16}
                      className={css({ color: 'neutral.icon.default' })}
                    />
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

// ────────────────────────────────────────────────
// Toggle Switch (static visual)
// ────────────────────────────────────────────────
function ToggleSwitch({
  on,
  disabled,
}: {
  on: boolean;
  disabled?: boolean;
}) {
  return (
    <div
      className={css({
        width: '44px',
        height: '24px',
        borderRadius: '12px',
        backgroundColor: on ? 'primary.fill.default' : 'neutral.fill.default',
        display: 'flex',
        alignItems: 'center',
        padding: '2px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        flexShrink: 0,
        transition: 'background-color 0.2s',
      })}
    >
      <div
        className={css({
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'neutral.canvas.01',
          marginLeft: on ? 'auto' : '0',
        })}
      />
    </div>
  );
}

// ────────────────────────────────────────────────
// Notification Settings Panel
// ────────────────────────────────────────────────
function NotificationSettings() {
  const items = [
    { label: '배포 알림', on: true, disabled: false },
    { label: '장애 알림', on: true, disabled: false },
    { label: '보안 알림', on: false, disabled: false },
    { label: '마케팅 알림', on: false, disabled: true },
  ];

  return (
    <div
      className={css({
        margin: '20px 24px 0',
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
          fontWeight: '700',
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
          gap: '16px',
        })}
      >
        {items.map((item) => (
          <div
            key={item.label}
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              opacity: item.disabled ? 0.38 : 1,
            })}
          >
            <span
              className={css({
                fontSize: '14px',
                color: 'neutral.text.default',
              })}
            >
              {item.label}
            </span>
            <ToggleSwitch on={item.on} disabled={item.disabled} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Bottom Alert Cards
// ────────────────────────────────────────────────
function BottomAlertCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
        padding: '20px 24px',
      })}
    >
      {/* Card 1: 성공 */}
      <div
        className={css({
          backgroundColor: 'positive.surface.default',
          border: '1px solid',
          borderColor: 'positive.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
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
            size={22}
            className={css({ color: 'positive.icon.default' })}
          />
          <button
            className={css({
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
            })}
          >
            <X
              size={16}
              className={css({ color: 'positive.icon.default' })}
            />
          </button>
        </div>
        <div>
          <p
            className={css({
              fontSize: '15px',
              fontWeight: '700',
              color: 'positive.text.default',
              marginBottom: '4px',
            })}
          >
            배포 완료
          </p>
          <p
            className={css({
              fontSize: '13px',
              color: 'positive.text.default',
            })}
          >
            v2.4.1이 성공적으로 배포되었습니다.
          </p>
        </div>
        <button
          className={css({
            padding: '8px 14px',
            borderRadius: '8px',
            border: '1px solid',
            borderColor: 'positive.border.emphasis',
            backgroundColor: 'neutral.surface.transparent',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '600',
            color: 'positive.text.default',
          })}
        >
          배포 로그 보기
        </button>
      </div>

      {/* Card 2: 심각 */}
      <div
        className={css({
          backgroundColor: 'critical.surface.default',
          border: '1px solid',
          borderColor: 'critical.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
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
            size={22}
            className={css({ color: 'critical.icon.default' })}
          />
          <button
            className={css({
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
            })}
          >
            <X
              size={16}
              className={css({ color: 'critical.icon.default' })}
            />
          </button>
        </div>
        <div>
          <p
            className={css({
              fontSize: '15px',
              fontWeight: '700',
              color: 'critical.text.default',
              marginBottom: '4px',
            })}
          >
            연결 실패
          </p>
          <p
            className={css({
              fontSize: '13px',
              color: 'critical.text.default',
            })}
          >
            DB 연결이 실패했습니다.
          </p>
        </div>
        <div
          className={css({
            display: 'flex',
            gap: '8px',
          })}
        >
          <button
            className={css({
              flex: 1,
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'critical.fill.default',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '600',
              color: 'inverse.text.default',
            })}
          >
            즉시 확인
          </button>
          <button
            className={css({
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'neutral.surface.transparent',
              cursor: 'pointer',
              fontSize: '13px',
              color: 'critical.text.default',
            })}
          >
            무시
          </button>
        </div>
      </div>

      {/* Card 3: 경고 */}
      <div
        className={css({
          backgroundColor: 'warning.surface.default',
          border: '1px solid',
          borderColor: 'warning.border.default',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
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
            size={22}
            className={css({ color: 'warning.icon.default' })}
          />
          <button
            className={css({
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
            })}
          >
            <X
              size={16}
              className={css({ color: 'warning.icon.default' })}
            />
          </button>
        </div>
        <div>
          <p
            className={css({
              fontSize: '15px',
              fontWeight: '700',
              color: 'warning.text.default',
              marginBottom: '4px',
            })}
          >
            용량 경고
          </p>
          <p
            className={css({
              fontSize: '13px',
              color: 'warning.text.default',
            })}
          >
            디스크 사용량이 85%입니다.
          </p>
        </div>
        <button
          className={css({
            padding: '8px 14px',
            borderRadius: '8px',
            border: '1px solid',
            borderColor: 'warning.border.emphasis',
            backgroundColor: 'neutral.surface.transparent',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '600',
            color: 'warning.text.default',
          })}
        >
          정리 시작
        </button>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Page Root
// ────────────────────────────────────────────────
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

      {/* Main content — offset for fixed sidebar */}
      <div
        className={css({
          marginLeft: '240px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'neutral.canvas.01',
        })}
      >
        <HeaderBar />
        <ToastArea />
        <StatCards />
        <SystemResources />
        <EventsTable />
        <NotificationSettings />
        <BottomAlertCards />
      </div>
    </div>
  );
}
