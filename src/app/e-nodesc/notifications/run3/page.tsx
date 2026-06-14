import { css } from '@ds-token-test/styled-system-intent-first/css';
import {
  Bell,
  Settings,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Zap,
  X,
  BellOff,
} from 'lucide-react';

// ── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '6',
          py: '4',
          backgroundColor: 'neutral.canvas.01',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'neutral.border.base',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <Bell
            size={20}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'semibold',
              color: 'neutral.text.base',
            })}
          >
            알림 센터
          </span>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <button
            className={css({
              px: '3',
              py: '1.5',
              fontSize: 'sm',
              color: 'neutral.text.base',
              backgroundColor: 'neutral.surface.transparent',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.transparent',
              borderRadius: 'md',
              opacity: '0.38',
              cursor: 'not-allowed',
            })}
          >
            모두 읽음 처리
          </button>
          <button
            className={css({
              p: '2',
              color: 'neutral.icon.base',
              backgroundColor: 'neutral.surface.transparent',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.transparent',
              borderRadius: 'md',
            })}
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Tab Bar */}
      <div
        className={css({
          display: 'flex',
          px: '6',
          backgroundColor: 'neutral.canvas.01',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'neutral.border.base',
        })}
      >
        {/* Active Tab */}
        <button
          className={css({
            px: '4',
            py: '3',
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'primary.text.base',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'primary.fill.base',
            backgroundColor: 'neutral.surface.transparent',
          })}
        >
          전체
        </button>
        <button
          className={css({
            px: '4',
            py: '3',
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'neutral.text.base',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'neutral.border.transparent',
            backgroundColor: 'neutral.surface.transparent',
            opacity: '0.38',
          })}
        >
          읽지 않음
        </button>
        <button
          className={css({
            px: '4',
            py: '3',
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'neutral.text.base',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'neutral.border.transparent',
            backgroundColor: 'neutral.surface.transparent',
            opacity: '0.38',
          })}
        >
          완료됨
        </button>
      </div>
    </div>
  );
}

// ── Sidebar ──────────────────────────────────────────────────────────────────

function CounterCard({
  icon,
  count,
  label,
  bgColor,
  borderColor,
  iconColor,
  textColor,
}: {
  icon: React.ReactNode;
  count: string;
  label: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
  textColor: string;
}) {
  return (
    <div
      className={css({
        p: '3',
        borderRadius: 'md',
        borderWidth: '1px',
        borderStyle: 'solid',
        mb: '2',
      })}
      style={{
        /* We intentionally avoid inline style for tokens — layout structure only */
      }}
    >
      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
        <span className={iconColor}>{icon}</span>
        <span className={`${css({ fontSize: 'xl', fontWeight: 'bold' })} ${textColor}`}>
          {count}
        </span>
      </div>
      <div className={`${css({ fontSize: 'xs', mt: '1' })} ${textColor}`}>{label}</div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside
      className={css({
        width: '200px',
        flexShrink: '0',
        backgroundColor: 'neutral.canvas.02',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'neutral.border.base',
        p: '4',
        overflowY: 'auto',
      })}
    >
      {/* Counter Cards */}
      <div
        className={css({
          p: '3',
          borderRadius: 'md',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'primary.border.base',
          backgroundColor: 'primary.surface.base',
          mb: '2',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <Bell size={16} className={css({ color: 'primary.icon.base' })} />
          <span className={css({ fontSize: 'xl', fontWeight: 'bold', color: 'primary.text.base' })}>
            8
          </span>
        </div>
        <div className={css({ fontSize: 'xs', mt: '1', color: 'primary.text.base' })}>
          읽지 않음
        </div>
      </div>

      <div
        className={css({
          p: '3',
          borderRadius: 'md',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'critical.border.base',
          backgroundColor: 'critical.surface.base',
          mb: '2',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <AlertCircle size={16} className={css({ color: 'critical.icon.base' })} />
          <span
            className={css({ fontSize: 'xl', fontWeight: 'bold', color: 'critical.text.base' })}
          >
            2
          </span>
        </div>
        <div className={css({ fontSize: 'xs', mt: '1', color: 'critical.text.base' })}>
          즉시 확인
        </div>
      </div>

      <div
        className={css({
          p: '3',
          borderRadius: 'md',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'warning.border.base',
          backgroundColor: 'warning.surface.base',
          mb: '2',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <AlertTriangle size={16} className={css({ color: 'warning.icon.base' })} />
          <span
            className={css({ fontSize: 'xl', fontWeight: 'bold', color: 'warning.text.base' })}
          >
            3
          </span>
        </div>
        <div className={css({ fontSize: 'xs', mt: '1', color: 'warning.text.base' })}>
          주의 필요
        </div>
      </div>

      {/* Divider */}
      <hr
        className={css({
          borderColor: 'neutral.border.base',
          my: '4',
        })}
      />

      {/* Category Filters */}
      <nav className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}>
        {/* Selected */}
        <button
          className={css({
            px: '3',
            py: '1.5',
            fontSize: 'sm',
            borderRadius: 'full',
            textAlign: 'left',
            backgroundColor: 'primary.fill.base',
            color: 'inverse.text.base',
            fontWeight: 'medium',
          })}
        >
          전체
        </button>
        {(['시스템', '결제', '배포', '보안', '마케팅'] as const).map((label) => (
          <button
            key={label}
            className={css({
              px: '3',
              py: '1.5',
              fontSize: 'sm',
              borderRadius: 'full',
              textAlign: 'left',
              backgroundColor: 'neutral.surface.base',
              color: 'neutral.text.base',
            })}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

// ── Notification Cards ────────────────────────────────────────────────────────

type BadgeVariant = 'positive' | 'critical' | 'warning' | 'info' | 'primary' | 'neutral';

function Badge({
  label,
  variant,
  filled,
}: {
  label: string;
  variant: BadgeVariant;
  filled?: boolean;
}) {
  if (variant === 'primary' && filled) {
    return (
      <span
        className={css({
          px: '2',
          py: '0.5',
          fontSize: 'xs',
          borderRadius: 'md',
          backgroundColor: 'primary.fill.base',
          color: 'inverse.text.base',
        })}
      >
        {label}
      </span>
    );
  }
  if (variant === 'critical' && filled) {
    return (
      <span
        className={css({
          px: '2',
          py: '0.5',
          fontSize: 'xs',
          borderRadius: 'md',
          backgroundColor: 'critical.fill.base',
          color: 'inverse.text.base',
        })}
      >
        {label}
      </span>
    );
  }
  if (variant === 'positive') {
    return (
      <span
        className={css({
          px: '2',
          py: '0.5',
          fontSize: 'xs',
          borderRadius: 'md',
          backgroundColor: 'positive.surface.base',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'positive.border.base',
          color: 'positive.text.base',
        })}
      >
        {label}
      </span>
    );
  }
  if (variant === 'warning') {
    return (
      <span
        className={css({
          px: '2',
          py: '0.5',
          fontSize: 'xs',
          borderRadius: 'md',
          backgroundColor: 'warning.surface.base',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'warning.border.base',
          color: 'warning.text.base',
        })}
      >
        {label}
      </span>
    );
  }
  if (variant === 'info') {
    return (
      <span
        className={css({
          px: '2',
          py: '0.5',
          fontSize: 'xs',
          borderRadius: 'md',
          backgroundColor: 'info.surface.base',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'info.border.base',
          color: 'info.text.base',
        })}
      >
        {label}
      </span>
    );
  }
  // neutral
  return (
    <span
      className={css({
        px: '2',
        py: '0.5',
        fontSize: 'xs',
        borderRadius: 'md',
        backgroundColor: 'neutral.surface.base',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'neutral.border.base',
        color: 'neutral.text.base',
      })}
    >
      {label}
    </span>
  );
}

// Notification 1 — positive, unread
function Notification1() {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        mb: '3',
      })}
    >
      {/* Left accent border */}
      <div
        className={css({
          width: '4px',
          flexShrink: '0',
          backgroundColor: 'positive.fill.base',
        })}
      />
      <div className={css({ flex: '1', p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <CheckCircle2 size={20} className={css({ color: 'positive.icon.base', flexShrink: '0', mt: '0.5' })} />
          <div className={css({ flex: '1' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <span className={css({ fontWeight: 'semibold', color: 'positive.text.base', fontSize: 'sm' })}>
                배포 v2.4.1 완료
              </span>
              <button className={css({ color: 'neutral.icon.base', p: '1', borderRadius: 'sm' })}>
                <X size={14} />
              </button>
            </div>
            <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
              프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '3', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: '0.38' })}>방금 전</span>
              <Badge label="완료됨" variant="positive" />
              <button
                className={css({
                  px: '3',
                  py: '1',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                  backgroundColor: 'neutral.surface.transparent',
                })}
              >
                배포 로그 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification 2 — critical, unread
function Notification2() {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        mb: '3',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: '0',
          backgroundColor: 'critical.fill.base',
        })}
      />
      <div className={css({ flex: '1', p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <XCircle size={20} className={css({ color: 'critical.icon.base', flexShrink: '0', mt: '0.5' })} />
          <div className={css({ flex: '1' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <span className={css({ fontWeight: 'semibold', color: 'critical.text.base', fontSize: 'sm' })}>
                DB 연결 오류
              </span>
              <button className={css({ color: 'neutral.icon.base', p: '1', borderRadius: 'sm' })}>
                <X size={14} />
              </button>
            </div>
            <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
              데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '3', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: '0.38' })}>3분 전</span>
              <Badge label="즉시 확인" variant="critical" filled />
              <button
                className={css({
                  px: '3',
                  py: '1',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  backgroundColor: 'critical.fill.base',
                  color: 'inverse.text.base',
                  borderWidth: '0',
                })}
              >
                상세 보기
              </button>
              <button
                className={css({
                  px: '3',
                  py: '1',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.base',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'neutral.border.transparent',
                  opacity: '0.38',
                })}
              >
                무시
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification 3 — warning, unread
function Notification3() {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        mb: '3',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: '0',
          backgroundColor: 'warning.fill.base',
        })}
      />
      <div className={css({ flex: '1', p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <AlertTriangle size={20} className={css({ color: 'warning.icon.base', flexShrink: '0', mt: '0.5' })} />
          <div className={css({ flex: '1' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <span className={css({ fontWeight: 'semibold', color: 'warning.text.base', fontSize: 'sm' })}>
                메모리 사용량 경고
              </span>
              <button className={css({ color: 'neutral.icon.base', p: '1', borderRadius: 'sm' })}>
                <X size={14} />
              </button>
            </div>
            <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
              서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '3', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: '0.38' })}>15분 전</span>
              <Badge label="주의" variant="warning" />
              <button
                className={css({
                  px: '3',
                  py: '1',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'warning.border.base',
                  color: 'warning.text.base',
                  backgroundColor: 'neutral.surface.transparent',
                })}
              >
                리소스 모니터 열기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification 4 — info, unread
function Notification4() {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        mb: '3',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: '0',
          backgroundColor: 'info.fill.base',
        })}
      />
      <div className={css({ flex: '1', p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Info size={20} className={css({ color: 'info.icon.base', flexShrink: '0', mt: '0.5' })} />
          <div className={css({ flex: '1' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <span className={css({ fontWeight: 'semibold', color: 'info.text.base', fontSize: 'sm' })}>
                시스템 점검 예정
              </span>
              <button className={css({ color: 'neutral.icon.base', p: '1', borderRadius: 'sm' })}>
                <X size={14} />
              </button>
            </div>
            <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
              2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '3', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: '0.38' })}>1시간 전</span>
              <Badge label="안내" variant="info" />
              <button
                className={css({
                  px: '3',
                  py: '1',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'info.border.base',
                  color: 'info.text.base',
                  backgroundColor: 'neutral.surface.transparent',
                })}
              >
                일정 확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification 5 — primary, unread
function Notification5() {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        mb: '3',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: '0',
          backgroundColor: 'primary.fill.base',
        })}
      />
      <div className={css({ flex: '1', p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Zap size={20} className={css({ color: 'primary.icon.base', flexShrink: '0', mt: '0.5' })} />
          <div className={css({ flex: '1' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <span className={css({ fontWeight: 'semibold', color: 'primary.text.base', fontSize: 'sm' })}>
                새 기능 출시
              </span>
              <button className={css({ color: 'neutral.icon.base', p: '1', borderRadius: 'sm' })}>
                <X size={14} />
              </button>
            </div>
            <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
              대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '3', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: '0.38' })}>2시간 전</span>
              <Badge label="새 기능" variant="primary" filled />
              <button
                className={css({
                  px: '3',
                  py: '1',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  backgroundColor: 'primary.fill.base',
                  color: 'inverse.text.base',
                  borderWidth: '0',
                })}
              >
                지금 확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification 6 — positive, read
function Notification6() {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'neutral.canvas.01',
        mb: '3',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: '0',
          backgroundColor: 'positive.fill.base',
          opacity: '0.38',
        })}
      />
      <div className={css({ flex: '1', p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <CheckCircle2
            size={20}
            className={css({ color: 'positive.icon.base', flexShrink: '0', mt: '0.5', opacity: '0.38' })}
          />
          <div className={css({ flex: '1' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <span className={css({ fontWeight: 'medium', color: 'neutral.text.low', fontSize: 'sm' })}>
                결제 처리 완료
              </span>
              <button className={css({ color: 'neutral.icon.base', p: '1', borderRadius: 'sm' })}>
                <X size={14} />
              </button>
            </div>
            <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
              Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '3', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: '0.38' })}>어제</span>
              <span
                className={css({
                  px: '2',
                  py: '0.5',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  backgroundColor: 'positive.surface.base',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                  opacity: '0.38',
                })}
              >
                완료됨
              </span>
              <button
                className={css({
                  px: '3',
                  py: '1',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.base',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'neutral.border.transparent',
                  opacity: '0.38',
                })}
              >
                영수증 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification 7 — warning, read
function Notification7() {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'neutral.canvas.01',
        mb: '3',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: '0',
          backgroundColor: 'warning.fill.base',
          opacity: '0.38',
        })}
      />
      <div className={css({ flex: '1', p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <AlertCircle
            size={20}
            className={css({ color: 'warning.icon.base', flexShrink: '0', mt: '0.5', opacity: '0.38' })}
          />
          <div className={css({ flex: '1' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <span className={css({ fontWeight: 'medium', color: 'neutral.text.low', fontSize: 'sm' })}>
                API 응답 지연 감지
              </span>
              <button className={css({ color: 'neutral.icon.base', p: '1', borderRadius: 'sm' })}>
                <X size={14} />
              </button>
            </div>
            <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
              결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '3', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: '0.38' })}>2일 전</span>
              <Badge label="처리됨" variant="neutral" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification 8 — info, read
function Notification8() {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'neutral.canvas.01',
        mb: '3',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: '0',
          backgroundColor: 'info.fill.base',
          opacity: '0.38',
        })}
      />
      <div className={css({ flex: '1', p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Info
            size={20}
            className={css({ color: 'info.icon.base', flexShrink: '0', mt: '0.5', opacity: '0.38' })}
          />
          <div className={css({ flex: '1' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
              <span className={css({ fontWeight: 'medium', color: 'neutral.text.low', fontSize: 'sm' })}>
                약관 업데이트 안내
              </span>
              <button className={css({ color: 'neutral.icon.base', p: '1', borderRadius: 'sm' })}>
                <X size={14} />
              </button>
            </div>
            <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
              서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '3', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: '0.38' })}>3일 전</span>
              <Badge label="안내" variant="neutral" />
              <button
                className={css({
                  px: '3',
                  py: '1',
                  fontSize: 'xs',
                  borderRadius: 'md',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.base',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'neutral.border.transparent',
                })}
              >
                약관 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Empty State ───────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div
      className={css({
        p: '6',
        borderRadius: 'lg',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'neutral.border.base',
        backgroundColor: 'neutral.surface.base',
        textAlign: 'center',
      })}
    >
      <BellOff
        size={32}
        className={css({ color: 'neutral.icon.base', mx: 'auto', mb: '3', opacity: '0.38' })}
      />
      <p className={css({ fontSize: 'sm', color: 'neutral.text.low' })}>
        모든 알림을 확인했습니다
      </p>
      <p className={css({ fontSize: 'xs', color: 'neutral.text.base', mt: '1', opacity: '0.38' })}>
        새로운 알림이 도착하면 여기에 표시됩니다.
      </p>
    </div>
  );
}

// ── Notification List ─────────────────────────────────────────────────────────

function NotificationList() {
  return (
    <main
      className={css({
        flex: '1',
        overflowY: 'auto',
        backgroundColor: 'neutral.canvas.02',
        p: '6',
      })}
    >
      <Notification1 />
      <Notification2 />
      <Notification3 />
      <Notification4 />
      <Notification5 />
      <Notification6 />
      <Notification7 />
      <Notification8 />

      <hr
        className={css({
          borderColor: 'neutral.border.base',
          my: '4',
        })}
      />

      <EmptyState />
    </main>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'neutral.canvas.01',
      })}
    >
      <Header />
      <div className={css({ display: 'flex', flex: '1', overflow: 'hidden' })}>
        <Sidebar />
        <NotificationList />
      </div>
    </div>
  );
}
