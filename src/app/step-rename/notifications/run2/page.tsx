import { css } from '@ds-token-test/styled-system-intent-first-stepnames/css';
import {
  Bell,
  BellOff,
  Settings,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Zap,
  X,
} from 'lucide-react';

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header
      className={css({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'neutral.canvas.01',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'neutral.border.default',
        flexShrink: 0,
      })}
    >
      {/* Top bar */}
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
            className={css({ color: 'neutral.icon.default' })}
          />
          <span
            className={css({
              fontSize: 'xl',
              fontWeight: 'semibold',
              color: 'neutral.text.default',
            })}
          >
            알림 센터
          </span>
        </div>

        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '2',
          })}
        >
          {/* 모두 읽음 처리 — disabled */}
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '1',
              px: '3',
              py: '1.5',
              fontSize: 'sm',
              color: 'neutral.text.default',
              backgroundColor: 'neutral.surface.transparent',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.default',
              borderRadius: 'md',
              opacity: 0.38,
              cursor: 'not-allowed',
            })}
            disabled
          >
            모두 읽음 처리
          </button>

          {/* Settings ghost button */}
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: '2',
              color: 'neutral.icon.default',
              backgroundColor: 'neutral.surface.transparent',
              borderRadius: 'md',
              borderWidth: '0',
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
          gap: '0',
        })}
      >
        {/* Active tab: 전체 */}
        <button
          className={css({
            px: '4',
            py: '2',
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'primary.text.default',
            backgroundColor: 'neutral.surface.transparent',
            borderWidth: '0',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'primary.border.emphasis',
          })}
        >
          전체
        </button>

        {/* Inactive tabs — opacity 0.38 */}
        <button
          className={css({
            px: '4',
            py: '2',
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'neutral.text.default',
            backgroundColor: 'neutral.surface.transparent',
            borderWidth: '0',
            opacity: 0.38,
          })}
        >
          읽지 않음
        </button>

        <button
          className={css({
            px: '4',
            py: '2',
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'neutral.text.default',
            backgroundColor: 'neutral.surface.transparent',
            borderWidth: '0',
            opacity: 0.38,
          })}
        >
          완료됨
        </button>
      </div>
    </header>
  );
}

// ─── Summary counter cards ────────────────────────────────────────────────────
function CounterCard({
  bg,
  border,
  iconColor,
  textColor,
  count,
  label,
  icon,
}: {
  bg: string;
  border: string;
  iconColor: string;
  textColor: string;
  count: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '3',
        p: '3',
        borderRadius: 'lg',
        borderWidth: '1px',
        borderStyle: 'solid',
      })}
      style={
        {
          '--card-bg': `var(--colors-${bg.replace(/\./g, '-')})`,
          '--card-border': `var(--colors-${border.replace(/\./g, '-')})`,
        } as React.CSSProperties
      }
    >
      <div className={css({ flexShrink: 0 })}>{icon}</div>
      <div>
        <div
          className={css({
            fontSize: 'xl',
            fontWeight: 'bold',
            lineHeight: 'tight',
          })}
        >
          {count}
        </div>
        <div className={css({ fontSize: 'xs', mt: '0.5' })}>{label}</div>
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar() {
  const categories = ['시스템', '결제', '배포', '보안', '마케팅'];

  return (
    <aside
      className={css({
        width: '200px',
        flexShrink: 0,
        backgroundColor: 'neutral.canvas.02',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'neutral.border.default',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        py: '4',
        gap: '3',
      })}
    >
      {/* Counter cards */}
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '2',
          px: '3',
        })}
      >
        {/* 읽지 않음 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            p: '3',
            borderRadius: 'lg',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'primary.border.default',
            backgroundColor: 'primary.surface.default',
          })}
        >
          <Bell
            size={18}
            className={css({ color: 'primary.icon.default', flexShrink: 0 })}
          />
          <div>
            <div
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                lineHeight: 'tight',
                color: 'primary.text.default',
              })}
            >
              8
            </div>
            <div
              className={css({
                fontSize: 'xs',
                color: 'primary.text.default',
              })}
            >
              읽지 않음
            </div>
          </div>
        </div>

        {/* 오류/위험 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            p: '3',
            borderRadius: 'lg',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'critical.border.default',
            backgroundColor: 'critical.surface.default',
          })}
        >
          <AlertCircle
            size={18}
            className={css({ color: 'critical.icon.default', flexShrink: 0 })}
          />
          <div>
            <div
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                lineHeight: 'tight',
                color: 'critical.text.default',
              })}
            >
              2
            </div>
            <div
              className={css({
                fontSize: 'xs',
                color: 'critical.text.default',
              })}
            >
              즉시 확인
            </div>
          </div>
        </div>

        {/* 주의 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            p: '3',
            borderRadius: 'lg',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'warning.border.default',
            backgroundColor: 'warning.surface.default',
          })}
        >
          <AlertTriangle
            size={18}
            className={css({ color: 'warning.icon.default', flexShrink: 0 })}
          />
          <div>
            <div
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                lineHeight: 'tight',
                color: 'warning.text.default',
              })}
            >
              3
            </div>
            <div
              className={css({
                fontSize: 'xs',
                color: 'warning.text.default',
              })}
            >
              주의 필요
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr
        className={css({
          borderWidth: '0',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'neutral.border.subtle',
          mx: '3',
        })}
      />

      {/* Category filters */}
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '1',
          px: '3',
        })}
      >
        {/* 전체 — selected */}
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            px: '3',
            py: '1.5',
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'inverse.text.default',
            backgroundColor: 'primary.fill.default',
            borderWidth: '0',
            borderRadius: 'full',
            textAlign: 'left',
          })}
        >
          전체
        </button>

        {/* Unselected categories */}
        {categories.map((cat) => (
          <button
            key={cat}
            className={css({
              display: 'flex',
              alignItems: 'center',
              px: '3',
              py: '1.5',
              fontSize: 'sm',
              color: 'neutral.text.default',
              backgroundColor: 'neutral.surface.default',
              borderWidth: '0',
              borderRadius: 'full',
              textAlign: 'left',
            })}
          >
            {cat}
          </button>
        ))}
      </div>
    </aside>
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────
function Badge({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant:
    | 'positive-outline'
    | 'critical-solid'
    | 'warning-outline'
    | 'info-outline'
    | 'primary-solid'
    | 'neutral-outline';
}) {
  const styles: Record<string, object> = {
    'positive-outline': {
      backgroundColor: 'positive.surface.default',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'positive.border.default',
      color: 'positive.text.default',
    },
    'critical-solid': {
      backgroundColor: 'critical.fill.default',
      borderWidth: '0',
      color: 'inverse.text.default',
    },
    'warning-outline': {
      backgroundColor: 'warning.surface.default',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'warning.border.default',
      color: 'warning.text.default',
    },
    'info-outline': {
      backgroundColor: 'info.surface.default',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'info.border.default',
      color: 'info.text.default',
    },
    'primary-solid': {
      backgroundColor: 'primary.fill.default',
      borderWidth: '0',
      color: 'inverse.text.default',
    },
    'neutral-outline': {
      backgroundColor: 'neutral.surface.default',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'neutral.border.default',
      color: 'neutral.text.subtle',
    },
  };

  return (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        px: '2',
        py: '0.5',
        fontSize: 'xs',
        fontWeight: 'medium',
        borderRadius: 'full',
        ...styles[variant],
      })}
    >
      {children}
    </span>
  );
}

// ─── Notification Card ────────────────────────────────────────────────────────
type NotificationCardProps = {
  accentBg: string;
  accentOpacity?: number;
  cardBg: string;
  icon: React.ReactNode;
  title: string;
  titleColor: string;
  body: string;
  time: string;
  badge: React.ReactNode;
  actions: React.ReactNode;
};

function NotificationCard({
  accentBg,
  accentOpacity,
  cardBg,
  icon,
  title,
  titleColor,
  body,
  time,
  badge,
  actions,
}: NotificationCardProps) {
  return (
    <div
      className={css({
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        position: 'relative',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'neutral.border.subtle',
      })}
    >
      {/* Left accent border */}
      <div
        className={css({
          width: '4px',
          flexShrink: 0,
        })}
        style={{
          backgroundColor: `var(--colors-${accentBg.replace(/\./g, '-')})`,
          opacity: accentOpacity ?? 1,
        }}
      />

      {/* Card body */}
      <div
        className={css({
          flex: 1,
          p: '4',
          pr: '10',
        })}
        style={{
          backgroundColor: `var(--colors-${cardBg.replace(/\./g, '-')})`,
        }}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'flex-start',
            gap: '3',
          })}
        >
          {/* Icon */}
          <div className={css({ flexShrink: 0, mt: '0.5' })}>{icon}</div>

          {/* Content */}
          <div className={css({ flex: 1, minWidth: 0 })}>
            <p
              className={css({
                fontSize: 'sm',
                fontWeight: 'semibold',
                lineHeight: 'snug',
                mb: '1',
              })}
              style={{
                color: `var(--colors-${titleColor.replace(/\./g, '-')})`,
              }}
            >
              {title}
            </p>
            <p
              className={css({
                fontSize: 'xs',
                color: 'neutral.text.default',
                lineHeight: 'relaxed',
                mb: '3',
                opacity: 0.38,
              })}
            >
              {body}
            </p>

            {/* Footer */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2',
              })}
            >
              <span
                className={css({
                  fontSize: 'xs',
                  color: 'neutral.text.subtle',
                  opacity: 0.38,
                })}
              >
                {time}
              </span>
              {badge}
              {actions}
            </div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        className={css({
          position: 'absolute',
          top: '3',
          right: '3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: '1',
          color: 'neutral.icon.default',
          backgroundColor: 'neutral.surface.transparent',
          borderWidth: '0',
          borderRadius: 'md',
        })}
      >
        <X size={14} />
      </button>
    </div>
  );
}

// ─── Outline Action Button ────────────────────────────────────────────────────
function OutlineBtn({
  children,
  intent,
  disabled,
}: {
  children: React.ReactNode;
  intent: 'positive' | 'critical' | 'warning' | 'info' | 'primary' | 'neutral';
  disabled?: boolean;
}) {
  const colorMap: Record<string, string> = {
    positive: 'positive',
    critical: 'critical',
    warning: 'warning',
    info: 'info',
    primary: 'primary',
    neutral: 'neutral',
  };

  const pfx = colorMap[intent];

  return (
    <button
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        px: '2.5',
        py: '1',
        fontSize: 'xs',
        fontWeight: 'medium',
        borderRadius: 'md',
        borderWidth: '1px',
        borderStyle: 'solid',
      })}
      style={{
        backgroundColor: 'transparent',
        borderColor: `var(--colors-${pfx}-border-emphasis)`,
        color: `var(--colors-${pfx}-text-default)`,
        opacity: disabled ? 0.38 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// ─── Filled Action Button ─────────────────────────────────────────────────────
function FilledBtn({
  children,
  intent,
  disabled,
}: {
  children: React.ReactNode;
  intent: 'critical' | 'primary';
  disabled?: boolean;
}) {
  const pfx = intent;
  return (
    <button
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        px: '2.5',
        py: '1',
        fontSize: 'xs',
        fontWeight: 'medium',
        borderRadius: 'md',
        borderWidth: '0',
      })}
      style={{
        backgroundColor: `var(--colors-${pfx}-fill-default)`,
        color: `var(--colors-inverse-text-default)`,
        opacity: disabled ? 0.38 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// ─── Ghost Action Button ──────────────────────────────────────────────────────
function GhostBtn({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        px: '2.5',
        py: '1',
        fontSize: 'xs',
        fontWeight: 'medium',
        color: 'neutral.text.subtle',
        backgroundColor: 'neutral.surface.transparent',
        borderWidth: '0',
        borderRadius: 'md',
      })}
      style={{
        opacity: disabled ? 0.38 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// ─── Notification List ────────────────────────────────────────────────────────
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
      {/* Card 1 — 정상 완료 (읽지 않음) */}
      <NotificationCard
        accentBg="positive.fill.default"
        cardBg="primary.surface.default"
        icon={
          <CheckCircle2
            size={18}
            className={css({ color: 'positive.icon.default' })}
          />
        }
        title="배포 v2.4.1 완료"
        titleColor="neutral.text.default"
        body="프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다."
        time="방금 전"
        badge={<Badge variant="positive-outline">완료됨</Badge>}
        actions={
          <OutlineBtn intent="positive">배포 로그 보기</OutlineBtn>
        }
      />

      {/* Card 2 — 심각한 문제 (읽지 않음) */}
      <NotificationCard
        accentBg="critical.fill.default"
        cardBg="primary.surface.default"
        icon={
          <XCircle
            size={18}
            className={css({ color: 'critical.icon.default' })}
          />
        }
        title="DB 연결 오류"
        titleColor="neutral.text.default"
        body="데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요."
        time="3분 전"
        badge={<Badge variant="critical-solid">즉시 확인</Badge>}
        actions={
          <>
            <FilledBtn intent="critical">상세 보기</FilledBtn>
            <GhostBtn disabled>무시</GhostBtn>
          </>
        }
      />

      {/* Card 3 — 주의 필요 (읽지 않음) */}
      <NotificationCard
        accentBg="warning.fill.default"
        cardBg="primary.surface.default"
        icon={
          <AlertTriangle
            size={18}
            className={css({ color: 'warning.icon.default' })}
          />
        }
        title="메모리 사용량 경고"
        titleColor="neutral.text.default"
        body="서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다."
        time="15분 전"
        badge={<Badge variant="warning-outline">주의</Badge>}
        actions={<OutlineBtn intent="warning">리소스 모니터 열기</OutlineBtn>}
      />

      {/* Card 4 — 일반 안내 (읽지 않음) */}
      <NotificationCard
        accentBg="info.fill.default"
        cardBg="primary.surface.default"
        icon={
          <Info
            size={18}
            className={css({ color: 'info.icon.default' })}
          />
        }
        title="시스템 점검 예정"
        titleColor="neutral.text.default"
        body="2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다."
        time="1시간 전"
        badge={<Badge variant="info-outline">안내</Badge>}
        actions={<OutlineBtn intent="info">일정 확인</OutlineBtn>}
      />

      {/* Card 5 — 메인 컬러/기능 (읽지 않음) */}
      <NotificationCard
        accentBg="primary.fill.default"
        cardBg="primary.surface.default"
        icon={
          <Zap
            size={18}
            className={css({ color: 'primary.icon.default' })}
          />
        }
        title="새 기능 출시"
        titleColor="neutral.text.default"
        body="대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요."
        time="2시간 전"
        badge={<Badge variant="primary-solid">새 기능</Badge>}
        actions={<FilledBtn intent="primary">지금 확인</FilledBtn>}
      />

      {/* Card 6 — 정상 완료 (읽음) */}
      <NotificationCard
        accentBg="positive.fill.default"
        accentOpacity={0.38}
        cardBg="neutral.canvas.01"
        icon={
          <CheckCircle2
            size={18}
            className={css({ color: 'positive.icon.default', opacity: 0.38 })}
          />
        }
        title="결제 처리 완료"
        titleColor="neutral.text.subtle"
        body="Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다."
        time="어제"
        badge={
          <span
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              px: '2',
              py: '0.5',
              fontSize: 'xs',
              fontWeight: 'medium',
              borderRadius: 'full',
              backgroundColor: 'positive.surface.default',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'positive.border.default',
              color: 'positive.text.default',
              opacity: 0.38,
            })}
          >
            완료됨
          </span>
        }
        actions={<GhostBtn disabled>영수증 보기</GhostBtn>}
      />

      {/* Card 7 — 주의 필요 (읽음) */}
      <NotificationCard
        accentBg="warning.fill.default"
        accentOpacity={0.38}
        cardBg="neutral.canvas.01"
        icon={
          <AlertCircle
            size={18}
            className={css({ color: 'warning.icon.default', opacity: 0.38 })}
          />
        }
        title="API 응답 지연 감지"
        titleColor="neutral.text.subtle"
        body="결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)"
        time="2일 전"
        badge={<Badge variant="neutral-outline">처리됨</Badge>}
        actions={null}
      />

      {/* Card 8 — 일반 안내 (읽음) */}
      <NotificationCard
        accentBg="info.fill.default"
        accentOpacity={0.38}
        cardBg="neutral.canvas.01"
        icon={
          <Info
            size={18}
            className={css({ color: 'info.icon.default', opacity: 0.38 })}
          />
        }
        title="약관 업데이트 안내"
        titleColor="neutral.text.subtle"
        body="서비스 이용약관이 2025년 7월 1일부로 변경됩니다."
        time="3일 전"
        badge={<Badge variant="neutral-outline">안내</Badge>}
        actions={<GhostBtn>약관 보기</GhostBtn>}
      />

      {/* Divider */}
      <hr
        className={css({
          borderWidth: '0',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'neutral.border.default',
          my: '2',
        })}
      />

      {/* Empty state */}
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2',
          py: '8',
          px: '6',
          backgroundColor: 'neutral.canvas.02',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'neutral.border.default',
          borderRadius: 'xl',
        })}
      >
        <BellOff
          size={32}
          className={css({ color: 'neutral.icon.default', opacity: 0.38 })}
        />
        <p
          className={css({
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'neutral.text.subtle',
          })}
        >
          모든 알림을 확인했습니다
        </p>
        <p
          className={css({
            fontSize: 'xs',
            color: 'neutral.text.subtle',
            opacity: 0.38,
          })}
        >
          새로운 알림이 생기면 여기에 표시됩니다.
        </p>
      </div>
    </main>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'neutral.canvas.01',
        fontFamily: 'sans-serif',
      })}
    >
      <Header />

      <div
        className={css({
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
        })}
      >
        <Sidebar />
        <NotificationList />
      </div>
    </div>
  );
}
