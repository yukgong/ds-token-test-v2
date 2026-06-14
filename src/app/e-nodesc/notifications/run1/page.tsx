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
    <header
      className={css({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'neutral.canvas.01',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'neutral.border.base',
      })}
    >
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
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              color: 'neutral.text.base',
            })}
          >
            알림 센터
          </span>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <button
            className={css({
              opacity: 0.38,
              px: '3',
              py: '1.5',
              borderRadius: 'md',
              fontSize: 'sm',
              color: 'neutral.text.base',
              backgroundColor: 'neutral.surface.transparent',
              cursor: 'not-allowed',
            })}
            disabled
          >
            모두 읽음 처리
          </button>
          <button
            className={css({
              p: '2',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              backgroundColor: 'neutral.surface.transparent',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div
        className={css({
          display: 'flex',
          px: '6',
          gap: '1',
        })}
      >
        {/* Active tab */}
        <button
          className={css({
            px: '4',
            py: '2',
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'primary.text.base',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'primary.border.base',
          })}
        >
          전체
        </button>
        {/* Inactive tabs */}
        <button
          className={css({
            px: '4',
            py: '2',
            fontSize: 'sm',
            color: 'neutral.text.base',
            opacity: 0.38,
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'neutral.border.transparent',
          })}
        >
          읽지 않음
        </button>
        <button
          className={css({
            px: '4',
            py: '2',
            fontSize: 'sm',
            color: 'neutral.text.base',
            opacity: 0.38,
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'neutral.border.transparent',
          })}
        >
          완료됨
        </button>
      </div>
    </header>
  );
}

// ── Sidebar counter card ─────────────────────────────────────────────────────

type CounterCardProps = {
  icon: React.ReactNode;
  count: string;
  label: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
  countColor: string;
};

function CounterCard({
  icon,
  count,
  label,
  bgColor,
  borderColor,
  iconColor,
  countColor,
}: CounterCardProps) {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '3',
        p: '3',
        borderRadius: 'md',
        borderWidth: '1px',
        borderStyle: 'solid',
      })}
      style={{
        // We use inline class composition via dynamic values below
      }}
    >
      {/* Workaround: render using separate wrapper spans so css() stays pure */}
      <span className={iconColor}>{icon}</span>
      <div>
        <div className={countColor + ' ' + css({ fontSize: 'xl', fontWeight: 'bold' })}>
          {count}
        </div>
        <div className={css({ fontSize: 'xs', color: 'neutral.text.low' })}>{label}</div>
      </div>
    </div>
  );
}

// ── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside
      className={css({
        width: '200px',
        flexShrink: 0,
        backgroundColor: 'neutral.canvas.02',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'neutral.border.base',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        overflowY: 'auto',
      })}
    >
      <div className={css({ p: '4', display: 'flex', flexDirection: 'column', gap: '3' })}>
        {/* Unread counter card */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            p: '3',
            borderRadius: 'md',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: 'primary.surface.base',
            borderColor: 'primary.border.base',
          })}
        >
          <Bell size={18} className={css({ color: 'primary.icon.base' })} />
          <div>
            <div className={css({ fontSize: 'xl', fontWeight: 'bold', color: 'primary.text.base' })}>8</div>
            <div className={css({ fontSize: 'xs', color: 'neutral.text.low' })}>읽지 않음</div>
          </div>
        </div>

        {/* Critical counter card */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            p: '3',
            borderRadius: 'md',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: 'critical.surface.base',
            borderColor: 'critical.border.base',
          })}
        >
          <AlertCircle size={18} className={css({ color: 'critical.icon.base' })} />
          <div>
            <div className={css({ fontSize: 'xl', fontWeight: 'bold', color: 'critical.text.base' })}>2</div>
            <div className={css({ fontSize: 'xs', color: 'neutral.text.low' })}>즉시 확인</div>
          </div>
        </div>

        {/* Warning counter card */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            p: '3',
            borderRadius: 'md',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: 'warning.surface.base',
            borderColor: 'warning.border.base',
          })}
        >
          <AlertTriangle size={18} className={css({ color: 'warning.icon.base' })} />
          <div>
            <div className={css({ fontSize: 'xl', fontWeight: 'bold', color: 'warning.text.base' })}>3</div>
            <div className={css({ fontSize: 'xs', color: 'neutral.text.low' })}>주의 필요</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr
        className={css({
          borderColor: 'neutral.border.low',
          mx: '4',
          my: '1',
        })}
      />

      {/* Category filters */}
      <nav className={css({ p: '4', display: 'flex', flexDirection: 'column', gap: '1' })}>
        {/* Selected */}
        <button
          className={css({
            px: '3',
            py: '1.5',
            borderRadius: 'full',
            fontSize: 'sm',
            fontWeight: 'medium',
            textAlign: 'left',
            backgroundColor: 'primary.fill.base',
            color: 'inverse.text.base',
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
              borderRadius: 'full',
              fontSize: 'sm',
              textAlign: 'left',
              backgroundColor: 'neutral.surface.base',
              color: 'neutral.text.base',
              _hover: { backgroundColor: 'neutral.surface.high' },
            })}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

// ── Badge ────────────────────────────────────────────────────────────────────

type BadgeVariant = 'positive' | 'critical-filled' | 'warning' | 'info' | 'primary-filled' | 'neutral';

function Badge({ label, variant }: { label: string; variant: BadgeVariant }) {
  const styles: Record<BadgeVariant, string> = {
    positive: css({
      display: 'inline-flex',
      alignItems: 'center',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
      backgroundColor: 'positive.surface.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'positive.border.base',
      color: 'positive.text.base',
    }),
    'critical-filled': css({
      display: 'inline-flex',
      alignItems: 'center',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
      backgroundColor: 'critical.fill.base',
      color: 'inverse.text.base',
    }),
    warning: css({
      display: 'inline-flex',
      alignItems: 'center',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
      backgroundColor: 'warning.surface.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'warning.border.base',
      color: 'warning.text.base',
    }),
    info: css({
      display: 'inline-flex',
      alignItems: 'center',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
      backgroundColor: 'info.surface.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'info.border.base',
      color: 'info.text.base',
    }),
    'primary-filled': css({
      display: 'inline-flex',
      alignItems: 'center',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
      backgroundColor: 'primary.fill.base',
      color: 'inverse.text.base',
    }),
    neutral: css({
      display: 'inline-flex',
      alignItems: 'center',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
      backgroundColor: 'neutral.surface.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'neutral.border.base',
      color: 'neutral.text.base',
    }),
  };
  return <span className={styles[variant]}>{label}</span>;
}

// ── Notification cards ───────────────────────────────────────────────────────

// Card 1 — positive / unread
function Card1() {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        position: 'relative',
      })}
    >
      {/* Left accent border */}
      <div className={css({ width: '4px', flexShrink: 0, backgroundColor: 'positive.fill.base' })} />
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <CheckCircle2 size={20} className={css({ color: 'positive.icon.base', flexShrink: 0, mt: '0.5' })} />
          <div className={css({ flex: 1 })}>
            <div className={css({ fontWeight: 'semibold', color: 'positive.text.base', fontSize: 'sm' })}>
              배포 v2.4.1 완료
            </div>
            <div className={css({ fontSize: 'sm', color: 'neutral.text.base', opacity: 0.38, mt: '1' })}>
              프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
            </div>
          </div>
          <button
            className={css({
              p: '1',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <X size={14} />
          </button>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', pl: '8' })}>
          <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38 })}>방금 전</span>
          <Badge label="완료됨" variant="positive" />
          <button
            className={css({
              px: '3',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              fontWeight: 'medium',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'positive.border.base',
              color: 'positive.text.base',
              backgroundColor: 'neutral.surface.transparent',
              _hover: { backgroundColor: 'positive.surface.base' },
            })}
          >
            배포 로그 보기
          </button>
        </div>
      </div>
    </div>
  );
}

// Card 2 — critical / unread
function Card2() {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        position: 'relative',
      })}
    >
      <div className={css({ width: '4px', flexShrink: 0, backgroundColor: 'critical.fill.base' })} />
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <XCircle size={20} className={css({ color: 'critical.icon.base', flexShrink: 0, mt: '0.5' })} />
          <div className={css({ flex: 1 })}>
            <div className={css({ fontWeight: 'semibold', color: 'critical.text.base', fontSize: 'sm' })}>
              DB 연결 오류
            </div>
            <div className={css({ fontSize: 'sm', color: 'neutral.text.base', opacity: 0.38, mt: '1' })}>
              데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
            </div>
          </div>
          <button
            className={css({
              p: '1',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <X size={14} />
          </button>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', pl: '8' })}>
          <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38 })}>3분 전</span>
          <Badge label="즉시 확인" variant="critical-filled" />
          <button
            className={css({
              px: '3',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              fontWeight: 'medium',
              backgroundColor: 'critical.fill.base',
              color: 'inverse.text.base',
              _hover: { backgroundColor: 'critical.fill.base', opacity: 0.9 },
            })}
          >
            상세 보기
          </button>
          <button
            className={css({
              px: '3',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              color: 'neutral.text.base',
              opacity: 0.38,
              cursor: 'not-allowed',
            })}
            disabled
          >
            무시
          </button>
        </div>
      </div>
    </div>
  );
}

// Card 3 — warning / unread
function Card3() {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        position: 'relative',
      })}
    >
      <div className={css({ width: '4px', flexShrink: 0, backgroundColor: 'warning.fill.base' })} />
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <AlertTriangle size={20} className={css({ color: 'warning.icon.base', flexShrink: 0, mt: '0.5' })} />
          <div className={css({ flex: 1 })}>
            <div className={css({ fontWeight: 'semibold', color: 'warning.text.base', fontSize: 'sm' })}>
              메모리 사용량 경고
            </div>
            <div className={css({ fontSize: 'sm', color: 'neutral.text.base', opacity: 0.38, mt: '1' })}>
              서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
            </div>
          </div>
          <button
            className={css({
              p: '1',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <X size={14} />
          </button>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', pl: '8' })}>
          <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38 })}>15분 전</span>
          <Badge label="주의" variant="warning" />
          <button
            className={css({
              px: '3',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              fontWeight: 'medium',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'warning.border.base',
              color: 'warning.text.base',
              backgroundColor: 'neutral.surface.transparent',
              _hover: { backgroundColor: 'warning.surface.base' },
            })}
          >
            리소스 모니터 열기
          </button>
        </div>
      </div>
    </div>
  );
}

// Card 4 — info / unread
function Card4() {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        position: 'relative',
      })}
    >
      <div className={css({ width: '4px', flexShrink: 0, backgroundColor: 'info.fill.base' })} />
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Info size={20} className={css({ color: 'info.icon.base', flexShrink: 0, mt: '0.5' })} />
          <div className={css({ flex: 1 })}>
            <div className={css({ fontWeight: 'semibold', color: 'info.text.base', fontSize: 'sm' })}>
              시스템 점검 예정
            </div>
            <div className={css({ fontSize: 'sm', color: 'neutral.text.base', opacity: 0.38, mt: '1' })}>
              2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
            </div>
          </div>
          <button
            className={css({
              p: '1',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <X size={14} />
          </button>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', pl: '8' })}>
          <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38 })}>1시간 전</span>
          <Badge label="안내" variant="info" />
          <button
            className={css({
              px: '3',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              fontWeight: 'medium',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'info.border.base',
              color: 'info.text.base',
              backgroundColor: 'neutral.surface.transparent',
              _hover: { backgroundColor: 'info.surface.base' },
            })}
          >
            일정 확인
          </button>
        </div>
      </div>
    </div>
  );
}

// Card 5 — primary / unread
function Card5() {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'primary.surface.base',
        position: 'relative',
      })}
    >
      <div className={css({ width: '4px', flexShrink: 0, backgroundColor: 'primary.fill.base' })} />
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Zap size={20} className={css({ color: 'primary.icon.base', flexShrink: 0, mt: '0.5' })} />
          <div className={css({ flex: 1 })}>
            <div className={css({ fontWeight: 'semibold', color: 'primary.text.base', fontSize: 'sm' })}>
              새 기능 출시
            </div>
            <div className={css({ fontSize: 'sm', color: 'neutral.text.base', opacity: 0.38, mt: '1' })}>
              대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
            </div>
          </div>
          <button
            className={css({
              p: '1',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <X size={14} />
          </button>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', pl: '8' })}>
          <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38 })}>2시간 전</span>
          <Badge label="새 기능" variant="primary-filled" />
          <button
            className={css({
              px: '3',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              fontWeight: 'medium',
              backgroundColor: 'primary.fill.base',
              color: 'inverse.text.base',
              _hover: { opacity: 0.9 },
            })}
          >
            지금 확인
          </button>
        </div>
      </div>
    </div>
  );
}

// Card 6 — positive / read
function Card6() {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'neutral.canvas.01',
        position: 'relative',
      })}
    >
      <div className={css({ width: '4px', flexShrink: 0, backgroundColor: 'positive.fill.base', opacity: 0.38 })} />
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <CheckCircle2
            size={20}
            className={css({ color: 'positive.icon.base', flexShrink: 0, mt: '0.5', opacity: 0.38 })}
          />
          <div className={css({ flex: 1 })}>
            <div className={css({ fontWeight: 'semibold', color: 'neutral.text.low', fontSize: 'sm' })}>
              결제 처리 완료
            </div>
            <div className={css({ fontSize: 'sm', color: 'neutral.text.base', opacity: 0.38, mt: '1' })}>
              Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
            </div>
          </div>
          <button
            className={css({
              p: '1',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <X size={14} />
          </button>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', pl: '8' })}>
          <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38 })}>어제</span>
          <Badge label="완료됨" variant="positive" />
          <button
            className={css({
              px: '3',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              color: 'neutral.text.base',
              opacity: 0.38,
              cursor: 'not-allowed',
            })}
            disabled
          >
            영수증 보기
          </button>
        </div>
      </div>
    </div>
  );
}

// Card 7 — warning / read
function Card7() {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'neutral.canvas.01',
        position: 'relative',
      })}
    >
      <div className={css({ width: '4px', flexShrink: 0, backgroundColor: 'warning.fill.base', opacity: 0.38 })} />
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <AlertCircle
            size={20}
            className={css({ color: 'warning.icon.base', flexShrink: 0, mt: '0.5', opacity: 0.38 })}
          />
          <div className={css({ flex: 1 })}>
            <div className={css({ fontWeight: 'semibold', color: 'neutral.text.low', fontSize: 'sm' })}>
              API 응답 지연 감지
            </div>
            <div className={css({ fontSize: 'sm', color: 'neutral.text.base', opacity: 0.38, mt: '1' })}>
              결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
            </div>
          </div>
          <button
            className={css({
              p: '1',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <X size={14} />
          </button>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', pl: '8' })}>
          <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38 })}>2일 전</span>
          <Badge label="처리됨" variant="neutral" />
        </div>
      </div>
    </div>
  );
}

// Card 8 — info / read
function Card8() {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        backgroundColor: 'neutral.canvas.01',
        position: 'relative',
      })}
    >
      <div className={css({ width: '4px', flexShrink: 0, backgroundColor: 'info.fill.base', opacity: 0.38 })} />
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3' })}>
          <Info
            size={20}
            className={css({ color: 'info.icon.base', flexShrink: 0, mt: '0.5', opacity: 0.38 })}
          />
          <div className={css({ flex: 1 })}>
            <div className={css({ fontWeight: 'semibold', color: 'neutral.text.low', fontSize: 'sm' })}>
              약관 업데이트 안내
            </div>
            <div className={css({ fontSize: 'sm', color: 'neutral.text.base', opacity: 0.38, mt: '1' })}>
              서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
            </div>
          </div>
          <button
            className={css({
              p: '1',
              borderRadius: 'md',
              color: 'neutral.icon.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            <X size={14} />
          </button>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', pl: '8' })}>
          <span className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38 })}>3일 전</span>
          <Badge label="안내" variant="neutral" />
          <button
            className={css({
              px: '3',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              color: 'neutral.text.base',
              _hover: { backgroundColor: 'neutral.surface.base' },
            })}
          >
            약관 보기
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Empty state ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3',
        p: '8',
        borderRadius: 'lg',
        backgroundColor: 'neutral.surface.base',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'neutral.border.base',
      })}
    >
      <BellOff size={32} className={css({ color: 'neutral.icon.base', opacity: 0.38 })} />
      <div className={css({ fontWeight: 'medium', color: 'neutral.text.low', fontSize: 'sm' })}>
        모든 알림을 확인했습니다
      </div>
      <div className={css({ fontSize: 'xs', color: 'neutral.text.base', opacity: 0.38, textAlign: 'center' })}>
        새로운 알림이 도착하면 여기에 표시됩니다.
      </div>
    </div>
  );
}

// ── Notification list ────────────────────────────────────────────────────────

function NotificationList() {
  return (
    <main
      className={css({
        flex: 1,
        overflowY: 'auto',
        backgroundColor: 'neutral.canvas.02',
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

      {/* Divider */}
      <hr className={css({ borderColor: 'neutral.border.low', my: '2' })} />

      <EmptyState />
    </main>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

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
      <div className={css({ display: 'flex', flex: 1, overflow: 'hidden' })}>
        <Sidebar />
        <NotificationList />
      </div>
    </div>
  );
}
