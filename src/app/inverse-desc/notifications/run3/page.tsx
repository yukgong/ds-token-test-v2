import { css } from '@ds-token-test/styled-system-intent-first-slotfirst/css';
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

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <div
      className={css({
        backgroundColor: 'canvas.neutral.01',
        borderBottom: '1px solid',
        borderBottomColor: 'border.neutral.base',
      })}
    >
      {/* Title row */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '6',
          py: '4',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '2',
          })}
        >
          <Bell
            size={20}
            className={css({ color: 'icon.neutral.base' })}
          />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'bold',
              color: 'text.neutral.base',
            })}
          >
            알림 센터
          </span>
        </div>

        <div
          className={css({ display: 'flex', alignItems: 'center', gap: '2' })}
        >
          {/* "모두 읽음 처리" ghost button — disabled */}
          <button
            className={css({
              backgroundColor: 'surface.neutral.transparent',
              border: '1px solid',
              borderColor: 'border.neutral.base',
              borderRadius: 'md',
              px: '3',
              py: '1.5',
              fontSize: 'sm',
              color: 'text.neutral.base',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
            disabled
          >
            모두 읽음 처리
          </button>

          {/* Settings ghost icon button */}
          <button
            className={css({
              backgroundColor: 'surface.neutral.transparent',
              border: 'none',
              borderRadius: 'md',
              p: '2',
              cursor: 'pointer',
            })}
          >
            <Settings
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div
        className={css({
          display: 'flex',
          gap: '0',
          px: '6',
        })}
      >
        {/* Active tab */}
        <button
          className={css({
            px: '4',
            py: '2',
            fontSize: 'sm',
            fontWeight: 'semibold',
            color: 'text.primary.base',
            borderBottom: '2px solid',
            borderBottomColor: 'border.primary.highest',
            backgroundColor: 'surface.neutral.transparent',
            border: 'none',
            borderBottomStyle: 'solid',
            cursor: 'pointer',
          })}
        >
          전체
        </button>

        {/* Inactive tabs */}
        {['읽지 않음', '완료됨'].map((label) => (
          <button
            key={label}
            className={css({
              px: '4',
              py: '2',
              fontSize: 'sm',
              color: 'text.neutral.base',
              backgroundColor: 'surface.neutral.transparent',
              border: 'none',
              borderBottom: '2px solid transparent',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar counter card ─────────────────────────────────────────────────────

type CounterCardProps = {
  icon: React.ReactNode;
  count: string;
  label: string;
  bgClass: string;
  borderClass: string;
};

function CounterCard({
  icon,
  count,
  label,
  bgClass,
  borderClass,
}: CounterCardProps) {
  return (
    <div
      className={`${bgClass} ${borderClass} ${css({
        border: '1px solid',
        borderRadius: 'lg',
        p: '3',
        display: 'flex',
        alignItems: 'center',
        gap: '3',
      })}`}
    >
      {icon}
      <div>
        <div
          className={css({ fontSize: 'xl', fontWeight: 'bold' })}
          style={{ lineHeight: 1 }}
        >
          {count}
        </div>
        <div className={css({ fontSize: 'xs', mt: '0.5' })}>{label}</div>
      </div>
    </div>
  );
}

// ─── Filter sidebar ───────────────────────────────────────────────────────────

const categories = ['전체', '시스템', '결제', '배포', '보안', '마케팅'];

function FilterSidebar() {
  return (
    <aside
      className={css({
        width: '200px',
        flexShrink: 0,
        backgroundColor: 'canvas.neutral.02',
        borderRight: '1px solid',
        borderRightColor: 'border.neutral.base',
        overflowY: 'auto',
        p: '4',
        display: 'flex',
        flexDirection: 'column',
        gap: '3',
      })}
    >
      {/* Counter cards */}
      <CounterCard
        bgClass={css({ backgroundColor: 'surface.primary.base' })}
        borderClass={css({ borderColor: 'border.primary.base' })}
        icon={
          <Bell
            size={20}
            className={css({ color: 'icon.primary.base', flexShrink: 0 })}
          />
        }
        count="8"
        label="읽지 않음"
      />
      <CounterCard
        bgClass={css({ backgroundColor: 'surface.critical.base' })}
        borderClass={css({ borderColor: 'border.critical.base' })}
        icon={
          <AlertCircle
            size={20}
            className={css({ color: 'icon.critical.base', flexShrink: 0 })}
          />
        }
        count="2"
        label="즉시 확인"
      />
      <CounterCard
        bgClass={css({ backgroundColor: 'surface.warning.base' })}
        borderClass={css({ borderColor: 'border.warning.base' })}
        icon={
          <AlertTriangle
            size={20}
            className={css({ color: 'icon.warning.base', flexShrink: 0 })}
          />
        }
        count="3"
        label="주의 필요"
      />

      {/* Divider */}
      <hr
        className={css({
          border: 'none',
          borderTop: '1px solid',
          borderTopColor: 'border.neutral.low',
          my: '1',
        })}
      />

      {/* Category filters */}
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}>
        {categories.map((cat, idx) =>
          idx === 0 ? (
            // Selected
            <button
              key={cat}
              className={css({
                backgroundColor: 'fill.primary.base',
                border: 'none',
                borderRadius: 'full',
                px: '3',
                py: '1.5',
                fontSize: 'sm',
                fontWeight: 'medium',
                color: 'inverse.text.base',
                textAlign: 'left',
                cursor: 'pointer',
              })}
            >
              {cat}
            </button>
          ) : (
            // Unselected
            <button
              key={cat}
              className={css({
                backgroundColor: 'surface.neutral.base',
                border: 'none',
                borderRadius: 'full',
                px: '3',
                py: '1.5',
                fontSize: 'sm',
                color: 'text.neutral.base',
                textAlign: 'left',
                cursor: 'pointer',
                _hover: {
                  backgroundColor: 'surface.neutral.high',
                },
              })}
            >
              {cat}
            </button>
          )
        )}
      </div>
    </aside>
  );
}

// ─── Notification card building blocks ───────────────────────────────────────

type BadgeProps = {
  label: string;
  variant: 'outline-positive' | 'outline-warning' | 'outline-info' | 'filled-critical' | 'filled-primary' | 'neutral';
};

function Badge({ label, variant }: BadgeProps) {
  const variantStyles: Record<BadgeProps['variant'], string> = {
    'outline-positive': css({
      backgroundColor: 'surface.positive.base',
      border: '1px solid',
      borderColor: 'border.positive.base',
      color: 'text.positive.base',
    }),
    'outline-warning': css({
      backgroundColor: 'surface.warning.base',
      border: '1px solid',
      borderColor: 'border.warning.base',
      color: 'text.warning.base',
    }),
    'outline-info': css({
      backgroundColor: 'surface.info.base',
      border: '1px solid',
      borderColor: 'border.info.base',
      color: 'text.info.base',
    }),
    'filled-critical': css({
      backgroundColor: 'fill.critical.base',
      border: 'none',
      color: 'inverse.text.base',
    }),
    'filled-primary': css({
      backgroundColor: 'fill.primary.base',
      border: 'none',
      color: 'inverse.text.base',
    }),
    neutral: css({
      backgroundColor: 'surface.neutral.base',
      border: '1px solid',
      borderColor: 'border.neutral.base',
      color: 'text.neutral.low',
    }),
  };

  return (
    <span
      className={`${variantStyles[variant]} ${css({
        borderRadius: 'full',
        px: '2',
        py: '0.5',
        fontSize: 'xs',
        fontWeight: 'medium',
        whiteSpace: 'nowrap',
      })}`}
    >
      {label}
    </span>
  );
}

type ActionButtonProps = {
  label: string;
  variant: 'outline-positive' | 'outline-warning' | 'outline-info' | 'filled-critical' | 'filled-primary' | 'ghost' | 'ghost-disabled';
};

function ActionButton({ label, variant }: ActionButtonProps) {
  const variantMap: Record<ActionButtonProps['variant'], string> = {
    'outline-positive': css({
      backgroundColor: 'surface.neutral.transparent',
      border: '1px solid',
      borderColor: 'border.positive.highest',
      color: 'text.positive.base',
      borderRadius: 'md',
      px: '3',
      py: '1',
      fontSize: 'xs',
      cursor: 'pointer',
    }),
    'outline-warning': css({
      backgroundColor: 'surface.neutral.transparent',
      border: '1px solid',
      borderColor: 'border.warning.highest',
      color: 'text.warning.base',
      borderRadius: 'md',
      px: '3',
      py: '1',
      fontSize: 'xs',
      cursor: 'pointer',
    }),
    'outline-info': css({
      backgroundColor: 'surface.neutral.transparent',
      border: '1px solid',
      borderColor: 'border.info.highest',
      color: 'text.info.base',
      borderRadius: 'md',
      px: '3',
      py: '1',
      fontSize: 'xs',
      cursor: 'pointer',
    }),
    'filled-critical': css({
      backgroundColor: 'fill.critical.base',
      border: 'none',
      color: 'inverse.text.base',
      borderRadius: 'md',
      px: '3',
      py: '1',
      fontSize: 'xs',
      cursor: 'pointer',
    }),
    'filled-primary': css({
      backgroundColor: 'fill.primary.base',
      border: 'none',
      color: 'inverse.text.base',
      borderRadius: 'md',
      px: '3',
      py: '1',
      fontSize: 'xs',
      cursor: 'pointer',
    }),
    ghost: css({
      backgroundColor: 'surface.neutral.transparent',
      border: 'none',
      color: 'text.neutral.base',
      borderRadius: 'md',
      px: '3',
      py: '1',
      fontSize: 'xs',
      cursor: 'pointer',
    }),
    'ghost-disabled': css({
      backgroundColor: 'surface.neutral.transparent',
      border: 'none',
      color: 'text.neutral.base',
      borderRadius: 'md',
      px: '3',
      py: '1',
      fontSize: 'xs',
      cursor: 'not-allowed',
      opacity: 0.38,
    }),
  };

  return (
    <button className={variantMap[variant]} disabled={variant === 'ghost-disabled'}>
      {label}
    </button>
  );
}

// ─── Individual notification cards ───────────────────────────────────────────

// Card 1 — success, unread
function Card1() {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        backgroundColor: 'surface.primary.base',
        borderRadius: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.neutral.low',
      })}
    >
      {/* Left accent */}
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
          backgroundColor: 'fill.positive.base',
        })}
      />

      <div className={css({ flex: 1, p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <CheckCircle2
            size={20}
            className={css({ color: 'icon.positive.base', flexShrink: 0, mt: '0.5' })}
          />

          <div className={css({ flex: 1, minWidth: 0 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2', mb: '1' })}>
              <span className={css({ fontWeight: 'semibold', fontSize: 'sm', color: 'text.neutral.base' })}>
                배포 v2.4.1 완료
              </span>
              <button
                className={css({
                  backgroundColor: 'surface.neutral.transparent',
                  border: 'none',
                  borderRadius: 'md',
                  p: '1',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <X size={14} className={css({ color: 'icon.neutral.base' })} />
              </button>
            </div>

            <p
              className={css({
                fontSize: 'xs',
                color: 'text.neutral.base',
                mb: '3',
                opacity: 0.38,
              })}
            >
              프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
            </p>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'text.neutral.base', opacity: 0.38 })}>방금 전</span>
              <Badge label="완료됨" variant="outline-positive" />
              <ActionButton label="배포 로그 보기" variant="outline-positive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card 2 — critical, unread
function Card2() {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        backgroundColor: 'surface.primary.base',
        borderRadius: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.neutral.low',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
          backgroundColor: 'fill.critical.base',
        })}
      />

      <div className={css({ flex: 1, p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <XCircle
            size={20}
            className={css({ color: 'icon.critical.base', flexShrink: 0, mt: '0.5' })}
          />

          <div className={css({ flex: 1, minWidth: 0 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2', mb: '1' })}>
              <span className={css({ fontWeight: 'semibold', fontSize: 'sm', color: 'text.neutral.base' })}>
                DB 연결 오류
              </span>
              <button
                className={css({
                  backgroundColor: 'surface.neutral.transparent',
                  border: 'none',
                  borderRadius: 'md',
                  p: '1',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <X size={14} className={css({ color: 'icon.neutral.base' })} />
              </button>
            </div>

            <p
              className={css({
                fontSize: 'xs',
                color: 'text.neutral.base',
                mb: '3',
                opacity: 0.38,
              })}
            >
              데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
            </p>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'text.neutral.base', opacity: 0.38 })}>3분 전</span>
              <Badge label="즉시 확인" variant="filled-critical" />
              <ActionButton label="상세 보기" variant="filled-critical" />
              <ActionButton label="무시" variant="ghost-disabled" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card 3 — warning, unread
function Card3() {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        backgroundColor: 'surface.primary.base',
        borderRadius: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.neutral.low',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
          backgroundColor: 'fill.warning.base',
        })}
      />

      <div className={css({ flex: 1, p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <AlertTriangle
            size={20}
            className={css({ color: 'icon.warning.base', flexShrink: 0, mt: '0.5' })}
          />

          <div className={css({ flex: 1, minWidth: 0 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2', mb: '1' })}>
              <span className={css({ fontWeight: 'semibold', fontSize: 'sm', color: 'text.neutral.base' })}>
                메모리 사용량 경고
              </span>
              <button
                className={css({
                  backgroundColor: 'surface.neutral.transparent',
                  border: 'none',
                  borderRadius: 'md',
                  p: '1',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <X size={14} className={css({ color: 'icon.neutral.base' })} />
              </button>
            </div>

            <p
              className={css({
                fontSize: 'xs',
                color: 'text.neutral.base',
                mb: '3',
                opacity: 0.38,
              })}
            >
              서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
            </p>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'text.neutral.base', opacity: 0.38 })}>15분 전</span>
              <Badge label="주의" variant="outline-warning" />
              <ActionButton label="리소스 모니터 열기" variant="outline-warning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card 4 — info, unread
function Card4() {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        backgroundColor: 'surface.primary.base',
        borderRadius: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.neutral.low',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
          backgroundColor: 'fill.info.base',
        })}
      />

      <div className={css({ flex: 1, p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Info
            size={20}
            className={css({ color: 'icon.info.base', flexShrink: 0, mt: '0.5' })}
          />

          <div className={css({ flex: 1, minWidth: 0 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2', mb: '1' })}>
              <span className={css({ fontWeight: 'semibold', fontSize: 'sm', color: 'text.neutral.base' })}>
                시스템 점검 예정
              </span>
              <button
                className={css({
                  backgroundColor: 'surface.neutral.transparent',
                  border: 'none',
                  borderRadius: 'md',
                  p: '1',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <X size={14} className={css({ color: 'icon.neutral.base' })} />
              </button>
            </div>

            <p
              className={css({
                fontSize: 'xs',
                color: 'text.neutral.base',
                mb: '3',
                opacity: 0.38,
              })}
            >
              2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
            </p>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'text.neutral.base', opacity: 0.38 })}>1시간 전</span>
              <Badge label="안내" variant="outline-info" />
              <ActionButton label="일정 확인" variant="outline-info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card 5 — primary/feature, unread
function Card5() {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        backgroundColor: 'surface.primary.base',
        borderRadius: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.neutral.low',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
          backgroundColor: 'fill.primary.base',
        })}
      />

      <div className={css({ flex: 1, p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Zap
            size={20}
            className={css({ color: 'icon.primary.base', flexShrink: 0, mt: '0.5' })}
          />

          <div className={css({ flex: 1, minWidth: 0 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2', mb: '1' })}>
              <span className={css({ fontWeight: 'semibold', fontSize: 'sm', color: 'text.neutral.base' })}>
                새 기능 출시
              </span>
              <button
                className={css({
                  backgroundColor: 'surface.neutral.transparent',
                  border: 'none',
                  borderRadius: 'md',
                  p: '1',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <X size={14} className={css({ color: 'icon.neutral.base' })} />
              </button>
            </div>

            <p
              className={css({
                fontSize: 'xs',
                color: 'text.neutral.base',
                mb: '3',
                opacity: 0.38,
              })}
            >
              대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
            </p>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'text.neutral.base', opacity: 0.38 })}>2시간 전</span>
              <Badge label="새 기능" variant="filled-primary" />
              <ActionButton label="지금 확인" variant="filled-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card 6 — success, read
function Card6() {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        backgroundColor: 'canvas.neutral.01',
        borderRadius: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.neutral.low',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
          backgroundColor: 'fill.positive.base',
          opacity: 0.38,
        })}
      />

      <div className={css({ flex: 1, p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <CheckCircle2
            size={20}
            className={css({ color: 'icon.positive.base', flexShrink: 0, mt: '0.5', opacity: 0.38 })}
          />

          <div className={css({ flex: 1, minWidth: 0 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2', mb: '1' })}>
              <span className={css({ fontWeight: 'medium', fontSize: 'sm', color: 'text.neutral.low' })}>
                결제 처리 완료
              </span>
              <button
                className={css({
                  backgroundColor: 'surface.neutral.transparent',
                  border: 'none',
                  borderRadius: 'md',
                  p: '1',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <X size={14} className={css({ color: 'icon.neutral.base' })} />
              </button>
            </div>

            <p
              className={css({
                fontSize: 'xs',
                color: 'text.neutral.base',
                mb: '3',
                opacity: 0.38,
              })}
            >
              Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
            </p>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'text.neutral.base', opacity: 0.38 })}>어제</span>
              <span
                className={css({
                  backgroundColor: 'surface.positive.base',
                  border: '1px solid',
                  borderColor: 'border.positive.base',
                  color: 'text.positive.base',
                  borderRadius: 'full',
                  px: '2',
                  py: '0.5',
                  fontSize: 'xs',
                  opacity: 0.38,
                })}
              >
                완료됨
              </span>
              <ActionButton label="영수증 보기" variant="ghost-disabled" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card 7 — warning, read
function Card7() {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        backgroundColor: 'canvas.neutral.01',
        borderRadius: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.neutral.low',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
          backgroundColor: 'fill.warning.base',
          opacity: 0.38,
        })}
      />

      <div className={css({ flex: 1, p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <AlertCircle
            size={20}
            className={css({ color: 'icon.warning.base', flexShrink: 0, mt: '0.5', opacity: 0.38 })}
          />

          <div className={css({ flex: 1, minWidth: 0 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2', mb: '1' })}>
              <span className={css({ fontWeight: 'medium', fontSize: 'sm', color: 'text.neutral.low' })}>
                API 응답 지연 감지
              </span>
              <button
                className={css({
                  backgroundColor: 'surface.neutral.transparent',
                  border: 'none',
                  borderRadius: 'md',
                  p: '1',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <X size={14} className={css({ color: 'icon.neutral.base' })} />
              </button>
            </div>

            <p
              className={css({
                fontSize: 'xs',
                color: 'text.neutral.base',
                mb: '3',
                opacity: 0.38,
              })}
            >
              결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
            </p>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'text.neutral.base', opacity: 0.38 })}>2일 전</span>
              <Badge label="처리됨" variant="neutral" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card 8 — info, read
function Card8() {
  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        backgroundColor: 'canvas.neutral.01',
        borderRadius: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.neutral.low',
      })}
    >
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
          backgroundColor: 'fill.info.base',
          opacity: 0.38,
        })}
      />

      <div className={css({ flex: 1, p: '4' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Info
            size={20}
            className={css({ color: 'icon.info.base', flexShrink: 0, mt: '0.5', opacity: 0.38 })}
          />

          <div className={css({ flex: 1, minWidth: 0 })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2', mb: '1' })}>
              <span className={css({ fontWeight: 'medium', fontSize: 'sm', color: 'text.neutral.low' })}>
                약관 업데이트 안내
              </span>
              <button
                className={css({
                  backgroundColor: 'surface.neutral.transparent',
                  border: 'none',
                  borderRadius: 'md',
                  p: '1',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <X size={14} className={css({ color: 'icon.neutral.base' })} />
              </button>
            </div>

            <p
              className={css({
                fontSize: 'xs',
                color: 'text.neutral.base',
                mb: '3',
                opacity: 0.38,
              })}
            >
              서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
            </p>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
              <span className={css({ fontSize: 'xs', color: 'text.neutral.base', opacity: 0.38 })}>3일 전</span>
              <Badge label="안내" variant="neutral" />
              <ActionButton label="약관 보기" variant="ghost" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div
      className={css({
        backgroundColor: 'canvas.neutral.02',
        border: '1px solid',
        borderColor: 'border.neutral.base',
        borderRadius: 'lg',
        p: '8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3',
        textAlign: 'center',
      })}
    >
      <BellOff
        size={32}
        className={css({ color: 'icon.neutral.base', opacity: 0.38 })}
      />
      <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'text.neutral.low' })}>
        모든 알림을 확인했습니다
      </p>
      <p
        className={css({
          fontSize: 'xs',
          color: 'text.neutral.base',
          opacity: 0.38,
        })}
      >
        새로운 알림이 도착하면 여기에 표시됩니다.
      </p>
    </div>
  );
}

// ─── Notification list ────────────────────────────────────────────────────────

function NotificationList() {
  return (
    <main
      className={css({
        flex: 1,
        overflowY: 'auto',
        backgroundColor: 'canvas.neutral.02',
        p: '6',
        display: 'flex',
        flexDirection: 'column',
        gap: '3',
      })}
    >
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />

      {/* Divider before empty state */}
      <hr
        className={css({
          border: 'none',
          borderTop: '1px solid',
          borderTopColor: 'border.neutral.low',
          my: '2',
        })}
      />

      <EmptyState />
    </main>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  return (
    <div
      className={css({
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'canvas.neutral.01',
        overflow: 'hidden',
      })}
    >
      <Header />

      <div
        className={css({
          flex: 1,
          display: 'flex',
          overflow: 'hidden',
        })}
      >
        <FilterSidebar />
        <NotificationList />
      </div>
    </div>
  );
}
